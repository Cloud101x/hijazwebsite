# FRD · Sunny & Soul (Arcade)

## Functional requirements

### F-01 · Cinematic hero
- Two-line headline with per-word reveal; final word "mess." uses a script font with neon flicker animation
- Status chip with live indicator + opening hours
- "Now playing · DJ Lágbájá" chip
- R3F donut scene: torus with `MeshDistortMaterial`, ~80 sprinkles as small cylinders, two orbit rings, Drei `Sparkles`
- Floating "Press START to play" badge (rotated -8°) and "Bakery · 38/42 trays sold" badge (rotated +6°) appear at md+
- Hero KPI tiles: 14 cabinets / 38 pastries / 04:00 bakers in by

### F-02 · Marquee
- Horizontally scrolling ribbon with Lucide icons + event copy
- 42s linear loop, `mask-image` fade on left/right edges
- Top and bottom hairline gradients (pink top, violet bottom)

### F-03 · Menu (filterable)
- 4 categories: Bakery / Brunch / Cocktails / Arcade Bites + "All"
- Chip nav with active state (white pill on dark)
- `AnimatePresence + layout` for card add/remove transitions when filter changes
- Each card: image, badge (Bestseller/New/Spicy/Vegan/Limited), name, ₦ price, description, pairing line, plus-add button

### F-04 · Arcade games
- 6 cabinet cards, color-themed by accent (pink/violet/tangerine/mint)
- Per-card stats: high score (7-day), player count, difficulty bars (1–5), leader initials, era badge
- Hover lifts card + reveals colored shadow + huge translucent index number

### F-05 · Events
- 6-event week schedule
- Per event: day chip (color-coded), category pill, time, host, capacity progress bar (Framer `whileInView` width animation)
- "Apply to host a night" CTA in header

### F-06 · Gallery (horizontal parallax)
- 8 photos, mixed sizes (tall/wide/square)
- `useScroll({ target, offset: ['start end', 'end start'] })` + `useTransform` to translateX from `8%` → `-58%`
- Per-image color overlay on hover (pink-to-violet gradient, mix-blend-overlay)
- "01 / 08" pixel index per tile

### F-07 · Testimonials
- 4 review cards (Instagram, X, Google Maps, GQ Africa)
- 5-star row, avatar, source pill, accent gradient overlay matching review accent
- Quote in serif, attribution in pixel-mono

### F-08 · Reservation drawer
- Triggered from Navbar, Hero, and CTA
- Radix Dialog slide-from-right, full-height on desktop, fullscreen on mobile
- Form fields: name (text), party size (- / + stepper), date (chip group, 5 days), time (chip grid), table (4 named options with accent dots)
- Live summary line below the form
- Sticky bottom confirm button with note about cancellation
- State persists via Zustand (`useReservation`) — closing and reopening doesn't lose input

### F-09 · CTA
- Glassmorphism card with location, ₦ address, 4-day opening-hours grid, phone CTA, reservation CTA

### F-10 · Footer
- Logo block + intro paragraph + 3 social pills (Instagram / Twitch / WhatsApp)
- 3-column nav: The room / Kitchen / Visit
- Newsletter pill
- Giant `sunny & soul.` wordmark in pink gradient with fade-down mask

## Non-functional
- Lighthouse perf ≥ 80 mobile (lower than agency target because of horizontal-scroll gallery)
- `prefers-reduced-motion` disables animations
- Drawer must be fully keyboard-navigable (Radix gives this for free)
- All Unsplash imagery lazy-loaded
- Code-split: arcade route is ~28.5 KB gz; arcade-only CSS is its own 1.85 KB gz chunk
- R3F DonutScene is lazy-loaded (separate 1.1 KB gz chunk, shares Three.js with agency)

## Data shapes
- `MenuItem` — id, name, category, description, price (NGN k), badge?, image, pairs?
- `ArcadeGame` — id, name, era, category, highScore { player, score }, players, difficulty (1–5), accent
- `ArcadeEvent` — id, day, date, title, time, host, category, accent, blurb, capacity { booked, max }
- `GalleryShot` — id, caption, tag, image, size ('tall' | 'wide' | 'square')
- `ArcadeTestimonial` — quote, name, handle, source, rating, accent, avatar
