"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TextReveal from "../ui/TextReveal";
import MagneticButton from "../ui/MagneticButton";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["20%", "-40%"]);

  return (
    <section id="projects" ref={containerRef} className="relative py-32 overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4 md:mb-6">
            <TextReveal text="Pioneering Robotics" />
          </h2>
          <p className="text-lg md:text-xl text-muted font-light px-2">
            Members collaborate across all domains to build innovative robotics and technology projects.
          </p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            style={{ y: y1 }}
            className="order-2 lg:order-1 space-y-6 md:space-y-8"
          >
            <h3 className="text-4xl sm:text-5xl md:text-7xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-muted tracking-tighter break-words">
              SPIDERBOT
            </h3>
            
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-muted font-light">
              <p>
                A robot with a spider-like design and a unique walking mechanism based on the Klann linkage mechanism, which helps it move through rough terrain with ease.
              </p>
              <p>
                The 8-legged bot is assembled using 3D-printed components and can be programmed to perform dangerous tasks where human involvement is impossible or risky.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-y border-white/10">
              {['Bomb Defusing', 'Land Mine Detection', 'Underwater Surveillance'].map((task, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-sm font-medium text-white/80">{task}</span>
                </div>
              ))}
            </div>
            
            <MagneticButton className="bg-white text-black hover:bg-white/90 border-transparent font-semibold">
              View Case Study
            </MagneticButton>
          </motion.div>

          <motion.div 
            style={{ y: y2 }}
            className="order-1 lg:order-2 relative h-[350px] sm:h-[400px] lg:h-[500px] w-full rounded-[2rem] border border-white/10 bg-background overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-background to-background" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64 scale-75 sm:scale-100">
                <motion.div 
                  className="absolute inset-0 m-auto w-24 h-24 bg-surface border border-accent/40 rounded-full shadow-neon flex items-center justify-center z-20"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
                  </div>
                </motion.div>
                
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-32 h-[1px] bg-gradient-to-r from-accent/50 to-transparent origin-left z-10"
                    style={{ rotate: `${i * 45}deg` }}
                    animate={{ width: ["8rem", "9rem", "8rem"], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                  />
                ))}
                
                <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
                  <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="none" stroke="currentColor" className="text-accent" strokeWidth="0.5" />
                  <polygon points="50 15 80 32 80 68 50 85 20 68 20 32" fill="none" stroke="currentColor" className="text-white" strokeWidth="0.5" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
