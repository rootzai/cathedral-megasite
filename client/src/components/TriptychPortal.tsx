import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { SmartImage } from "./SmartImage";

export default function TriptychPortal({ onComplete }: { onComplete?: () => void }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isUnmounted, setIsUnmounted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                setIsUnmounted(true);
                if (onComplete) onComplete();
            }, 3000); // 3-second heavy animation
            return () => clearTimeout(timer);
        }
    }, [isOpen, onComplete]);

    if (isUnmounted) return null;

    return (
        <div className={cn(
            "fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden transition-colors duration-[3000ms]",
            isOpen ? "bg-transparent pointer-events-none" : ""
        )}>
            {/* Left Door */}
            <div
                className={cn(
                    "absolute top-0 bottom-0 left-0 w-1/2 bg-black overflow-hidden transition-transform duration-[3000ms] ease-[cubic-bezier(0.25,1,0.5,1)]",
                    isOpen ? "-translate-x-full" : "translate-x-0"
                )}
            >
                <div
                    className="absolute inset-0 bg-cover bg-no-repeat w-[200vw] h-full"
                    style={{
                        backgroundImage: "url('/assets/images/haywain-triptych.png')",
                        backgroundPosition: "top left",
                        backgroundSize: "cover"
                    }}
                />
                {/* Crack inner shadow */}
                <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black/80 to-transparent pointer-events-none" />
                {/* Triptych division line - typical of medieval art frames */}
                <div className="absolute inset-y-0 right-0 w-2 bg-gradient-to-r from-[#211a14] to-[#120b05] border-l border-[#3a2c20] shadow-[0_0_20px_rgba(0,0,0,0.9)]" />
            </div>

            {/* Right Door */}
            <div
                className={cn(
                    "absolute top-0 bottom-0 right-0 w-1/2 bg-black overflow-hidden transition-transform duration-[3000ms] ease-[cubic-bezier(0.25,1,0.5,1)]",
                    isOpen ? "translate-x-full" : "translate-x-0"
                )}
            >
                <div
                    className="absolute inset-0 bg-cover bg-no-repeat w-[200vw] h-full right-0"
                    style={{
                        backgroundImage: "url('/assets/images/haywain-triptych.png')",
                        backgroundPosition: "top right",
                        backgroundSize: "cover",
                        marginLeft: "-100vw"
                    }}
                />
                {/* Crack inner shadow */}
                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/80 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-l from-[#211a14] to-[#120b05] border-r border-[#3a2c20] shadow-[0_0_20px_rgba(0,0,0,0.9)]" />
            </div>

            {/* The Seal / Trigger Area */}
            <div
                className={cn(
                    "absolute z-10 flex flex-col items-center justify-center transition-all duration-[2000ms]",
                    isOpen ? "opacity-0 scale-150 blur-md pointer-events-none" : "opacity-100 scale-100"
                )}
            >
                <button
                    onClick={() => setIsOpen(true)}
                    className="group relative flex flex-col items-center justify-center cursor-pointer"
                >
                    <div className="absolute inset-0 bg-red-900/30 blur-[50px] rounded-full w-48 h-48 group-hover:bg-red-900/60 transition-colors duration-1000" />

                    <div className="w-16 h-16 sm:w-20 sm:h-20 border border-red-900/50 bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(139,26,26,0.5)] group-hover:scale-110 group-hover:border-red-600 transition-all duration-700 relative z-20">
                        <SmartImage src="/assets/images/sh-pirate-logo.png" className="w-8 sm:w-10 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <span className="mt-8 text-[10px] sm:text-xs font-bold text-[#c8bdb0] uppercase tracking-[0.5em] group-hover:text-white transition-colors duration-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                        Break the Seal
                    </span>
                </button>
            </div>
        </div>
    );
}
