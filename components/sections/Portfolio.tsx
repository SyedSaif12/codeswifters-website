"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Gauge, Landmark, ShoppingCart, type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { GradientText, SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const projects: {
  icon: LucideIcon;
  client: string;
  title: string;
  metric: string;
  metricLabel: string;
  summary: string;
  detail: string;
  tags: string[];
  gradient: string;
  tone: "violet" | "glow" | "soft";
}[] = [
  {
    icon: Gauge,
    client: "FinTech Platform",
    title: "Real-time trading dashboard",
    metric: "40%",
    metricLabel: "Latency reduction",
    summary:
      "Re-architected a legacy analytics stack into an event-driven platform with streaming updates.",
    detail:
      "Moved to edge-cached Next.js + WebSockets, cutting p95 load time from 1.4s to 0.84s and halving infrastructure cost.",
    tags: ["Next.js", "AWS", "Redis"],
    gradient: "from-brand-violet/25 via-card to-card",
    tone: "violet",
  },
  {
    icon: ShoppingCart,
    client: "D2C Commerce Brand",
    title: "Headless storefront & checkout",
    metric: "$2.5M",
    metricLabel: "Revenue scaled",
    summary:
      "Launched a headless commerce experience with a conversion-focused checkout and personalization.",
    detail:
      "A/B-tested checkout flow lifted conversion by 31% and scaled the brand from $0.8M to $3.3M in annual revenue.",
    tags: ["React", "Stripe", "Node.js"],
    gradient: "from-brand-glow/25 via-card to-card",
    tone: "glow",
  },
  {
    icon: Landmark,
    client: "HealthTech Startup",
    title: "AI-assisted patient portal",
    metric: "3x",
    metricLabel: "Faster onboarding",
    summary:
      "Built a HIPAA-ready portal with an AI assistant that automates intake and scheduling.",
    detail:
      "RAG over clinical docs and automated intake reduced staff admin time by 62% across 14 clinics.",
    tags: ["TypeScript", "OpenAI", "PostgreSQL"],
    gradient: "from-brand-navy/40 via-card to-card",
    tone: "soft",
  },
];

export function Portfolio() {
  return (
    <section
      id="work"
      className="mx-auto max-w-7xl scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="Impact"
        title={
          <>
            Results that <GradientText>move the needle</GradientText>
          </>
        }
        description="A few of the products we've helped launch and scale. Figures shown are illustrative placeholders."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="group relative h-full overflow-hidden">
              <div
                className={cn(
                  "bg-gradient-to-br p-6 pb-8",
                  p.gradient,
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-background/50 text-foreground">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </div>
                <p className="mt-8 text-5xl font-extrabold tracking-tight text-foreground">
                  {p.metric}
                </p>
                <p className="mt-1 text-sm font-medium text-foreground/80">
                  {p.metricLabel}
                </p>
              </div>

              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  {p.client}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t} tone={p.tone}>
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Hover overlay */}
              <div className="pointer-events-none absolute inset-0 flex translate-y-4 flex-col justify-end bg-background/90 p-6 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <p className="text-xs font-medium uppercase tracking-wider text-accent">
                  How we did it
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  {p.detail}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
