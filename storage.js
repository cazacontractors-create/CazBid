/* ============================================================================
   CazBid persistence layer  (storage.js)
   ----------------------------------------------------------------------------
   The app talks to window.storage.{get,set,delete,list} exactly the way the
   Claude Artifacts API worked: async, with a "shared" flag (true = the public
   marketplace data everyone sees; false/undefined = your own private data).

   How it works here:
     * One "snapshot" object  { shared:{...}, private:{...} }  holds everything.
     * On first use we load that snapshot ONCE from the backend function at
       /.netlify/functions/store  (so page loads stay fast — not one request
       per key).  We seed instantly from a localStorage copy first.
     * Reads come from memory => instant.  Writes update memory + localStorage,
       then push the whole snapshot back to the backend on a short debounce
       (coalesced, so a burst of saves = one network write).
     * No backend reachable (function not deployed yet, or you're offline)?
       It transparently runs in localStorage-only mode. The app still works;
       it just isn't syncing across devices until the backend answers again.
     * First time the backend is empty but you already had local data, that
       local data is pushed UP to the backend so nothing is lost.

   Size note: everything (including any saved photos) travels in one request,
   which Netlify caps around 6 MB. The app already saves photos as small
   thumbnails, so this is fine for normal use. If your data ever outgrows that,
   ask for the per-record backend upgrade.
   ========================================================================== */
(function () {
  "use strict";
  if (window.storage && typeof window.storage.get === "function") return; // a richer host API exists (e.g. Claude preview) — leave it alone

  var ENDPOINT = "/.netlify/functions/store";
  var LS_KEY = "cazbid-snapshot-v1";
  var SAVE_DEBOUNCE_MS = 700;

  var snap = { shared: {}, private: {} };     // in-memory source of truth
  var loadPromise = null;                       // memoised load
  var backendOK = true;                         // flips false if the function can't be reached
  var dirty = false;
  var saveTimer = null;
  var savingPromise = null;

  function scope(shared) { return shared ? "shared" : "private"; }
  function isEmpty(o) { for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) return false; return true; }
  function snapshotEmpty() { return isEmpty(snap.shared) && isEmpty(snap.private); }

  function readLocal() {
    try {
      var raw = localStorage.getItem(LS_KEY);
      if (!raw) return null;
      var p = JSON.parse(raw);
      if (p && typeof p === "object" && p.shared && p.private) return p;
    } catch (e) { /* ignore */ }
    return null;
  }
  function writeLocal() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(snap)); }
    catch (e) { /* quota exceeded -> just skip the offline cache, backend still has it */ }
  }

  // Load the snapshot once. Seed from localStorage immediately, then reconcile
  // with the backend (authoritative when it has data; otherwise migrate local up).
  function ensureLoaded() {
    if (loadPromise) return loadPromise;
    loadPromise = (async function () {
      var local = readLocal();
      if (local) snap = local;

      try {
        var res = await fetch(ENDPOINT, { method: "GET", headers: { accept: "application/json" } });
        if (res.ok) {
          var data = await res.json();
          var server = (data && data.shared && data.private) ? data : { shared: {}, private: {} };
          var serverEmpty = isEmpty(server.shared) && isEmpty(server.private);
          if (!serverEmpty) {
            snap = server;            // backend wins
            writeLocal();
          } else if (local && !snapshotEmpty()) {
            scheduleSave();           // backend empty but we have local data -> push it up
          }
          backendOK = true;
        } else {
          backendOK = false;          // 404 (not deployed) / 5xx -> localStorage-only mode
        }
      } catch (e) {
        backendOK = false;            // offline -> localStorage-only mode
      }
      return snap;
    })();
    return loadPromise;
  }

  function scheduleSave() {
    dirty = true;
    writeLocal();                     // always keep the local cache current
    if (saveTimer) clearTimeout(saveTimer);
    saveTimer = setTimeout(function () { saveTimer = null; flush(); }, SAVE_DEBOUNCE_MS);
  }

  // Push the whole snapshot to the backend. Coalesces concurrent calls.
  function flush() {
    if (!dirty) return savingPromise || Promise.resolve();
    if (savingPromise) return savingPromise; // a save is mid-flight; the trailing debounce will catch newer changes
    dirty = false;
    var body = JSON.stringify(snap);
    savingPromise = (async function () {
      try {
        var res = await fetch(ENDPOINT, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: body,
        });
        if (!res.ok) { dirty = true; backendOK = false; }
        else { backendOK = true; }
      } catch (e) {
        dirty = true; backendOK = false;       // couldn't reach backend; stays dirty, retries on next change/flush
      } finally {
        savingPromise = null;
      }
    })();
    return savingPromise;
  }

  // Best-effort flush when the tab goes away, so the last edits make it up.
  function flushOnExit() {
    if (!dirty || !backendOK) return;
    try {
      var body = JSON.stringify(snap);
      if (navigator.sendBeacon) {
        navigator.sendBeacon(ENDPOINT, new Blob([body], { type: "application/json" }));
        dirty = false;
      } else {
        flush();
      }
    } catch (e) { /* ignore */ }
  }
  window.addEventListener("pagehide", flushOnExit);
  window.addEventListener("visibilitychange", function () { if (document.visibilityState === "hidden") flushOnExit(); });

  window.storage = {
    get: async function (key, shared) {
      await ensureLoaded();
      var v = snap[scope(shared)][key];
      return (v === undefined || v === null) ? null : { key: key, value: v, shared: !!shared };
    },
    set: async function (key, value, shared) {
      await ensureLoaded();
      snap[scope(shared)][key] = (typeof value === "string") ? value : JSON.stringify(value);
      scheduleSave();
      return { key: key, value: value, shared: !!shared };
    },
    delete: async function (key, shared) {
      await ensureLoaded();
      delete snap[scope(shared)][key];
      scheduleSave();
      return { key: key, deleted: true, shared: !!shared };
    },
    list: async function (prefix, shared) {
      await ensureLoaded();
      var bag = snap[scope(shared)], p = prefix || "", keys = [];
      for (var k in bag) if (Object.prototype.hasOwnProperty.call(bag, k) && k.indexOf(p) === 0) keys.push(k);
      return { keys: keys, prefix: prefix, shared: !!shared };
    },
  };

  // Warm the cache right away so the snapshot is ready by the time the UI reads it.
  ensureLoaded();
})();
