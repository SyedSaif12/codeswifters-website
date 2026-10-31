import Image from "next/image";
import { cn } from "@/lib/utils";

// Source art is 370x111. Rendered 40px tall so the aspect ratio is preserved
// (a literal 160x40 box would stretch it).
const WIDTH = 133;
const HEIGHT = 40;

/**
 * Brand logo. Both variants are rendered and swapped with CSS (`dark:` variant),
 * so the right one shows instantly with no theme-hydration flash.
 * - logo.png      → navy wordmark, for Light mode
 * - logo-dark.png → white wordmark, for Dark mode
 */
export function Logo({ className }: { className?: string }) {
  return (
    <>
      <Image
        src="/assets/brand/logo.png"
        alt="CodeSwifters"
        width={WIDTH}
        height={HEIGHT}
        className={cn("h-10 w-auto dark:hidden", className)}
      />
      <Image
        src="/assets/brand/logo-dark.png"
        alt=""
        aria-hidden
        width={WIDTH}
        height={HEIGHT}
        className={cn("hidden h-10 w-auto dark:block", className)}
      />
    </>
  );
}
