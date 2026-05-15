import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { GlowOrb } from '../ui/GlowOrb';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  highlight?: boolean;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Hijaz rebuilt our trading surface in eleven weeks. The team that took us six months to assemble couldn't have done it in a year. We now treat them as a permanent senior pod.",
    name: 'Eleanor Vance',
    role: 'Chief Technology Officer',
    company: 'Helios Capital',
    initials: 'EV',
    highlight: true,
  },
  {
    quote:
      "The most senior engineering team I've ever worked with — and I've shipped at three unicorns. They have opinions, they're right, and they move.",
    name: 'Marcus Okafor',
    role: 'VP Engineering',
    company: 'Nimbus AI',
    initials: 'MO',
  },
  {
    quote:
      "We hired Hijaz to design one screen. They quietly redesigned our entire product narrative in the same sprint. Conversion is up 38%.",
    name: 'Sofia Lindqvist',
    role: 'Co-founder',
    company: 'Volta Mobility',
    initials: 'SL',
  },
  {
    quote:
      "Awwwards-grade craft, FAANG-grade engineering. I do not know how they do both. The work is, simply, the best in the field right now.",
    name: 'Dr. Ravi Krishnan',
    role: 'Chief Product Officer',
    company: 'Atlas Health',
    initials: 'RK',
  },
  {
    quote:
      'Their architecture review saved us a four-month rewrite. Twenty pages of writing that paid for the engagement five times over.',
    name: 'Hannah Müller',
    role: 'Head of Platform',
    company: 'Mercury OS',
    initials: 'HM',
  },
];

export function Testimonials() {
  return (
    <section id="insights" className="relative overflow-hidden py-28 md:py-36">
      <GlowOrb className="left-[10%] top-1/3" size={520} color="ember" intensity="soft" />
      <GlowOrb className="right-[10%] bottom-1/4" size={480} color="copper" intensity="soft" />

      <div className="container-custom relative">
        <SectionHeading
          eyebrow="Voices"
          title={
            <>
              The teams we ship with <br />
              <span className="font-serif italic text-amber">say it best.</span>
            </>
          }
          description="A small selection from our active partners. References from the rest available on request."
        />

        <div className="mt-20 grid grid-cols-1 gap-5 md:grid-cols-6 md:grid-rows-2 lg:gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.95, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-3xl border border-white/8 bg-charcoal/65 p-6 backdrop-blur-xl shadow-card transition-all duration-700 hover:border-amber/30 hover:bg-charcoal/85 md:p-8 ${
                gridSpan(i, t.highlight)
              }`}
            >
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                {t.highlight && (
                  <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-amber/15 blur-3xl" />
                )}
              </div>

              {t.highlight && (
                <span className="relative mb-6 inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-flame">
                  Featured engagement
                </span>
              )}

              <svg
                className={`relative mb-5 h-7 w-7 text-amber/60 ${t.highlight ? 'h-10 w-10' : ''}`}
                viewBox="0 0 32 32"
                fill="currentColor"
                aria-hidden
              >
                <path d="M11 8C7 8 4 11 4 15v9h9v-9H8c0-3 1-5 4-5V8zm15 0c-4 0-7 3-7 7v9h9v-9h-5c0-3 1-5 4-5V8z" />
              </svg>

              <blockquote
                className={`relative text-off-white/85 ${
                  t.highlight ? 'text-xl leading-relaxed md:text-2xl' : 'text-base leading-relaxed'
                }`}
              >
                {t.quote}
              </blockquote>

              <figcaption className="relative mt-7 flex items-center gap-4 border-t border-white/5 pt-5">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-amber to-ember text-sm font-medium text-off-white shadow-ember-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-off-white">{t.name}</p>
                  <p className="text-xs text-off-white/50">
                    {t.role} · <span className="text-amber/85">{t.company}</span>
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function gridSpan(i: number, highlight?: boolean): string {
  if (highlight) return 'md:col-span-3 md:row-span-2';
  const map = [
    '',
    'md:col-span-3',
    'md:col-span-3',
    'md:col-span-3',
    'md:col-span-3',
    'md:col-span-3',
  ];
  return map[i] ?? 'md:col-span-3';
}
