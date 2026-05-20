import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarHeart, Check, ChevronDown, Minus, Plus, X } from 'lucide-react';
import { useReservation } from '../store/reservation';
import { cn } from '../../../lib/cn';

const tables = [
  { id: 'bakery-window', label: 'Bakery window', sub: '2-4 seats · morning sun', accent: '#FF8A1F' },
  { id: 'arcade-mezz', label: 'Arcade mezzanine', sub: '4-6 seats · cabinet view', accent: '#FF2E88' },
  { id: 'dj-floor', label: 'DJ floor', sub: '6-10 seats · loud, fun', accent: '#8B5CF6' },
  { id: 'private-booth', label: 'Private booth', sub: '8-12 · curtained · ₦50k deposit', accent: '#6EE7B7' },
] as const;

const dates = ['Thu · Jul 11', 'Fri · Jul 12', 'Sat · Jul 13', 'Sun · Jul 14', 'Mon · Jul 15'];
const times = ['18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];

export function ReservationDrawer() {
  const { open, closeDrawer, name, party, date, time, table, set } = useReservation();

  return (
    <Dialog.Root open={open} onOpenChange={(o) => (o ? null : closeDrawer())}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md"
              />
            </Dialog.Overlay>

            <Dialog.Content asChild>
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="fixed inset-y-0 right-0 z-[110] flex w-full max-w-md flex-col overflow-y-auto border-l border-white/10 bg-[#0A0612] shadow-[0_-20px_80px_-20px_rgba(0,0,0,0.7)]"
              >
                <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/8 bg-[#0A0612]/95 px-6 py-5 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#FF2E88] to-[#B91562] shadow-[0_8px_24px_-8px_rgba(255,46,136,0.7)]">
                      <CalendarHeart className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="font-display text-base font-semibold text-white">Reserve a table</p>
                      <p className="font-pixel text-[10px] uppercase tracking-[0.22em] text-white/45">
                        confirmed in &lt; 30 minutes
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={closeDrawer}
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/65 transition-colors hover:bg-white/10 hover:text-white"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="flex-1 space-y-7 px-6 py-7">
                  <Field label="Your name">
                    <input
                      value={name}
                      onChange={(e) => set('name', e.target.value)}
                      placeholder="Adaeze Okonkwo"
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#FF2E88]/50 focus:outline-none focus:ring-2 focus:ring-[#FF2E88]/20"
                    />
                  </Field>

                  <Field label="Party size">
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                      <button
                        onClick={() => set('party', Math.max(1, party - 1))}
                        className="grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/75 hover:bg-white/10"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <p className="flex-1 text-center font-display text-2xl font-bold text-white">{party}</p>
                      <button
                        onClick={() => set('party', Math.min(20, party + 1))}
                        className="grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/75 hover:bg-white/10"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </Field>

                  <Field label="Date">
                    <div className="flex flex-wrap gap-2">
                      {dates.map((d) => (
                        <button
                          key={d}
                          onClick={() => set('date', d)}
                          className={cn(
                            'rounded-full border px-3.5 py-1.5 text-xs transition-all',
                            d === date
                              ? 'border-[#FF2E88] bg-[#FF2E88]/15 text-white'
                              : 'border-white/10 bg-white/[0.03] text-white/65 hover:border-white/25 hover:text-white',
                          )}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </Field>

                  <Field label="Time">
                    <div className="grid grid-cols-3 gap-2">
                      {times.map((t) => (
                        <button
                          key={t}
                          onClick={() => set('time', t)}
                          className={cn(
                            'rounded-xl border px-3 py-2 text-sm transition-all',
                            t === time
                              ? 'border-[#FF2E88] bg-[#FF2E88]/15 text-white'
                              : 'border-white/10 bg-white/[0.03] text-white/65 hover:border-white/25 hover:text-white',
                          )}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </Field>

                  <Field label="Where would you like to sit?">
                    <div className="space-y-2">
                      {tables.map((t) => {
                        const active = table === t.id;
                        return (
                          <button
                            key={t.id}
                            onClick={() => set('table', t.id)}
                            className={cn(
                              'group flex w-full items-center justify-between rounded-2xl border p-4 text-left transition-all',
                              active
                                ? 'border-white/20 bg-white/[0.05]'
                                : 'border-white/8 bg-white/[0.02] hover:border-white/15',
                            )}
                          >
                            <div className="flex items-center gap-3">
                              <span
                                className="h-2.5 w-2.5 rounded-full"
                                style={{ background: t.accent, boxShadow: `0 0 12px ${t.accent}` }}
                              />
                              <div>
                                <p className="text-sm font-medium text-white">{t.label}</p>
                                <p className="font-pixel text-[10px] uppercase tracking-[0.18em] text-white/45">
                                  {t.sub}
                                </p>
                              </div>
                            </div>
                            {active ? (
                              <Check className="h-4 w-4 text-[#FF2E88]" />
                            ) : (
                              <ChevronDown className="h-4 w-4 -rotate-90 text-white/30" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </Field>

                  <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                    <p className="font-pixel text-[10px] uppercase tracking-[0.22em] text-white/45">
                      summary
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/85">
                      <strong className="font-semibold text-white">{name || 'You'}</strong> · party of{' '}
                      {party} · <strong className="text-white">{date}</strong> at{' '}
                      <strong className="text-white">{time}</strong> ·{' '}
                      {tables.find((t) => t.id === table)?.label.toLowerCase()}.
                    </p>
                  </div>
                </div>

                <div className="sticky bottom-0 border-t border-white/8 bg-[#0A0612]/95 px-6 py-5 backdrop-blur-xl">
                  <button className="arcade-btn-primary w-full justify-center">
                    Confirm reservation
                    <span className="font-pixel text-[10px] uppercase tracking-[0.22em] opacity-80">
                      · no deposit
                    </span>
                  </button>
                  <p className="mt-3 text-center text-[11px] text-white/40">
                    Free to cancel up to 2 hours before — text us on +234 803 12 12 121
                  </p>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-pixel text-[10px] uppercase tracking-[0.22em] text-white/45">{label}</p>
      <div className="mt-3">{children}</div>
    </div>
  );
}
