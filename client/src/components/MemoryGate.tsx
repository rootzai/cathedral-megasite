import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { calculateMnemonicPath, SemioticPath } from "@/lib/SemioticEngine";

// A single 3D interactive "Doorway" to the next room
function GatePanel({ path, index }: { path: SemioticPath; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={path.targetNode.routeUrl}>
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ opacity: 0, rotateX: 20, y: 40 }}
        whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
        className="relative group cursor-pointer perspective-1000"
        style={{ perspective: "1000px" }}
      >
        <motion.div
          animate={{
            rotateX: isHovered ? -5 : 0,
            rotateY: isHovered ? (index === 0 ? 5 : -5) : 0,
            z: isHovered ? 20 : 0,
            boxShadow: isHovered 
              ? `0px 20px 40px -10px ${path.themeColor}80, 0px 0px 10px 2px ${path.themeColor}40`
              : "0px 10px 20px -5px rgba(0,0,0,0.5)"
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative overflow-hidden border-2 w-full max-w-sm md:max-w-md mx-auto"
          style={{ 
            borderColor: path.themeColor,
            backgroundColor: "#050505",
            transformStyle: "preserve-3d"
          }}
        >
          {/* Background animated pulse lines */}
          <motion.div 
            animate={{ 
              opacity: isHovered ? [0.1, 0.3, 0.1] : 0.1,
              backgroundPosition: isHovered ? ["0% 0%", "100% 100%"] : "0% 0%"
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `linear-gradient(45deg, ${path.themeColor} 25%, transparent 25%, transparent 50%, ${path.themeColor} 50%, ${path.themeColor} 75%, transparent 75%, transparent)`,
              backgroundSize: "20px 20px"
            }}
          />

          <div className="p-6 md:p-8 relative z-10 flex flex-col items-center justify-center text-center h-full min-h-[160px] translate-z-10">
            <motion.div 
              animate={{ scale: isHovered ? 1.2 : 1, y: isHovered ? -5 : 0 }}
              className="text-4xl md:text-5xl mb-4 drop-shadow-md"
            >
              {path.signifier}
            </motion.div>
            
            <h4 
              className="font-abril tracking-widest text-[#F5EDD0] uppercase text-sm md:text-base leading-tight drop-shadow-lg"
              style={{ textShadow: `0px 0px 8px ${path.themeColor}80` }}
            >
              {path.gateLabel}
            </h4>
            
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: isHovered ? "80%" : "20%", opacity: isHovered ? 1 : 0.5 }}
              className="h-1 mt-4"
              style={{ backgroundColor: path.themeColor }}
            />
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
}

interface MemoryGateProps {
  registryId: string;
}

export default function MemoryGate({ registryId }: MemoryGateProps) {
  const { primary, secondary } = calculateMnemonicPath(registryId);

  if (!primary && !secondary) return null;

  return (
    <div className="w-full py-16 px-4 md:px-12 flex flex-col items-center justify-center border-t border-[#333333] bg-gradient-to-b from-transparent to-[#020202]">
      <motion.p 
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-mono text-[10px] md:text-xs text-[#888888] tracking-[0.3em] uppercase mb-12 text-center"
      >
        // Mnemonic Gravity Detected // Traversing Matrix
      </motion.p>
      
      <div className="flex flex-col md:flex-row gap-8 justify-center w-full max-w-4xl">
        {primary && <GatePanel path={primary} index={0} />}
        {secondary && <GatePanel path={secondary} index={1} />}
      </div>
    </div>
  );
}
