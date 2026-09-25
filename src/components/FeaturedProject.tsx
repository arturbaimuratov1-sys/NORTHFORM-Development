"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ASSET_MAP } from "@/lib/assets";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProject() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-featured-media]",
        { scale: 1.18, clipPath: "inset(6% 4% 6% 4%)" },
        {
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "center center",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
      gsap.fromTo(
        "[data-featured-title] span",
        { yPercent: 110 },
        {
          yPercent: 0,
          stagger: 0.08,
          ease: "expo.out",
          duration: 1,
          scrollTrigger: { trigger: root.current, start: "top 62%" },
        }
      );
      gsap.fromTo(
        "[data-featured-meta] > *",
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          ease: "power3.out",
          duration: 0.8,
          scrollTrigger: { trigger: root.current, start: "top 45%" },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  const p = ASSET_MAP.featured;

  return (
    <section ref={root} id="featured" className="relative bg-[#0c0c0b] pb-28 md:pb-40">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="mb-6 flex items-end justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#b08d57]">
            Featured — 01
          </p>
          <Link
            href="/projects/north-residence"
            data-cursor="OPEN"
            className="hidden text-[12px] uppercase tracking-[0.18em] text-[#edeae2]/60 hover:text-[#edeae2] md:block"
          >
            Open case →
          </Link>
        </div>
      </div>

      <Link href="/projects/north-residence" data-cursor="VIEW" className="block">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="relative h-[72svh] overflow-hidden md:h-[92svh]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              data-featured-media
              src={p.image}
              alt={p.alt}
              loading="lazy"
              className="h-full w-full object-cover will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0b]/75 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 md:flex-row md:items-end md:justify-between md:p-10">
              <h2
                data-featured-title
                className="display-xl text-[clamp(2.6rem,7vw,7rem)] text-[#edeae2]"
              >
                <span className="mask-reveal">
                  <span className="block">North</span>
                </span>
                <span className="mask-reveal">
                  <span className="block">Residence</span>
                </span>
              </h2>
              <div data-featured-meta className="flex gap-8 font-mono text-[11px] uppercase tracking-[0.22em] text-[#edeae2]/80">
                <div>
                  <p className="text-[#8f8e88]">No.</p>
                  <p>01</p>
                </div>
                <div>
                  <p className="text-[#8f8e88]">Location</p>
                  <p>Almaty</p>
                </div>
                <div>
                  <p className="text-[#8f8e88]">Type</p>
                  <p>Residential</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
