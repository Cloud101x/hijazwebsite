import { animate, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlowOrb } from '../ui/GlowOrb';

interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
  decimals?: number;
}

const stats: Stat[] = [
  { value: 4.6, suffix: '×', label: 'Velocity multiplier', description: 'measured against incumbent agency baselines', decimals: 1 },
  { value: 99.97, suffix: '%', label: 'Production uptime', description: 'across all systems we currently operate', decimals: 2 },
  { value: 21, suffix: 'd', label: 'Avg. time-to-prod', description: 'from kickoff to first revenue-generating release' },
  { value: 14, label: 'African markets live', description: 'NG, GH, KE, ZA, EG, RW, CI, SN, TZ, UG and more' },
  { value: 180, suffix: '+', label: 'Products shipped', description: 'across fintech, AI, logistics, healthcare' },
  { value: 96, suffix: '%', label: 'Client retention', description: 'partners who return for a second engagement or more' },
];

function CountUp({ to, decimals = 0 }: { to: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        setVal(v);
      },
    });
    return () => controls.stop();
  }, [inView, to]);

  return <span ref={ref}>{val.toFixed(decimals)}</span>;
}

export function Stats() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <GlowOrb className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" size={1100} color="amber" intensity="soft" />
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />

      <div className="container-custom relative">
        <SectionHeading
          eyebrow="By the numbers"
          title={
            <>
              Outcomes are the only <br />
              <span className="font-serif italic text-amber">brand</span> that matters.
            </>
          }
          description="Selected metrics from across our active portfolio. Each one is a contractually verifiable outcome — not a marketing line."
        />

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="group relative overflow-hidden bg-charcoal/85 p-8 transition-all duration-500 hover:bg-graphite md:p-10"
            >
              <div className="pointer-events-none absolute -inset-y-12 -inset-x-12 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                <div className="absolute inset-0 bg-amber/10 blur-3xl" />
              </div>

              <div className="relative flex items-baseline gap-1 text-display-lg font-semibold leading-none text-gradient-amber">
                {s.prefix && <span className="text-3xl text-off-white/55">{s.prefix}</span>}
                <CountUp to={s.value} decimals={s.decimals ?? 0} />
                {s.suffix && <span className="text-3xl">{s.suffix}</span>}
              </div>
              <p className="relative mt-5 text-sm font-medium uppercase tracking-[0.18em] text-off-white/85">
                {s.label}
              </p>
              <p className="relative mt-1.5 text-xs text-off-white/50">{s.description}</p>

              <span className="absolute right-6 top-6 font-mono text-[10px] uppercase tracking-[0.2em] text-off-white/25">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
