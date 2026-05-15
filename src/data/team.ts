export interface TeamMember {
  name: string;
  role: string;
  location: string;
  avatar: string;
  former: string;
}

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=facearea&facepad=2.4&w=480&h=600&q=80`;

export const team: TeamMember[] = [
  {
    name: 'Adeola Hijazi',
    role: 'Founder · Principal Engineer',
    location: 'Lagos, NG',
    avatar: u('photo-1507003211169-0a1dd7228f2d'),
    former: 'ex-Flutterwave · ex-Stripe',
  },
  {
    name: 'Chiamaka Eze',
    role: 'Head of Design',
    location: 'Lagos, NG',
    avatar: u('photo-1531123897727-8f129e1688ce'),
    former: 'ex-Paystack · ex-Linear',
  },
  {
    name: 'Tunde Adeyemi',
    role: 'Principal Architect',
    location: 'Abuja, NG',
    avatar: u('photo-1487412720507-e7ab37603c6f'),
    former: 'ex-Andela · ex-Vercel',
  },
  {
    name: 'Aisha Bello',
    role: 'AI Systems Lead',
    location: 'Nairobi, KE',
    avatar: u('photo-1573497019940-1c28c88b4f3e'),
    former: 'ex-DeepMind · ex-Cohere',
  },
];
