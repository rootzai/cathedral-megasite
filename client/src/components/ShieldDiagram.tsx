import React, { useState } from "react";
import InvestigativeModal from "./InvestigativeModal";

import { RINGS } from "@/lib/data";

interface ShieldDiagramProps {
    activeRing?: number | null;
    setActiveRing?: (ring: number | null) => void;
}

export default function ShieldDiagram({ activeRing, setActiveRing }: ShieldDiagramProps) {
    const [isNavModalOpen, setIsNavModalOpen] = useState(false);

    return (
        <div className="relative w-full max-w-[680px] mx-auto group">
            <div
                className="relative overflow-hidden rounded-xl border border-[#8b1a1a]/30 shadow-2xl shadow-red-900/20 bg-black/40 backdrop-blur-sm cursor-zoom-in"
                onClick={() => setIsNavModalOpen(true)}
            >
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
                    <div className="w-2.5 h-2.5 rounded-full bg-[#8b1a1a] animate-pulse" />
                    <span className="text-[#8b1a1a] font-mono text-xs font-black uppercase tracking-[0.4em]">Live Archive Signal</span>
                </div>
                <div className="text-xs font-mono text-zinc-300 font-bold uppercase tracking-widest border-l border-zinc-800 pl-4">
                    Verification: High-Fidelity
                </div>
            </div>
            <InvestigativeModal
                isOpen={isNavModalOpen}
                onClose={() => setIsNavModalOpen(false)}
                title="The Shield of Sodom Hall"
                subtitle="Forensic Architecture // Structural Accountability Analysis"
            >
                <div className="relative bg-black rounded-lg overflow-hidden border border-[#8b1a1a]/20">
                    <img
                        src="/assets/shield-diagram-slide.jpeg"
                        alt="High-Fidelity Shield Diagram"
                        className="w-full h-auto"
                    />
                    <div className="p-8 bg-[#0d0d10] border-t border-[#1a1a22]">
                        <h4 className="text-[#8b1a1a] font-bold text-sm uppercase tracking-[0.4em] mb-4 font-mono border-b border-[#8b1a1a]/20 pb-2">Archive Note // Forensic Record</h4>
                        <p className="text-sm text-[#bbb] leading-relaxed italic">
                            "This mapping illustrates the redundant layers of institutional protection. Each ring must be systematically unsealed to reach the core truth of the 2019-2025 investigative period."
                        </p>
                    </div>
                </div>
            </InvestigativeModal>
        </div>
    );
}
