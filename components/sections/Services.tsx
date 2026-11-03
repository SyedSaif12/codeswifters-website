"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Boxes, Bot, Globe, LayoutDashboard, Smartphone, type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { GradientText, SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const services: {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  href: string;
  span: string;
}[] = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Pixel-perfect websites that are fast, secure, and optimized for conversion, whether it's a landing page or an enterprise platform.",
    tags: ["Next.js", "React", "SEO-ready"],
    href: "/services/web-development",
    span: "lg:col-span-2",
  },
  {
    icon: LayoutDashboard,
    title: "Web Applications",
    description:
      "Robust, scalable and secure web apps, from dashboards and CRMs to customer portals and SaaS products.",
    tags: ["Dashboards", "APIs", "Cloud-ready"],
    href: "/services/web-applications",
    span: "lg:col-span-2",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "From iOS to Android, we craft intuitive, high-performing apps that bring your ideas to users' fingertips.",
    tags: ["iOS", "Android", "Flutter"],
    href: "/services/mobile-development",
    span: "lg:col-span-2",
  },
  {
    icon: Boxes,
    title: "Custom Software Solutions",
    description:
      "Tailored software built from the ground up to fit your business goals, streamline workflows, and scale with your growth.",
    tags: ["Workflow automation", "Integrations"],
    href: "/services#custom-software",
    span: "lg:col-span-3",
  },
  {
    icon: Bot,
    title: "AI-Powered Solutions",
    description:
      "Leverage artificial intelligence to build smarter products, automate workflows, and unlock data-driven insights for your business.",
    tags: ["Automation", "AI features", "Insights"],
    href: "/services#ai",
    span: "lg:col-span-3",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <SectionHeading
        eyebrow="What We Offer"
        title={
          <>
            Everything to <GradientText>build, launch &amp; scale</GradientText>
          </>
        }
        description="We are a full-cycle product development company that combines creative thinking with technical expertise to solve real problems and drive business growth."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {services.map(({ icon: Icon, title, description, tags, href, span }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className={cn(span, i === 2 && "sm:col-span-2")}
          >
            <Link
              href={href}
              className="group block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-glow"
            >
              <Card className="flex h-full flex-col p-6">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-violet/10 text-accent ring-1 ring-line">
                    <Icon className="h-5 w-5" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
