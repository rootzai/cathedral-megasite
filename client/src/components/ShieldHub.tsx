import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Shield, Lock, Activity, Database, Target, Fingerprint } from "lucide-react";
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

  const getActorRoute = (id: string) => {
    if (['mccarrick', 'checchio', 'reilly', 'martin', 'lorenzo'].includes(id)) {
      return `/ledger/${id}`;
    }
    return `/ledger/mccarrick/network`;
  };

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
            <div className="absolute inset-0 z-10 pointer-events-auto">
                <ShieldDiagram 
                onRingHover={(id) => {
                  setHoveredRing(id);
                }}
                onNodeClick={(id) => {
                  setHoveredNode(id);
                  if (onNodeClick) onNodeClick(id);
                }}
              />
            </div>

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
                                <Activity className="w-5 h-5 text-red-600" />
                                <span className="font-mono text-sm md:text-base text-red-600 uppercase tracking-[0.3em]">Forensic Dossier // Level {hoveredRing}</span>
                            </div>
                            <h3 className="text-4xl md:text-5xl text-white font-serif uppercase tracking-wider mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                                {FORENSIC_RINGS.find(r => r.id === hoveredRing)?.name}
                            </h3>
                            <div className="w-20 h-1 bg-red-900" />
                        </div>

                        <div className="space-y-6">
                            <p className="text-zinc-300 text-xl md:text-2xl font-serif italic leading-relaxed">
                                {FORENSIC_RINGS.find(r => r.id === hoveredRing)?.description}
                            </p>

                            <div className="space-y-4">
                                <h4 className="font-mono text-sm md:text-base text-zinc-500 uppercase tracking-[0.2em] font-bold">Identified Entities:</h4>
                                <div className="flex flex-wrap gap-3">
                                    {PERPETRATORS.filter(p => {
                                         if (hoveredRing === 1) return p.tags.includes("core");
                                         if (hoveredRing === 3) return p.tags.includes("legal-wall");
                                         if (hoveredRing === 2) return p.tags.includes("machine");
                                         return false;
                                     }).map(actor => (
                                         <Link key={actor.id} href={getActorRoute(actor.id)}>
                                             <span className="bg-red-900/10 hover:bg-red-600 text-red-400 hover:text-white border border-red-900/40 px-4 py-2 text-sm md:text-base font-bold font-mono uppercase tracking-widest cursor-pointer transition-colors inline-block">{actor.name}</span>
                                         </Link>
                                     ))}
                                </div>
                            </div>

                            {/* v5.3 FORTHCOMING NARRATIVE INTEGRATION */}
                            <div className="mt-6 border border-red-900/30 p-6 bg-red-950/10 animate-in fade-in slide-in-from-top-2 duration-500">
                                <p className="text-sm md:text-base font-mono text-zinc-400 uppercase tracking-[0.2em] leading-relaxed">
                                    <strong className="text-red-700 italic font-bold">Forensic Anchor:</strong> Narrative under refinement. 
                                    <span className="block opacity-80 mt-2 text-zinc-500">Cross-referencing Latham Archive with 2020 Vatican Report findings.</span>
                                </p>
                            </div>
                        </div>

                        <Link href={FORENSIC_RINGS.find(r => r.id === hoveredRing)?.route || '#'}>
                            <button className="w-full mt-10 py-6 border-2 border-red-900/50 hover:border-red-500 bg-red-950/30 text-white font-mono text-base md:text-lg font-bold uppercase tracking-[0.4em] transition-all hover:bg-red-700 hover:shadow-[0_0_40px_rgba(220,38,38,0.4)] cursor-pointer relative z-20">
                                Trace Signal
                            </button>
                        </Link>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center text-center space-y-8 py-4">
                        <div className="p-8 bg-red-950/20 rounded-full border border-red-900/40 relative">
                            {/* Inner pulse */}
                            <div className="absolute inset-0 bg-red-600/10 rounded-full animate-ping" />
                            <Target className="w-14 h-14 text-red-600 relative z-10" />
                        </div>
                        <div className="space-y-8">
                            <div className="space-y-3">
                                <h4 className="text-3xl md:text-4xl text-white font-serif tracking-widest uppercase mb-4">Forensic Operation Console</h4>
                                <div className="w-32 h-1 bg-red-900 mx-auto" />
                            </div>
                            
                            <p className="text-base md:text-lg text-zinc-300 font-serif italic mx-auto">
                                You are viewing a real-time, schematic model of the Cathedral's defensive structure. The adjacent diagram isolates the concentric layers of institutional protection surrounding Theodore McCarrick.
                            </p>

                            <div className="bg-black/80 border border-red-900/30 p-6 font-mono text-sm md:text-base text-zinc-400 text-left space-y-4">
                                <p className="mb-2"><strong className="text-red-500">HOW TO USE:</strong></p>
                                <ul className="list-disc pl-5 space-y-3">
                                    <li><strong className="text-white">HOVER</strong> over the rings in the diagram to inspect the mechanisms of each defensive layer.</li>
                                    <li><strong className="text-white">CLICK</strong> an <span className="text-red-400">Identified Entity</span> appearing in the panel to instantly query their investigation dossier.</li>
                                    <li><strong className="text-white">TRACE</strong> the signal to descend into the primary evidentiary findings.</li>
                                </ul>
                            </div>
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
        
        <div className="flex items-center gap-8 border-l border-zinc-900 pl-8 hidden lg:flex">
            <div className="text-center">
                <span className="block text-sm font-mono text-red-600 font-bold uppercase tracking-[0.2em] mb-1">Target Identity</span>
                <span className="text-zinc-300 font-mono text-base md:text-lg uppercase font-black tracking-wider">Theodore McCarrick</span>
            </div>
            <div className="text-center ml-8">
                <span className="block text-sm font-mono text-zinc-500 font-bold uppercase tracking-[0.2em] mb-1">Forensic State</span>
                <span className="text-green-500 font-mono text-base md:text-lg uppercase font-black tracking-wider animate-[pulse_2s_ease-in-out_infinite]">Unseal Active</span>
            </div>
        </div>
      </div>
    </div>
  );
}
