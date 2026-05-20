export interface Property {
  id: string;
  reference: string;
  name: string;
  neighbourhood: string;
  city: string;
  price: number;
  currency: 'NGN';
  status: 'For sale' | 'For lease' | 'Off market' | 'Reserved';
  bedrooms: number;
  bathrooms: number;
  sqm: number;
  type: 'Villa' | 'Penthouse' | 'Townhouse' | 'Estate' | 'Apartment';
  blurb: string;
  features: string[];
  cover: string;
  gallery: string[];
  agent: string;
}

const u = (id: string, w = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

export const properties: Property[] = [
  {
    id: 'pp-01',
    reference: 'ML/01/26',
    name: 'Maison Banana Island',
    neighbourhood: 'Banana Island',
    city: 'Ikoyi, Lagos',
    price: 4_800_000_000,
    currency: 'NGN',
    status: 'For sale',
    bedrooms: 7,
    bathrooms: 9,
    sqm: 1840,
    type: 'Villa',
    blurb:
      'A waterfront villa drawn around an inner courtyard. Iroko-and-bronze, infinity pool overlooking the lagoon, private jetty.',
    features: ['Private jetty', 'Infinity pool', 'Cinema', 'Wine cellar', 'Staff wing'],
    cover: u('photo-1613490493576-7fde63acd811', 1600),
    gallery: [u('photo-1600596542815-ffad4c1539a9', 1100), u('photo-1600585154340-be6161a56a0c', 1100)],
    agent: 'Adaeze Okonkwo',
  },
  {
    id: 'pp-02',
    reference: 'ML/02/26',
    name: 'The Lekki Penthouse',
    neighbourhood: 'Eko Atlantic',
    city: 'Lagos',
    price: 2_900_000_000,
    currency: 'NGN',
    status: 'For sale',
    bedrooms: 5,
    bathrooms: 6,
    sqm: 920,
    type: 'Penthouse',
    blurb:
      'Top floor of Eko Atlantic Tower II. Twin terraces wrap the Atlantic. Italian kitchen, marble bath suites, smart-home throughout.',
    features: ['Twin terraces', 'Atlantic view', 'Concierge', 'Two parking bays', 'Helipad access'],
    cover: u('photo-1600607687939-ce8a6c25118c', 1600),
    gallery: [u('photo-1600585154526-990dced4db0d', 1100), u('photo-1600566753190-17f0baa2a6c3', 1100)],
    agent: 'Tunde Adeyemi',
  },
  {
    id: 'pp-03',
    reference: 'ML/03/26',
    name: 'Maitama Townhouse · No. 4',
    neighbourhood: 'Maitama',
    city: 'Abuja',
    price: 1_650_000_000,
    currency: 'NGN',
    status: 'Reserved',
    bedrooms: 5,
    bathrooms: 6,
    sqm: 680,
    type: 'Townhouse',
    blurb:
      'One of eleven townhouses in the Hijaz Holdings enclave. Stone-clad, north-facing courtyard, walled garden.',
    features: ['Walled garden', 'Smart-home', 'Solar + storage', 'Borehole', 'Service quarters'],
    cover: u('photo-1564013799919-ab600027ffc6', 1600),
    gallery: [u('photo-1600585154526-990dced4db0d', 1100), u('photo-1600566753190-17f0baa2a6c3', 1100)],
    agent: 'Chiamaka Eze',
  },
  {
    id: 'pp-04',
    reference: 'ML/04/26',
    name: 'Asokoro Quiet House',
    neighbourhood: 'Asokoro',
    city: 'Abuja',
    price: 980_000_000,
    currency: 'NGN',
    status: 'For sale',
    bedrooms: 6,
    bathrooms: 7,
    sqm: 1120,
    type: 'Villa',
    blurb:
      'A modernist villa drawn in white travertine, set in 0.6 hectares of jacaranda garden. Walled, gated, quiet.',
    features: ['0.6 ha garden', '20m pool', 'Library', 'Two studies', 'Pavilion'],
    cover: u('photo-1600585152915-d208bec867a1', 1600),
    gallery: [u('photo-1600596542815-ffad4c1539a9', 1100), u('photo-1600585154526-990dced4db0d', 1100)],
    agent: 'Adaeze Okonkwo',
  },
  {
    id: 'pp-05',
    reference: 'ML/05/26',
    name: 'Old Ikoyi Apartment',
    neighbourhood: 'Old Ikoyi',
    city: 'Lagos',
    price: 480_000_000,
    currency: 'NGN',
    status: 'For lease',
    bedrooms: 3,
    bathrooms: 3,
    sqm: 280,
    type: 'Apartment',
    blurb:
      'A serviced 3-bed on the eighth floor of a small Old Ikoyi block. Concierge, gym, pool. ₦82M annual rent.',
    features: ['Serviced', 'Concierge', 'Pool', 'Gym', '24h power'],
    cover: u('photo-1522708323590-d24dbb6b0267', 1600),
    gallery: [],
    agent: 'Tunde Adeyemi',
  },
  {
    id: 'pp-06',
    reference: 'ML/06/26',
    name: 'Calabar Hill Estate',
    neighbourhood: 'Calabar South',
    city: 'Cross River',
    price: 3_400_000_000,
    currency: 'NGN',
    status: 'Off market',
    bedrooms: 9,
    bathrooms: 11,
    sqm: 2280,
    type: 'Estate',
    blurb:
      'A 4-hectare hilltop estate with views of the Calabar river. Main house, guest house, pavilion, orchard. By appointment only.',
    features: ['4 hectares', 'Guest house', 'Orchard', 'Pavilion', 'Stables'],
    cover: u('photo-1599809275671-b5942cabc7a2', 1600),
    gallery: [],
    agent: 'Adaeze Okonkwo',
  },
];

export interface Agent {
  id: string;
  name: string;
  title: string;
  city: string;
  closed: string;
  avatar: string;
  blurb: string;
}

export const agents: Agent[] = [
  {
    id: 'ag-01',
    name: 'Adaeze Okonkwo',
    title: 'Principal Broker · Lagos',
    city: 'Banana Island · Ikoyi · Lekki',
    closed: '₦42B closed · 2025',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=facearea&facepad=2.4&w=520&h=600&q=85',
    blurb: 'Twelve years in Lagos prime. Quiet sales, off-market specialty.',
  },
  {
    id: 'ag-02',
    name: 'Tunde Adeyemi',
    title: 'Director · Abuja',
    city: 'Maitama · Asokoro · Wuse 2',
    closed: '₦28B closed · 2025',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=facearea&facepad=2.4&w=520&h=600&q=85',
    blurb: 'Former architect — reads a floor plan before he reads the price.',
  },
  {
    id: 'ag-03',
    name: 'Chiamaka Eze',
    title: 'Senior Broker · Lekki',
    city: 'Eko Atlantic · Lekki I & II',
    closed: '₦19B closed · 2025',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=facearea&facepad=2.4&w=520&h=600&q=85',
    blurb: 'Specialises in penthouses and serviced developments.',
  },
];

export const formatNGN = (amount: number) => {
  if (amount >= 1_000_000_000) return `₦${(amount / 1_000_000_000).toFixed(2)}B`;
  if (amount >= 1_000_000) return `₦${(amount / 1_000_000).toFixed(0)}M`;
  return `₦${amount.toLocaleString()}`;
};
