"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer Specializing on Flutter",
    company: "Famto",
    period: "June 2024 – Present",
    points: [
      "Developed and maintained production-level Flutter apps for customers, delivery agents, and merchants.",
      "Built real-time order tracking using sockets and background location services.",
      "Implemented payment systems including Razorpay, wallet, and subscription flows.",
      "Created admin web panels using React for managing orders, users, merchants, and analytics.",
      "Worked closely with founders to design scalable app architecture and optimize performance.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section py-24">
      <SectionTitle title="Experience" />

      <div className="max-w-4xl mx-auto mt-12 space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass p-6 rounded-xl border border-gray-800"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-900/30 rounded-full">
                <Briefcase className="text-purple-400" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-purple-300">
                  {exp.role}
                </h3>
                <p className="text-gray-400">{exp.company}</p>
                <p className="text-sm text-gray-500 mt-1">{exp.period}</p>

                <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
