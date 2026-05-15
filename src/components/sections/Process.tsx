import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlowOrb } from '../ui/GlowOrb';

interface ProcessStep {
  index: string;
  title: string;
  duration: string;
  description: string;
  artifacts: string[];
}

const steps: ProcessStep[] = [
  {
    index: '01',
    title: 'Decode',
    duration: 'Week 1',
    description:
      'Two senior leads embed with your team. We map the system, the people, and the latent ambition. You leave week one with a problem statement so sharp it cuts.',
    artifacts: ['North-star brief', 'System diagram', 'Risk register', 'Vision frames'],
  },
  {
    index: '02',
    title: 'Architect',
    duration: 'Weeks 2–3',
    description:
      'We design the surface and the substrate together. Interface, data model, and infra in one coherent shape — sized to your real constraints.',
    artifacts: ['Tech architecture', 'Design system seed', 'Prototype canvas', 'Prod plan'],
  },
  {
    index: '03',
    title: 'Build',
    duration: 'Weeks 3–10',
    description:
      'Tight pods of senior engineers ship daily behind feature flags. Weekly playbacks, milestone-based billing, and a Notion you can quote your board from.',
    artifacts: ['Daily prod deploys', 'Weekly playbacks', 'Live test plan', 'Telemetry'],
  },
  {
    index: '04',
    title: 'Launch',
    duration: 'Week 11',
    description:
      'Hardening, perf, security, and the launch motion. We orchestrate the moment — and the days after — so the work actually lands.',
    artifacts: ['Launch runbook', 'Marketing assets', 'On-call rotation', 'Press kit'],
  },
  {
    index: '05',
    title: 'Compound',
    duration: 'Ongoing',
    description:
      'We hand over to your team — or stay as a permanent senior pod. Monthly architecture reviews keep the system from going sideways.',
    artifacts: ['Knowledge transfer', 'Pod-on-retainer', 'Quarterly audit', 'Roadmap reviews'],
  },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.7', 'end 0.3'],
  });
  const railFill = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="process" className="relative overflow-hidden py-28 md:py-36">
      <GlowOrb className="left-1/2 top-0 -translate-x-1/2" size={780} color="amber" intensity="soft" />

      <div className="container-custom relative">
        <SectionHeading
          eyebrow="The process"
          title={
            <>
              Eleven weeks from <br />
              <span className="font-serif italic text-amber">whiteboard</span> to global launch.
            </>
          }
          description="A repeatable cadence we've refined over 180+ engagements. Predictable enough to plan around, opinionated enough to be ours."
        />

        <div ref={containerRef} className="relative mt-20">
          <div className="absolute left-7 top-0 hidden h-full w-px bg-white/8 md:block">
            <motion.span
              style={{ height: railFill }}
              className="absolute inset-x-0 top-0 w-px bg-gradient-to-b from-amber via-ember to-transparent shadow-[0_0_18px_rgba(255,106,0,0.55)]"
            />
          </div>

          <div className="space-y-5 md:pl-20">
            {steps.map((step, i) => (
              <motion.article
                key={step.index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.85, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className="absolute -left-[60px] top-7 hidden md:block">
                  <div className="grid h-7 w-7 place-items-center rounded-full border border-amber/30 bg-black shadow-ember-sm">
                    <span className="h-2 w-2 rounded-full bg-amber" />
                  </div>
                </div>

                <div className="border-gradient relative overflow-hidden rounded-3xl bg-charcoal/65 p-6 backdrop-blur-xl shadow-card transition-all duration-500 hover:bg-charcoal/85 md:p-8">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-[140px_1fr_auto] md:items-start">
                    <div>
                      <p className="font-serif text-5xl text-gradient-amber">{step.index}</p>
                      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.22em] text-off-white/45">
                        {step.duration}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium text-off-white md:text-[1.75rem]">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-off-white/60">
                        {step.description}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1.5 md:items-end">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-off-white/40">
                        Artifacts
                      </p>
                      <div className="flex flex-wrap gap-1.5 md:justify-end">
                        {step.artifacts.map((a) => (
                          <span
                            key={a}
                            className="rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-1 text-[11px] text-off-white/65"
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
