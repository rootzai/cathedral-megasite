import { Quote } from "lucide-react";
import { Link } from "wouter";

const columnists = [
    {
        name: "Maureen O'Shaughnessy",
        title: "The Catholic Loyalist",
        persona: "Former speechwriter; 68; Catholic; Traditionalist.",
        essayTitle: "The Cracked Cathedral",
        path: "/opinion/noonan",
        image: "/assets/images/op_ed_noonan.png",
        teaser: "We are at that stage of the scandal where the silence is no longer a strategic choice, but a spiritual condition."
    },
    {
        name: "Sterling 'Skip' Fairchild",
        title: "The Beltway Insider",
        persona: "Pulitzer-winning biographer; 65; Catholic; Political Historian.",
        essayTitle: "The Jersey Regency",
        path: "/opinion/cannon",
        image: "/assets/images/op_ed_cannon.png",
        teaser: "Power in the Newark See is not unlike power in the Governor's office: it is held by those who know which files to burn."
    },
    {
        name: "Aristhide 'Ari' Vance",
        title: "The Policy Intellectual",
        persona: "Harvard-trained; 55; Catholic; Governance Expert.",
        essayTitle: "The Governance Gap",
        path: "/opinion/matthews",
        image: "/assets/images/op_ed_matthews.png",
        teaser: "Newark's tragedy isn't just a failure of morals; it's a catastrophic breakdown of institutional guardrails."
    },
    {
        name: "Ephraim 'Eph' Roth",
        title: "The Moral Contrarian",
        persona: "Essaysist and foreign correspondent; 45; Jewish.",
        essayTitle: "The Moral Hazard of Omertà",
        path: "/opinion/stephens",
        image: "/assets/images/op_ed_stephens.png",
        teaser: "The Jewish world knows something of historical silence. Watching the Newark hierarchy is like watching a familiar fire."
    }
];

export default function OpinionsHub() {
    return (
        <div className="page-enter max-w-6xl mx-auto px-6 py-20 bg-[#fdfcf8] min-h-screen text-[#1a1a1a]">

            {/* Newspaper Masthead Style */}
            <header className="border-b-4 border-black pb-12 mb-20 text-center">
                <div className="font-mono text-xs uppercase tracking-[0.5em] mb-4">Perspectives & Commentary</div>
                <h1 className="text-8xl font-black tracking-tighter uppercase mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    The <span className="italic">Voices</span>
                </h1>
                <p className="text-sm font-serif italic text-muted-foreground uppercase tracking-widest">
                    Audit · Analysis · Conscience · Newark, New Jersey
                </p>
            </header>

            {/* Main Op-Ed Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                {columnists.map((col, idx) => (
                    <Link key={idx} href={col.path}>
                        <div className="group cursor-pointer space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${idx * 150}ms` }}>
                            <div className="relative aspect-square overflow-hidden bg-white border border-black/10 grayscale group-hover:grayscale-0 transition-all duration-700 shadow-xl group-hover:shadow-2xl">
                                <img
                                    src={col.image}
                                    alt={col.name}
                                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 border-[20px] border-[#fdfcf8] pointer-events-none" />
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-px bg-black" />
                                    <span className="font-mono text-[10px] uppercase tracking-widest">{col.title}</span>
                                </div>
                                <h2 className="text-4xl font-bold tracking-tight leading-none group-hover:text-red-700 transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    {col.essayTitle}
                                </h2>
                                <div className="font-serif text-2xl italic leading-relaxed text-muted-foreground/80">
                                    "{col.teaser}"
                                </div>
                                <div className="pt-4 flex items-center gap-2">
                                    <div className="font-heading text-lg font-bold uppercase">{col.name}</div>
                                    <span className="text-muted-foreground font-serif">· {col.persona}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Footer Quote */}
            <footer className="mt-32 pt-20 border-t border-black/10 flex flex-col items-center">
                <Quote className="w-12 h-12 text-black/20 mb-8" />
                <p className="text-3xl font-serif italic text-center max-w-3xl leading-snug">
                    "The truth is not a list of facts; it is the shared experience of a people who refuse to look away."
                </p>
                <div className="mt-8 font-mono text-[10px] uppercase tracking-widest opacity-50">
                    End of Commentary · Cathedral Megasite
                </div>
            </footer>
        </div>
    );
}
