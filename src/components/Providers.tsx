"use client";

import { MotionConfig } from "motion/react";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { HudCoordinates } from "@/components/ui/HudCoordinates";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <CursorGlow />
      <HudCoordinates />
      {children}
    </MotionConfig>
  );
}
