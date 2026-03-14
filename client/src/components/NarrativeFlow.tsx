import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowRight,
    FileSearch,
    Gavel,
    Info,
    Scale,
    ShieldAlert
} from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

interface Milestone {
    id: string;
    year: string;
    title: string;
    subtitle: string;
    desc: string;
    icon: React.ReactNode;
    route: string;
    color: string;
    impact: string;
}

const milestones: Milestone[] = [
    {
        id: "latham",
        year: "2019",
        title: "The Latham Suppression",
        subtitle: "The Vault Door Closes",
        desc: "Kathryn Ruemmler (Latham) presents findings to the Board. 12 clergymen identified. The decision is made: suppress the report, bury the names, and hire 'outsider' Joe Nyre to bear the institutional burden.",
        icon: <FileSearch className="w-5 h-5" />,
        route: "/ruling/evidence",
        color: "#b45309", // Gold
        impact: "Phase 1: Concealment"
    },
    {
        id: "whistleblower",
        year: "2023",
        title: "The Rebellion",
        subtitle: "Nyre v. Seton Hall",
        desc: "President Nyre refuses to participate in the continued suppression. He reports Board Chair Kevin Marino for sexual misconduct. The university retaliates by unmasking him and suing for 'leaking' the vault's contents.",
        icon: <ShieldAlert className="w-5 h-5" />,
        route: "/expose/nyre-dismissal",
        color: "#7c2d12", // Blood
        impact: "Phase 2: Retaliation"
    },
    {
        id: "benjamin",
        year: "2025",
        title: "The Breach",
        subtitle: "The Benjamin Order",
        desc: "November 12, 2025. Judge Avion Benjamin orders the release of 20,500 pages. She rules that pre-existing documents are NOT privileged. The vault door is pried open.",
        icon: <Gavel className="w-5 h-5" />,
        route: "/ruling/analysis",
        color: "#1e3a8a", // Blue (Ruling theme)
        impact: "Phase 3: Revelation"
    },
    {
        id: "rabner",
        year: "2026",
        title: "The Architecture",
        subtitle: "Special Prosecutor Demand",
        desc: "February 13, 2026. A formal dossier (Exhibit 00) is sent to Chief Justice Rabner exposing the 'Closed Loop' of Christie-era legal and judicial corruption. The scale of the cover-up reaches the state's highest office.",
        icon: <Scale className="w-5 h-5" />,
        route: "/expose/rabner-exhibits",
        color: "#991b1b", // Red (Cathedral theme)
        impact: "Phase 4: Escalation"
    },
    {
        id: "reckoning",
        year: "May 2026",
        title: "The Reckoning",
        subtitle: "Final Discovery Deadline",
        desc: "May 18, 2026. The court-ordered deadline for full production. The final 3,500 withheld documents are exposed. Criminal referrals and federal investigations begin as the architecture of silence collapses.",
        icon: <ArrowRight className="w-5 h-5" />,
        route: "/cathedral",
        color: "#059669", // Emerald
        impact: "Phase 5: Accountability"
    }
];

export default function NarrativeFlow() {
    const [activeId, setActiveId] = useState<string>(milestones[milestones.length - 1].id);

    const activeMilestone = milestones.find(m => m.id === activeId) || milestones[0];

    return (
        <div className="w-full py-12 px-4 bg-muted/5 border border-border/50 rounded-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <div className="font-mono text-[8rem] font-black leading-none uppercase tracking-tighter">
                    Archive
                </div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="font-heading text-4xl text-foreground mb-2">Narrative Architecture</h2>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">Forensic Timeline 2018 — 2026</p>
                </div>

                {/* The Flow Line (The "Banana" Curve Concept) */}
                <div className="relative flex flex-col md:flex-row justify-between items-center mb-16 gap-4 md:gap-0">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 hidden md:block" />

                    {milestones.map((m, idx) => (
                        <div key={m.id} className="relative z-20">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveId(m.id)}
                                className={`relative flex flex-col items-center group`}
                            >
                                <div
                                    className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-500 shadow-lg ${activeId === m.id
                                        ? "bg-background border-primary scale-110"
                                        : "bg-muted border-transparent opacity-60 grayscale hover:grayscale-0"
                                        }`}
                                    style={{ borderColor: activeId === m.id ? m.color : 'transparent' }}
                                >
                                    <div
                                        className="p-2 rounded-full text-foreground transition-colors group-hover:text-primary"
                                        style={{ color: activeId === m.id ? m.color : 'inherit' }}
                                    >
                                        {m.icon}
                                    </div>
                                </div>

                                <div className="mt-4 text-center">
                                    <span className={`block font-mono text-xs font-bold transition-all duration-300 ${activeId === m.id ? 'text-primary' : 'text-muted-foreground'}`}>
                                        {m.year}
                                    </span>
                                    <span className={`block text-xs font-heading font-black truncate max-w-[100px] md:max-w-[120px] transition-all duration-300 ${activeId === m.id ? 'text-foreground' : 'text-muted-foreground opacity-0 group-hover:opacity-100'}`}>
                                        {m.title}
                                    </span>
                                </div>

                                {activeId === m.id && (
                                    <motion.div
                                        layoutId="active-nav-indicator"
                                        className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-primary"
                                    />
                                )}
                            </motion.button>
                        </div>
                    ))}
                </div>

                {/* Display Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-card/30 rounded-lg border border-border/50 p-8 shadow-2xl backdrop-blur-sm min-h-[300px]">
                    <div className="lg:col-span-7 space-y-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeId}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.4 }}
                                className="space-y-4"
                            >
                                <div className="flex items-center gap-3">
                                    <span
                                        className="px-3 py-1 rounded-sm text-[10px] font-mono text-white uppercase tracking-widest"
                                        style={{ backgroundColor: activeMilestone.color }}
                                    >
                                        {activeMilestone.impact}
                                    </span>
                                </div>

                                <div>
                                    <h3 className="font-heading text-4xl text-foreground leading-tight">
                                        {activeMilestone.title}
                                    </h3>
                                    <p className="font-heading text-xl text-muted-foreground italic">
                                        {activeMilestone.subtitle}
                                    </p>
                                </div>

                                <p className="font-body text-lg text-foreground/80 leading-relaxed max-w-2xl">
                                    {activeMilestone.desc}
                                </p>

                                <div className="pt-4 flex items-center gap-6">
                                    <Link href={activeMilestone.route}>
                                        <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-widest hover:bg-primary/90 transition-all rounded-sm group">
                                            Explore Record <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </Link>
                                    <div className="hidden sm:flex items-center gap-2 text-muted-foreground">
                                        <Info size={14} />
                                        <span className="text-[10px] font-mono uppercase tracking-widest leading-none">Verified Forensic Evidence</span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="lg:col-span-5 relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeId}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                                className="aspect-square w-full max-w-[340px] mx-auto relative rounded-full p-8 flex items-center justify-center border-2 border-dashed border-border/40 group overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-muted/20 rotate-45 group-hover:rotate-90 transition-transform duration-1000" />
                                <div
                                    className="w-full h-full rounded-full flex items-center justify-center shadow-inner relative z-10 transition-colors duration-500"
                                    style={{ backgroundColor: `${activeMilestone.color}10` }}
                                >
                                    <div style={{ color: activeMilestone.color }} className="transition-transform duration-500 hover:rotate-12">
                                        {activeMilestone.icon === <FileSearch className="w-5 h-5" /> && <FileSearch className="w-24 h-24 stroke-[1px]" />}
                                        {activeMilestone.id === 'latham' && <FileSearch className="w-24 h-24 stroke-[1px]" />}
                                        {activeMilestone.id === 'whistleblower' && <ShieldAlert className="w-24 h-24 stroke-[1px]" />}
                                        {activeMilestone.id === 'benjamin' && <Gavel className="w-24 h-24 stroke-[1px]" />}
                                        {activeMilestone.id === 'rabner' && <Scale className="w-24 h-24 stroke-[1px]" />}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                <div className="mt-8 flex justify-center gap-8 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                    <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full" style={{ backgroundColor: milestones[0].color }} /> Concealment</span>
                    <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full" style={{ backgroundColor: milestones[1].color }} /> Retaliation</span>
                    <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full" style={{ backgroundColor: milestones[2].color }} /> Revelation</span>
                    <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full" style={{ backgroundColor: milestones[3].color }} /> Accountability</span>
                </div>
            </div>
        </div>
    );
}
