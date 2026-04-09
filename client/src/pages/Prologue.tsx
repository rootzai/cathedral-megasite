import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Prologue() {
    return (
        <div className="min-h-screen bg-[#070709] text-[#c8bdb0] font-serif overflow-x-hidden selection:bg-red-900/30">
            <div className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center bg-gradient-to-b from-[#070709] to-transparent">
                <Link href="/" className="inline-flex items-center gap-3 text-zinc-400 hover:text-white transition-colors font-mono uppercase tracking-[0.3em] text-sm font-bold">
                        <ArrowLeft className="w-5 h-5" /> Return to Hub
                </Link>
            </div>

            <main className="max-w-3xl mx-auto px-6 py-32 space-y-16">
                <motion.header 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="space-y-6 text-center border-b border-red-900/20 pb-12"
                >
                    <span className="text-red-600 font-mono text-sm uppercase tracking-[0.5em] font-black">The Lifeline</span>
                    <h1 className="text-6xl md:text-8xl text-amber-500 font-cinzel tracking-tighter leading-none uppercase font-black drop-shadow-2xl">The Crawford Thread</h1>
                    <p className="text-3xl text-white font-serif leading-relaxed italic">
                        Mark Crawford. Age 13. Bayonne, New Jersey. 
                    </p>
                </motion.header>

                <motion.article 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-2xl text-zinc-200 leading-relaxed space-y-12 font-serif"
                >
                    <p className="first-letter:text-[10rem] first-letter:font-cinzel first-letter:text-red-700 first-letter:float-left first-letter:mr-6 first-letter:mt-[-20px] first-letter:leading-none">
                        When Mark Crawford was thirteen years old, a priest named Kenneth Martin began abusing him and his brothers in Bayonne, New Jersey. Then Martin was promoted. Not removed — promoted. He became Archbishop Theodore McCarrick's personal secretary.
                    </p>
                    <p>
                        When Crawford came forward years later, the Diocese of Metuchen did not deny what had happened. Instead, they falsified his birth records to claim his adulthood and said the statute of limitations had expired, refused to pay the $108,000 settlement their own mediator had awarded him. When Crawford asked for a written acknowledgment that the abuse happened and that Martin would never have access to children again, they refused to oblige him.
                    </p>
                    <div className="border-l-[6px] border-red-700 pl-12 py-8 my-16 bg-red-950/20 shadow-2xl">
                        <p className="text-4xl text-white italic leading-tight">
                            Catholics call that acknowledgment a Conversion. <br/><span className="text-red-600 font-black uppercase tracking-widest mt-4 block">Metuchen refused it.</span>
                        </p>
                    </div>
                    <p>
                        Fifteen became sixteen on paper, one falsified digit, and a man who had been abused as a child was turned away without money, without acknowledgment, and without the Church's most basic gesture of accountability.
                    </p>
                    <p className="text-white font-black text-3xl pt-12 border-t-2 border-red-900/50 leading-relaxed uppercase tracking-tighter">
                        What you are about to read is that same mechanism, applied at institutional scale across fifty years, with better lawyers and massive resources.
                    </p>
                </motion.article>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="pt-16 flex justify-center"
                >
                    <Link href="/evidence/origin" className="inline-flex items-center gap-6 border-2 border-red-600 bg-red-950/40 px-12 py-6 text-white font-mono font-black tracking-[0.5em] uppercase text-xl group hover:bg-red-600 transition-all shadow-[0_0_50px_rgba(220,38,38,0.3)]">
                            Enter the Investigation <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
                    </Link>
                </motion.div>
            </main>
        </div>
    );
}
