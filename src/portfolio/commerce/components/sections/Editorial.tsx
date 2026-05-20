import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { editorial } from '../../data/products';

export function CommerceEditorial() {
  return (
    <section id="journal" className="relative overflow-hidden bg-[var(--paper-warm)] py-28 md:py-40">
      <div className="commerce-container">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="commerce-grain relative aspect-[5/6] overflow-hidden order-2 lg:order-1"
          >
            <img
              src={editorial.cover}
              alt="Atelier journal cover"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/35 via-transparent to-transparent" />

            <div className="absolute inset-x-8 bottom-8 text-[var(--paper)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-85">
                {editorial.subtitle}
              </p>
              <p className="font-display mt-3 text-3xl font-medium leading-[1.05] md:text-4xl">
                Atelier no. 11
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2"
          >
            <span className="commerce-chip">A letter from the studio</span>
            <h2 className="font-display mt-6 text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.02] tracking-tight">
              {editorial.title}
            </h2>
            <p className="font-display mt-7 text-lg leading-relaxed text-[var(--ink-soft)] md:text-xl">
              {editorial.body}
            </p>

            <div className="mt-9 flex items-center gap-4">
              <a href="#letter" className="commerce-btn commerce-btn-ghost">
                Read the full letter
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-tertiary)]">
                {editorial.author}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-px border-t border-[var(--line)] pt-8">
              {[
                { kpi: 'Iseyin', label: 'cotton weavers' },
                { kpi: 'Abeokuta', label: 'kiln masters' },
                { kpi: 'Ibadan', label: 'wood turners' },
              ].map((m) => (
                <div key={m.label}>
                  <p className="font-display text-xl text-[var(--ink)]">{m.kpi}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-tertiary)]">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
