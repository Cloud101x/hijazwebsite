# PRD · Sapientia (School SaaS)

## Problem
Nigerian private secondary schools rely on a patchwork of WhatsApp groups, paper attendance books, and exported Excel results. Parents, students, and teachers don't see the same data at the same time. Schools want a single dashboard — but most school software ships a 2010-era UI that nobody on staff or in the family wants to open.

## Target audience
1. **Students (SS1–SS3)** opening the portal once a day to see schedule, grades, assignments
2. **Parents** checking attendance, grades, fee status weekly
3. **Form tutors & subject teachers** marking attendance, returning grades, sending messages
4. **School administrators** running the term cadence

## Outcomes
- A student should see "what's happening today" within 3 seconds of opening the page
- All metrics that matter — GPA, rank, attendance, subjects — visible above the fold
- The dashboard should feel "respect-the-student" rather than "monitor-the-student" (no behaviour scores, no public rank shaming, no red warnings unless something genuinely needs action)
- Premium SaaS feel — should sit happily next to Linear, Notion, Vercel dashboards

## Non-goals
- Not the teacher dashboard (that's a separate surface — same design system, different data)
- Not real auth / payments at MVP
- No social features (no DMs between students, no leaderboards)

## Success metrics
| Metric | Target |
| --- | --- |
| Daily active students | ≥ 65% of enrolled |
| Parent weekly engagement | ≥ 80% |
| Time to "first useful glance" | ≤ 3s |
| Avg session length | 90s — 4 min (no infinite scroll trap) |
