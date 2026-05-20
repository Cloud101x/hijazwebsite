import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, HardHat, Menu, Phone, X } from 'lucide-react';
import { cn } from '../../../lib/cn';

const nav = [
  { label: 'Projects', href: '#projects' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Process', href: '#process' },
  { label: 'Equipment', href: '#equipment' },
  { label: 'About', href: '#about' },
];

export function ConstructionNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-all duration-500',
        scrolled
          ? 'border-[var(--line)] bg-[var(--bg)]/85 backdrop-blur-xl'
          : 'border-transparent bg-transparent',
      )}
    >
      <div className="construction-container flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <Link to="/portfolio" className="hidden items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--text-tertiary)] hover:text-[var(--text)] md:inline-flex">
            <ArrowLeft className="h-3.5 w-3.5" />
            Showcase
          </Link>
          <span className="hidden h-3 w-px bg-[var(--line-strong)] md:block" />
          <Link to="/construction" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center bg-[var(--orange)] text-white">
              <HardHat className="h-4.5 w-4.5" />
            </span>
            <div className="leading-tight">
              <p className="font-stencil text-base text-white">BEDROCK</p>
              <p className="font-mono text-[9px] uppercase text-[var(--text-tertiary)]">
                works · est. 1998
              </p>
            </div>
          </Link>
        </div>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded px-4 py-2 font-stencil text-[11px] text-[var(--text-soft)] transition-colors hover:bg-white/5 hover:text-[var(--text)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+2348049988877"
            className="hidden items-center gap-2 rounded px-3 py-2 text-xs text-[var(--text-soft)] transition-colors hover:bg-white/5 hover:text-[var(--text)] md:inline-flex"
          >
            <Phone className="h-3.5 w-3.5 text-[var(--orange)]" />
            +234 804 998 88 77
          </a>
          <a href="#quote" className="construction-btn-primary !py-2 !px-4 text-[11px]">
            Request a quote
          </a>
          <button
            className="grid h-9 w-9 place-items-center border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="border-y border-[var(--line)] bg-[var(--bg-2)] lg:hidden"
          >
            <div className="construction-container py-3">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-2 py-3 font-stencil text-xs text-[var(--text-soft)] hover:text-[var(--text)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
