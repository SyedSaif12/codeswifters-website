"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projectCategories, projects } from "@/lib/projects";
import { cn } from "@/lib/utils";

/** Filterable portfolio grid for /our-work. */
export function WorkGrid() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>("All");
  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex flex-wrap justify-center gap-2"
      >
        {projectCategories.map((c) => {
          const selected = c === active;
          return (
            <button
              key={c}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(c)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                selected
                  ? "border-transparent bg-accent-gradient text-white shadow-lg shadow-brand-violet/25"
                  : "border-line text-muted hover:border-brand-glow/60 hover:text-foreground",
              )}
            >
              {c}
            </button>
          );
        })}
      </div>

      <motion.ul layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.li
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={p} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </section>
  );
}
