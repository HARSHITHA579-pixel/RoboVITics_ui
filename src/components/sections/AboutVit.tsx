"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";



export default function AboutVit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax movement for the image
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  // Slow zoom effect for the image
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98]
      }
    }
  };

  return (
    <section
      id="about-vit"
      ref={containerRef}
      className="relative min-h-[110dvh] flex items-center pt-20 pb-20 md:pt-28 md:pb-32 overflow-hidden bg-transparent"
    >

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-[90rem]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-20">

          {/* Image Side - Increased size, better proportions */}
          <div className="w-full lg:w-[48%] xl:w-[50%] relative aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] xl:aspect-[16/11] shrink-0">
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-surface border border-white/10 shadow-2xl">
              <motion.div
                className="absolute left-0 right-0 w-full"
                style={{ top: "-15%", height: "130%", y, scale }}
              >
                <img
                  src="/images/vit.png"
                  alt="VIT"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Subtle overlays for premium feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent z-10 pointer-events-none mix-blend-overlay" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem] pointer-events-none z-20" />
            </div>
          </div>

          {/* Content Side - Wider card, shifted right */}
          <div className="w-full lg:w-[52%] xl:w-[50%] flex flex-col justify-center lg:pl-4 xl:pl-12 lg:translate-x-4 xl:translate-x-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="flex flex-col items-start bg-black/40 backdrop-blur-2xl p-8 md:p-12 lg:p-14 rounded-[2rem] border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] relative z-10 w-full"
            >

              <motion.h2
                variants={itemVariants}
                className="mb-8 text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold text-white leading-[1.1] tracking-tight"
              >
                Vellore Institute of<br className="hidden md:block" /> Technology
              </motion.h2>

              <div className="space-y-6 text-lg md:text-xl text-muted font-light leading-relaxed w-full">
                <motion.p variants={itemVariants}>
                  Founded by G. Viswanathan in 1984, its mission is to improve students' lives through excellence in education and research.
                </motion.p>
                <motion.p variants={itemVariants}>
                  The Department of Student Welfare plays an irreplaceable role in creating a lively, fun, and resourceful community for students, joining hands with clubs so every student finds an environment to learn and grow together.
                </motion.p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
