"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function PinnedVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Fade-in and slide-up animations for each word based on scroll progress
  const opacity1 = useTransform(scrollYProgress, [0.05, 0.25], [0, 1]);
  const y1 = useTransform(scrollYProgress, [0.05, 0.25], [40, 0]);

  const opacity2 = useTransform(scrollYProgress, [0.28, 0.48], [0, 1]);
  const y2 = useTransform(scrollYProgress, [0.28, 0.48], [40, 0]);

  const opacity3 = useTransform(scrollYProgress, [0.51, 0.71], [0, 1]);
  const y3 = useTransform(scrollYProgress, [0.51, 0.71], [40, 0]);

  const opacity4 = useTransform(scrollYProgress, [0.74, 0.95], [0, 1]);
  const y4 = useTransform(scrollYProgress, [0.74, 0.95], [40, 0]);

  return (
    <section ref={containerRef} className="relative h-[300dvh] w-full bg-background">
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        {/* Cinematic Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Premium Dark Gradient Overlays for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-black/20" />

        {/* Sequential Text Overlay Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <motion.h2
              style={{ opacity: opacity1, y: y1 }}
              className="text-5xl md:text-7xl lg:text-9xl font-heading font-black text-white drop-shadow-2xl tracking-tighter uppercase"
            >
              Innovation
            </motion.h2>
            <motion.h2
              style={{ opacity: opacity2, y: y2 }}
              className="text-5xl md:text-7xl lg:text-9xl font-heading font-black text-white drop-shadow-2xl tracking-tighter uppercase"
            >
              Engineering
            </motion.h2>
            <motion.h2
              style={{ opacity: opacity3, y: y3 }}
              className="text-5xl md:text-7xl lg:text-9xl font-heading font-black text-white drop-shadow-2xl tracking-tighter uppercase"
            >
              Robotics
            </motion.h2>
            <motion.h2
              style={{ opacity: opacity4, y: y4 }}
              className="text-5xl md:text-7xl lg:text-9xl font-heading font-black text-white drop-shadow-[0_0_30px_rgba(0,240,255,0.3)] tracking-tighter uppercase"
            >
              Competition
            </motion.h2>
          </div>
        </div>
      </div>
    </section>
  );
}
