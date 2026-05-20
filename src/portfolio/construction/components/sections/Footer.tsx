import { ArrowUpRight, HardHat } from 'lucide-react';

const cols = [
  { label: 'Trades', links: ['High-rise', 'Civil & roadworks', 'Industrial & ports', 'Energy', 'Civic', 'Residential'] },
  { label: 'Firm', links: ['Leadership', 'Yard & plant', 'Safety record', 'Sustainability', 'Careers', 'Press'] },
  { label: 'Contact', links: ['Request a quote', 'Abuja HQ', 'Lagos office', 'Port Harcourt yard', 'Sub-contractor onboarding'] },
];

export function ConstructionFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--line)] pt-24">
      <div className="construction-container">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center bg-[var(--orange)] text-white">
                <HardHat className="h-5 w-5" />
              </span>
              <div>
                <p className="font-stencil text-2xl text-white">BEDROCK WORKS</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-tertiary)]">
                  est. 1998 · abuja
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-[var(--text-soft)]">
              Twenty-seven years building Nigeria. From the BRT line you take to work to the tower
              you work inside. Reg. # RC 184293. ISO 9001, ISO 45001, OHSAS certified.
            </p>

            <div className="mt-9 grid grid-cols-3 gap-px border border-[var(--line)] bg-[var(--line)]">
              {[
                { kpi: '1.3M', label: 'safe man-hrs' },
                { kpi: '0', label: 'fatalities' },
                { kpi: '89%', label: 'local content' },
              ].map((m) => (
                <div key={m.label} className="bg-[var(--bg-2)] p-4">
                  <p className="font-display text-xl text-white">{m.kpi}</p>
                  <p className="font-mono mt-1 text-[10px] uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {cols.map((col) => (
              <div key={col.label}>
                <p className="font-stencil text-[11px] text-[var(--orange)]">{col.label}</p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="group inline-flex items-center gap-1.5 text-sm text-[var(--text-soft)] hover:text-white"
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
          <div className="flex flex-col items-start justify-between gap-4 text-[11px] uppercase tracking-[0.18em] text-[var(--text-tertiary)] md:flex-row md:items-center">
            <p>© 2026 Bedrock Works Nig. Ltd · RC 184293</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Safety policy</a>
              <a href="#" className="hover:text-white">Anti-bribery</a>
            </div>
          </div>
        </div>

        <div aria-hidden className="pointer-events-none relative -mt-4 overflow-hidden pb-2">
          <p className="font-display whitespace-nowrap text-center text-[18vw] leading-[0.85] text-white/[0.04]">
            BEDROCK.
          </p>
        </div>
      </div>
    </footer>
  );
}
