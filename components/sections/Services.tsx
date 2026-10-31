"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Cloud,
  Code2,
  Palette,
  ShieldCheck,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { GradientText, SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const services: {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  span: string;
  accent: string;
}[] = [
  {
    icon: Code2,
    title: "Web Platforms & SaaS",
    description:
      "High-performance, SEO-ready web applications and multi-tenant SaaS products built to scale from day one.",
    tags: ["Next.js", "TypeScript", "Node.js"],
    span: "lg:col-span-2",
    accent: "text-accent bg-brand-violet/10",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Cross-platform iOS & Android apps with native-grade UX.",
    tags: ["React Native", "Expo"],
    span: "",
    accent: "text-accent bg-brand-violet/10",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Infrastructure as code, CI/CD and observability that never sleeps.",
    tags: ["AWS", "Docker", "Terraform"],
    span: "",
    accent: "text-accent bg-brand-violet/10",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "LLM-powered features, RAG pipelines and intelligent workflows integrated into your product.",
    tags: ["OpenAI", "Python", "pgvector"],
    span: "lg:col-span-2",
    accent: "text-accent bg-brand-violet/10",
  },
  {
    icon: Palette,
    title: "Product Design",
    description: "Research-led UI/UX and design systems that convert.",
    tags: ["Figma", "Design Systems"],
    span: "",
    accent: "text-accent bg-brand-violet/10",
  },
  {
    icon: ShieldCheck,
    title: "QA & Security",
    description: "Automated testing, audits and compliance-ready delivery.",
    tags: ["Playwright", "OWASP"],
    span: "",
    accent: "text-accent bg-brand-violet/10",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-7xl scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="Services"
        title={
          <>
            Everything to <GradientText>build, launch &amp; scale</GradientText>
          </>
        }
        description="Full-cycle product engineering under one roof — strategy, design, development and operations."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(
          ({ icon: Icon, title, description, tags, span, accent }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className={cn(span)}
            >
              <Card className="flex h-full flex-col p-6">
                <div
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-xl ring-1 ring-line",
                    accent,
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ),
        )}
      </div>
    </section>
  );
}
