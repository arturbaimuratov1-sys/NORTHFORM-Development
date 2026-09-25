"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function RevealText({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1.1,
          delay,
          ease: "expo.out",
          scrollTrigger: { trigger: ref.current, start: "top 88%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, [delay]);

  return (
    <span className={`mask-reveal ${className}`}>
      <span ref={ref} className="block will-change-transform">
        {children}
      </span>
    </span>
  );
}

export function ParallaxMedia({
  src,
  alt,
  className = "",
  speed = 12,
}: {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}) {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrap.current) return;
    const img = wrap.current.querySelector("img");
    if (!img) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        { yPercent: -speed / 2 },
        {
          yPercent: speed / 2,
          ease: "none",
          scrollTrigger: {
            trigger: wrap.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    }, wrap);
    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={wrap} className={`overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-[118%] w-full object-cover will-change-transform"
      />
    </div>
  );
}
