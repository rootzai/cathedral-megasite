import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
    FileText, 
    Shield, 
    Search, 
    Lock, 
    Unlock, 
    AlertCircle, 
    ChevronRight,
    Scale,
    Gavel,
    History,
    Users,
    Activity,
    Database
} from "lucide-react";

interface RouteItem {
    title: string;
    path: string;
    description: string;
    tag?: string;
    type?: 'dossier' | 'evidence' | 'analysis' | 'legal';
}

interface ActSection {
    act: string;
    title: string;
    icon: React.ReactNode;
    routes: RouteItem[];
}

const ACTS: ActSection[] = [
    {
        act: "ACT I",
        title: "The Origin",
        icon: <History className="w-5 h-5 text-red-600" />,
        routes: [
            { title: "Origin Portal", path: "/origin", description: "The definitive entry point into the McCarrick investigation.", type: 'dossier' },
            { title: "Kenneth Martin: The Enabler", path: "/origin/martin", description: "Forensic profile of the primary enabler in the early network.", type: 'dossier' },
            { title: "The Beach House Dossier", path: "/origin/beach-house", description: "Unmasking the oceanfront retreat used for spiritual grooming.", tag: "CRITICAL", type: 'evidence' },
            { title: "The McCarrick Network", path: "/origin/network", description: "Visual map of the early clerical and financial connections.", type: 'analysis' },
            { title: "The 2018 Explosion", path: "/origin/explosion", description: "Cronology of the first credible allegation and initial downfall.", type: 'dossier' },
            { title: "The Rise of McCarrick", path: "/ledger/mccarrick/the-rise", description: "Tracing the ascent from Newark to the Cardinalate.", type: 'dossier' },
        ]
    },
    {
        act: "ACT II",
        title: "The Cover-up",
        icon: <Lock className="w-5 h-5 text-red-600" />,
        routes: [
            { title: "The Big Lie Narrative", path: "/coverup/big-lie", description: "Analysis of the institutional disinformation campaign.", tag: "FORENSIC", type: 'analysis' },
            { title: "Legal Triumvirate", path: "/coverup/legal", description: "The three-firm wall: Marino, Scrivo, and the protection of RCAN.", type: 'legal' },
            { title: "The Epstein Nexus", path: "/coverup/epstein", description: "Detailed record of transitions and financial overlaps with elite networks.", type: 'evidence' },
            { title: "The Ruemmler Pivot", path: "/expose/epstein-pivot", description: "Kathryn Ruemmler's role in managing the Epstein-Vatican optics.", type: 'legal' },
            { title: "Reilly's Protection", path: "/expose/reilly-protection", description: "The 2019 Board of Trustees intervention and the 'Neutral' audit.", type: 'analysis' },
            { title: "Financial Moats", path: "/coverup/financial", description: "Internal financial mechanisms used to shield assets from liability.", type: 'evidence' },
            { title: "Board Complicity", path: "/coverup/complicity", description: "Full audit of the SHU Board of Trustees since 2017.", type: 'analysis' },
        ]
    },
    {
        act: "ACT III",
        title: "The Breach",
        icon: <Unlock className="w-5 h-5 text-red-600" />,
        routes: [
            { title: "Breach Portal", path: "/breach", description: "The unmasking of the institutional barrier.", type: 'dossier' },
            { title: "Whistleblower Unmasking", path: "/breach/whistleblowers", description: "The internal attempt to silence the 2019 report authors.", tag: "BREACH", type: 'dossier' },
            { title: "The Rabner Exhibits", path: "/breach/rabner", description: "Selected documents from the Rabner-Latham forensic audit.", type: 'evidence' },
            { title: "The Reckoning", path: "/ledger/mccarrick/the-reckoning", description: "Final accountability markers and laicization records.", type: 'dossier' },
            { title: "Sanction Plea", path: "/breach/sanction-plea", description: "Legal analysis of the sanctions filed against the Archdiocese.", type: 'legal' },
            { title: "The Dirty Dozen", path: "/breach/dirty-dozen", description: "Unmasking the inner circle of the McCarrick network.", tag: "CRITICAL", type: 'dossier' },
            { title: "Tobin Hypocrisy", path: "/breach/tobin-hypocrisy", description: "Fact-checking the public statements vs. internal actions.", type: 'analysis' },
            { title: "Sheeran-McCarrick", path: "/breach/sheeran-mccarrick", description: "The financial relationship between the President and the Cardinal.", type: 'evidence' },
        ]
    },
    {
        act: "ACT IV",
        title: "The Succession",
        icon: <Users className="w-5 h-5 text-red-600" />,
        routes: [
            { title: "The Regime Entrance", path: "/succession", description: "The installation of the current leadership structure.", type: 'dossier' },
            { title: "Lorenzo's Elevation", path: "/ledger/lorenzo/elevation", description: "The elevation of Joseph Lorenzo within the Chancery.", type: 'dossier' },
            { title: "Checchio's Ascent", path: "/ledger/checchio/ascent", description: "From the NAC to the Diocese of Metuchen.", type: 'dossier' },
            { title: "The Purge", path: "/ledger/checchio/purge", description: "Analysis of personnel changes following the 2019 breach.", type: 'analysis' },
            { title: "Governance Status", path: "/ledger/checchio/status", description: "The current state of the Newark and Metuchen governance.", type: 'analysis' },
            { title: "Succession Epilogue", path: "/succession/epilogue", description: "Final assessment of the 2024-2025 transition.", type: 'dossier' },
        ]
    }
];

export default function ForensicSiteMap() {
    return (
        <div className="bg-[#050505] min-h-screen p-8 lg:p-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-20 border-b border-white/10 pb-12">
                    <div className="flex items-center gap-4 mb-4">
                        <Database className="w-6 h-6 text-red-600" />
                        <span className="font-mono text-xs text-red-600 uppercase tracking-[0.5em]">Forensic Registry // Site Map</span>
                    </div>
                    <h1 className="text-6xl md:text-7xl font-serif text-white uppercase tracking-wider mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                        The Dossier Network
                    </h1>
                    <p className="text-zinc-400 font-serif text-xl italic max-w-2xl leading-relaxed">
                        A comprehensive directory of the 95 investigative dossiers, legal findings, and forensic data points cataloging institutional betrayal.
                    </p>
                </div>

                {/* Act Sections Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {ACTS.map((act, idx) => (
                        <motion.div 
                            key={act.act}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="space-y-8"
                        >
                            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                                <div className="flex items-center gap-3">
                                    {act.icon}
                                    <h2 className="font-mono text-xs text-zinc-400 uppercase tracking-[0.3em] font-bold">{act.act} // {act.title}</h2>
                                </div>
                                <span className="text-xs font-mono text-red-900 uppercase font-bold">{act.routes.length} Entries</span>
                            </div>

                            <div className="space-y-6">
                                {act.routes.map((route) => (
                                    <Link key={route.path} href={route.path}>
                                        <div className="group cursor-pointer block">
                                            <div className="flex items-start justify-between mb-2">
                                                <h3 className="text-zinc-200 group-hover:text-white transition-colors font-serif text-lg tracking-wide border-b border-transparent group-hover:border-[#d4af37]/40">
                                                    {route.title}
                                                </h3>
                                                {route.tag && (
                                                    <span className="text-xs font-mono bg-red-900/20 text-red-500 px-2 py-0.5 border border-red-900/30 uppercase font-bold tracking-widest">
                                                        {route.tag}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-zinc-500 text-xs leading-relaxed group-hover:text-zinc-400 transition-colors">
                                                {route.description}
                                            </p>
                                            <div className="mt-3 overflow-hidden h-px bg-zinc-900 w-0 group-hover:w-full transition-all duration-500" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Disclaimer */}
                <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="max-w-md">
                        <h4 className="font-serif italic text-2xl text-zinc-300 mb-2">Architectural Notice</h4>
                        <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest leading-loose">
                            All dossiers referenced herein are derived from authenticated legal discovery, Vatican findings, and sworn testimonies. Unauthorized access to unsealed records is strictly monitored.
                        </p>
                    </div>
                    <div className="text-right">
                        <div className="text-white font-serif italic text-4xl mb-1">Sodom Hall</div>
                        <div className="font-mono text-xs text-zinc-500 uppercase tracking-[0.6em]">Ecclesiastical Noir // v4.1</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
