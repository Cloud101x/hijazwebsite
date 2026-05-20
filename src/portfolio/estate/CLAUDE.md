# CLAUDE.md · Maison Lagos (Real Estate)

> Read this before changing `src/portfolio/estate/`.

## UI philosophy
**Black and gold luxury.** This is a small brokerage that handles ₦4B houses. The site should feel like a Hermès lookbook, not Zillow. Generous serif type, hairline gold rules, and lots of black space.

- **The price is the point.** Never hide it. Always set it in display serif gold.
- **Off-market is a feature, not a bug.** Status pills (Off market, Reserved) are matter-of-fact, not exciting.
- **Three brokers, three names.** This is a human business — don't replace the brokers grid with a generic team grid.

## Color tokens (`.estate-root`)
```
--bg, --bg-2, --bg-3       onyx layers
--text, --text-soft, --text-tertiary, --text-muted   cream-tinted whites
--line, --line-strong      hairline borders
--gold, --gold-deep        the only accent (used liberally for type, sparingly for surfaces)
--gold-glow                shadow / radial glow
--cream, --champagne       softer warm whites for body and hover states
```

## Typography
| Family | Class | Use |
| --- | --- | --- |
| Cormorant Garamond | `font-display` | All headlines, prices, names |
| Cormorant italic | `font-script` | Single accent words ("considered", "Lagos", "quietly", "in full") |
| Inter | (default) | Body, button labels |
| JetBrains Mono | `font-mono` | Mono metadata, references, kicker text |

Tracking on mono uppercase is wide: `0.22em` → `0.36em`. Never tighter.

## Motion
- Section reveals: `whileInView` with `viewport={{ once: true, margin: '-60px' }}`, duration 0.85–1s, ease `[0.16, 1, 0.3, 1]`
- Listing card image: `scale-[1.06]` over 1400ms ease on hover (slow on purpose)
- Broker portrait: grayscale 60% → 0% over 1400ms — also slow
- Mortgage sliders: no animation. They must feel direct and snappy.
- `.estate-link` underline draws via `scaleX(1) → scaleX(0)` over 0.6s on hover (the line *erases* — not a typical hover)

## Architecture
- `components/Navbar.tsx` — sticky chrome
- `components/sections/*` — Hero, Listings, Mortgage, Brokers, CTA, Footer
- `data/properties.ts` — typed properties + agents + `formatNGN`
- `styles/estate.css` — scoped tokens + `.estate-btn-*` + `.estate-chip` + `.estate-rule-gold` + `.estate-grain`

## Don'ts
- Don't introduce a second accent colour beyond champagne gold
- Don't round the corners more than slightly — this is editorial, not Bootstrap
- Don't pluralise or use exclamation marks. Brand voice is calm.
- Don't add a virtual tour viewer or a 360° widget. Private viewings are part of the service.
- Don't bold body copy. Emphasis is achieved with the italic serif, not weight.
