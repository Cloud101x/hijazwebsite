export interface GalleryShot {
  id: string;
  caption: string;
  tag: string;
  image: string;
  size: 'tall' | 'wide' | 'square';
}

const u = (id: string, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const gallery: GalleryShot[] = [
  {
    id: 'g-01',
    caption: 'The neon sign at 21:14',
    tag: 'Entrance · Yaba',
    image: u('photo-1517248135467-4c7edcad34c4', 1100),
    size: 'tall',
  },
  {
    id: 'g-02',
    caption: 'Pinball wall, second floor',
    tag: 'Arcade hall',
    image: u('photo-1511512578047-dfb367046420', 900),
    size: 'square',
  },
  {
    id: 'g-03',
    caption: 'Plantain rolls, fresh out',
    tag: 'Bakery counter',
    image: u('photo-1509440159596-0249088772ff', 900),
    size: 'square',
  },
  {
    id: 'g-04',
    caption: 'A Friday in the booth',
    tag: 'DJ floor',
    image: u('photo-1571266028243-d220bc6df68d', 1200),
    size: 'wide',
  },
  {
    id: 'g-05',
    caption: 'The Violet Arcade, mid-stir',
    tag: 'Bar',
    image: u('photo-1572490122747-3968b75cc699', 900),
    size: 'tall',
  },
  {
    id: 'g-06',
    caption: 'Bracket night — first round',
    tag: 'Tournament floor',
    image: u('photo-1511882150382-421056c89033', 900),
    size: 'square',
  },
  {
    id: 'g-07',
    caption: 'Coffee + Suya croissant',
    tag: 'Morning counter',
    image: u('photo-1555507036-ab1f4038808a', 900),
    size: 'square',
  },
  {
    id: 'g-08',
    caption: 'Skee-Ball, Sahara lane',
    tag: 'Skill alley',
    image: u('photo-1604608672516-f1b9b1d4d089', 1200),
    size: 'wide',
  },
];
