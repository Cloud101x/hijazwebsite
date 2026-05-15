import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlowOrb } from '../ui/GlowOrb';

interface Project {
  index: string;
  client: string;
  category: string;
  title: string;
  description: string;
  year: string;
  award?: string;
  metric: { label: string; value: string };
  scenes: { tag: string; tone: 'amber' | 'graphite' | 'mixed' }[];
}

const projects: Project[] = [
  {
    index: '01',
    client: 'Helios Capital',
    category: 'Fintech / Trading',
    title: 'Realtime portfolio surface for institutional traders',
    description:
      'Sub-30ms streaming visualizations powering a $48B AUM trading desk. Built on a custom WebGL canvas and an event-sourced ledger.',
    year: '2025',
    award: 'Awwwards SOTD',
    metric: { label: 'Latency P99', value: '24ms' },
    scenes: [
      { tag: 'Trading canvas', tone: 'amber' },
      { tag: 'Ledger graph', tone: 'mixed' },
      { tag: 'Risk panel', tone: 'graphite' },
    ],
  },
  {
    index: '02',
    client: 'Nimbus AI',
    category: 'AI / Developer tools',
    title: 'Agentic IDE that ships production code',
    description:
      'A native macOS IDE with multi-agent orchestration, semantic indexing, and a generative shell. Now used by 40k engineers.',
    year: '2025',
    award: 'CSS Design Awards',
    metric: { label: 'Active devs', value: '40k+' },
    scenes: [
      { tag: 'Agent shell', tone: 'graphite' },
      { tag: 'Semantic index', tone: 'amber' },
      { tag: 'Code canvas', tone: 'mixed' },
    ],
  },
  {
    index: '03',
    client: 'Volta Mobility',
    category: 'Climate / Hardware',
    title: 'OS for Europe’s largest EV charging network',
    description:
      'Driver app, dispatcher console, and hardware OS — orchestrating 120k chargers across 14 markets with 99.97% uptime.',
    year: '2024',
    metric: { label: 'Uptime', value: '99.97%' },
    scenes: [
      { tag: 'Driver app', tone: 'mixed' },
      { tag: 'Fleet map', tone: 'amber' },
      { tag: 'Hardware OS', tone: 'graphite' },
    ],
  },
  {
    index: '04',
    client: 'Atlas Health',
    category: 'Healthcare / Enterprise',
    title: 'Clinical intelligence platform for 200+ hospitals',
    description:
      'HIPAA-compliant data fabric and a beautifully fast clinician interface. Processes 18M patient events daily.',
    year: '2024',
    award: 'Webby Award',
    metric: { label: 'Events/day', value: '18M' },
    scenes: [
      { tag: 'Clinician console', tone: 'graphite' },
      { tag: 'Patient timeline', tone: 'amber' },
      { tag: 'Data fabric', tone: 'mixed' },
    ],
  },
];

export function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const lineHeight = useTransform(scrollYProgress, [0.05, 0.95], ['0%', '100%']);

  return (
    <section id="work" className="relative overflow-hidden py-28 md:py-36">
      <GlowOrb className="left-[10%] top-1/3" size={620} color="ember" intensity="soft" />
      <GlowOrb className="right-[8%] top-2/3" size={520} color="copper" intensity="soft" />

      <div className="container-custom relative">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-[1.4fr_1fr]">
          <SectionHeading
            align="left"
            eyebrow="Selected work"
            title={
              <>
                Products that have <br />
                <span className="font-serif italic text-amber">defined categories.</span>
              </>
            }
            description="Each engagement compounds. We pick a small number of partners per quarter and ship the work the industry talks about."
          />
          <div className="flex md:justify-end">
            <a
              href="#all-work"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-off-white/85 backdrop-blur-md transition-all duration-300 hover:border-amber/40"
            >
              View full archive
              <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 10h10M11 6l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <div ref={containerRef} className="relative mt-20">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-white/5 md:block">
            <motion.div
              style={{ height: lineHeight }}
              className="absolute inset-x-0 top-0 w-px bg-gradient-to-b from-amber via-ember to-transparent"
            />
          </div>

          <div className="space-y-8 md:pl-16">
            {projects.map((project, i) => (
              <ProjectCard key={project.index} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className="absolute -left-[68px] top-8 hidden h-3 w-3 md:block">
        <span className="absolute inset-0 rounded-full bg-amber/20" />
        <span className="absolute inset-[3px] rounded-full bg-amber shadow-ember-sm" />
      </div>

      <div className="border-gradient relative overflow-hidden rounded-3xl bg-charcoal/70 p-6 backdrop-blur-xl shadow-card transition-all duration-700 hover:bg-charcoal/95 md:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.15fr]">
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-off-white/35">
                {project.index} — {project.client}
              </span>
              <span className="h-3 w-px bg-white/15" />
              <span className="text-[11px] uppercase tracking-[0.18em] text-off-white/45">
                {project.category}
              </span>
              {project.award && (
                <span className="rounded-full border border-amber/30 bg-amber/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-flame">
                  {project.award}
                </span>
              )}
            </div>

            <h3 className="text-2xl font-medium leading-tight text-off-white md:text-3xl">
              {project.title}
            </h3>

            <p className="text-sm leading-relaxed text-off-white/55">{project.description}</p>

            <div className="mt-2 flex items-center justify-between border-t border-white/5 pt-5">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-off-white/35">
                  {project.metric.label}
                </p>
                <p className="font-serif text-2xl text-gradient-amber">{project.metric.value}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-off-white/40">{project.year}</span>
                <a
                  href="#case-study"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-off-white/70 transition-all duration-300 hover:border-amber/50 hover:bg-amber/10 hover:text-amber"
                  aria-label="Open case study"
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 13l6-6M8 7h5v5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-3 gap-2.5">
              {project.scenes.map((scene, i) => (
                <ProjectScene key={scene.tag} tone={scene.tone} tag={scene.tag} delay={i * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectScene({
  tone,
  tag,
  delay,
}: {
  tone: 'amber' | 'graphite' | 'mixed';
  tag: string;
  delay: number;
}) {
  const bg =
    tone === 'amber'
      ? 'bg-gradient-to-br from-ember/30 via-amber/10 to-black'
      : tone === 'mixed'
        ? 'bg-gradient-to-br from-amber/20 via-graphite to-black'
        : 'bg-gradient-to-br from-graphite via-charcoal to-black';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`group/scene relative aspect-[3/4] overflow-hidden rounded-xl border border-white/8 ${bg}`}
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      {tone === 'amber' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-24 w-24 rounded-full bg-ember-glow" />
          <div className="absolute h-12 w-12 rounded-full bg-amber shadow-ember-lg" />
        </div>
      )}

      {tone === 'graphite' && (
        <div className="absolute inset-4 flex flex-col gap-1.5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-1 rounded-full bg-white/10"
              style={{ width: `${30 + Math.sin(i * 1.7) * 30 + 30}%` }}
            />
          ))}
          <div className="mt-auto flex items-end gap-1">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className="w-2 rounded-sm bg-amber/40"
                style={{ height: `${15 + Math.sin(i * 1.3) * 18 + 18}px` }}
              />
            ))}
          </div>
        </div>
      )}

      {tone === 'mixed' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-32 w-32">
            <div className="absolute inset-0 rounded-full border border-amber/40" />
            <div className="absolute inset-2 rounded-full border border-amber/20" />
            <div className="absolute inset-4 rounded-full border border-amber/10" />
            <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber shadow-ember-sm" />
          </div>
        </div>
      )}

      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.18em] text-off-white/55">
        <span>{tag}</span>
        <span className="text-amber/70">●</span>
      </div>
    </motion.div>
  );
}
