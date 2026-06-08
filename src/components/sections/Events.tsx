"use client";

import { motion } from "framer-motion";
import TextReveal from "../ui/TextReveal";
import { Calendar, Cpu, Box, Sword, Wrench } from "lucide-react";

const events = [
  {
    title: "ROBOWARS",
    tagline: "Sparks fly as metal crushes metal.",
    description: "The flagship event of Gravitas (VIT's annual tech fest). A Robot Combat Competition where participants from around the globe battle for the coveted RoboWars Champion Title.",
    icon: Sword,
    highlight: true,
  },
  {
    title: "EQUINOX",
    tagline: "36-Hour Hackathon",
    description: "A jam-packed 36-hour hackathon/tech session where participants share ideas and creativity. Mentors and mini workshops with abundant resources are available throughout.",
    icon: Cpu,
    highlight: false,
  },
  {
    title: "VORTEX 360",
    tagline: "CAD Modelling Hackathon",
    description: "Powered by AutoDesk. Designers are inspired to let their creative juices flow. Theme: 'Design is not just what it looks like and feels like. Design is how it works.'",
    icon: Box,
    highlight: false,
  },
  {
    title: "HANDS ON ROBOTICS",
    tagline: "Annual Workshop",
    description: "Focused on learning basic skills to design fully functional mobile Arduino robots including Line Followers and Obstacle Avoiders.",
    icon: Wrench,
    highlight: false,
  },
];

export default function Events() {
  return (
    <section id="events" className="relative py-32 overflow-hidden bg-transparent">
      {/* Abstract Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[1px] border-white/5 rounded-full" />
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[1px] border-white/10 rounded-full border-dashed" />
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <Calendar className="w-4 h-4 text-accent" />
            <span className="text-muted text-xs font-semibold tracking-widest uppercase">Calendar</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            <TextReveal text="Flagship Events & Workshops" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-3xl border ${
                event.highlight ? "border-accent/40 bg-accent/5" : "border-white/10 bg-surface"
              } overflow-hidden group hover:border-accent/60 transition-colors`}
            >
              {event.highlight && (
                <div className="absolute top-0 right-0 p-4">
                  <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-bold tracking-widest rounded-full uppercase">
                    Flagship
                  </span>
                </div>
              )}
              
              <div className="w-12 h-12 rounded-xl bg-background border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-accent group-hover:scale-110 transition-all duration-300">
                <event.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-white mb-2">{event.title}</h3>
              <p className="text-accent text-sm font-medium tracking-wide mb-4">{event.tagline}</p>
              <p className="text-muted leading-relaxed font-light">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
