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
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    
    // Intersection Observer for scroll spy
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -80% 0px", // Trigger when the top of the section hits 20% down the viewport
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Initial check for hash
    if (window.location.hash) {
      setActiveSection(window.location.hash.substring(1));
    }

    navLinks.forEach((link) => {
      const el = document.getElementById(link.href.substring(1));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (!mounted) return;
    setHasScrolled(latest > 20);
  });

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        hasScrolled 
          ? "bg-[#050505]/60 backdrop-blur-xl border-b border-white/[0.08] py-4 shadow-[0_4px_30px_rgba(0,0,0,0.3)]" 
          : "bg-transparent py-6 border-b border-transparent shadow-none"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 relative z-10">
          <Image 
            src="/images/robovitics-logo.png"
            alt="RoboVITics"
            width={600}
            height={100}
            className="w-auto h-6 md:h-8 object-contain"
            priority
          />
        </div>
        
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            const isHovered = hoveredSection === link.href;

            return (
              <a 
                key={link.name} 
                href={link.href}
                onMouseEnter={() => setHoveredSection(link.href)}
                onMouseLeave={() => setHoveredSection(null)}
                className="relative px-4 py-2 text-sm font-medium tracking-wide transition-colors"
              >
                <span className={`relative z-10 transition-colors duration-200 ${isActive || isHovered ? "text-white" : "text-white/60"}`}>
                  {link.name}
                </span>
                
                {/* Magic Line */}
                {(isHovered || (isActive && !hoveredSection)) && (
                  <motion.div
                    layoutId="magicline"
                    className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#4FAEF3] rounded-full shadow-[0_0_8px_rgba(79,174,243,0.5)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <MagneticButton className="hidden md:flex text-sm font-semibold border-accent/30 hover:border-accent">
          Contact Us
        </MagneticButton>

        <button 
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden flex flex-col gap-1.5 p-3 relative z-10"
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
            className="fixed inset-0 z-[100] bg-[#050505]/95 backdrop-blur-xl md:hidden flex flex-col pt-24 px-6 pb-6 h-[100dvh] overflow-y-auto"
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
