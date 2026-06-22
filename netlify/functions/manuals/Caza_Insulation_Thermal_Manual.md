# Caza Contractors — Insulation & Thermal Systems Estimating Manual

**Purpose:** A trade-expert reference for the AI estimator covering thermal insulation and the air/vapor control that makes it work — batt & roll, blown-in/loose-fill, spray foam (open & closed cell), rigid board & continuous insulation (ci), and air sealing & vapor/air barriers. Same structure as the other manuals: for each system it defines the labor tasks that drive time, the factors that move them, the material list with units and **coverage-by-R-value**, special equipment, the dimensions required for an accurate quote, and the best-practices that change material or labor.

**Insulation estimates on a different axis than other trades.** It's not just area — it's **area × the depth/R-value needed to hit a code or performance target**, plus the **air-sealing and vapor control** that determine whether the insulation actually performs (and whether the assembly stays dry). The same wall at R-13 vs. R-21 vs. R-30ci is very different material and cost.

**⚠️ BUILDING-SCIENCE BOUNDARY:** Insulation has real moisture/durability consequences. Wrong vapor-barrier placement, the wrong vented-vs-unvented assembly, or air-sealing without addressing ventilation can cause **condensation, mold, and rot** inside walls/roofs. Throughout, **⚠️ BUILDING SCIENCE** marks where the *assembly design* matters — not just hitting an R-number. The AI may estimate quantities/labor for a *specified* assembly, but must flag assembly/vapor/ventilation decisions as needing proper design for the climate, and must not imply "more insulation anywhere = better."

**Climate context (this market — Climate Zone 6, cold):** Energy code targets are high here. Typical IECC Zone 6 minimums (verify current local code ⚠️): **ceilings/attics ~R-49 to R-60, walls ~R-20 (or R-13+5ci), floors ~R-30, basement walls ~R-15ci/19, crawlspace, slab edge ~R-10.** Vapor control and air sealing matter a lot in a cold climate (interior moisture wants to move outward through the assembly in winter). These targets drive the depths/material below.

**How to use this manual (for the AI):**
1. Identify the insulation type(s) and the **R-value/code target** ⚠️ for each assembly (attic, wall, floor, etc.).
2. Confirm the **assembly** (vented/unvented, vapor control, air barrier) — flag ⚠️ if it's a design decision, don't assume.
3. Use **Required Dimensions**; estimate conservatively + state assumptions if missing.
4. Build material from **area × R-target → depth/product**, then **area ÷ coverage × (1+waste)**.
5. Estimate labor from **Labor Tasks** (MH/unit), apply **Modifiers** (one combined factor, capped).
6. Add **Equipment**; apply **Best-Practice Notes**.

**Units key:** SF = square foot · BF = board foot (spray foam: 1 BF = 1 SF at 1" depth) · R = thermal resistance (R-value) · ci = continuous insulation (over framing, unbroken) · bag = bag of loose-fill · MH = man-hours · ⚠️ = building-science/code — verify the assembly

**R-value per inch (approx — for converting R-target to depth):** fiberglass batt ~3.1–3.4/in · mineral wool ~3.7/in · fiberglass blown ~2.2–2.7/in · cellulose blown ~3.2–3.8/in · open-cell spray foam ~3.5–3.8/in · closed-cell spray foam ~6.0–7.0/in · EPS rigid ~3.6–4.2/in · XPS rigid ~5.0/in · polyiso rigid ~5.6–6.5/in. **Depth needed = R-target ÷ R-per-inch.**

---

# 1. BATT & ROLL INSULATION (FIBERGLASS / MINERAL WOOL)

## 1.1 System overview & types

Batts/rolls are pre-cut or rolled blankets friction-fit into framing cavities — the most common, lowest-cost, DIY-friendly insulation. The estimate is driven by **cavity area (SF), the R-value/thickness (which must match the cavity depth and the target), the framing spacing (16" vs 24" — batt width), and the install quality** (batts only perform if installed without gaps/compression — a real workmanship factor). Performance depends on a separate **air barrier** (batts don't air-seal — §5).

**Types:**
- **Fiberglass batts — most common:** Spun glass fibers. Kraft-faced (integral vapor retarder — face toward the warm/interior side in cold climate ⚠️), foil-faced, or unfaced (with a separate vapor/air barrier). Sized to cavity: R-13/R-15 for 2×4 walls, R-19/R-21 for 2×6 walls, R-30/R-38 for floors/ceilings. Standard widths for 16"/24" OC.
- **Mineral wool (rock/stone wool) batts:** Denser, higher R/inch (~3.7), fire-resistant, sound-dampening, water-repellent, holds shape, cuts cleaner — premium vs. fiberglass. Friction-fit tightly. Popular upgrade (and for sound/fire walls).
- **High-density fiberglass batts:** More R in the same depth (e.g. R-15 in 2×4, R-21 in 2×6) — when you need more R in a fixed cavity.
- **Faced vs. unfaced** ⚠️: Kraft/foil facing = integral vapor retarder (orient correctly for climate ⚠️ — interior side in cold). Unfaced = no vapor retarder (used with a separate barrier, or where none wanted, or for a second layer over faced). Facing choice is a vapor-control decision ⚠️.

## 1.2 Required dimensions for an accurate quote

- **★ Cavity area (SF)** — walls (perimeter × height, minus openings), ceilings/floors (area).
- **★ R-value target** ⚠️ — by assembly + code (Zone 6: walls ~R-20/21, floors ~R-30, ceilings high).
- **★ Cavity depth + framing size** — 2×4 (~R-13/15), 2×6 (~R-19/21); depth caps the batt R. Mismatch ⚠️ (can't stuff R-30 in a 2×4).
- **★ Framing spacing (16"/24" OC)** — batt width.
- **★ Faced or unfaced + facing orientation** ⚠️ — vapor control (kraft to interior in cold).
- **★ Assembly** — wall, vented attic floor, cathedral (depth + ventilation ⚠️), floor over crawl/unconditioned, rim joist.
- **Obstructions** — wiring, plumbing, boxes (batts must be split/fit around, not compressed over — workmanship).
- **Access/conditions** — new (open framing, easy) vs. retrofit (limited access), attic/crawl conditions.

## 1.3 Material list — units, coverage rates, waste

Batt quantity: **cavity area ÷ coverage per bag/package (printed) × (1+waste).** Match R to cavity.

| Material | Unit | Coverage / basis | Typical waste | Notes |
|---|---|---|---|---|
| **Fiberglass batts (R to suit)** | SF (bags) | cavity area ÷ bag coverage | ~5–10% | R-13/15 (2×4), R-19/21 (2×6), R-30/38 (floor/ceiling). Faced or unfaced. |
| **Mineral wool batts** | SF (bags) | cavity area ÷ bag coverage | ~5–10% | Premium; fire/sound; denser. |
| **Vapor/air barrier (if unfaced)** ⚠️ | SF (roll) | wall/ceiling area | +10% | Separate poly/membrane if unfaced batts (vapor control ⚠️) — or smart vapor retarder. See §5. |
| **Faced-batt stapling / fasteners** | — | — | Kraft tabs stapled to framing (or friction-fit). |
| **Insulation supports (floors/cathedral)** | EA/LF | floor joists / cathedral | — | Wire "tiger teeth" or netting to hold batts in floors/overhead. |
| **Foam/sealant + barrier (air sealing — §5)** | — | — | Batts don't air-seal — air sealing is separate (§5) but essential. |
| **Baffles (vented attic/cathedral)** ⚠️ | EA | per rafter bay at eave | — | Maintain the vent channel above insulation at eaves (don't block soffit intake ⚠️). |
| **PPE (gloves, masks, sleeves)** | — | — | Fiberglass irritant — safety. |

## 1.4 Labor tasks & production rates

| Task | Unit | Base MH/SF (1–2 person) | Notes |
|---|---|---|---|
| **Batt install — open walls (new)** | SF | ~0.005–0.012 MH/SF | Fast in open framing; cut/fit/friction or staple. |
| **Batt install — ceilings/floors (overhead)** | SF | ~0.008–0.015 MH/SF | Overhead/awkward; supports for floors. |
| **Mineral wool (cut/fit tighter)** | SF | ~0.008–0.015 MH/SF | Cuts cleaner but denser/heavier. |
| **Cut/fit around obstructions** | (in rate, +) | + for wiring/plumbing/boxes | Splitting batts around obstructions = workmanship time. |
| **Vapor barrier (if separate)** ⚠️ | SF | ~0.003–0.006 MH/SF | Poly/membrane install + sealing (§5). |
| **Baffles (vented eaves)** | EA | ~0.05–0.1 MH/EA | Per rafter bay. |
| **Retrofit (limited access)** | SF | +significant | Working in finished/tight spaces much slower. |

**Crew & duration:** 1–2 person; fast in open new framing. Retrofit, overhead, and careful fitting (around obstructions, for performance) slow it. Batts are the quickest insulation to install but the most install-quality-sensitive (gaps/compression kill performance).

## 1.5 Labor modifiers

Combined factor, capped ~1.4×.

| Condition | Factor |
|---|---|
| Open new walls, accessible | 1.0 |
| Ceilings/floors (overhead) | +0.15–0.3 |
| Many obstructions (careful fitting) | +0.1–0.2 |
| Retrofit / finished / tight access | +0.2–0.4 |
| Cathedral / vented assembly (baffles, depth) ⚠️ | +0.15–0.3 |

**Separate adders:** separate vapor/air barrier (§5), air sealing (§5), baffles, dense/upgrade materials, attic/crawl access.

## 1.6 Special equipment

| Equipment | When |
|---|---|
| **Utility knife / insulation knife + straightedge** | Cutting batts. |
| **Staple gun** | Faced batts (kraft tabs). |
| **PPE — gloves, long sleeves, N95, eye protection** | Fiberglass irritant (mineral wool less so but still). |
| **Lighting / kneepads** | Attics/crawls/floors. |
| **Insulation supports / netting** | Floors, overhead. |
| **Baffle stapler** | Vent baffles. |

## 1.7 Best-practice notes that change material or labor

1. **Install quality IS the performance — no gaps, no compression.** Batts only achieve their rated R if they fully fill the cavity with no gaps, voids, or compression. Stuffing a batt behind wiring (compressing it), leaving gaps at edges, or not splitting around obstructions drastically reduces real R-value. **Proper fitting is the #1 batt best-practice** — it's workmanship labor, not material, but it's the difference between rated and real performance. (This is why batts are rated "Grade I/II/III" by install quality.)
2. **⚠️ Match R to cavity depth — you can't exceed it without compression.** R-30 won't fit (uncompressed) in a 2×4 or even 2×6 cavity. Walls: 2×4 → R-13/15, 2×6 → R-19/21. Floors/ceilings have depth for R-30/38+. Specifying an R the cavity can't hold means compression (lost R) or it doesn't fit. Coordinate R-target with framing depth (framing manual).
3. **⚠️ Vapor-retarder facing orientation (cold climate).** In cold climates, the vapor retarder (kraft/foil facing, or a separate barrier) goes toward the **warm-in-winter (interior) side** to stop interior moisture from condensing inside the wall. Wrong orientation (or a vapor barrier on both sides) traps moisture → rot/mold ⚠️. Unfaced + a properly placed separate retarder is an alternative. Facing/orientation is a building-science decision, not a default.
4. **⚠️ Air barrier is separate — batts don't air-seal.** Fiberglass batts let air pass through; without an air barrier (drywall as air barrier, housewrap, sealed sheathing, or membrane — §5), air leakage bypasses the insulation and kills performance (and carries moisture). **Air sealing (§5) is a separate, essential scope** — batts alone are an incomplete thermal system. Don't quote batts as a complete air/thermal solution.
5. **⚠️ Maintain ventilation in vented assemblies (baffles).** In vented attics/cathedrals, keep the vent channel open above the insulation at the eaves with baffles — don't let insulation block soffit intake (blocks the vent path → moisture/ice-dam problems ⚠️). Baffles are a real (minor) material + labor item in vented roofs. (Vented vs. unvented is an assembly decision ⚠️.)
6. **Mineral wool advantages (when speced).** Higher R/inch, fire-resistant, sound-dampening, water-repellent, holds shape, cuts clean — worth the premium for sound/fire walls, exterior continuous applications, or quality upgrades. Heavier; cuts with a serrated blade.
7. **Don't compress for a "second layer" wrong.** A second unfaced layer over faced batts (e.g. attic floor cross-layer) is fine *unfaced* (a second vapor retarder up high traps moisture ⚠️) and uncompressed. Layering is an assembly detail.
8. **Rim/band joist is a key heat-loss + air-leak spot.** The rim joist (where floor meets foundation) is a major leak/cold spot — air-seal + insulate it (often spray foam or cut rigid + sealed, §3/§4/§5) rather than just a loose batt (which doesn't air-seal there). A real, often-missed detail.
9. **Fiberglass is an irritant — PPE + the install pace.** Gloves, sleeves, N95, eye protection — and it slows handling slightly. A safety reality (mineral wool less itchy but still). Factor PPE.
10. **Retrofit access dominates labor.** Adding/replacing batts in finished or tight spaces (vs. open new framing) is far slower — the framing is simple, the access is the cost. Estimate access honestly.
11. **Settling/sagging in walls (tall cavities).** Batts in tall wall cavities can sag over time if not supported/friction-fit well, leaving a gap at top. Proper fit/support matters for lasting performance.
12. **Coordinate with the assembly target, not just "insulate."** The right batt is set by the assembly's R-target (code/performance), cavity depth, vapor strategy, and air barrier — all together. A batt quote without the assembly context is incomplete; confirm the target and assembly ⚠️.

## 1.8 Quick worked example

2×6 exterior walls + R-38 attic floor, new construction (illustrative, Zone 6):
- **Walls:** cavity area (e.g. ~1,400 SF) → **R-21 fiberglass** (2×6 depth) or R-23 mineral wool; faced (kraft to interior) ⚠️ or unfaced + separate barrier (§5). Bags = 1,400 ÷ bag coverage + ~8%.
- **Attic floor:** area (e.g. ~1,200 SF) → **R-49+ target** ⚠️ (Zone 6) — but batts alone to R-49 is deep; often blown-in is used for attics (§2). If batts: R-38 + cross-layer, or upsize. Baffles at eaves ⚠️.
- **Air sealing (§5) + vapor strategy** ⚠️ — separate, essential.
- **Labor:** walls (1,400 × ~0.008 ≈ 11 MH) + attic (1,200 × ~0.012 ≈ 14 MH) + baffles + fitting around obstructions ≈ **~28–35 MH** + air sealing (§5).
- **Equipment:** knives, staple gun, PPE, baffles, lighting.
- *Note:* attics usually get **blown-in (§2)** to hit high R economically and seamlessly — batts shine in walls/floors.

---

# 2. BLOWN-IN / LOOSE-FILL INSULATION (CELLULOSE / FIBERGLASS)

## 2.1 System overview & types

Blown-in is loose insulation blown through a hose by a machine — ideal for **attics (blanket the floor to high R, seamless, fills around obstructions)** and **dense-packed into closed wall/cavity retrofits**. The estimate is driven by **area × the target R-depth (bags = area × depth-driven coverage), the application (open-blow attic vs. dense-pack), access, and prep (baffles, dams, air sealing first).** It hits high R economically and seamlessly (no gaps like batts can have).

**Types:**
- **Cellulose — common, eco, good performance:** Recycled paper, borate-treated (fire/pest). Higher R/inch (~3.2–3.8), denser, good air-blocking when dense-packed, settles some (install at proper density/depth to account ⚠️). Dusty install. Great for attics and dense-pack retrofit walls.
- **Fiberglass loose-fill:** Blown fiberglass. Lower R/inch (~2.2–2.7) so deeper for same R, lighter, less settling, less dusty than cellulose. Common attic blow.
- **Mineral wool loose-fill:** Less common; fire/sound.
- **Open-blow (attic floor):** Blanket loose over the attic floor to a marked depth (R-target). Fast, seamless, fills around framing/obstructions. The classic attic upgrade.
- **Dense-pack (closed cavities):** Blown at high density into enclosed wall/cathedral/floor cavities (through holes, behind netting on open walls) — fills completely, resists settling, adds air-blocking. For retrofit walls and cathedral ceilings. More skilled (density matters ⚠️).

## 2.2 Required dimensions for an accurate quote

- **★ Area (SF)** — attic floor area, or wall/cavity area for dense-pack.
- **★ R-value target → depth** ⚠️ — Zone 6 attic ~R-49–60; depth = R ÷ R-per-inch (and account for settling ⚠️). Drives bag count.
- **★ Application** — open-blow attic vs. dense-pack (very different labor/density).
- **★ Access** — attic access (hatch, walkability, height), wall access for dense-pack (drill holes / netting).
- **★ Prep needs** ⚠️ — baffles (vent channels), dams (around hatches/fixtures/chimneys — fire clearance ⚠️), and **air sealing first** (blow over a sealed, not leaky, attic — §5).
- **Depth markers / existing insulation** — adding over existing (top-up) vs. new; existing R.
- **Obstructions / fixtures** — recessed lights (IC-rated? clearance ⚠️), wiring, ducts.

## 2.3 Material list — units, coverage rates, waste

Bag count: **manufacturer's coverage chart gives bags per SF at a target R/depth** (e.g. "X bags per 1,000 SF at R-49"). Use the chart for the product. Account for **settling** (install to settled-depth spec ⚠️).

| Material | Unit | Coverage / basis | Notes |
|---|---|---|---|
| **Cellulose loose-fill** | bags | per coverage chart at R-target (bags/SF at depth) | Borate-treated; install to settled depth ⚠️ (over-blow for settling). |
| **Fiberglass loose-fill** | bags | per coverage chart at R-target | Deeper for same R (lower R/in); less settling. |
| **Vent baffles** ⚠️ | EA | per rafter bay at eave | Keep soffit intake open ⚠️ (blown-in easily blocks eaves). |
| **Attic dams / blocking** ⚠️ | LF/EA | around hatch, fixtures, chimney (fire clearance ⚠️), open chases | Retain loose-fill + maintain clearances ⚠️ (3" from B-vent/chimney, IC-light clearance). |
| **Netting / fabric (dense-pack open walls)** | SF | wall area (if blowing into netted open cavities) | For dense-pack on open walls. |
| **Depth markers / rulers** | EA | scattered in attic | Verify/communicate installed depth. |
| **Air sealing materials (§5)** ⚠️ | — | — | **Air-seal the attic floor BEFORE blowing** (§5) — essential. |
| **Hose/machine (rental or owned)** | — | — | Blowing machine (see equipment). |
| **PPE / dust control** | — | — | Cellulose is dusty; masks. |

## 2.4 Labor tasks & production rates

| Task | Unit | Base MH (2-person: one at machine, one at hose) | Notes |
|---|---|---|---|
| **Open-blow attic** | SF | ~0.004–0.008 MH/SF | Fast once set up; 2-person (machine + hose). Setup/teardown + access. |
| **Prep: baffles** ⚠️ | EA | ~0.05–0.1 MH/EA | Per rafter bay. |
| **Prep: dams/blocking** ⚠️ | LF/EA | ~0.1–0.3 MH/EA | Hatch, fixtures, chimney clearance ⚠️. |
| **Air sealing first (§5)** ⚠️ | — | (see §5) | Seal top plates, penetrations, chases before blowing — essential. |
| **Dense-pack walls (drill/blow/patch)** | SF | ~0.02–0.05 MH/SF | Drill holes, blow to density ⚠️, plug holes (+ patch/paint if finished — drywall §). |
| **Dense-pack open walls (net + blow)** | SF | ~0.015–0.03 MH/SF | Net cavities, blow. |
| **Machine setup / teardown / cleanup** | per job | real hrs | Hauling machine, hose runs, dust cleanup. |

**Crew & duration:** 2-person (one feeds the machine, one runs the hose). Open-blow attics are fast and high-value once prepped; the **prep (baffles, dams, and especially air sealing first) and access** are the real labor and the difference between a good and a token job. Dense-pack is more skilled (density control ⚠️) and slower.

## 2.5 Labor modifiers

Combined factor, capped ~1.4×.

| Condition | Factor |
|---|---|
| Open-blow accessible attic | 1.0 |
| Low/tight attic (limited headroom) | +0.2–0.4 |
| Heavy prep (many baffles/dams/fixtures, air sealing) ⚠️ | + prep as separate (significant) |
| Dense-pack (density control, drill/patch) | higher base + patch |
| Difficult access (hatch only, far hose runs) | +0.15–0.3 |

**Separate adders:** **air sealing first (§5 — essential, often the highest-value part)**, baffles, dams/fire-clearance blocking ⚠️, hole patching/paint (dense-pack finished walls), machine rental, dust cleanup.

## 2.6 Special equipment

| Equipment | When |
|---|---|
| **Insulation blowing machine + hoses** | Core — rental or owned; feeds/fluffs and blows loose-fill. |
| **Dense-pack nozzle / setup** | Dense-pack (higher pressure/density control ⚠️). |
| **Drill (hole saw) + hole plugs** | Dense-pack closed walls. |
| **Baffles + stapler** | Vent channels. |
| **Dam materials (rigid/metal, fire-rated near heat)** ⚠️ | Hatch/fixture/chimney clearance ⚠️. |
| **Air-sealing materials/tools (§5)** | Seal before blowing. |
| **PPE — N95/respirator, eye protection** | Dust (cellulose especially). |
| **Lighting / boards (attic)** | Access/walking. |
| **Vacuum / cleanup** | Dust. |

## 2.7 Best-practice notes that change material or labor

1. **⚠️ Air-seal the attic floor BEFORE blowing — the highest-value step.** Blowing insulation over a leaky attic floor lets warm moist air bypass it (lost performance + moisture/ice dams). **Air-sealing top plates, penetrations, chases, can-lights, and the hatch first (§5)** is often the single highest-value part of an attic job — and a separate scope/line. Insulation over unsealed leaks is a token job. Always pair (and sequence) air sealing before blown-in.
2. **⚠️ Install to settled depth / proper density (don't under-fill).** Loose-fill settles (cellulose more than fiberglass). Blow to the manufacturer's **settled-depth** and coverage spec (over-blow to account for settling) and verify with depth markers — or the finished R falls short of the target. Dense-pack must hit the right density ⚠️ (too loose settles/voids, defeating it). The coverage chart + depth verification is how you hit the R.
3. **⚠️ Baffles keep soffit intake open.** Loose-fill easily buries the eaves and blocks soffit ventilation intake → moisture, ice dams, rot ⚠️. Install baffles at every rafter bay to maintain the vent channel before blowing. Essential in vented attics (the common case). Real (minor) prep line.
4. **⚠️ Fire clearances and dams (heat sources + fixtures).** Keep loose-fill away from heat: ~3" clearance and a metal dam around chimneys/B-vents/flues ⚠️, proper clearance around non-IC recessed lights (or confirm IC-rated/airtight before burying) ⚠️, and dams around the attic hatch and open chases. A fire-safety + retention detail — not optional.
5. **Dense-pack for retrofit walls + cathedrals.** Dense-packing closed cavities (drill/blow/plug) insulates existing walls without tear-off, and at proper density resists settling and adds air-blocking. The skilled part is density ⚠️; finished walls then need hole patch/paint (drywall §). A great retrofit method.
6. **Cellulose vs. fiberglass loose-fill tradeoffs.** Cellulose: higher R/inch (shallower), better air-blocking dense-packed, eco, but dustier and settles more (and absorbs/holds moisture if it gets wet — keep dry ⚠️). Fiberglass: lighter, less settling, less dusty, but lower R/inch (deeper). Choice affects depth, bag count, dust, and performance character.
7. **Top-up over existing.** Adding blown-in over existing (compressed/settled) insulation to reach a higher R is common and economical — measure existing R, add the difference (by depth). Confirm existing isn't wet/moldy first ⚠️.
8. **Don't bury what needs access/clearance.** Junction boxes (need access), non-IC lights (heat), knob-and-tube wiring (old — fire risk under insulation ⚠️, must be addressed first), and equipment that needs servicing — flag/dam these before blowing. A real pre-check.
9. **Attic access and walkability.** Low attics, hatch-only access, and far hose runs slow the job and limit prep quality. Storage platforms over insulation (if the customer wants attic storage) compress insulation there (lost R) — note the tradeoff. Access drives labor.
10. **Dust + cleanup (cellulose).** Cellulose blowing is dusty — mask up, and cleanup (overspray at the hatch, tracking) is real. Fiberglass less so. Factor PPE + cleanup.
11. **⚠️ Ventilation balance.** Adding lots of insulation makes ventilation faults matter more (a tighter, better-insulated attic with poor venting traps moisture). Confirm balanced intake (soffit) + exhaust (ridge) ventilation as part of the job ⚠️ (ties to roofing). Insulation and ventilation are a system.
12. **Confirm the assembly + target, not just "blow some in."** The right product, depth, prep, and air sealing are set by the R-target (code/performance), the assembly (vented attic, dense-pack wall, cathedral ⚠️), and the air/ventilation strategy — together. Confirm the target and assembly ⚠️.

## 2.8 Quick worked example

Attic blown-in upgrade to R-60, ~1,200 SF attic floor, vented (illustrative, Zone 6):
- **Air sealing first (§5)** ⚠️ — top plates, penetrations, can-lights, hatch — **the high-value step**, separate line.
- **Baffles** ⚠️ at every rafter bay (eaves); **dams** at hatch + chimney clearance ⚠️ + any fixtures.
- **Cellulose:** R-60 ÷ ~3.4/in ≈ ~17–18" settled depth; bags per coverage chart for 1,200 SF at R-60 (account for settling ⚠️). (Fiberglass would be deeper.)
- **Labor:** air sealing (§5, significant) + baffles/dams (prep) + open-blow (1,200 × ~0.006 ≈ 7 MH) + setup/cleanup ≈ **~20–30 MH all-in** (air sealing + prep are much of it).
- **Equipment:** blowing machine + hose, baffles, dam materials (metal at chimney ⚠️), air-sealing materials, PPE, depth markers.
- *Key:* the value is in air sealing + hitting settled depth + keeping eaves vented — not just bags blown.

---

# 3. SPRAY FOAM INSULATION (OPEN-CELL & CLOSED-CELL)

## 3.1 System overview & types

Spray polyurethane foam (SPF) is sprayed as a liquid that expands and cures into foam — it **insulates AND air-seals in one step** (its big advantage), conforms to any cavity/shape, and (closed-cell) adds structural rigidity and a vapor barrier. The estimate is driven by **area × depth (board feet: 1 BF = 1 SF × 1"), open vs. closed cell (very different R/inch, cost, and properties), the assembly (it enables unvented roofs ⚠️), and it's almost always a specialized sprayed application (often a sub or specialized crew + rig).** Premium cost, premium performance.

**Types — open vs. closed cell are quite different:**
- **Open-cell (½-lb, low density):** ~R-3.5–3.8/inch, soft/spongy, expands a lot (fills cavities, trims excess), **vapor-permeable** (lets some moisture through — can be good or bad ⚠️ depending on assembly), good air seal + sound dampening, lower cost than closed-cell. Common for interior walls, unvented roof decks (with the right vapor strategy ⚠️), sound. Not for contact with water/exterior/below-grade.
- **Closed-cell (2-lb, medium density):** ~R-6–7/inch (highest R/inch of common insulations), rigid/dense, **vapor barrier + air barrier** in one, adds racking strength, water-resistant (FEMA-approved for flood contact), highest cost. For high-R-in-thin-space, exterior/below-grade/rim joists, unvented roofs, and where a vapor barrier is wanted ⚠️. 
- **Hybrid ("flash and batt"):** A flash of closed-cell (air seal + vapor + some R) then batt/blown over it to reach total R economically — combines closed-cell's air/vapor seal with cheaper fill. Common cost-effective high-performance approach.
- **Application reality:** SPF requires a **rig (proportioner, heated hoses, spray gun), trained applicators, PPE/respirators, and ventilation/re-occupancy time** ⚠️ — it's a specialized trade (Caza may sub this or have a dedicated setup). Two-component chemical; off-ratio or poor application = bad foam/odor/failure. Often quoted by the spray-foam sub by board-foot.

## 3.2 Required dimensions for an accurate quote

- **★ Area (SF) + target depth/R** — board feet = SF × inches. Depth = R ÷ R-per-inch (open ~3.6, closed ~6.5).
- **★ Open vs. closed cell** ⚠️ — drives R/inch, cost, vapor behavior, assembly.
- **★ Assembly** ⚠️ — wall cavity, **unvented roof deck (cathedral/conditioned attic — major ⚠️ building-science)**, rim joist, crawlspace/basement wall, under-slab. Spray foam often *changes* the assembly (e.g. unvented "hot roof").
- **★ Vapor/code requirements** ⚠️ — closed-cell is a vapor barrier; open-cell isn't (may need a coating/retarder in some assemblies ⚠️); ignition/thermal barrier required ⚠️ (foam must be covered by drywall or an approved coating — code).
- **★ Hybrid (flash + fill)?** — closed-cell flash depth + fill type/R.
- **Access / containment / re-occupancy** ⚠️ — sprayed application, ventilation, occupants out during/after (cure time).
- **Substrate condition** — clean, dry, right temperature for spray (cure conditions ⚠️).

## 3.3 Material list — units, coverage rates, waste

Spray foam is quoted/estimated by **board foot (BF) = SF × depth in inches.** Yield per set varies; the sub/rig converts BF to chemical sets.

| Material | Unit | Coverage / basis | Notes |
|---|---|---|---|
| **Open-cell foam** | BF (SF × inches) | area × depth (depth = R ÷ ~3.6) | Lower cost/BF; expands/trims; vapor-permeable ⚠️. |
| **Closed-cell foam** | BF (SF × inches) | area × depth (depth = R ÷ ~6.5) | Higher cost/BF; vapor + air barrier; rigid; water-resistant. |
| **Ignition/thermal barrier** ⚠️ | SF | over exposed foam (drywall, or approved intumescent coating) | **Code: foam must be covered** by a thermal barrier (usually ½" drywall) or, in attics/crawls, an approved ignition-barrier coating ⚠️. A real material + labor line. |
| **Fill (hybrid): batt/blown over flash** | SF/bags | per §1/§2 over the closed-cell flash | Flash-and-batt fill. |
| **Vapor retarder/coating (some open-cell assemblies)** ⚠️ | SF | if assembly needs it | Open-cell may need a vapor retarder/paint in certain assemblies ⚠️. |
| **Masking / containment** | SF/roll | protect adjacent surfaces from overspray | Real — overspray sticks to everything. |
| **PPE / respiratory (applicators)** ⚠️ | — | — | SPF chemicals require full PPE + supplied-air/respirators ⚠️ — safety/legal. |
| **(Chemical sets, rig)** | sets | per BF yield | Usually the applicator's/sub's. |

## 3.4 Labor tasks & production rates

(Often a **specialized sub or dedicated crew**; if subbed, it's a sub line by BF. If self-performed, requires rig + trained applicators.)

| Task | Unit | Base (specialized) | Notes |
|---|---|---|---|
| **Spray application** | BF | by crew/rig output (sub often prices $/BF) | Skilled; setup of rig + heated hoses + masking dominates small jobs. |
| **Masking / containment** | per job | real hrs | Overspray protection — significant. |
| **Trim excess (open-cell)** | SF | minor | Trim foam flush in cavities. |
| **Ignition/thermal barrier (coating or coordinate drywall)** ⚠️ | SF | ~0.005–0.01 MH/SF (coating) | Or drywall (drywall §). Code-required cover ⚠️. |
| **Hybrid fill (batt/blown over flash)** | SF | per §1/§2 | |
| **Setup / teardown / ventilation / cure wait** ⚠️ | per job | real (incl. re-occupancy time) | Rig setup + cure/ventilation = schedule. |

**Crew & duration + CURE/RE-OCCUPANCY:** Specialized 2-person spray crew + rig (or sub). **Building must be ventilated and (typically) unoccupied during spraying and for a cure/re-occupancy period** ⚠️ (hours, per product) — a real scheduling + safety constraint. Small jobs are dominated by setup/masking/teardown (the rig makes small jobs proportionally expensive). Often most cost-effective subbed unless Caza runs a foam rig.

## 3.5 Labor modifiers

| Condition | Factor / note |
|---|---|
| Accessible, open cavities/deck | 1.0 (on the BF basis) |
| Heavy masking/containment (finished/adjacent) | + significant |
| Tight/awkward (rim joists, crawls, around obstructions) | +0.2–0.4 |
| Small job (setup-dominated) | high effective $/BF |
| Unvented roof / complex assembly ⚠️ | + design/coordination |

**Separate adders:** ⚠️ ignition/thermal barrier (coating or drywall — code), hybrid fill, containment/masking, rig setup (or sub markup), ventilation/cure schedule, vapor coating (some open-cell), re-occupancy timing.

## 3.6 Special equipment

| Equipment | When |
|---|---|
| **Spray foam rig (proportioner, heated hoses, spray gun, compressor)** ⚠️ | The application — owned or the sub's. Trained operation. |
| **Supplied-air respirators / full PPE / Tyvek** ⚠️ | SPF chemicals — mandatory safety. |
| **Masking / containment (plastic, masking)** | Overspray protection — extensive. |
| **Ventilation (fans/exhaust)** ⚠️ | During/after spray — re-occupancy. |
| **Foam saw / trimmer** | Trim excess open-cell. |
| **Intumescent coating sprayer** | Ignition-barrier coating (attics/crawls) ⚠️. |
| **Chemical set storage (temperature-controlled)** | Sets must be conditioned ⚠️. |

## 3.7 Best-practice notes that change material or labor

1. **⚠️ Open vs. closed cell is a building-science decision, not just cost.** Closed-cell = high R/inch + vapor barrier + air barrier + rigidity + water-resistant (rim joists, below-grade, exterior, thin spaces, unvented roofs wanting a vapor barrier). Open-cell = cheaper, more R-fill, sound, **vapor-permeable** (which can be desirable for drying in some assemblies, or a problem in others ⚠️). Choosing the wrong one for the assembly can trap moisture or fail to control vapor. This is the key SPF decision — match to the assembly/climate ⚠️.
2. **⚠️ Code requires an ignition/thermal barrier over foam.** Exposed spray foam is a fire concern — code requires it be covered by a **thermal barrier (usually ½" drywall)** in living spaces, or an **approved ignition-barrier coating** in attics/crawls ⚠️. This is a real, mandatory material + labor line (coordinate drywall, or spray a coating). Never leave foam exposed where code requires cover.
3. **⚠️ Unvented ("hot") roof assemblies are a major building-science decision.** Spraying foam directly to the roof deck creates an unvented, conditioned-attic assembly — powerful and common, but it must be designed right (foam type, sufficient R to control condensation at the deck ⚠️, no ventilation since it's sealed, often closed-cell or enough open-cell + vapor strategy). Done wrong, it rots the roof deck ⚠️. This converts the roof to an unvented assembly — design it; don't wing it.
4. **It insulates AND air-seals in one step — the big advantage.** SPF's value is the combined air seal + insulation (no separate air-sealing scope like batts need) plus conforming to any shape and getting into tricky spots (rim joists, irregular cavities). This is why it's premium and why it outperforms in air-leakage-prone spots. Factor that it replaces separate air sealing (§5) in its area.
5. **⚠️ Specialized application — trained, PPE, ventilation, re-occupancy.** Two-component chemistry sprayed hot; off-ratio/poor temperature/bad technique = bad foam (odor, shrinkage, poor cure, off-gassing) ⚠️. Requires trained applicators, supplied-air respirators, containment, ventilation, and an unoccupied/cure period ⚠️. This is why it's often subbed. If subbed, it's a sub line ($/BF); if self-performed, it's a rig + training + safety scope.
6. **Hybrid (flash-and-batt) is cost-effective high performance.** A closed-cell flash (air seal + vapor + some R) then batt/blown fill to total R combines the seal of foam with cheaper fill — a smart middle path for high-performance walls/roofs. Estimate the flash (BF) + the fill (§1/§2) + the assembly logic.
7. **Closed-cell adds strength + water resistance.** Beyond R, closed-cell adds racking strength and resists water (FEMA-approved for flood contact) — relevant for rim joists, below-grade, flood-prone, and where structure/water matter. A property, not just R.
8. **⚠️ Rim joists and crawlspaces are prime SPF applications.** Closed-cell at rim joists (air-seals + insulates + vapor-controls a major leak/cold spot in one) and conditioning crawlspaces (seal + insulate walls) are high-value SPF uses where batts fail. Common targeted scopes.
9. **Substrate + ambient conditions for cure.** Foam needs a clean, dry substrate and the right temperature to cure/adhere ⚠️ — cold/damp/dirty surfaces cause adhesion/cure failure. A scheduling/prep reality (relevant in cold here — sets and substrate must be warm enough).
10. **Small jobs are setup-dominated.** Rig setup, masking, and teardown make small SPF jobs proportionally expensive per BF — there's a practical minimum. For a small area, the setup may dwarf the spray. Factor a minimum/setup cost.
11. **Overspray + masking.** Foam sticks to everything it drifts onto — extensive masking/containment of adjacent surfaces, windows, and finishes is real labor. Overspray on a finished surface is a costly cleanup.
12. **Confirm assembly, type, barrier, and re-occupancy** ⚠️ — the right SPF job specifies open vs. closed, the depth/R, the assembly (vented? unvented roof? rim? crawl?), the required ignition/thermal barrier, vapor strategy, and the cure/re-occupancy plan — together. An SPF quote without the assembly + barrier + safety context is incomplete.

## 3.8 Quick worked example

Closed-cell at rim joists + unvented roof deck (cathedral), specialized (illustrative):
- **Rim joists:** perimeter LF × joist height × ~2–3" closed-cell ⚠️ (air seal + vapor + R in one) → BF.
- **Unvented roof deck:** ⚠️ MAJOR design decision — sufficient closed-cell (or hybrid) to control deck condensation in Zone 6 ⚠️ (e.g. enough closed-cell R at the deck, sealed/unvented, no soffit-ridge venting). Design required. Area × depth → BF.
- **Ignition/thermal barrier** ⚠️ — drywall (living space) or coating (attic) over exposed foam — code, real line.
- **If subbed:** sub prices $/BF (rim BF + roof BF) + barrier; Caza coordinates + marks up. **If self:** rig + trained crew + PPE + masking + ventilation/cure.
- **Labor/schedule:** spray (by BF) + masking + barrier + cure/re-occupancy ⚠️ (unoccupied period). Setup-sensitive.
- **Equipment:** foam rig (or sub), supplied-air PPE ⚠️, containment, ventilation, barrier coating/drywall coordination.
- *Key:* unvented roof + rim are exactly where closed-cell shines — but the unvented roof must be **designed** for condensation control ⚠️, not just sprayed.

---

# 4. RIGID BOARD & CONTINUOUS INSULATION (ci)

## 4.1 System overview & types

Rigid foam boards provide insulation as panels — and critically, when installed **continuous over the framing (continuous insulation, "ci")**, they break the thermal bridge of the studs/rafters (framing conducts heat — ci covers it unbroken). The estimate is driven by **area × thickness (R-target), the board type (EPS/XPS/polyiso — different R/inch, cost, moisture behavior), the application (exterior ci over sheathing, roof ci, below-grade, interior), and the detailing (fasteners through to framing, taped seams as air/water barrier, thicker = longer fasteners + furring ⚠️).** You've already used roof ci (the R-35ci on commercial flat roofs).

**Types:**
- **EPS (expanded polystyrene):** ~R-3.6–4.2/inch, lowest cost, vapor-semi-permeable (can dry), used for ci, below-grade, ICFs, roofing. Bead-board look. Stable R.
- **XPS (extruded polystyrene):** ~R-5/inch, higher cost, water-resistant (good below-grade/contact), the pink/blue board. R can decrease slightly over time (off-gassing). Common ci/below-grade.
- **Polyiso (polyisocyanurate):** ~R-5.6–6.5/inch (highest of rigid), foil/coated faced, common for **roof ci (the flat-roof insulation already covered in roofing) and wall ci**, fire-performance good. R drops in cold temperatures (thermal drift — derate in very cold ⚠️), not for below-grade (absorbs water). 
- **Mineral wool board:** Rigid mineral wool for exterior ci — vapor-open, fire-resistant, drainable; premium, breathable ci option.
- **Applications:** **Exterior wall ci** (over sheathing, under siding — breaks thermal bridging, boosts whole-wall R; ties to Siding Manual), **roof ci** (over deck — flat roofs, covered in Roofing Manual; or over roof deck under a vented/nailbase assembly), **below-grade/foundation** (XPS/EPS on basement/crawl walls, under slab), **interior** (foundation walls, furred-out walls).

## 4.2 Required dimensions for an accurate quote

- **★ Area (SF) + R-target → thickness** ⚠️ — thickness = R ÷ R-per-inch (EPS ~4, XPS ~5, polyiso ~6). Drives board count + thickness.
- **★ Board type** ⚠️ — EPS/XPS/polyiso/mineral wool (R/inch, moisture, cost, application).
- **★ Application** — exterior wall ci, roof ci (roofing manual for flat), below-grade, under-slab, interior.
- **★ Layers / staggered seams** ⚠️ — thick ci often 2 layers, seams staggered (avoid thermal-bridge gaps); affects labor.
- **★ Fastening + thickness detailing** ⚠️ — fasteners must reach framing through the foam (longer screws/plates as thickness grows); thick exterior ci needs **furring strips** (and longer fasteners) to attach siding through it ⚠️ — a real detailing escalation with thickness.
- **★ Seam treatment (air/water barrier)** ⚠️ — taped/sealed seams can serve as the air/water control layer ⚠️ (a key ci benefit) — confirm if it's the WRB/air barrier.
- **Substrate / assembly** — over sheathing, on foundation, under slab; vapor implications ⚠️ (exterior foam changes wall drying ⚠️).
- **Transitions / openings** — windows/doors get deeper jamb extensions + flashing with exterior ci (thickness pushes the cladding out) ⚠️.

## 4.3 Material list — units, coverage rates, waste

Board count: **area ÷ board SF (4×8 = 32 SF) × layers × (1+waste).**

| Material | Unit | Coverage / basis | Notes |
|---|---|---|---|
| **Rigid board (EPS/XPS/polyiso/mineral wool)** | SH (4×8=32 SF) | area ÷ 32 × layers | Thickness = R ÷ R-per-inch; 2 layers staggered for thick ci ⚠️. |
| **Fasteners (length for thickness) + plates** ⚠️ | EA/box | per board pattern; **length grows with foam thickness** ⚠️ | Must reach framing through foam (+ sheathing). Cap/washer plates for foam. |
| **Furring strips (exterior ci, to attach cladding)** ⚠️ | LF | per cladding fastening layout | Wood/metal furring over thick ci so siding fastens to framing through it ⚠️ (also creates a rainscreen gap — bonus). |
| **Seam tape / sealant (air/water barrier)** ⚠️ | roll/tube | seam LF + edges | Tape/seal seams if foam is the air/water barrier ⚠️. |
| **Adhesive (below-grade / some applications)** | tube/bucket | board area | Foam-compatible adhesive (below-grade, interior). |
| **Protection board / coating (below-grade exposed, slab)** | SF | exposed foam below-grade/above-grade base | Protect/cover foam (UV, mechanical, termite considerations ⚠️). |
| **Jamb extensions / extended flashing (exterior ci)** ⚠️ | LF/EA | openings (thickness pushes cladding out) | Windows/doors need deeper returns + flashing with thick exterior ci ⚠️. |
| **Termite/pest detailing (below-grade foam)** ⚠️ | — | per code/region | Foam below-grade can be a termite path ⚠️ — detailing/inspection strip per local practice. |
| **Compatible cladding fasteners** | — | — | (Cladding fastens per Siding Manual, through furring/foam.) |

## 4.4 Labor tasks & production rates

| Task | Unit | Base MH/SF | Notes |
|---|---|---|---|
| **Rigid board install — walls (ci over sheathing)** | SF | ~0.01–0.02 MH/SF | Cut, place, fasten through to framing; 2 layers/staggered ⚠️ adds. |
| **Roof ci (flat — see Roofing Manual)** | SF | (roofing manual ISO rates) | Multi-layer staggered; the flat-roof insulation scope. |
| **Below-grade / foundation board** | SF | ~0.01–0.025 MH/SF | Adhere/fasten to foundation; protect. |
| **Under-slab board** | SF | ~0.008–0.015 MH/SF | Lay under slab before pour (coordinate concrete). |
| **Furring over exterior ci** ⚠️ | LF | ~0.03–0.06 MH/LF | Install furring through foam to framing (for cladding) ⚠️. |
| **Seam taping/sealing (air/water barrier)** ⚠️ | LF | ~0.01–0.02 MH/LF | If foam is the barrier ⚠️. |
| **Jamb extensions / extended flashing (openings)** ⚠️ | EA | ~0.5–1.5 MH/EA | Deepen window/door returns + flash with exterior ci ⚠️. |
| **Protection board / coating** | SF | ~0.005–0.01 MH/SF | Below-grade/base. |
| **Cut/fit around penetrations** | (in rate, +) | + | Pipes, outlets, etc. through foam (sealed). |

**Crew & duration:** 2-person. Flat-area board goes reasonably fast; the **detailing escalates with thickness** ⚠️ — thick exterior ci means longer fasteners, furring, deeper window/door returns, and extended flashing (a real labor add that thin ci doesn't have). Below-grade and under-slab coordinate with foundation/concrete. Roof ci is in the Roofing Manual (flat-roof scope).

## 4.5 Labor modifiers

Combined factor, capped ~1.4×.

| Condition | Factor |
|---|---|
| Single-layer board, accessible, simple | 1.0 |
| Multi-layer / staggered seams ⚠️ | +0.1–0.2 |
| Thick exterior ci (furring + long fasteners + deep returns) ⚠️ | +0.2–0.4 (detailing escalates) |
| Below-grade / under-slab (coordinate, protect) | +0.15–0.3 |
| Many openings (jamb extensions/flashing) ⚠️ | + per-opening |
| Seam-as-barrier (full tape/seal) ⚠️ | + seam labor |

**Separate adders:** furring ⚠️, jamb extensions/extended flashing ⚠️, seam taping (barrier), protection board/coating, termite detailing ⚠️, multi-layer, coordination with siding/concrete.

## 4.6 Special equipment

| Equipment | When |
|---|---|
| **Knife / saw / hot-knife (foam)** | Cutting board (score-snap or saw; hot-knife for clean EPS). |
| **Cordless drill/driver + long fasteners/plates** ⚠️ | Fastening through foam to framing (length per thickness). |
| **Brake / metal tools** | Extended flashing at openings. |
| **Caulk/tape applicators** | Seam sealing (barrier). |
| **Staging / ladders** | Walls (exterior, height). |
| **Adhesive tools** | Below-grade/interior. |
| **PPE** | Cutting (dust), adhesives. |

## 4.7 Best-practice notes that change material or labor

1. **⚠️ ci breaks thermal bridging — that's the point (and why code uses "R-13+5ci").** Studs/rafters conduct heat (thermal bridge), so cavity insulation alone underperforms the nominal R. Continuous insulation over the framing covers the bridge, raising whole-assembly R. Codes increasingly specify it (e.g. "R-13 cavity + R-5 ci"). The value is the *continuous* coverage — don't interrupt it. Confirm if ci is required/specified ⚠️.
2. **⚠️ Board type by application + moisture.** XPS (water-resistant) and EPS for below-grade/contact (polyiso absorbs water — NOT below-grade ⚠️). Polyiso highest R/inch for walls/roofs but **derate R in cold** (thermal drift — its R drops as it gets cold, relevant here in winter ⚠️). EPS most stable/economical. Mineral wool board for vapor-open/fire ci. Match board to where it's used and the climate.
3. **⚠️ Thick exterior ci escalates detailing — furring, fasteners, returns, flashing.** As exterior ci gets thicker, you need longer fasteners (through foam to framing), **furring strips to attach the cladding** (siding can't fasten to foam alone — it needs furring/framing through the foam ⚠️), deeper window/door jamb extensions, and extended flashing (the cladding plane moved out). This detailing is a real labor + material escalation that thin ci avoids. Budget it with thickness.
4. **⚠️ Exterior foam changes wall drying — get the vapor strategy right.** Exterior rigid foam reduces the wall's ability to dry outward (foam is a vapor retarder to varying degrees). In cold climates this is usually *good* (keeps the sheathing warm, reduces condensation) **if there's enough exterior R relative to cavity R** ⚠️ (a ratio rule keeps the sheathing above dew point). Too little exterior foam over a lot of cavity insulation can cause condensation on the sheathing ⚠️. This is building science — the exterior:cavity R ratio matters; design it.
5. **⚠️ Taped/sealed seams can be the air/water barrier — a key benefit.** Properly taped and sealed rigid foam seams (and detailing at openings/penetrations) can serve as the wall's air barrier and water-resistive barrier (or a layer of it) ⚠️ — a major benefit that can replace/supplement housewrap. Confirm whether the foam is doing the WRB/air-barrier job (it changes the seam-treatment labor and whether separate WRB is needed).
6. **Furring over ci = bonus rainscreen.** The furring needed to attach cladding over thick ci also creates a vented rainscreen gap (drainage + drying behind the siding) — a longevity bonus (esp. for wood/fiber-cement siding). A two-birds detail worth noting.
7. **⚠️ Below-grade: water resistance + protection + termites.** Below-grade foam (XPS/EPS) must resist water, be protected from damage/UV above grade (protection board/coating), and address termite paths ⚠️ (foam can hide termite travel — some regions require an inspection gap/termite detailing or restrict below-grade foam). Detailing per local practice/code.
8. **Under-slab coordinates with concrete.** Under-slab rigid (and a vapor barrier under/over it) is placed before the pour — coordinate with the concrete/flatwork scope and sequence. A thermal + moisture detail for slabs/basements.
9. **Multi-layer + staggered seams (thick ci).** Thick ci is usually 2 layers with staggered/offset seams to avoid continuous thermal-bridge gaps at the joints ⚠️ — more labor than a single layer, better performance. (Same principle as the staggered ISO layers in the flat-roof manual.)
10. **Roof ci lives in the Roofing Manual (flat) — coordinate.** The polyiso/ISO insulation on flat roofs (R-35ci etc.) is covered in the Roofing Manual's flat-roof section. Sloped roof ci (over-deck, under a nailbase/vented assembly) is a related detail. Pull flat-roof ci quantities from there; this section covers walls/below-grade/slab.
11. **Fire/code cover.** Foam plastics generally require a code-approved covering/thermal barrier in interior/occupied applications (like SPF) ⚠️ — interior rigid foam needs drywall/approved cover. Exterior is behind cladding. Confirm cover requirements.
12. **Confirm R-target, board type, assembly, and barrier role** ⚠️ — the right ci job specifies the R (thickness), board type (climate/moisture), application, fastening/furring detailing, the exterior:cavity R ratio ⚠️ (condensation control), and whether the foam is the air/water barrier — together. A ci quote without this assembly context is incomplete.

## 4.8 Quick worked example

Exterior wall ci retrofit under new siding, 2" XPS (R-10ci), ~1,400 SF walls (illustrative, Zone 6):
- **Board:** 1,400 ÷ 32 ≈ 44 sheets 2" XPS (R-10) + ~10% ≈ ~48; **single layer** (2" — could be one layer) ⚠️ check exterior:cavity ratio for condensation control ⚠️.
- **Fasteners** (length for 2" foam + sheathing to framing) + plates; **furring strips** ⚠️ over the foam to fasten siding through to studs (+ rainscreen bonus); **seam tape** if foam is the WRB/air barrier ⚠️.
- **Openings:** jamb extensions + extended flashing at each window/door ⚠️ (cladding moved out 2"+furring).
- **Then siding** (Siding Manual) fastens to the furring.
- **Labor:** board (1,400 × ~0.015 ≈ 21 MH) + furring (perimeter/field LF × ~0.04) + seam taping (if barrier) + jamb extensions/flashing (per opening) ≈ **~50–70 MH** for the ci + detailing (siding separate). Detailing (furring + returns) is much of it.
- **Equipment:** foam saw/knife, driver + long fasteners/plates, brake (flashing), tape tools, staging.
- *Key:* the ci itself is simple; the **furring + window returns + flashing + condensation-ratio check** ⚠️ are where the real work (and building science) live.

---

# 5. AIR SEALING & VAPOR / AIR BARRIERS

## 5.1 System overview — the layer that makes insulation work

Air sealing and the air/vapor barriers are **not optional add-ons — they're what make insulation actually perform and keep the assembly dry.** Air leakage bypasses insulation (a leaky R-49 attic performs like far less), carries moisture into assemblies (condensation/rot ⚠️), and wastes energy. This "section" is often the **highest-value, lowest-cost part of an insulation job** — and a real scope of its own (blower-door-guided air sealing, attic-floor sealing before blown-in, etc.). The estimate is driven by **the leakage areas to seal (penetrations, top plates, rim joists, transitions — by count/LF/area), the barrier area (if installing a membrane/poly/sealed-sheathing air barrier), and diagnostics (blower door).**

**The control layers (⚠️ get the strategy right for the climate):**
- **Air barrier:** Stops air movement through the assembly. Can be drywall (sealed — "airtight drywall approach"), housewrap/WRB (sealed/taped), sealed sheathing (taped seams + sealed penetrations), closed-cell foam, taped rigid foam, or a dedicated membrane. **Every assembly needs a continuous air barrier** ⚠️ — and "continuous" is the hard part (transitions, penetrations, top/bottom plates).
- **Vapor retarder/barrier:** Slows moisture *diffusion* (different from air movement). In cold climates, a vapor retarder typically goes toward the **interior (warm-in-winter) side** ⚠️ (kraft facing, poly, or a smart/variable vapor retarder). **Don't confuse air barrier with vapor barrier** — they do different jobs; a material can be one, the other, or both ⚠️.
- **Smart/variable vapor retarders:** Adjust permeability with humidity (let assemblies dry when needed) — modern best practice in many assemblies ⚠️.
- **⚠️ The big rules:** continuous air barrier; vapor control on the correct side for the climate; **never trap moisture between two vapor barriers** ⚠️; air-seal *and* ventilate (a tight house needs mechanical ventilation for indoor air quality ⚠️) — sealing without ventilation can cause IAQ/moisture issues.

## 5.2 Required dimensions for an accurate quote

- **★ Leakage areas to seal** — penetrations (plumbing/wiring/ducts/flues), top plates (LF), rim joists (LF), bottom plates/sill, attic hatch, can-lights, transitions, band joists, chases — by count/LF.
- **★ Barrier area (if installing a barrier layer)** — wall/ceiling/floor area for poly/membrane/taped sheathing.
- **★ Climate + assembly → vapor strategy** ⚠️ — which side, what perm, smart retarder? (Zone 6 → interior-side retarder typically ⚠️.)
- **★ Diagnostics?** — blower-door test (before/after), targeted air sealing, thermal imaging.
- **★ Air barrier approach** — drywall-as-air-barrier, taped sheathing, housewrap, membrane, foam.
- **Ventilation** ⚠️ — does a tightened house need added mechanical ventilation (bath/range exhaust, HRV/ERV)? (IAQ ⚠️.)
- **Access** — attic/crawl/wall access for sealing.

## 5.3 Material list — units, basis

| Material | Unit | Basis | Notes |
|---|---|---|---|
| **Canned spray foam (gaps/penetrations)** | can | per penetration / LF of gap | Low-expansion (windows/doors) vs. gaps/cracks; seal penetrations, top plates, rim. |
| **Caulk / sealant** | tube | gaps, joints, transitions | Acoustic/air-sealing sealant at plates, seams, transitions. |
| **Air-barrier membrane / poly sheeting** | SF (roll) | wall/ceiling/floor area (if used) | Poly (vapor+air, cold-side caution ⚠️), smart vapor retarder, or air-barrier membrane. |
| **Sheathing/seam tape (taped sheathing as air barrier)** | roll | seam LF + penetrations | If sheathing is the air barrier (tape seams + flash penetrations). |
| **Rigid foam / closed-cell (at rim/penetrations)** | (see §3/§4) | rim joists, big gaps | Foam-sealing rim joists, etc. |
| **Gaskets / weatherstrip** | LF/EA | attic hatch, doors, plates (sill gasket) | Hatch cover gasket, sill seal, etc. |
| **Fire-rated sealant / firestop** ⚠️ | tube | penetrations through rated assemblies / near heat | Firestop at rated-assembly penetrations + chimney/flue clearances ⚠️. |
| **Backer rod** | LF | large gaps (before sealant) | |
| **Blower door / diagnostics (service)** | test | per test | Measure leakage (before/after); guide sealing. |
| **Hatch cover / insulated attic-stair cover** | EA | attic access | Insulate + air-seal the hatch/stair (big leak). |

## 5.4 Labor tasks & production rates

| Task | Unit | Base MH | Notes |
|---|---|---|---|
| **Air-seal penetrations (foam/caulk)** | EA | ~0.05–0.2 MH/EA | Each plumbing/wiring/duct/flue penetration. |
| **Seal top plates / rim joists / transitions** | LF | ~0.02–0.05 MH/LF | Caulk/foam the lines air leaks through. |
| **Air-seal attic floor (before blown-in)** | per attic | several–many MH | The high-value attic prep — penetrations, plates, chases, hatch, can-lights. |
| **Rim joist (foam-seal + insulate)** | LF | ~0.1–0.25 MH/LF | (Closed-cell or cut rigid + sealed — ties §3/§4.) |
| **Install air/vapor barrier (poly/membrane)** ⚠️ | SF | ~0.004–0.008 MH/SF | Hang, lap, seal, detail at openings/penetrations. |
| **Tape sheathing seams (air barrier)** | LF | ~0.01–0.02 MH/LF | If sheathing is the barrier. |
| **Attic hatch / stair air-seal + insulate** | EA | ~0.5–1.5 MH/EA | Gasket + insulated cover. |
| **Firestop penetrations** ⚠️ | EA | ~0.1–0.3 MH/EA | Rated assemblies / heat clearances ⚠️. |
| **Blower-door test + diagnostics** | test | ~1–2 hr/test | Before/after; guide work. |

**Crew & duration:** 1–2 person; meticulous, access-dependent work. **Often the highest ROI part of an insulation job** (cheap materials, big performance gain) but labor-intensive in finding and sealing every leak. Diagnostics (blower door) guide where to spend the effort. Sequence: **air-seal before insulating** (especially attics before blown-in).

## 5.5 Labor modifiers

| Condition | Factor |
|---|---|
| Accessible, new/open | 1.0 |
| Retrofit / finished / tight (find + seal leaks) | +0.2–0.5 (the leaks are hidden/awkward) |
| Whole-house barrier install ⚠️ | + area + detailing |
| Diagnostics-guided (blower door, targeted) | + test time (but better results) |
| Many penetrations / complex transitions | +0.15–0.3 |

**Separate adders:** blower-door testing, mechanical ventilation (HRV/ERV/exhaust — IAQ ⚠️, often electrical/HVAC sub), firestop ⚠️, membrane/barrier material, rim-joist foam (§3).

## 5.6 Special equipment

| Equipment | When |
|---|---|
| **Caulk guns / foam guns (pro foam gun + cans)** | Sealing — pro foam gun for efficiency/control. |
| **Blower door** | Diagnose leakage (before/after), guide sealing. |
| **Thermal/IR camera** | Find leaks/missing insulation (esp. with blower door). |
| **Smoke pencil / tracer** | Pinpoint leaks. |
| **Staple gun / tape (membrane/poly/sheathing)** | Barrier install. |
| **Firestop materials/tools** ⚠️ | Rated penetrations / heat. |
| **PPE / lighting / kneepads** | Attic/crawl/tight work. |

## 5.7 Best-practice notes that change material or labor

1. **⚠️ Air sealing is usually the highest ROI — and a real, separate scope.** Sealing air leaks (cheap foam/caulk) often saves more energy per dollar than adding insulation, and it's essential for the insulation to perform and the assembly to stay dry. **Air-seal before/with insulating** (especially the attic floor before blown-in — §2). Treat it as its own valuable line, not a freebie. The leaks (top plates, penetrations, rim, hatch, can-lights, chases) are the targets.
2. **⚠️ Air barrier ≠ vapor barrier — they do different jobs.** Air barrier stops air movement (and the moisture air carries — the bigger issue); vapor retarder slows diffusion. A material can be one, both, or neither. **Continuous air barrier is needed in every assembly** ⚠️; vapor control is climate-dependent. Confusing them (or assuming one does the other's job) causes failures. Design both deliberately.
3. **⚠️ Vapor control on the correct (interior, in cold) side — never trap moisture between two barriers.** In Zone 6, the vapor retarder goes toward the warm-in-winter (interior) side ⚠️. **Two vapor barriers (e.g. poly inside + foam/poly outside) trap moisture between them → rot/mold** ⚠️ — a classic, serious failure. (E.g. don't put interior poly behind exterior foam without understanding the assembly.) Smart/variable retarders reduce this risk by drying when needed ⚠️. This is core cold-climate building science.
4. **⚠️ Seal AND ventilate — a tight house needs mechanical ventilation.** Air-sealing a house tight (good for energy/moisture) reduces natural air exchange — so a tightened house needs **mechanical ventilation (bath/range exhaust, and often an HRV/ERV) for indoor air quality and moisture removal** ⚠️. Sealing without addressing ventilation can cause stale air, high humidity, and IAQ problems. Flag ventilation as part of a serious air-sealing scope (often an HVAC/electrical coordination).
5. **Blower-door-guided is better (and sells the value).** A blower-door test quantifies leakage and (with a thermal camera/smoke) pinpoints where to seal — so effort goes where it counts, and before/after numbers prove the value. Diagnostics add cost but improve results and demonstrate ROI. Worth offering on performance jobs.
6. **The big leak spots (target list).** Attic top plates, plumbing/wiring/duct penetrations, recessed lights, attic hatch/stairs, rim/band joists, chases (around chimneys, plumbing stacks, ductwork), sill plates, and transitions (wall-to-roof, wall-to-band). These are where the air goes — seal them systematically. A real per-item/LF scope.
7. **⚠️ Firestop + clearances at penetrations and heat.** Sealing penetrations through rated assemblies requires fire-rated firestop ⚠️ (not just regular foam), and sealing near chimneys/flues must respect clearances ⚠️ (use fire-rated sealant + maintain gaps). Don't foam a flue. A safety overlay on air sealing.
8. **Rim joists: seal + insulate together (foam shines).** The rim/band joist is a top leak + cold spot — closed-cell foam or cut-and-sealed rigid (§3/§4) air-seals + insulates + vapor-controls it in one. A high-value targeted detail (better than a loose batt that doesn't seal).
9. **Attic hatch/stairs — a big, easy leak.** The attic access is often a major uninsulated, unsealed hole — add a gasketed, insulated cover/box. Cheap, high-impact. Real (small) line.
10. **Drywall as air barrier (ADA) — an approach.** Sealing the drywall (at edges, penetrations, electrical boxes) can make it the air barrier (airtight drywall approach) — an alternative/supplement to membranes. Affects detailing (sealed boxes, gaskets) more than a separate material.
11. **Material compatibility + longevity.** Use sealants/tapes rated for the substrates and for long-term flexibility (buildings move); cheap caulk cracks and re-leaks. Acoustic/air-sealing sealants stay flexible. Material choice affects durability of the seal.
12. **⚠️ Confirm the whole control-layer strategy.** A proper job defines the continuous air barrier (what + where), the vapor strategy (which side, what perm, smart retarder — for the climate ⚠️), the ventilation plan (mechanical, for a tight house ⚠️), and the priority leaks — together. Air sealing without a coherent control-layer + ventilation strategy can underperform or cause moisture/IAQ problems ⚠️. This ties the whole thermal system together.

## 5.8 Quick worked example

Attic air-sealing package before blown-in (the high-value pairing, illustrative):
- **Seal:** top plates (perimeter + interior wall LF), all penetrations (plumbing/wiring/duct/flue — count), can-lights (count, IC/airtight check ⚠️), chases (around chimney with **fire-rated** sealant + clearance ⚠️, plumbing stacks, ducts), and the **attic hatch** (gasket + insulated cover).
- **Diagnostics (optional):** blower door before/after + thermal camera to target.
- **Ventilation check** ⚠️ — confirm bath/range exhaust vent *outside* (not into attic ⚠️) and overall ventilation adequacy for a tightened house.
- **Then blown-in (§2)** over the now-sealed floor.
- **Labor:** penetrations (count × ~0.1) + plates (LF × ~0.03) + can-lights + chases (firestop ⚠️) + hatch (~1) + (blower door ~1–2 hr) ≈ **several to many MH** — meticulous, access-driven, **high ROI**.
- **Equipment:** pro foam gun + cans, caulk, fire-rated sealant ⚠️, gaskets, blower door + IR camera (if diagnostic), hatch cover, PPE/lighting.
- *Key:* this package + blown-in together is a far better job than either alone — and the sealing is the high-value, often-skipped half.

---

# APPENDIX — Cross-system insulation & thermal principles

1. **Insulation estimates on R-value × area, not just area.** The same surface at different R-targets (code/performance) is different material/depth/cost. **Always establish the R-target per assembly** ⚠️ (Zone 6: attics ~R-49–60, walls ~R-20/21 or R-13+5ci, floors ~R-30, basement ~R-15ci/19 — verify local code ⚠️). Convert R → depth via R-per-inch, then area ÷ coverage × waste.
2. **⚠️ Insulation is building science — the assembly matters, not just the R-number.** Vented vs. unvented, vapor control side (interior in cold ⚠️), exterior:cavity R ratio (condensation ⚠️), never trapping moisture between two barriers ⚠️, and air-seal-AND-ventilate ⚠️ are the rules that keep assemblies dry. Wrong assembly = condensation, mold, rot — regardless of R. Flag assembly/vapor/ventilation as design decisions; estimate quantities/labor for a *specified* assembly.
3. **Air sealing is the highest-ROI, often-skipped half — pair and sequence it (§5).** Insulation only performs over an air-sealed assembly; air leakage bypasses R and carries moisture. **Air-seal before/with insulating** (especially attics before blown-in). Treat air sealing (§5) as a real, valuable scope — frequently the best dollar spent.
4. **Match the type to the job:** batts (cavities, cheap, install-quality-sensitive), blown-in (attics/dense-pack, seamless high R), spray foam (insulate + air-seal in one, unvented roofs/rim/crawl, premium, specialized ⚠️), rigid/ci (break thermal bridging, exterior/below-grade/slab/roof). Each excels somewhere; many good jobs combine them (e.g. flash-and-batt, ci + cavity).
5. **⚠️ Code + fire-safety overlays:** energy-code R-targets ⚠️, fire-rated/ignition-thermal barrier over foam ⚠️ (SPF + interior rigid), fire clearances + firestop near heat/penetrations ⚠️, and mechanical ventilation for tightened houses ⚠️. These are mandatory, affect material/labor, and must be flagged — not optional.
6. **One combined difficulty factor, capped (~1.4×), on install labor.** Retrofit/tight access, overhead, complex assemblies — pick the governing one. Air sealing, baffles, dams/firestop, vapor barriers, furring/jamb-extensions (ci), spray-foam barrier cover, diagnostics, ventilation, and demo are **separate line items**, not multipliers.
7. **Ventilation and insulation are a system** ⚠️ — vented assemblies need maintained intake/exhaust (baffles, balanced soffit-ridge — ties to roofing); tightened houses need mechanical ventilation (IAQ). Don't insulate/seal without confirming the ventilation strategy.
8. **Climate detailing (Zone 6, cold):** high R-targets, interior-side vapor control ⚠️, exterior-foam condensation ratios ⚠️, derate polyiso in cold ⚠️, keep cellulose/insulation dry ⚠️, and address ice-dam-driving attic air leaks (air sealing + ventilation + insulation together). This market makes the building science matter more, not less.
9. **Retrofit access dominates labor** across types — the framing/cavities are simple; getting into finished/tight/attic/crawl spaces and sealing hidden leaks is the cost. Estimate access honestly.
10. **Cross-references:** **flat-roof ci/ISO** → Roofing Manual; **cavity depth (2×6 for R-21)** → Framing Manual; **exterior ci + cladding/furring/WRB** → Siding Manual; **foam ignition barrier (drywall)** → Interior Finish Manual; **under-slab/below-grade + concrete** → (concrete/flatwork). Pull overlapping detail from the relevant manual; confirm the *whole* thermal + air + vapor + ventilation system, not one layer in isolation.

*End of insulation & thermal systems manual. Built in the same format as the other manuals; the ⚠️ BUILDING SCIENCE flags mark where assembly/vapor/ventilation design matters beyond hitting an R-number — confirm the assembly for the climate.*
