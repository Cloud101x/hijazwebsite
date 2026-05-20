import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Heart, Plus, Sparkles } from 'lucide-react';
import { categories, menu, type MenuCategory, type MenuItem } from '../../data/menu';
import { cn } from '../../../../lib/cn';

type Filter = 'All' | MenuCategory;
const filters: Filter[] = ['All', ...categories];

const badgeStyle: Record<NonNullable<MenuItem['badge']>, string> = {
  Bestseller: 'bg-[#FF2E88]/15 text-[#FF2E88] border-[#FF2E88]/40',
  New: 'bg-[#8B5CF6]/15 text-[#8B5CF6] border-[#8B5CF6]/40',
  Spicy: 'bg-[#FF8A1F]/15 text-[#FF8A1F] border-[#FF8A1F]/40',
  Vegan: 'bg-[#6EE7B7]/15 text-[#6EE7B7] border-[#6EE7B7]/40',
  Limited: 'bg-[#FFC2D1]/15 text-[#FFC2D1] border-[#FFC2D1]/40',
};

export function ArcadeMenu() {
  const [filter, setFilter] = useState<Filter>('All');
  const items = useMemo(() => (filter === 'All' ? menu : menu.filter((m) => m.category === filter)), [filter]);

  return (
    <section id="menu" className="relative overflow-hidden py-28 md:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-[#FF2E88]/15 blur-[120px]" />

      <div className="arcade-container relative">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="arcade-chip">
              <Heart className="h-3 w-3 text-[#FF2E88]" />
              The menu · refreshed weekly
            </span>
            <h2 className="font-display mt-6 text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[0.95] tracking-tight">
              Things we bake,{' '}
              <span className="font-script italic neon-text-pink">pour</span>,
              <br />
              and put in your hands.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/60">
              Twelve dishes on the rotation right now. Bakery before noon, brunch on Sundays,
              cocktails after eight, arcade bites at any hour you happen to be losing.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:justify-end">
            {filters.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] transition-all duration-300',
                    active
                      ? 'bg-white text-[#0A0612] shadow-[0_8px_24px_-8px_rgba(255,255,255,0.6)]'
                      : 'border border-white/10 bg-white/[0.03] text-white/65 hover:border-white/25 hover:text-white',
                  )}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          layout
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.94 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="arcade-card arcade-card-glow group relative flex flex-col overflow-hidden"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0612] via-transparent to-transparent opacity-90" />
        <div className="absolute inset-x-3 top-3 flex items-center justify-between">
          {item.badge ? (
            <span
              className={cn(
                'rounded-full border px-2.5 py-0.5 font-pixel text-[10px] uppercase tracking-[0.18em] backdrop-blur-md',
                badgeStyle[item.badge],
              )}
            >
              {item.badge === 'Spicy' && <Flame className="mr-1 inline h-2.5 w-2.5" />}
              {item.badge}
            </span>
          ) : (
            <span />
          )}
          <span className="rounded-full border border-white/15 bg-black/40 px-2 py-0.5 font-pixel text-[10px] uppercase tracking-[0.18em] text-white/65 backdrop-blur-md">
            {item.category}
          </span>
        </div>
      </div>

      <div className="relative flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold leading-tight text-white">
            {item.name}
          </h3>
          <p className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-pixel text-sm font-medium text-[#FF8A1F]">
            ₦{item.price.toFixed(1)}k
          </p>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-white/60">{item.description}</p>

        <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
          {item.pairs ? (
            <p className="flex items-center gap-1.5 text-[11px] text-white/45">
              <Sparkles className="h-3 w-3 text-[#8B5CF6]" />
              {item.pairs}
            </p>
          ) : (
            <span className="text-[11px] text-white/35">Made daily · Yaba kitchen</span>
          )}
          <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition-all duration-300 hover:border-[#FF2E88]/60 hover:bg-[#FF2E88]/10 hover:text-[#FF2E88]">
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
