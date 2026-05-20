# 06 · Maison Lagos — Luxury Real Estate

Quiet brokerage for high-end Nigerian property. Black + champagne-gold luxury identity, serif typography, off-market positioning. Cinematic property hero, filterable 6-listing portfolio, working mortgage calculator with live sliders, principal brokers page, and a "we show quietly" CTA card.

**Route** `/estate` · **Status** Live · **Theme** dark · onyx `#0A0A0B` + champagne gold `#C9A24B` + cream

## Stack
React · TypeScript · Vite · TailwindCSS · Framer Motion · Lucide React. Live mortgage calculation in pure React (no library).

## Composition

```
EstateApp
├── EstateNavbar           (centred wordmark · top bar · secondary bordered nav row)
├── EstateHero             (cinematic photo overlay · serif headline w/ italic flourish · cover property card)
├── EstateListings         (6-filter chip nav · 6 listings in 2-col grid · status pills · gold accents)
├── MortgageCalculator     (4-slider form + live computed monthly/down/principal/interest stats)
├── EstateBrokers          (3 principal-broker portraits · grayscale → color on hover)
├── EstateCTA              ("We show quietly." card · safety/gold rule top + bottom · offices list)
└── EstateFooter           (3-col + ₦89B closed stat strip + huge gold gradient wordmark)
```

## Data
`data/properties.ts` — 6 fictional listings across Lagos, Abuja, Cross River. NGN pricing in billions/millions. 3 principal brokers (Adaeze, Tunde, Chiamaka). `formatNGN` helper formats prices as `₦4.80B` / `₦480M`.

## Notes
- Dark theme — `data-theme="dark"` set on `<html>` on mount, restored on unmount
- Typography: **Cormorant Garamond** display serif + Cormorant italic for the script flourish + **Inter** body + **JetBrains Mono** for tracking/metadata
- Single accent: **champagne gold** `#C9A24B`. Used on primary buttons, hover states, prices, and the gradient wordmark.
- Mortgage calculator: monthly payment formula is the standard amortization equation, computed in a `useMemo`. No state lives outside the component.
- Listing cards have a hover-only gold gradient overlay (mix-blend-overlay) for subtle warmth
