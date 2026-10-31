"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CalendarClock, Check, Wallet } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { GradientText, SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type Option = { id: string; label: string; hint: string };

const platforms: (Option & { cost: number; weeks: number })[] = [
  { id: "web", label: "Web App", hint: "Responsive web application", cost: 18000, weeks: 6 },
  { id: "mobile", label: "Mobile App", hint: "iOS & Android", cost: 24000, weeks: 8 },
  { id: "both", label: "Web + Mobile", hint: "Shared backend & design", cost: 38000, weeks: 12 },
  { id: "saas", label: "SaaS Platform", hint: "Multi-tenant, billing, admin", cost: 52000, weeks: 14 },
];

const depths: (Option & { mult: number; weeksMult: number })[] = [
  { id: "mvp", label: "MVP", hint: "Core features to validate", mult: 1, weeksMult: 1 },
  { id: "standard", label: "Standard", hint: "Full feature set + integrations", mult: 1.8, weeksMult: 1.5 },
  { id: "enterprise", label: "Enterprise", hint: "SSO, audit, scale & compliance", mult: 3, weeksMult: 2.2 },
];

const timelines: (Option & { costMult: number; weeksMult: number })[] = [
  { id: "relaxed", label: "Flexible", hint: "Lower cost, longer runway", costMult: 0.9, weeksMult: 1.3 },
  { id: "standard", label: "Standard", hint: "Balanced delivery", costMult: 1, weeksMult: 1 },
  { id: "rush", label: "Fast-track", hint: "Larger team, priority", costMult: 1.3, weeksMult: 0.7 },
];

const fmt = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);

const roundTo = (n: number, step: number) => Math.round(n / step) * step;

function OptionGroup<T extends Option>({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string;
  options: T[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-3 text-sm font-semibold text-foreground">
        {legend}
      </legend>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((o) => {
          const selected = o.id === value;
          return (
            <label
              key={o.id}
              className={cn(
                "relative flex cursor-pointer items-start gap-3 rounded-xl border p-3.5 transition-all duration-300 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-brand-glow",
                selected
                  ? "border-brand-glow/60 bg-brand-violet/5 shadow-[0_0_24px_-8px] shadow-brand-glow/50"
                  : "border-line hover:border-brand-glow/60",
              )}
            >
              <input
                type="radio"
                name={legend}
                value={o.id}
                checked={selected}
                onChange={() => onChange(o.id)}
                className="sr-only"
              />
              <span
                className={cn(
                  "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border",
                  selected
                    ? "border-brand-glow bg-brand-glow text-white"
                    : "border-muted",
                )}
              >
                {selected && <Check className="h-3 w-3" strokeWidth={3} />}
              </span>
              <span>
                <span className="block text-sm font-medium text-foreground">
                  {o.label}
                </span>
                <span className="block text-xs text-muted">{o.hint}</span>
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export function Estimator() {
  const [platform, setPlatform] = useState("web");
  const [depth, setDepth] = useState("mvp");
  const [timeline, setTimeline] = useState("standard");

  const estimate = useMemo(() => {
    const p = platforms.find((x) => x.id === platform)!;
    const d = depths.find((x) => x.id === depth)!;
    const t = timelines.find((x) => x.id === timeline)!;
    const mid = p.cost * d.mult * t.costMult;
    const weeks = Math.max(3, Math.round(p.weeks * d.weeksMult * t.weeksMult));
    return {
      low: roundTo(mid * 0.85, 500),
      high: roundTo(mid * 1.15, 500),
      weeksLow: weeks,
      weeksHigh: weeks + Math.max(1, Math.round(weeks * 0.2)),
      p,
      d,
      t,
    };
  }, [platform, depth, timeline]);

  const subject = encodeURIComponent("Project inquiry from estimator");
  const body = encodeURIComponent(
    `Hi CodeSwifters,\n\nI'd like to discuss a project:\n- Platform: ${estimate.p.label}\n- Scope: ${estimate.d.label}\n- Timeline: ${estimate.t.label}\n- Estimate: ${fmt(estimate.low)} - ${fmt(estimate.high)} over ${estimate.weeksLow}-${estimate.weeksHigh} weeks\n\nThanks!`,
  );

  return (
    <section
      id="estimator"
      className="relative scroll-mt-20 border-y border-line/80 bg-card/40"
    >
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Project Estimator"
          title={
            <>
              Get a ballpark in <GradientText>30 seconds</GradientText>
            </>
          }
          description="Choose your scope and get an instant, no-commitment estimate. Final quotes follow a short discovery call."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Card hover={false} className="space-y-8 p-6 sm:p-8">
            <OptionGroup
              legend="Platform type"
              options={platforms}
              value={platform}
              onChange={setPlatform}
            />
            <OptionGroup
              legend="Feature depth"
              options={depths}
              value={depth}
              onChange={setDepth}
            />
            <OptionGroup
              legend="Timeline"
              options={timelines}
              value={timeline}
              onChange={setTimeline}
            />
          </Card>

          <Card
            hover={false}
            className="relative flex flex-col overflow-hidden p-6 sm:p-8 lg:sticky lg:top-24 lg:self-start"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-violet/20 blur-3xl"
            />
            <p className="relative text-sm font-medium text-muted">
              Estimated investment
            </p>
            <motion.p
              key={`${estimate.low}-${estimate.high}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              aria-live="polite"
              className="relative mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl"
            >
              <GradientText>
                {fmt(estimate.low)} – {fmt(estimate.high)}
              </GradientText>
            </motion.p>

            <div className="relative mt-6 space-y-3 border-t border-line pt-6 text-sm">
              <div className="flex items-center gap-3 text-foreground/80">
                <CalendarClock className="h-4 w-4 text-accent" />
                <span>
                  {estimate.weeksLow}–{estimate.weeksHigh} weeks delivery
                </span>
              </div>
              <div className="flex items-center gap-3 text-foreground/80">
                <Wallet className="h-4 w-4 text-accent" />
                <span>
                  {estimate.p.label} · {estimate.d.label} · {estimate.t.label}
                </span>
              </div>
            </div>

            <ButtonLink
              href={`mailto:hello@codeswifters.com?subject=${subject}&body=${body}`}
              size="lg"
              className="relative mt-8 w-full"
            >
              Send inquiry <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <p className="relative mt-3 text-center text-xs text-muted">
              Indicative only — not a binding quote.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
