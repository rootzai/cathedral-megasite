import { Button } from "@/components/ui/button";
import { Anchor, MoveRight, ShieldAlert } from "lucide-react";
import { Link } from "wouter";

export default function SuccessionEpilogue() {
    return (
        <div className="page-enter max-w-5xl mx-auto px-6 py-12 space-y-20">

            {/* Cinematic Header */}
            <header className="text-center space-y-8 py-20">
                <div className="flex justify-center mb-4">
                    <Anchor className="w-16 h-16 text-zinc-800 animate-bounce" />
                </div>
                <div className="exhibit-label mx-auto text-zinc-800 mb-4 uppercase tracking-[0.4em] font-mono text-xs">The Final Word · Epilogue</div>
                <h1 className="text-8xl font-black mb-6 leading-[0.8] tracking-tighter uppercase text-zinc-800" style={{ fontFamily: "'Playfair Display', serif" }}>
                    The Millstone <br />Rises
                </h1>
                <p className="text-2xl font-serif italic text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    "It would be better for him to have a great millstone hung around his neck and to be
                    thrown into the sea..."
                </p>
            </header>

            {/* Narrative Synthesis */}
            <section className="prose-investigative max-w-4xl mx-auto text-xl leading-relaxed text-muted-foreground font-serif space-y-12 text-center">
                <p>
                    We began at 300 Ocean Avenue, in a house where the sound of the Atlantic
                    muffled the cries of the young. We end in the boardrooms and chanceries of
                    2026, where the same sounds—the soft shuffling of legal papers, the quiet
                    votes of Regents, the clinical dismissal of court cases—continue to
                    muffle the Truth.
                </p>

                <p>
                    The "Architecture of Silence" is no longer a hidden secret; it is a visible
                    monument. It is the promotion of Joseph Reilly. It is the elevation of
                    Elias Lorenzo. It is the strategic relocation of James Checchio. It is
                    the million-dollar mechanism that ensures the spigots of government and
                    private capital never run dry, no matter how many victims are left in the wake.
                </p>

                <div className="h-px bg-zinc-800/30 w-1/2 mx-auto" />

                <p className="text-foreground font-bold">
                    But for every vault that is sealed, a whistleblower remains. For every
                    court order that is defied, a jury eventually speaks.
                </p>

                <p>
                    The $5 million verdict of October 2025 was not an end. It was a
                    measuring of the weight. The 20,500 pages of evidence currently being
                    produced by court order are not just ink on paper; they are the
                    millstone. And in the logic of divine justice—or even simple human
                    accountability—the weight always finds the neck.
                </p>
            </section>

            {/* Call to Action: The People Index */}
            <section className="bg-zinc-50 p-16 rounded-sm border border-zinc-400/20 shadow-2xl text-center space-y-8">
                <ShieldAlert className="w-12 h-12 text-zinc-800 mx-auto mb-4" />
                <h2 className="text-4xl font-black uppercase text-zinc-900 tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Witness the <span className="text-zinc-800">Whole</span>
                </h2>
                <p className="text-lg text-muted-foreground font-serif max-w-2xl mx-auto italic">
                     The narrative concludes here, but the data is eternal. Proceed to the
                     Appendices to audit the specific names and documented records.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center pt-8">
                    <Link href="/ledger">
                        <Button variant="outline" size="lg" className="border-zinc-400 text-zinc-800 hover:bg-zinc-800 hover:text-zinc-900 font-mono uppercase tracking-[0.2em] rounded-none px-12 py-8 group transition-all duration-500">
                            Audit the Ledger
                            <MoveRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Footer Quote */}
            <footer className="pt-20 border-t border-border text-center text-xs font-mono uppercase tracking-[0.5em] text-muted-foreground">
                Cathedral · Megasite · 2026 · All Evidence Verified
            </footer>
        </div>
    );
}
