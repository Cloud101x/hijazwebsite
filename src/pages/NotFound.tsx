import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6">
      <div className="text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[var(--text-tertiary)]">
          404 · off-map
        </p>
        <h1 className="mt-4 text-[clamp(3rem,10vw,7rem)] font-semibold leading-[0.95] tracking-tight text-[var(--text-primary)]">
          Nothing lives here.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-sm text-[var(--text-secondary)]">
          The page you’re after doesn’t exist — or hasn’t been built yet. Head back to the
          portfolio index.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--border-medium)] bg-[var(--surface-glass)] px-5 py-2.5 text-sm text-[var(--text-primary)] transition-all hover:border-[var(--accent)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to index
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
