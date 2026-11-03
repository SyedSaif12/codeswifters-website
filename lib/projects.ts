/**
 * Portfolio / case studies.
 * `summary` for Nexus, MCS, Wedfluencer and Luxe Vault is taken from the live
 * site (codeswifters.com/about-us). Other copy (overview, highlights) is
 * written from the project screenshots and client reviews, so review it
 * before publishing.
 */
export type ProjectCategory =
  | 'Website Development'
  | 'Mobile App Development'
  | 'Software Development';

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  tagline: string;
  summary: string;
  overview: string;
  highlights: string[];
  tags: string[];
  logo: string;
  image: string;
  gallery: string[];
  /** Company name used to attach the client's review from lib/testimonials */
  reviewCompany?: string;
};

const A = '/assets';

export const projects: Project[] = [
  {
    slug: 'nexus',
    name: 'NEXUS',
    category: 'Software Development',
    tagline: 'A modern School Management System',
    summary:
      'NEXUS is a comprehensive, modern School Management System designed to simplify and digitize the daily operations of educational institutions.',
    overview:
      'Schools run on many moving parts: students, attendance, fees and reporting. NEXUS brings them into a single dashboard so administrators spend less time on paperwork and more time on education.',
    highlights: [
      'Central dashboard for student, attendance and invoice insights',
      'Calendar and scheduling for day-to-day school operations',
      'Clear data visualizations for administrators',
      'Web platform built to scale with the institution',
    ],
    tags: ['Web Application', 'Dashboard', 'Education'],
    logo: `${A}/clients/nexus.png`,
    image: `${A}/home/offer-custom-software-2.png`,
    gallery: [`${A}/home/eco-web.png`, `${A}/home/offer-custom-software.png`],
  },
  {
    slug: 'mcs',
    name: 'MCS Digitizing',
    category: 'Software Development',
    tagline: 'Digital design boutique for embroidery businesses',
    summary:
      'MCS Digitizing is now helping design and embroidery businesses automate workflows, reduce manual effort, and enhance client collaboration.',
    overview:
      'MCS needed a brand-forward web presence and smoother client workflows for its digitizing and embroidery services. We delivered a bold, aesthetics-first website that makes the service easy to understand and order.',
    highlights: [
      'Brand-forward website with a bold dark visual identity',
      'Workflow automation for design and embroidery businesses',
      'Tools that improve client collaboration',
      'Responsive layouts across desktop and mobile',
    ],
    tags: ['Website', 'Workflow Automation', 'Branding'],
    logo: `${A}/clients/mcs.png`,
    image: `${A}/home/mcs-digitizing.png`,
    gallery: [`${A}/services/web-productivity.png`],
  },
  {
    slug: 'wedfluencer',
    name: 'WEDFluencer',
    category: 'Software Development',
    tagline: 'A social platform for wedding creators',
    summary:
      'A social media platform empowering creators to connect, share, and grow their audiences.',
    overview:
      'WEDFluencer connects wedding creators and audiences through rich profiles and video-first feeds, with AI-assisted planning ideas built in. We built the web and mobile experience from concept through launch.',
    highlights: [
      'Creator profiles with photo and video feeds',
      'Social discovery to help creators grow audiences',
      'AI-assisted wedding planning collaboration',
      'Web dashboard and mobile app on one platform',
    ],
    tags: ['Mobile App', 'Social Platform', 'AI'],
    logo: `${A}/clients/wedfluencer.png`,
    // Full case study: app/our-work/wedfluencer/page.tsx (assets from Figma)
    image: `${A}/home/wed-flu.png`,
    gallery: [
      `${A}/case-studies/WedFluencer/web-screens.png`,
      `${A}/case-studies/WedFluencer/app-profile.png`,
      `${A}/case-studies/WedFluencer/app-video-feed.png`,
    ],
    reviewCompany: 'WEDFluencer',
  },
  {
    slug: 'luxevault',
    name: 'Luxe Vault',
    category: 'Mobile App Development',
    tagline: 'The digital standard for authenticated trading',
    summary: 'Luxe Vault sets the digital standard for authenticated trading.',
    overview:
      'Luxe Vault is a marketplace experience for authenticated luxury goods, from live auctions to new arrivals. We delivered the first milestone on time and continue to build out the next phases together.',
    highlights: [
      'Product browsing, new arrivals and active auctions',
      'Premium, jewelry-grade visual design',
      'Mobile-first buying and bidding flows',
      'Milestone-based delivery with transparent communication',
    ],
    tags: ['Mobile App', 'Marketplace', 'Luxury'],
    logo: `${A}/clients/luxevault.png`,
    image: `${A}/home/luxe-vault.png`,
    gallery: [`${A}/home/hero-mobile.png`, `${A}/services/mobile-hero-1.png`],
    reviewCompany: 'Lux Vault',
  },
  {
    slug: 'biotip',
    name: 'BioTip eyeApp',
    category: 'Mobile App Development',
    tagline: 'A health-focused mobile app launch',
    summary:
      "BioTip's eyeD app: scan a smart sticker to check food freshness, from onboarding through to scan history.",
    overview:
      'BioTip came to us with a clear product vision. We turned complex requirements into a clean, approachable mobile app, covering sign-up, onboarding and booking flows, and launched it with a seamless development process.',
    highlights: [
      'Friendly onboarding and sign-up flow',
      'Scan history with Fresh / Consume soon / Not fresh results',
      'Clean, approachable health-focused UI',
      'Quick turnaround from concept to launch',
    ],
    tags: ['Mobile App', 'Health', 'App Launch'],
    logo: `${A}/case-studies/biotip/logo.png`,
    image: `${A}/home/biotip.png`,
    gallery: [
      `${A}/case-studies/biotip/mockup-01.png`,
      `${A}/case-studies/biotip/screen-home.png`,
      `${A}/case-studies/biotip/screen-signup.png`,
    ],
    reviewCompany: 'BioTip eyeApp',
  },
  {
    slug: 'wightguide',
    name: 'Wight Guide',
    category: 'Mobile App Development',
    tagline: 'A destination discovery app with strong UX',
    summary:
      'A travel and destination discovery app shaped by UX/UI expertise and clear product milestones.',
    overview:
      'Wight Guide helps people discover and explore destinations. We provided UX/UI design and technical guidance and set out clear milestone plans the whole team could follow.',
    highlights: [
      'Destination discovery with ratings and recommendations',
      'UX/UI design and product guidance',
      'Clear milestone planning across the project',
      'Polished iOS and Android experience',
    ],
    tags: ['Mobile App', 'Travel', 'UX/UI'],
    logo: `${A}/case-studies/wightguide/logo.png`,
    image: `${A}/case-studies/wightguide/hero.png`,
    gallery: [`${A}/case-studies/wightguide/home-screen.png`],
    reviewCompany: 'Wight Guide',
  },
  {
    slug: 'lynacam',
    name: 'LYNA Cam',
    category: 'Mobile App Development',
    tagline: 'A personal tracking and analysis app',
    summary:
      'A cycle-aware wellness app with a camera food scanner, meal log and personalised recommendations.',
    overview:
      'LYNA Cam needed a mobile app that was intuitive on day one. The team took the time to understand the requirements deeply and anticipated challenges along the way, delivering high-quality work on time.',
    highlights: [
      'Daily logging with analysis and trends',
      'Personalised, data-driven recommendations',
      'Polished onboarding and dashboard screens',
      'Delivered on time with proactive communication',
    ],
    tags: ['Mobile App', 'Analytics', 'Personalisation'],
    logo: `${A}/clients/lynaCam-mark.png`,
    image: `${A}/services/mobile-solutions.png`,
    gallery: [],
    reviewCompany: 'LYNA Cam',
  },
];

export const projectCategories: ('All' | ProjectCategory)[] = [
  'All',
  'Website Development',
  'Mobile App Development',
  'Software Development',
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
