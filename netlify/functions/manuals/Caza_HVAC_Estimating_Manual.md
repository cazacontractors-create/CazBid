# Caza Contractors — HVAC Estimating Manual (Scoping & Sub-Bid Reference)

**Purpose:** A trade-expert reference for the AI estimator to **scope HVAC work, understand what drives its cost, and evaluate a mechanical contractor's bid** — NOT an install how-to. For each area it defines what drives labor and material, the factors that move them, the equipment/material categories with rough units, the information needed for an accurate quote, and the code/permit realities — so Caza can scope HVAC on a job and judge a sub's number intelligently.

**⚠️ LICENSED, SPECIALIZED TRADE — READ THIS FIRST.** HVAC is a **licensed, permitted, inspected, specialized trade**, and parts of it are **legally restricted**: handling refrigerant requires **EPA certification** ⚠️, gas/fuel connections require **licensing** ⚠️, and equipment sizing is an **engineering load calculation (Manual J/D/S)** ⚠️ — not a rule of thumb. In most jurisdictions HVAC must be performed by a **licensed mechanical/HVAC contractor**, under **permit**, and **inspected** ⚠️. **This manual does NOT provide installation instructions** — no refrigerant handling, no gas-connection procedures, no "size and install it yourself." It is an **estimating and sub-bid-checking reference.** Throughout, **⚠️ LICENSED/CODE** marks where a licensed HVAC contractor + permit + inspection + code compliance (and EPA/gas credentials) are required. **Caza subs HVAC to a licensed mechanical contractor** — this manual helps Caza scope the work and read the sub's bid, not do the install.

**Why this trade is framed like electrical (sub-only for Caza):** As an exterior/structural contractor, Caza subs HVAC. So the manual's value is **understanding the scope and cost drivers well enough to (1) coordinate the mechanical sub, (2) sanity-check the bid, (3) communicate scope to the customer, and (4) sequence the work** — not to perform it. The AI frames HVAC output as **"scope + estimated range + check the sub's bid,"** always noting it requires a licensed HVAC contractor + permit ⚠️.

**⚠️ COMBUSTION & REFRIGERANT SAFETY:** HVAC involves combustion (carbon monoxide risk ⚠️), fuel gas (explosion/leak risk ⚠️), and refrigerant (EPA-regulated, pressure/handling risk ⚠️). These are life-safety systems — improper work causes CO poisoning, fires, and gas explosions. This is a core reason HVAC is licensed/inspected and why Caza subs it. The manual flags these realities; it does not instruct on them.

**Climate context (this market — Climate Zone 6, cold):** **Heating dominates here.** Long cold winters, deep cold snaps (Tug Hill), and a real heating season drive HVAC decisions: heating capacity and reliability matter most, cold-climate heat pump performance + backup heat is a live decision ⚠️, fuel choice (propane/oil/electric/wood) is significant, freeze protection matters (pipes, condensate, fuel), and combustion-air/venting in a tight cold-climate house is a safety issue ⚠️. Cooling is secondary but increasingly wanted (and heat pumps do both). The envelope (insulation/air-sealing — cross-ref Insulation Manual) directly sets the load ⚠️ — a tighter house needs smaller equipment.

**How to use this manual (for the AI):**
1. Identify the HVAC scope (heating, cooling/heat pump, ductwork, ventilation).
2. Use **Information Needed** to scope it; estimate conservatively + state assumptions + **always note it requires a licensed HVAC contractor + permit + a load calculation ⚠️**.
3. Estimate by **system type + capacity (from a load calc ⚠️) + distribution + new-vs-retrofit**, giving a **range** (HVAC pricing varies widely by region/sub/fuel/equipment tier).
4. Frame output as **scope + estimated range + "verify with a licensed HVAC contractor's bid + load calc."**
5. Apply **Cost-Driver & Best-Practice Notes** to read a bid intelligently.

**Units key:** BTU/h = heating/cooling capacity · ton = 12,000 BTU/h cooling · kW = electric capacity · AFUE = furnace/boiler efficiency % · SEER2/HSPF2 = cooling/heat-pump efficiency · CFM = airflow (cubic feet/min) · Manual J/D/S = load/duct/equipment-sizing calcs ⚠️ · MH = man-hours · ⚠️ = licensed contractor + permit + inspection + code/EPA/gas — required, not DIY

**Estimating note:** HVAC is priced largely by **system type + capacity + distribution complexity + new-vs-retrofit**, with major **equipment cost tiers** (efficiency/brand) and **fuel/venting** variables. Ranges below are rough scoping aids — **the licensed sub's bid (with a proper load calc ⚠️) is the real number**; this manual helps judge whether that number and scope are reasonable.

---

# 1. HEATING SYSTEMS (FURNACES, BOILERS, HEAT PUMPS — COLD-CLIMATE FOCUS)

## 1.1 Overview & what's involved

Heating is the heart of HVAC in this climate. The system generates heat (combustion or electric/heat-pump) and distributes it (forced air via ducts, or hydronic via water/pipes). **Licensed/permitted/inspected; combustion + fuel + refrigerant safety ⚠️.** Cost is driven by **the system type + fuel, the capacity (from a load calc ⚠️), the distribution type (ducted vs. hydronic), new vs. replacement/retrofit, efficiency tier, and venting/fuel connections** ⚠️.

**System types (cold-climate context):**
- **Gas/propane furnace (forced air)** ⚠️: Burns natural gas or propane, heats air, blows through ducts. Common; AFUE efficiency (80% vs. 90%+ condensing). Needs venting + gas/propane connection + electrical + ductwork. Propane common in rural areas without natural gas (Lewis County). ⚠️
- **Oil furnace/boiler** ⚠️: Burns heating oil — still common in the rural Northeast. Oil tank + supply + venting ⚠️. Forced-air (furnace) or hydronic (boiler).
- **Boiler (hydronic)** ⚠️: Heats water for baseboard, radiators, or radiant floor. Gas/propane/oil/electric. Comfortable, common in older Northeast homes. No ducts (hydronic distribution — §3). Venting + fuel ⚠️.
- **Cold-climate heat pump (air-source, ccASHP)** ⚠️: Moves heat (doesn't burn fuel); modern cold-climate models work well to low temps ⚠️ (a major shift — they used to struggle in cold). Heats AND cools. Electric. Often paired with **backup/supplemental heat** ⚠️ for the coldest periods (electric strip, or a furnace = "dual fuel"). Increasingly chosen here; refrigerant (EPA) ⚠️. (Cooling/heat-pump detail in §2 — heat pumps span both.)
- **Ductless mini-split heat pump** ⚠️: Heat-pump heating/cooling without ducts (wall/ceiling heads + outdoor unit) — great for retrofits, additions, zoning, no-duct homes. Cold-climate models available ⚠️. (Also §2.)
- **Electric furnace / baseboard / resistance:** Electric resistance heat — simple, but expensive to run (high electric use) in a cold climate; often backup or small spaces. Heavy electrical load ⚠️ (cross-ref Electrical §1 — service capacity).
- **Geothermal (ground-source) heat pump** ⚠️: High-efficiency heat pump using ground loops — high install cost (loop field/wells), excellent operating cost, long payback. Specialized ⚠️.
- **Wood/pellet (supplemental/primary)**: Wood stoves, pellet stoves, outdoor wood boilers — common rural supplemental/primary heat here ⚠️ (clearances, venting, code ⚠️). Often a separate scope.
- **Dual-fuel / hybrid** ⚠️: Heat pump + fossil furnace — heat pump for mild, furnace for deep cold (economic + cold-climate reliability). A common modern cold-climate strategy.

## 1.2 Information needed to scope / check a bid

- **★ Load calculation (Manual J)** ⚠️ — the proper capacity basis (heat loss/gain by the building's size, envelope, windows, climate) ⚠️. **The #1 thing a good bid is based on** — not a rule-of-thumb "X BTU per sq ft."
- **★ System type + fuel** — furnace/boiler/heat pump/dual-fuel; gas/propane/oil/electric (fuel availability — propane/oil common rural here).
- **★ Heating capacity needed (BTU/h)** ⚠️ — from the load calc ⚠️; cold-climate design temp.
- **★ Distribution type** — forced air (ducts — §3) vs. hydronic (baseboard/radiant — §3) vs. ductless.
- **★ New vs. replacement/retrofit** — replacing existing (remove old + reuse/modify ducts/venting/fuel) vs. all-new.
- **★ Efficiency tier** — AFUE (furnace/boiler), HSPF2 (heat pump) — higher = more cost, lower operating cost.
- **★ Backup/supplemental heat (heat pump)** ⚠️ — strip heat or dual-fuel for cold snaps ⚠️ (cold-climate essential consideration).
- **★ Venting + fuel connection** ⚠️ — combustion venting (type), gas/propane/oil supply + tank ⚠️.
- **★ Electrical needs** ⚠️ — dedicated circuit(s); heat pumps/electric heat may require service capacity/upgrade (cross-ref Electrical) ⚠️.
- **★ Envelope condition** ⚠️ — insulation/air-sealing (cross-ref Insulation) sets the load ⚠️ (tight house = smaller equipment).
- **Permit + inspection** ⚠️ — always.
- **Existing system / fuel infrastructure** — what's there (ducts, fuel line, tank, venting, chimney).

## 1.3 Equipment / material categories (for understanding/checking the bid)

| Category | Unit | Notes (the sub provides/installs — licensed ⚠️) |
|---|---|---|
| **Furnace / boiler / heat pump (equipment)** | EA | Sized to load ⚠️; efficiency tier + brand drive cost — the major equipment line. |
| **Backup/supplemental heat (strip, or dual-fuel furnace)** ⚠️ | EA | Heat-pump cold-climate backup ⚠️. |
| **Venting (combustion: flue/PVC/B-vent per equipment)** ⚠️ | LF/EA | Type per equipment ⚠️ (condensing = PVC; others = metal/B-vent); CO safety ⚠️. |
| **Fuel supply + connection (gas/propane line, oil line + tank)** ⚠️ | LF/EA | Licensed gas/fuel work ⚠️; propane/oil tank (rural). |
| **Refrigerant lineset (heat pump)** ⚠️ | LF | EPA-handled ⚠️ (heat pump/AC). |
| **Condensate handling + freeze protection** ⚠️ | LF/EA | Drain/pump; freeze protection (cold climate) ⚠️. |
| **Electrical connection / disconnect (by electrician)** ⚠️ | EA | Dedicated circuit ⚠️ (cross-ref Electrical). |
| **Thermostat / controls** | EA | Standard/programmable/smart; zoning controls. |
| **Mounting / pad / hangers** | EA | Outdoor unit pad (cross-ref Concrete), furnace mounting. |
| **Distribution (ducts or hydronic — §3)** | — | Major separate scope (§3). |
| **Permit fee** ⚠️ | EA | Always. |

## 1.4 Labor / cost drivers (for scoping + judging the bid)

| Driver | Effect on cost |
|---|---|
| **System type + fuel** ⚠️ | Heat pump vs. furnace vs. boiler vs. geothermal — wide cost range; geothermal highest (loop field). |
| **Capacity (load calc)** ⚠️ | Bigger load = bigger/more equipment. Proper sizing ⚠️ (over/undersizing both bad). |
| **Distribution** | Ducted (if new ducts — §3) vs. hydronic (piping/baseboard — §3) vs. ductless (heads/lineset) — major. |
| **New vs. replacement/retrofit** | Replacement: remove old + adapt existing ducts/venting/fuel; retrofit ducts/hydronic into finished = big. |
| **Efficiency tier + brand** | Higher efficiency/premium brand = more equipment cost. |
| **Backup heat (heat pump)** ⚠️ | Dual-fuel/strip adds cost + electrical/fuel ⚠️. |
| **Venting + fuel** ⚠️ | New venting/flue, gas/propane/oil line + tank ⚠️. |
| **Electrical (service capacity)** ⚠️ | Heat pump/electric heat may force a service upgrade (cross-ref Electrical) ⚠️. |
| **Geothermal loop field** ⚠️ | Wells/trenching = major specialized cost. |
| **Permit + inspection** ⚠️ | Always. |

**Rough scoping (ranges — verify with the sub + load calc):** A **furnace or heat-pump replacement** is commonly a **multi-thousand-dollar defined job** (equipment + venting/fuel + electrical + labor + permit); a **full new system with ductwork or hydronic** is materially more; **geothermal** is a major investment (loop field). **Treat any single number cautiously** — the licensed sub's bid, based on a proper load calc ⚠️, is the real figure. A bid with no load calc and a rule-of-thumb size is a red flag.

## 1.5 Cost-driver & best-practice notes (for reading the bid / coordinating)

1. **⚠️ Licensed, permitted, inspected — with combustion/fuel/refrigerant safety + EPA/gas credentials.** Heating work is a licensed mechanical contractor's job under permit, with inspection ⚠️, and refrigerant (EPA ⚠️) + gas/fuel (licensed ⚠️) + combustion venting (CO safety ⚠️) are regulated/restricted. Caza subs this. The estimate = the sub's bid + Caza coordination/markup. Never scope it as self-performed or skip permit/safety steps.
2. **⚠️ A proper load calculation (Manual J) is the foundation — not a rule of thumb.** Equipment must be sized to a real heat-loss/gain calculation ⚠️ (building size, envelope, windows, infiltration, climate), NOT "X BTU per square foot." **Oversizing is a real, common problem** — it short-cycles (poor comfort, humidity, wear, efficiency loss) and costs more; undersizing won't keep up in a cold snap. **A bid based on a load calc is a quality signal; a rule-of-thumb size is a red flag.** Ask the sub for the load calc.
3. **⚠️ Cold-climate heat pump + backup heat is a live, important decision here.** Modern cold-climate heat pumps (ccASHP) work well to low temperatures ⚠️ — a real shift — and heat AND cool efficiently. But in this climate, **backup/supplemental heat for the coldest periods** ⚠️ (electric strip, or dual-fuel with a furnace) is a key consideration: sizing, the balance point, and operating cost vs. fuel. **Dual-fuel (heat pump + fossil furnace)** is a common smart cold-climate strategy (heat pump for mild, furnace for deep cold). Worth discussing with customers — and a bid should address backup heat, not ignore it.
4. **The envelope sets the load — insulation/air-sealing first is smart.** A tighter, better-insulated house (cross-ref Insulation Manual) needs **smaller, cheaper equipment** and runs cheaper. Improving the envelope before/with sizing can right-size the system down. A good HVAC scope considers the envelope; sizing for a leaky house and then air-sealing leaves an oversized system. A real coordination point with Caza's insulation work.
5. **Fuel choice is significant (rural — propane/oil/electric/wood).** No natural gas in much of Lewis County → propane or oil (tank + supply) or electric/heat-pump or wood. Fuel availability + operating cost + equipment compatibility drive the decision. Propane/oil = tank + fuel line ⚠️; electric/heat-pump = electrical capacity ⚠️; wood = clearances/venting ⚠️. Scope the fuel infrastructure.
6. **⚠️ Venting + combustion safety (CO).** Combustion equipment needs proper venting (type per equipment — condensing furnaces use PVC, others metal/B-vent) and combustion air ⚠️ — improper venting causes carbon monoxide hazards ⚠️ (deadly). In a tight cold-climate house, combustion air is a real concern ⚠️ (cross-ref ventilation §4). A safety-critical, code-inspected detail. CO detectors are essential.
7. **⚠️ Electrical capacity (heat pumps, electric heat).** Heat pumps and electric heat draw significant power and need dedicated circuits ⚠️ — and may require a **service/panel upgrade** (cross-ref Electrical §1) ⚠️. A heat-pump bid that ignores electrical capacity is incomplete. Coordinate with the electrical sub.
8. **Replacement: what's reused vs. replaced.** Replacing a system may reuse existing ducts/venting/fuel line/chimney — or require modifying/replacing them (old ducts may be undersized/leaky, old venting incompatible with a new condensing unit). A bid should clarify what's reused; "drop-in" replacements that ignore duct/venting compatibility can underperform.
9. **Efficiency tier = upfront vs. operating cost tradeoff.** Higher AFUE/HSPF2 (more efficient) = higher equipment cost, lower fuel/electric bills — a payback decision, especially relevant with a long heating season here (efficiency pays back faster). Worth presenting the customer the tiers.
10. **Geothermal + wood are specialized scopes.** Geothermal (loop field/wells — major cost, excellent operating cost, long payback) and wood/pellet (clearances, venting, code ⚠️) are specialized — often separate specialists. Identify early; they touch site work (loops) or have strict install code (wood).
11. **Condensate + freeze protection (cold climate)** ⚠️. Condensing equipment and AC/heat pumps produce condensate needing drainage/pump, and freeze protection matters here (condensate lines, outdoor components, fuel) ⚠️. A cold-climate detail a good bid handles.
12. **Permit + inspection + qualified contractor** ⚠️ — confirm the sub pulls the permit, the work is inspected, and the contractor has the right credentials (mechanical license, EPA for refrigerant, gas/fuel licensing). **No permit/inspection/credentials = major red flag** (CO/fire/gas safety, code, liability). Non-negotiable.

---

# 2. COOLING & HEAT PUMPS (AC, CENTRAL, MINI-SPLITS)

## 2.1 Overview & what's involved

Cooling removes heat (and heat pumps do both heating + cooling). **Refrigerant-based — EPA-regulated ⚠️ — licensed/permitted/inspected.** Cost is driven by **the system type, the capacity (tons, from a load calc ⚠️), ducted vs. ductless, new vs. retrofit, efficiency (SEER2), and the refrigerant/electrical work** ⚠️. In this climate, cooling is secondary to heating but increasingly wanted — and **heat pumps (which cool AND heat) are increasingly the chosen approach** (so this section overlaps heavily with §1).

**System types:**
- **Central air conditioning (ducted)** ⚠️: Outdoor condenser + indoor coil (on the furnace/air handler) + ducts. Cools the whole house through existing/new ductwork. Refrigerant lineset ⚠️ + electrical ⚠️. Common where forced-air heat exists (shares ducts).
- **Air-source heat pump (ducted)** ⚠️: Same hardware as central AC but reverses to also heat (§1) — heats AND cools through ducts. Increasingly the default (one system, both functions). Cold-climate models ⚠️.
- **Ductless mini-split (heat pump or AC)** ⚠️: Outdoor unit + wall/ceiling/floor heads (no ducts) — zoned, efficient, great for retrofits/additions/no-duct homes. Multi-head systems serve multiple rooms/zones. Cold-climate heat-pump models ⚠️. Very popular for retrofit cooling+heating here.
- **Heat pump variants:** Cold-climate (ccASHP), geothermal (ground-source — §1), and air-to-water (heat pump → hydronic) ⚠️.
- **Window/portable AC:** Not really a contractor scope (DIY units) — mentioned only as the low end.
- **Evaporative ("swamp") coolers:** Not used in humid Northeast (work in dry climates only) — not applicable here.

## 2.2 Information needed to scope / check a bid

- **★ Load calculation (Manual J)** ⚠️ — cooling load (and heating, if heat pump) by building/envelope/climate ⚠️. The proper capacity basis.
- **★ System type** — central AC, ducted heat pump, or ductless mini-split (single/multi-head).
- **★ Cooling capacity (tons)** ⚠️ — from the load calc ⚠️ (1 ton = 12,000 BTU/h).
- **★ Heat pump (also heating)?** — if a heat pump, coordinate with §1 (heating + backup ⚠️).
- **★ Ducted vs. ductless** — existing/new ducts (§3) vs. mini-split heads + lineset.
- **★ New vs. retrofit** — adding to existing forced-air (coil + condenser) vs. all-new vs. ductless retrofit.
- **★ Efficiency (SEER2)** — higher = more cost, lower operating cost.
- **★ Refrigerant lineset routing** ⚠️ — distance outdoor↔indoor (EPA-handled ⚠️).
- **★ Electrical** ⚠️ — dedicated circuit(s) + possible service capacity (cross-ref Electrical) ⚠️.
- **★ Outdoor unit location** — placement (pad — cross-ref Concrete; clearances; noise; winter snow/ice).
- **Number of zones/heads (ductless)** — multi-head = more cost.
- **Permit + inspection** ⚠️.

## 2.3 Equipment / material categories (for understanding/checking the bid)

| Category | Unit | Notes (sub installs — licensed ⚠️) |
|---|---|---|
| **Condenser / outdoor unit** | EA | Sized to load ⚠️; SEER2 tier + brand drive cost. |
| **Indoor coil / air handler (ducted)** | EA | On furnace/air handler; matched to outdoor unit. |
| **Mini-split heads (ductless)** | EA | Per zone/room; multi-head = more. |
| **Refrigerant lineset + charge** ⚠️ | LF | EPA-handled ⚠️; length by routing. |
| **Electrical connection / disconnect (by electrician)** ⚠️ | EA | Dedicated circuit ⚠️ (cross-ref Electrical). |
| **Condensate drain / pump + freeze protection** ⚠️ | LF/EA | Drainage; cold-climate freeze protection ⚠️. |
| **Outdoor unit pad / mount (+ snow/ice consideration)** | EA | Pad (cross-ref Concrete) or wall mount; raised for snow here ⚠️. |
| **Thermostat / controls (zoning)** | EA | Per system/zone. |
| **Ducts (if new/modified — §3)** | — | Separate scope (§3). |
| **Line covers / penetration sealing** ⚠️ | LF/EA | Exterior penetration (flashing/sealing — cross-ref exterior) ⚠️. |
| **Permit fee** ⚠️ | EA | Always. |

## 2.4 Labor / cost drivers (for scoping + judging the bid)

| Driver | Effect on cost |
|---|---|
| **System type** | Central AC vs. ducted heat pump vs. ductless (single vs. multi-head) — wide range. |
| **Capacity (load calc)** ⚠️ | Tons sized to load ⚠️. |
| **Ducted vs. ductless** | New ducts (§3) = big; ductless = heads + lineset per zone. |
| **Number of zones/heads** | Each mini-split head/zone adds cost. |
| **New vs. retrofit** | Adding a coil/condenser to existing forced-air is moderate; new ducts or ductless retrofit varies. |
| **Efficiency (SEER2) + brand** | Higher/premium = more. |
| **Lineset routing distance** ⚠️ | Longer/harder refrigerant runs = more. |
| **Electrical (service capacity)** ⚠️ | May force a service upgrade (cross-ref Electrical) ⚠️. |
| **Outdoor unit placement** | Access, pad, clearances, snow/ice height here. |
| **Permit + inspection** ⚠️ | Always. |

**Rough scoping (ranges — verify with the sub + load calc):** **Adding central AC to an existing forced-air system** (coil + condenser + lineset + electrical) is a defined moderate job; a **ducted heat pump** (heats + cools) is more (and may replace the heating system — coordinate §1); a **ductless mini-split** is priced roughly **per zone/head + outdoor unit** (multi-head systems scale up). **The sub's bid (with a load calc ⚠️) is the number.**

## 2.5 Cost-driver & best-practice notes (for reading the bid / coordinating)

1. **⚠️ Refrigerant = EPA-regulated; licensed/permitted/inspected.** Cooling/heat-pump work involves refrigerant handling (EPA-certified ⚠️) and is licensed mechanical work under permit + inspection ⚠️. Caza subs it. Refrigerant cannot be DIY-handled (legal + safety + environmental). Confirm the contractor's EPA credential + permit.
2. **⚠️ Load calc for cooling too (oversizing is worse for AC).** Cooling must be sized to a load calc ⚠️ — and **oversized AC is especially bad**: it short-cycles, cools fast but doesn't run long enough to dehumidify (clammy, uncomfortable), wears out, and costs more. Bigger is NOT better. A load-calc-based bid is the quality signal; rule-of-thumb sizing is a red flag.
3. **Heat pumps increasingly do both — coordinate with heating (§1).** Since a heat pump heats AND cools, choosing one for cooling often means **replacing/supplementing the heating system** too (§1, incl. cold-climate backup ⚠️). This is increasingly the smart approach here (one system, both functions, efficient). If the customer wants AC, a heat pump may be the better whole-system answer — coordinate the heating + cooling scope together, not separately.
4. **Ductless mini-splits are ideal for retrofit cooling+heating here.** No ducts needed (outdoor unit + heads + small lineset penetration), zoned (per-room control), efficient, and cold-climate models heat too ⚠️ — excellent for retrofitting cooling (and supplemental/primary heat) into older no-duct or hydronic-heated homes (common here). Multi-head systems serve multiple rooms. A very common, practical scope in this market.
5. **Ducted requires good ducts (cross-ref §3).** Central AC/ducted heat pumps need adequately sized, sealed ducts (§3) — adding cooling to old, leaky, undersized heating ducts underperforms (poor airflow, hot/cold rooms). A bid should address duct adequacy; "just add a coil" to bad ducts disappoints. Coordinate with §3.
6. **⚠️ Electrical capacity.** AC/heat pumps need dedicated circuits ⚠️ and may require a service/panel upgrade (cross-ref Electrical §1) ⚠️ — especially adding a heat pump for heating (bigger electrical load). A bid ignoring electrical is incomplete. Coordinate with the electrical sub.
7. **⚠️ Outdoor unit placement (cold-climate snow/ice).** The outdoor unit needs proper clearances, a pad/mount, and — **here — to be raised above snow level** ⚠️ (heat pumps run in winter; snow/ice buildup and drainage matter), away from where roof snow/ice dumps on it ⚠️ (cross-ref Roofing). Placement is a real cold-climate consideration. Noise + aesthetics too.
8. **⚠️ Exterior penetration sealing (lineset).** The refrigerant lineset penetrates the exterior wall — that penetration needs proper sealing/flashing ⚠️ (water + air — cross-ref Siding/Insulation) to avoid leaks/drafts. A coordination point with Caza's exterior work. Line covers protect/dress the exterior lineset.
9. **Condensate + freeze protection** ⚠️ — cooling produces condensate (drain/pump), and cold-climate freeze protection matters ⚠️. A good bid handles condensate properly (a clogged/frozen condensate line causes water damage).
10. **Efficiency (SEER2) tradeoff.** Higher SEER2 = more upfront, lower cooling-season operating cost — a smaller factor here than heating efficiency (short cooling season), but relevant for heat pumps (where the same unit's heating efficiency, HSPF2, matters a lot over the long heating season).
11. **Permit + inspection + EPA-certified contractor** ⚠️ — confirm the permit, inspection, and the contractor's EPA + mechanical credentials. **No permit/EPA credential = major red flag.** Non-negotiable.
12. **Window/portable/evaporative aren't contractor scopes here** — window/portable units are DIY (not a Caza scope), and evaporative coolers don't work in the humid Northeast. If a customer asks, redirect to proper systems (mini-split for no-duct cooling).

---

# 3. DUCTWORK & DISTRIBUTION (DUCTED FORCED-AIR OR HYDRONIC)

## 3.1 Overview & what's involved

Distribution delivers the heating/cooling through the building — **ducted forced-air** (sheet-metal/flex ducts, registers) or **hydronic** (water through pipes to baseboard/radiators/radiant). **Licensed/permitted; sizing is a calc (Manual D) ⚠️.** Cost is driven by **the distribution type, the duct/pipe runs + complexity, new vs. retrofit (fitting distribution into finished space is the big swing), sizing/design ⚠️, sealing/insulation of ducts, and the registers/terminals.** Distribution is often a large share of an HVAC job — and **poorly designed/sealed distribution wastes a good system** (the #1 hidden performance issue).

**Distribution types:**
- **Ducted forced-air:**
  - **Sheet-metal ducts** — rigid, durable, main trunks/runs. ⚠️ sized (Manual D).
  - **Flex duct** — flexible insulated runs (branches) — easier, but must be installed well (no kinks/sags ⚠️).
  - **Duct sizing + design (Manual D)** ⚠️ — proper sizing/layout for airflow (CFM) to each room ⚠️.
  - **Registers/grilles/diffusers** (supply) + **return air** (grilles/returns — adequate return is often shortchanged ⚠️).
  - **Zoning** (dampers + controls for multi-zone) ⚠️.
  - **Duct sealing + insulation** ⚠️ — seal leaks (mastic/tape) + insulate ducts in unconditioned space ⚠️ (huge efficiency factor).
- **Hydronic (water) distribution:**
  - **Baseboard (fin-tube)** — common Northeast; hot water through baseboard units.
  - **Radiators** (cast-iron/panel) — older/retrofit.
  - **Radiant floor** — tubing in/under floor — comfortable, efficient, premium (new construction/retrofit ⚠️).
  - **Piping, circulators (pumps), manifolds, zone valves** ⚠️ — the hydronic network + controls.
- **Ductless** — no distribution network (heads serve the space directly — §1/§2).

## 3.2 Information needed to scope / check a bid

- **★ Distribution type** — forced-air (ducts) vs. hydronic (baseboard/radiant) vs. ductless (none).
- **★ Duct/pipe sizing + design (Manual D)** ⚠️ — proper airflow/flow to each room ⚠️.
- **★ New vs. retrofit** ⚠️ — new (open framing) vs. retrofitting distribution into finished space (the big swing — chases, soffits, disruption).
- **★ Building size / room count / layout** — runs + registers/terminals.
- **★ Existing distribution** — reuse/modify existing ducts/hydronic (condition, size, leakage) vs. new.
- **★ Register/terminal count** — supplies + returns (forced-air); baseboard LF / radiator count / radiant area (hydronic).
- **★ Duct material** — sheet metal vs. flex (or mix).
- **★ Duct location** ⚠️ — conditioned vs. unconditioned space (attic/crawl — needs insulation + sealing ⚠️).
- **★ Zoning** ⚠️ — single vs. multi-zone (dampers/controls or multiple hydronic zones).
- **★ Duct sealing + insulation** ⚠️ — included? (efficiency-critical ⚠️).
- **Radiant: floor type/assembly** ⚠️ — affects install (in-slab, under-floor, etc.).
- **Permit + inspection** ⚠️.

## 3.3 Material categories (for understanding/checking the bid)

| Category | Unit | Notes (sub installs — licensed ⚠️) |
|---|---|---|
| **Sheet-metal duct (trunks/runs) + fittings** | LF/EA | Sized ⚠️; fabricated. |
| **Flex duct (insulated branches)** | LF | Branch runs; install quality matters ⚠️. |
| **Registers / grilles / diffusers (supply)** | EA | Per supply outlet. |
| **Return air grilles / ducts** ⚠️ | EA/LF | Adequate return often shortchanged ⚠️. |
| **Duct insulation + sealing (mastic/tape)** ⚠️ | SF/LF | Ducts in unconditioned space ⚠️ — efficiency-critical. |
| **Zoning dampers + controls** ⚠️ | EA | Multi-zone forced-air. |
| **Hydronic: baseboard (fin-tube)** | LF | Per heat-loss/room ⚠️. |
| **Hydronic: radiators / panel rads** | EA | Per room. |
| **Hydronic: radiant tubing + manifolds** ⚠️ | LF/EA | Radiant floor (in/under floor) ⚠️. |
| **Hydronic: piping + circulators (pumps) + zone valves + expansion/controls** ⚠️ | LF/EA | The hydronic network ⚠️. |
| **Boots, plenums, takeoffs, balancing dampers** | EA | Duct connections + balancing. |
| **Permit fee** ⚠️ | EA | Always. |

## 3.4 Labor / cost drivers (for scoping + judging the bid)

| Driver | Effect on cost |
|---|---|
| **Distribution type** | Ducted (fabricate/install) vs. hydronic (pipe/baseboard/radiant) vs. ductless (none) — major. |
| **New vs. retrofit** ⚠️ | **Biggest swing** — open framing vs. fishing ducts/pipe into finished space (chases, soffits, demo, disruption). |
| **Sizing/design complexity (Manual D)** ⚠️ | Proper design ⚠️; complex layouts, long runs, multi-story. |
| **Run count + length + register/terminal count** | More runs/registers/baseboard = more labor + material. |
| **Duct material (sheet metal vs. flex)** | Sheet metal = more fabrication labor; flex = faster (but quality-sensitive ⚠️). |
| **Duct location (unconditioned)** ⚠️ | Insulation + sealing required ⚠️ — adds scope. |
| **Zoning** ⚠️ | Dampers/controls or multiple hydronic zones add cost. |
| **Radiant floor** ⚠️ | Premium labor (tubing layout, floor assembly) ⚠️. |
| **Duct sealing + insulation** ⚠️ | Real labor — but efficiency-critical (don't skip). |
| **Permit + inspection** ⚠️ | Always. |

**Rough scoping (ranges — verify with the sub):** **New ductwork** for a house is a major labor + material scope (often a large share of a forced-air system cost); **hydronic** (baseboard/radiant) is likewise significant (radiant floor = premium); **retrofitting distribution into finished space** is the costliest path (disruption). **The sub's bid (with a Manual D design ⚠️) is the number** — judge whether the design, sealing/insulation, and return air are properly included.

## 3.5 Cost-driver & best-practice notes (for reading the bid / coordinating)

1. **⚠️ Licensed/permitted; distribution sizing is a calc (Manual D).** Distribution is part of the licensed, permitted, inspected HVAC scope, and **duct/hydronic sizing is an engineering calc (Manual D)** ⚠️ — proper airflow (CFM)/flow to each room. Caza subs it. Undersized/poorly designed distribution = hot/cold rooms, poor airflow, wasted equipment. A design-based bid is the quality signal.
2. **⚠️ Poorly designed/sealed/insulated distribution wastes a good system — the #1 hidden issue.** The best furnace/heat pump underperforms through leaky, undersized, uninsulated ducts (or an undersized hydronic loop). **Duct sealing (leaks waste 20–30%+) and insulating ducts in unconditioned space are efficiency-critical** ⚠️ — and frequently shortchanged in cheap bids. **Check that the bid includes proper sizing, sealing, and insulation** — this is where corners get cut and performance is lost. A cheap bid skipping these is a false economy.
3. **New vs. retrofit is the biggest distribution cost swing.** Running new ducts/pipe in open framing (new construction) is straightforward; **retrofitting distribution into a finished house** (chases, dropped soffits, opening walls/ceilings, working around structure) is disruptive and costly ⚠️. This is often why **ductless mini-splits win for retrofits** (no distribution network — §1/§2). A retrofit duct bid should reflect the disruption; if it's priced like new work, something's off.
4. **⚠️ Return air is often shortchanged.** Forced-air systems need adequate return air (back to the equipment) — undersized/missing returns cause pressure imbalances, poor airflow, comfort, and efficiency problems ⚠️. Cheap bids often skimp on returns. Check that returns are properly sized/located, not an afterthought.
5. **Duct location matters (keep them in conditioned space if possible).** Ducts in unconditioned attics/crawls lose energy (even insulated) and must be well-sealed + insulated ⚠️ — keeping distribution within the conditioned envelope (or sealing/insulating rigorously) is best practice (cross-ref Insulation Manual). A design consideration affecting efficiency + cost.
6. **Hydronic (baseboard/radiant) is comfortable + common here.** Baseboard (fin-tube) is the Northeast standard (boiler + §1); radiant floor is premium comfort/efficiency (great with a heat pump or condensing boiler). Hydronic = piping + circulators + zone valves + controls ⚠️ — sized to heat loss per room ⚠️. No ducts (a plus where ducts are hard). Radiant floor is a premium new-construction/major-retrofit scope.
7. **Zoning improves comfort + efficiency (adds cost).** Multi-zone (forced-air dampers + controls, or multiple hydronic zones) lets different areas be controlled separately — better comfort + efficiency, more cost. Relevant for larger/multi-level homes. A real upgrade to discuss.
8. **Flex vs. sheet metal — quality of install matters.** Flex duct is faster/cheaper but must be installed well (pulled tight, no kinks/sags/excess length ⚠️ — which kill airflow); sheet metal is more durable/fabrication labor. Poorly installed flex is a common performance problem. Both fine done right.
9. **Coordinate distribution with framing/structure/finishes.** New ducts/pipe must be coordinated with framing (joist/wall space, chases — cross-ref Framing), and retrofit distribution affects finishes (soffits, patching — cross-ref Drywall/Interior). A real multi-trade coordination point for Caza (and ducts/pipe rough-in sequences with the other rough-ins, before insulation/drywall).
10. **Balancing.** A good install is balanced (dampers adjusted so each room gets its designed airflow/heat) — a finishing step that makes the difference between "installed" and "working right." A quality sub balances the system.
11. **Radiant floor coordinates with the floor assembly.** Radiant tubing (in-slab — cross-ref Concrete; or under-floor) must be coordinated with the floor construction ⚠️ — a sequencing + design point (and affects floor finishes). Plan early if radiant is in scope.
12. **Permit + inspection + proper design** ⚠️ — confirm the permit, inspection, and that the distribution is designed (Manual D ⚠️), sealed, and insulated — not just thrown in. **Skipped sealing/insulation/sizing = a performance red flag** even if the equipment is good.

---

# 4. VENTILATION & AIR QUALITY (EXHAUST, HRV/ERV, MAKEUP AIR, COMBUSTION SAFETY)

## 4.1 Overview & what's involved

Ventilation manages air quality + moisture: **exhaust (bath/kitchen), whole-house ventilation (HRV/ERV), makeup/combustion air, and air-quality equipment.** Critically tied to a **tight, well-insulated cold-climate house** ⚠️ — sealing the envelope (cross-ref Insulation Manual §5) **requires** mechanical ventilation for indoor air quality + moisture control ⚠️ (you can't just seal a house tight and ignore air exchange). **Licensed/permitted (combustion-air is safety-critical ⚠️).** Cost is driven by **the ventilation type/strategy, the equipment (HRV/ERV vs. simple exhaust), the ducting, and combustion-safety needs** ⚠️.

**Scope elements:**
- **Local exhaust:**
  - **Bath fans** — exhaust moisture/odor; **must vent to exterior** ⚠️ (not attic/soffit — cross-ref Roofing/Insulation; moisture/mold). (Fan = electrical — cross-ref Electrical §3; duct + exterior cap = coordination.)
  - **Kitchen range hood** — exhaust cooking moisture/grease; vented (or recirc — less effective); makeup air for large hoods ⚠️.
  - **Dryer exhaust** — vent to exterior ⚠️ (lint/fire — clean runs ⚠️).
- **Whole-house ventilation (key in tight cold-climate homes)** ⚠️:
  - **HRV (Heat Recovery Ventilator)** — exchanges stale inside air for fresh outside air **while recovering heat** ⚠️ (essential in a tight cold-climate house — fresh air without dumping heat). Ducted.
  - **ERV (Energy Recovery Ventilator)** — like HRV but also manages humidity transfer — climate/use-dependent ⚠️.
  - **Exhaust-only / supply / balanced** ventilation strategies ⚠️.
- **Makeup / combustion air** ⚠️: A tight house + combustion equipment (furnace/boiler/water heater/range/fireplace) and big exhaust (range hoods) can create negative pressure that **backdrafts combustion gases (CO!) ⚠️** — makeup/combustion air provisions are safety-critical ⚠️ (cross-ref §1 combustion safety). Sealed-combustion equipment helps.
- **Air quality equipment:** Filtration (media/HEPA), air cleaners, UV, dehumidifiers/humidifiers, fresh-air intakes — add-ons for IAQ/comfort.
- **Duct/system cleaning** — a service offering (not install).

## 4.2 Information needed to scope / check a bid

- **★ Ventilation strategy** ⚠️ — exhaust-only vs. balanced vs. HRV/ERV (driven by house tightness ⚠️ + code + climate).
- **★ House tightness / envelope** ⚠️ — a tight, air-sealed house (cross-ref Insulation §5) **needs** whole-house ventilation ⚠️ (the key driver here).
- **★ Exhaust points** — baths (count), kitchen hood, dryer — each vented to exterior ⚠️.
- **★ HRV/ERV?** — whole-house unit + ducting (new tight homes / deep retrofits) ⚠️.
- **★ Combustion equipment + makeup/combustion air** ⚠️ — furnace/boiler/water heater/range/fireplace present? Negative-pressure/backdraft risk ⚠️ (safety).
- **★ Big exhaust (large range hood)** ⚠️ — may require makeup air ⚠️.
- **★ Air quality goals** — filtration, humidity control, allergies/IAQ concerns.
- **★ Exterior penetrations** ⚠️ — exhaust/intake terminations (flashing/sealing — cross-ref exterior) ⚠️.
- **Existing ventilation** — what's there (or not).
- **Permit + inspection** ⚠️.

## 4.3 Equipment / material categories (for understanding/checking the bid)

| Category | Unit | Notes (sub installs — licensed ⚠️) |
|---|---|---|
| **Bath exhaust fans + duct to exterior + cap** ⚠️ | EA | Vent outside ⚠️ (cross-ref Roofing/Insulation/Electrical). |
| **Range hood + exhaust duct + cap (+ makeup air if large)** ⚠️ | EA | Vented; makeup air for big hoods ⚠️. |
| **Dryer vent + duct + cap** ⚠️ | EA | Exterior; lint/fire-safe run ⚠️. |
| **HRV / ERV unit + ducting + controls** ⚠️ | EA | Whole-house balanced ventilation ⚠️ (tight homes). |
| **Makeup / combustion air provisions** ⚠️ | EA | Safety-critical (backdraft/CO) ⚠️. |
| **Filtration / air cleaner / UV** | EA | IAQ add-ons. |
| **Dehumidifier / humidifier** | EA | Humidity control. |
| **Fresh-air intake + ducting** | EA/LF | Controlled fresh air. |
| **Exterior terminations (caps/hoods) + flashing/sealing** ⚠️ | EA | Penetration detailing (cross-ref exterior) ⚠️. |
| **Controls / sensors (humidity, CO, timers)** | EA | + CO detectors (safety ⚠️). |
| **Permit fee** ⚠️ | EA | Often part of the HVAC permit. |

## 4.4 Labor / cost drivers (for scoping + judging the bid)

| Driver | Effect on cost |
|---|---|
| **Ventilation strategy** ⚠️ | Simple exhaust fans vs. whole-house HRV/ERV (unit + ducting) — wide range. |
| **HRV/ERV + ducting** ⚠️ | Whole-house unit + dedicated ducting = significant. |
| **Exhaust point count** | Baths/hood/dryer — each + its duct to exterior. |
| **New vs. retrofit** | Running vent ducts into finished space = harder. |
| **Makeup/combustion air** ⚠️ | Safety provisions — added scope (esp. tight house + combustion + big hood). |
| **Air quality equipment** | Filtration/humidity/UV add-ons. |
| **Exterior penetrations** ⚠️ | Each termination = a sealed/flashed penetration (coordination). |
| **Permit + inspection** ⚠️ | Combustion-air safety inspected ⚠️. |

**Rough scoping (ranges — verify with the sub):** **Bath/dryer/range exhaust** = modest per-point jobs (fan/hood + duct + exterior cap); **a whole-house HRV/ERV** = a significant defined scope (unit + ducting + controls); **makeup/combustion air** = a safety-driven add. **The sub's bid is the number** — and in a tight cold-climate house, **whole-house ventilation isn't optional** ⚠️ (IAQ + moisture).

## 4.5 Cost-driver & best-practice notes (for reading the bid / coordinating)

1. **⚠️ Tight + insulated house REQUIRES mechanical ventilation — the key cold-climate principle.** Air-sealing + insulating a house (cross-ref Insulation Manual §5) reduces natural air exchange, so a tight house **needs** mechanical ventilation (HRV/ERV or a balanced strategy) for indoor air quality + moisture control ⚠️ — **you cannot seal a house tight and ignore ventilation** (stale air, high humidity, condensation, IAQ problems, mold). **This is THE link between Caza's insulation/air-sealing work and HVAC** — a serious envelope-tightening job should include a ventilation plan ⚠️. Flag this whenever insulation/air-sealing is in scope.
2. **⚠️ HRV/ERV recovers heat — essential for fresh air without losing heat (cold climate).** In a cold climate, dumping stale air and bringing in cold fresh air wastes heat — an **HRV recovers that heat** ⚠️ (transfers it from outgoing to incoming air), giving fresh air efficiently. ERV also manages humidity ⚠️. For tight new homes / deep retrofits here, an HRV/ERV is the right whole-house ventilation. A significant but important scope.
3. **⚠️ Exhaust fans MUST vent to the exterior — not the attic.** Bath fans, range hoods, and dryers must vent **outside** ⚠️ — venting into the attic/soffit dumps moisture (and lint/grease) where it causes mold, rot, and fire risk ⚠️ (cross-ref Roofing/Insulation). A shockingly common defect. **Check that every exhaust terminates outside with a proper cap** — a coordination point with Caza's exterior/roofing work (fan = electrical/HVAC; duct + exterior cap = Caza's exterior).
4. **⚠️ Combustion/makeup air = CO safety (tight house + combustion + big exhaust).** A tight house with combustion equipment (furnace/boiler/water heater/fireplace) and powerful exhaust (large range hoods) can go negative-pressure and **backdraft combustion gases — carbon monoxide — into the house** ⚠️ (deadly). Makeup/combustion-air provisions are safety-critical ⚠️ (and sealed-combustion equipment avoids it — cross-ref §1). **This is a life-safety interaction a good HVAC contractor addresses** — flag it when there's combustion + tightening + big exhaust. CO detectors essential.
5. **Ventilation is the most-ignored part of HVAC — and a quality/health signal.** Many systems/bids focus on heating/cooling and neglect ventilation — but in a tight modern/retrofit home it's essential for health + moisture ⚠️. **A bid that addresses ventilation (especially with envelope work) is a quality signal**; one that ignores it on a tight house is incomplete. Raise it proactively with customers.
6. **Exterior penetrations need sealing/flashing (coordination).** Every exhaust/intake termination penetrates the exterior — those penetrations need proper flashing/sealing ⚠️ (water + air — cross-ref Siding/Roofing/Insulation) to avoid leaks/drafts. A coordination point with Caza's exterior work; unsealed vent penetrations leak.
7. **Range-hood makeup air for big hoods** ⚠️. Large/powerful kitchen hoods move a lot of air and may require dedicated makeup air ⚠️ (to avoid negative pressure/backdraft) — a code + safety consideration on bigger kitchens. A bid for a large hood should address it.
8. **Dryer vent: short, smooth, clean runs (lint/fire)** ⚠️. Dryer exhaust runs should be as short/smooth as possible and accessible for cleaning ⚠️ — long/kinked/dirty runs are a fire hazard (lint) and reduce dryer performance. A real safety + performance detail.
9. **Air quality add-ons (filtration/humidity/UV).** Better filtration (media/HEPA), humidity control (dehumidifier/humidifier), and UV/air cleaners improve IAQ/comfort — add-ons worth offering for allergies, dry winters (humidifier), or damp basements (dehumidifier). Real options, not essentials.
10. **Coordinate ventilation with envelope + electrical + exterior.** Ventilation ties to insulation/air-sealing (the reason it's needed ⚠️), electrical (fans/HRV power — cross-ref Electrical), and exterior (terminations/flashing). A real multi-trade coordination point — Caza is well-positioned to coordinate it since the envelope + exterior are Caza's work.
11. **CO + smoke detectors (life safety)** ⚠️. Any combustion in the house = CO detectors are essential ⚠️ (+ smoke detectors) — a cheap, critical life-safety item. Confirm they're addressed (often electrical/code — cross-ref Electrical).
12. **Permit + inspection (combustion-air safety)** ⚠️ — confirm the permit and inspection, especially for combustion-air/backdraft safety ⚠️ in tight houses. **Ignored ventilation/combustion-air on a tight combustion house = a safety red flag** (CO + moisture), not just a comfort issue.

---

# APPENDIX — Cross-system HVAC principles (for scoping & checking bids)

1. **⚠️ HVAC is a licensed, specialized, permitted, inspected trade — Caza subs it.** Heating, cooling, distribution, and ventilation require a **licensed mechanical/HVAC contractor + permit + inspection + code compliance**, plus **EPA certification (refrigerant) ⚠️ and gas/fuel licensing ⚠️**. This manual is for **scoping, coordinating, and checking the sub's bid** — NOT for performing HVAC or as an install how-to. The estimate = the qualified sub's bid + Caza coordination/markup, always noting the licensed-contractor + permit + load-calc requirement ⚠️. Frame output as **scope + estimated range + "verify with a licensed HVAC contractor's bid + load calc."**
2. **⚠️ A proper load calculation (Manual J/D/S) is the foundation — rule-of-thumb sizing is a red flag.** Equipment AND distribution must be sized to real calcs ⚠️ (heat loss/gain, duct/flow design, equipment selection) — NOT "X BTU per square foot." **Oversizing is a common, real problem** (short-cycling, poor comfort/humidity, wear, wasted money); undersizing won't keep up in a cold snap. **A load-calc-based bid is the single biggest quality signal; rule-of-thumb sizing is a red flag.** Always ask for the load calc.
3. **⚠️ The envelope sets the load — HVAC and insulation are linked.** A tighter, better-insulated house (cross-ref Insulation Manual) needs **smaller, cheaper equipment** and runs cheaper — AND **requires mechanical ventilation** ⚠️ (a tight house can't be left unventilated). **Caza's insulation/air-sealing work directly affects the HVAC sizing + ventilation needs** — coordinate them: improve the envelope, right-size the equipment, add ventilation. This is the most important cross-trade link in the whole library.
4. **Cold climate drives the priorities here.** Heating dominates (long season, deep cold); cold-climate heat pumps + backup heat is a live decision ⚠️; fuel choice (propane/oil/electric/wood) is significant; freeze protection matters; combustion-air/CO safety in tight houses is critical ⚠️; and outdoor units need snow/ice consideration ⚠️. Weight scoping toward heating performance + reliability + cold-climate realities.
5. **⚠️ Combustion + refrigerant + gas safety are why this is licensed.** CO (combustion/backdraft ⚠️), refrigerant (EPA ⚠️), and fuel gas (leak/explosion ⚠️) are life-safety/regulated — improper work kills. A core reason Caza subs HVAC and the work is inspected. CO detectors are essential with any combustion ⚠️. The manual flags these; it doesn't instruct on them.
6. **Heat pumps increasingly do both heating + cooling — scope them together.** Since a heat pump heats AND cools, a cooling request often means a whole-system heat-pump decision (incl. cold-climate backup ⚠️) — and ductless mini-splits are ideal for retrofitting both into older/no-duct homes here. Don't scope heating and cooling in isolation when a heat pump answers both.
7. **Distribution makes or breaks the system — check sizing, sealing, insulation, returns.** The best equipment underperforms through leaky/undersized/uninsulated ducts or an undersized hydronic loop ⚠️. **Duct sealing + insulation (unconditioned space) + adequate return air are efficiency-critical and frequently shortchanged** — a cheap bid cutting these is a false economy. A major bid-quality check.
8. **New vs. retrofit is the biggest labor swing** (equipment + distribution) — open framing vs. fitting equipment/ducts/pipe into finished space (disruption, chases, demo). It's why ductless often wins retrofits. A retrofit bid should reflect the disruption; if priced like new work, question it.
9. **One combined view of the cost: equipment tier + capacity + distribution + new-vs-retrofit + fuel/venting/electrical.** Give **ranges**, not false precision (regional/sub/equipment-tier variation is wide). Coordinate the electrical (dedicated circuits, possible service upgrade ⚠️ — cross-ref Electrical) and the pad/penetrations/venting (cross-ref Concrete/exterior).
10. **Cross-references:** **envelope/load + ventilation need** ↔ Insulation Manual (THE key link ⚠️); **dedicated circuits + service capacity** ↔ Electrical Manual ⚠️; **outdoor unit pad / generator pad** ↔ Concrete Manual; **exhaust/lineset/vent penetrations (flashing/sealing) + outdoor unit snow** ↔ Roofing/Siding; **duct/pipe chases + radiant floor assembly** ↔ Framing/Concrete; **rough-in (ducts/pipe) before insulation/drywall** ↔ Insulation/Interior Finish (sequencing). **Permit + inspection + qualified (licensed/EPA/gas) contractor are non-negotiable red-flag checks.** Coordinate the HVAC sub with the trades it touches; confirm the *whole* system (load calc + equipment + distribution + ventilation + safety + sequence), not just the box.

*End of HVAC estimating manual. Built in the same scoping & sub-bid-reference format as the Electrical manual — HVAC is a licensed, permitted, inspected, specialized trade that Caza subs; the ⚠️ LICENSED/CODE flags mark where a licensed HVAC contractor + permit + inspection + code/EPA/gas credentials + a proper load calculation are required. This manual is NOT an install how-to and does not substitute for a licensed HVAC contractor.*
