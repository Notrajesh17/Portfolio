"use client";

import { useState } from "react";
import { experiences } from "@/lib/data";
import { ExperienceCard } from "@/components/ExperienceCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ExperienceTimeline() {
  const [openId, setOpenId] = useState<string | null>(experiences[0]?.id ?? null);

  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          number="03"
          kicker="Experience"
          title="Roles shaped by live systems."
        />
        <Reveal>
          <div className="md:border-l md:border-line md:pl-10">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
                open={openId === experience.id}
                onToggle={() =>
                  setOpenId((current) =>
                    current === experience.id ? null : experience.id,
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
