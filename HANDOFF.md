# CazBid — Handoff / Status

**Read this first.** It captures the full state of the Netlify Blobs 500 work so a fresh
session can continue without re-deriving anything.

Branch: `claude/cazbid-blobs-500-error-xlcvx5`
Latest work: Blobs 500 fixed, `estimate.js` reconstructed, full function set in repo.
**Remaining step: DEPLOY to the live site and verify `blob-check`.**

---

## TL;DR for the next session

1. The Blobs 500 is **diagnosed and fixed** in this branch. Root cause + fix below.
2. The code is complete: **5 functions** (`estimate`, `estimate-background`, `estimate-result`,
   `store`, `blob-check`) + the 12 trade manuals.
3. **The live site does NOT deploy from this GitHub repo.** It deploys from an **uploaded
   zip**. So pushing to Git does nothing on its own — you must deploy the built files.
4. To finish: deploy the package to the `cazbid` Netlify site, then open
   `https://cazbid.netlify.app/.netlify/functions/blob-check` and confirm `"ok": true`.

---

## The bug (root cause — confirmed against `@netlify/blobs@8.2.0` source)

The v1 (`exports.handler`) functions did:

```js
connectLambda(event);
getStore({ name: "cazbid-jobs", consistency: "strong" });
```

`connectLambda(event)` builds the Blobs context with only `{ deployID, edgeURL, siteID, token }`
— it **never sets `uncachedEdgeURL`**. The SDK requires `uncachedEdgeURL` for **strong**
consistency and throws `BlobsConsistencyError` without it. In `estimate-result.js` that became
the **500**. `blob-check.js` also used strong consistency, so it falsely reported Blobs broken.

`store.mjs` was unaffected: it's a v2 ESM function, so Netlify auto-injects the full context
(including `uncachedEdgeURL`), and strong consistency works there.

## The fix (commits on this branch)

- `6af881f` — removed `consistency: "strong"` from `estimate-background.js`,
  `estimate-result.js`, `blob-check.js` (now eventual consistency; `connectLambda` kept).
  Eventual is correct for the job store (written once, polled ~4 min). Also bundled the 12
  trade manuals under `netlify/functions/manuals/`.
- `facf55c` — added `estimate.js`, a **synchronous** twin of `estimate-background.js`
  (same manual loading + Anthropic call, returns `{ text, manualUsed }` directly, **no Blobs**).
  Needed because the live site has an `estimate` function the app calls via `__callClaudeInner`
  (EagleView/photo parsing, quick suggestions), and a zip deploy replaces ALL functions — so
  shipping without it would delete it. **Model: `claude-opus-4-8`** (owner confirmed the
  original used Opus).

Proven locally with the real SDK: strong-consistency + a connectLambda-style context throws
`BlobsConsistencyError`; eventual passes. App builds clean (`npm install && npm run build`).

---

## DEPLOYMENT — how the live site actually updates (important)

- Netlify site: **`cazbid`** — site ID `b54f5dbe-1589-4e43-8f58-93b8e9404619`,
  URL `https://cazbid.netlify.app`, production branch `main`, Blobs region `us-east-2`.
- The current production deploy's `deploy_source` is **`api`** / `has_source_zip: true`,
  title *"Add files via upload"* — i.e. the owner deploys by **uploading a zip**, not via
  Git auto-deploy. The Netlify-linked Git repo is `cazacontractors-create/CazBid-app`
  (NOT this `CazBid` repo, and it's outside this session's allowed repos).
- **Consequence:** commits to this repo do not reach production by themselves. To go live,
  either upload a zip of the built project, or deploy via the Netlify MCP.

### Live functions before this fix (from the deploy API)
`estimate` (v1), `estimate-background` (v1, background), `estimate-result` (v1), `store` (v2).
`blob-check` was NOT deployed. After this fix, deploy all 5 (adds `blob-check`).

### To deploy via the Netlify MCP (preferred, if connected)
The Netlify MCP (`@netlify/mcp`) connected successfully earlier this session using the owner's
PAT (authenticated as Dustin Caza), then dropped. When it's connected in a session:
- Tools are `mcp__Netlify__netlify-*` (project/deploy/user/team/extension reader+updater).
- Use the deploy-services updater to deploy this project to site
  `b54f5dbe-1589-4e43-8f58-93b8e9404619`. Build first: `npm install && npm run build`
  (publish dir `dist`, functions dir `netlify/functions`).
- ⚠️ If the MCP isn't present, it must be reconnected for the session (added via
  `claude mcp add netlify -e NETLIFY_PERSONAL_ACCESS_TOKEN=… -- npx -y @netlify/mcp`, Node 22+,
  then a fresh session). From the web/remote env, `api.netlify.com` may need egress allowlisting.

### To deploy WITHOUT the MCP (always works)
Upload a zip of the project to the `cazbid` site (the owner's normal flow). A complete zip was
produced this session and sent to the owner. To rebuild it: `npm run build`, then zip the
project folder (include `dist/`, `netlify/`, `netlify.toml`, etc.; exclude `node_modules/`).
Because it contains all 5 functions, nothing gets dropped.

---

## Verify (the one real end-to-end test)

1. After deploy, open `https://cazbid.netlify.app/.netlify/functions/blob-check`.
   - Expect `"ok": true` with a `readBack` value (before fix: `"ok": false`,
     `BlobsConsistencyError`).
2. Run a real estimate in the app; confirm it completes with no 500 while polling.

Do NOT rely on `netlify dev` to reproduce the original bug — local dev injects the full v2
context and masks this production-only failure.

---

## Repo notes / housekeeping

- Blobs stores: `cazbid-data` (cross-device snapshot, used by `store.mjs`),
  `cazbid-jobs` (estimate job results, used by estimate-background/result/blob-check).
- Legacy single-file app `Index` is still at repo root (superseded by `dist/`); left in place.
- `.gitignore` excludes `node_modules/`, `.netlify/`, `.DS_Store`.
- Manuals also live in `cazacontractors-create/caza-manuals`; the copies under
  `netlify/functions/manuals/` are what ship with the functions.
- **Security:** a Netlify PAT was pasted into chat earlier this session and should be
  **revoked** (Netlify → User settings → OAuth). Use a fresh token for any MCP setup.

## Open / optional follow-ups

- `estimate.js` is a faithful reconstruction (Opus, manuals, optional web_search). If the
  original differed in any detail, the real one lives in the `CazBid-app` repo.
- `app.src.jsx` `__callClaudeInner` sends model `claude-sonnet-4-20250514` in the body, but the
  server functions override the model, so that client value is ignored (kept as-is).
