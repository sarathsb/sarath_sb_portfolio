"use client";

import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: "GitHub",
      href: "https://github.com/sarathsb",
      color: "hover:text-white",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sarath-sb/",
      color: "hover:text-blue-400",
    },
    {
      icon: <Instagram size={20} />,
      label: "Instagram",
      href: "https://www.instagram.com/yourusername",
      color: "hover:text-pink-400",
    },
  ];

  return (
    <section id="contact" className="section py-24 text-center">
      <SectionTitle title="Let’s Work Together" />

      <div className="max-w-3xl mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-gray-400 mt-6 text-lg leading-relaxed"
        >
          I’m a Flutter & React developer currently open to new opportunities.
          Whether you want to build a delivery platform, real-time system,
          animation-rich UI, or discuss an idea — my inbox is always open.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-12"
        >
          <a
            href="mailto:sarathsb2003@gmail.com"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-purple-600 text-white font-semibold rounded-2xl hover:bg-purple-700 transition-all duration-300 shadow-lg shadow-purple-500/25"
          >
            <Mail className="group-hover:animate-bounce" />
            sarathsb2003@gmail.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-2 mt-8 text-gray-500 text-sm"
        >
          <MapPin size={16} className="text-purple-500" />
          <span>Based in Trivandrum, India • Open to Remote Work</span>
        </motion.div>

        <hr className="my-14 border-gray-800 w-1/4 mx-auto" />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex justify-center gap-10"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-2 text-gray-400 transition-colors duration-300 ${link.color}`}
            >
              <div className="p-3 bg-gray-900 rounded-full border border-gray-800 hover:border-gray-600 transition-all hover:scale-110">
                {link.icon}
              </div>
              <span className="text-xs font-medium uppercase tracking-widest">
                {link.label}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}