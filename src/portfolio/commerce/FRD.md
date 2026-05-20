# FRD · Atelier Noir (Commerce)

## Functional requirements

### F-01 · Navbar
- Centred wordmark with serif logotype + small mono kicker `est. mmxxiv · lagos`
- Top row: showcase backlink (md+) / logo / search · profile · cart
- Secondary nav row beneath top border with mono uppercase category links
- Cart icon shows live count badge when `count > 0` (Zustand `useCart`)
- Mobile menu: rounded glass dropdown anchored under the navbar

### F-02 · Hero
- Editorial layout: copy column + image card column (lg:1fr/1.1fr)
- Hero image is the cover piece — `<img loading="eager">`
- Floating "made in" card overlaps image bottom-left at md+
- Hero stats strip: 18 pieces / 7 makers / 14d ship

### F-03 · Marquee
- Warm-cream ribbon, single 48s linear loop
- Mask-image fade on both edges
- Contents include shipping info, repair guarantee, atelier issue

### F-04 · Catalog (filterable)
- 5 categories + "All" as chip-pill nav
- `AnimatePresence + layout` for card transitions on filter change
- 6 product cards: image (lazy), badge, swatch dots, ₦price, "View piece" link, hover-reveal `+` add button

### F-05 · Featured piece
- Single product spotlight: mosaic gallery (1 tall + 2 square) + product detail rail
- Swatch picker, qty stepper, primary add button shows live total (`price × qty`)
- Origin / material info row, shipping + guarantee callouts

### F-06 · Editorial
- 2-col layout: cover image + atelier letter
- Letter cites makers (Iseyin, Abeokuta, Ibadan) — pulled from `data/products.ts > editorial`

### F-07 · Cart drawer
- Radix `Dialog.Root` with custom slide-from-right `Dialog.Content`
- Empty state: shopping bag icon + soft copy + "Browse the season" CTA
- Line items: image, name, category, qty stepper, remove
- Sticky footer: subtotal, free shipping note, primary checkout button
- Adding a product (anywhere) auto-opens the drawer

### F-08 · Footer
- Brand block + newsletter input + 3-column nav
- Giant `atelier noir.` wordmark, 16vw, ink/10 tint

## Non-functional
- Lighthouse perf ≥ 88 mobile, ≥ 96 desktop
- `prefers-reduced-motion` disables animations
- All product imagery lazy-loaded
- Bundle: CommerceApp ~8.7 KB gz (lazy) + commerce.css 1 KB gz
