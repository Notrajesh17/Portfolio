"use client";

import { useEffect, useState } from "react";

export function HudCoordinates() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setShow(true);
    const onMove = (event: MouseEvent) => {
      setPos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!show) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed right-4 bottom-4 z-40 hidden font-mono text-[10px] tracking-widest text-faint uppercase md:block"
    >
      x {String(pos.x).padStart(4, "0")} · y {String(pos.y).padStart(4, "0")}
    </div>
  );
}
