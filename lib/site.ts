import {
  Bot,
  Boxes,
  Globe,
  LayoutDashboard,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

/** Contact details, taken from the live site (codeswifters.com). */
export const site = {
  name: "CodeSwifters",
  email: "info@codeswifters.com",
  phone: "+1 (437) 365-5023",
  phoneHref: "tel:+14373655023",
  offices: [
    {
      country: "Canada",
      address: "651 McEastern Path, Milton, ON, Canada",
    },
    {
      country: "Pakistan",
      address:
        "Plot No. 22-C, 05 Sunset Ln, D.H.A Phase II Extension, Phase 2 Ext, DHA Karachi",
    },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "X", href: "https://x.com" },
  ],
} as const;

export type ServiceLink = {
  href: string;
  label: string;
  description: string;
  icon: LucideIcon;
};

/** Pages shown in the Services dropdown and the footer. */
export const serviceLinks: ServiceLink[] = [
  {
    href: "/services/mobile-development",
    label: "Mobile App Development",
    description: "iOS & Android apps people love to use",
    icon: Smartphone,
  },
  {
    href: "/services/web-development",
    label: "Web Development",
    description: "Fast, conversion-focused websites",
    icon: Globe,
  },
  {
    href: "/services/web-applications",
    label: "Web Applications",
    description: "Scalable dashboards, portals & SaaS",
    icon: LayoutDashboard,
  },
];

/** Extra capabilities listed on the /services overview (no dedicated page). */
export const otherCapabilities = [
  {
    id: "custom-software",
    label: "Custom Software Solutions",
    description:
      "Tailored software built from the ground up to fit your business goals, streamline workflows, and scale with your growth.",
    icon: Boxes,
  },
  {
    id: "ai",
    label: "AI-Powered Solutions",
    description:
      "Leverage artificial intelligence to build smarter products, automate workflows, and unlock data-driven insights for your business.",
    icon: Bot,
  },
] as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/our-work", label: "Our Work" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
] as const;
