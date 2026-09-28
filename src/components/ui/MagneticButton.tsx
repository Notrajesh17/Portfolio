"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
  external?: boolean;
  disabled?: boolean;
};

export function MagneticButton({
  href,
  children,
  className = "",
  variant = "primary",
  external,
  disabled,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const base =
    variant === "primary"
      ? "bg-accent text-[#1a140c] hover:bg-accent-2"
      : "border border-line bg-transparent text-foreground hover:border-accent/50 hover:bg-accent-soft";

  if (disabled) {
    return (
      <span
        className={`inline-flex cursor-not-allowed items-center justify-center rounded-full px-6 py-3 text-sm font-medium opacity-50 ${base} ${className}`}
        title="GitHub URL is not configured"
      >
        {children}
      </span>
    );
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const node = ref.current;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.28);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.28);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors ${base} ${className}`}
    >
      {children}
    </motion.a>
  );
}
