import { buildingInterests } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ThingsILikeBuilding() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          number="07"
          kicker="Focus"
          title="Things I like building."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {buildingInterests.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.03}>
              <article className="h-full rounded-2xl border border-line bg-surface p-6 transition-transform duration-500 hover:-translate-y-1 hover:border-accent/35">
                <h3 className="text-lg text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.line}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
