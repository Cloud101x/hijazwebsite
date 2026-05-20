# CLAUDE.md · Sunny & Soul (Arcade)

> Instructions for AI agents and engineers extending this project. Read this before changing anything in `src/portfolio/arcade/`.

## UI philosophy
The arcade is **loud, warm, and analogue-feeling** — Lagos at 21:14 on a Friday. It should feel cozy (bakery) and electric (arcade) at the same time.

- Neon pink is the lead, violet supports, tangerine punctuates, mint is the rarest accent
- Surfaces are dark ink (`#0A0612`) with violet/pink mid-tones (`#1C0D2B`)
- Glass is heavier than the agency site — `backdrop-blur(20px)` + 8–10% white borders
- Scanlines (`.arcade-scanlines`) on big visual surfaces — never on text blocks
- Typography mixes serif/script/pixel intentionally (see below)

The arcade is allowed to be playful. If it feels "corporate" or "neutral", pull it back toward the bakery-on-a-Friday-night vibe.

## Typography
| Family | Class | Use |
| --- | --- | --- |
| Bricolage / Inter fallback | `font-display` | Headlines, large numbers |
| Caveat / cursive fallback | `font-script` | Accent words (e.g. "mess.", "pour", "loud.") |
| JetBrains Mono | `font-pixel` | Cabinet HUD metadata, captions, timestamps, all-caps tags |
| Inter (default) | (none) | Body copy |

Pair rules:
- A headline always uses `font-display` for the structural words and `font-script` for the emotional word
- Pixel mono is `text-[10px]` to `text-[11px]`, uppercase, letter-spacing `0.18em`–`0.22em`
- Never mix script and pixel in the same sentence

## Color usage
All tokens live in `.arcade-root` (see `styles/arcade.css`):

```
--ink, --ink-2, --ink-3       — backgrounds
--paper, --paper-soft         — light text
--hot-pink, --hot-pink-glow   — lead accent
--violet, --violet-glow       — support
--tangerine, --tangerine-glow — punctuation
--mint                        — rare accent (success / open status only)
--candy                       — soft pink for ambient sparkles only
```

Glow-text helpers: `.neon-text-pink`, `.neon-text-violet`, `.neon-text-tangerine`. Use sparingly — typically one neon word per section.

## Motion guidelines
| Pattern | Tooling | Duration |
| --- | --- | --- |
| Hero word reveal | Framer Motion | 1.1s, `easeOutExpo` |
| Section reveal on scroll | Framer Motion `whileInView` | 0.85s |
| Card hover lift | Framer `whileHover={{ y: -4 }}` | spring |
| Marquee scroll | CSS keyframe `.marquee-slide` | 42s linear |
| Donut + sprinkles | R3F `useFrame` | continuous |
| Capacity bars | Framer `whileInView` width | 1.4s, `easeOutExpo` |
| Reservation drawer slide | Framer Motion `x: 100% → 0` | 0.55s, `easeOutExpo` |

**Allowed playfulness:** rotated floating badges, scanlines, neon-flicker keyframe on accent words. **Not allowed:** auto-playing carousels, parallax that scrolls the entire viewport, anything that prevents standard tab/keyboard navigation.

## Component architecture
- `components/sections/*` — one component per page section
- `components/three/*` — R3F scenes, always lazy-loaded
- `components/ReservationDrawer.tsx` — global overlay (Radix Dialog)
- `data/*.ts` — typed copy data, no JSX
- `store/*.ts` — Zustand stores (currently only `reservation`)
- `styles/arcade.css` — all arcade-scoped CSS variables and utility classes

## State management
- Reservation drawer state is a Zustand store, not React Context. Why: drawer can be opened from anywhere (Nav, Hero, CTA) and we don't want a provider wrapping the whole app.
- All other interactivity is local component state (`useState`).

## Adding a new section
1. Create `components/sections/MySection.tsx`
2. Use the standard wrapper:
   ```tsx
   <section className="relative overflow-hidden py-28 md:py-36">
     <div className="arcade-container relative">
       ...
     </div>
   </section>
   ```
3. Header pattern: `<span className="arcade-chip">` + `<h2 className="font-display ...">` with `<span className="font-script italic neon-text-pink">` for the accent word
4. Cards use `.arcade-card` (base) or `.arcade-card-glow` (with hover glow)
5. Buttons: `.arcade-btn-primary` for CTAs, `.arcade-btn-ghost` for secondaries

## Accessibility
- Reservation drawer uses Radix Dialog — keyboard nav and focus trap come for free
- All form fields have visible labels (the small pixel-mono labels above the input)
- Color contrast: pink (`#FF2E88`) on dark passes 4.5:1 for ≥ 16 px text — never use neon on light backgrounds
- Neon flicker animation respects `prefers-reduced-motion` via the global rule in `src/index.css`

## Don'ts
- Don't use the agency's CSS variables (`--accent`, `--bg-primary`) — they exist on `<html>` but are intentionally not used inside `.arcade-root`
- Don't introduce a fifth accent color — the palette is fixed
- Don't add server-side state — the brief is unauthenticated, single-page, table-reservation-only
- Don't fetch images from anywhere other than Unsplash for now — image CDN rules are uniform
