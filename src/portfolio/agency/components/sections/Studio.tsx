import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { GlowOrb } from '../ui/GlowOrb';
import { team } from '../../data/team';

const studioImage = '/clinic2.jpg';

export function Studio() {
  return (
    <section id="studio" className="relative hidden overflow-hidden py-28 md:py-36">
      <GlowOrb className="left-[5%] top-1/4" size={620} color="amber" intensity="soft" />
      <GlowOrb className="right-[5%] bottom-0" size={520} color="ember" intensity="soft" />

      <div className="container-custom relative">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-[1.4fr_1fr]">
          <SectionHeading
            align="left"
            eyebrow="Inside the studio · Abuja"
            title={
              <>
                A small room of <br />
                <span className="font-serif italic text-[var(--accent)]">very senior</span> people.
              </>
            }
            description="Forty-two engineers, designers, and operators across Abuja, Lagos, Accra, and Nairobi. Average tenure in the craft: 12 years. Average ego: small."
          />

          <div className="flex flex-wrap gap-2 md:justify-end">
            {['Abuja · HQ', 'Lagos', 'Accra', 'Nairobi'].map((city, i) => (
              <span
                key={city}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-glass)] px-3.5 py-1.5 text-xs text-[var(--text-primary)]"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full bg-amber shadow-ember-sm"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
                {city}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="border-gradient relative overflow-hidden rounded-3xl bg-[var(--card-bg)] shadow-card"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={studioImage}
                alt="Inside the Hijaz studio"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover grayscale-[20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/85 via-black/40 to-amber/20 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

              <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-6 md:inset-x-8 md:bottom-8">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">
                    Studio · Abuja HQ · Central Business District
                  </p>
                  <p className="mt-3 max-w-md font-serif text-2xl italic leading-tight text-[var(--text-primary)] md:text-3xl">
                    "We optimize for the work being undeniable. Everything else is a side effect."
                  </p>
                  <p className="mt-3 text-xs text-[var(--text-secondary)]">
                    — Adeola Hijazi, founding letter, Abuja, 2014
                  </p>
                </div>
                <div className="hidden shrink-0 rounded-2xl border border-[var(--border-subtle)] bg-[var(--overlay-bg)] p-4 backdrop-blur-md md:block">
                  <p className="font-serif text-3xl text-gradient-amber">42</p>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                    Senior staff
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {team.map((member, i) => (
              <motion.figure
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.85, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--card-bg)] shadow-card"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover grayscale-[40%] transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-amber/0 via-transparent to-amber/10 mix-blend-overlay opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                  <div className="absolute right-3 top-3 rounded-full border border-[var(--border-subtle)] bg-[var(--overlay-bg)] px-2 py-0.5 text-[9px] font-mono uppercase tracking-[0.18em] text-[var(--text-secondary)] backdrop-blur-md">
                    {member.location}
                  </div>

                  <figcaption className="absolute inset-x-4 bottom-4 text-[var(--text-primary)]">
                    <p className="text-sm font-medium leading-tight">{member.name}</p>
                    <p className="mt-0.5 text-[11px] text-[var(--text-primary)]">{member.role}</p>
                    <p className="mt-1.5 text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--accent)]">
                      {member.former}
                    </p>
                  </figcaption>
                </div>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}