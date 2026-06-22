/* ============================================================================
   build.mjs  —  turns app.src.jsx into a single, self-contained dist/index.html
   ----------------------------------------------------------------------------
   Run it with:   npm run build
   What it does:
     1. Compiles your JSX to plain JavaScript (classic React runtime, so it uses
        the global React — no module loader needed in the browser).
     2. Inlines React + ReactDOM (UMD builds) so there is NO CDN dependency.
     3. Inlines storage.js (the persistence layer).
     4. Writes everything into dist/index.html using index.template.html.
   No in-browser Babel, nothing fetched at runtime.
   ========================================================================== */
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { createRequire } from "module";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const require = createRequire(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));
const root = __dirname;
const r = (...p) => join(root, ...p);

const Babel = require("@babel/standalone");

// --- 1. compile JSX -> classic-runtime JS ----------------------------------
const jsx = readFileSync(r("app.src.jsx"), "utf8");
const compiled = Babel.transform(jsx, {
  presets: [["react", { runtime: "classic" }]],
  sourceType: "script",
  compact: false,
  comments: true,
}).code;

// must be free of module syntax to run as a classic <script>
for (const [label, re] of [["require", /\brequire\s*\(/], ["import", /\bimport\s*[({'"]/], ["export", /\bexport\s+(default|\{|const|function|var|let|class)/]]) {
  if (re.test(compiled)) throw new Error(`Compiled output still contains ${label} — cannot run as a classic script.`);
}

// --- 2. read the React UMD builds we inline --------------------------------
const reactUMD = readFileSync(r("node_modules/react/umd/react.production.min.js"), "utf8");
const domUMD = readFileSync(r("node_modules/react-dom/umd/react-dom.production.min.js"), "utf8");
const reactVer = require("react/package.json").version;
for (const [name, src] of [["react", reactUMD], ["react-dom", domUMD]]) {
  if (/<\/script/i.test(src)) throw new Error(`${name} UMD unexpectedly contains </script — cannot inline safely.`);
}

// --- 3. read the storage layer ---------------------------------------------
const storage = readFileSync(r("storage.js"), "utf8");

// --- 4. assemble from the template -----------------------------------------
// In a JS string, "<\/script" is identical to "</script" but can't terminate the
// host <script> tag. Applied defensively to code that gets inlined as text.
const guard = (s) => s.replace(/<\/script/gi, "<\\/script");

const reactBlock =
  `<!-- React ${reactVer} (UMD, inlined — no CDN dependency; works offline and on Netlify) -->\n` +
  `<script>\n${reactUMD}\n</script>\n` +
  `<script>\n${domUMD}\n</script>`;

const appBlock = `(function () {\n"use strict";\n${guard(compiled)}\n})();`;

const template = readFileSync(r("index.template.html"), "utf8");
const html = template
  .replace("<!--REACT-->", reactBlock)
  .replace("<!--STORAGE-->", storage)
  .replace("<!--APP-->", appBlock);

mkdirSync(r("dist"), { recursive: true });
writeFileSync(r("dist/index.html"), html);

console.log(`Built dist/index.html (${(html.length / 1024).toFixed(0)} KB) — React ${reactVer}, ${(compiled.match(/React\.createElement/g) || []).length} elements`);
