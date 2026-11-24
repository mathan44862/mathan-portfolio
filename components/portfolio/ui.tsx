"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
}) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-[#ff6b5b]">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold leading-tight text-white md:text-5xl">
        {title}
      </h2>
      {sub && <p className="mt-4 max-w-2xl text-base text-white/60 md:text-lg">{sub}</p>}
    </Reveal>
  );
}
