import { motion } from 'framer-motion';
import { ArrowRight, Bath, BedDouble, MapPin, Maximize2, PlayCircle } from 'lucide-react';
import { fadeUp, stagger } from '../../../../lib/motion';
import { properties, formatNGN } from '../../data/properties';

export function EstateHero() {
  const feature = properties[0];

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden pt-44 md:pt-56">
      <div aria-hidden className="absolute inset-0 -z-10">
        <img src={feature.cover} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/55 to-[var(--bg)]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-transparent to-[var(--bg)]/30" />
      </div>

      <div className="estate-container relative z-10 pb-24 md:pb-32">
        <motion.div variants={stagger(0.06, 0.08)} initial="hidden" animate="visible" className="max-w-4xl">
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
            <span className="estate-chip">
              <span className="h-1 w-1 bg-[var(--gold)]" />
              Spring portfolio · 2026
            </span>
            <span className="estate-chip">{feature.reference}</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display mt-9 text-[clamp(2.5rem,8vw,7.5rem)] font-medium leading-[0.95] tracking-tight text-[var(--text)]"
          >
            Quiet houses
            <br />
            for <span className="font-script italic text-[var(--gold)]">considered</span>
            <br />
            owners.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-display mt-9 max-w-xl text-lg leading-relaxed text-[var(--text-soft)] md:text-xl"
          >
            Eighteen properties this season across Lagos, Abuja, and the Cross River. We move
            quietly, off-market when asked, and only show homes worth showing.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-11 flex flex-wrap items-center gap-3">
            <a href="#listings" className="estate-btn-primary">
              Browse the portfolio
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a href="#tour" className="estate-btn-ghost">
              <PlayCircle className="h-4 w-4 text-[var(--gold)]" />
              Schedule a private tour
            </a>
          </motion.div>
        </motion.div>

        {/* Featured property card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="estate-grain estate-card relative mt-16 max-w-2xl overflow-hidden"
        >
          <div className="flex items-center justify-between border-b border-[var(--line)] p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]">
              Cover property · {feature.reference}
            </p>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-soft)]">
              {feature.status}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto]">
            <div className="p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-tertiary)]">
                <MapPin className="mr-1.5 inline h-3 w-3 text-[var(--gold)]" />
                {feature.neighbourhood} · {feature.city}
              </p>
              <p className="font-display mt-3 text-3xl leading-tight md:text-4xl">{feature.name}</p>
              <div className="estate-rule-gold mt-4 max-w-xs" />
              <p className="font-display mt-5 text-3xl font-medium text-[var(--gold)]">
                {formatNGN(feature.price)}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-[var(--text-soft)]">
                <span className="flex items-center gap-2">
                  <BedDouble className="h-4 w-4 text-[var(--gold)]" />
                  {feature.bedrooms} bed
                </span>
                <span className="flex items-center gap-2">
                  <Bath className="h-4 w-4 text-[var(--gold)]" />
                  {feature.bathrooms} bath
                </span>
                <span className="flex items-center gap-2">
                  <Maximize2 className="h-4 w-4 text-[var(--gold)]" />
                  {feature.sqm.toLocaleString()} m²
                </span>
              </div>
            </div>
            <a
              href={`#${feature.id}`}
              className="group flex items-center justify-center border-t border-[var(--line)] bg-[var(--bg-3)] p-6 transition-colors hover:bg-[var(--gold)] hover:text-[var(--bg)] md:border-l md:border-t-0 md:px-8"
            >
              <span className="estate-link group-hover:text-[var(--bg)]">
                Open file
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
