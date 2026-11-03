import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  image,
  visual,
  actions,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  crumbs: Crumb[];
  image?: { src: string; alt: string };
  /** A vector illustration shown in place of `image` */
  visual?: React.ReactNode;
  actions?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line/80">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,var(--glow),transparent)]"
      />
      <div
        className={cn(
          "mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8",
          (image || visual) && "grid items-center gap-12 lg:grid-cols-2",
        )}
      >
        <div>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight aria-hidden className="h-3.5 w-3.5" />}
                  {c.href ? (
                    <Link href={c.href} className="hover:text-accent">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-foreground">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <Badge tone="violet">{eyebrow}</Badge>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">{description}</p>
          {actions && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div>}
        </div>

        {visual && (
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2rem] bg-accent-gradient-br opacity-25 blur-3xl"
            />
            {visual}
          </div>
        )}

        {!visual && image && (
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2rem] bg-accent-gradient-br opacity-25 blur-3xl"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-card/60 backdrop-blur-xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-contain p-4"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
