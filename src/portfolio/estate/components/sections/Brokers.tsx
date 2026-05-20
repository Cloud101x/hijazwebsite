import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { agents } from '../../data/properties';

export function EstateBrokers() {
  return (
    <section id="brokers" className="relative overflow-hidden py-28 md:py-36">
      <div className="estate-container">
        <div className="max-w-2xl">
          <span className="estate-chip">Our brokers</span>
          <h2 className="font-display mt-6 text-[clamp(2.25rem,6vw,5rem)] leading-[0.95]">
            Three people
            <br />
            you call <span className="font-script italic text-[var(--gold)]">first.</span>
          </h2>
          <p className="mt-7 text-base leading-relaxed text-[var(--text-soft)]">
            We don't run a desk of fifty. Three principal brokers — one per market — handle every
            file from first viewing to closing. You'll know their voice.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden bg-[var(--line)] md:grid-cols-3">
          {agents.map((agent, i) => (
            <motion.figure
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.95, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-[var(--bg-2)]"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={agent.avatar}
                  alt={agent.name}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover grayscale-[60%] transition-all duration-[1400ms] group-hover:scale-[1.04] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[var(--gold)]/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                <span className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]">
                  No. {String(i + 1).padStart(2, '0')}
                </span>

                <figcaption className="absolute inset-x-5 bottom-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--gold)]">
                    {agent.title}
                  </p>
                  <p className="font-display mt-1 text-2xl leading-tight">{agent.name}</p>
                </figcaption>
              </div>
              <div className="border-t border-[var(--line)] p-5">
                <p className="text-sm leading-relaxed text-[var(--text-soft)]">{agent.blurb}</p>
                <div className="estate-rule-gold mt-4 w-10" />
                <div className="mt-4 flex items-center justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-tertiary)]">
                    {agent.closed} · {agent.city}
                  </p>
                  <a href="#contact-agent" className="grid h-9 w-9 place-items-center border border-[var(--line-strong)] text-[var(--text-soft)] transition-all hover:border-[var(--gold)] hover:text-[var(--gold)]">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
