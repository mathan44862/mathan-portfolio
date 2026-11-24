import { skills } from "@/lib/data";
import { Reveal, SectionHeading } from "./ui";

const marquee = ["React", "Next.js", "TypeScript", "FastAPI", "PostgreSQL", "TanStack Query", "Three.js", "CesiumJS", "Tailwind CSS", "Docker", "Redux Toolkit", "Node.js"];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="04 · Toolkit"
          title={
            <>
              The <span className="text-gradient">stack</span> I work with.
            </>
          }
        />
      </div>

      <div className="relative mb-14 overflow-hidden border-y border-white/5 py-6 [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <div className="animate-marquee flex w-max gap-10">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="font-display text-3xl font-bold text-white/15 md:text-5xl">
              {m} <span className="text-[#ff6b5b]/40">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-4 px-5 sm:grid-cols-2 md:px-8 lg:grid-cols-3">
        {skills.map((g, i) => (
          <Reveal
            key={g.group}
            delay={(i % 3) * 0.08}
            className={i === skills.length - 1 && skills.length % 3 === 1 ? "sm:col-span-2 lg:col-span-3" : ""}
          >
            <div className="glass h-full rounded-3xl p-6 transition hover:border-[#ff6b5b]/30">
              <h3 className="mb-4 font-display text-lg font-semibold text-white">{g.group}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg bg-white/5 px-3 py-1.5 text-sm text-white/75 transition hover:bg-[#ff6b5b]/15 hover:text-white"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
