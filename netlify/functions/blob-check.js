// DIAGNOSTIC — visit https://cazbid.netlify.app/.netlify/functions/blob-check in your browser.
// Returns plain JSON telling us whether Netlify Blobs actually works on this site,
// and the exact error if it doesn't. Safe to leave in; safe to delete later.

const HEADERS = { "Content-Type": "application/json", "Cache-Control": "no-store", "Access-Control-Allow-Origin": "*" };

exports.handler = async function (event) {
  const out = {
    ok: false,
    node: process.version,
    blobsContextPresent: !!process.env.NETLIFY_BLOBS_CONTEXT, // is Netlify injecting the Blobs context?
    hasAnthropicKey: !!process.env.ANTHROPIC_API_KEY,         // sanity check the API key is set too
  };
  try {
    const mod = await import("@netlify/blobs");
    out.connectLambdaExists = typeof mod.connectLambda === "function";
    if (typeof mod.connectLambda === "function") mod.connectLambda(event);
    // Match what the real functions use: eventual consistency. (Requesting "strong" here
    // would throw BlobsConsistencyError because connectLambda() doesn't set uncachedEdgeURL,
    // which previously made this diagnostic falsely report Blobs as broken.)
    const store = mod.getStore({ name: "cazbid-jobs" });
    const k = "diag_" + Date.now();
    await store.set(k, JSON.stringify({ hello: "world" }));
    out.readBack = await store.get(k);
    try { await store.delete(k); } catch (e) {}
    out.ok = true;
  } catch (e) {
    out.ok = false;
    out.errorName = (e && e.name) || "Error";
    out.error = (e && e.message) || String(e);
  }
  return { statusCode: 200, headers: HEADERS, body: JSON.stringify(out, null, 2) };
};
