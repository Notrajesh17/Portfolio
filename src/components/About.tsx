import { education, coreTechnologies } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          number="01"
          kicker="Profile"
          title="Engineering with production in mind."
        />

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal>
            <div className="space-y-6 text-lg leading-relaxed text-muted">
              <p>
                Rajesh Runiwal is a Senior Software Engineer with experience
                building scalable backend systems, cloud-native applications,
                microservices, and distributed systems.
              </p>
              <p>
                The work sits close to architecture and infrastructure: service
                boundaries, data paths, release quality, and the systems that
                keep traffic moving when the product is live.
              </p>
            </div>

            <div className="mt-10">
              <p className="mb-4 font-mono text-[11px] tracking-[0.2em] text-faint uppercase">
                Core stack
              </p>
              <ul className="flex flex-wrap gap-2">
                {coreTechnologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-xs text-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <article className="relative overflow-hidden rounded-2xl border border-line bg-surface p-7">
              <p className="font-mono text-[11px] tracking-[0.22em] text-accent uppercase">
                Education
              </p>
              <h3 className="font-display mt-5 text-2xl leading-snug text-foreground sm:text-3xl">
                {education.school}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {education.degree}
              </p>
              <div className="mt-8 border-t border-line pt-6">
                <p className="font-mono text-[10px] tracking-[0.2em] text-faint uppercase">
                  Tenure
                </p>
                <p className="font-display mt-2 text-2xl text-accent">
                  {education.period}
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
