import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Menu, Search, ShoppingBag, User, X } from 'lucide-react';
import { cn } from '../../../lib/cn';
import { useCart } from '../store/cart';

const nav = [
  { label: 'Objects', href: '#objects' },
  { label: 'Apothecary', href: '#apothecary' },
  { label: 'Linen', href: '#linen' },
  { label: 'Journal', href: '#journal' },
  { label: 'Atelier', href: '#atelier' },
];

export function CommerceNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-all duration-500',
        scrolled
          ? 'border-[var(--line)] bg-[var(--paper)]/85 backdrop-blur-xl'
          : 'border-transparent bg-transparent',
      )}
    >
      <div className="commerce-container flex items-center justify-between py-4 md:py-5">
        <div className="flex items-center gap-6">
          <Link
            to="/portfolio"
            className="hidden items-center gap-2 text-xs text-[var(--ink-soft)] hover:text-[var(--ink)] md:inline-flex"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Showcase
          </Link>
          <button
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line)] bg-white/40 text-[var(--ink-soft)] hover:bg-white md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        <Link to="/commerce" className="flex flex-col items-center">
          <span className="font-mono text-[9px] uppercase tracking-[0.32em] text-[var(--ink-tertiary)]">
            est. mmxxiv · lagos
          </span>
          <span className="font-display text-2xl font-medium tracking-tight text-[var(--ink)] md:text-3xl">
            Atelier Noir
          </span>
        </Link>

        <div className="flex items-center gap-3 md:gap-4">
          <button className="grid h-9 w-9 place-items-center rounded-full text-[var(--ink-soft)] hover:bg-[var(--ink)]/5">
            <Search className="h-4 w-4" />
          </button>
          <button className="hidden h-9 w-9 place-items-center rounded-full text-[var(--ink-soft)] hover:bg-[var(--ink)]/5 md:grid">
            <User className="h-4 w-4" />
          </button>
          <button
            onClick={openCart}
            className="relative grid h-9 w-9 place-items-center rounded-full text-[var(--ink-soft)] hover:bg-[var(--ink)]/5"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-4 w-4" />
            {count() > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -right-0.5 -top-0.5 grid h-4 w-4 place-items-center rounded-full bg-[var(--ink)] text-[10px] font-medium text-[var(--paper)]"
              >
                {count()}
              </motion.span>
            )}
          </button>
        </div>
      </div>

      <nav className="hidden border-t border-[var(--line)] md:block">
        <div className="commerce-container flex items-center justify-center gap-10 py-3">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute left-4 right-4 top-full mt-2 rounded-2xl border border-[var(--line)] bg-[var(--paper)]/95 p-3 backdrop-blur-xl md:hidden"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--ink-soft)] hover:bg-[var(--ink)]/5 hover:text-[var(--ink)]"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
