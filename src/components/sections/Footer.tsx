import { motion } from 'framer-motion';

const footerNav = [
  {
    label: 'Studio',
    links: ['Manifesto', 'Team', 'Careers', 'Press', 'Contact'],
  },
  {
    label: 'Services',
    links: ['IT Consulting', 'Web Design & Development', 'Business Automation', 'Software Design', 'Branding'],
  },
  {
    label: 'Resources',
    links: ['Field Notes', 'Open source', 'Audits', 'Talks', 'Newsletter'],
  },
  {
    label: 'Office',
    links: ['Mabushi · Abuja', 'Nigeria'],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--border-subtle)] pt-16 sm:pt-24">
      <div className="container-custom relative">
        <div className="grid grid-cols-1 gap-12 lg:gap-16 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-amber via-ember to-[#7a2f00] shadow-ember-md">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/30 to-transparent opacity-50" />
                <svg viewBox="0 0 20 20" className="relative h-5 w-5 text-[var(--text-primary)]" fill="none">
                  <path d="M3 17V3h2.5v6.2L13 3h3.2L9.8 8 17 17h-3.4L8 10.5 5.5 12.5V17H3z" fill="currentColor" />
                </svg>
              </span>
              <span className="font-serif text-2xl italic tracking-tight text-[var(--text-primary)]">
                Hijaz<span className="text-[var(--accent)]">.</span>studio
              </span>
            </a>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-[var(--text-secondary)]">
              A full-service digital agency based in Abuja, delivering IT consulting, web development,
              business automation, software engineering, branding, and digital marketing solutions.
            </p>

            <address className="mt-4 text-sm not-italic text-[var(--text-tertiary)]">
              Cad Zone, ASTA Galleria Mabushi<br />
              Abuja, Nigeria
            </address>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {[
                { label: 'X', icon: <path d="M2.5 2.5L17 17.5M17.5 2.5L3 17.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /> },
                { label: 'GH', icon: <path d="M10 2.5C5.86 2.5 2.5 5.86 2.5 10c0 3.31 2.15 6.12 5.13 7.11.38.07.52-.16.52-.36v-1.27c-2.09.45-2.53-1.01-2.53-1.01-.34-.86-.83-1.09-.83-1.09-.68-.46.05-.45.05-.45.75.05 1.15.78 1.15.78.67 1.15 1.76.82 2.19.63.07-.49.26-.82.48-1.01-1.67-.19-3.42-.83-3.42-3.71 0-.82.29-1.49.78-2.02-.08-.19-.34-.96.07-2C7 5.42 7.6 5.6 8.79 6.4 9.34 6.25 9.94 6.18 10.54 6.18c.6 0 1.2.07 1.75.22 1.19-.8 1.79-.98 1.79-.98.41 1.04.15 1.81.07 2 .49.53.78 1.2.78 2.02 0 2.89-1.76 3.52-3.43 3.7.27.23.51.69.51 1.39v2.06c0 .2.14.43.52.36 2.98-.99 5.13-3.8 5.13-7.11 0-4.14-3.36-7.5-7.5-7.5z" fill="currentColor" /> },
                { label: 'LI', icon: <><rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" fill="none" /><path d="M6.5 8.5v5M6.5 6.5v.01M9.5 13.5v-3a1.5 1.5 0 013 0v3M9.5 13.5v-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></> },
                { label: 'DR', icon: <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.6" fill="none" /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border-subtle)] bg-[var(--surface-glass)] text-[var(--text-primary)] transition-all duration-300 hover:border-amber/40 hover:bg-[var(--accent)]/5 hover:text-[var(--accent)]"
                >
                  <svg viewBox="0 0 20 20" className="h-4 w-4">
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>

            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-glass)] px-4 py-2 text-xs text-[var(--text-secondary)]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              All systems nominal · 99.99% uptime · 90d
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-10">
            {footerNav.map((col, i) => (
              <motion.div
                key={col.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--text-tertiary)]">
                  {col.label}
                </p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="group inline-flex items-center gap-1.5 text-sm text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]"
                      >
                        {link}
                        <svg
                          className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        >
                          <path d="M3 9l6-6M5 3h4v4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-[var(--border-subtle)] py-8 sm:mt-20">
          <div className="flex flex-col items-start justify-between gap-5 text-xs text-[var(--text-tertiary)] md:flex-row md:items-center">
            <p>© 2025 Hijaz. All rights reserved. Built in Abuja with purpose.</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a href="#" className="transition-colors hover:text-[var(--text-primary)]">
                Privacy
              </a>
              <a href="#" className="transition-colors hover:text-[var(--text-primary)]">
                Terms
              </a>
              <a href="#" className="transition-colors hover:text-[var(--text-primary)]">
                Security
              </a>
              <a href="#" className="transition-colors hover:text-[var(--text-primary)]">
                Cookies
              </a>
              <span className="font-mono text-[var(--text-tertiary)]">v4.0.21 · {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>

        {/* Massive wordmark */}
        <div
          aria-hidden
          className="pointer-events-none relative -mt-4 select-none overflow-hidden mask-fade-b"
        >
          <h3 className="whitespace-nowrap text-center font-serif text-[24vw] font-normal italic leading-[0.85] text-gradient-amber opacity-40">
            hijaz<span className="text-[var(--accent)]">.</span>
          </h3>
        </div>
      </div>
    </footer>
  );
}