import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CalendarHeart, Menu, X } from 'lucide-react';
import { cn } from '../../../lib/cn';
import { useReservation } from '../store/reservation';

const nav = [
  { label: 'Menu', href: '#menu' },
  { label: 'Arcade', href: '#arcade' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
];

export function ArcadeNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const openDrawer = useReservation((s) => s.openDrawer);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6"
    >
      <div
        className={cn(
          'flex w-full max-w-[1320px] items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 md:px-5',
          scrolled
            ? 'border border-white/8 bg-[#0A0612]/70 shadow-[0_10px_40px_-10px_rgba(255,46,136,0.25)] backdrop-blur-2xl'
            : 'border border-transparent bg-transparent',
        )}
      >
        <Link to="/" className="group flex items-center gap-3">
          <span className="hidden h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors group-hover:border-[var(--hot-pink)] group-hover:text-white md:inline-flex">
            <ArrowLeft className="h-3.5 w-3.5" />
          </span>
          <span className="flex items-center gap-2">
            <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#FF2E88] via-[#B91562] to-[#5B0E3A] shadow-[0_10px_24px_-8px_rgba(255,46,136,0.7)]">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/35 to-transparent opacity-40" />
              <svg viewBox="0 0 20 20" className="relative h-4.5 w-4.5 text-white" fill="currentColor">
                <circle cx="10" cy="10" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="10" cy="10" r="2.2" />
              </svg>
            </span>
            <div className="leading-tight">
              <p className="font-display text-base font-semibold tracking-tight text-white">
                Sunny & Soul
              </p>
              <p className="font-pixel text-[9px] uppercase tracking-[0.24em] text-white/45">
                bakery · arcade · Yaba
              </p>
            </div>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative rounded-full px-4 py-2 text-sm text-white/65 transition-colors hover:text-white"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute inset-0 scale-90 rounded-full bg-white/[0.04] opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={openDrawer}
            className="arcade-btn-primary !py-2 !px-4 text-xs"
          >
            <CalendarHeart className="h-3.5 w-3.5" />
            Reserve a table
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="absolute left-4 right-4 top-full mt-2 rounded-3xl border border-white/10 bg-[#0A0612]/95 p-3 backdrop-blur-2xl md:hidden"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white"
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
