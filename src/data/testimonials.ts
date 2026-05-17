export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  avatar: string;
  highlight?: boolean;
}

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=facearea&facepad=2.6&w=240&h=240&q=80`;

export const testimonials: Testimonial[] = [
  {
    quote:
      "Hijaz rebuilt our entire banking platform in ten weeks — frontend, backend, mobile, the works. The team we assembled in-house couldn't have shipped this in a year. We treat them as a permanent senior pod now.",
    name: 'Adaeze Okonkwo',
    role: 'Chief Technology Officer',
    company: 'NovaPay Africa',
    initials: 'AO',
    avatar: u('photo-1531123897727-8f129e1688ce'),
    highlight: true,
  },
  {
    quote:
      "The most senior engineering team I've worked with on the continent — and I've shipped at three unicorns from Abuja to Cape Town. They have opinions, they're right, and they move.",
    name: 'Olumide Adebanjo',
    role: 'VP Engineering',
    company: 'Kẹlẹ AI',
    initials: 'OA',
    avatar: u('photo-1500648767791-00dcc994a43e'),
  },
  {
    quote:
      'We hired Hijaz to design one screen. They quietly redesigned our entire rider product in the same sprint. Conversion is up 38% and dispatch error is down 52%.',
    name: 'Ngozi Ibekwe',
    role: 'Co-founder',
    company: 'Sahel Logistics',
    initials: 'NI',
    avatar: u('photo-1573497019940-1c28c88b4f3e'),
  }
];
