"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROCESS_STEPS } from "@/lib/assets";

gsap.registerPlugin(ScrollTrigger);

export default function StickyProcess() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      PROCESS_STEPS.forEach((_, i) => {
        ScrollTrigger.create({
          trigger: `[data-step="${i}"]`,
          start: "top 55%",
          end: "bottom 45%",
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        });
      });
      gsap.fromTo(
        "[data-process-media] img",
        { scale: 1.08 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="process" className="bg-[#141413] px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-28">
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.28em] text-[#b08d57]">
              How we build
            </p>
            <h2 className="display-xl text-[clamp(2.4rem,5vw,5rem)] text-[#edeae2]">
              Five phases.
              <br />
              One team.
            </h2>
            <div data-process-media className="mt-8 hidden overflow-hidden md:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={active}
                src={PROCESS_STEPS[active].image}
                alt={PROCESS_STEPS[active].title}
                className="aspect-[4/3] w-full object-cover"
              />
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[#8f8e88]">
                Phase {PROCESS_STEPS[active].n} — {PROCESS_STEPS[active].title}
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          {PROCESS_STEPS.map((s, i) => (
            <div
              key={s.n}
              data-step={i}
              className={`border-t hairline py-10 transition-opacity duration-500 md:py-14 ${
                i === active ? "opacity-100" : "opacity-35"
              }`}
            >
              <div className="flex items-baseline gap-6">
                <span
                  className={`font-mono text-sm tracking-[0.2em] ${
                    i === active ? "text-[#b08d57]" : "text-[#8f8e88]"
                  }`}
                >
                  {s.n}
                </span>
                <h3 className="display-xl text-4xl text-[#edeae2] md:text-6xl">
                  {s.title}
                </h3>
              </div>
              <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-[#b9b6ad]">
                {s.body}
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                className="mt-6 aspect-[16/10] w-full object-cover md:hidden"
              />
            </div>
          ))}
          <div className="border-t hairline" />
        </div>
      </div>
    </section>
  );
}
