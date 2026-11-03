/**
 * NEXUS School Management System case study content.
 *
 * Sources: Figma boards "nexus school" (bio-tip case study file) saved under
 * /public/assets/case-studies/nexus/. The 80% efficiency figure comes from the
 * board's own case-study text. Dashboard imagery from /public/assets/case-studies/nexus/; summary
 * from codeswifters.com/about-us. No client review exists in
 * lib/testimonials.ts for NEXUS, so none is shown. The figures on the dashboard
 * screens (e.g. 124,684 students) are sample design data and are NOT quoted as
 * results. Metrics below are countable from the product design. Add real
 * figures once approved. The stack (ReactJS, Node.js, MySQL, Tailwind CSS) comes from the NEXUS Figma board; timeline stays hidden until confirmed.
 */
import {
  BarChart3,
  CalendarDays,
  LayoutDashboard,
  Receipt,
  ShieldCheck,
  UserCog,
  Users,
  GraduationCap,
  Link2,
  Palette,
  Type,
  Wallet,
} from "lucide-react";
import type { CaseStudy } from "./types";

const A = "/assets/case-studies/nexus";

export const nexus: CaseStudy = {
  slug: "nexus",
  badge: "NEXUS: School Management System",
  titleLead: "One dashboard to run the whole",
  titleAccent: "school day",
  summary:
    "NEXUS is a comprehensive, modern School Management System designed to simplify and digitize the daily operations of educational institutions, from students and attendance to fees and reports.",
  images: {
    hero: `${A}/figma-hero.webp`,
    heroAlt: "NEXUS School management dashboard on a laptop and a desktop display",
    icon: `${A}/logo.png`,
  },
  meta: {
    services: ["UI/UX Design", "Web Application", "Dashboard & Reporting"],
    industry: "Education · SaaS",
    platforms: "Web (responsive)",
    stack: ["ReactJS", "Node.js", "MySQL", "Tailwind CSS"],
  },
  overview: {
    eyebrow: "Overview",
    titleLead: "A unified system for",
    titleAccent: "the whole school",
    paragraphs: [
      "NEXUS is a comprehensive, modern School Management System designed to simplify and digitize the daily operations of educational institutions, from students and attendance to fees and reports.",
      "Administrators work from one dashboard with student counts, attendance, a calendar and paid versus unpaid invoice trends, while dedicated modules cover students, invoices, roles and users, reports and fee structure.",
      "Adding a student captures guardian details and fees in one form, including monthly fees, annual instalments and one-time charges such as admission fees.",
    ],
    items: [
      { icon: GraduationCap, title: "Students", text: "Records, classes and attendance, with an Add Student form for guardians and fee plans." },
      { icon: Wallet, title: "Fees & invoices", text: "Monthly, annual instalment and one-time charges, with paid versus unpaid tracking." },
      { icon: UserCog, title: "Roles & users", text: "Role-based access so each person sees what they need." },
    ],
    callout: "The NEXUS case study reports an 80% improvement in school efficiency.",
  },
  brand: {
    eyebrow: "Brand identity",
    titleLead: "Connection, innovation and",
    titleAccent: "education",
    paragraphs: [
      "The NEXUS logo was designed to reflect connection, innovation and education, the three pillars of the platform. Its clean typography and interlinked icon symbolize collaboration between students, teachers and administrators within a unified system.",
    ],
    items: [
      { icon: Link2, title: "Logo", text: "An interlinked ring mark with the NEXUS wordmark, applied to the browser tab, pen, notebook and mug." },
      { icon: Type, title: "Typography", text: "Plus Jakarta Sans for a clean, friendly and highly legible interface." },
      { icon: Palette, title: "Colour & mockups", text: "Cyan and lime on deep navy, shown on a desktop dashboard, a phone and the login screen." },
    ],
  },
  metrics: [
    { value: "80%", label: "Efficiency improvement", note: "School efficiency gain stated in the NEXUS case study" },
    { value: "4", label: "Headline KPIs", note: "Students, users, paid and unpaid invoices" },
    { value: "5", label: "Admin modules", note: "Students, Invoice, Roles, Reports, Fees" },
    { value: "1", label: "Central dashboard", note: "Everything an administrator needs at a glance" },
  ],
  challenge: {
    title: "The challenge",
    intro:
      "Schools run on many moving parts. Staff were juggling students, attendance, fees and reporting across separate tools and spreadsheets.",
    points: [
      "Information scattered across disconnected systems",
      "Heavy manual paperwork for attendance and invoicing",
      "Little visibility into fees paid and outstanding",
      "A system that had to scale with the number of students",
    ],
  },
  solution: {
    title: "The solution",
    intro:
      "We designed one dashboard that brings daily operations together, so administrators spend less time on admin and more on education.",
    points: [
      "KPI cards for students, users and invoices up front",
      "Attendance tracking filterable by period and grade",
      "An invoice trend chart for paid versus unpaid fees",
      "Role-based user management and a fee structure module",
    ],
  },
  featuresHeading: {
    lead: "Clarity for",
    accent: "administrators",
    description: "Clear data visualisation and simple navigation across every school workflow.",
  },
  features: [
    {
      icon: LayoutDashboard,
      title: "Operations dashboard",
      text: "A single screen summarising the school's students, attendance, calendar and finances.",
      bullets: [
        "Student breakdown by gender in a donut chart",
        "Weekly attendance for present versus absent",
        "Month calendar with day markers for events",
        "Paid versus unpaid invoice trends across the year",
      ],
      image: `${A}/dashboard.png`,
      alt: "NEXUS dashboard with KPI cards, student chart, attendance bars, calendar and invoice trends",
      kind: "wide",
    },
    {
      icon: ShieldCheck,
      title: "Secure login",
      text: "A clean, simple entry point with strong authentication to protect school and student data.",
      image: `${A}/figma-login.webp`,
      alt: "NEXUS login screen shown on a laptop",
      kind: "phone",
    },
  ],
  highlights: [
    { icon: Users, title: "Students & roles", text: "Manage students plus role-based users for staff." },
    { icon: Receipt, title: "Invoices & fees", text: "Track paid and unpaid invoices with a clear fee structure." },
    { icon: CalendarDays, title: "Calendar", text: "Day-to-day scheduling built into the dashboard." },
  ],
  architecture: {
    heading: "Inside the platform",
    intro: "Core modules, one login, one source of truth.",
    nodes: [
      { icon: Users, label: "Students", tech: "Records & attendance", layer: "Module 1" },
      { icon: Receipt, label: "Invoice", tech: "Paid / unpaid", layer: "Module 2" },
      { icon: UserCog, label: "Role & User", tech: "Access control", layer: "Module 3" },
      { icon: BarChart3, label: "Reports", tech: "Insights & fees", layer: "Module 4" },
    ],
  },
  ctaTitle: "Ready to digitise your operations?",
};
