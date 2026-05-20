# CLAUDE.md · Bedrock Works (Construction)

> Read this before changing `src/portfolio/construction/`.

## UI philosophy
**Industrial premium.** This is the construction site for a serious tier-1 firm — yellow safety tape, signal orange, charcoal everywhere else. The site should feel like a printed bid document re-rendered for the web — confident, structured, no decoration without a reason.

- **One saturated colour** — orange. Everything else is grey/black/white.
- **Stencil ALL CAPS** for navigation and headlines, sentence case for body
- **Hard edges** — no rounded buttons, no soft shadows, no fuzzy gradients
- **Charcoal background, off-white text** — never pure white on pure black

If something feels "playful" or "soft", you've broken the brief. Make it harder, more structural.

## Color tokens (`.construction-root`)
```
--bg, --bg-2, --bg-3       charcoals
--text, --text-soft, --text-tertiary, --text-muted
--line, --line-strong      hairline borders
--orange, --orange-deep, --orange-glow   primary accent (only saturated color)
--safety                   warning yellow (tape strip + live dot ONLY)
--steel, --concrete        neutral muted accents (rarely used)
```

## Typography
| Family | Class | Use |
| --- | --- | --- |
| Manrope 800 | `font-display` | Display headlines, large numbers |
| Inter 800 uppercase | `font-stencil` | Nav links, button labels, ticker text |
| JetBrains Mono | `font-mono` | Metadata, certifications, references |
| Inter (default) | (none) | Body |

## Motion
- Hero: word-by-word reveal not used here — single fade-up over 0.95s with stagger
- Process timeline rail: scroll-driven via Framer `useScroll({ offset: ['start 0.7', 'end 0.3'] })` + `useTransform`
- Card hover: lift 1px translate + color change. **Don't use spring bounce.**
- Safety-yellow blink: `blink-safety` keyframe, 1.6s ease-in-out, used **only** on the hero status dot

## Architecture
- `components/Navbar.tsx` — sticky chrome
- `components/sections/*` — Hero, Ticker, Projects, Capabilities, Process, Equipment, QuoteCTA, Footer
- `data/projects.ts` — typed projects, capabilities, processSteps, equipment, ticker
- `styles/construction.css` — scoped tokens + clipped-corner button + safety tape pattern + scroll marquee

## Don'ts
- Don't soften the corners. The brutal angles are the brand.
- Don't add a second accent color. Orange is the only saturated colour.
- Don't put marketing fluff in the ticker — it's for verifiable certifications and stats only.
- Don't let the process timeline rail animate inside any other section. It's load-bearing to that one component.
