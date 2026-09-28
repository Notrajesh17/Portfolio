"use client";

import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import type { Experience } from "@/lib/data";

type ExperienceCardProps = {
  experience: Experience;
  index: number;
  open: boolean;
  onToggle: () => void;
};

export function ExperienceCard({
  experience,
  index,
  open,
  onToggle,
}: ExperienceCardProps) {
  const headingId = `${experience.id}-heading`;
  const panelId = `${experience.id}-panel`;

  return (
    <article className="relative border-b border-line py-8 md:py-10">
      <div className="absolute top-10 -left-[1.15rem] hidden h-3 w-3 rounded-full border border-accent bg-background md:block" />

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl">
          <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
            {String(index + 1).padStart(2, "0")} / {experience.period}
          </p>
          <h3 id={headingId} className="mt-3 text-2xl text-foreground sm:text-3xl">
            {experience.role}
          </h3>
          <p className="mt-2 text-muted">{experience.company}</p>
          <p className="mt-1 font-mono text-xs text-faint">{experience.location}</p>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="inline-flex items-center gap-2 self-start rounded-full border border-line px-4 py-2 font-mono text-[11px] tracking-[0.16em] text-foreground uppercase transition-colors hover:border-accent/50 hover:bg-accent-soft"
        >
          {open ? "Collapse" : "Expand"}
          <ChevronDown
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={headingId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="max-w-3xl pt-6">
              {experience.description ? (
                <p className="text-base leading-relaxed text-muted">
                  {experience.description}
                </p>
              ) : null}
              <ul className="mt-5 space-y-2.5">
                {experience.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-foreground/90"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}
