"use client";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { ExternalLink, Code2, Layers } from "lucide-react"; // Optional: npm install lucide-react

const projects = [
  {
    title: "Famto – Food Delivery App (Customer)",
    desc: "Production Flutter app for customers with food ordering, pick & drop, live order tracking, wallet, subscriptions, and Razorpay payments.",
    tech: ["Flutter", "Node.js", "MongoDB", "Sockets", "Razorpay"],
    link: "#",
  },
  {
    title: "Famto Agent – Delivery Partner App",
    desc: "Flutter app for delivery agents with real-time order assignment, live navigation, earnings tracking, and background location updates.",
    tech: ["Flutter", "Real-time Tracking", "Geolocation", "Sockets"],
    link: "#",
  },
  {
    title: "Famto Business – Merchant App",
    desc: "Merchant-side Flutter app for managing products, categories, prices, availability, order status, and daily earnings.",
    tech: ["Flutter", "REST APIs", "Product Management"],
    link: "#",
  },
  {
    title: "Famto Admin Panel – Web Dashboard",
    desc: "Admin web panel to manage users, merchants, agents, orders, categories, banners, pricing, and analytics with role-based access.",
    tech: ["React", "Node.js", "MongoDB", "Admin APIs"],
    link: "#",
  },
  {
    title: "Ambi’s Kitchen – Restaurant Website",
    desc: "Production Next.js website with GSAP animations, responsive UI, SEO optimization, CMS support, and server/domain deployment.",
    tech: ["Next.js", "GSAP", "Tailwind CSS", "SEO"],
    link: "https://ambiskitchen.in",
  },
  {
    title: "Scholar Hub – College Project",
    desc: "React-based academic platform for sharing notes, resources, and announcements with authentication and role-based access.",
    tech: ["React", "Firebase", "Auth"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 blur-[120px] pointer-events-none -z-10" />

      <SectionTitle title="Featured Projects" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group relative flex flex-col p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.07] transition-all duration-300"
          >
            {/* Minimalist Icon Header */}
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                <Layers size={24} />
              </div>
              {p.link !== "#" && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
              {p.title}
            </h3>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              {p.desc}
            </p>

            {/* Tech Stack - Modern Styled Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {p.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-black/40 border border-white/5 rounded-md text-gray-300 group-hover:border-purple-500/30 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Subtle Hover Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}