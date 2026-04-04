import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { RINGS } from "@/lib/data";
import { Shield, ChevronRight, Lock, Unlock, Activity, Database, Users, AlertCircle } from "lucide-react";
import { useState } from "react";

const PERPETRATORS = [
  "Theodore McCarrick",
  "Fr. Kenneth Martin",
  "Teresina DeAlmeida",
  "Kevin Marino (Counsel)",
  "Chris Porrino (Counsel)",
  "Tom Scrivo (Counsel)",
  "Stio (Counsel)",
  "Linares (Counsel)",
  "Papalia (Counsel)",
  "Joseph Reilly",
  "The Dirty Dozen",
  "Cardinal Tobin"
];

export default function ShieldHub() {
  const [hoveredRing, setHoveredRing] = useState<number | null>(null);

  return (
    <div className="relative w-full max-w-7xl mx-auto bg-[#050505] border border-red-900/20 shadow-[0_0_100px_rgba(0,0,0,1)] overflow-hidden">
      {/* AUTHORITATIVE HEADER FROM IMAGE */}
      <div className="text-center py-10 border-b border-white/5 bg-[#0a0a0c]">
        <h2 className="text-[#d4af37] font-serif text-3xl md:text-4xl tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          THE SHIELD DIAGRAM: ARCHITECTURE OF PROTECTION
        </h2>
        <p className="text-zinc-400 font-mono text-[10px] tracking-[0.4em] uppercase">SODOM HALL // ECCLESIASTICAL NOIR</p>
      </div>

      <div className="p-12 lg:p-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          {/* Visual Ring Representation */}
          <div className="lg:col-span-7 relative aspect-square flex items-center justify-center">
            {/* Background Gargoyle Texture (Decorative) */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
               <Activity className="w-full h-full text-red-900" />
            </div>

            {[5, 4, 3, 2, 1].map((ringId) => {
              const ring = RINGS.find(r => r.id === ringId);
              const size = 100 - (5 - ringId) * 18; 
              const isHovered = hoveredRing === ringId;
              const ringColor = ringId === 1 ? "border-[#4a0a0a]" : 
                               ringId === 2 ? "border-[#8b1a1a]" : 
                               ringId === 3 ? "border-[#d4af37]/40" : 
                               ringId === 4 ? "border-red-600/30" : 
                               "border-white/10";
              
              return (
                <motion.div
                  key={ringId}
                  onHoverStart={() => setHoveredRing(ringId)}
                  onHoverEnd={() => setHoveredRing(null)}
                  className={`absolute border-2 ${ringColor} rounded-full flex items-center justify-center cursor-pointer transition-all duration-500`}
                  style={{
                    width: `${size}%`,
                    height: `${size}%`,
                    zIndex: 10 + (5 - ringId),
                    boxShadow: isHovered ? `0 0 50px ${ringId < 3 ? 'rgba(239, 68, 68, 0.4)' : 'rgba(212, 175, 55, 0.2)'}` : 'none'
                  }}
                  animate={{
                    scale: isHovered ? 1.02 : 1,
                    backgroundColor: isHovered ? "rgba(139, 26, 26, 0.05)" : "transparent"
                  }}
                >
                  <div className="absolute top-4 w-full text-center">
                    <p className={`font-mono text-[9px] font-black uppercase tracking-[0.2em] ${isHovered ? 'text-white' : 'text-zinc-400'}`}>
                      RING {ringId}: {ring?.name}
                    </p>
                  </div>
                </motion.div>
              );
            })}
            
            {/* Central Hub: PERPETRATORS */}
            <motion.div 
              className="w-[18%] h-[18%] bg-[#4a0a0a] rounded-full border-2 border-red-600 shadow-[0_0_60px_#8b1a1a] flex flex-col items-center justify-center relative z-30 group cursor-help"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <div className="absolute inset-0 bg-red-600/10 blur-[20px] rounded-full group-hover:bg-red-600/30 transition-all" />
              <Users className="w-6 h-6 text-red-500 mb-1" />
              <span className="font-mono text-[7px] font-black text-white uppercase tracking-tighter">PERPETRATORS</span>
              
              {/* Tooltip for core */}
              <div className="absolute -top-16 opacity-0 group-hover:opacity-100 transition-opacity bg-black border border-red-600 p-2 text-[8px] text-red-400 w-40 text-center pointer-events-none z-50">
                THE CORE SEED OF COMPLICITY: MCCARRICK, MARTIN, MARINO, ET AL.
              </div>
            </motion.div>

            {/* BREACH POINT ARROW */}
            <div className="absolute bottom-[20%] left-[15%] flex flex-col items-center z-40 transform -rotate-[35deg]">
               <div className="bg-red-600/40 border border-red-500 p-2 rounded-full animate-pulse shadow-[0_0_30px_rgba(239,68,68,0.6)]">
                  <span className="font-mono text-[9px] font-black text-white uppercase">BREACH POINT</span>
               </div>
               <div className="w-1 h-24 bg-gradient-to-t from-red-600 to-transparent" />
               <span className="absolute -bottom-8 font-mono text-[9px] text-red-500 rotate-[35deg] whitespace-nowrap font-black">AG OFFICE // SUBPOENA</span>
            </div>

            {/* OUTER ENTITIES */}
            <div className="absolute top-0 -left-12 opacity-60 font-mono text-[8px] text-zinc-400 tracking-widest hidden lg:block">MARK CRAWFORD // SNAP</div>
            <div className="absolute bottom-0 -right-12 opacity-60 font-mono text-[8px] text-zinc-400 tracking-widest hidden lg:block">NJ MEDIA // NATIONAL PRESS</div>
          </div>

          {/* Informational Panel */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={hoveredRing || 'none'}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="bg-[#0a0a0c] border border-white/5 p-10 min-h-[450px] relative overflow-hidden flex flex-col justify-center"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#8b1a1a]" />
                
                {hoveredRing ? (
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                         <Database className="w-4 h-4 text-[#8b1a1a]" />
                         <span className="font-mono text-[10px] text-[#8b1a1a] uppercase tracking-[0.4em]">AUTHENTIC DOSSIER // Ring {hoveredRing}</span>
                      </div>
                      <h3 className="font-serif text-4xl text-white uppercase tracking-wider mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {RINGS.find(r => r.id === hoveredRing)?.name}
                      </h3>
                      <div className="w-16 h-px bg-zinc-800" />
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-zinc-300 leading-relaxed font-serif text-lg italic">
                        {RINGS.find(r => r.id === hoveredRing)?.description}
                      </p>
                      
                      <div className="pt-6 border-t border-zinc-800">
                         <h4 className="font-mono text-[10px] text-zinc-400 uppercase mb-4 tracking-widest">Structural Entities:</h4>
                         <div className="flex flex-wrap gap-2">
                           {hoveredRing === 1 && PERPETRATORS.slice(0, 4).map(p => <span key={p} className="px-2 py-1 bg-red-900/30 border border-red-600/50 text-red-400 text-[9px] uppercase font-bold">{p}</span>)}
                           {hoveredRing === 3 && PERPETRATORS.filter(p => p.includes("Counsel")).map(p => <span key={p} className="px-2 py-1 bg-zinc-800 border border-[#d4af37]/40 text-[#d4af37] text-[9px] uppercase font-bold">{p}</span>)}
                           {hoveredRing === 4 && ["Seton Hall University", "RCAN", "Latham Archive"].map(p => <span key={p} className="px-2 py-1 bg-zinc-800 border border-zinc-600 text-zinc-300 text-[9px] uppercase font-bold">{p}</span>)}
                           {hoveredRing === 5 && ["Survivors Network", "Snap", "Whistleblowers"].map(p => <span key={p} className="px-2 py-1 bg-zinc-800 border border-zinc-600 text-zinc-300 text-[9px] uppercase font-bold">{p}</span>)}
                         </div>
                      </div>
                    </div>

                    <Link href={RINGS.find(r => r.id === hoveredRing)?.route || '#'}>
                      <motion.button
                        whileHover={{ x: 10 }}
                        className="group flex items-center gap-4 text-[#d4af37] uppercase font-mono text-xs tracking-[0.3em] mt-8 bg-zinc-900/50 px-6 py-4 border border-[#d4af37]/20 hover:bg-[#d4af37]/10 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                      >
                        <span>Trace Signal</span>
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                      </motion.button>
                    </Link>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-60">
                    <Shield className="w-20 h-20 text-red-600 mb-8 animate-pulse shadow-[0_0_40px_rgba(220,38,38,0.5)]" />
                    <h4 className="font-serif text-2xl text-white uppercase tracking-[0.2em] mb-4">Architecture of Silence</h4>
                    <p className="font-mono text-[11px] text-zinc-300 uppercase tracking-widest leading-relaxed">
                      Select a ring to unmask the barrier.<br />
                      Authenticated Forensic Stream [ES-99-B]
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* AUTHORITATIVE FOOTER FROM IMAGE */}
      <div className="border-t border-white/5 p-8 flex justify-between items-end bg-[#0a0a0c]">
        <div>
           <div className="font-serif italic text-white text-4xl mb-1" style={{ fontFamily: "Georgia, serif" }}>Sodom Hall</div>
           <div className="font-mono text-[10px] uppercase tracking-[0.5em] text-zinc-600">ECCLESIASTICAL NOIR</div>
        </div>
        <div className="text-right">
           <p className="font-mono text-[8px] text-red-900 uppercase tracking-widest">Target: Theodore McCarrick</p>
           <p className="font-mono text-[8px] text-zinc-700 uppercase tracking-widest">Forensic Verification: Active</p>
        </div>
      </div>
    </div>
  );
}
