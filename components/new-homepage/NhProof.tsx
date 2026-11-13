import { Eyebrow } from "./Frame";

type Fact = { value: string; label: string; note: string };

const spans = ["lg:col-span-5", "lg:col-span-3", "lg:col-span-2", "lg:col-span-2"];

/** Agency numbers: raw rules and an uneven 5 / 3 / 2 / 2 split. Every figure is real. */
export function NhProof({ facts }: { facts: Fact[] }) {
  return (
    <section className="border-b border-line px-4 pb-20 pt-24 sm:px-6 lg:px-10">
      <Eyebrow index="05">By the numbers</Eyebrow>
      <dl className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-12">
        {facts.map((f, i) => (
          <div
            key={f.label}
            className={`border-t border-foreground pt-4 ${spans[i % spans.length]}`}
          >
            <dd
              className={`font-semibold leading-[0.85] tracking-tighter text-foreground tabular-nums ${
                i === 0 ? "text-7xl sm:text-8xl lg:text-9xl" : "text-6xl sm:text-7xl"
              }`}
            >
              {f.value}
            </dd>
            <dt className="mt-4 font-mono text-xs uppercase tracking-widest text-foreground">
              {f.label}
            </dt>
            <dd className="mt-1 max-w-[16rem] text-sm text-muted">{f.note}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
