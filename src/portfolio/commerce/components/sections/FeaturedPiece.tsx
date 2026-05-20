import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Heart, Minus, Plus, Truck } from 'lucide-react';
import { products, formatPrice } from '../../data/products';
import { useCart } from '../../store/cart';
import { cn } from '../../../../lib/cn';

export function CommerceFeaturedPiece() {
  const product = products[0];
  const [swatch, setSwatch] = useState(product.swatches?.[0]?.name ?? '');
  const [qty, setQty] = useState(1);
  const add = useCart((s) => s.add);

  return (
    <section className="relative overflow-hidden bg-[var(--paper)] py-28 md:py-40">
      <div className="commerce-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="relative grid grid-cols-1 gap-2 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="commerce-grain relative aspect-[4/5] overflow-hidden bg-[var(--paper-warm)] md:col-span-1 md:row-span-2"
            >
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="commerce-grain relative aspect-square overflow-hidden bg-[var(--paper-warm)]"
            >
              <img
                src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=85"
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="commerce-grain relative aspect-square overflow-hidden bg-[var(--paper-warm)]"
            >
              <img
                src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=85"
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink-tertiary)]">
              No. 01 · the cover piece
            </p>
            <h2 className="font-display mt-4 text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-[1.02] tracking-tight">
              {product.name}
            </h2>
            <p className="mt-3 text-base text-[var(--ink-soft)] md:text-lg">{product.subtitle}</p>

            <p className="font-display mt-8 text-3xl font-medium text-[var(--ink)]">
              {formatPrice(product.price, product.currency)}
            </p>

            <p className="mt-7 text-base leading-relaxed text-[var(--ink-soft)]">
              {product.description}
            </p>

            <div className="mt-10 border-y border-[var(--line)] py-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-tertiary)]">
                Finish
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                {product.swatches?.map((s) => {
                  const active = s.name === swatch;
                  return (
                    <button
                      key={s.name}
                      onClick={() => setSwatch(s.name)}
                      className={cn(
                        'flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs transition-all',
                        active
                          ? 'border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)]'
                          : 'border-[var(--line-strong)] text-[var(--ink-soft)] hover:border-[var(--ink)]',
                      )}
                    >
                      <span
                        className="h-3 w-3 rounded-full border border-[var(--line-strong)]"
                        style={{ background: s.hex }}
                      />
                      {s.name}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center gap-1 rounded-full border border-[var(--line-strong)] bg-[var(--paper)] p-1">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="grid h-9 w-9 place-items-center rounded-full text-[var(--ink-soft)] hover:bg-[var(--ink)]/5"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="w-8 text-center font-display text-lg">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="grid h-9 w-9 place-items-center rounded-full text-[var(--ink-soft)] hover:bg-[var(--ink)]/5"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
              <button
                onClick={() => {
                  for (let i = 0; i < qty; i++) add(product);
                }}
                className="commerce-btn commerce-btn-primary flex-1 justify-center"
              >
                Add to bag · {formatPrice(product.price * qty, product.currency)}
              </button>
              <button
                aria-label="Save"
                className="grid h-12 w-12 place-items-center rounded-full border border-[var(--line-strong)] text-[var(--ink-soft)] hover:border-[var(--ink)] hover:text-[var(--ink)]"
              >
                <Heart className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 text-sm text-[var(--ink-soft)]">
              <div className="flex items-center gap-3">
                <Truck className="h-4 w-4 text-[var(--gold)]" />
                <span>Ships from Lagos in 14 days · free local delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-4 w-4 text-[var(--sage)]" />
                <span>Lifetime repair guarantee</span>
              </div>
            </div>

            <div className="mt-9 grid grid-cols-2 gap-px border-t border-[var(--line)] pt-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-tertiary)]">
                  origin
                </p>
                <p className="font-display mt-1 text-base text-[var(--ink)]">{product.origin}</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-tertiary)]">
                  material
                </p>
                <p className="font-display mt-1 text-base text-[var(--ink)]">{product.material}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
