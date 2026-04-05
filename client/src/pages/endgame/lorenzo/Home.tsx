import { JourneyNav } from "@/components/JourneyNav";
import { AlertTriangle, Gavel, Scale, ShieldAlert, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
    return (
        <div className="page-enter max-w-5xl mx-auto px-6 py-12 space-y-20">

            {/* Hero Section - The Succession */}
            <section className="relative border-b border-border pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/30 text-destructive text-xs font-mono uppercase tracking-[0.2em]">
                            <ShieldAlert className="w-3 h-3" />
                            Special Report · The Succession
                        </div>

                        <h1 className="font-heading text-7xl md:text-8xl text-foreground leading-[0.9] tracking-tighter">
                            The King in <br />
                            <span className="text-destructive italic underline decoration-destructive/30 underline-offset-8">Waiting</span>
                        </h1>

                        <div className="prose-investigative text-xl leading-relaxed text-muted-foreground font-serif italic">
                            "To understand Elias Lorenzo is to understand the Church's final defensive posture:
                            the 'institutional rehabilitation' of a man who managed the silence for thirty years,
                            only to be positioned as the ultimate successor."
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="relative aspect-[4/5] bg-zinc-50 border border-border overflow-hidden grayscale contrast-125 group shadow-2xl">
                            <img
                                src="/assets/images/lorenzo_portrait.png"
                                alt="Elias Lorenzo"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="font-mono text-[10px] uppercase tracking-widest text-destructive mb-2">Docket: Auxiliary Bishop of Newark</div>
                                <h2 className="font-heading text-3xl text-zinc-900">Elias Lorenzo</h2>
                                <p className="font-serif text-sm italic text-gray-400">Former Prior of St. Mary's Abbey</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Atlantic Reconstruction: The Rehabilitation */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <div className="lg:col-span-12 prose-investigative max-w-none">
                    <h2 className="section-heading mb-12">The Resetting of the Clock</h2>

                    <div className="columns-1 md:columns-2 gap-12 space-y-8 text-lg leading-relaxed text-muted-foreground font-serif">
                        <p className="first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-foreground">
                            R
                            ichard Lorenzo died in 1983. In his place rose Elias—a name taken on the
                            day he entered the Benedictine community at St. Mary’s Abbey in Morristown.
                            The transition was more than spiritual; for critics and survivors, it
                            was a forensic "reset." After being expelled from the Salesians for
                            reported deviant conduct, he was not removed from ministry. He was
                            rehabilitated.
                        </p>

                        <p>
                            For the next thirty years, Lorenzo was the "Public Face" of the Delbarton
                            School, an elite laboratory of influence where the children of the East
                            Coast’s power brokers—including the sons of the **Christies**, the **Marinos**,
                            and the **Nyres**—were educated beneath the shadow of a silent Abbey.
                            As Prior—the second-in-command—he oversaw the living arrangements of monks
                            who would later be named as some of the state's most prolific predators.
                        </p>

                        <div className="bg-zinc-100 p-6 border border-zinc-300 my-8">
                            <h4 className="font-heading text-lg mb-4 text-zinc-900 uppercase tracking-widest">Heritage of Influence</h4>
                            <p className="text-sm text-zinc-700 leading-relaxed">
                                Delbarton’s athletic and social prestige was managed under Lorenzo’s tenure.
                                The school produced legends like **Anthony Volpe**, while NFL great **Nick Mangold** walked the sidelines as a coach.
                                Olympic stars like **Jack Alexy** further cemented the school's "untouchable" status.
                                This concentration of celebrity and political power provided the ultimate horizontal shield for the Abbey's vertical silence.
                            </p>
                        </div>

                        <blockquote className="border-l-4 border-destructive pl-8 py-4 my-10 bg-destructive/5 not-italic text-foreground">
                            <p className="text-2xl font-bold leading-tight mb-4">
                                "He didn't just witness the silence; he administered it. He was the
                                gatekeeper of a culture that traded the safety of children for the
                                reputation of an Abbey."
                            </p>
                            <footer className="font-mono text-xs uppercase tracking-widest opacity-60">
                                — Mark Crawford, SNAP New Jersey Coordinator
                            </footer>
                        </blockquote>

                        <p>
                            His ascent was relentless. From Morristown to Rome, and finally back to
                            Newark as an Auxiliary Bishop. But the past caught up in October 2025.
                            In the first civil trial of its kind in New Jersey history, a jury
                            issued a $5 million verdict against the Abbey for the very era
                            Lorenzo managed. The verdict was not just a legal judgment; it was
                            the collapse of the "rehabilitation" narrative.
                        </p>
                    </div>
                </div>
            </section>

            {/* Forensic Asset: The Succession Path */}
            <section className="bg-zinc-50 p-12 rounded-sm border border-border shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-destructive to-transparent" />

                <header className="mb-12 text-center">
                    <h3 className="font-heading text-3xl mb-2">The Path to the Throne</h3>
                    <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Chronicle of Institutional Elevation</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-4">
                    <div className="space-y-4 group">
                        <div className="w-16 h-16 bg-destructive/10 border border-destructive/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-destructive group-hover:text-zinc-900 transition-all">
                            <AlertTriangle className="w-6 h-6" />
                        </div>
                        <h4 className="font-heading text-xl">The Reset</h4>
                        <div className="font-mono text-[10px] uppercase text-destructive">1983-1985</div>
                        <p className="text-sm font-serif text-muted-foreground italic">Exits Salesians under cloud of misconduct; enters Benedictines as 'Elias'.</p>
                    </div>

                    <div className="space-y-4 group">
                        <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-gold group-hover:text-black transition-all">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h4 className="font-heading text-xl">The Prior</h4>
                        <div className="font-mono text-[10px] uppercase text-gold">1995-2011</div>
                        <p className="text-sm font-serif text-muted-foreground italic">Second-in-command at St. Mary's during the height of the documented abuse era.</p>
                    </div>

                    <div className="space-y-4 group">
                        <div className="w-16 h-16 bg-destructive/10 border border-destructive/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-zinc-800 group-hover:text-zinc-900 transition-all">
                            <Scale className="w-6 h-6" />
                        </div>
                        <h4 className="font-heading text-xl">The Verdict</h4>
                        <div className="font-mono text-[10px] uppercase text-destructive">OCT 2025</div>
                        <p className="text-sm font-serif text-muted-foreground italic">$5 Million jury award. The Abbey's failures are finally quantified by a jury of peers.</p>
                    </div>
                </div>
            </section>

            {/* The Epilogue Tease */}
            <div className="evidence-box bg-destructive text-zinc-900 p-12 rounded-none shadow-2xl relative">
                <div className="absolute inset-0 bg-white/10 flex items-center justify-center pointer-events-none">
                    <Gavel className="w-64 h-64 opacity-5" />
                </div>
                <div className="exhibit-label text-zinc-900/60 mb-4 uppercase tracking-[0.2em] font-mono text-xs">Final Finding · The Succession</div>
                <p className="text-2xl leading-relaxed italic mb-8 font-serif">
                    "Succession is the ultimate act of erasure. If the manager of the silence becomes the
                    leader of the Archdiocese, the silence is no longer a policy. It is the law."
                </p>
                <p className="text-sm leading-relaxed opacity-80 font-serif max-w-2xl">
                    Elias Lorenzo stands as the final domino. His elevation is the test of the
                    system's durability. If he succeeds Cardinal Tobin in 2027, the "Architecture
                    of Silence" will have completed its transformation: from a desperate
                    cover-up into a permanent, holy institution.
                </p>
            </div>

            <div className="flex justify-end pt-12 border-t border-border">
                <Link href="/ledger/lorenzo/expulsion" asChild>
                    <Button size="lg" className="font-mono uppercase tracking-widest rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
                        Proceed to Section 02 <span className="ml-2">→</span>
                    </Button>
                </Link>
            </div>

            <JourneyNav />
        </div>
    );
}
