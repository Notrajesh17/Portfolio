"use client";

import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import type { Project } from "@/lib/data";

type ProjectCardProps = {
  project: Project;
  index: number;
  open: boolean;
  onToggle: () => void;
};

export function ProjectCard({
  project,
  index,
  open,
  onToggle,
}: ProjectCardProps) {
  const headingId = `${project.id}-heading`;
  const panelId = `${project.id}-panel`;

  return (
    <article className="group border-t border-line py-10 transition-colors first:border-t-0 md:py-14">
      <div className="grid gap-6 lg:grid-cols-[0.28fr_1fr] lg:gap-10">
        <p className="font-mono text-[11px] tracking-[0.2em] text-faint uppercase">
          {String(index + 1).padStart(2, "0")}
          <span className="mt-2 block text-muted">{project.period}</span>
        </p>

        <div>
          <div className="flex items-start justify-between gap-4">
            <h3
              id={headingId}
              className="font-display text-3xl leading-tight text-foreground sm:text-4xl"
            >
              {project.name}
            </h3>
            <button
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={onToggle}
              className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line transition-colors group-hover:border-accent/40 hover:bg-accent-soft"
            >
              <Plus
                className={`h-4 w-4 transition-transform ${open ? "rotate-45" : ""}`}
                aria-hidden="true"
              />
              <span className="sr-only">
                {open ? "Hide" : "Show"} details for {project.name}
              </span>
            </button>
          </div>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
            {project.description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-line px-3 py-1 font-mono text-[11px] tracking-wide text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>

          <AnimatePresence initial={false}>
            {open ? (
              <motion.div
                id={panelId}
                role="region"
                aria-labelledby={headingId}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {project.details.map((detail) => (
                    <li
                      key={detail}
                      className="rounded-xl border border-line bg-surface px-4 py-3 text-sm text-foreground"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </article>
  );
}
