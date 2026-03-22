import { useState, useRef } from "react";
import InvestigativeModal from "./InvestigativeModal";
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
    const [selectedLevel, setSelectedLevel] = useState<typeof POWER_AXIS_DATA[0] | null>(null);

    return (
        <div className="relative w-full py-16 px-4 bg-[#0a0a0c] overflow-hidden rounded-2xl border border-white/5 shadow-3xl">
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
                <div className="flex flex-col gap-4">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-[#8b1a1a] font-serif italic text-lg md:text-xl"
                    >
                        The shield scales vertically &mdash; from Martin to McCarrick to Ruemmler to Epstein
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-[#666] italic leading-relaxed max-w-3xl mx-auto"
                    >
                        "We were told the shield was for our protection. In reality, it was a distribution manifest for institutional inertia."
                    </motion.p>
                </div>
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
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center text-xs font-bold text-gray-400 group-hover:text-white group-hover:border-[#8b1a1a] transition-colors">
                            {item.level}
                        </div>

                        {/* Content */}
                        <div className="mt-6">
                            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-1 line-clamp-1">
                                {item.title}
                            </h4>
                            <p className="text-xs text-[#8b1a1a] font-bold uppercase tracking-widest mb-6">
                                {item.subtitle}
                            </p>

                            <ul className="space-y-3 mb-8">
                                {item.stats.slice(0, 3).map((stat, i) => (
                                    <li key={i} className="text-sm text-gray-400 leading-relaxed list-disc list-inside marker:text-[#8b1a1a]">
                                        {stat}
                                    </li>
                                ))}
                                {item.stats.length > 3 && (
                                    <li className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold mt-2">
                                        + {item.stats.length - 3} More Data Points
                                    </li>
                                )}
                            </ul>

                            {item.callout && (
                                <div className="mt-8 pt-6 border-t border-red-900/30">
                                    <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em] block mb-2">
                                        {item.callout.title}
                                    </span>
                                    <p className="text-sm font-bold text-white mb-2">{item.callout.name}</p>
                                    <p className="text-xs text-gray-500 mb-4 italic leading-relaxed">"{item.callout.details}"</p>
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-950/40 border border-red-500/30 rounded text-[10px] font-bold text-red-400">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                        {item.callout.status}
                                    </div>
                                </div>
                            )}

                            <button
                                onClick={() => setSelectedLevel(item)}
                                className="mt-8 w-full py-3 border border-[#1a1a22] text-[10px] font-bold uppercase tracking-[0.2em] text-[#555] hover:border-[#8b1a1a] hover:text-[#8b1a1a] transition-all"
                            >
                                Deep Dive Investigation
                            </button>
                        </div>

                        {/* Bottom Status */}
                        <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Shield Status</span>
                            <span className={cn("text-[10px] font-bold uppercase tracking-wider", item.accent)}>
                                {item.shieldStatus}
                            </span>
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

            {/* Modal Detail View */}
            <InvestigativeModal
                isOpen={!!selectedLevel}
                onClose={() => setSelectedLevel(null)}
                title={selectedLevel?.title || ""}
                subtitle={`${selectedLevel?.subtitle} // Structural Role Analysis`}
            >
                {selectedLevel && (
                    <div className="space-y-12 pb-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h4 className="text-[#8b1a1a] font-bold text-xs uppercase tracking-[0.3em] mb-6 font-mono">Forensic Audit Log</h4>
                                <ul className="space-y-4">
                                    {selectedLevel.stats.map((stat, i) => (
                                        <li key={i} className="text-lg text-[#ccc] leading-relaxed border-l-2 border-[#8b1a1a]/30 pl-6">
                                            {stat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-[#0a0a0c] border border-[#1a1a22] p-8">
                                <h4 className="text-[#8b1a1a] font-bold text-xs uppercase tracking-[0.3em] mb-6 font-mono">Structural Integrity</h4>
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center py-4 border-b border-[#1a1a22]">
                                        <span className="text-zinc-500 uppercase text-xs font-bold tracking-widest">Shield Status</span>
                                        <span className={cn("text-sm font-black uppercase tracking-widest", selectedLevel.accent)}>{selectedLevel.shieldStatus}</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4 border-b border-[#1a1a22]">
                                        <span className="text-zinc-500 uppercase text-xs font-bold tracking-widest">Axis Level</span>
                                        <span className="text-white font-mono text-sm">{selectedLevel.level} / 5</span>
                                    </div>
                                    {selectedLevel.callout && (
                                        <div className="pt-6">
                                            <span className="text-red-500 uppercase text-[10px] font-black tracking-[0.4em] block mb-4">Active Breach Investigation</span>
                                            <div className="p-6 bg-red-950/20 border border-red-900/40 rounded">
                                                <p className="text-white font-bold text-lg mb-2">{selectedLevel.callout.name}</p>
                                                <p className="text-zinc-400 italic text-sm leading-relaxed mb-4">"{selectedLevel.callout.details}"</p>
                                                <div className="inline-flex items-center gap-3 text-red-400 text-xs font-bold">
                                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                                    {selectedLevel.callout.status}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </InvestigativeModal>

            {/* Bottom Labeling */}
            <div className="relative mt-20 px-8">
                <div className="flex flex-col">
                    <span className="text-[#8b1a1a] font-bold text-xs uppercase tracking-[0.5em] mb-2">Exhibit 22.1</span>
                    <h3 className="text-4xl font-serif text-white italic">The Displacement Curve</h3>
                    <p className="text-sm text-gray-500 max-w-xl mt-4 leading-relaxed">
                        How 40 years of victims were systematically converted into 'administrative anomalies' through the axis of power. The scale ascends from local parish failures to international diplomatic immunity.
                    </p>
                </div>
            </div>

            {/* Forensic Metadata Branding */}
            <div className="mt-12 px-8 flex justify-end opacity-40 group-hover:opacity-100 transition-opacity">
                <div className="text-right">
                    <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em] block">
                        SODOM HALL &mdash; THE POWER AXIS
                    </span>
                    <span className="text-[9px] font-mono text-gray-700 uppercase block mt-1">
                        High-Fidelity Forensic Reconstruction // CID-8842-X
                    </span>
                </div>
            </div>
        </div>
    );
}
