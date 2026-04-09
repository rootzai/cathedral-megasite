import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Prologue() {
    return (
        <div className="min-h-screen bg-[#070709] text-[#c8bdb0] font-serif overflow-x-hidden selection:bg-red-900/30">
            <div className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center bg-gradient-to-b from-[#070709] to-transparent">
                <Link href="/">
                    <a className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors font-mono uppercase tracking-widest text-xs">
                        <ArrowLeft className="w-4 h-4" /> Return to Hub
                    </a>
                </Link>
            </div>

            <main className="max-w-3xl mx-auto px-6 py-32 space-y-16">
                <motion.header 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="space-y-6 text-center border-b border-red-900/20 pb-12"
                >
                    <span className="text-red-800 font-mono text-xs uppercase tracking-[0.4em] font-bold">The Lifeline</span>
                    <h1 className="text-5xl md:text-6xl text-[#d4af37] font-cinzel tracking-tight leading-none uppercase">The Crawford Thread</h1>
                    <p className="text-xl text-white font-serif leading-[1.6]">
                        Mark Crawford. Age 13. Bayonne, New Jersey. 
                    </p>
                </motion.header>

                <motion.article 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-xl text-zinc-400 leading-relaxed space-y-8"
                >
                    <p className="first-letter:text-7xl first-letter:font-cinzel first-letter:text-white first-letter:float-left first-letter:mr-4 first-letter:mt-[-12px]">
                        When Mark Crawford was thirteen years old, a priest named Kenneth Martin began abusing him and his brothers in Bayonne, New Jersey. Then Martin was promoted. Not removed — promoted. He became Archbishop Theodore McCarrick's personal secretary.
                    </p>
                    <p>
                        When Crawford came forward years later, the Diocese of Metuchen did not deny what had happened. Instead, they falsified his birth records to claim his adulthood and said the statute of limitations had expired, refused to pay the $108,000 settlement their own mediator had awarded him. When Crawford asked for a written acknowledgment that the abuse happened and that Martin would never have access to children again, they refused to oblige him.
                    </p>
                    <div className="border-l-4 border-red-900 pl-8 py-4 my-12 bg-red-950/10">
                        <p className="text-2xl text-white italic">
                            Catholics call that acknowledgment a Conversion. <span className="text-[#8b1a1a] font-bold">Metuchen refused it.</span>
                        </p>
                    </div>
                    <p>
                        Fifteen became sixteen on paper, one falsified digit, and a man who had been abused as a child was turned away without money, without acknowledgment, and without the Church's most basic gesture of accountability.
                    </p>
                    <p className="text-white font-bold text-2xl pt-8 border-t border-white/5">
                        What you are about to read is that same mechanism, applied at institutional scale across fifty years, with better lawyers and massive resources.
                    </p>
                </motion.article>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="pt-16 flex justify-center"
                >
                    <Link href="/evidence/origin">
                        <a className="inline-flex items-center gap-4 border border-red-900/50 bg-red-950/20 px-8 py-4 text-[#8b1a1a] font-mono font-black tracking-[0.3em] uppercase text-sm group hover:bg-red-900 hover:text-white transition-all shadow-[0_0_30px_rgba(139,26,26,0.15)]">
                            Enter the Investigation <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </a>
                    </Link>
                </motion.div>
            </main>
        </div>
    );
}
