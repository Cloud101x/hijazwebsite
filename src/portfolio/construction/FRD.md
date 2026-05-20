# FRD · Bedrock Works (Construction)

## Functional requirements

### F-01 · Navbar
- Sticky, transparent at top, blurred-dark when scrolled
- Square orange logo tile with HardHat icon + stencil wordmark `BEDROCK · works · est. 1998`
- Stencil nav (5 items) hidden < lg
- Phone CTA + Request-quote primary CTA (clipped-corner button) always visible

### F-02 · Hero
- Background: drone-style construction photo at 70% opacity with two black-gradient overlays + faint grid mask
- Safety-tape strip pinned across the section at ~96px from top (md+)
- 3-chip status row: 14 active sites · ISO certifications · est. 1998 Abuja HQ
- Massive 3-line headline: BUILDING / NIGERIA (orange) / STRAIGHTER.
- 4-up KPI band: 180+ projects · ₦620B value · 1.3M safe man-hrs · 12 states
- Floating "live · site 04" card (xl+) showing Lekki Solar Farm at 72% complete with mini progress bar

### F-03 · Ticker
- Single 38s stencil marquee, edges masked
- 6 ticker items: active sites count · certifications · safety stat · local content · solar built · client list

### F-04 · Projects
- 7-filter chip nav (All + 6 trade types)
- 6 cards in 2-col grid (lg+)
- Each card: cover image + status pill (Delivered/In progress/Handover, color-themed) + trade chip + reference number · year · name · location · client + 3-stat divided footer (value · duration · scope)

### F-05 · Capabilities
- 6-up hairline-divided grid (md:2, lg:3)
- Each cell: mono ID + metric · arrow on hover · display title · paragraph · giant translucent index number revealed on hover

### F-06 · Process
- 5-step timeline with vertical orange rail
- Rail fills from 0% → 100% as section scrolls past (Framer `useScroll` + `useTransform`)
- Each step: display number (orange) · duration · title · description
- Step indicator dot anchored to the rail

### F-07 · Equipment
- 4 owned-plant cards: tower cranes / excavators / concrete trucks / asphalt plants
- Image + category + name + unit count

### F-08 · Quote CTA
- Large card with safety-tape borders top + bottom
- Soft orange radial glow top-right
- Two columns: copy + CTAs / office-info card with 4-up KPI mini-grid (response time / site visit / proposal lead time / guarantee)

### F-09 · Footer
- Brand block (logo + intro + 3-stat safety mini-grid) + 3-column nav
- Bottom legal row
- Giant BEDROCK wordmark (display 18vw, ~4% white tint)

## Non-functional
- Lighthouse perf ≥ 85 mobile (hero image is large; consider AVIF in production)
- `prefers-reduced-motion` disables animations
- Bundle: ConstructionApp ~8.5 KB gz (lazy)
- Process-timeline scroll-tracking does not jank on mobile (uses `useScroll` viewport, not scrubbed elements)
