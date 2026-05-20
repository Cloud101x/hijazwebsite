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
    title: 'IT Consulting',
    description:
      'Strategic technology advisory to align your infrastructure with your business goals. We plan, assess, and guide your digital transformation from the ground up.',
    capabilities: ['Tech strategy', 'Infrastructure planning', 'Digital transformation', 'Security & compliance'],
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8l-4 4 4 4M15 8l4 4-4 4" />
      </svg>
    ),
    accent: true,
  },
  {
    index: '02',
    title: 'Web Design & Development',
    description:
      'Custom websites and web applications built with modern frameworks. Responsive, performant, and crafted to convert visitors into customers.',
    capabilities: ['React / Next.js', 'Responsive design', 'UI/UX', 'E-commerce'],
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7l8-4 8 4-8 4-8-4zM4 12l8 4 8-4M4 17l8 4 8-4" />
      </svg>
    ),
  },
  {
    index: '03',
    title: 'Business Automation',
    description:
      'Streamline your operations with intelligent automation. From workflow orchestration to CRM integration, we eliminate bottlenecks and free your team to focus on what matters.',
    capabilities: ['Workflow automation', 'CRM integration', 'Process optimization', 'Custom ERP'],
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v16h16" />
        <path d="M7 16l4-6 4 2 4-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    index: '04',
    title: 'Software Design & Development',
    description:
      'End-to-end custom software engineering. We take your idea from whiteboard to production with clean architecture, scalable code, and rapid delivery.',
    capabilities: ['Custom software', 'MVP development', 'Legacy modernization', 'API development'],
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 19h18M5 16l4-9 3 6 2-3 5 6" />
      </svg>
    ),
  },
  {
    index: '05',
    title: 'Branding',
    description:
      'Distinctive brand identities that leave a lasting impression. Logo design, visual systems, and brand strategy that communicates your story with clarity and impact.',
    capabilities: ['Brand identity', 'Logo design', 'Visual strategy', 'Brand guidelines'],
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="11" cy="11" r="6" />
        <path d="M20 20l-4.5-4.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    index: '06',
    title: 'Digital Marketing',
    description:
      'Data-driven marketing that grows your reach and revenue. SEO, social media, content strategy, and paid campaigns engineered for measurable results.',
    capabilities: ['SEO', 'Social media', 'Content strategy', 'Paid advertising'],
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
        <circle cx="12" cy="12" r="3.2" />
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
              Full-service digital solutions{' '}
              <br className="hidden md:block" /> for your business growth.
            </>
          }
          description="From strategy to execution. Six integrated disciplines, one committed team — delivering results that move your business forward."
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
                <span>Learn more</span>
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