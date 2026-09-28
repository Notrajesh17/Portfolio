"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useTransform } from "motion/react";
import { ArrowDownRight, Mail } from "lucide-react";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/components/icons";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { githubHref, site } from "@/lib/site";

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const shiftX = useTransform(mx, [0, 1], [-18, 18]);
  const shiftY = useTransform(my, [0, 1], [-12, 12]);
  const textX = useTransform(mx, [0, 1], [-6, 6]);
  const textY = useTransform(my, [0, 1], [-4, 4]);
  const github = githubHref();

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={(event) => {
        const node = ref.current;
        if (!node || reduce) return;
        const rect = node.getBoundingClientRect();
        mx.set((event.clientX - rect.left) / rect.width);
        my.set((event.clientY - rect.top) / rect.height);
      }}
      className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      <div className="site-grid pointer-events-none absolute inset-0 opacity-70" />
      <motion.div
        aria-hidden="true"
        style={{ x: shiftX, y: shiftY }}
        className="pointer-events-none absolute top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,163,106,0.16),transparent_64%)] blur-2xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 flex items-center gap-3 font-mono text-[11px] tracking-[0.24em] text-accent uppercase"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          Systems in production
        </motion.p>

        <motion.div style={{ x: textX, y: textY }}>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="font-display max-w-5xl text-[clamp(2.5rem,6.8vw,5.4rem)] leading-[0.94] tracking-tight text-white"
          >
            Rajesh
            <br />
            <span className="italic text-accent">Runiwal</span>
          </motion.h1>
        </motion.div>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-6 font-mono text-sm tracking-[0.18em] text-muted uppercase"
        >
          {site.role}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mt-8 max-w-xl space-y-3 text-lg leading-relaxed text-muted"
        >
          <p>
            Building scalable backend systems, cloud-native applications, and
            distributed systems.
          </p>
          <p className="text-foreground/90">
            I enjoy turning complex engineering problems into reliable, scalable
            systems.
          </p>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <MagneticButton href="#projects">
            View my work
            <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
          </MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            Get in touch
          </MagneticButton>
        </motion.div>

        <motion.ul
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-12 flex flex-wrap items-center gap-5 text-muted"
        >
          {github ? (
            <li>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm transition-colors hover:text-foreground"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </a>
            </li>
          ) : (
            <li className="inline-flex items-center gap-2 text-sm text-faint">
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </li>
          )}
          <li>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors hover:text-foreground"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors hover:text-foreground"
            >
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </a>
          </li>
          <li>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-sm transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email
            </a>
          </li>
        </motion.ul>
      </div>
    </section>
  );
}
