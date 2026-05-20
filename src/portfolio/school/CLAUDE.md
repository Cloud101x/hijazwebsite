# CLAUDE.md · Sapientia (School SaaS)

> Read this before changing `src/portfolio/school/`.

## UI philosophy
This is a **calm productivity dashboard**. The reference points are Linear, Notion, Vercel — clean white surfaces, generous padding, restrained color, type that respects the reader.

- **Never red-shame the user.** Attendance below 100% is fine, missing assignments are fine — design for support, not punishment.
- **Information density without clutter.** Cards have whitespace inside. Three statistic columns, not eight.
- **One sidebar, one topbar, one main panel.** Don't introduce a third surface.

## Color tokens (`.school-root`)
```
--bg: #F6F8FB         page background
--surface: #FFFFFF    card surface
--surface-soft        muted card / hover row
--ink, --ink-soft, --ink-tertiary, --ink-muted
--line, --line-strong borders
--sky / --sky-soft / --sky-deep      primary accent (action, current state)
--cyan / --indigo                    secondary (chart, progress accents)
--rose / --amber / --emerald         status (red / yellow / green sparingly)
```

## Typography
| Family | Class | Use |
| --- | --- | --- |
| Manrope | `font-display` | Numbers, page headers, card titles |
| Inter | (default) | Body, navigation, labels |
| JetBrains Mono | `font-mono` | All uppercase mono metadata (eyebrows, kicker text) |

## Motion
- Card reveal on mount: `opacity 0 → 1, y 16 → 0`, duration 0.55–0.7s, stagger by 0.04–0.06s
- Progress bars: `whileInView` width animation, 1.2–1.4s, ease `[0.16, 1, 0.3, 1]`
- Performance chart line draw: 1.4s `pathLength` then dot markers fade in staggered

## Architecture
- `components/Sidebar.tsx` / `components/Topbar.tsx` — global chrome
- `components/sections/*` — dashboard widgets (each is self-contained)
- `data/dashboard.ts` — all mock student data
- `styles/school.css` — scoped tokens + `.school-card` + `.school-btn-*` + `.school-pill`

## Don'ts
- Don't import a charting library (Recharts, Chart.js). Keep SVG inline.
- Don't use red/green emojis or noisy iconography
- Don't add notifications that auto-pop. Real notifications live in the bell menu only.
- Don't introduce dark mode as a toggle for this project — the brief is light-only
