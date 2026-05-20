import { motion } from 'framer-motion';
import { Joystick, Trophy, Users } from 'lucide-react';
import { games, type ArcadeGame } from '../../data/games';
import { cn } from '../../../../lib/cn';

const accentMap: Record<ArcadeGame['accent'], { text: string; ring: string; bg: string; glow: string }> = {
  pink: {
    text: 'text-[#FF2E88]',
    ring: 'group-hover:border-[#FF2E88]/60',
    bg: 'bg-[#FF2E88]/10',
    glow: 'shadow-[0_18px_40px_-12px_rgba(255,46,136,0.55)]',
  },
  violet: {
    text: 'text-[#8B5CF6]',
    ring: 'group-hover:border-[#8B5CF6]/60',
    bg: 'bg-[#8B5CF6]/10',
    glow: 'shadow-[0_18px_40px_-12px_rgba(139,92,246,0.55)]',
  },
  tangerine: {
    text: 'text-[#FF8A1F]',
    ring: 'group-hover:border-[#FF8A1F]/60',
    bg: 'bg-[#FF8A1F]/10',
    glow: 'shadow-[0_18px_40px_-12px_rgba(255,138,31,0.55)]',
  },
  mint: {
    text: 'text-[#6EE7B7]',
    ring: 'group-hover:border-[#6EE7B7]/60',
    bg: 'bg-[#6EE7B7]/10',
    glow: 'shadow-[0_18px_40px_-12px_rgba(110,231,183,0.5)]',
  },
};

export function ArcadeGames() {
  return (
    <section id="arcade" className="relative overflow-hidden py-28 md:py-36">
      <div className="pointer-events-none absolute right-[5%] top-1/4 h-[420px] w-[420px] rounded-full bg-[#8B5CF6]/20 blur-[100px]" />
      <div className="pointer-events-none absolute left-[10%] bottom-0 h-[380px] w-[380px] rounded-full bg-[#FF2E88]/20 blur-[100px]" />

      <div className="arcade-container relative">
        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="arcade-chip">
              <Joystick className="h-3 w-3 text-[#FF2E88]" />
              Upstairs · Cabinet floor
            </span>
            <h2 className="font-display mt-6 text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[0.95] tracking-tight">
              Fourteen cabinets.{' '}
              <br />
              <span className="font-script italic neon-text-violet">One trophy.</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-white/60 md:text-right">
            Some are reissues, three we restored ourselves, one was airfreighted from Tokyo and
            still smells like 1991. Free play with any food order after 22:00.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game, i) => {
            const a = accentMap[game.accent];
            return (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.85, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className={cn('arcade-card group relative overflow-hidden p-6 transition-shadow duration-500', `hover:${a.glow}`)}
              >
                <div className={cn('pointer-events-none absolute inset-x-0 top-0 h-px opacity-60', a.bg)} />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-pixel text-[10px] uppercase tracking-[0.22em] text-white/45">
                      cab · {game.era} · {game.category}
                    </p>
                    <h3 className="font-display mt-2 text-2xl font-bold leading-tight text-white">
                      {game.name}
                    </h3>
                  </div>
                  <div
                    className={cn(
                      'grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/10 transition-all duration-300',
                      a.bg,
                      a.text,
                      a.ring,
                    )}
                  >
                    <Joystick className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-2">
                  <Stat icon={<Trophy className="h-3 w-3" />} label="high · 7d" value={game.highScore.score} accent={a.text} />
                  <Stat icon={<Users className="h-3 w-3" />} label="players" value={game.players} accent={a.text} />
                  <Difficulty level={game.difficulty} accent={a.text} />
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                  <p className="font-pixel text-[10px] uppercase tracking-[0.22em] text-white/45">
                    leader · {game.highScore.player}
                  </p>
                  <button className="text-xs font-medium text-white/65 transition-colors hover:text-white">
                    Queue up →
                  </button>
                </div>

                <div className="pointer-events-none absolute -bottom-12 -right-8 font-display text-[140px] font-bold leading-none text-white/[0.025] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {game.id.replace('g-', '')}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Stat({
  icon,
  label,
  value,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
      <div className={cn('flex items-center gap-1.5 font-pixel text-[9px] uppercase tracking-[0.2em]', accent)}>
        {icon}
        {label}
      </div>
      <p className="font-display mt-1 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}

function Difficulty({ level, accent }: { level: 1 | 2 | 3 | 4 | 5; accent: string }) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
      <p className={cn('font-pixel text-[9px] uppercase tracking-[0.2em]', accent)}>difficulty</p>
      <div className="mt-1.5 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={cn(
              'h-1.5 w-3 rounded-sm transition-colors',
              i < level ? accent.replace('text-', 'bg-') : 'bg-white/10',
            )}
          />
        ))}
      </div>
    </div>
  );
}
