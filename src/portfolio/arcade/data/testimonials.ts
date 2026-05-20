export interface ArcadeTestimonial {
  quote: string;
  name: string;
  handle: string;
  source: 'Instagram' | 'X' | 'Google Maps' | 'GQ Africa';
  rating: 5;
  accent: 'pink' | 'violet' | 'tangerine' | 'mint';
  avatar: string;
}

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=facearea&facepad=2.6&w=200&h=200&q=80`;

export const arcadeTestimonials: ArcadeTestimonial[] = [
  {
    quote:
      'Brunch, two rounds on Yaba Drift, and a Neon Hibiscus before noon. This place has ruined every other Saturday.',
    name: 'Tomi A.',
    handle: '@tomi.akin',
    source: 'Instagram',
    rating: 5,
    accent: 'pink',
    avatar: u('photo-1531123897727-8f129e1688ce'),
  },
  {
    quote:
      'The suya croissant has no business being this good. I came for the cabinets and stayed for the bakery.',
    name: 'Femi O.',
    handle: '@dontbuyfemi',
    source: 'X',
    rating: 5,
    accent: 'violet',
    avatar: u('photo-1500648767791-00dcc994a43e'),
  },
  {
    quote:
      "Vibes are unmatched. The Ankara Punch finals on a Thursday felt like a small Lagos festival. Won't miss the next one.",
    name: 'Ada N.',
    handle: '@adanwa',
    source: 'Google Maps',
    rating: 5,
    accent: 'tangerine',
    avatar: u('photo-1573497019940-1c28c88b4f3e'),
  },
  {
    quote:
      'A bakery, an arcade, a basement DJ booth — and the food is honest. Lagos finally has its third place.',
    name: 'GQ Africa',
    handle: 'July 2025 issue',
    source: 'GQ Africa',
    rating: 5,
    accent: 'mint',
    avatar: u('photo-1568602471122-7832951cc4c5'),
  },
];
