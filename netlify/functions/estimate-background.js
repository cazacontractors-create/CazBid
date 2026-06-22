// Caza Estimator — BACKGROUND Netlify Function
// ----------------------------------------------------------------------------
// The "-background" suffix makes this a Netlify Background Function: it returns
// 202 immediately and then keeps running for up to 15 minutes — long enough for
// Opus 4.8 (with web search) to finish a full takeoff, which the regular 10s
// function limit on the free plan can't do.
//
// Flow: the app POSTs { jobId, prompt, maxTokens, search, trade } here. We run
// the same Opus call as the original `estimate` function, then write the result
// to the "cazbid-jobs" Blobs store under jobId. The app polls `estimate-result`
// until it appears. Manual loading is unchanged (still Node/fs).
//
// NOTE: v1 (exports.handler) functions MUST call connectLambda(event) before
// getStore(), or Netlify Blobs throws MissingBlobsEnvironmentError.

const fs = require("fs");
const path = require("path");

const MANUAL_FILES = {
  roofing:    "Caza_Roofing_Estimating_Manual.md",
  siding:     "Caza_Siding_Estimating_Manual.md",
  framing:    "Caza_Framing_Estimating_Manual.md",
  concrete:   "Caza_Concrete_Masonry_Manual.md",
  decks:      "Caza_Deck_Estimating_Manual.md",
  insulation: "Caza_Insulation_Thermal_Manual.md",
  interior:   "Caza_Interior_Finish_Painting_Manual.md",
  flooring:   "Caza_Flooring_Estimating_Manual.md",
  cabinetry:  "Caza_Cabinetry_Estimating_Manual.md",
  electrical: "Caza_Electrical_Estimating_Manual.md",
  hvac:       "Caza_HVAC_Estimating_Manual.md",
  plumbing:   "Caza_Plumbing_Estimating_Manual.md",
};

const manualCache = {};
function loadManual(trade) {
  const key = String(trade || "").toLowerCase();
  const fname = MANUAL_FILES[key];
  if (!fname) return null;
  if (manualCache[key] !== undefined) return manualCache[key];
  const candidates = [
    path.join(__dirname, "manuals", fname),
    path.join(process.cwd(), "netlify", "functions", "manuals", fname),
    path.join(process.cwd(), "manuals", fname),
  ];
  for (const p of candidates) {
    try { if (fs.existsSync(p)) { const txt = fs.readFileSync(p, "utf8"); manualCache[key] = txt; return txt; } }
    catch (e) { /* keep trying */ }
  }
  manualCache[key] = null;
  return null;
}

function buildSystemPrompt(trade) {
  const manual = loadManual(trade);
  if (!manual) return null;
  return (
    "You are AL, the estimator for Caza Contractors. Below is Caza's in-house estimating manual " +
    "for THIS trade. Treat it as your authoritative reference: use its material lists, coverage/waste " +
    "rates, production rates, units, and best-practice notes when building the takeoff. Honor every " +
    "\u26a0\ufe0f flag — never invent a structural size, never give licensed-trade install procedures, and note " +
    "where the job needs engineering, a permit, or a licensed sub. Apply the cold-climate / Climate-Zone-6 " +
    "guidance (heavy snow, deep frost, well/septic). When the manual and your general knowledge conflict, " +
    "the manual wins.\n\n" +
    "===== CAZA ESTIMATING MANUAL (THIS TRADE) =====\n\n" + manual + "\n\n===== END MANUAL =====\n"
  );
}

async function writeResult(store, jobId, payload) {
  try { await store.set(jobId, JSON.stringify(payload)); }
  catch (e) { console.error("Failed to write job result:", e && e.message); }
}

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") return { statusCode: 405, body: "" };

  let body;
  try { body = JSON.parse(event.body || "{}"); }
  catch (e) { return { statusCode: 400, body: "" }; }

  const jobId = body.jobId;
  if (!jobId) return { statusCode: 400, body: "" };

  // Establish Blobs (v1 functions need connectLambda before getStore).
  let store;
  try {
    const { getStore, connectLambda } = await import("@netlify/blobs");
    connectLambda(event);
    // No consistency:"strong" — connectLambda() doesn't supply the 'uncachedEdgeURL' the
    // SDK needs for strong ops, so requesting it throws BlobsConsistencyError (a 500 on the
    // read side). Eventual consistency is fine: the poller reads this result over minutes.
    store = getStore({ name: "cazbid-jobs" });
  } catch (e) {
    console.error("Blobs connect failed:", e && e.message);
    return { statusCode: 202, body: "" }; // nothing to write to; poller will time out
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    await writeResult(store, jobId, { status: "error", error: "Server missing ANTHROPIC_API_KEY. Set it in Netlify > Site settings > Environment variables." });
    return { statusCode: 202, body: "" };
  }

  const prompt = body.prompt || "";
  const maxTokens = body.maxTokens || 4000;
  const useSearch = !!body.search;
  const trade = body.trade || "";

  if (!prompt) { await writeResult(store, jobId, { status: "error", error: "No prompt provided" }); return { statusCode: 202, body: "" }; }

  let messages;
  if (Array.isArray(prompt)) {
    messages = prompt.map(function (m) {
      var role = (m && m.role) || "user";
      var content = m && typeof m.content !== "undefined" ? m.content : m;
      if (typeof content === "string") content = [{ type: "text", text: content }];
      return { role: role, content: content };
    });
  } else {
    messages = [{ role: "user", content: prompt }];
  }

  const payload = { model: "claude-opus-4-8", max_tokens: maxTokens, messages: messages };
  const sys = buildSystemPrompt(trade);
  if (sys) payload.system = sys;
  if (useSearch) payload.tools = [{ type: "web_search_20250305", name: "web_search", max_uses: 3 }];

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": apiKey, "anthropic-version": "2023-06-01" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) {
      const msg = (data && data.error && data.error.message) ? data.error.message : ("Anthropic API error " + res.status);
      await writeResult(store, jobId, { status: "error", error: msg });
      return { statusCode: 202, body: "" };
    }
    let text = "";
    if (Array.isArray(data.content)) {
      data.content.forEach(function (block) { if (block && block.type === "text" && block.text) text += block.text; });
    }
    await writeResult(store, jobId, { status: "done", text: text, manualUsed: sys ? trade : null });
  } catch (e) {
    await writeResult(store, jobId, { status: "error", error: "Request failed: " + (e.message || String(e)) });
  }
  return { statusCode: 202, body: "" };
};
