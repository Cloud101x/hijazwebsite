# CLAUDE.md · Atelier Noir (Commerce)

> Read this before changing anything in `src/portfolio/commerce/`.

## UI philosophy
Atelier Noir is **editorial light**. The site should feel like opening a small print magazine — quiet, considered, lots of whitespace, every detail intentional.

- The brand is *serif*. Headlines use Playfair Display. Resist switching to Inter for headlines.
- Whitespace is the loudest design element. Sections breathe at `py-28 md:py-36`.
- Champagne gold (`--gold` = `#B0863A`) appears only in micro-doses: chip checkmarks, swatch highlights, the journal flourish. Never as a button background.
- Buttons are ink-on-paper (primary) or paper-with-ink-border (ghost) — never gold.

If a change feels "Shopify-template", you've broken the brief. Pull back.

## Typography
| Family | Class | Use |
| --- | --- | --- |
| Playfair Display | `font-display` | Headlines, prices, product names |
| Playfair Display italic | `font-script` | Single accent words ("objects.", "no more.", "pour") |
| Inter | (default) | Body, captions, buttons |
| JetBrains Mono | `font-mono` | Metadata, badges, references |

Display sizes are clamped: `text-[clamp(2.25rem,5vw,3.5rem)]` to `text-[clamp(3rem,8vw,7.5rem)]`. Don't hard-code huge px values.

## Color tokens (`.commerce-root`)
```
--paper, --paper-warm, --paper-deep   light backgrounds (cream → tan)
--ink, --ink-soft, --ink-tertiary     text
--line, --line-strong                 borders
--gold, --gold-soft                   accents (micro-doses only)
--rust                                button hover / press
--sage                                editorial accent (eg. vegan dot)
```

## Motion
- Section reveals: `whileInView` with `viewport={{ once: true, margin: '-60px' }}`, duration 0.85–1.1s, ease `[0.16, 1, 0.3, 1]`
- Cart drawer slide: `x: 100% → 0`, duration 0.6s
- Product card image hover: `scale-[1.04]` over 1200ms ease
- No bouncy springs, no auto-rotating carousels

## Architecture
- `components/sections/*` — landing-page sections
- `components/Navbar.tsx`, `components/CartDrawer.tsx` — global chrome
- `data/products.ts` — typed product data + `editorial` block + `formatPrice` helper
- `store/cart.ts` — Zustand cart store (single source of truth for bag state)
- `styles/commerce.css` — scoped tokens + `.commerce-btn-*` + `.commerce-chip` + `.commerce-link` + `.commerce-grain`

## Don'ts
- Don't introduce a second accent colour
- Don't add discount badges, urgency timers, or "people are viewing this" widgets
- Don't replace the centred-logo navbar with a left-aligned one — the editorial centre alignment is load-bearing
- Don't bundle a charting/animations library — pure CSS + Framer is enough
