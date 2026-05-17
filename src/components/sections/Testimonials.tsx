import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { GlowOrb } from '../ui/GlowOrb';
import { testimonials } from '../../data/testimonials';

export function Testimonials() {
  return (
    <section id="insights" className="relative overflow-hidden py-28 md:py-36">
      <GlowOrb className="left-[10%] top-1/3" size={520} color="ember" intensity="soft" />
      <GlowOrb className="right-[10%] bottom-1/4" size={480} color="copper" intensity="soft" />

      <div className="container-custom relative">
        <SectionHeading
          eyebrow="Voices"
          title={
            <>
              The teams we ship with <br />
              <span className="font-serif italic text-[var(--accent)]">say it best.</span>
            </>
          }
          description="A small selection from our active partners. References from the rest available on request."
        />

        <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-6 md:grid-rows-2 lg:gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.95, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-3xl border border-[var(--border-subtle)] bg-[var(--card-bg)] p-6 backdrop-blur-xl shadow-card transition-all duration-700 hover:border-amber/30 hover:bg-[var(--card-bg-hover)] md:p-8 ${
                gridSpan(i, t.highlight)
              }`}
            >
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                {t.highlight && (
                  <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[var(--accent)]/15 blur-3xl" />
                )}
              </div>

              {t.highlight && (
                <span className="relative mb-6 inline-flex items-center gap-2 rounded-full border border-amber/30 bg-[var(--accent)]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-flame">
                  Featured engagement
                </span>
              )}

              <svg
                className={`relative mb-5 h-7 w-7 text-amber/60 ${t.highlight ? 'h-10 w-10' : ''}`}
                viewBox="0 0 32 32"
                fill="currentColor"
                aria-hidden
              >
                <path d="M11 8C7 8 4 11 4 15v9h9v-9H8c0-3 1-5 4-5V8zm15 0c-4 0-7 3-7 7v9h9v-9h-5c0-3 1-5 4-5V8z" />
              </svg>

              <blockquote
                className={`relative text-[var(--text-primary)] ${
                  t.highlight ? 'text-xl leading-relaxed md:text-2xl' : 'text-base leading-relaxed'
                }`}
              >
                {t.quote}
              </blockquote>

              <figcaption className="relative mt-7 flex items-center gap-4 border-t border-[var(--border-subtle)] pt-5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-amber to-ember text-[13px] font-medium text-white shadow-ember-sm ring-1 ring-amber/30 ring-offset-2 ring-offset-[var(--bg-surface)]">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--text-primary)]">{t.name}</p>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {t.role} · <span className="text-[var(--accent)]">{t.company}</span>
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function gridSpan(i: number, highlight?: boolean): string {
  if (highlight) return 'md:col-span-3 md:row-span-2';
  const map = ['', 'md:col-span-3', 'md:col-span-3', 'md:col-span-3', 'md:col-span-3', 'md:col-span-3'];
  return map[i] ?? 'md:col-span-3';
}