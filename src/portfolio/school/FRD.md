# FRD · Sapientia (School SaaS)

## Functional requirements

### F-01 · Sidebar
- 268px sticky sidebar, hidden below `lg`
- Logo + school name + collapse handle
- 7 nav items: Overview / Subjects / Timetable / Grades / Assignments / Messages / Classmates
- Active item: sky-soft background + sky-deep text
- Count badges on Subjects (6), Assignments (3), Messages (5)
- Bottom: settings link + parents-evening callout card

### F-02 · Topbar
- Sticky, blurred white
- Back-to-showcase chip · greeting · ⌘K search · notification button (with red dot) · profile chip

### F-03 · Overview cards
- 4 KPI cards: GPA / Class rank / Attendance / Subjects
- Each: accent icon tile + delta pill (green up / red down) + display value + sub-label

### F-04 · Performance chart
- Hand-rolled SVG line chart, 6 data points (last 6 markings)
- Area fill: vertical gradient sky-blue → transparent
- Stroke: horizontal gradient indigo → cyan
- Animated draw: Framer `pathLength: 0 → 1` over 1.4s
- Dot markers placed via absolute positioning against the same 100×100 viewBox
- Last dot has a small "89 pts" tooltip
- X-axis labels (6 mono terms) below the chart

### F-05 · Schedule
- Today's timetable, 7 slots
- Current slot ("now") highlighted with sky-soft background + sky border + pulsing dot
- Other states: done (greyed), next (indigo pill), later (default)

### F-06 · Subjects
- 6 cards in 2-col grid (sm+)
- Per card: name + teacher + grade + accent progress bar (animated `whileInView` width) + next-lesson chip (color-themed)

### F-07 · Assignments
- 4-row list with status pills: Submitted (green) / In progress (sky) / Pending (rose)
- Each row: icon tile + title + subject·weight + due date

### F-08 · Activity feed
- Attendance histogram: 12 days, bars colored by status (sky present / amber late / rose sick)
- Legend strip
- Activity log: 5 items with type icons (grade / submission / message / event)

## Non-functional
- Lighthouse perf ≥ 92 (light theme, no third-party fonts beyond Google Fonts preconnect)
- All animations respect `prefers-reduced-motion`
- Bundle: SchoolApp ~7.7 KB gz (lazy)
- No charting library — performance chart is < 90 lines of inline SVG

## Data shapes
- `SubjectCard` — id, name, teacher, grade, progress (0–100), nextLesson, accent (color key)
- `ScheduleSlot` — time, subject, room, teacher, status ('now' | 'next' | 'later' | 'done')
- `Assignment` — id, title, subject, due, status ('submitted' | 'in-progress' | 'pending'), weight
- `ActivityItem` — id, who, what, when, type ('grade' | 'submission' | 'message' | 'event')
- `AttendanceDay` — day, pct (0–100), note? ('sick' | 'present' | 'late')
