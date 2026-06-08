"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const row1Data = [
  { text: "WHO ARE WE? ROBOVITICS", image: "/images/event_photo_1.png" },
  { text: "WHO ARE WE? ROBOVITICS", image: "/images/event_photo_2.png" },
  { text: "WHO ARE WE? ROBOVITICS", image: "/images/event_photo_1.png" },
  { text: "WHO ARE WE? ROBOVITICS", image: "/images/event_photo_2.png" },
];

const row2Data = [
  { text: "WHAT DO WE DO? ROBOWARS", image: "/images/robowars_1.png" },
  { text: "WHAT DO WE DO? ROBOWARS", image: "/images/robowars_2.png" },
  { text: "WHAT DO WE DO? ROBOWARS", image: "/images/robowars_1.png" },
  { text: "WHAT DO WE DO? ROBOWARS", image: "/images/robowars_2.png" },
];

export default function WhoWeAreMarquee() {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden w-full bg-transparent flex flex-col gap-6 md:gap-10">
      
      {/* Row 1: Moving Left */}
      <div className="flex w-full overflow-hidden">
        <motion.div
          className="flex items-center gap-6 md:gap-10 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35,
          }}
        >
          {[...row1Data, ...row1Data].map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 md:gap-10 shrink-0">
              <span className="text-[32px] md:text-[48px] font-heading font-[800] text-white tracking-tighter uppercase leading-none whitespace-nowrap">
                {item.text}
              </span>
              <div className="relative w-[160px] h-[55px] md:w-[250px] md:h-[80px] overflow-hidden rounded-full shrink-0">
                <Image
                  src={item.image}
                  alt="Marquee image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Moving Right */}
      <div className="flex w-full overflow-hidden">
        <motion.div
          className="flex items-center gap-6 md:gap-10 w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {[...row2Data, ...row2Data].map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 md:gap-10 shrink-0">
              <span className="text-[32px] md:text-[48px] font-heading font-[800] text-white tracking-tighter uppercase leading-none whitespace-nowrap">
                {item.text}
              </span>
              <div className="relative w-[160px] h-[55px] md:w-[250px] md:h-[80px] overflow-hidden rounded-full shrink-0">
                <Image
                  src={item.image}
                  alt="Marquee image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
