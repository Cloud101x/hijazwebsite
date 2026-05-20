# FRD · Maison Lagos (Real Estate)

## Functional requirements

### F-01 · Navbar
- Sticky, transparent at top, blurred at scroll > 24px
- Top row: showcase backlink / centred wordmark (mono kicker + serif "Maison *Lagos*") / search · phone
- Secondary nav row with 6 mono uppercase items (Buy / Lease / Off-market / Mortgage / Brokers / Journal)

### F-02 · Hero
- Full-bleed cover-property image with deep dark gradients
- Status chip + reference chip pair
- 3-line serif headline: "Quiet houses / for *considered* / owners." (italic on accent word)
- Subhead in display serif italic
- Two CTAs: primary (gold-on-onyx) + ghost
- Cover-property card overlapping bottom: reference · status · neighbourhood · name · gold rule · price · bed/bath/sqm row · "Open file" CTA

### F-03 · Listings
- 6-filter chip nav (All + 5 property types)
- 2-col grid (md+), 1-col (mobile)
- Per card: cover image + status pill (color-themed) + reference number + neighbourhood line + gold-rule + price (gold) + blurb + bed/bath/sqm row + "View file" link

### F-04 · Mortgage calculator
- 4 sliders: price (₦300M–₦5B step ₦50M) / down% (10–80) / years (5–30) / rate% (6–28, 0.5 step)
- Live `useMemo` computation of: monthly payment, down payment, principal, total interest
- 2×2 stats grid below sliders, monthly payment styled prominently in gold
- Left column: 2×2 mini-grid (lenders count / median LTV / arrangement days / NHF eligible)
- Primary "Pre-qualify with a broker" CTA

### F-05 · Brokers
- 3 broker cards in a hairline-divided 3-col grid
- Per card: 3:4 portrait with grayscale → color on hover, gold gradient overlay on hover, mono "No. 01/02/03" badge, name + title overlaid bottom-left
- Bottom of card: blurb + gold rule + closed-volume stat + small open-icon button

### F-06 · CTA
- Card with grain texture and double gold rules (top + bottom)
- Soft gold radial glow top-centre
- Two columns: copy ("We show *quietly*.") + CTAs / offices list with Lagos · Abuja · London (satellite)

### F-07 · Footer
- 3-col + brand block with mono kicker + serif wordmark
- 3-stat mini-grid: ₦89B closed / 64% off-market / 4 offices
- Huge "maison lagos." wordmark with gold gradient + fade-down

## Non-functional
- Lighthouse perf ≥ 88 (no third-party scripts beyond Google Fonts)
- All listing imagery lazy-loaded
- Mortgage calc is pure React + Tailwind — no third-party form library
- Bundle: EstateApp ~8.2 KB gz (lazy)

## Data shapes
- `Property` — id, reference, name, neighbourhood, city, price (NGN), currency, status, bedrooms, bathrooms, sqm, type, blurb, features[], cover, gallery[], agent
- `Agent` — id, name, title, city, closed, avatar, blurb
- `formatNGN(amount)` → "₦4.80B" / "₦480M" / "₦240,000"
