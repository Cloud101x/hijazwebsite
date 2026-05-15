import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { GlowOrb } from '../ui/GlowOrb';

interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Infra' | 'AI' | 'Data' | 'Mobile';
}

const tech: TechItem[] = [
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Vite', category: 'Frontend' },
  { name: 'Tailwind', category: 'Frontend' },
  { name: 'Framer Motion', category: 'Frontend' },
  { name: 'Three.js', category: 'Frontend' },
  { name: 'Go', category: 'Backend' },
  { name: 'Rust', category: 'Backend' },
  { name: 'Node', category: 'Backend' },
  { name: 'Elixir', category: 'Backend' },
  { name: 'GraphQL', category: 'Backend' },
  { name: 'gRPC', category: 'Backend' },
  { name: 'AWS', category: 'Infra' },
  { name: 'GCP', category: 'Infra' },
  { name: 'Cloudflare', category: 'Infra' },
  { name: 'Kubernetes', category: 'Infra' },
  { name: 'Terraform', category: 'Infra' },
  { name: 'Pulumi', category: 'Infra' },
  { name: 'OpenAI', category: 'AI' },
  { name: 'Anthropic', category: 'AI' },
  { name: 'LangGraph', category: 'AI' },
  { name: 'Pinecone', category: 'AI' },
  { name: 'Postgres', category: 'Data' },
  { name: 'ClickHouse', category: 'Data' },
  { name: 'Redis', category: 'Data' },
  { name: 'Kafka', category: 'Data' },
  { name: 'Swift', category: 'Mobile' },
  { name: 'Kotlin', category: 'Mobile' },
  { name: 'React Native', category: 'Mobile' },
];

const categoryColors: Record<TechItem['category'], string> = {
  Frontend: 'text-amber border-amber/20 bg-amber/5',
  Backend: 'text-flame border-flame/20 bg-flame/5',
  Infra: 'text-copper border-copper/20 bg-copper/5',
  AI: 'text-amber border-amber/20 bg-amber/5',
  Data: 'text-flame border-flame/20 bg-flame/5',
  Mobile: 'text-copper border-copper/20 bg-copper/5',
};

export function TechStack() {
  return (
    <section id="stack" className="relative overflow-hidden py-28 md:py-36">
      <GlowOrb className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" size={900} color="amber" intensity="soft" />
      <div className="absolute inset-0 -z-10 grid-db opacity-25" />

      <div className="container-custom relative">
        <SectionHeading
          eyebrow="Stack"
          title={
            <>
              An obsession with the <br />
              <span className="font-serif italic text-[var(--accent)]">right tool</span> for the work.
            </>
          }
          description="We're polyglots by necessity. We pick the boring, fast, durable thing — and we go very deep."
        />

        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div className="border-gradient relative overflow-hidden rounded-3xl bg-[var(--card-bg)] p-8 backdrop-blur-xl shadow-card md:p-10">
            <div className="pointer-events-none absolute inset-0 grid-db opacity-20" />
            <div className="pointer-events-none absolute -inset-y-20 -left-20 h-64 w-64 rounded-full bg-[var(--accent)]/10 blur-3xl" />

            <div className="relative flex flex-wrap gap-2.5">
              {tech.map((t, i) => (
                <motion.span
                  key={t.name}
                  initial={{ opacity: 0, scale: 0.85, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.025,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className={`group inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-medium backdrop-blur-md transition-all duration-300 ${categoryColors[t.category]}`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_8px_currentColor]" />
                  <span className="text-[var(--text-primary)] transition-colors group-hover:text-[var(--text-primary)]">
                    {t.name}
                  </span>
                </motion.span>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            {[
              {
                title: 'Type-safe end-to-end',
                desc: 'TypeScript, generated clients, contract tests — the API your future self will thank you for.',
                stat: '0 prod TS errors',
              },
              {
                title: 'Frontiers, not novelties',
                desc: 'We adopt the right thing fast: edge runtimes, RSC, async LLM streaming, GPU-accelerated UI.',
                stat: 'shipped in 2025',
              },
              {
                title: 'Boring under the hood',
                desc: 'Postgres, Go, Linux. Predictable, observable, debuggable systems your oncall will love at 3am.',
                stat: '99.97% uptime',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.85, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-glass)] p-6 transition-all duration-500 hover:border-amber/30 hover:bg-[var(--surface-glass-hover)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-base font-medium text-[var(--text-primary)]">{item.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{item.desc}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-amber/20 bg-[var(--accent)]/5 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.16em] text-[var(--accent)]">
                    {item.stat}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}