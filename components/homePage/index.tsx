import About from "@/components/portfolio/about";
import Achievements from "@/components/portfolio/achievements";
import Contact from "@/components/portfolio/contact";
import Experience from "@/components/portfolio/experience";
import Hero from "@/components/portfolio/hero";
import Intro from "@/components/portfolio/intro";
import Navbar from "@/components/portfolio/navbar";
import Projects from "@/components/portfolio/projects";
import Skills from "@/components/portfolio/skills";

export default function Homepage() {
  return (
    <main className="portfolio relative overflow-x-hidden">
      <Intro />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
    </main>
  );
}
