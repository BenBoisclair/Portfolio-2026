// All site copy lives here so content can be edited without touching markup.

export interface Profile {
  name: string;
  role: string;
  location: string;
  tagline: string; // hero line; wrap the emphasised phrase in <em>…</em>
  summary: string;
  email: string;
  phone: string;
  linkedin: { label: string; url: string };
  github: { label: string; url: string };
  resumeUrl: string;
}

export interface Stat {
  value: string;
  label: string;
}

/** A product screenshot. w/h are the intrinsic pixels of the file at `src`. */
export interface Screen {
  src: string;
  alt: string;
  caption: string;
  w: number;
  h: number;
}

/** A gallery photo. w/h are the intrinsic pixels of the `full` image. */
export interface Photo {
  thumb: string;
  full: string;
  alt: string;
  caption: string;
  w: number;
  h: number;
}

export interface Press {
  source: string;
  title: string;
  url: string;
}

export interface Project {
  name: string;
  role: string;
  period: string;
  employer?: { name: string; url: string };
  logos?: string[];
  bullets: string[];
  stack: string[];
  link?: { label: string; url: string };
  links?: { label: string; url: string }[];
  screens?: Screen[];
  photos?: Photo[];
  press?: Press[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  note: string;
  logo?: string;
  url?: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  gpa: string;
  note: string;
  logos?: string[];
  url?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export const profile: Profile = {
  name: "Benedict Boisclair",
  role: "Full-Stack Engineer",
  location: "Bangkok, Thailand",
  tagline: "Backend-focused engineer who ships <em>whole products</em>, fast.",
  summary:
    "I like the full arc of the stack: designing the data model and auth layer, then carrying it through to a frontend and cloud setup that actually ships. I pick up new languages quickly and work well on cross-functional, multicultural teams.",
  email: "ben.b.boisclair@gmail.com",
  phone: "+66 92 603 6969",
  linkedin: {
    label: "linkedin.com/in/benedict-boisclair",
    url: "https://www.linkedin.com/in/benedict-boisclair",
  },
  github: {
    label: "github.com/BenBoisclair",
    url: "https://github.com/BenBoisclair",
  },
  resumeUrl: "/BenedictBoisclair_Resume_2026.pdf",
};

// Earned, verifiable numbers: kept honest and specific.
export const stats: Stat[] = [
  { value: "฿3M+", label: "raised across ventures" },
  { value: "1,000+", label: "users scaled to" },
];

const tastemapScreens: Screen[] = [
  {
    src: "/media/tastemap/01-splash.webp",
    caption: "Splash",
    alt: "TasteMap splash screen with the brand mark",
    w: 780,
    h: 1688,
  },
  {
    src: "/media/tastemap/02-home.webp",
    caption: "Home feed",
    alt: "TasteMap home feed showing featured markets and categories",
    w: 780,
    h: 4604,
  },
  {
    src: "/media/tastemap/03-discovery.webp",
    caption: "Discover",
    alt: "Recommended-for-you list of vendors",
    w: 390,
    h: 1200,
  },
  {
    src: "/media/tastemap/04-market-highlights.webp",
    caption: "Market · Highlights",
    alt: "Market page highlights tab with unique services and ratings",
    w: 390,
    h: 1822,
  },
  {
    src: "/media/tastemap/05-market-info.webp",
    caption: "Market · Info",
    alt: "Market page map and info tab with hours, map and history",
    w: 390,
    h: 2067,
  },
  {
    src: "/media/tastemap/06-market-review.webp",
    caption: "Market · Reviews",
    alt: "Market page reviews tab with a multi-axis rating breakdown",
    w: 390,
    h: 1061,
  },
  {
    src: "/media/tastemap/07-vendor-info.webp",
    caption: "Vendor · Promotion",
    alt: "Vendor page showing a buy-two-get-one promotion",
    w: 390,
    h: 1285,
  },
  {
    src: "/media/tastemap/08-redeem-quantity.webp",
    caption: "Redeem · Quantity",
    alt: "Promotion redemption screen selecting quantities",
    w: 390,
    h: 1043,
  },
  {
    src: "/media/tastemap/09-redeem-qr.webp",
    caption: "Redeem · QR",
    alt: "QR code shown to the merchant to redeem a promotion",
    w: 390,
    h: 948,
  },
];

const rubieScreens: Screen[] = [
  {
    src: "/media/rubie/01-home.webp",
    caption: "Wallet",
    alt: "Rubie Wallet home with THBX and USDC balances and recent transactions",
    w: 513,
    h: 1110,
  },
  {
    src: "/media/rubie/02-explore.webp",
    caption: "Explore",
    alt: "Rubie Wallet explore tab with merchant discovery and promotions",
    w: 513,
    h: 1111,
  },
];

const eventlinkScreens: Screen[] = [
  {
    src: "/media/eventlink/product/01-overview.webp",
    caption: "Event overview",
    alt: "EventLink event overview page with a countdown, event summary and specification cards",
    w: 1600,
    h: 879,
  },
  {
    src: "/media/eventlink/product/02-teams.webp",
    caption: "Teams & roles",
    alt: "EventLink teams page showing leadership roles and team creation",
    w: 1600,
    h: 879,
  },
  {
    src: "/media/eventlink/product/03-ai-plan.webp",
    caption: "AI plan setup",
    alt: "EventLink AI onboarding modal for building an event plan",
    w: 1600,
    h: 879,
  },
  {
    src: "/media/eventlink/product/04-task-board.webp",
    caption: "Task board",
    alt: "EventLink task board grouped by team across weekly phases",
    w: 1600,
    h: 879,
  },
  {
    src: "/media/eventlink/product/05-task-detail.webp",
    caption: "Task detail",
    alt: "EventLink task detail view with a checklist and comments",
    w: 1600,
    h: 881,
  },
  {
    src: "/media/eventlink/product/06-assistant.webp",
    caption: "In-app assistant",
    alt: "EventLink in-app AI assistant panel",
    w: 1214,
    h: 1582,
  },
  {
    src: "/media/eventlink/product/07-assistant-answer.webp",
    caption: "Assistant · answers",
    alt: "EventLink AI assistant listing unassigned tasks",
    w: 1214,
    h: 1582,
  },
  {
    src: "/media/eventlink/product/08-assistant-create.webp",
    caption: "Assistant · new task",
    alt: "EventLink AI assistant proposing a new task to add to the board",
    w: 1224,
    h: 1582,
  },
];

const eventlinkPhotos: Photo[] = [
  {
    thumb: "/media/eventlink/01-award-check-thumb.webp",
    full: "/media/eventlink/01-award-check-full.webp",
    caption: "2nd place · TED Youth Startup Championship 2025",
    alt: "The EventLink team on stage receiving the 2nd runner-up award cheque",
    w: 1600,
    h: 900,
  },
  {
    thumb: "/media/eventlink/02-team-trophy-thumb.webp",
    full: "/media/eventlink/02-team-trophy-full.webp",
    caption: "The team with the championship trophy",
    alt: "The EventLink team holding the trophy beside an EventLink poster",
    w: 1200,
    h: 1600,
  },
  {
    thumb: "/media/eventlink/03-pitching-thumb.webp",
    full: "/media/eventlink/03-pitching-full.webp",
    caption: "Pitching EventLink on stage",
    alt: "Benedict pitching EventLink on stage with a microphone",
    w: 1600,
    h: 900,
  },
  {
    thumb: "/media/eventlink/04-booth-demo-thumb.webp",
    full: "/media/eventlink/04-booth-demo-full.webp",
    caption: "Demoing EventLink at the booth",
    alt: "Benedict demoing EventLink to a visitor at the expo booth",
    w: 1108,
    h: 1477,
  },
  {
    thumb: "/media/eventlink/05-booth-busan-thumb.webp",
    full: "/media/eventlink/05-booth-busan-full.webp",
    caption: "At the FLYAsia Busan 2025 expo",
    alt: "The EventLink booth at the FLYAsia Busan 2025 expo",
    w: 1108,
    h: 1477,
  },
  {
    thumb: "/media/eventlink/06-booth-crowd-thumb.webp",
    full: "/media/eventlink/06-booth-crowd-full.webp",
    caption: "The EventLink booth · FLYAsia Busan",
    alt: "Visitors at the EventLink expo booth",
    w: 1108,
    h: 1477,
  },
  {
    thumb: "/media/eventlink/07-booth-team-thumb.webp",
    full: "/media/eventlink/07-booth-team-full.webp",
    caption: "At the TED Youth Startup Championship",
    alt: "The EventLink team at the TED Youth Startup Championship booth",
    w: 1108,
    h: 1477,
  },
  {
    thumb: "/media/eventlink/08-award-stage-thumb.webp",
    full: "/media/eventlink/08-award-stage-full.webp",
    caption: "Receiving the ฿1.5M fast-track award",
    alt: "The award ceremony on stage with the fast-track grant cheque",
    w: 1284,
    h: 1271,
  },
  {
    thumb: "/media/eventlink/09-pitching-duo-thumb.webp",
    full: "/media/eventlink/09-pitching-duo-full.webp",
    caption: "On the pitching stage",
    alt: "Benedict and his co-founder presenting EventLink on the pitching stage",
    w: 1284,
    h: 1264,
  },
];

export const featured: Project[] = [
  {
    name: "EventLink",
    role: "Founder / CTO",
    period: "2025 - Present",
    logos: ["/logos/eventlink-logo.png"],
    bullets: [
      "I took EventLink from an empty repo to a live product with real users in under two months.",
      "The heart of it is the permission model: organisation-level authority plus per-event roles, sitting on a Redis-cached authorization layer with immutable audit logging behind it.",
      "I also built the AI features (streaming task generation and an in-app assistant on Claude with RAG) and shipped it across AWS, and Cloudflare. It's backed by a ฿1.5M TED Fund grant.",
    ],
    stack: ["Laravel 12", "Vue 3", "Inertia v2", "PostgreSQL", "Redis", "AWS"],
    link: { label: "eventlink.dev", url: "https://www.eventlink.dev" },
    screens: eventlinkScreens,
    photos: eventlinkPhotos,
    press: [
      {
        source: "Chulalongkorn CSII",
        title: "EventLink Fast-Tracks Its Way to a TED Fund Grant",
        url: "https://csii.chula.ac.th/bascii-senior-project-eventlink-fast-tracks-its-way-to-ted-fund-grant/",
      },
    ],
  },
  {
    name: "TasteMap",
    role: "Founder / CTO",
    period: "2023 - 2024",
    logos: ["/logos/taste-map-logo.png"],
    bullets: [
      "TasteMap is a discovery platform for Thailand's local markets. I led the product and grew it past 1,000 users while owning the technical roadmap.",
      "It's two-sided: shoppers browse markets and vendors, and vendors run promotions that shoppers redeem in person with a QR code.",
      "Built on Next.js and React Native over Supabase and Vercel, and funded by ฿1.5M in grants plus a UNDP Youth Co:Lab award.",
    ],
    stack: ["Next.js", "React Native", "PostgreSQL", "Supabase", "Vercel"],
    link: {
      label: "TasteMap on Facebook",
      url: "https://www.facebook.com/tastemap.official",
    },
    links: [
      {
        label: "TasteMap on Instagram",
        url: "https://www.instagram.com/tastemap.official/",
      },
    ],
    press: [
      {
        source: "Chulalongkorn CSII",
        title:
          "A Student-Led AI Gateway Between Tourists and Thai Micro-Vendors",
        url: "https://csii.chula.ac.th/tastemap-a-student-led-ai-powered-gateway-between-international-tourists-and-thai-micro-vendors/",
      },
    ],
    screens: tastemapScreens,
  },
  {
    name: "Rubie Wallet",
    role: "Full-Stack Engineer",
    employer: { name: "SCB 10X", url: "https://www.scb10x.com/" },
    period: "2024",
    logos: ["/logos/rubie-wallet-logo.jpg", "/logos/scb-10x-logo.png"],
    bullets: [
      "At SCB 10X I joined a 10+ person team building Rubie Wallet, a USDC-to-THBX payment app.",
      "I owned the backend vendor module in NestJS (location-based filtering and map-distance logic) and built Flutter components like the transaction history and QR scanner.",
      "We shipped on time for the beta launch at Thailand Dev Expo.",
    ],
    stack: ["NestJS", "Flutter", "PostgreSQL"],
    link: { label: "rubie.io", url: "https://www.rubie.io" },
    press: [
      {
        source: "SCB",
        title: "SCB 10X Launches the Rubie Wallet Payment App",
        url: "https://www.scb.co.th/th/about-us/news/nov-2567/scb10x-rubie-wallet",
      },
      {
        source: "SpringNews",
        title: "Introducing Rubie Wallet, a Digital Wallet from SCBX",
        url: "https://www.springnews.co.th/digital-tech/technology/853950",
      },
    ],
    screens: rubieScreens,
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer Intern",
    company: "Siam Piwat",
    period: "2022 - 2023",
    note: "Built a Python scraper that mined 10,000+ social posts for sentiment, helped ship a Huawei OCR receipt system, and shaped UX for three OneSiam app features.",
    logo: "/logos/siam-piwat-logo.png",
    url: "https://www.siampiwat.com/en/home",
  },
  {
    role: "Software Engineer Intern",
    company: "Stelligence",
    period: "2022",
    note: "Shipped my first full-stack web app under senior mentorship and got grounded in data analytics and the software development lifecycle.",
    logo: "/logos/stelligence-logo.png",
    url: "https://stelligence.com/",
  },
];

export const education: Education = {
  degree: "B.A.Sc. in Integrated Innovation",
  school: "Chulalongkorn University",
  period: "2021 - 2024",
  gpa: "GPA 3.4 / 4.0",
  note: "BAScii Ambassador Award recipient (฿100K grant); applied lean-startup methods across several ventures.",
  logos: ["/logos/chula-logo.jpg", "/logos/bascii-logo.png"],
  url: "https://www.chula.ac.th/",
};

export const skills: SkillGroup[] = [
  {
    label: "Backend",
    items: [
      "Laravel",
      "NestJS",
      "Node.js",
      "PHP",
      "REST APIs",
      "Layered architecture",
      "State machines",
    ],
  },
  {
    label: "Databases & Caching",
    items: ["PostgreSQL", "MySQL", "Redis"],
  },
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "PHP", "Python"],
  },
  {
    label: "Frontend",
    items: ["Vue.js", "Inertia", "React", "Next.js", "React Native"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS S3", "DigitalOcean", "Docker", "Cloudflare"],
  },
  {
    label: "Testing & Practices",
    items: ["Pest", "Git / GitHub", "Agile / Scrum", "Figma", "Supabase"],
  },
];

export const spoken = "Thai (Native) · English (Fluent)";
