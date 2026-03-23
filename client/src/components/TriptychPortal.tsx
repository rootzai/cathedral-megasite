import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function TriptychPortal({ onComplete }: { onComplete?: () => void }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isUnmounted, setIsUnmounted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                setIsUnmounted(true);
                if (onComplete) onComplete();
            }, 6000); // Extended for cinematic impact
            return () => clearTimeout(timer);
        }
    }, [isOpen, onComplete]);

    if (isUnmounted) return null;

    return (
        <div className={cn(
            "fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden transition-colors duration-[3000ms]",
            isOpen ? "bg-transparent pointer-events-none" : ""
        )}>
            {/* BACKGROUND VIDEO (REVEALED ON SPLIT) */}
            {isOpen && (
                <div className="absolute inset-0 z-0">
                    <iframe 
                        src="https://www.youtube.com/embed/nU21Vf_3Oww?autoplay=1&mute=1&controls=0&loop=1&playlist=nU21Vf_3Oww&showinfo=0&rel=0" 
                        className="w-full h-full object-cover scale-[1.5] brightness-50"
                        allow="autoplay; encrypted-media"
                        frameBorder="0"
                    />
                    {/* Atmospheric overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60" />
                </div>
            )}

            {/* Left Door */}
            <div
                className={cn(
                    "absolute top-0 bottom-0 left-0 w-1/2 bg-black overflow-hidden transition-transform duration-[4000ms] ease-[cubic-bezier(0.4, 0, 0.2, 1)] z-20",
                    isOpen ? "-translate-x-full" : "translate-x-0"
                )}
            >
                <div
                    className="absolute inset-0 bg-cover bg-no-repeat w-[100vw] h-full"
                    style={{
                        backgroundImage: "url('/assets/images/haywain-triptych.png')",
                        backgroundPosition: "top left",
                        backgroundSize: "cover"
                    }}
                />
                <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black/90 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-2 bg-gradient-to-r from-[#211a14] to-[#120b05] border-l border-[#3a2c20] shadow-[0_0_30px_rgba(0,0,0,0.9)]" />
            </div>

            {/* Right Door */}
            <div
                className={cn(
                    "absolute top-0 bottom-0 right-0 w-1/2 bg-black overflow-hidden transition-transform duration-[4000ms] ease-[cubic-bezier(0.4, 0, 0.2, 1)] z-20",
                    isOpen ? "translate-x-full" : "translate-x-0"
                )}
            >
                <div
                    className="absolute inset-0 bg-cover bg-no-repeat w-[100vw] h-full right-0"
                    style={{
                        backgroundImage: "url('/assets/images/haywain-triptych.png')",
                        backgroundPosition: "top right",
                        backgroundSize: "cover",
                        marginLeft: "-50vw" // Correct offset for splitting an image across two doors
                    }}
                />
                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/90 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-l from-[#211a14] to-[#120b05] border-r border-[#3a2c20] shadow-[0_0_30px_rgba(0,0,0,0.9)]" />
            </div>

            {/* The Seal / Trigger Area */}
            <div
                className={cn(
                    "absolute z-30 flex flex-col items-center justify-center transition-all duration-[2000ms]",
                    isOpen ? "opacity-0 scale-150 blur-md pointer-events-none" : "opacity-100 scale-100"
                )}
            >
                <div className="mb-12 text-center">
                    <h2 className="text-[#c8bdb0] font-serif text-3xl md:text-5xl uppercase tracking-[0.3em] mb-4 opacity-70 group-hover:opacity-100 transition-opacity drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
                        Sodom Hall
                    </h2>
                    <p className="text-[#8b1a1a] font-mono text-xs uppercase tracking-[0.5em] animate-pulse">
                        THE DOSSIER IS UNSEALED
                    </p>
                </div>

                <button
                    onClick={() => setIsOpen(true)}
                    className="group relative flex flex-col items-center justify-center cursor-pointer"
                >
                    <div className="absolute inset-0 bg-red-900/40 blur-[60px] rounded-full w-56 h-56 group-hover:bg-red-600/60 transition-colors duration-1000" />

                    <div className="w-20 h-20 sm:w-24 sm:h-24 border-2 border-red-900/60 bg-black/80 backdrop-blur-xl rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(139,26,26,0.6)] group-hover:scale-110 group-hover:border-red-600 transition-all duration-700 relative z-20">
                        <img src="/assets/images/sh-pirate-logo.png" className="w-10 sm:w-12 opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <span className="mt-8 text-[10px] sm:text-xs font-bold text-[#c8bdb0] uppercase tracking-[0.5em] group-hover:text-white transition-colors duration-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        Break the Seal
                    </span>
                </button>
            </div>
        </div>
    );
}

