"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/SectionHeading";

const metrics = [
  { value: "350+", label: "Specialized experts" },
  { value: "30+", label: "Countries served" },
  { value: "4.9/5", label: "Client rating" },
];

const terminalLines: { text: string; tone: string }[] = [
  { text: "$ pnpm create codeswifters-app", tone: "text-foreground/80" },
  { text: "✔ Scaffolding Next.js + TypeScript", tone: "text-accent" },
  { text: "✔ Provisioning AWS infrastructure", tone: "text-accent" },
  { text: "✔ Wiring CI/CD + preview deploys", tone: "text-accent" },
  { text: "$ git push origin main", tone: "text-foreground/80" },
  { text: "▲ Deploying to production…", tone: "text-accent" },
  { text: "✔ Live in 47s — p95 latency 82ms", tone: "text-accent" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,var(--glow),transparent),radial-gradient(ellipse_50%_40%_at_90%_30%,var(--glow),transparent)]"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge tone="violet" className="px-3 py-1.5 text-sm">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Now booking Q4 engagements
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            We Architect &amp; Scale{" "}
            <GradientText>Next-Gen Digital Products</GradientText>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-muted"
          >
            From zero-to-one MVPs to platforms serving millions, our senior
            engineers and designers turn ambitious ideas into fast, reliable
            and beautiful software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href="/contact-us" size="lg">
              Book a free call <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/our-work" variant="secondary" size="lg">
              <Play className="h-4 w-4" /> View our work
            </ButtonLink>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-8"
          >
            {metrics.map((m) => (
              <div key={m.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-xs text-muted sm:text-sm">
                  {m.label}
                </dt>
                <dd className="text-2xl font-bold text-foreground sm:text-3xl">
                  {m.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative"
        >
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2rem] bg-accent-gradient-br opacity-40 blur-3xl"
          />
          <div className="overflow-hidden rounded-2xl border border-line bg-card/80 shadow-2xl shadow-brand-violet/10 backdrop-blur-xl">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-brand-violet/80" />
              <span className="ml-3 font-mono text-xs text-muted">
                ~/codeswifters/launch.sh
              </span>
            </div>
            <div className="min-h-72 space-y-2 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
              {terminalLines.map((line, i) => (
                <motion.p
                  key={line.text}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.45, duration: 0.3 }}
                  className={line.tone}
                >
                  {line.text}
                </motion.p>
              ))}
              <motion.span
                aria-hidden
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  delay: 0.8 + terminalLines.length * 0.45,
                  duration: 1,
                  repeat: Infinity,
                }}
                className="inline-block h-4 w-2 translate-y-0.5 bg-brand-glow"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
