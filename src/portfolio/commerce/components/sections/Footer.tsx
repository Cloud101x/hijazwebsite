import { ArrowUpRight } from 'lucide-react';

const cols = [
  { label: 'Shop', links: ['Objects', 'Apothecary', 'Linen', 'Table', 'Library', 'Gift cards'] },
  { label: 'Atelier', links: ['Our makers', 'Atelier journal', 'Studio visits', 'Press', 'Careers'] },
  { label: 'Service', links: ['Shipping', 'Returns & repair', 'Custom orders', 'Contact', 'FAQ'] },
];

export function CommerceFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--line)] bg-[var(--paper)] pt-24">
      <div className="commerce-container">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-[var(--ink-tertiary)]">
              est. mmxxiv · lagos
            </p>
            <p className="font-display mt-2 text-4xl font-medium tracking-tight text-[var(--ink)] md:text-5xl">
              Atelier Noir
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-[var(--ink-soft)]">
              A small house of slow goods, made by seven hands across Lagos, Abeokuta, Iseyin, and
              Ibadan. We release eighteen pieces a season, and not one more.
            </p>

            <div className="mt-9 flex max-w-md flex-col gap-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-tertiary)]">
                Atelier journal · monthly
              </p>
              <div className="flex items-center gap-2 border-b border-[var(--ink)]/30 pb-2">
                <input
                  type="email"
                  placeholder="your.email@studio.com"
                  className="flex-1 bg-transparent text-sm text-[var(--ink)] placeholder:text-[var(--ink-tertiary)] focus:outline-none"
                />
                <button className="text-[var(--ink-soft)] hover:text-[var(--ink)]">
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {cols.map((col) => (
              <div key={col.label}>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--ink-tertiary)]">
                  {col.label}
                </p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="group inline-flex items-center gap-1.5 text-sm text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-[var(--line)] py-8">
          <div className="flex flex-col items-start justify-between gap-4 text-xs text-[var(--ink-tertiary)] md:flex-row md:items-center">
            <p>© 2026 Atelier Noir Lagos Ltd · RC 3091245 · 14 Bishop Aboyade Cole, Victoria Island</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a href="#" className="hover:text-[var(--ink)]">Privacy</a>
              <a href="#" className="hover:text-[var(--ink)]">Terms</a>
              <a href="#" className="hover:text-[var(--ink)]">Cookies</a>
            </div>
          </div>
        </div>

        <div aria-hidden className="pointer-events-none relative -mb-8 -mt-2 overflow-hidden">
          <p className="font-display whitespace-nowrap text-center text-[16vw] font-medium leading-[0.85] tracking-tight text-[var(--ink)]/10">
            atelier noir.
          </p>
        </div>
      </div>
    </footer>
  );
}
