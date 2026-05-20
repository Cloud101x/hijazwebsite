export function RouteFallback() {
  return (
    <div className="fixed inset-0 z-[200] grid place-items-center bg-[var(--bg-primary)]">
      <div className="flex flex-col items-center gap-5">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-[var(--accent)]/30 border-t-[var(--accent)]" />
          <div className="absolute inset-2 rounded-full bg-[var(--accent)]/30 blur-md" />
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-[var(--text-tertiary)]">
          Loading scene
        </p>
      </div>
    </div>
  );
}
