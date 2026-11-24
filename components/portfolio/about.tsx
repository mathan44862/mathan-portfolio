import { Gauge, Handshake, Layers } from "lucide-react";
import { highlights, stats } from "@/lib/data";
import { Reveal, SectionHeading } from "./ui";

const icons = [Handshake, Layers, Gauge];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        eyebrow="01 · About"
        title={
          <>
            Engineer who speaks <span className="text-gradient">product</span> and
            <br className="hidden md:block" /> ships <span className="text-gradient">end-to-end</span>.
          </>
        }
        sub="I care about clean architecture, fast interfaces and clear communication. Most of my work is with US-based clients, so I'm used to owning features from the first requirement call to the production release."
      />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="glass h-full rounded-3xl p-6 transition hover:border-[#ff6b5b]/40">
              <p className="font-display text-4xl font-bold text-gradient md:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm text-white/60">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {highlights.map((h, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={h.title} delay={0.1 + i * 0.08}>
              <div className="glass group h-full rounded-3xl p-7 transition hover:-translate-y-1 hover:border-white/20">
                <div className="mb-5 inline-flex rounded-2xl bg-[#ff6b5b]/10 p-3 text-[#ff6b5b] transition group-hover:bg-[#ff6b5b] group-hover:text-white">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{h.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
