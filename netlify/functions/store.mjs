/* ============================================================================
   /.netlify/functions/store   — CazBid cross-device persistence (Netlify Blobs)
   ----------------------------------------------------------------------------
   Stores ONE JSON snapshot ({ shared, private }) in a Netlify Blobs store, so
   every device that opens your site sees the same data. No database to set up —
   Blobs is built into Netlify and auto-configured when this runs on Netlify.

   GET  -> returns the snapshot (or an empty one the first time)
   PUT  -> overwrites the snapshot with the request body
   POST -> same as PUT (used by the browser's sendBeacon on tab close)

   This file is self-contained and does NOT modify your existing `estimate`
   function. It only adds a new endpoint.

   ACCESS NOTE: this endpoint is open to anyone who knows your site URL (there's
   no login). For a personal tool that's usually fine; if you want to lock it
   down, the easiest path is Netlify's built-in site password protection
   (Site settings -> Access control), which needs no code changes.
   ========================================================================== */
import { getStore } from "@netlify/blobs";

const SNAPSHOT_KEY = "snapshot";
const EMPTY = { shared: {}, private: {} };

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });

export default async (req) => {
  let store;
  try {
    // Strong consistency => a save on one device is immediately readable on another.
    store = getStore({ name: "cazbid-data", consistency: "strong" });
  } catch (e) {
    return json({ error: "blob store unavailable: " + String((e && e.message) || e) }, 500);
  }

  try {
    if (req.method === "GET") {
      const data = await store.get(SNAPSHOT_KEY, { type: "json" });
      return json(data || EMPTY);
    }

    if (req.method === "PUT" || req.method === "POST") {
      const raw = await req.text();
      let parsed;
      try {
        parsed = JSON.parse(raw);
      } catch {
        return json({ error: "body is not valid JSON" }, 400);
      }
      if (!parsed || typeof parsed !== "object" || !parsed.shared || !parsed.private) {
        return json({ error: "expected { shared, private }" }, 400);
      }
      await store.setJSON(SNAPSHOT_KEY, parsed);
      return json({ ok: true });
    }

    return json({ error: "method not allowed" }, 405);
  } catch (e) {
    return json({ error: String((e && e.message) || e) }, 500);
  }
};
