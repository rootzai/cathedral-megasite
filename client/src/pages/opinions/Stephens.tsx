import { ArrowLeft, PenTool } from "lucide-react";
import { Link } from "wouter";

export default function StephensEssay() {
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
                        <img src="/assets/images/op_ed_stephens.png" alt="Ephraim 'Eph' Roth" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="text-center space-y-4">
                    <h1 className="text-6xl font-black tracking-tighter uppercase leading-[0.9]" style={{ fontFamily: "'Playfair Display', serif" }}>
                        The Moral Hazard <br /><span className="italic">of Omertà</span>
                    </h1>
                    <div className="pt-4 flex flex-col items-center">
                        <span className="font-heading text-xl font-bold uppercase">Ephraim "Eph" Roth</span>
                        <span className="text-muted-foreground font-serif italic text-lg">Special to the Cathedral Megasite · April 2026</span>
                    </div>
                </div>
            </header>

            {/* Essay Content */}
            <article className="prose-investigative max-w-2xl mx-auto text-xl leading-relaxed text-[#2a2a2a] font-serif space-y-8">
                <p className="first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
                    It is sometimes asked why an outsider—a man of a different tradition and
                    different history—should concern himself with the internal rot of the
                    Newark See. The answer is simple: because institutional silence is a
                    universal fire, and once it starts, it doesn't respect the property
                    lines of faith.
                </p>

                <p>
                    I am Jewish, and the Jewish world knows something of "Historical
                    Silence." We know what it looks like when an institution—a state, a
                    party, or a church—decides that the preservation of its "Image" is more
                    important than the lives of those it was built to serve. What we are
                    witnessing in Newark is not a theological crisis; it is a "Moral
                    Hazard."
                </p>

                <p>
                    When the Board of Regents at Seton Hall voted to seal the Latham Report
                    in August 2019, they weren't just practicing "discretion." They were
                    internalizing the hazard of the predator. By protecting the names of
                    the twelve priests and the billionaire pipelines that sustained them,
                    the Regents became part of the mechanism.
                </p>

                <blockquote className="border-l-2 border-black pl-8 py-2 my-12 not-italic text-3xl font-bold leading-tight tracking-tight">
                    "The greatest danger to any institution is not the presence of a few bad actors; it is the presence of many 'Good Men' who believe that silence is a form of loyalty."
                </blockquote>

                <p>
                    The "Architecture of Silence" documented in these pages is a study in
                    institutional rot. It is recursive. It is Omertà—not the crude,
                    violent silence of a mob, but the clinical, legalistic silence of a
                    Board. It was the same silence that allowed Theodore McCarrick to
                    operate for thirty years as a prince of the Church while the rumors of
                    his victims were treated as "annoyances" in the bookkeeping of the See.
                </p>

                <p>
                    The strategic relocation of bishops, the bankruptcy filings intended to
                    block discovery, the promotion of those who managed the "Vault"—these
                    are the final moves in a game of institutional self-protection. But it
                    is a game that eventually kills the player. Institutional survival at
                    the cost of the Truth is not survival; it is suicide.
                </p>

                <p>
                    The Newark hierarchy believes it can weather the "Breach." They think
                    that if they wait long enough and pay out enough in settlements, the
                    "Great Forgetting" will take over. But they are missing the point: the
                    light is already in. The Dossier is unsealed. And in the final
                    reckoning, it is better to be a victim of the truth than a beneficiary
                    of the lie.
                </p>

                <div className="pt-20 text-center">
                    <PenTool className="w-12 h-12 text-black/20 mx-auto mb-4" />
                    <div className="font-mono text-xs uppercase tracking-widest opacity-50">Ephraim "Eph" Roth is a contributing editor and foreign correspondent who has covered institutional crises on three continents.</div>
                </div>
            </article>

            <div className="h-40" />
        </div>
    );
}
