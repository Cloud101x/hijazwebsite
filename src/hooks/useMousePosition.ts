import { useEffect, useState } from 'react';

export interface MousePosition {
  x: number;
  y: number;
  nx: number;
  ny: number;
}

export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0, nx: 0, ny: 0 });

  useEffect(() => {
    let frame = 0;
    const handle = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const nx = (e.clientX / window.innerWidth) * 2 - 1;
        const ny = (e.clientY / window.innerHeight) * 2 - 1;
        setPosition({ x: e.clientX, y: e.clientY, nx, ny });
      });
    };
    window.addEventListener('mousemove', handle, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', handle);
    };
  }, []);

  return position;
}
