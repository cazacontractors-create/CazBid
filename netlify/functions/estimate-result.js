// Caza Estimator — job result poller (regular fast function, well under 10s).
// The app polls GET /.netlify/functions/estimate-result?job=<jobId> while the
// background estimate runs. Returns { status: "pending" } until the background
// function has written { status: "done", text, manualUsed } or { status: "error", error }.
//
// NOTE: this is a v1 (exports.handler) function, so it MUST call connectLambda(event)
// before getStore() — otherwise Netlify Blobs throws MissingBlobsEnvironmentError (a 500).

const HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
  "Cache-Control": "no-store",
};

exports.handler = async function (event) {
  if (event.httpMethod === "OPTIONS") return { statusCode: 200, headers: HEADERS, body: "" };

  const jobId = (event.queryStringParameters || {}).job;
  if (!jobId) return { statusCode: 400, headers: HEADERS, body: JSON.stringify({ status: "error", error: "Missing job id" }) };

  try {
    const { getStore, connectLambda } = await import("@netlify/blobs");
    connectLambda(event); // wire up Blobs context for v1 functions
    // Do NOT use consistency:"strong" here. connectLambda() only sets edgeURL/token/siteID,
    // not the 'uncachedEdgeURL' the SDK requires for strong reads, so a strong-consistency
    // op throws BlobsConsistencyError -> 500. Eventual consistency is correct for a job
    // store that's written once and polled for minutes.
    const store = getStore({ name: "cazbid-jobs" });
    const raw = await store.get(jobId); // JSON string written by the background fn, or null
    if (!raw) return { statusCode: 200, headers: HEADERS, body: JSON.stringify({ status: "pending" }) };
    return { statusCode: 200, headers: HEADERS, body: raw };
  } catch (e) {
    const name = (e && e.name) || "Error";
    return { statusCode: 500, headers: HEADERS, body: JSON.stringify({ status: "error", error: name + ": " + ((e && e.message) || String(e)) }) };
  }
};
