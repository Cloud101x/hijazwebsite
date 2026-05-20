import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Sparkles } from 'lucide-react';
import { fadeUp, stagger } from '../../../../lib/motion';

export function CommerceHero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-44 md:pb-32 md:pt-56">
      <div className="commerce-container">
        <motion.div
          variants={stagger(0.06, 0.08)}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[1fr_1.1fr]"
        >
          <div>
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="commerce-chip">
                <Leaf className="h-3 w-3 text-[var(--sage)]" />
                Spring · 2026 · Issue 11
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--ink-tertiary)]">
                Lagos / Abeokuta / Iseyin
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display mt-7 text-[clamp(3rem,8vw,7.5rem)] font-medium leading-[0.92] tracking-tight text-[var(--ink)]"
            >
              The quiet
              <br />
              of slow
              <br />
              <span className="font-script">objects.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-display mt-9 max-w-md text-lg font-normal leading-relaxed text-[var(--ink-soft)] md:text-xl"
            >
              Eighteen pieces this season, made by seven hands across Nigeria. Vessels, textiles,
              and a few small things for the table. Each one numbered, each one slow.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#objects" className="commerce-btn commerce-btn-primary">
                Browse the season
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <a href="#journal" className="commerce-link">
                Read the letter
                <Sparkles className="h-3.5 w-3.5 text-[var(--gold)]" />
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-16 grid grid-cols-3 gap-px overflow-hidden border border-[var(--line)] md:max-w-md">
              {[
                { kpi: '18', label: 'pieces · s11' },
                { kpi: '07', label: 'makers' },
                { kpi: '14d', label: 'ships in' },
              ].map((m) => (
                <div key={m.label} className="bg-[var(--paper)] p-5">
                  <p className="font-display text-3xl font-medium text-[var(--ink)]">{m.kpi}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-tertiary)]">
                    {m.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="commerce-grain relative aspect-[5/6] overflow-hidden bg-[var(--paper-warm)]">
              <img
                src="https://images.unsplash.com/photo-1582127202856-39ab9d49ce5b?auto=format&fit=crop&w=1300&q=85"
                alt="Ọmọlé Vessel"
                loading="eager"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/30 via-transparent to-transparent" />

              <div className="absolute left-6 top-6 flex items-center gap-2">
                <span className="rounded-full bg-[var(--paper)]/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-soft)] backdrop-blur-md">
                  Issue 11 · cover piece
                </span>
              </div>

              <div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-[var(--paper)]">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-85">
                    no. 01 / 18
                  </p>
                  <p className="font-display mt-1 text-2xl font-medium md:text-3xl">
                    Ọmọlé Vessel · Cinder
                  </p>
                </div>
                <a
                  href="#p-01"
                  className="grid h-12 w-12 place-items-center rounded-full bg-[var(--paper)]/95 text-[var(--ink)] transition-transform hover:scale-110"
                  aria-label="Open piece"
                >
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 hidden w-52 bg-[var(--paper)] p-5 shadow-[0_24px_48px_-24px_rgba(26,23,20,0.18)] md:block">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-tertiary)]">
                made in
              </p>
              <p className="font-display mt-1 text-lg leading-tight text-[var(--ink)]">
                Abeokuta,
                <br />
                Ogun State
              </p>
              <div className="mt-3 h-px w-full bg-[var(--line)]" />
              <p className="mt-3 text-[11px] leading-relaxed text-[var(--ink-soft)]">
                Thrown over seven sittings, fired twice in a wood kiln.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
