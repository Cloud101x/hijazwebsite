export type PortfolioStatus = 'live' | 'in-progress' | 'planned';

export interface PortfolioEntry {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  vibe: string;
  palette: { name: string; hex: string }[];
  stack: string[];
  status: PortfolioStatus;
  accent: string;
  accentSoft: string;
  cover: string;
  href: string;
}

export const portfolioEntries: PortfolioEntry[] = [
  {
    slug: 'agency',
    number: '01',
    title: 'Hijaz Studio',
    category: 'Software & Design Agency',
    description:
      'Cinematic dark UI for an Abuja-based product engineering studio. Animated R3F hero, scroll-driven case studies, glassmorphism throughout.',
    vibe: 'Futuristic · Cinematic · Glass',
    palette: [
      { name: 'Obsidian', hex: '#050505' },
      { name: 'Ember', hex: '#CC5500' },
      { name: 'Amber', hex: '#FF6A00' },
      { name: 'Copper', hex: '#FF8C42' },
    ],
    stack: ['React', 'TypeScript', 'Framer Motion', 'GSAP', 'R3F', 'Drei', 'Tailwind'],
    status: 'live',
    accent: '#FF6A00',
    accentSoft: 'rgba(255,106,0,0.32)',
    cover: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80',
    href: '/',
  },
  {
    slug: 'arcade',
    number: '02',
    title: 'Sunny & Soul',
    category: 'Bakery · Arcade · Restaurant',
    description:
      'A neon-lit Lagos bakery-arcade with menus, reservations, and tournament nights. Horizontal scroll storytelling, 3D pastries, candy-floss particles.',
    vibe: 'Neon arcade · Cozy bakery · Energetic',
    palette: [
      { name: 'Ink', hex: '#0A0612' },
      { name: 'Hot Pink', hex: '#FF2E88' },
      { name: 'Violet', hex: '#8B5CF6' },
      { name: 'Tangerine', hex: '#FF8A1F' },
    ],
    stack: ['React Router', 'Framer Motion', 'GSAP', 'R3F', 'Zustand', 'Lucide'],
    status: 'live',
    accent: '#FF2E88',
    accentSoft: 'rgba(255,46,136,0.32)',
    cover: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80',
    href: '/arcade',
  },
  {
    slug: 'commerce',
    number: '03',
    title: 'Atelier Noir',
    category: 'Luxury Commerce',
    description:
      'Minimal-premium e-commerce inspired by Apple and Aesop. Cinematic product transitions, animated cart, full checkout, admin dashboard.',
    vibe: 'Minimal · Editorial · Quiet luxury',
    palette: [
      { name: 'Paper', hex: '#F7F4EE' },
      { name: 'Graphite', hex: '#1C1C1C' },
      { name: 'Slate', hex: '#7B7873' },
      { name: 'Sand', hex: '#E5DCC8' },
    ],
    stack: ['React Router', 'Zustand', 'Framer Motion', 'Lucide', 'Radix'],
    status: 'live',
    accent: '#1C1C1C',
    accentSoft: 'rgba(28,28,28,0.18)',
    cover: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
    href: '/commerce',
  },
  {
    slug: 'school',
    number: '04',
    title: 'Sapientia',
    category: 'School SaaS Dashboard',
    description:
      'A clean academic operating system. Student & teacher portals, attendance, results, timetables, messaging, fee tracking, analytics.',
    vibe: 'Clean SaaS · Trustworthy · Informational',
    palette: [
      { name: 'Cloud', hex: '#F4F7FB' },
      { name: 'Sky', hex: '#3B82F6' },
      { name: 'Cyan', hex: '#22D3EE' },
      { name: 'Ink', hex: '#0B1220' },
    ],
    stack: ['React Router', 'Zustand', 'Recharts', 'Radix', 'Tailwind'],
    status: 'live',
    accent: '#3B82F6',
    accentSoft: 'rgba(59,130,246,0.28)',
    cover: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1200&q=80',
    href: '/school',
  },
  {
    slug: 'construction',
    number: '05',
    title: 'Bedrock Works',
    category: 'Construction & Industrial',
    description:
      'Industrial-premium site for a Nigerian construction group. Drone hero video, before/after gallery, project timeline, blueprint overlays.',
    vibe: 'Industrial · Bold typography · Charcoal',
    palette: [
      { name: 'Charcoal', hex: '#1A1A1A' },
      { name: 'Steel', hex: '#3F3F46' },
      { name: 'Orange', hex: '#F97316' },
      { name: 'Concrete', hex: '#D6D3D1' },
    ],
    stack: ['React Router', 'GSAP', 'Framer Motion', 'Lucide'],
    status: 'live',
    accent: '#F97316',
    accentSoft: 'rgba(249,115,22,0.32)',
    cover: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    href: '/construction',
  },
  {
    slug: 'estate',
    number: '06',
    title: 'Maison Lagos',
    category: 'Luxury Real Estate',
    description:
      'Black-and-gold property showcase for high-end Lagos & Abuja listings. Cinematic detail pages, mortgage calculator, agent profiles, map.',
    vibe: 'Luxury · Architectural · Black-and-gold',
    palette: [
      { name: 'Onyx', hex: '#0A0A0A' },
      { name: 'Gold', hex: '#C9A24B' },
      { name: 'Cream', hex: '#F4EFE6' },
      { name: 'Smoke', hex: '#2A2A2A' },
    ],
    stack: ['React Router', 'Framer Motion', 'Mapbox', 'Lucide'],
    status: 'live',
    accent: '#C9A24B',
    accentSoft: 'rgba(201,162,75,0.32)',
    cover: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    href: '/estate',
  },
];

export function getEntry(slug: string): PortfolioEntry | undefined {
  return portfolioEntries.find((e) => e.slug === slug);
}
