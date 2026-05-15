import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlowOrb } from '../ui/GlowOrb';
import { projects, type Project } from '../../data/projects';

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

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/8 bg-white/[0.02] px-2.5 py-1 text-[11px] text-off-white/65"
                >
                  {t}
                </span>
              ))}
            </div>

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
                <ProjectScene key={scene.tag} tag={scene.tag} image={scene.image} delay={i * 0.1} primary={i === 0} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectScene({
  tag,
  image,
  delay,
  primary,
}: {
  tag: string;
  image: string;
  delay: number;
  primary?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group/scene relative aspect-[3/4] overflow-hidden rounded-xl border border-white/8 bg-graphite"
    >
      <img
        src={image}
        alt={tag}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-75 grayscale-[20%] transition-all duration-700 group-hover/scene:scale-[1.06] group-hover/scene:opacity-100 group-hover/scene:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal/40 via-transparent to-amber/10 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />

      {primary && (
        <span className="absolute left-3 top-3 rounded-full border border-amber/30 bg-black/40 px-2 py-0.5 text-[9px] font-medium uppercase tracking-[0.2em] text-flame backdrop-blur-md">
          Hero
        </span>
      )}

      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.18em] text-off-white/70">
        <span>{tag}</span>
        <span className="text-amber/80">●</span>
      </div>
    </motion.div>
  );
}
