"use client";

import { motion, useReducedMotion } from "motion/react";
import { systemFlow } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function EngineeringSystems() {
  const reduce = useReducedMotion();

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          number="04"
          kicker="System path"
          title="How a request should travel."
          description="A simplified production path: ingress, contract, domain logic, state, infrastructure, then live traffic. Not a complete architecture — a reading of how backend systems are supposed to move."
        />

        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-line bg-surface px-5 py-8 sm:px-8 sm:py-10">
            <p className="mb-8 font-mono text-[11px] tracking-[0.2em] text-faint uppercase">
              request_path · read-only diagram
            </p>

            <div className="relative">
              <span
                aria-hidden="true"
                className="bg-line absolute top-8 right-4 left-4 hidden h-px md:block"
              />
              {!reduce ? (
                <motion.span
                  aria-hidden="true"
                  className="absolute top-7 hidden h-2 w-2 rounded-full bg-accent shadow-[0_0_16px_rgba(201,163,106,0.8)] md:block"
                  initial={{ left: "4%" }}
                  animate={{ left: ["4%", "92%"] }}
                  transition={{
                    duration: 4.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ) : null}

              <ol className="relative grid gap-4 md:grid-cols-6">
                {systemFlow.map((node, index) => (
                  <li
                    key={node.id}
                    className="relative z-10 rounded-xl border border-line bg-background px-4 py-4"
                  >
                    <p className="font-mono text-[10px] tracking-[0.18em] text-accent uppercase">
                      {String(index + 1).padStart(2, "0")} · {node.note}
                    </p>
                    <p className="mt-2 text-sm text-foreground">{node.label}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
