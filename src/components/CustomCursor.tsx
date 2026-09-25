"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState("");
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 35, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 400, damping: 35, mass: 0.6 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    // mount-only enable: server renders null, client enables after hydration
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(true);
    document.documentElement.classList.add("northform-cursor-on");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      const tagged = t.closest?.("[data-cursor]") as HTMLElement | null;
      const interactive = t.closest?.("a, button") as HTMLElement | null;
      setLabel(tagged?.dataset.cursor ?? "");
      setHovering(!!interactive && !tagged);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("northform-cursor-on");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] mix-blend-difference"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        animate={{
          width: label ? 84 : hovering ? 48 : 14,
          height: label ? 84 : hovering ? 48 : 14,
          backgroundColor: label ? "#edeae2" : "rgba(237,234,226,0)",
          borderColor: "rgba(237,234,226,0.9)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
        className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border"
      >
        {label ? (
          <span className="text-[11px] font-bold tracking-[0.18em] text-black mix-blend-normal">
            {label}
          </span>
        ) : (
          <span className="block h-1 w-1 rounded-full bg-[#edeae2]" />
        )}
      </motion.div>
    </motion.div>
  );
}
