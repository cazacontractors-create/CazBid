# Caza Contractors — Electrical Estimating Manual (Scoping & Sub-Bid Reference)

**Purpose:** A trade-expert reference for the AI estimator to **scope electrical work, understand what drives its cost, and evaluate an electrical sub's bid** — NOT a wiring how-to. For each area it defines what drives labor and material, the factors that move them, the material categories with rough quantities/units, the equipment involved, the dimensions/information needed for an accurate quote, and the code/permit realities — so Caza can scope electrical on a job and judge a sub's number intelligently.

**⚠️ LICENSED TRADE — READ THIS FIRST.** Electrical work is a **licensed, permitted, inspected trade** in essentially every jurisdiction, for a critical reason: **faulty electrical work causes fires and electrocution.** In most places, electrical work must be performed by a **licensed electrician**, pulled under a **permit**, and **inspected** ⚠️. There are real legal limits on what a general contractor may self-perform. **This manual does NOT provide instructions for performing electrical work** — no conductor sizing for installs, no connection/wiring procedures, no "how to wire it." It is an **estimating and sub-bid-checking reference.** Throughout, **⚠️ LICENSED/CODE** marks where a licensed electrician + permit + inspection + code compliance are required (which is almost everywhere in this trade). **Caza subs electrical to a licensed electrician** — this manual helps Caza scope the work and read the sub's bid, not do the wiring.

**Why this trade is framed differently:** Unlike siding or decking (which a GC may self-perform), electrical is sub-only for Caza. So the manual's value is **understanding the scope and cost drivers well enough to (1) coordinate the sub, (2) sanity-check the bid, (3) communicate scope to the customer, and (4) sequence the work** — not to perform it. The AI should frame electrical output as **"scope + estimated range + check the sub's bid,"** always noting it requires a licensed electrician + permit ⚠️.

**What drives electrical cost (the estimating axes):**
- **Device/point count** (outlets, switches, fixtures, circuits) — much electrical is estimated **per device/point/circuit** (a "rough-in" + "trim" count).
- **Circuit count + home runs** (each circuit = wire run from panel + breaker).
- **Service size + panel** (amperage, panel/subpanel — a major fixed cost).
- **New vs. remodel/retrofit** — fishing wire in finished walls is far slower than open-framing new work (the single biggest labor swing).
- **Permit, inspection, and code compliance** ⚠️ — always part of the cost/timeline.

**How to use this manual (for the AI):**
1. Identify the electrical scope (service, circuits/rough-in, devices/trim, specialty).
2. Use **Information Needed** to scope it; estimate conservatively + state assumptions + **always note it requires a licensed electrician + permit ⚠️**.
3. Estimate by **device/point/circuit count + service/panel + new-vs-remodel**, giving a **range** (electrical pricing varies widely by region/sub).
4. Frame output as **scope + estimated range + "verify with a licensed electrician's bid."**
5. Apply **Cost-Driver & Best-Practice Notes** to read a bid intelligently.

**Units key:** EA = each (device/point/fixture) · circuit = a branch circuit (wire run + breaker) · A = amperes (service/circuit size) · LF = linear foot (wire/conduit runs) · MH = man-hours · ⚠️ = licensed electrician + permit + inspection + code — required, not DIY

**Estimating note:** Electrical is often priced **per device/point** (a rough-in + trim count) or **per circuit**, plus **fixed costs** (service/panel/permit), with a **big new-vs-remodel labor multiplier**. Ranges below are rough scoping aids — **the licensed sub's bid is the real number**; this manual helps judge whether that number is reasonable.

---

# 1. SERVICE & DISTRIBUTION (SERVICE ENTRANCE, PANELS, METER)

## 1.1 Overview & what's involved

The electrical service brings utility power into the building and distributes it: the **service entrance** (utility connection, meter, main disconnect), the **main panel** (breakers feeding circuits), and any **subpanels**. This is the heart and a major fixed cost of an electrical job — and **entirely licensed/permitted/utility-coordinated work** ⚠️. The cost is driven by **service size (amperage), panel size/type, whether it's new/upgrade/replacement, the service type (overhead vs. underground), utility coordination, and code-required upgrades** ⚠️.

**Scope elements (all ⚠️ licensed):**
- **Service size (amperage):** 100A (older/small), **200A (modern residential standard)**, 400A+ (large homes/heavy loads). Service size sets capacity for everything; upgrades are common when adding load (EV, HVAC, additions). ⚠️
- **Main panel (load center):** The breaker panel — sized to service + circuit count (number of breaker spaces). Brand/quality varies. Replacing an obsolete/unsafe panel (e.g. certain recalled/hazard panels) is common. ⚠️
- **Subpanels:** Additional panels (garage, addition, shop, ADU) fed from the main — for distance or added circuits. ⚠️
- **Service entrance type:** **Overhead** (mast/weatherhead from utility pole) vs. **underground** (buried lateral) — underground = trenching/conduit, more cost. ⚠️ + utility coordination.
- **Meter / meter base:** Utility meter + base; sometimes relocated/upgraded. ⚠️ + utility.
- **Main disconnect / grounding & bonding** ⚠️: Service disconnect + the grounding/bonding system (ground rods, bonding) — a critical safety system ⚠️ (sized/installed per code by the electrician).
- **Service upgrade/replacement:** Going 100A→200A, replacing a panel, or a full service rebuild — a defined major scope, usually requiring utility coordination, permit, inspection, and often a power shutoff. ⚠️

## 1.2 Information needed to scope / check a bid

- **★ Existing service size + condition** — what's there (100A/200A?), panel type/brand, age, any hazard (recalled panel, double-taps, rust, no ground). ⚠️
- **★ Required service size** — driven by total load (existing + new: additions, HVAC, EV, etc.). Adding significant load often forces an upgrade ⚠️.
- **★ New, upgrade, or replacement** — new construction service vs. upgrading/replacing existing (replacement adds removal + utility coordination + possible temporary power).
- **★ Service type** — overhead vs. underground (underground = trenching/conduit).
- **★ Panel size needed** — breaker spaces for the circuit count (current + future) ⚠️.
- **★ Subpanels** — any (garage/addition/shop) + their feed distance.
- **★ Utility coordination** — the utility's role (new drop, meter, disconnect/reconnect, scheduling) — affects timeline.
- **★ Permit + inspection** ⚠️ — always; service work is heavily inspected.
- **Grounding/bonding** ⚠️ — bringing an older system up to code (ground rods, bonding) is common with upgrades.
- **Temporary power** — needed if the service is down during a replacement (occupied home).
- **Location/access** — panel location (relocating a panel is significant), meter location, trenching path (underground).

## 1.3 Material categories (for understanding/checking the bid — not a buy list to self-install)

| Category | Unit | Notes (the sub provides/installs — licensed ⚠️) |
|---|---|---|
| **Main panel (load center) + breakers** | EA | Sized to service + spaces ⚠️; quality/brand varies; breakers per circuit. A major material line. |
| **Subpanel + feeder + breakers** | EA | If subpanels ⚠️; feeder conductor + breaker. |
| **Service entrance conductors + mast/weatherhead (overhead) or lateral + conduit (underground)** | EA/LF | Sized to service ⚠️; underground adds conduit + trench. |
| **Meter base / meter socket** | EA | + utility meter (utility-provided). ⚠️ |
| **Main disconnect** | EA | Service disconnect ⚠️. |
| **Grounding/bonding (ground rods, conductors, clamps)** | EA/LF | Safety system ⚠️ — code-sized. |
| **Trenching/conduit (underground service)** | LF | Trench + conduit + backfill (often a Caza/excavation coordination point). |
| **Weatherproofing / fittings / mounting** | EA | Service detailing. |
| **Permit fee** ⚠️ | EA | Always — service work. |

## 1.4 Labor / cost drivers (for scoping + judging the bid)

| Driver | Effect on cost |
|---|---|
| **Service size** ⚠️ | 200A standard; 400A+ materially more (bigger panel/conductors/utility). |
| **New vs. upgrade vs. replacement** | Replacement adds removal + utility coordination + temp power + downtime. |
| **Overhead vs. underground** | Underground = trenching + conduit + more labor/material. |
| **Panel relocation** | Moving a panel = extending all circuits + new location work — significant. |
| **Subpanels** | Each adds panel + feeder + breakers + labor. |
| **Grounding/bonding upgrade** ⚠️ | Bringing old systems to code — added scope. |
| **Utility coordination + scheduling** | Drives timeline (utility disconnect/reconnect, new drop). |
| **Code-required upgrades** ⚠️ | Triggered by the work (AFCI/GFCI, grounding, etc.) — adds to a "simple" upgrade. |
| **Permit + inspection** ⚠️ | Always; fees + scheduling. |
| **Access / difficulty** | Cramped/finished/old-home conditions slow it. |

**Rough scoping (ranges — verify with the sub's bid):** A **200A service upgrade/panel replacement** is commonly a **multi-thousand-dollar defined job** (panel + service + grounding + permit + utility + a day or so of licensed labor), more for 400A, underground, relocation, or heavy code upgrades. Treat any single number cautiously — **the licensed sub's bid is the real figure**; this gives a sense of whether it's in the right ballpark.

## 1.5 Cost-driver & best-practice notes (for reading the bid / coordinating)

1. **⚠️ This is licensed, permitted, utility-coordinated, inspected work — full stop.** Service/panel work must be done by a licensed electrician under permit, coordinated with the utility, and inspected ⚠️. Caza subs this. The estimate = the sub's bid + Caza coordination/markup. Never scope it as self-performed or skip the permit/utility steps.
2. **Service size should match present + future load.** Adding an addition, HVAC, EV charger, or heavy loads often requires (or makes wise) a service upgrade ⚠️. A bid that adds big load to an undersized service without addressing capacity is a red flag — ask the sub about load calculation ⚠️.
3. **Panel quality/brand + breaker spaces matter.** A panel needs enough breaker spaces for current + future circuits; quality/brand affects reliability and cost. Replacing an obsolete or hazard-flagged panel (certain recalled types) is a real, valuable scope — flag if the existing panel is a known hazard type ⚠️.
4. **Overhead vs. underground changes the job.** Underground service (trenching, conduit, backfill) is more cost than overhead — and the trenching may be a Caza/excavation coordination point (the electrician terminates; someone digs). Clarify who trenches.
5. **Panel relocation is expensive (it moves every circuit).** Moving a panel means extending all the existing circuits to the new location plus the new service work — a big scope, not a small "move the box" line. If a bid relocates the panel, expect significant cost.
6. **Grounding/bonding upgrades ride along** ⚠️. Service work commonly triggers bringing the grounding/bonding system up to current code (ground rods, bonding) — a legitimate added line on upgrades of older homes.
7. **Temporary power + downtime (occupied replacement).** Replacing a live service means a power shutoff (utility-coordinated) and possibly temporary power — affects timeline and the customer's experience. Factor the disruption.
8. **Utility coordination drives the schedule.** The utility's tasks (new drop, meter, disconnect/reconnect) are on the utility's schedule — a real timeline factor outside the electrician's control. Build it into the project schedule.
9. **Code-triggered upgrades inflate a "simple" job** ⚠️. Touching the service/panel can trigger code-required additions (AFCI/GFCI protection, grounding, labeling) — so a "just swap the panel" job legitimately costs more. A bid that's suspiciously cheap may be skipping code items ⚠️.
10. **Permit + inspection always** ⚠️ — confirm the sub pulls the permit and the work is inspected. **No permit/inspection is a major red flag** (unsafe, illegal, and a liability for Caza and the homeowner). This is non-negotiable.

---

# 2. BRANCH CIRCUITS & ROUGH-IN WIRING

## 2.1 Overview & what's involved

Branch circuits distribute power from the panel to the building's outlets, switches, fixtures, and equipment — the **"rough-in"** (wiring + boxes installed before walls close) is the bulk of new/remodel electrical labor. **Licensed/permitted/inspected** ⚠️. The cost is driven by **the number of circuits, the number of devices/points (boxes), the wiring runs (length/difficulty), new vs. remodel (the huge swing — open framing vs. fishing finished walls), and code-required circuits/protection** ⚠️.

**Scope elements (all ⚠️ licensed):**
- **Branch circuits:** Each circuit = a wire run (home run) from the panel + a breaker, serving a set of devices/loads. Counted per circuit. ⚠️ More circuits = more capacity/separation (kitchens, baths, dedicated equipment require their own ⚠️).
- **Dedicated circuits** ⚠️: Specific equipment (HVAC, range, dryer, water heater, EV, etc.) requires its own dedicated circuit ⚠️ — sized to the load. Each is a defined line.
- **Rough-in wiring (the bulk):** Running cable/wire through framing, installing boxes for every device/fixture/junction. Counted per device/point + by run difficulty. ⚠️
- **Boxes:** A box at every outlet, switch, fixture, junction. Counted per point.
- **Wiring method:** Romex/NM cable (common residential), conduit (commercial/exposed/where required), MC cable — affects labor/material ⚠️.
- **Code-required circuits/protection** ⚠️: Specific rooms/uses require dedicated circuits, GFCI (wet areas), AFCI (most living-space circuits), tamper-resistant receptacles, etc. ⚠️ — code-driven count.
- **Home runs / panel connections** ⚠️: Each circuit lands at the panel on its breaker.

## 2.2 Information needed to scope / check a bid

- **★ Number of circuits** — total branch circuits (by load/rooms/code ⚠️).
- **★ Number of devices/points** — outlets + switches + fixtures + junctions (the box count) — the primary labor count.
- **★ New construction vs. remodel/retrofit** ⚠️ — THE big labor driver (open framing fast; fishing finished walls slow).
- **★ Dedicated circuits needed** ⚠️ — HVAC, range, dryer, water heater, EV, etc. (each its own).
- **★ Wiring method** — NM/Romex vs. conduit vs. MC (code/location-driven) ⚠️.
- **★ Square footage / room count / layout** — drives device + circuit counts.
- **★ Code-required circuits + protection** ⚠️ — GFCI/AFCI/dedicated/tamper-resistant per current code.
- **★ Wall/ceiling access (remodel)** — finished walls (fish) vs. open vs. accessible (attic/basement/crawl) — drives the fishing labor.
- **Run distances / building size** — long runs, multi-story, detached structures.
- **Permit + inspection** ⚠️ — rough-in inspection before walls close ⚠️.

## 2.3 Material categories (for understanding/checking the bid)

| Category | Unit | Notes (sub installs — licensed ⚠️) |
|---|---|---|
| **Cable/wire (NM/Romex, MC, conductors)** | LF / by circuit | Sized to circuit/load ⚠️; by run length × circuits. |
| **Conduit + fittings (where used)** | LF | Commercial/exposed/required runs ⚠️. |
| **Boxes (device/junction/fixture)** | EA | One per point — the box count. |
| **Breakers (per circuit, incl. AFCI/GFCI)** ⚠️ | EA | Per circuit; AFCI/GFCI breakers cost more ⚠️ (code). |
| **Wire connectors / staples / supports / fittings** | EA/box | Per code ⚠️. |
| **Cable protection (plates, etc.)** ⚠️ | EA | Protect wiring at framing ⚠️ (code). |
| **Permit fee** ⚠️ | EA | Always. |

## 2.4 Labor / cost drivers (for scoping + judging the bid)

| Driver | Effect on cost |
|---|---|
| **New vs. remodel/retrofit** ⚠️ | **The biggest swing** — open framing is fast (run + staple); fishing finished walls/ceilings is slow (often 2–4× the labor per point). |
| **Device/point count** | Primary count — more outlets/switches/fixtures = more boxes + connections + runs. |
| **Circuit count** | Each circuit = a home run + breaker + panel connection. |
| **Dedicated circuits** ⚠️ | Each adds a sized run + breaker. |
| **Run length / building size / stories** | Longer/harder runs = more wire + labor. |
| **Wiring method** | Conduit (bend/pull) is more labor than NM cable. |
| **Access (remodel)** | Finished/closed/old conditions slow it dramatically. |
| **Code-required circuits/protection** ⚠️ | GFCI/AFCI/dedicated/tamper-resistant — adds count + cost. |
| **Permit + rough-in inspection** ⚠️ | Always; scheduling before close-up. |

**Rough scoping (ranges — verify with the sub):** New residential electrical is often scoped **per device/point** (a rough-in + trim figure per outlet/switch/fixture) plus circuits and the service. **Remodel/retrofit costs materially more per point** (fishing). A whole-house rough-in is a multi-day licensed job. **The sub's bid is the number** — this helps judge whether the per-point/per-circuit pricing and the new-vs-remodel difference look reasonable.

## 2.5 Cost-driver & best-practice notes (for reading the bid / coordinating)

1. **⚠️ Licensed, permitted, inspected — including a rough-in inspection before walls close.** Branch wiring must be a licensed electrician's work under permit, with a **rough-in inspection before insulation/drywall covers it** ⚠️. **Sequence matters: electrical rough-in + inspection must happen before insulation and drywall** (coordinate with those trades). Closing walls before the rough-in inspection means tearing them back open. A key scheduling/coordination point for Caza.
2. **New vs. remodel is the biggest cost driver — by far.** Open-framing new work (run and staple) is fast; **fishing wire through finished walls/ceilings is slow and the single largest labor swing** in branch wiring (often multiples per point). A remodel bid will and should be higher per point than new — if a remodel is priced like new work, the sub may be underestimating (or planning to open walls you didn't expect).
3. **Code-required circuits + protection drive the count** ⚠️. Current code requires dedicated circuits for certain areas (kitchen small-appliance, bath, laundry, etc.), GFCI in wet/outdoor areas, AFCI on most living-space circuits, and tamper-resistant receptacles ⚠️. These are not optional and they add circuits/cost. A bid missing them is a red flag (and won't pass inspection). Confirm code items are included.
4. **Device/point count is the core estimate** — get an accurate outlet/switch/fixture/junction count (the box count). More points = more boxes, connections, and runs. The count should match the plan/scope; a vague count = a vague bid.
5. **Dedicated circuits for equipment** ⚠️ — HVAC, range, dryer, water heater, EV, and other heavy/specific loads each need their own sized circuit ⚠️. Make sure the bid includes a dedicated circuit for every piece of equipment in the scope (a common omission that shows up at the end).
6. **Wiring method per location/code.** NM/Romex for typical residential concealed; conduit where exposed/commercial/required; MC in some cases ⚠️. Conduit is more labor (bending/pulling). The method should match the application — exposed runs in a garage/basement may need conduit or protection.
7. **Cable protection + support per code** ⚠️ — wiring must be protected (plates where it could be hit by fasteners) and supported per code ⚠️. These details are part of a code-compliant rough-in (and inspection).
8. **Coordinate rough-in timing with framing/insulation/drywall.** Electrical rough-in happens after framing, before insulation/drywall — Caza must sequence the sub between those trades (and after plumbing/HVAC rough-in, which often go first). A scheduling reality on any project with electrical.
9. **Future-proofing is cheap during rough-in.** Adding extra circuits/capacity/conduit while walls are open is far cheaper than later — worth discussing with the customer (and a good sub may suggest it). Relevant if the customer has future plans (EV, shop, addition).
10. **Permit + rough-in + final inspections** ⚠️ — confirm the sub pulls the permit and both inspections happen (rough-in before close-up, final at trim-out). **No permit/inspection = major red flag** (unsafe, illegal, Caza liability).

---

# 3. DEVICES, FIXTURES & TRIM-OUT

## 3.1 Overview & what's involved

Trim-out (or "finish") is installing the visible electrical after walls are closed: **receptacles (outlets), switches, light fixtures, fans, cover plates, and connecting/testing devices.** Counted per device/fixture. **Licensed/permitted, with a final inspection** ⚠️. The cost is driven by **the device/fixture count, the fixture types (simple vs. complex/heavy/specialty), the trim quality, and any customer-supplied vs. sub-supplied fixtures.**

**Scope elements (all ⚠️ licensed):**
- **Receptacles (outlets):** Standard, GFCI (wet/outdoor ⚠️), tamper-resistant, USB, 240V (appliances), floor outlets, etc. Counted per outlet. ⚠️
- **Switches:** Single-pole, 3-way/4-way (multiple locations), dimmers, smart/timer/occupancy switches, fan controls. Counted per switch (3-way/4-way + smart = more). ⚠️
- **Light fixtures:** Surface, recessed (can/LED), pendants, chandeliers (heavy ⚠️), track, under-cabinet, exterior, vanity — count + complexity. Heavy/high/complex fixtures = more labor. ⚠️
- **Ceiling fans** ⚠️: Need proper fan-rated box support ⚠️ (set at rough-in); install + balance. Counted per fan.
- **Cover/wall plates:** Per device — minor but counted.
- **Specialty trim:** Smart devices, controls, exhaust fans (bath — vent to exterior ⚠️), exterior/landscape fixtures, etc.
- **Connect/test/label** ⚠️: Terminate devices, test (GFCI/AFCI function), label panel ⚠️ — part of code-compliant finish + final inspection.

## 3.2 Information needed to scope / check a bid

- **★ Device count (receptacles + switches)** — by type (standard/GFCI/3-way/dimmer/smart).
- **★ Fixture count + types** — recessed, surface, pendants, chandeliers (heavy/high ⚠️), exterior, vanity, under-cabinet, etc.
- **★ Ceiling fan count** ⚠️ — (need fan-rated boxes from rough-in ⚠️).
- **★ Fixtures supplied by whom** — customer-supplied vs. sub-supplied (affects material in the bid; customer-supplied = labor-only to install, but coordination + defects risk).
- **★ Trim quality / specialty** — basic vs. high-end/smart/specialty devices + fixtures.
- **★ Exhaust fans (bath/range)** ⚠️ — vent to exterior ⚠️ (coordination with exterior/ducting).
- **Exterior/landscape lighting** — fixtures + any low-voltage (§4).
- **Final inspection** ⚠️ — trim-out triggers the final electrical inspection ⚠️.

## 3.3 Material categories (for understanding/checking the bid)

| Category | Unit | Notes (sub installs — licensed ⚠️) |
|---|---|---|
| **Receptacles (by type: standard/GFCI/TR/240V/USB)** | EA | GFCI/specialty cost more ⚠️. |
| **Switches (single/3-way/dimmer/smart)** | EA | 3-way/4-way/smart cost more. |
| **Light fixtures** | EA | Customer- or sub-supplied; wide cost range; heavy/specialty = more labor. |
| **Recessed lights (housings + trims/LED)** | EA | Count; new-vs-remodel housings differ. |
| **Ceiling fans + fan-rated boxes** ⚠️ | EA | Fan support ⚠️; install + balance. |
| **Cover/wall plates** | EA | Per device. |
| **Exhaust fans (bath/range)** ⚠️ | EA | + venting to exterior ⚠️ (coordination). |
| **Smart/controls/specialty** | EA | Premium. |
| **Permit (covered under job permit) + final inspection** ⚠️ | — | Final at trim-out. |

## 3.4 Labor / cost drivers (for scoping + judging the bid)

| Driver | Effect on cost |
|---|---|
| **Device/fixture count** | Primary count — per outlet/switch/fixture. |
| **Fixture complexity** | Chandeliers, high ceilings, multi-fixture, specialty = much more labor than a simple surface fixture. |
| **3-way/4-way/smart switching** | More than single-pole. |
| **Recessed light count** | Each housing + trim; many cans = real labor. |
| **Ceiling fans** ⚠️ | Support + install + balance. |
| **Customer- vs. sub-supplied fixtures** | Affects material in bid + coordination/defect risk. |
| **High/difficult access (tall ceilings, stairwells)** | Staging + slower. |
| **Specialty/smart devices** | Programming/setup adds. |
| **Final inspection** ⚠️ | Triggered at trim-out. |

**Rough scoping (ranges — verify with the sub):** Trim-out is often scoped **per device/fixture** (a set figure per outlet/switch/standard fixture, more for complex/heavy/specialty/high fixtures). Whole-house trim is a defined phase. **The sub's bid is the number** — judge whether the per-device pricing and complexity adders look reasonable, and clarify who supplies fixtures.

## 3.5 Cost-driver & best-practice notes (for reading the bid / coordinating)

1. **⚠️ Licensed work + final inspection at trim-out.** Devices/fixtures must be installed/connected by the licensed electrician, and trim-out triggers the **final electrical inspection** ⚠️ (testing GFCI/AFCI, proper connections, labeling). Part of the permitted job. Confirm the final inspection happens.
2. **Fixture complexity drives trim labor far more than count alone.** A simple surface fixture is quick; a heavy chandelier on a tall foyer ceiling, many recessed cans, or specialty/smart fixtures are much more labor. A bid should reflect the *mix*, not just a flat per-fixture number for everything. High/heavy/specialty fixtures legitimately cost more.
3. **Clarify customer-supplied vs. sub-supplied fixtures.** Customer-supplied fixtures = the bid is labor-only to install them (cheaper material in the bid, but coordination + risk if a fixture is defective/incomplete/wrong). Sub-supplied = fixtures in the bid (markup, but the sub owns the supply). **Pin this down** — it's a common source of bid confusion and finger-pointing. Customer-supplied fixtures arriving late/damaged can stall trim-out.
4. **⚠️ Ceiling fans need fan-rated support (set at rough-in).** A ceiling fan requires a fan-rated box/brace ⚠️ installed during rough-in — you can't just hang a fan on a standard box (it'll fall). If fans are added after rough-in, the box may need to be retrofitted (harder). Flag fans early so rough-in includes the support.
5. **⚠️ GFCI/AFCI/tamper-resistant where code requires.** Wet/outdoor areas need GFCI, most circuits AFCI, receptacles tamper-resistant ⚠️ — the trim must use the right devices. A bid using cheaper standard devices where code requires protected/TR types is a red flag (and fails inspection).
6. **⚠️ Bath/range exhaust fans vent to the exterior.** Exhaust fans must vent **outside** (not into the attic/soffit) ⚠️ — a coordination point with Caza's exterior/ducting work (the fan is electrical + the duct/exterior cap is coordination). Don't let a fan dump moist air into the attic (a moisture/mold problem — ties to Insulation/Roofing).
7. **Recessed lighting: housing type matters (new vs. remodel, IC, airtight).** Recessed cans come in new-construction vs. remodel housings, IC-rated (insulation contact) and airtight types ⚠️ (ties to Insulation — airtight IC cans where they'll be buried in attic insulation). Many cans = real labor. The right housing for the location matters.
8. **High/difficult-access fixtures need staging.** Tall ceilings, stairwell fixtures, and foyer chandeliers need staging/lifts and careful work — a real labor adder beyond the fixture itself. Factor access.
9. **Smart/controls add setup time.** Smart switches/dimmers/controls and connected fixtures add programming/setup beyond physical install — a real (sometimes underestimated) adder if the scope is "smart home."
10. **Trim-out is the last electrical phase — coordinate with finishes.** Trim happens after drywall/paint (devices/fixtures go on finished walls/ceilings) — coordinate the sub's trim-out near the end, after painting (so plates/fixtures aren't painted around/over). A sequencing point with the finish trades.

---

# 4. SPECIALTY & SYSTEMS (UPGRADES, GENERATORS, EV, SOLAR INTERCONNECT, LOW-VOLTAGE)

## 4.1 Overview & what's involved

Beyond standard power: **service/panel upgrades, generators (portable/standby), EV chargers, solar/battery interconnect, and low-voltage systems (data/AV/security/etc.).** Mostly **licensed/permitted/specialized** ⚠️ (low-voltage sometimes a separate specialty). These are increasingly common (EV, solar, generators) and are defined add-on scopes. Cost is driven by **the specific system, its size/load, the integration with the existing service/panel ⚠️, and code/utility requirements** ⚠️.

**Scope elements:**
- **Service/panel upgrade** ⚠️: (Cross-ref §1) — often the *enabler* for EV/solar/heavy loads. A 100A→200A upgrade is a common prerequisite.
- **EV charger (EVSE)** ⚠️: A 240V dedicated circuit + charger ⚠️ — load-dependent (may require service capacity/upgrade ⚠️). Increasingly common. Location/run from panel drives cost. ⚠️
- **Generator — portable (interlock/manual transfer):** An interlock kit or manual transfer switch + inlet for a portable generator ⚠️ — modest. For backup power.
- **Generator — standby (automatic):** A permanently installed standby generator + automatic transfer switch (ATS) + fuel (propane/natural gas — fuel coordination) + pad ⚠️ — a major, defined scope (electrician + often a gas/pad sub + utility/permit). For whole-home backup.
- **Solar PV / battery interconnect** ⚠️: Connecting solar/battery to the panel/service (interconnect, possible panel/service upgrade, utility net-metering coordination, permits) ⚠️ — usually a solar specialist; the electrical interconnect is licensed ⚠️. (Caza's investing interest in solar aside, this is a specialized sub scope.)
- **Low-voltage / structured wiring** ⚠️(often separate): Data/ethernet, AV, security/cameras, networking, smart-home, doorbell/intercom, speakers — often a low-voltage specialist (sometimes lower licensing requirements than line-voltage, but still skilled). Pulled during rough-in.
- **Surge protection, dedicated/specialty circuits, hot tubs/pools** ⚠️ (pools/spas have strict code ⚠️), well pumps, etc.

## 4.2 Information needed to scope / check a bid

- **★ Which system(s)** — EV, generator (portable/standby), solar interconnect, low-voltage, etc.
- **★ System size/load** ⚠️ — EV charger amperage, generator size (kW), solar system size, etc. → service capacity check ⚠️.
- **★ Service/panel capacity** ⚠️ — does the existing service have room/capacity, or is an upgrade required first (§1)? Big EV/solar/generator loads often force it ⚠️.
- **★ Location + run** — distance from panel (EV in garage, generator outside, etc.) drives conduit/wire/labor.
- **★ Fuel (standby generator)** — propane/natural gas (coordination with gas sub/supply) + pad.
- **★ Utility coordination (solar/large)** ⚠️ — net metering, interconnection agreement, approvals.
- **★ Permit + inspection** ⚠️ — always; some (solar/generator/pool) have extra requirements.
- **★ Low-voltage scope** — drops/locations (data/AV/security) + whether a separate specialist.
- **Specialty code (pools/spas/hot tubs)** ⚠️ — strict bonding/GFCI requirements ⚠️.

## 4.3 Material categories (for understanding/checking the bid)

| Category | Unit | Notes (sub/specialist installs — licensed ⚠️) |
|---|---|---|
| **EV charger (EVSE) + 240V circuit** ⚠️ | EA | Charger + dedicated circuit ⚠️; capacity check ⚠️. |
| **Generator (portable inlet + interlock/transfer)** | EA | Inlet + interlock/transfer switch ⚠️. |
| **Standby generator + ATS + pad + fuel connection** ⚠️ | EA | Major; + gas/pad coordination ⚠️. |
| **Solar/battery interconnect (disconnect, breaker, metering)** ⚠️ | EA | Specialist; + possible service upgrade ⚠️ + utility. |
| **Low-voltage cabling + jacks/devices (data/AV/security)** | LF/EA | Often a separate specialist; pulled at rough-in. |
| **Surge protection** | EA | Whole-panel surge device. |
| **Specialty circuits (pool/spa/well/hot tub)** ⚠️ | EA | Strict code ⚠️ (bonding/GFCI). |
| **Permit(s) + utility/interconnect fees** ⚠️ | EA | Always; extra for solar/generator/pool. |

## 4.4 Labor / cost drivers (for scoping + judging the bid)

| Driver | Effect on cost |
|---|---|
| **System type + size** ⚠️ | Standby generator/solar = major; EV charger = modest-to-moderate; low-voltage drops = per-drop. |
| **Service capacity / upgrade prerequisite** ⚠️ | If the system forces a service/panel upgrade (§1), add that major cost. |
| **Location + run distance** | Far runs (EV across the house, generator placement) = more conduit/wire/labor. |
| **Fuel + pad (standby generator)** | Gas + pad coordination (other subs). |
| **Utility/interconnect coordination (solar/large)** ⚠️ | Timeline + approvals. |
| **Specialty code (pool/spa)** ⚠️ | Strict bonding/GFCI = added scope. |
| **Low-voltage drop count** | Per data/AV/security drop. |
| **Permit(s) + inspection(s)** ⚠️ | Always; extra for specialty systems. |

**Rough scoping (ranges — verify with the specialist/sub):** **EV charger** = a defined moderate job (charger + dedicated 240V circuit + possible upgrade ⚠️). **Standby generator / solar** = major specialized scopes (often their own specialist sub + utility + permits). **Low-voltage** = per-drop or per-system. **The specialist/sub's bid is the number** — and for solar/generators, often a dedicated specialist, not a general electrician. This manual helps Caza understand the scope and coordinate.

## 4.5 Cost-driver & best-practice notes (for reading the bid / coordinating)

1. **⚠️ Licensed/specialized + permitted — and some need extra approvals.** EV, generators, solar, and pool/spa electrical are licensed (often specialist) work under permit ⚠️, and solar/generators/large loads add **utility coordination/interconnection** ⚠️ and sometimes extra inspections. Caza subs these (often to a specialist beyond a general electrician). Confirm permits + the right qualified installer.
2. **⚠️ Big new loads often require a service/panel upgrade first.** EV chargers, standby generators, solar, and heavy loads frequently require a **service capacity check and possibly an upgrade (§1)** ⚠️ — a major cost that's part of the real scope. A bid that adds a big load without addressing capacity is a red flag; ask about the load calculation ⚠️.
3. **EV chargers are increasingly common — scope the circuit + location + capacity.** An EVSE needs a dedicated 240V circuit ⚠️ sized to the charger, run from the panel to the location (garage), with a capacity check ⚠️. Run distance + capacity drive the cost. A growing, well-defined scope.
4. **Standby generators are a multi-trade, major scope.** A standby generator = electrician (ATS, connection) + gas/fuel (propane/natural gas sub) + a pad (concrete — cross-ref Concrete Manual) + utility/permit ⚠️ + sizing to the load. Not a single-line item — coordinate the trades. Portable-generator interlocks are far simpler/cheaper.
5. **Solar/battery is a specialist scope with utility interconnection.** Solar PV/battery is usually a solar specialist (design + panels + inverter + the licensed electrical interconnect ⚠️ + utility net-metering/interconnection agreement + permits) ⚠️. A possible service/panel upgrade rides along. Caza's role is coordination; the bid comes from the solar specialist. (Relevant to Dustin's solar interest, but it's a specialized sub trade.)
6. **⚠️ Pools/spas/hot tubs have strict electrical code.** Bonding and GFCI requirements for pools/spas/hot tubs are strict ⚠️ (life-safety — water + electricity). A specialized, code-heavy scope — must be done right by a qualified electrician ⚠️. Flag the strict requirements.
7. **Low-voltage is often a separate specialist + pulled at rough-in.** Data/ethernet, AV, security/cameras, networking, and smart-home wiring are frequently a low-voltage specialist (sometimes different licensing) and are **pulled during rough-in** (while walls are open) ⚠️ — coordinate timing with the line-voltage rough-in. Cheap to do during rough-in, expensive later. Scope the drops/locations.
8. **Surge protection is a cheap, valuable add.** A whole-panel surge protective device protects electronics/equipment — a modest add worth mentioning, especially with sensitive equipment or in storm-prone areas.
9. **Coordinate specialty systems early (they affect other scopes).** EV (garage circuit + possible panel), generators (pad + gas + electrical), solar (roof + panel + utility), low-voltage (rough-in timing) — these touch multiple trades and the service. Identify them early so the service/panel, rough-in, and other trades account for them. Late-identified specialty systems cause expensive rework.
10. **Permit(s) + inspection(s) + qualified installer** ⚠️ — confirm the right licensed/specialized installer, the permit(s), and inspection(s). For solar/generators, verify utility interconnection/approval is handled. **No permit / unqualified installer = major red flag** (safety, code, liability, and for solar/generators, utility/insurance problems).

---

# APPENDIX — Cross-system electrical principles (for scoping & checking bids)

1. **⚠️ Electrical is a licensed, permitted, inspected trade — Caza subs it.** Service, branch wiring, devices, and specialty systems require a **licensed electrician + permit + inspection + code compliance** ⚠️. This manual is for **scoping, coordinating, and checking the sub's bid** — NOT for performing electrical work or as a wiring how-to. The estimate = the qualified sub's bid + Caza coordination/markup, always noting the licensed-electrician + permit requirement ⚠️. Frame output as **scope + estimated range + "verify with a licensed electrician's bid."**
2. **Estimate on count + service + new-vs-remodel.** Electrical cost is driven by **device/point/circuit count**, the **service/panel** (major fixed cost), and the **new-vs-remodel multiplier** (fishing finished walls is the biggest labor swing). Plus **code-required circuits/protection** ⚠️ (GFCI/AFCI/dedicated/TR) that aren't optional. Give **ranges**, not false precision — regional/sub pricing varies widely.
3. **⚠️ Code-driven items are not optional and not negotiable.** Dedicated circuits, GFCI/AFCI, tamper-resistant receptacles, grounding/bonding, fan-rated boxes, exhaust venting, pool/spa bonding ⚠️ — these are required and inspected. A suspiciously cheap bid may be skipping code items (it won't pass inspection, and it's unsafe). Code compliance is a feature, not a cost to cut. **Use the bid's inclusion of code items as a quality signal.**
4. **⚠️ Sequencing + coordination is Caza's job.** Electrical rough-in happens **after framing, before insulation/drywall** (with a **rough-in inspection before close-up** ⚠️), after plumbing/HVAC rough-in; trim-out happens **after drywall/paint** (near the end). Low-voltage pulls at rough-in. Specialty systems (EV/generator/solar) touch the service + other trades. **Caza coordinates the sub into the project sequence** — closing walls before inspection = tear-out.
5. **New vs. remodel is the biggest labor swing** — open framing (fast) vs. fishing finished walls/ceilings (slow, multiples per point). A remodel bid should be higher per point than new; if not, the sub may be underestimating or planning unexpected wall demo.
6. **The service/panel is the foundation — match it to the load (present + future).** Additions, HVAC, EV, solar, and heavy loads often require a service/panel upgrade ⚠️ — a major cost that's part of the real scope. A load that exceeds capacity without an upgrade is a red flag; ask about the load calculation ⚠️.
7. **Clarify fixture/material supply (customer vs. sub).** Customer-supplied fixtures = labor-only install (+ coordination/defect risk + schedule risk if late/damaged); sub-supplied = in the bid (+ markup, sub owns supply). Pin it down — a common bid-confusion + finger-pointing source.
8. **Permit + inspection are non-negotiable red-flag checks** ⚠️. Confirm the sub pulls the permit and the work is inspected (rough-in + final). **No permit/inspection = major red flag** — unsafe, illegal, and a liability for Caza and the homeowner. This is the single most important bid-quality check.
9. **Specialty systems are increasingly common + multi-trade** — EV, standby generators, solar, low-voltage, pools/spas ⚠️. Identify them early (they affect the service, rough-in, and other trades/subs), and use the right qualified specialist (solar/generator often beyond a general electrician). Late identification = expensive rework + capacity surprises.
10. **Cross-references:** **panel/generator pad** ↔ Concrete Manual; **exhaust-fan venting + airtight IC recessed cans** ↔ Insulation/Roofing (moisture/air-sealing); **rough-in before insulation/drywall** ↔ Insulation + Interior Finish manuals (sequencing); **exterior/landscape fixtures + EV/generator location** ↔ exterior/site work. Coordinate the electrical sub with the trades it touches; confirm the *whole* job sequence + permits, not just the wiring.

*End of electrical estimating manual. Built in the same format as the other manuals but framed as a **scoping & sub-bid reference** — electrical is a licensed, permitted, inspected trade that Caza subs; the ⚠️ LICENSED/CODE flags mark where a licensed electrician + permit + inspection + code compliance are required (nearly everywhere in this trade). This manual is NOT a wiring how-to and does not substitute for a licensed electrician.*
