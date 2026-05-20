# 03 · Atelier Noir — Luxury Commerce

A small house of slow goods, fictional brand based in Lagos. Editorial light-theme e-commerce site with hand-poured product photography, filterable catalogue, mock checkout, animated cart drawer, and a quiet journal section.

**Route** `/commerce` · **Status** Live · **Theme** light · paper white + ink + champagne gold accent

## Stack
React · TypeScript · Vite · TailwindCSS · Framer Motion · Zustand (cart) · Radix Dialog (drawer) · Lucide React

## Composition

```
CommerceApp
├── CommerceNavbar         (logo centred, top + secondary nav rows, cart icon w/ count)
├── CommerceHero           (editorial cover piece, hero image card + studio detail card)
├── CommerceMarquee        (warm cream ribbon, paper-noise marquee)
├── CommerceCatalog        (5-filter chip nav + animated grid)
├── CommerceFeaturedPiece  (mosaic gallery + swatch picker + ₦ stepper + "Add to bag")
├── CommerceEditorial      (atelier journal letter + maker locations)
└── CommerceFooter         (3-col + newsletter + huge ink-tinted wordmark)

CartDrawer                  (Radix slide-from-right, Zustand-backed, qty stepper + remove)
```

## State
`store/cart.ts` — Zustand cart with `add`/`remove`/`inc`/`dec`/`openCart`/`closeCart`/`subtotal`/`count`. Adding a product auto-opens the drawer.

## Data
`data/products.ts` — 6 fictional pieces (vessels, candles, throws, dinner services, stools, notebooks) made by seven hands across Lagos/Abeokuta/Iseyin/Ibadan. NGN pricing in thousands.

## Notes
- Light theme — `data-theme="light"` set on `<html>` on mount, restored on unmount
- Typography pairing: **Playfair Display** (editorial serif, also for the script italic flourish) + **Inter** body + **JetBrains Mono** for metadata
- All accent gold (`--gold` = `#B0863A`) is used in micro-quantities — chip checkmarks, swatch hovers, the journal flourish. Never as a button background.
