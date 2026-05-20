# 02 · Sunny & Soul — Bakery + Arcade

Neon-lit Lagos bakery-arcade with reservations, menu, tournament calendar, and a Zustand-backed reservation drawer. Horizontal-scroll gallery, R3F sprinkled donut, marquee ribbons, scanlines, and a script-flicker headline.

**Route** `/arcade` · **Status** Live · **Theme** dark + neon pink/violet/tangerine

## Stack
React · TypeScript · Vite · TailwindCSS · Framer Motion · GSAP (ScrollTrigger) · R3F · Drei · Zustand · Radix Dialog · Lucide React

## Composition

```
ArcadeApp
├── ArcadeNavbar          (scroll-aware, reserve CTA opens drawer)
├── ArcadeHero            (R3F sprinkled donut + corner brackets + floating badges)
├── ArcadeMarquee         (scrolling event ticker)
├── ArcadeMenu            (4-filter chip nav + animated card grid)
├── ArcadeGames           (6-cabinet grid with difficulty bars + leaders)
├── ArcadeEvents          (7-day calendar with capacity meters)
├── ArcadeGallery         (parallax-scrolling horizontal photo strip)
├── ArcadeTestimonialsSection (4-up review grid)
├── ArcadeCTA             (location + opening hours card)
└── ArcadeFooter          (4-col + giant wordmark)

ReservationDrawer         (Radix Dialog, slide-from-right, Zustand state)
```

## Data
`data/menu.ts`, `data/games.ts`, `data/events.ts`, `data/testimonials.ts`, `data/gallery.ts`. All copy is for a fictional Lagos bakery + arcade ("Sunny & Soul") on Herbert Macaulay Way, Yaba.

## State
`store/reservation.ts` — Zustand store holding party size, date, time, table preference, and drawer open state. Used by `ArcadeNavbar`, `ArcadeHero`, `ArcadeCTA`, and `ReservationDrawer`.

## Notes
- Arcade scopes all theme tokens inside `.arcade-root` (see `styles/arcade.css`). Page-level CSS variables don't leak in or out.
- The whole site uses **3 type families**: `font-display` (Bricolage Grotesque-ish), `font-script` (Caveat for accents), `font-pixel` (JetBrains Mono for cabinet HUD chrome).
- Reservation drawer uses Radix Dialog primitives for keyboard / focus management.
- Gallery scroll uses `useScroll` + `useTransform` against the section container — no third-party scroll hijacking.
