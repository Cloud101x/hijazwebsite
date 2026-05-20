# 04 · Sapientia — School SaaS Dashboard

A clean academic operating system for a fictional Abuja secondary school. Student-portal dashboard view with sidebar nav, search topbar, overview cards, a custom SVG performance chart, today's timetable, course load, assignments, attendance histogram, and an activity feed.

**Route** `/school` · **Status** Live · **Theme** light · sky blue + cyan + indigo on cool white

## Stack
React · TypeScript · Vite · TailwindCSS · Framer Motion · Lucide React. **No charting library** — performance chart is hand-rolled SVG with Framer's `pathLength` animation.

## Composition

```
SchoolApp
├── SchoolSidebar          (sticky · 268px · profile · 7-item nav · upcoming-event card)
├── SchoolTopbar           (back-to-showcase chip · greeting · ⌘K search · notification · profile)
└── main
    ├── Page header        ("Today is shaping up well." + download/timetable CTAs)
    ├── OverviewCards      (GPA / Rank / Attendance / Subjects — 4-up with deltas)
    └── grid lg:3
        ├── col-span-2
        │   ├── PerformanceChart   (custom SVG line+area, gradient stroke, animated `pathLength`)
        │   ├── Subjects           (6-card 2-col grid with progress bars + next-lesson chip)
        │   └── Assignments        (4-row list, status pills, weights)
        └── col-span-1
            ├── Schedule           (today's timetable, current slot highlighted, status pills)
            └── ActivityFeed       (attendance histogram + activity log)
```

## Data
`data/dashboard.ts` — typed `subjects[]`, `todaySchedule[]`, `assignments[]`, `activity[]`, `attendance[]`, `performanceChart[]`, `student`. All for a fictional SS2 student at "Abuja College".

## Notes
- Light theme — forces `data-theme="light"` on mount, restores on unmount
- Typography: **Manrope** for display, **Inter** for body, **JetBrains Mono** for metadata
- Custom performance chart: 100×100 viewBox SVG, area gradient + stroke gradient, dot markers placed absolutely against the same coordinate system
- Sidebar collapses below `lg:` — mobile users get the topbar + content only
