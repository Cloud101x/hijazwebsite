import { ArrowUpRight } from 'lucide-react';

const cols = [
  { label: 'Portfolio', links: ['Buy', 'Lease', 'Off-market', 'New developments', 'Land bank'] },
  { label: 'Service', links: ['Brokers', 'Mortgage', 'Legal', 'Property management', 'Concierge'] },
  { label: 'Studio', links: ['Atelier journal', 'Press', 'Careers', 'Contact'] },
];

export function EstateFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--line)] pt-24">
      <div className="estate-container">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.36em] text-[var(--gold)]">
                est. mmxix
              </p>
              <p className="font-display mt-2 text-4xl font-medium tracking-tight md:text-5xl">
                Maison <span className="font-script italic">Lagos</span>
              </p>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-[var(--text-soft)]">
              A quiet brokerage for Nigeria's most considered houses. Lagos · Abuja · Cross River ·
              London. We move off-market when asked.
            </p>

            <div className="estate-rule-gold mt-10 max-w-xs" />
            <div className="mt-7 grid grid-cols-3 gap-px bg-[var(--line)]">
              {[
                { kpi: '₦89B', label: 'Closed · 2025' },
                { kpi: '64%', label: 'Off-market' },
                { kpi: '4', label: 'Offices' },
              ].map((m) => (
                <div key={m.label} className="bg-[var(--bg)] p-4">
                  <p className="font-display text-2xl text-[var(--gold)]">{m.kpi}</p>
                  <p className="font-mono mt-1 text-[10px] uppercase tracking-[0.22em] text-[var(--text-tertiary)]">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {cols.map((col) => (
              <div key={col.label}>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]">
                  {col.label}
                </p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="group inline-flex items-center gap-1.5 text-sm text-[var(--text-soft)] hover:text-[var(--text)]"
                      >
                        {link}
                        <ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-[var(--line)] py-8">
          <div className="flex flex-col items-start justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-tertiary)] md:flex-row md:items-center">
            <p>© 2026 Maison Lagos Real Estate Ltd · RC 1124892</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a href="#" className="hover:text-[var(--gold)]">Privacy</a>
              <a href="#" className="hover:text-[var(--gold)]">Terms</a>
              <a href="#" className="hover:text-[var(--gold)]">FIRS license</a>
            </div>
          </div>
        </div>

        <div aria-hidden className="pointer-events-none relative -mb-6 -mt-2 overflow-hidden">
          <p
            className="font-display whitespace-nowrap text-center text-[18vw] font-medium leading-[0.85] tracking-tight"
            style={{
              background: 'linear-gradient(180deg, rgba(201,162,75,0.65) 0%, transparent 70%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            maison lagos.
          </p>
        </div>
      </div>
    </footer>
  );
}
