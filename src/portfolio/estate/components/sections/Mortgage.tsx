import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Banknote, Calculator } from 'lucide-react';
import { formatNGN } from '../../data/properties';

export function MortgageCalculator() {
  const [price, setPrice] = useState(1_650_000_000);
  const [downPct, setDownPct] = useState(35);
  const [years, setYears] = useState(15);
  const [rate, setRate] = useState(18);

  const result = useMemo(() => {
    const down = price * (downPct / 100);
    const principal = price - down;
    const monthlyRate = rate / 100 / 12;
    const n = years * 12;
    const monthly = monthlyRate === 0
      ? principal / n
      : (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
    const total = monthly * n;
    return { down, principal, monthly, total, interest: total - principal };
  }, [price, downPct, years, rate]);

  return (
    <section id="mortgage" className="relative overflow-hidden bg-[var(--bg-2)] py-28 md:py-36">
      <div className="estate-container">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <span className="estate-chip">
              <Calculator className="h-3 w-3 text-[var(--gold)]" />
              Mortgage workings
            </span>
            <h2 className="font-display mt-6 text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.95]">
              What the <br /><span className="font-script italic text-[var(--gold)]">monthly</span> looks like.
            </h2>
            <p className="mt-7 max-w-md text-base leading-relaxed text-[var(--text-soft)]">
              We work with five Nigerian lenders and three private banks abroad. Move the sliders to
              get a feel — our brokers will arrange the real numbers in 48 hours.
            </p>
            <div className="estate-rule-gold mt-10 max-w-xs" />

            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)]">
              {[
                { label: 'Approved lenders', value: '5' },
                { label: 'Median LTV', value: '65%' },
                { label: 'Avg arrangement', value: '21 days' },
                { label: 'NHF eligible', value: '12 props' },
              ].map((m) => (
                <div key={m.label} className="bg-[var(--bg-3)] p-5">
                  <p className="font-display text-2xl text-[var(--text)]">{m.value}</p>
                  <p className="font-mono mt-1 text-[10px] uppercase tracking-[0.22em] text-[var(--text-tertiary)]">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="estate-card relative p-7 md:p-9"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]">
              estimate · informational only
            </p>

            <div className="mt-7 space-y-6">
              <Slider label="Property price" value={price} min={300_000_000} max={5_000_000_000} step={50_000_000} onChange={setPrice} format={formatNGN} />
              <Slider label={`Down payment · ${downPct}%`} value={downPct} min={10} max={80} step={1} onChange={setDownPct} format={(v) => `${v}%`} />
              <Slider label={`Term · ${years} years`} value={years} min={5} max={30} step={1} onChange={setYears} format={(v) => `${v}yr`} />
              <Slider label={`Interest rate · ${rate}%`} value={rate} min={6} max={28} step={0.5} onChange={setRate} format={(v) => `${v}%`} />
            </div>

            <div className="estate-rule-gold my-8" />

            <div className="grid grid-cols-2 gap-px bg-[var(--line)]">
              <Stat label="Monthly payment" value={formatNGN(result.monthly)} accent />
              <Stat label="Down payment" value={formatNGN(result.down)} />
              <Stat label="Loan principal" value={formatNGN(result.principal)} />
              <Stat label="Total interest" value={formatNGN(result.interest)} />
            </div>

            <button className="estate-btn-primary mt-7 w-full justify-center">
              <Banknote className="h-4 w-4" />
              Pre-qualify with a broker
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-soft)]">{label}</p>
        <p className="font-display text-base text-[var(--gold)]">{format(value)}</p>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-[var(--gold)]"
      />
    </div>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="bg-[var(--bg-2)] p-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-tertiary)]">{label}</p>
      <p className={`font-display mt-1 text-2xl ${accent ? 'text-[var(--gold)] md:text-3xl' : 'text-[var(--text)]'}`}>
        {value}
      </p>
    </div>
  );
}
