import Link from "next/link";

type Crumb = { label: string; href?: string };

/** Inner-page hero for the new design: mono breadcrumb, massive left-aligned title. */
export function PageIntro({
  crumbs,
  title,
  description,
  children,
}: {
  crumbs: Crumb[];
  title: React.ReactNode;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-line px-4 pb-10 pt-10 sm:px-6 sm:pb-12 sm:pt-14 lg:px-10">
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted">
          {crumbs.map((c, i) => (
            <li key={c.label} className="flex items-center gap-2">
              {i > 0 && <span className="text-line">/</span>}
              {c.href ? (
                <Link href={c.href} className="hover:text-foreground">
                  {c.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-accent">
                  {c.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <h1 className="mt-8 max-w-6xl text-5xl font-semibold leading-[0.92] tracking-tighter text-foreground sm:text-7xl lg:text-8xl">
        {title}
      </h1>
      <div className="mt-10 grid gap-8 lg:grid-cols-12">
        <p className="max-w-xl text-lg leading-relaxed text-muted lg:col-span-6">
          {description}
        </p>
        {children && (
          <div className="flex flex-wrap items-center gap-4 lg:col-span-5 lg:col-start-8 lg:justify-end">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
