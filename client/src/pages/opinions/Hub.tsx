import { Quote } from "lucide-react";
import { Link } from "wouter";

const columnists = [
    {
        name: "Maureen O'Shaughnessy",
        title: "The Catholic Loyalist",
        topic: "INSTITUTION",
        persona: "Former speechwriter; 68; Catholic; Traditionalist.",
        essayTitle: "The Cracked Cathedral",
        path: "/opinion/noonan",
        image: "/assets/images/op_ed_noonan.png",
        teaser: "We are at that stage of the scandal where the silence is no longer a strategic choice, but a spiritual condition."
    },
    {
        name: "Sterling 'Skip' Fairchild",
        title: "The Beltway Insider",
        topic: "POLITICS",
        persona: "Pulitzer-winning biographer; 65; Catholic; Political Historian.",
        essayTitle: "The Jersey Regency",
        path: "/opinion/cannon",
        image: "/assets/images/op_ed_cannon.png",
        teaser: "Power in the Newark See is not unlike power in the Governor's office: it is held by those who know which files to burn."
    },
    {
        name: "Aristhide 'Ari' Vance",
        title: "The Policy Intellectual",
        topic: "GOVERNANCE",
        persona: "Harvard-trained; 55; Catholic; Governance Expert.",
        essayTitle: "The Governance Gap",
        path: "/opinion/matthews",
        image: "/assets/images/op_ed_matthews.png",
        teaser: "Newark's tragedy isn't just a failure of morals; it's a catastrophic breakdown of institutional guardrails."
    },
    {
        name: "Ephraim 'Eph' Roth",
        title: "The Moral Contrarian",
        topic: "HISTORY",
        persona: "Essaysist and foreign correspondent; 45; Jewish.",
        essayTitle: "The Moral Hazard of Omertà",
        path: "/opinion/stephens",
        image: "/assets/images/op_ed_stephens.png",
        teaser: "The Jewish world knows something of historical silence. Watching the Newark hierarchy is like watching a familiar fire."
    }
];

export default function OpinionsHub() {
    return (
        <div className="page-enter max-w-6xl mx-auto px-6 py-20 bg-[#0a0a0c] min-h-screen text-[#F5EDD0] font-['Share_Tech_Mono'] relative">
            <img src="/assets/cathedral/cathedral_interior_wide.jpg" alt="" className="fixed inset-0 w-full h-full object-cover opacity-[0.03] select-none pointer-events-none" />
            <div className="fixed inset-0 bg-gradient-to-b from-[#0a0a0c] via-transparent to-[#0a0a0c] pointer-events-none" />
            <div className="fixed inset-0 bg-[url('/assets/noise.svg')] opacity-[0.015] mix-blend-overlay pointer-events-none" />

            {/* Newspaper Masthead Style */}
            <header className="border-b-2 border-[#cc0000] pb-12 mb-20 text-center">
                <div className="font-mono text-xs uppercase tracking-[0.5em] mb-4 text-[#D4A017]">[ Perspectives & Commentary ]</div>
                <h1 className="text-5xl md:text-8xl font-black tracking-widest uppercase mb-2 text-white font-sans">
                    The <span className="italic text-[#cc0000]">Voices</span>
                </h1>
                <p className="text-sm font-sans italic text-zinc-500 uppercase tracking-widest">
                    Audit · Analysis · Conscience · Newark, New Jersey
                </p>
            </header>

            {/* Main Op-Ed Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                {columnists.map((col, idx) => (
                    <Link key={idx} href={col.path}>
                        <div className="group cursor-pointer space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${idx * 150}ms` }}>
                            <div className="relative aspect-square overflow-hidden bg-black border border-[#D4A017]/30 grayscale group-hover:grayscale-0 transition-all duration-700 shadow-xl group-hover:shadow-[0_0_30px_rgba(204,0,0,0.15)]">
                                <img
                                    src={col.image}
                                    alt={col.name}
                                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 border-[20px] border-[#0a0a0c] pointer-events-none" />
                            </div>

                            <div className="space-y-4 pt-4">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-px bg-[#cc0000]" />
                                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">{col.title}</span>
                                </div>
                                <h2 className="text-4xl font-bold tracking-widest leading-none group-hover:text-[#cc0000] text-white transition-colors font-sans uppercase">
                                    {col.essayTitle}
                                </h2>
                                <div className="font-sans text-lg italic leading-relaxed text-[#F5EDD0]/70">
                                    "{col.teaser}"
                                </div>
                                <div className="pt-4 flex flex-col gap-1 border-t border-[#F5EDD0]/10 mt-4">
                                    <div className="flex items-center gap-2 mt-4">
                                        <div className="font-sans text-sm font-bold uppercase text-[#D4A017]">{col.name}</div>
                                        <span className="text-zinc-600 font-sans text-xs">· {col.persona}</span>
                                    </div>
                                    <div className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#cc0000]/70">{col.topic}</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Footer Quote */}
            <footer className="mt-32 pt-20 border-t border-[#F5EDD0]/10 flex flex-col items-center">
                <Quote className="w-12 h-12 text-[#cc0000]/40 mb-8" />
                <p className="text-xl font-sans italic text-center max-w-3xl leading-snug text-zinc-400">
                    "The truth is not a list of facts; it is the shared experience of a people who refuse to look away."
                </p>
                <div className="mt-12 font-mono text-xs uppercase tracking-widest text-zinc-600">
                    End of Commentary · Cathedral Megasite
                </div>
            </footer>
        </div>
    );
}
