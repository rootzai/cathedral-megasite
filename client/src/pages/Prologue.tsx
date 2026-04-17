import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { ArrowLeft, Unlock, ScanFace } from "lucide-react";
import { SEO } from "@/components/SEO";

// We are replacing broken Unsplash links with CSS native placeholders
export default function TierOneOnboarding() {
    const [_, setLocation] = useLocation();
    const { scrollY } = useScroll();

    // Hardware accelerated parallax using useTransform
    const heroY = useTransform(scrollY, [0, 1000], [0, 300]);
    const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.2]);

    const [keyAcquired, setKeyAcquired] = useState(false);

    const handleKeyDiscovery = () => {
        setKeyAcquired(true);
        // Play sound effect, wait, then transport to Maproom/Combat
        setTimeout(() => {
            setLocation("/director-override"); // Sends them to the newly unlocked Sector Map
        }, 3500);
    };

    return (
        <div className="min-h-screen bg-[#070709] text-[#c8bdb0] font-serif overflow-x-hidden selection:bg-[#8b1a1a]/30">
            <SEO title="The Patriarch | Investigative Report" />

            {/* Global Header - Innocent looking */}
            <header className="fixed top-8 md:top-12 left-0 w-full p-4 md:p-6 z-50 flex justify-between items-center transition-all bg-gradient-to-b from-[#070709] to-transparent pointer-events-none">
                <div className="font-mono uppercase tracking-[0.3em] text-xs md:text-sm font-bold text-white/50">
                    Sodom Hall // Investigative Feature
                </div>
            </header>

            {/* The Tourist Hook (Tier 2 Transition Overlay) */}
            <AnimatePresence>
                {keyAcquired && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-6"
                    >
                        <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-20 mix-blend-overlay"></div>
                        <motion.div
                            initial={{ scale: 0.8, filter: "blur(10px)" }}
                            animate={{ scale: 1, filter: "blur(0px)" }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center text-center space-y-6"
                        >
                            <ScanFace className="w-16 h-16 md:w-24 md:h-24 text-[#8b1a1a] animate-pulse" />
                            <h2 className="text-4xl md:text-6xl font-black font-sans uppercase tracking-widest text-white">Anomalous Data Detected</h2>
                            <p className="text-xl md:text-2xl font-mono text-[#8b1a1a]">CLEARANCE KEY [LATHAM_RPT] ACQUIRED.</p>
                            <div className="w-full h-1 bg-zinc-900 mt-8 overflow-hidden">
                                <motion.div
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 2.5, ease: "linear" }}
                                    className="h-full bg-[#8b1a1a]"
                                />
                            </div>
                            <span className="font-mono text-xs text-zinc-500 tracking-[0.3em] mt-4 uppercase">Rerouting down security vector...</span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Parallax Hero */}
            <div className="relative w-full h-[80vh] md:h-screen overflow-hidden bg-[#070709]">
                <motion.div
                    className="absolute inset-0 w-full h-[120%] -top-[10%] bg-gradient-to-tr from-zinc-900 to-black"
                    style={{ y: heroY, opacity: heroOpacity, willChange: "transform, opacity" }}
                >
                    <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-20 mix-blend-overlay"></div>
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 mt-32 md:mt-0">
                    <span className="text-[#8b1a1a] font-mono text-xs md:text-sm uppercase tracking-[0.5em] font-black mb-8 block">The Fall Of Newark</span>
                    <h1 className="text-5xl md:text-8xl lg:text-9xl text-white font-serif tracking-tighter leading-none uppercase font-black drop-shadow-2xl max-w-6xl mx-auto">
                        The Architect of Cover-Up
                    </h1>
                </div>
            </div>

            {/* Traditional Article Layout (The Gameplay Canvas) */}
            <main className="max-w-3xl mx-auto px-6 py-16 md:py-32 space-y-12 md:space-y-16 relative z-10 bg-[#070709]">

                <article className="text-xl md:text-2xl text-zinc-300 leading-relaxed md:leading-loose space-y-8 md:space-y-12 font-serif">
                    <p className="first-letter:text-[6rem] md:first-letter:text-[8rem] first-letter:font-sans first-letter:text-white first-letter:float-left first-letter:mr-6 first-letter:mt-[-10px] md:first-letter:mt-[-20px] first-letter:leading-none">
                        When Mark Crawford was thirteen years old, a priest named Kenneth Martin began abusing him and his brothers in Bayonne, New Jersey. Then Martin was promoted. Not removed — promoted. He became Archbishop Theodore McCarrick's personal secretary.
                    </p>
                    <p>
                        When Crawford came forward years later, the Diocese of Metuchen did not deny what had happened. Instead, they falsified his birth records to claim his adulthood, argued the statute of limitations had expired, and refused to pay the $108,000 settlement their own mediator had awarded him.
                    </p>

                    <figure className="my-16 md:my-32 w-full relative">
                        <div className="w-full text-center">
                            <h3 className="text-3xl md:text-5xl text-[#c8bdb0] font-serif italic text-center p-8 bg-clip-text text-transparent bg-gradient-to-b from-[#e2dacf] to-[#8b1a1a] opacity-80 transition-opacity duration-1000">
                                "IMAGE_REDACTED_BY_AUTHORITY"
                            </h3>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[200px] bg-red-900/10 blur-[80px] pointer-events-none rounded-full" />
                        </div>
                        <figcaption className="mt-8 text-center font-mono text-xs text-[#8b1a1a] tracking-[0.3em] uppercase">Exhibit A: Documented routing procedures in the Archdiocese.</figcaption>
                    </figure>

                    <p>
                        Fifteen became sixteen on paper, one falsified digit, and a man who had been abused as a child was turned away without money, without acknowledgment, and without the Church's most basic gesture of accountability.
                    </p>

                    <p className="pt-12 text-[#c8bdb0]">
                        the culmination of the Latham investigation. 
                        
                        {/* THE CLEARANCE KEY */}
                        <div className="mt-32 mb-16 flex flex-col items-center justify-center relative w-full">
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-48 h-48 bg-red-900/20 rounded-full blur-[40px] animate-pulse" />
                            </div>
                            <button
                                onClick={handleKeyDiscovery}
                                className="group relative z-10 flex flex-col items-center justify-center outline-none cursor-pointer"
                            >
                                <div className="w-24 h-24 sm:w-32 sm:h-32 border border-[#8b1a1a]/50 bg-[#070709] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(139,26,26,0.4)] group-hover:scale-110 group-hover:border-[#8b1a1a] transition-all duration-[800ms] ease-out">
                                    <div className="absolute inset-0 bg-[url('/assets/noise.svg')] opacity-20 mix-blend-overlay rounded-full"></div>
                                    <div className="absolute inset-2 border border-dashed border-[#8b1a1a]/30 rounded-full animate-[spin_8s_linear_infinite]" />
                                    <Unlock className="w-8 h-8 sm:w-10 sm:h-10 text-[#8b1a1a] group-hover:text-white transform transition-colors duration-500" />
                                </div>
                                <span className="mt-8 font-mono text-xs text-[#8b1a1a] tracking-[0.4em] uppercase group-hover:text-white transition-colors duration-500 drop-shadow-md">
                                    Acquire: Latham Report
                                </span>
                            </button>
                        </div>
                        
                        This document would become the cornerstone of their survival, and the weapon used against the victims.
                    </p>

                </article>

            </main>
        </div>
    );
}
