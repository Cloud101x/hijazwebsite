export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'Objects' | 'Apothecary' | 'Linen' | 'Table' | 'Library';
  price: number;
  currency: 'NGN' | 'USD';
  description: string;
  highlights: string[];
  origin: string;
  material: string;
  image: string;
  swatches?: { name: string; hex: string }[];
  badge?: 'Made to order' | 'Last pieces' | 'New' | 'Restocked';
}

const u = (id: string, w = 1100) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

export const products: Product[] = [
  {
    id: 'p-01',
    name: 'Ọmọlé Vessel · Cinder',
    subtitle: 'Hand-thrown earthenware vase',
    category: 'Objects',
    price: 184000,
    currency: 'NGN',
    description:
      'Thrown over seven sittings, fired twice in a wood kiln outside Abeokuta. Each piece carries the ash marks of the firing — never two alike.',
    highlights: ['Wood-fired terracotta', 'Single piece, no mould', 'Ships from Lagos in 14 days'],
    origin: 'Abeokuta, Ogun State',
    material: 'Wood-fired terracotta · matte cinder glaze',
    image: u('photo-1582127202856-39ab9d49ce5b', 1100),
    swatches: [
      { name: 'Cinder', hex: '#3D332C' },
      { name: 'Ash', hex: '#A39A8F' },
      { name: 'Ochre', hex: '#B0863A' },
    ],
    badge: 'Last pieces',
  },
  {
    id: 'p-02',
    name: 'No. 04 · Hibiscus & Smoke',
    subtitle: 'Hand-poured candle · 220g',
    category: 'Apothecary',
    price: 38000,
    currency: 'NGN',
    description:
      'Coconut-soy wax, lead-free cotton wick, fragrance built around dried zobo and Sahel oud. Burns for 64 quiet hours.',
    highlights: ['64-hour burn', 'Notes: hibiscus, oud, cedar', 'Refillable vessel'],
    origin: 'Lagos · Atelier Noir',
    material: 'Coconut-soy wax · stoneware vessel',
    image: u('photo-1602874801007-bd458bb1b8b6', 900),
    swatches: [
      { name: 'Bone', hex: '#EFE6D6' },
      { name: 'Smoke', hex: '#2A2520' },
    ],
    badge: 'Restocked',
  },
  {
    id: 'p-03',
    name: 'Ankara Throw · Sahel Stripe',
    subtitle: 'Heavyweight cotton throw',
    category: 'Linen',
    price: 246000,
    currency: 'NGN',
    description:
      'Hand-loomed in Iseyin, finished in Lagos. A modern weight — heavier than a wrapper, lighter than a blanket — with a stripe drawn from Sahel architecture.',
    highlights: ['Hand-loomed in Iseyin', '180 × 220 cm', 'Soft-washed'],
    origin: 'Iseyin, Oyo State',
    material: '100% cotton · hand-loomed',
    image: u('photo-1555041469-a586c61ea9bc', 1100),
    swatches: [
      { name: 'Bone', hex: '#EFE6D6' },
      { name: 'Sahel', hex: '#C9A24B' },
      { name: 'Ink', hex: '#1A1714' },
    ],
    badge: 'Made to order',
  },
  {
    id: 'p-04',
    name: 'Service for Six',
    subtitle: 'Stoneware dinner service',
    category: 'Table',
    price: 528000,
    currency: 'NGN',
    description:
      'Eighteen pieces of unglazed stoneware: six dinner, six small, six bowls. Designed for the long table on a slow Sunday.',
    highlights: ['Lead-free, dishwasher safe', '18 pieces', '3 months ahead'],
    origin: 'Lagos · Atelier Noir',
    material: 'Unglazed stoneware · turned by hand',
    image: u('photo-1578749556568-bc2c40e68b61', 1100),
    swatches: [
      { name: 'Bone', hex: '#EFE6D6' },
      { name: 'Clay', hex: '#9F7B5A' },
    ],
    badge: 'Made to order',
  },
  {
    id: 'p-05',
    name: 'Iroko Stool · 380',
    subtitle: 'Solid iroko, oiled finish',
    category: 'Objects',
    price: 312000,
    currency: 'NGN',
    description:
      'Cut from a single iroko block, hand-sanded, finished with raw linseed. 38 cm tall — the right height for a small table or a window seat.',
    highlights: ['Single block of iroko', '38 × 32 × 28 cm', '5-year guarantee'],
    origin: 'Ibadan, Oyo State',
    material: 'Solid iroko · linseed oil',
    image: u('photo-1493663284031-b7e3aefcae8e', 1100),
    swatches: [
      { name: 'Iroko', hex: '#6B4E2E' },
    ],
    badge: 'New',
  },
  {
    id: 'p-06',
    name: 'Field Notes · Lagos',
    subtitle: 'Linen-bound notebook',
    category: 'Library',
    price: 24000,
    currency: 'NGN',
    description:
      'A 240-page bound notebook on cotton paper. Threaded by hand in a small bindery in Surulere. Lays flat. Hides nothing.',
    highlights: ['Linen-bound, hand-threaded', 'Cotton paper, 120 gsm', 'A5'],
    origin: 'Surulere · Hijazi bindery',
    material: 'Linen · cotton paper',
    image: u('photo-1518780664697-55e3ad937233', 900),
    swatches: [
      { name: 'Bone', hex: '#EFE6D6' },
      { name: 'Olive', hex: '#7C8270' },
      { name: 'Ink', hex: '#1A1714' },
    ],
    badge: 'New',
  },
];

export const categories: Product['category'][] = ['Objects', 'Apothecary', 'Linen', 'Table', 'Library'];

export const editorial = {
  title: 'A small house of slow goods.',
  subtitle: 'Atelier journal · Issue 11',
  cover: u('photo-1505691938895-1758d7feb511', 1400),
  body:
    'Each season we work with seven makers across Lagos, Abeokuta, Iseyin, and Ibadan. The brief is the same: make less, make it better, and stamp it with the name of the hands that made it. The eleventh issue gathers two new vessels, one notebook, a single iroko stool, and a dinner service three years in the drawing.',
  author: 'Adeola Hijazi · founding letter',
};

export const formatPrice = (p: number, c: 'NGN' | 'USD') =>
  c === 'NGN' ? `₦${(p / 1000).toFixed(0)}k` : `$${(p / 1000).toFixed(1)}k`;
