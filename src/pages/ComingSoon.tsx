import { Link } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import { getEntry } from '../portfolio/registry';

interface ComingSoonProps {
  slug: string;
}

export function ComingSoon({ slug }: ComingSoonProps) {
  const entry = getEntry(slug);

  return (
    <main className="grid min-h-screen place-items-center px-6">
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-[var(--card-border)] bg-[var(--card-bg)] p-10 text-center shadow-[var(--shadow-card)] backdrop-blur-xl md:p-14"
        style={
          {
            ['--accent' as string]: entry?.accent ?? 'var(--accent)',
            ['--accent-glow' as string]: entry?.accentSoft ?? 'var(--accent-glow)',
          } as React.CSSProperties
        }
      >
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[140%] -translate-x-1/2 blur-3xl"
          style={{ background: entry?.accentSoft ?? 'transparent', opacity: 0.45 }}
        />

        <span className="relative inline-flex items-center gap-2 rounded-full border border-[var(--border-medium)] bg-[var(--surface-glass)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--text-secondary)]">
          <Clock className="h-3 w-3" />
          {entry?.number ?? '—'} · in production
        </span>

        <h1 className="relative mt-6 text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight text-[var(--text-primary)]">
          {entry?.title ?? 'Next showcase'}
        </h1>
        <p className="relative mt-2 text-sm uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
          {entry?.category ?? ''}
        </p>

        <p className="relative mx-auto mt-7 max-w-md text-base leading-relaxed text-[var(--text-secondary)]">
          {entry?.description ?? 'This showcase project is being built next. The brief is locked, the design system is sketched.'}
        </p>

        {entry && (
          <div className="relative mx-auto mt-7 flex flex-wrap items-center justify-center gap-2">
            {entry.palette.map((p) => (
              <div
                key={p.hex}
                className="flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-glass)] px-2.5 py-1"
              >
                <span className="h-3 w-3 rounded-full" style={{ background: p.hex }} />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        )}

        <Link
          to="/"
          className="relative mt-10 inline-flex items-center gap-2 rounded-full border border-[var(--border-medium)] bg-[var(--surface-glass)] px-5 py-2.5 text-sm text-[var(--text-primary)] transition-all hover:border-[var(--accent)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>
      </div>
    </main>
  );
}

export default ComingSoon;
