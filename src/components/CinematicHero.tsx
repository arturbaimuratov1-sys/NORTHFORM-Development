"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import { ASSET_MAP } from "@/lib/assets";

gsap.registerPlugin(ScrollTrigger);

export default function CinematicHero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.to("[data-hero-media]", {
        scale: 1.14,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
      gsap.to("[data-hero-text]", {
        yPercent: -18,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "70% top",
          scrub: true,
        },
      });
      gsap.to("[data-hero-shade]", {
        opacity: 0.72,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="top" className="relative h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          data-hero-media
          src={ASSET_MAP.hero.src}
          alt={ASSET_MAP.hero.alt}
          className="h-full w-full origin-center scale-[1.02] object-cover will-change-transform"
        />
      </div>
      <div
        data-hero-shade
        className="absolute inset-0 bg-gradient-to-b from-[#0c0c0b]/70 via-[#0c0c0b]/25 to-[#0c0c0b]/85 opacity-50"
      />

      <div
        data-hero-text
        className="absolute inset-0 mx-auto flex max-w-[1600px] flex-col justify-end px-5 pb-24 md:px-10 md:pb-16"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#edeae2]/70 md:text-[11px] md:tracking-[0.28em]"
        >
          Northform Development — Est. demo
        </motion.p>
        <h1 className="display-xl text-[clamp(2.75rem,9vw,9rem)] text-[#edeae2]">
          <span className="mask-reveal">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              className="block"
            >
              Building
            </motion.span>
          </span>
          <span className="mask-reveal">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.47 }}
              className="block"
            >
              space for
            </motion.span>
          </span>
          <span className="mask-reveal">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.59 }}
              className="block text-[#b08d57]"
            >
              what comes next.
            </motion.span>
          </span>
        </h1>

        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="max-w-[420px] text-[15px] leading-relaxed text-[#edeae2]/75"
          >
            Architecture, construction and development shaped around modern
            life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="#featured"
              className="bg-[#edeae2] px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.18em] text-black transition-colors hover:bg-[#b08d57] hover:text-black"
            >
              Explore Projects
            </Link>
            <Link
              href="#process"
              className="border hairline px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.18em] text-[#edeae2] transition-colors hover:border-[#b08d57] hover:text-[#b08d57]"
            >
              Our Approach
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
          Scroll
        </span>
        <span className="block h-8 w-px overflow-hidden bg-white/20">
          <motion.span
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="block h-full w-full bg-[#b08d57]"
          />
        </span>
      </div>
    </section>
  );
}
