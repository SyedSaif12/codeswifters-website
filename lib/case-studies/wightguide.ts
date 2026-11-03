/**
 * Wight Guide case study content.
 *
 * Sources: app screens in /public/assets/case-studies/wightguide/ (no Figma
 * board exists for Wight Guide in the bio-tip case study file; destination
 * names and copy on the screens are sample content); review from
 * lib/testimonials.ts ("Wight Guide"). Metrics are countable from the product,
 * not business KPIs: add real figures once approved.
 */
import {
  Heart,
  MapPin,
  Search,
  Sparkles,
  Star,
  Compass,
  BedDouble,
} from "lucide-react";
import type { CaseStudy } from "./types";

const A = "/assets/case-studies/wightguide";

export const wightguide: CaseStudy = {
  slug: "wightguide",
  badge: "Wight Guide: Travel Discovery",
  titleLead: "A destination discovery app that makes planning",
  titleAccent: "a pleasure",
  summary:
    "Wight Guide helps people discover and explore destinations, with things to do, accommodation and events in one place. We provided UX/UI design and technical guidance, and set out clear milestone plans the whole team could follow.",
  images: {
    hero: `${A}/hero.png`,
    heroAlt: "Wight Guide app: destination detail and favourite destinations screens",
    icon: `${A}/logo.png`,
    heroShape: "wide",
  },
  meta: {
    services: ["UI/UX Design", "Mobile App", "Product Guidance"],
    industry: "Travel · Tourism",
    platforms: "Mobile (iOS & Android)",
  },
  metrics: [
    { value: "5/5", label: "Client rating", note: "From the client's review" },
    { value: "4", label: "Discovery categories", note: "To do, Accommodation, Events, Food" },
    { value: "3", label: "Core tabs", note: "Home, Favourites, Profile" },
    { value: "3", label: "Listing types", note: "Things to do, stays and events" },
  ],
  challenge: {
    title: "The challenge",
    intro:
      "Travellers juggle many sources to decide where to go and what to do. Wight Guide needed one place that inspires and informs.",
    points: [
      "Destination content that is rich but easy to scan",
      "Several kinds of listing (activities, stays, events) in one app",
      "A way to save favourites for later planning",
      "A project that needed clear milestones and technical direction",
    ],
  },
  solution: {
    title: "The solution",
    intro:
      "We designed an image-led, friendly interface and mapped out the product in milestones so the team always knew what came next.",
    points: [
      "Search with quick category chips for what to do, where to stay and events",
      "Popular and recommended destination cards with ratings",
      "A detailed destination page with things to do, price range and map",
      "Favourites tab for saving destinations",
    ],
  },
  featuresHeading: {
    lead: "Designed for",
    accent: "curious travellers",
    description: "Big photography, clear categories and just enough detail to decide.",
  },
  features: [
    {
      icon: Compass,
      title: "Discover & search",
      text: "A search bar with filters, category chips and photo-led Popular and Recommended lists.",
      image: `${A}/home-screen.png`,
      alt: "Wight Guide home screen with search, categories and popular destinations",
      kind: "phone",
    },
    {
      icon: MapPin,
      title: "Destination detail & favourites",
      text: "An about section, things to do, price range, accessibility notes, a map and nearby accommodation, plus a favourites list.",
      bullets: [
        "Curated things to do for each destination",
        "Price range and accessibility details up front",
        "View on map and accommodation suggestions",
      ],
      image: `${A}/hero.png`,
      alt: "Wight Guide destination detail and favourites screens",
      kind: "wide",
    },
  ],
  highlights: [
    { icon: Search, title: "Search & filters", text: "Find destinations fast with search and filter controls." },
    { icon: Heart, title: "Favourites", text: "Save places to come back to when planning." },
    { icon: Star, title: "Ratings", text: "Star ratings help travellers choose with confidence." },
  ],
  architecture: {
    heading: "The traveller journey",
    intro: "From inspiration to a saved plan.",
    nodes: [
      { icon: Sparkles, label: "Discover", tech: "Popular & recommended", layer: "Step 1" },
      { icon: Search, label: "Search", tech: "Filters & categories", layer: "Step 2" },
      { icon: BedDouble, label: "Explore", tech: "Things to do & stays", layer: "Step 3" },
      { icon: Heart, label: "Save", tech: "Favourites", layer: "Step 4" },
    ],
  },
  reviewCompany: "Wight Guide",
  ctaTitle: "Have a travel or discovery app in mind?",
};
