import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/cn';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Studio', href: '#studio' },
  { label: 'Insights', href: '#insights' },
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
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6"
    >
      <div
        className={cn(
          'flex w-full max-w-[1280px] items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 md:px-5',
          scrolled
            ? 'border border-white/8 bg-black/50 backdrop-blur-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]'
            : 'border border-transparent bg-transparent',
        )}
      >
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-amber via-ember to-[#7a2f00] shadow-ember-sm">
            <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/30 to-transparent opacity-50" />
            <svg viewBox="0 0 20 20" className="relative h-4 w-4 text-off-white" fill="none">
              <path d="M3 17V3h2.5v6.2L13 3h3.2L9.8 8 17 17h-3.4L8 10.5 5.5 12.5V17H3z" fill="currentColor" />
            </svg>
          </span>
          <span className="font-serif text-lg italic tracking-tight text-off-white">
            Hijaz<span className="text-amber">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative rounded-full px-4 py-2 text-sm text-off-white/65 transition-colors hover:text-off-white"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute inset-0 scale-90 rounded-full bg-white/[0.04] opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-off-white/85 transition-all duration-300 hover:border-amber/40 hover:text-off-white md:inline-flex"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-amber/60" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-amber" />
            </span>
            Book a call
          </a>
          <a
            href="#contact"
            className="btn-primary !px-5 !py-2 text-xs"
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
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-off-white md:hidden"
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
            className="absolute left-4 right-4 top-full mt-2 rounded-3xl border border-white/10 bg-black/85 p-3 backdrop-blur-2xl md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm text-off-white/80 transition-colors hover:bg-white/5 hover:text-off-white"
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
