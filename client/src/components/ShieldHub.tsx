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

  // RING DIMENSIONS (Percent from center to match shield-diagram-slide.jpeg)
  // Mapping circles to the actual visual rings in the provided drawing
  const RING_MAP = [
    { id: 1, radius: 10, name: "The Core", color: "rgba(255, 0, 0, 0.2)" },
    { id: 2, radius: 25, name: "The Machine", color: "rgba(255, 0, 0, 0.15)" },
    { id: 3, radius: 42, name: "The Legal Wall", color: "rgba(212, 175, 55, 0.1)" },
    { id: 4, radius: 65, name: "Institutional Shield", color: "rgba(255, 255, 255, 0.05)" },
    { id: 5, radius: 90, name: "The Breach Point", color: "rgba(255, 255, 255, 0.02)" }
  ];

  return (
    <div className="relative w-full max-w-7xl mx-auto bg-black border border-red-900/40 shadow-[0_0_100px_rgba(139,26,26,0.3)] overflow-hidden">
      {/* AUTHORITATIVE HEADER FROM IMAGE */}
      <div className="text-center py-8 border-b border-white/5 bg-[#050505]">
        <div className="flex items-center justify-center gap-3 mb-2">
            <Shield className="w-5 h-5 text-red-600" />
            <h2 className="text-[#d4af37] font-serif text-3xl tracking-[0.2em] uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
              ARCHITECTURE OF PROTECTION
            </h2>
        </div>
        <p className="text-zinc-500 font-mono text-[10px] tracking-[0.6em] uppercase">SODOM HALL // FORENSIC REGISTRY</p>
      </div>

      <div className="p-8 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          
          {/* 1:1 INTERACTIVE SHIELD INTERFACE */}
          <div className="lg:col-span-7 relative aspect-square bg-[#0a0a0c] border border-white/5 rounded-full overflow-hidden group">
            {/* The actual drawing asset */}
            <img 
                src="/assets/shield-diagram-slide.jpeg" 
                alt="Architecture of Protection" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000"
            />

            {/* Interactive SVG Overlay (Hit-zones) */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full z-20 overflow-visible">
                {/* Rings rendered inside-out to handle hover overlap correctly */}
                {[5, 4, 3, 2, 1].map((ringId) => {
                    const ring = RING_MAP.find(r => r.id === ringId)!;
                    const isHovered = hoveredRing === ringId;
                    
                    return (
                        <circle
                            key={ringId}
                            cx="50"
                            cy="50"
                            r={ring.radius / 2}
                            fill={isHovered ? ring.color : "transparent"}
                            stroke={isHovered ? "rgba(255,255,255,0.2)" : "transparent"}
                            strokeWidth="0.5"
                            className="cursor-pointer transition-all duration-300"
                            onMouseEnter={() => setHoveredRing(ringId)}
                            onMouseLeave={() => setHoveredRing(null)}
                            style={{ pointerEvents: 'auto' }}
                        />
                    );
                })}

                {/* Specific Annotations to match the drawing vibes */}
                {hoveredRing && (
                    <motion.text
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        x="50"
                        y={50 - (RING_MAP.find(r => r.id === hoveredRing)!.radius / 2) - 2}
                        textAnchor="middle"
                        className="fill-white font-mono text-[2.5px] uppercase tracking-widest font-black"
                    >
                        DETECTING BREACH IN RING {hoveredRing}...
                    </motion.text>
                )}
            </svg>

            {/* Ambient Pulse beneath the core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-600/40 rounded-full blur-[15px] animate-pulse pointer-events-none" />
          </div>

          {/* Forensic Informational Panel */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={hoveredRing || 'initial'}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.1 }}
                className="bg-[#050505] border border-white/10 p-8 min-h-[500px] flex flex-col justify-center relative shadow-2xl"
              >
                {/* Thematic Accent */}
                <div className="absolute top-0 right-0 p-4 opacity-20">
                    <Activity className="w-12 h-12 text-red-900" />
                </div>

                {hoveredRing ? (
                    <div className="space-y-8 animate-in fade-in zoom-in-95 duration-150">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Database className="w-4 h-4 text-red-600" />
                                <span className="font-mono text-[10px] text-red-600 uppercase tracking-[0.4em]">Forensic Dossier // Level {hoveredRing}</span>
                            </div>
                            <h3 className="text-4xl text-white font-serif uppercase tracking-wider mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                                {RINGS.find(r => r.id === hoveredRing)?.name}
                            </h3>
                            <div className="w-20 h-px bg-red-900" />
                        </div>

                        <div className="space-y-6">
                            <p className="text-zinc-300 text-lg font-serif italic leading-relaxed">
                                {RINGS.find(r => r.id === hoveredRing)?.description}
                            </p>

                            <div className="space-y-3">
                                <h4 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Identified Entities:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {hoveredRing === 1 && ["McCarrick", "Fr. Martin", "The Core"].map(tag => (
                                        <span key={tag} className="bg-red-900/30 text-red-400 border border-red-900/50 px-2 py-1 text-[8px] font-mono uppercase tracking-widest">{tag}</span>
                                    ))}
                                    {hoveredRing === 3 && PERPETRATORS.filter(p => p.includes("Counsel")).map(tag => (
                                        <span key={tag} className="bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30 px-2 py-1 text-[8px] font-mono uppercase tracking-widest">{tag}</span>
                                    ))}
                                    {hoveredRing === 4 && ["Seton Hall", "Trustees", "RCAN Chancery"].map(tag => (
                                        <span key={tag} className="bg-zinc-900 text-zinc-400 border border-white/5 px-2 py-1 text-[8px] font-mono uppercase tracking-widest">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link href={RINGS.find(r => r.id === hoveredRing)?.route || '#'}>
                            <button className="w-full mt-8 py-5 border-2 border-red-900/40 hover:border-red-600 bg-red-950/20 text-white font-mono text-xs uppercase tracking-[0.5em] transition-all hover:bg-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]">
                                Trace Signal
                            </button>
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center text-center space-y-8">
                        <div className="p-6 bg-red-950/20 rounded-full border border-red-900/30">
                            <Lock className="w-12 h-12 text-red-600 animate-pulse" />
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-2xl text-white font-serif tracking-widest uppercase">Select Layer to Scan</h4>
                            <p className="text-xs text-zinc-500 font-mono uppercase tracking-[0.3em] leading-loose">
                                Inspect the concentric architecture of protection.<br />
                                Historical record ES-99 // Active.
                            </p>
                        </div>
                    </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* FOOTER BRANDS TO MATCH IMAGE ASPECT */}
      <div className="bg-[#050505] border-t border-white/5 p-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
            <span className="text-white font-serif italic text-3xl" style={{ fontFamily: "Georgia, serif" }}>Sodom Hall</span>
            <span className="text-zinc-600 font-mono text-[8px] uppercase tracking-[0.6em]">Ecclesiastical Noir</span>
        </div>
        
        <div className="flex items-center gap-8 border-l border-zinc-900 pl-8 hidden md:flex">
            <div className="text-center">
                <span className="block text-[8px] font-mono text-red-900 uppercase tracking-widest mb-1">Target Identity</span>
                <span className="text-zinc-400 font-mono text-[9px] uppercase font-bold">Theodore McCarrick</span>
            </div>
            <div className="text-center">
                <span className="block text-[8px] font-mono text-zinc-600 uppercase tracking-widest mb-1">Forensic State</span>
                <span className="text-green-900/80 font-mono text-[9px] uppercase font-bold animate-pulse">Unseal Active</span>
            </div>
        </div>
      </div>
    </div>
  );
}
