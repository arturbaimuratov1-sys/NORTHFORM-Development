"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ASSET_MAP } from "@/lib/assets";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedDevelopment() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-dev-frame]",
        { clipPath: "inset(10% 6% 10% 6%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "top 20%",
            scrub: true,
          },
        }
      );
      gsap.to("[data-dev-title]", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative bg-[#0c0c0b] py-28 md:py-40">
      <div className="mx-auto mb-8 flex max-w-[1600px] items-end justify-between px-5 md:px-10">
        <div>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-[#b08d57]">
            Featured development
          </p>
          <h2
            data-dev-title
            className="display-xl text-[clamp(2.6rem,7vw,7rem)] text-[#edeae2]"
          >
            Meridian Court
          </h2>
        </div>
        <div className="hidden gap-8 font-mono text-[11px] uppercase tracking-[0.2em] text-[#b9b6ad] md:flex">
          <div>
            <p className="text-[#8f8e88]">Status</p>
            <p>Under construction — demo</p>
          </div>
          <div>
            <p className="text-[#8f8e88]">Scale</p>
            <p>18 400 m² — demo</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div data-dev-frame className="relative h-[70svh] overflow-hidden will-change-transform md:h-[92svh]">
          <video
            src={ASSET_MAP.featuredVideo.src}
            poster={ASSET_MAP.featuredVideo.poster}
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0c0c0b]/20" />
          <p className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/70 md:bottom-8 md:left-8">
            Slow approach — Video: Alef Morais / Pexels
          </p>
        </div>
        <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed text-[#b9b6ad]">
          A courtyard block studied as a camera move: mass holds still while
          light travels. Concrete frame, bronze detailing, deep loggias facing
          the evening sun.
        </p>
      </div>
    </section>
  );
}
