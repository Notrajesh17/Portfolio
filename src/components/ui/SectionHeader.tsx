type SectionHeaderProps = {
  number: string;
  kicker: string;
  title: string;
  description?: string;
};

export function SectionHeader({
  number,
  kicker,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <header className="mb-12 max-w-3xl md:mb-16">
      <div className="mb-5 flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] text-accent uppercase">
        <span>{number}</span>
        <span className="h-px w-8 bg-accent/50" aria-hidden="true" />
        <span>{kicker}</span>
      </div>
      <h2 className="font-display text-4xl leading-[1.1] text-foreground sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
