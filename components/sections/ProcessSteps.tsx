import {
  ClipboardList,
  Code2,
  PenTool,
  Rocket,
  Route,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { GradientText, SectionHeading } from "@/components/ui/SectionHeading";

// The six stages of the CodeSwifters delivery process (from the live site).
const steps: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: ClipboardList,
    title: "Requirement Analysis",
    text: "We dig into your goals, users and constraints to define what success looks like.",
  },
  {
    icon: Route,
    title: "Planning",
    text: "Scope, milestones and architecture mapped into a clear, shared roadmap.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    text: "Research-led interfaces and prototypes you can react to before we build.",
  },
  {
    icon: Code2,
    title: "Development",
    text: "Clean, scalable code delivered in regular increments you can review.",
  },
  {
    icon: ShieldCheck,
    title: "Testing & QA",
    text: "Rigorous testing across devices and scenarios so launch day is uneventful.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    text: "Smooth release, monitoring and post-launch support to keep you running.",
  },
];

export function ProcessSteps() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <SectionHeading
        eyebrow="How we work"
        title={
          <>
            Our <GradientText>Development Process</GradientText>
          </>
        }
        description="A proven six-step path from first conversation to production."
      />
      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map(({ icon: Icon, title, text }, i) => (
          <li key={title}>
            <Card className="h-full p-6">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-violet/10 text-accent ring-1 ring-line">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
            </Card>
          </li>
        ))}
      </ol>
    </section>
  );
}
