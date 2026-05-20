# FRD · Hijaz Studio (Agency)

## Functional requirements

### F-01 · Cinematic Hero
- Two-line word-by-word reveal headline ("Engineered in Abuja. Trusted by the world.")
- Live Lagos clock (timezone `Africa/Lagos`, 1s tick) appears in:
  - Status chip at top
  - Preview card titlebar
  - Floating annotation card (xl breakpoint+)
- Corner brackets on all four hero corners
- Vertical side rails (`writing-mode: vertical-rl`) on left/right (lg+)
- R3F preview card: distorted icosahedron + orbit rings + sparkles. Lazy-loaded.
- Three floating annotation cards (xl+): Lagos pod status / ₦18.42B routed / Awwwards SOTD
- Bottom KPI band: ₦4.8T payments · 14 markets · 42 senior staff · 99.97% uptime
- Press marquee: TechCabal, Rest of World, Disrupt Africa, BusinessDay NG, Quartz Africa, TechCrunch

### F-02 · Trusted-by marquee
- 15 African brand SVG wordmarks (Flutterwave, Paystack, Andela, Kuda, Moniepoint, …)
- CSS `animate-marquee` 40s linear loop
- Hover increases opacity and adds amber drop-shadow

### F-03 · Featured projects
- 4 case studies with cover image + 3 scene tiles
- Scroll-tracked left rail draws as the section scrolls (Framer `useScroll` + `useTransform`)
- Each card: client / category / award badge / metric / tag chips / open icon

### F-04 · Process timeline
- 5 steps with animated rail fill (Framer `useScroll`)
- Per-step artifacts displayed as chips

### F-05 · Stats
- 6 stats with `framer-motion` `animate()` count-up triggered on `useInView`
- 2 decimal precision configurable per stat

### F-06 · Studio section
- 1 large room photo with founder quote overlay
- 4 portrait cards with name / role / location / former

### F-07 · Testimonials
- 5-up bento grid with featured testimonial spanning 2 rows
- Avatar photos in amber ring-offset circles

### F-08 · CTA section
- Dual column with mock brief form preview
- Floating amber glow background

### F-09 · Cursor (desktop only)
- Two SVG circles tracked via spring animation
- Detects interactive elements via `target.closest('a, button, …')` and scales inner dot down + outer ring up

### F-10 · Theme
- `useTheme` exposes light/dark toggle, persists in `localStorage` under `hijaz-theme`
- Writes `data-theme` to `<html>` on mount and on every change
- All component colors reference CSS variables (`--accent`, `--bg-primary`, …)

## Non-functional
- Lighthouse perf ≥ 85 mobile, ≥ 95 desktop
- `prefers-reduced-motion` disables all animations
- Mobile-friendly: cursor disabled on coarse pointers, side rails hidden < lg, floating cards hidden < xl
- All Unsplash images lazy-loaded with `loading="lazy"` + `decoding="async"`
- Lazy-load Three.js scenes (`HeroScene`, `AmbientField`) — agency route is ~21 KB gz without Three; Three is its own 285 KB gz shared chunk
