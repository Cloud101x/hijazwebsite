import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import { useCart } from '../store/cart';
import { formatPrice } from '../data/products';

export function CartDrawer() {
  const { open, closeCart, lines, inc, dec, remove, subtotal } = useCart();
  const sub = subtotal();

  return (
    <Dialog.Root open={open} onOpenChange={(o) => (o ? null : closeCart())}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="fixed inset-0 z-[100] bg-[var(--ink)]/40 backdrop-blur-sm"
              />
            </Dialog.Overlay>

            <Dialog.Content asChild>
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="fixed inset-y-0 right-0 z-[110] flex w-full max-w-md flex-col overflow-y-auto border-l border-[var(--line)] bg-[var(--paper)]"
              >
                <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[var(--line)] bg-[var(--paper)] px-6 py-5">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-tertiary)]">
                      The bag
                    </p>
                    <p className="font-display mt-0.5 text-xl">
                      {lines.length} {lines.length === 1 ? 'piece' : 'pieces'}
                    </p>
                  </div>
                  <button
                    onClick={closeCart}
                    className="grid h-9 w-9 place-items-center rounded-full text-[var(--ink-soft)] hover:bg-[var(--ink)]/5"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto">
                  {lines.length === 0 ? (
                    <div className="flex h-full flex-col items-center justify-center px-8 text-center">
                      <ShoppingBag className="h-10 w-10 text-[var(--ink-muted)]" />
                      <p className="font-display mt-5 text-2xl">Your bag is quiet.</p>
                      <p className="mt-2 max-w-xs text-sm text-[var(--ink-soft)]">
                        Eighteen pieces from this season are waiting. Start with the cover piece.
                      </p>
                      <button
                        onClick={closeCart}
                        className="commerce-btn commerce-btn-primary mt-7"
                      >
                        Browse the season
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ) : (
                    <ul className="divide-y divide-[var(--line)]">
                      {lines.map(({ product, qty }) => (
                        <li key={product.id} className="flex gap-4 px-6 py-5">
                          <div className="relative h-24 w-20 shrink-0 overflow-hidden bg-[var(--paper-warm)]">
                            <img
                              src={product.image}
                              alt={product.name}
                              loading="lazy"
                              className="absolute inset-0 h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex flex-1 flex-col">
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-tertiary)]">
                                  {product.category}
                                </p>
                                <p className="font-display mt-1 text-base leading-tight">{product.name}</p>
                              </div>
                              <p className="font-display text-base">
                                {formatPrice(product.price * qty, product.currency)}
                              </p>
                            </div>
                            <div className="mt-auto flex items-center justify-between pt-3">
                              <div className="flex items-center gap-1 rounded-full border border-[var(--line-strong)]">
                                <button
                                  onClick={() => dec(product.id)}
                                  className="grid h-7 w-7 place-items-center text-[var(--ink-soft)] hover:text-[var(--ink)]"
                                  aria-label="Decrease"
                                >
                                  <Minus className="h-3 w-3" />
                                </button>
                                <span className="w-6 text-center text-xs">{qty}</span>
                                <button
                                  onClick={() => inc(product.id)}
                                  className="grid h-7 w-7 place-items-center text-[var(--ink-soft)] hover:text-[var(--ink)]"
                                  aria-label="Increase"
                                >
                                  <Plus className="h-3 w-3" />
                                </button>
                              </div>
                              <button
                                onClick={() => remove(product.id)}
                                className="grid h-7 w-7 place-items-center text-[var(--ink-tertiary)] hover:text-[var(--rust)]"
                                aria-label="Remove"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {lines.length > 0 && (
                  <div className="sticky bottom-0 border-t border-[var(--line)] bg-[var(--paper)] px-6 py-5">
                    <div className="flex items-center justify-between text-sm text-[var(--ink-soft)]">
                      <span>Subtotal</span>
                      <span className="font-display text-base text-[var(--ink)]">
                        {formatPrice(sub, 'NGN')}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center justify-between text-xs text-[var(--ink-tertiary)]">
                      <span>Shipping (Lagos)</span>
                      <span>Free</span>
                    </div>
                    <button className="commerce-btn commerce-btn-primary mt-5 w-full justify-center">
                      Proceed to checkout
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                    <p className="mt-3 text-center text-[10px] uppercase tracking-[0.22em] text-[var(--ink-tertiary)]">
                      Free Nigeria delivery · 14-day returns
                    </p>
                  </div>
                )}
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
