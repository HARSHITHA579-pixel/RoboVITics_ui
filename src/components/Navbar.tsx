"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import MagneticButton from "./ui/MagneticButton";
import Image from "next/image";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Events", href: "#events" },
  { name: "Domains", href: "#domains" },
  { name: "Projects", href: "#projects" },
  { name: "Teams", href: "#teams" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!mounted) return;
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setHasScrolled(latest > 50);
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        hasScrolled ? "bg-background/70 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="text-xl font-heading font-bold tracking-widest text-white flex items-center gap-2">
          <Image 
            src="/images/robovitics-logo.png"
            alt="RoboVITics"
            width={600}
            height={100}
            className="w-auto h-6 md:h-8 object-contain"
            priority
          />
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a 
              key={i} 
              href={link.href}
              className="text-sm font-medium text-muted hover:text-accent transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        <MagneticButton className="hidden md:flex text-sm font-semibold border-accent/30 hover:border-accent">
          Contact Us
        </MagneticButton>

        <button 
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden flex flex-col gap-1.5 p-3"
          aria-label="Open menu"
        >
          <span className="w-6 h-0.5 bg-white block" />
          <span className="w-4 h-0.5 bg-white block" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl md:hidden flex flex-col pt-24 px-6 pb-6 h-[100dvh] overflow-y-auto"
          >
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div className="flex flex-col gap-6 items-center w-full mt-12">
              {navLinks.map((link, i) => (
                <a 
                  key={i} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-medium text-white hover:text-accent transition-colors tracking-wide py-4 w-full text-center"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-8 w-full flex justify-center">
                <MagneticButton className="text-base font-semibold border-accent/30 hover:border-accent w-full max-w-[200px] py-4">
                  Contact Us
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
