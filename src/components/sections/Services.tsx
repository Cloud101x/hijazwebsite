import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { GlowOrb } from '../ui/GlowOrb';

interface Service {
  index: string;
  title: string;
  description: string;
  capabilities: string[];
  icon: React.ReactNode;
  accent?: boolean;
}

const services: Service[] = [
  {
    index: '01',
    title: 'Product Engineering',
    description:
      'End-to-end engineering for complex web products. From whiteboard to scaled production with zero-downtime deploys.',
    capabilities: ['React / Next', 'TypeScript', 'Edge runtimes', 'Design systems'],
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8l-4 4 4 4M15 8l4 4-4 4" />
      </svg>
    ),
    accent: true,
  },
  {
    index: '02',
    title: 'Platform & Infra',
    description:
      'Resilient cloud platforms, distributed systems, and the developer experience that lets your team move at light speed.',
    capabilities: ['Kubernetes', 'Postgres / Cockroach', 'Terraform', 'Observability'],
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7l8-4 8 4-8 4-8-4zM4 12l8 4 8-4M4 17l8 4 8-4" />
      </svg>
    ),
  },
  {
    index: '03',
    title: 'AI Systems',
    description:
      'Production-grade AI products: agents, retrieval pipelines, evaluations, and LLM-native interfaces that ship safely.',
    capabilities: ['LLM orchestration', 'Vector search', 'Evals', 'Streaming UI'],
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
        <circle cx="12" cy="12" r="3.2" />
      </svg>
    ),
  },
  {
    index: '04',
    title: 'Brand & Interface',
    description:
      'Award-caliber visual systems and motion language. The opinionated craft that makes your product feel inevitable.',
    capabilities: ['Identity', 'Design system', 'Motion', 'Marketing'],
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 19h18M5 16l4-9 3 6 2-3 5 6" />
      </svg>
    ),
  },
  {
    index: '05',
    title: 'Mobile & Native',
    description:
      'iOS, Android, and cross-platform clients with the polish, motion, and performance of a flagship app.',
    capabilities: ['Swift', 'Kotlin', 'React Native', 'Offline-first'],
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path d="M11 18h2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    index: '06',
    title: 'Strategy & Audit',
    description:
      'Architectural reviews, performance audits, and roadmap design for teams who want a second senior brain in the room.',
    capabilities: ['Tech audit', 'Roadmaps', 'Hiring', 'Advisory'],
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="11" cy="11" r="6" />
        <path d="M20 20l-4.5-4.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-28 md:py-36">
      <GlowOrb className="left-1/2 top-0 -translate-x-1/2" size={780} color="amber" intensity="soft" />
      <div className="absolute inset-0 -z-10 grid-db opacity-30" />

      <div className="container-custom relative">
        <SectionHeading
          eyebrow="Capabilities"
          title={
            <>
              A vertically integrated <span className="font-serif italic text-[var(--accent)]">studio</span>{' '}
              <br className="hidden md:block" /> for ambitious software.
            </>
          }
          description="From the first principles sketch to global scale. Six disciplines, one obsessively senior team — operating as a single product organism."
        />

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-[var(--border-subtle)] bg-[var(--line)] md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.article
              key={service.index}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.85, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col gap-6 bg-[var(--card-bg)] p-8 transition-all duration-500 hover:bg-[var(--card-bg-hover)]"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber/60 to-transparent" />
                <div className="absolute -inset-x-10 -top-20 h-40 bg-[var(--accent)]/10 blur-3xl" />
              </div>

              <div className="relative flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-glass)] text-[var(--accent)] transition-all duration-500 group-hover:border-amber/40 group-hover:bg-[var(--accent)]/10 group-hover:text-flame group-hover:shadow-ember-sm">
                  {service.icon}
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
                  {service.index} / 06
                </span>
              </div>

              <div className="relative">
                <h3 className="text-2xl font-medium tracking-tight text-[var(--text-primary)]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {service.description}
                </p>
              </div>

              <div className="relative mt-auto flex flex-wrap gap-1.5">
                {service.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="rounded-full border border-[var(--border-subtle)] bg-[var(--overlay-bg)] px-2.5 py-1 text-[11px] text-[var(--text-secondary)] transition-all duration-300 group-hover:border-amber/20 group-hover:text-[var(--text-primary)]"
                  >
                    {cap}
                  </span>
                ))}
              </div>

              <div className="relative flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                <span>Explore practice</span>
                <svg
                  className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 10h10M11 6l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}