"use client";

import { motion } from "framer-motion";

export default function ProjectCard({ title, image, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="glass-panel rounded-2xl p-4 cursor-pointer"
    >
      <img src={image} alt={title} className="rounded-xl mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="opacity-70">{desc}</p>
    </motion.div>
  );
}
