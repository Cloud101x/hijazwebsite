import { motion } from 'framer-motion';
import { Award, Calendar, MessageSquare, Send } from 'lucide-react';
import { activity, attendance } from '../../data/dashboard';

const typeIcon = {
  grade: Award,
  submission: Send,
  message: MessageSquare,
  event: Calendar,
} as const;

const typeColor = {
  grade: 'text-[var(--emerald)] bg-[color:rgba(16,185,129,0.12)]',
  submission: 'text-[var(--sky-deep)] bg-[var(--sky-soft)]',
  message: 'text-[var(--indigo)] bg-[color:rgba(99,102,241,0.12)]',
  event: 'text-[var(--amber)] bg-[color:rgba(245,158,11,0.12)]',
} as const;

export function ActivityFeed() {
  return (
    <div className="space-y-4">
      <div className="school-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-tertiary)]">
              attendance · last 12 school days
            </p>
            <h3 className="font-display mt-1 text-xl font-semibold">96.4% present</h3>
          </div>
        </div>
        <div className="mt-5 flex items-end gap-1">
          {attendance.map((d, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              style={{ height: `${Math.max(d.pct, 14)}%`, transformOrigin: 'bottom' }}
              className={`flex-1 rounded-sm ${
                d.note === 'sick'
                  ? 'bg-[var(--rose)]'
                  : d.note === 'late'
                    ? 'bg-[var(--amber)]'
                    : 'bg-[var(--sky)]'
              }`}
            />
          ))}
        </div>
        <div className="mt-3 flex items-center gap-4 text-[10px] uppercase tracking-[0.18em] text-[var(--ink-tertiary)]">
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm bg-[var(--sky)]" /> present</span>
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm bg-[var(--amber)]" /> late</span>
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm bg-[var(--rose)]" /> sick</span>
        </div>
      </div>

      <div className="school-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-tertiary)]">
              activity · this morning
            </p>
            <h3 className="font-display mt-1 text-xl font-semibold">What just happened</h3>
          </div>
        </div>

        <ul className="mt-5 space-y-1">
          {activity.map((item, i) => {
            const Icon = typeIcon[item.type];
            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="flex items-start gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-[var(--surface-soft)]"
              >
                <span className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full ${typeColor[item.type]}`}>
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <div className="flex-1">
                  <p className="text-sm text-[var(--ink)]">
                    <span className="font-medium">{item.who}</span>{' '}
                    <span className="text-[var(--ink-soft)]">{item.what}</span>
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-tertiary)]">
                    {item.when} ago
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
