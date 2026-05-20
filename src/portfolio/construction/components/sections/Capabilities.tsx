import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { capabilities } from '../../data/projects';

export function ConstructionCapabilities() {
  return (
    <section id="capabilities" className="relative overflow-hidden bg-[var(--bg-2)] py-28 md:py-36">
      <div className="construction-container">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="construction-chip">What we build</span>
            <h2 className="font-display mt-5 text-[clamp(2.25rem,6vw,5rem)] leading-[0.92] text-white">
              Six trades.
              <br />
              <span className="text-[var(--orange)]">One firm.</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-[var(--text-soft)] md:text-right">
            Concrete, steel, asphalt, and aluminium — we own the plant, the people, and the
            programme. No subcontractor chain to manage your project for you.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <motion.button
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col gap-4 bg-[var(--bg)] p-7 text-left transition-colors hover:bg-[var(--bg-3)]"
            >
              <div className="flex items-start justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-tertiary)]">
                  {c.id.replace('c-', '0')} · {c.metric}
                </p>
                <ArrowUpRight className="h-4 w-4 text-[var(--text-tertiary)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--orange)]" />
              </div>
              <h3 className="font-display text-xl leading-tight text-white md:text-2xl">{c.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--text-soft)]">{c.blurb}</p>

              <div className="pointer-events-none absolute -bottom-8 -right-2 font-display text-[120px] leading-none text-white/[0.025] transition-opacity duration-500 group-hover:text-[var(--orange)]/15">
                {c.id.replace('c-', '0')}
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
