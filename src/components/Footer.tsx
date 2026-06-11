"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Custom icons to replace missing lucide-react exports
const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

// Custom Medium icon to match Lucide style
const MediumIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <ellipse cx="6" cy="12" rx="5" ry="5" />
    <ellipse cx="15" cy="12" rx="2.5" ry="5" />
    <ellipse cx="20" cy="12" rx="1" ry="5" />
  </svg>
);

const navLinks = [
  "ABOUT US",
  "DOMAINS",
  "PROJECTS",
  "TEAM"
];

const socialLinks = [
  { icon: TwitterIcon, href: "https://twitter.com/robo_vit", name: "X" },
  { icon: InstagramIcon, href: "https://www.instagram.com/robovitics/", name: "Instagram" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/company/robovitics/", name: "LinkedIn" },
  { icon: GithubIcon, href: "https://github.com/RoboVITics", name: "GitHub" },
  { icon: MediumIcon, href: "#", name: "Medium" },
];

export default function Footer() {
  return (
    <footer className="relative bg-background pt-24 md:pt-32 pb-8 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        {/* Top Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 lg:gap-32 mb-20 md:mb-24">
          
          {/* Left Column */}
          <div className="flex flex-col h-full min-h-[350px] lg:min-h-[400px]">
            <div className="flex-grow-0">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-6 tracking-tighter leading-tight"
              >
                Innovate. Build. Inspire.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-muted text-lg max-w-sm font-light leading-relaxed"
              >
                The official Robotics Club of VIT, Vellore. A place to learn, a chance to grow.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex-grow-0 space-y-10"
            >
              <div>
                <p className="text-white text-lg font-medium tracking-wide mb-1">VIT Vellore</p>
                <p className="text-muted text-lg font-light">Tamil Nadu, India</p>
              </div>

              <div>
                <p className="text-muted text-xs font-semibold uppercase tracking-widest mb-2">Contact Us</p>
                <a href="mailto:robovitics@vit.ac.in" className="text-white hover:text-accent transition-colors text-lg md:text-xl font-light">
                  robovitics@vit.ac.in
                </a>
              </div>
              
              <div>
                <p className="text-muted text-xs font-semibold uppercase tracking-widest mb-2">Phone Number</p>
                <p className="text-white text-lg md:text-xl font-light">+91 XXXXX XXXXX</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column (Navigation) */}
          <div className="flex flex-col justify-center h-full">
            <div className="w-full flex flex-col">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="group flex items-center justify-between py-6 md:py-8 lg:py-10 border-b border-white/10 text-lg md:text-xl lg:text-2xl font-heading font-normal text-muted hover:text-white transition-colors duration-300"
                >
                  <span className="group-hover:translate-x-4 transition-transform duration-500">{link}</span>
                  <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 text-accent" />
                </motion.a>
              ))}
            </div>
          </div>

        </div>

        {/* Social Icons Row */}
        <div className="flex justify-center items-center gap-8 md:gap-16 py-10 md:py-12 mb-8 md:mb-10 border-b border-white/10">
          {socialLinks.map((social, i) => (
            <motion.a 
              key={social.name} 
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.05 }}
              className="text-muted hover:text-accent transition-all duration-300 hover:scale-110 p-2"
              aria-label={social.name}
            >
              <social.icon className="w-6 h-6 md:w-8 md:h-8" />
            </motion.a>
          ))}
        </div>



      </div>
    </footer>
  );
}
