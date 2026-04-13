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
            }, 2200);
            return () => clearTimeout(timer);
        }
    }, [isOpen, onComplete]);

    if (isUnmounted) return null;

    return (
        <div className={cn(
            "fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden",
            isOpen ? "pointer-events-none" : ""
        )}>
            {/* Left Door */}
            <div
                className={cn(
                    "absolute top-0 bottom-0 left-0 w-1/2 bg-black overflow-hidden transition-transform duration-[1800ms] ease-[cubic-bezier(0.7, 0, 0.3, 1)] z-20",
                    isOpen ? "-translate-x-full" : "translate-x-0"
                )}
            >
                <div
                    className="absolute inset-0 w-full h-full bg-no-repeat"
                    style={{
                        backgroundImage: "url('/assets/bosch_triptych_clean.jpg')",
                        backgroundPosition: "left center",
                        backgroundSize: "200% 100%"
                    }}
                />
                <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black/90 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-2 bg-gradient-to-r from-[#211a14] to-[#120b05] border-l border-[#3a2c20] shadow-[0_0_30px_rgba(0,0,0,0.9)]" />
            </div>

            {/* Right Door */}
            <div
                className={cn(
                    "absolute top-0 bottom-0 right-0 w-1/2 bg-black overflow-hidden transition-transform duration-[1800ms] ease-[cubic-bezier(0.7, 0, 0.3, 1)] z-20",
                    isOpen ? "translate-x-full" : "translate-x-0"
                )}
            >
                <div
                    className="absolute inset-0 w-full h-full bg-no-repeat"
                    style={{
                        backgroundImage: "url('/assets/bosch_triptych_clean.jpg')",
                        backgroundPosition: "right center",
                        backgroundSize: "200% 100%"
                    }}
                />
                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/90 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-l from-[#211a14] to-[#120b05] border-r border-[#3a2c20] shadow-[0_0_30px_rgba(0,0,0,0.9)]" />
            </div>

            {/* The Seal / Trigger Area */}
            <div
                className={cn(
                    "absolute z-30 flex flex-col items-center justify-center transition-all duration-[800ms]",
                    isOpen ? "opacity-0 scale-150 blur-md pointer-events-none" : "opacity-100 scale-100"
                )}
            >
                <button
                    onClick={() => setIsOpen(true)}
                    className="group relative flex flex-col items-center justify-center cursor-pointer"
                >
                    <div className="absolute inset-0 bg-red-900/40 blur-[60px] rounded-full w-56 h-56 group-hover:bg-red-600/60 transition-colors duration-1000" />

                    <div className="w-24 h-24 sm:w-32 sm:h-32 border-2 border-red-900/60 bg-black/80 backdrop-blur-xl rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(139,26,26,0.6)] group-hover:scale-110 group-hover:border-white transition-all duration-700 relative z-20 overflow-hidden">
                        <img src="/assets/images/redemtoris_eye.png" className="w-full h-full object-cover scale-110 opacity-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700" />
                    </div>

                    <span className="mt-8 text-xs sm:text-xs font-bold text-[#faf6ee] uppercase tracking-[0.5em] group-hover:text-white transition-colors duration-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] bg-black/40 px-4 py-1 backdrop-blur-sm">
                        Break the Seal
                    </span>
                </button>
            </div>
        </div>
    );
}

