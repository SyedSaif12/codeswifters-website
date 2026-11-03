/**
 * Wedfluencer case study content.
 *
 * Sources:
 * - Imagery: Figma file "bio-tip case study", frame "wedfluencers" (46:6239),
 *   saved in /public/assets/case-studies/WedFluencer/. That frame contains
 *   images only (no copy or numbers).
 * - Review: Olivier Fousse's review (lib/testimonials.ts, from codeswifters.com).
 * - Summary line: codeswifters.com/about-us.
 * - Tech stack tags: provided by the CodeSwifters team.
 *
 * Everything else is draft copy written from what the screens show. The
 * metrics are verifiable from the product/review and are deliberately NOT
 * business KPIs. Add real figures (users, bookings, revenue) once the client
 * approves them, and set `timeline` when known (it is hidden until set).
 */
import {
  CalendarDays,
  CreditCard,
  Cloud,
  Globe,
  PlayCircle,
  Server,
  Smartphone,
  Sparkles,
  UserCircle,
} from "lucide-react";
import type { CaseStudy } from "./types";

const A = "/assets/case-studies/WedFluencer";

export const wedfluencer: CaseStudy = {
  slug: "wedfluencer",
  badge: "Wedfluencer — Wedding Tech Platform",
  titleLead: "A social platform built for the",
  titleAccent: "wedding industry's creators",
  summary:
    "Wedfluencer is a social media platform empowering wedding creators to connect, share, and grow their audiences. We designed and built the web and mobile experience, from onboarding and creator profiles to a video-first feed.",
  images: {
    hero: `${A}/hero-mockup.webp`,
    heroAlt:
      "Wedfluencer web and mobile app screens: login, registration, creator profile and video feed",
    icon: `${A}/app-icon.png`,
  },
  meta: {
    services: ["UI/UX Design", "Web App", "Mobile App", "Cloud Infrastructure"],
    industry: "Wedding Tech · Social Media",
    platforms: "Web & Mobile",
    /** Hidden until provided, e.g. "6 months". */
    timeline: undefined,
    stack: ["Next.js", "React Native", "Node.js", "AWS"],
  },
  metrics: [
    { value: "2", label: "Platforms delivered", note: "Web app and mobile app" },
    { value: "4.5/5", label: "Client rating", note: "From the founder's review" },
    { value: "3", label: "Social sign-in options", note: "Google, Apple & Facebook" },
    { value: "4", label: "Core app sections", note: "Explore, Events, Payments, Profile" },
  ],
  challenge: {
    title: "The challenge",
    intro:
      "Wedding creators, from photographers to planners and decorators, needed a home built around how they actually work, not a general-purpose social app.",
    points: [
      "Complex requirements: social feeds, creator profiles, events and payments in a single product",
      "A consistent, user-friendly experience across web and mobile",
      "Media-heavy content (photos and video) that had to feel fast and polished",
      "A foundation that could scale as the creator community grew",
    ],
  },
  solution: {
    title: "The solution",
    intro:
      "We translated the founder's vision into a scalable platform: one design language and one backend, delivered across a web app and a mobile app.",
    points: [
      "Creator profiles with photo and video tabs, plus follower and post stats",
      "A video-first feed with likes, comments, bookmarks and sharing",
      "Social sign-in and a clear onboarding flow to reduce friction",
      "Cloud infrastructure on AWS built to scale with the audience",
    ],
  },
  featuresHeading: {
    lead: "Designed for",
    accent: "creators and couples",
    description:
      "A consistent experience across web and mobile, built around profiles, video and community.",
  },
  features: [
    {
      icon: UserCircle,
      title: "Creator profiles",
      text: "Profiles showcase a creator's posts and videos with follower, following and post counts at a glance.",
      image: `${A}/app-profile.png`,
      alt: "Wedfluencer mobile app creator profile screen",
      kind: "phone",
    },
    {
      icon: PlayCircle,
      title: "Video-first feed",
      text: "Immersive full-screen video with like, comment, bookmark and share actions built for discovery.",
      image: `${A}/app-video-feed.png`,
      alt: "Wedfluencer mobile app video feed",
      kind: "phone",
    },
    {
      icon: Globe,
      title: "Web experience",
      text: "A responsive web app that brings the same creator experience to the browser, from first sign-in to a rich content grid.",
      bullets: [
        "Sign-in and registration with social providers",
        "Creator profile with posts and videos tabs",
        "Responsive content grid built for discovery",
      ],
      image: `${A}/web-screens.png`,
      alt: "Wedfluencer web app login, registration and profile screens",
      kind: "wide",
      zoom: true,
    },
  ],
  highlights: [
    {
      icon: CalendarDays,
      title: "Events",
      text: "A dedicated Events section helps creators and couples coordinate.",
    },
    {
      icon: CreditCard,
      title: "Payments",
      text: "Payments are built into the app navigation, ready for bookings.",
    },
    {
      icon: Sparkles,
      title: "AI-assisted planning",
      text: "Wedding planning collaboration with AI-driven ideas.",
    },
  ],
  architecture: {
    intro: "Two client apps share one API, running on scalable cloud infrastructure.",
    nodes: [
      { icon: Globe, label: "Web app", tech: "Next.js", layer: "Client" },
      { icon: Smartphone, label: "Mobile app", tech: "React Native", layer: "Client" },
      { icon: Server, label: "API layer", tech: "Node.js", layer: "Backend" },
      { icon: Cloud, label: "Infrastructure", tech: "AWS", layer: "Cloud" },
    ],
  },
  reviewCompany: "WEDFluencer",
};
