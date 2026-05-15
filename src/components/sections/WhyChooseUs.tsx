import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { GlowOrb } from '../ui/GlowOrb';

interface Pillar {
  title: string;
  description: string;
  bullets: string[];
  visual: 'orbit' | 'graph' | 'wave' | 'sigil';
}

const pillars: Pillar[] = [
  {
    title: 'Senior or none',
    description:
      'Every engineer on your account has shipped products at scale. We do not staff with juniors, ever.',
    bullets: ['10+ years average', 'Ex-FAANG / unicorn', 'Hands-on principals'],
    visual: 'orbit',
  },
  {
    title: 'Engineered for velocity',
    description:
      'A small, very senior pod will move 4× faster than a 30-person agency. We have measured this for fifteen years.',
    bullets: ['Pods of 3–5', 'Daily production deploys', 'No status-meeting tax'],
    visual: 'graph',
  },
  {
    title: 'Craft as a religion',
    description:
      'Pixel-perfect interfaces, sub-millisecond animations, and code your team will be proud to inherit.',
    bullets: ['Awwwards SOTD ×7', 'Webby winners', 'Open-sourced primitives'],
    visual: 'wave',
  },
  {
    title: 'Aligned to outcomes',
    description:
      'Fixed scope, fixed price, milestone-billed. Your CFO will sleep — your CTO will be impressed.',
    bullets: ['Outcome-based SOWs', 'Milestone billing', 'Free first sprint'],
    visual: 'sigil',
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <GlowOrb className="right-[5%] top-1/4" size={620} color="amber" intensity="soft" />
      <GlowOrb className="left-[8%] bottom-0" size={520} color="ember" intensity="soft" />

      <div className="container-custom relative">
        <SectionHeading
          eyebrow="Why Hijaz"
          title={
            <>
              Four reasons CTOs <br />
              <span className="font-serif italic text-[var(--accent)]">stop looking</span> after they meet us.
            </>
          }
          description="We are not the cheapest. We are not the biggest. We are the one you call when the work has to be undeniable."
        />

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.95, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-8 shadow-card backdrop-blur-xl transition-all duration-700 hover:border-amber/25 hover:bg-[var(--card-bg-hover)] md:p-10"
            >
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-60" />
                <div className="absolute -top-24 right-0 h-56 w-56 rounded-full bg-[var(--accent)]/15 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
              </div>

              <div className="grid grid-cols-[1fr_auto] gap-8">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-amber/70">
                    {String(i + 1).padStart(2, '0')} — Pillar
                  </span>
                  <h3 className="mt-4 text-2xl font-medium text-[var(--text-primary)] md:text-3xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--text-secondary)]">
                    {pillar.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {pillar.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-sm text-[var(--text-primary)]">
                        <span className="grid h-5 w-5 place-items-center rounded-full border border-amber/30 bg-[var(--accent)]/10 text-[var(--accent)]">
                          <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M2 6.5l2.5 2.5L10 3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <PillarVisual variant={pillar.visual} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarVisual({ variant }: { variant: Pillar['visual'] }) {
  if (variant === 'orbit') {
    return (
      <div className="relative h-32 w-32">
        <div className="absolute inset-0 animate-spin-slow rounded-full border border-amber/20" />
        <div
          className="absolute inset-2 rounded-full border border-amber/15"
          style={{ transform: 'rotate(28deg)' }}
        />
        <div
          className="absolute inset-4 rounded-full border border-amber/10"
          style={{ transform: 'rotate(-18deg)' }}
        />
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber shadow-ember-md" />
        <div className="absolute left-[88%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-flame shadow-ember-sm" />
      </div>
    );
  }
  if (variant === 'graph') {
    return (
      <div className="flex h-32 w-32 items-end gap-1.5">
        {[18, 32, 26, 48, 42, 68, 60, 92].map((h, i) => (
          <div
            key={i}
            className="w-2.5 rounded-t-sm bg-gradient-to-t from-ember/40 to-amber"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    );
  }
  if (variant === 'wave') {
    return (
      <div className="h-32 w-32">
        <svg viewBox="0 0 120 120" className="h-full w-full">
          <defs>
            <linearGradient id="wg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FF8C42" />
              <stop offset="100%" stopColor="#CC5500" />
            </linearGradient>
          </defs>
          {[20, 36, 52, 68, 84, 100].map((y, i) => (
            <path
              key={y}
              d={`M0 ${y} Q30 ${y - 14 + i * 2} 60 ${y} T120 ${y}`}
              stroke="url(#wg)"
              strokeOpacity={0.35 + i * 0.08}
              strokeWidth="1.2"
              fill="none"
            />
          ))}
        </svg>
      </div>
    );
  }
  return (
    <div className="relative grid h-32 w-32 place-items-center">
      <div className="absolute inset-0 rotate-45 rounded-2xl border border-amber/30" />
      <div className="absolute inset-3 -rotate-12 rounded-xl border border-amber/15" />
      <span className="font-serif text-3xl italic text-gradient-amber">H</span>
    </div>
  );
}