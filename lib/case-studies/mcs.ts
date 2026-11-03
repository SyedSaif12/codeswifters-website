/**
 * MCS Digitizing case study content.
 *
 * Sources: Figma boards "MCS" (bio-tip case study file). Overview and brand
 * copy are the client's own board text; screens are original-resolution raw
 * images exported from the board into /public/assets/case-studies/mcs/. The
 * stack (React, Node.js) is stated on the Overview board. No client review
 * exists in lib/testimonials.ts for MCS, so none is shown. Metrics are
 * countable from the designs, not business KPIs: add real figures once
 * approved.
 */
import {
  BarChart3,
  Briefcase,
  ClipboardList,
  CreditCard,
  FileText,
  Gauge,
  Layers,
  LayoutDashboard,
  Moon,
  MousePointerClick,
  Palette,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Type,
  UserCog,
  UserRound,
  Users,
  Workflow,
} from "lucide-react";
import type { CaseStudy } from "./types";

const A = "/assets/case-studies/mcs";

export const mcs: CaseStudy = {
  slug: "mcs",
  badge: "MCS Digitizing: Management & CRM Platform",
  titleLead: "An all-in-one CRM that runs the whole",
  titleAccent: "embroidery workflow",
  summary:
    "MCS Digitizing is an all-in-one management and CRM platform for businesses in vector design, digitizing and patchwork services. Orders, tasks, invoicing, payments and client communication live in a single, user-friendly interface.",
  images: {
    hero: `${A}/hero-4k.webp`,
    heroAlt: "MCS portal dashboard, orders table and sign-in screens on laptops",
    icon: `${A}/logo-mark.png`,
    heroShape: "wide",
  },
  meta: {
    services: ["UI/UX Design", "Web Platform", "Mobile App", "CRM"],
    industry: "Embroidery · Digitizing · Vector Design",
    platforms: "Web & Mobile",
    stack: ["React", "Node.js"],
  },
  overview: {
    eyebrow: "Overview",
    titleLead: "One platform for",
    titleAccent: "every order",
    paragraphs: [
      "MCS Digitizing is an all-in-one management and CRM platform built to streamline operations for businesses in vector design, digitizing and patchwork services. The system integrates order management, task assignment, invoicing, payments and client communication within a single, user-friendly interface.",
      "With dedicated roles for Admin, Customer and Employee, it simplifies production workflows, enhances transparency and boosts overall productivity. Designed with React and Node.js, it delivers a fast, secure and scalable solution for managing end-to-end business processes.",
      "The platform also features real-time order tracking, performance monitoring and detailed reporting, enabling managers to gain clear insights into operations and turnaround times.",
    ],
    items: [
      { icon: ShieldCheck, title: "Admin", text: "Oversees orders, customers, invoices, quotations, discount codes, currencies and the team." },
      { icon: UserRound, title: "Customer", text: "Places orders, follows their progress and keeps in touch with the team in one place." },
      { icon: UserCog, title: "Employee", text: "Receives assigned tasks and manages their own details from a mobile-friendly screen." },
    ],
    callout:
      "MCS Digitizing is now helping design and embroidery businesses automate workflows, reduce manual effort and enhance client collaboration. The system improves delivery times, ensures transparent communication and scales effortlessly with growing production demands.",
  },
  metrics: [
    { value: "3", label: "User roles", note: "Admin, Customer and Employee" },
    { value: "9", label: "Management modules", note: "Dashboard to Employees in the sidebar" },
    { value: "3", label: "Service lines", note: "Vector design, digitizing, patchwork" },
    { value: "2", label: "Platforms", note: "Responsive web and mobile" },
  ],
  challenge: {
    title: "The challenge",
    intro:
      "Vector, digitizing and patchwork orders involve a lot of back-and-forth between customers, designers and staff. MCS needed everything in one system.",
    points: [
      "Orders, tasks, invoices and payments handled in separate places",
      "Customers needing clear visibility of where their order stands",
      "Staff assignment and employee management alongside production",
      "Managers lacking insight into performance and turnaround times",
    ],
  },
  solution: {
    title: "The solution",
    intro:
      "We designed one platform with a role for every person involved, and a clean interface that keeps the workflow transparent end to end.",
    points: [
      "A dashboard with active orders, users and completions plus ordering trends",
      "A searchable orders table with type, rush, sew-out and status",
      "Invoices, quotations, discount codes and currencies in one place",
      "Mobile screens for customers and employees on the move",
    ],
  },
  featuresHeading: {
    lead: "Built for",
    accent: "precision and efficiency",
    description: "A technical yet approachable interface across desktop and mobile.",
  },
  features: [
    {
      icon: LayoutDashboard,
      title: "Portal dashboard",
      text: "A welcome panel, headline counts and live charts give admins and customers an instant read on production.",
      bullets: [
        "Active orders, active users and completed orders at a glance",
        "Ordering trends across digitizing, vector and patchwork",
        "Current order weightage as a clear pie chart",
        "Sidebar to Orders, Customers, Invoices, Quotations and more",
      ],
      image: `${A}/portal-dashboard.webp`,
      alt: "MCS portal dashboard with order counts, ordering trends and weightage chart",
      kind: "wide",
    },
    {
      icon: Smartphone,
      title: "Customer dashboard on mobile",
      text: "Active users, pending payment orders, active orders, queue and completed orders as clear cards.",
      image: `${A}/app-dashboard-mobile.webp`,
      alt: "MCS mobile dashboard with order summary cards",
      kind: "phone",
    },
    {
      icon: Briefcase,
      title: "Employee management",
      text: "A dark-mode Update Employee form with national ID, punch and employee codes, salary, status and phone.",
      image: `${A}/app-employee.webp`,
      alt: "MCS Update Employee mobile screen",
      kind: "phone",
    },
  ],
  highlights: [
    { icon: Workflow, title: "Task assignment", text: "Work is assigned to the right employee and tracked to delivery." },
    { icon: CreditCard, title: "Invoicing & payments", text: "Invoices, quotations and payments sit beside the order they belong to." },
    { icon: Gauge, title: "Performance monitoring", text: "Real-time order tracking and reporting on turnaround times." },
  ],
  architecture: {
    heading: "How it works",
    intro: "From a new order to a delivered, invoiced project.",
    nodes: [
      { icon: MousePointerClick, label: "Order", tech: "Customer places it", layer: "Step 1" },
      { icon: Users, label: "Assign", tech: "Task to an employee", layer: "Step 2" },
      { icon: ClipboardList, label: "Track", tech: "Real-time status", layer: "Step 3" },
      { icon: FileText, label: "Invoice", tech: "Pay and report", layer: "Step 4" },
    ],
  },
  brand: {
    eyebrow: "Brand identity",
    titleLead: "Precision, efficiency and",
    titleAccent: "professionalism",
    paragraphs: [
      "The MCS Digitizing brand identity emphasizes precision, efficiency and professionalism through a clean, modern design. Using the Inter typeface and a cool blue-toned palette, it conveys trust and clarity while maintaining a technical yet approachable feel, perfectly aligning with the platform's streamlined workflow experience.",
    ],
    items: [
      { icon: Sparkles, title: "Logo", text: "A crossed-needle X mark, applied to the browser tab, pen, notebook and mug." },
      { icon: Type, title: "Typography", text: "Inter throughout: clean, legible and technical yet approachable." },
      { icon: Palette, title: "Colour", text: "A cool blue-toned palette that conveys trust and clarity." },
      { icon: Layers, title: "Mockups", text: "Dashboard, sign-in and orders screens shown on desktop and laptop displays." },
      { icon: Moon, title: "Light & dark", text: "Light dashboards on desktop and a dark mobile form screen share one identity." },
      { icon: BarChart3, title: "Consistency", text: "One design language from the sign-in screen to every report." },
    ],
  },
  ctaTitle: "Need a platform that streamlines your workflow?",
};
