export interface ArcadeEvent {
  id: string;
  day: string;
  date: string;
  title: string;
  time: string;
  host: string;
  category: 'Tournament' | 'DJ Set' | 'Bake Class' | 'Trivia' | 'Open Decks';
  accent: 'pink' | 'violet' | 'tangerine' | 'mint';
  blurb: string;
  capacity: { booked: number; max: number };
}

export const events: ArcadeEvent[] = [
  {
    id: 'e-01',
    day: 'THU',
    date: 'Jul 11',
    title: 'Ankara Punch · Season Finals',
    time: '20:00 — 23:30',
    host: 'House crew',
    category: 'Tournament',
    accent: 'violet',
    blurb: 'Two months of bracket play decided on one cabinet. Cash purse + a year of free brunch.',
    capacity: { booked: 64, max: 80 },
  },
  {
    id: 'e-02',
    day: 'FRI',
    date: 'Jul 12',
    title: 'DJ Lágbájá · After-hours',
    time: '22:00 — late',
    host: 'Resident booth',
    category: 'DJ Set',
    accent: 'pink',
    blurb: 'Afrobeats × house from the booth above the pinball wall. Cocktails priced at lucky numbers.',
    capacity: { booked: 142, max: 180 },
  },
  {
    id: 'e-03',
    day: 'SAT',
    date: 'Jul 13',
    title: 'Sourdough 101',
    time: '10:00 — 12:30',
    host: 'Head Baker · Eniola',
    category: 'Bake Class',
    accent: 'tangerine',
    blurb: 'Take home a starter, a fresh boule, and the muscle memory for a perfect crumb.',
    capacity: { booked: 11, max: 14 },
  },
  {
    id: 'e-04',
    day: 'SUN',
    date: 'Jul 14',
    title: 'Sunday Akara Brunch',
    time: '11:00 — 15:00',
    host: 'Kitchen',
    category: 'Open Decks',
    accent: 'mint',
    blurb: 'Bottomless akara, soft pours, a jazz trio. The only quiet day on the calendar.',
    capacity: { booked: 88, max: 120 },
  },
  {
    id: 'e-05',
    day: 'TUE',
    date: 'Jul 16',
    title: 'Pixel Trivia Night',
    time: '19:30 — 22:00',
    host: 'Quizmaster Daré',
    category: 'Trivia',
    accent: 'pink',
    blurb: 'Five rounds. Six teams max. Winner takes the cabinet trophy and dinner for four.',
    capacity: { booked: 18, max: 36 },
  },
  {
    id: 'e-06',
    day: 'WED',
    date: 'Jul 17',
    title: 'Open Decks · You spin, we pour',
    time: '20:00 — 00:00',
    host: 'Booth open',
    category: 'Open Decks',
    accent: 'violet',
    blurb: 'Bring a USB. Play a thirty-minute set. Tip jar splits to the next baking class.',
    capacity: { booked: 7, max: 24 },
  },
];
