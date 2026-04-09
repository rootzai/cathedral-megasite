import { ArrowLeft, PenTool } from "lucide-react";
import { Link } from "wouter";

export default function MatthewsEssay() {
    return (
        <div className="page-enter max-w-4xl mx-auto px-6 py-20 bg-[#fdfcf8] min-h-screen text-[#1a1a1a]">

            {/* Header */}
            <nav className="mb-12">
                <Link href="/opinion">
                    <a className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest hover:text-red-700 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Commentary
                    </a>
                </Link>
            </nav>

            <header className="mb-20 space-y-8">
                <div className="flex justify-center mb-8">
                    <div className="w-32 h-32 rounded-full overflow-hidden border border-black grayscale">
                        <img src="/assets/images/op_ed_matthews.png" alt="Aristhide 'Ari' Vance" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="text-center space-y-4">
                    <h1 className="text-6xl font-black tracking-tighter uppercase leading-[0.9]" style={{ fontFamily: "'Playfair Display', serif" }}>
                        The Governance <br /><span className="italic">Gap</span>
                    </h1>
                    <div className="pt-4 flex flex-col items-center">
                        <span className="font-heading text-xl font-bold uppercase">Aristhide "Ari" Vance</span>
                        <span className="text-muted-foreground font-serif italic text-lg">Special to the Cathedral Megasite · April 2026</span>
                    </div>
                </div>
            </header>

            {/* Essay Content */}
            <article className="prose-investigative max-w-2xl mx-auto text-xl leading-relaxed text-[#2a2a2a] font-serif space-y-8">
                <p className="first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
                    W
                    hen we talk about the Newark See, we are often tempted to settle for
                    narratives of "Sin" or "Betrayal." These are convenient terms because
                    they suggest that the problem is individual and theological. But from
                    a governance perspective—the kind we teach at Harvard or practice in
                    the complex regulatory environments of the West—the problem in Newark
                    is much simpler, and much more systemic. It is a "Governance Gap."
                </p>

                <p>
                    In California, we have seen the brutal, necessary results of "Open
                    Source" transparency. Following the scandals of 2002, our Archdioceses
                    were forced into a model of radical disclosure. It wasn't because
                    the bishops became more holy; it was because the institutional guardrails
                    were rebuilt.
                </p>

                <p>
                    New Jersey, however, remains the "Closed Loop" capital of the Episcopal
                    world. The "Board of Regents" at Seton Hall—the body that oversaw the
                    suppression of the Latham Report—is the textbook example of a "Captured
                    Institution."
                </p>

                <blockquote className="border-l-2 border-black pl-8 py-2 my-12 not-italic text-3xl font-bold leading-tight tracking-tight">
                    "The Board didn't just fail to act on the evidence; they functioned as the strategic buffer between the Truth and the Public."
                </blockquote>

                <p>
                    The 24,000 pages of suppressed evidence represent a catastrophic
                    breakdown of oversight. In any other billion-dollar entity, a board
                    that received formal reports of systemic misconduct and chose to seal
                    the data would face immediate derivative suits and federal
                    investigations. But in the Newark See, this behavior is framed as
                    "Ecclesiastical Prudence."
                </p>

                <p>
                    The use of Chapter 11 bankruptcy as a tactical shield is the final
                    governance failure. Instead of a path to equity and disclosure,
                    bankruptcy in the Newark context has become a way to "Freeze the
                    Narrative." It allows the institution to manage the payout without ever
                    releasing the "Dossier."
                </p>

                <p>
                    What happens next in Newark is the real test for American
                    institutionalism. If the strategic relocation of key Regents and the
                    promotion of men who managed the silence are allowed to stand, then the
                    "Governance Gap" will have become a permanent feature of the landscape.
                    The only solution is not "New Faces"—it is the complete "Force-Unsealing"
                    of the archives. Governance requires light. Newark, for too long, has
                    operated in the dark.
                </p>

                <div className="pt-20 text-center">
                    <PenTool className="w-12 h-12 text-black/20 mx-auto mb-4" />
                    <div className="font-mono text-xs uppercase tracking-widest opacity-50">Aristhide "Ari" Vance is a Professor of Institutional Ethics and a frequent consultant on governance reform.</div>
                </div>
            </article>

            <div className="h-40" />
        </div>
    );
}
