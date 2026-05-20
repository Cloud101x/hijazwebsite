import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Bath, BedDouble, Maximize2 } from 'lucide-react';
import { properties, formatNGN, type Property } from '../../data/properties';
import { cn } from '../../../../lib/cn';

type Filter = 'All' | Property['type'];
const filters: Filter[] = ['All', 'Villa', 'Penthouse', 'Townhouse', 'Estate', 'Apartment'];

const statusColor = {
  'For sale': 'text-[var(--gold)]',
  'For lease': 'text-[var(--champagne)]',
  Reserved: 'text-[var(--text-tertiary)]',
  'Off market': 'text-[var(--text-tertiary)]',
} as const;

export function EstateListings() {
  const [filter, setFilter] = useState<Filter>('All');
  const items = useMemo(
    () => (filter === 'All' ? properties : properties.filter((p) => p.type === filter)),
    [filter],
  );

  return (
    <section id="listings" className="relative overflow-hidden py-28 md:py-36">
      <div className="estate-container">
        <div className="flex flex-col items-start justify-between gap-10 border-b border-[var(--line)] pb-10 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="estate-chip">Six this season</span>
            <h2 className="font-display mt-6 text-[clamp(2.25rem,6vw,5rem)] leading-[0.95]">
              The portfolio,
              <br />
              <span className="font-script italic text-[var(--gold)]">in full.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  'px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.24em] transition-all',
                  filter === f
                    ? 'border border-[var(--gold)] bg-[var(--gold)] text-[var(--bg)]'
                    : 'border border-[var(--line-strong)] text-[var(--text-soft)] hover:border-[var(--gold)] hover:text-[var(--gold)]',
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-12 grid grid-cols-1 gap-px overflow-hidden bg-[var(--line)] md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {items.map((p, i) => (
              <ListingCard key={p.id} property={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ListingCard({ property, index }: { property: Property; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.85, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-[var(--bg-2)]"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <img
          src={property.cover}
          alt={property.name}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/0 via-transparent to-[var(--gold)]/0 mix-blend-overlay transition-all duration-700 group-hover:from-[var(--gold)]/20 group-hover:to-[var(--gold)]/20" />

        <div className="absolute left-5 top-5 flex items-center gap-2">
          <span className={cn('font-mono text-[10px] uppercase tracking-[0.28em]', statusColor[property.status])}>
            ◆ {property.status}
          </span>
        </div>
        <span className="absolute right-5 top-5 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-soft)]">
          {property.reference}
        </span>

        <div className="absolute inset-x-5 bottom-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--gold)]">
            {property.neighbourhood} · {property.city}
          </p>
          <p className="font-display mt-2 text-2xl leading-tight md:text-3xl">{property.name}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-[1fr_auto]">
        <div>
          <div className="estate-rule-gold w-16" />
          <p className="font-display mt-4 text-2xl font-medium text-[var(--gold)]">
            {formatNGN(property.price)}
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--text-soft)]">{property.blurb}</p>
          <div className="mt-5 flex flex-wrap items-center gap-5 text-xs text-[var(--text-soft)]">
            <span className="flex items-center gap-1.5">
              <BedDouble className="h-3.5 w-3.5 text-[var(--gold)]" />
              {property.bedrooms} bed
            </span>
            <span className="flex items-center gap-1.5">
              <Bath className="h-3.5 w-3.5 text-[var(--gold)]" />
              {property.bathrooms} bath
            </span>
            <span className="flex items-center gap-1.5">
              <Maximize2 className="h-3.5 w-3.5 text-[var(--gold)]" />
              {property.sqm.toLocaleString()} m²
            </span>
          </div>
        </div>
        <a
          href={`#${property.id}`}
          className="group/cta flex items-center self-end whitespace-nowrap text-[var(--text)]"
        >
          <span className="estate-link">
            View file
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-1" />
          </span>
        </a>
      </div>
    </motion.article>
  );
}
