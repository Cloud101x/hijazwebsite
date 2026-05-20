import { motion } from 'framer-motion';
import { ArrowUpRight, BookMarked } from 'lucide-react';
import { subjects, type SubjectCard } from '../../data/dashboard';

const accentMap: Record<SubjectCard['accent'], { bar: string; text: string; soft: string }> = {
  sky: { bar: 'bg-[var(--sky)]', text: 'text-[var(--sky-deep)]', soft: 'bg-[var(--sky-soft)]' },
  cyan: { bar: 'bg-[var(--cyan)]', text: 'text-[var(--cyan)]', soft: 'bg-[var(--cyan-soft)]' },
  indigo: { bar: 'bg-[var(--indigo)]', text: 'text-[var(--indigo)]', soft: 'bg-[color:rgba(99,102,241,0.12)]' },
  amber: { bar: 'bg-[var(--amber)]', text: 'text-[var(--amber)]', soft: 'bg-[color:rgba(245,158,11,0.12)]' },
  emerald: { bar: 'bg-[var(--emerald)]', text: 'text-[var(--emerald)]', soft: 'bg-[color:rgba(16,185,129,0.12)]' },
  rose: { bar: 'bg-[var(--rose)]', text: 'text-[var(--rose)]', soft: 'bg-[color:rgba(244,63,94,0.12)]' },
};

export function Subjects() {
  return (
    <div className="school-card p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-tertiary)]">
            this term · 6 subjects
          </p>
          <h3 className="font-display mt-1 text-xl font-semibold">Course load</h3>
        </div>
        <button className="inline-flex items-center gap-1 text-xs font-medium text-[var(--ink-soft)] hover:text-[var(--ink)]">
          <BookMarked className="h-3.5 w-3.5" />
          All grades
        </button>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {subjects.map((s, i) => {
          const a = accentMap[s.accent];
          return (
            <motion.button
              key={s.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="group relative flex flex-col gap-3 rounded-xl border border-[var(--line)] bg-white p-4 text-left transition-all hover:border-[var(--line-strong)] hover:shadow-[0_8px_28px_-12px_rgba(15,23,42,0.12)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-[var(--ink)]">{s.name}</p>
                  <p className="mt-0.5 text-[11px] text-[var(--ink-tertiary)]">
                    {s.teacher} · {s.grade}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 -translate-x-1 text-[var(--ink-muted)] opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
              </div>

              <div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[var(--ink-tertiary)]">Progress</span>
                  <span className={`font-medium ${a.text}`}>{s.progress}%</span>
                </div>
                <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-[var(--surface-soft)]">
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className={`block h-full rounded-full ${a.bar}`}
                  />
                </div>
              </div>

              <p className={`mt-1 inline-flex items-center gap-1.5 self-start rounded-md ${a.soft} px-2 py-0.5 text-[10px] font-medium ${a.text}`}>
                Next · {s.nextLesson}
              </p>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
