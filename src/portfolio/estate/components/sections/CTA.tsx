import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

export function EstateCTA() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className="estate-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="estate-grain relative overflow-hidden border border-[var(--line-strong)] bg-[var(--bg-2)]"
        >
          <div
            className="absolute inset-0 opacity-25"
            style={{
              background:
                'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,162,75,0.45), transparent 70%)',
            }}
          />
          <div className="estate-rule-gold absolute inset-x-0 top-0" />
          <div className="estate-rule-gold absolute inset-x-0 bottom-0" />

          <div className="relative grid grid-cols-1 gap-10 p-10 md:p-16 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <span className="estate-chip">By appointment</span>
              <h2 className="font-display mt-7 text-[clamp(2.5rem,7vw,6rem)] leading-[0.92]">
                We show
                <br />
                <span className="font-script italic text-[var(--gold)]">quietly.</span>
              </h2>
              <p className="font-display mt-7 max-w-xl text-lg leading-relaxed text-[var(--text-soft)] md:text-xl">
                Most of what we sell never reaches a listing. Tell us what you're after — the next
                house is probably already with us, just not yet visible.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#book" className="estate-btn-primary">
                  <Calendar className="h-4 w-4" />
                  Schedule a viewing
                </a>
                <a href="mailto:office@maisonlagos.ng" className="estate-btn-ghost">
                  office@maisonlagos.ng
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="border border-[var(--line)] bg-[var(--bg)]/65 p-6 backdrop-blur-md">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]">
                offices
              </p>
              <div className="mt-5 space-y-5">
                {[
                  { city: 'Lagos · Ikoyi', address: '14a Glover Road, Old Ikoyi · GMT+1' },
                  { city: 'Abuja · Maitama', address: '8 Aguiyi Ironsi Way, Maitama' },
                  { city: 'London (satellite)', address: '11 Wigmore Street · by appointment' },
                ].map((o) => (
                  <div key={o.city} className="border-t border-[var(--line)] pt-4 first:border-0 first:pt-0">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-tertiary)]">
                      {o.city}
                    </p>
                    <p className="font-display mt-1 text-base leading-tight">{o.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
