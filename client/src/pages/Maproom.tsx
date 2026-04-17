import React from "react";
import { SEO } from "@/components/SEO";
import { atomizedShells } from "@/lib/atomizedData";
import { DataShellCard } from "@/components/DataShellCard";
import { useGotus } from "@/contexts/GotusContext";

export default function Maproom() {
    const { isGotusTakeoverActive } = useGotus();

    // Do not render full layout if the glitch is currently hijacking the UI
    if (isGotusTakeoverActive) {
        return <div className="min-h-screen bg-black" />; // Let global GOTUS overlay handle UI
    }

    return (
        <div className="min-h-screen bg-black text-[#F5EDD0] font-sans overflow-y-auto pb-32 relative">
            <img src="/assets/cathedral/cathedral_interior_wide.jpg" alt="" className="fixed inset-0 w-full h-full object-cover select-none pointer-events-none brightness-[0.15] saturate-50" />
            <div className="fixed inset-0 bg-gradient-to-b from-black/60 via-transparent to-black pointer-events-none" />
            <SEO
                title="Maproom Grid | Sodom Hall"
                description="The Forensic Architectural Shell View."
            />

            {/* The SCIF Terminal / Rollover Story (Restored without changes) */}
            <div className="pt-24 pb-20 px-6 max-w-5xl mx-auto mb-24 relative bg-[#040504] border border-[#1a1f1a] shadow-[0_0_50px_rgba(0,0,0,1)] flex flex-col items-center justify-center md:min-h-[450px]">
                {/* CRT Scanline overlay */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-10 opacity-20" />

                <div className="relative z-20 flex flex-col items-center space-y-20 w-full">

                    {/* Node 1: SCIF */}
                    <div className="group relative cursor-crosshair w-full flex justify-center">
                        <div className="text-center transition-opacity duration-300 relative z-10">
                            <span className="font-mono text-zinc-600 tracking-[0.4em] text-xs block mb-4 uppercase">Location</span>
                            <h1 className="text-7xl md:text-9xl font-sans font-black text-white tracking-widest uppercase">
                                S.C.I.F.
                            </h1>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50 bg-black/95 backdrop-blur-sm">
                            <div className="bg-transparent border border-[#F5EDD0]/20 p-8 w-full max-w-lg shadow-2xl">
                                <p className="font-mono text-zinc-300 text-sm md:text-base leading-relaxed text-center">
                                    <span className="text-white font-bold block mb-4 border-b border-white/20 pb-4 tracking-widest uppercase">Sensitive Compartmented Info. Facility</span>
                                    A physical vault utilized by the administration to lock away internal abuse investigations. No electronics. No copies.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full justify-center">
                        {/* Node 2: The Document */}
                        <div className="group relative cursor-crosshair flex-1 w-full max-w-[320px]">
                            <div className="border border-white/10 p-10 text-center group-hover:opacity-0 transition-opacity duration-300 bg-white/5">
                                <span className="font-mono text-zinc-600 tracking-[0.5em] text-[10px] block mb-6 uppercase">Payload</span>
                                <h2 className="font-mono text-zinc-300 tracking-[0.2em] text-2xl font-bold">LATHAM.DAT</h2>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 border border-[#F5EDD0]/30 p-8 shadow-2xl pointer-events-none">
                                <p className="font-mono text-white text-xs md:text-sm leading-relaxed text-center">
                                    <span className="text-[#D4A017] block mb-2 font-bold tracking-widest">24,000 PAGES</span>
                                    The definitive internal report identifying the complicit hierarchy. Legally suppressed to shield the powerful.
                                </p>
                            </div>
                        </div>

                        {/* Node 3: The Action */}
                        <div className="group relative cursor-crosshair flex-1 w-full max-w-[320px]">
                            <div className="border border-[#cc0000]/20 p-10 text-center group-hover:opacity-0 transition-opacity duration-300 bg-[#cc0000]/5">
                                <span className="font-mono text-[#cc0000]/50 tracking-[0.5em] text-[10px] block mb-6 uppercase">Status</span>
                                <h2 className="font-mono text-[#cc0000] font-black tracking-[0.2em] text-2xl animate-pulse">SEALED</h2>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#cc0000] border border-[#ff3333] p-8 shadow-[0_0_40px_rgba(204,0,0,0.3)] pointer-events-none">
                                <p className="font-mono text-white font-black text-sm tracking-widest text-center uppercase leading-loose">
                                    [ Perimeter Breached ]<br />
                                    Decrypting Directories...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* The 24-Node D&D Card Array */}
            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
                {/* Group 1 & 2*/}
                <h3 className="font-['Share_Tech_Mono'] text-white tracking-[0.5em] text-2xl mb-8 uppercase opacity-50 border-b border-white/20 pb-4">
                    [ PHASE I : Structural Genesis ]
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                    {atomizedShells.slice(0, 10).map((shell) => (
                        <DataShellCard key={shell.id} shell={shell} />
                    ))}
                </div>

                {/* Group 3 & 4 */}
                <h3 className="font-['Share_Tech_Mono'] text-white tracking-[0.5em] text-2xl mb-8 uppercase opacity-50 border-b border-white/20 pb-4">
                    [ PHASE II : Vault & Collapse ]
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                    {atomizedShells.slice(10, 20).map((shell) => (
                        <DataShellCard key={shell.id} shell={shell} />
                    ))}
                </div>

                {/* Group 5 */}
                <h3 className="font-['Share_Tech_Mono'] text-white tracking-[0.5em] text-2xl mb-8 uppercase opacity-50 border-b border-white/20 pb-4">
                    [ PHASE III : Meta Analysis ]
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {atomizedShells.slice(20, 24).map((shell) => (
                        <DataShellCard key={shell.id} shell={shell} />
                    ))}
                </div>

            </div>
        </div>
    );
}
