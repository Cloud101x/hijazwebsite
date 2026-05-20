import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Camera } from 'lucide-react';
import { gallery } from '../../data/gallery';
import { cn } from '../../../../lib/cn';

export function ArcadeGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['8%', '-58%']);

  const sizeClass = (s: 'tall' | 'wide' | 'square') =>
    s === 'tall'
      ? 'h-[480px] w-[300px]'
      : s === 'wide'
        ? 'h-[300px] w-[520px]'
        : 'h-[360px] w-[360px]';

  return (
    <section id="gallery" ref={ref} className="relative overflow-hidden py-28 md:py-36">
      <div className="arcade-container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="arcade-chip">
              <Camera className="h-3 w-3 text-[#6EE7B7]" />
              Gallery · this season
            </span>
            <h2 className="font-display mt-6 text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[0.95] tracking-tight">
              How the room{' '}
              <span className="font-script italic neon-text-violet">looks.</span>
            </h2>
          </div>
          <p className="text-sm text-white/45">Scroll the page — the gallery scrolls with you →</p>
        </div>
      </div>

      <div className="relative mt-14 overflow-hidden">
        <motion.div style={{ x }} className="flex items-center gap-5 px-6 md:px-10">
          {gallery.map((shot, i) => (
            <motion.figure
              key={shot.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.85, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                'group relative shrink-0 overflow-hidden rounded-3xl border border-white/8 bg-[#0A0612] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8)]',
                sizeClass(shot.size),
              )}
            >
              <img
                src={shot.image}
                alt={shot.caption}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0612] via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF2E88]/0 via-transparent to-[#8B5CF6]/0 mix-blend-overlay opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-hover:from-[#FF2E88]/30 group-hover:to-[#8B5CF6]/30" />

              <div className="absolute inset-x-5 bottom-5">
                <p className="font-pixel text-[10px] uppercase tracking-[0.22em] text-white/55">
                  {shot.tag}
                </p>
                <p className="mt-1 font-display text-base text-white md:text-lg">{shot.caption}</p>
              </div>

              <span className="absolute right-4 top-4 font-pixel text-[10px] uppercase tracking-[0.22em] text-white/35">
                {String(i + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')}
              </span>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
