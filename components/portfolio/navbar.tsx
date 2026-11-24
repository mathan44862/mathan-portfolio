"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
          scrolled ? "glass shadow-lg shadow-black/30" : "bg-transparent"
        }`}
      >
        <a href="#top" className="font-display text-lg font-bold text-white">
          {profile.firstName}
          <span className="text-[#ff6b5b]">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                {l.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
        <a
          href={profile.resume}
          download
          className="rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
        >
          Résumé
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#ff6b5b] hover:text-white md:inline-block"
        >
          Hire me
        </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="text-white md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass absolute inset-x-4 top-20 flex flex-col gap-1 rounded-2xl bg-[#0a0a0f]/90 p-3 md:hidden"
          >
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-white/80 hover:bg-white/10"
                >
                  {l.name}
                </a>
              </li>
            ))}
            <li>
              <a href={profile.resume} download className="block rounded-xl px-4 py-3 text-[#ff6b5b] hover:bg-white/10">
                Download résumé
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
