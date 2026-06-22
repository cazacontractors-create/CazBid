# CazBid

Self-contained estimating app (React inlined, JSX pre-compiled — **no in-browser Babel, no CDN**) with an optional **cross-device backend** built on Netlify Blobs.

---

## What's in here

| File | What it is |
|---|---|
| `app.src.jsx` | **The app source you edit.** All the UI and logic (and its CSS) live here. |
| `storage.js` | The persistence layer. Talks to the backend, falls back to localStorage offline. |
| `index.template.html` | The HTML shell the build fills in (fonts, base styles, root div). |
| `build.mjs` | Compiles `app.src.jsx` → `dist/index.html` (inlines React + `storage.js`). |
| `dist/index.html` | **The built app you deploy.** Already built and ready — see below. |
| `netlify/functions/store.mjs` | The backend endpoint (`/.netlify/functions/store`) using Netlify Blobs. |
| `netlify.toml` | Netlify build/publish/functions config. |
| `package.json` | Dependencies + the `build` script. |

Your existing `netlify/functions/estimate` function is **not** included or modified — leave it where it is.

---

## Two ways to use this

### A. Just deploy it (no building on your machine)
`dist/index.html` is already built. If you only want it live:

1. Copy `dist/index.html`, `netlify/functions/store.mjs`, `netlify.toml`, and `package.json` into your repo (keeping `store.mjs` alongside your existing `estimate` function).
2. Commit and push. Netlify deploys.

The app works immediately. Cross-device sync turns on as soon as the `store` function is live (next deploy).

### B. Edit the app, then deploy (recommended long-term)
You edit JSX in one file; Netlify rebuilds for you on every push.

1. Edit `app.src.jsx`.
2. Either let **Netlify build it** (it runs `npm run build` automatically — nothing to do locally), **or** build locally first to preview:
   ```bash
   npm install      # one time
   npm run build    # regenerates dist/index.html
   ```
3. Commit and push.

> You do **not** have to compile anything by hand. `npm run build` (or Netlify's automatic build) does it. The thing that used to white-screen you — Babel compiling in the browser — is gone for good.

---

## First-time setup notes (read once)

**If you already have a `package.json`:** don't overwrite it. Add these instead:
- to `dependencies`: `"@netlify/blobs": "^8.1.0"`
- to `devDependencies`: `"@babel/standalone"`, `"react"`, `"react-dom"` (versions from this `package.json`)
- a script: `"build": "node build.mjs"`

**If you already have a `netlify.toml`:** merge the `[build]` keys (`command`, `publish`, `functions`) into yours rather than replacing the file.

**Netlify Blobs** needs no setup — it's built into Netlify and auto-configured when `store.mjs` runs there. No keys, no database.

---

## How persistence works

- All data lives in one JSON snapshot `{ shared, private }`:
  - **shared** = the marketplace (jobs, profiles, chats) — same on every device.
  - **private** = your own drafts, price books, settings.
- The app loads that snapshot **once** per visit (fast), reads from memory after that, and saves changes back on a short debounce (one coalesced write, not one per keystroke).
- **Offline or backend not deployed?** It automatically uses localStorage so the app still works; it resumes syncing when the backend answers again.
- Any data you'd already saved locally is pushed up to the backend the first time it's reachable — nothing is lost.

**Limits & access (worth knowing):**
- The whole snapshot travels in one request (~6 MB Netlify cap). Photos are saved as small thumbnails, so this is fine for normal use. If your data outgrows it, ask for the per-record backend upgrade.
- The `store` endpoint is open to anyone with your site URL (no login). For a personal tool that's usually fine. To lock it down with zero code, turn on **Netlify → Site settings → Access control → password protection**.
- localStorage and the backend are separate stores; this app syncs the backend across devices. (localStorage is only the offline cache.)

---

## Your AI estimate endpoint

Untouched. The app still calls `/.netlify/functions/estimate` for quick AI calls. Keep that function in `netlify/functions/` next to `store.mjs` and the new estimate functions below.

## Long estimates (background functions — works on the free plan)

Opus 4.8 with web search takes longer than the free plan's 10-second function limit, which caused 502 errors. Full takeoffs now run as a **background function** (15-minute limit, available on Free):

- `netlify/functions/estimate-background.js` — runs the long Opus call (same logic + manuals as `estimate`), then writes the result to the `cazbid-jobs` Blobs store. Returns 202 immediately.
- `netlify/functions/estimate-result.js` — the app polls this for the result while the estimate runs.

The app starts a job, polls until it's ready, and shows a spinner in between. Nothing to configure — these live in the same `netlify/functions/` folder and reuse the `included_files` manuals bundling already in `netlify.toml`. Just make sure **`ANTHROPIC_API_KEY`** is set in Netlify → Site settings → Environment variables (the background function reads it the same way `estimate` does).

To watch a run, open Netlify → your site → Functions → `estimate-background` logs.

