import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';
import { products, categories, formatPrice, type Product } from '../../data/products';
import { cn } from '../../../../lib/cn';
import { useCart } from '../../store/cart';

type Filter = 'All' | Product['category'];
const filters: Filter[] = ['All', ...categories];

export function CommerceCatalog() {
  const [filter, setFilter] = useState<Filter>('All');
  const items = useMemo(() => (filter === 'All' ? products : products.filter((p) => p.category === filter)), [filter]);
  const add = useCart((s) => s.add);

  return (
    <section id="objects" className="relative overflow-hidden py-28 md:py-36">
      <div className="commerce-container">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-[var(--line)] pb-10 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink-tertiary)]">
              The catalogue · 18 pieces
            </p>
            <h2 className="font-display mt-4 text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[0.95] tracking-tight">
              Eighteen objects,
              <br />
              <span className="font-script">no more.</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {filters.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    'rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-all duration-300',
                    active
                      ? 'border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)]'
                      : 'border-[var(--line-strong)] text-[var(--ink-soft)] hover:border-[var(--ink)] hover:text-[var(--ink)]',
                  )}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 gap-px overflow-hidden md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} onAdd={() => add(product)} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({ product, onAdd }: { product: Product; onAdd: () => void }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col bg-[var(--paper)] outline outline-1 outline-[var(--line)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--paper-warm)]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-[var(--paper)]/95 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink)] backdrop-blur-md">
            {product.badge}
          </span>
        )}
        <button
          onClick={onAdd}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-[var(--paper)]/95 text-[var(--ink)] opacity-0 transition-all duration-500 group-hover:opacity-100 hover:bg-[var(--ink)] hover:text-[var(--paper)]"
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-tertiary)]">
          {product.id.replace('p-', 'No. ')} · {product.category}
        </p>
        <h3 className="font-display mt-3 text-xl font-medium leading-tight text-[var(--ink)]">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm text-[var(--ink-soft)]">{product.subtitle}</p>

        {product.swatches && (
          <div className="mt-4 flex items-center gap-1.5">
            {product.swatches.map((s) => (
              <span
                key={s.name}
                className="h-3 w-3 rounded-full border border-[var(--line-strong)]"
                style={{ background: s.hex }}
                title={s.name}
              />
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between border-t border-[var(--line)] pt-5">
          <p className="font-display text-lg font-medium text-[var(--ink)]">
            {formatPrice(product.price, product.currency)}
          </p>
          <span className="commerce-link text-[var(--ink-soft)] group-hover:text-[var(--ink)]">
            View piece
            <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
