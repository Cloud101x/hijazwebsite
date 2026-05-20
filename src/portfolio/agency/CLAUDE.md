# CLAUDE.md · Hijaz Studio (Agency)

> Instructions for AI agents and engineers extending this project. Read this before changing anything in `src/portfolio/agency/`.

## UI philosophy
The agency site is **cinematic dark glassmorphism** — confident, restrained, expensive. Visual weight comes from:
1. Generous whitespace and slow, deliberate motion (easings of 0.9–1.4s)
2. Amber accent (`var(--accent)` → `#FF6A00`) used surgically, never decoratively
3. Layered glass cards with subtle gradient borders (`.border-gradient`)
4. Off-white (`#F5F5F5`) text, never pure white

If a change makes the page feel "loud" or "playful", you've broken the brief. Remove it.

## Motion guidelines
| Pattern | Easing | Duration |
| --- | --- | --- |
| Hero word reveal | `[0.16, 1, 0.3, 1]` (`easeOutExpo`) | 1.1s |
| Section reveal on scroll | `easeOutExpo` | 0.85–0.95s |
| Hover lift | spring (320, 22) | n/a |
| GSAP ScrollTrigger fades | `expo.out` | 1.0s, stagger 0.07s |

**Never** use bouncy springs, ease-out-back, or anything > 1.4s on entrance. Lazy reveals only — no auto-play loops longer than 6s.

## Typography
- **Display headings** — `Instrument Serif` italic for accent words, `Inter` semibold for primary
- **Body** — `Inter` 400/500, off-white
- **Mono** — `JetBrains Mono` for metadata, timestamps, version numbers
- Display sizes use clamp utilities in `tailwind.config.js`: `text-display-xl`, `text-display-lg`, `text-display-md`. Don't hard-code font sizes for headlines.

## Spacing system
- Section vertical padding: `py-28 md:py-36`
- Container: `.container-custom` (`max-w-[1320px]`, `px-5 md:px-10`)
- Card padding: `p-6 md:p-8` for most, `p-10 md:p-16` for hero/CTA
- Grid gaps: `gap-px` for hairline-divided grids, otherwise `gap-4` / `gap-5` / `gap-6`

## Color usage
All colors flow through CSS variables. Never hard-code hex values in JSX — use:
- `text-[var(--text-primary)]` / `text-[var(--text-secondary)]` / `text-[var(--text-tertiary)]`
- `bg-[var(--bg-primary)]` / `bg-[var(--card-bg)]` / `bg-[var(--surface-glass)]`
- `border-[var(--border-subtle)]` / `border-[var(--border-medium)]` / `border-[var(--accent)]`
- Accent: `text-[var(--accent)]` or the Tailwind alias `text-amber`

The agency wrapper sets `data-theme="dark"` on `<html>` on mount and restores it on unmount.

## Component architecture
- `components/sections/*` — one component per landing-page section, default export omitted
- `components/ui/*` — primitives used inside sections (SectionHeading, GlowOrb, AmberButton)
- `components/three/*` — R3F scenes, always lazy-imported with React.lazy + Suspense
- `data/*.ts(x)` — all copy data, no JSX in `.ts` files (except `partners.tsx`)
- `hooks/*` — agency-only hooks. If a hook is reusable across projects, lift it to `src/hooks/`.

## Adding a new section
1. Create `components/sections/MySection.tsx` exporting a named function
2. Import in `AgencyApp.tsx` and place between existing sections
3. Wrap content in `<section className="relative overflow-hidden py-28 md:py-36">`
4. Wrap interior in `<div className="container-custom relative">`
5. Use `<SectionHeading eyebrow="..." title={...} description="..." />` for the header
6. Use `motion.div` with `whileInView` + `viewport={{ once: true, margin: '-60px' }}` for reveals

## Performance rules
- Lazy-load anything Three.js — `const Scene = lazy(() => import('./three/Scene').then(m => ({ default: m.Scene })));`
- All images must have `loading="lazy"` and `decoding="async"` except hero images above the fold
- Animation hooks must `requestAnimationFrame` and cancel on unmount
- Never trigger layout reflows inside `useFrame` — only transform/opacity

## Accessibility
- All interactive elements must be focusable and have a visible focus state
- Decorative elements use `aria-hidden`
- `prefers-reduced-motion` disables animations (handled globally in `src/index.css`)
- Color contrast: text on dark surfaces ≥ 4.5:1 — `text-off-white/55` is the lightest you may go for body copy

## Don'ts
- Don't introduce a second accent color — amber owns the palette
- Don't add a CMS, headless or otherwise — copy lives in `data/`
- Don't use icon libraries inside agency components — keep SVGs inline for tighter visual control
- Don't bundle Three.js into the index page — must stay lazy
