# Locations Hub + 20 Suburb Pages — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build `/locations/index.html` (hub) and 20 suburb pages at `/locations/[slug]/index.html`, replacing existing placeholder shells with fully SEO-optimised, content-rich pages.

**Architecture:** Each location page mirrors the service page structure — hero → ticker → services grid → why GemElec → stats bar → quote form → emergency CTA → footer. All 21 files are pure HTML with page-specific `<style>` blocks. Shared nav/footer HTML copied verbatim from service pages except Locations trigger gets `active` class instead of Services.

**Tech Stack:** Plain HTML5, CSS custom properties (`/assets/css/main.css`, `/assets/css/components.css`), vanilla JS (`/assets/js/main.js`), Netlify Forms, Google Fonts (Barlow Condensed 900 + Inter 400/600/700).

---

## File Map

| Action | Path | Responsibility |
|--------|------|---------------|
| Overwrite | `locations/index.html` | Hub page — 20-card suburb grid |
| Overwrite | `locations/matraville/index.html` | Suburb page |
| Overwrite | `locations/botany/index.html` | Suburb page |
| Overwrite | `locations/mascot/index.html` | Suburb page |
| Overwrite | `locations/randwick/index.html` | Suburb page |
| Overwrite | `locations/coogee/index.html` | Suburb page |
| Overwrite | `locations/bondi/index.html` | Suburb page |
| Overwrite | `locations/surry-hills/index.html` | Suburb page |
| Overwrite | `locations/newtown/index.html` | Suburb page |
| Overwrite | `locations/kingsford/index.html` | Suburb page |
| Overwrite | `locations/kensington/index.html` | Suburb page |
| Overwrite | `locations/zetland/index.html` | Suburb page |
| Overwrite | `locations/alexandria/index.html` | Suburb page |
| Overwrite | `locations/waterloo/index.html` | Suburb page |
| Overwrite | `locations/redfern/index.html` | Suburb page |
| Overwrite | `locations/paddington/index.html` | Suburb page |
| Overwrite | `locations/marrickville/index.html` | Suburb page |
| Overwrite | `locations/sydenham/index.html` | Suburb page |
| Overwrite | `locations/wolli-creek/index.html` | Suburb page |
| Overwrite | `locations/rockdale/index.html` | Suburb page |
| Overwrite | `locations/brighton-le-sands/index.html` | Suburb page |
| Create | `docs/superpowers/plans/2026-03-25-feat-locations.md` | This plan |

---

## Unique Content Per Suburb

Use this table when filling in each page. All other HTML is identical to the Matraville reference template in Task 3.

| Suburb | Slug | Meta Description (140–155 chars) | Para 1 | Para 2 | 4th Stat | 4th Label |
|--------|------|----------------------------------|--------|--------|----------|-----------|
| Matraville | matraville | Licensed electrician in Matraville, Sydney. GemElec is based on Bunnerong Road — fast local response for homes, units & light commercial. Call 0498 351 351. | GemElec is based right here on Bunnerong Road, Matraville — so when you call, response times are measured in minutes, not hours. The suburb's mix of post-war brick homes, light industrial pockets near Port Botany, and newer townhouse developments means our team handles everything from ageing fuse boards in 1960s houses to three-phase power for small workshops on the same day. | Matraville sits at the edge of the Botany Industrial Park, which means a significant number of properties here carry commercial-grade demands on older residential infrastructure. We regularly upgrade switchboards, install dedicated circuits for home offices and garages, and bring properties up to current AS/NZS 3000 wiring standards — all while keeping the mess and disruption to a minimum. | 2km | From Our Depot |
| Botany | botany | Licensed electrician in Botany, Sydney. GemElec services homes and businesses near the Botany industrial precinct. Same-day availability. Call 0498 351 351. | Botany sits at the meeting point of working-class residential streets and one of Australia's busiest industrial precincts — and that mix shows up in the electrical work we do here every week. Older brick houses along Botany Road often carry the original fuse wire boards installed decades ago, and upgrading to a modern safety switch-protected switchboard is one of the most common jobs we complete in the area. | With Port Botany just to the east and Sydney Airport to the north, properties in Botany can experience higher-than-average vibration and noise, which over time can loosen connections and degrade cable terminations. We carry out thorough condition assessments on older wiring and complete permanent repairs — not just make-safe patches — so your electrical system is reliable for the long term. | 5 min | To Port Botany |
| Mascot | mascot | Licensed electrician in Mascot, Sydney. GemElec handles apartments, commercial and airport-corridor properties near Sydney Airport. Call 0498 351 351. | Mascot has transformed rapidly over the last decade — the station precinct is now surrounded by high-rise apartment towers, while older streets to the south still carry the original low-density residential character. This mix means our Mascot jobs range from fault-finding in brand-new apartments with complex sub-metering systems to full rewires in 1970s brick veneer homes where the original wiring has reached the end of its service life. | Proximity to Sydney Airport creates some unique demands for Mascot properties: flight path vibration, the need for noise-reducing solutions in home offices, and the heavy foot traffic of short-stay rental properties where electrical systems get hard use year-round. We work across all of it — strata common areas, individual units, small commercial tenancies, and everything in between. | 3 km | From Sydney Airport |
| Randwick | randwick | Licensed electrician in Randwick, Sydney. GemElec services heritage terraces, UNSW student properties and Prince of Wales Hospital precinct. Call 0498 351 351. | Randwick is home to UNSW Sydney and Prince of Wales Hospital — two anchor institutions that shape the suburb's character in every direction. Student share houses and boarding properties cluster around the university, and these see some of the heaviest electrical demand of any residential category: multiple occupants, high appliance loads, and frequent tenancy changeovers that mean wiring faults often go unreported until they become urgent. | Heritage terrace houses line many of Randwick's residential streets, and working in these properties requires care and experience. Original wiring hidden behind ornate cornices, switchboards tucked into cupboards under stairs, and strict council guidelines on facade alterations all come into play. Our team has worked extensively in the Randwick heritage overlay area and knows how to achieve modern electrical safety standards without compromising the character of the building. | UNSW | Precinct Covered |
| Coogee | coogee | Licensed electrician in Coogee, Sydney. GemElec handles coastal salt-air corrosion, weatherproof installs and beachside apartment electrical. Call 0498 351 351. | Coogee's position on the coast comes with an electrical challenge that many property owners underestimate: salt-laden sea air accelerates corrosion of electrical fittings, switchboard components, and outdoor cable terminations faster than almost any other environment. We regularly inspect and replace corroded switchboard busbars, corroded outdoor GPOs, and degraded weatherproof fittings in Coogee — work that's often overdue by the time it gets noticed. | The suburb's housing mix covers everything from full-floor beachfront apartments on Coogee Bay Road to Federation-era weatherboard cottages on the hillside streets inland. Demand for outdoor entertaining electrical — weatherproof power points, garden lighting, heated outdoor areas — is high here given the lifestyle, and we install all of it to IP-rated standards that will hold up in the marine environment for years, not months. | Marine | Electrical Specialists |
| Bondi | bondi | Licensed electrician in Bondi, Sydney. GemElec handles high-density apartments, weatherproof outdoor work and heritage homes near Bondi Beach. Call 0498 351 351. | Bondi's density is remarkable — apartment buildings line Campbell Parade and the streets fanning back from the beach, and almost every block contains a mix of heritage Art Deco flats and newer high-rise developments. Strata electrical work is a significant part of what we do here: common area lighting, basement carpark circuits, rooftop antenna and solar connections, and sub-board repairs in complexes where the original 1960s infrastructure is still in service. | Heritage homes on the hillside streets above the beach present a different challenge — beautiful sandstone and brick exteriors that owners rightly want to preserve, hiding wiring that has sometimes not been touched in forty years. We carry out condition reports, full rewires, and targeted upgrades with minimal surface damage, using flexible conduit and careful routing to bring these homes up to current standards without visible intrusion on the period character. | Bondi | Beach to North Bondi |
| Surry Hills | surry-hills | Licensed electrician in Surry Hills, Sydney. GemElec services heritage terraces, Crown St commercial and inner-city apartments. Call 0498 351 351. | Surry Hills has gentrified dramatically but its bones remain Victorian and Edwardian — terrace houses with original wiring runs hidden in walls that have been renovated multiple times, layering modern fit-outs over century-old cable routes. The Crown Street and Cleveland Street commercial strips add another dimension: cafés, restaurants, and small bars with high-current kitchen equipment, outdoor area lighting, and point-of-sale systems all requiring dedicated circuits and regular safety testing. | The suburb's inner-city density means parking and access can be challenging for tradespeople — our vans are small enough to navigate the back lanes, and our team is experienced at working in tight heritage properties where drilling through original timber floors or sandstock brick needs to be done with precision. We're familiar with the Surry Hills heritage overlay area and work regularly with owners and builders managing period-accurate renovations. | Crown St | Corridor Covered |
| Newtown | newtown | Licensed electrician in Newtown, Sydney. GemElec handles King St small business electrical, heritage terraces and inner west residential. Call 0498 351 351. | Newtown's King Street strip is one of Sydney's most densely packed small-business corridors — independent venues, cafés, studios, and retail tenancies that depend on reliable electrical systems to keep trading. We carry out commercial electrical work for small businesses along King Street and Enmore Road: new tenancy fit-outs, three-phase power upgrades, extraction fan wiring, and test-and-tag compliance for venues that need to meet their lease obligations. | The residential streets behind King Street are mostly heritage terrace houses with a mix of long-term owner-occupiers and short-term renters, and the electrical profiles differ significantly between the two. Heritage homes often have original wiring in the roof space and a switchboard that hasn't been touched since the 1980s. We carry out staged upgrades — new switchboard first, then circuit-by-circuit rewiring as budgets allow — so Newtown homeowners can modernise without taking on the full cost at once. | King St | To Enmore Rd |
| Kingsford | kingsford | Licensed electrician in Kingsford, Sydney. GemElec services UNSW student housing, Anzac Pde commercial and older Kingsford residential. Call 0498 351 351. | Kingsford sits on Anzac Parade and stretches back toward UNSW, making it one of the highest-density student-accommodation precincts in Sydney. Share houses and purpose-built student towers in this area run electrical loads that their original wiring was never designed to handle — multiple occupants, banks of device chargers, and gaming setups on circuits designed for 1960s appliance use. Switchboard upgrades with RCD protection on every circuit are one of the most common jobs we complete in Kingsford. | Anzac Parade's commercial strip from Kingsford through to Kensington carries a mix of small restaurants, takeaways, and service businesses — all with kitchens that require dedicated high-current circuits, extraction systems, and regular test-and-tag compliance. Our team knows the strip well and has completed commercial fit-outs, three-phase upgrades, and fault-finding jobs for businesses here that needed fast turnaround to stay trading. | UNSW | Surrounds Covered |
| Kensington | kensington | Licensed electrician in Kensington, Sydney. GemElec services Royal Randwick Racecourse precinct, UNSW and Kensington heritage residential. Call 0498 351 351. | Kensington is quiet by inner-Sydney standards — wide streets lined with Federation and interwar homes, the racecourse occupying a large footprint at the suburb's centre, and the UNSW campus anchoring the northern edge. The character housing stock means our work here leans toward careful, heritage-sensitive electrical upgrades: rewiring through plaster ceilings, switchboard replacements in homes with original ceramic fuse carriers, and the installation of modern lighting in rooms with ornate cornices that need to be preserved. | The racecourse precinct and surrounding hospitality venues add a commercial dimension to Kensington's electrical demand — event lighting, temporary power installations, and the regular maintenance of facilities that need to be operational on race days and dark the rest of the time. We work with residential and commercial clients in Kensington and are available for both routine maintenance and urgent fault response without delay. | Royal | Randwick Precinct |
| Zetland | zetland | Licensed electrician in Zetland, Sydney. GemElec services Green Square apartments, rooftop solar and EV charging in Sydney's newest urban precinct. Call 0498 351 351. | Zetland is one of Sydney's newest and most densely built suburbs — the Green Square urban renewal corridor has produced thousands of apartments in buildings that are only a few years old, and yet those buildings already present electrical maintenance needs: strata common area faults, sub-board issues in individual apartments, and the increasing demand for EV charger installation in basement carparks where the existing electrical infrastructure was never designed for it. | New construction doesn't mean trouble-free electrical systems. Building defect periods are now expiring on many Green Square developments, and apartment owners are discovering faults that should have been caught at handover. We carry out defect-period electrical inspections, produce detailed condition reports, and work with strata managers and owners corporations to ensure repair work is completed properly before warranty periods close. | Green | Square Covered |
| Alexandria | alexandria | Licensed electrician in Alexandria, Sydney. GemElec handles warehouse conversions, creative industry fit-outs and new Alexandria residential. Call 0498 351 351. | Alexandria has reinvented itself — former industrial warehouses on Botany Road and the surrounding streets are now creative industry offices, showrooms, and residential conversions, each requiring electrical systems that were never part of the original industrial design. Three-phase power upgrades, data and comms infrastructure, theatrical and architectural lighting, and full commercial fit-outs are a significant part of our Alexandria workload. | The residential streets west of Botany Road still carry the original fibro and brick cottages of Alexandria's working-class heritage, and these homes — many now owned by young families who have bought into the area's increasing amenity — often need the same treatment: new switchboards, updated wiring, and modern lighting solutions. We work across both sides of Alexandria's character divide and bring the same standard of work to both. | Warehouse | District Specialist |
| Waterloo | waterloo | Licensed electrician in Waterloo, Sydney. GemElec services Green Square adjacent apartments, residential and strata electrical in the inner south. Call 0498 351 351. | Waterloo sits immediately south of Surry Hills and east of Alexandria, and its electrical character is shaped by the suburb's transition from public housing estate to a mixed-tenure urban neighbourhood in active redevelopment. New apartment towers from the Green Square corridor have pushed into the suburb's northern end, while the older residential streets south of Botany Road retain the brick-and-tile character of their original construction — and the wiring to match. | Community facilities, small businesses along Botany Road, and the complex strata arrangements of newer apartment buildings all feature in our Waterloo work. We carry out strata common area electrical maintenance, individual apartment fault-finding, commercial small works, and after-hours emergency response for residents across the suburb — with response times that reflect our proximity to the inner south. | Inner | South Covered |
| Redfern | redfern | Licensed electrician in Redfern, Sydney. GemElec services heritage Redfern terraces, the Eveleigh precinct and inner-city residential. Call 0498 351 351. | Redfern has changed enormously over the last decade — the area around The Block and Eveleigh Street has seen significant new development, and the Eveleigh rail yards have been converted to innovation and commercial space that requires complex electrical infrastructure. Our work in Redfern spans both ends of this spectrum: heritage terrace houses where we carry out careful switchboard upgrades and rewires, and new commercial tenancies where we complete fit-outs from bare shell. | The mix of long-term community, new residents, and commercial activity on Redfern Street and Cleveland Street makes electrical demand here varied and occasionally urgent. We carry out emergency fault response, planned upgrades, commercial maintenance, and new installations across Redfern — and because we're based in the inner south, we can typically reach the suburb within the hour for urgent jobs. | Eveleigh | Precinct Covered |
| Paddington | paddington | Licensed electrician in Paddington, Sydney. GemElec handles terrace rewires, Oxford St commercial and heritage electrical upgrades. Call 0498 351 351. | Paddington's Victorian terrace houses are among the most photographed in Sydney — and some of the most electrically complex to work in. Original construction from the 1880s and 1890s means wiring runs that predate modern cable standards, fuse boards with ceramic carriers, and layouts where every wall conceals a hundred years of accretions. Our team carries out Paddington terrace rewires regularly, working with the fabric of heritage buildings to bring electrical systems to current standards with minimal visible impact. | Oxford Street's commercial strip from Taylor Square to Five Ways presents a different electrical challenge: cafés, boutiques, galleries, and hospitality venues with high-demand kitchen equipment, outdoor area power, and signage lighting that all need dedicated circuits and regular compliance testing. We work with Paddington business owners on new fit-outs, tenancy upgrades, and the after-hours fault response that a busy commercial strip occasionally requires. | Oxford St | To Five Ways |
| Marrickville | marrickville | Licensed electrician in Marrickville, Sydney. GemElec services inner west warehouse conversions, Marrickville Metro and established residential. Call 0498 351 351. | Marrickville's inner west character — a dense mix of Vietnamese community businesses on Illawarra Road, warehouse creative spaces, and a growing café culture that has transformed Addison Road — creates electrical demand that spans from three-phase commercial fit-outs to careful single-phase upgrades in fibro worker's cottages. The suburb's housing stock runs from original 1920s brick terraces to mid-century fibro and brick veneer homes, many of which still carry original wiring and fuse boards. | The Marrickville Metro shopping centre and its surrounding commercial strip add significant commercial work to our Marrickville load. Tenancy fit-outs, commercial kitchen circuits, carpark lighting, and large-format retail electrical all feature in our work here. We are equally comfortable on a 100-amp commercial sub-board or a residential switchboard in a heritage home two streets away, and we bring the same quality of work to both. | Marrickville | Metro & Surrounds |
| Sydenham | sydenham | Licensed electrician in Sydenham, Sydney. GemElec services residential and commercial electrical along the Airport Line corridor. Call 0498 351 351. | Sydenham sits at a rail junction that has shaped the suburb's character since the Victorian era — the triangular industrial pocket between Marrickville Road and the rail lines contains workshops, small manufacturers, and creative spaces, while the residential streets to the south and east carry the brick cottages and terraces of a classic inner-west suburb. Our electrical work in Sydenham covers both: industrial power upgrades in the workshop precinct and residential rewires and switchboard replacements in the surrounding homes. | The suburb's relative quietness compared to its Newtown and Marrickville neighbours has made it increasingly attractive to buyers who want inner-west character at a lower entry price — and that demographic drives demand for the renovation electrical work we do here most often: new kitchen and bathroom circuits, outdoor entertaining power, home office setups, and full switchboard upgrades as older properties get brought up to modern standards. | Airport | Line Corridor |
| Wolli Creek | wolli-creek | Licensed electrician in Wolli Creek, Sydney. GemElec services high-density Wolli Creek apartments and strata electrical for the inner south. Call 0498 351 351. | Wolli Creek is one of Sydney's most concentrated apartment precincts — a cluster of residential towers on the Arncliffe side of the train line that has grown rapidly over the last fifteen years. The suburb's entirely apartment-based character means our work here is almost exclusively strata and residential: common area electrical maintenance, sub-board fault-finding in individual apartments, lift electrical, carpark lighting, and the increasingly common request for EV charger installation in basement car spaces. | High-rise living creates electrical challenges that rarely appear in suburban housing: complex sub-metering arrangements, shared services infrastructure that requires strata approval before repairs, and fault patterns that can cascade across multiple apartments if a common riser or sub-board is involved. Our team has extensive experience working within strata frameworks — we understand body corporate processes, can produce the condition reports required for committee approval, and work efficiently within the access constraints of a managed building. | Arncliffe | To Wolli Creek |
| Rockdale | rockdale | Licensed electrician in Rockdale, Sydney. GemElec services St George area homes, Princes Hwy commercial and established residential. Call 0498 351 351. | Rockdale is the commercial and transport hub of the St George area — Princes Highway runs through the centre, carrying a strip of automotive businesses, small retailers, and service trades that form a significant part of our commercial work here. Rockdale station and the surrounding residential streets mix post-war brick homes with newer medium-density developments, and the electrical profile of these properties ranges from original 1950s wiring to the modern switchboards installed in recent apartment buildings. | The Greek and Chinese communities that have shaped Rockdale's character over decades have also built a dense network of small restaurants, function venues, and community halls in the suburb — all with commercial kitchens, event lighting, and three-phase power requirements. We carry out commercial electrical work across Rockdale and are familiar with the demands of hospitality venues that need to be operational six or seven days a week and need electrical faults sorted quickly and without disruption. | St George | Area Covered |
| Brighton-le-Sands | brighton-le-sands | Licensed electrician in Brighton-le-Sands. GemElec handles Botany Bay beachside electrical, salt-air corrosion and Bay St commercial. Call 0498 351 351. | Brighton-le-Sands stretches along the Botany Bay foreshore with a café strip on Bay Street that captures the Mediterranean character the suburb has built over decades. Salt air corrosion is a significant concern here — within 500 metres of the bay, outdoor electrical fittings, switchboard components, and aerial terminations degrade substantially faster than in inland suburbs, and we carry out regular corrosion inspections and component replacements for both residential and commercial properties along the waterfront. | The housing mix in Brighton-le-Sands runs from 1960s brick veneer family homes set back from the foreshore to newer apartment developments on the bay side — many used as holiday rentals or short-stay accommodation with high-turnover electrical demands. Bay Street's commercial strip adds cafés, restaurants, and small retailers with the three-phase kitchen circuits and outdoor area power requirements typical of a busy hospitality precinct. | Botany Bay | Foreshore Covered |

---

## Task 1 — Create feature branch

**Files:** No file changes — branch setup only.

- [ ] **Step 1: Create and check out the branch**

```bash
git checkout -b feat/locations
```

Expected: `Switched to a new branch 'feat/locations'`

- [ ] **Step 2: Verify all 21 location shells exist**

```bash
ls locations/ && ls locations/matraville/ locations/bondi/ locations/rockdale/
```

Expected: All 21 `index.html` files present.

- [ ] **Step 3: Commit the branch creation**

```bash
git add .
git commit -m "chore: create feat/locations branch"
```

---

## Task 2 — Hub page `/locations/index.html`

**Files:**
- Overwrite: `locations/index.html`

The nav for this page has Locations trigger `active` (not Services). See pattern in nav below — the only change from service pages is swapping which `nav-dropdown-trigger` has the `active` class.

- [ ] **Step 1: Write the hub page**

Write the full file at `locations/index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Electrician Locations Across Sydney | GemElec</title>
  <meta name="description" content="GemElec provides licensed electrical services across 20 Sydney suburbs. Find your local electrician — same-day service, 24/7 emergency response. Call 0498 351 351.">
  <link rel="canonical" href="https://www.gemelec.sydney/locations/">
  <meta property="og:title" content="Electrician Locations Across Sydney | GemElec">
  <meta property="og:description" content="GemElec provides licensed electrical services across 20 Sydney suburbs. Find your local electrician — same-day service, 24/7 emergency response. Call 0498 351 351.">
  <meta property="og:image" content="https://www.gemelec.sydney/assets/images/og-default.jpg">
  <meta property="og:url" content="https://www.gemelec.sydney/locations/">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="/assets/images/favicon.ico">
  <link rel="apple-touch-icon" href="/assets/images/favicon-192.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;900&family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/css/main.css">
  <link rel="stylesheet" href="/assets/css/components.css">
  <style>
    .loc-hub-hero {
      background: var(--bg-black);
      padding: calc(var(--nav-height) + 80px) 0 96px;
      position: relative;
      overflow: hidden;
    }
    .loc-hub-hero::before {
      content: 'SYDNEY';
      position: absolute;
      right: -10px; top: 50%;
      transform: translateY(-50%);
      font-family: var(--font-display);
      font-weight: 900;
      font-size: clamp(60px, 14vw, 200px);
      color: rgba(10,186,181,0.04);
      text-transform: uppercase;
      letter-spacing: -4px;
      pointer-events: none;
      line-height: 1;
      white-space: nowrap;
      user-select: none;
    }
    .loc-hub-hero::after {
      content: '';
      position: absolute;
      top: 0; right: 0;
      width: 1px; height: 40%;
      background: linear-gradient(180deg, transparent, var(--teal) 50%, transparent);
      opacity: 0.2;
    }
    .loc-hub-hero__inner { position: relative; z-index: 1; max-width: 760px; }
    .loc-hub-hero__headline {
      font-family: var(--font-display);
      font-size: clamp(48px, 8vw, 96px);
      font-weight: 900;
      line-height: 0.92;
      text-transform: uppercase;
      letter-spacing: -0.01em;
      margin-bottom: var(--space-8);
      animation: locFadeUp 0.7s 0.1s var(--ease-out) both;
    }
    .loc-hub-hero__headline .line-1 { color: var(--text-primary); display: block; }
    .loc-hub-hero__headline .line-2 { color: var(--teal); display: block; }
    .loc-hub-hero__intro {
      font-size: var(--text-lg);
      color: var(--text-secondary);
      line-height: 1.7;
      max-width: 580px;
      margin-bottom: var(--space-8);
      animation: locFadeUp 0.7s 0.2s var(--ease-out) both;
    }
    .loc-hub-hero__ctas {
      display: flex;
      align-items: center;
      gap: var(--space-5);
      flex-wrap: wrap;
      animation: locFadeUp 0.7s 0.3s var(--ease-out) both;
    }
    .loc-hub-hero__secondary { font-size: var(--text-sm); color: var(--text-muted); }
    .loc-hub-hero__secondary a { color: var(--teal); text-decoration: none; font-weight: 600; }
    .loc-hub-hero__secondary a:hover { color: var(--text-primary); }
    .loc-hub-hero__divider {
      position: absolute;
      bottom: 0; left: 0; right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--teal) 50%, transparent);
      opacity: 0.15;
    }
    @keyframes locFadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }

    /* Breadcrumb */
    .breadcrumb { padding: var(--space-3) 0; background: var(--bg-base); border-bottom: 1px solid var(--bg-border); }
    .breadcrumb__list { display: flex; align-items: center; gap: var(--space-2); list-style: none; flex-wrap: wrap; }
    .breadcrumb__item { display: flex; align-items: center; gap: var(--space-2); font-size: var(--text-xs); color: var(--text-muted); }
    .breadcrumb__item::after { content: '/'; color: var(--text-faint); }
    .breadcrumb__item:last-child::after { display: none; }
    .breadcrumb__item a { color: var(--text-muted); text-decoration: none; transition: color var(--duration) var(--ease); }
    .breadcrumb__item a:hover { color: var(--teal); }
    .breadcrumb__item--current { color: var(--text-secondary); }

    /* Suburb grid */
    .suburbs-section { background: var(--bg-section); border-top: 1px solid var(--bg-border); }
    .suburbs-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space-4);
    }
    .suburb-card {
      display: block;
      background: var(--bg-card);
      border: 1px solid var(--bg-border);
      border-radius: var(--radius-md);
      padding: var(--space-6);
      text-decoration: none;
      transition: border-color var(--duration) var(--ease), background var(--duration) var(--ease), transform var(--duration) var(--ease);
      position: relative;
      overflow: hidden;
    }
    .suburb-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: var(--teal);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform var(--duration) var(--ease);
    }
    .suburb-card:hover { border-color: rgba(10,186,181,0.3); background: var(--bg-surface); transform: translateY(-2px); }
    .suburb-card:hover::before { transform: scaleX(1); }
    .suburb-card__name {
      font-family: var(--font-display);
      font-size: clamp(20px, 2.5vw, 28px);
      font-weight: 900;
      text-transform: uppercase;
      color: var(--text-primary);
      line-height: 1;
      margin-bottom: var(--space-3);
    }
    .suburb-card__desc {
      font-size: var(--text-sm);
      color: var(--text-muted);
      line-height: 1.5;
    }
    .suburb-card__arrow {
      display: inline-block;
      color: var(--teal);
      font-size: var(--text-sm);
      margin-top: var(--space-4);
      opacity: 0;
      transform: translateX(-4px);
      transition: opacity var(--duration) var(--ease), transform var(--duration) var(--ease);
    }
    .suburb-card:hover .suburb-card__arrow { opacity: 1; transform: translateX(0); }

    @media (max-width: 1024px) { .suburbs-grid { grid-template-columns: repeat(3, 1fr); } }
    @media (max-width: 768px) { .loc-hub-hero { padding: calc(var(--nav-height) + 48px) 0 64px; } .suburbs-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 480px) { .suburbs-grid { grid-template-columns: 1fr; } }
  </style>
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"LocalBusiness","name":"GemElec Electrical Services","telephone":"+61498351351","email":"info@gemelec.sydney","url":"https://www.gemelec.sydney","address":{"@type":"PostalAddress","streetAddress":"587 Bunnerong Road","addressLocality":"Matraville","addressRegion":"NSW","postalCode":"2036","addressCountry":"AU"},"areaServed":["Matraville","Botany","Mascot","Randwick","Coogee","Bondi","Surry Hills","Newtown","Kingsford","Kensington","Zetland","Alexandria","Waterloo","Redfern","Paddington","Marrickville","Sydenham","Wolli Creek","Rockdale","Brighton-le-Sands"],"openingHoursSpecification":{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"opens":"00:00","closes":"23:59"}}
  </script>
</head>
<body>

  <header class="site-nav" id="site-nav" role="banner">
    <div class="container">
      <a href="/" class="nav-logo" aria-label="GemElec Electrical Services — home">
        <span class="nav-logo__wordmark"><span class="nav-logo__gem">GEM</span><span class="nav-logo__bolt">⚡</span><span class="nav-logo__elec">ELEC</span></span>
        <span class="nav-logo__sub">Electrical Services</span>
      </a>
      <nav class="nav-links" aria-label="Main navigation">
        <ul role="list">
          <li><a href="/">Home</a></li>
          <li class="nav-item--dropdown">
            <button class="nav-dropdown-trigger" aria-haspopup="true" aria-expanded="false" aria-controls="dropdown-services">
              Services <svg class="nav-chevron" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <div class="nav-dropdown nav-dropdown--services" id="dropdown-services" role="menu">
              <div class="dropdown-grid">
                <a href="/services/emergency/" class="dropdown-link" role="menuitem"><span class="dropdown-link__icon">⚡</span><span class="dropdown-link__text">24/7 Emergency<span class="dropdown-link__desc">Lost power? We respond fast</span></span></a>
                <a href="/services/cctv-security/" class="dropdown-link" role="menuitem"><span class="dropdown-link__icon">📹</span><span class="dropdown-link__text">CCTV &amp; Security<span class="dropdown-link__desc">Cameras, alarms &amp; monitoring</span></span></a>
                <a href="/services/lighting/" class="dropdown-link" role="menuitem"><span class="dropdown-link__icon">💡</span><span class="dropdown-link__text">Lighting<span class="dropdown-link__desc">Installs &amp; upgrades</span></span></a>
                <a href="/services/ev-chargers/" class="dropdown-link" role="menuitem"><span class="dropdown-link__icon">🔌</span><span class="dropdown-link__text">EV Chargers<span class="dropdown-link__desc">Home &amp; workplace installs</span></span></a>
                <a href="/services/switchboard/" class="dropdown-link" role="menuitem"><span class="dropdown-link__icon">🔧</span><span class="dropdown-link__text">Switchboards<span class="dropdown-link__desc">Repairs &amp; upgrades</span></span></a>
                <a href="/services/test-tag/" class="dropdown-link" role="menuitem"><span class="dropdown-link__icon">🏷️</span><span class="dropdown-link__text">Test &amp; Tag<span class="dropdown-link__desc">Compliance &amp; safety</span></span></a>
                <a href="/services/electrical-advice/" class="dropdown-link" role="menuitem"><span class="dropdown-link__icon">💬</span><span class="dropdown-link__text">Electrical Advice<span class="dropdown-link__desc">Smart solutions for your space</span></span></a>
                <a href="/services/general/" class="dropdown-link" role="menuitem"><span class="dropdown-link__icon">🛠️</span><span class="dropdown-link__text">Everything Else<span class="dropdown-link__desc">If it has wires, we do it</span></span></a>
              </div>
              <div class="dropdown-footer">
                <span class="dropdown-footer__label">All electrical &amp; security services</span>
                <a href="/services/" class="dropdown-footer__link">View All Services →</a>
              </div>
            </div>
          </li>
          <li><a href="/about/">About</a></li>
          <li class="nav-item--dropdown">
            <button class="nav-dropdown-trigger active" aria-haspopup="true" aria-expanded="false" aria-controls="dropdown-locations">
              Locations <svg class="nav-chevron" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <div class="nav-dropdown nav-dropdown--locations" id="dropdown-locations" role="menu">
              <div class="dropdown-locations-grid">
                <a href="/locations/matraville/" class="dropdown-location-link" role="menuitem">Matraville</a>
                <a href="/locations/botany/" class="dropdown-location-link" role="menuitem">Botany</a>
                <a href="/locations/mascot/" class="dropdown-location-link" role="menuitem">Mascot</a>
                <a href="/locations/randwick/" class="dropdown-location-link" role="menuitem">Randwick</a>
                <a href="/locations/coogee/" class="dropdown-location-link" role="menuitem">Coogee</a>
                <a href="/locations/bondi/" class="dropdown-location-link" role="menuitem">Bondi</a>
                <a href="/locations/surry-hills/" class="dropdown-location-link" role="menuitem">Surry Hills</a>
                <a href="/locations/newtown/" class="dropdown-location-link" role="menuitem">Newtown</a>
                <a href="/locations/kingsford/" class="dropdown-location-link" role="menuitem">Kingsford</a>
                <a href="/locations/kensington/" class="dropdown-location-link" role="menuitem">Kensington</a>
                <a href="/locations/zetland/" class="dropdown-location-link" role="menuitem">Zetland</a>
                <a href="/locations/alexandria/" class="dropdown-location-link" role="menuitem">Alexandria</a>
                <a href="/locations/waterloo/" class="dropdown-location-link" role="menuitem">Waterloo</a>
                <a href="/locations/redfern/" class="dropdown-location-link" role="menuitem">Redfern</a>
                <a href="/locations/paddington/" class="dropdown-location-link" role="menuitem">Paddington</a>
                <a href="/locations/marrickville/" class="dropdown-location-link" role="menuitem">Marrickville</a>
                <a href="/locations/sydenham/" class="dropdown-location-link" role="menuitem">Sydenham</a>
                <a href="/locations/wolli-creek/" class="dropdown-location-link" role="menuitem">Wolli Creek</a>
                <a href="/locations/rockdale/" class="dropdown-location-link" role="menuitem">Rockdale</a>
                <a href="/locations/brighton-le-sands/" class="dropdown-location-link" role="menuitem">Brighton-Le-Sands</a>
              </div>
              <div class="dropdown-footer">
                <span class="dropdown-footer__label">Greater Sydney &amp; surrounds</span>
                <a href="/locations/" class="dropdown-footer__link">All Locations →</a>
              </div>
            </div>
          </li>
          <li><a href="/blog/">Blog</a></li>
          <li><a href="/contact/">Contact</a></li>
        </ul>
      </nav>
      <a href="tel:0498351351" class="nav-phone" aria-label="Call GemElec on 0498 351 351">
        <span class="nav-phone__icon" aria-hidden="true">📞</span>0498 351 351
      </a>
      <button class="nav-hamburger" id="nav-hamburger" aria-expanded="false" aria-controls="nav-mobile-overlay" aria-label="Open navigation menu">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="nav-mobile-overlay" id="nav-mobile-overlay" aria-label="Mobile navigation">
      <nav class="mobile-nav-links" aria-label="Mobile navigation links">
        <ul role="list">
          <li><a href="/" class="mobile-nav-link">Home</a></li>
          <li>
            <button class="mobile-nav-link" data-accordion="mobile-services" aria-expanded="false">
              Services <svg class="mobile-chevron" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <div class="mobile-subnav" id="mobile-services">
              <a href="/services/">All Services</a>
              <a href="/services/emergency/">24/7 Emergency</a>
              <a href="/services/cctv-security/">CCTV &amp; Security</a>
              <a href="/services/lighting/">Lighting</a>
              <a href="/services/ev-chargers/">EV Chargers</a>
              <a href="/services/switchboard/">Switchboards</a>
              <a href="/services/test-tag/">Test &amp; Tag</a>
              <a href="/services/electrical-advice/">Electrical Advice</a>
              <a href="/services/general/">Everything Else</a>
            </div>
          </li>
          <li><a href="/about/" class="mobile-nav-link">About</a></li>
          <li><a href="/blog/" class="mobile-nav-link">Blog</a></li>
          <li><a href="/contact/" class="mobile-nav-link">Contact</a></li>
        </ul>
      </nav>
      <a href="tel:0498351351" class="mobile-phone-cta">📞 0498 351 351</a>
    </div>
  </header>

  <main id="main-content">

    <nav class="breadcrumb" aria-label="Breadcrumb" style="padding-top: calc(var(--nav-height) + 12px);">
      <div class="container">
        <ol class="breadcrumb__list">
          <li class="breadcrumb__item"><a href="/">Home</a></li>
          <li class="breadcrumb__item breadcrumb__item--current">Locations</li>
        </ol>
      </div>
    </nav>

    <!-- HERO -->
    <section class="loc-hub-hero" aria-labelledby="loc-hub-heading">
      <div class="container">
        <div class="loc-hub-hero__inner">
          <div style="margin-bottom:var(--space-6);animation:locFadeUp 0.6s var(--ease-out) both;">
            <div class="badge-live" role="status" aria-live="polite">
              <span class="badge-live__dot" aria-hidden="true"></span>
              Serving Greater Sydney — 24/7
            </div>
          </div>
          <h1 class="loc-hub-hero__headline" id="loc-hub-heading">
            <span class="line-1">Local Electricians</span>
            <span class="line-2">Across Sydney</span>
          </h1>
          <p class="loc-hub-hero__intro">
            GemElec is based in Matraville and services 20 suburbs across inner Sydney, the eastern suburbs, and the inner south. Licensed, insured, and available 24/7 for emergencies — find your suburb below.
          </p>
          <div class="loc-hub-hero__ctas">
            <a href="tel:0498351351" class="btn btn--primary btn--lg">Call 0498 351 351 <span class="btn-arrow" aria-hidden="true">→</span></a>
            <span class="loc-hub-hero__secondary">or <a href="/contact/">get a free quote online</a></span>
          </div>
        </div>
      </div>
      <div class="loc-hub-hero__divider" aria-hidden="true"></div>
    </section>

    <!-- TICKER -->
    <div class="ticker" aria-hidden="true">
      <div class="ticker__track">
        <div class="ticker__inner">
          <span class="ticker__item">Licensed &amp; Insured<span class="ticker__dot"></span></span>
          <span class="ticker__item">24/7 Emergency Response<span class="ticker__dot"></span></span>
          <span class="ticker__item">Inner Sydney &amp; Eastern Suburbs<span class="ticker__dot"></span></span>
          <span class="ticker__item">Same-Day Availability<span class="ticker__dot"></span></span>
          <span class="ticker__item">Based in Matraville NSW<span class="ticker__dot"></span></span>
          <span class="ticker__item">15+ Years Experience<span class="ticker__dot"></span></span>
          <span class="ticker__item">5★ Google Rated<span class="ticker__dot"></span></span>
        </div>
        <div class="ticker__inner" aria-hidden="true">
          <span class="ticker__item">Licensed &amp; Insured<span class="ticker__dot"></span></span>
          <span class="ticker__item">24/7 Emergency Response<span class="ticker__dot"></span></span>
          <span class="ticker__item">Inner Sydney &amp; Eastern Suburbs<span class="ticker__dot"></span></span>
          <span class="ticker__item">Same-Day Availability<span class="ticker__dot"></span></span>
          <span class="ticker__item">Based in Matraville NSW<span class="ticker__dot"></span></span>
          <span class="ticker__item">15+ Years Experience<span class="ticker__dot"></span></span>
          <span class="ticker__item">5★ Google Rated<span class="ticker__dot"></span></span>
        </div>
      </div>
    </div>

    <!-- SUBURB GRID -->
    <section class="suburbs-section section--lg" aria-labelledby="suburbs-heading">
      <div class="container">
        <div class="section-eyebrow reveal">
          <div class="section-eyebrow__line" aria-hidden="true"></div>
          <span class="section-eyebrow__text">20 suburbs covered</span>
        </div>
        <h2 class="heading-lg reveal" id="suburbs-heading" style="margin-bottom:var(--space-10);">Find Your Local Electrician</h2>
        <div class="suburbs-grid">
          <a href="/locations/matraville/" class="suburb-card reveal"><span class="suburb-card__name">Matraville</span><span class="suburb-card__desc">Local electrician for Matraville &amp; surrounds</span><span class="suburb-card__arrow">View page →</span></a>
          <a href="/locations/botany/" class="suburb-card reveal reveal--delay-1"><span class="suburb-card__name">Botany</span><span class="suburb-card__desc">Local electrician for Botany &amp; surrounds</span><span class="suburb-card__arrow">View page →</span></a>
          <a href="/locations/mascot/" class="suburb-card reveal reveal--delay-2"><span class="suburb-card__name">Mascot</span><span class="suburb-card__desc">Local electrician for Mascot &amp; surrounds</span><span class="suburb-card__arrow">View page →</span></a>
          <a href="/locations/randwick/" class="suburb-card reveal reveal--delay-3"><span class="suburb-card__name">Randwick</span><span class="suburb-card__desc">Local electrician for Randwick &amp; surrounds</span><span class="suburb-card__arrow">View page →</span></a>
          <a href="/locations/coogee/" class="suburb-card reveal"><span class="suburb-card__name">Coogee</span><span class="suburb-card__desc">Local electrician for Coogee &amp; surrounds</span><span class="suburb-card__arrow">View page →</span></a>
          <a href="/locations/bondi/" class="suburb-card reveal reveal--delay-1"><span class="suburb-card__name">Bondi</span><span class="suburb-card__desc">Local electrician for Bondi &amp; surrounds</span><span class="suburb-card__arrow">View page →</span></a>
          <a href="/locations/surry-hills/" class="suburb-card reveal reveal--delay-2"><span class="suburb-card__name">Surry Hills</span><span class="suburb-card__desc">Local electrician for Surry Hills &amp; surrounds</span><span class="suburb-card__arrow">View page →</span></a>
          <a href="/locations/newtown/" class="suburb-card reveal reveal--delay-3"><span class="suburb-card__name">Newtown</span><span class="suburb-card__desc">Local electrician for Newtown &amp; surrounds</span><span class="suburb-card__arrow">View page →</span></a>
          <a href="/locations/kingsford/" class="suburb-card reveal"><span class="suburb-card__name">Kingsford</span><span class="suburb-card__desc">Local electrician for Kingsford &amp; surrounds</span><span class="suburb-card__arrow">View page →</span></a>
          <a href="/locations/kensington/" class="suburb-card reveal reveal--delay-1"><span class="suburb-card__name">Kensington</span><span class="suburb-card__desc">Local electrician for Kensington &amp; surrounds</span><span class="suburb-card__arrow">View page →</span></a>
          <a href="/locations/zetland/" class="suburb-card reveal reveal--delay-2"><span class="suburb-card__name">Zetland</span><span class="suburb-card__desc">Local electrician for Zetland &amp; surrounds</span><span class="suburb-card__arrow">View page →</span></a>
          <a href="/locations/alexandria/" class="suburb-card reveal reveal--delay-3"><span class="suburb-card__name">Alexandria</span><span class="suburb-card__desc">Local electrician for Alexandria &amp; surrounds</span><span class="suburb-card__arrow">View page →</span></a>
          <a href="/locations/waterloo/" class="suburb-card reveal"><span class="suburb-card__name">Waterloo</span><span class="suburb-card__desc">Local electrician for Waterloo &amp; surrounds</span><span class="suburb-card__arrow">View page →</span></a>
          <a href="/locations/redfern/" class="suburb-card reveal reveal--delay-1"><span class="suburb-card__name">Redfern</span><span class="suburb-card__desc">Local electrician for Redfern &amp; surrounds</span><span class="suburb-card__arrow">View page →</span></a>
          <a href="/locations/paddington/" class="suburb-card reveal reveal--delay-2"><span class="suburb-card__name">Paddington</span><span class="suburb-card__desc">Local electrician for Paddington &amp; surrounds</span><span class="suburb-card__arrow">View page →</span></a>
          <a href="/locations/marrickville/" class="suburb-card reveal reveal--delay-3"><span class="suburb-card__name">Marrickville</span><span class="suburb-card__desc">Local electrician for Marrickville &amp; surrounds</span><span class="suburb-card__arrow">View page →</span></a>
          <a href="/locations/sydenham/" class="suburb-card reveal"><span class="suburb-card__name">Sydenham</span><span class="suburb-card__desc">Local electrician for Sydenham &amp; surrounds</span><span class="suburb-card__arrow">View page →</span></a>
          <a href="/locations/wolli-creek/" class="suburb-card reveal reveal--delay-1"><span class="suburb-card__name">Wolli Creek</span><span class="suburb-card__desc">Local electrician for Wolli Creek &amp; surrounds</span><span class="suburb-card__arrow">View page →</span></a>
          <a href="/locations/rockdale/" class="suburb-card reveal reveal--delay-2"><span class="suburb-card__name">Rockdale</span><span class="suburb-card__desc">Local electrician for Rockdale &amp; surrounds</span><span class="suburb-card__arrow">View page →</span></a>
          <a href="/locations/brighton-le-sands/" class="suburb-card reveal reveal--delay-3"><span class="suburb-card__name">Brighton-le-Sands</span><span class="suburb-card__desc">Local electrician for Brighton-le-Sands &amp; surrounds</span><span class="suburb-card__arrow">View page →</span></a>
        </div>
      </div>
    </section>

    <!-- EMERGENCY CTA BAND -->
    <div class="cta-band" role="complementary" aria-label="Emergency contact">
      <div class="container">
        <div class="cta-band__text">
          <p class="cta-band__heading">24/7 Emergency Call Out</p>
          <p class="cta-band__sub">Lost power? Whatever the emergency, we respond fast.</p>
        </div>
        <a href="tel:0498351351" class="cta-band__phone" aria-label="Call GemElec on 0498 351 351">0498 351 351</a>
      </div>
    </div>

  </main>

  <footer class="site-footer" id="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="/" class="footer-logo" aria-label="GemElec home"><span class="footer-logo__wordmark"><span class="footer-logo__gem">GEM</span><span class="footer-logo__bolt">⚡</span><span class="footer-logo__elec">ELEC</span></span><span class="footer-logo__sub">Electrical Services</span></a>
          <p class="footer-tagline">Sydney's trusted electrical &amp; security experts. Residential &amp; commercial. Available 24/7 for emergencies across Greater Sydney.</p>
          <div class="footer-certs"><span class="footer-cert">Fully Licensed</span><span class="footer-cert">Fully Insured</span><span class="footer-cert">15+ Years Experience</span></div>
        </div>
        <div class="footer-col">
          <p class="footer-col-title">Services</p>
          <ul class="footer-links" role="list">
            <li><a href="/services/emergency/">24/7 Emergency</a></li>
            <li><a href="/services/cctv-security/">CCTV &amp; Security</a></li>
            <li><a href="/services/lighting/">Lighting</a></li>
            <li><a href="/services/ev-chargers/">EV Chargers</a></li>
            <li><a href="/services/switchboard/">Switchboards</a></li>
            <li><a href="/services/test-tag/">Test &amp; Tag</a></li>
            <li><a href="/services/general/">Everything Else</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <p class="footer-col-title">Locations</p>
          <ul class="footer-links" role="list">
            <li><a href="/locations/matraville/">Matraville</a></li>
            <li><a href="/locations/botany/">Botany</a></li>
            <li><a href="/locations/randwick/">Randwick</a></li>
            <li><a href="/locations/bondi/">Bondi</a></li>
            <li><a href="/locations/newtown/">Newtown</a></li>
            <li><a href="/locations/surry-hills/">Surry Hills</a></li>
            <li><a href="/locations/">All Locations →</a></li>
          </ul>
        </div>
        <div class="footer-col footer-contact">
          <p class="footer-col-title">Contact</p>
          <div class="footer-contact-item"><span class="footer-contact-icon" aria-hidden="true">📞</span><span class="footer-contact-text"><a href="tel:0498351351">0498 351 351</a></span></div>
          <div class="footer-contact-item"><span class="footer-contact-icon" aria-hidden="true">✉️</span><span class="footer-contact-text"><a href="mailto:info@gemelec.sydney">info@gemelec.sydney</a></span></div>
          <div class="footer-contact-item"><span class="footer-contact-icon" aria-hidden="true">📍</span><span class="footer-contact-text">587 Bunnerong Road<br>Matraville NSW 2036</span></div>
          <div class="footer-contact-item"><span class="footer-contact-icon" aria-hidden="true">🕐</span><span class="footer-contact-text">Available 24/7 for emergencies</span></div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
        <p class="footer-copyright">&copy; <script>document.write(new Date().getFullYear())</script> GemElec Electrical Services. All rights reserved.</p>
        <div class="footer-credentials"><span class="footer-credential">ABN: <span>92 647 631 267</span></span><span class="footer-credential">Master Licence: <span>000108133</span></span><span class="footer-credential">Contractor Licence: <span>376553C</span></span></div>
      </div>
    </div>
  </footer>

  <script src="/assets/js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Validate the file**

```bash
wc -l locations/index.html
grep -c "suburb-card" locations/index.html
```

Expected: file exists, 20 suburb-card entries.

- [ ] **Step 3: Commit**

```bash
git add locations/index.html
git commit -m "feat: build locations hub page with 20-card suburb grid"
```

---

## Task 3 — Suburb template + Matraville page

**Files:**
- Overwrite: `locations/matraville/index.html`

This task establishes the **canonical suburb page template**. All subsequent suburb tasks (Tasks 4–7) follow this exact structure — only the values listed in the Unique Content table change.

**Per-suburb substitution points** (marked with `[SUBURB]` etc. below):
- `[SUBURB]` — display name e.g. "Matraville"
- `[SLUG]` — URL slug e.g. "matraville"
- `[META_DESC]` — 140–155 char meta description from table
- `[PARA_1]` — first unique paragraph
- `[PARA_2]` — second unique paragraph
- `[STAT4_NUM]` — 4th stat number/text from table e.g. "2km"
- `[STAT4_LABEL]` — 4th stat label e.g. "From Our Depot"

- [ ] **Step 1: Write `locations/matraville/index.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Electrician in Matraville | GemElec</title>
  <meta name="description" content="Licensed electrician in Matraville, Sydney. GemElec is based on Bunnerong Road — fast local response for homes, units &amp; light commercial. Call 0498 351 351.">
  <link rel="canonical" href="https://www.gemelec.sydney/locations/matraville/">
  <meta property="og:title" content="Electrician in Matraville | GemElec">
  <meta property="og:description" content="Licensed electrician in Matraville, Sydney. GemElec is based on Bunnerong Road — fast local response for homes, units &amp; light commercial. Call 0498 351 351.">
  <meta property="og:image" content="https://www.gemelec.sydney/assets/images/og-default.jpg">
  <meta property="og:url" content="https://www.gemelec.sydney/locations/matraville/">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="/assets/images/favicon.ico">
  <link rel="apple-touch-icon" href="/assets/images/favicon-192.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;900&family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/css/main.css">
  <link rel="stylesheet" href="/assets/css/components.css">
  <style>
    /* Hero */
    .loc-hero {
      background: var(--bg-black);
      padding: calc(var(--nav-height) + 80px) 0 96px;
      position: relative;
      overflow: hidden;
    }
    .loc-hero::before {
      content: 'MATRAVILLE';
      position: absolute;
      right: -10px; top: 50%;
      transform: translateY(-50%);
      font-family: var(--font-display);
      font-weight: 900;
      font-size: clamp(40px, 10vw, 160px);
      color: rgba(255,238,0,0.03);
      text-transform: uppercase;
      letter-spacing: -4px;
      pointer-events: none;
      line-height: 1;
      white-space: nowrap;
      user-select: none;
    }
    .loc-hero::after {
      content: '';
      position: absolute;
      top: 0; right: 0;
      width: 1px; height: 40%;
      background: linear-gradient(180deg, transparent, var(--yellow) 50%, transparent);
      opacity: 0.15;
    }
    .loc-hero__inner { position: relative; z-index: 1; max-width: 760px; }
    .loc-hero__headline {
      font-family: var(--font-display);
      font-size: clamp(48px, 8vw, 92px);
      font-weight: 900;
      line-height: 0.92;
      text-transform: uppercase;
      letter-spacing: -0.01em;
      margin-bottom: var(--space-8);
      animation: locFadeUp 0.7s 0.1s var(--ease-out) both;
    }
    .loc-hero__headline .line-1 { color: var(--text-primary); display: block; }
    .loc-hero__headline .line-2 { color: var(--yellow); display: block; }
    .loc-hero__intro {
      font-size: var(--text-lg);
      color: var(--text-secondary);
      line-height: 1.7;
      max-width: 600px;
      margin-bottom: var(--space-6);
      animation: locFadeUp 0.7s 0.2s var(--ease-out) both;
    }
    .loc-hero__ctas {
      display: flex; align-items: center; gap: var(--space-5); flex-wrap: wrap;
      animation: locFadeUp 0.7s 0.3s var(--ease-out) both;
    }
    .loc-hero__secondary { font-size: var(--text-sm); color: var(--text-muted); }
    .loc-hero__secondary a { color: var(--teal); text-decoration: none; font-weight: 600; }
    .loc-hero__secondary a:hover { color: var(--text-primary); }
    .loc-hero__divider {
      position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
      background: linear-gradient(90deg, transparent, var(--yellow) 50%, transparent);
      opacity: 0.1;
    }
    @keyframes locFadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }

    /* Breadcrumb */
    .breadcrumb { padding: var(--space-3) 0; background: var(--bg-base); border-bottom: 1px solid var(--bg-border); }
    .breadcrumb__list { display: flex; align-items: center; gap: var(--space-2); list-style: none; flex-wrap: wrap; }
    .breadcrumb__item { display: flex; align-items: center; gap: var(--space-2); font-size: var(--text-xs); color: var(--text-muted); }
    .breadcrumb__item::after { content: '/'; color: var(--text-faint); }
    .breadcrumb__item:last-child::after { display: none; }
    .breadcrumb__item a { color: var(--text-muted); text-decoration: none; transition: color var(--duration) var(--ease); }
    .breadcrumb__item a:hover { color: var(--teal); }
    .breadcrumb__item--current { color: var(--text-secondary); }

    /* Services section */
    .loc-services { background: var(--bg-section); border-top: 1px solid var(--bg-border); }
    .loc-services__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-4); }
    .loc-service-card {
      display: block;
      background: var(--bg-card);
      border: 1px solid var(--bg-border);
      border-radius: var(--radius-md);
      padding: var(--space-6);
      text-decoration: none;
      transition: border-color var(--duration) var(--ease), background var(--duration) var(--ease), transform var(--duration) var(--ease);
      position: relative;
    }
    .loc-service-card::before {
      content: '';
      position: absolute; top: 0; left: var(--space-6); right: var(--space-6);
      height: 2px; background: var(--yellow); opacity: 0;
      transition: opacity var(--duration) var(--ease);
    }
    .loc-service-card:hover { border-color: rgba(255,238,0,0.2); background: var(--bg-surface); transform: translateY(-2px); }
    .loc-service-card:hover::before { opacity: 1; }
    .loc-service-card__icon { font-size: 28px; margin-bottom: var(--space-4); display: block; }
    .loc-service-card__name { font-family: var(--font-display); font-size: 20px; font-weight: 900; text-transform: uppercase; color: var(--text-primary); margin-bottom: var(--space-2); line-height: 1.1; }
    .loc-service-card__desc { font-size: var(--text-sm); color: var(--text-muted); line-height: 1.55; }
    .loc-service-card__link { display: inline-block; margin-top: var(--space-4); font-size: var(--text-xs); font-weight: 600; color: var(--teal); text-transform: uppercase; letter-spacing: 1px; }

    /* Why section */
    .why-section { background: var(--bg-base); border-top: 1px solid var(--bg-border); border-bottom: 1px solid var(--bg-border); }
    .why-service-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-8); }
    .why-service-item { display: flex; gap: var(--space-4); align-items: flex-start; }
    .why-service-item__mark {
      width: 40px; height: 40px; flex-shrink: 0;
      background: rgba(255,238,0,0.06); border: 1px solid rgba(255,238,0,0.15);
      border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center;
      font-size: 18px; margin-top: 2px;
    }
    .why-service-item__title { font-size: var(--text-base); font-weight: 700; color: var(--text-primary); margin-bottom: var(--space-2); }
    .why-service-item__desc { font-size: var(--text-sm); color: var(--text-muted); line-height: 1.65; }

    /* Quote section */
    .quote-section { background: var(--bg-section); border-top: 1px solid var(--bg-border); }
    .quote-layout { display: grid; grid-template-columns: 1fr 1.4fr; gap: var(--space-16); align-items: start; }
    .quote-phone-cta {
      display: flex; align-items: center; gap: var(--space-4); margin-top: var(--space-8);
      padding: var(--space-5) var(--space-6); background: var(--bg-card); border: 1px solid var(--bg-border);
      border-radius: var(--radius-md); text-decoration: none; transition: border-color var(--duration) var(--ease);
    }
    .quote-phone-cta:hover { border-color: var(--teal); }
    .quote-phone-cta__icon { font-size: 24px; }
    .quote-phone-cta__label { font-size: var(--text-xs); font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: var(--text-muted); display: block; }
    .quote-phone-cta__number { font-family: var(--font-display); font-size: 28px; font-weight: 900; color: var(--teal); letter-spacing: -0.5px; display: block; line-height: 1; margin-top: 2px; }
    .quote-form-wrap { background: var(--bg-card); border: 1px solid var(--bg-border); border-radius: var(--radius-md); padding: var(--space-8); position: relative; }
    .quote-form-wrap::before { content: ''; position: absolute; top: 0; left: var(--space-8); right: var(--space-8); height: 2px; background: linear-gradient(90deg, var(--yellow), var(--teal)); }
    .form-title { font-family: var(--font-display); font-size: 24px; font-weight: 700; text-transform: uppercase; color: var(--text-primary); margin-bottom: var(--space-6); }
    .form-group { margin-bottom: var(--space-4); }
    .form-label { display: block; font-size: var(--text-xs); font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: var(--text-muted); margin-bottom: var(--space-2); }
    .form-input, .form-textarea, .form-select { width: 100%; background: var(--bg-surface); border: 1px solid var(--bg-border); border-radius: var(--radius-sm); padding: 12px 16px; font-family: var(--font-body); font-size: var(--text-base); color: var(--text-primary); line-height: 1.5; transition: border-color var(--duration) var(--ease), background var(--duration) var(--ease); -webkit-appearance: none; }
    .form-input::placeholder, .form-textarea::placeholder { color: var(--text-faint); }
    .form-input:focus, .form-textarea:focus, .form-select:focus { outline: none; border-color: var(--teal); background: var(--bg-card); }
    .form-textarea { resize: vertical; min-height: 100px; }
    .form-select { cursor: pointer; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); }
    .form-submit { margin-top: var(--space-2); }
    .form-note { font-size: var(--text-xs); color: var(--text-muted); margin-top: var(--space-3); line-height: 1.5; }

    @media (max-width: 1024px) { .loc-services__grid { grid-template-columns: repeat(2, 1fr); } .why-service-grid { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 768px) { .loc-hero { padding: calc(var(--nav-height) + 48px) 0 64px; } .loc-services__grid { grid-template-columns: repeat(2, 1fr); } .why-service-grid { grid-template-columns: 1fr; gap: var(--space-5); } .quote-layout { grid-template-columns: 1fr; gap: var(--space-10); } .form-row { grid-template-columns: 1fr; } }
    @media (max-width: 480px) { .loc-services__grid { grid-template-columns: 1fr; } }
  </style>
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"LocalBusiness","name":"GemElec Electrical Services","telephone":"+61498351351","email":"info@gemelec.sydney","url":"https://www.gemelec.sydney","address":{"@type":"PostalAddress","streetAddress":"587 Bunnerong Road","addressLocality":"Matraville","addressRegion":"NSW","postalCode":"2036","addressCountry":"AU"},"areaServed":"Matraville","openingHoursSpecification":{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"opens":"00:00","closes":"23:59"}}
  </script>
</head>
<body>

  <header class="site-nav" id="site-nav" role="banner">
    <div class="container">
      <a href="/" class="nav-logo" aria-label="GemElec Electrical Services — home">
        <span class="nav-logo__wordmark"><span class="nav-logo__gem">GEM</span><span class="nav-logo__bolt">⚡</span><span class="nav-logo__elec">ELEC</span></span>
        <span class="nav-logo__sub">Electrical Services</span>
      </a>
      <nav class="nav-links" aria-label="Main navigation">
        <ul role="list">
          <li><a href="/">Home</a></li>
          <li class="nav-item--dropdown">
            <button class="nav-dropdown-trigger" aria-haspopup="true" aria-expanded="false" aria-controls="dropdown-services">
              Services <svg class="nav-chevron" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <div class="nav-dropdown nav-dropdown--services" id="dropdown-services" role="menu">
              <div class="dropdown-grid">
                <a href="/services/emergency/" class="dropdown-link" role="menuitem"><span class="dropdown-link__icon">⚡</span><span class="dropdown-link__text">24/7 Emergency<span class="dropdown-link__desc">Lost power? We respond fast</span></span></a>
                <a href="/services/cctv-security/" class="dropdown-link" role="menuitem"><span class="dropdown-link__icon">📹</span><span class="dropdown-link__text">CCTV &amp; Security<span class="dropdown-link__desc">Cameras, alarms &amp; monitoring</span></span></a>
                <a href="/services/lighting/" class="dropdown-link" role="menuitem"><span class="dropdown-link__icon">💡</span><span class="dropdown-link__text">Lighting<span class="dropdown-link__desc">Installs &amp; upgrades</span></span></a>
                <a href="/services/ev-chargers/" class="dropdown-link" role="menuitem"><span class="dropdown-link__icon">🔌</span><span class="dropdown-link__text">EV Chargers<span class="dropdown-link__desc">Home &amp; workplace installs</span></span></a>
                <a href="/services/switchboard/" class="dropdown-link" role="menuitem"><span class="dropdown-link__icon">🔧</span><span class="dropdown-link__text">Switchboards<span class="dropdown-link__desc">Repairs &amp; upgrades</span></span></a>
                <a href="/services/test-tag/" class="dropdown-link" role="menuitem"><span class="dropdown-link__icon">🏷️</span><span class="dropdown-link__text">Test &amp; Tag<span class="dropdown-link__desc">Compliance &amp; safety</span></span></a>
                <a href="/services/electrical-advice/" class="dropdown-link" role="menuitem"><span class="dropdown-link__icon">💬</span><span class="dropdown-link__text">Electrical Advice<span class="dropdown-link__desc">Smart solutions for your space</span></span></a>
                <a href="/services/general/" class="dropdown-link" role="menuitem"><span class="dropdown-link__icon">🛠️</span><span class="dropdown-link__text">Everything Else<span class="dropdown-link__desc">If it has wires, we do it</span></span></a>
              </div>
              <div class="dropdown-footer">
                <span class="dropdown-footer__label">All electrical &amp; security services</span>
                <a href="/services/" class="dropdown-footer__link">View All Services →</a>
              </div>
            </div>
          </li>
          <li><a href="/about/">About</a></li>
          <li class="nav-item--dropdown">
            <button class="nav-dropdown-trigger active" aria-haspopup="true" aria-expanded="false" aria-controls="dropdown-locations">
              Locations <svg class="nav-chevron" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <div class="nav-dropdown nav-dropdown--locations" id="dropdown-locations" role="menu">
              <div class="dropdown-locations-grid">
                <a href="/locations/matraville/" class="dropdown-location-link" role="menuitem">Matraville</a>
                <a href="/locations/botany/" class="dropdown-location-link" role="menuitem">Botany</a>
                <a href="/locations/mascot/" class="dropdown-location-link" role="menuitem">Mascot</a>
                <a href="/locations/randwick/" class="dropdown-location-link" role="menuitem">Randwick</a>
                <a href="/locations/coogee/" class="dropdown-location-link" role="menuitem">Coogee</a>
                <a href="/locations/bondi/" class="dropdown-location-link" role="menuitem">Bondi</a>
                <a href="/locations/surry-hills/" class="dropdown-location-link" role="menuitem">Surry Hills</a>
                <a href="/locations/newtown/" class="dropdown-location-link" role="menuitem">Newtown</a>
                <a href="/locations/kingsford/" class="dropdown-location-link" role="menuitem">Kingsford</a>
                <a href="/locations/kensington/" class="dropdown-location-link" role="menuitem">Kensington</a>
                <a href="/locations/zetland/" class="dropdown-location-link" role="menuitem">Zetland</a>
                <a href="/locations/alexandria/" class="dropdown-location-link" role="menuitem">Alexandria</a>
                <a href="/locations/waterloo/" class="dropdown-location-link" role="menuitem">Waterloo</a>
                <a href="/locations/redfern/" class="dropdown-location-link" role="menuitem">Redfern</a>
                <a href="/locations/paddington/" class="dropdown-location-link" role="menuitem">Paddington</a>
                <a href="/locations/marrickville/" class="dropdown-location-link" role="menuitem">Marrickville</a>
                <a href="/locations/sydenham/" class="dropdown-location-link" role="menuitem">Sydenham</a>
                <a href="/locations/wolli-creek/" class="dropdown-location-link" role="menuitem">Wolli Creek</a>
                <a href="/locations/rockdale/" class="dropdown-location-link" role="menuitem">Rockdale</a>
                <a href="/locations/brighton-le-sands/" class="dropdown-location-link" role="menuitem">Brighton-Le-Sands</a>
              </div>
              <div class="dropdown-footer">
                <span class="dropdown-footer__label">Greater Sydney &amp; surrounds</span>
                <a href="/locations/" class="dropdown-footer__link">All Locations →</a>
              </div>
            </div>
          </li>
          <li><a href="/blog/">Blog</a></li>
          <li><a href="/contact/">Contact</a></li>
        </ul>
      </nav>
      <a href="tel:0498351351" class="nav-phone" aria-label="Call GemElec on 0498 351 351">
        <span class="nav-phone__icon" aria-hidden="true">📞</span>0498 351 351
      </a>
      <button class="nav-hamburger" id="nav-hamburger" aria-expanded="false" aria-controls="nav-mobile-overlay" aria-label="Open navigation menu">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="nav-mobile-overlay" id="nav-mobile-overlay" aria-label="Mobile navigation">
      <nav class="mobile-nav-links" aria-label="Mobile navigation links">
        <ul role="list">
          <li><a href="/" class="mobile-nav-link">Home</a></li>
          <li>
            <button class="mobile-nav-link" data-accordion="mobile-services" aria-expanded="false">
              Services <svg class="mobile-chevron" viewBox="0 0 10 6" fill="none" aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <div class="mobile-subnav" id="mobile-services">
              <a href="/services/">All Services</a>
              <a href="/services/emergency/">24/7 Emergency</a>
              <a href="/services/cctv-security/">CCTV &amp; Security</a>
              <a href="/services/lighting/">Lighting</a>
              <a href="/services/ev-chargers/">EV Chargers</a>
              <a href="/services/switchboard/">Switchboards</a>
              <a href="/services/test-tag/">Test &amp; Tag</a>
              <a href="/services/electrical-advice/">Electrical Advice</a>
              <a href="/services/general/">Everything Else</a>
            </div>
          </li>
          <li><a href="/about/" class="mobile-nav-link">About</a></li>
          <li><a href="/blog/" class="mobile-nav-link">Blog</a></li>
          <li><a href="/contact/" class="mobile-nav-link">Contact</a></li>
        </ul>
      </nav>
      <a href="tel:0498351351" class="mobile-phone-cta">📞 0498 351 351</a>
    </div>
  </header>

  <main id="main-content">

    <nav class="breadcrumb" aria-label="Breadcrumb" style="padding-top: calc(var(--nav-height) + 12px);">
      <div class="container">
        <ol class="breadcrumb__list">
          <li class="breadcrumb__item"><a href="/">Home</a></li>
          <li class="breadcrumb__item"><a href="/locations/">Locations</a></li>
          <li class="breadcrumb__item breadcrumb__item--current">Matraville</li>
        </ol>
      </div>
    </nav>

    <!-- HERO -->
    <section class="loc-hero" aria-labelledby="loc-hero-heading">
      <div class="container">
        <div class="loc-hero__inner">
          <div style="margin-bottom:var(--space-6);animation:locFadeUp 0.6s var(--ease-out) both;">
            <div class="badge-live" role="status" aria-live="polite">
              <span class="badge-live__dot" aria-hidden="true"></span>
              Available Right Now — 24/7
            </div>
          </div>
          <h1 class="loc-hero__headline" id="loc-hero-heading">
            <span class="line-1">Electrician in</span>
            <span class="line-2">Matraville</span>
          </h1>
          <p class="loc-hero__intro">
            GemElec is based right here on Bunnerong Road, Matraville — so when you call, response times are measured in minutes, not hours. The suburb's mix of post-war brick homes, light industrial pockets near Port Botany, and newer townhouse developments means our team handles everything from ageing fuse boards in 1960s houses to three-phase power for small workshops on the same day.
          </p>
          <p class="loc-hero__intro" style="margin-top: calc(var(--space-4) * -1);">
            Matraville sits at the edge of the Botany Industrial Park, which means a significant number of properties here carry commercial-grade demands on older residential infrastructure. We regularly upgrade switchboards, install dedicated circuits for home offices and garages, and bring properties up to current AS/NZS 3000 wiring standards — all while keeping the mess and disruption to a minimum.
          </p>
          <div class="loc-hero__ctas">
            <a href="#quote-form" class="btn btn--primary btn--lg">Get a Free Quote <span class="btn-arrow" aria-hidden="true">→</span></a>
            <span class="loc-hero__secondary">or call us now: <a href="tel:0498351351">0498 351 351</a></span>
          </div>
        </div>
      </div>
      <div class="loc-hero__divider" aria-hidden="true"></div>
    </section>

    <!-- TICKER -->
    <div class="ticker" aria-hidden="true">
      <div class="ticker__track">
        <div class="ticker__inner">
          <span class="ticker__item">Licensed &amp; Insured<span class="ticker__dot"></span></span>
          <span class="ticker__item">24/7 Emergency Response<span class="ticker__dot"></span></span>
          <span class="ticker__item">Matraville &amp; Greater Sydney<span class="ticker__dot"></span></span>
          <span class="ticker__item">Same-Day Availability<span class="ticker__dot"></span></span>
          <span class="ticker__item">Upfront Pricing<span class="ticker__dot"></span></span>
          <span class="ticker__item">15+ Years Experience<span class="ticker__dot"></span></span>
          <span class="ticker__item">5★ Google Rated<span class="ticker__dot"></span></span>
        </div>
        <div class="ticker__inner" aria-hidden="true">
          <span class="ticker__item">Licensed &amp; Insured<span class="ticker__dot"></span></span>
          <span class="ticker__item">24/7 Emergency Response<span class="ticker__dot"></span></span>
          <span class="ticker__item">Matraville &amp; Greater Sydney<span class="ticker__dot"></span></span>
          <span class="ticker__item">Same-Day Availability<span class="ticker__dot"></span></span>
          <span class="ticker__item">Upfront Pricing<span class="ticker__dot"></span></span>
          <span class="ticker__item">15+ Years Experience<span class="ticker__dot"></span></span>
          <span class="ticker__item">5★ Google Rated<span class="ticker__dot"></span></span>
        </div>
      </div>
    </div>

    <!-- SERVICES -->
    <section class="loc-services section--lg" aria-labelledby="loc-services-heading">
      <div class="container">
        <div class="section-eyebrow reveal">
          <div class="section-eyebrow__line" aria-hidden="true"></div>
          <span class="section-eyebrow__text">What we do in Matraville</span>
        </div>
        <h2 class="heading-lg reveal" id="loc-services-heading" style="margin-bottom:var(--space-10);">Electrical Services Near You</h2>
        <div class="loc-services__grid">
          <a href="/services/emergency/" class="loc-service-card reveal">
            <span class="loc-service-card__icon" aria-hidden="true">⚡</span>
            <p class="loc-service-card__name">24/7 Emergency</p>
            <p class="loc-service-card__desc">Lost power or facing an electrical fault? We respond fast across Matraville and surrounds, day or night.</p>
            <span class="loc-service-card__link">Learn more →</span>
          </a>
          <a href="/services/ev-chargers/" class="loc-service-card reveal reveal--delay-1">
            <span class="loc-service-card__icon" aria-hidden="true">🔌</span>
            <p class="loc-service-card__name">EV Chargers</p>
            <p class="loc-service-card__desc">Home and workplace EV charger installation. We handle the switchboard upgrade, wiring, and commissioning.</p>
            <span class="loc-service-card__link">Learn more →</span>
          </a>
          <a href="/services/lighting/" class="loc-service-card reveal reveal--delay-2">
            <span class="loc-service-card__icon" aria-hidden="true">💡</span>
            <p class="loc-service-card__name">Lighting</p>
            <p class="loc-service-card__desc">Downlight installs, sensor lighting, outdoor and feature lighting designed and installed to last.</p>
            <span class="loc-service-card__link">Learn more →</span>
          </a>
          <a href="/services/switchboard/" class="loc-service-card reveal reveal--delay-3">
            <span class="loc-service-card__icon" aria-hidden="true">🔧</span>
            <p class="loc-service-card__name">Switchboards</p>
            <p class="loc-service-card__desc">Switchboard upgrades and repairs to bring your home or business up to current safety standards.</p>
            <span class="loc-service-card__link">Learn more →</span>
          </a>
        </div>
      </div>
    </section>

    <!-- WHY GEMELEC -->
    <section class="why-section section--lg" aria-labelledby="why-heading">
      <div class="container">
        <div class="section-eyebrow reveal">
          <div class="section-eyebrow__line" aria-hidden="true"></div>
          <span class="section-eyebrow__text">Why GemElec in Matraville</span>
        </div>
        <h2 class="heading-md reveal" id="why-heading" style="margin-bottom:var(--space-10);">Local, Licensed &amp; Available Now</h2>
        <div class="why-service-grid">
          <div class="why-service-item reveal">
            <div class="why-service-item__mark" aria-hidden="true">✅</div>
            <div>
              <p class="why-service-item__title">Licensed &amp; Fully Insured</p>
              <p class="why-service-item__desc">All work carried out by licensed electricians holding current NSW contractor and Master Electrician licences. Fully insured for residential and commercial work.</p>
            </div>
          </div>
          <div class="why-service-item reveal reveal--delay-1">
            <div class="why-service-item__mark" aria-hidden="true">📍</div>
            <div>
              <p class="why-service-item__title">Local to Matraville</p>
              <p class="why-service-item__desc">Our depot is on Bunnerong Road — we know the streets, the housing stock, and the common electrical issues in this area. Faster response, less travel cost.</p>
            </div>
          </div>
          <div class="why-service-item reveal reveal--delay-2">
            <div class="why-service-item__mark" aria-hidden="true">⚡</div>
            <div>
              <p class="why-service-item__title">Fast Response, Any Hour</p>
              <p class="why-service-item__desc">Available 24/7 for emergencies — a real person answers the phone. For planned work we offer same-day and next-day bookings across Matraville.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- STATS BAR -->
    <div class="stats-bar" role="region" aria-label="Key statistics">
      <div class="container">
        <div class="stats-bar__grid">
          <div class="stats-bar__item reveal"><div class="stats-bar__num">15<span class="accent">+</span></div><p class="stats-bar__label">Years Experience</p></div>
          <div class="stats-bar__item reveal reveal--delay-1"><div class="stats-bar__num">24<span class="accent">/</span>7</div><p class="stats-bar__label">Emergency Response</p></div>
          <div class="stats-bar__item reveal reveal--delay-2"><div class="stats-bar__num">5<span class="accent">★</span></div><p class="stats-bar__label">Google Rated</p></div>
          <div class="stats-bar__item reveal reveal--delay-3"><div class="stats-bar__num">2<span class="accent">km</span></div><p class="stats-bar__label">From Our Depot</p></div>
        </div>
      </div>
    </div>

    <!-- QUOTE FORM -->
    <section class="quote-section section--lg" id="quote-form" aria-labelledby="quote-heading">
      <div class="container">
        <div class="quote-layout">
          <div>
            <div class="section-eyebrow reveal"><div class="section-eyebrow__line" aria-hidden="true"></div><span class="section-eyebrow__text">Get in touch</span></div>
            <h2 class="heading-lg reveal" id="quote-heading">Request a<br>Free Quote</h2>
            <p class="reveal reveal--delay-1" style="color:var(--text-secondary);line-height:1.7;">Tell us about the job and we'll get back to you promptly. For emergencies, call us directly — that's the fastest option.</p>
            <a href="tel:0498351351" class="quote-phone-cta reveal reveal--delay-2" aria-label="Call GemElec on 0498 351 351">
              <span class="quote-phone-cta__icon" aria-hidden="true">📞</span>
              <span><span class="quote-phone-cta__label">Call direct — any time</span><span class="quote-phone-cta__number">0498 351 351</span></span>
            </a>
          </div>
          <div class="quote-form-wrap reveal reveal--delay-1">
            <p class="form-title">Free Quote Request</p>
            <form name="matraville-quote" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/contact/?success=true" novalidate>
              <input type="hidden" name="form-name" value="matraville-quote">
              <p style="display:none;"><label>Don't fill this out: <input name="bot-field"></label></p>
              <div class="form-row">
                <div class="form-group"><label class="form-label" for="mq-name">Your name</label><input class="form-input" type="text" id="mq-name" name="name" placeholder="Jane Smith" required autocomplete="name"></div>
                <div class="form-group"><label class="form-label" for="mq-phone">Phone number</label><input class="form-input" type="tel" id="mq-phone" name="phone" placeholder="04xx xxx xxx" required autocomplete="tel"></div>
              </div>
              <div class="form-group">
                <label class="form-label" for="mq-service">Service needed</label>
                <select class="form-select" id="mq-service" name="service" required>
                  <option value="" disabled selected>Select a service…</option>
                  <option value="emergency">24/7 Emergency Call Out</option>
                  <option value="ev-charger">EV Charger Install</option>
                  <option value="lighting">Lighting Install / Upgrade</option>
                  <option value="switchboard">Switchboard Repair / Upgrade</option>
                  <option value="cctv">CCTV &amp; Security</option>
                  <option value="test-tag">Test &amp; Tag</option>
                  <option value="advice">Electrical Advice</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>
              <div class="form-group"><label class="form-label" for="mq-message">Tell us about the job</label><textarea class="form-textarea" id="mq-message" name="message" placeholder="Brief description of the work needed and your property type…"></textarea></div>
              <div class="form-submit"><button type="submit" class="btn btn--primary btn--lg" style="width:100%;">Send Quote Request <span class="btn-arrow" aria-hidden="true">→</span></button></div>
              <p class="form-note">We respond to all quote requests within one business hour during the day.</p>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- EMERGENCY CTA BAND -->
    <div class="cta-band" role="complementary" aria-label="Emergency contact">
      <div class="container">
        <div class="cta-band__text">
          <p class="cta-band__heading">24/7 Emergency Call Out</p>
          <p class="cta-band__sub">Lost power? Whatever the emergency, we respond fast.</p>
        </div>
        <a href="tel:0498351351" class="cta-band__phone" aria-label="Call GemElec on 0498 351 351">0498 351 351</a>
      </div>
    </div>

  </main>

  <footer class="site-footer" id="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="/" class="footer-logo" aria-label="GemElec home"><span class="footer-logo__wordmark"><span class="footer-logo__gem">GEM</span><span class="footer-logo__bolt">⚡</span><span class="footer-logo__elec">ELEC</span></span><span class="footer-logo__sub">Electrical Services</span></a>
          <p class="footer-tagline">Sydney's trusted electrical &amp; security experts. Residential &amp; commercial. Available 24/7 for emergencies across Greater Sydney.</p>
          <div class="footer-certs"><span class="footer-cert">Fully Licensed</span><span class="footer-cert">Fully Insured</span><span class="footer-cert">15+ Years Experience</span></div>
        </div>
        <div class="footer-col">
          <p class="footer-col-title">Services</p>
          <ul class="footer-links" role="list">
            <li><a href="/services/emergency/">24/7 Emergency</a></li>
            <li><a href="/services/cctv-security/">CCTV &amp; Security</a></li>
            <li><a href="/services/lighting/">Lighting</a></li>
            <li><a href="/services/ev-chargers/">EV Chargers</a></li>
            <li><a href="/services/switchboard/">Switchboards</a></li>
            <li><a href="/services/test-tag/">Test &amp; Tag</a></li>
            <li><a href="/services/general/">Everything Else</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <p class="footer-col-title">Locations</p>
          <ul class="footer-links" role="list">
            <li><a href="/locations/matraville/">Matraville</a></li>
            <li><a href="/locations/botany/">Botany</a></li>
            <li><a href="/locations/randwick/">Randwick</a></li>
            <li><a href="/locations/bondi/">Bondi</a></li>
            <li><a href="/locations/newtown/">Newtown</a></li>
            <li><a href="/locations/surry-hills/">Surry Hills</a></li>
            <li><a href="/locations/">All Locations →</a></li>
          </ul>
        </div>
        <div class="footer-col footer-contact">
          <p class="footer-col-title">Contact</p>
          <div class="footer-contact-item"><span class="footer-contact-icon" aria-hidden="true">📞</span><span class="footer-contact-text"><a href="tel:0498351351">0498 351 351</a></span></div>
          <div class="footer-contact-item"><span class="footer-contact-icon" aria-hidden="true">✉️</span><span class="footer-contact-text"><a href="mailto:info@gemelec.sydney">info@gemelec.sydney</a></span></div>
          <div class="footer-contact-item"><span class="footer-contact-icon" aria-hidden="true">📍</span><span class="footer-contact-text">587 Bunnerong Road<br>Matraville NSW 2036</span></div>
          <div class="footer-contact-item"><span class="footer-contact-icon" aria-hidden="true">🕐</span><span class="footer-contact-text">Available 24/7 for emergencies</span></div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
        <p class="footer-copyright">&copy; <script>document.write(new Date().getFullYear())</script> GemElec Electrical Services. All rights reserved.</p>
        <div class="footer-credentials"><span class="footer-credential">ABN: <span>92 647 631 267</span></span><span class="footer-credential">Master Licence: <span>000108133</span></span><span class="footer-credential">Contractor Licence: <span>376553C</span></span></div>
      </div>
    </div>
  </footer>

  <script src="/assets/js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Verify**

```bash
grep -c "matraville" locations/matraville/index.html
grep "form-name" locations/matraville/index.html
```

Expected: multiple slug references, form name `matraville-quote`.

- [ ] **Step 3: Commit**

```bash
git add locations/matraville/index.html
git commit -m "feat: build Matraville location page"
```

---

## Tasks 4–7 — Remaining 19 suburb pages

For each suburb below, copy the Matraville template (Task 3) and apply these substitutions:

| Variable | What to change |
|----------|---------------|
| `<title>` | `Electrician in [Suburb] \| GemElec` |
| `<meta name="description">` | Use value from Unique Content table |
| `canonical` + `og:url` | `https://www.gemelec.sydney/locations/[slug]/` |
| `og:title` | `Electrician in [Suburb] \| GemElec` |
| `og:description` | Same as meta description |
| `.loc-hero::before content` | Suburb name in UPPERCASE |
| `JSON-LD areaServed` | Suburb display name |
| Breadcrumb last item | Suburb display name |
| `h1 .line-2` | Suburb display name |
| `loc-hero__intro` (both `<p>`) | Para 1 and Para 2 from Unique Content table |
| Ticker 3rd item | `[Suburb] & Greater Sydney` |
| `section-eyebrow__text` (services) | `What we do in [Suburb]` |
| `section-eyebrow__text` (why) | `Why GemElec in [Suburb]` |
| Why item 2 body text | `…we know the streets…in [suburb]…` (brief local ref) |
| Stats bar 4th stat number | 4th Stat from table |
| Stats bar 4th stat label | 4th Label from table |
| `form name=""` and `value=""` | `[slug]-quote` |
| Form field IDs | `[abbrev]-name`, `[abbrev]-phone` etc. (prevent duplicate IDs) |

### Task 4 — Eastern suburbs batch (Botany, Mascot, Randwick, Coogee, Bondi)

- [ ] Write `locations/botany/index.html` — using Botany content from table. `::before content: 'BOTANY'`. Stats 4th: `5 min` / `To Port Botany`. Form: `botany-quote`.
- [ ] Write `locations/mascot/index.html` — `::before content: 'MASCOT'`. Stats 4th: `3 km` / `From Sydney Airport`. Form: `mascot-quote`.
- [ ] Write `locations/randwick/index.html` — `::before content: 'RANDWICK'`. Stats 4th: `UNSW` / `Precinct Covered`. Form: `randwick-quote`.
- [ ] Write `locations/coogee/index.html` — `::before content: 'COOGEE'`. Stats 4th: `Marine` / `Electrical Specialists`. Form: `coogee-quote`.
- [ ] Write `locations/bondi/index.html` — `::before content: 'BONDI'`. Stats 4th: `Bondi` / `Beach to North Bondi`. Form: `bondi-quote`.
- [ ] Commit: `git add locations/botany locations/mascot locations/randwick locations/coogee locations/bondi && git commit -m "feat: build Eastern Suburbs location pages (Botany, Mascot, Randwick, Coogee, Bondi)"`

### Task 5 — Inner suburbs batch (Surry Hills, Newtown, Kingsford, Kensington, Zetland)

- [ ] Write `locations/surry-hills/index.html` — `::before content: 'SURRY HILLS'`. Stats 4th: `Crown St` / `Corridor Covered`. Form: `surry-hills-quote`.
- [ ] Write `locations/newtown/index.html` — `::before content: 'NEWTOWN'`. Stats 4th: `King St` / `To Enmore Rd`. Form: `newtown-quote`.
- [ ] Write `locations/kingsford/index.html` — `::before content: 'KINGSFORD'`. Stats 4th: `UNSW` / `Surrounds Covered`. Form: `kingsford-quote`.
- [ ] Write `locations/kensington/index.html` — `::before content: 'KENSINGTON'`. Stats 4th: `Royal` / `Randwick Precinct`. Form: `kensington-quote`.
- [ ] Write `locations/zetland/index.html` — `::before content: 'ZETLAND'`. Stats 4th: `Green` / `Square Covered`. Form: `zetland-quote`.
- [ ] Commit: `git add locations/surry-hills locations/newtown locations/kingsford locations/kensington locations/zetland && git commit -m "feat: build inner suburbs location pages (Surry Hills, Newtown, Kingsford, Kensington, Zetland)"`

### Task 6 — Industrial/creative batch (Alexandria, Waterloo, Redfern, Paddington, Marrickville)

- [ ] Write `locations/alexandria/index.html` — `::before content: 'ALEXANDRIA'`. Stats 4th: `Warehouse` / `District Specialist`. Form: `alexandria-quote`.
- [ ] Write `locations/waterloo/index.html` — `::before content: 'WATERLOO'`. Stats 4th: `Inner` / `South Covered`. Form: `waterloo-quote`.
- [ ] Write `locations/redfern/index.html` — `::before content: 'REDFERN'`. Stats 4th: `Eveleigh` / `Precinct Covered`. Form: `redfern-quote`.
- [ ] Write `locations/paddington/index.html` — `::before content: 'PADDINGTON'`. Stats 4th: `Oxford St` / `To Five Ways`. Form: `paddington-quote`.
- [ ] Write `locations/marrickville/index.html` — `::before content: 'MARRICKVILLE'`. Stats 4th: `Marrickville` / `Metro & Surrounds`. Form: `marrickville-quote`.
- [ ] Commit: `git add locations/alexandria locations/waterloo locations/redfern locations/paddington locations/marrickville && git commit -m "feat: build inner west/south location pages (Alexandria, Waterloo, Redfern, Paddington, Marrickville)"`

### Task 7 — South Sydney batch (Sydenham, Wolli Creek, Rockdale, Brighton-le-Sands)

- [ ] Write `locations/sydenham/index.html` — `::before content: 'SYDENHAM'`. Stats 4th: `Airport` / `Line Corridor`. Form: `sydenham-quote`.
- [ ] Write `locations/wolli-creek/index.html` — `::before content: 'WOLLI CREEK'`. Stats 4th: `Arncliffe` / `To Wolli Creek`. Form: `wolli-creek-quote`.
- [ ] Write `locations/rockdale/index.html` — `::before content: 'ROCKDALE'`. Stats 4th: `St George` / `Area Covered`. Form: `rockdale-quote`.
- [ ] Write `locations/brighton-le-sands/index.html` — `::before content: 'BRIGHTON'`. Stats 4th: `Botany Bay` / `Foreshore Covered`. Form: `brighton-le-sands-quote`.
- [ ] Commit: `git add locations/sydenham locations/wolli-creek locations/rockdale locations/brighton-le-sands && git commit -m "feat: build south Sydney location pages (Sydenham, Wolli Creek, Rockdale, Brighton-le-Sands)"`

---

## Task 8 — Verification

- [ ] **Step 1: Count all 21 files**

```bash
find locations -name "index.html" | sort
find locations -name "index.html" | wc -l
```

Expected: 21 files listed, count = 21.

- [ ] **Step 2: Spot-check unique content (no copy-paste between pages)**

```bash
grep "line-2" locations/bondi/index.html
grep "line-2" locations/matraville/index.html
grep "form-name" locations/bondi/index.html
grep "form-name" locations/brighton-le-sands/index.html
```

Expected: Different suburb names; different form names.

- [ ] **Step 3: Spot-check Locations nav `active` (not Services)**

```bash
grep "nav-dropdown-trigger active" locations/bondi/index.html
grep "nav-dropdown-trigger active" locations/index.html
```

Expected: Both return the Locations trigger line (containing "Locations"), not the Services one.

- [ ] **Step 4: Start dev server**

```bash
npx serve . -p 3333
```

Or if a `package.json` start script exists:

```bash
npm start
```

Open `http://localhost:3333/locations/` and verify the hub grid loads, then check 2–3 suburb pages.

- [ ] **Step 5: Final commit**

```bash
git add docs/
git commit -m "chore: add locations implementation plan to docs"
```

- [ ] **Step 6: Push branch**

```bash
git push -u origin feat/locations
```

---

## Key rules for suburb pages (do not break these)

1. **No pre-selected service** — the `<select>` must have `<option value="" disabled selected>Select a service…</option>` with no other option having `selected`.
2. **Unique form name per suburb** — `name="[slug]-quote"` and `value="[slug]-quote"` must match the slug exactly.
3. **Locations trigger active, not Services** — `nav-dropdown-trigger active` must appear on the Locations `<button>`, never on Services for these pages.
4. **Breadcrumb depth** — Hub page: `Home → Locations`. Suburb pages: `Home → Locations → [Suburb]`.
5. **`::before content` watermark** — must be the suburb name in UPPERCASE. Long names (e.g. Brighton-le-Sands) use a shortened version (`BRIGHTON`).
6. **Two unique paragraphs** — both `<p class="loc-hero__intro">` elements must draw from the table — do not invent or generalise.
