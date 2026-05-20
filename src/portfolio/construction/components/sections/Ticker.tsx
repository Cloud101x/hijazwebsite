import { ticker } from '../../data/projects';

export function ConstructionTicker() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--bg-2)] py-4">
      <div className="construction-ticker-wrap relative overflow-hidden">
        <div className="construction-marquee flex w-max items-center gap-12 whitespace-nowrap font-stencil text-xs text-[var(--text-soft)]">
          {[...ticker, ...ticker, ...ticker].map((item, i) => (
            <span key={i} className="flex items-center gap-6">
              <span className="h-1.5 w-1.5 bg-[var(--orange)]" />
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
