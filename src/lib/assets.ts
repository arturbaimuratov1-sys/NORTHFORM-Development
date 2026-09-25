export type Project = {
  index: string;
  slug: string;
  name: string;
  location: string;
  type: string;
  year: string;
  image: string;
  alt: string;
  photographer: string;
};

export const PROJECTS: Project[] = [
  {
    index: "01",
    slug: "north-residence",
    name: "North Residence",
    location: "Almaty",
    type: "Residential",
    year: "2025",
    image: "/images/north-residence.jpg",
    alt: "Modern villa at twilight with poolside view",
    photographer: "Jonathan Borba",
  },
  {
    index: "02",
    slug: "meridian-house",
    name: "Meridian House",
    location: "Astana",
    type: "Residential",
    year: "2024",
    image: "/images/villa-sunset.jpg",
    alt: "Luxury villa with pool at sunset",
    photographer: "aksinfo7 universe",
  },
  {
    index: "03",
    slug: "concrete-atlas",
    name: "Concrete Atlas",
    location: "Tbilisi",
    type: "Mixed-use",
    year: "2024",
    image: "/images/residential-dusk.jpg",
    alt: "Tall residential facade at dusk",
    photographer: "Plato Terentev",
  },
  {
    index: "04",
    slug: "glass-meridian",
    name: "Glass Meridian",
    location: "Dubai",
    type: "Commercial",
    year: "2023",
    image: "/images/highrise-twilight.jpg",
    alt: "High-rise glass facades at twilight",
    photographer: "Turuncu Sakal",
  },
  {
    index: "05",
    slug: "evening-block",
    name: "Evening Block",
    location: "Yerevan",
    type: "Residential",
    year: "2023",
    image: "/images/apartment-evening.jpg",
    alt: "Apartment building exterior at sunset",
    photographer: "Colin Brooks",
  },
];

export const ASSET_MAP = {
  hero: {
    src: "/images/hero.jpg",
    alt: "Contemporary villa illuminated at dusk",
    photographer: "Gustavo Galeano Maz",
    id: 13752348,
  },
  manifesto: {
    src: "/images/concrete-bw.jpg",
    alt: "Minimalist concrete structures in black and white",
    photographer: "David Yu",
    id: 2191622,
  },
  featured: PROJECTS[0],
  rail: PROJECTS.slice(1),
  materials: [
    {
      src: "/images/concrete-passage.jpg",
      alt: "Concrete passage with dramatic light and shadow",
      photographer: "Pixabay",
      id: 327482,
    },
    {
      src: "/images/glass-reflection.jpg",
      alt: "Modern building facade reflected in glass",
      photographer: "MINEIA MARTINS",
      id: 32613903,
    },
    {
      src: "/images/concrete-sky.jpg",
      alt: "Modern concrete facade against blue sky",
      photographer: "Jan van der Wolf",
      id: 33217595,
    },
  ],
  process: [
    {
      src: "/images/facade-minimal.jpg",
      alt: "Minimalist facade with window and wall textures",
      photographer: "Takeshi Arai",
      id: 20004484,
    },
    {
      src: "/images/concrete-interior.jpg",
      alt: "Modern concrete interior with geometric lines",
      photographer: "Man Lau",
      id: 31636027,
    },
    {
      src: "/images/lobby.jpg",
      alt: "Spacious indoor lobby with symmetrical reflections",
      photographer: "Paweł L.",
      id: 1381765,
    },
    {
      src: "/images/glass-geometric.jpg",
      alt: "Contemporary glass facade with geometric patterns",
      photographer: "Scott Webb",
      id: 532562,
    },
  ],
  featuredVideo: {
    src: "/video/featured-villa.mp4",
    poster: "/images/north-residence.jpg",
    photographer: "Alef Morais",
    id: 38675652,
  },
  closingVideo: {
    src: "/video/aerial.mp4",
    poster: "/images/highrise-twilight.jpg",
    photographer: "Alex Dos Santos",
    id: 34916337,
  },
};

export const PROCESS_STEPS = [
  {
    n: "01",
    title: "Strategy",
    body: "Site, constraints, budget and ambition fixed early. No vague briefs carried into design.",
    image: "/images/facade-minimal.jpg",
  },
  {
    n: "02",
    title: "Design",
    body: "Architecture developed as one system — massing, facade, interior and light drawn together.",
    image: "/images/concrete-interior.jpg",
  },
  {
    n: "03",
    title: "Engineering",
    body: "Structure, envelope and systems resolved before site work. Precision on paper first.",
    image: "/images/glass-geometric.jpg",
  },
  {
    n: "04",
    title: "Construction",
    body: "One accountable team on site. Concrete, steel and glass executed to drawing, not approximation.",
    image: "/images/concrete-passage.jpg",
  },
  {
    n: "05",
    title: "Delivery",
    body: "Handover with documentation, tolerances checked, spaces calibrated for life after construction.",
    image: "/images/lobby.jpg",
  },
];

export const ATTRIBUTION = [
  "Gustavo Galeano Maz",
  "Jonathan Borba",
  "aksinfo7 universe",
  "Plato Terentev",
  "Turuncu Sakal",
  "Colin Brooks",
  "Takeshi Arai",
  "David Yu",
  "Jan van der Wolf",
  "MINEIA MARTINS",
  "Scott Webb",
  "Pixabay",
  "Man Lau",
  "Paweł L.",
  "Alef Morais (video)",
  "Alex Dos Santos (video)",
];
