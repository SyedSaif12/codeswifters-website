"use client";

import { useState, type FormEvent } from "react";
import { CalendarCheck, Mail, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GradientText, SectionHeading } from "@/components/ui/SectionHeading";

const inputClass =
  "w-full rounded-xl border border-line bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted transition-colors focus:border-brand-glow/60 focus:outline-none focus:ring-2 focus:ring-brand-glow/20";

export function Contact() {
  const [sent, setSent] = useState(false);

  // No backend yet: opens the visitor's mail client with the message prefilled.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`New inquiry from ${f.get("name")}`);
    const body = encodeURIComponent(
      `${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`,
    );
    window.location.href = `mailto:hello@codeswifters.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl scroll-mt-20 px-4 py-24 sm:px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build <GradientText>what&apos;s next</GradientText>
          </>
        }
        description="Tell us about your project. We reply within one business day."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {[
            { icon: Mail, title: "Email us", text: "hello@codeswifters.com" },
            { icon: Clock, title: "Response time", text: "Within 1 business day" },
            { icon: CalendarCheck, title: "Free strategy call", text: "30 minutes, no strings attached" },
          ].map(({ icon: Icon, title, text }) => (
            <Card key={title} className="flex items-center gap-4 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-violet/10 text-accent ring-1 ring-line">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-foreground">{title}</p>
                <p className="text-sm text-muted">{text}</p>
              </div>
            </Card>
          ))}
        </div>

        <Card hover={false} className="p-6 sm:p-8">
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm text-foreground/80">
                  Name
                </label>
                <input id="name" name="name" required placeholder="Jane Doe" className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm text-foreground/80">
                  Email
                </label>
                <input id="email" name="email" type="email" required placeholder="jane@company.com" className={inputClass} />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-foreground/80">
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="What are you building, and what does success look like?"
                className={inputClass}
              />
            </div>
            <Button type="submit" size="lg" className="w-full">
              <Send className="h-4 w-4" /> Send message
            </Button>
            {sent && (
              <p role="status" className="text-center text-sm text-accent">
                Opening your email app to send the message…
              </p>
            )}
          </form>
        </Card>
      </div>
    </section>
  );
}
