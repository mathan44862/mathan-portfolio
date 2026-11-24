"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownRight, Award, Globe2, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { heroRoles, profile } from "@/lib/data";
import { useIntroDone } from "@/lib/intro";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const ready = useIntroDone();

  useEffect(() => {
    const t = setInterval(() => setRoleIndex((i) => (i + 1) % heroRoles.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-[#ff6b5b]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-[420px] w-[420px] rounded-full bg-[#f5c26b]/15 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 md:grid-cols-[1.25fr_1fr] md:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-white/80"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m <span className="text-gradient">{profile.firstName}</span>
            <br />I build products
            <br />
            people love.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : undefined}
            transition={{ delay: 0.4 }}
            className="mt-6 flex h-8 items-center gap-3 font-mono text-base text-white/70 md:text-lg"
          >
            <span className="text-[#ff6b5b]">&gt;</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={ready ? { opacity: 1, y: 0 } : undefined}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                {heroRoles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ready ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff6b5b] to-[#f5a35b] px-6 py-3 font-semibold text-white shadow-lg shadow-[#ff6b5b]/25 transition hover:scale-[1.03]"
            >
              View my work
              <ArrowDownRight size={18} className="transition group-hover:rotate-[-45deg]" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <Mail size={18} /> Let&apos;s talk
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : undefined}
            transition={{ delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/50"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} /> India
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Globe2 size={15} /> Working with US clients
            </span>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={ready ? { opacity: 1, scale: 1 } : undefined}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[380px]"
        >
          <div className="animate-spin-slow absolute -inset-6 rounded-full bg-[conic-gradient(from_0deg,#ff6b5b,#f5c26b,transparent_40%,#ff6b5b)] opacity-50 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#141419]">
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={512}
              height={512}
              priority
              className="aspect-[4/5] w-full object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
            <p className="absolute bottom-5 left-5 font-display text-lg font-semibold text-white/90">
              &ldquo;{profile.tagline}&rdquo;
            </p>
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="glass absolute -left-6 top-10 flex items-center gap-3 rounded-2xl bg-[#0a0a0f]/70 px-4 py-3"
          >
            <span className="font-display text-2xl font-bold text-gradient">2+</span>
            <span className="text-xs leading-tight text-white/70">
              Years
              <br />
              experience
            </span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="glass absolute -right-4 bottom-20 flex items-center gap-2 rounded-2xl bg-[#0a0a0f]/70 px-4 py-3"
          >
            <Award size={20} className="text-[#f5c26b]" />
            <span className="text-xs leading-tight text-white/80">
              Best Performer
              <br />
              <span className="text-white/50">Q1 2025</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
