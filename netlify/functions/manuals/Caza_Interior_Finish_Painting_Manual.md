# Caza Contractors — Interior Finish & Painting Estimating Manual

**Purpose:** A trade-expert reference for the AI estimator covering **drywall** (hanging, taping/finishing to a specified level, texture, and repair) and **painting** (interior and exterior — prep, primer, coats, trim, specialty). Same structure as the other manuals: for each trade it defines the labor tasks that drive time, the factors that move them, the material list with units and coverage rates, special equipment, the dimensions required for an accurate quote, and the best-practices that change material or labor.

**These are two trades that sequence together** (drywall → prime → paint) but estimate differently. Both are **surface estimating** (area + openings + linear feet of trim/corners), but with two realities that distinguish them from exterior work: **(1) dust, mess, and containment** (interior work in occupied/finished spaces — protection and cleanup are real labor), and **(2) dry/cure times** (drywall mud and paint coats need drying between steps — this drives the *schedule* even when it doesn't add man-hours).

**The single biggest driver in each:**
- **Drywall:** the specified **finish level (Level 0–5)** — how smooth/finished the joints and surface must be. A Level 5 wall is far more labor than a Level 3.
- **Painting:** the **surface prep + number of coats + cut-in/detail** — prep and coats, not "square footage," dominate; trim/doors/cut-in are slow.

**How to use this manual (for the AI):**
1. Identify drywall and/or painting scope.
2. For drywall, establish the **finish level** ⚠️(spec) — it drives finishing labor. For painting, establish **prep condition, coats, and sheen/colors**.
3. Use **Required Dimensions**; estimate conservatively + state assumptions if missing.
4. Build material from **area ÷ coverage × (1+waste)** (drywall sheets, paint gallons) + linear items (corner bead, trim).
5. Estimate labor from **Labor Tasks** (MH/unit), apply **Modifiers** (one combined factor, capped).
6. Add **Equipment** (incl. containment/cleanup); apply **Best-Practice Notes**.

**Units key:** SF = square foot · LF = linear foot · SH = sheet (4×8=32 SF, 4×12=48 SF) · EA = each · MH = man-hours · gal = gallon · coat = one application · ⚠️ = spec/condition that changes the work — confirm

**Area basis:** Walls = perimeter × height; ceilings = floor area; **subtract large openings** (doors, big windows) — small openings often left in for waste/cut-in. For painting, "paintable area" includes walls + ceilings + trim/doors as separate line items (trim/doors estimated by LF/EA, not folded into wall SF).

---

# 1. DRYWALL (GYPSUM BOARD)

## 1.1 System overview, board types & finish levels

Drywall is the interior surface: gypsum panels screwed to framing, with joints taped and "mudded" (joint compound) to a specified smoothness **level**, optionally textured, then primed/painted (Section 2). The estimate is driven by **area (sheets), the finish level (the dominant finishing-labor driver), corner bead LF, the board type (moisture/fire/etc.), ceiling vs. wall (ceilings slower), and texture.** New work vs. repair/patch are very different jobs.

**Board types (match to location — affects material cost, not basic method):**
- **Standard (1/2") — most common:** Walls and ceilings in normal rooms. 1/2" walls; **5/8" Type X (fire-rated)** for ceilings, garages, party walls, and where code requires fire rating. 3/8" for some repair/curved.
- **Moisture-resistant ("greenboard") / mold-resistant:** Bathrooms, laundry, high-humidity walls (not in showers — see below).
- **Cement board / tile backer (not gypsum):** Wet areas — showers, tub surrounds, behind tile. (Different fastening/handling; often a tile-prep scope, but noted here as it replaces drywall in wet zones.)
- **Fire-rated (Type X / Type C):** 5/8" — garages, furnace rooms, party walls, assemblies requiring a fire rating ⚠️ (code). Heavier.
- **Sag-resistant ceiling board:** For ceilings (esp. 24" OC framing or where texture adds weight) to resist sagging.
- **Soundproofing / specialty:** Sound-dampening board, abuse/impact-resistant, etc. — premium, specific uses.
- **Sheet sizes:** 4×8 (32 SF, easiest to handle), 4×12 (48 SF — fewer butt joints, faster finish on big walls/ceilings but heavy/awkward — pros prefer 12-footers to minimize joints). 4×9, 4×10, 4×14 also.

**Finish levels (⚠️ THE key labor driver — confirm the spec):**
- **Level 0:** No finishing (temporary).
- **Level 1:** Tape embedded in joint compound; no further finishing (concealed/attic spaces).
- **Level 2:** Tape + one coat over joints/screws (garages, behind cabinets/tile — surfaces not seen).
- **Level 3:** Tape + 2 coats; for **heavy/medium texture** or heavy wallcovering (texture hides minor imperfection). Not for smooth paint.
- **Level 4 — the residential standard:** Tape + 3 coats (embed + 2 finish), screws 3 coats; for **flat/matte paint and light textures.** The default for most painted walls.
- **Level 5 — the premium:** Level 4 + a **skim coat** over the entire surface; for **gloss/semi-gloss paint, critical lighting (large windows, sidelighting), and dark/deep colors** that show every flaw. Significantly more labor + material (whole-surface skim). Specify Level 5 where lighting/sheen will reveal imperfections.

## 1.2 Required dimensions for an accurate quote

- **★ Wall area (SF)** — perimeter × height; sheets.
- **★ Ceiling area (SF)** — floor area of rooms getting drywall ceilings (ceilings are slower — overhead).
- **★ Finish level (0–5)** ⚠️ — the dominant finishing-labor driver. Confirm.
- **★ Board type/thickness** — standard, 5/8" fire-rated ⚠️ (code locations), moisture-resistant, etc.
- **★ Ceiling height / wall height** — sheet orientation, staging (high/cathedral ceilings), handling.
- **★ Number/size of openings** — doors/windows (cutouts + more finishing edges).
- **★ Inside + outside corner LF** — outside corners need corner bead; inside corners taped.
- **★ Texture?** — type (knockdown, orange peel, smooth, etc.) and walls/ceilings — adds material + labor.
- **New, remodel, or repair/patch** — repair/patch is per-area + blending, very different from new hang.
- **Number of rooms / cut-up vs. open** — many small rooms = more corners/cuts/handling than open area.
- **Access/conditions** — occupied space (containment), stairwells/high ceilings (staging), tight rooms.

## 1.3 Material list — units, coverage rates, waste

Sheet count: **area ÷ sheet SF (32 for 4×8, 48 for 4×12) × (1+waste).** Use larger sheets to cut joints where handling allows.

| Material | Unit | Coverage / basis | Typical waste | Notes |
|---|---|---|---|---|
| **Drywall board** | SH | (wall + ceiling area) ÷ sheet SF | ~10–15% (cut-up higher) | 4×8=32 SF, 4×12=48 SF. 5/8" fire-rated ⚠️ where required; moisture-resistant in wet areas. |
| **Joint compound (mud)** | box/bucket | ~by area + level (more coats/level 5 = more) | — | All-purpose / lightweight / setting-type (hot mud) for first coats/repairs. Rough: ~1 box (e.g. 4.5 gal) per ~10–14 sheets at Level 4; more for Level 5 skim. |
| **Joint tape** | roll | ~joint LF (paper or mesh) | ~10% | Paper (strong, inside corners) or fiberglass mesh (self-stick, setting-mud). ~per joint LF; ~1 roll (250–500 ft) per several sheets. |
| **Corner bead (outside corners)** | LF / EA | outside-corner LF | ~10% | Metal, paper-faced metal, or vinyl. Each outside corner × height. |
| **Drywall screws** | lb/box | ~ per sheet (field + edges; ~1 lb per ~1–2 sheets) | — | Length for board thickness + framing; coarse (wood) / fine (steel stud). |
| **Drywall adhesive (optional)** | tube | stud/board (reduces screws/squeaks) | — | Sometimes glued + screwed. |
| **Texture material** | bag/box | textured area ÷ coverage | — | Joint compound or texture mix for knockdown/orange-peel; spray or hand. |
| **Cornerbead fasteners / clips** | box | per bead | — | |
| **Cement board (wet areas)** | SH | wet-area ÷ sheet | ~10% | Replaces drywall behind tile/wet; cement-board screws + tape (alkali-resistant mesh) + thinset. |
| **Primer (for finishing/PVA)** | gal | (paint section — but new drywall needs a primer/sealer first) | — | See Section 2 — new drywall = PVA primer before paint (or Level 5 may include a skim that's then primed). |
| **Protection (plastic, masking, floor cover)** | roll/EA | occupied/finished areas | — | Dust containment + floor/surface protection — real material + labor in occupied spaces. |

**Demo / disposal (remodel/repair):**
| Item | Unit | Basis |
|---|---|---|
| Drywall demo | SF | remove existing (dusty) |
| Dumpster / haul | EA | drywall is heavy; size by area |
| Containment / dust control | LF/EA | occupied space |

## 1.4 Labor tasks & production rates

Drywall labor splits into **hanging** (fast) and **finishing** (the variable part, driven by level). Often estimated **per sheet** (hang) and **per sheet or SF** (finish).

| Task | Unit | Base MH (2-person) | Notes |
|---|---|---|---|
| **Hang drywall — walls** | SH | ~0.4–0.7 MH/SH | Measure, cut, lift, screw. 12-footers fewer joints. |
| **Hang drywall — ceilings** | SH | ~0.6–1.0 MH/SH | Overhead — slower, needs lift/2-person. |
| **Tape & finish — Level 4 (walls)** | SH | ~0.8–1.3 MH/SH | Tape + embed + 2 coats + sand; the bulk of drywall labor. |
| **Tape & finish — Level 3** | SH | ~0.6–1.0 MH/SH | One less coat (for texture). |
| **Tape & finish — Level 5 (add skim)** | SH | ~1.3–2.0 MH/SH | Level 4 + full skim coat + sand — premium. |
| **Finish ceilings** | SH | +20–30% over walls | Overhead finishing slower. |
| **Corner bead (outside corners)** | LF | ~0.04–0.08 MH/LF | Install + coat (3 coats over bead). |
| **Texture (spray/hand)** | SF | ~0.01–0.03 MH/SF | Apply + (knockdown) knock down; ceilings slower. |
| **Sanding** | SH | (in finish rate) | Between/after coats; dust. |
| **Cement board (wet areas)** | SH | ~0.6–1.0 MH/SH | Cut (scoring/dust), screw, tape/thinset. |
| **Demo existing drywall** | SF | ~0.02–0.05 MH/SF | Dusty; remove + haul. |
| **Repair/patch — small** | EA | ~0.5–2 MH/EA | Cut, back, patch, tape, 3 coats, sand, blend — disproportionate labor + multiple dry-time trips. |
| **Repair/patch — texture match** | EA | + significant | Matching existing texture is skilled/slow. |
| **Protection / containment setup + cleanup** | per job | real (hrs) | Occupied/finished spaces — plastic, mask, floor protect, daily cleanup. |

**Crew & duration + DRY TIME:** 2-person typical. **Critical scheduling reality: joint compound must dry between coats** — Level 4 is typically **3+ days** (coat, dry overnight, coat, dry, coat, dry, sand) even though the man-hours are modest. Setting-type ("hot") mud speeds first coats (sets in 20–90 min, doesn't need to fully dry) but is harder to sand. Don't quote drywall finishing as a one-day task — the *schedule* spans days for dry times even when labor is light. Repairs/patches incur the same multi-trip dry-time penalty.

## 1.5 Labor modifiers

Combined factor, capped ~1.4×, on drywall labor.

| Condition | Factor |
|---|---|
| New, open rooms, Level 4, 8-ft walls | 1.0 |
| Level 5 (skim coat) | finishing as higher base (see rates) |
| High/cathedral ceilings / stairwells (staging) | +0.2–0.4 |
| Many small rooms / cut-up (corners, cuts, handling) | +0.15–0.3 |
| Ceilings (vs. walls) | +0.2–0.3 |
| Occupied/finished space (containment, careful, cleanup) | +0.15–0.3 |
| Remodel tie-in / blending to existing | +0.15–0.3 |
| Repair/patch + texture match | high (per-patch, multi-trip) |

**Separate adders:** demo + disposal, dust containment/protection (occupied spaces), texture, high-ceiling staging, dumpster, the dry-time *schedule* (calendar, not MH).

## 1.6 Special equipment

| Equipment | When |
|---|---|
| **Drywall lift / panel hoist** | Ceilings (and high walls) — holds sheets overhead; near-essential for ceilings. |
| **Screw gun (drywall, depth-set) / collated screw gun** | Fastening — depth-set so screws dimple without breaking paper. |
| **Drywall T-square / utility knife / rasp** | Measuring/cutting/edging (score-and-snap). |
| **Cut-out tool (rotary) / jab saw** | Cutouts for boxes/openings. |
| **Taping tools (knives 6/10/12", hawk/pan, corner tools)** | Hand finishing. |
| **Automatic taping tools (banjo / bazooka / boxes)** | Production finishing (larger jobs) — faster. |
| **Texture sprayer / hopper gun + compressor** | Spray texture (knockdown/orange-peel). |
| **Sanding tools (pole sander, sanding sponge) + dust-control sander/vacuum** | Sanding — **dust is the big mess**; vac-sanders/HEPA reduce it. |
| **Stilts / benches / staging / scaffold** | Ceilings, high walls, stairwells. |
| **Containment (plastic, zip walls, floor protection, air scrubber)** | Occupied/finished spaces — dust control. |
| **Mud mixer / drill paddle** | Mixing compound/texture. |
| **Dumpster** | Demo/disposal (heavy). |

## 1.7 Best-practice notes that change material or labor

1. **⚠️ Confirm the finish level — it's the dominant finishing-labor driver.** Level 3 (texture), Level 4 (standard flat paint), Level 5 (skim coat for gloss/critical lighting/dark colors) are very different labor and material. Specifying the wrong level either wastes money (over-finishing) or causes a callback (under-finishing — flaws show under the chosen paint/lighting). Level 5 especially (whole-surface skim) is a major add. Match level to the paint sheen and lighting.
2. **⚠️ Fire-rated board where code requires it (5/8" Type X).** Garages (esp. ceilings under living space), furnace/mechanical rooms, party walls, and rated assemblies require fire-rated board ⚠️ — a code item, not a choice, and heavier/pricier. Confirm rated locations.
3. **Moisture-resistant board in wet/humid areas; cement board behind tile/wet.** Greenboard/mold-resistant for bathrooms/laundry walls; **cement board (not gypsum) behind shower/tub tile and wet zones** — regular drywall fails in wet areas. A material spec tied to location.
4. **Dry time drives the schedule even when labor is light.** Joint compound must dry between coats — Level 4 spans ~3+ days of coat-dry-coat-dry-sand. This is the #1 thing people underestimate: the *calendar*, not the man-hours. Setting-type ("hot") mud speeds first coats but is hard to sand; plan the sequence. Repairs incur the same multi-trip reality. Communicate the timeline.
5. **Hang to minimize and locate joints; tapered edges together.** Use longer sheets (12') to reduce butt joints (butt joints are harder to finish flat — no taper); orient sheets to put tapered edges together; stagger joints; hang ceilings first then walls (walls support ceiling edges). Fewer/better joints = less finishing labor and a flatter wall.
6. **Screw it right — dimple, don't break the paper.** Depth-set screw guns set screws just below the surface (dimpled) without tearing the face paper (a torn-paper screw has no hold and shows). Proper screw spacing (field + edges) per code. Over/under-driving = callbacks.
7. **Dust containment + cleanup is real labor in occupied/finished spaces.** Sanding drywall makes fine dust that travels everywhere. Plastic containment/zip walls, floor protection, sealing vents, air scrubbers, and daily cleanup are real material + labor in lived-in homes. New construction (empty) is far less. Budget protection/cleanup explicitly for occupied work.
8. **Corner bead on every outside corner; choice affects durability.** Outside corners need bead (metal = durable, paper-faced metal = strong + easy, vinyl = dent/rust-free). Each gets installed + 3-coated. A real LF line; the type affects durability (high-traffic corners → metal/paper-faced).
9. **Texture: match existing on repairs; type affects labor.** New texture (knockdown/orange-peel/smooth) adds material + labor (spray + sometimes knockdown). On repairs, **matching the existing texture is a skilled, slow art** — and a common source of visible patches. Smooth (Level 5-ish, no texture) is more finishing labor but a clean look. Confirm texture type/scope.
10. **Prime new drywall before paint (PVA) — affects the paint scope.** New drywall and joint compound absorb unevenly; a drywall primer/sealer (PVA) is required before finish paint for uniform color/sheen. This ties to Section 2 (it's the first "paint" step). A Level 5 skim then primed gives the best smooth-paint result.
11. **Repairs/patches are disproportionate labor + multi-trip.** A small patch needs cut, backing, patch piece, tape, 3 coats (with dry time between = multiple trips), sand, texture-match, then prime/paint — far more effort (and calendar) than its size. Price patches per-occurrence with the dry-time/multi-trip reality, not by area.
12. **Acclimate board + control conditions.** Store/acclimate drywall flat and dry; finish in reasonable temperature/humidity (compound won't dry well in cold/damp — relevant here in winter). Affects scheduling in cold/wet conditions.

## 1.8 Quick worked example

New drywall, single room ~12'×14' with 8-ft ceilings, Level 4, light texture (illustrative):
- **Area:** walls (perimeter 52 LF × 8 ft = 416 SF) + ceiling (168 SF) = ~584 SF; subtract a door/window (~40 SF) ≈ ~544 SF.
- **Board:** 544 ÷ 48 (4×12) ≈ 12 sheets + ~12% ≈ **~13 sheets** (5/8" ceiling if under living space ⚠️; 1/2" walls).
- **Mud/tape:** ~1 box compound + tape per joints; **corner bead** on outside corners (LF).
- **Screws**, protection (if occupied).
- **Labor:** hang (13 × ~0.6 ≈ 8 MH, ceiling slower) + finish Level 4 (13 × ~1.0 ≈ 13 MH) + corner bead + texture (~544 SF × 0.02 ≈ 11... if textured) ≈ **~30–35 MH** — **but spanning ~3–4 days for dry times.**
- **Equipment:** drywall lift (ceiling), depth-set screw gun, taping knives, pole/vac sander, texture hopper, containment if occupied.
- *Level 5 instead:* add full skim coat (+~13 × ~0.7 ≈ +9 MH and material) and another dry/sand cycle.

---

# 2. PAINTING (INTERIOR & EXTERIOR)

## 2.1 System overview & scope types

Painting protects and finishes surfaces — and the estimate is driven far more by **surface prep, number of coats, and cut-in/detail (trim, doors, edges)** than by raw square footage. "Paintable area" is walls + ceilings + trim + doors, but **trim and doors are estimated separately (LF/EA)** because they're slow per unit. The condition of the surface (new/clean vs. repair/peeling/stained) and the **sheen and color change** swing prep and coats. Interior and exterior share principles but differ in prep, products, and conditions.

**Scope types:**
- **Interior — new (over new drywall):** Prime (PVA over new drywall) + 2 finish coats typical; walls/ceilings/trim/doors. Clean, empty, efficient.
- **Interior — repaint (occupied/existing):** Prep (clean, patch, sand, caulk), spot-prime, + coats; protection/masking of furniture/floors is a major labor add. Color/sheen change affects coats.
- **Exterior — repaint (siding/trim):** Wash (pressure wash), scrape/sand peeling, prime bare/repairs, caulk, + coats; weather-dependent, slower (height/access), more prep. Ties to the **Siding Manual** (which covers field-painting siding as part of a siding job) — cross-reference; here we cover painting as its own scope.
- **Exterior — new:** Prime + 2 coats on new siding/trim (or factory-finished needs none) — see Siding Manual for siding-job context.
- **Trim & doors (interior/exterior):** Baseboard, casing, crown, doors, windows — slow detail work (cut-in, multiple faces), often higher sheen (semi-gloss).
- **Stain/clear (wood):** Stain + clear coat (poly/varnish) on trim/doors/decks — different products/process than paint.
- **Specialty:** Cabinets (refinishing — skilled, multi-step), faux/decorative, epoxy floors, etc. — specialty, priced separately.

## 2.2 Required dimensions for an accurate quote

- **★ Wall area + ceiling area (SF)** — by room; coats.
- **★ Trim LF (base, casing, crown) + door/window count (EA)** — slow detail; estimate separately.
- **★ Surface condition / prep needed** ⚠️ — new/clean vs. patch/sand/scrape/peeling/stained/glossy (prep dominates).
- **★ Number of coats** ⚠️ — primer + 1 or 2 finish; color/sheen change, dark/bold colors, new drywall, drastic color change → more coats.
- **★ Sheen** — flat/matte/eggshell/satin/semi-gloss/gloss (higher sheen shows flaws → more prep; trim usually semi-gloss).
- **★ Color change / number of colors** — drastic changes (dark→light, deep colors) need more coats/primer; multiple colors = more cut-in/masking.
- **★ Interior or exterior** — products, prep, conditions, access.
- **★ Occupied/furnished?** — protection/masking/moving = major labor (interior repaint).
- **Height / stories / cathedral / stairwell** — staging/ladders (interior + exterior).
- **Exterior: substrate** (wood/siding/stucco/metal/masonry), wash needs, peeling extent, weather window.
- **Stain vs. paint** — different process.

## 2.3 Material list — units, coverage rates, waste

Paint coverage: **~350–400 SF per gallon per coat** (smooth surface; rough/porous/textured less, ~250–300; first coat on bare/porous less). **Gallons = (area × coats) ÷ coverage.** Always account for coats and surface porosity.

| Material | Unit | Coverage / basis | Notes |
|---|---|---|---|
| **Primer / sealer** | gal | area ÷ ~300–350 SF/gal | PVA (new drywall), stain-blocking (stains/knots/water marks), bonding (glossy/slick), exterior primer (bare wood/repairs). |
| **Interior paint (wall/ceiling)** | gal | (area × coats) ÷ ~350–400 SF/gal | Flat/eggshell/satin; quality affects coverage/durability. Ceiling paint (flat) separate. |
| **Trim/door paint (enamel)** | gal | (trim LF + door area × coats) ÷ coverage | Semi-gloss/satin enamel (durable, washable); slower application. |
| **Exterior paint** | gal | (area × coats) ÷ ~300–350 SF/gal (rough siding less) | Exterior-grade (acrylic/elastomeric); more per SF on textured/rough. |
| **Stain + clear (wood)** | gal | area ÷ coverage (stain) + clear coats | Different process (stain, wipe, seal, clear coats). |
| **Caulk (paintable)** | tube | trim joints, gaps, cracks | A real line — caulking trim/gaps before paint (interior + exterior). |
| **Patching/spackle (minor)** | tub | nail holes, dings (minor — drywall §1 for real patches) | Prep filler. |
| **Sandpaper / sanding** | — | prep | Consumable. |
| **Masking (tape, paper, plastic, film)** | roll/EA | edges, windows, floors, furniture | Major in occupied/multi-color/trim work — real material + labor. |
| **Drop cloths / floor + furniture protection** | EA | occupied/furnished areas | Protection. |
| **Tools (brushes, rollers, sleeves, trays)** | EA | consumable | |
| **Sundries (thinner, cleaner, rags, etc.)** | — | — | |

## 2.4 Labor tasks & production rates

Painting labor is **prep + cut-in + roll/spray + trim/doors**, per coat. Prep and detail dominate — not the open-wall rolling.

| Task | Unit | Base MH (per coat unless noted) | Notes |
|---|---|---|---|
| **Surface prep — light (clean, minor patch, sand)** | SF or room | ~0.002–0.005 MH/SF | New/good condition. |
| **Surface prep — heavy (scrape, sand, repair, deglossy, stain-block)** | SF | ~0.01–0.03+ MH/SF | Peeling/damaged/glossy — the big variable; exterior scraping especially. |
| **Masking / protection setup** | room / per job | real hrs | Occupied/furnished, multi-color, trim — major. |
| **Prime** | SF | ~0.003–0.006 MH/SF | New drywall (PVA), spot-prime, bare exterior. |
| **Wall/ceiling — cut-in + roll (per coat)** | SF | ~0.004–0.008 MH/SF/coat | Ceilings slower (overhead). Cut-in (edges by brush) is the slow part. |
| **Spray (large open / exterior, per coat)** | SF | ~0.002–0.004 MH/SF/coat (+ masking) | Faster on big open areas but heavy masking offsets it. |
| **Trim (base/casing/crown), per coat** | LF | ~0.02–0.05 MH/LF/coat | Slow — cut-in both edges, narrow. |
| **Doors (per side/coat)** | EA | ~0.2–0.5 MH/EA/coat | Panel doors slower; both sides; jambs/casing extra. |
| **Windows (per coat)** | EA | ~0.2–0.6 MH/EA/coat | Muntins/sash slow + masking glass. |
| **Stain + clear (wood)** | SF/LF | higher (multi-step) | Stain, wipe, dry, clear coat(s). |
| **Exterior wash (pressure)** | SF | ~0.002–0.004 MH/SF | Pre-paint cleaning. |
| **Cleanup** | per job | real hrs | Daily + final. |

**Crew & duration + DRY TIME:** 1–3 person. **Coats need dry time between** (latex ~2–4 hrs recoat; longer in cold/humid; oil/enamel longer) — like drywall, the *schedule* spans days for multi-coat/trim work even when labor is moderate. Exterior is **weather-gated** (temperature/humidity/rain/dew windows) — a real scheduling constraint here (can't paint exterior in cold/wet, dew limits early/late). Prep and trim/doors dominate labor; open-wall rolling is the fast part.

## 2.5 Labor modifiers

Combined factor, capped ~1.4×, on painting labor.

| Condition | Factor |
|---|---|
| New, empty, smooth walls, 2 coats, 1 color | 1.0 |
| Occupied/furnished (protect, mask, move, careful, cleanup) | +0.2–0.4 |
| Heavy prep (peeling/repair/deglossy/stain-block) | +0.2–0.5 (prep is the big swing) |
| Multiple colors / lots of cut-in / accent walls | +0.15–0.3 |
| High/cathedral ceilings / stairwells (staging) | +0.2–0.4 |
| Trim-heavy / many doors & windows | + trim/doors as their own lines |
| Exterior (height/access/weather/scraping) | +0.2–0.4 + weather scheduling |
| Dark/bold colors / drastic color change (extra coats) | + coats |
| Gloss/semi-gloss on walls (prep to perfection) | +0.15–0.3 |

**Separate adders:** heavy repair/patch (drywall §1), exterior wash, staging/lifts (high/exterior), extensive masking, specialty (cabinets/faux/epoxy), the dry-time/weather *schedule*.

## 2.6 Special equipment

| Equipment | When |
|---|---|
| **Brushes, rollers (various naps), trays, extension poles** | Core hand tools; nap by surface texture. |
| **Airless paint sprayer** | Large open areas, exteriors, new construction, cabinets — fast coverage (heavy masking required). |
| **Masking tools (tape applicators, masking machine, film)** | Edges, windows, floors — efficiency on detail/occupied work. |
| **Ladders / extension ladders / scaffold / staging** | High walls, ceilings, stairwells, exterior multi-story. |
| **Pressure washer** | Exterior pre-wash. |
| **Scrapers / sanders / heat gun / wire brush** | Prep (exterior scraping, deglossing). |
| **Drop cloths / plastic / floor protection** | Protection. |
| **HVLP / fine-finish sprayer** | Trim, doors, cabinets (fine finish). |
| **Lighting** | Spotting flaws (raking light), interior. |
| **Respirators / ventilation** | Sprays, oil/solvent, confined areas — safety. |
| **Lead-safe gear (pre-1978)** ⚠️ | RRP-certified containment/cleanup on pre-1978 repaints (lead paint) — legal requirement (see best-practices). |

## 2.7 Best-practice notes that change material or labor

1. **Prep is most of the job — and the biggest estimating variable.** Clean, patch, sand, caulk, scrape, degloss, stain-block — the surface condition drives the labor far more than area. A peeling exterior or a damaged/glossy interior is multiples of the prep of new/clean work. **Under-estimating prep is the #1 painting estimating error.** Assess condition honestly; price prep explicitly.
2. **Number of coats — confirm, and add for color/sheen/substrate.** Primer + 2 finish is typical, but **new drywall, drastic color changes (dark↔light), deep/bold colors, and bare/porous substrates need extra coats/primer.** One coat almost never covers properly (coverage + durability). Get the coat count right — it directly scales material and labor.
3. **Prime when it matters (not always, but when needed).** New drywall (PVA), stains/water marks/knots (stain-blocking primer), glossy/slick surfaces (bonding primer), bare wood/metal/repairs (appropriate primer), drastic color change (tinted primer). Skipping needed primer = bleed-through, peeling, or extra finish coats. A real material + labor step where required.
4. **Trim and doors are slow — estimate separately (LF/EA), not folded into wall SF.** Cutting in trim (narrow, both edges), panel doors (faces, panels, both sides, jambs), and windows (muntins, masking glass) are disproportionate labor per unit and usually a different (higher) sheen. A trim-heavy house carries major detail labor beyond the wall area.
5. **Protection/masking in occupied/furnished spaces is real labor.** Moving/covering furniture, masking floors/trim/windows/fixtures, and careful work in lived-in homes adds substantial time vs. empty new construction. Drips on a customer's floor/furniture are a costly callback. Budget protection + daily cleanup explicitly.
6. **Sheen affects prep and shows flaws.** Higher sheen (satin→semi-gloss→gloss) reflects light and reveals every imperfection — requiring better prep (and often a higher drywall level, §1). Flat/matte hides flaws. Trim/doors/wet areas use higher sheen (durable/washable); ceilings flat. Match sheen to use and prep accordingly.
7. **Dry/recoat time drives the schedule; exterior is weather-gated.** Coats need recoat time (latex hours, oil longer; slower in cold/humid). Multi-coat + trim work spans days on the calendar even at moderate labor. **Exterior painting is weather-dependent** — temperature/humidity minimums, no rain, dew windows (can't paint cold/wet/late-dew) — a real scheduling constraint in this climate. Plan around it.
8. **⚠️ Lead-safe practices on pre-1978 (RRP rule).** Disturbing paint in homes built before 1978 (sanding/scraping) can release lead — the EPA RRP rule requires certified containment, work practices, and cleanup ⚠️ (legal). Exterior scraping and interior sanding on old homes especially. A compliance + labor + (certification) reality; flag pre-1978 work.
9. **Quality paint covers better and lasts — affects coats and longevity.** Premium paint often covers in fewer coats and lasts longer (better material cost, sometimes less labor/fewer coats). Cheap paint may need more coats and re-do sooner. Material choice interacts with labor.
10. **Caulk gaps/joints before paint (interior + exterior).** Caulking trim joints, gaps, and cracks (paintable caulk) before finish gives a clean, sealed result (and on exterior, keeps water out). A real prep line, easy to under-count, especially trim-heavy or exterior.
11. **Spray vs. brush/roll tradeoff.** Spraying is fast on large open/exterior/new and gives a fine finish on trim/doors/cabinets — but requires heavy masking (offsetting some speed) and overspray control. Brush/roll for cut-in, occupied, small, or where masking would exceed the spray savings. Method affects labor + masking material.
12. **Stain/clear is a different process than paint.** Staining wood (trim/doors/decks) + clear-coating (poly/varnish, multiple coats, sanding between) is a distinct, often slower process with different products. Don't price stain/clear as paint. (Exterior deck finish ties to the Deck Manual.)

## 2.8 Quick worked example

Interior repaint, occupied 3-bedroom (illustrative — walls/ceilings/trim, light prep, 1 color change):
- **Area:** ~ several rooms, walls + ceilings (e.g. ~3,500 SF paintable walls/ceilings), trim ~600 LF, ~10 doors, ~12 windows; occupied/furnished; eggshell walls, semi-gloss trim, 2 coats.
- **Paint:** walls/ceilings (3,500 × 2 ÷ ~375 ≈ ~19 gal) + ceiling paint + trim/door enamel (separate, ~ a few gal); primer (spot/PVA where patched/new); caulk.
- **Prep:** clean, patch nail holes/dings, caulk, light sand (light condition).
- **Protection:** mask + cover furniture/floors (occupied — real labor).
- **Labor:** prep + masking (occupied — significant) + walls/ceilings cut-in & 2 coats (~3,500 SF × ~0.006 × 2 ≈ ~42 MH) + **trim (600 LF × ~0.03 × 2 ≈ 36 MH)** + **doors (10 × ~0.35 × 2 sides ≈ ~14 MH)** + windows + cleanup, × ~1.3 (occupied) ≈ **~140–170 MH** — **spanning multiple days for dry times.** Trim/doors + occupied protection are big chunks.
- **Equipment:** brushes/rollers/poles, masking film, drop cloths, ladders, HVLP for doors/trim (optional), lighting.
- *Exterior repaint instead:* add pressure wash + heavy scraping/priming of peeling + height/staging + weather scheduling + ⚠️ lead-safe if pre-1978 — prep and access dominate.

---

# APPENDIX — Cross-system interior-finish & painting principles

1. **Both are surface estimating, but prep/level/coats dominate — not raw SF.** Drywall: the **finish level (0–5)** ⚠️ drives finishing labor. Painting: **surface prep + coats + trim/door detail** dominate. Estimating either by square footage alone badly misses; the condition/level/coats are the real drivers. Confirm them.
2. **Dry/cure time drives the SCHEDULE even when man-hours are modest.** Drywall mud (Level 4 ≈ 3+ days of coat-dry-sand) and paint (recoat times, multi-coat + trim) span days on the calendar. Exterior painting is **weather-gated** (temp/humidity/rain/dew — real here). Quote the timeline, not just the labor hours.
3. **They sequence: drywall → prime → paint.** New drywall needs PVA primer before finish paint; a Level 5 skim before gloss/critical lighting. Coordinate the trades (and dry times) in sequence. A full interior-finish scope chains drywall finish level → primer → coats.
4. **⚠️ Code/compliance items:** fire-rated drywall (5/8" Type X) where required; cement board behind wet/tile; **lead-safe RRP practices on pre-1978 repaints** ⚠️ (legal). Flag these — they're not optional and they affect material, labor, and (lead) certification.
5. **Dust, mess, and protection are real labor in occupied/finished spaces.** Drywall sanding dust and paint protection/masking add substantial time in lived-in homes vs. empty new construction — and drips/dust on a customer's home are costly callbacks. Budget containment, protection, and cleanup explicitly; this is a major difference from exterior trades.
6. **One combined difficulty factor, capped (~1.4×), on labor.** Occupied space, high ceilings/stairwells, cut-up rooms, heavy prep, multiple colors — pick the governing one. Demo/disposal, containment, texture, repairs/patches, exterior wash, staging, specialty are **separate line items**, not multipliers.
7. **Trim, doors, repairs, and patches are labor-dense — estimate as their own units.** Painting trim/doors (LF/EA, slow detail) and drywall repairs/patches (per-occurrence, multi-trip dry time) carry disproportionate labor — never fold them into a flat per-SF rate.
8. **Match material to location/use:** moisture/fire drywall by location ⚠️; paint sheen to use (flat ceilings, eggshell/satin walls, semi-gloss trim/wet); primer type to substrate/stain/color; quality paint for coverage/longevity. Material choice interacts with labor (coats) and durability.
9. **Climate/scheduling here:** cold/damp slows drywall mud drying and limits exterior paint windows (temp/dew); plan interior finish for heated conditions and exterior for the weather window. A real scheduling reality in this market.
10. **Cross-references:** exterior **siding field-painting** ties to the Siding Manual (primed products → field finish); **deck/exterior wood stain** ties to the Deck Manual; **wet-area cement board/tile prep** borders tile scope. Pull the overlapping detail from the relevant manual rather than double-counting.

*End of interior-finish & painting manual. Built in the same format as the other manuals. Remaining/related trade categories (exterior metal — gutters/soffit/fascia, and others) to be built in the same format.*
