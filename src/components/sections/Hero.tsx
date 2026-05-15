import { lazy, Suspense, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { GlowOrb } from '../ui/GlowOrb';
import { AmberButton } from '../ui/AmberButton';
import { fadeUp, stagger } from '../../lib/motion';

const HeroScene = lazy(() => import('../three/HeroScene').then((m) => ({ default: m.HeroScene })));
const AmbientField = lazy(() => import('../three/AmbientField').then((m) => ({ default: m.AmbientField })));

const headlineWords = ['Engineering', 'the', 'frontier', 'of', 'digital'];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ribbonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-glow',
        { scale: 0.7, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2.4, ease: 'power3.out' },
      );
      if (ribbonRef.current) {
        gsap.to(ribbonRef.current, {
          backgroundPosition: '200% 0',
          duration: 6,
          ease: 'none',
          repeat: -1,
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Background visuals */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="hero-glow absolute left-1/2 top-[34%] -translate-x-1/2 -translate-y-1/2">
          <GlowOrb size={1100} color="amber" intensity="strong" />
        </div>
        <GlowOrb className="left-[8%] top-[18%]" size={420} color="ember" intensity="soft" />
        <GlowOrb className="right-[6%] top-[26%]" size={380} color="copper" intensity="soft" />
        <Suspense fallback={null}>
          <AmbientField className="absolute inset-0 opacity-70 mask-fade-y" />
        </Suspense>
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-obsidian via-obsidian/70 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={stagger(0.05, 0.07)}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
        >
          <motion.div variants={fadeUp} className="mb-7">
            <span className="chip">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-amber/60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-amber shadow-[0_0_10px_rgba(255,106,0,0.8)]" />
              </span>
              Now booking Q3 — limited engagements
              <span className="mx-1 h-3 w-px bg-white/15" />
              <span className="text-amber/90">v4.0</span>
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-display-xl font-semibold text-gradient-amber"
          >
            <span className="inline-flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={word + i}
                  initial={{ y: '110%', opacity: 0, filter: 'blur(12px)' }}
                  animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
                  transition={{
                    delay: 0.35 + i * 0.08,
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 1.05, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif italic text-amber"
            >
              experiences.
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-balance text-base leading-relaxed text-off-white/55 md:text-lg"
          >
            Hijaz is an elite product studio architecting category-defining software for the world's
            most ambitious teams. We compress a year of engineering into a quarter — without
            compromise.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <AmberButton
              icon={
                <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 10h10M11 6l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            >
              Start a project
            </AmberButton>
            <AmberButton
              variant="ghost"
              icon={
                <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="10" cy="10" r="7" />
                  <path d="M8 7l5 3-5 3V7z" fill="currentColor" stroke="none" />
                </svg>
              }
            >
              Watch the reel
            </AmberButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 flex flex-col items-center gap-3"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-off-white/35">
              Trusted by category leaders
            </p>
            <div className="flex items-center gap-6 text-off-white/45">
              {['Stripe', 'Linear', 'Vercel', 'Ramp', 'Figma'].map((logo) => (
                <span key={logo} className="font-serif text-base italic tracking-tight">
                  {logo}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Floating 3D scene preview card */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.2, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <div className="border-gradient relative overflow-hidden rounded-3xl bg-black/40 backdrop-blur-xl shadow-card noise">
            <div className="flex items-center justify-between border-b border-white/5 bg-black/40 px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber/70 shadow-ember-sm" />
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-3 py-1 text-[11px] font-mono text-off-white/45">
                <span className="h-1.5 w-1.5 rounded-full bg-amber/80" />
                hijaz.studio / canvas / production
              </div>
              <div className="text-[11px] font-mono text-off-white/35">v4.0.21</div>
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[440px]">
                <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-charcoal to-black" />}>
                  <HeroScene className="absolute inset-0" />
                </Suspense>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
                <div
                  ref={ribbonRef}
                  className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/8 bg-black/50 p-3 backdrop-blur-md"
                  style={{
                    backgroundImage:
                      'linear-gradient(90deg, rgba(255,106,0,0.05) 0%, rgba(255,140,66,0.18) 50%, rgba(255,106,0,0.05) 100%)',
                    backgroundSize: '200% 100%',
                  }}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.18em] text-off-white/55">
                    <span>render · 60fps · webgl 2.0</span>
                    <span className="text-amber/80">live</span>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col justify-between gap-6 border-t border-white/5 bg-gradient-to-br from-black/60 to-graphite/50 p-6 lg:border-l lg:border-t-0 lg:p-8">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-off-white/45">
                      Operating envelope
                    </span>
                    <span className="rounded-full bg-amber/15 px-2 py-0.5 text-[10px] font-medium text-amber">
                      Live
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Velocity', value: '4.6×', sub: 'vs industry' },
                      { label: 'Time-to-prod', value: '21d', sub: 'avg engagement' },
                      { label: 'Quality gate', value: '99.97%', sub: 'uptime SLA' },
                      { label: 'NPS', value: '92', sub: 'client score' },
                    ].map((m) => (
                      <div key={m.label} className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
                        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-off-white/40">
                          {m.label}
                        </p>
                        <p className="mt-1 font-serif text-2xl text-gradient-amber">{m.value}</p>
                        <p className="text-[10px] text-off-white/35">{m.sub}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {[
                      { label: 'Discovery', pct: 100 },
                      { label: 'Architecture', pct: 86 },
                      { label: 'Production', pct: 64 },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center gap-3">
                        <span className="w-24 text-[11px] text-off-white/55">{row.label}</span>
                        <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-white/5">
                          <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: `${row.pct}%` }}
                            transition={{ duration: 1.5, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-ember to-amber shadow-ember-sm"
                          />
                        </div>
                        <span className="w-10 text-right font-mono text-[11px] text-off-white/45">
                          {row.pct}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-white/5 bg-black/40 p-3">
                  <div className="flex items-center gap-3">
                    <div className="relative grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-amber to-ember shadow-ember-sm">
                      <svg viewBox="0 0 16 16" className="h-4 w-4 text-off-white" fill="currentColor">
                        <path d="M5 2l8 6-8 6V2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-off-white/85">Ship to production</p>
                      <p className="text-[10px] text-off-white/40">Triggered by lead engineer</p>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-off-white/40">⌘ + K</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -inset-x-12 -inset-y-8 -z-10 rounded-[40px] bg-amber/10 blur-3xl" />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] text-off-white/40">
          <span>Scroll</span>
          <span className="relative flex h-7 w-4 justify-center overflow-hidden rounded-full border border-white/15">
            <motion.span
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              className="mt-1 h-1.5 w-px bg-amber"
            />
          </span>
        </div>
      </motion.div>
    </section>
  );
}
