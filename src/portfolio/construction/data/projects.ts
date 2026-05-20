export interface ConstructionProject {
  id: string;
  name: string;
  location: string;
  type: 'High-rise' | 'Industrial' | 'Roadworks' | 'Civic' | 'Residential' | 'Energy';
  client: string;
  scope: string;
  value: string;
  duration: string;
  delivered: string;
  status: 'Delivered' | 'In progress' | 'Handover';
  cover: string;
}

const u = (id: string, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

export const projects: ConstructionProject[] = [
  {
    id: 'pr-01',
    name: 'Eko Atlantic Tower · Phase II',
    location: 'Victoria Island, Lagos',
    type: 'High-rise',
    client: 'Eko Pearl Holdings',
    scope: '42-floor mixed-use tower · concrete frame · cladding · MEP',
    value: '₦68B',
    duration: '34 months',
    delivered: '2024',
    status: 'Delivered',
    cover: u('photo-1486325212027-8081e485255e', 1400),
  },
  {
    id: 'pr-02',
    name: 'Abuja BRT Corridor',
    location: 'FCT · Abuja',
    type: 'Roadworks',
    client: 'FCT Transport Authority',
    scope: '24 km BRT spine · 18 stations · underpasses',
    value: '₦92B',
    duration: '22 months',
    delivered: '2025',
    status: 'Handover',
    cover: u('photo-1429497419816-9ca5cfb4571a', 1400),
  },
  {
    id: 'pr-03',
    name: 'Lekki Solar Farm · Block A',
    location: 'Lekki Free Trade Zone',
    type: 'Energy',
    client: 'Volta Power Ltd',
    scope: '120 MW solar field · substation · grid tie-in',
    value: '₦44B',
    duration: '18 months',
    delivered: '2025',
    status: 'In progress',
    cover: u('photo-1466611653911-95081537e5b7', 1400),
  },
  {
    id: 'pr-04',
    name: 'Apapa Container Yard',
    location: 'Apapa Port, Lagos',
    type: 'Industrial',
    client: 'Maersk Nigeria',
    scope: 'Heavy concrete slab · cranes · rail spur',
    value: '₦38B',
    duration: '14 months',
    delivered: '2024',
    status: 'Delivered',
    cover: u('photo-1542621334-a254cf47733d', 1400),
  },
  {
    id: 'pr-05',
    name: 'Ile-Ife Civic Centre',
    location: 'Ile-Ife, Osun State',
    type: 'Civic',
    client: 'Osun State Government',
    scope: 'Council chamber · auditorium · plaza',
    value: '₦18B',
    duration: '20 months',
    delivered: '2024',
    status: 'Delivered',
    cover: u('photo-1581094288338-2314dddb7ece', 1400),
  },
  {
    id: 'pr-06',
    name: 'Maitama Residences',
    location: 'Maitama, Abuja',
    type: 'Residential',
    client: 'Hijaz Holdings',
    scope: '11-villa luxury enclave · landscape · pools',
    value: '₦28B',
    duration: '24 months',
    delivered: '2026',
    status: 'In progress',
    cover: u('photo-1564013799919-ab600027ffc6', 1400),
  },
];

export interface Capability {
  id: string;
  title: string;
  blurb: string;
  metric: string;
}

export const capabilities: Capability[] = [
  {
    id: 'c-01',
    title: 'High-rise construction',
    blurb: 'Cast-in-place concrete frames, post-tensioned floors, façade integration. Up to 60 floors in our portfolio.',
    metric: '14 towers · 2.4M m²',
  },
  {
    id: 'c-02',
    title: 'Civil & roadworks',
    blurb: 'Highways, BRT corridors, bridges, airfields. In-house aggregate plant, asphalt plant, and 38-truck fleet.',
    metric: '1,200 km · since 2008',
  },
  {
    id: 'c-03',
    title: 'Industrial & ports',
    blurb: 'Container yards, warehouses, cement plants, steel mills. Heavy slabs and crane-rail engineering specialty.',
    metric: '38 industrial sites',
  },
  {
    id: 'c-04',
    title: 'Energy infrastructure',
    blurb: 'Solar farms, substations, gas-fired turbine bases. Grid tie-in design + construction.',
    metric: '320 MW commissioned',
  },
  {
    id: 'c-05',
    title: 'Civic architecture',
    blurb: 'Council buildings, museums, transit halls. From competition entry to ribbon-cutting, all under one roof.',
    metric: '11 civic landmarks',
  },
  {
    id: 'c-06',
    title: 'Residential & enclaves',
    blurb: 'Luxury homes, gated estates, low-rise enclaves. Bespoke MEP, smart-home pre-wiring standard.',
    metric: '240 doors delivered',
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  duration: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  { number: '01', title: 'Brief & survey', duration: 'Weeks 1–3', description: 'Site survey, geotech, programme alignment, value engineering pass.' },
  { number: '02', title: 'Design & permits', duration: 'Months 1–4', description: 'Architectural sign-off, structural & MEP, planning permits, environmental clearance.' },
  { number: '03', title: 'Mobilisation', duration: 'Month 5', description: 'Hoarding, site cabins, plant deployment, kit-out, safety induction for 300+ workers.' },
  { number: '04', title: 'Construction', duration: 'Months 6–28', description: 'Weekly site meetings, milestone-based progress, real-time dashboards for client teams.' },
  { number: '05', title: 'Handover & care', duration: 'Final 60 days', description: '24-month defects-liability period, scheduled maintenance, building manual training.' },
];

export interface Equipment {
  name: string;
  category: string;
  count: number;
  image: string;
}

export const equipment: Equipment[] = [
  { name: 'Tower cranes', category: 'Lifting', count: 18, image: u('photo-1503387762-592deb58ef4e', 600) },
  { name: 'Excavators', category: 'Earthworks', count: 32, image: u('photo-1565687981296-535f09db714e', 600) },
  { name: 'Concrete trucks', category: 'Logistics', count: 24, image: u('photo-1568104900132-7e7f7c3d5d3e', 600) },
  { name: 'Asphalt plants', category: 'Materials', count: 4, image: u('photo-1494522358652-f30e61a60313', 600) },
];

export const ticker = [
  '14 active sites across Nigeria',
  'ISO 9001 · ISO 45001 · OHSAS certified',
  '0 fatalities · 1.3M man-hours · 2025',
  'Local content score · 89%',
  '320 MW solar capacity built',
  'Trusted by NNPC, MTN, Dangote, Bank of Industry',
];
