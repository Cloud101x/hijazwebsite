export type MenuCategory = 'Bakery' | 'Brunch' | 'Cocktails' | 'Arcade Bites';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  description: string;
  price: number; // in NGN, thousands
  badge?: 'Bestseller' | 'New' | 'Spicy' | 'Vegan' | 'Limited';
  image: string;
  pairs?: string;
}

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

export const menu: MenuItem[] = [
  {
    id: 'b-01',
    name: 'Suya Croissant',
    category: 'Bakery',
    description: 'Buttery laminated croissant filled with peppered Mai Shai beef. Our most stolen pastry.',
    price: 3.4,
    badge: 'Bestseller',
    image: u('photo-1555507036-ab1f4038808a'),
    pairs: 'Pair: Hibiscus espresso',
  },
  {
    id: 'b-02',
    name: 'Plantain Cinnamon Roll',
    category: 'Bakery',
    description: 'Caramelised dodo folded into a soft brioche spiral, finished with a brown-butter glaze.',
    price: 2.8,
    badge: 'New',
    image: u('photo-1509440159596-0249088772ff'),
  },
  {
    id: 'b-03',
    name: 'Zobo Macaron',
    category: 'Bakery',
    description: 'Almond shell with a zobo–ginger ganache. Tart, floral, deeply pink.',
    price: 1.2,
    image: u('photo-1558960214-f4283a743867'),
  },
  {
    id: 'b-04',
    name: 'Coconut Chin-Chin Sticks',
    category: 'Bakery',
    description: 'Toasted coconut chin-chin dipped in dark chocolate. Crunch you can hear two tables over.',
    price: 2.0,
    image: u('photo-1483695028939-5bb13f8648b0'),
  },
  {
    id: 'br-01',
    name: 'Shakshuka Sunday',
    category: 'Brunch',
    description: 'Soft eggs in a smoked-tomato sugo with feta and sourdough. Sundays only.',
    price: 7.5,
    badge: 'Limited',
    image: u('photo-1590846406792-0adc7f938f1d'),
  },
  {
    id: 'br-02',
    name: 'Akara Benedict',
    category: 'Brunch',
    description: 'Akara cakes, poached eggs, ata rodo hollandaise. Sunday-morning royalty.',
    price: 8.2,
    badge: 'Bestseller',
    image: u('photo-1525351484163-7529414344d8'),
  },
  {
    id: 'br-03',
    name: 'Garden Stack',
    category: 'Brunch',
    description: 'Charred ube, citrus-tossed greens, smoked pumpkin seed crumble, dressed in basil oil.',
    price: 6.4,
    badge: 'Vegan',
    image: u('photo-1540189549336-e6e99c3679fe'),
  },
  {
    id: 'c-01',
    name: 'Neon Hibiscus',
    category: 'Cocktails',
    description: 'Zobo reduction, gin, kaffir lime, a kiss of mezcal. Served under a small UV bulb.',
    price: 6.0,
    badge: 'Bestseller',
    image: u('photo-1551024709-8f23befc6f87'),
    pairs: 'Pair: Suya Croissant',
  },
  {
    id: 'c-02',
    name: 'Violet Arcade',
    category: 'Cocktails',
    description: 'Empress 1908, butterfly pea, yuzu, soda. Changes colour when you stir it — every time.',
    price: 6.8,
    badge: 'New',
    image: u('photo-1572490122747-3968b75cc699'),
  },
  {
    id: 'c-03',
    name: 'Pepper Daiquiri',
    category: 'Cocktails',
    description: 'White rum, fresh lime, Cameroon pepper-honey. One sip, two warnings.',
    price: 5.4,
    badge: 'Spicy',
    image: u('photo-1514362545857-3bc16c4c7d1b'),
  },
  {
    id: 'a-01',
    name: 'Spicy Plantain Chips',
    category: 'Arcade Bites',
    description: 'Crisp, hand-cut, dusted with ata rodo salt. Bowl refilled while you play.',
    price: 1.6,
    badge: 'Spicy',
    image: u('photo-1599490659213-e2b9527bd087'),
  },
  {
    id: 'a-02',
    name: 'Cheese Asun Nachos',
    category: 'Arcade Bites',
    description: 'Tortillas, slow-braised asun, three-cheese melt, scotch bonnet crema. Built for two.',
    price: 4.8,
    badge: 'Bestseller',
    image: u('photo-1513456852971-30c0b8199d4d'),
  },
];

export const categories: MenuCategory[] = ['Bakery', 'Brunch', 'Cocktails', 'Arcade Bites'];
