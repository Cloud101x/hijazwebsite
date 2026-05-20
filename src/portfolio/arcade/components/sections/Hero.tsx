import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { CalendarHeart, Cookie, Disc3, Joystick } from 'lucide-react';
import { fadeUp, stagger } from '../../../../lib/motion';
import { useReservation } from '../../store/reservation';

const DonutScene = lazy(() =>
  import('../three/DonutScene').then((m) => ({ default: m.DonutScene })),
);

const tagline = ['A', 'bakery,', 'an', 'arcade,'];
const tagline2 = ['one', 'beautiful', 'mess.'];

export function ArcadeHero() {
  const openDrawer = useReservation((s) => s.openDrawer);

  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-32 pb-24 md:pt-40">
      <BackgroundLayer />
      <CornerBracketsArcade />

      <div className="arcade-container relative z-10">
        <motion.div
          variants={stagger(0.06, 0.08)}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2">
              <span className="arcade-chip">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#FF2E88]/70" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-[#FF2E88] shadow-[0_0_12px_#FF2E88]" />
                </span>
                Open · Thu — Sun · 09:00 till late
              </span>
              <span className="arcade-chip">
                <Disc3 className="h-3 w-3 text-[#8B5CF6]" />
                <span className="font-pixel text-[10px] uppercase tracking-[0.22em]">
                  now playing · DJ Lágbájá
                </span>
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display mt-7 text-[clamp(2.75rem,9vw,8rem)] font-bold leading-[0.88] tracking-tight"
            >
              <span className="block">
                {tagline.map((w, i) => (
                  <motion.span
                    key={w + i}
                    initial={{ y: '110%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{
                      delay: 0.3 + i * 0.07,
                      duration: 1.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block pr-3 align-baseline"
                  >
                    {i === 0 ? <span className="arcade-gradient-text">{w}</span> : w}
                  </motion.span>
                ))}
              </span>
              <span className="block">
                {tagline2.map((w, i) => (
                  <motion.span
                    key={w + i}
                    initial={{ y: '110%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{
                      delay: 0.6 + i * 0.07,
                      duration: 1.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block pr-3 align-baseline"
                  >
                    {w === 'mess.' ? (
                      <span className="font-script text-[1.15em] italic neon-text-pink neon-flicker">
                        {w}
                      </span>
                    ) : (
                      w
                    )}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-base leading-relaxed text-white/65 md:text-lg"
            >
              We bake before sunrise, pour cocktails after sunset, and let the cabinets run all
              night. Drop in for a Suya Croissant, stay for the Ankara Punch finals.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
              <button onClick={openDrawer} className="arcade-btn-primary">
                <CalendarHeart className="h-4 w-4" />
                Reserve a table
              </button>
              <a href="#menu" className="arcade-btn-ghost">
                <Cookie className="h-4 w-4" />
                Peek at the menu
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-14 grid grid-cols-3 gap-3 md:max-w-md"
            >
              {[
                { kpi: '14', label: 'Cabinets · upstairs' },
                { kpi: '38', label: 'Pastries on rotation' },
                { kpi: '04:00', label: 'Bakers in by' },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-center"
                >
                  <p className="font-display text-2xl text-white">{m.kpi}</p>
                  <p className="mt-1 font-pixel text-[10px] uppercase tracking-[0.18em] text-white/45">
                    {m.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="arcade-card arcade-card-glow arcade-noise relative aspect-[5/6] overflow-hidden">
              <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-[#1C0D2B] to-[#0A0612]" />}>
                <DonutScene className="absolute inset-0" />
              </Suspense>

              <div className="pointer-events-none absolute inset-0 arcade-scanlines opacity-50" />

              <div className="pointer-events-none absolute inset-x-5 top-5 flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF2E88] shadow-[0_0_10px_#FF2E88]" />
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 font-pixel text-[10px] uppercase tracking-[0.22em] text-white/65 backdrop-blur-md">
                  <Joystick className="h-3 w-3 text-[#FF2E88]" />
                  cab · 21:14
                </div>
              </div>

              <div className="pointer-events-none absolute inset-x-5 bottom-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/8 bg-black/45 p-4 backdrop-blur-md">
                  <p className="font-pixel text-[10px] uppercase tracking-[0.22em] text-white/55">
                    high score · 7-day
                  </p>
                  <p className="font-display mt-1 text-xl text-white">982,400</p>
                  <p className="font-pixel mt-0.5 text-[10px] text-[#FF8A1F]">AZA · Lagos Lightning</p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-black/45 p-4 backdrop-blur-md">
                  <p className="font-pixel text-[10px] uppercase tracking-[0.22em] text-white/55">
                    next bake · in
                  </p>
                  <p className="font-display mt-1 text-xl text-white">14m</p>
                  <p className="font-pixel mt-0.5 text-[10px] text-[#6EE7B7]">Plantain rolls · oven 02</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: -8 }}
              transition={{ delay: 1.4, duration: 0.8, type: 'spring' }}
              className="absolute -left-6 top-10 hidden h-24 w-24 items-center justify-center rounded-full border border-white/15 bg-[#FF2E88]/90 text-center text-white shadow-[0_18px_50px_-10px_rgba(255,46,136,0.7)] md:flex"
            >
              <div className="font-pixel text-[10px] uppercase leading-tight tracking-[0.22em]">
                Press
                <br />
                <span className="font-display text-2xl normal-case tracking-tight">START</span>
                <br />
                to play
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: 6 }}
              animate={{ opacity: 1, scale: 1, rotate: 6 }}
              transition={{ delay: 1.6, duration: 0.8, type: 'spring' }}
              className="absolute -right-4 bottom-16 hidden rounded-2xl border border-white/12 bg-[#8B5CF6]/90 px-4 py-3 text-white shadow-[0_18px_50px_-10px_rgba(139,92,246,0.6)] md:block"
            >
              <p className="font-pixel text-[10px] uppercase tracking-[0.22em] opacity-85">
                bakery · today
              </p>
              <p className="font-display text-2xl leading-tight">38 / 42</p>
              <p className="font-pixel text-[10px] opacity-85">trays sold by 18:30</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function BackgroundLayer() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10">
      <div className="absolute inset-0 arcade-grid-bg opacity-70" />
      <div className="pointer-events-none absolute left-1/2 top-[30%] h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF2E88]/35 blur-[120px]" />
      <div className="pointer-events-none absolute left-[10%] top-[14%] h-[420px] w-[420px] rounded-full bg-[#8B5CF6]/30 blur-[100px]" />
      <div className="pointer-events-none absolute right-[8%] top-[22%] h-[380px] w-[380px] rounded-full bg-[#FF8A1F]/25 blur-[100px]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0A0612] via-[#0A0612]/70 to-transparent" />
    </div>
  );
}

function CornerBracketsArcade() {
  const c =
    'pointer-events-none absolute h-12 w-12 transition-opacity duration-700 [&>span]:absolute [&>span]:bg-[#FF2E88] [&>span]:shadow-[0_0_10px_#FF2E88]';
  return (
    <>
      <div className={`${c} left-6 top-24 md:left-10 md:top-28`}>
        <span className="left-0 top-0 h-px w-full" />
        <span className="left-0 top-0 h-full w-px" />
      </div>
      <div className={`${c} right-6 top-24 md:right-10 md:top-28`}>
        <span className="right-0 top-0 h-px w-full" />
        <span className="right-0 top-0 h-full w-px" />
      </div>
      <div className={`${c} bottom-6 left-6 md:left-10 md:bottom-10`}>
        <span className="bottom-0 left-0 h-px w-full" />
        <span className="bottom-0 left-0 h-full w-px" />
      </div>
      <div className={`${c} bottom-6 right-6 md:right-10 md:bottom-10`}>
        <span className="bottom-0 right-0 h-px w-full" />
        <span className="bottom-0 right-0 h-full w-px" />
      </div>
    </>
  );
}
