import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { processSteps } from '../../data/projects';

export function ConstructionProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.7', 'end 0.3'] });
  const rail = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="process" className="relative overflow-hidden py-28 md:py-36">
      <div className="construction-container">
        <div className="max-w-2xl">
          <span className="construction-chip">How we run a site</span>
          <h2 className="font-display mt-5 text-[clamp(2.25rem,6vw,5rem)] leading-[0.92] text-white">
            Five phases,
            <br />
            <span className="text-[var(--orange)]">one programme.</span>
          </h2>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-[var(--text-soft)]">
            We've refined this cadence over 180 deliveries. It's why our average overrun is 2.8% —
            the industry's is 19%.
          </p>
        </div>

        <div ref={ref} className="relative mt-16">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-[var(--line)] md:block">
            <motion.span
              style={{ height: rail }}
              className="absolute inset-x-0 top-0 w-px bg-gradient-to-b from-[var(--orange)] via-[var(--orange-deep)] to-transparent"
            />
          </div>

          <div className="space-y-3 md:pl-20">
            {processSteps.map((step, i) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.85, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="absolute -left-[60px] top-6 hidden md:block">
                  <div className="grid h-6 w-6 place-items-center border border-[var(--orange)] bg-[var(--bg)] text-[var(--orange)]">
                    <span className="h-1.5 w-1.5 bg-[var(--orange)]" />
                  </div>
                </div>

                <div className="construction-card p-6 transition-all duration-500 hover:bg-[var(--bg-3)] md:p-8">
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-[120px_1fr_auto] md:items-start">
                    <div>
                      <p className="font-display text-5xl text-[var(--orange)]">{step.number}</p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-tertiary)]">
                        {step.duration}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-white md:text-3xl">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--text-soft)]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
