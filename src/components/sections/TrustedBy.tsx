import { motion } from 'framer-motion';
import { partners } from '../../data/partners';

export function TrustedBy() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center text-[11px] font-medium uppercase tracking-[0.32em] text-off-white/40"
        >
          Built alongside teams shaping the future of software
        </motion.p>

        <div className="relative mt-12 mask-fade-x">
          <div className="flex w-max animate-marquee items-center gap-14">
            {[...partners, ...partners].map(({ name, Logo }, i) => (
              <div
                key={`${name}-${i}`}
                className="group flex shrink-0 items-center transition-all duration-500"
                title={name}
              >
                <Logo className="h-6 w-auto text-off-white/40 transition-all duration-500 group-hover:text-off-white group-hover:drop-shadow-[0_0_12px_rgba(255,140,66,0.4)]" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 sm:grid-cols-4">
          {[
            { kpi: '2.4B+', label: 'Requests served' },
            { kpi: '180+', label: 'Engagements shipped' },
            { kpi: '34', label: 'Countries' },
            { kpi: '14yr', label: 'Compounded craft' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-charcoal/80 px-6 py-7"
            >
              <p className="font-serif text-3xl text-gradient-amber md:text-4xl">{item.kpi}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-off-white/45">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
