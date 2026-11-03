"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Brain, Cloud, Layout, Palette, Server, type LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { GradientText, SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type Tab = {
  id: string;
  label: string;
  icon: LucideIcon;
  blurb: string;
  items: { name: string; note: string }[];
};

const tabs: Tab[] = [
  {
    id: "frontend",
    label: "Front-End",
    icon: Layout,
    blurb: "Interfaces that feel instant and look unforgettable.",
    items: [
      { name: "Next.js", note: "App Router, RSC, edge rendering" },
      { name: "React", note: "Composable, accessible UI" },
      { name: "TypeScript", note: "End-to-end type safety" },
      { name: "Tailwind CSS", note: "Design-system driven styling" },
      { name: "Framer Motion", note: "Fluid micro-interactions" },
      { name: "React Native", note: "Shared code for iOS & Android" },
    ],
  },
  {
    id: "backend",
    label: "Back-End",
    icon: Server,
    blurb: "APIs and data layers built for reliability under load.",
    items: [
      { name: "Node.js", note: "High-throughput services" },
      { name: "NestJS", note: "Structured, testable architecture" },
      { name: "PostgreSQL", note: "Relational data done right" },
      { name: "Redis", note: "Caching, queues, rate limiting" },
      { name: "GraphQL / tRPC", note: "Typed API contracts" },
      { name: "Stripe", note: "Payments & subscriptions" },
    ],
  },
  {
    id: "design",
    label: "Design",
    icon: Palette,
    blurb: "Research-led design that turns ideas into intuitive products.",
    items: [
      { name: "Figma", note: "Interface design & prototyping" },
      { name: "Design Systems", note: "Consistent, reusable UI" },
      { name: "User Research", note: "Decisions grounded in real users" },
      { name: "Prototyping", note: "Clickable flows before development" },
      { name: "Motion Design", note: "Purposeful micro-interactions" },
      { name: "Accessibility", note: "Inclusive by default" },
    ],
  },
  {
    id: "cloud",
    label: "DevOps",
    icon: Cloud,
    blurb: "Automated, observable infrastructure that scales on demand.",
    items: [
      { name: "AWS", note: "Lambda, ECS, RDS, S3, CloudFront" },
      { name: "Docker", note: "Reproducible environments" },
      { name: "Kubernetes", note: "Orchestration at scale" },
      { name: "Terraform", note: "Infrastructure as code" },
      { name: "GitHub Actions", note: "CI/CD pipelines" },
      { name: "Datadog", note: "Monitoring & alerting" },
    ],
  },
  {
    id: "ai",
    label: "AI / ML",
    icon: Brain,
    blurb: "Practical AI woven into real product workflows.",
    items: [
      { name: "OpenAI & Claude APIs", note: "LLM-powered features" },
      { name: "LangChain", note: "Agents and tool use" },
      { name: "pgvector", note: "Semantic search & RAG" },
      { name: "Python", note: "Data and model pipelines" },
      { name: "Hugging Face", note: "Open-source model hosting" },
      { name: "Vercel AI SDK", note: "Streaming chat UX" },
    ],
  },
];

export function TechStack() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section
      id="stack"
      className="relative scroll-mt-20 border-y border-line/80 bg-card/40"
    >
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tech Stack"
          title={
            <>
              Modern tools, <GradientText>battle-tested</GradientText>
            </>
          }
          description="We choose the right technology for each problem and master it."
        />

        <div
          role="tablist"
          aria-label="Technology categories"
          className="mx-auto mt-12 flex max-w-full flex-wrap justify-center gap-2"
        >
          {tabs.map((t) => {
            const selected = t.id === active;
            return (
              <button
                key={t.id}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={selected}
                aria-controls={`panel-${t.id}`}
                onClick={() => setActive(t.id)}
                className={cn(
                  "relative flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300",
                  selected
                    ? "border-transparent text-foreground"
                    : "border-line text-muted hover:border-brand-glow/60 hover:text-foreground",
                )}
              >
                {selected && (
                  <motion.span
                    layoutId="stack-tab"
                    className="absolute inset-0 -z-10 rounded-full bg-accent-gradient shadow-lg shadow-brand-violet/30"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <t.icon className="h-4 w-4" />
                {t.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            role="tabpanel"
            id={`panel-${current.id}`}
            aria-labelledby={`tab-${current.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mt-10"
          >
            <p className="mb-6 text-center text-muted">{current.blurb}</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {current.items.map((item) => (
                <Card key={item.name} className="p-5">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-brand-glow shadow-[0_0_8px] shadow-brand-glow" />
                    <h3 className="font-semibold text-foreground">{item.name}</h3>
                  </div>
                  <p className="mt-2 pl-5 text-sm text-muted">{item.note}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
