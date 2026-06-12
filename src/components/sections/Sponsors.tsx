"use client";

import { motion } from "framer-motion";
import TextReveal from "../ui/TextReveal";

const sponsors = [
  "Siemens",
  "Analog Devices Inc. (ADI)",
  "Autodesk",
  "Persistence Systems"
];

export default function Sponsors() {
  return (
    <div className="mb-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
          <TextReveal text="Our Sponsors" />
        </h2>
        <p className="text-muted">Proudly supported by industry leaders.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sponsors.map((sponsor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-center p-6 md:p-8 rounded-2xl bg-surface border border-white/5 hover:border-accent/30 transition-all duration-300 group"
          >
            <p className="text-xl font-heading font-semibold text-white/50 group-hover:text-accent transition-colors text-center">
              {sponsor}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
