"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const LINKS = [
  { href: "#featured", label: "Projects" },
  { href: "#manifesto", label: "Studio" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`fixed inset-x-0 top-0 z-[70] transition-colors duration-500 ${
          scrolled
            ? "border-b hairline bg-[#0c0c0b]/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 md:h-[72px] md:px-10">
          <Link
            href="#top"
            className="font-display text-[15px] font-extrabold tracking-[0.22em] text-[#edeae2]"
          >
            NORTHFORM
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="group relative text-[12px] font-medium uppercase tracking-[0.18em] text-[#edeae2]/70 transition-colors hover:text-[#edeae2]"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#b08d57] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="#contact"
              className="border hairline px-4 py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-[#edeae2] transition-colors hover:border-[#b08d57] hover:text-[#b08d57]"
            >
              Start a project
            </Link>
          </nav>
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center border hairline text-[#edeae2] md:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-5 bg-current" />
            </span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] flex flex-col bg-[#0c0c0b] md:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <span className="text-[15px] font-extrabold tracking-[0.22em]">
                NORTHFORM
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center border hairline"
              >
                ✕
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08 * i, duration: 0.5 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="display-xl block py-2 text-5xl text-[#edeae2]"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <p className="mt-8 text-xs uppercase tracking-[0.2em] text-[#8f8e88]">
                Architecture — Construction — Development
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
