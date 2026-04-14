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
            <header className="fixed top-0 left-0 w-full p-4 md:p-6 z-50 flex justify-between items-center transition-all bg-gradient-to-b from-[#070709] to-transparent pointer-events-none">
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
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
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
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
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
                    
                    <figure className="my-16 md:my-24 w-full md:w-[130%] md:-ml-[15%]">
                        <div className="w-full h-[400px] bg-zinc-900 border border-zinc-800 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
                            <span className="text-zinc-700 font-mono text-sm uppercase tracking-widest border border-zinc-700 px-4 py-2 opacity-50">IMAGE_REDACTED_BY_AUTHORITY</span>
                        </div>
                        <figcaption className="mt-4 font-mono text-xs text-zinc-500 tracking-widest uppercase">Exhibit A: Documented routing procedures in the Archdiocese.</figcaption>
                    </figure>

                    <p>
                        Fifteen became sixteen on paper, one falsified digit, and a man who had been abused as a child was turned away without money, without acknowledgment, and without the Church's most basic gesture of accountability.
                    </p>

                    <p className="pt-12 text-[#c8bdb0]">
                        But this wasn't an isolated accident. It was the blueprint. What you are about to read is that same mechanism, applied at institutional scale across fifty years, with better lawyers and massive resources, culminating in the 
                        {/* THE CLEARANCE KEY */}
                        <button 
                            onClick={handleKeyDiscovery}
                            className="mx-2 inline-flex items-center gap-1 font-bold text-white relative group outline-none"
                        >
                            <span className="border-b-2 border-[#8b1a1a]/40 group-hover:border-[#8b1a1a] transition-colors bg-[#8b1a1a]/10 px-1 py-0.5 relative z-10 pointer-events-none group-hover:bg-[#8b1a1a]/30">LATHAM REPORT</span>
                            <Unlock className="w-4 h-4 text-[#8b1a1a] absolute -right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                        </button>.
                        This document would become the cornerstone of their survival, and the weapon used against the victims.
                    </p>

                </article>

            </main>
        </div>
    );
}
