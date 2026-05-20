import { motion } from 'framer-motion';
import { MessageSquareHeart, Star } from 'lucide-react';
import { arcadeTestimonials, type ArcadeTestimonial } from '../../data/testimonials';
import { cn } from '../../../../lib/cn';

const accent: Record<ArcadeTestimonial['accent'], string> = {
  pink: 'from-[#FF2E88]/25 to-transparent text-[#FF2E88]',
  violet: 'from-[#8B5CF6]/25 to-transparent text-[#8B5CF6]',
  tangerine: 'from-[#FF8A1F]/25 to-transparent text-[#FF8A1F]',
  mint: 'from-[#6EE7B7]/25 to-transparent text-[#6EE7B7]',
};

export function ArcadeTestimonialsSection() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 arcade-grid-bg opacity-25" />
      <div className="pointer-events-none absolute right-[10%] top-[20%] h-[420px] w-[420px] rounded-full bg-[#FF2E88]/20 blur-[100px]" />
      <div className="pointer-events-none absolute left-[10%] bottom-[10%] h-[380px] w-[380px] rounded-full bg-[#8B5CF6]/20 blur-[100px]" />

      <div className="arcade-container relative">
        <div className="text-center">
          <span className="arcade-chip mx-auto">
            <MessageSquareHeart className="h-3 w-3 text-[#FF2E88]" />
            Said about us, recently
          </span>
          <h2 className="font-display mx-auto mt-6 max-w-3xl text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[0.95] tracking-tight">
            The reviews are{' '}
            <span className="font-script italic neon-text-pink">enthusiastic.</span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {arcadeTestimonials.map((t, i) => (
            <motion.figure
              key={t.handle}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.85, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="arcade-card relative flex flex-col p-6"
            >
              <div className={cn('pointer-events-none absolute inset-0 bg-gradient-to-br opacity-50', accent[t.accent])} />

              <div className="relative flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-pixel text-[10px] uppercase tracking-[0.2em] text-white/65">
                  {t.source}
                </span>
                <span className="flex items-center gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-[#FF8A1F] text-[#FF8A1F]" />
                  ))}
                </span>
              </div>

              <blockquote className="relative mt-5 flex-1 text-base leading-relaxed text-white/85">
                "{t.quote}"
              </blockquote>

              <figcaption className="relative mt-6 flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full ring-1 ring-white/15">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="font-pixel text-[10px] uppercase tracking-[0.2em] text-white/45">
                    {t.handle}
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
