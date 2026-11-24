import { GraduationCap, Globe2, Medal, Trophy } from "lucide-react";
import { achievements, collegeAwards } from "@/lib/data";
import { Reveal, SectionHeading } from "./ui";

const icons = [Trophy, Globe2, GraduationCap];

const placeStyle: Record<string, string> = {
  "1st": "from-[#f5c26b] to-[#ff9a6b] text-black",
  "2nd": "from-zinc-200 to-zinc-400 text-black",
  "3rd": "from-[#d68a5c] to-[#9a5a3a] text-white",
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        eyebrow="05 · Recognition"
        title={
          <>
            Awards & <span className="text-gradient">milestones</span>.
          </>
        }
      />
      <div className="grid gap-5 md:grid-cols-3">
        {achievements.map((a, i) => {
          const Icon = icons[i % icons.length];
          const featured = i === 0;
          return (
            <Reveal key={a.title} delay={i * 0.1}>
              <div
                className={`relative h-full overflow-hidden rounded-3xl p-7 ${
                  featured
                    ? "bg-gradient-to-br from-[#ff6b5b] to-[#f5a35b] text-white shadow-xl shadow-[#ff6b5b]/20"
                    : "glass"
                }`}
              >
                <Icon
                  size={120}
                  className={`absolute -bottom-6 -right-6 ${featured ? "text-white/15" : "text-white/5"}`}
                />
                <Icon size={28} className={featured ? "text-white" : "text-[#f5c26b]"} />
                <h3 className="mt-5 font-display text-2xl font-bold text-white">{a.title}</h3>
                <p className={`mt-1 font-mono text-xs ${featured ? "text-white/80" : "text-white/50"}`}>
                  {a.meta}
                </p>
                <p className={`relative mt-4 text-sm leading-relaxed ${featured ? "text-white/90" : "text-white/60"}`}>
                  {a.text}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mt-16 mb-6 flex items-center gap-3">
        <Medal size={20} className="text-[#ff6b5b]" />
        <h3 className="font-display text-2xl font-semibold text-white">College wins</h3>
        <span className="h-px flex-1 bg-white/10" />
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2">
        {collegeAwards.map((a, i) => (
          <Reveal key={a.title} delay={(i % 2) * 0.08}>
            <div className="glass group flex h-full items-start gap-5 rounded-3xl p-6 transition hover:-translate-y-1 hover:border-white/20">
              <div
                className={`flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-2xl bg-gradient-to-br font-display shadow-lg ${placeStyle[a.place]}`}
              >
                <span className="text-lg font-bold leading-none">{a.place}</span>
                <span className="text-[9px] font-semibold uppercase tracking-wider opacity-80">prize</span>
              </div>
              <div>
                <h4 className="font-display text-lg font-semibold text-white">{a.title}</h4>
                <p className="mt-0.5 font-mono text-xs text-white/45">{a.venue}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{a.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
