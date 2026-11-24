import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal } from "./ui";

export default function Contact() {
  const links = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
    { icon: Github, label: "GitHub", href: profile.github },
  ];

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#1a1012] via-[#120f14] to-[#0a0a0f] p-8 md:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#ff6b5b]/25 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-[#f5c26b]/15 blur-[100px]" />

          <div className="relative">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-[#ff6b5b]">
              06 · Contact
            </p>
            <h2 className="max-w-3xl font-display text-4xl font-bold leading-tight text-white md:text-6xl">
              Have a project in mind? <span className="text-gradient">Let&apos;s build it.</span>
            </h2>
            <p className="mt-5 max-w-xl text-white/60 md:text-lg">
              I&apos;m open to full-time roles and freelance work with teams anywhere — comfortable with US time-zone overlap.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:bg-[#ff6b5b] hover:text-white"
            >
              Say hello
              <ArrowUpRight size={20} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            {profile.resume && (
              <a
                href={profile.resume}
                download
                className="glass ml-3 mt-9 inline-flex items-center rounded-full px-7 py-4 font-semibold text-white hover:bg-white/10"
              >
                Download résumé
              </a>
            )}

            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {links.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="glass flex items-center gap-3 rounded-2xl px-4 py-4 text-sm text-white/75 transition hover:border-[#ff6b5b]/40 hover:text-white"
                >
                  <Icon size={18} className="shrink-0 text-[#ff6b5b]" />
                  <span className="truncate">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <footer className="mt-16 flex flex-col items-center justify-between gap-3 text-sm text-white/40 md:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. Designed & built with Next.js.</p>
        <p className="font-display italic">{profile.tagline}</p>
      </footer>
    </section>
  );
}
