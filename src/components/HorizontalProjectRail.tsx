"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ASSET_MAP } from "@/lib/assets";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalProjectRail() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current || !track.current) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const distance =
        (track.current?.scrollWidth ?? 0) - window.innerWidth + 80;
      const tween = gsap.to(track.current, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => `+=${distance}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
      gsap.to("[data-rail-progress]", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => `+=${distance}`,
          scrub: true,
        },
      });
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });
    return () => mm.revert();
  }, []);

  const items = ASSET_MAP.rail;

  return (
    <section ref={root} id="journey" className="relative bg-[#141413]">
      {/* desktop pinned rail */}
      <div className="hidden md:block">
        <div className="flex h-[100svh] flex-col justify-center overflow-hidden">
          <div className="mx-auto mb-8 flex w-full max-w-[1600px] items-end justify-between px-10">
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-[#b08d57]">
                Project journey — 02–05
              </p>
              <h2 className="display-xl text-6xl text-[#edeae2]">
                Four scenes,
                <br />
                one language.
              </h2>
            </div>
            <p className="max-w-[300px] text-sm leading-relaxed text-[#b9b6ad]">
              Scroll to travel horizontally. Each project holds the frame
              before the next arrives.
            </p>
          </div>
          <div ref={track} className="flex w-max items-stretch gap-6 pl-10">
            {items.map((p) => (
              <Link
                key={p.slug}
                href={
                  p.slug === "north-residence"
                    ? "/projects/north-residence"
                    : "#journey"
                }
                data-cursor="VIEW"
                className="group relative h-[56svh] w-[62vw] max-w-[860px] shrink-0 overflow-hidden lg:w-[44vw]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.24em] text-white/60">
                      {p.index} — {p.location}
                    </p>
                    <p className="display-xl mt-2 text-4xl text-white">
                      {p.name}
                    </p>
                  </div>
                  <p className="border border-white/25 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/80">
                    {p.type}
                  </p>
                </div>
              </Link>
            ))}
            <div className="flex h-[56svh] w-[30vw] shrink-0 items-center justify-center border hairline">
              <p className="display-xl text-center text-3xl text-[#8f8e88]">
                Full archive
                <br />
                coming soon
              </p>
            </div>
          </div>
          <div className="mx-auto mt-8 w-full max-w-[1600px] px-10">
            <div className="h-px w-full bg-white/10">
              <div
                data-rail-progress
                className="h-px origin-left scale-x-0 bg-[#b08d57]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* mobile: vertical stack */}
      <div className="px-5 py-24 md:hidden">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-[#b08d57]">
          Project journey
        </p>
        <h2 className="display-xl mb-10 text-5xl text-[#edeae2]">
          Four scenes.
        </h2>
        <div className="flex flex-col gap-10">
          {items.map((p) => (
            <figure key={p.slug}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.image}
                alt={p.alt}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <figcaption className="mt-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-[#b9b6ad]">
                <span>
                  {p.index} — {p.name}
                </span>
                <span>{p.location}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
