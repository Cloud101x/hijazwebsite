import { motion } from 'framer-motion';
import { ArrowRight, Building2, MapPin, PlayCircle } from 'lucide-react';
import { fadeUp, stagger } from '../../../../lib/motion';

const heroImage =
  'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2200&q=85';

export function ConstructionHero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden pt-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/60 to-[var(--bg)]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-transparent to-transparent" />
        <div className="absolute inset-0 construction-grid-bg opacity-40" />
      </div>

      <div className="construction-tape absolute left-0 top-24 hidden h-8 w-full md:block" />

      <div className="construction-container relative z-10 pb-20 md:pb-28">
        <motion.div variants={stagger(0.06, 0.08)} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            <span className="construction-chip">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--safety)] blink-safety" />
              14 active sites · Nigeria
            </span>
            <span className="construction-chip">
              ISO 9001 · ISO 45001
            </span>
            <span className="construction-chip">
              EST. 1998 · Abuja HQ
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display mt-7 text-[clamp(3rem,11vw,9rem)] leading-[0.85] text-white"
          >
            BUILDING
            <br />
            <span className="text-[var(--orange)]">NIGERIA</span>
            <br />
            STRAIGHTER.
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-9 grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr]">
            <p className="max-w-xl text-base leading-relaxed text-[var(--text-soft)] md:text-lg">
              Twenty-seven years of vertical-and-horizontal infrastructure across Lagos, Abuja, and
              eleven other states. From the BRT corridor you take to work to the tower you work
              inside — we cast the concrete.
            </p>

            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              <a href="#projects" className="construction-btn-primary">
                Browse our work
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a href="#reel" className="construction-btn-ghost">
                <PlayCircle className="h-4 w-4 text-[var(--orange)]" />
                Site reel · 2:48
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-16 grid grid-cols-2 gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] md:grid-cols-4">
            {[
              { kpi: '180+', label: 'projects delivered' },
              { kpi: '₦620B', label: 'value built since 2008' },
              { kpi: '1.3M', label: 'safe man-hours · 2025' },
              { kpi: '12', label: 'states · operational' },
            ].map((m) => (
              <div key={m.label} className="bg-[var(--bg)]/85 px-5 py-5 backdrop-blur-md">
                <p className="font-display text-3xl text-white md:text-4xl">{m.kpi}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-tertiary)]">
                  {m.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute right-6 top-1/3 z-10 hidden w-64 border border-[var(--line)] bg-[var(--bg-2)]/85 p-5 backdrop-blur-xl xl:block"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--orange)]">
          live · site 04
        </p>
        <p className="font-display mt-3 text-lg leading-tight text-white">
          Lekki Solar Farm · Block A
        </p>
        <div className="mt-4 flex items-center gap-2 text-xs text-[var(--text-soft)]">
          <MapPin className="h-3.5 w-3.5 text-[var(--orange)]" />
          Lekki FTZ · Lagos
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-[var(--line)] pt-3 text-xs">
          <span className="text-[var(--text-tertiary)]">progress</span>
          <span className="font-mono text-[var(--text)]">72%</span>
        </div>
        <div className="mt-2 h-1 overflow-hidden bg-white/10">
          <span className="block h-full w-[72%] bg-[var(--orange)]" />
        </div>
        <button className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-[var(--text-soft)] hover:text-[var(--text)]">
          <Building2 className="h-3.5 w-3.5" />
          Project log
          <ArrowRight className="h-3 w-3" />
        </button>
      </motion.div>
    </section>
  );
}
