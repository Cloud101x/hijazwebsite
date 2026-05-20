# 05 · Bedrock Works — Construction & Industrial

Industrial-premium site for a fictional Nigerian construction group (est. 1998, Abuja). Bold display typography, scrolling safety-tape accents, dark charcoal palette with a single signal-orange. Drone-style hero, filterable project grid, capabilities grid, animated process rail, owned-plant showcase, and a quote-request CTA card.

**Route** `/construction` · **Status** Live · **Theme** dark · charcoal `#0F0F10` + orange `#F97316` + safety yellow

## Stack
React · TypeScript · Vite · TailwindCSS · Framer Motion (incl. `useScroll` + `useTransform` for the process rail) · Lucide React

## Composition

```
ConstructionApp
├── ConstructionNavbar      (logo block · stencil nav · phone CTA · clipped-corner Request-quote)
├── ConstructionHero        (drone image overlay + safety-tape strip + ₦KPI band + live-site card)
├── ConstructionTicker      (single-row stencil marquee)
├── ConstructionProjects    (7-filter chip nav + 6 project cards w/ status pills)
├── ConstructionCapabilities (6-up capability grid · hairline-divided · giant index numbers on hover)
├── ConstructionProcess     (5-step scroll-tracked timeline w/ animated orange rail)
├── ConstructionEquipment   (4 owned-plant cards · category · unit count)
├── QuoteCTA                (large card · KPI mini-grid · phone + form CTAs · safety tape edges)
└── ConstructionFooter      (4-col · safety record stats · huge BEDROCK wordmark)
```

## Data
`data/projects.ts` — 6 fictional projects (high-rise, BRT, solar, container yard, civic, residential), 6 capabilities, 5 process steps, 4 equipment categories, ticker.

## Notes
- Stencil typography pattern: `font-display` is Manrope at weight 800, `font-stencil` is Inter 800 uppercase
- Signal orange (`--orange` = `#F97316`) is the only saturated color — used for buttons, accents, headline highlights
- Safety yellow (`--safety` = `#FACC15`) only appears in two places: the diagonal safety-tape strip and the live-status pulsing dot
- `clip-path: polygon(...)` on the primary button creates an angled industrial shape — keep it
- Process timeline rail draws from 0% → 100% as you scroll past the section (Framer `useScroll` + `useTransform`)
