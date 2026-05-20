import { motion } from 'framer-motion';
import { CalendarDays, Clock, Mic2, Sparkles } from 'lucide-react';
import { events, type ArcadeEvent } from '../../data/events';
import { cn } from '../../../../lib/cn';

const accent: Record<ArcadeEvent['accent'], string> = {
  pink: 'text-[#FF2E88] border-[#FF2E88]/40 bg-[#FF2E88]/10',
  violet: 'text-[#8B5CF6] border-[#8B5CF6]/40 bg-[#8B5CF6]/10',
  tangerine: 'text-[#FF8A1F] border-[#FF8A1F]/40 bg-[#FF8A1F]/10',
  mint: 'text-[#6EE7B7] border-[#6EE7B7]/40 bg-[#6EE7B7]/10',
};

export function ArcadeEvents() {
  return (
    <section id="events" className="relative overflow-hidden py-28 md:py-36">
      <div className="arcade-container relative">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="arcade-chip">
              <CalendarDays className="h-3 w-3 text-[#FF8A1F]" />
              This week · 7 nights
            </span>
            <h2 className="font-display mt-6 text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[0.95] tracking-tight">
              The calendar is{' '}
              <span className="font-script italic neon-text-tangerine">loud.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/60">
              Tournament nights, DJ sets, baking classes, and the occasional jazz brunch. Reservations
              free for events under capacity — pay only if you order.
            </p>
          </div>

          <a href="#calendar" className="arcade-btn-ghost">
            <Mic2 className="h-3.5 w-3.5 text-[#FF2E88]" />
            Apply to host a night
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {events.map((event, i) => {
            const a = accent[event.accent];
            const pct = Math.round((event.capacity.booked / event.capacity.max) * 100);
            return (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.85, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="arcade-card group relative overflow-hidden p-6 transition-all duration-500 hover:-translate-y-1 md:p-7"
              >
                <div className="grid grid-cols-[88px_1fr] items-start gap-5 md:grid-cols-[120px_1fr]">
                  <div className={cn('rounded-2xl border p-3 text-center backdrop-blur-md', a)}>
                    <p className="font-pixel text-[10px] uppercase tracking-[0.22em] opacity-80">
                      {event.day}
                    </p>
                    <p className="font-display mt-1 text-xl font-bold leading-tight md:text-2xl">
                      {event.date}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className={cn('rounded-full border px-2 py-0.5 font-pixel text-[9px] uppercase tracking-[0.2em] backdrop-blur-md', a)}
                      >
                        {event.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-[11px] text-white/45">
                        <Clock className="h-3 w-3" />
                        {event.time}
                      </span>
                    </div>
                    <h3 className="font-display mt-3 text-xl font-semibold leading-tight text-white md:text-2xl">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">{event.blurb}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <p className="font-pixel text-[10px] uppercase tracking-[0.2em] text-white/45">
                        host · {event.host}
                      </p>
                      <p className="font-pixel text-[10px] uppercase tracking-[0.2em] text-white/55">
                        {event.capacity.booked} / {event.capacity.max} booked
                      </p>
                    </div>
                    <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/5">
                      <motion.span
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, delay: 0.2 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                        className={cn(
                          'block h-full rounded-full bg-gradient-to-r from-white/0',
                          event.accent === 'pink' && 'to-[#FF2E88]',
                          event.accent === 'violet' && 'to-[#8B5CF6]',
                          event.accent === 'tangerine' && 'to-[#FF8A1F]',
                          event.accent === 'mint' && 'to-[#6EE7B7]',
                        )}
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute right-5 top-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <Sparkles className="h-4 w-4 text-white/50" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
