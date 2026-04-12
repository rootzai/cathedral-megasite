import React from 'react';
import { usePalaceStore } from '@/stores/usePalaceStore';
import { MEMORY_PALACE } from '@/lib/memoryPalaceData';
import { Zap } from 'lucide-react';

// Helper for the tooltip PAO display extracted from Canvas
const derivePAO = (title: string, anchor: string) => {
    const persons = ['THE ARCHBISHOP', 'THE FIXER', 'THE WHISTLEBLOWER', 'THE ENABLER', 'THE LEGALIST'];
    const actions = ['SHREDDING [Ac]', 'CONSECRATING [Ac]', 'BURYING [Ac]', 'EXTORTING [Ac]', 'SEALING [Ac]'];
    const pIndex = title.length % persons.length;
    const aIndex = anchor.length % actions.length;
    return `${persons[pIndex]} [Pe] — ${actions[aIndex]} — ${anchor.toUpperCase()} [Ob]`;
}

export default function MemoryPalaceHUD() {
    // We strictly use zustand to read the state so the heavy Canvas doesn't re-render
    const activeChamberKey = usePalaceStore(s => s.activeChamberKey);
    const hoveredLocus = usePalaceStore(s => s.hoveredLocus);
    const nextChamber = usePalaceStore(s => s.nextChamber);
    const prevChamber = usePalaceStore(s => s.prevChamber);

    const chamberData = MEMORY_PALACE[activeChamberKey];

    return (
        <div className="absolute inset-0 pointer-events-none z-10 w-full h-full font-mono text-white">
            {/* Top Navigation HUD */}
            <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start pointer-events-auto">
                <div className="max-w-xl">
                    <h3 className="text-red-600 text-xs font-black tracking-[0.4em] uppercase mb-1">Architecture of Recall</h3>
                    <h1 className="text-4xl font-cinzel text-zinc-100 tracking-[0.2em]">{chamberData.title}</h1>
                    <p className="text-zinc-400 mt-2 text-sm leading-relaxed max-w-md border-l border-red-900 pl-4 bg-black/40 backdrop-blur-sm py-1">{chamberData.description}</p>
                </div>
                
                <div className="flex gap-4">
                    <button onClick={prevChamber} className="bg-black/90 border border-white/10 hover:border-red-500 hover:text-red-500 text-zinc-400 px-6 py-3 text-xs uppercase tracking-widest transition-all">
                        ← Previous Sector
                    </button>
                    <button onClick={nextChamber} className="bg-black/90 border border-white/10 hover:border-red-500 hover:text-red-500 text-zinc-400 px-6 py-3 text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(139,26,26,0.2)]">
                        Next Sector →
                    </button>
                </div>
            </div>

            {/* Bottom Controls / Persistent Protocol Hint */}
            <div className="absolute bottom-6 left-0 w-full flex justify-between px-8 items-end pointer-events-none">
                <div className="text-[#8b1a1a] text-[10px] uppercase tracking-[0.3em] font-black w-64">
                    [ ACTIVE PROTOCOL ]<br/>
                    <span className="text-zinc-500 font-normal tracking-widest mt-1 block">
                        The Memory Palace: A spatial mechanism of survival evolved before the written word.
                    </span>
                </div>
                <div className="text-center pb-2">
                    <p className="text-zinc-600 text-[10px] uppercase tracking-[0.4em] animate-pulse">Drag to orbit. Click to breach locus.</p>
                </div>
                <div className="text-right w-64 opacity-50">
                    <img src="/assets/images/sigil-placeholder.png" alt="Sigil" className="w-12 h-12 ml-auto mix-blend-screen opacity-0" />
                </div>
            </div>

            {/* Standard 2D Tooltip HUD (PAO Extractor Version) */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-32 pointer-events-none transition-all duration-200 ${hoveredLocus ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                {hoveredLocus && (
                    <div className="bg-black/95 backdrop-blur-xl border border-[#ff3333]/40 p-6 w-[28rem] shadow-[0_0_60px_rgba(255,51,51,0.15)] relative overflow-hidden">
                        
                        {/* High-Tech HUD Scanline */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff3b3b] to-transparent" />
                        <div className="absolute left-0 top-0 w-1 h-full bg-[#ff3333]"></div>

                        <div className="flex items-center justify-between border-b border-[#8b1a1a]/40 pb-3 mb-4">
                            <span className="text-[10px] font-mono text-[#ff4444] uppercase tracking-[0.5em] font-black">
                                [ TARGET ACQUIRED ]
                            </span>
                            <span className="text-[9px] font-mono text-zinc-500 tracking-[0.2em]">
                                ID: {hoveredLocus.id.toUpperCase()}
                            </span>
                        </div>
                        
                        <h3 className="text-white font-cinzel font-black tracking-widest text-2xl uppercase leading-tight mb-4 drop-shadow-md">
                           {hoveredLocus.title}
                        </h3>

                        {/* PAO Decryption Sequence */}
                        <div className="bg-[#0a0000] border border-[#ff3333]/20 p-3 mb-5">
                            <span className="text-[#a11e1e] font-mono text-[9px] tracking-[0.3em] font-black block mb-2">
                                <Zap className="w-3 h-3 inline pb-[2px] mr-1" />
                                PAO COMPRESSION ALGORITHM:
                            </span>
                            <span className="text-zinc-200 font-mono text-[11px] tracking-widest leading-relaxed block">
                                {derivePAO(hoveredLocus.title, hoveredLocus.mnemonicAnchor)}
                            </span>
                        </div>

                        <div className="flex items-center gap-3 text-[#ff4444] text-[11px] tracking-[0.3em] font-black">
                            <div className="w-2 h-2 rounded-full bg-[#ff4444] animate-ping" />
                            CLICK TO INITIATE COGNITIVE BREACH
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
