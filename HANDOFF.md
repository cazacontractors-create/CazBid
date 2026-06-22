# CazBid — Handoff / Status

**Read this first.** It captures the current state of the Netlify Blobs 500 work so a
fresh session has the full context, not just the code.

Branch: `claude/cazbid-blobs-500-error-xlcvx5`

---

## TL;DR

The "Blobs 500" was **diagnosed and fixed**. The fix is committed on this branch.
What remains is to **deploy this branch** and **verify** with the `blob-check` endpoint.

---

## What CazBid is

A self-contained estimating app for Caza Contractors.

- **Frontend:** `app.src.jsx` (React, classic runtime) is compiled by `build.mjs`
  (`npm run build`) into a single `dist/index.html`. React + `storage.js` are inlined —
  no CDN, no in-browser Babel at runtime. Netlify publishes `dist/`.
- **Persistence:** `storage.js` exposes `window.storage.{get,set,delete,list}` and syncs a
  single `{ shared, private }` snapshot to `/.netlify/functions/store` (Netlify Blobs),
  with a localStorage cache + offline fallback.
- **AI estimating:** the long takeoff runs as a **background** Netlify function
  (`estimate-background`) that writes its result to a Blobs "job store", and the browser
  polls `estimate-result` until the job appears.

### Netlify functions
- `store.mjs` — v2 ESM function. Cross-device snapshot store (`cazbid-data`). **Working.**
- `estimate-background.js` — v1 background function. Runs Opus 4.8 (+ web search), writes
  result to the `cazbid-jobs` Blobs store under `jobId`.
- `estimate-result.js` — v1 function. Poller; reads `cazbid-jobs` by `jobId`.
- `blob-check.js` — diagnostic at `/.netlify/functions/blob-check`. Returns JSON telling
  you whether Blobs works on the site.

---

## The bug (root cause — confirmed against `@netlify/blobs@8.2.0` source)

The v1 (`exports.handler`) functions did:

```js
connectLambda(event);
getStore({ name: "cazbid-jobs", consistency: "strong" });
```

`connectLambda(event)` builds the Blobs environment context with only
`{ deployID, edgeURL, siteID, token }` — it **never sets `uncachedEdgeURL`**.
The SDK requires `uncachedEdgeURL` for **strong-consistency** reads/writes and throws
`BlobsConsistencyError` without it. In `estimate-result.js` that became the **500**.
`blob-check.js` also used strong consistency, so it falsely reported Blobs as broken —
that's why the "is Blobs working?" loop never resolved.

`store.mjs` was unaffected: it's a v2 ESM function, so Netlify auto-injects the full
context (including `uncachedEdgeURL`) and strong consistency works there.

## The fix (commit `6af881f`)

- Removed `consistency: "strong"` from `estimate-background.js`, `estimate-result.js`,
  and `blob-check.js` (now eventual consistency). `connectLambda` is **kept** — it's still
  required to give v1 functions any Blobs context. Eventual consistency is correct for this
  job store: the result is written once and polled for ~4 minutes, well beyond the
  propagation window.
- `store.mjs` left as-is (strong consistency is fine there).
- Bundled the 12 trade manuals into `netlify/functions/manuals/` so `estimate-background`
  can load them at runtime (`netlify.toml` already includes that path; the folder was
  previously missing, so estimates ran with no manual).

Proven locally with the real SDK: strong consistency + a connectLambda-style context throws
`BlobsConsistencyError`; eventual consistency passes the check.

---

## How to verify (the ONE real end-to-end test)

1. Deploy this branch (or the rebuilt `dist/` + functions) to Netlify.
2. Open `https://cazbid.netlify.app/.netlify/functions/blob-check`.
   - Expect `"ok": true` with a `readBack` value. (Before the fix: `"ok": false`,
     `BlobsConsistencyError`.)
3. Run a real estimate in the app and confirm it completes (no 500 while polling).

Local build sanity check: `npm install && npm run build` → writes `dist/index.html`.
(Do **not** rely on `netlify dev` to reproduce the bug — local dev injects the full v2
context and masks this production-only failure.)

---

## Open item (decide before/after deploy)

`app.src.jsx` still calls `/.netlify/functions/estimate` (via `__callClaudeInner`) for
shorter AI tasks — EagleView photo parsing and auto-suggestions. **That `estimate` function
is NOT in this repo** (only `estimate-background` / `estimate-result` are). It is presumably
still deployed on Netlify from before.

⚠️ If Netlify deploys functions from this repo, the next deploy could **remove** the old
`estimate` function (it's not in `netlify/functions/`), breaking those features. Options:
- Add an `estimate.js` (a synchronous mirror of `estimate-background`) to this repo, or
- Confirm the deploy keeps the existing function, or
- Repoint those `__callClaudeInner` calls at the background flow.

Not part of the Blobs 500 fix; flagged so it isn't a surprise.

---

## Connecting Netlify (MCP) for the next session

To let Claude deploy the branch, read function logs, and check `blob-check` directly:

1. Create a **new** Netlify Personal Access Token: Netlify → avatar → User settings →
   OAuth → New access token. (Revoke any token that was ever pasted into a chat.)
2. Node **22+** required (`node -v`).
3. On your Mac:
   ```bash
   claude mcp add netlify -e NETLIFY_PERSONAL_ACCESS_TOKEN=YOUR_NEW_TOKEN -- npx -y @netlify/mcp
   ```
   Restart Claude Code, then in a new session confirm with "list my Netlify sites".

Note: from the web/remote environment, `api.netlify.com` may need to be on the network
egress allowlist, and `cazbid.netlify.app` was blocked there. Running from local Claude Code
avoids both.

---

## Repo notes

- Legacy single-file app `Index` (old in-browser-Babel version) is still at the repo root,
  superseded by the `dist/` build. Left in place intentionally (not deleted).
- `.gitignore` excludes `node_modules/`, `.netlify/`, `.DS_Store`.
- Trade manuals also live in the separate `cazacontractors-create/caza-manuals` repo; the
  copies under `netlify/functions/manuals/` are what ships with the functions.
