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
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center pb-24 md:pb-32">
        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[65%] mx-auto text-center">

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 md:mb-12 flex justify-center gap-2 md:gap-3">
            {["About", "Us"].map((line, i) => (
              <span key={i} className="block overflow-hidden pb-2">
                <motion.span
                  className="block"
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.33, 1, 0.68, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed flex flex-col gap-5 md:gap-6 px-2 md:px-0"
          >
            <p className="italic font-medium text-white/90">
              “Innovation is when Imagination meets Ambition”
            </p>
            <p>
              We are a group of ardent tech enthusiasts with the zeal to learn, to build and a thirst to be the best. A small group of passionate techies exploring different domains of technology has now blossomed into the official Robotics Club of VIT, Vellore.
            </p>
            <p>
              Our mission is to spread knowledge about robotics by organizing various free workshops and seminars that help people discover their technical niches and build their own projects.
            </p>
            <p>
              Our members collaborate on incredible projects, nurture award-winning teams that represent us across the globe, and continue to bring recognition to RoboVITics through innovation and excellence.
            </p>
            <p>
              With pride, every RoboVITian strives to uphold the legacy established by our predecessors while inspiring the next generation of robotics enthusiasts.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 2. Full-Screen Cinematic Video */}
      <div ref={videoContainerRef} className="relative w-full h-[100dvh] overflow-hidden bg-black">
        <motion.div
          style={{ scale, opacity, y, top: "-15%", height: "130%" }}
          className="absolute left-0 right-0 w-full"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src="/videos/robovitics-video.mp4" type="video/mp4" />
          </video>
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
              "drop-shadow(0 0 10px rgba(79,174,243,0.3))",
              "drop-shadow(0 0 25px rgba(79,174,243,0.8))",
              "drop-shadow(0 0 10px rgba(79,174,243,0.3))"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mb-16"
        >
          <svg
            viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="w-[70px] h-[100px] md:w-[100px] md:h-[140px]"
          >
            {/* Main sweeping curved arrow path */}
            <path d="M 20 30 C 100 30, 140 80, 140 150" stroke="#4FAEF3" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
            {/* Bold Arrowhead */}
            <path d="M 105 115 L 140 150 L 175 115" stroke="#4FAEF3" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
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
          className="group relative inline-flex items-center gap-3 md:gap-4 bg-[#0a0a0a] border border-white/10 text-white px-6 py-4 md:px-10 md:py-5 rounded-full font-semibold text-base md:text-lg overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-[0_0_30px_-5px_rgba(79,174,243,0.3)] shadow-2xl"
        >
          <span className="relative z-10 group-hover:text-accent transition-colors duration-300 tracking-wide">Read Our Magazine</span>
        </motion.a>

      </div>

    </section>
  );
}
