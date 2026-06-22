# Caza Contractors — Deck Estimating Manual

**Purpose:** A trade-expert reference for the AI estimator covering decks — the **surface and everything above the frame**: decking boards, railings, stairs, fascia/skirting, and the finish details. The **structural frame** (ledger, beams, posts, joists, footings) is covered in the **Framing Estimating Manual (Section 2 — Floor Framing)** and is cross-referenced here; a complete deck estimate = this manual (surface) + the framing manual (structure).

**Scope split (important):**
- **Framing manual handles:** ledger attachment ⚠️ (life-safety), footings to frost depth ⚠️, posts, beams, joists, joist hangers, the load path. Member sizing is ⚠️ STRUCTURAL.
- **This manual handles:** decking surface, railings/guards (code-critical), stairs/stringers, fascia/rim wrap, skirting/lattice, hardware (hidden fasteners), and finishes.
- A deck job nearly always needs **both**. When estimating a full deck, pull structure from the framing manual and surface/rails/stairs from here.

**Decks are heavily code-driven for life-safety** — guard height, baluster spacing, stair geometry, and the ledger/load path are all code items where "looks fine" isn't the standard. Several ⚠️ flags below mark code/structural points that must be met, not eyeballed.

**How to use this manual (for the AI):**
1. Confirm it's a deck surface/rail/stair scope (and that framing is covered separately if a full build).
2. Use **Required Dimensions** to confirm inputs; estimate conservatively + state assumptions if missing.
3. Build decking from **deck area ÷ board coverage × (1+waste)**; rails from **rail LF + post count**; stairs from **rise/run geometry**.
4. Estimate labor from **Labor Tasks** (MH/unit), apply **Modifiers** (one combined factor, capped).
5. Add **Equipment**; apply **Best-Practice Notes**.

**Units key:** SF = square foot · LF = linear foot · EA = each · MH = man-hours · PT = pressure-treated · OC = on-center · BF = board foot · ⚠️ = code/structural — verify, don't eyeball

---

# 1. DECKING (THE WALKING SURFACE)

## 1.1 System overview & material types

Decking is the boards you walk on, fastened across the joists. The estimate is driven by **deck area (boards by width + spacing), the board material (huge cost range), the fastening method (face-screw vs. hidden clips — labor + hardware swing), the board direction/pattern (waste driver), and the perimeter (picture-frame/fascia detailing).** Decking is a **surface over the frame** — joist spacing (set in framing) must suit the decking (some composites need 12" OC or 16" max; diagonal patterns need closer spacing).

**Material types (the biggest cost/▢labor driver):**
- **Pressure-treated (PT) lumber — economical:** 5/4×6 (nominal, ~1" actual) or 2×6 PT pine/SYP. Cheapest, paintable/stainable, but moves/checks/cups as it dries and needs periodic maintenance (clean/seal). The budget/standard surface. Heavier, wet when bought (let dry before finishing).
- **Cedar / redwood — natural premium wood:** Naturally rot/insect-resistant, lighter, attractive, but soft (dents), pricey, still needs finishing/maintenance. 5/4 or 2× decking.
- **Composite (wood-plastic composite, WPC) — popular low-maintenance:** Wood fibers + plastic (e.g. older Trex). No painting, resists rot/insects, consistent. Heavier, can get hot in sun, can sag if joists too far apart, color/quality varies. Hidden-fastener grooved-edge or face-screw.
- **PVC / capped polymer — premium low-maintenance:** All-plastic or capped (PVC/poly cap over core). Best moisture/stain resistance, lightest of the synthetics, premium cost. Hidden-fastener grooved edge common. (Capped composite = composite core + protective cap shell — the modern mainstream synthetic.)
- **Hardwood (ipe, cumaru, etc.) — high-end:** Dense tropical hardwoods, extremely durable/beautiful, very expensive, hard on tools/fasteners (pre-drill), heavy, specialty. Hidden clips or plug-and-screw. Oil finish.
- **Aluminum / specialty:** Aluminum decking (waterproof under-deck systems, marine) — niche/premium.

**Board sizes/coverage:** 5/4×6 and 2×6 are ~5.5" actual width; with a ~3/16"–1/4" gap, effective coverage ~5.7". Composite/PVC often 5.5" wide (some 3.5" or wider). Lengths 12/16/20 ft (compositesalso 12/16/20). **Order lengths to minimize butt joints** (butt joints need joist backing/blocking and look/perform worse) — ideally board length ≥ deck dimension to run full-length.

## 1.2 Required dimensions for an accurate quote

- **★ Deck area (SF)** — board quantity. Length × width; add for stairs/landings.
- **★ Board run direction & length** — affects waste and butt joints; full-length boards if deck dimension allows.
- **★ Decking material** — the dominant cost driver (PT vs. composite vs. PVC vs. hardwood).
- **★ Fastening method** — face-screw vs. hidden clips (grooved-edge) — hardware + labor.
- **★ Pattern** — straight, diagonal (more waste + closer joist spacing ⚠️), picture-frame border, herringbone, inlays — pattern drives waste and labor.
- **★ Joist spacing (from framing)** ⚠️ — must suit decking (composite/PVC often 12" OC, 16" max; diagonal needs 12"). Coordinate with framing manual.
- **★ Perimeter LF** — picture-frame border board, fascia/rim wrap.
- **Deck height / stories** — affects fascia, skirting, access (and structure).
- **Stairs/landings** — separate (Section 3) but count for decking material.
- **Multi-level / sections** — each level's area + transitions.
- **Existing deck (resurface)** — re-deck over existing frame (inspect frame ⚠️ — see framing) vs. full new.

## 1.3 Material list — units, coverage rates, waste

Decking board count: **deck area ÷ (board width − gap in ft) ÷ board length = boards**, or simpler **lineal feet of board = deck area ÷ effective board width (ft); ÷ board length = piece count.** Effective width ~5.7" (0.475 ft) for 5.5" boards with gap.

| Material | Unit | Coverage / basis | Typical waste | Notes |
|---|---|---|---|---|
| **Decking boards (any material)** | LF or pieces | lineal ft = area ÷ ~0.475 ft (5.5" board); ÷ length = pieces | ~8% straight → 15%+ diagonal/picture-frame/patterns | Composite/PVC/hardwood far costlier than PT. Order lengths to avoid butt joints. |
| **Picture-frame / border board** | LF | deck perimeter (+ any inlay borders) | ~10% | Border course around the deck edge; needs blocking/sleepers under joints ⚠️. |
| **Hidden fastener clips (grooved-edge)** | EA / box | ~per board-to-joist intersection (varies by system; roughly area-based) | — | For grooved-edge composite/PVC/hardwood. Each system has a coverage (clips per SF or per LF of board). Includes starter clips at edges. |
| **Face screws (decking, coated/SS)** | EA / box | ~2 per board per joist; ~350 screws/100 SF (varies w/ joist spacing) | — | Coated deck screws or SS (for hardwood/cedar/contact w/ treated). Color-matched heads for composite face-screw. |
| **Plugs (hardwood plug-and-screw)** | EA | per screw (hidden plug systems) | — | For plug-finished hardwood. |
| **Blocking / sleepers (under butt joints & borders)** | LF / EA | under every butt joint + under picture-frame border | ~10% | Extra framing the surface needs (technically framing, but driven by the decking/pattern). Doubled/blocked joists under borders & butt joints ⚠️. |
| **Joist tape / flashing tape (on joist tops)** | LF (roll) | top of every joist + beam | +5% | Self-adhesive tape over joist tops — protects framing from water trapped under decking, big longevity item. Cover all joists + beam + ledger. |
| **Fasteners — structural (to frame)** | box | as needed | — | (Frame fastening in framing manual.) |
| **Finish (PT/wood: stain/sealer)** | gal | deck area × coats | — | PT/cedar/hardwood need finish (stain/sealer/oil). Composite/PVC: none. Hardwood: penetrating oil (and re-oil). |
| **Cleaner/brightener (wood prep)** | as needed | wood prep before finish | — | |

## 1.4 Labor tasks & production rates

| Task | Unit | Base MH/SF or unit (2-person) | Notes |
|---|---|---|---|
| **Joist tape application** | LF | ~0.01–0.02 MH/LF | Quick, high-value; tape all joist/beam/ledger tops. |
| **Decking install — face-screw (PT/wood)** | SF | ~0.05–0.10 MH/SF | Cut, gap, screw. Faster than hidden clips on simple decks. |
| **Decking install — hidden clip (composite/PVC)** | SF | ~0.07–0.13 MH/SF | Clip system slower per board but clean look; grooved-edge. |
| **Decking install — hardwood (pre-drill/plug)** | SF | ~0.12–0.20 MH/SF | Pre-drilling/plugging dense hardwood is slow. |
| **Picture-frame border + blocking** | LF | ~0.10–0.20 MH/LF | Border board + mitered corners + blocking/sleepers under. |
| **Diagonal / pattern install** | SF | +20–40% over straight | Angle cuts, more waste, layout. |
| **Butt-joint blocking** | EA | ~0.1–0.2 MH/EA | Block under each butt joint. |
| **Fascia / rim board wrap** | LF | ~0.06–0.12 MH/LF | (See Section 4.) |
| **Wood finishing (stain/seal)** | SF | ~0.01–0.03 MH/SF per coat | PT/wood; multiple coats. (Let PT dry first — scheduling.) |
| **Resurface: remove old decking** | SF | ~0.03–0.06 MH/SF | Demo old boards (frame stays — inspect ⚠️). |

**Crew & duration:** 2–3 person. Simple rectangular PT deck surfaces go fast; composite/PVC hidden-fastener, picture-frame borders, diagonal/patterns, and hardwood are slower. Surface install is separate from (and after) the framing. Wood finishing is a later phase (PT must dry weeks before sealing).

## 1.5 Labor modifiers

Combined factor, capped ~1.4×, on decking install labor.

| Condition | Factor |
|---|---|
| Simple rectangle, straight boards, face-screw | 1.0 |
| Hidden-fastener system | +0.1–0.2 |
| Diagonal / herringbone / pattern | +0.2–0.4 |
| Picture-frame border / inlays / multiple colors | +0.15–0.3 |
| Hardwood (pre-drill/plug) | +0.2–0.3 |
| Multi-level / curved / cut-up | +0.15–0.3 |
| Elevated / difficult access | +0.1–0.2 |

**Separate adders:** joist tape, blocking under borders/butt joints, fascia wrap, stairs (Section 3), railings (Section 2), wood finishing, resurface demo, dumpster.

## 1.6 Special equipment

| Equipment | When |
|---|---|
| **Cordless drills/impact drivers (multiple)** | Screwing decking/clips — the core tool; several for a crew. |
| **Hidden-fastener install tools** | Some clip systems have proprietary tools/collated screws. |
| **Miter saw / circular saw / track saw** | Cutting boards, miters (picture-frame), clean cross-cuts. |
| **Jig saw / multi-tool** | Notching around posts/penetrations. |
| **Decking spacer tools / gap gauges** | Consistent board gaps. |
| **Pre-drill/plug jigs (hardwood)** | Hardwood plug systems. |
| **Chalk line / square / straightedge** | Layout, keeping boards straight over a run. |
| **Finishing equipment (wood)** | Stain/seal application (brush/roller/sprayer/pad). |
| **Dumpster** | Resurface demo. |

## 1.7 Best-practice notes that change material or labor

1. **Joist tape on all joist/beam/ledger tops — high-value longevity step.** Self-adhesive flashing tape over the top of every joist (and beam, and especially the ledger) keeps water from sitting on the framing under the decking — the #1 cause of frame rot on decks. Cheap material, fast labor, big lifespan gain. Standard on quality decks now; include it.
2. **⚠️ Joist spacing must suit the decking — coordinate with framing.** Composite/PVC typically needs joists at 12" OC (or 16" max) for straight, and 12" for diagonal patterns; sagging happens if too far apart. PT decking is more forgiving (16"). If the deck is composite or has a diagonal pattern, the framing (framing manual) must be spaced accordingly. A mismatch = a bouncy/saggy deck. Confirm spacing supports the chosen decking and pattern.
3. **Order board lengths to avoid butt joints — and block under any joint.** Butt joints look worse, can cup/separate, and need doubled joists/blocking beneath (two boards bear on a joist at a joint). Running full-length boards (board ≥ deck dimension) avoids them. Where unavoidable, block under each joint ⚠️ and stagger them. Affects both material (length) and framing (blocking).
4. **Gap the boards (drainage + movement).** Decking needs gaps (~1/8"–1/4") for drainage and expansion. Composite/PVC expand/contract along length with temperature — follow the manufacturer's end-gap and side-gap spacing (and acclimation), or you get buckling or open gaps. PT shrinks as it dries (gap less when wet — it'll open up). Material- and season-specific gapping.
5. **Hidden vs. face fasteners — clean look vs. speed/cost.** Hidden clips (grooved-edge) give a fastener-free surface (premium look) but cost more (clips) and install slower; face-screwing (coated/color-matched screws) is faster/cheaper but screws show. Hardwood often plug-and-screw. Choice affects hardware cost and labor. Match fastener material to decking (SS for hardwood/cedar).
6. **Picture-frame border needs blocking and adds labor.** A border board around the perimeter (picture-frame) is a premium detail that requires blocking/sleepers under the border and mitered corners — real added framing + labor. Looks great; price it.
7. **PT decking: let it dry before finishing; expect movement.** Pressure-treated is wet when delivered — it must dry (weeks) before staining/sealing, and it will check/cup/shrink somewhat as it dries. Schedule finishing later; set expectations on movement. Gap accordingly when installing wet.
8. **Composite/PVC: heat, expansion, and joist spacing.** Synthetics get hot in direct sun (dark colors especially), expand/contract (mind end gaps), and sag if unsupported — follow span/spacing and gapping specs. Capped products resist stains/fading best. No finishing needed (maintenance-light selling point).
9. **Fastener and hardware compatibility with treated lumber.** Modern PT chemistry corrodes regular steel — use coated deck screws, hot-dip galv, or stainless (SS for cedar/hardwood and best longevity). Clips/screws rated for exterior/treated contact. A material spec.
10. **Hardwood = pre-drill, oil, tool wear.** Dense tropical hardwoods must be pre-drilled (they split and dull/burn blades), are heavy, and are oil-finished (and re-oiled over time). Budget slower labor, carbide/extra blades, pre-drill/plug time, and oil. Specialty.
11. **Resurface (re-deck): inspect the frame first** ⚠️. Replacing just the boards over an existing frame requires verifying the frame, ledger ⚠️, and footings are sound (see framing manual) — re-decking over a rotted/undersized/poorly-attached frame is unsafe. Inspect before quoting boards-only.
12. **Slope/drainage and under-deck.** A slight slope (~1/8"/ft) or proper gapping sheds water; under-deck drainage systems (for dry space below elevated decks) are a premium add (own scope). Note if dry-below is wanted.

## 1.8 Quick worked example

Composite deck surface, 12'×16' (192 SF), straight boards, hidden clips, picture-frame border (illustrative — frame per framing manual):
- **Decking:** 192 SF ÷ ~0.475 ft effective width ≈ ~404 LF of board; ÷ 16-ft boards ≈ **~26 boards** + ~10% (border/pattern) ≈ ~28.
- **Picture-frame border:** ~56 LF perimeter border board + blocking under ⚠️ + mitered corners.
- **Hidden clips:** per system coverage for 192 SF + starter clips.
- **Joist tape:** all joist tops + beam + ledger (~200+ LF).
- **Fascia wrap:** perimeter (Section 4).
- **Labor:** 192 SF × ~0.10 MH/SF (composite hidden-clip) × ~1.2 (border) ≈ ~23 MH decking + border (~56 LF × 0.15 ≈ 8) + joist tape (~3) + blocking ≈ **~35–40 MH surface** (decking only; framing, rails, stairs separate).
- **Equipment:** impact drivers, clip tools, miter/track saw, gap gauges. No finishing (composite).
- *PT version:* face-screw (faster install), but add wood finishing later (stain/seal × coats) and expect drying/movement.

---

# 2. RAILINGS / GUARDS

## 2.1 System overview & material types

Railings (code term: **guards**) keep people from falling off the deck — so they are **life-safety and heavily code-driven** ⚠️. The estimate is driven by **rail LF, post count/spacing, the baluster/infill type and count (a real count), the material (cost range), and code compliance (height, baluster gap, load).** Posts and their attachment to the frame are structural ⚠️ (a guard must resist a real lateral load).

**Code essentials (⚠️ — meet, don't eyeball):**
- **Guard height:** typically ≥36" (residential) — verify local code (some 42"). Measured from deck surface to top of rail.
- **Baluster/infill spacing:** a 4" sphere must NOT pass through (balusters ≤4" clear gap; ~3.5" spacing typical). Prevents children falling through.
- **Required at:** decks generally >30" above grade (verify trigger height locally).
- **Load:** guard must resist a 200 lb concentrated load + 50 plf — so **post attachment to the frame is structural** ⚠️ (blocking, hardware, through-bolts — not just a screwed-on post).
- **Stair guards/handrails:** stairs have their own rail/handrail rules (graspable handrail, height) — Section 3.

**Material types:**
- **PT wood rail (economical):** PT posts, rails, and wood balusters (2×2) or square balusters. Cheapest; needs finishing; classic. Build on site.
- **Composite / PVC rail systems:** Manufacturer kits matching the decking (posts/sleeves, rails, balusters/infill). Low-maintenance, premium, system-specific parts.
- **Metal balusters w/ wood or composite rail:** Aluminum/steel balusters (round/square) in a wood/composite top & bottom rail — popular upgrade look.
- **Aluminum rail systems:** Full aluminum kits (posts, rails, pickets) — durable, low-maintenance, clean.
- **Cable rail (stainless cable infill):** Horizontal SS cables in a sturdy frame — modern, view-friendly, premium; **requires strong, properly-spaced posts and tensioning** ⚠️ (cable tension is significant; posts/framing must resist it). Cable spacing also must meet the 4" rule.
- **Glass panel rail:** Tempered glass panels — premium, view; specific hardware.
- **Cap rail / drink rail:** A flat top cap (often a deck board) over the rail — common detail, adds material/labor.

## 2.2 Required dimensions for an accurate quote

- **★ Total rail/guard LF** — rails, top/bottom rail material, infill length.
- **★ Post count + spacing** ⚠️ — posts typically ≤6 ft OC (closer for cable/glass); at corners, stairs, ends. Structural attachment ⚠️.
- **★ Number of corners, ends, gate openings** — extra posts + detailing; gates (EA).
- **★ Infill type + baluster count** ⚠️ — balusters at ≤4" gap → count = rail length ÷ spacing; or cable runs; or glass panels.
- **★ Material/system** — PT, composite/PVC kit, metal baluster, aluminum, cable, glass.
- **★ Guard height required** ⚠️ — 36" vs. 42" per code.
- **★ Cap rail / drink rail?** — extra top board.
- **Stairs rail/handrail LF** ⚠️ — (coordinate with Section 3 — different rules).
- **Deck height** — whether guards are even required (>30" trigger, verify) and post length.
- **Lighting integration** — post-cap/rail/stair lights (low-voltage) if in scope.

## 2.3 Material list — units, coverage rates, waste

Baluster count rule: **balusters = (rail LF × 12) ÷ (baluster spacing OC) ** ⚠️ where spacing keeps <4" clear gap (e.g. 2×2 balusters at ~4.5–5" OC give <4" gap; check the actual gap).

| Material | Unit | Coverage / basis | Typical waste | Notes |
|---|---|---|---|---|
| **Rail posts (PT 4×4 / sleeves / metal)** ⚠️ | EA | per spacing (≤6' OC) + corners/ends/stairs | — | Structural attachment to frame ⚠️ (blocking + hardware). Composite = post + sleeve + cap. |
| **Post-to-frame hardware** ⚠️ | EA | per post | — | Through-bolts / structural post-mount hardware + blocking — guard must resist load ⚠️. NOT just lag/screw a post to the rim. |
| **Top & bottom rail** | LF | rail LF (×2 for top+bottom) | ~10% | Wood, composite, or system rail. |
| **Balusters / pickets** ⚠️ | EA | (rail LF×12) ÷ spacing OC; <4" gap ⚠️ | ~5% | Wood 2×2, square aluminum/steel, etc. The count. |
| **Cable + tensioners (cable rail)** ⚠️ | LF + EA | horizontal runs × rail LF; tensioner per run end | — | SS cable; tension fittings; <4" vertical spacing ⚠️; strong posts ⚠️. |
| **Glass panels + hardware** | EA | per opening | — | Tempered panels + clips/standoffs. |
| **Cap rail / drink rail** | LF | rail LF | ~10% | Flat top board/cap. |
| **Post caps** | EA | per post | — | Decorative/protective caps (or light-up caps). |
| **Gate** | EA | per opening | — | Deck/stair gate + hinges/latch. |
| **Fasteners (SS/coated)** | box | by assembly | — | Exterior/treated-compatible; SS for cedar/longevity. |
| **Finish (wood rail: stain/seal)** | gal | rail surface | — | If wood. |
| **Rail/post lighting (low-voltage)** | EA | per fixture | — | Optional; transformer + wiring (own/electrical sub). |

## 2.4 Labor tasks & production rates

| Task | Unit | Base MH/LF or unit | Notes |
|---|---|---|---|
| **Set + secure rail posts** ⚠️ | EA | ~0.5–1.5 MH/EA | Structural attachment (blocking + bolts) — the critical, careful part. |
| **Install rails (top/bottom)** | LF | ~0.06–0.12 MH/LF | |
| **Install balusters/pickets** ⚠️ | LF | ~0.08–0.15 MH/LF | Cut/space/fasten to <4" gap; the count drives it. |
| **Cable rail (run + tension)** ⚠️ | LF | ~0.15–0.30 MH/LF | Drilling posts, running, tensioning each cable — slow/precise. |
| **Glass panel rail** | EA | ~0.5–1.0 MH/EA | |
| **Cap rail / drink rail** | LF | ~0.05–0.10 MH/LF | |
| **Gate** | EA | ~1–2 MH/EA | Hang, latch, self-close if required. |
| **Composite/aluminum kit rail** | LF | ~0.10–0.18 MH/LF | System assembly per instructions. |
| **Rail finishing (wood)** | LF | ~0.02–0.04 MH/LF per coat | |
| **Lighting (if in scope)** | EA | ~0.3–0.6 MH/EA | (Electrical may be sub.) |

**Crew & duration:** 2-person. Railing is detail labor — post setting (structural ⚠️) and baluster install/counting dominate. Cable and glass are slower/premium. A long railing with many balusters is a real chunk of a deck job.

## 2.5 Labor modifiers

Combined factor capped ~1.4×.

| Condition | Factor |
|---|---|
| Straight runs, standard wood/baluster, few corners | 1.0 |
| Many corners / short runs / stairs | +0.15–0.3 |
| Cable rail (tensioning) | +0.2–0.4 |
| Glass panels | +0.15–0.3 |
| Composite/aluminum kit (system fiddliness) | +0.1–0.2 |
| Curved railing | +0.3–0.5 |
| Elevated / difficult access | +0.1–0.2 |

**Separate adders:** gates, cap rail, lighting, wood finishing, stair railing/handrail (Section 3).

## 2.6 Special equipment

| Equipment | When |
|---|---|
| **Drills/impact drivers + bolting tools** | Posts (structural bolts), rails, balusters. |
| **Miter / circular saw** | Cutting rails, balusters, caps. |
| **Cable rail tools (cable cutter, swaging/tensioning, drill jig)** ⚠️ | Cable systems — drilling aligned post holes, cutting/tensioning cable. |
| **Post level / spacing jigs / baluster spacing jig** | Plumb posts, consistent baluster gaps (and code spacing). |
| **Glass-handling (suction, careful)** | Glass panels. |
| **Finishing equipment (wood)** | Stain/seal rail. |
| **Ladders/staging (elevated)** | High decks. |

## 2.7 Best-practice notes that change material or labor

1. **⚠️ Guards are life-safety — meet code, don't eyeball.** Guard height (≥36", verify 42" locally), baluster spacing (<4" sphere rule), required where deck >30" above grade (verify trigger), and load resistance (200 lb point load) are CODE. A non-compliant guard fails inspection and endangers people. These define the materials (baluster count/spacing) and the post attachment. Never compromise to save labor/material.
2. **⚠️ Post-to-frame attachment is structural — blocking + hardware, not a screwed-on post.** A guard must resist a significant lateral load; posts notched-and-lagged to the rim alone fail. Use blocking between joists + structural post-mount hardware/through-bolts per code (e.g. hold-down style tension ties). This is the #1 railing safety detail — the rail is only as strong as its post attachment. Real hardware + careful labor.
3. **Baluster spacing and count is a code-driven real line.** Count = rail LF ÷ spacing, with spacing set so the gap is <4" (account for baluster thickness). Get the spacing right (gap, not center-to-center, must be <4") and count accurately — it's a meaningful material + labor line on a long railing.
4. **Cable rail: strong posts + tensioning + tight spacing** ⚠️. Cable tension is substantial and pulls posts inward — posts (and the frame) must resist it (closer spacing, sturdy/reinforced posts, often metal). Vertical cable spacing must meet the <4" rule (more cables = more runs/tension/labor). Cable is premium material + slow tensioning labor. Don't under-build the posts.
5. **Match the system's parts (composite/aluminum/cable/glass).** Manufactured rail systems use specific posts/sleeves/rails/brackets/balusters — order the matching kit parts, follow the assembly. Mixing or improvising voids the system. Affects material (kit) and labor (system steps).
6. **Cap rail / drink rail is a common add.** A flat top cap (often a deck board) over the rail gives a finished look and a place to set a drink — extra material + labor; nice upsell.
7. **Gates need self-closing/latching where required** (pool/safety codes) and solid post support. A gate is its own EA with hardware.
8. **Fastener compatibility + finish.** SS/coated fasteners (SS for cedar/hardwood/longevity); wood rails need finishing (stain/seal) like decking. Composite/metal: none.
9. **Stair railing/handrail is different** ⚠️ — stairs need a graspable handrail at the right height plus guards, with their own geometry (Section 3). Don't price stair rail as flat deck rail.
10. **Lighting integration** (post-cap, rail, riser lights) is a premium add — low-voltage system + transformer; often an electrical sub or coordinated wiring. Note if in scope.
11. **Plumb posts + consistent spacing = the look.** Railing workmanship shows — plumb posts, even baluster gaps (use a spacing jig). Slightly more setup, much better result (and code spacing).
12. **Curved railing is specialty.** Curved/radius railings require bent/segmented rails and radial baluster layout — much slower, specialty. Price accordingly if present.

## 2.8 Quick worked example

PT deck railing, ~56 LF perimeter (12'×16' deck, 3 sides railed ~40 LF, stairs separate), wood balusters (illustrative):
- **Posts:** ~40 LF ÷ 6' ≈ 7 + corners/ends ≈ **~9 posts** (4×4 PT) — structural attachment ⚠️ (blocking + bolts).
- **Rails:** 40 LF × 2 (top+bottom) = 80 LF; **cap rail** 40 LF (optional).
- **Balusters:** (40 × 12) ÷ ~4.5" OC ≈ **~107 balusters** (2×2 PT) at <4" gap ⚠️.
- **Hardware:** structural post mounts ×9 ⚠️; SS/coated screws.
- **Finish:** stain/seal (with deck).
- **Labor:** 9 posts × ~1 MH (structural set) ≈ 9 + rails (80 LF × 0.09 ≈ 7) + balusters (40 LF × 0.12 ≈ 5) + cap (40 × 0.07 ≈ 3) ≈ **~24 MH** + finishing later.
- **Equipment:** drills/bolting, miter saw, post level + baluster spacing jig.
- *Cable or composite-kit version:* higher material (kit/cable) + more labor (tensioning/system) — a premium swing.

---

# 3. STAIRS & STEPS

## 3.1 System overview

Deck stairs carry people between levels/grade — **code-driven geometry** ⚠️ (consistent rise/run, within limits) and structural (stringers carry load to a footing/landing ⚠️). The estimate is driven by **the number of steps (rise), the stair width, the stringer count, the tread/riser material, the stair railing/handrail ⚠️ (code), and the bottom landing/footing ⚠️.**

**Code essentials (⚠️):**
- **Rise/run:** consistent risers (within ~3/8" of each other) and treads; typical max riser ~7.75", min tread depth ~10" — verify local code. Uniformity is strictly required (uneven steps = trip hazard + fail).
- **Stair width:** typically ≥36" clear.
- **Handrail:** required (usually ≥4 risers) — graspable, ~34–38" above nosings, continuous, with proper ends. Plus guards on open sides (same <4" / height rules, sloped).
- **Stringers:** spaced to carry load (often ≤16"–18" OC depending on tread material) ⚠️; attached to the deck ⚠️ and bearing on a footing/landing pad ⚠️ at the bottom.
- **Landing:** a landing/pad at the bottom (and at turns) ⚠️.

**Configurations:** straight run (most common), with landings, L/U-shaped (turns + landings), open vs. closed risers (open common on decks; closed needs riser boards).

## 3.2 Required dimensions for an accurate quote

- **★ Total rise (deck height to grade/landing)** ⚠️ — determines number of steps (rise ÷ ~7" ≈ # risers).
- **★ Stair width** — ≥36"; drives tread length + stringer count.
- **★ Number of stringers** ⚠️ — by width + tread material (composite needs closer spacing, ~12"; PT ~16"). Structural.
- **★ Tread/riser material** — match decking (PT, composite, etc.); open or closed risers.
- **★ Stair railing/handrail LF** ⚠️ — both sides? graspable handrail + guards.
- **★ Landings/turns** ⚠️ — landing framing + footing/pad.
- **★ Bottom landing/footing** ⚠️ — pad/footing the stairs bear on (frost? for a structural landing).
- **Number of stair runs** — multiple sets (multi-level).

## 3.3 Material list — units, basis, waste

Step count: **risers = total rise ÷ ~7" (target riser); treads = risers − 1.** Stringer count by width/tread material ⚠️.

| Material | Unit | Basis | Waste | Notes |
|---|---|---|---|---|
| **Stringers (2×12 PT or engineered)** ⚠️ | EA | per stair width + tread material spacing ⚠️ | ~10% | Cut or pre-cut; spacing ≤~16" (PT) / ~12" (composite). Structural — bearing top & bottom ⚠️. |
| **Treads (decking material)** | LF / pieces | (# treads) × width × (boards per tread, usually 2) | ~10% | Match decking; 2 boards per tread typical (5/4 or 2×). |
| **Risers (if closed)** | LF / pieces | (# risers) × width | ~10% | Riser boards for closed risers; open risers omit (check max opening <4" ⚠️). |
| **Stair railing posts + rail + balusters/handrail** ⚠️ | EA/LF | per stair rail LF + handrail | — | Guards (sloped, <4") + graspable handrail ⚠️; posts at top/bottom. |
| **Stringer-to-deck hardware** ⚠️ | EA | per stringer | — | Structural hangers/connectors at top ⚠️. |
| **Bottom landing/footing/pad** ⚠️ | EA / SF | per stair base | — | Concrete pad/footing or paver landing the stringers bear on ⚠️. |
| **Fasteners (SS/coated)** | box | by assembly | — | |
| **Finish (wood)** | gal | tread/riser/stringer area | — | If wood. |

## 3.4 Labor tasks & production rates

| Task | Unit | Base MH | Notes |
|---|---|---|---|
| **Lay out + cut stringers** ⚠️ | EA stair run | ~2–4 MH/run (layout) + per stringer | Precise rise/run layout ⚠️ — the skilled part; uniformity critical. |
| **Set stringers (structural)** ⚠️ | EA | ~0.5–1 MH/EA | Attach top ⚠️, bear bottom ⚠️. |
| **Install treads** | EA tread | ~0.2–0.4 MH/EA | Cut, fasten (2 boards/tread). |
| **Install risers (closed)** | EA | ~0.15–0.3 MH/EA | |
| **Stair railing + handrail** ⚠️ | LF | ~0.10–0.20 MH/LF | Sloped guards + graspable handrail ⚠️. |
| **Bottom landing/footing/pad** ⚠️ | EA | ~2–6 MH/EA | Dig/pour pad or set pavers. |
| **Finishing (wood)** | per | with deck | |

**Crew & duration:** 2-person. Stairs are disproportionately labor-heavy for their size — layout (⚠️ uniform rise/run), stringer cutting/setting, treads, and code-compliant railing/handrail. A simple short flight is a focused half-to-full day; long/turning stairs with landings much more.

## 3.5 Labor modifiers

Combined factor capped ~1.4×.

| Condition | Factor |
|---|---|
| Straight short flight, open risers, simple | 1.0 |
| Tall flight (many steps) | +0.1–0.2 |
| Turns / landings (L/U) | +0.2–0.4 |
| Closed risers | +0.1 |
| Composite/clad stringers + matching | +0.15–0.3 |
| Difficult terrain at base (slope, footing) | +0.1–0.2 |

**Separate adders:** bottom footing/pad/landing ⚠️, stair railing/handrail, multiple runs, finishing.

## 3.6 Special equipment

| Equipment | When |
|---|---|
| **Framing/stair square + layout tools** ⚠️ | Stringer layout (uniform rise/run) — the precision tool. |
| **Circular saw + jig saw** | Cutting stringers (notch each step). |
| **Drills/impact drivers** | Treads, risers, hardware. |
| **Level / story pole** | Consistent rise, level treads. |
| **Concrete/excavation tools** | Bottom footing/pad. |
| **Miter saw** | Treads/risers/rail. |

## 3.7 Best-practice notes that change material or labor

1. **⚠️ Uniform rise/run is code and safety — the layout is the job.** Every riser within ~3/8" of the others; treads consistent; within max riser / min tread limits (verify local). Uneven steps are a trip hazard and a failed inspection. Precise stringer layout is the skilled, careful part — don't rush it. Defines the step count and tread/riser sizing.
2. **⚠️ Stringers are structural — spacing, attachment, and bearing.** Stringer spacing by width and tread material (composite needs closer, ~12"; PT ~16") ⚠️; attached structurally at the top (hangers/connectors) ⚠️; bearing on a footing/pad at the bottom ⚠️. Under-spaced/poorly-attached stringers fail. Coordinate with load.
3. **⚠️ Stair guards + graspable handrail (code).** Open sides need guards (sloped, <4" sphere, height) AND a graspable handrail (usually ≥4 risers), at code height above nosings, continuous, returned ends. Different from flat deck rail. A real, code-defined material + labor line.
4. **⚠️ Bottom landing/footing — don't land stairs on dirt.** Stairs need a solid bearing at the base — a concrete pad/footing or paver landing ⚠️ (sized; frost considerations for a structural landing here). Stairs settling/heaving off bare ground is a failure + trip hazard.
5. **Open vs. closed risers.** Open risers (common on decks) omit riser boards but the opening must be <4" ⚠️ (4" sphere rule applies to riser gaps too on stairs where children present — verify). Closed risers add riser-board material + labor.
6. **Treads: 2 boards typical, mind nosing/overhang.** Treads usually 2 deck boards wide; consistent depth and a slight nosing/overhang per code. Match decking material.
7. **Stairs are labor-dense — price them as their own scope.** A short flight is a disproportionate amount of layout/cutting/railing labor for its footprint. Don't fold stairs into a flat per-SF deck rate; estimate them as a unit (per run + per step + railing + landing).
8. **Match tread material spacing to stringer spacing** ⚠️ (composite treads sag if stringers too far apart). Same coordination as decking-to-joist.
9. **Finish (wood) and fastener compatibility** — SS/coated; finish wood treads/risers/stringers with the deck.
10. **Lighting (riser/step lights)** — premium safety add; low-voltage.
11. **Turns/landings multiply work** ⚠️ — each landing is a small framed platform (framing) + footing ⚠️ + railing; L/U stairs are much more than a straight run.
12. **Code-trigger and verification** — verify local stair code (rise/run limits, handrail trigger, width) — it varies, and inspectors check stairs closely. When unspecified, state assumptions and flag for verification ⚠️.

## 3.8 Quick worked example

Straight deck stair, ~3 ft total rise, 36" wide, PT, open risers (illustrative):
- **Steps:** 36" rise ÷ ~7" ≈ **5 risers → 4 treads** (uniform ⚠️).
- **Stringers:** 36" width, PT treads → ~16" OC → **3 stringers** (2×12 PT) ⚠️, attached top ⚠️, bearing on pad ⚠️.
- **Treads:** 4 treads × 36" × 2 boards = ~24 LF tread material.
- **Stair railing + handrail:** both sides? ~ (stair length ~5 LF × sides) guards + graspable handrail ⚠️.
- **Bottom landing:** concrete pad/pavers ⚠️.
- **Labor:** layout + cut stringers (~3 MH) + set (~2) + treads (4 × 0.3 ≈ 1.5) + railing/handrail (~3–5) + bottom pad (~3) ≈ **~13–16 MH** for a short flight — disproportionate to size, as expected.
- **Equipment:** stair square, circular/jig saw, level, concrete tools (pad).

---

# 4. FASCIA, SKIRTING & DECK FINISH DETAILS

## 4.1 Overview

The finish details that complete a deck: **fascia** (the band board wrapping the exposed rim/frame edge), **skirting/lattice** (enclosing the space below an elevated deck), and miscellaneous finish (post wraps, trim, transitions). These are surface/appearance items over the frame — modest individually but they complete the look and add up. Driven by **perimeter LF (fascia), skirted area (skirting), and the material (match decking).**

## 4.2 Required dimensions

- **★ Deck perimeter LF** — fascia/rim wrap.
- **★ Fascia height** (rim board depth + a bit) — fascia board width.
- **★ Skirted perimeter LF + height to grade** — skirting/lattice area (for elevated decks enclosing below).
- **★ Material** — match decking (composite fascia, PT, etc.).
- **Post count** — post wraps (if wrapping structural posts for looks).
- **Access openings in skirting** — for under-deck storage/access.

## 4.3 Material list — units, basis, waste

| Material | Unit | Basis | Waste | Notes |
|---|---|---|---|---|
| **Fascia board (match decking)** | LF | deck perimeter | ~10–15% (miters/corners) | Composite/PVC fascia or PT; wider stock to cover rim. |
| **Skirting / lattice** | SF / panels | skirted perimeter × height | ~10% | Lattice (wood/vinyl), board skirting, or composite — encloses below. |
| **Skirting frame (furring/cleats)** | LF | per skirting perimeter | ~10% | Framing to attach skirting/lattice. |
| **Post wraps / sleeves** | EA | per wrapped post | — | Composite/PVC sleeves over structural posts for looks. |
| **Access door/panel (skirting)** | EA | per access opening | — | Removable/hinged panel for under-deck access. |
| **Fasteners (SS/coated)** | box | by assembly | — | |
| **Trim / transition** | LF | as needed | ~10% | Edge/transition trim. |

## 4.4 Labor tasks & production rates

| Task | Unit | Base MH/LF or unit | Notes |
|---|---|---|---|
| **Fascia install** | LF | ~0.06–0.12 MH/LF | Cut, miter corners, fasten over rim. |
| **Skirting/lattice (incl. frame)** | SF / LF | ~0.05–0.10 MH/SF | Frame + panel; access panel adds. |
| **Post wraps** | EA | ~0.5–1 MH/EA | Sleeve/wrap a post. |
| **Access panel** | EA | ~0.5–1 MH/EA | |
| **Trim/transitions** | LF | ~0.04–0.08 MH/LF | |

**Crew & duration:** 2-person; quick relative to decking/rails but real. Skirting a tall elevated deck (large area) is more.

## 4.5 Labor modifiers

| Condition | Factor |
|---|---|
| Simple fascia, low deck | 1.0 |
| Tall/large skirting area | +0.1–0.2 |
| Many corners / mitered fascia | +0.1 |
| Elevated/access | +0.1 |

## 4.6 Special equipment

Miter/circular saw (mitered fascia), drills/impact drivers, level/chalk line, jig saw (access openings/lattice).

## 4.7 Best-practice notes

1. **Fascia covers the rim but don't trap water — vent/gap as needed.** Fascia hides the rim joist for a finished look; ensure it doesn't trap moisture against the framing (gap/flashing behind, especially with joist tape on top). Match decking material/color.
2. **Skirting needs ventilation.** Enclosing below an elevated deck (lattice/board) should allow airflow (lattice is inherently vented; solid skirting needs vents) to prevent moisture buildup and rot below. Affects material choice/detailing.
3. **Access panel in skirting** for the space below (storage/utilities) — plan a removable/hinged section.
4. **Post wraps are cosmetic over structural posts** — the wrap isn't structural; the post inside is (framing). For looks/match.
5. **Mitered fascia corners** look best (vs. butted) — slightly more labor.
6. **Fastener compatibility** — SS/coated.
7. **Skirting frame** — needs cleats/furring to attach to; real (minor) framing.
8. **Match material/finish** to decking for a cohesive look.

## 4.8 Quick worked example

Fascia + lattice skirting, 12'×16' elevated deck (illustrative):
- **Fascia:** ~56 LF perimeter (composite to match) + ~12% miters ≈ ~63 LF.
- **Skirting:** ~56 LF perimeter × ~3 ft to grade ≈ ~168 SF lattice + frame + 1 access panel.
- **Labor:** fascia (56 × 0.09 ≈ 5) + skirting (168 × 0.07 ≈ 12 + access) ≈ **~18–20 MH**.
- **Equipment:** miter saw, drills, jig saw (lattice/access).

---

# APPENDIX — Cross-system deck principles

1. **A complete deck = this manual (surface/rails/stairs/finish) + the Framing Manual (structure).** Always pair them: ledger ⚠️, footings ⚠️, posts, beams, joists, hangers, load path live in Framing §2; decking, rails, stairs, fascia live here. Don't quote a deck surface without confirming the structure scope (and its ⚠️ structural sizing).
2. **⚠️ Life-safety code items you must meet (not eyeball):** ledger attachment (Framing ⚠️), guard height + <4" baluster spacing + 200 lb load (post attachment) ⚠️, stair uniform rise/run + handrail ⚠️, footings to bearing/frost ⚠️. These are where decks fail and where inspectors focus. Verify local code; when unspecified, state assumptions and flag.
3. **Joist tape + water management = deck lifespan.** Taping joist/beam/ledger tops, gapping boards for drainage, fascia that doesn't trap water — water sitting on framing is the #1 deck-rot cause. Cheap to do, big longevity payoff. Include it.
4. **Material choice drives cost massively** — PT vs. composite vs. PVC vs. hardwood is a multiple-X swing on decking and rails. Always confirm the material; it dominates the estimate. Composite/PVC/hardwood also change joist spacing ⚠️, fasteners (hidden clips), and finishing (none vs. oil).
5. **Coordinate joist/stringer spacing with the surface material** ⚠️ — composite/PVC and diagonal patterns need closer framing (12" OC); composite stair treads need closer stringers. A surface-material choice imposes a framing requirement. Mismatches = sagging/bouncy.
6. **One combined difficulty factor, capped (~1.4×), on install labor.** Patterns, hidden fasteners, cable/glass rail, turns/landings, elevation — pick the governing one. Footings, joist tape, blocking, stairs, railings, fascia/skirting, finishing, demo are **separate line items**, not multipliers.
7. **Stairs and railings are labor-dense — estimate them as their own units**, not folded into a flat per-SF deck rate. A small stair or a long railing carries disproportionate (and code-critical ⚠️) labor.
8. **Fastener compatibility is a material spec** — coated/hot-dip-galv/stainless with treated lumber; **stainless for cedar/hardwood**; system-matched clips. Wrong fasteners corrode/stain/fail.
9. **Finishing is a phase for wood/PT** (stain/seal/oil, multiple coats) — and PT must dry before sealing (schedule it). Composite/PVC need none (a selling point). Hardwood is oiled and re-oiled.
10. **Climate detailing here:** footings below frost depth ⚠️ (Framing), drainage/gapping for snowmelt, materials and finishes rated for freeze-thaw, detailing where a deck meets a snow-shedding metal roof above. Real, market-specific.

*End of deck manual. Surface/rails/stairs/finish scope; pair with the Framing Manual (§2 Floor Framing) for structure. Next trade category (exterior metal — gutters/soffit/fascia, etc.) to be built in the same format.*
