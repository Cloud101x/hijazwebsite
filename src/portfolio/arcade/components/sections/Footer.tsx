import { Link } from 'react-router-dom';
import { ArrowUpRight, Camera, Heart, MessageCircle, Tv2 } from 'lucide-react';

const cols = [
  {
    label: 'The room',
    links: ['Menu', 'Arcade floor', 'Events calendar', 'Private bookings', 'Gift cards'],
  },
  {
    label: 'Kitchen',
    links: ['About the bakery', 'Sunday brunch', 'Catering', 'Allergens', 'Ingredient sourcing'],
  },
  {
    label: 'Visit',
    links: ['Find us in Yaba', 'Parking & taxis', 'Group bookings', 'Contact', 'Press kit'],
  },
];

export function ArcadeFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 pt-24">
      <div className="arcade-container">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#FF2E88] via-[#B91562] to-[#5B0E3A] shadow-[0_14px_36px_-8px_rgba(255,46,136,0.7)]">
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/35 to-transparent opacity-40" />
                <svg viewBox="0 0 20 20" className="relative h-6 w-6 text-white" fill="currentColor">
                  <circle cx="10" cy="10" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="10" cy="10" r="2.4" />
                </svg>
              </span>
              <div className="leading-tight">
                <p className="font-display text-2xl font-semibold tracking-tight text-white">
                  Sunny &amp; Soul
                </p>
                <p className="font-pixel text-[10px] uppercase tracking-[0.24em] text-white/45">
                  Bakery · Arcade · Yaba, Lagos
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/55">
              We opened in 2022 on a corner where a Sega arcade used to live. We kept some of the
              cabinets, painted the walls a different pink, and added flour. Everyone gets a
              quarter on the way out.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              {[
                { Icon: Camera, href: '#', label: 'Instagram' },
                { Icon: Tv2, href: '#', label: 'Twitch · tournaments live' },
                { Icon: MessageCircle, href: '#', label: 'WhatsApp business' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-white/65 transition-all hover:border-[#FF2E88]/60 hover:bg-[#FF2E88]/8 hover:text-white"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              ))}
            </div>

            <div className="mt-9 inline-flex items-center gap-2.5 rounded-full border border-white/8 bg-white/[0.02] px-4 py-2 text-xs text-white/65">
              <Heart className="h-3 w-3 text-[#FF2E88]" />
              Get the weekly menu in your inbox
              <span className="h-3 w-px bg-white/15" />
              <a href="#newsletter" className="text-white hover:text-[#FF2E88]">
                Subscribe →
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {cols.map((col) => (
              <div key={col.label}>
                <p className="font-pixel text-[10px] uppercase tracking-[0.24em] text-[#FF2E88]/85">
                  {col.label}
                </p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="group flex items-center gap-1.5 text-sm text-white/75 transition-colors hover:text-white"
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

        <div className="mt-20 border-t border-white/5 py-8">
          <div className="flex flex-col items-start justify-between gap-4 text-xs text-white/45 md:flex-row md:items-center">
            <p>© 2025 Sunny &amp; Soul Hospitality Ltd · RC 2244881 · Yaba, Lagos.</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Cookies</a>
              <a href="#" className="hover:text-white">Loyalty terms</a>
              <span className="font-pixel">v2.4 · sunny.lol</span>
            </div>
          </div>
        </div>

        {/* Massive wordmark */}
        <div aria-hidden className="pointer-events-none relative -mt-2 select-none overflow-hidden">
          <h3
            className="font-display whitespace-nowrap text-center text-[22vw] font-bold leading-[0.85] tracking-tight"
            style={{
              background: 'linear-gradient(180deg, rgba(255,46,136,0.55) 0%, transparent 75%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            sunny &amp; soul.
          </h3>
        </div>
      </div>
    </footer>
  );
}
