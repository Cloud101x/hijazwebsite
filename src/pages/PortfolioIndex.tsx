import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Sparkles } from 'lucide-react';
import { portfolioEntries, type PortfolioEntry } from '../portfolio/registry';
import { fadeUp, stagger } from '../lib/motion';
import { cn } from '../lib/cn';

export function PortfolioIndex() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    return () => {
      // leave dark on by default when returning to index
      document.documentElement.setAttribute('data-theme', 'dark');
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <BackgroundLayer />

      <IndexHeader />

      <section className="relative z-10 px-6 pt-32 md:px-10 md:pt-40">
        <div className="mx-auto max-w-[1280px]">
          <motion.div
            variants={stagger(0.1, 0.08)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr] md:items-end"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-white/65 backdrop-blur-md">
                <Sparkles className="h-3 w-3 text-[var(--accent)]" />
                Showcase · 6 worlds · 2025
              </span>

              <h1 className="mt-7 text-[clamp(2.75rem,8vw,6.5rem)] font-semibold leading-[0.92] tracking-tight">
                Six worlds.
                <br />
                <span className="font-serif italic text-[var(--accent)]">One studio.</span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-relaxed text-white/55 md:text-lg">
                A working showcase of frontends Hijaz has shipped — from a neon-lit Lagos arcade and
                a luxury commerce house to an Abuja construction firm, a school operating system,
                and a quiet luxury brokerage. Each is a complete site with its own design system.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4">
              <div className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.02] p-4 backdrop-blur-md">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-secondary)] text-white shadow-[0_8px_24px_-8px_var(--accent-glow)]">
                  <span className="font-serif text-xl italic">H</span>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Hijaz Studio · Abuja</p>
                  <p className="mt-0.5 text-xs text-white/50">
                    Built by a small senior pod between Q2–Q3 2025
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { kpi: '6', label: 'Projects' },
                  { kpi: '120+', label: 'Components' },
                  { kpi: '4.8s', label: 'TTI · slowest' },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-white/8 bg-white/[0.02] px-3 py-3 text-center"
                  >
                    <p className="font-serif text-2xl text-[var(--accent)]">{m.kpi}</p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-white/45">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-32 pt-20 md:px-10 md:pt-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]/80">
                The archive · 01–06
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Pick a world.
              </h2>
            </div>
            <p className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-white/40 md:block">
              Filed by category — alphabetical
            </p>
          </div>

          <motion.div
            variants={stagger(0.05, 0.08)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
          >
            {portfolioEntries.map((entry, i) => (
              <ProjectCard key={entry.slug} entry={entry} delay={i * 0.04} />
            ))}
          </motion.div>
        </div>
      </section>

      <IndexFooter />
    </main>
  );
}

function ProjectCard({ entry, delay }: { entry: PortfolioEntry; delay: number }) {
  const [hover, setHover] = useState(false);
  const live = entry.status === 'live';

  return (
    <motion.div
      variants={fadeUp}
      transition={{ delay, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative"
    >
      <Link
        to={entry.href}
        aria-label={`Open ${entry.title}`}
        className={cn(
          'relative block overflow-hidden rounded-3xl border border-white/8 bg-[#0a0a0a]/85 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-500',
          'hover:-translate-y-1 hover:border-white/15',
        )}
        style={
          {
            ['--card-accent' as string]: entry.accent,
            ['--card-accent-soft' as string]: entry.accentSoft,
          } as React.CSSProperties
        }
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background: `radial-gradient(60% 60% at 30% 0%, ${entry.accentSoft} 0%, transparent 70%)`,
          }}
        />

        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={entry.cover}
            alt={entry.title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover grayscale-[40%] transition-all duration-1000 group-hover:scale-[1.06] group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/50 to-transparent" />
          <div
            className="absolute inset-0 mix-blend-overlay opacity-30 transition-opacity duration-700 group-hover:opacity-60"
            style={{
              background: `linear-gradient(135deg, ${entry.accent} 0%, transparent 60%)`,
            }}
          />

          <div className="absolute left-4 top-4 flex items-center gap-2">
            <span
              className="rounded-full border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.2em] backdrop-blur-md"
              style={{
                borderColor: live ? `${entry.accent}40` : 'rgba(255,255,255,0.15)',
                background: live ? `${entry.accentSoft}` : 'rgba(0,0,0,0.4)',
                color: live ? '#fff' : 'rgba(255,255,255,0.6)',
              }}
            >
              {live ? '● Live' : '◌ Planned'}
            </span>
            <span className="rounded-full border border-white/15 bg-black/40 px-2 py-0.5 font-mono text-[10px] tracking-[0.18em] text-white/60 backdrop-blur-md">
              {entry.number}
            </span>
          </div>

          <div className="absolute right-4 top-4">
            <div
              className={cn(
                'grid h-10 w-10 place-items-center rounded-full border backdrop-blur-md transition-all duration-500',
                hover ? 'scale-110' : 'scale-100',
              )}
              style={{
                borderColor: `${entry.accent}55`,
                background: hover ? entry.accentSoft : 'rgba(0,0,0,0.3)',
                color: hover ? '#fff' : 'rgba(255,255,255,0.8)',
              }}
            >
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>

          <div className="absolute inset-x-4 bottom-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/55">
              {entry.category}
            </p>
            <h3 className="mt-1 text-2xl font-semibold leading-tight tracking-tight text-white">
              {entry.title}
            </h3>
          </div>
        </div>

        <div className="relative p-5">
          <p className="text-sm leading-relaxed text-white/55">{entry.description}</p>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              {entry.palette.map((p) => (
                <span
                  key={p.hex}
                  className="h-2.5 w-2.5 rounded-full ring-1 ring-inset ring-white/20"
                  style={{ background: p.hex }}
                  title={p.name}
                />
              ))}
            </div>
            <p
              className="font-mono text-[10px] uppercase tracking-[0.2em]"
              style={{ color: entry.accent }}
            >
              {entry.vibe}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {entry.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/8 bg-white/[0.02] px-2 py-0.5 text-[10px] text-white/55"
              >
                {tech}
              </span>
            ))}
            {entry.stack.length > 4 && (
              <span className="rounded-full border border-white/8 bg-white/[0.02] px-2 py-0.5 text-[10px] text-white/45">
                +{entry.stack.length - 4}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function BackgroundLayer() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 20%, #000 40%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 20%, #000 40%, transparent 90%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[14%] -z-10 h-[800px] w-[800px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255,106,0,0.5) 0%, transparent 65%)',
          opacity: 0.5,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[8%] top-[40%] -z-10 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle at center, rgba(255,46,136,0.35) 0%, transparent 70%)',
          opacity: 0.4,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[6%] top-[34%] -z-10 h-[360px] w-[360px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle at center, rgba(201,162,75,0.35) 0%, transparent 70%)',
          opacity: 0.4,
        }}
      />
    </>
  );
}

function IndexHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <div className="flex w-full max-w-[1280px] items-center justify-between rounded-full border border-white/8 bg-black/40 px-4 py-2.5 backdrop-blur-2xl md:px-5">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--accent)] via-[var(--accent-secondary)] to-[#7a2f00] shadow-[0_8px_24px_-8px_var(--accent-glow)]">
            <span className="font-serif text-base italic text-white">H</span>
          </span>
          <span className="font-serif text-lg italic tracking-tight">
            Hijaz<span className="text-[var(--accent)]">.</span>portfolio
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          <a
            href="#archive"
            className="rounded-full px-4 py-2 text-sm text-white/65 transition-colors hover:text-white"
          >
            Archive
          </a>
          <a
            href="#contact"
            className="rounded-full px-4 py-2 text-sm text-white/65 transition-colors hover:text-white"
          >
            Contact
          </a>
        </nav>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-white/75 transition-colors hover:border-[var(--accent)] hover:text-white"
        >
          <Code2 className="h-3.5 w-3.5" />
          Source
        </a>
      </div>
    </header>
  );
}

function IndexFooter() {
  return (
    <footer className="relative z-10 border-t border-white/5 px-6 py-12 md:px-10">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <p className="text-xs text-white/40">
          © 2025 Hijaz Studio Ltd · RC 1948302 · Engineered in Abuja, deployed worldwide.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/50">
          <a href="mailto:hello@hijaz.ng" className="hover:text-white">
            hello@hijaz.ng
          </a>
          <span className="h-3 w-px bg-white/15" />
          <a href="#contact" className="hover:text-white">
            Brief us
          </a>
          <span className="h-3 w-px bg-white/15" />
          <span className="font-mono">v1.0.0 · 2025</span>
        </div>
      </div>
    </footer>
  );
}

export default PortfolioIndex;
