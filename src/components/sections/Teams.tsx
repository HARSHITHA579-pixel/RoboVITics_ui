"use client";

import { motion } from "framer-motion";
import TextReveal from "../ui/TextReveal";
import { Shield, ExternalLink, Users } from "lucide-react";
import Sponsors from "./Sponsors";
import Memories from "./Memories";

const boardMembers = [
  { role: "Chairperson", name: "Aryan Bharuka" },
  { role: "Vice-Chairperson", name: "Aniruddh Chowdhury" },
  { role: "Secretary", name: "Dhruv Agrawal" },
  { role: "Co-Secretary", name: "Srinidhi Balaji" },
  { role: "Projects Head", name: "Yash Bajpai" },
  { role: "R&D Head", name: "Chaitanya Tejaswi" },
  { role: "Tech Head", name: "Anirudha Dhawale" },
  { role: "Events Head", name: "Aravind B" },
];

export default function Teams() {
  return (
    <section id="teams" className="relative py-32 overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* TEAM ORCUS */}
        <div className="mb-32">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black text-white mb-6 tracking-tighter break-words">
                <TextReveal text="TEAM ORCUS" />
              </h2>
              <p className="text-xl text-muted font-light leading-relaxed mb-8">
                The combat robotics division of RoboVITics. We independently design and manufacture combat robots from scratch.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-white font-bold mb-2">Founded</h4>
                  <p className="text-muted">2016</p>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">Principles</h4>
                  <p className="text-muted">Authenticity • Originality</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="text-white font-bold">Notable Robots:</h4>
                <div className="flex flex-wrap gap-3">
                  {['RAVEN (60Kg)', 'VULCAN (15Kg)', 'INSOMNIA'].map((bot, i) => (
                    <span key={i} className="px-4 py-2 rounded-full border border-white/10 bg-surface text-sm text-muted">
                      {bot}
                    </span>
                  ))}
                </div>
              </div>

              <a 
                href="http://teamorcus.in" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors"
              >
                Visit teamorcus.in <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            <div className="relative h-[400px] rounded-3xl border border-white/10 bg-surface overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-background to-surface z-0" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20 z-0 mix-blend-overlay" />
              
              <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-8">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-32 h-32 rounded-full bg-background border border-accent/30 shadow-neon flex items-center justify-center mb-8"
                >
                  <Shield className="w-12 h-12 text-accent" />
                </motion.div>
                <div className="text-center">
                  <p className="text-white font-heading text-2xl tracking-widest font-bold mb-2">ORCUS</p>
                  <p className="text-accent text-sm tracking-widest uppercase">Dedication • Perseverance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Sponsors />
        <Memories />

        {/* CORE BOARD */}
        <div>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              <TextReveal text="Core Board Members" />
            </h2>
            <p className="text-muted">The minds driving the vision of RoboVITics forward.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {boardMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl bg-surface border border-white/5 hover:border-white/20 transition-colors flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-background border border-white/10 flex items-center justify-center text-muted mb-4 group-hover:text-accent group-hover:border-accent/30 transition-colors">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-white font-bold mb-1">{member.name}</h3>
                <p className="text-accent text-xs font-semibold tracking-wider uppercase">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
