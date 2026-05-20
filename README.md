# Hijaz · Studio + Portfolio

The main site for **Hijaz Studio** (an elite Abuja-based software engineering studio) lives at `/`. A `/portfolio` showcase routes to **six** distinct frontend projects — each with its own design system, motion language, and component architecture.

## Quick start

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # tsc + vite production build
npm run preview      # serve the production build
npm run lint         # tsc --noEmit
```

## Routes

| Route | Project | Status | Theme |
| --- | --- | --- | --- |
| `/` | **Hijaz Studio** — agency landing | live | dark · amber |
| `/portfolio` | Portfolio showcase index | live | dark · amber |
| `/arcade` | **Sunny & Soul** — bakery + arcade | live | dark · neon pink/violet/tangerine |
| `/commerce` | **Atelier Noir** — luxury commerce | live | **light** · paper + ink + gold |
| `/school` | **Sapientia** — school SaaS dashboard | live | **light** · sky blue / cyan / indigo |
| `/construction` | **Bedrock Works** — industrial construction | live | dark · charcoal + signal orange |
| `/estate` | **Maison Lagos** — luxury real estate | live | dark · onyx + champagne gold |

Three light themes, three dark themes — picked for variety, not symmetry.

## Directory layout

```
src/
├── App.tsx                     Router root, lazy routes per project
├── main.tsx                    BrowserRouter bootstrap
├── index.css                   Tailwind + CSS variable token system (light + dark)
├── lib/
│   ├── cn.ts                   clsx + tailwind-merge
│   └── motion.ts               Shared easings + Framer variants
├── components/
│   ├── ui/                     Shared shadcn-style primitives (Button, Card)
│   └── layout/                 RouteFallback, etc.
├── pages/
│   ├── PortfolioIndex.tsx      Showcase landing at /portfolio
│   ├── ComingSoon.tsx          Themed placeholder (kept around for future projects)
│   └── NotFound.tsx
└── portfolio/
    ├── registry.ts             Single source of truth for project metadata
    ├── agency/                 → /  (main Hijaz Studio site)
    │   ├── AgencyApp.tsx
    │   ├── components/{Navbar, ScrollProgress, Cursor, sections/*, three/*, ui/*}
    │   ├── data/{partners.tsx, projects.ts, testimonials.ts, team.ts, press.ts}
    │   ├── hooks/{useTheme, useLagosClock, useMousePosition, useScrollProgress}
    │   ├── lib/{cn, motion}
    │   └── README · PRD · FRD · CLAUDE · TASKS
    ├── arcade/                 → /arcade
    │   ├── ArcadeApp.tsx, components/*, data/*, store/reservation.ts, styles/arcade.css
    │   └── README · PRD · FRD · CLAUDE · TASKS
    ├── commerce/               → /commerce
    │   ├── CommerceApp.tsx, components/*, data/products.ts, store/cart.ts, styles/commerce.css
    │   └── README · PRD · FRD · CLAUDE · TASKS
    ├── school/                 → /school
    │   ├── SchoolApp.tsx, components/{Sidebar, Topbar, sections/*}, data/dashboard.ts, styles/school.css
    │   └── README · PRD · FRD · CLAUDE · TASKS
    ├── construction/           → /construction
    │   ├── ConstructionApp.tsx, components/*, data/projects.ts, styles/construction.css
    │   └── README · PRD · FRD · CLAUDE · TASKS
    └── estate/                 → /estate
        ├── EstateApp.tsx, components/*, data/properties.ts, styles/estate.css
        └── README · PRD · FRD · CLAUDE · TASKS
```

## Architecture principles

**One Vite project, seven worlds.** Every project is lazy-loaded — the agency landing at `/` ships none of arcade/commerce/school/construction/estate code.

**Theming via CSS variables, scoped per project.** The root `index.css` defines a generic dark/light token system with `[data-theme]`. Each project wraps its content in `.{slug}-root` and re-defines its own variables for its brand. Each project's `useEffect` sets `data-theme` on `<html>` on mount and restores on unmount.

**Per-project design system.** No shared visual language. Each project has its own:
- Typography pairing (different serifs, different display weights)
- Component primitives (no shared button across agency + arcade + commerce)
- Motion language
- CSS file under `styles/{slug}.css`

This is intentional — the brief is to demonstrate **six different worlds**, not one design system reused six times.

## Stack
- **Build** — Vite 5, TypeScript 5
- **UI** — React 18, TailwindCSS 3, Tailwind CSS Animate
- **Routing** — React Router 7
- **Motion** — Framer Motion 11, GSAP 3 + ScrollTrigger (agency, arcade)
- **3D** — React Three Fiber 8, Drei 9, Three.js 0.169 (agency, arcade only)
- **State** — Zustand (arcade reservation, commerce cart)
- **Primitives** — Radix UI (Dialog, Slot)
- **Icons** — Lucide React
- **Utilities** — `clsx`, `tailwind-merge`, `class-variance-authority`

## Bundle profile (all 6 projects live)

```
dist/assets/index.css                    Tailwind + CSS variable system   ~15 KB gz
dist/assets/index.js                     Router + chrome                  ~12 KB gz
dist/assets/PortfolioIndex.js            /portfolio                        ~5 KB gz   (lazy)
dist/assets/AgencyApp.js                 /                                ~21 KB gz   (lazy)
dist/assets/ArcadeApp.js                 /arcade                          ~16 KB gz   (lazy)
dist/assets/CommerceApp.js               /commerce                         ~9 KB gz   (lazy)
dist/assets/SchoolApp.js                 /school                           ~8 KB gz   (lazy)
dist/assets/ConstructionApp.js           /construction                     ~9 KB gz   (lazy)
dist/assets/EstateApp.js                 /estate                           ~8 KB gz   (lazy)
dist/assets/motion.js                    Framer Motion (shared)           ~73 KB gz   (lazy)
dist/assets/three.js                     R3F + Drei + Three (shared)     ~286 KB gz   (lazy, only on /, /arcade)
dist/assets/{HeroScene,DonutScene,AmbientField}.js    each scene          < 1.1 KB gz (lazy)
```

Visiting `/` loads agency + framer-motion + three. Visiting `/commerce` loads commerce + framer-motion only — **no Three.js, no GSAP**.

## Conventions
- TypeScript strict, no `any` in component props
- All product/portrait/scene imagery `loading="lazy"` + `decoding="async"`
- All R3F scenes lazy-imported behind `React.lazy + Suspense`
- `prefers-reduced-motion` disables animations (handled globally in `src/index.css`)
- Mobile-first responsive; every project has been built with the mobile breakpoint in mind

## Per-project docs

Every project ships with its own `README.md`, `PRD.md`, `FRD.md`, `CLAUDE.md`, and `TASKS.md` under `src/portfolio/{slug}/`. Read the project-level `CLAUDE.md` before extending — it captures the design philosophy that the code alone doesn't make obvious.

## License
Private — for portfolio use by Hijaz Studio.
