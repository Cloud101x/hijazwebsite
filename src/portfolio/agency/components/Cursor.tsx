import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

export function Cursor() {
  const { x, y } = useMousePosition();
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    if (isCoarse) {
      setEnabled(false);
      return;
    }
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest('a, button, [role="button"], input, textarea');
      setHovering(Boolean(interactive));
    };
    document.addEventListener('mouseover', onOver);
    return () => document.removeEventListener('mouseover', onOver);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[80] h-3 w-3 rounded-full bg-amber mix-blend-difference"
        animate={{ x: x - 6, y: y - 6, scale: hovering ? 0.5 : 1 }}
        transition={{ type: 'spring', stiffness: 700, damping: 40, mass: 0.4 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[79] h-9 w-9 rounded-full border border-amber/40"
        animate={{
          x: x - 18,
          y: y - 18,
          scale: hovering ? 1.6 : 1,
          opacity: hovering ? 0.8 : 0.45,
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 28, mass: 0.7 }}
      />
    </>
  );
}
