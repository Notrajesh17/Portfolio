"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ProjectShowcase() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          number="05"
          kicker="Selected work"
          title="Products and systems, not a card grid."
        />
        <Reveal>
          <div className="rounded-2xl border border-line bg-background/40 px-5 sm:px-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                open={openId === project.id}
                onToggle={() =>
                  setOpenId((current) =>
                    current === project.id ? null : project.id,
                  )
                }
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
