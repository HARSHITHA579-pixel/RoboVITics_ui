"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TextReveal from "../ui/TextReveal";

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  // Scroll logic for the video reveal (scale & opacity)
  const { scrollYProgress: revealProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start end", "center center"],
  });

  // Scroll logic for continuous subtle parallax
  const { scrollYProgress: parallaxProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start end", "end start"],
  });

  // Smooth cinematic reveal transforms
  const scale = useTransform(revealProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(revealProgress, [0, 1], [0.3, 1]);
  
  // Parallax transform - slightly moving the video opposite to scroll direction
  const y = useTransform(parallaxProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="about" ref={containerRef} className="relative w-full bg-transparent flex flex-col pt-32 md:pt-40">
      
      {/* 1. Heading & Description */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-background mb-8 shadow-lg"
          >
            <span className="text-accent text-xs font-semibold tracking-widest uppercase">About Us</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight">
            <TextReveal text="Passionate techies exploring different domains of technology." />
          </h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted font-light leading-relaxed max-w-3xl mx-auto"
          >
            What started as a small group has blossomed into the official Robotics Club of VIT, Vellore. We are ardent tech enthusiasts with the zeal to learn, to build, and a thirst to be the best.
          </motion.p>
        </div>
      </div>

      {/* 2. Full-Screen Cinematic Video */}
      <div ref={videoContainerRef} className="relative w-full h-[100dvh] overflow-hidden bg-black">
        <motion.div 
          style={{ scale, opacity, y, top: "-15%", height: "130%" }}
          className="absolute left-0 right-0 w-full"
        >
          <video
            src="/videos/RoboVITics_video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Subtle dark overlay for premium cinematic feel */}
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.25)" }} />
        </motion.div>
      </div>

      {/* 3. Transition Area */}
      <div className="relative w-full flex flex-col items-center justify-center py-24 md:py-32 z-10 bg-transparent">
        
        {/* Premium Animated Curved Arrow */}
        <motion.div 
          animate={{ 
            y: [0, 10, 0], 
            rotate: [0, 2, -1, 0],
            filter: [
              "drop-shadow(0 0 10px rgba(0,229,255,0.3))",
              "drop-shadow(0 0 25px rgba(0,229,255,0.8))",
              "drop-shadow(0 0 10px rgba(0,229,255,0.3))"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mb-16"
        >
          <svg 
            width="100" height="140" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            {/* Main sweeping curved arrow path */}
            <path d="M 20 30 C 100 30, 140 80, 140 150" stroke="#00E5FF" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
            {/* Bold Arrowhead */}
            <path d="M 105 115 L 140 150 L 175 115" stroke="#00E5FF" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>

        {/* Magazine Button */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center gap-4 bg-[#0a0a0a] border border-white/10 text-white px-10 py-5 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-[0_0_30px_-5px_rgba(0,255,255,0.15)] shadow-2xl"
        >
          <span className="relative z-10 group-hover:text-accent transition-colors duration-300 tracking-wide">Read Our Magazine</span>
        </motion.a>

      </div>

    </section>
  );
}
