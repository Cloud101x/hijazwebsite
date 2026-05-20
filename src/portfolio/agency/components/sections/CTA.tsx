import { motion } from 'framer-motion';
import { AmberButton } from '../ui/AmberButton';
import { GlowOrb } from '../ui/GlowOrb';

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-36">
      <GlowOrb className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" size={1200} color="amber" intensity="medium" />
      <div className="absolute inset-0 -z-10 grid-db opacity-30" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="border-gradient relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[var(--bg-surface)] via-[var(--bg-surface-alt)] to-black p-8 shadow-card noise md:p-16">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 left-1/2 h-72 w-[140%] -translate-x-1/2 rounded-full bg-[var(--accent)]/15 blur-3xl" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber/60 to-transparent" />
              <div className="absolute inset-0 grid-db opacity-30" />
            </div>

            <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <span className="chip">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inset-0 animate-ping rounded-full bg-amber/60" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-amber" />
                  </span>
                  Booking Q3 — 2 spots remaining
                </span>

                <h2 className="mt-7 text-display-md font-semibold text-gradient-amber">
                  Build the product
                  <br />
                  <span className="font-serif italic text-[var(--accent)]">your industry will copy.</span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
                  Tell us where you're going. We'll send you a proposal in 72 hours — and a sketch of what we'd ship in your first week.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <AmberButton
                    icon={
                      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 10h10M11 6l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    }
                  >
                    Start a project
                  </AmberButton>
                  <a href="mailto:hijazconsults@gmail.com">
                    <AmberButton variant="ghost">
                      hijazconsults@gmail.com
                    </AmberButton>
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-[var(--text-tertiary)]">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                    72hr response
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                    Free first sprint
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                    Fixed scope · fixed price
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="border-gradient relative overflow-hidden rounded-2xl bg-[var(--overlay-bg)] p-6 backdrop-blur-xl">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--text-tertiary)]">
                    Quick brief — 60 seconds
                  </p>

                  <div className="mt-5 space-y-4">
                    {[
                      { label: 'Name', value: 'Adaeze Okonkwo' },
                      { label: 'Company', value: 'NovaPay Africa' },
                      { label: 'Email', value: 'adaeze@novapay.ng' },
                    ].map((field) => (
                      <div key={field.label}>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
                          {field.label}
                        </p>
                        <div className="mt-1.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-glass)] px-4 py-3 text-sm text-[var(--text-primary)]">
                          {field.value}
                        </div>
                      </div>
                    ))}
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
                        What are we shipping?
                      </p>
                      <div className="mt-1.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-glass)] px-4 py-3 text-sm text-[var(--text-primary)]">
                        A modern banking platform — mobile-first, real-time ledger, built in 10 weeks from brief to live.
                      </div>
                    </div>
                  </div>

                  <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber to-ember px-5 py-3 text-sm font-medium text-[var(--text-primary)] shadow-ember-md transition-all duration-300 hover:shadow-ember-lg">
                    Send brief
                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 10h10M11 6l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                <div className="pointer-events-none absolute -inset-x-6 -inset-y-6 -z-10 rounded-[36px] bg-[var(--accent)]/15 blur-3xl" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}