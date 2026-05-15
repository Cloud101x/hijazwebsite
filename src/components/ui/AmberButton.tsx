import { motion } from 'framer-motion';
import { cn } from '../../lib/cn';

interface AmberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function AmberButton({
  variant = 'primary',
  icon,
  className,
  children,
  ...props
}: AmberButtonProps) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      className={cn(variant === 'primary' ? 'btn-primary' : 'btn-ghost', 'group', className)}
      {...(props as any)}
    >
      {variant === 'primary' && (
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute -inset-y-2 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100" />
        </span>
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
            {icon}
          </span>
        )}
      </span>
    </motion.button>
  );
}