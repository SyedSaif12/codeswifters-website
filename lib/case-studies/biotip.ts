/**
 * BioTip eyeApp ("eyeD") case study content.
 *
 * Sources: imagery from /public/assets/case-studies/biotip/ (Figma "bio-tip
 * case study"); review from lib/testimonials.ts. Everything else is draft copy
 * written from what the screens show. Metrics are countable from the product
 * itself, not business KPIs: add real figures (scans, users) once the client
 * approves them. Tech stack and timeline stay hidden until the team confirms.
 */
import {
  Camera,
  History,
  ScanLine,
  ShieldCheck,
  Sparkles,
  UserPlus,
} from "lucide-react";
import type { CaseStudy } from "./types";

const A = "/assets/case-studies/biotip";

export const biotip: CaseStudy = {
  slug: "biotip",
  badge: "BioTip eyeApp: Food Safety Tech",
  titleLead: "A food-freshness scanner that helps people",
  titleAccent: "trust what they eat",
  summary:
    "eyeD is BioTip's mobile app for checking how fresh food is. Users scan a smart sticker with their phone camera and get a clear verdict on the spot. We designed and built the experience from onboarding through to scan history.",
  images: {
    hero: `${A}/hero.png`,
    heroAlt:
      "eyeD app screens: welcome, registration, previous readings and the sticker scanner",
    icon: `${A}/logo.png`,
    heroFit: "contain",
    heroShape: "wide",
  },
  meta: {
    services: ["UI/UX Design", "Mobile App", "App Launch"],
    industry: "Food Safety · Health Tech",
    platforms: "Mobile (iOS & Android)",
  },
  metrics: [
    { value: "5/5", label: "Client rating", note: "From the CEO's review" },
    { value: "3", label: "Freshness verdicts", note: "Fresh, Consume soon, Not fresh" },
    { value: "2", label: "Account types", note: "Business and Individual" },
    { value: "1 tap", label: "To start a scan", note: "From the home navigation" },
  ],
  challenge: {
    title: "The challenge",
    intro:
      "BioTip had a clear product vision: make food freshness something anyone can check in seconds. The hard part was turning that into an app that felt simple.",
    points: [
      "Complex requirements around scanning, results and account handling",
      "A result that is instantly understandable, with no lab-style readouts",
      "Two very different audiences: food businesses and everyday shoppers",
      "A fast route from concept to launch without cutting quality",
    ],
  },
  solution: {
    title: "The solution",
    intro:
      "We designed a friendly, health-first interface where one camera action leads to one clear answer, and built it for a smooth launch.",
    points: [
      "A guided scanner that tells users exactly where to place the sticker",
      "Colour-coded freshness cards so a result reads at a glance",
      "Registration that adapts to Business or Individual users",
      "A previous-readings library so past scans are never lost",
    ],
  },
  featuresHeading: {
    lead: "Built around",
    accent: "one clear answer",
    description:
      "From the first welcome screen to a saved reading, every step is designed to build trust.",
  },
  features: [
    {
      icon: UserPlus,
      title: "Onboarding & registration",
      text: "A welcoming intro and a short sign-up form that lets users choose a Business or Individual account.",
      image: `${A}/screen-signup.png`,
      alt: "eyeD registration screen with Business and Individual account options",
      kind: "phone",
    },
    {
      icon: ScanLine,
      title: "Personal home",
      text: "A friendly greeting, quick profile updates, a user guide and a central button that is always one tap from a scan.",
      image: `${A}/screen-home.png`,
      alt: "eyeD home screen greeting the user with Update Profile, User guide and a central scan button",
      kind: "phone",
    },
    {
      icon: History,
      title: "Previous readings",
      text: "Every scan is saved as a card with its verdict, so users can look back at what they checked.",
      bullets: [
        "Colour-coded Fresh, Consume soon and Not fresh states",
        "Photo-led cards that are quick to scan through",
        "Central scan button always one tap away",
      ],
      image: `${A}/mockup-01.png`,
      alt: "eyeD previous readings screen showing fresh and consume soon cards",
      kind: "wide",
    },
  ],
  highlights: [
    { icon: Camera, title: "Guided camera", text: "On-screen framing shows where to place the sticker for the best result." },
    { icon: ShieldCheck, title: "Trust by design", text: "Clear states replace guesswork about what is safe to eat." },
    { icon: Sparkles, title: "Friendly tone", text: "Playful illustration keeps a serious topic approachable." },
  ],
  architecture: {
    heading: "How it works",
    intro: "Four steps from sign-up to a saved reading.",
    nodes: [
      { icon: UserPlus, label: "Sign up", tech: "Business or Individual", layer: "Step 1" },
      { icon: Camera, label: "Scan sticker", tech: "Guided camera", layer: "Step 2" },
      { icon: ShieldCheck, label: "Get verdict", tech: "Fresh / Consume soon", layer: "Step 3" },
      { icon: History, label: "Review history", tech: "Saved readings", layer: "Step 4" },
    ],
  },
  reviewCompany: "BioTip eyeApp",
};
