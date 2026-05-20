import { motion } from 'framer-motion';
import { CalendarClock, ChevronRight } from 'lucide-react';
import { todaySchedule } from '../../data/dashboard';
import { cn } from '../../../../lib/cn';

const statusMap = {
  done: { pill: 'bg-[var(--surface-soft)] text-[var(--ink-tertiary)]', label: 'Done', dot: 'bg-[var(--ink-muted)]' },
  now: { pill: 'bg-[var(--sky-soft)] text-[var(--sky-deep)]', label: 'Now', dot: 'bg-[var(--sky)] animate-pulse' },
  next: { pill: 'bg-[color:rgba(99,102,241,0.12)] text-[var(--indigo)]', label: 'Next', dot: 'bg-[var(--indigo)]' },
  later: { pill: 'bg-white text-[var(--ink-tertiary)]', label: 'Later', dot: 'bg-[var(--ink-muted)]' },
} as const;

export function Schedule() {
  return (
    <div className="school-card p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-tertiary)]">
            today · tue · 12 may
          </p>
          <h3 className="font-display mt-1 text-xl font-semibold">Your timetable</h3>
        </div>
        <button className="inline-flex items-center gap-1 text-xs font-medium text-[var(--ink-soft)] hover:text-[var(--ink)]">
          <CalendarClock className="h-3.5 w-3.5" />
          Week view
          <ChevronRight className="h-3 w-3" />
        </button>
      </div>

      <ul className="mt-5 space-y-2">
        {todaySchedule.map((slot, i) => {
          const s = statusMap[slot.status];
          return (
            <motion.li
              key={slot.time + slot.subject}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className={cn(
                'flex items-center gap-4 rounded-xl border px-4 py-3 transition-colors',
                slot.status === 'now'
                  ? 'border-[var(--sky)] bg-[var(--sky-soft)]'
                  : 'border-transparent hover:border-[var(--line)] hover:bg-[var(--surface-soft)]',
              )}
            >
              <p className="font-mono w-14 text-sm font-medium text-[var(--ink-soft)]">{slot.time}</p>
              <span className={`h-2 w-2 rounded-full ${s.dot}`} />
              <div className="flex-1">
                <p className="text-sm font-medium text-[var(--ink)]">{slot.subject}</p>
                <p className="text-[11px] text-[var(--ink-tertiary)]">
                  {slot.room} · {slot.teacher}
                </p>
              </div>
              <span className={`school-pill ${s.pill}`}>{s.label}</span>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
