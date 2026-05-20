# 01 · Hijaz Studio — Agency Site

Cinematic dark UI for an Abuja-based product engineering studio. Animated R3F hero, glassmorphism throughout, scroll-driven case studies, custom cursor, and a Lagos-timezone live clock pinned in the hero.

**Route** `/agency` · **Status** Live · **Theme** dark · amber accent

## Stack
React · TypeScript · Vite · TailwindCSS · Framer Motion · GSAP (ScrollTrigger) · React Three Fiber · Drei

## Composition

```
AgencyApp
├── ThemeProvider          (data-theme="dark" on <html>)
├── Cursor                 (custom dual-ring follower)
├── ScrollProgress         (top ember bar)
├── Navbar                 (scroll-aware glass)
├── Hero                   (R3F donut + ambient field, Lagos clock, corner brackets)
├── TrustedBy              (African brand SVG marquee)
├── Services               (6-up capability grid)
├── FeaturedProjects       (scroll-tracked timeline)
├── TechStack              (filterable chip cloud)
├── WhyChooseUs            (4 pillar cards with bespoke SVG visuals)
├── Process                (5-step timeline with animated rail)
├── Stats                  (CountUp metrics)
├── Studio                 (NYC-style room photo + 4 team portraits)
├── Testimonials           (bento grid with featured quote)
├── CTA                    (mock brief form)
└── Footer                 (4-col + giant wordmark)
```

## Data
All copy data lives in `data/` — `partners.tsx` (SVG wordmarks), `projects.ts`, `testimonials.ts`, `team.ts`, `press.ts`. Replace these to ship a different studio brand.

## Notes
- The agency owns `useTheme` (it's a per-project hook, not portfolio-wide). The portfolio index forces `data-theme="dark"` for itself.
- `HeroScene` and `AmbientField` are lazy-loaded — Three.js loads only when `/agency` is visited.
- The Lagos clock uses `Intl.DateTimeFormat({ timeZone: 'Africa/Lagos' })` and ticks every 1s.
