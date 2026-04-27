"use client";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Mobile",
    skills: ["Flutter", "Dart", "Riverpod", "Provider"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend & Realtime",
    skills: ["Node.js", "Firebase", "REST APIs", "WebSockets"],
  },
  {
    title: "Database & Tools",
    skills: ["MongoDB", "Git", "Razorpay", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle title="Skills" />

      <div className="grid gap-10 mt-12">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: groupIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-purple-400 font-semibold mb-4 text-sm tracking-wider uppercase">
              {group.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {group.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="glass text-purple-300 text-center py-4 rounded-xl font-medium border border-purple-900/40 shadow-lg shadow-black/40 hover:shadow-purple-600/30 hover:-translate-y-1 hover:text-purple-200 transition-all cursor-default"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: index * 0.05,
                  }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}