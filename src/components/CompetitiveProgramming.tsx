"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { competitiveProgramming } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

function Rating({ value }: { value: number }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setN(value);
      return;
    }
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 900);
      setN(Math.round(value * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce, value]);

  return (
    <p ref={ref} className="font-display text-5xl tabular-nums text-foreground">
      {n}
    </p>
  );
}

export function CompetitiveProgramming() {
  return (
    <section id="achievements" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          number="08"
          kicker="Problem solving"
          title="Competitive programming as an engineering craft."
          description="Peak ratings only. No invented badges, contests, or rankings."
        />
        <Reveal>
          <ul className="grid gap-4 md:grid-cols-3">
            {competitiveProgramming.map((item) => (
              <li key={item.platform}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-accent/40"
                >
                  <p className="font-mono text-[11px] tracking-[0.2em] text-faint uppercase">
                    {item.platform}
                  </p>
                  <p className="mt-4 text-xl text-accent">{item.rank}</p>
                  <div className="mt-8 border-t border-line pt-5">
                    <p className="font-mono text-[10px] tracking-[0.18em] text-faint uppercase">
                      {item.label}
                    </p>
                    <Rating value={item.rating} />
                    <p className="mt-3 font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
                      View profile
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
