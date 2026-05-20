import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Award, BookOpen, Clock, TrendingUp } from 'lucide-react';
import { student } from '../../data/dashboard';

const cards = [
  {
    label: 'Cumulative GPA',
    value: student.cumulative.toFixed(2),
    sub: 'out of 5.00',
    icon: Award,
    change: '+0.12',
    direction: 'up' as const,
    accent: 'text-[var(--sky-deep)] bg-[var(--sky-soft)]',
  },
  {
    label: 'Class rank',
    value: `${student.rank} / ${student.cohort}`,
    sub: 'in SS 2 · Set A',
    icon: TrendingUp,
    change: '+2',
    direction: 'up' as const,
    accent: 'text-[var(--indigo)] bg-[color:rgba(99,102,241,0.12)]',
  },
  {
    label: 'Attendance',
    value: '96.4%',
    sub: 'this term',
    icon: Clock,
    change: '-1.1%',
    direction: 'down' as const,
    accent: 'text-[var(--amber)] bg-[color:rgba(245,158,11,0.12)]',
  },
  {
    label: 'Subjects',
    value: '6',
    sub: '3 above target',
    icon: BookOpen,
    change: '+1',
    direction: 'up' as const,
    accent: 'text-[var(--emerald)] bg-[color:rgba(16,185,129,0.12)]',
  },
];

export function OverviewCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((c, i) => {
        const Arrow = c.direction === 'up' ? ArrowUpRight : ArrowDownRight;
        return (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="school-card relative p-5"
          >
            <div className="flex items-center justify-between">
              <span className={`grid h-9 w-9 place-items-center rounded-lg ${c.accent}`}>
                <c.icon className="h-4 w-4" />
              </span>
              <span
                className={`flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[11px] font-medium ${
                  c.direction === 'up'
                    ? 'bg-[color:rgba(16,185,129,0.12)] text-[var(--emerald)]'
                    : 'bg-[color:rgba(244,63,94,0.12)] text-[var(--rose)]'
                }`}
              >
                <Arrow className="h-3 w-3" />
                {c.change}
              </span>
            </div>
            <p className="font-display mt-5 text-3xl font-bold tracking-tight text-[var(--ink)]">
              {c.value}
            </p>
            <p className="mt-1 text-xs font-medium text-[var(--ink-soft)]">{c.label}</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-tertiary)]">
              {c.sub}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
