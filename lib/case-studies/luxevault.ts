/**
 * Luxe Vault case study content.
 *
 * Sources: Figma boards "luxe vault" (bio-tip case study file), saved under
 * /public/assets/case-studies/luxevault/; the board describes role-based
 * access, real-time bidding and an admin moderation system. App screens from /public/assets/case-studies/luxevault/ (the product
 * names and copy in the screens are placeholder content); summary from
 * codeswifters.com/about-us; review from lib/testimonials.ts. Metrics are
 * countable from the product or taken from the review, not business KPIs: add
 * real figures once approved. Tech stack and timeline stay hidden until
 * confirmed.
 */
import {
  CircleDollarSign,
  Coins,
  Gavel,
  Gem,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Palette,
  Timer,
  Type,
  Users,
} from "lucide-react";
import type { CaseStudy } from "./types";

const A = "/assets/case-studies/luxevault";

export const luxevault: CaseStudy = {
  slug: "luxevault",
  badge: "Luxe Vault: Authenticated Luxury Trading",
  titleLead: "The digital standard for",
  titleAccent: "authenticated trading",
  summary:
    "Luxe Vault sets the digital standard for authenticated trading. We designed a jewelry-grade mobile marketplace covering live auctions, new arrivals and a polished buying flow, and delivered the first milestone on time.",
  images: {
    hero: `${A}/figma-hero.webp`,
    heroAlt: "Luxe Vault app screens: new arrivals, explore with live auctions, and cart",
    icon: `${A}/logo.png`,
  },
  meta: {
    services: ["UI/UX Design", "Mobile App", "Marketplace"],
    industry: "Luxury · Jewelry Marketplace",
    platforms: "Mobile (iOS & Android)",
  },
  overview: {
    eyebrow: "Overview",
    titleLead: "Know the true value of",
    titleAccent: "gold and gems",
    paragraphs: [
      "Luxe Vault sets the digital standard for authenticated trading. The mobile app invites buyers to explore, bid and invest confidently with transparent, real-time appraisal and market data.",
      "Behind it, an admin dashboard tracks total sales, active auctions, product views and subscriptions, with a live auction view showing the highest bids and the time remaining.",
      "Individual users and administrators have separate roles, and bidding runs in real time with secure transaction handling.",
    ],
    items: [
      { icon: Timer, title: "Real-time bidding", text: "Countdown-driven auctions with the highest bids always visible." },
      { icon: ShieldCheck, title: "Admin moderation", text: "Verified sellers, product verification and post-auction management." },
      { icon: Users, title: "Role-based access", text: "Separate experiences for individual users and administrators." },
    ],
  },
  brand: {
    eyebrow: "Brand identity",
    titleLead: "Designed to feel like",
    titleAccent: "fine jewelry",
    paragraphs: [
      "The Luxe Vault identity pairs a copper gem-in-a-ring mark and a light serif wordmark with a deep espresso brown. Elegant editorial typography and warm neutrals carry the same premium finish from the mobile app through to the admin dashboard.",
    ],
    items: [
      { icon: Gem, title: "Logo", text: "A gem set within a ring, paired with a light serif wordmark." },
      { icon: Type, title: "Typography", text: "Elegant serif headlines for editorial moments such as New Arrival." },
      { icon: Palette, title: "Colour", text: "Copper accents on espresso brown with soft, warm neutrals." },
    ],
  },
  metrics: [
    { value: "5/5", label: "Client rating", note: "From the Managing Director's review" },
    { value: "M1", label: "Delivered on time", note: "First milestone, with more phases to follow" },
    { value: "5", label: "Karat options", note: "18K to 24K selectable per product" },
    { value: "3", label: "Ways to shop", note: "Live auctions, new arrivals, search" },
  ],
  challenge: {
    title: "The challenge",
    intro:
      "Buyers of high-value pieces need to feel certain. The app had to look and feel as premium as the goods while making buying and bidding effortless.",
    points: [
      "Trust and authenticity at the centre of every screen",
      "Auctions, fixed-price browsing and a cart in a single experience",
      "Rich product detail such as karat, metal type and certification",
      "A phased roadmap that needed clear, milestone-based delivery",
    ],
  },
  solution: {
    title: "The solution",
    intro:
      "We built a warm, editorial mobile marketplace where discovery, bidding and checkout share one refined design language.",
    points: [
      "An Explore home with a live gold price ticker and active auctions",
      "New Arrivals grid with search, sort, filters and ratings",
      "Product pages with karat selector and certification details",
      "Cart and wallet balance with a clear path to checkout",
    ],
  },
  featuresHeading: {
    lead: "Designed to feel",
    accent: "like fine jewelry",
    description:
      "Elegant typography, soft neutrals and a copper accent give every screen a premium finish.",
  },
  features: [
    {
      icon: Gavel,
      title: "Explore & live auctions",
      text: "A gold price ticker, countdown-driven auction cards and curated new arrivals on the home screen.",
      image: `${A}/explore.png`,
      alt: "Luxe Vault Explore screen with gold price and active auctions",
      kind: "phone",
    },
    {
      icon: Gem,
      title: "Product detail",
      text: "Large imagery, ratings, karat options and expandable metal, certification and vendor details.",
      image: `${A}/product-detail.png`,
      alt: "Luxe Vault product page for a gold ring with karat selector and add to cart",
      kind: "phone",
    },
    {
      icon: ShieldCheck,
      title: "Admin & moderation dashboard",
      text: "Behind the app sits an admin-driven moderation system for verified sellers, orders and live bidding.",
      bullets: [
        "Role-based access for individual users and administrators",
        "Real-time bidding with secure transaction handling",
        "Product verification and post-auction management",
      ],
      image: `${A}/figma-admin-dashboard.webp`,
      alt: "Luxe Vault admin dashboard with auctions, views and sales charts",
      kind: "wide",
    },
  ],
  highlights: [
    { icon: Coins, title: "Live gold price", text: "A XAU/USD ticker keeps buyers informed at a glance." },
    { icon: ShoppingCart, title: "Cart & wallet", text: "Quantities, delivery address prompt and wallet balance." },
    { icon: Search, title: "Search & filters", text: "Find pieces fast with search, sort and filter controls." },
  ],
  architecture: {
    heading: "The buying journey",
    intro: "From discovery to checkout in four steps.",
    nodes: [
      { icon: Sparkles, label: "Explore", tech: "Auctions & arrivals", layer: "Step 1" },
      { icon: Search, label: "Browse", tech: "Search & filters", layer: "Step 2" },
      { icon: Gem, label: "Choose", tech: "Karat & certification", layer: "Step 3" },
      { icon: CircleDollarSign, label: "Checkout", tech: "Cart & wallet", layer: "Step 4" },
    ],
  },
  reviewCompany: "Lux Vault",
  ctaTitle: "Planning a marketplace of your own?",
};
