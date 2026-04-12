import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import gsap from 'gsap';

interface DossierDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    eggNumber: number | string;
    name: string;
    role: string;
    baumParallel: string;
    forensic: string;
    quote?: string;
    quoteAttr?: string;
}

export default function DossierDrawer({
    isOpen,
    onClose,
    eggNumber,
    name,
    role,
    baumParallel,
    forensic,
    quote,
    quoteAttr
}: DossierDrawerProps) {
    const [typedText, setTypedText] = useState("");
    
    // Play sound effect, GSAP animation, and typewriter effect
    useEffect(() => {
        if (isOpen) {
            // "Slam" sound effect for the dossier could go here
            
            gsap.fromTo(
                "#dossier-panel", 
                { x: "100%", rotation: 2 },
                { x: "0%", rotation: 0, duration: 0.6, ease: "power3.out" }
            );

            gsap.fromTo(
                ".classified-stamp",
                { scale: 3, opacity: 0 },
                { scale: 1, opacity: 0.8, rotation: -15, duration: 0.4, delay: 0.3, ease: "bounce.out" }
            );

            // Typewriter effect for forensic text
            let i = 0;
            setTypedText("");
            const speed = 10; // ms per character
            
            const typeWriter = setInterval(() => {
                if (i < forensic.length) {
                    setTypedText(prev => prev + forensic.charAt(i));
                    i++;
                } else {
                    clearInterval(typeWriter);
                }
            }, speed);

            return () => clearInterval(typeWriter);
        }
    }, [isOpen, forensic]);

    if (!isOpen) return null;

    return (
        <>
            <div 
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]" 
                onClick={onClose}
                aria-hidden="true"
            />
            <div 
                id="dossier-panel"
                className="fixed top-0 right-0 h-full w-full max-w-xl z-[101] shadow-2xl overflow-y-auto border-l-4 border-[#8b1a1a]"
                style={{
                    backgroundColor: '#e6ded0', // Paper texture color
                    backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")',
                    boxShadow: '-10px 0 30px rgba(0,0,0,0.5)'
                }}
            >
                <div className="absolute top-8 right-8 cursor-pointer text-zinc-800 hover:text-black transition-colors" onClick={onClose}>
                    <X className="w-8 h-8" />
                </div>

                <div className="p-8 md:p-12 text-[#1a1a1a] relative">
                    
                    {/* The Classified Stamp */}
                    <div className="classified-stamp absolute top-12 left-8 md:left-auto md:right-32 border-4 border-[#c0392b] text-[#c0392b] uppercase font-bold text-3xl px-4 py-1 rounded inline-block tracking-widest origin-center">
                        CLASSIFIED
                    </div>

                    <div className="mt-20">
                        <span className="font-mono text-sm tracking-widest text-[#8b1a1a] font-bold block mb-2">
                            // EASTER EGG NO. {eggNumber} //
                        </span>
                        
                        <h2 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tight mb-1">
                            {name}
                        </h2>
                        
                        <div className="font-mono text-xs md:text-sm text-zinc-600 uppercase tracking-widest border-b-2 border-zinc-300 pb-6 mb-8">
                            {role}
                        </div>

                        <div className="space-y-8">
                            <div className="bg-zinc-800 text-zinc-200 p-6 rounded-sm border-l-4 border-zinc-500 shadow-inner">
                                <p className="font-body text-sm md:text-base italic leading-relaxed">
                                    "{baumParallel}"
                                </p>
                            </div>

                            <div className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
                                [ DECLASSIFIED DOSSIER ]
                            </div>

                            <p className="font-body text-base md:text-lg leading-relaxed text-zinc-900 border-l border-zinc-300 pl-4">
                                {typedText}
                                <span className="inline-block w-2 h-4 bg-zinc-800 animate-pulse ml-1 opacity-50" />
                            </p>

                            {quote && (
                                <div className="mt-12 bg-[#8b1a1a]/10 border-l-4 border-[#8b1a1a] p-6 shadow-sm">
                                    <p className="font-heading text-lg md:text-xl text-[#8b1a1a] leading-relaxed mb-3">
                                        "{quote}"
                                    </p>
                                    {quoteAttr && (
                                        <span className="font-mono text-xs uppercase tracking-wider text-[#8b1a1a]/80">
                                            — {quoteAttr}
                                        </span>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
