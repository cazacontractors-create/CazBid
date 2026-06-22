# Caza Contractors — Roofing Estimating Manual

**Purpose:** A trade-expert reference for the AI estimator. For each roofing system it defines the labor tasks that drive time, the factors that move those times, the material list with units and coverage rates, special equipment, the dimensions required for an accurate quote, and the install best-practices that change material or labor. The AI should treat this as authoritative and apply it to the specific measurements rather than re-deriving trade knowledge.

**How to use this manual (for the AI):**
1. Identify the roofing system from the work type and description.
2. Pull the matching section below.
3. Use the **Required Dimensions** list to confirm you have what you need; if something critical is missing, estimate it conservatively and state the assumption.
4. Build the material takeoff from the **Material List** using the **coverage rates** — quantity = measured value ÷ coverage, then apply waste.
5. Estimate labor from the **Labor Tasks** table — hours = quantity × production rate, then apply the **Labor Modifiers**.
6. Add **Equipment** for the scope.
7. Apply the **Best-Practice Notes** — they change which materials or how much labor.

**Units key:** SQ = square (100 sq ft of roof area) · LF = linear foot · EA = each · MH = man-hours · ci = continuous insulation

---

# 1. STANDING SEAM METAL

## 1.1 System overview & sub-types

Standing seam is a concealed-fastener metal roof: formed metal panels run vertically (eave to ridge), joined by raised seams that lock together and hide the fasteners. The fasteners are **clips** concealed under the seam, screwed to the deck — the panel itself is not face-fastened in the field, which is what makes it watertight and long-lived. This is fundamentally different from exposed-fastener metal (section 5), and the estimating differs accordingly.

Three things drive every standing seam estimate: **panel coverage (by width), the seaming method, and the trim/flashing package.** Get those three right and the rest follows.

**Sub-types — identify which one, because it changes labor and equipment:**

- **Snap-lock (mechanical interlock by hand):** Panels have a male/female edge that snaps together by hand pressure or foot. No powered seamer required. Most 1" and 1.5" nail-strip and clip-relief panels (e.g. ABC LokSeam, many residential systems) are snap-lock. **This is the most common Caza standing seam job. No seamer rental.**
- **Mechanical-lock (single-lock / double-lock, field-seamed):** Panels are set, then a **powered seaming machine** rolls the seam closed (90° single-lock, or 180° double-lock). Used on lower pitches, longer runs, higher wind exposure, and most commercial/architectural work. **Requires a seamer (rental or owned) plus a hand-seamer for terminations.** Double-lock is the most weather-tight and the slowest to install.
- **Mechanical seam vs. batten/cap (T-seam):** Some systems use a separate snap-on batten cap over the seam. Less common in this market; treat like snap-lock for labor but add the cap as a separate material line by seam LF.

**Gauge & finish (affects material cost, not quantity):** Residential/light commercial is typically **24-gauge steel** with a Kynar 500 / PVDF finish (the standard for color retention and warranty). 26-gauge is lighter/cheaper and used on budget or agricultural-adjacent work; 22-gauge for heavy commercial. Aluminum (.032/.040) for coastal/corrosive environments; copper and zinc for high-end architectural (much higher cost, different seaming). Default assumption for Caza: **24ga steel, Kynar finish, unless specified.**

## 1.2 Required dimensions for an accurate quote

Pull these from the EagleView report or field measurement. The starred items are the ones that most affect accuracy — if missing, the estimate degrades.

- **★ Total roof area (SQ or sq ft)** — drives panel quantity, underlayment, ice & water.
- **★ Predominant pitch (x/12)** — drives the labor modifier and the slope factor on panel length; also gates whether mechanical-lock is required (below ~3/12, double-lock is mandatory).
- **★ Number of facets / planes** — proxy for cut-up complexity; more facets = more panel waste and more trim terminations.
- **★ Eave length (LF)** — drip/eave trim, eave starter/cleat, gutter interface.
- **★ Rake/gable length (LF)** — rake trim.
- **★ Ridge length (LF)** — ridge cap + vented closure.
- **★ Hip length (LF)** — hip cap (and hip cuts = waste).
- **★ Valley length (LF)** — valley metal + panel cut waste (the biggest waste driver).
- **Headwall length (LF)** — where roof meets a vertical wall above (horizontal flashing).
- **Sidewall/endwall length (LF)** — where a sloped edge meets a wall (counter/pan flashing).
- **Transition length (LF)** — pitch changes or roof-to-roof transitions.
- **Penetration count and sizes (EA)** — pipes, vents, etc. → pipe flashings (boots).
- **Number of stories / eave height** — drives access/staging labor and equipment.
- **Existing roof: layers and type** — drives tear-off labor and disposal.
- **Panel width to be used (12" / 16" / 18")** — **critical**: panel LF = area ÷ panel width (ft) × waste. A wrong width throws the biggest line off badly.
- **Panel run length / longest rafter length** — affects whether panels need to be seamed in the field, oil-canning risk, and thermal-movement detailing (clips vs. fixed points on long runs).

## 1.3 Material list — units, coverage rates, waste

Quantity formula reminder: **qty = (measured value ÷ coverage) × (1 + waste)**, rounded up to the purchase unit.

| Material | Unit | Coverage / basis | Typical waste | Notes |
|---|---|---|---|---|
| **Standing seam panel** | LF | area (sq ft) ÷ panel width (ft) | 8% simple → up to ~22% cut-up | Panel width is the divisor: 16" = 1.333 ft, 12" = 1.0 ft, 18" = 1.5 ft. Waste scales with valley + hip footage (diagonal cut drop). Order by LF of panel, not by square. |
| **Concealed clips** | EA | ~1 clip per 2 LF of panel run (24" o.c. typical); tighten to 12–16" o.c. in high wind or long panels | — | Clip count ≈ panel LF ÷ 2. Fixed vs. floating clips on long runs (thermal). |
| **Pancake/clip screws** | EA | ~2 per clip | — | Often sold per clip; verify fastener spec for deck type (wood vs. steel substrate). |
| **High-temp underlayment / ice & water** | SQ (or roll) | **FULL ROOF coverage** — area ÷ roll coverage | +10% lap/waste | **Caza standard: ice & water the ENTIRE roof on standing seam.** High-temp (e.g. GripRite HT, Grace Ultra) required under metal — standard I&W fails under panel heat. Roll commonly ~2 SQ (200 sq ft). |
| **Synthetic underlayment** | SQ (or roll) | full roof if used over/in addition to I&W | +10% | Some specs run synthetic over the I&W as a slip sheet/scratch layer; some go I&W only. Default I&W-only full coverage unless spec calls for both. |
| **Eave trim / drip edge (metal)** | LF | eave LF (+ rake if same profile) | ~10% (corners/laps) | Sold in 10-ft sticks; order by LF, round to sticks. Matches panel gauge/finish. |
| **Rake / gable trim** | LF | rake LF | ~10% | |
| **Eave starter strip / cleat (offset cleat)** | LF | eave LF | ~10% | The continuous cleat the panel hems onto at the eave. |
| **Hip cap trim** | LF | hip LF | ~10% | |
| **Ridge cap trim** | LF | ridge LF | ~10% | Continuous metal ridge cap — NOT shingle ridge vent. |
| **Vented Z-closure / ridge closure** | LF (or EA strips) | ridge LF (and any vented hip) | — | Pre-cut vented Z-closure under the ridge cap for ventilation; solid closure where no venting. Sold in pieces (e.g. ~10-ft or per-piece) — convert ridge LF to pieces. |
| **Valley metal (pan)** | LF | valley LF | ~10–15% | W- or V-pan, formed metal; often wider than asphalt valley. |
| **Headwall flashing** | LF | headwall LF | ~10% | Horizontal wall-to-roof; apron/counter. |
| **Sidewall / endwall pan flashing** | LF | sidewall LF | ~10% | NOT step flashing — standing seam uses continuous pan + counter flashing. |
| **Transition flashing** | LF | transition LF | ~10% | Pitch-break or roof-to-roof. |
| **Pipe flashings / boots** | EA | penetration count | — | High-temp/metal-compatible boots (e.g. Dektite) sized to pipe. |
| **Butyl / seam sealant tape** | roll | seam LF where required ÷ roll length; plus trim/closure laps | — | Used at seams (mechanical-lock especially), endlaps, closures, trim laps. **Snap-lock uses far less than mechanical double-lock.** Roll ~50 ft. Estimate by total sealed LF, not a flat per-square number. |
| **Tube sealant (urethane/MS polymer)** | tube | ~1 per 8–10 penetrations + trim ends | — | Color-matched for exposed; for terminations and boots. |
| **Pop rivets (color-matched SS)** | bag/100 | trim laps and closures | — | ~per trim termination; sold by the bag. |
| **Fasteners — trim/wall (gasketed)** | bag | wall flashing, counter flashing into masonry/siding | — | |
| **Touch-up paint (Kynar)** | EA | 1–2 per job | — | Color-matched aerosol for field cuts/scratches. |

**Tear-off / disposal (if re-roof):**
| Item | Unit | Basis |
|---|---|---|
| Dumpster / roll-off | EA | 1 per ~20–30 SQ of tear-off (asphalt heavier than metal); size up for multiple layers |
| Tear-off labor | see labor table | by SQ and number of layers |

## 1.4 Labor tasks & production rates (the time drivers)

Hours = quantity × MH/unit, then apply the modifiers in 1.5. **Apply pitch/complexity modifiers to INSTALL labor only — not to tear-off, flashing, or trim**, which are already slow and don't speed up or slow down with pitch the same way.

| Task | Unit | Base MH/unit (2-person crew, walkable, simple) | Notes |
|---|---|---|---|
| **Panel install — snap-lock** | SQ | ~3.0–3.5 MH/SQ | Caza rate-book: ~3.4 MH/SQ for steel snap-lock. Hand-seamed, no machine. |
| **Panel install — mechanical single-lock** | SQ | ~3.5–4.0 MH/SQ | Add seaming pass. |
| **Panel install — mechanical double-lock** | SQ | ~4.0–4.8 MH/SQ | Two seaming passes; slowest. |
| **Panel install — copper/zinc** | SQ | ~6.0–7.0 MH/SQ | Specialty metal, slower, more skilled. |
| **Tear-off — asphalt, per layer** | SQ | ~1.0 MH/SQ | Per layer; 2 layers ≈ 2.0. Not pitch-multiplied here (handled in modifier note). |
| **Tear-off — existing metal** | SQ | ~0.8–1.2 MH/SQ | Unscrewing/cutting; watch for fasteners. |
| **Underlayment / ice & water (full roof)** | SQ | ~0.4–0.6 MH/SQ | Rolling out and lapping full coverage. |
| **Eave/rake/drip trim** | LF | ~0.03–0.05 MH/LF | Cutting, fitting, fastening. |
| **Eave starter cleat** | LF | ~0.02–0.03 MH/LF | |
| **Ridge cap + vented closure** | LF | ~0.05–0.07 MH/LF | Closure + cap. |
| **Hip cap** | LF | ~0.05–0.08 MH/LF | Hip cuts + cap; slower than ridge. |
| **Valley metal** | LF | ~0.06–0.10 MH/LF | Panel cuts into valley are the slow part — see complexity modifier. |
| **Headwall flashing** | LF | ~0.06–0.10 MH/LF | |
| **Sidewall/endwall pan flashing** | LF | ~0.08–0.12 MH/LF | Continuous pan + counter; fiddly. |
| **Transition flashing** | LF | ~0.08–0.12 MH/LF | |
| **Pipe flashing / boot** | EA | ~0.5–1.0 MH/EA | Cut, fit, seal. |
| **Penetration / curb (skylight, larger)** | EA | ~2–6 MH/EA | Depends on size and curb detailing. |

**Crew & duration:** Standing seam typically runs a **2–4 person crew**. Compute days = total MH ÷ (crew × ~8 productive hours). A complex steep job realistically runs many days; don't compress an 80-square steep cut-up roof into "a few days."

## 1.5 Labor modifiers (factors that alter the time)

Apply as **ONE combined difficulty factor, capped at ~1.5×**, to the install labor. Do NOT stack steep × complex × access multiplicatively — pick the single factor for the hardest governing condition.

| Condition | Factor guidance |
|---|---|
| Walkable, simple (≤6/12, few facets) | 1.0 |
| Moderate (6–8/12, somewhat cut up) | 1.15–1.25 |
| Steep (8–9/12) | ~1.35 |
| Very steep (10/12+) | ~1.45 |
| Steep **and** complex (10/12+, many facets/valleys) | up to 1.5 (cap) |
| Complex/cut-up alone (many facets, valleys, dormers) | +0.1–0.2 added to base, within the cap |
| Difficult access (high eave, no staging room, steep grade, trees) | +0.1, within the cap |

**Separate (non-multiplied) labor adders — add these as their own line items, not via the difficulty factor:**
- **Tear-off** — by SQ × layers (its own task, above).
- **High eave / multi-story staging** — additional setup MH and equipment (see 1.6).
- **Long panels / oil-canning control** — striations or backer rod add minor material and handling time; field-seaming long runs adds a pass.
- **Snow country detailing (this market)** — snow guards/rails (by EA or LF), reinforced eave/ice-dam detailing. Lewis County/Tug Hill gets heavy snow — snow retention is commonly required and is a real material + labor add. Ask whether snow guards are in scope.

## 1.6 Special equipment for this scope

| Equipment | When needed |
|---|---|
| **Powered seaming machine** | **Mechanical-lock (single/double) only.** NOT for snap-lock. Rental or owned; one per crew. |
| **Hand seamers / tongs** | All mechanical-lock terminations; some snap-lock corrections. |
| **Roll former / panel machine (on-site)** | For site-formed continuous panels (no endlaps on long runs). Either a rented/owned portable rollformer or factory-cut panels delivered. Long runs (>~30–40 ft) favor site-forming to avoid endlaps. |
| **Panel cart / lift / boom** | Getting long panels onto the roof without kinking. Telehandler, boom truck, or panel lift for multi-story or long panels. |
| **Brake (sheet metal)** | On-site trim/flashing fabrication if not factory-ordered. |
| **Fall protection / staging** | Steep and/or multi-story — harness/rope on steep; scaffold or staging at high eaves. Code-required; budget setup time. |
| **Seam roller / butyl applicator** | Sealant application at seams/laps. |
| **Dumpster / roll-off** | Tear-off disposal. |
| **Magnetic sweeper** | Cleanup of fasteners/cuttings — protects tires/feet, do not skip. |

## 1.7 Best-practice notes that change material or labor

These are the "expert knows to do this" items that alter the takeoff:

1. **Full-roof high-temp ice & water (Caza standard).** Standing seam holds heat; standard I&W fails. Always spec high-temp, full coverage. This *increases* underlayment material vs. an asphalt eaves-only approach — don't under-order.
2. **Snap-lock vs. mechanical-lock decision drives equipment AND labor AND sealant.** Confirm which. Snap-lock: no seamer, less butyl, faster. Mechanical double-lock: seamer required, more butyl, slower. Getting this wrong is the single biggest standing seam estimating error (e.g. adding a seamer rental to a snap-lock job).
3. **Pitch gates the system.** Below ~3/12, snap-lock and single-lock are not watertight — double-lock (mechanical) is required. Below ~1/12 (very low), standing seam may be inappropriate; consider membrane. If the measured pitch is very low and the customer wants snap-lock, flag it.
4. **Thermal movement on long panels.** Panels over ~30–40 ft expand/contract significantly. Use floating clips and a single fixed point (eave or ridge per detail); long fixed panels oil-can and can buckle. This affects clip type (floating vs. fixed) and detailing time, not just count.
5. **Panel width is an estimating decision, not a default.** Narrower panels (12") = more LF, more clips, more labor, more cost, but flatter appearance (less oil-canning) and sometimes required by design. Wider (18") = less material/labor but more oil-canning risk. Confirm with the customer/architect; default 16" if unspecified, but state it.
6. **Striations / ribs / backer rod for oil-canning.** Flat broad pans oil-can (visible waviness). Minor striations in the pan, or backer rod behind the pan, reduce it. If the customer is appearance-sensitive, add striated panels (often same cost) or backer rod (minor add) and note it.
7. **Valley and hip cuts are the waste and labor drivers, not the field.** A simple gable wastes ~8%; a cut-up hip-and-valley roof can waste 18–22% of panel and adds significant cut/seal labor at each valley termination. Scale both material waste and valley/hip labor with that footage — do not use a flat field rate on a complex roof.
8. **Sidewall = continuous pan + counter flashing, NEVER step flashing.** Step flashing is a shingle technique. Standing seam uses a continuous pan flashing up the wall with a counter/Z over it. If a takeoff shows "step flashing" on a standing seam job, it's wrong.
9. **Ridge gets a continuous metal cap with vented Z-closure — not a shingle ridge vent.** Match ventilation: vented closure where intake/exhaust is needed, solid closure elsewhere. Don't put corrugated shingle ridge-vent product on a metal roof.
10. **Snow retention in snow country.** In this market (heavy snow), sliding snow off metal is a liability and damages gutters/landscaping/people below. Snow guards or a continuous snow rail are commonly required, especially over entries, walkways, and at eaves above gutters. Add by EA (pad-style) or LF (rail). Ask if in scope — it's a real line item, not an afterthought.
11. **Substrate matters for fasteners and underlayment.** Over solid deck (plywood/OSB): standard clips and full I&W. Over purlins/open framing (ag/commercial): different clip/fastener spec, possibly no solid deck — changes the whole assembly. Confirm deck type.
12. **Endlaps vs. continuous panels.** Site-formed continuous panels eliminate endlaps (cleaner, fewer leak points) but need an on-site rollformer and careful handling. Factory-cut to length avoids the rollformer but may require endlaps on very long runs (each endlap = sealant + labor + a potential leak point). Decision affects equipment and sealant.

## 1.8 Quick worked example (calibration reference)

Real Caza standing seam job, validated against an ABC Supply quote (~$33K material):
- **Roof:** ~4,850 sq ft (≈48.5 SQ), 10/12 pitch, 9 facets, 1-layer tear-off, snap-lock, 16" panel.
- **Panel:** 4,850 ÷ 1.333 ft × ~1.24 waste (valley/hip driven) ≈ **~4,500 LF** ✓ (matches real quote).
- **Clips:** 4,500 LF ÷ 2 ≈ **~2,250 EA** ✓ (real quote ~2,200).
- **High-temp I&W (full roof):** 4,850 ÷ 200 sq ft/roll × 1.10 ≈ **~27 rolls** ✓ (real quote ~28 of GripRite HT).
- **Labor (snap-lock):** 48.5 SQ × 3.4 MH/SQ × ~1.45 (steep+complex, capped) ≈ ~390 MH install + tear-off (48.5 × 1.0 ≈ 49 MH) + trim/flashing (~80–120 MH) ≈ **~520–560 MH** all-in.
- **Equipment:** NO seamer (snap-lock). Dumpster, panel handling, fall protection for 10/12, magnetic sweeper.

This worked example is the template for validating the other systems: build from coverage rates, scale waste/labor with complexity, and sanity-check the big lines against a known real number.

---

# 2. ASPHALT SHINGLE

## 2.1 System overview & sub-types

Asphalt shingle is the workhorse residential roof: overlapping courses of asphalt/fiberglass shingles nailed to a solid deck over underlayment, with the field shingles shedding water down-slope and metal/membrane handling the vulnerable details (eaves, valleys, walls, penetrations). The estimate is driven by **field area (squares), the perimeter/valley/ridge metal and accessories, and tear-off**.

**Sub-types — identify which, it changes material cost and slightly changes labor:**

- **3-tab (strip) shingles:** Older/budget, flat appearance, ~3 bundles/SQ, lighter, lower wind rating (~60 mph), shorter warranty (~25 yr). Less common on new work now. Slightly faster to install but rarely specified for quality work.
- **Architectural / dimensional / laminate (standard quality work):** Two-layer laminated shingle, dimensional look, ~3 bundles/SQ (heavier line may be 4), higher wind rating (110–130 mph), 30-yr to "lifetime" warranty. **Caza default for residential re-roofs.** (e.g. GAF Timberline, Owens Corning Duration, CertainTeed Landmark.)
- **Designer / premium / luxury:** Heavier, multi-layer, slate/shake-mimic (e.g. GAF Grand Sequoia, CertainTeed Grand Manor). 4–5 bundles/SQ, heavier, slower install, higher cost. Used on higher-end homes.
- **Impact-resistant (Class 4):** SBS-modified for hail/impact; matters in hail markets and for insurance discounts. Same coverage, premium cost.

**New construction vs. re-roof:** New = no tear-off, deck is clean and ready. Re-roof = tear-off labor + disposal + deck inspection/repair allowance. **Overlay (roof-over) is possible** (shingles over one existing layer) but Caza should generally tear off — overlays trap heat, hide deck problems, void some warranties, and add weight. Note if customer requests overlay; price tear-off as the default.

## 2.2 Required dimensions for an accurate quote

These are the EagleView staples — asphalt is the system EagleView formulas were built around.

- **★ Total roof area (SQ or sq ft)** — field shingles, underlayment.
- **★ Predominant pitch (x/12)** — labor modifier; gates whether it's walkable; very low slope (<2/12 or 3/12) may disqualify standard shingles (need low-slope underlayment or a different system).
- **★ Number of facets / planes** — complexity, starter/cap waste.
- **★ Eave length (LF)** — drip edge, starter, ice & water (cold climate), gutter interface.
- **★ Rake length (LF)** — drip edge, starter (on rakes if speced).
- **★ Ridge length (LF)** — ridge cap + ridge vent.
- **★ Hip length (LF)** — hip cap (uses cap shingles like ridges).
- **★ Valley length (LF)** — valley treatment (metal W-valley, or woven/closed-cut) + ice & water.
- **★ Wall flashing length (LF)** — step flashing at sidewalls, apron at headwalls (count separately).
- **★ Step-flash length (LF)** — sidewalls specifically (each course gets a step shingle).
- **Penetration count (EA)** — pipe boots.
- **Number of stories / eave height** — access/staging.
- **Existing roof: layers and type** — tear-off labor + disposal.
- **Ventilation: ridge LF available, soffit intake** — ridge vent + ensuring balanced ventilation.

## 2.3 Material list — units, coverage rates, waste

These coverage rates follow the Caza EagleView formulas already in use (shown where applicable).

| Material | Unit | Coverage / basis | Typical waste | Notes / Caza formula |
|---|---|---|---|---|
| **Field shingles** | SQ (bundles) | area ÷ 100 | ~12% (more on cut-up/steep) | **Caza formula: (Area × 1.12) ÷ 100 = squares**, round up. ~3 bundles/SQ architectural (4–5 designer). |
| **Starter strip** | bundle | eave LF (+ rake if speced) | 10% | **Caza formula: (Eaves × 1.10) ÷ 100 = bundles**, round up to whole bundle. Dedicated starter (not cut 3-tabs) for wind warranty. |
| **Hip & ridge cap shingles** | bundle | (ridge + hip LF) | 10% | **Caza formula: ((Ridges + Hips) × 1.10) ÷ 30 = bundles**, round up. (~30 LF per bundle of cap.) |
| **Synthetic underlayment** | SQ (roll) | full roof area ÷ roll coverage | +10% | Replaces felt; ~10 SQ/roll typical (varies). |
| **Ice & water shield** | roll | **Caza formula: ((Eaves × 2) + Valleys + Flashing + StepFlash) ÷ 66 = rolls**, round up | included in formula | Cold-climate (this market): eaves (2 courses / 3–6 ft up to beyond exterior wall line per code), valleys, and wall flashing. ~66 ft per roll (2 SQ at 36" / 1.5 ft exposure ≈ 66 LF). Lewis County/Climate Zone 6 → ice dam protection is code and critical. |
| **Drip edge** | LF (10-ft sticks) | **Caza formula: ((Eave + Rake LF) × 1.15) ÷ 10, round up to nearest 10** | 15% | Metal drip at eaves and rakes. |
| **W-valley metal (14")** | LF / pieces | **Caza formula: Valleys ÷ 50** (≈ pieces of 14" W-valley) | — | For open-metal valleys. If closed-cut/woven valley, no metal but more shingle waste — note which method. |
| **Step flashing** | bundle/pieces | **Caza formula: StepFlash LF ÷ 25, round up to whole bundle** | — | Sidewalls — one piece per course. ~25 LF per bundle of step flashing. |
| **Headwall / apron flashing** | LF | headwall LF | 10% | Continuous apron where roof meets wall above. |
| **Pipe boots / flashings** | EA | penetration count | — | Neoprene or lead; size to pipe. |
| **Ridge vent** | LF | ridge LF (where venting) | — | Shingle-over ridge vent (corrugated or rigid). Match to soffit intake for balance. Cap shingles go over it. |
| **Roofing nails (coil)** | box/SQ | ~2.25–3.0 lb per SQ (≈ 320 nails/SQ at 4–6 per shingle) | — | Galvanized/SS; length for layers + deck. ~1 box (7,200) per ~20–25 SQ. |
| **Plastic cap nails (underlayment)** | box | underlayment area | — | For synthetic underlayment fastening. |
| **Roofing cement / sealant** | tube/bucket | penetrations, flashing terminations | — | |
| **Pipe collars / paint** | EA | as needed | — | |

**Tear-off / disposal (re-roof):**
| Item | Unit | Basis |
|---|---|---|
| Dumpster / roll-off | EA | 1 per ~20 SQ single layer (asphalt is heavy — ~250 lb/SQ tear-off); size up for multiple layers |
| Deck repair allowance | SH (sheets) / $ | inspect; budget a few sheets of plywood/OSB for rot at eaves/valleys/penetrations |

## 2.4 Labor tasks & production rates

Hours = quantity × MH/unit, then apply 2.5 modifiers to **install labor only** (not tear-off/flashing).

| Task | Unit | Base MH/SQ or unit (2-person, walkable) | Notes |
|---|---|---|---|
| **Field shingle install** | SQ | ~1.5–2.5 MH/SQ | Architectural; faster on big simple planes, slower on cut-up. |
| **Starter + drip edge** | LF | ~0.02–0.03 MH/LF | Perimeter prep. |
| **Hip & ridge cap** | LF | ~0.03–0.05 MH/LF | Capping. |
| **Underlayment** | SQ | ~0.3–0.5 MH/SQ | Roll-out + fasten. |
| **Ice & water** | LF or SQ | ~0.4–0.6 MH/SQ of covered area | Eaves/valleys/walls. |
| **Open valley metal** | LF | ~0.05–0.08 MH/LF | Closed-cut valley is shingle labor instead. |
| **Step flashing (sidewall)** | LF | ~0.06–0.10 MH/LF | Per-course weaving with shingles. |
| **Headwall/apron** | LF | ~0.05–0.08 MH/LF | |
| **Pipe boot** | EA | ~0.4–0.7 MH/EA | |
| **Ridge vent** | LF | ~0.03–0.05 MH/LF | Cut slot + install vent. |
| **Tear-off, per layer** | SQ | ~0.75–1.25 MH/SQ | Per layer; steep/heavy adds. |
| **Deck repair** | SH | ~0.5–1.0 MH/sheet | As found. |

**Crew & duration:** Common 2–4 person crew. A straightforward 25–35 SQ re-roof is often a 1–2 day job for a solid crew; cut-up, steep, or multi-layer jobs run longer.

## 2.5 Labor modifiers

Same single-combined-factor approach, capped ~1.5×, applied to install labor.

| Condition | Factor |
|---|---|
| Walkable, simple (≤6/12, few facets) | 1.0 |
| Moderate (7–8/12, some cut-up) | 1.15–1.25 |
| Steep (9–10/12) | 1.3–1.4 |
| Very steep (12/12+) | up to 1.5 (cap); may require roof jacks/staging |
| Cut-up alone (many hips/valleys/dormers) | +0.1–0.2 within cap |
| Difficult access / multi-story | +0.1 within cap |

**Separate adders (own line items):** tear-off (× layers), deck repair, roof jacks/staging on steep, high-eave staging, two-story handling.

## 2.6 Special equipment

| Equipment | When |
|---|---|
| **Dumpster / roll-off** | Tear-off disposal (asphalt is heavy — size correctly). |
| **Roofing nailers + compressor/hoses** | Standard field install. |
| **Shingle hoist / ladder elevator / conveyor** | Loading bundles to roof, esp. 2-story (bundles are ~60–80 lb). |
| **Roof jacks / toe boards / staging** | Steep (8/12+) — code and safety; budget setup. |
| **Fall protection (harness/rope)** | Steep and/or 2-story. |
| **Tear-off tools (shingle forks, dump trailer)** | Re-roof. |
| **Magnetic sweeper** | Nail cleanup — essential, asphalt jobs shed thousands of nails. |
| **Ladders / ladder hooks** | Access. |

## 2.7 Best-practice notes that change material or labor

1. **Cold-climate ice & water is code and non-negotiable in this market (Climate Zone 6).** Ice dam protection must extend from the eave edge to **at least 24" inside the exterior wall line** (often 2 courses / up to 6 ft on low pitches). Also valleys and wall intersections. Under-ordering I&W is a code miss and a callback. The Caza formula already accounts for eaves×2 + valleys + flashing + stepflash.
2. **Dedicated starter strip, not cut field shingles.** Manufacturer wind warranties require real starter at eaves (and often rakes). Using cut shingles voids warranty and reduces wind performance. Always a separate line.
3. **Synthetic underlayment over felt.** Standard now — lighter, stronger, safer to walk, won't wrinkle. Felt only if customer/budget demands. Doesn't change the area math, changes the product line.
4. **Open metal valley vs. closed-cut vs. woven — pick and price accordingly.** Open W-valley = metal material + cleaner/longer-lasting + faster water shedding. Closed-cut/woven = no metal but more shingle waste and labor and a shorter-lived detail. **Decide the method; it changes whether you buy valley metal at all.** For quality work, open metal valley is preferred.
5. **Balanced ventilation.** Ridge vent without adequate soffit intake doesn't work (and can pull conditioned air). Confirm intake exists or add it. Ridge vent LF should roughly match available ridge; cap shingles cover it. Note if intake is deficient — it's a real scope item.
6. **Deck inspection allowance on tear-offs.** You won't know rot until the old roof is off. Always budget a deck-repair allowance (a few sheets) and communicate it as an allowance, not a fixed number — eaves, valleys, and around penetrations are the usual rot spots.
7. **Drip edge at eaves AND rakes, correct sequence.** Drip edge goes *under* underlayment at eaves but *over* at rakes (or per local code/manufacturer). It's cheap material but a real labor and detailing item; don't omit.
8. **Nail count and placement = wind warranty.** Architectural shingles typically need 4 nails (6 in high-wind zones) placed in the nail line. High-wind (130 mph) specs require 6 and sometimes hand-sealing. Affects nail quantity and slightly the labor.
9. **Hip and ridge use cap shingles (or dedicated cap product), not field shingles.** Field shingles bent over a ridge crack in cold. Use cap shingles or a cap product; the Caza formula sizes them by (ridge+hip) LF.
10. **Pitch floor.** Standard shingles are rated to ~2/12 *with* special low-slope underlayment (double-layer/full I&W), and not recommended below that. Below ~2/12, redirect to a low-slope/membrane system. Flag low-pitch planes.
11. **Steep-slope staging is a real cost.** At 8/12+ you need roof jacks and toe boards; at 10/12+ and two stories, often staging/scaffold. This is setup labor *and* equipment that a flat-rate per-square misses on a steep roof.
12. **Layer limit and weight.** Code generally allows max 2 layers; a third is not permitted and overlays add dead load. If the existing roof already has 2 layers, tear-off is mandatory (not optional). Confirm existing layers.

## 2.8 Quick worked example (calibration reference)

Typical Caza architectural re-roof:
- **Roof:** ~30 SQ (3,000 sq ft), 7/12, moderate cut-up, 1-layer tear-off, eaves 180 LF, rakes 120 LF, ridges 60 LF, hips 40 LF, valleys 80 LF, step-flash 50 LF, 6 penetrations.
- **Field shingles:** (3,000 × 1.12) ÷ 100 = **34 SQ** → ~102 bundles architectural.
- **Starter:** (180 × 1.10) ÷ 100 = **~2 bundles**.
- **Hip/ridge cap:** ((60 + 40) × 1.10) ÷ 30 = **~4 bundles**.
- **Ice & water:** ((180×2) + 80 + 0 + 50) ÷ 66 = (360+80+50)/66 ≈ **8 rolls**.
- **Drip edge:** ((180+120) × 1.15) ÷ 10 = **~35 sticks** (350 LF).
- **W-valley:** 80 ÷ 50 ≈ **2 pieces** (if open metal).
- **Step flashing:** 50 ÷ 25 = **2 bundles**.
- **Labor:** 34 SQ × ~2.0 MH/SQ × ~1.2 (moderate) ≈ 82 MH install + tear-off (30 × 1.0 ≈ 30) + perimeter/valley/flashing/vent (~40–60) ≈ **~155–175 MH**.
- **Equipment:** dumpster, nailers, shingle hoist (loading), fall protection, magnetic sweeper.

---

# 3. SLATE / NU-LOK

## 3.1 System overview & sub-types

Slate is the premium, century-lifespan roof — natural stone (or engineered/synthetic equivalents) installed in overlapping courses. It is **heavy, slow, skill-intensive, and unforgiving**, which is why labor dominates the estimate far more than on any other roof. The estimate is driven by **the slate itself (by square, high cost), the labor (very high MH/SQ), the underlayment/flashing (often copper or stainless for matched lifespan), and structural capacity.**

**Sub-types — these are genuinely different products and estimates:**

- **Natural slate (traditional):** Quarried stone, 75–150+ year lifespan, very heavy (~800–1,500+ lb/SQ depending on thickness/grade), installed with copper or stainless nails on battens or solid deck with high-temp underlayment. Highest material cost, highest skill, highest weight. Grades/thicknesses vary (standard, textural, graduated). Sources: Vermont, Pennsylvania, Spanish, Welsh.
- **Nu-Lok slate roofing system:** An **interlocking batten-based system** that holds natural slate (or other materials) in a engineered framework. The Nu-Lok rails/battens create a screen-and-cavity system; slates clip into the rails rather than each being individually nailed in traditional fashion. **This changes the labor profile** — more systematized, the rail system is its own material line, and install differs from traditional hand-nailing. Caza has quoted Nu-Lok (Fayetteville estate). Treat the **rail/batten system as a distinct major material line** and the labor as system-specific (the rail layout + slate placement), generally more predictable than fully traditional slate but still specialty.
- **Synthetic / composite slate (e.g. DaVinci, Brava, EcoStar):** Polymer/rubber slate-look tiles. Much lighter (~250–400 lb/SQ — often no structural upgrade needed), faster to install than natural, lower cost than natural slate but premium vs. asphalt, 30–50 yr warranties. Installed more like a heavy shingle. **If the job is synthetic slate, the weight/structural concern largely goes away and labor drops substantially** — estimate closer to a premium designer shingle with slate detailing.
- **Concrete/clay tile (related specialty):** Not slate but often in the same "specialty heavy roof" bucket. Heavy, batten-installed, specialty flashing. If encountered, note separately.

**The structural question comes first.** Natural slate weighs 3–6× asphalt. The existing structure must be verified to carry it — rafter size/spacing, sheathing, and sometimes engineering. For a re-roof from asphalt to natural slate, **a structural evaluation is a real pre-condition and possible cost.** Synthetic slate usually avoids this. Always flag structural capacity for natural slate.

## 3.2 Required dimensions for an accurate quote

- **★ Total roof area (SQ)** — slate quantity, underlayment.
- **★ Predominant pitch (x/12)** — slate requires steep pitch (generally **≥4/12 minimum, 6/12+ strongly preferred**; steeper sheds better and is traditional). Labor modifier. Below 4/12, slate is inappropriate.
- **★ Number of facets / planes** — complexity; slate cutting at hips/valleys is very labor-intensive.
- **★ Eave, rake, ridge, hip, valley LF** — all the perimeter/transition details, which in slate are often **copper or stainless** (matched lifespan) and very labor-intensive.
- **★ Headwall / sidewall LF** — copper/lead flashing details.
- **★ Penetration count** — each penetration in slate is a careful, custom flashed detail (lead/copper).
- **★ Slate thickness/grade and exposure** — affects coverage (slates per SQ) and weight.
- **★ Existing structure / rafter framing** — capacity for natural slate weight (critical pre-condition).
- **Number of stories / eave height** — access, staging, material handling (slate is heavy and fragile).
- **Hip/ridge treatment** — slate ridge, metal ridge, or saddle/Boston ridge — changes material and labor.
- **Snow load / snow retention** — heavy snow market; slate + snow guards common.

## 3.3 Material list — units, coverage rates, waste

| Material | Unit | Coverage / basis | Typical waste | Notes |
|---|---|---|---|---|
| **Natural slate** | SQ (pieces) | area; slates per SQ depend on size/exposure (e.g. ~3 SQ coverage needs hundreds of slates) | **10–15%+** (breakage + hip/valley cuts) | High waste — slate breaks in handling and cutting. Order extra + attic stock (future repairs need matching). Heavy. |
| **Nu-Lok rail / batten system** | LF or per-SQ kit | per Nu-Lok system layout (rails at slate-course spacing) | per system | The defining material of a Nu-Lok job. Price from the system's coverage (rails + clips + components per SQ). Treat as a major line. |
| **Counter-battens / battens (traditional)** | LF | course spacing × area (battens run horizontal at slate exposure) | 10% | If batten-installed (ventilated slate). Pressure-treated or per spec. |
| **High-temp underlayment** | SQ (roll) | full roof | +10% | Slate lasts a century — underlayment should be premium high-temp (some specs use 30# felt traditionally, but modern high-temp synthetic/I&W preferred). |
| **Ice & water (eaves/valleys/walls)** | roll | eaves + valleys + walls (cold climate) | per formula | Same cold-climate logic as shingle; critical under century roof. |
| **Copper or stainless slate nails** | lb / box | ~2 nails per slate; lb per SQ varies | — | **Copper or stainless ONLY** — the nails must outlast... they're fastening a 100-yr roof. Galvanized fails first and the whole roof slips. Big best-practice item. |
| **Slate hooks / clips (if used)** | EA | per slate in hook-installed systems / Nu-Lok | — | Some systems/repairs use hooks instead of nails. |
| **Copper / lead valley** | LF | valley LF | 10–15% | Open copper valley is traditional and matched-lifespan; wide pan. |
| **Copper / lead flashing (walls, penetrations)** | LF / EA | wall LF + penetration count | 10% | Step or pan flashing in copper/lead; penetrations custom-flashed. |
| **Ridge / hip treatment (slate or metal)** | LF | ridge + hip LF | 10% | Slate ridge (saddle/Boston), or copper ridge, or metal — per design. |
| **Snow guards / snow rail** | EA / LF | exposed eaves + above entries | — | Heavy-snow market; protects people/gutters from sliding ice and the slate from snow load shear. |
| **Sealant (specialty)** | tube | terminations | — | |

**Tear-off / disposal & structural:**
| Item | Unit | Basis |
|---|---|---|
| Tear-off (existing roof) | SQ | by type/layers |
| Dumpster | EA | natural slate tear-off is VERY heavy — size up; old slate disposal is a real weight |
| Structural evaluation / reinforcement | $ / allowance | natural slate only — verify/upgrade framing capacity |
| Attic stock slate | SQ (extra) | always order matching extra for future repairs |

## 3.4 Labor tasks & production rates

**This is the section that dominates a slate estimate.** Slate labor is 2–4× shingle and requires skilled installers.

| Task | Unit | Base MH/SQ or unit | Notes |
|---|---|---|---|
| **Natural slate install (traditional, hand-nailed)** | SQ | **~6–12+ MH/SQ** | Caza rate-book ~4.571 MH/SQ as a baseline; traditional hand-nailed cut-up work runs higher (8–12). Highly dependent on grade, pattern (graduated/textural slower), and complexity. |
| **Nu-Lok slate system install** | SQ | system-specific; generally more systematized than full traditional but still specialty (~4–7 MH/SQ range) | Rail layout + slate placement; more predictable than hand-nailing each slate. |
| **Synthetic slate install** | SQ | ~2.5–4 MH/SQ | Lighter, faster, more forgiving — closer to premium designer shingle. |
| **Battens / counter-battens** | LF or SQ | ~0.3–0.6 MH/SQ | If ventilated batten system. |
| **High-temp underlayment / I&W** | SQ | ~0.4–0.6 MH/SQ | Full roof. |
| **Copper/lead valley** | LF | ~0.10–0.18 MH/LF | Slow, skilled metalwork. |
| **Copper/lead wall flashing** | LF | ~0.10–0.18 MH/LF | Custom. |
| **Slate ridge / hip** | LF | ~0.10–0.20 MH/LF | Saddle/Boston ridge is slow and skilled. |
| **Penetration (custom flashed)** | EA | ~1.5–4 MH/EA | Each is a careful lead/copper detail. |
| **Hip/valley slate cutting** | (in field rate) | adds heavily to MH/SQ on cut-up roofs | Every slate at a hip/valley is hand-cut to angle. |
| **Snow guards** | EA | ~0.2–0.4 MH/EA | |
| **Tear-off (old slate)** | SQ | ~1.5–2.5 MH/SQ | Heavy, careful (salvage if reusing), debris-heavy. |

**Crew & duration:** Skilled 2–4 person crew, often including a dedicated slater. Slate jobs run **long** — a moderate slate roof can be weeks, not days. Do not compress.

## 3.5 Labor modifiers

Single combined factor, but note the **base rate is already high**; the cap can be higher for slate given how much complexity actually slows it.

| Condition | Factor |
|---|---|
| Steep but simple slate (6–8/12, few facets) | 1.0 (on the already-high base) |
| Moderate cut-up (hips/valleys/dormers) | 1.15–1.3 |
| Very cut-up / graduated / textural pattern | 1.3–1.5 |
| Steep (10/12+) + cut-up | up to ~1.5 |
| Difficult access / fragile-material handling / height | +0.1–0.15 within cap |

**Separate adders:** structural evaluation/reinforcement (natural slate), tear-off (heavy), staging/scaffold (slate is fragile and heavy — staging is common and a real cost), copper/metalwork detailing, snow retention.

## 3.6 Special equipment

| Equipment | When |
|---|---|
| **Slate cutter / slate hammer / ripper** | All natural slate — cutting, holing, removing broken slates. |
| **Scaffold / staging** | Slate is heavy and fragile; staging is commonly required (not just roof jacks) for safe handling and access — a real equipment cost. |
| **Material hoist / crane / boom** | Slate is heavy (pallets); getting it to roof level safely on multi-story needs mechanical lift. |
| **Brake / metal tools (copper)** | On-site copper/lead flashing fabrication. |
| **Soldering equipment (copper)** | Soldered copper valleys/flashing on traditional work. |
| **Fall protection / staging** | Steep + height; mandatory. |
| **Dumpster (heavy)** | Old slate tear-off is very heavy — size for weight. |
| **Magnetic sweeper** | Cleanup (copper/steel nails). |

## 3.7 Best-practice notes that change material or labor

1. **Copper or stainless fasteners ONLY (natural slate).** The fastener must outlast or match the slate (100+ yr). Galvanized corrodes in decades and the slates slip off a still-good roof. This is the #1 slate best-practice — never substitute cheaper nails. Affects material cost meaningfully.
2. **Structural capacity is a pre-condition for natural slate.** Verify rafters/sheathing can carry 800–1,500+ lb/SQ. From-asphalt conversions often need reinforcement or at least an evaluation. Budget it or condition the quote on it. Synthetic slate usually sidesteps this entirely — which is often the reason to choose synthetic.
3. **Matched-lifespan flashing (copper/lead).** Putting galvanized or aluminum flashing on a century slate roof guarantees the flashing fails first and forces a tear-back. Use copper or lead for valleys, walls, and penetrations on natural slate. Major material cost driver. (Synthetic slate can use lesser flashing matched to its shorter warranty.)
4. **Nu-Lok is a system — price the rail/framework as a major line.** Don't estimate Nu-Lok as "slate on a deck." The rail/batten/clip framework is a defining material and the install follows the system's method. Use Nu-Lok's coverage data.
5. **Pitch floor (natural slate ≥4/12, prefer 6/12+).** Slate relies on shedding; too-low pitch leaks. Flag low-pitch planes as unsuitable for natural slate.
6. **Order attic stock + high waste.** Slate breaks in handling and cutting (10–15%+ waste), and future repairs need matching slate (color/quarry lots vary). Always order extra and leave attic stock. Under-ordering means a future repair can't be matched.
7. **Graduated / textural / patterned slate is much slower.** Graduated (varying thickness/size eave-to-ridge) and textural patterns multiply labor. Confirm the pattern; a "standard" rate badly under-prices a graduated roof.
8. **Battens vs. solid deck (ventilated slate).** Some specs install slate on battens over a ventilated cavity (better longevity, drainage). That adds batten material and a labor step vs. direct-to-deck. Confirm the assembly.
9. **Snow retention on slate in snow country.** Sliding snow shears slates and endangers everything below. Snow guards/rails are commonly required in this market — a real material + labor line, especially over entries and above gutters.
10. **Handling and breakage discipline.** Slate is fragile; walking a finished slate roof cracks slates. Staging, slate ladders/hooks, and careful sequencing are required — this is real labor/equipment, not overhead. A broken slate during install is rework.
11. **Synthetic slate changes the whole estimate.** If the customer is open to synthetic (DaVinci/Brava/EcoStar), weight/structural concerns largely vanish, labor drops, flashing can be matched to the shorter warranty, and the job estimates much closer to a premium shingle. Always clarify natural vs. synthetic — they are different jobs with different costs by a wide margin.
12. **Eave detailing and starter course.** Slate needs a proper starter/cant at the eave (double course / cant strip) for the first course to lie at the right angle. A real detailing item.

## 3.8 Quick worked example (calibration reference)

Natural-slate estate re-roof (the Caza Fayetteville Nu-Lok type, illustrative):
- **Roof:** ~30 SQ, 9/12, cut-up (hips/valleys/dormers), Nu-Lok natural slate, copper flashing, snow guards.
- **Structural:** verify framing for slate weight (pre-condition / possible reinforcement) — flag.
- **Slate + Nu-Lok rail:** slate by SQ + ~15% waste + attic stock; Nu-Lok rail system by its per-SQ coverage (major line).
- **High-temp underlayment full roof; copper valleys (valley LF); copper wall flashing (wall LF); copper/slate ridge (ridge+hip LF); snow guards (EA at eaves/entries).**
- **Fasteners:** copper/stainless only.
- **Labor:** ~30 SQ × ~4.5–7 MH/SQ (Nu-Lok system) × ~1.3 (cut-up) ≈ ~175–270 MH slate install + copper metalwork (valleys/walls/ridge, often 60–120 MH) + tear-off + staging setup ≈ **a multi-week job, several hundred MH**. This is why slate sells at $250K–$305K depending on margin on a roof this size — labor and matched-lifespan materials dominate.
- **Equipment:** scaffold/staging, material hoist, slate tools, copper brake + soldering, fall protection, heavy dumpster.

---

# 4. FLAT / LOW-SLOPE MEMBRANE (TPO / EPDM / BUR)

## 4.1 System overview & sub-types

Low-slope roofing (generally **below ~2/12–3/12**) sheds water slowly, so it relies on a **continuous waterproof membrane** rather than overlapping shedding courses. This is the commercial/flat-roof world. The estimate is driven by **the membrane (by area), the insulation (often the biggest cost — by area and R-value/thickness), the attachment method, and the perimeter/penetration detailing (which is where flat roofs leak and where the labor concentrates).**

**Sub-types — three main membranes, plus the attachment method, define the job:**

- **TPO (thermoplastic polyolefin):** Single-ply, **heat-welded seams**, typically white (reflective/cool roof), most common new commercial membrane now. Welded seams are strong and the install is relatively fast. Thicknesses 45/60/80 mil (60 is common; 80 for high-traffic/durability). Mechanically attached, fully adhered, or ballasted.
- **EPDM (rubber):** Single-ply synthetic rubber, **seamed with tape/adhesive** (not welded), typically black (can be white). Very durable and proven (decades of track record), handles temperature extremes well. Thicknesses 45/60/90 mil. Mechanically attached, fully adhered, or ballasted. Caza has done EPDM reroofs (Lewis County). Seam method differs from TPO (tape/primer vs. heat weld).
- **Modified bitumen (mod-bit / SBS / APP):** Asphalt-based rolled membrane, **torch-applied, hot-mopped, cold-adhesive, or self-adhered**, often in 2 plies (base + cap). Granulated cap. Good for foot traffic, redundant plies. Heavier install, torch safety considerations.
- **BUR (built-up roof / "tar and gravel"):** Multiple plies of felt + bitumen (hot-mopped), topped with gravel or cap sheet. The traditional flat roof. Labor-intensive, hot work; mostly a re-cover/repair scenario now or spec-driven. Caza dealt with BUR layers on the Syracuse recover.

**Attachment method (drives labor and fasteners/adhesive):**
- **Mechanically attached:** Membrane fastened with plates/screws into the deck at seams/rows. Fastest, most common. Fastener pattern by wind zone.
- **Fully adhered:** Membrane glued down with bonding adhesive — better wind/aesthetics, no fasteners through field, slower and more adhesive cost.
- **Ballasted:** Loose-laid, held by gravel/pavers. Less common new; weight-dependent.

**Insulation is usually the biggest single cost on a flat roof.** Polyiso (ISO) board to a target R-value (code-driven — Climate Zone 6 commercial often **R-30 to R-35ci**), sometimes in multiple layers with staggered seams, plus a cover board. This is by area × thickness and is a major line.

**Recover vs. tear-off:** Flat roofs are often **recovered** (new membrane + insulation over the existing, if the deck is sound and code/layers allow) to avoid tear-off cost and building exposure — Caza used a recover strategy on the Syracuse job. Or full tear-off to deck. The choice drives tear-off labor, disposal, and sometimes a vapor/recovery board.

## 4.2 Required dimensions for an accurate quote

- **★ Total roof area (SQ or sq ft)** — membrane, insulation, cover board (the big three).
- **★ Roof sections / planes** — multi-level or multi-section roofs (the Syracuse 3-structure job) each have their own perimeter and tie-ins.
- **★ Perimeter / parapet LF** — edge metal, termination bar, coping, parapet flashing (parapets are a huge detailing/labor item — the EPDM job had 965 LF of brick parapet).
- **★ Parapet height** — wall flashing area and coping.
- **★ Penetration count and types (EA)** — pipes, drains, curbs, HVAC units, vents (the EPDM job had 32 penetrations). Each is a flashed detail and labor.
- **★ Drains / scuppers count and type** — internal drains, scuppers, gutters; drainage is critical on flat roofs.
- **★ Insulation R-value target (code)** — drives ISO thickness and layers (e.g. R-35ci).
- **★ Deck type** — steel, concrete, wood, gypsum — drives fastener type and attachment.
- **★ Existing roof: recover or tear-off, layers, type** — strategy + disposal.
- **Curbs / equipment / skylights** — each curb is custom flashing and labor.
- **Slope / tapered insulation needs** — is there positive drainage, or is tapered ISO needed to create slope to drains? (Tapered ISO is a major design + cost item.)
- **Walkway pad needs** — traffic paths to equipment.

## 4.3 Material list — units, coverage rates, waste

| Material | Unit | Coverage / basis | Typical waste | Notes |
|---|---|---|---|---|
| **Membrane (TPO/EPDM/mod-bit)** | SQ (rolls) | roof area; rolls sized by width (e.g. 10' wide) | ~10–15% (seams/laps/cuts/details) | TPO/EPDM by the roll; account for seam overlaps (welded ~1.5–3", taped per spec) and detail wrap. Color/thickness per spec. |
| **Polyiso (ISO) insulation board** | SQ (boards) | area × number of layers to hit R-value | ~5–10% | **Often the biggest line.** R-value ÷ ~5.7/inch = thickness; thick assemblies use 2+ staggered layers. e.g. R-30 ≈ 5.5", R-35 ≈ 6"+. Board 4×8. |
| **Cover board** | SQ (boards) | area | ~5–10% | Over ISO under membrane (e.g. ½" HD ISO, gypsum, or fiber board) — protects membrane, improves puncture/fire/wind. Common on quality systems. |
| **Membrane fasteners + plates** | per SQ / box | by wind-zone fastening pattern (field/perimeter/corner densities differ) | — | Mechanically attached: plates/screws at seams + rows. Perimeter/corner zones get denser. Big count on large roofs. |
| **Bonding adhesive** | bucket | fully-adhered area ÷ coverage (~60 sq ft/gal typical, both surfaces) | — | Fully adhered only; doubles application (membrane + substrate). |
| **Seam tape / primer (EPDM)** | roll / can | seam LF | — | EPDM seams: splice tape + primer. By seam LF. |
| **TPO welding (no consumable seam tape)** | — | seam LF (labor, not material) | — | TPO seams are heat-welded — robotic welder + hand welder; seam is labor/equipment, minimal consumable. |
| **Termination bar** | LF | parapet/wall perimeter LF | 10% | Bar + fasteners + sealant at wall terminations. |
| **Edge metal / drip edge / fascia (gravel stop)** | LF | roof perimeter LF | 10% | Perimeter edge metal; profile per detail. |
| **Coping (parapet cap)** | LF | parapet top LF | 10% | Metal coping over parapet walls — big item where parapets exist. |
| **Parapet / wall flashing membrane** | SQ / LF | parapet height × parapet LF | 10% | Membrane up the parapet (the 965 LF of parapet = significant wall flashing area). |
| **Pipe boots / pre-molded penetration flashings** | EA | penetration count | — | Pre-molded (pipe boots, pourable sealer pockets for irregular). |
| **Drains / drain flashing / clamping rings** | EA | drain count | — | Retrofit drains, drain bowls, clamping rings, strainers. |
| **Curb flashing** | EA / LF | curb count × perimeter | — | Each curb (HVAC, skylight) custom-flashed. |
| **Walkway pads** | EA / SQ | traffic paths | — | Protect membrane along equipment routes. |
| **Cant strips** | LF | inside corners (wall/roof) | 10% | At parapet/wall base for membrane transition (esp. BUR/mod-bit). |
| **Adhesives / primers / sealants / pourable sealer** | bucket/tube | details + penetrations | — | Various; flashing-grade. |
| **Tapered insulation (if needed)** | SQ (custom) | per tapered layout to drains | higher | Custom-cut taper packages create slope; design + premium cost. |

**Tear-off / recover & disposal:**
| Item | Unit | Basis |
|---|---|---|
| Tear-off (to deck) | SQ | by existing system/layers (BUR + gravel is heavy) |
| Recover board / vapor retarder | SQ | if recovering over existing |
| Dumpster | EA | size by tear-off weight (BUR/gravel very heavy; recover = much less) |

## 4.4 Labor tasks & production rates

| Task | Unit | Base MH/SQ or unit | Notes |
|---|---|---|---|
| **Membrane install — mechanically attached** | SQ | ~1.0–1.8 MH/SQ | Fastest method; open field is quick, perimeter/detail slower. |
| **Membrane install — fully adhered** | SQ | ~1.5–2.5 MH/SQ | Adhesive both surfaces; slower. |
| **TPO heat-welded seaming** | LF (or in SQ rate) | included; robotic welder fast on long runs, hand-weld at details | Detail welding is the slow part. |
| **EPDM taped seaming** | LF | clean/prime/tape | Slower per LF than robotic TPO weld on big fields. |
| **Mod-bit (torch/mop), per ply** | SQ | ~1.5–3 MH/SQ per ply | 2 plies doubles; hot/torch work. |
| **BUR (built-up), multi-ply** | SQ | ~3–5 MH/SQ | Labor-intensive hot work. |
| **ISO insulation (per layer)** | SQ | ~0.4–0.8 MH/SQ per layer | Multiple layers multiply; fastening or adhering. |
| **Cover board** | SQ | ~0.4–0.6 MH/SQ | |
| **Parapet / wall flashing** | LF | ~0.10–0.20 MH/LF | Membrane up wall + termination bar — slow, and parapets are extensive. |
| **Coping install** | LF | ~0.08–0.15 MH/LF | |
| **Edge metal / gravel stop** | LF | ~0.05–0.10 MH/LF | |
| **Penetration / pipe boot** | EA | ~0.5–1.5 MH/EA | Each flashed. |
| **Drain flashing / retrofit drain** | EA | ~1–3 MH/EA | |
| **Curb flashing (HVAC/skylight)** | EA | ~2–6 MH/EA | Custom, slow. |
| **Tear-off (existing flat)** | SQ | ~1.0–2.5 MH/SQ | BUR/gravel heavy; recover avoids most. |
| **Tapered insulation layout** | SQ | adds to ISO labor | Custom cutting/layout to drains. |

**Crew & duration:** Commercial flat roofs run larger crews (often including the Hispanic sub-crews Caza uses for big commercial). Duration scales with area, number of sections, and detailing density. **Perimeter and penetrations consume labor out of proportion to their area** — a small roof with many curbs/drains/parapets can be more labor than a big open roof.

## 4.5 Labor modifiers

Flat-roof labor is less about pitch (it's flat) and more about **detailing density, height/access, and tear-off**.

| Condition | Factor / adder |
|---|---|
| Large open field, few details | 1.0 (efficient) |
| High detailing density (many penetrations, curbs, drains, parapets per SQ) | +0.15–0.35 — details dominate |
| Multi-section / multi-level roof (tie-ins, level changes) | +0.1–0.2 |
| High-rise / difficult access (crane loading, hoisting) | +0.1–0.2 + equipment |
| Tapered insulation layout | +0.1–0.15 |
| Occupied building / phasing / weather-sensitive recover | +0.1 (sequencing) |

**Separate adders (own lines):** tear-off (× layers/system), tapered ISO, crane/hoisting, overtime/night work if occupied building requires it, dumpster (weight).

## 4.6 Special equipment

| Equipment | When |
|---|---|
| **TPO robotic + hand welders** | TPO — automatic welder for field seams, hand welder for details. Defining TPO equipment. |
| **EPDM seam tools** | Rollers, primer applicators for taped seams. |
| **Torch kit / kettle (mod-bit/BUR)** | Torch-applied mod-bit or hot-mopped BUR — fuel, kettle, safety. Hot-work permit considerations. |
| **Insulation fastening tools / screw guns** | Mechanically attached ISO + membrane; auto-feed fastener tools speed large roofs. |
| **Crane / hoist / boom / ladder elevator** | Getting membrane rolls, ISO boards, and equipment to roof level — esp. multi-story commercial. Material loading is a real logistics cost. |
| **Power broom / blower** | Substrate cleaning before adhering/welding. |
| **Brake / metal tools** | Edge metal, coping, counter-flashing fabrication. |
| **Moisture survey tools** | On recovers — verify existing isn't wet (trapped moisture ruins a recover). |
| **Dumpster / debris chute** | Tear-off disposal; chute for multi-story. |
| **Safety: warning lines / guardrails / harness** | Flat-roof fall protection at edges (OSHA); parapet height matters. |

## 4.7 Best-practice notes that change material or labor

1. **Insulation R-value is code-driven and is usually the biggest cost — get the thickness/layers right.** Climate Zone 6 commercial often requires R-30 to R-35ci. That's ~6" of polyiso, typically in 2+ staggered layers (single thick layers have thermal-bridging seams). Under-speccing R-value fails code; mis-counting layers badly mis-prices the job.
2. **Cover board on quality systems.** A cover board over ISO under the membrane improves puncture resistance, fire rating, wind uplift, and membrane longevity. Most quality commercial specs include it — a real material + labor line, not optional on good work.
3. **Perimeter and penetrations are where flat roofs leak and where labor concentrates.** Parapets, terminations, drains, curbs, and pipe penetrations consume labor far out of proportion to their area. A roof with 32 penetrations and 965 LF of parapet (the EPDM job) is mostly *detailing* labor. Price details explicitly; don't bury them in a per-square field rate.
4. **Positive drainage is mandatory — tapered insulation if the deck is dead-flat.** Ponding water destroys membranes and voids warranties. If there's no slope to drains, tapered ISO is required to build slope — a major design and cost item. Always confirm drainage; "flat" should still drain.
5. **Recover vs. tear-off — verify the existing is dry first.** Recovering over a wet existing roof traps moisture and ruins the new system. Moisture survey before recover. Recover saves tear-off cost and building exposure (Caza's Syracuse strategy) but only if the deck/existing is sound and code allows the added layer.
6. **Attachment method must match wind zone.** Fastening density increases at perimeters and corners (wind uplift is highest there). A flat field fastening pattern applied to corners fails. Fastener/adhesive quantity follows the wind-zone pattern — field/perimeter/corner zones differ.
7. **Match seam method to membrane.** TPO = heat-welded (welder equipment, minimal consumable, strong seam). EPDM = taped/primed (consumable tape + primer, different labor). Don't cross them. Welded TPO seams are faster on big fields; EPDM detailing is proven and flexible.
8. **Coping and edge metal are major perimeter lines.** Parapet coping (cap metal) and edge/gravel-stop run the full perimeter and are both material and labor. On a parapet-heavy roof this is a significant chunk. ANSI/SPRI ES-1 edge-securement matters for warranty/code.
9. **Walkway pads to equipment.** HVAC units and serviced equipment need protected walk paths or the membrane gets punctured by foot traffic over time. A real line on roofs with rooftop equipment.
10. **Drains: clamping rings, strainers, retrofit bowls.** Drainage details (new drains, drain flashing, clamping rings, strainers/domes) are specific labor and parts. Scuppers/overflow per code. Don't overlook overflow drainage (code-required secondary).
11. **Fire and wind ratings (FM/UL) on commercial.** Many commercial specs/insurers require FM-approved or UL-rated assemblies (specific membrane + cover board + insulation + fastening combos). This constrains the material choices and sometimes adds cover board/fastening — affects both material and cost.
12. **Cant strips at wall/roof transitions (BUR/mod-bit especially).** Inside corners need cant strips so the membrane isn't bridged at a 90°. A small but real material + labor item on built-up/mod-bit and many parapet details.
13. **Cool-roof / reflectivity.** White TPO (or coated) reduces cooling load and may be required by energy code or sought for rebates. Affects membrane choice/color, not quantity.

## 4.8 Quick worked example (calibration reference)

Caza commercial EPDM reroof (Lewis County type, validated against the ~$295K bid at 31% GM):
- **Roof:** ~13,530 sq ft (~135 SQ) multi-section flat, EPDM, polyiso to **R-35ci**, EPDM flashing, **965 LF brick parapet**, **32 penetrations**.
- **Insulation (biggest line):** ~135 SQ × polyiso to R-35 (~6"+, multiple staggered layers) + cover board — a major cost.
- **Membrane:** ~135 SQ EPDM + ~12% for seams/details/wall flashing; taped seams (primer + splice tape by seam LF).
- **Parapet:** 965 LF — wall flashing membrane (height × LF) + termination bar + coping = huge detailing line.
- **Penetrations:** 32 EA flashed (pipe boots, curbs, drains) — significant labor.
- **Edge metal** full perimeter; **drains/scuppers** per count.
- **Labor:** field membrane + multi-layer ISO + cover board (by SQ) **plus** heavy detailing (965 LF parapet + 32 penetrations dominate). Larger crew / commercial sub-crew. Details, not field, drive the hours.
- **Equipment:** insulation fastening tools, EPDM seam tools, crane/hoist for material loading, metal brake for coping/edge, dumpster, fall protection.
- **Result:** ~$295K at 31% GM — insulation + parapet/penetration detailing are why it prices where it does, not the open field.

---

# 5. EXPOSED-FASTENER METAL (AG PANEL / R-PANEL)

## 5.1 System overview & sub-types

Exposed-fastener metal is the economical metal roof: corrugated or ribbed steel panels **screwed directly through the face of the panel** into the deck or purlins, with the fastener heads (and their neoprene washers) visible on the surface. It's faster and cheaper than standing seam but the exposed gasketed screws are the wear point (washers degrade, screws back out over decades). Common on agricultural, pole barns, outbuildings, budget residential, and light commercial. Caza priced a steel-siding barn in this family. The estimate is driven by **panel area (by coverage width), the screws (a real count), the trim package, and closures.**

**Sub-types — panel profiles (coverage width is what matters for the takeoff):**

- **AG panel / "ag-rib" / R-panel (most common):** Ribbed steel panel, typically **36" net coverage width**, 26 or 29 gauge, exposed screws at the ribs/flats per pattern. The default exposed-fastener panel. (Names vary by supplier: R-panel, PBR, ag-panel, "5V" is a different corrugated profile.)
- **Corrugated (round wave, e.g. 7/8" or "5V crimp"):** Older/agricultural look; 5V is common on barns/cabins. Different coverage width and fastening.
- **PBR panel:** Like R-panel but with a purlin-bearing leg for a better side-lap; common light commercial.
- **Standing-seam-look exposed-fastener:** Some panels mimic standing seam but still face-fasten — clarify, because it's estimated as exposed-fastener (screws + closures), not concealed-clip.

**Gauge/finish:** 29-gauge (lightest/cheapest, residential/ag), 26-gauge (light commercial/better), painted (SMP or Kynar — SMP common on budget, Kynar premium). Galvalume (bare) for ag. Finish affects cost, not quantity.

**Over solid deck vs. over purlins/open framing:** Residential is usually over solid deck + underlayment. Ag/pole-barn is often **over purlins (open framing, no deck)** — which changes underlayment (none, or a condensation control like a drip-stop backing or a separate vapor barrier), fastener length (into purlin), and the whole assembly. **Confirm deck vs. purlins** — big assembly difference.

## 5.2 Required dimensions for an accurate quote

- **★ Total roof area (SQ or sq ft)** — panel quantity (by coverage width).
- **★ Panel coverage width** — usually 36" net for AG/R-panel; corrugated differs. Panel quantity = area ÷ coverage width (in panels of the needed length).
- **★ Panel run length (eave to ridge)** — panels are usually ordered cut-to-length per slope; affects ordering and whether endlaps are needed on long runs.
- **★ Predominant pitch (x/12)** — exposed-fastener has a **pitch floor (~3/12 minimum, manufacturers often say 3:12; some down to 1:12 with sealed laps)**; labor modifier. Below minimum, leaks at laps.
- **★ Eave, rake, ridge, hip, valley LF** — trim package (eave/rake/ridge/hip trim) + closures.
- **★ Headwall / sidewall LF** — wall flashing/trim.
- **★ Penetration count** — pipe flashings (boots).
- **Deck type: solid deck or purlins/open framing** — drives underlayment, fastener length, condensation control.
- **Number of stories / eave height** — access, panel handling (long panels).
- **Existing roof (re-roof)** — tear-off or over-existing (metal-over-shingle on purlins/battens is sometimes done on outbuildings).

## 5.3 Material list — units, coverage rates, waste

| Material | Unit | Coverage / basis | Typical waste | Notes |
|---|---|---|---|---|
| **Exposed-fastener panel** | SQ or panels (by LF² coverage) | area ÷ coverage width; ordered as panels cut to slope length | ~5–10% (less than standing seam — simpler cuts; more on hips/valleys) | 36" net coverage typical for AG/R-panel. Order by panel (length × count) or by square. Cut-to-length avoids endlaps. |
| **Roofing screws (gasketed, self-tapping)** | EA (boxes) | **the real count** — pattern is ~per sq ft; typical field ~**80 screws per square** (varies by profile/spacing, more at laps/eaves/ridges) | — | Neoprene-washer screws, length for deck vs. purlin. This is a genuine line item — a barn roof needs thousands of screws. Color-matched heads. |
| **Underlayment (solid deck)** | SQ (roll) | full roof if over deck | +10% | Synthetic or felt; high-temp under metal preferred. Over purlins: usually none, or condensation control instead. |
| **Condensation control (over purlins)** | SQ | panel area | — | Drip-stop factory backing on panels, OR a separate vapor barrier/condensation membrane over purlins — prevents underside condensation dripping. Ag-specific. |
| **Ridge cap** | LF | ridge LF | ~10% | Formed ridge cap (often with ridge closure or vented closure). |
| **Hip cap / trim** | LF | hip LF | ~10% | |
| **Eave trim / drip / rat-guard** | LF | eave LF | ~10% | Eave trim / gutter apron. |
| **Rake / gable trim** | LF | rake LF | ~10% | |
| **Sidewall / endwall flashing (transition)** | LF | wall LF | ~10% | Wall-to-roof trim. |
| **Valley trim** | LF | valley LF | ~10–15% | Formed valley; panels cut to it (cut waste). |
| **Closure strips (foam — inside/outside)** | LF (or per panel) | eave, ridge, and endlaps — match panel profile | — | Profiled foam closures fill the corrugation gaps at eave/ridge to block water/pests/air. Inside vs. outside closures per location. Profile-specific. |
| **Butyl / mastic sealant tape** | roll | endlaps, sidelaps where sealed, trim laps | — | Sealing panel laps (esp. low pitch) and trim. |
| **Pipe flashings / boots** | EA | penetration count | — | High-temp boots sized to pipe. |
| **Tube sealant** | tube | penetrations, trim ends, closure adhesion | — | |
| **Touch-up paint** | EA | 1–2 | — | Field cuts/scratches. |
| **Gutter / accessories (if in scope)** | LF | eave LF | — | Often paired on ag/residential. |

**Tear-off / disposal (re-roof):**
| Item | Unit | Basis |
|---|---|---|
| Tear-off | SQ | by existing (or install over existing on purlins for outbuildings) |
| Dumpster | EA | by tear-off type/weight |

## 5.4 Labor tasks & production rates

Exposed-fastener is **faster than standing seam** — fewer specialized steps, no seaming.

| Task | Unit | Base MH/SQ or unit | Notes |
|---|---|---|---|
| **Panel install (screw-down)** | SQ | ~1.5–2.5 MH/SQ | Faster than standing seam; long simple runs are quick. Driving hundreds of screws is the time. |
| **Underlayment / condensation control** | SQ | ~0.3–0.5 MH/SQ | Over deck; over purlins may be panel-backing (no separate labor) or membrane. |
| **Ridge cap + closures** | LF | ~0.05–0.08 MH/LF | Closure + cap. |
| **Hip cap** | LF | ~0.06–0.10 MH/LF | Hip cuts. |
| **Eave/rake/wall trim** | LF | ~0.03–0.06 MH/LF | |
| **Valley trim + panel cuts** | LF | ~0.06–0.10 MH/LF | Cutting panels to valley is the slow part. |
| **Closures (eave/ridge)** | LF | ~0.02–0.04 MH/LF | Profiled foam placement. |
| **Pipe flashing** | EA | ~0.4–0.8 MH/EA | |
| **Tear-off** | SQ | ~0.8–1.5 MH/SQ | By existing. |

**Crew & duration:** Small crew (2–3) handles most ag/residential exposed-fastener roofs efficiently. Big simple barn roofs go fast (large open planes); cut-up roofs slow it via valley/hip cuts and trim.

## 5.5 Labor modifiers

| Condition | Factor |
|---|---|
| Walkable, simple, big open planes (≤6/12) | 1.0 (efficient — this is the fast-roof scenario) |
| Moderate (7–9/12, some cut-up) | 1.15–1.3 |
| Steep (10/12+) | 1.3–1.45 |
| Cut-up (hips/valleys) | +0.1–0.2 within cap |
| Difficult access / multi-story / long panel handling | +0.1 within cap |
| Over open purlins (no deck — footing/safety) | +0.1 (working over open framing is slower/careful) |

**Separate adders:** tear-off, panel handling/lift for long panels or height, gutters if in scope, condensation control membrane over purlins.

## 5.6 Special equipment

| Equipment | When |
|---|---|
| **Screw guns (with depth/clutch control)** | Core tool — thousands of gasketed screws need consistent torque (over/under-driving ruins the washer seal). Multiple guns for a crew. |
| **Metal shears / nibblers / circular saw w/ metal blade** | Cutting panels and trim (avoid abrasive cutoff wheels — hot swarf rusts and damages finish; use shears/nibblers or a cold-cut blade). |
| **Brake** | On-site trim fabrication if not factory-ordered. |
| **Panel lift / boom / ladder elevator** | Long panels to roof on multi-story or long runs. |
| **Fall protection / staging** | Steep and/or height; working over open purlins especially. |
| **Magnetic sweeper** | Screws and metal swarf cleanup — essential. |
| **Dumpster** | Tear-off. |

## 5.7 Best-practice notes that change material or labor

1. **Screw count is a real line — don't hand-wave it.** A barn roof needs thousands of gasketed screws (~80/SQ field, more at laps/eaves/ridges). They're a genuine material cost and the install time. Color-matched heads on finished work. Budget the count.
2. **Drive screws to the right depth — washer seal is everything.** Over-driven screws crush the neoprene washer; under-driven don't seal. This is *the* failure mode of exposed-fastener roofs. Requires depth-control screw guns and skilled installers — it's a quality/labor point, and it's why exposed-fastener needs eventual re-screwing (washers age). Note lifespan expectation to customer.
3. **Condensation control over purlins (no deck).** Metal over open framing with no underlayment drips condensation underside (warm moist air hits cold metal). Use drip-stop factory-backed panels OR a vapor barrier/condensation membrane. Ag/pole-barn essential — a real material decision tied to deck vs. purlin.
4. **Closures at eave and ridge (profile-matched).** Foam closures fill the corrugation profile at eave (outside closure) and ridge (inside closure) to block wind-driven rain, snow, insects, and birds. Profile-specific — must match the exact panel. Skipping them causes leaks and pest entry. A real line.
5. **Pitch floor (~3/12, manufacturer-specific).** Exposed-fastener leaks at laps below its rated minimum. Some panels go to 1/12 *with* sealed laps (butyl in sidelaps/endlaps) — which adds sealant material and labor. Below minimum without sealing, expect leaks. Flag low pitch.
6. **Cut panels cold — never abrasive cutoff wheels.** Abrasive grinding throws hot steel swarf that embeds in the finish and rusts (little rust freckles everywhere). Use shears, nibblers, or cold-cut blades. A finish-warranty and quality point.
7. **Endlaps vs. cut-to-length.** Order panels cut to the slope length to avoid endlaps (each endlap = sealant + extra screws + a leak point). Long runs beyond shippable/handleable length may need endlaps — sealed and screwed per detail. Affects ordering and sealant.
8. **Fastener length for the substrate.** Wood deck vs. steel purlin needs different screw type/length (wood screw vs. self-drilling metal screw, long enough to penetrate purlin properly). Wrong fastener pulls out. Confirm substrate.
9. **Oil-canning is less of a concern (ribbed), but panel squareness matters.** Ribbed panels hide oil-canning, but starting square and keeping coverage consistent matters or you run out of/over coverage across the roof. Layout discipline.
10. **Thermal movement on long panels.** Like all metal, long exposed-fastener panels expand/contract; the screw holes slot slightly over time (the gasket accommodates some). Very long panels may need slotted holes or expansion detailing per manufacturer — minor but real on long commercial runs.
11. **Galvalume/bare vs. painted in contact with dissimilar materials.** Avoid bare Galvalume in standing water or contact with pressure-treated lumber/copper (galvanic/chemical corrosion). Use proper underlayment/separation. Material compatibility note.
12. **Snow retention in snow country.** Like standing seam, smooth metal sheds snow in sheets. Snow guards may be wanted over entries/walkways even on ag-adjacent work in this market. Add if in scope.

## 5.8 Quick worked example (calibration reference)

Barn/outbuilding exposed-fastener roof (Caza barn-job family, illustrative):
- **Roof:** ~24 SQ (2,400 sq ft), 4/12, simple gable (2 planes), 29-ga painted AG panel (36" coverage), over purlins.
- **Panels:** 2,400 ÷ 36" coverage → panels cut to slope length; ~24 SQ + ~7% waste.
- **Screws:** ~24 SQ × ~80/SQ ≈ **~1,900+ screws** (more with laps/trim) — color-matched, length for purlins. A real line.
- **Condensation control:** drip-stop backing or vapor barrier over purlins (no deck).
- **Trim:** ridge cap + ridge closures (ridge LF), eave/rake trim (eave + rake LF), closures at eave; pipe boots for any penetrations.
- **Labor:** 24 SQ × ~2.0 MH/SQ × ~1.0 (simple 4/12 gable) ≈ ~48 MH install + trim/closures (~15–25) + (light or no tear-off) ≈ **~65–80 MH** — fast, because it's a simple open roof. This is the "metal roof but economical and quick" scenario, the opposite end from slate.
- **Equipment:** screw guns (depth control), metal shears/nibbler, panel handling for length, fall protection over purlins, magnetic sweeper.

---

# APPENDIX — Cross-system estimating principles

These apply to every roofing system above and to the AI's use of this manual:

1. **AI picks the system and components; code/coverage rates do the math.** The AI's job is to identify the system, select the right components from the section, and apply the coverage/production rates to the measurements — not to invent quantities. Quantity = measured value ÷ coverage × (1 + waste); hours = quantity × rate × (one combined difficulty factor, capped).
2. **One combined difficulty factor, capped ~1.5×, on install labor only.** Never stack steep × complex × access multiplicatively. Tear-off, flashing, trim, staging are separate line items, not multiplied by the difficulty factor.
3. **Waste scales with cut-up complexity** (valleys + hips), not a flat number. Simple gable low waste; cut-up hip-and-valley high waste — for both material and the detailing labor.
4. **Perimeter and penetrations often dominate labor** out of proportion to area — price details explicitly (true for every system, extreme on flat roofs).
5. **Equipment is scope-specific** — seamer only for mechanical-lock standing seam; staging/hoist for slate and multi-story; welders for TPO; screw guns for exposed-fastener. Don't add equipment a scope doesn't need, and don't omit equipment it requires.
6. **Cold-climate / snow-country detailing is standard in this market** (Lewis County / Tug Hill / Climate Zone 6): full ice & water where applicable, ice-dam protection to code, snow retention on metal and slate, condensation control on open-framed metal. These are real line items, not afterthoughts.
7. **Always sanity-check the big lines against a known real number** when one exists (the worked examples). If the biggest line (panels, membrane, insulation, slate) is off, the whole estimate is off — verify it first.
8. **Confirm the system-defining unknowns before trusting the estimate:** snap-lock vs. mechanical (standing seam); natural vs. synthetic (slate); recover vs. tear-off and R-value (flat); deck vs. purlins (exposed-fastener); layers and structure (all re-roofs). When missing, estimate conservatively and state the assumption.

*End of roofing manual. Next trade categories (siding, decks, framing, exterior metal, etc.) to be built in the same format.*
