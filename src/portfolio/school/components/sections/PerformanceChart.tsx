import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { performanceChart } from '../../data/dashboard';

export function PerformanceChart() {
  const max = 100;
  const points = performanceChart.map((p, i) => {
    const x = (i / (performanceChart.length - 1)) * 100;
    const y = 100 - (p.score / max) * 80 - 10;
    return { x, y, ...p };
  });
  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const area = `${path} L 100 100 L 0 100 Z`;

  return (
    <div className="school-card p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-tertiary)]">
            performance · last 6 markings
          </p>
          <h3 className="font-display mt-1 text-xl font-semibold">Steady climb</h3>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-[color:rgba(16,185,129,0.12)] px-2.5 py-1 text-xs font-medium text-[var(--emerald)]">
          <TrendingUp className="h-3 w-3" />
          +17 pts
        </span>
      </div>

      <div className="relative mt-6 h-56 w-full">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="performance-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="performance-stroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>

          {/* gridlines */}
          {[20, 40, 60, 80].map((y) => (
            <line key={y} x1="0" x2="100" y1={y} y2={y} stroke="#E3E8EF" strokeWidth="0.2" />
          ))}

          <motion.path
            d={area}
            fill="url(#performance-gradient)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          />
          <motion.path
            d={path}
            fill="none"
            stroke="url(#performance-stroke)"
            strokeWidth="0.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>

        <div className="absolute inset-0 grid grid-cols-6">
          {points.map((p, i) => (
            <div key={i} className="relative">
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white ring-2 ring-[var(--sky)]"
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
              />
              {i === points.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  className="absolute -translate-x-1/2 -translate-y-full rounded-md bg-[var(--ink)] px-2 py-1 text-[10px] font-medium text-white"
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                >
                  89 pts
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-6 text-center">
        {performanceChart.map((p) => (
          <p key={p.term} className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-tertiary)]">
            {p.term}
          </p>
        ))}
      </div>
    </div>
  );
}
