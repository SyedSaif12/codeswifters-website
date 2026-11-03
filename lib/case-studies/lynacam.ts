/**
 * LYNA Cam case study content.
 *
 * Sources: app screens from /public/assets/case-studies/lynacam/; review from
 * lib/testimonials.ts. Copy is written from what the screens show (cycle
 * tracking, camera food scanner, meal log). Metrics are countable from the
 * product or the review, not business KPIs: add real figures once approved.
 * Tech stack and timeline stay hidden until confirmed.
 */
import {
  Activity,
  Bell,
  Camera,
  HeartPulse,
  Salad,
  ScanLine,
  Sparkles,
  Flower2,
  Palette,
  Smile,
  Type,
} from "lucide-react";
import type { CaseStudy } from "./types";

const A = "/assets/case-studies/lynacam";

export const lynacam: CaseStudy = {
  slug: "lynacam",
  badge: "LYNA Cam: Personal Wellness",
  titleLead: "A cycle-aware wellness app that turns a camera into a",
  titleAccent: "nutrition coach",
  summary:
    "LYNA Cam helps users understand their body day by day. It combines cycle tracking, AI-powered food recognition and a meal log with personalised recommendations. We designed and built the mobile experience and delivered it on time.",
  images: {
    hero: `${A}/figma-hero.webp`,
    heroAlt:
      "LYNA Cam app screens: splash, MyCycle dashboard, food scanner and meal log",
    icon: `${A}/logo.png`,
  },
  meta: {
    services: ["UI/UX Design", "Mobile App", "Personalisation"],
    industry: "Wellness · Health Tech",
    platforms: "Mobile (iOS & Android)",
  },
  overview: {
    eyebrow: "Overview",
    titleLead: "Wellness that",
    titleAccent: "knows your cycle",
    paragraphs: [
      "LYNA Cam helps users understand their body day by day. Onboarding starts with a few quick questions, such as when the last period was and whether there is any pain, to create personalised insights.",
      "The MyCycle dashboard shows the current phase and day, today's lifestyle and nutrition progress, and recommendations like hydration and workout intensity that fit that phase.",
      "A camera scanner recognises everyday food and labels it with key nutrients, while the Meal Log & Analysis screen filters meals by cycle phase with matching tips.",
    ],
    items: [
      { icon: Smile, title: "Know your cycle", text: "A short onboarding that tailors the app to each person." },
      { icon: ScanLine, title: "Scan your food", text: "Foods are identified with a confidence score and nutrients such as potassium and vitamin C." },
      { icon: Salad, title: "Eat for your phase", text: "Menstrual-phase suggestions such as spinach, lentils, beetroot and wild salmon." },
    ],
  },
  brand: {
    eyebrow: "Brand identity",
    titleLead: "Empathy, empowerment and",
    titleAccent: "innovation",
    paragraphs: [
      "The LYNA Cam brand is built on empathy, empowerment and innovation. Its calming visuals, soft gradients and intuitive design reflect care and clarity. The logo symbolizes cyclical harmony, aligning with the app's focus on holistic wellness. Every element is crafted to foster trust, comfort and confidence in daily health journeys.",
    ],
    items: [
      { icon: Flower2, title: "Logo", text: "A petal mark that symbolizes cyclical harmony, shown on a tote bag, hat and jacket." },
      { icon: Type, title: "Typography", text: "Nunito: rounded, soft and approachable." },
      { icon: Palette, title: "Colour & mockups", text: "Deep violet with soft lilac gradients, shown on phones in everyday settings." },
    ],
  },
  metrics: [
    { value: "5/5", label: "Client rating", note: "From the CEO's review" },
    { value: "On time", label: "Delivery", note: "Called out in the client's review" },
    { value: "4", label: "Core screens", note: "Splash, MyCycle, Scanner, Meal log" },
    { value: "3", label: "Daily tracking areas", note: "Cycle, lifestyle and nutrition" },
  ],
  challenge: {
    title: "The challenge",
    intro:
      "Wellness advice is only useful when it fits the person and the moment. LYNA Cam needed an app that felt intuitive on day one while handling a lot of personal data.",
    points: [
      "Making cycle, lifestyle and nutrition data feel simple, not clinical",
      "Recognising everyday food through the camera and surfacing its nutrients",
      "Recommendations that change with the user's cycle phase",
      "Sensitive health context that demands a calm, trustworthy design",
    ],
  },
  solution: {
    title: "The solution",
    intro:
      "We designed a soft, friendly interface where one dashboard ties the cycle, daily habits and meals together.",
    points: [
      "A MyCycle ring showing the current phase and day at a glance",
      "Lifestyle and nutrition cards with daily progress",
      "A live food scanner that labels items and their nutrients",
      "A meal log filterable by cycle phase with phase-aware tips",
    ],
  },
  featuresHeading: {
    lead: "Personal,",
    accent: "visual and simple",
    description: "From a calm home dashboard to a camera that reads your plate.",
  },
  features: [
    {
      icon: HeartPulse,
      title: "From dashboard to scanner to meal log",
      text: "A cycle ring, today's lifestyle and nutrition progress, tailored recommendations and a camera that reads your plate.",
      bullets: [
        "Cycle phase and day count at a glance",
        "Quick access to a symptom check-in",
        "Meals filterable by cycle phase with matching tips",
      ],
      image: `${A}/hero.png`,
      alt: "LYNA Cam splash, MyCycle dashboard, scanner and meal log screens",
      kind: "wide",
    },
  ],
  highlights: [
    { icon: ScanLine, title: "Food scanner", text: "Point the camera and get labelled foods with key nutrients." },
    { icon: Salad, title: "Meal log & analysis", text: "Meals grouped by day and filtered by cycle phase." },
    { icon: Bell, title: "Smart nudges", text: "Timely reminders and recommendations through the day." },
  ],
  architecture: {
    heading: "How it works",
    intro: "Four touchpoints that build a personal picture each day.",
    nodes: [
      { icon: Activity, label: "Track", tech: "MyCycle & lifestyle", layer: "Step 1" },
      { icon: Camera, label: "Scan", tech: "AI food recognition", layer: "Step 2" },
      { icon: Salad, label: "Log", tech: "Meal analysis", layer: "Step 3" },
      { icon: Sparkles, label: "Recommend", tech: "Personalised tips", layer: "Step 4" },
    ],
  },
  reviewCompany: "LYNA Cam",
  ctaTitle: "Have a wellness app in mind?",
};
