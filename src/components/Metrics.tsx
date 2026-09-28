"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { metrics } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

function AnimatedValue({
  value,
  suffix = "",
  from,
  display,
}: {
  value: number;
  suffix?: string;
  from?: number;
  display?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(from ?? 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setShown(value);
      return;
    }
    const start = performance.now();
    const duration = 1100;
    const origin = from ?? 0;
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setShown(Math.round(origin + (value - origin) * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce, value, from]);

  if (display) {
    return (
      <span ref={ref} className="tabular-nums">
        {inView || reduce ? display : "0 → 0"}
      </span>
    );
  }

  return (
    <span ref={ref} className="tabular-nums">
      {shown}
      {suffix}
    </span>
  );
}

export function Metrics() {
  return (
    <section className="py-10 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          number="02"
          kicker="Signals"
          title="Work measured in production."
        />
        <Reveal>
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
            {metrics.map((metric) => (
              <li
                key={metric.label}
                className="bg-surface px-5 py-8 sm:px-7 sm:py-10"
              >
                <p className="font-display text-3xl text-foreground sm:text-4xl">
                  <AnimatedValue
                    value={metric.value}
                    suffix={"suffix" in metric ? metric.suffix : ""}
                    from={"from" in metric ? metric.from : undefined}
                    display={"display" in metric ? metric.display : undefined}
                  />
                </p>
                <p className="mt-3 max-w-[12rem] text-sm leading-snug text-muted">
                  {metric.label}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
