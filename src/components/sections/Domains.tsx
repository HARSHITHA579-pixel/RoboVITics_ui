"use client";

import { motion } from "framer-motion";
import TextReveal from "../ui/TextReveal";
import { Zap, Settings, BrainCircuit, ShieldAlert, Globe, Smartphone } from "lucide-react";

const domains = [
  { name: "ELECTRICAL", icon: Zap, color: "from-yellow-400 to-orange-500" },
  { name: "MECHANICAL", icon: Settings, color: "from-gray-300 to-gray-500" },
  { name: "ML & AI", icon: BrainCircuit, color: "from-purple-400 to-pink-500" },
  { name: "CYBERSECURITY", icon: ShieldAlert, color: "from-green-400 to-emerald-600" },
  { name: "WEB DEV", icon: Globe, color: "from-[#4FAEF3] to-[#2C6EA8]" },
  { name: "APP DEV", icon: Smartphone, color: "from-[#6BC0FF] to-[#4FAEF3]" },
];

export default function Domains() {
  return (
    <section id="domains" className="relative py-32 overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              <TextReveal text="Technical Domains" />
            </h2>
            <p className="text-xl text-muted font-light">
              We collaborate across diverse fields of technology to build comprehensive and innovative solutions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent group"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl" />
              <div className="relative h-full p-8 rounded-[22px] bg-surface border border-white/5 overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                  <domain.icon className="w-32 h-32" />
                </div>
                
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${domain.color} flex items-center justify-center mb-16 shadow-lg shadow-black/50`}>
                  <domain.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-white tracking-wide">{domain.name}</h3>
                
                <div className="mt-6 flex items-center gap-2 text-sm text-accent opacity-100 md:opacity-0 group-hover:opacity-100 transform translate-y-0 md:translate-y-2 group-hover:translate-y-0 transition-all">
                  <span>Explore</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
