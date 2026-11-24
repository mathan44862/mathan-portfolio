import { Briefcase, GraduationCap } from "lucide-react";
import { education, experience } from "@/lib/data";
import { Reveal, SectionHeading } from "./ui";

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        eyebrow="02 · Experience"
        title={
          <>
            Where I&apos;ve been <span className="text-gradient">building</span>.
          </>
        }
      />

      <div className="relative border-l border-white/10 pl-8 md:pl-12">
        {experience.map((job) => (
          <Reveal key={job.company} className="relative mb-12">
            <span className="absolute -left-[45px] top-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#ff6b5b] to-[#f5c26b] text-white shadow-lg shadow-[#ff6b5b]/30 md:-left-[61px]">
              <Briefcase size={16} />
            </span>
            <div className="glass rounded-3xl p-7 md:p-9">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-2xl font-semibold text-white">
                  {job.role} <span className="text-white/40">@</span>{" "}
                  <span className="text-gradient">{job.company}</span>
                </h3>
                <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-white/60">
                  {job.period}
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3 text-white/70">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff6b5b]" />
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}

        <Reveal className="relative">
          <span className="absolute -left-[45px] top-1 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#141419] text-white/80 md:-left-[61px]">
            <GraduationCap size={16} />
          </span>
          <div className="glass rounded-3xl p-7 md:p-9">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-xl font-semibold text-white">{education.degree}</h3>
              <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-white/60">
                {education.period}
              </span>
            </div>
            <p className="mt-2 text-white/60">
              {education.school} · <span className="text-[#f5c26b]">{education.score}</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
