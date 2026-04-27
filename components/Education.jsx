"use client";
import { motion } from "framer-motion";

const education = [
  {
    period: "Jun 2021 — Apr 2024",
    title: "Bachelor's in Computer Applications",
    institute: "University Institute of Technology",
    score: "68%",
    location: "Kerala",
  },
  {
    period: "Jun 2019 — May 2021",
    title: "Computer Science",
    institute: "Govt. Model Boys Higher Secondary School, Thycaud",
    score: "83%",
    location: "Kerala",
  },
  {
    period: "Jun 2018 — May 2019",
    title: "High School",
    institute: "Kannasa Mission High School, Peyad",
    score: "87%",
    location: "Kerala",
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>

      <div className="relative mt-14 pl-6">

        {/* Static dotted line (background) */}
        <div className="absolute left-3 top-0 bottom-0 border-l-2 border-dashed border-purple-800/40" />

        {/* Animated dotted line (fill) */}
        <motion.div
          className="absolute left-3 top-0 border-l-2 border-dashed border-purple-500"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              {/* Timeline dot */}
              <span className="absolute -left-[2px] top-2 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_18px_rgba(168,85,247,0.9)]" />

              {/* Card */}
              <div className="glass p-6 rounded-2xl border border-purple-900/40 ml-6">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                  <h3 className="text-xl font-semibold text-purple-300">
                    {edu.title}
                  </h3>
                  <span className="text-sm text-gray-400">{edu.period}</span>
                </div>

                <p className="mt-1 text-gray-300">{edu.institute}</p>

                <div className="mt-2 flex gap-4 text-sm text-gray-400">
                  <span>📍 {edu.location}</span>
                  <span>🎯 {edu.score}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
