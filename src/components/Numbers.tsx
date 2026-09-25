"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NUMS = [
  { v: 28, label: "Projects — demo portfolio" },
  { v: 6, label: "Cities — demo geography" },
  { v: 12, label: "Years — fictional practice" },
];

export default function Numbers() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count);
        const obj = { n: 0 };
        ScrollTrigger.create({
          trigger: el,
          start: "top 82%",
          once: true,
          onEnter: () =>
            gsap.to(obj, {
              n: target,
              duration: 1.6,
              ease: "power3.out",
              onUpdate: () => {
                el.textContent = String(Math.round(obj.n)).padStart(2, "0");
              },
            }),
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="border-t hairline bg-[#0c0c0b] px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-3">
        {NUMS.map((n) => (
          <div key={n.label} className="border-l hairline pl-6">
            <p data-count={n.v} className="display-xl text-7xl text-[#edeae2] md:text-8xl">
              00
            </p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[#8f8e88]">
              {n.label}
            </p>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-[1600px] font-mono text-[10px] uppercase tracking-[0.2em] text-[#8f8e88]/70">
        Figures are illustrative demo content for this fictional practice brand.
      </p>
    </section>
  );
}
