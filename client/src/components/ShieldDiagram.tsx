import React from "react";

export const RINGS = []; // Keeping empty export to avoid breaking imports in other files if needed

interface ShieldDiagramProps {
    activeRing?: number | null;
    setActiveRing?: (ring: number | null) => void;
}

export default function ShieldDiagram({ activeRing, setActiveRing }: ShieldDiagramProps) {
    return (
        <div className="relative w-full max-w-[680px] mx-auto group">
            <div className="relative overflow-hidden rounded-xl border border-[#8b1a1a]/30 shadow-2xl shadow-red-900/20 bg-black/40 backdrop-blur-sm">
                <img
                    src="/assets/shield-diagram-slide.jpeg"
                    alt="The Shield of Sodom Hall - Forensic Architecture"
                    className="w-full h-auto transform transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-40"></div>
            </div>

            {/* Forensic Overlays */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t border-l border-[#8b1a1a]/50"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b border-r border-[#8b1a1a]/50"></div>

            <div className="mt-8 flex items-center justify-between px-4">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#8b1a1a] animate-pulse" />
                    <span className="text-[#8b1a1a] font-mono text-[9px] uppercase tracking-[0.3em]">Live Archive Signal</span>
                </div>
                <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                    Verification: High-Fidelity // v2.0
                </div>
            </div>
        </div>
    );
}
