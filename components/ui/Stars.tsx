import { Star } from "lucide-react";

/** 5 Electric Violet stars; supports half ratings (e.g. 4.5). */
export function Stars({ rating }: { rating: number }) {
  return (
    <div
      role="img"
      aria-label={`Rated ${rating} out of 5`}
      className="flex gap-0.5"
    >
      {Array.from({ length: 5 }, (_, i) => {
        const fill = Math.max(0, Math.min(1, rating - i));
        return (
          <span key={i} className="relative inline-block h-4 w-4">
            <Star
              aria-hidden
              className="absolute inset-0 h-4 w-4 text-brand-violet/30"
            />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star
                aria-hidden
                className="h-4 w-4 fill-brand-violet text-brand-violet"
              />
            </span>
          </span>
        );
      })}
    </div>
  );
}
