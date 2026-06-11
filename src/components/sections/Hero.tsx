"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Interactive3DRobot from "../ui/interactive-3d-robot";

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
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between min-h-[100dvh] pt-24 pb-12 md:py-0"
      >
        {/* Left Column: Logo and Subtitle */}
        <div className="w-full md:w-3/5 flex justify-center md:justify-start md:pl-8 lg:pl-16 z-20">
          <div className="flex flex-col items-start">
            <h1 className="mb-5 flex justify-start w-full">
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
                  className="w-auto h-11 md:h-16 lg:h-[90px] object-contain object-left"
                  priority
                />
              </motion.div>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <p className="text-lg md:text-2xl lg:text-3xl text-white/75 font-normal leading-normal tracking-wide text-left md:whitespace-nowrap pl-1">
                The Official Robotics Club of VIT Vellore
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Interactive 3D Robot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full h-[50vh] md:w-[40%] md:h-[80vh] relative z-10 flex items-center justify-center mt-12 md:mt-0"
        >
          <div className="w-full h-full max-w-[600px] max-h-[800px] relative pointer-events-auto">
            <Interactive3DRobot />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none"
      >
        <span className="text-xs text-white/50 tracking-[0.2em] uppercase">Scroll</span>
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
