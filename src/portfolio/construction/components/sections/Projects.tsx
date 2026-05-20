import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { projects, type ConstructionProject } from '../../data/projects';
import { cn } from '../../../../lib/cn';

type Filter = 'All' | ConstructionProject['type'];
const types: Filter[] = ['All', 'High-rise', 'Industrial', 'Roadworks', 'Civic', 'Residential', 'Energy'];

const statusStyle = {
  Delivered: 'bg-[color:rgba(16,185,129,0.15)] text-[#34D399]',
  'In progress': 'bg-[color:rgba(249,115,22,0.15)] text-[var(--orange)]',
  Handover: 'bg-[color:rgba(250,204,21,0.15)] text-[var(--safety)]',
} as const;

export function ConstructionProjects() {
  const [filter, setFilter] = useState<Filter>('All');
  const items = useMemo(() => (filter === 'All' ? projects : projects.filter((p) => p.type === filter)), [filter]);

  return (
    <section id="projects" className="relative overflow-hidden py-28 md:py-36">
      <div className="construction-container">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-[var(--line)] pb-10 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="construction-chip">Selected work · 2024–2026</span>
            <h2 className="font-display mt-5 text-[clamp(2.25rem,6vw,5rem)] leading-[0.92] text-white">
              Six projects.
              <br />
              <span className="text-[var(--orange)]">Six provinces.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {types.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  'px-3 py-1.5 font-stencil text-[10px] uppercase transition-all',
                  filter === f
                    ? 'bg-[var(--orange)] text-white'
                    : 'border border-[var(--line)] bg-[var(--surface)] text-[var(--text-soft)] hover:border-[var(--line-strong)] hover:text-white',
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {items.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: ConstructionProject; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.85, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="construction-card group relative overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.cover}
          alt={project.name}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/30 to-transparent" />

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className={`px-2.5 py-0.5 font-stencil text-[10px] uppercase ${statusStyle[project.status]}`}>
            {project.status}
          </span>
          <span className="construction-chip !py-0.5 !text-[9px]">{project.type}</span>
        </div>

        <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </div>

        <div className="absolute inset-x-5 bottom-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--orange)]">
            {project.id.replace('pr-', 'No. ')} · {project.delivered}
          </p>
          <p className="font-display mt-2 text-2xl leading-tight text-white md:text-3xl">
            {project.name}
          </p>
          <p className="mt-1.5 flex items-center gap-2 text-xs text-[var(--text-soft)]">
            <MapPin className="h-3 w-3" />
            {project.location} · {project.client}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 divide-x divide-[var(--line)] border-t border-[var(--line)] bg-[var(--bg-2)]">
        {[
          { label: 'Value', value: project.value },
          { label: 'Duration', value: project.duration },
          { label: 'Scope', value: project.scope.split('·')[0].trim() },
        ].map((m) => (
          <div key={m.label} className="p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-tertiary)]">
              {m.label}
            </p>
            <p className="font-display mt-1 text-base text-white">{m.value}</p>
          </div>
        ))}
      </div>
    </motion.article>
  );
}
