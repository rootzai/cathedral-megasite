import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";

interface LivingSymbolProps {
  href: string;
  imageSrc: string;
  title: string;
  description: string;
  glowColor: string;
}

export default function LivingSymbol({ href, imageSrc, title, description, glowColor }: LivingSymbolProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href}>
      <motion.div
        className="relative flex items-center gap-6 md:gap-16 group cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial="initial"
        whileHover="hover"
      >
        {/* The Symbol Art Container */}
        <div className="relative w-48 h-48 md:w-[350px] md:h-[350px] flex-shrink-0 perspective-1000">
          
          {/* Ambient Breathing Glow */}
          <motion.div 
            className="absolute inset-0 rounded-full mix-blend-screen opacity-10 pointer-events-none"
            style={{ backgroundColor: glowColor, filter: "blur(60px)" }}
            animate={{ scale: [1, 1.15, 1], opacity: isHovered ? 0.7 : 0.15 }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* 3D Slithering Image Container */}
          <motion.div
            className="w-full h-full relative z-10"
            variants={{
              initial: { rotateY: 0, rotateX: 0, scale: 1, z: 0 },
              hover: { rotateY: -10, rotateX: 10, scale: 1.05, z: 50 }
            }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
             <img 
               src={imageSrc} 
               alt={title} 
               className="w-full h-full object-cover rounded-full pointer-events-none transition-all duration-700 hover:grayscale-0 grayscale-[30%]"
               style={{ 
                 filter: isHovered ? "contrast(1.2) brightness(1.1)" : "contrast(1.1) brightness(0.8)",
                 boxShadow: isHovered ? `0 0 40px ${glowColor}60, inset 0 0 20px #000` : `0 0 10px ${glowColor}20`
               }}
             />
             {/* Subdued overlay for biological 'slither' effect using a mask */}
             <motion.div 
               className="absolute inset-0 rounded-full mix-blend-overlay pointer-events-none"
               style={{ backgroundImage: `url('/assets/noise.svg')`, opacity: 0.15 }}
               animate={{ backgroundPosition: isHovered ? ["0% 0%", "100% 100%"] : "0% 0%" }}
               transition={{ duration: 0.3, repeat: Infinity }}
             />
          </motion.div>
        </div>

        {/* The Generative Typography Beam */}
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              className="relative z-20 flex flex-col justify-center"
              initial={{ opacity: 0, x: -60, filter: "blur(12px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -30, filter: "blur(12px)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Gold light beam element connecting the symbol to the text */}
              <motion.div 
                className="absolute top-1/2 -left-6 md:-left-12 h-[2px] bg-gradient-to-r from-transparent to-[#8B6914] -translate-y-1/2 mix-blend-screen"
                initial={{ width: 0 }}
                animate={{ width: 50 }}
                transition={{ duration: 0.4 }}
                style={{ boxShadow: "0 0 10px #8B6914" }}
              />

              <h2 className="font-cinzel text-4xl md:text-7xl font-black text-[#c8bdb0] tracking-tight md:tracking-wider mb-2 drop-shadow-2xl" style={{ textShadow: `0 0 25px ${glowColor}A0` }}>
                {title}
              </h2>
              <p className="font-mono text-[#c8bdb0] text-xs md:text-sm max-w-sm tracking-[0.2em] uppercase leading-relaxed opacity-90 pl-3 border-l-2 border-[#8B6914]/60">
                {description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
}
