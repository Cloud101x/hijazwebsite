const items = [
  'Shipped from Lagos · 14 days',
  'Free local delivery in Lagos & Abuja',
  'Lifetime repair guarantee',
  'Made by seven hands · Nigeria',
  'Numbered & signed · each piece',
  'Atelier Journal · Issue 11',
];

export function CommerceMarquee() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--paper-warm)]">
      <div className="commerce-marquee-wrap relative overflow-hidden">
        <div className="commerce-marquee flex w-max items-center gap-12 whitespace-nowrap py-4 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink-soft)]">
          {[...items, ...items, ...items].map((item, i) => (
            <span key={i} className="flex items-center gap-6">
              <span>{item}</span>
              <span className="text-[var(--gold)]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
