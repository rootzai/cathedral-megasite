import React, { useState } from "react";
import MemoryPalaceCanvas from "@/components/MemoryPalaceCanvas";
import { SEO } from "@/components/SEO";

export default function EvidenceHub() {
    const [showOnboarding, setShowOnboarding] = useState(true);

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden relative">
            <SEO 
                title="The Architecture of Recall" 
                description="A massive, interactive 3D WebGL data representation of the Cathedral Megasite evidence." 
            />
            
            {/* The 3D Engine */}
            <MemoryPalaceCanvas />

            {/* Mnemonic Onboarding Modal */}
            {showOnboarding && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-6">
                    <div className="max-w-2xl w-full border border-red-900/50 bg-[#0a0a0a] p-10 relative shadow-[0_0_50px_rgba(139,26,26,0.15)]">
                        
                        <div className="absolute top-0 left-0 w-2 h-full bg-red-900"></div>

                        <span className="text-red-600 font-mono text-xs uppercase tracking-[0.4em] font-black block mb-4">
                            Cognitive Protocol Initialization
                        </span>
                        
                        <h2 className="text-3xl font-cinzel font-black uppercase tracking-[0.1em] text-white mb-6">
                            The Architecture of Recall
                        </h2>
                        
                        <div className="space-y-6 text-zinc-400 font-serif text-lg leading-relaxed mb-10">
                            <p>
                                The human capacity to remember is fundamentally a spatial phenomenon. To process this massive cache of unsealed evidence effectively, you are now navigating a cognitive framework known as the <strong className="text-white">Method of Loci</strong> (The Memory Palace).
                            </p>
                            <p>
                                Do not attempt to memorize flat lists of files. Instead, hover and interact with the physical 3D artifacts floating within these chambers. By anchoring abstract data to tangible geometric stations along an architectural route, you will circumvent traditional rote fatigue and natively map the entire cover-up.
                            </p>
                            <p className="font-mono text-sm uppercase tracking-widest text-zinc-500 italic">
                                Action: Drag to rotate the chambers. Click an artifact to unseal the targeted dossier.
                            </p>
                        </div>

                        <button 
                            onClick={() => setShowOnboarding(false)}
                            className="w-full bg-red-900 hover:bg-white hover:text-black transition-colors text-white font-black uppercase tracking-[0.3em] py-4 text-sm"
                        >
                            [ Acknowledge & Enter the Void ]
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
