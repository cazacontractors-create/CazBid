// Caza Estimator — SYNCHRONOUS Netlify Function (regular 10s function).
// ----------------------------------------------------------------------------
// Handles the app's shorter AI calls (EagleView/photo parsing, quick suggestions)
// via fetch("/.netlify/functions/estimate") in app.src.jsx -> __callClaudeInner.
// It returns the model's answer in the HTTP response immediately.
//
// This is the synchronous twin of estimate-background.js: same manual loading and
// same Anthropic call, but it does NOT use Netlify Blobs (no jobId, no store), so
// it is unaffected by the Blobs consistency issue. Long takeoffs still go through
// estimate-background + estimate-result.
//
// Contract (matches app.src.jsx __callClaudeInner):
//   POST { prompt: messages[]|string, maxTokens, search, trade }
//   -> 200 { text, manualUsed }   on success
//   -> 4xx/5xx { error }          on failure

const fs = require("fs");
const path = require("path");

const HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
  "Cache-Control": "no-store",
};

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
    "⚠️ flag — never invent a structural size, never give licensed-trade install procedures, and note " +
    "where the job needs engineering, a permit, or a licensed sub. Apply the cold-climate / Climate-Zone-6 " +
    "guidance (heavy snow, deep frost, well/septic). When the manual and your general knowledge conflict, " +
    "the manual wins.\n\n" +
    "===== CAZA ESTIMATING MANUAL (THIS TRADE) =====\n\n" + manual + "\n\n===== END MANUAL =====\n"
  );
}

exports.handler = async function (event) {
  if (event.httpMethod === "OPTIONS") return { statusCode: 200, headers: HEADERS, body: "" };
  if (event.httpMethod !== "POST") return { statusCode: 405, headers: HEADERS, body: JSON.stringify({ error: "Method not allowed" }) };

  let body;
  try { body = JSON.parse(event.body || "{}"); }
  catch (e) { return { statusCode: 400, headers: HEADERS, body: JSON.stringify({ error: "Body is not valid JSON" }) }; }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, headers: HEADERS, body: JSON.stringify({ error: "Server missing ANTHROPIC_API_KEY. Set it in Netlify > Site settings > Environment variables." }) };
  }

  const prompt = body.prompt || "";
  const maxTokens = body.maxTokens || 1000;
  const useSearch = !!body.search;
  const trade = body.trade || "";

  if (!prompt) return { statusCode: 400, headers: HEADERS, body: JSON.stringify({ error: "No prompt provided" }) };

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
      return { statusCode: res.status, headers: HEADERS, body: JSON.stringify({ error: msg }) };
    }
    let text = "";
    if (Array.isArray(data.content)) {
      data.content.forEach(function (block) { if (block && block.type === "text" && block.text) text += block.text; });
    }
    return { statusCode: 200, headers: HEADERS, body: JSON.stringify({ text: text, manualUsed: sys ? trade : null }) };
  } catch (e) {
    return { statusCode: 500, headers: HEADERS, body: JSON.stringify({ error: "Request failed: " + (e.message || String(e)) }) };
  }
};
