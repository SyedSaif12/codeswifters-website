import { Eyebrow } from "@/components/new-homepage/Frame";
import { processSteps } from "@/lib/process";

/** The six delivery stages as a hairline ledger; rows flood purple on hover. */
export function ProcessSteps({ index = "04" }: { index?: string }) {
  return (
    <section className="border-b border-line px-4 py-10 sm:py-14 sm:px-6 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Eyebrow index={index}>How we work</Eyebrow>
          <h2 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-tighter text-foreground sm:text-5xl">
            Six steps from first conversation to production.
          </h2>
        </div>
        <ol className="border-t border-line lg:col-span-8">
          {processSteps.map((s, i) => (
            <li
              key={s.title}
              className="grid gap-2 border-b border-line py-6 transition-colors hover:bg-brand-purple hover:text-white sm:grid-cols-[3rem_14rem_1fr] sm:gap-6 sm:px-4"
            >
              <span className="font-mono text-xs text-muted [li:hover>&]:text-white/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted [li:hover>&]:text-white/80">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
