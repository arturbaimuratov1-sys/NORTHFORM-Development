"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LINES = ["We don't build objects.", "We build places", "people return to."];

export default function ScrollManifesto() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>("[data-manifesto-line]");
      lines.forEach((line, i) => {
        gsap.fromTo(
          line,
          { opacity: 0.14, y: 26 },
          {
            opacity: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: `top+=${i * 180} 62%`,
              end: `top+=${i * 180 + 320} 38%`,
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );
      });
      gsap.fromTo(
        "[data-manifesto-media]",
        { clipPath: "inset(12% 8% 12% 8%)", scale: 0.96 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
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
    <section
      ref={root}
      id="manifesto"
      className="relative bg-[#0c0c0b] px-5 py-32 md:px-10 md:py-48"
    >
      <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.28em] text-[#b08d57]">
            Manifesto — 01
          </p>
          <h2 className="display-xl text-[clamp(2.2rem,5.6vw,5.2rem)] text-[#edeae2]">
            {LINES.map((l) => (
              <span key={l} data-manifesto-line className="block pb-1">
                {l}
              </span>
            ))}
          </h2>
          <p className="mt-10 max-w-[52ch] text-[15px] leading-relaxed text-[#b9b6ad]">
            Northform is a fictional development studio created for design
            practice. Every project below is a study in massing, material and
            light — concrete, glass and steel composed for the way people
            actually live.
          </p>
        </div>
        <div className="md:col-span-5">
          <div data-manifesto-media className="overflow-hidden will-change-transform md:sticky md:top-28">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/concrete-bw.jpg"
              alt="Minimalist concrete structures in black and white"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[#8f8e88]">
              Concrete study — Photo: David Yu / Pexels
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
