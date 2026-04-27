"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="px-6 py-20 max-w-5xl mx-auto">
      <SectionTitle title="About Me" />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-lg opacity-80 leading-relaxed"
      >
        I am a passionate Flutter + React developer from Trivandrum.  
        I love building animations, real-time apps, clean UI and scalable systems.
      </motion.p>
    </section>
  );
}
