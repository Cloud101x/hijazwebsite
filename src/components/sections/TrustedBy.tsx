import { motion } from 'framer-motion';

const partners = [
  'STRIPE',
  'LINEAR',
  'VERCEL',
  'RAMP',
  'FIGMA',
  'NOTION',
  'ARC',
  'RAYCAST',
  'CURSOR',
  'SCALE',
  'PERPLEXITY',
  'MIDJOURNEY',
];

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

        <div className="relative mt-10 mask-fade-x">
          <div className="flex w-max animate-marquee items-center gap-16">
            {[...partners, ...partners].map((p, i) => (
              <div
                key={`${p}-${i}`}
                className="group flex items-center gap-3 transition-all duration-500 hover:text-off-white"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-off-white/15 group-hover:bg-amber group-hover:shadow-ember-sm" />
                <span className="font-serif text-2xl italic tracking-tight text-off-white/40 transition-colors duration-300 group-hover:text-off-white/95">
                  {p}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 sm:grid-cols-4">
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
