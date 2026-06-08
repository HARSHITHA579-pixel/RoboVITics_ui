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

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-24 xl:gap-32">

          {/* Image Side - First on mobile, Left on desktop */}
          <div className="w-full md:w-1/2 relative aspect-[4/3] lg:aspect-[5/4]">
            <div className="relative w-full h-full rounded-3xl overflow-hidden bg-surface border border-white/10 shadow-2xl">
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
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent z-10 pointer-events-none mix-blend-overlay" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none z-20" />
            </div>
          </div>

          {/* Content Side - Second on mobile, Right on desktop */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="flex flex-col items-start bg-black/40 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-white/5 shadow-2xl relative z-10"
            >
              <motion.div variants={itemVariants} className="mb-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-muted text-xs font-semibold tracking-widest uppercase">The Institution</span>
                </div>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="mb-8 text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight"
              >
                Vellore Institute of Technology
              </motion.h2>

              <div className="space-y-6 text-lg md:text-xl text-muted font-light leading-relaxed max-w-xl">
                <motion.p variants={itemVariants}>
                  Founded by G. Viswanathan in 1984, its mission is to improve students' lives through excellence in education and research.
                </motion.p>
                <motion.p variants={itemVariants}>
                  The Department of Student Welfare plays an irreplaceable role in creating a lively, fun, and resourceful community for students,
                </motion.p>
                <motion.p variants={itemVariants}>
                  joining hands with clubs so every student finds an environment to learn and grow together.
                </motion.p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
