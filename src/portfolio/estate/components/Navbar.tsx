import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Search } from 'lucide-react';
import { cn } from '../../../lib/cn';

const nav = [
  { label: 'Buy', href: '#listings' },
  { label: 'Lease', href: '#lease' },
  { label: 'Off-market', href: '#off' },
  { label: 'Mortgage', href: '#mortgage' },
  { label: 'Brokers', href: '#brokers' },
  { label: 'Journal', href: '#journal' },
];

export function EstateNavbar() {
  const [scrolled, setScrolled] = useState(false);

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
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-all duration-500',
        scrolled ? 'border-[var(--line)] bg-[var(--bg)]/85 backdrop-blur-xl' : 'border-transparent bg-transparent',
      )}
    >
      <div className="estate-container flex items-center justify-between py-5 md:py-6">
        <div className="flex items-center gap-4">
          <Link
            to="/portfolio"
            className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--text-tertiary)] hover:text-[var(--text)] md:inline-flex"
          >
            <ArrowLeft className="h-3 w-3" />
            Showcase
          </Link>
        </div>

        <Link to="/estate" className="flex flex-col items-center">
          <span className="font-mono text-[9px] uppercase tracking-[0.36em] text-[var(--gold)]">
            est. mmxix
          </span>
          <span className="font-display mt-1 text-2xl font-medium tracking-tight text-[var(--text)] md:text-3xl">
            Maison <span className="font-script">Lagos</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <button className="grid h-9 w-9 place-items-center text-[var(--text-soft)] hover:text-[var(--gold)]">
            <Search className="h-4 w-4" />
          </button>
          <a
            href="tel:+2348012345600"
            className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-soft)] hover:text-[var(--gold)] md:inline-flex"
          >
            <Phone className="h-3.5 w-3.5 text-[var(--gold)]" />
            +234 801 234 5600
          </a>
        </div>
      </div>

      <div className="border-t border-[var(--line)]">
        <nav className="estate-container hidden items-center justify-center gap-10 py-3 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--text-soft)] transition-colors hover:text-[var(--gold)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
