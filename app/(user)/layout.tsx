import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Mathan M — Full Stack Developer",
  description:
    "Mathan M is a Full Stack Developer with 2+ years of experience building React, Next.js, TypeScript and FastAPI applications for US-based clients.",
  openGraph: {
    title: "Mathan M — Full Stack Developer",
    description: "React · Next.js · TypeScript · FastAPI · PostgreSQL. Working with US clients.",
    images: ["/mathan.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Hide the intro before first paint on repeat visits / reduced motion (no flash). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem("mathan-intro-seen")==="1"||matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.dataset.introSeen="1"}catch(e){}`,
          }}
        />
      </head>
      <body className="bg-[#0a0a0f] font-sans antialiased">{children}</body>
    </html>
  );
}
