import { Flame, PartyPopper, Sparkle, Star, Trophy, Zap } from 'lucide-react';

const items = [
  { icon: Trophy, text: 'Ankara Punch · Season Finals Thursday' },
  { icon: PartyPopper, text: 'DJ Lágbájá in the booth Friday 22:00' },
  { icon: Flame, text: 'Suya Croissant · made twice a day' },
  { icon: Sparkle, text: 'Sourdough 101 · Saturday 10:00' },
  { icon: Star, text: 'GQ Africa · July cover' },
  { icon: Zap, text: 'High score this week — 982,400 by AZA' },
];

export function ArcadeMarquee() {
  return (
    <section className="relative border-y border-white/8 bg-gradient-to-b from-[#0A0612] via-[#14081F] to-[#0A0612] py-5">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF2E88] to-transparent opacity-60" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent opacity-60" />

      <div className="arcade-marquee-wrap relative overflow-hidden">
        <div className="marquee-slide flex w-max items-center gap-10 whitespace-nowrap font-display text-2xl text-white/85 md:text-3xl">
          {[...items, ...items, ...items].map((it, i) => (
            <span key={i} className="flex items-center gap-4">
              <span className="text-[#FF2E88]"><it.icon className="h-5 w-5" /></span>
              <span>{it.text}</span>
              <span className="text-[#8B5CF6] opacity-60">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
