import { Link } from 'react-router-dom';
import { ArrowLeft, Bell, ChevronDown, Search } from 'lucide-react';
import { student } from '../data/dashboard';

export function SchoolTopbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[var(--surface)]/95 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <div className="flex items-center gap-3">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--surface-soft)] px-3 py-1.5 text-xs text-[var(--ink-soft)] hover:text-[var(--ink)]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Showcase
          </Link>
          <div className="hidden md:block">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-tertiary)]">
              Term 2 · Week 7 · Tuesday
            </p>
            <p className="font-display text-base font-semibold text-[var(--ink)]">
              Good morning, {student.name.split(' ')[0]}.
            </p>
          </div>
        </div>

        <div className="relative hidden flex-1 max-w-md md:block">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--ink-tertiary)]" />
          <input
            placeholder="Search subjects, teachers, classmates…"
            className="w-full rounded-lg border border-[var(--line)] bg-[var(--surface-soft)] py-2.5 pl-10 pr-16 text-sm text-[var(--ink)] placeholder:text-[var(--ink-tertiary)] focus:border-[var(--sky)] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[var(--sky-soft)]"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded border border-[var(--line)] bg-white px-1.5 py-0.5 font-mono text-[10px] text-[var(--ink-tertiary)]">
            ⌘K
          </kbd>
        </div>

        <div className="flex items-center gap-3">
          <button
            aria-label="Notifications"
            className="relative grid h-9 w-9 place-items-center rounded-lg border border-[var(--line)] bg-[var(--surface)] text-[var(--ink-soft)] hover:bg-[var(--surface-soft)] hover:text-[var(--ink)]"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[var(--rose)]" />
          </button>
          <button className="flex items-center gap-2.5 rounded-lg border border-[var(--line)] bg-[var(--surface)] px-2 py-1 text-left hover:bg-[var(--surface-soft)]">
            <div className="relative h-7 w-7 overflow-hidden rounded-full ring-2 ring-white">
              <img src={student.avatar} alt={student.name} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="hidden text-left md:block">
              <p className="text-xs font-medium text-[var(--ink)]">{student.name}</p>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--ink-tertiary)]">
                {student.number}
              </p>
            </div>
            <ChevronDown className="hidden h-3.5 w-3.5 text-[var(--ink-tertiary)] md:block" />
          </button>
        </div>
      </div>
    </header>
  );
}
