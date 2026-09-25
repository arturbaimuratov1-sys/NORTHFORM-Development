"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ASSET_MAP, ATTRIBUTION } from "@/lib/assets";

gsap.registerPlugin(ScrollTrigger);

export default function FinalContact() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-close-media]",
        { scale: 1.15 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        "[data-close-title] span",
        { yPercent: 110 },
        {
          yPercent: 0,
          stagger: 0.09,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: root.current, start: "top 55%" },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={root} id="contact" className="relative overflow-hidden bg-[#0c0c0b]">
      <div className="relative h-[92svh] overflow-hidden">
        <video
          data-close-media
          src={ASSET_MAP.closingVideo.src}
          poster={ASSET_MAP.closingVideo.poster}
          muted
          loop
          autoPlay
          playsInline
          preload="metadata"
          className="h-full w-full object-cover will-change-transform"
        />
        <div className="absolute inset-0 bg-[#0c0c0b]/55" />
        <div className="absolute inset-0 mx-auto flex max-w-[1600px] flex-col justify-end px-5 pb-14 md:px-10 md:pb-10">
          <h2 data-close-title className="display-xl text-[clamp(3rem,11vw,11rem)] text-[#edeae2]">
            <span className="mask-reveal">
              <span className="block">Let&apos;s build</span>
            </span>
            <span className="mask-reveal">
              <span className="block text-[#b08d57]">what&apos;s next.</span>
            </span>
          </h2>
          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-[420px] text-[15px] leading-relaxed text-white/75">
              A fictional studio for practice — but the ambition is real.
              Tell us about your site, your brief, your timeline.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="mailto:hello@northform.studio"
                className="bg-[#edeae2] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-[#b08d57]"
              >
                Contact
              </Link>
              <Link
                href="#top"
                className="border border-white/30 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:border-[#b08d57] hover:text-[#b08d57]"
              >
                Back to top
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t hairline">
        <div className="mx-auto grid max-w-[1600px] gap-8 px-5 py-10 text-[12px] text-[#8f8e88] md:grid-cols-4 md:px-10">
          <div>
            <p className="font-extrabold tracking-[0.22em] text-[#edeae2]">NORTHFORM</p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em]">
              Fictional practice brand
            </p>
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em]">
            <p>Projects</p>
            <p className="mt-2">Studio</p>
            <p className="mt-2">Process</p>
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em]">
            <p>hello@northform.studio</p>
            <p className="mt-2">Almaty — Astana — demo</p>
          </div>
          <div className="font-mono text-[10px] leading-relaxed tracking-[0.08em]">
            <p>Photography: Pexels — {ATTRIBUTION.slice(0, 6).join(", ")} + more.</p>
            <p className="mt-2">Full attribution in /attribution.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
