import { motion } from 'framer-motion';
import { Check, Clock, FileText } from 'lucide-react';
import { assignments } from '../../data/dashboard';
import { cn } from '../../../../lib/cn';

const statusStyle = {
  submitted: { pill: 'bg-[color:rgba(16,185,129,0.12)] text-[var(--emerald)]', label: 'Submitted', icon: Check },
  'in-progress': { pill: 'bg-[var(--sky-soft)] text-[var(--sky-deep)]', label: 'In progress', icon: Clock },
  pending: { pill: 'bg-[color:rgba(244,63,94,0.12)] text-[var(--rose)]', label: 'Pending', icon: FileText },
} as const;

export function Assignments() {
  return (
    <div className="school-card p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-tertiary)]">
            assignments · 4 active
          </p>
          <h3 className="font-display mt-1 text-xl font-semibold">Due this week</h3>
        </div>
        <button className="school-btn-ghost">All assignments</button>
      </div>

      <ul className="mt-5 divide-y divide-[var(--line)]">
        {assignments.map((a, i) => {
          const s = statusStyle[a.status];
          return (
            <motion.li
              key={a.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.04 }}
              className="flex items-center gap-4 py-4"
            >
              <span
                className={cn(
                  'grid h-9 w-9 shrink-0 place-items-center rounded-lg',
                  s.pill,
                )}
              >
                <s.icon className="h-4 w-4" />
              </span>
              <div className="flex-1">
                <p className="text-sm font-medium text-[var(--ink)]">{a.title}</p>
                <p className="text-[11px] text-[var(--ink-tertiary)]">
                  {a.subject} · weight {a.weight}
                </p>
              </div>
              <div className="hidden text-right md:block">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-tertiary)]">
                  due
                </p>
                <p className="text-xs font-medium text-[var(--ink)]">{a.due}</p>
              </div>
              <span className={`school-pill ${s.pill}`}>{s.label}</span>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
