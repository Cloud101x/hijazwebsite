export interface ArcadeGame {
  id: string;
  name: string;
  era: string;
  category: 'Cabinet' | 'Console' | 'Pinball' | 'Skill';
  highScore: { player: string; score: string };
  players: '1P' | '2P' | '4P';
  difficulty: 1 | 2 | 3 | 4 | 5;
  accent: 'pink' | 'violet' | 'tangerine' | 'mint';
}

export const games: ArcadeGame[] = [
  {
    id: 'g-01',
    name: 'Lagos Lightning',
    era: '1984',
    category: 'Cabinet',
    highScore: { player: 'AZA', score: '982,400' },
    players: '2P',
    difficulty: 4,
    accent: 'pink',
  },
  {
    id: 'g-02',
    name: 'Yaba Drift',
    era: '1996',
    category: 'Cabinet',
    highScore: { player: 'TND', score: '1:42.18' },
    players: '4P',
    difficulty: 3,
    accent: 'tangerine',
  },
  {
    id: 'g-03',
    name: 'Ankara Punch',
    era: '1991',
    category: 'Cabinet',
    highScore: { player: 'NGZ', score: '47W · 0L' },
    players: '2P',
    difficulty: 5,
    accent: 'violet',
  },
  {
    id: 'g-04',
    name: 'Skee-Ball Sahara',
    era: 'now',
    category: 'Skill',
    highScore: { player: 'IFY', score: '480 / 500' },
    players: '1P',
    difficulty: 2,
    accent: 'mint',
  },
  {
    id: 'g-05',
    name: 'Volta Pinball',
    era: '1978',
    category: 'Pinball',
    highScore: { player: 'OBI', score: '2.4M' },
    players: '1P',
    difficulty: 4,
    accent: 'tangerine',
  },
  {
    id: 'g-06',
    name: 'Pixel Stadium',
    era: 'now',
    category: 'Console',
    highScore: { player: 'KMR', score: 'Champion · S4' },
    players: '4P',
    difficulty: 3,
    accent: 'pink',
  },
];
