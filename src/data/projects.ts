export interface Project {
  index: string;
  client: string;
  category: string;
  title: string;
  description: string;
  year: string;
  award?: string;
  metric: { label: string; value: string };
  tags: string[];
  cover: string;
  scenes: { tag: string; image: string }[];
}

const u = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const projects: Project[] = [
  {
    index: '01',
    client: 'Abuja Mercantile Bank',
    category: 'Fintech / Pan-African banking',
    title: 'Sub-second payment rails across 14 African markets',
    description:
      'A unified ledger and routing engine moving ₦4.8T per quarter for one of West Africa\'s largest commercial banks. NIBSS, Mastercard, and 9 mobile-money operators on a single mesh.',
    year: '2025',
    award: 'Awwwards SOTD',
    metric: { label: 'Latency P99', value: '186ms' },
    tags: ['Go + gRPC mesh', 'NIBSS · CBN compliant', 'Multi-currency ledger', 'Edge in 6 regions'],
    cover: u('photo-1551288049-bebda4e38f71', 1200),
    scenes: [
      { tag: 'Treasury console', image: u('photo-1551288049-bebda4e38f71', 600) },
      { tag: 'Routing graph', image: u('photo-1639762681485-074b7f938ba0', 600) },
      { tag: 'Risk panel', image: u('photo-1644088379091-d574269d422f', 600) },
    ],
  },
  {
    index: '02',
    client: 'Kẹlẹ AI',
    category: 'AI / Africa-first language',
    title: 'Multilingual agent platform for African enterprises',
    description:
      'A production-grade agent runtime fluent in Yoruba, Igbo, Hausa, Swahili, Amharic, and Pidgin — now powering CX for 11 banks and 4 telcos across the continent.',
    year: '2025',
    award: 'Disrupt Africa — Startup of the Year',
    metric: { label: 'Daily turns', value: '8.4M' },
    tags: ['LLM orchestration', '6 African languages', 'Voice + chat', 'On-prem deployable'],
    cover: u('photo-1677442136019-777752548707', 1200),
    scenes: [
      { tag: 'Agent shell', image: u('photo-1677442136019-777752548707', 600) },
      { tag: 'Language eval', image: u('photo-1635776062127-d379bfcba9f8', 600) },
      { tag: 'Conversation graph', image: u('photo-1517694712202-14dd9538aa97', 600) },
    ],
  },
  {
    index: '03',
    client: 'Sahel Logistics',
    category: 'Mobility / Last-mile',
    title: 'Operating system for 38,000 dispatch riders',
    description:
      'Driver app, dispatcher console, and on-device routing across Abuja, Lagos, Accra, Nairobi, and Kigali. 2.1M deliveries a month with 99.94% on-time.',
    year: '2024',
    metric: { label: 'On-time rate', value: '99.94%' },
    tags: ['React Native', 'Offline-first', 'Mapbox tiles', 'Postgres + ClickHouse'],
    cover: u('photo-1581092160562-40aa08ad7819', 1200),
    scenes: [
      { tag: 'Rider app', image: u('photo-1581092160562-40aa08ad7819', 600) },
      { tag: 'Fleet map', image: u('photo-1581090700227-1e37b190418e', 600) },
      { tag: 'Dispatcher OS', image: u('photo-1597767151904-67d34dd5d29c', 600) },
    ],
  },
  {
    index: '04',
    client: 'Ọmọ Health',
    category: 'Healthtech / Pan-African',
    title: 'Clinical intelligence platform for 240 hospitals',
    description:
      'A privacy-first patient data fabric and a beautifully fast clinician interface. Live in Nigeria, Ghana, Kenya — processing 14M patient events daily.',
    year: '2024',
    award: 'Webby — Africa & Middle East',
    metric: { label: 'Events / day', value: '14M' },
    tags: ['NDPR compliant', 'Kafka pipelines', 'FHIR fabric', 'React + RSC'],
    cover: u('photo-1576091160550-2173dba999ef', 1200),
    scenes: [
      { tag: 'Clinician console', image: u('photo-1576091160550-2173dba999ef', 600) },
      { tag: 'Patient timeline', image: u('photo-1551288049-bebda4e38f71', 600) },
      { tag: 'Data fabric', image: u('photo-1633613286848-e6f43bbafb8d', 600) },
    ],
  },
];
