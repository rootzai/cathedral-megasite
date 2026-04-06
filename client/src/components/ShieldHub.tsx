import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Shield, Lock, Activity, Database } from "lucide-react";
import { useState } from "react";
import { FORENSIC_RINGS, PERPETRATORS } from "@/lib/registry";
import ShieldDiagram from "./ShieldDiagram";

export default function ShieldHub({ 
  onNodeClick, 
  onRingClick 
}: { 
  onNodeClick?: (nodeId: string) => void;
  onRingClick?: (ringId: number) => void;
}) {
  const [hoveredRing, setHoveredRing] = useState<number | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

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
        <p className="text-zinc-500 font-mono text-xs tracking-[0.6em] uppercase">SODOM HALL // FORENSIC REGISTRY</p>
      </div>

      <div className="p-8 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          
          {/* 1:1 INTERACTIVE SHIELD INTERFACE */}
          <div className="lg:col-span-7 relative aspect-square bg-black border border-white/5 rounded-xl overflow-hidden group">
            {/* NEW GOTHIC MACHINERY COMPONENT v5.3 */}
            <div className="absolute inset-0 z-10">
                <ShieldDiagram 
                onRingClick={(id) => {
                  setHoveredRing(id);
                  if (onRingClick) onRingClick(id);
                }}
                onNodeClick={(id) => {
                  setHoveredNode(id);
                  if (onNodeClick) onNodeClick(id);
                }}
              />
            </div>

            {/* Interactive SVG Overlay (Hit-zones for Definitive Rings) */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full z-20 overflow-visible opacity-0 hover:opacity-10 transition-opacity">
                {/* RINGS 1-5 Mapped to the actual image nodes */}
                {FORENSIC_RINGS.map((ring) => {
                    // Coordinates centered slightly below geometric center to match the graphic
                    return (
                        <circle
                            key={ring.id}
                            cx="50"
                            cy="55"
                            r={ring.radius / 2}
                            fill="transparent"
                            className="cursor-pointer hover:fill-red-900/10 transition-all"
                            onMouseEnter={() => setHoveredRing(ring.id)}
                            onMouseLeave={() => setHoveredRing(null)}
                            style={{ pointerEvents: 'auto' }}
                        />
                    );
                })}
            </svg>

            {/* Ambient Pulse beneath the perpetrators core */}
            <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-red-600/10 rounded-full blur-[25px] animate-pulse pointer-events-none" />
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
                                <span className="font-mono text-xs text-red-600 uppercase tracking-[0.4em]">Forensic Dossier // Level {hoveredRing}</span>
                            </div>
                            <h3 className="text-4xl text-white font-serif uppercase tracking-wider mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                                {FORENSIC_RINGS.find(r => r.id === hoveredRing)?.name}
                            </h3>
                            <div className="w-20 h-px bg-red-900" />
                        </div>

                        <div className="space-y-6">
                            <p className="text-zinc-300 text-lg font-serif italic leading-relaxed">
                                {FORENSIC_RINGS.find(r => r.id === hoveredRing)?.description}
                            </p>

                            <div className="space-y-3">
                                <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Identified Entities:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {PERPETRATORS.filter(p => {
                                         if (hoveredRing === 1) return p.tags.includes("core");
                                         if (hoveredRing === 3) return p.tags.includes("legal-wall");
                                         if (hoveredRing === 2) return p.tags.includes("machine");
                                         return false;
                                     }).map(actor => (
                                         <span key={actor.id} className="bg-red-900/10 text-red-500 border border-red-900/30 px-3 py-1.5 text-xs font-mono uppercase tracking-widest">{actor.name}</span>
                                     ))}
                                </div>
                            </div>

                            {/* v5.3 FORTHCOMING NARRATIVE INTEGRATION */}
                            <div className="mt-4 border border-red-900/20 p-4 bg-red-950/10 animate-in fade-in slide-in-from-top-2 duration-500">
                                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest leading-relaxed">
                                    <strong className="text-red-900 italic">Forensic Anchor:</strong> Narrative under refinement. 
                                    <span className="block opacity-60">Cross-referencing Latham Archive with 2020 Vatican Report findings.</span>
                                </p>
                            </div>
                        </div>

                        <Link href={FORENSIC_RINGS.find(r => r.id === hoveredRing)?.route || '#'}>
                            <button className="w-full mt-8 py-5 border-2 border-red-900/40 hover:border-red-600 bg-red-950/20 text-white font-mono text-xs uppercase tracking-[0.5em] transition-all hover:bg-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]">
                                Trace Signal
                            </button>
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center text-center space-y-8 py-4">
                        <div className="p-6 bg-red-950/20 rounded-full border border-red-900/30">
                            <Database className="w-12 h-12 text-red-600 animate-pulse" />
                        </div>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h4 className="text-3xl text-white font-serif tracking-widest uppercase">Global Forensic Summary</h4>
                                <div className="w-24 h-px bg-red-900 mx-auto" />
                            </div>
                            
                            <div className="space-y-4 max-w-sm mx-auto">
                                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                    <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">Discovery Status</span>
                                    <span className="text-red-500 font-mono text-xs uppercase font-bold">Unsealing Active</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                    <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">Documents Processed</span>
                                    <span className="text-white font-mono text-xs uppercase font-bold">24,312 / 24,312</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                    <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest">Forensic Target</span>
                                    <span className="text-white font-mono text-xs uppercase font-bold">T. McCarrick</span>
                                </div>
                            </div>

                            <p className="text-xs text-zinc-500 font-mono uppercase tracking-[0.3em] leading-loose max-w-md mx-auto">
                                Analysis indicates a 50-year triangular architecture of protection between the RCAN, Seton Hall, and the NJ State Government. <br />
                                <span className="text-red-900 italic">Select a concentric layer to scan specific shielding mechanisms.</span>
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
            <span className="text-zinc-600 font-mono text-xs uppercase tracking-[0.6em]">Ecclesiastical Noir</span>
        </div>
        
        <div className="flex items-center gap-8 border-l border-zinc-900 pl-8 hidden md:flex">
            <div className="text-center">
                <span className="block text-xs font-mono text-red-900 uppercase tracking-widest mb-1">Target Identity</span>
                <span className="text-zinc-400 font-mono text-xs uppercase font-bold">Theodore McCarrick</span>
            </div>
            <div className="text-center">
                <span className="block text-xs font-mono text-zinc-600 uppercase tracking-widest mb-1">Forensic State</span>
                <span className="text-green-900/80 font-mono text-xs uppercase font-bold animate-pulse">Unseal Active</span>
            </div>
        </div>
      </div>
    </div>
  );
}
