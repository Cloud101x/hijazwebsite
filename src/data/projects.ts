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

export const projects: Project[] = [
  {
    index: '01',
    client: 'NovaPay Africa',
    category: 'Fintech / Digital banking platform',
    title: 'A modern banking platform built in 10 weeks',
    description:
      'Full-stack mobile banking application with real-time ledger, KYC orchestration, and compliance automation. Launched across Nigeria and Ghana with 99.97% uptime from day one.',
    year: '2025',
    award: 'Awwwards SOTD',
    metric: { label: 'Time to live', value: '10 wk' },
    tags: ['React Native', 'Go microservices', 'Real-time ledger', 'CBN compliant'],
    cover: '/bank1.jpg',
    scenes: [
      { tag: 'Dashboard', image: '/bank1.jpg' },
      { tag: 'Analytics', image: '/bank2.jpg' },
      { tag: 'Mobile app', image: '/bank3.jpg' },
    ],
  },
  // {
  //   index: '02',
  //   client: 'Kẹlẹ AI',
  //   category: 'AI / Enterprise platform',
  //   title: 'Multilingual agent platform for African enterprises',
  //   description:
  //     'A production-grade agent runtime fluent in Yoruba, Igbo, Hausa, Swahili, Amharic, and Pidgin — now powering CX for 11 banks and 4 telcos across the continent.',
  //   year: '2025',
  //   award: 'Disrupt Africa — Startup of the Year',
  //   metric: { label: 'Daily turns', value: '8.4M' },
  //   tags: ['LLM orchestration', '6 African languages', 'Voice + chat', 'On-prem deployable'],
  //   cover: '/maps.jpg',
  //   scenes: [
  //     { tag: 'Agent shell', image: '/maps.jpg' },
  //     { tag: 'Deployment', image: '/maps2.jpg' },
  //     { tag: 'Analytics', image: '/bank1.jpg' },
  //   ],
  // },
  {
    index: '03',
    client: 'Sahel Logistics',
    category: 'Logistics / Operations platform',
    title: 'Operating system for 38,000 dispatch riders',
    description:
      'Driver app, dispatcher console, and on-device routing across Abuja, Lagos, Accra, Nairobi, and Kigali. 2.1M deliveries a month with 99.94% on-time.',
    year: '2024',
    metric: { label: 'On-time rate', value: '99.94%' },
    tags: ['React Native', 'Offline-first', 'Mapbox tiles', 'Postgres + ClickHouse'],
    cover: '/maps2.jpg',
    scenes: [
      { tag: 'Rider app', image: '/maps2.jpg' },
      { tag: 'Fleet map', image: '/maps.jpg' },
      { tag: 'Dispatcher OS', image: '/bank2.jpg' },
    ],
  },
  {
    index: '04',
    client: 'Ọmọ Health',
    category: 'Healthtech / SaaS platform',
    title: 'Clinical intelligence platform for 240 hospitals',
    description:
      'A privacy-first patient data fabric and a beautifully fast clinician interface. Built end-to-end in 14 weeks. Live in Nigeria, Ghana, Kenya — processing 14M patient events daily.',
    year: '2024',
    award: 'Webby — Africa & Middle East',
    metric: { label: 'Build time', value: '14 wk' },
    tags: ['NDPR compliant', 'Kafka pipelines', 'FHIR fabric', 'React + RSC'],
    cover: '/clinic.jpg',
    scenes: [
      { tag: 'Clinician console', image: '/clinic.jpg' },
      { tag: 'Patient timeline', image: '/clinic2.jpg' },
      { tag: 'Data fabric', image: '/clinic3.jpg' },
    ],
  },
];