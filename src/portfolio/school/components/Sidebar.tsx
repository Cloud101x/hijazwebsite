import { Link } from 'react-router-dom';
import {
  BookOpen,
  Calendar,
  ChevronsLeft,
  GraduationCap,
  Home,
  Inbox,
  MessageSquare,
  Settings,
  TrendingUp,
  Users,
} from 'lucide-react';
import { cn } from '../../../lib/cn';

const nav = [
  { label: 'Overview', icon: Home, active: true },
  { label: 'Subjects', icon: BookOpen, count: 6 },
  { label: 'Timetable', icon: Calendar },
  { label: 'Grades', icon: TrendingUp },
  { label: 'Assignments', icon: Inbox, count: 3 },
  { label: 'Messages', icon: MessageSquare, count: 5 },
  { label: 'Classmates', icon: Users },
];

export function SchoolSidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-[268px] shrink-0 flex-col gap-6 border-r border-[var(--line)] bg-[var(--surface)] py-6 lg:flex">
      <div className="flex items-center justify-between px-5">
        <Link to="/school" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[var(--sky)] to-[var(--indigo)] text-white shadow-[0_8px_20px_-8px_rgba(59,130,246,0.55)]">
            <GraduationCap className="h-4.5 w-4.5" />
          </span>
          <div className="leading-tight">
            <p className="font-display text-base font-semibold tracking-tight">Sapientia</p>
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--ink-tertiary)]">
              Abuja College
            </p>
          </div>
        </Link>
        <button
          aria-label="Collapse"
          className="grid h-8 w-8 place-items-center rounded-lg text-[var(--ink-tertiary)] hover:bg-[var(--surface-soft)] hover:text-[var(--ink)]"
        >
          <ChevronsLeft className="h-4 w-4" />
        </button>
      </div>

      <div className="px-3">
        <p className="px-2 pb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-tertiary)]">
          Student portal
        </p>
        <nav className="space-y-1">
          {nav.map((item) => (
            <button
              key={item.label}
              className={cn(
                'group flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                item.active
                  ? 'bg-[var(--sky-soft)] text-[var(--sky-deep)]'
                  : 'text-[var(--ink-soft)] hover:bg-[var(--surface-soft)] hover:text-[var(--ink)]',
              )}
            >
              <span className="flex items-center gap-3">
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </span>
              {item.count && (
                <span
                  className={cn(
                    'rounded-md px-1.5 py-0.5 text-[10px] font-medium',
                    item.active
                      ? 'bg-white text-[var(--sky-deep)]'
                      : 'bg-[var(--surface-soft)] text-[var(--ink-tertiary)]',
                  )}
                >
                  {item.count}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto px-3">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-[var(--ink-soft)] hover:bg-[var(--surface-soft)] hover:text-[var(--ink)]">
          <Settings className="h-4 w-4" />
          Settings
        </button>

        <div className="mt-3 rounded-2xl border border-[var(--line)] bg-gradient-to-br from-[var(--sky-soft)] to-transparent p-4">
          <p className="font-display text-sm font-semibold text-[var(--ink)]">
            Parents’ evening · Fri
          </p>
          <p className="mt-1 text-xs text-[var(--ink-soft)]">
            17:00 — 19:00 · Main hall · with your form tutor
          </p>
          <button className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[var(--sky-deep)] hover:underline">
            View details →
          </button>
        </div>
      </div>
    </aside>
  );
}
