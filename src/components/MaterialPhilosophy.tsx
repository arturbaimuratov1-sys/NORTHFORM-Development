"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RevealText, ParallaxMedia } from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

export default function MaterialPhilosophy() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-material-word]",
        { yPercent: 60, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          stagger: 0.12,
          ease: "expo.out",
          duration: 1,
          scrollTrigger: { trigger: root.current, start: "top 70%" },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="materials" className="bg-[#0c0c0b] px-5 py-28 md:px-10 md:py-44">
      <div className="mx-auto max-w-[1600px]">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.28em] text-[#b08d57]">
          Material — Concrete / Glass / Light
        </p>
        <h2 className="display-xl max-w-[14ch] text-[clamp(2.4rem,6.5vw,6.5rem)] text-[#edeae2]">
          <span data-material-word className="block">Honest materials.</span>
          <span data-material-word className="block text-[#8f8e88]">
            Nothing decorative.
          </span>
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-12">
          <div className="md:col-span-7">
            <ParallaxMedia
              src="/images/concrete-passage.jpg"
              alt="Concrete passage with dramatic light and shadow"
              speed={14}
              className="aspect-[16/10]"
            />
            <div className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-[#8f8e88]">
              <span>Concrete — mass and shadow</span>
              <span>Pixabay / Pexels</span>
            </div>
          </div>
          <div className="md:col-span-5 md:pt-24">
            <ParallaxMedia
              src="/images/glass-reflection.jpg"
              alt="Modern building facade reflected in glass"
              speed={18}
              className="aspect-[4/5]"
            />
            <div className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-[#8f8e88]">
              <span>Glass — reflection</span>
              <span>M. Martins / Pexels</span>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="max-w-[42ch] text-[15px] leading-relaxed text-[#b9b6ad] md:pt-10">
              <RevealText>
                We detail for decades, not seasons. Facades that weather well,
              </RevealText>
              <RevealText>
                interiors that hold daylight, junctions you never notice —
              </RevealText>
              <RevealText>because they were drawn correctly once.</RevealText>
            </p>
          </div>
          <div className="md:col-span-7">
            <ParallaxMedia
              src="/images/concrete-sky.jpg"
              alt="Modern concrete facade against blue sky"
              speed={12}
              className="aspect-[16/9]"
            />
            <div className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-[#8f8e88]">
              <span>Geometry — facade close-up</span>
              <span>J. van der Wolf / Pexels</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
