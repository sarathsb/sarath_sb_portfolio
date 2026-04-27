"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="section flex flex-col items-center text-center space-y-6">

      <motion.img
        src="/sarath.jpg"
        alt="Sarath S B"
        className="w-48 h-48 rounded-full border border-purple-400 shadow-lg object-cover"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />


      <div>
        <motion.h1
          className="text-5xl font-extrabold title-gradient"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Sarath S B
        </motion.h1>

        <p className="mt-3 text-gray-300 max-w-2xl mx-auto leading-relaxed">
          I'm a <span className="text-purple-400 font-medium">Flutter & React Developer </span>  
    from Trivandrum, specializing in building high-performance delivery apps, real-time systems, smooth animations, and modern full-stack user interfaces. I focus on clean architecture, scalable code, and great user experience.
        </p>
      </div>

      <a
        href="#contact"
        className="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition text-white font-medium"
      >
        Hire Me
      </a>
    </section>
  );
}
