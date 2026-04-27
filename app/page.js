"use client";

import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Starfield from "@/lib/Starfield";
import Education from "@/components/Education";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <Starfield />

      {/* Content */}
      <div className="relative z-10">

        <Hero />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Contact />

      </div>
    </main>
  );
}
