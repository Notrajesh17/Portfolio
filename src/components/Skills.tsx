import { skillMap } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          number="06"
          kicker="Capability map"
          title="How the stack is organized."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {skillMap.map((group, index) => (
            <Reveal key={group.group} delay={index * 0.04}>
              <article className="h-full rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/30">
                <h3 className="font-mono text-[11px] tracking-[0.22em] text-accent uppercase">
                  {group.group}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                  {group.items.join(" · ")}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
