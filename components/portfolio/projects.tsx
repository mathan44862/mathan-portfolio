"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { projects } from "@/lib/data";
import { Reveal, SectionHeading } from "./ui";

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        eyebrow="03 · Selected work"
        title={
          <>
            Projects I&apos;ve <span className="text-gradient">shipped</span>.
          </>
        }
        sub="Client work for US-based teams across e-commerce, enterprise AI, GIS analytics and internal tooling. Details are kept general to respect client confidentiality."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal
            key={p.title}
            delay={(i % 2) * 0.1}
            className={i === 0 ? "md:col-span-2" : ""}
          >
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="glass group relative h-full overflow-hidden rounded-3xl p-7 md:p-9"
            >
              <div
                className={`pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br ${p.gradient} blur-2xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-70`}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-white/50">
                    {p.category}
                  </span>
                  <span className="font-display text-4xl font-bold text-white/10">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold text-white md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-3 leading-relaxed text-white/60">{p.description}</p>

                <ul className={`mt-6 grid gap-2 ${i === 0 ? "md:grid-cols-3" : ""}`}>
                  {p.impact.map((m) => (
                    <li key={m} className="flex items-start gap-2 text-sm text-white/75">
                      <Check size={16} className="mt-0.5 shrink-0 text-[#ff6b5b]" />
                      {m}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
