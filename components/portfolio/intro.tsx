"use client";

import { AnimatePresence, animate, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";
import { markIntroDone } from "@/lib/intro";

// Must match the pre-paint script in app/(user)/layout.tsx
export const SEEN_KEY = "mathan-intro-seen";
const LOAD_SECONDS = 1.5;

/**
 * Preloader: name reveal + 0→100 counter, then the curtain lifts and the hero animates in.
 * - Shown once per browser session (repeat visits / reloads go straight to the content)
 * - Skipped entirely for users who prefer reduced motion
 * - Click, tap or any key skips it
 */
export default function Intro() {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {}
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (seen || reduced) {
      setVisible(false);
      markIntroDone();
      return;
    }

    document.body.style.overflow = "hidden";
    const controls = animate(0, 100, {
      duration: LOAD_SECONDS,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setCount(Math.round(v)),
      onComplete: () => setTimeout(finish, 250),
    });

    function finish() {
      controls.stop();
      setVisible(false);
      markIntroDone();
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", finish, { once: true });
    window.addEventListener("pointerdown", finish, { once: true });
    return () => {
      controls.stop();
      window.removeEventListener("keydown", finish);
      window.removeEventListener("pointerdown", finish);
      document.body.style.overflow = "";
    };
  }, []);

  const letters = profile.name.split("");

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          aria-hidden
          className="intro-overlay fixed inset-0 z-[100] flex cursor-pointer flex-col justify-between overflow-hidden bg-[#0a0a0f] p-6 md:p-10"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6b5b]/15 blur-[120px]" />

          <div className="relative flex items-center justify-between font-mono text-xs uppercase tracking-[0.3em] text-white/40">
            <span>Portfolio</span>
            <span>{new Date().getFullYear()}</span>
          </div>

          <div className="relative text-center">
            <h1 className="font-display text-5xl font-bold text-white sm:text-7xl md:text-8xl">
              {letters.map((ch, i) => (
                <span key={i} className="inline-block overflow-hidden align-bottom">
                  <motion.span
                    className={`inline-block ${i >= letters.length - 1 ? "text-gradient" : ""}`}
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {ch === " " ? " " : ch}
                  </motion.span>
                </span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-4 font-mono text-sm text-white/50 md:text-base"
            >
              {profile.role} · React · Next.js · FastAPI
            </motion.p>
          </div>

          <div className="relative">
            <div className="flex items-end justify-between">
              <span className="max-w-[50%] font-display text-sm italic text-white/40 md:text-base">
                {profile.tagline}
              </span>
              <span className="font-display text-6xl font-bold tabular-nums text-white md:text-8xl">
                {count}
                <span className="text-[#ff6b5b]">%</span>
              </span>
            </div>
            <div className="mt-4 h-[2px] w-full overflow-hidden bg-white/10">
              <div
                className="h-full bg-gradient-to-r from-[#ff6b5b] to-[#f5c26b]"
                style={{ width: `${count}%` }}
              />
            </div>
            <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-white/25">
              Click anywhere to skip
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
