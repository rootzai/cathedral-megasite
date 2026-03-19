import { ArrowLeft, BookOpen } from "lucide-react";
import { Link } from "wouter";

export default function CannonEssay() {
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
                        <img src="/assets/images/op_ed_cannon.png" alt="Sterling 'Skip' Fairchild" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="text-center space-y-4">
                    <h1 className="text-6xl font-black tracking-tighter uppercase leading-[0.9]" style={{ fontFamily: "'Playfair Display', serif" }}>
                        The Jersey <br /><span className="italic">Regency</span>
                    </h1>
                    <div className="pt-4 flex flex-col items-center">
                        <span className="font-heading text-xl font-bold uppercase">Sterling "Skip" Fairchild</span>
                        <span className="text-muted-foreground font-serif italic text-lg">Special to the Cathedral Megasite · October 2026</span>
                    </div>
                </div>
            </header>

            {/* Essay Content */}
            <article className="prose-investigative max-w-2xl mx-auto text-xl leading-relaxed text-[#2a2a2a] font-serif space-y-8">
                <p className="first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
                    I
                    f you’ve spent any time in Trenton or spent a long afternoon in the
                    company of a specific breed of New Jersey power broker, you recognize
                    the "Jersey Regency" almost immediately. It is not an elected body,
                    strictly speaking. It is a class of men—lawyers, developers, and, in
                    this specific tragedy, prelates—who understand that institutional power
                    is not about consensus, but about the management of information.
                </p>

                <p>
                    I spent thirty years chronicling the American presidency, a role that
                    requires one to understand the "Architecture of Silence" in Washington.
                    But what has transpired in the Newark See over the last decade makes the
                    most hardened D.C. operator look like an amateur.
                </p>

                <p>
                    The Newark hierarchy, for all its ecclesiastical trappings, operates
                    with the clinical efficiency of a 1950s political machine. The "Board of
                    Regents" at Seton Hall—the body that oversaw the suppression of the
                    Latham Report—is effectively the "Audit Committee" of a sovereign city-state.
                    They are the keepers of the Ledger.
                </p>

                <blockquote className="border-l-2 border-black pl-8 py-2 my-12 not-italic text-3xl font-bold leading-tight tracking-tight">
                    "The tragedy of the Newark See is that it ceased being a religious institution and became a holding company for secrets."
                </blockquote>

                <p>
                    Theodore McCarrick was the ultimate machine boss. He didn't just
                    fundraise; he "built." He built a network of influence that stretched
                    from the State House in Trenton to the halls of the Vatican. He turned
                    charity into a billion-dollar grant pipeline and used the "Archbishop's
                    Fund" as a private tipping jar for his peers.
                </p>

                <p>
                    But machines, no matter how well-oiled, eventually produce a paper trail.
                    The 24,000 pages that the hierarchy fought so desperately to seal were
                    not just "evidence" of abuse; they were the blueprints of the machine.
                    To unseal them was to admit that the "Architecture of Silence" was not
                    a reactive measure to a few bad priests—it was the foundational policy
                    of the Archdiocese.
                </p>

                <p>
                    As I observe the current leadership—the "Succession" of men like
                    Lorenzo and the strategic relocation of Checchio—I see the machine's
                    final defensive posture. They are trying to "out-wait" the truth. They
                    operate on the assumption that the public has a short memory and that a
                    million-dollar settlement can eventually buy a general release from
                    conscience.
                </p>

                <p>
                    But they are forgetting the one rule of history: The Dossier always
                    survives. In the case of Newark, the whistleblowers did the one thing
                    the Machine could not account for: they refused to take the money and
                    stay silent. They broke the code of *Omertà*. And in doing so, they
                    rendered the Regency obsolete.
                </p>

                <div className="pt-20 text-center">
                    <BookOpen className="w-12 h-12 text-black/20 mx-auto mb-4" />
                    <div className="font-mono text-[10px] uppercase tracking-widest opacity-50">Sterling "Skip" Fairchild is a two-time Pulitzer-winning biographer and historical consultant.</div>
                </div>
            </article>

            <div className="h-40" />
        </div>
    );
}
