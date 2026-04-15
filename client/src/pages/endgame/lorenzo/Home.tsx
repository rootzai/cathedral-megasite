import MemoryGate from "@/components/MemoryGate";
import { LorenzoSectionNav } from "@/components/SectionNav";
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
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-sm bg-red-950/40 border-2 border-red-600 text-red-500 text-sm font-mono uppercase tracking-[0.4em] font-black shadow-lg">
                            <ShieldAlert className="w-5 h-5" />
                            Special Report // Act IV: The Succession
                        </div>

                        <h1 className="font-heading text-7xl md:text-8xl text-foreground leading-[0.9] tracking-tighter">
                            The King in <br />
                            <span className="text-destructive italic underline decoration-destructive/30 underline-offset-8">Waiting</span>
                        </h1>

                        <div className="prose-investigative text-xl leading-relaxed text-zinc-200 font-serif italic border-l-4 border-red-700 pl-10 py-6 bg-red-950/20 shadow-2xl">
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
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="font-mono text-sm uppercase tracking-[0.3em] text-red-500 font-bold mb-3">Docket: Auxiliary Bishop of Newark</div>
                                <h2 className="font-heading text-5xl text-white font-black drop-shadow-2xl">Elias Lorenzo</h2>
                                <p className="font-serif text-xl italic text-zinc-300 font-bold mt-2">Former Prior of St. Mary's Abbey</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Atlantic Reconstruction: The Rehabilitation */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <div className="lg:col-span-12 prose-investigative max-w-none">
                    <h2 className="section-heading mb-12">The Resetting of the Clock</h2>

                    <div className="columns-1 md:columns-2 gap-16 space-y-12 text-2xl leading-relaxed text-zinc-200 font-serif">
                        <p className="first-letter:text-[8rem] first-letter:font-black first-letter:mr-6 first-letter:float-left first-letter:text-red-600 first-letter:leading-none">
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
                            Coast’s power brokers—including the sons of the <strong>Christies</strong>, the <strong>Marinos</strong>,
                            and the <strong>Nyres</strong>—were educated beneath the shadow of a silent Abbey.
                            As Prior—the second-in-command—he oversaw the living arrangements of monks
                            who would later be named as some of the state's most prolific predators.
                        </p>

                        <div className="bg-zinc-900/50 p-10 border-l-8 border-amber-600 my-12 shadow-2xl">
                            <h4 className="font-heading text-2xl mb-6 text-amber-500 uppercase tracking-[0.3em] font-black">Heritage of Influence</h4>
                            <p className="text-xl text-zinc-100 leading-relaxed font-bold">
                                Delbarton’s athletic and social prestige was managed under Lorenzo’s tenure.
                                The school produced legends like <strong>Anthony Volpe</strong>, while NFL great <strong>Nick Mangold</strong> walked the sidelines as a coach.
                                Olympic stars like <strong>Jack Alexy</strong> further cemented the school's "untouchable" status.
                                This concentration of celebrity and political power provided the ultimate horizontal shield for the Abbey's vertical silence.
                            </p>
                        </div>

                        <blockquote className="border-l-[6px] border-red-600 pl-12 py-10 my-16 bg-red-950/20 shadow-2xl">
                            <p className="text-xl font-black leading-tight mb-8 text-white">
                                "He didn't just witness the silence; he administered it. He was the
                                gatekeeper of a culture that traded the safety of children for the
                                reputation of an Abbey."
                            </p>
                            <footer className="font-mono text-sm uppercase tracking-[0.5em] font-black text-red-500">
                                — Mark Crawford // SNAP Coordinator
                            </footer>
                        </blockquote>

                        <p className="text-white font-bold bg-white/5 p-8 border border-white/10">
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
            <section className="bg-zinc-900 p-12 rounded-sm border border-zinc-800 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-destructive to-transparent" />

                <header className="mb-12 text-center">
                    <h3 className="font-heading text-3xl mb-2 text-white">The Path to the Throne</h3>
                    <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest">Chronicle of Institutional Elevation</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center px-4">
                    <div className="space-y-6 group p-8 bg-zinc-900 shadow-xl border border-zinc-800">
                        <div className="w-20 h-20 bg-red-600/20 border-2 border-red-600 rounded-full flex items-center justify-center mx-auto group-hover:bg-red-600 group-hover:text-black transition-all">
                            <AlertTriangle className="w-10 h-10" />
                        </div>
                        <h4 className="font-heading text-2xl text-white font-black">The Reset</h4>
                        <div className="font-mono text-sm uppercase text-red-500 font-black tracking-[0.2em]">1983-1985</div>
                        <p className="text-lg font-serif text-zinc-300 italic">Exits Salesians under cloud of misconduct; enters Benedictines as 'Elias'.</p>
                    </div>

                    <div className="space-y-6 group p-8 bg-zinc-900 shadow-xl border border-zinc-800">
                        <div className="w-20 h-20 bg-amber-600/20 border-2 border-amber-600 rounded-full flex items-center justify-center mx-auto group-hover:bg-amber-600 group-hover:text-black transition-all">
                            <ShieldCheck className="w-10 h-10" />
                        </div>
                        <h4 className="font-heading text-2xl text-white font-black">The Prior</h4>
                        <div className="font-mono text-sm uppercase text-amber-500 font-black tracking-[0.2em]">1995-2011</div>
                        <p className="text-lg font-serif text-zinc-300 italic">Second-in-command at St. Mary's during the height of the documented abuse era.</p>
                    </div>

                    <div className="space-y-6 group p-8 bg-zinc-900 shadow-xl border border-zinc-800">
                        <div className="w-20 h-20 bg-red-600/20 border-2 border-red-600 rounded-full flex items-center justify-center mx-auto group-hover:bg-red-600 group-hover:text-black transition-all">
                            <Scale className="w-10 h-10" />
                        </div>
                        <h4 className="font-heading text-2xl text-white font-black">The Verdict</h4>
                        <div className="font-mono text-sm uppercase text-red-500 font-black tracking-[0.2em]">OCT 2025</div>
                        <p className="text-lg font-serif text-zinc-300 italic">$5 Million jury award. The Abbey's failures are finally quantified by a jury of peers.</p>
                    </div>
                </div>
            </section>

            {/* The Epilogue Tease */}
            <div className="evidence-box bg-red-700 text-white p-16 rounded-none shadow-2xl relative border-y-8 border-red-900">
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center pointer-events-none">
                    <Gavel className="w-[30rem] h-[30rem] opacity-5" />
                </div>
                <div className="exhibit-label text-red-950 font-black mb-6 uppercase tracking-[0.4em] font-mono text-sm leading-none">Final Finding // Act IV: The Succession</div>
                <p className="text-4xl leading-tight italic mb-12 font-serif font-black">
                    "Succession is the ultimate act of erasure. If the manager of the silence becomes the
                    leader of the Archdiocese, the silence is no longer a policy. It is the law."
                </p>
                <p className="text-xl leading-relaxed font-bold font-serif max-w-4xl text-white/90">
                    Elias Lorenzo stands as the final domino. His elevation is the test of the
                    system's durability. If he succeeds Cardinal Tobin in 2027, the "Architecture
                    of Silence" will have completed its transformation: from a desperate
                    cover-up into a permanent, holy institution.
                </p>
            </div>

            <MemoryGate registryId="person-mccarrick" />
        </div>
    );
}
