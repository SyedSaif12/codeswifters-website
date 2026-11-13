import Image from "next/image";
import { cn } from "@/lib/utils";

/** Mono eyebrow label used above every section heading. */
export function Eyebrow({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <p className="font-mono text-xs uppercase tracking-widest text-muted">
      <span className="text-accent">{index}</span>
      <span className="mx-2 text-line">/</span>
      {children}
    </p>
  );
}

/** Flat window chrome: hairline border, a title bar with a label, no shadow. */
export function Frame({
  label,
  src,
  alt,
  aspect = "aspect-[1713/1071]",
  sizes,
  priority,
  position = "object-top",
  className,
}: {
  label: string;
  src: string;
  alt: string;
  aspect?: string;
  sizes: string;
  priority?: boolean;
  position?: string;
  className?: string;
}) {
  return (
    <figure className={cn("overflow-hidden border border-line bg-card", className)}>
      <figcaption className="flex h-8 items-center gap-2 border-b border-line px-3">
        <span className="h-2 w-2 bg-line" />
        <span className="h-2 w-2 bg-line" />
        <span className="h-2 w-2 bg-line" />
        <span className="ml-2 truncate font-mono text-[11px] text-muted">
          {label}
        </span>
      </figcaption>
      <div className={cn("relative w-full bg-white", aspect)}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          quality={90}
          priority={priority}
          className={cn("object-cover", position)}
        />
      </div>
    </figure>
  );
}
