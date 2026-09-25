"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ParallaxMedia, RevealText } from "@/components/Reveal";

gsap.registerPlugin(ScrollTrigger);

const FACTS = [
  ["Location", "Almaty — demo"],
  ["Type", "Residential"],
  ["Status", "Concept — fictional"],
  ["Area", "640 m² — demo"],
  ["Year", "2025"],
  ["Material", "Concrete / Glass / Bronze"],
];

export default function NorthResidencePage() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.to("[data-p-hero]", {
        scale: 1.12,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.utils.toArray<HTMLElement>("[data-p-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          }
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={root} className="bg-[#0c0c0b]">
      <section className="relative h-[92svh] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          data-p-hero
          src="/images/north-residence.jpg"
          alt="North Residence at twilight"
          className="h-full w-full origin-center object-cover will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0b]/80 via-transparent to-[#0c0c0b]/40" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1600px] px-5 pb-12 md:px-10">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-[#b08d57]">
            Project 01 — Residential
          </p>
          <h1 className="display-xl text-[clamp(3rem,10vw,9rem)] text-[#edeae2]">
            North
            <br />
            Residence
          </h1>
        </div>
      </section>

      <section className="border-t hairline px-5 py-14 md:px-10">
        <div className="mx-auto grid max-w-[1600px] gap-8 md:grid-cols-6">
          {FACTS.map(([k, v]) => (
            <div key={k}>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#8f8e88]">
                {k}
              </p>
              <p className="mt-2 text-[15px] text-[#edeae2]">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1600px] gap-10 md:grid-cols-12">
          <h2 data-p-reveal className="display-xl text-4xl text-[#edeae2] md:col-span-7 md:text-6xl">
            A house that holds the evening sun.
          </h2>
          <div data-p-reveal className="md:col-span-5">
            <p className="text-[15px] leading-relaxed text-[#b9b6ad]">
              North Residence is a fictional case study for NORTHFORM practice:
              a courtyard villa organised around dusk light. Deep reveals,
              low-iron glass and board-formed concrete keep the interior calm
              while the facade does the cinematic work. Nothing here is built
              — everything is composed to study proportion, material and
              sequence.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] space-y-5 px-5 md:px-10">
        <div data-p-reveal>
          <ParallaxMedia
            src="/images/villa-sunset.jpg"
            alt="Luxury villa with pool at sunset"
            className="aspect-[16/9]"
          />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div data-p-reveal>
            <ParallaxMedia
              src="/images/concrete-interior.jpg"
              alt="Concrete interior with geometric lines"
              className="aspect-[4/5]"
            />
          </div>
          <div data-p-reveal>
            <ParallaxMedia
              src="/images/lobby.jpg"
              alt="Spacious lobby with natural light"
              className="aspect-[4/5]"
            />
          </div>
        </div>
        <div data-p-reveal>
          <ParallaxMedia
            src="/images/glass-reflection.jpg"
            alt="Glass facade reflection detail"
            className="aspect-[21/9]"
          />
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1600px] border-t hairline pt-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#b08d57]">
            Materials
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {["Board-formed concrete", "Low-iron glass", "Oiled bronze"].map(
              (m) => (
                <div key={m} className="border hairline p-8">
                  <p className="display-xl text-2xl text-[#edeae2]">{m}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[#b9b6ad]">
                    Specified for weathering, daylight and touch — demo
                    palette for practice only.
                  </p>
                </div>
              )
            )}
          </div>
          <p className="mt-8 text-[15px] leading-relaxed text-[#b9b6ad]">
            <RevealText>Design narrative:</RevealText> approach from the north,
            compress through a concrete passage, release into a double-height
            living space facing west. Bedrooms float above; services disappear
            into the section.
          </p>
        </div>
      </section>

      <Link
        href="#top"
        data-cursor="VIEW"
        className="group relative block h-[60svh] overflow-hidden"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/residential-dusk.jpg"
          alt="Next project — residential facade at dusk"
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 mx-auto flex max-w-[1600px] items-center justify-between px-5 md:px-10">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/60">
              Next project — 02
            </p>
            <p className="display-xl mt-3 text-6xl text-white md:text-8xl">
              Meridian House
            </p>
          </div>
          <span className="border border-white/40 px-6 py-4 text-[12px] uppercase tracking-[0.2em] text-white">
            →
          </span>
        </div>
      </Link>

      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-8 md:px-10">
        <Link href="/" className="text-[12px] uppercase tracking-[0.2em] text-[#8f8e88] hover:text-[#edeae2]">
          ← All projects
        </Link>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8f8e88]">
          Fictional case — demo content
        </p>
      </div>
    </main>
  );
}
