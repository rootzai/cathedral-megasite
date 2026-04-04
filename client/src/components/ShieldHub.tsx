import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { RINGS } from "@/lib/data";
import { Shield, ChevronRight, Lock, Unlock } from "lucide-react";
import { useState } from "react";

export default function ShieldHub() {
  const [hoveredRing, setHoveredRing] = useState<number | null>(null);

  return (
    <div className="relative w-full max-w-4xl mx-auto py-20 px-8 bg-background/50 backdrop-blur-md border border-[oklch(0.75_0.12_85/10%)] overflow-hidden">
      <div className="text-center mb-16 relative z-10">
        <p className="font-label text-xs tracking-[0.4em] text-gold-dim uppercase mb-4">Forensic Navigation</p>
        <h2 className="font-heading text-4xl md:text-5xl tracking-widest text-gold mb-6 uppercase">
          The 5-Ring Descent
        </h2>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
        <p className="text-parchment/60 font-body text-lg italic max-w-2xl mx-auto">
          "The Architecture of Silence is constructed in concentric layers. To find the source, one must penetrate the shield."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Visual Ring Representation */}
        <div className="relative aspect-square flex items-center justify-center">
          {RINGS.map((ring, idx) => {
            const size = 100 - idx * 18; // 100, 82, 64, 46, 28
            const isHovered = hoveredRing === ring.id;
            
            return (
              <motion.div
                key={ring.id}
                onHoverStart={() => setHoveredRing(ring.id)}
                onHoverEnd={() => setHoveredRing(null)}
                className="absolute border-2 border-gold/20 rounded-full flex items-center justify-center cursor-pointer overflow-hidden group"
                style={{
                  width: `${size}%`,
                  height: `${size}%`,
                  zIndex: 10 - idx,
                }}
                animate={{
                  borderColor: isHovered ? "rgba(212, 175, 55, 0.6)" : "rgba(212, 175, 55, 0.2)",
                  boxShadow: isHovered ? "0 0 30px rgba(212, 175, 55, 0.2)" : "none",
                  scale: isHovered ? 1.05 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Background Pulse for hovered ring */}
                {isHovered && (
                  <motion.div 
                    layoutId="ring-bg"
                    className="absolute inset-0 bg-gold/5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
                
                {ring.breach && !isHovered && (
                  <motion.div 
                    animate={{ opacity: [0.1, 0.4, 0.1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 bg-red-900/10"
                  />
                )}

                <div className="absolute top-2 w-full text-center">
                  <p className="font-mono text-[8px] uppercase tracking-tighter text-gold/40">Ring {ring.id}</p>
                </div>
              </motion.div>
            );
          })}
          
          {/* Center Hub */}
          <div className="w-[10%] h-[10%] bg-gold/10 rounded-full border border-gold/40 blur-[1px] animate-pulse" />
        </div>

        {/* Informational Panel */}
        <div className="flex flex-col gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={hoveredRing || 'none'}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="min-h-[300px] flex flex-col justify-center"
            >
              {hoveredRing ? (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gold/10 border border-gold/20 rounded-sm">
                      {RINGS.find(r => r.id === hoveredRing)?.breach ? <Unlock className="w-5 h-5 text-red-500" /> : <Lock className="w-5 h-5 text-gold" />}
                    </div>
                    <div>
                      <p className="font-mono text-[10px] text-gold-dim uppercase tracking-[0.2em]">Authentic Dossier: Ring {hoveredRing}</p>
                      <h3 className="font-heading text-2xl text-gold uppercase tracking-widest">
                        {RINGS.find(r => r.id === hoveredRing)?.name}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-parchment/80 leading-relaxed font-body">
                    {RINGS.find(r => r.id === hoveredRing)?.description}
                  </p>

                  <Link href={RINGS.find(r => r.id === hoveredRing)?.route || '#'}>
                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-3 px-6 py-3 bg-gold/10 border border-gold/30 text-gold uppercase font-label text-sm tracking-widest hover:bg-gold/20 transition-colors"
                    >
                      Enter The Chamber <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              ) : (
                <div className="text-center md:text-left py-10 opacity-30 select-none">
                  <Shield className="w-12 h-12 text-gold-dim mx-auto md:mx-0 mb-4 opacity-20" />
                  <p className="font-heading text-xl uppercase tracking-tighter">Hover a ring to reveal the archive</p>
                  <p className="font-mono text-[10px] uppercase mt-2">Authenticated Forensic Stream [ES-99-B]</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Aesthetic Overlays */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-900/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    </div>
  );
}
