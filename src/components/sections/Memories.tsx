"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import TextReveal from "../ui/TextReveal";

export default function Memories() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div ref={containerRef} className="mb-32 overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
          <TextReveal text="Memories" />
        </h2>
        <p className="text-muted">Timeless treasures of our club.</p>
      </div>

      <div 
        ref={scrollContainerRef}
        className={`w-full overflow-x-auto overflow-y-hidden pb-8 select-none memories-scroll ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ scrollbarWidth: "thin", WebkitOverflowScrolling: "touch" }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          .memories-scroll::-webkit-scrollbar { height: 6px; }
          .memories-scroll::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); border-radius: 10px; }
          .memories-scroll::-webkit-scrollbar-thumb { background: rgba(79, 174, 243, 0.3); border-radius: 10px; }
          .memories-scroll::-webkit-scrollbar-thumb:hover { background: rgba(79, 174, 243, 0.6); }
        `}} />
        
        <div className="flex flex-col gap-6 w-max px-6">
          <motion.div style={{ x: x1 }} className="flex gap-6 w-max">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div 
                key={`row1-${i}`}
                className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-surface border border-white/10 overflow-hidden group relative flex-shrink-0"
              >
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center text-white/20 group-hover:text-accent/50 transition-colors">
                  <span className="font-heading font-bold tracking-widest">IMAGE {i + 1}</span>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div style={{ x: x2 }} className="flex gap-6 w-max -ml-32">
            {[6, 7, 8, 9, 10].map((_, i) => (
              <div 
                key={`row2-${i}`}
                className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-surface border border-white/10 overflow-hidden group relative flex-shrink-0"
              >
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center text-white/20 group-hover:text-accent/50 transition-colors">
                  <span className="font-heading font-bold tracking-widest">IMAGE {i + 6}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
