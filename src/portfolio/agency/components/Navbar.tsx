import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/cn';
import { ThemeToggle } from './ui/ThemeToggle';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Studio', href: '#studio' },
  { label: 'Showcase', href: '/portfolio' },
];

export function Navbar() {
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
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4 md:px-4 md:pt-6"
    >
      <div
        className={cn(
          'flex w-full max-w-[1280px] items-center justify-between rounded-full px-3 py-2 sm:px-4 sm:py-2.5 transition-all duration-500 md:px-5',
          scrolled
            ? 'border border-[var(--border-medium)] bg-[var(--overlay-bg)] backdrop-blur-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)]'
            : 'border border-transparent bg-transparent',
        )}
      >
        <a href="#top" className="group flex items-center gap-2 sm:gap-2.5">
       
              {/* <img src="/logo-light.png" alt="Hijaz Logo" className="h-[60px] w-[60px]" /> */}
          <span className="font-serif text-lg italic tracking-tight text-[var(--text-primary)]">
            Hijaz<span className="text-amber">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative rounded-full px-4 py-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute inset-0 scale-90 rounded-full bg-[var(--surface-glass)] opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-full border border-[var(--border-medium)] bg-[var(--surface-glass)] px-4 py-2 text-sm text-[var(--text-primary)] transition-all duration-300 hover:border-amber/40 md:inline-flex"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-amber/60" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-amber" />
            </span>
            Book a call
          </a>
          <a
            href="#contact"
            className="btn-primary !px-4 !py-2 text-xs sm:!px-5 hidden sm:inline-flex"
          >
            Start a project
            <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 10h10M11 6l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border-medium)] bg-[var(--surface-glass)] text-[var(--text-primary)] md:hidden"
          >
            <div className="flex h-3 w-4 flex-col justify-between">
              <span className={cn('h-px w-full bg-current transition-all', open && 'translate-y-1.5 rotate-45')} />
              <span className={cn('h-px w-full bg-current transition-all', open && 'opacity-0')} />
              <span className={cn('h-px w-full bg-current transition-all', open && '-translate-y-1.5 -rotate-45')} />
            </div>
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
            className="absolute left-3 right-3 top-full mt-2 rounded-3xl border border-[var(--border-medium)] bg-[var(--overlay-bg)] p-3 backdrop-blur-2xl md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3.5 text-sm text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface-glass-hover)] hover:text-[var(--text-primary)]"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 border-t border-[var(--line)] pt-3">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary flex w-full items-center justify-center gap-2 text-sm"
              >
                Start a project
                <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 10h10M11 6l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}