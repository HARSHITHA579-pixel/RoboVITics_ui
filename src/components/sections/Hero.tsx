"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import TextReveal from "../ui/TextReveal";
import MagneticButton from "../ui/MagneticButton";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <section ref={containerRef} className="min-h-[100dvh] w-full bg-transparent" />;

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-transparent"
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem'
          }} 
        />
        
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-accent/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <motion.div 
        style={{ y, opacity, scale }}
        className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-neon" />
          <span className="text-accent text-xs font-semibold tracking-widest uppercase">VIT Vellore</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-9xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tighter mb-6 flex justify-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              type: "spring",
              damping: 12,
              stiffness: 100,
              delay: 0.3,
            }}
          >
            <Image 
              src="/images/robovitics-logo.png"
              alt="RoboVITics"
              width={1200}
              height={200}
              className="w-auto h-12 md:h-[72px] lg:h-32 object-contain"
              priority
            />
          </motion.div>
        </h1>
        
        <div className="max-w-2xl mx-auto space-y-6 mb-12">
          <TextReveal 
            text="The Official Robotics Club." 
            className="text-xl md:text-3xl font-light text-white/90"
            delay={0.6}
          />
          <TextReveal 
            text="Innovation is when Imagination meets Ambition. We are ardent tech enthusiasts with the zeal to learn, build, and a thirst to be the best."
            className="text-base md:text-lg text-muted font-light leading-relaxed"
            delay={0.8}
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <MagneticButton className="bg-white text-black hover:bg-white/90 border-transparent w-48 font-semibold">
            Explore Domains
          </MagneticButton>
          <MagneticButton className="w-48 text-white">
            View Projects
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
