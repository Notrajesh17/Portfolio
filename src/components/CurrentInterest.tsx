import { Reveal } from "@/components/ui/Reveal";

export function CurrentInterest() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <figure className="rounded-3xl border border-line bg-[linear-gradient(180deg,rgba(201,163,106,0.08),transparent_55%)] px-6 py-12 sm:px-12 sm:py-16">
            <p className="font-mono text-[11px] tracking-[0.22em] text-accent uppercase">
              Current engineering interest
            </p>
            <blockquote className="font-display mt-6 max-w-4xl text-3xl leading-tight text-foreground sm:text-5xl">
              Building systems that are fast, reliable, observable, and
              scalable.
            </blockquote>
            <figcaption className="mt-8 max-w-2xl text-base leading-relaxed text-muted">
              I enjoy working close to the infrastructure and backend layer,
              where architecture and engineering decisions directly affect
              system performance and reliability.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
