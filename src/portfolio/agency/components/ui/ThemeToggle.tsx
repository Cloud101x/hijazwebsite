import { useTheme } from '../../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border-medium)] bg-[var(--surface-glass)] text-[var(--text-primary)] transition-all duration-300 hover:border-amber/40 hover:bg-[var(--surface-glass-hover)] hover:text-amber"
    >
      <svg
        viewBox="0 0 20 20"
        className="h-4 w-4 transition-transform duration-500"
        style={{ transform: theme === 'light' ? 'rotate(180deg) scale(1.1)' : 'rotate(0deg)' }}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {theme === 'dark' ? (
          <>
            <circle cx="10" cy="10" r="3.5" />
            <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.2 4.2l1.4 1.4M14.4 14.4l1.4 1.4M4.2 15.8l1.4-1.4M14.4 5.6l1.4-1.4" />
          </>
        ) : (
          <path d="M17 10A7 7 0 015.5 5.5 7 7 0 1017 10z" />
        )}
      </svg>
    </button>
  );
}