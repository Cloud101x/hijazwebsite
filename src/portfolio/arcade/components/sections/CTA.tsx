import { motion } from 'framer-motion';
import { CalendarHeart, MapPin, Phone } from 'lucide-react';
import { useReservation } from '../../store/reservation';

export function ArcadeCTA() {
  const openDrawer = useReservation((s) => s.openDrawer);

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="arcade-container">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="arcade-card arcade-card-glow arcade-noise relative overflow-hidden p-10 md:p-16"
        >
          <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[140%] -translate-x-1/2 bg-[#FF2E88]/30 blur-[120px]" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-[60%] bg-gradient-to-l from-[#8B5CF6]/15 to-transparent" />

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <span className="arcade-chip">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#FF2E88]/70" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-[#FF2E88]" />
                </span>
                Open right now · 19 tables free
              </span>

              <h2 className="font-display mt-7 text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[0.92] tracking-tight">
                Come hungry.
                <br />
                <span className="font-script italic neon-text-pink">Leave loud.</span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
                Reserve a table, book a tournament, or just walk in. We hold a few cabinets back
                every night for the brave.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <button onClick={openDrawer} className="arcade-btn-primary">
                  <CalendarHeart className="h-4 w-4" />
                  Reserve a table
                </button>
                <a href="tel:+2348031212121" className="arcade-btn-ghost">
                  <Phone className="h-4 w-4" />
                  +234 803 12 12 121
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-white/8 bg-black/40 p-6 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <p className="font-pixel text-[10px] uppercase tracking-[0.22em] text-white/45">
                    location · hours
                  </p>
                  <span className="rounded-full bg-[#6EE7B7]/15 px-2 py-0.5 text-[10px] text-[#6EE7B7]">
                    Open now
                  </span>
                </div>

                <div className="mt-5 flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-[#FF2E88]" />
                  <div>
                    <p className="text-sm text-white">14 Herbert Macaulay Way</p>
                    <p className="text-xs text-white/55">Yaba, Lagos · 100001</p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2 border-t border-white/5 pt-5 text-xs">
                  {[
                    { day: 'Thu', hrs: '09:00 — 00:00' },
                    { day: 'Fri', hrs: '09:00 — 02:00' },
                    { day: 'Sat', hrs: '10:00 — 02:00' },
                    { day: 'Sun', hrs: '10:00 — 22:00' },
                  ].map((row) => (
                    <div key={row.day} className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2">
                      <span className="font-pixel uppercase tracking-[0.18em] text-white/55">
                        {row.day}
                      </span>
                      <span className="text-white/85">{row.hrs}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
