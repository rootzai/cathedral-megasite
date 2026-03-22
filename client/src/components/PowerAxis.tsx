import React from "react";
import { motion } from "framer-motion";
import { Shield, ArrowRight, AlertCircle, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const POWER_AXIS_DATA = [
    {
        level: 1,
        title: "FR. KENNETH MARTIN",
        subtitle: "PARISH PRIEST",
        stats: [
            "1983 first report.",
            "2001 arrested.",
            "Laicized 2008.",
            "9 new lawsuits filed 2020.",
            "Active 2026 trials."
        ],
        callout: {
            title: "VICTIM CALLOUT",
            name: "Mark Crawford",
            details: "Age falsified 15 > 16. Refused $108K.",
            status: "BREACH IN PROGRESS"
        },
        shieldStatus: "EXPOSED",
        bgClass: "border-red-900/50 bg-red-950/10 shadow-red-900/10",
        accent: "text-red-500"
    },
    {
        level: 2,
        title: "BISHOP / DIOCESAN",
        subtitle: "REGIONAL HUB",
        stats: [
            "Full 6-ring shield.",
            "Chapter 11 filing.",
            "A&M playbook.",
            "432 active lawsuits."
        ],
        shieldStatus: "FRACTURED",
        bgClass: "border-gray-800/50 bg-gray-900/10 shadow-gray-900/10",
        accent: "text-gray-400"
    },
    {
        level: 3,
        title: "ARCHBISHOP MCCARRICK",
        subtitle: "NEWARK / REGIONAL",
        stats: [
            "Most powerful Catholic in NJ.",
            "\"Nephew culture\".",
            "Sea Girt beach house.",
            "1995 papal Mass."
        ],
        shieldStatus: "BREACHED",
        bgClass: "border-red-900/50 bg-red-950/10 shadow-red-900/10",
        accent: "text-red-500"
    },
    {
        level: 4,
        title: "CARDINAL MCCARRICK",
        subtitle: "NATIONAL / VATICAN",
        stats: [
            "Vatican diplomatic channel.",
            "Defrocked 2019.",
            "Seton Hall nexus: Latham Report.",
            "SCIF -> Tobin -> Ruemmler."
        ],
        shieldStatus: "BREACHED",
        bgClass: "border-red-900/50 bg-red-950/10 shadow-red-900/10",
        accent: "text-red-500"
    },
    {
        level: 5,
        title: "ELITE IMMUNITY",
        subtitle: "NETWORK CONVERGENCE",
        stats: [
            "Kathryn Ruemmler (WH Counsel).",
            "Epstein intimate contact.",
            "Presented sealed report 2019.",
            "Epstein/Seton Hall nexus."
        ],
        shieldStatus: "INTACT",
        bgClass: "border-red-500/30 bg-red-950/20 shadow-red-500/10",
        accent: "text-red-400",
        isTarget: true
    }
];

export default function PowerAxis() {
    return (
        <div className="relative w-full min-h-[700px] py-12 px-4 bg-[#0a0a0c] overflow-hidden rounded-2xl border border-white/5 shadow-3xl">
            {/* Background Texture/Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }} />

            {/* Header Overlay */}
            <div className="relative z-10 text-center mb-16 px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-white uppercase tracking-[0.3em] mb-4"
                >
                    The Power Axis
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-[#8b1a1a] font-serif italic text-lg md:text-xl"
                >
                    The shield scales vertically &mdash; from Martin to McCarrick to Ruemmler to Epstein
                </motion.p>
            </div>

            {/* The Power Beam SVG */}
            <div className="absolute top-[45%] left-0 w-full h-32 pointer-events-none z-0">
                <svg width="100%" height="100%" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <motion.path
                        d="M 0 50 Q 250 50 500 50 T 1000 50"
                        fill="none"
                        stroke="url(#beamGradient)"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <motion.path
                        d="M 0 50 Q 250 50 500 50 T 1000 50"
                        fill="none"
                        stroke="rgba(139, 26, 26, 0.4)"
                        strokeWidth="8"
                        className="blur-xl"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.6 }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                    />
                    <defs>
                        <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#8b1a1a" stopOpacity="0.2" />
                            <stop offset="50%" stopColor="#8b1a1a" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#ff0000" stopOpacity="1" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Cards Container */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-6 max-w-[1400px] mx-auto pb-20">
                {POWER_AXIS_DATA.map((item, idx) => (
                    <motion.div
                        key={item.level}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className={cn(
                            "relative p-6 rounded-xl border backdrop-blur-md transition-all duration-500 group",
                            item.bgClass,
                            item.isTarget ? "ring-1 ring-red-500/20" : ""
                        )}
                    >
                        {/* Level Indicator */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black border border-white/10 flex items-center justify-center text-[10px] font-bold text-gray-500 group-hover:text-white group-hover:border-[#8b1a1a] transition-colors">
                            {item.level}
                        </div>

                        {/* Content */}
                        <div className="mt-4">
                            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-0.5 line-clamp-1">
                                {item.title}
                            </h4>
                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-4">
                                {item.subtitle}
                            </p>

                            <ul className="space-y-2 mb-6">
                                {item.stats.map((stat, i) => (
                                    <li key={i} className="text-[11px] text-gray-400 leading-relaxed list-disc list-inside marker:text-[#8b1a1a]">
                                        {stat}
                                    </li>
                                ))}
                            </ul>

                            {item.callout && (
                                <div className="mt-6 pt-4 border-t border-red-900/30">
                                    <span className="text-[9px] font-black text-red-500 uppercase tracking-[0.2em] block mb-1">
                                        {item.callout.title}
                                    </li>
                                    <p className="text-xs font-bold text-white mb-1">{item.callout.name}</p>
                                    <p className="text-[10px] text-gray-400 mb-2 italic">"{item.callout.details}"</p>
                                    <div className="inline-flex items-center gap-2 px-2 py-1 bg-red-950/40 border border-red-500/30 rounded text-[9px] font-bold text-red-400">
                                        <span className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />
                                        {item.callout.status}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Bottom Status */}
                        <div className="absolute bottom-4 left-6 right-6">
                            <div className="border-t border-white/5 pt-3 flex items-center justify-between">
                                <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">Shield Status</span>
                                <span className={cn("text-[9px] font-bold uppercase tracking-wider", item.accent)}>
                                    {item.shieldStatus}
                                </span>
                            </div>
                        </div>

                        {/* Target Highlight for Level 5 */}
                        {item.isTarget && (
                            <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
                                <div className="relative">
                                    <Shield className="w-16 h-16 text-red-600/40 animate-pulse blur-sm" />
                                    <Shield className="absolute inset-0 w-16 h-16 text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <AlertCircle className="w-6 h-6 text-white/80" />
                                    </div>
                                </div>
                                <div className="text-[8px] font-mono text-red-500/60 uppercase whitespace-nowrap rotate-90 ml-20 mt-4">
                                    Elite Node Lock
                                </div>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Bottom Labeling */}
            <div className="absolute bottom-10 left-10 z-10">
                <div className="flex flex-col">
                    <span className="text-[#8b1a1a] font-bold text-[10px] uppercase tracking-[0.5em] mb-1">Exhibit 22.1</span>
                    <h3 className="text-3xl font-serif text-white italic">The Displacement Curve</h3>
                    <p className="text-[11px] text-gray-500 max-w-sm mt-2">
                        How 40 years of victims were systematically converted into 'administrative anomalies' through the axis of power.
                    </p>
                </div>
            </div>

            {/* Forensic Metadata Branding */}
            <div className="absolute bottom-10 right-10 z-10 text-right opacity-30 group-hover:opacity-100 transition-opacity">
                <span className="text-[9px] font-mono text-gray-600 uppercase tracking-[0.3em] block">
                    SODOM HALL &mdash; THE POWER AXIS v2.0
                </span>
                <span className="text-[8px] font-mono text-gray-700 uppercase block mt-1">
                    High-Fidelity Forensic Reconstruction // CID-8842-X
                </span>
            </div>
        </div>
    );
}
