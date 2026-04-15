import React, { useState, useRef } from "react";
import { SEO } from "@/components/SEO";
import { motion, useAnimation, useDragControls } from "framer-motion";
import { ShieldAlert, AlertTriangle, Crosshair, CheckCircle2 } from "lucide-react";

export default function LathamPrototype() {
    const [isShattered, setIsShattered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();

    const words = [
        "WE", "DENY", "ALL", "ALLEGATIONS.", "THE", "INSTITUTION", "ACTED",
        "IN", "GOOD", "FAITH", "AND", "WITH", "FULL", "TRANSPARENCY.", "NO",
        "SLUSH", "FUND", "EXISTS.", "ANY", "TRANSFER", "WAS", "FOR", "STANDARD", "CHARITABLE", "OPERATIONS."
    ];

    const handleDragStart = () => {
        setIsDragging(true);
    };

    const handleDragEnd = (event: any, info: any) => {
        setIsDragging(false);
        // Simple collision detection based on Y axis drop (if dropped near the top text)
        if (info.point.y < window.innerHeight / 2) {
            triggerShatter();
        } else {
            // Snap back
        }
    };

    const triggerShatter = () => {
        setIsShattered(true);
        // Could play a loud impact sound here via standard HTML Audio
        // const audio = new Audio('/impact.mp3'); audio.play();
    };

    return (
        <div
            ref={containerRef}
            className="min-h-screen bg-[#050505] overflow-hidden relative cursor-crosshair perspective-1000"
            style={{ perspective: "1000px" }}
        >
            <SEO title="Legal Combat Prototype | The Latham Negotiation" />

            {/* SCANLINE OVERLAY */}
            <div className="absolute inset-0 pointer-events-none bg-[url('/assets/noise.svg')] opacity-20 z-50 mix-blend-overlay"></div>

            {/* HEADER DIAGNOSTICS */}
            <div className="absolute top-6 left-6 z-40 font-mono text-xs text-[#8b1a1a] uppercase space-y-1">
                <div className="flex items-center gap-2"><ShieldAlert className="w-4 h-4" /> ACTIVE DEFENSE FIELD: ONLINE</div>
                <div>ENTITY: LATHAM & WATKINS LLP</div>
                <div>DEFENSE VECTOR: AGGRESSIVE DENIAL</div>
                <div className={isShattered ? "text-red-500 animate-pulse" : "text-zinc-600"}>
                    STATUS: {isShattered ? "INTEGRITY COMPROMISED // LIE DETECTED" : "UNBROKEN // IMPENETRABLE"}
                </div>
            </div>

            {/* ENEMY TEXT (THE BOSS) */}
            <div className="absolute top-0 left-0 w-full h-[60vh] flex flex-wrap items-center justify-center p-12 z-10 pointer-events-none">
                {words.map((word, i) => (
                    <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                        animate={
                            isShattered
                                ? {
                                    opacity: 0,
                                    y: Math.random() * 800 + 400,
                                    x: (Math.random() - 0.5) * 1000,
                                    rotateX: Math.random() * 360,
                                    rotateY: Math.random() * 360,
                                    rotateZ: Math.random() * 180,
                                    filter: "blur(4px)",
                                    transition: { duration: 1.5, ease: "circIn" }
                                }
                                : {
                                    opacity: 1,
                                    scale: 1,
                                    filter: "blur(0px)",
                                    transition: { duration: 0.5, delay: i * 0.05 }
                                }
                        }
                        className={`text-5xl md:text-7xl lg:text-8xl font-black uppercase text-white font-serif tracking-tighter mx-2 my-1 leading-none ${isShattered ? '' : 'hover:text-[#8b1a1a] transition-colors duration-100'}`}
                        style={{
                            textShadow: isShattered ? 'none' : '0 0 20px rgba(255,255,255,0.2)',
                            transformStyle: "preserve-3d"
                        }}
                    >
                        {word}
                    </motion.span>
                ))}
            </div>

            {/* TRUTH REVEALED UNDERNEATH */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full max-w-4xl px-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isShattered ? 1 : 0, scale: isShattered ? 1 : 0.9 }}
                transition={{ duration: 2, delay: 0.5 }}
            >
                <div className="flex items-center gap-4 mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                    <span className="font-mono text-green-500 tracking-widest uppercase">Encryption Broken // Truth Acquired</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-sans font-black text-zinc-300 uppercase tracking-wide leading-tight">
                    INTERNAL LEDGERS CONFIRM <span className="text-white bg-red-900 px-2">$14.2 MILLION</span> TRANSFERRED DIRECTLY TO OFFSHORE HOLDING.
                </h2>
                <p className="mt-6 text-xl text-zinc-500 font-mono">
                    The Board was aware. The emails from Nov 14th prove explicit authorization of the 'Charitable' routing.
                </p>
                <button className="mt-12 bg-white text-black font-black uppercase tracking-widest px-8 py-4 font-mono hover:bg-green-500 transition-colors">
                    Add to Sequence Portfolio
                </button>
            </motion.div>

            {/* THE WEAPON (EVIDENCE) */}
            {!isShattered && (
                <div className="absolute bottom-0 left-0 w-full h-[40vh] flex items-end justify-center pb-12 z-30 pointer-events-none">
                    <motion.div
                        drag
                        dragConstraints={containerRef}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        whileHover={{ scale: 1.05 }}
                        whileDrag={{ scale: 1.1, rotate: -5, boxShadow: "0 0 50px rgba(139,26,26,0.5)" }}
                        className="pointer-events-auto cursor-grab active:cursor-grabbing bg-[#111] border-2 border-[#8b1a1a] shadow-[0_0_20px_rgba(139,26,26,0.2)] p-6 max-w-md"
                    >
                        <div className="flex items-center gap-3 mb-4 border-b border-zinc-800 pb-3">
                            <Crosshair className="text-[#8b1a1a] animate-pulse" />
                            <span className="font-mono text-xs text-[#8b1a1a] uppercase tracking-widest">Service Weapon [Evidence File]</span>
                        </div>
                        <h3 className="text-xl font-black text-white uppercase mb-2">P. Martin Ledger 2004</h3>
                        <p className="text-zinc-400 text-sm font-mono leading-relaxed pointer-events-none">
                            Bank receipts and routing slips detailing the specific tranches of capital moved into the account 30 days prior to the resignation.
                        </p>

                        <div className="mt-6 text-center">
                            <span className="inline-block bg-[#8b1a1a] text-black font-black text-[10px] uppercase tracking-widest px-4 py-2 animate-bounce">
                                DRAG TO STRIKE LIE
                            </span>
                        </div>
                    </motion.div>
                </div>
            )}

            {/* UI INSTRUCTIONS */}
            <div className={`absolute bottom-6 left-6 font-mono text-[10px] text-zinc-600 transition-opacity ${isDragging ? 'opacity-0' : 'opacity-100'}`}>
                CLICK AND DRAG EVIDENCE PAYLOAD INTO ENEMY TEXT BLOCK TO SHATTER ACTIVE DEFENSES.
            </div>
        </div>
    );
}
