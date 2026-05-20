import { useScrollProgress } from '../hooks/useScrollProgress';

export function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-px">
      <div
        className="h-full origin-left bg-gradient-to-r from-ember via-amber to-flame shadow-[0_0_18px_rgba(255,106,0,0.5)] transition-transform duration-200"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}