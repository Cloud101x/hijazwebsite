import { motion } from 'framer-motion';
import { cn } from '../../lib/cn';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionLabel({ children, className, align = 'center' }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.02] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-off-white/70 backdrop-blur-md',
        align === 'center' && 'mx-auto',
        className,
      )}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inset-0 animate-ping rounded-full bg-amber/60" />
        <span className="relative h-1.5 w-1.5 rounded-full bg-amber shadow-[0_0_10px_rgba(255,106,0,0.8)]" />
      </span>
      <span>{children}</span>
    </motion.div>
  );
}
