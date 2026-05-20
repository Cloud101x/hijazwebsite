import { motion } from 'framer-motion';
import { ArrowRight, FileSignature, MapPin, Phone } from 'lucide-react';

export function QuoteCTA() {
  return (
    <section id="quote" className="relative overflow-hidden py-28 md:py-36">
      <div className="construction-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden border border-[var(--line)] bg-gradient-to-br from-[var(--bg-2)] to-[var(--bg-3)] p-10 md:p-16"
        >
          <div className="construction-tape absolute inset-x-0 top-0 h-3" />
          <div className="construction-tape absolute inset-x-0 bottom-0 h-3" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-[420px] w-[420px] rounded-full bg-[var(--orange)]/15 blur-[120px]" />

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <span className="construction-chip">Now bidding · Q3 — Q4 2026</span>
              <h2 className="font-display mt-6 text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] text-white">
                Have a site
                <br />
                <span className="text-[var(--orange)]">that needs building?</span>
              </h2>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-[var(--text-soft)] md:text-lg">
                Send us the brief — drone footage, drawings, even a sketch on a napkin. We'll come
                back with a fixed-price proposal in five working days.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <button className="construction-btn-primary">
                  <FileSignature className="h-4 w-4" />
                  Request a quote
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <a href="tel:+2348049988877" className="construction-btn-ghost">
                  <Phone className="h-4 w-4 text-[var(--orange)]" />
                  +234 804 998 88 77
                </a>
              </div>
            </div>

            <div className="construction-card relative p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-tertiary)]">
                head office
              </p>
              <p className="font-display mt-3 text-xl leading-tight text-white">
                Bedrock Works HQ
              </p>
              <div className="mt-2 flex items-start gap-2 text-sm text-[var(--text-soft)]">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--orange)]" />
                <span>Plot 22, Aguiyi Ironsi Street, Maitama, Abuja FCT</span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-px border border-[var(--line)] bg-[var(--line)]">
                <div className="bg-[var(--bg-2)] p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-tertiary)]">avg response</p>
                  <p className="font-display mt-1 text-xl text-white">48hr</p>
                </div>
                <div className="bg-[var(--bg-2)] p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-tertiary)]">site visit</p>
                  <p className="font-display mt-1 text-xl text-white">free</p>
                </div>
                <div className="bg-[var(--bg-2)] p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-tertiary)]">proposal</p>
                  <p className="font-display mt-1 text-xl text-white">5 days</p>
                </div>
                <div className="bg-[var(--bg-2)] p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-tertiary)]">guarantee</p>
                  <p className="font-display mt-1 text-xl text-white">24mo</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
