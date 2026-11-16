"use client";

import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Eyebrow } from "@/components/new-homepage/Frame";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

const inputClass =
  "w-full rounded-none border border-line bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted transition-colors hover:border-muted focus:border-brand-violet focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-glow";

const labelClass =
  "mb-2 block font-mono text-xs uppercase tracking-widest text-muted";

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
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const rows = [
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "Phone", value: site.phone, href: site.phoneHref },
    ...site.offices.map((o) => ({
      label: o.country === "Canada" ? "Milton, CA" : "Karachi, PK",
      value: o.address,
      href: undefined as string | undefined,
    })),
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-b border-line px-4 py-10 sm:py-14 sm:px-6 lg:px-10"
    >
      <div className="grid gap-16 lg:grid-cols-12">
        {/* Details: 5 */}
        <div className="lg:col-span-5">
          <Eyebrow index="01">Reach us</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-tighter text-foreground sm:text-5xl">
            We reply within one business day.
          </h2>
          <ul className="mt-10 border-t border-line">
            {rows.map((r) => {
              const inner = (
                <>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted group-hover:text-white/70">
                    {r.label}
                  </span>
                  <span className="mt-1 block break-words text-lg font-medium tracking-tight">
                    {r.value}
                  </span>
                </>
              );
              return (
                <li key={r.label} className="border-b border-line">
                  {r.href ? (
                    <a
                      href={r.href}
                      className="group block py-5 transition-colors hover:bg-brand-purple hover:px-4 hover:text-white"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="group py-5">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Form: 7 */}
        <form
          onSubmit={onSubmit}
          className="space-y-6 border border-line bg-card p-6 sm:p-10 lg:col-span-7"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>
                Name
              </label>
              <input id="name" name="name" required placeholder="Jane Doe" className={inputClass} />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jane@company.com"
                className={inputClass}
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className={labelClass}>
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="What are you building, and what does success look like?"
              className={inputClass}
            />
          </div>
          <Button type="submit" size="lg" className="w-full sm:w-auto">
            <Send className="h-4 w-4" /> Send message
          </Button>
          {sent && (
            <p role="status" className="text-sm text-accent">
              Opening your email app to send the message…
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
