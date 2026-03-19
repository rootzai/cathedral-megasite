import { ArrowLeft, PenTool } from "lucide-react";
import { Link } from "wouter";

export default function NoonanEssay() {
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
                        <img src="/assets/images/op_ed_noonan.png" alt="Maureen O'Shaughnessy" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="text-center space-y-4">
                    <h1 className="text-6xl font-black tracking-tighter uppercase leading-[0.9]" style={{ fontFamily: "'Playfair Display', serif" }}>
                        The Cracked <br /><span className="italic">Cathedral</span>
                    </h1>
                    <div className="pt-4 flex flex-col items-center">
                        <span className="font-heading text-xl font-bold uppercase">Maureen O'Shaughnessy</span>
                        <span className="text-muted-foreground font-serif italic text-lg">Special to the Cathedral Megasite · October 2026</span>
                    </div>
                </div>
            </header>

            {/* Essay Content */}
            <article className="prose-investigative max-w-2xl mx-auto text-xl leading-relaxed text-[#2a2a2a] font-serif space-y-8">
                <p className="first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
                    It was an afternoon of heavy gray clouds, the kind that settle over the Hudson
                    like a cold wet wool blanket, when I first read the summary of what we are
                    now calling the Latham Report. I was sitting in my kitchen, the coffee
                    long since gone cold, and I felt a physical sensation of the world—or at
                    least a specific, beloved corner of it—simply cracking in two.
                </p>

                <p>
                    I am a woman of a certain age, and a woman of a certain faith. I grew up
                    in the shadow of the great steeples, in an era where the local priest was
                    not just a figure of authority, but a steward of the neighborhood’s
                    soul. We knew there were flawed men; we are a religion of flawed men.
                    But we believed, with a quiet and steady certainty, that the institution
                    itself—the great, stone-and-incense architecture of the Church—was a
                    sanctuary from the rot of the world.
                </p>

                <p>
                    We were wrong. We were not just wrong about the men, but wrong about the
                    sanctuary. What the records in Newark and the boardrooms at Seton Hall
                    reveal is that the sanctuary was used to mask the rot.
                </p>

                <blockquote className="border-l-2 border-black pl-8 py-2 my-12 not-italic text-3xl font-bold leading-tight tracking-tight">
                    "The failure of the hierarchy in Newark was not a failure of logistics or even a failure of law. It was a failure of the imagination."
                </blockquote>

                <p>
                    They could not imagine a world without their own power, and so they
                    sacrificed the safety of the children to preserve the prestige of the See.
                    I look at the names in the Ledger—the Regents, the Trustees, the men of
                    good breeding and expensive education—and I see something more tragic than
                    villainy. I see a profound, clinical lack of courage. They were careful
                    men. They were prudent men. And they were, in the most devastating sense,
                    silent men.
                </p>

                <p>
                    The tragedy of the Newark scandal is not just the 24,000 pages of
                    suppressed evidence. It is the spiritual cost of that suppression. Every
                    day that Archbishop Tobin stood at the pulpit while the Secret Meeting’s
                    notes remained in a vault, he was hollowing out the very thing he claimed
                    to protect. You cannot build a cathedral on a foundation of unacknowledged
                    crimes and expect the walls to hold.
                </p>

                <p>
                    They say we must forgive. And we must. But forgiveness is not a pardon
                    for the present; it is a reckoning with the past. The "Architecture of
                    Silence" that this website documents is the opposite of grace. It is a
                    human-made wall intended to keep the light out.
                </p>

                <p>
                    As I watch the "Succession" play out—the elevation of men who managed
                    the silence, the strategic transfers to New Orleans—I am reminded of
                    something my father used to say about old houses. You can paint over the
                    mold as many times as you like, but eventually, the house will tell you
                    the truth. The Newark hierarchy is painting frantically. But the
                    structure is groaning. The light is coming in through the cracks. And
                    in that light, we may finally find the Church we thought we had.
                </p>

                <div className="pt-20 text-center">
                    <PenTool className="w-12 h-12 text-black/20 mx-auto mb-4" />
                    <div className="font-mono text-[10px] uppercase tracking-widest opacity-50">Maureen O'Shaughnessy has served as a contributing editor to the leading journals of American life for forty years.</div>
                </div>
            </article>

            <div className="h-40" />
        </div>
    );
}
