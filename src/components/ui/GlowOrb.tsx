import { cn } from '../../lib/cn';

interface GlowOrbProps {
  className?: string;
  size?: number;
  color?: 'amber' | 'ember' | 'copper' | 'white';
  intensity?: 'soft' | 'medium' | 'strong';
}

const colorMap = {
  amber: 'rgba(255, 106, 0, 0.55)',
  ember: 'rgba(204, 85, 0, 0.55)',
  copper: 'rgba(255, 140, 66, 0.55)',
  white: 'rgba(255, 255, 255, 0.18)',
};

const intensityMap = {
  soft: 0.35,
  medium: 0.6,
  strong: 0.85,
};

export function GlowOrb({
  className,
  size = 520,
  color = 'amber',
  intensity = 'medium',
}: GlowOrbProps) {
  const opacity = intensityMap[intensity];
  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute rounded-full blur-3xl', className)}
      style={{
        width: size,
        height: size,
        opacity,
        background: `radial-gradient(circle at center, ${colorMap[color]} 0%, transparent 65%)`,
      }}
    />
  );
}
