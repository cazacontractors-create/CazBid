# Caza Contractors — Framing Estimating Manual

**Purpose:** A trade-expert reference for the AI estimator covering structural framing — walls, floors, roofs, and the engineered/structural members that tie them together. Same structure as the roofing manual: for each framing system it defines the labor tasks that drive time, the factors that move them, the material list with units and coverage/spacing rates, special equipment, the dimensions required for an accurate quote, and the best-practices that change material or labor.

**CRITICAL — the structural/engineering boundary:** Framing is *assembly* estimating, not *surface* estimating. Much of it is spacing-and-span driven. Some of it is **structural sizing that requires an engineer, an architect, or code span tables — NOT a rule of thumb.** Throughout this manual, items marked **⚠️ STRUCTURAL — VERIFY** mean: *do not guess the member size or load path; size from span tables, the plans, or an engineer.* The AI may estimate quantities and labor for a given (specified) framing layout, but it must NOT invent beam/header/joist sizes or declare a wall non-bearing. When the structure isn't specified, the estimate should state the assumption and flag that sizing needs verification.

**How to use this manual (for the AI):**
1. Identify the framing system(s) involved — wall, floor, roof, or structural members.
2. Confirm whether the member sizes/layout are **specified** (plans, engineer) or **assumed**. If assumed for any structural member, flag ⚠️.
3. Use **Required Dimensions** to confirm inputs; estimate conservatively + state assumptions if missing.
4. Build material from the **Material List** using **spacing/coverage rates** — e.g. stud count = wall length ÷ spacing + extras; sheathing = area ÷ 32 sq ft/sheet.
5. Estimate labor from **Labor Tasks** (MH/unit), then apply **Modifiers** (combined factor, capped).
6. Add **Equipment** for the scope.
7. Apply **Best-Practice Notes** — they change material or labor.

**Units key:** LF = linear foot · BF = board foot · SF = square foot · SH = sheet (4×8 = 32 SF) · EA = each · MH = man-hours · OC = on-center spacing · PT = pressure-treated · LVL = laminated veneer lumber · OSB = oriented strand board

**Lumber sizing note:** Nominal vs. actual — a "2×4" is actually 1.5"×3.5"; "2×6" = 1.5"×5.5"; "2×8" = 1.5"×7.25"; "2×10" = 1.5"×9.25"; "2×12" = 1.5"×11.25". Lengths come in 2-ft increments (8,10,12,14,16). Order to minimize cut waste.

---

# 1. WALL FRAMING

## 1.1 System overview & sub-types

Wall framing is the vertical structure: studs running between a bottom plate and (usually doubled) top plate, with openings framed by headers, king/jack studs, sills, and cripples. The estimate is driven by **wall length (stud count by spacing), opening count/size (headers + opening framing), wall height (stud length + sheathing), and whether the wall is bearing or non-bearing** (which changes header sizing).

**Sub-types:**
- **Exterior bearing walls:** Carry roof/floor loads above. 2×6 common (insulation + structural) in cold climate; 2×4 older/interior-grade. Headers over openings sized to load ⚠️. Continuous load path to foundation matters.
- **Interior bearing walls:** Carry loads from above (joists/rafters bear on them). Often 2×4. Headers required over openings ⚠️. Cannot be removed/altered without re-supporting the load.
- **Interior non-bearing (partition) walls:** Divide space only, carry no structural load above. 2×4, often 24" OC. Openings need minimal/no structural header (a flat 2× or single member). **Whether a wall is bearing is a ⚠️ STRUCTURAL determination — do not assume non-bearing.**
- **Knee walls / pony walls / half walls:** Short walls (attic knee walls supporting rafters, deck pony walls, half-height partitions). Knee walls under rafters can be structural ⚠️.
- **Gable-end walls / rake walls:** Triangular walls following roof slope (studs of varying length cut to the rake). More cutting labor, stud lengths vary. Common in additions/dormers tied to roofing.
- **Dormer walls:** Side and front walls of a dormer (ties to Caza's dormer/roofing work). Often small but fiddly — many short studs, tie-in to existing roof structure ⚠️.

## 1.2 Required dimensions for an accurate quote

- **★ Total wall length (LF)** — drives stud count.
- **★ Wall height (ft)** — stud length, sheathing area, plate count (tall walls = longer studs, possibly engineered).
- **★ Stud spacing (16" or 24" OC)** — 16" standard for 2×4 bearing and most walls; 24" OC ("advanced framing") for 2×6 with aligned loads. Drives count.
- **★ Opening count and sizes (windows/doors)** — each needs a header + king/jack studs + sill + cripples.
- **★ Bearing or non-bearing** ⚠️ — drives header sizing and whether the wall is structural.
- **★ Lumber size (2×4 / 2×6)** — structural and cost.
- **Number of corners and wall intersections** — extra studs (corner posts, partition backers/channels).
- **Plate type** — bottom plate PT if on concrete/slab; top plate doubled (typically).
- **Sheathing type** — OSB/plywood structural sheathing, thickness; or non-structural (foam) with let-in bracing/metal strapping.
- **Existing conditions (remodel)** — tie-in to existing framing, removing/altering walls (bearing? ⚠️), matching existing dimensions.
- **Wind/seismic/hold-down requirements** ⚠️ — shear walls, hold-downs, strapping in high-wind/seismic zones.

## 1.3 Material list — units, spacing/coverage rates, waste

Stud count rule: **studs = (wall length in inches ÷ OC spacing) + 1, then add for corners, partitions, and openings.** Practical shortcut: **wall LF × 0.75 (for 16" OC) or × 0.5 (24" OC), + ~15–20% for corners/openings/blocking.**

| Material | Unit | Coverage / basis | Typical waste | Notes |
|---|---|---|---|---|
| **Studs (2×4 / 2×6)** | EA | (length ÷ OC) + 1, + extras | ~10–15% | 16" OC ≈ 0.75/LF; 24" OC ≈ 0.5/LF. Add corners (2–3 ea), partition intersections, opening framing. Precut studs for standard 8'/9' walls save labor. |
| **Bottom plate** | LF | wall LF | ~10% | PT if on concrete/masonry/slab (code). 1× the wall length. |
| **Top plate (doubled)** | LF | wall LF × 2 | ~10% | Double top plate standard for bearing; laps at corners/intersections. |
| **Headers (over openings)** ⚠️ | EA / BF | per opening; size to span + load ⚠️ | — | 2×6 to 2×12 doubled, or LVL/engineered for big/loaded openings. **Size from span table/plans/engineer — do not guess.** Built-up (2-ply + ½" plywood spacer to 3.5") or solid LVL. |
| **King & jack (trimmer) studs** | EA | 2 king + 2 jack per opening (more for wide) | — | Frame each side of opening; jacks carry the header. |
| **Sills + cripples (windows)** | EA / LF | sill (doubled) + cripples at OC above/below opening | — | Window openings; cripples maintain stud spacing above header and below sill. |
| **Corner posts / backing** | EA | per corner / partition intersection | — | 2–3 studs or a 3-stud corner; drywall backing at intersections (or drywall clips). |
| **Blocking / fire blocking** | LF | per code (mid-height on tall walls, at floor/ceiling, draftstops) | ~10% | Fire blocking required at concealed spaces per code. |
| **Structural sheathing (OSB/plywood)** | SH (4×8=32 SF) | wall area ÷ 32 | ~10–15% | 7/16" OSB or ½" ply typical for shear/racking. Area = wall LF × height. Subtract large openings only if significant. |
| **Housewrap (WRB)** | SF (roll) | wall area | +10% lap | Weather-resistive barrier over sheathing (ties to siding scope). |
| **Framing nails / fasteners** | box | by framing volume | — | 16d for framing, 8d for sheathing; structural connectors as specified. |
| **Hold-downs / shear hardware** ⚠️ | EA | per engineered/code requirement ⚠️ | — | High-wind/seismic — Simpson hold-downs, straps, anchor bolts. **Per engineering/code.** |
| **Anchor bolts / sill connection** | EA | ~6' OC + within 12" of ends/corners (code) | — | Bottom plate to foundation; PT sill + anchor bolts or approved fasteners. |

## 1.4 Labor tasks & production rates

| Task | Unit | Base MH/unit (2-person, ground-level, simple) | Notes |
|---|---|---|---|
| **Wall framing — layout, plate, stud, raise** | LF | ~0.12–0.20 MH/LF (simple straight wall) | Includes plating, marking layout, cutting/nailing studs, raising. Tall/complex walls higher. |
| **Wall framing — by area alternative** | SF (wall) | ~0.10–0.16 MH/SF of wall | Some estimate by wall surface area. |
| **Opening framing (window/door)** | EA | ~0.5–1.5 MH/EA | Header + kings/jacks + sill + cripples; wide/loaded openings higher (esp. with engineered headers). |
| **Header install (engineered/large)** ⚠️ | EA | ~0.5–2+ MH/EA | Heavy LVL/beam headers slower; may need lifting help. |
| **Structural sheathing** | SH | ~0.2–0.4 MH/SH | Cut, fit, nail to pattern (edge nailing for shear). |
| **Housewrap** | SF | ~0.004–0.008 MH/SF | Roll out, lap, fasten, tape (ties to siding). |
| **Gable/rake wall (sloped studs)** | LF | +30–50% over straight wall | Varying stud lengths, angle cuts — slower. |
| **Knee wall / short wall** | LF | ~0.15–0.25 MH/LF | Short but fiddly; tie to rafters ⚠️. |
| **Blocking / fire blocking** | LF | ~0.03–0.06 MH/LF | |
| **Remodel: remove existing wall** | LF | ~0.2–0.5 MH/LF (non-bearing); bearing requires shoring ⚠️ | Demo + haul; bearing wall removal needs temporary support + beam ⚠️ (major). |
| **Shear wall / hold-down install** ⚠️ | EA | per hardware | Engineered connections. |

**Crew & duration:** Small crew (2–3) for typical residential walls. New walls go quickly on open subfloor; remodel tie-ins, sloped walls, and many openings slow it. Production rate assumes ground/subfloor level — elevated or tight-access work is slower.

## 1.5 Labor modifiers

Combined factor, capped ~1.4× (framing modifiers are usually smaller than roofing's steep-roof penalties), applied to framing labor.

| Condition | Factor |
|---|---|
| New walls, ground/subfloor, straight, standard height | 1.0 |
| Many openings / cut-up layout | +0.1–0.2 |
| Tall walls (>10 ft) / cathedral | +0.15–0.25 (staging, longer members) |
| Gable/rake/sloped walls | +0.2–0.3 (angle cuts, varying lengths) |
| Remodel tie-in to existing (match, scribe, work around) | +0.15–0.3 |
| Difficult access / elevated / tight space | +0.1–0.2 |
| Dormer walls (small, fiddly, roof tie-in) ⚠️ | +0.2–0.3 |

**Separate adders:** demolition (remove existing), shoring for bearing-wall work ⚠️ (major — temporary support + beam), engineered hardware install, staging for tall walls, hauling/disposal.

## 1.6 Special equipment

| Equipment | When |
|---|---|
| **Framing nailers + compressor/hoses** | Core tool — stud/plate/sheathing nailing. |
| **Circular saw / miter saw** | Cutting studs, plates, angle cuts (miter for rake walls). |
| **Sawhorses / cut station** | Cutting setup. |
| **Temporary bracing / wall jacks** | Plumbing and bracing walls during raise; wall jacks for tall/heavy walls. |
| **Shoring / temporary support** ⚠️ | Bearing-wall removal or alteration — adjustable posts, beams, needle beams. Structural. |
| **Staging / scaffold** | Tall walls, elevated work. |
| **Laser level / transit** | Layout, plumb, level over distance. |
| **Powder-actuated tool / hammer drill** | Bottom plate to concrete (anchors). |
| **Lifting equipment** | Heavy LVL/beam headers, tall pre-built walls. |

## 1.7 Best-practice notes that change material or labor

1. **⚠️ Determine bearing vs. non-bearing FIRST — it is structural, not a guess.** Whether a wall carries load drives header sizing, whether it can be altered, and the whole approach. Removing or modifying a bearing wall requires shoring + a properly sized beam ⚠️ (a major scope). Never assume a wall is non-bearing to simplify an estimate. When unknown, flag for verification.
2. **⚠️ Headers are sized to span AND load — use span tables/plans/engineer.** A header over a 3-ft window in a 1-story wall is very different from a header over a 12-ft opening carrying two floors and a roof. Built-up dimensional (2-ply 2×10/2×12), LVL, or steel — sized to the actual condition. Do not rule-of-thumb a structural header.
3. **PT bottom plate on concrete/masonry (code).** Any plate in contact with concrete or masonry must be pressure-treated (or naturally durable) — moisture/rot. A material spec, not optional. Anchor bolts/approved fasteners per code spacing.
4. **2×6 vs. 2×4 in cold climate.** 2×6 exterior walls allow more cavity insulation (R-19+ vs R-13) — often required/preferred in Climate Zone 6, and provide more structural capacity. Affects stud cost, plate width, window/door jamb depth. Default 2×6 for exterior in this market unless specified.
5. **Advanced framing (24" OC, aligned loads) saves material but has requirements.** 24" OC with stacked/aligned framing (studs over joists over rafters), single top plates with tie plates, 2-stud corners — reduces lumber and thermal bridging but requires the load path to align and proper detailing. Don't just widen spacing without the system.
6. **Corner and partition backing / drywall support.** Corners and wall intersections need backing for drywall and structural connection (3-stud corners, channels, or drywall clips). Easy to under-count studs by forgetting these.
7. **Fire blocking and draftstopping (code).** Concealed vertical/horizontal spaces need fire blocking (at floor/ceiling connections, mid-height in tall walls, around penetrations, soffits). A real material + labor item per code.
8. **Continuous load path.** Loads must transfer wall-to-wall-to-foundation. Point loads (from beams/girders above) need posts/studs stacked down to bearing ⚠️. A beam landing on an un-reinforced wall is a failure. Structural — verify the load path is carried down.
9. **Shear/racking resistance.** Walls resist lateral (wind/seismic) loads via structural sheathing (nailed to pattern — edge nailing matters) or let-in bracing/metal straps. In high-wind areas, hold-downs and specific nailing ⚠️ are engineered. Sheathing nailing pattern affects labor.
10. **Rake/gable walls — order long stock, expect waste and cutting.** Sloped-top walls have studs of every length and angled top cuts. More labor, more cut waste; order longer stock for the tall end. Common on additions/dormers.
11. **Window/door rough opening sizes.** Rough openings must match the unit's RO spec (unit size + shim space). Getting RO wrong means re-framing. Pull RO dimensions from the window/door schedule, not the unit's nominal size.
12. **Remodel: scribe and match existing.** Tying new framing to old (out-of-plumb, out-of-level, non-standard old dimensions) is slow — scribing, shimming, sistering to existing. Budget the tie-in labor; old houses are never square.

## 1.8 Quick worked example

Addition exterior wall (illustrative):
- **Wall:** 24 LF, 9 ft tall, 2×6 @ 16" OC, 2 windows (3'×4') + 1 door (3'×7'), exterior bearing ⚠️ (verify header sizing).
- **Studs:** 24 LF × 0.75 = 18 + ~15% (corners/openings) ≈ **~22 studs** (2×6×9').
- **Plates:** bottom 24 LF (PT where on subfloor/slab) + double top 48 LF = **~72 LF** 2×6.
- **Headers:** 3 openings ⚠️ — size to load (e.g. 2-ply 2×10 or LVL per span table/plans). Kings/jacks/sills/cripples per opening.
- **Sheathing:** 24 × 9 = 216 SF ÷ 32 = **~7 sheets** 7/16" OSB + 10% ≈ 8.
- **Housewrap:** 216 SF + lap.
- **Labor:** 24 LF × ~0.16 MH/LF ≈ 4 MH wall + 3 openings × ~1 MH ≈ 3 + sheathing (8 × 0.3 ≈ 2.4) + housewrap ≈ **~10–12 MH** (ground level, new) — more with tie-in/staging.
- **Equipment:** framing nailers, saws, wall braces, staging for 9-ft wall.

---

# 2. FLOOR FRAMING

## 2.1 System overview & sub-types

Floor framing is the horizontal platform: joists spanning between supports (walls, beams, foundation), carrying the subfloor and everything on it. The estimate is driven by **floor area (joist count by spacing and span), the supporting beams/girders, the span (which dictates joist size ⚠️), and the subfloor area.** Spans and member sizes are **⚠️ STRUCTURAL** — joist and beam sizing comes from span tables/plans/engineer.

**Sub-types:**
- **Dimensional lumber joists (2×8/2×10/2×12):** Traditional sawn joists at 16" OC (12" OC for heavy loads/long spans). Size to span ⚠️. Most common in repair/small work.
- **Engineered I-joists (TJI etc.):** Manufactured I-shaped joists — longer spans, lighter, straighter, less shrinkage. Sized from manufacturer span charts ⚠️. Common in new construction. Different connectors, web stiffeners, can't be notched/cut freely.
- **Open-web floor trusses:** Manufactured trusses — long clear spans, easy MEP runs through the webs. Engineered/ordered to spec ⚠️.
- **Beams/girders (built-up, LVL, steel)** ⚠️: Carry joists where they can't span to a wall. Built-up dimensional, LVL/engineered, or steel. **Sized to load + span by engineer/span table — never guessed.** Posts carry beams to footings ⚠️.
- **Deck framing (PT joists/beams):** Exterior — pressure-treated joists, beams, posts on footings. Ties to Caza's deck work. Ledger attachment to house ⚠️ (critical — improper ledger = deck collapse). Covered in the deck context but framing logic here applies.
- **Floor repair (sistering, joist replacement):** Reinforcing/replacing rotted or undersized joists — sister a new joist alongside, or replace. Common in older-home work.

## 2.2 Required dimensions for an accurate quote

- **★ Floor area (SF)** — joist count, subfloor.
- **★ Joist span (ft)** ⚠️ — the clear distance between supports; dictates joist size and spacing. Structural.
- **★ Joist spacing (12"/16"/19.2"/24" OC)** — 16" typical; 12" for heavy/long; drives count.
- **★ Joist size/type** ⚠️ — dimensional vs. I-joist vs. truss; sized to span. Structural.
- **★ Beam/girder count, span, and load** ⚠️ — where joists are supported mid-span; sized to load. Structural. Post locations + footings ⚠️.
- **★ Subfloor type and thickness** — ¾" T&G plywood/OSB typical; glued + screwed.
- **Bearing conditions** — what the joists/beams bear on (walls, foundation, beams) and the load path down ⚠️.
- **Openings (stairs, chases)** — headers/trimmers around floor openings ⚠️ (doubled members).
- **Cantilevers** ⚠️ — joists extending past support (bays, balconies) — limited and structural.
- **Existing conditions (repair/remodel)** — what's there, what's failing, access (crawlspace/basement), matching existing depth.
- **Deck-specific:** ledger attachment detail ⚠️, footing size/depth (frost depth — deep in this climate), beam/post layout, joist-to-beam connection.

## 2.3 Material list — units, spacing/coverage rates, waste

Joist count rule: **joists = (length of span area ÷ OC) + 1, + doublers at openings/under walls + rim/band joists.**

| Material | Unit | Coverage / basis | Typical waste | Notes |
|---|---|---|---|---|
| **Floor joists (dimensional)** ⚠️ | EA | (run ÷ OC) + 1 + doublers | ~10% | Size to span ⚠️. 16" OC ≈ 0.75/LF of run. Add doubled joists under parallel walls + at openings. |
| **Engineered I-joists (TJI)** ⚠️ | EA | same count logic; ordered to length | ~5% | Sized from mfr charts ⚠️. Web stiffeners, rim board, special hangers. Can't cut flanges. |
| **Floor trusses** ⚠️ | EA | per truss layout, ordered | — | Engineered/ordered ⚠️; long spans. |
| **Rim / band joist** | LF | floor perimeter | ~10% | Closes joist ends; dimensional, rim board (for I-joists), or LVL. |
| **Beams / girders (built-up)** ⚠️ | LF / BF | per beam, sized to load ⚠️ | ~10% | 2-ply/3-ply dimensional, LVL, or steel. **Engineer/span-table sized.** |
| **Posts / columns** ⚠️ | EA | per beam support point | — | Carry beams to footings; sized to load ⚠️. PT or steel (exterior/basement). |
| **Joist hangers / connectors** | EA | per joist-to-beam/ledger connection | — | Simpson hangers sized to joist; structural connectors. Deck ledger connectors ⚠️. |
| **Subfloor (¾" T&G ply/OSB)** | SH (32 SF) | floor area ÷ 32 | ~10% | Glued (construction adhesive) + screwed/nailed. T&G edges. |
| **Construction adhesive** | tube | ~1 per 1–2 sheets subfloor | — | Glue subfloor to joists (squeak prevention). |
| **Blocking / bridging** | EA / LF | mid-span rows per code/span (cross-bridging or solid blocking) | ~10% | Prevents joist twist; rows based on span. |
| **Ledger (deck) + fasteners** ⚠️ | LF / EA | house attachment LF; structural lags/bolts ⚠️ | — | **Deck ledger attachment is life-safety ⚠️** — through-bolts/structural screws + flashing, NOT nails/lags into rim only. Per code (e.g. DCA-6). |
| **Footings (deck/post)** | EA / CY | per post, to frost depth ⚠️ | — | Concrete footings below frost line (deep in this climate); size to load + soil. |
| **PT lumber (deck framing)** | as above | exterior framing | — | Ground-contact rated where applicable; fasteners hot-dip galv/SS for PT. |
| **Framing nails / structural screws** | box | by volume | — | Joist hanger nails (specific), subfloor screws, structural screws. |

## 2.4 Labor tasks & production rates

| Task | Unit | Base MH/unit (2-person) | Notes |
|---|---|---|---|
| **Floor joist install (dimensional)** | SF (floor) | ~0.05–0.10 MH/SF | Layout, set, hang, block. By area of floor. |
| **I-joist install** | SF | ~0.05–0.09 MH/SF | Similar; web stiffeners/hangers add. |
| **Beam/girder install (built-up)** ⚠️ | LF | ~0.2–0.5 MH/LF | Build up plies or set LVL/steel; heavy — lifting. |
| **Post/column set** ⚠️ | EA | ~0.5–1.5 MH/EA | Set, plumb, connect; footing separate. |
| **Joist hangers** | EA | ~0.1–0.2 MH/EA | Fit + nail with hanger nails. |
| **Subfloor (glue + fasten)** | SH | ~0.3–0.5 MH/SH | Glue, set T&G, screw/nail. |
| **Blocking / bridging** | LF | ~0.03–0.06 MH/LF | Mid-span rows. |
| **Rim/band joist** | LF | ~0.05–0.08 MH/LF | |
| **Floor opening framing (stairs)** ⚠️ | EA | ~1–3 MH/EA | Doubled headers/trimmers, hangers. |
| **Deck ledger attachment** ⚠️ | LF | ~0.15–0.30 MH/LF | Locate, flash, structural-fasten ⚠️ — critical, don't rush. |
| **Footings (dig + pour)** | EA | ~1–4 MH/EA (hand) | To frost depth; deeper = more (machine helps). |
| **Repair: sister joist** | EA | ~1–3 MH/EA | Access (crawl/basement), jack/level, sister + fasten. |
| **Repair: replace joist** | EA | ~2–5 MH/EA | Remove + replace; harder than sistering. |

**Crew & duration:** 2–3 person. Open new floors go fast by area; repairs in tight crawlspaces/basements are slow (access dominates). Beam/post work is heavy and slower. Deck footings to frost depth in this climate are real digging.

## 2.5 Labor modifiers

Combined factor, capped ~1.5× (repair/access conditions can push higher than new work).

| Condition | Factor |
|---|---|
| New floor, open access, ground/main level | 1.0 |
| Tight access (crawlspace, low basement) | +0.2–0.4 (access dominates) |
| Repair/retrofit (work around existing, jack/level) | +0.2–0.4 |
| Long spans / heavy beams (lifting) | +0.15–0.25 |
| Many openings / cut-up floor | +0.1–0.2 |
| Cantilevers / bays ⚠️ | +0.15–0.25 |
| Deck (footings, ledger, exterior, height) | +0.15–0.3 (+ footing/ledger as separate items) |

**Separate adders:** footings (dig + pour), demolition of existing floor, shoring/jacking ⚠️, hauling, machine excavation for footings, elevated deck staging.

## 2.6 Special equipment

| Equipment | When |
|---|---|
| **Framing nailers + compressor** | Joists, subfloor, rim. |
| **Circular saw / beam saw** | Cutting joists, beams (big beams need a beam saw or multiple passes). |
| **Joist hanger nailer / palm nailer** | Hangers in tight spots. |
| **Subfloor adhesive gun** | Gluing subfloor. |
| **Jacks / shoring (temporary support)** ⚠️ | Repair — jacking floors level, supporting during joist replacement. Structural. |
| **Post-hole digger / auger / mini-excavator** | Deck footings to frost depth. |
| **Concrete tools / mixer** | Footings, piers. |
| **Laser level / transit** | Setting joists/beams level over span. |
| **Lifting / beam-setting equipment** | Heavy LVL/steel beams — too heavy to hand-set safely. |
| **Lighting / ventilation** | Crawlspace/basement repair work. |

## 2.7 Best-practice notes that change material or labor

1. **⚠️ Joist and beam sizing is structural — span tables/plans/engineer, never guessed.** Span (clear distance), spacing, species/grade, and load determine size. A 2×8 spans far less than a 2×12; an undersized joist sags/fails. I-joists and trusses come from manufacturer charts. This is THE structural item in floor framing — flag any assumed size.
2. **⚠️ Deck ledger attachment is life-safety — the #1 deck failure mode.** Ledgers must be attached with through-bolts or structural screws into the house band/structure (NOT nails, NOT lags into sheathing only), with proper flashing to keep water out, per code (DCA-6 / IRC). Improper ledger attachment kills people when decks collapse. This is a non-negotiable structural + flashing detail — never shortcut it.
3. **⚠️ Load path and point loads carried to footings.** Beams bear on posts; posts must land on adequate footings ⚠️ down to bearing soil/frost depth. A post on dirt or a beam on an unsupported joist fails. Continuous load path from floor → beam → post → footing. Structural — verify it's carried down.
4. **Footings below frost depth (deep in this climate).** Lewis County frost depth is significant — deck/porch footings must extend below it or they heave. Deeper footings = more excavation labor and concrete. A real cost driver in this market; don't price shallow footings.
5. **Glue + screw subfloor (squeak prevention).** Construction adhesive between joists and subfloor, plus screws (not just nails), prevents squeaks and stiffens the floor. Standard for quality work — adds adhesive material and slightly more labor than nail-only.
6. **Blocking/bridging per span (code).** Mid-span blocking or cross-bridging prevents joist rotation and distributes load. Rows required based on span. A real material + labor item, often forgotten in takeoffs.
7. **Doubled joists under parallel walls and at openings.** Non-bearing walls running parallel to and over joists need doubled joists beneath; floor openings (stairs) need doubled headers/trimmers + hangers. Easy to under-count.
8. **I-joist rules differ from dimensional.** I-joists can't be notched/cut in the flanges, need web stiffeners at bearings, rim board (not dimensional rim), and specific hangers. Holes only in the web per mfr chart. Estimating I-joists as dimensional misses the accessories and the rules.
9. **PT + compatible fasteners for exterior/deck.** Deck framing is PT (ground-contact rated where applicable); fasteners and hangers must be hot-dip galvanized or stainless (modern PT chemistry corrodes regular steel/electro-galv). Hardware compatibility is a material spec, not a detail.
10. **Crawlspace/basement access dominates repair labor.** The framing is simple; getting to it (low clearance, no room to swing, hauling material in/out, lighting, moisture) is what eats the time. Estimate access realistically — a "simple" joist sister in an 18" crawlspace is slow.
11. **Cantilever limits.** ⚠️ Joists cantilevering past support (bays, bump-outs, balconies) are span-limited (typically ≤ ¼ of back-span, per tables) and structural. Don't free-hand a cantilever.
12. **Bearing length matters.** Joists/beams need adequate bearing (typically ≥1.5" on wood, more on masonry/steel). Insufficient bearing crushes/fails. Detail at supports.

## 2.8 Quick worked example

Deck floor framing (ties to Caza deck work, illustrative):
- **Deck:** 12'×16' (192 SF), PT, ledger to house ⚠️, beam on 3 posts to frost-depth footings ⚠️, joists 2×8 @ 16" OC (verify span ⚠️).
- **Joists:** 16 ft run ÷ 16" OC ≈ 12 + 1 = 13, + rim = **~13 joists** (2×8×12' PT) + 2 rim/band (2×8×16').
- **Beam:** 16 LF built-up (e.g. 3-ply 2×8 or 2×10) ⚠️ sized to load + span; on **3 posts** (PT 6×6) to **3 footings** below frost depth ⚠️.
- **Ledger:** 16 LF ⚠️ — structural-fastened to house band + flashed (life-safety, do not shortcut).
- **Joist hangers:** ~13 + ledger/beam connections (galv/SS for PT).
- **Decking** (surface — separate scope) on top.
- **Labor:** 192 SF × ~0.07 MH/SF ≈ 13 MH framing + ledger (16 × 0.25 ≈ 4) + 3 footings (dig frost-depth + pour, ~3–4 MH ea = ~10) + beam/posts (~4) ≈ **~30–35 MH** framing-only (decking surface separate).
- **Equipment:** nailers, beam saw, post-hole digger/auger (frost depth), concrete tools, laser level.

---

# 3. ROOF FRAMING

## 3.1 System overview & sub-types

Roof framing is the sloped structure carrying the roof — either **stick-framed rafters** (cut and assembled on site) or **manufactured trusses** (engineered, craned in). This is the framing most tied to Caza's roofing work: re-framing roofs, structural rafter repair, additions, and dormers. The estimate is driven by **roof area/footprint (rafter or truss count by spacing), the span and pitch ⚠️ (rafter size), the ridge/hip/valley structure, and sheathing area.** Member sizing is **⚠️ STRUCTURAL**.

**Sub-types:**
- **Stick-framed rafters (cut roof):** Common rafters from ridge to wall plate at spacing, with ridge board/beam, plus hip/valley rafters and jacks on hip-and-valley roofs. Birdsmouth cuts at the plate, plumb cuts at ridge. Labor-intensive (each rafter cut/fit) but flexible for complex/custom roofs and tie-ins. Rafter size to span+pitch+load ⚠️. Often needs ceiling joists/rafter ties to resist outward thrust ⚠️.
- **Ridge board vs. ridge beam** ⚠️: A *ridge board* is non-structural (rafters lean on each other; needs rafter ties to resist thrust). A *ridge beam* is structural (carries rafter loads; needed for cathedral/no-tie conditions, supported by posts to bearing ⚠️). **Which one is a structural determination** — cathedral ceilings usually need a ridge beam + posts ⚠️.
- **Manufactured roof trusses:** Engineered, ordered to span/pitch/profile, craned/set at spacing (usually 24" OC), braced per the truss layout. Fast to set, long clear spans (no interior bearing), but no attic room (webs fill the space) unless attic/room-in-roof trusses. **Cannot be cut/modified** ⚠️ (cutting a truss member voids it). Ordered from a truss supplier with an engineered layout ⚠️.
- **Rafter repair / sistering:** Reinforcing rotted/sagged/undersized rafters (common with Caza's roofing) — sister alongside, or replace. Sagging ridge, cracked rafters, undersized for snow load ⚠️ (heavy-snow market).
- **Dormer framing** ⚠️: Cutting into existing roof, headering off rafters around the opening ⚠️ (doubled headers/trimmers), framing the dormer walls + roof. Fiddly, structural at the tie-in. Ties directly to Caza's dormer/roofing jobs.
- **Overframing / additions:** New roof tying to existing (saddle, valley tie-in), framing over existing roof for an addition.

## 3.2 Required dimensions for an accurate quote

- **★ Roof footprint / area (SF or SQ)** — rafter/truss count, sheathing.
- **★ Span (building width / rafter run)** ⚠️ — dictates rafter/truss size. Structural.
- **★ Pitch (x/12)** — rafter length (run × slope factor), labor, and combines with span for sizing ⚠️.
- **★ Rafter/truss spacing (16"/24" OC)** — 16" common for stick rafters, 24" for trusses; drives count.
- **★ Rafter/truss size & type** ⚠️ — dimensional rafter vs. truss; sized to span+pitch+load (snow!). Structural.
- **★ Ridge length (LF)** — ridge board/beam; beam needs posts ⚠️.
- **★ Hip & valley length (LF)** — hip/valley rafters (larger members, often LVL) + jack rafters (many short, angle-cut).
- **★ Roof type/shape** — gable (simple), hip (more cuts), complex (multiple ridges/valleys/dormers).
- **★ Snow load** ⚠️ — heavy in this market (Tug Hill); drives member sizing and possibly closer spacing. Structural and critical here.
- **Ridge board vs. ridge beam** ⚠️ — cathedral/vaulted = ridge beam + posts; with-ceiling = ridge board + ties.
- **Ceiling joists / rafter ties** ⚠️ — resist rafter thrust; required with ridge board.
- **Overhang/soffit depth** — rafter tails / outlookers (lookouts) for overhangs; ties to soffit/fascia.
- **Existing conditions (repair/tie-in)** — what's there, what's failing, matching existing pitch/plane, tie-in detail ⚠️.
- **Sheathing type/thickness** — OSB/plywood; thickness by rafter spacing + load.

## 3.3 Material list — units, spacing/coverage rates, waste

Rafter count rule: **common rafters = (roof length ÷ OC) × 2 sides (gable) + 1, then add hip/valley rafters + jacks.** Rafter length = run × pitch slope factor (e.g. 8/12 ≈ 1.20, 10/12 ≈ 1.30, 12/12 ≈ 1.41).

| Material | Unit | Coverage / basis | Typical waste | Notes |
|---|---|---|---|---|
| **Common rafters (dimensional)** ⚠️ | EA | (length ÷ OC) per slope side + 1 | ~10–15% (cuts) | Size to span+pitch+load ⚠️ (snow). Length = run × slope factor; order next length up. |
| **Roof trusses** ⚠️ | EA | (roof length ÷ OC) + 1, + gable-end trusses | ~5% | Engineered/ordered ⚠️ to span/pitch/profile. Can't be cut ⚠️. Includes special girder trusses at load points. |
| **Ridge board / ridge beam** ⚠️ | LF | ridge LF | ~10% | Board (non-structural) or beam (structural + posts ⚠️). Beam often LVL/steel sized to load. |
| **Hip / valley rafters** ⚠️ | LF / EA | hip + valley LF (× slope factor) | ~10% | Larger than commons (often 2× or LVL) — carry jack loads ⚠️. Longer (diagonal). |
| **Jack rafters** | EA | many short, at hips/valleys, decreasing length | ~15% (angle cuts, offcuts) | Each angle-cut to hip/valley; labor-heavy, waste-heavy. |
| **Ceiling joists / rafter ties** ⚠️ | EA | (length ÷ OC) | ~10% | Resist rafter thrust ⚠️ (with ridge board); also ceiling support. Size/connection structural. |
| **Collar ties** | EA | upper-third, per rafter pair (code) | ~10% | Upper roof; resist ridge uplift/separation. |
| **Posts (under ridge beam)** ⚠️ | EA | per beam support point | — | Carry ridge beam to bearing ⚠️. Sized to load. |
| **Rafter tails / outlookers / lookouts** | EA / LF | overhang at eaves + rake overhang | ~10% | Overhang framing; lookouts for rake/gable overhang (ties to soffit/fascia). |
| **Roof sheathing (OSB/plywood)** | SH (32 SF) | roof area (sloped) ÷ 32 | ~10–15% | Thickness by spacing/load (7/16"–⅝"). Sloped area, not footprint. |
| **Sub-fascia / fascia backing** | LF | eave + rake LF | ~10% | Behind fascia; ties to exterior trim. |
| **Hurricane ties / rafter-to-wall connectors** ⚠️ | EA | per rafter/truss at bearing (code, esp. wind/uplift) | — | Simpson H-clips etc. — connect rafters/trusses to top plate. Code, esp. uplift. |
| **Truss/rafter bracing** | LF | per truss layout / code | ~10% | Lateral + permanent bracing (trusses require specific bracing per layout ⚠️). |
| **H-clips (sheathing edge)** | EA | between rafters at sheathing edges | — | Panel edge support between framing (per spacing/thickness). |
| **Framing nails / structural screws / connectors** | box | by volume | — | Connectors specific (hanger nails, structural screws). |

## 3.4 Labor tasks & production rates

| Task | Unit | Base MH/unit (2–3 person) | Notes |
|---|---|---|---|
| **Stick-frame common rafters** | SQ (roof) | ~2.5–4 MH/SQ | Cut, set, ridge; cutting each rafter is the time. Simple gable lower, cut-up higher. |
| **Hip/valley + jack framing** | LF (hip/valley) | ~0.3–0.6 MH/LF + jacks | Each jack angle-cut/fit — slow. Hip-and-valley roofs much slower than gable. |
| **Set roof trusses** | EA | ~0.3–0.8 MH/EA (+ crane) | Faster than stick, but needs crane + bracing. Per truss. |
| **Truss bracing** | SQ | ~0.3–0.6 MH/SQ | Permanent + temporary bracing per layout ⚠️. |
| **Ridge beam + posts** ⚠️ | LF / EA | beam ~0.3–0.6 MH/LF + posts ~1–2 MH ea | Heavy; lifting/support. |
| **Ceiling joists / rafter ties** | SF | ~0.04–0.08 MH/SF | Set + connect. |
| **Roof sheathing** | SH | ~0.2–0.4 MH/SH | Steeper = slower (footing/safety). Edge nailing. |
| **Overhang / lookouts / sub-fascia** | LF | ~0.05–0.10 MH/LF | Tails, outriggers, sub-fascia. |
| **Rafter-to-wall connectors** | EA | ~0.05–0.1 MH/EA | Hurricane ties. |
| **Dormer framing (cut-in)** ⚠️ | EA | ~8–24+ MH/EA | Open roof, header off ⚠️, frame walls+roof, tie-in. Highly variable by size. |
| **Repair: sister rafter** | EA | ~1–3 MH/EA | Access + jack/support + sister. |
| **Repair: replace rafter** | EA | ~2–5 MH/EA | Remove + replace; roof load support ⚠️. |
| **Tie-in to existing roof (addition)** ⚠️ | LF | ~0.3–0.6 MH/LF | Valley/saddle tie-in, match plane. |

**Crew & duration:** Stick framing 2–3 (cutting crew); trusses need a crane day + setting crew. Apply roofing-style pitch/access penalties — steep roof framing is slow and needs fall protection. Snow-load sizing ⚠️ in this market may mean bigger/closer members (more material + labor).

## 3.5 Labor modifiers

Combined factor, capped ~1.5× — roof framing inherits roofing's pitch/access penalties.

| Condition | Factor |
|---|---|
| Simple gable, walkable pitch, ground-accessible | 1.0 |
| Hip roof (more cuts) | +0.15–0.25 |
| Complex (multiple ridges/valleys/dormers) | +0.2–0.4 |
| Steep pitch (8/12+) | +0.15–0.3 (cutting/safety/staging) |
| Cathedral/ridge-beam (heavy beam, posts) ⚠️ | +0.15–0.25 |
| Repair/tie-in to existing ⚠️ | +0.2–0.4 (match, support, scribe) |
| Difficult access / multi-story / no crane access for trusses | +0.1–0.3 |

**Separate adders:** crane for trusses (a real day-rate), dormer cut-ins ⚠️ (priced per dormer), shoring during structural rafter repair ⚠️, staging for steep, tear-off of existing roof structure, snow-load upsizing ⚠️.

## 3.6 Special equipment

| Equipment | When |
|---|---|
| **Framing nailers + compressor** | Rafters, sheathing, connectors. |
| **Circular saw / rafter (speed) square** | Rafter cuts (birdsmouth, plumb, angle); speed square for layout. |
| **Crane / boom truck** ⚠️ | Setting trusses (and heavy ridge beams/LVLs). A real cost — crane day-rate. |
| **Staging / scaffold / roof jacks** | Steep roof framing, ridge work, height. |
| **Fall protection (harness/rope)** | Roof framing is fall-exposed — mandatory. |
| **Temporary bracing / shoring** ⚠️ | Bracing trusses/rafters during set; supporting roof during structural repair. |
| **Lifting equipment** | Heavy beams/LVLs (ridge beams). |
| **Laser/level/transit** | Ridge alignment, plane, plumb. |
| **Material hoist / ladder elevator** | Getting lumber/sheathing/trusses up. |
| **Magnetic sweeper** | If tied to roofing (cleanup). |

## 3.7 Best-practice notes that change material or labor

1. **⚠️ Rafter/truss sizing is structural — span + pitch + LOAD (snow!), from tables/plans/engineer.** In this market, **snow load is the governing load** ⚠️ — Tug Hill/Lewis County gets heavy snow, and rafters must be sized (and sometimes spaced closer) for it. An undersized rafter that's "fine" elsewhere sags/fails under local snow. Never guess rafter size; this is the critical structural item for roof framing here.
2. **⚠️ Ridge board vs. ridge beam is a structural decision.** A ridge *board* needs rafter ties/ceiling joists to resist the outward thrust rafters exert on walls (without them, walls spread and the ridge sags — a classic failure). A cathedral/vaulted ceiling (no ties) requires a structural ridge *beam* carried by posts to bearing ⚠️. Getting this wrong spreads the walls. Determine which — don't assume.
3. **⚠️ Rafter ties / ceiling joists resist thrust — required with ridge board, in the lower third.** They must be properly connected (nailing schedule) and positioned (near the plate; collar ties up high are NOT a substitute for rafter ties down low). A structural + connection item often misunderstood.
4. **⚠️ Trusses cannot be cut or modified.** Cutting/notching any truss member voids its engineering and can collapse it. If a truss is in the way of something (HVAC, chimney), it must be designed for it (special truss) or a different approach used. Field-modifying trusses is a serious error. Order the right trusses ⚠️.
5. **Stick vs. truss is a cost/labor/use tradeoff.** Trusses: faster set (crane day), long clear spans, cheaper labor — but no attic space (unless attic trusses), can't modify, lead time to order. Stick: flexible (complex roofs, tie-ins, attic/cathedral space), no crane, no lead time — but much more labor. Caza's complex/dormer/tie-in roofing work often favors stick.
6. **Hip-and-valley framing is far slower than gable.** Hip/valley rafters (longer, larger, diagonal) plus dozens of angle-cut jack rafters make a hip-and-valley roof multiples of the labor of a simple gable of the same area. Price the complexity, not just the square footage.
7. **Snow-load detailing beyond member size** ⚠️. Heavy snow may require closer spacing, larger members, stronger connections, and attention to drift loads (snow piling against walls/dormers/roof steps — locally higher). Drift is a real structural consideration on multi-level roofs here. Flag for engineering on anything non-standard.
8. **Rafter-to-wall connection (uplift + thrust).** Rafters/trusses must be positively connected to the top plate (hurricane ties/clips) — for uplift (wind) and to transfer thrust. Toe-nailing alone is often insufficient per code. A connector material + labor item.
9. **Overhang framing (tails, lookouts) ties to soffit/fascia.** Rafter tails (eave overhang) and lookouts/outriggers (rake/gable overhang) create the overhang that soffit/fascia finish. Size and detail affect the exterior trim scope — coordinate. Continuous sub-fascia ties the tails.
10. **Sheathing thickness by spacing and load.** Wider rafter/truss spacing (24") and higher loads (snow) require thicker sheathing (or H-clips at edges). Don't default to the thinnest; match span + load. Edge nailing pattern affects labor.
11. **⚠️ Dormer cut-ins are structural at the opening.** Cutting rafters for a dormer requires headering off the cut rafters (doubled headers + trimmers, hangers) to carry the interrupted load ⚠️, then framing the dormer. This is a structural modification of the roof — size the headers, carry the load. Fiddly and load-bearing; price per dormer.
12. **Tie-in to existing roof — match plane and carry loads** ⚠️. Additions tying to an existing roof (valley/saddle) must match the existing pitch/plane and properly transfer loads at the tie-in. Old roofs are rarely true — expect scribing/shimming and verify the existing structure can take the new load ⚠️.

## 3.8 Quick worked example

Garage/addition gable roof, stick-framed (illustrative):
- **Roof:** 24'×24' footprint, 8/12 pitch, gable, 2×8 rafters @ 16" OC ⚠️ (verify for snow load — critical here), ridge board + ceiling joists/ties.
- **Common rafters:** 24 ft length ÷ 16" OC ≈ 18 per side × 2 = 36 + 1 ≈ **~37 rafters**; length = 12 ft run × 1.20 (8/12 factor) ≈ 14.4 ft → order 16-ft 2×8 ⚠️.
- **Ridge board:** 24 LF (2× material). **Ceiling joists/rafter ties** ⚠️ ~ (24÷16)+1 ≈ 19 @ 16" OC to resist thrust.
- **Collar ties** upper third per pair.
- **Sheathing:** sloped area = 24 × 14.4 × 2 ≈ 691 SF ÷ 32 ≈ **~22 sheets** + waste ≈ 24 (⅝" for 16" OC + snow).
- **Connectors:** hurricane ties at each rafter/plate (~37+).
- **Labor:** ~6.9 SQ × ~3 MH/SQ × ~1.15 (8/12) ≈ ~24 MH rafter framing + ceiling ties (~6) + sheathing (24 × 0.3 ≈ 7) + overhang/connectors (~6) ≈ **~40–45 MH** (+ staging/fall protection for 8/12).
- **Equipment:** nailers, speed square, staging for 8/12, fall protection, material hoist.

*If trusses instead:* ~37 trusses ⚠️ ordered to 24'/8:12, crane day to set, bracing — much less cutting labor but crane cost + lead time, and no attic space.

---

# 4. STRUCTURAL MEMBERS — BEAMS, HEADERS, POSTS, ENGINEERED LUMBER

## 4.1 Overview & the engineering boundary

This section covers the load-carrying members that the wall/floor/roof systems depend on — **beams, girders, headers, posts/columns, and engineered lumber (LVL, PSL, glulam, steel).** It is the **most structural section in the manual.** Sizing these is **⚠️ ENGINEERING — from span tables, manufacturer charts, plans, or a structural engineer. The AI must NEVER invent a beam/header/post size.** The AI can estimate the *quantity, material cost, and labor* for a **specified** member; it must flag any unspecified structural member as requiring sizing.

**Member types:**
- **Built-up dimensional beams** ⚠️: Multiple 2× plies nailed/bolted (e.g. 3-ply 2×12). Economical, site-built, limited capacity/span. Sized ⚠️.
- **LVL (laminated veneer lumber)** ⚠️: Engineered, stronger/straighter than dimensional, longer spans, common for headers/beams. Sized from mfr charts ⚠️. Multiple plies for wider loads.
- **PSL (parallam) / LSL / glulam** ⚠️: Heavier engineered options — PSL for high loads/posts, glulam for long architectural spans. Sized ⚠️.
- **Steel beams (W-flange / I-beam)** ⚠️: For very high loads / long spans / minimal depth. Sized by engineer ⚠️; heavy (crane/equipment), needs bearing plates, often a steel supplier. Connections engineered.
- **Posts / columns** ⚠️: Carry beam loads down — built-up dimensional, solid timber, PSL, or steel (Lally columns/adjustable). Sized to load ⚠️; must bear on adequate footing ⚠️.
- **Headers** ⚠️: Beams over openings (doors/windows/garage) — covered in walls (1.3) but sized here. Garage-door and wide openings often need LVL/steel ⚠️.

## 4.2 Required dimensions for an accurate quote

- **★ Span (clear distance the member carries)** ⚠️ — primary sizing input. Structural.
- **★ Load carried (roof/floor/walls above, tributary width)** ⚠️ — what's bearing on it. Structural.
- **★ Member type/size as SPECIFIED** ⚠️ — from plans/engineer. If not specified, FLAG — do not assume.
- **★ Bearing points + footings/posts below** ⚠️ — where it lands, what carries it down to soil. Structural.
- **★ Depth available** — headroom/floor depth constraints (drives steel vs. deep wood).
- **Ply count / width** — for built-up/LVL (matches wall thickness or load).
- **Access for installation** — can a heavy beam be carried/craned to location? (Basement beams, ridge beams.)
- **Connection details** ⚠️ — hangers, bearing plates, post caps/bases, bolting — per engineering.
- **Existing conditions (remodel)** — removing a wall and adding a beam ⚠️ (shoring + beam + posts + footings — a major structural scope).

## 4.3 Material list — units, basis, waste

| Material | Unit | Basis | Waste | Notes |
|---|---|---|---|---|
| **Built-up dimensional beam** ⚠️ | LF / BF | beam length × ply count, sized ⚠️ | ~10% | Plies + spacers + nails/bolts per schedule. |
| **LVL / PSL / glulam** ⚠️ | LF / EA | length × plies, sized ⚠️ (mfr) | ~5% | Ordered to length; heavy; multiple plies bolted per spec. |
| **Steel beam (W-shape)** ⚠️ | LF / EA | length, sized by engineer ⚠️ | — | From steel supplier; bearing plates, connections engineered; heavy (crane). |
| **Posts / columns** ⚠️ | EA | per support point, sized ⚠️ | — | Built-up, solid, PSL, or steel/Lally; post caps/bases. |
| **Bearing plates / hardware** ⚠️ | EA | per bearing/connection | — | Steel bearing plates, post caps/bases, beam hangers, through-bolts — per engineering. |
| **Footings / piers (under posts)** ⚠️ | EA / CY | per post, to bearing/frost ⚠️ | — | Concrete footing sized to load + soil; rebar as speced. |
| **Connectors (hangers, straps, bolts)** ⚠️ | EA | per connection schedule | — | Joist/beam hangers sized to member; structural bolts. |
| **Fire protection (if required)** | SF | steel/engineered per code (some assemblies) | — | Some beams need fire-rated wrap/drywall per occupancy/code. |
| **Shoring (temporary, remodel)** ⚠️ | EA | per span being supported | — | Temporary posts/beams to carry load while installing permanent beam. |

## 4.4 Labor tasks & production rates

| Task | Unit | Base MH/unit | Notes |
|---|---|---|---|
| **Build up dimensional beam** ⚠️ | LF | ~0.15–0.4 MH/LF | Cut plies, glue/nail/bolt per schedule. |
| **Set LVL/PSL/glulam beam** ⚠️ | LF / EA | ~0.3–0.8 MH/LF (+ lifting) | Heavy; lifting crew or equipment. Bolting plies. |
| **Set steel beam** ⚠️ | EA / LF | ~0.5–1.5 MH/LF (+ crane/lift) | Heavy; crane/equipment; bearing plates, connections. Often specialist. |
| **Set post/column** ⚠️ | EA | ~0.5–2 MH/EA | Plumb, connect (caps/bases), bear on footing. |
| **Footing (dig + pour)** | EA | ~1–4 MH/EA | To bearing/frost; rebar. |
| **Connections / hardware** ⚠️ | EA | ~0.2–1 MH/EA | Hangers, bolts, plates per schedule. |
| **Shoring set + remove (remodel)** ⚠️ | EA | ~1–4 MH/EA set + removal | Temporary support during install. |
| **Bearing-wall removal + beam (full scope)** ⚠️ | EA (opening) | highly variable — often 16–60+ MH | Shore, remove wall, install beam + posts + footings, patch. Major. |

**Crew & duration:** Heavy structural work needs more hands and often equipment (lifting/crane). Beam-and-post-for-wall-removal is a multi-day structural job, not a quick task. Steel often involves a supplier/specialist.

## 4.5 Labor modifiers

| Condition | Factor / note |
|---|---|
| New, accessible, specified member | 1.0 |
| Heavy member (steel, multi-ply LVL) — lifting | +0.2–0.4 (+ equipment) |
| Remodel — install into existing (shore, fit) ⚠️ | +0.3–0.5 + shoring as separate |
| Difficult access (basement, tight, no crane) | +0.2–0.4 |
| Steel (specialist, connections, fireproofing) | +0.2–0.4 (+ supplier) |

**Separate adders:** ⚠️ shoring (set + remove), footings (dig + pour), crane/lift equipment, steel supplier/fabrication, engineering/design fee, demolition + patch on remodels, fire protection.

## 4.6 Special equipment

| Equipment | When |
|---|---|
| **Crane / boom / beam lift / jacks** ⚠️ | Heavy beams (steel, big LVL, ridge beams) — too heavy to hand-set safely. |
| **Temporary shoring (posts, needle beams, jacks)** ⚠️ | Supporting load during beam/wall work. Structural. |
| **Drilling/bolting tools** | Through-bolting multi-ply beams, steel connections. |
| **Beam saw / large circular saw** | Cutting big members. |
| **Concrete/excavation tools** | Footings under posts. |
| **Welding (steel, if field-connected)** ⚠️ | Steel connections (often shop-done; field per engineer). |
| **Laser/transit/level** | Setting beams level, bearing alignment. |
| **Lifting straps / rigging** | Rigging heavy members safely. |

## 4.7 Best-practice notes (mostly ⚠️ — this is the structural section)

1. **⚠️ NEVER size a structural member by rule of thumb.** Beams, headers, posts, and their connections must be sized from span tables, manufacturer charts, engineered plans, or a structural engineer — based on actual span and load. The AI estimates quantity/cost/labor for a *specified* member; it must flag any unspecified structural member as requiring engineering. An undersized beam/header fails catastrophically. This is the single most important rule in this manual.
2. **⚠️ Continuous load path — what holds the beam holds everything.** A beam carries load to posts; posts carry to footings; footings to soil. Every link must be sized ⚠️. A correctly-sized beam on an undersized post or inadequate footing still fails. Verify the whole path down to bearing.
3. **⚠️ Bearing-wall removal is a major structural scope.** "Open up this wall" = shore the load ⚠️, remove the wall, install a properly-sized beam ⚠️ + posts ⚠️ down to adequate footings ⚠️, then patch. This is engineering + shoring + heavy install + finish — never a casual line item. Often requires a permit and engineered design. Price it as the multi-step structural job it is.
4. **⚠️ Footings under point loads to bearing/frost depth.** Concentrated loads (posts under beams) need footings sized to the load and bearing soil, below frost (deep here). A post on a slab or shallow pad can punch through or heave. Size and depth are structural.
5. **Engineered lumber rules and handling.** LVL/PSL/glulam have specific bearing, hole, and connection rules (mfr) and are heavy. Multi-ply members bolt together per a schedule (not just nailed). Don't field-modify outside the mfr allowances. Plan lifting — they're heavy.
6. **Steel = supplier + crane + connections + possibly fireproofing.** Steel beams come from a fabricator (lead time), are heavy (crane), need engineered connections and bearing plates, and may require fire protection per code. A steel beam is a coordinated sub-scope, not an off-the-shelf grab. Price supplier + equipment + specialist.
7. **Depth-vs-span tradeoff.** Where headroom is tight (basements, over garage doors), a shallower stronger member (steel, or a deep LVL flush-framed) may be required vs. a deep dropped wood beam. The constraint drives the member choice and cost. Capture the depth limit.
8. **Header sizing scales hugely with opening width and load.** A header over a 3-ft window in a single-story is trivial; a header over a 16-ft garage door or a wide opening carrying two stories + roof is a major engineered LVL/steel member ⚠️ with big posts. Don't treat all headers alike — width × load drives it.
9. **Shoring is real work, both directions.** Temporary support to carry the load during install must itself be adequate ⚠️ (it's carrying the building), and setting + removing it is labor. Budget shoring as its own line on any remodel structural work.
10. **Connections are engineered, not assumed.** Hangers sized to the member, post caps/bases, through-bolts, bearing plates, straps — per the connection schedule/engineering. The right beam with wrong connections fails at the connection. Material + labor per the schedule.
11. **Permits and inspections.** Structural work (beams, wall removal, new load paths) typically requires a permit and inspection ⚠️, and often stamped engineering. Build permit/engineering time and fees into the estimate; it's part of the real cost and timeline.
12. **When in doubt, get the engineer.** The cost of an engineer's stamp is trivial next to a structural failure or a failed inspection/tear-out. For anything beyond a clearly table-sized standard condition, the estimate should include (and recommend) engineering. Flag it — don't absorb structural risk to win a bid.

## 4.8 Quick worked example

Remove interior bearing wall, install flush beam (illustrative — heavily ⚠️):
- **Scope:** remove 16 LF interior bearing wall ⚠️, install LVL beam ⚠️ (size per engineer — e.g. 3-ply LVL, but VERIFY) flush in floor, on 2 posts ⚠️ to 2 new footings ⚠️, patch.
- **⚠️ Pre-condition: structural engineering** to size beam, posts, footings, connections. Include the engineering fee + permit.
- **Shoring:** temporary support both sides while installing ⚠️ (set + remove).
- **Beam:** ~16+ LF LVL (3-ply) ⚠️ — heavy, lift/crew; **Posts:** 2 (PSL/steel) ⚠️ with caps/bases; **Footings:** 2 below frost ⚠️ (may require slab cut + dig + pour).
- **Connections:** post caps, bearing, bolting per schedule ⚠️.
- **Labor:** engineering (fee) + shore (set/remove ~6–10 MH) + demo wall (~4–8) + footings (slab cut + dig + pour, ~8–16) + set beam + posts (~8–16) + patch (separate finish scope) ≈ **~30–60+ MH structural** + engineering fee + permit + equipment (lift). A multi-day structural job.
- **Equipment:** shoring/jacks, beam lift, concrete/excavation, drilling/bolting, laser level.
- **This is the example of "never a casual line item" — flag engineering, price the full structural scope.**

---

# 5. TIMBER FRAMING (POST-AND-BEAM / HEAVY TIMBER / TIMBER ACCENTS)

## 5.1 System overview & sub-types

Timber framing uses **large solid (or engineered) wood members** — posts, beams, braces, rafters — as the structural skeleton, very often **left exposed as the finished architecture**. It is a distinct discipline from stick framing: members are big and expensive, connections are the craft (joinery or engineered hardware), much of it is **shop-fabricated then raised on site (often by crane)**, and because it's usually exposed, **appearance/finish quality is part of the work**, not hidden behind drywall. Sizing is **⚠️ STRUCTURAL/ENGINEERING** throughout — large timbers carry large loads and the joinery/connections are engineered. The estimate is driven by **the timbers themselves (board feet / each, high cost), the connection method (hand joinery vs. CNC vs. bracketed steel — huge labor swing), fabrication vs. on-site cutting, the raising (crane), and the finish.**

**Sub-types — these estimate very differently:**

- **A) Traditional timber frame (mortise-and-tenon, pegged joinery):** Heavy timbers (6×6 to 12×12+) joined with hand-cut or CNC-cut **mortise-and-tenon joints secured by wooden pegs (trunnels)**, assembled into **bents** that are raised (crane) and pegged together. The frame is the finished structure and the showpiece. Enclosure usually by **SIPs** (structural insulated panels) wrapping the outside, since there are no stud cavities. Labor is **skilled joinery + layout + raising** — the most labor-intensive and skill-intensive framing in this manual. Often **shop-cut** (by a timber-frame shop, hand or CNC) then delivered and raised. ⚠️ Engineered.
- **B) Heavy-timber / bracketed post-and-beam (exposed, hardware-connected):** Large timbers (solid, glulam, or PSL) used as exposed posts and beams **connected with engineered steel hardware** — concealed or decorative brackets, knife plates, through-bolts, timber screws — rather than full traditional joinery. Common for **porches, pavilions, covered entries, exposed-beam porch roofs, pole-barn-with-timber-look, and barn frames**. Much less joinery labor than traditional, still heavy/skilled/exposed, still ⚠️ engineered connections. **This is the most likely Caza timber scope** (porches, pavilions, entries tied to exterior/roofing work).
- **C) Timber accents / decorative (often non- or semi-structural):** Pergolas, brackets, outlookers, decorative trusses/king-post accents, gable timber decorations, faux beams. Some are structural (pergola posts/beams carry the pergola), some are purely decorative (applied brackets, faux beams). ⚠️ Flag which are structural. Lighter members, more about appearance and detailing.
- **Material classes across all three:** **Green/rough-sawn timbers** (cheaper, will check/shrink as they dry — expect movement, common traditionally), **kiln-dried / FOHC (free of heart center)** timbers (more stable, less checking, pricier), **glulam** (engineered, dimensionally stable, long spans, used for big exposed beams), **reclaimed timbers** (character, premium cost, must be assessed/re-milled). Species matters (Douglas fir, oak, pine, etc.) for cost, strength, and appearance.

## 5.2 Required dimensions for an accurate quote

- **★ Timber schedule (sizes, lengths, count of each member)** ⚠️ — posts, beams, braces, rafters, etc., sized by engineer/designer. The defining input. If not specified, FLAG — timber sizing is structural.
- **★ Connection method** — traditional joinery (hand vs. CNC), bracketed steel hardware, or decorative. **Biggest labor driver** — hand joinery is multiples of bracketed.
- **★ Fabrication source** — shop-cut (timber-frame shop / CNC) and delivered, or cut on site. Changes labor location and cost.
- **★ Number of bents / frames / raising plan** ⚠️ — for traditional frames; drives the raising (crane) day.
- **★ Span and load per member** ⚠️ — structural sizing. Snow load critical here. Posts to footings/bearing ⚠️.
- **★ Species, grade, and dryness** (green / KD / FOHC / reclaimed / glulam) — cost, movement, finish.
- **★ Finish requirement** — rough/as-is, planed/sanded, chamfered edges, stained/oiled/sealed — exposed timber finish is real labor.
- **★ Enclosure method (if a building)** — SIPs over the frame, or conventional infill — affects the broader scope (SIPs are their own line).
- **Connection hardware schedule** ⚠️ — brackets, knife plates, bolts, timber screws, pegs — per engineering.
- **Footings / bearing for posts** ⚠️ — to frost depth here; sized to load.
- **Access / crane setup** — can a crane reach to raise bents/set beams? Site access for big timbers.
- **Exposure to weather** — exterior timbers (porches/pavilions) need weather-appropriate species/finish and detailing to shed water (end-grain sealing, flashing over beams).

## 5.3 Material list — units, basis, waste

Timbers are priced by **board foot (BF) or per piece**, and they are **expensive** — waste is costly, so cut lists are precise (especially shop-cut). BF = (nominal thickness in × nominal width in × length ft) ÷ 12. Example: an 8×8×16 = (8×8×16)/12 = ~85 BF.

| Material | Unit | Basis | Typical waste | Notes |
|---|---|---|---|---|
| **Structural timbers (posts/beams/braces/rafters)** ⚠️ | BF or EA | per timber schedule, sized ⚠️ | ~5–10% (low — expensive, cut precisely; shop-cut even lower) | Solid sawn, glulam, PSL, or reclaimed. Species/grade/dryness per spec. Order by exact cut list for shop work. |
| **Glulam beams (exposed)** ⚠️ | LF / EA | per schedule, sized ⚠️ | ~5% | Engineered, stable, long spans; appearance-grade for exposed. |
| **Reclaimed timbers** ⚠️ | BF / EA | per schedule + sourcing | higher (assess/re-mill) | Character premium; must be assessed (soundness, metal, insects), often re-milled/cleaned. Variable availability. |
| **Pegs / trunnels (traditional)** | EA | per mortise-and-tenon joint (often 1–2 per joint) | — | Hardwood pegs (oak) for pegged joinery. Count by joints. |
| **Connection hardware — brackets / knife plates / post bases/caps** ⚠️ | EA | per connection, sized ⚠️ | — | Engineered steel — concealed or decorative. Significant cost on bracketed (Type B) frames. Hot-dip galv/SS or finished for exposed. |
| **Through-bolts / timber screws / lag screws** ⚠️ | EA | per connection schedule | — | Structural fasteners (e.g. structural timber screws, threaded rod, bolts). Per engineering. |
| **Post bases (to footing/pier)** ⚠️ | EA | per post | — | Standoff bases (keep end grain off concrete/water), sized to load ⚠️. |
| **SIPs (enclosure, if building)** | SF (panels) | wall + roof area ÷ panel | ~10% | Structural insulated panels wrap a timber-frame enclosure (no stud cavities). Their own major line + spline/connection materials. |
| **Footings / piers (under posts)** ⚠️ | EA / CY | per post, to frost/bearing ⚠️ | — | Concrete, sized to load; below frost (deep here). |
| **Finish (stain/oil/sealer)** | gal | exposed timber surface area | — | Exposed-timber finish — penetrating oil, stain, or sealer; end-grain sealing on exterior. Real material + labor. |
| **End-grain sealer / flashing (exterior)** | tube/LF | exterior timber ends + over-beam flashing | — | Protect exterior timbers from water (end grain wicks); flash tops of exposed exterior beams. |
| **Steel (if hybrid)** ⚠️ | per | engineered steel members/connections | — | Some timber frames hybridize with steel for long spans/connections ⚠️. |

## 5.4 Labor tasks & production rates

**Connection method drives everything.** Hand joinery is the slowest, most skilled; bracketed is much faster; decorative varies. Rates below are broad — timber work is specialized and varies widely by shop/crew skill.

| Task | Unit | Base MH (skilled) | Notes |
|---|---|---|---|
| **Traditional joinery — layout + cut (hand)** ⚠️ | per joint or per BF | very high — a hand-cut mortise-and-tenon joint can be **1–4+ MH each**; a frame has dozens | Skilled timberwright work. Layout (scribe/square rule) + chisel/bore/saw each joint. The dominant labor on Type A. |
| **Traditional joinery — CNC-cut** | per frame | shop machine time + setup (lower on-site labor) | CNC shop cuts joinery fast/precise; on-site is then mostly assembly/raising. Shifts labor to shop/cost. |
| **Bracketed/heavy-timber connection (Type B)** ⚠️ | per connection | ~0.5–2 MH each | Set timber, install brackets/knife plates, bolt/screw. Far less than hand joinery. |
| **Cut/prep timbers (non-joinery cuts)** | per cut / BF | ~0.2–0.6 MH per cut | Squaring, length cuts, chamfers, planing on big timbers (heavy to handle). |
| **Finish timbers (plane/sand/chamfer/seal)** | BF or SF surface | ~0.02–0.06 MH/SF surface | Exposed finish — planing, sanding, easing edges, oil/stain. Real labor on exposed work. |
| **Raise bent / set frame (traditional)** ⚠️ | per bent | several MH per bent + crane | Rig, lift (crane), position, peg/connect, brace. Crew + crane. |
| **Set post / beam (heavy timber)** ⚠️ | EA | ~1–3+ MH each + lift | Heavy — crane/equipment; plumb, connect. |
| **Pergola (structural accent)** | EA (structure) | ~highly variable — small pergola maybe 16–40 MH | Posts + beams + rafters/slats; footings; finish. |
| **Decorative accent (brackets/faux beams)** | EA | ~0.5–3 MH each | Applied/decorative; appearance install. |
| **Footings (dig + pour)** | EA | ~1–4 MH each | To frost depth. |
| **SIPs install (if enclosure)** | SF | ~specialized; per SIP system | Panel setting (crane), splines, sealing — its own scope. |

**Crew & duration:** Timber work needs **skilled labor** (timberwrights for traditional) and usually **a crane** for raising/setting. Traditional frames are often **shop-fabricated over weeks**, then raised in a day or few. Bracketed/heavy-timber porches and pavilions are more like a focused multi-day skilled job. Don't price timber labor at stick-framing rates — it's slower, heavier, more skilled, and finish-sensitive.

## 5.5 Labor modifiers

Combined factor, capped — but note the **base labor is already high** for traditional joinery.

| Condition | Factor / note |
|---|---|
| Bracketed heavy-timber, accessible, simple (Type B) | 1.0 (on its base) |
| Traditional hand joinery (Type A) | base is already very high; complexity (compound joints, braces, decorative) +0.2–0.5 |
| CNC-cut frame (assembly on site) | lower on-site labor (shop carries the cutting cost) |
| Exposed finish (planed/chamfered/stained) | + finish labor as its own line |
| Heavy members / long spans (lifting, crane) | +0.2–0.4 (+ crane/equipment) |
| Difficult access / no crane reach | +0.2–0.4 (hand-raising big timbers is slow/risky) |
| Exterior/weather detailing (porches/pavilions) | + end-grain sealing, flashing, weather species |
| Reclaimed timber (assess, clean, re-mill, surprises) | +0.15–0.3 |

**Separate adders:** ⚠️ engineering/design (timber frames are engineered — and the joinery/connection design itself), crane/rigging (raising), shop fabrication cost (if shop-cut — often a supplier line), footings (frost depth), SIPs enclosure (own scope), finish (stain/seal), permits/inspection ⚠️.

## 5.6 Special equipment

| Equipment | When |
|---|---|
| **Timber framing chisels / slicks / boring machine / framing saws** ⚠️ | Traditional hand joinery — mortising, tenoning, boring peg holes. Specialized tools + skill. |
| **CNC timber machine (shop)** | CNC-cut joinery — shop equipment (usually the supplier's), not field. |
| **Large circular / beam saw / chain mortiser** | Cutting big timbers (standard saws can't get through an 8×8 in one pass). |
| **Crane / boom truck** ⚠️ | Raising bents, setting heavy beams/posts. Nearly always needed — a real day-rate. Site must allow crane access. |
| **Rigging / slings / come-alongs** | Lifting and positioning heavy timbers safely. |
| **Planer / sander (timber)** | Finishing exposed surfaces; power plane for big stock. |
| **Drilling / bolting tools (heavy)** | Through-bolts, timber screws, knife-plate connections. |
| **Staging / scaffold + fall protection** | Working at height on frames/raising; mandatory. |
| **Concrete/excavation tools** | Post footings to frost depth. |
| **Forklift / telehandler** | Moving/staging heavy timbers on site. |

## 5.7 Best-practice notes that change material or labor

1. **⚠️ Timber sizing and connections are engineered — never rule-of-thumb.** Large timbers carry large loads; joinery and hardware connections are designed (and for traditional frames, the joinery itself is engineered). Snow load governs here ⚠️. The AI estimates quantity/cost/labor for a *specified* timber schedule; it must flag any assumed timber size or connection as requiring engineering. This is the structural-boundary rule, and timber loads are large.
2. **Connection method is THE labor driver — pin it down first.** Hand-cut mortise-and-tenon (Type A) is multiples of the labor of bracketed steel connections (Type B). A porch with bracketed connections and a hand-joined timber frame of similar size are wildly different labor and cost. Always establish: hand joinery, CNC joinery, or bracketed hardware. Mis-assuming this throws the estimate more than any material line.
3. **Shop-cut vs. site-cut shifts where the cost lives.** Traditional/CNC frames are usually fabricated at a timber-frame shop (a supplier line — often the bulk of the cost) then delivered and raised. Site-cutting moves that labor (and skill requirement) to your crew. Clarify the delivery model; a shop-cut frame is largely a material/supplier cost + a raising cost, not weeks of your crew's cutting.
4. **Green vs. dry timber — movement is expected and must be detailed for.** Green/rough-sawn timbers (common, cheaper) **check (crack), shrink, and twist as they dry** — this is normal in timber framing, but joinery and connections must accommodate it, and the customer must understand checking is expected (not a defect). KD/FOHC reduces movement (pricier). Affects material choice, cost, and customer expectations.
5. **Exposed = finish is part of the work.** Because timbers show, surface finish (planing, sanding, easing/chamfering edges, stain/oil/seal) is real labor and material — not overhead. Rough-sawn-left-as-is is a look (less labor); planed-and-finished is more. Capture the finish spec.
6. **Exterior timbers need weather detailing** (porches/pavilions/entries — Caza's likely scope). End grain wicks water and rots — seal end grain, flash the tops of exposed exterior beams, use standoff post bases to keep timber ends off concrete/water, and choose weather-appropriate species/finish. Skipping this rots an expensive timber. A real material + labor + detailing item.
7. **⚠️ Post bases and footings — load path to bearing, frost depth.** Posts carry big point loads to footings ⚠️ sized to load, below frost (deep here). Standoff bases protect end grain. Continuous load path verified. Structural.
8. **Crane and access are near-certain costs.** Timbers are heavy; raising bents and setting beams almost always needs a crane (day-rate) and crane-accessible site. If the site can't take a crane, the job gets much harder/slower (and riskier). Confirm access; budget the crane.
9. **SIPs enclosure is a separate major scope.** A timber-frame *building* is typically enclosed with SIPs (no stud cavities to insulate). SIPs are their own significant material + install line (panels, splines, sealing, crane). Don't fold it into the frame estimate — call it out.
10. **Reclaimed timber = assessment + surprises.** Reclaimed/antique timbers carry character and premium cost but must be assessed (soundness, embedded metal that destroys blades, insect damage) and often re-milled/cleaned. Budget assessment, cleanup, and contingency; availability and matching are variable.
11. **Bracing and temporary stability during raising** ⚠️. Frames/bents are unstable until fully assembled and braced; temporary bracing during the raise is required for safety and is real labor. Permanent braces (knee braces) are part of the structural design ⚠️.
12. **Permits, engineering, and lead time.** Timber frames are engineered ⚠️ (stamped), require permits/inspection, and shop-cut frames have **lead time** (weeks to fabricate). Build engineering fee, permit, and the fabrication lead time into the estimate and schedule — the timeline is not stick-framing-fast.

## 5.8 Quick worked example

Covered timber entry / small pavilion porch — bracketed heavy-timber (Type B, the likely Caza scope, illustrative):
- **Structure:** 4 posts (8×8), 2 beams (8×12) ⚠️ sized to load + snow, knee braces, exposed timber porch roof rafters, bracketed steel connections, Douglas fir, planed + stained, on footings to frost depth ⚠️.
- **Timbers:** per schedule by BF ⚠️ — e.g. posts 4 × (8×8×9 ≈ 48 BF) + beams + braces + rafters; order to cut list + ~7%.
- **Connections:** engineered post bases (4) ⚠️, knife plates/brackets at beam-post + braces ⚠️, timber screws/bolts per schedule.
- **Footings:** 4 below frost ⚠️; standoff post bases.
- **Finish:** plane + sand + ease edges + stain/seal exposed surfaces; **end-grain seal + flashing** over exterior beams.
- **Labor:** timber prep/cuts + bracketed connections (~0.5–2 MH each × connections) + setting heavy timbers (crane) + finish (planing/sanding/staining surface area) + 4 footings ≈ **a focused multi-day skilled job, plus a crane** — far more than the BF would suggest if you only counted material, because it's heavy, skilled, exposed-finish, and crane-set. *Not* stick-framing rates.
- **Equipment:** crane/telehandler (set timbers), beam saw, planer/sander, heavy drilling/bolting, staging + fall protection, concrete/excavation (footings).

*If traditional hand-joined (Type A) instead:* add **skilled timberwright joinery labor (1–4+ MH per mortise-and-tenon joint × dozens of joints)** or a **shop-fabrication supplier cost** if CNC/shop-cut, plus the raising — a substantially larger and more specialized job, engineered ⚠️ and lead-time-driven.

---

# APPENDIX — Cross-system framing principles

1. **⚠️ The structural boundary is the most important thing in this manual.** Estimating *quantities and labor* for a specified framing layout is fine. *Sizing structural members* (beams, headers, joists, rafters, posts) or *determining bearing/load paths* is engineering — from span tables, manufacturer charts, plans, or an engineer. The AI must flag any assumed structural member or bearing determination as requiring verification, and must NEVER present a guessed structural size as fact. When unspecified, state the assumption and recommend verification.
2. **Snow load governs in this market** ⚠️ (Tug Hill / Lewis County). Roof framing especially must be sized for heavy snow (and drift) — a member fine elsewhere may be undersized here. Flag snow-load sizing on roof framing.
3. **Frost depth governs footings** in this climate — deck/porch/post footings go deep (more excavation + concrete). Don't price shallow footings here.
4. **Framing is spacing-and-span driven, not area-and-coverage** (unlike roofing). Counts come from length ÷ spacing + extras (corners, openings, doublers, rim); sheathing is the one area-÷-32 item. Always add the "extras" — they're where takeoffs under-count.
5. **One combined difficulty factor, capped (~1.4–1.5×), on framing labor only.** Access, complexity, tie-in, height — pick the governing one, don't stack. Demolition, shoring ⚠️, footings, crane, engineering are separate line items, not multipliers.
6. **Access and remodel tie-in dominate labor** on repair/retrofit (crawlspaces, basements, matching old out-of-true framing). New open framing is fast; working in/around existing is slow. Estimate access realistically.
7. **PT + compatible fasteners** for any framing in contact with concrete/masonry/exterior (sill plates, deck framing). Hot-dip galv/SS hardware with modern PT. A material spec, not optional.
8. **Connections are part of the structure** ⚠️ — hangers, hold-downs, hurricane ties, post caps/bases, anchor bolts, bearing — sized/specified, not assumed. The right member with wrong connections fails at the connection. Include connector material + labor.
9. **Permits and inspections** for structural work ⚠️ — build the fee, the engineering (where needed), and the inspection timeline into the estimate. Part of real cost.
10. **Sanity-check counts and the big structural lines.** Verify stud/joist/rafter counts (length ÷ spacing + extras) and flag the governing structural members. If a beam/header/footing is assumed, the estimate is provisional until sized ⚠️.
11. **Timber framing is its own discipline — connection method drives the labor.** Hand joinery vs. CNC vs. bracketed hardware swings timber labor more than any material line; shop-cut vs. site-cut shifts where the cost lives; exposed timbers carry real finish labor; and raising almost always needs a crane. Price timber work at skilled (not stick-framing) rates, flag the engineering ⚠️, and account for fabrication lead time.

*End of framing manual. Built in the same format as the roofing manual; the ⚠️ STRUCTURAL flags mark where estimating ends and engineering begins — the AI must respect that boundary.*
