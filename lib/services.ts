import {
  BarChart3,
  Puzzle,
  ShieldCheck,
  Shuffle,
  type LucideIcon,
} from 'lucide-react';

/** Service page content. Copy follows the live site (codeswifters.com). */
export type ServiceSection = {
  title: string;
  description: string;
  bullets?: string[];
  image: string;
  alt: string;
};

export type ServicePage = {
  slug: string;
  href: string;
  title: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    alt: string;
  };
  sections: ServiceSection[];
  pillars?: { title: string; description: string; icon: LucideIcon }[];
  gallery?: {
    title: string;
    description?: string;
    images: string[];
    alt: string;
    /** portrait = phone screenshots, landscape = website screenshots */
    orientation: 'portrait' | 'landscape';
  };
  cta: { title: string; description: string; label: string };
};

const A = '/assets';

export const services: ServicePage[] = [
  {
    slug: 'mobile-development',
    href: '/services/mobile-development',
    title: 'Mobile App Development',
    hero: {
      eyebrow: 'Mobile App Development',
      title: 'Capture, Share & Engage Your Users',
      description:
        'We design and develop high-quality mobile applications that deliver meaningful user experiences and drive long-term engagement.',
      image: `${A}/services/mobile-hero.png`,
      alt: 'Mobile app screens designed by CodeSwifters',
    },
    sections: [
      {
        title: 'Real Solutions for Real Businesses',
        description:
          "Our mobile app solutions are crafted to solve practical challenges, whether it's eCommerce, booking systems, delivery apps, or enterprise tools.",
        bullets: [
          'eCommerce & marketplace apps',
          'Booking & scheduling systems',
          'Delivery & on-demand apps',
          'Enterprise & internal tools',
        ],
        image: `${A}/services/mobile-choice.png`,
        alt: 'Mobile app onboarding and listing screens',
      },
      {
        title: 'Intuitive Mobile App UI Design',
        description:
          'We focus on clean interfaces, smooth interactions, and intuitive navigation to ensure users enjoy every interaction with your app.',
        bullets: [
          'Clean, modern interfaces',
          'Smooth, purposeful interactions',
          'Intuitive navigation',
          'Native-feeling iOS & Android UX',
        ],
        image: `${A}/services/mobile-ui.png`,
        alt: 'Login and social video mobile app screens',
      },
    ],
    gallery: {
      title: 'Mobile App UI that Feels Effortless',
      description:
        "A selection of the app interfaces we've designed and built.",
      images: [
        `${A}/home/app-ui-01.png`,
        `${A}/home/app-ui-02.png`,
        `${A}/home/app-ui-03.png`,
        `${A}/home/app-ui-04.png`,
        `${A}/home/app-ui-05.png`,
        `${A}/home/app-ui-06.png`,
        `${A}/home/app-ui-07.png`,
        `${A}/home/app-ui-08.png`,
      ],
      alt: 'Mobile app interface by CodeSwifters',
      orientation: 'portrait',
    },
    cta: {
      title: "Let's Build Your App",
      description:
        "Have an idea? Let's transform it into a powerful, scalable mobile application.",
      label: 'Start your app',
    },
  },
  {
    slug: 'web-development',
    href: '/services/web-development',
    title: 'Web Development',
    hero: {
      eyebrow: 'Web Development',
      title: 'We Build Strategic Web Solutions That Grow Businesses',
      description:
        "Pixel-perfect websites that are fast, secure, and optimized for conversion, whether it's a landing page or an enterprise platform.",
      image: `${A}/services/web-ui.png`,
      alt: 'Responsive website shown across laptop, tablet and phone',
    },
    sections: [
      {
        title: 'Elegant & Intuitive User Interfaces',
        description:
          'Great websites feel effortless. We design interfaces around your users, then engineer them to be fast and flawless on every device.',
        bullets: [
          'User-centered UI/UX design',
          'Responsive layouts for all screen sizes',
          'Performance-optimized front-end development',
          'Clean, maintainable code structure',
        ],
        image: `${A}/services/web-ui-01.png`,
        alt: 'Website shown on desktop, tablet and mobile',
      },
      {
        title: 'More Productivity With Less Effort',
        description:
          'We streamline your digital workflows by building websites that are easy to manage, fast to update, and scalable as your business grows, saving you time and operational costs.',
        bullets: [
          'Easy content management',
          'Optimized loading speed',
          'SEO-ready architecture',
          'Secure and scalable solutions',
        ],
        image: `${A}/services/web-productivity.png`,
        alt: 'Website design displayed on a desktop monitor',
      },
    ],
    gallery: {
      title: 'Web Designs',
      description:
        "Websites we've designed and launched for clients worldwide.",
      images: [
        `${A}/home/web-design-01.png`,
        `${A}/home/web-design-02.png`,
        `${A}/home/web-design-03.png`,
        `${A}/home/web-design-04.png`,
        `${A}/home/web-design-05.png`,
        `${A}/home/web-design-06.png`,
        `${A}/home/web-design-07.png`,
        `${A}/home/web-design-08.png`,
        `${A}/home/web-design-09.png`,
        `${A}/home/web-design-10.png`,
      ],
      alt: 'Website design by CodeSwifters',
      orientation: 'landscape',
    },
    cta: {
      title: "Let's Build Something Exceptional with CodeSwifters",
      description:
        "Tell us about your project and we'll map it to a clear, scoped plan.",
      label: 'Start your website',
    },
  },
  {
    slug: 'web-applications',
    href: '/services/web-applications',
    title: 'Web Applications',
    hero: {
      eyebrow: 'Web Applications',
      title: 'Impressive Web Application Solutions',
      description:
        'We develop robust, scalable, and secure web applications that solve real business challenges and deliver seamless user experiences.',
      image: `${A}/home/nexus-web-application.png`,
      alt: 'School management web application dashboard',
    },
    sections: [
      {
        title: 'Start & Scale Your Online Business',
        description:
          'We help businesses launch and grow with custom-built web applications that combine smart design with powerful functionality. Our solutions are engineered to scale alongside your business needs.',
        bullets: [
          'Custom dashboards & portals',
          'Data-driven applications',
          'API integrations',
          'Cloud-ready architecture',
          'Payment integrations',
        ],
        image: `${A}/home/offer-custom-software-1.png`,
        alt: 'Analytics dashboard on a laptop',
      },
      {
        title: 'Advanced Analytics & SEO Optimization',
        description:
          'Gain actionable insights with powerful analytics dashboards and SEO-optimized structures that improve visibility, performance, and user engagement.',
        bullets: [
          'Real-time data tracking',
          'SEO-friendly development',
          'Performance monitoring',
          'Conversion-focused insights',
        ],
        image: `${A}/home/offer-web.png`,
        alt: 'Web application shown on desktop and mobile',
      },
    ],
    pillars: [
      {
        title: 'Extremely Flexible',
        description:
          'Our applications adapt to your business processes, not the other way around, ensuring long-term usability and scalability.',
        icon: Shuffle,
      },
      {
        title: 'Easy To Customize',
        description:
          'Built with modular architecture, allowing quick updates, feature expansion, and seamless integrations.',
        icon: Puzzle,
      },
      {
        title: 'Concrete Security',
        description:
          'We implement industry-standard security practices to protect data, users, and infrastructure.',
        icon: ShieldCheck,
      },
      {
        title: 'Insight-Ready',
        description:
          'Built-in analytics and monitoring so you can see how your product performs and where to improve it.',
        icon: BarChart3,
      },
    ],
    cta: {
      title: 'Launch Faster. Scale Smarter.',
      description:
        'Start your journey with a web application designed to grow with your business.',
      label: 'Start your web app',
    },
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
