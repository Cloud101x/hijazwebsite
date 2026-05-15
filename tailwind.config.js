/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: 'var(--bg-primary)',
        charcoal: 'var(--bg-surface)',
        graphite: 'var(--bg-surface-alt)',
        ink: 'var(--bg-elevated)',
        ember: 'var(--accent-secondary)',
        amber: 'var(--accent)',
        copper: '#FF8C42',
        flame: '#FFA266',
        'off-white': 'var(--text-primary)',
        'soft-white': 'var(--text-secondary)',
        muted: 'var(--text-muted)',
        'muted-dark': 'var(--text-tertiary)',
        line: 'var(--line)',
        'line-strong': 'var(--line-strong)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 10vw, 9.5rem)', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(2.25rem, 7vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.035em' }],
        'display-md': ['clamp(1.75rem, 4.5vw, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
      },
      backgroundImage: {
        'ember-glow': 'radial-gradient(60% 60% at 50% 50%, var(--accent-glow) 0%, transparent 70%)',
        'amber-fade': 'linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%)',
        'noise-mask': 'radial-gradient(circle at 50% 0%, var(--accent-glow), transparent 60%)',
        'glass-card': 'linear-gradient(180deg, var(--surface-glass) 0%, var(--line) 100%)',
        'border-shine': 'linear-gradient(135deg, var(--accent) 0%, var(--line) 30%, var(--line) 70%, var(--accent) 100%)',
      },
      boxShadow: {
        'ember-sm': '0 0 24px -6px var(--accent-glow)',
        'ember-md': '0 8px 48px -12px var(--accent-glow)',
        'ember-lg': '0 20px 80px -20px var(--accent-glow)',
        'inner-glow': 'inset 0 1px 0 0 var(--line)',
        'card': 'var(--shadow-card)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 14s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'marquee': 'marquee 40s linear infinite',
        'spin-slow': 'spin 24s linear infinite',
        'scan': 'scan 6s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-18px) translateX(6px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '0.95', transform: 'scale(1.04)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
};