import { motion } from 'framer-motion';
import { Truck } from 'lucide-react';
import { equipment } from '../../data/projects';

export function ConstructionEquipment() {
  return (
    <section id="equipment" className="relative overflow-hidden bg-[var(--bg-2)] py-28 md:py-36">
      <div className="construction-container">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="construction-chip">
              <Truck className="h-3 w-3 text-[var(--orange)]" />
              Owned plant · no rental risk
            </span>
            <h2 className="font-display mt-5 text-[clamp(2.25rem,6vw,5rem)] leading-[0.92] text-white">
              78 yellow machines.
              <br />
              <span className="text-[var(--orange)]">Ours.</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-[var(--text-soft)] md:text-right">
            We own every excavator, every crane, every truck. Our yard in Karu services and re-deploys
            them across active sites within 24 hours. Programme certainty starts here.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {equipment.map((e, i) => (
            <motion.div
              key={e.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className="construction-card relative overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={e.image}
                  alt={e.name}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-1000 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-tertiary)]">
                  {e.category}
                </p>
                <p className="font-display mt-2 text-lg leading-tight text-white">{e.name}</p>
                <div className="mt-3 flex items-end justify-between">
                  <p className="font-display text-3xl text-[var(--orange)]">{e.count}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-tertiary)]">units</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
