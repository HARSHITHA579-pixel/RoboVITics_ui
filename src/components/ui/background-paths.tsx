"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface PathData {
  id: number;
  d: string;
  opacityArray: number[];
  width: number;
  duration: number;
  delay: number;
  pathLength: number;
}

export function BackgroundPaths({ className, global = false }: { className?: string, global?: boolean }) {
  const [paths, setPaths] = useState<PathData[]>([]);

  useEffect(() => {
    // Generate exactly 40 paths to form a cohesive bundle
    const numPaths = 40;
    const generatedPaths: PathData[] = Array.from({ length: numPaths }).map((_, i) => {
      const rand = () => Math.random();

      // Bundle spread: we want them to flow together as a stream
      const spread = 500;
      const offsetX = (rand() - 0.5) * spread;
      const offsetY = (rand() - 0.5) * spread;

      // Bottom-Left origin
      const startX = -200 + offsetX;
      const startY = 1000 + offsetY;

      // Top-Right destination
      const endX = 1400 + offsetX;
      const endY = -200 + offsetY;

      // Coordinated wave pattern control points
      const cp1X = 200 + offsetX + (rand() - 0.5) * 100;
      const cp1Y = 800 + offsetY + (rand() - 0.5) * 100;

      const cp2X = 1000 + offsetX + (rand() - 0.5) * 100;
      const cp2Y = 200 + offsetY + (rand() - 0.5) * 100;

      // Varying opacity per line to create depth
      const opacityTier = rand();
      let opacityArray: number[] = [];

      if (opacityTier > 0.8) {
        // Closest visible lines
        opacityArray = global ? [0.06, 0.12, 0.06] : [0.10, 0.18, 0.10];
      } else if (opacityTier > 0.4) {
        // Medium lines
        opacityArray = global ? [0.04, 0.08, 0.04] : [0.07, 0.12, 0.07];
      } else {
        // Distant lines
        const maxOp = 0.06 + rand() * 0.02;
        const finalMax = global ? maxOp * 0.7 : maxOp;
        opacityArray = [finalMax * 0.6, finalMax, finalMax * 0.6];
      }

      return {
        id: i,
        d: `M ${startX} ${startY} C ${cp1X} ${cp1Y} ${cp2X} ${cp2Y} ${endX} ${endY}`,
        opacityArray,
        width: 1 + rand(), // strokeWidth: 1px - 2px
        duration: 18 + rand() * 7, // Duration between 18 - 25 seconds
        delay: rand() * 20, // Timing variations
        pathLength: 0.3 + rand() * 0.4, // Segment length for the stream effect
      };
    });

    setPaths(generatedPaths);
  }, [global]);

  return (
    <div className={cn("inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center", global ? "fixed" : "absolute", className)}>
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="rgba(255, 255, 255, 1)"
            strokeWidth={path.width}
            strokeLinecap="round"
            initial={{
              pathOffset: 0,
              pathLength: path.pathLength,
              opacity: path.opacityArray[0]
            }}
            animate={{
              pathOffset: [0, 1],
              opacity: path.opacityArray
            }}
            transition={{
              duration: path.duration,
              repeat: Infinity,
              ease: "linear",
              delay: path.delay,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
