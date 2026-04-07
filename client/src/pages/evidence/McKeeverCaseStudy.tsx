import React from "react";
import { Link } from "wouter";
import { ArrowLeft, BookOpen, Shield, Search, FileText } from "lucide-react";
import { Term } from "@/components/Term";

export default function McKeeverCaseStudy() {
    return (
        <div className="min-h-screen bg-[#0a0a0c] text-[#c8bdb0] font-serif">
            {/* HER0 & TITLE */}
            <div className="border-b border-white/5 relative overflow-hidden bg-black py-24">
                <div className="absolute inset-0 bg-[#8b1a1a]/5 blur-[120px] pointer-events-none" />
                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <BookOpen className="w-5 h-5 text-[#8b1a1a]" />
                        <span className="text-[#8b1a1a] font-bold text-[10px] uppercase tracking-[0.5em] font-courier">
                            Survivor Advocacy / Institutional Complicity
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black font-cinzel text-white uppercase tracking-tighter leading-tight mb-8">
                        The Architecture of Secrecy
                    </h1>
                    <h2 className="text-xl md:text-2xl text-zinc-400 italic mb-12">
                        An Analysis of the Lara McKeever Case, Institutional Complicity, and the Diocese of Harrisburg Bankruptcy
                    </h2>
                    <div className="w-24 h-1 bg-[#8b1a1a] mx-auto" />
                </div>
            </div>

            {/* CONTENT */}
            <div className="max-w-3xl mx-auto px-6 py-20 space-y-16">
                
                {/* Introduction */}
                <section className="space-y-6">
                    <p className="text-lg leading-relaxed text-zinc-300">
                        The crisis of child sexual abuse within the Roman Catholic Church is defined not only by the individual acts of predatory clerics but also by the highly sophisticated institutional mechanisms utilized to conceal those acts from civil authorities and the public. The trajectory of Lara Fortney-McKeever—from a child victim of a serial predator to the Chairperson of the Official Committee of Tort Claimants in a landmark diocesan bankruptcy—serves as a comprehensive, multi-decade case study in institutional failure, aggressive legal maneuvering, and relentless survivor advocacy.
                    </p>
                     <p className="text-lg leading-relaxed text-zinc-300">
                        McKeever’s experiences with the Reverend Augustine Giella, a priest whose decades-long history of abuse spanned the {<Term id="Archdiocese">Archdiocese</Term>} of Newark and the Diocese of Harrisburg, illuminate the devastating human cost of {<Term id="Ecclesiastical">ecclesiastical</Term>} cover-ups.
                    </p>
                    <p className="text-lg leading-relaxed text-zinc-300">
                        This exhaustive report provides a definitive examination of the background of Lara McKeever and the Fortney sisters, tracing the pathological history of Augustine Giella and the systemic administrative failures detailed in the 2018 Pennsylvania Statewide Investigating {<Term id="Grand Jury">Grand Jury</Term>} Report. Furthermore, it analyzes the subsequent legal strategies employed by victims under the New Jersey Child Victims Act, which briefly dismantled historical legal barriers, and the defensive utilization of Chapter 11 bankruptcy by the Diocese of Harrisburg. By tracking the chronological and legal evolution of this case, this analysis deconstructs the methods by which religious institutions have historically shielded assets, mitigated liability, and silenced victims, while simultaneously documenting the evolving legal mechanisms through which survivors have forced accountability and systemic reform.
                    </p>
                    <div className="p-8 border-l-4 border-[#8b1a1a] bg-white/5 my-8">
                        <p className="text-xl text-white italic font-medium leading-relaxed">
                            The analysis underscores that the crisis is dual-natured: it encompasses the primary trauma inflicted by the abuser and the secondary trauma—often termed "institutional betrayal"—inflicted by the hierarchy that prioritized reputational and financial preservation over the protection of children.
                        </p>
                    </div>
                    <p className="text-lg leading-relaxed text-zinc-300">
                        The McKeever narrative encapsulates this duality perfectly, culminating in a complex federal bankruptcy proceeding where the victims were forced to navigate a legal arena designed to protect corporate entities from financial ruin.
                    </p>
                </section>

                {/* Section I */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-black font-cinzel text-white uppercase tracking-widest border-b border-white/10 pb-4 mb-8 flex items-center gap-4">
                        <span className="text-[#8b1a1a]">I.</span> The Anatomy of an Institutional Transfer: Rev. Augustine Giella
                    </h3>
                    <p className="text-lg leading-relaxed text-zinc-300">
                        To thoroughly understand the abuse suffered by Lara McKeever and her sisters, it is necessary to examine the administrative mechanisms that delivered their abuser to their parish. The Reverend Augustine Giella was ordained in the Archdiocese of Newark, New Jersey, on June 3, 1950. For twenty-nine years, he operated within the Newark ecclesiastical jurisdiction, holding assignments at multiple parishes.
                    </p>
                    <p className="text-lg leading-relaxed text-zinc-300">
                        During this extended period in New Jersey, Giella left a protracted trail of victims. Civil lawsuits filed decades later revealed that Giella abused multiple children between 1960 and 1964 at Holy Trinity, and others between 1976 and 1981 at St. Catherine’s. Despite complaints of sexual abuse logged against him over these decades, the Archdiocese of Newark failed to permanently remove him from ministry, conduct independent investigations, or notify civil law enforcement authorities.
                    </p>
                    
                    <h4 className="text-xl font-bold text-white mt-10 mb-4 font-cinzel">The Illusion of "Good Standing" and Incardination</h4>
                    <p className="text-lg leading-relaxed text-zinc-300">
                        In November 1979, after nearly three decades of problematic ministry in New Jersey, Giella abruptly sought an assignment outside his home archdiocese. He formally contacted Bishop Joseph Daley of the Diocese of Harrisburg, Pennsylvania, to request a pastoral assignment.
                    </p>
                    <p className="text-lg leading-relaxed text-zinc-300">
                        The facilitation of a transfer to an external diocese required explicit endorsement from Giella's direct superiors in Newark. On December 7, 1979, Archbishop Peter Gerety of the Archdiocese of Newark drafted a formal letter of recommendation to the Diocese of Harrisburg. In this correspondence, Archbishop Gerety confirmed that Giella was a "priest in good standing" and provided an unequivocal recommendation.
                    </p>
                    
                    {/* Data Table */}
                    <div className="my-12 border border-white/10 bg-black/50 overflow-hidden">
                        <div className="bg-white/5 px-6 py-4 border-b border-white/10">
                            <span className="text-xs font-bold text-zinc-400 uppercase tracking-[0.3em] font-mono">Chronology of Pastoral Assignments</span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm whitespace-nowrap">
                                <thead>
                                    <tr className="border-b border-white/5 text-zinc-500 font-mono uppercase tracking-wider text-xs">
                                        <th className="px-6 py-4 bg-white/5">Timeframe</th>
                                        <th className="px-6 py-4">Parish Assignment</th>
                                        <th className="px-6 py-4 bg-white/5">Diocese / Archdiocese</th>
                                    </tr>
                                </thead>
                                <tbody className="text-zinc-300 divide-y divide-white/5">
                                    <tr>
                                        <td className="px-6 py-4 bg-white/[0.02]">June 1950 &ndash; June 1969</td>
                                        <td className="px-6 py-4">Holy Trinity Church, Hackensack, NJ</td>
                                        <td className="px-6 py-4 bg-white/[0.02]">Archdiocese of Newark</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 bg-white/[0.02]">June 1969 &ndash; June 1970</td>
                                        <td className="px-6 py-4">Our Lady of Sorrows, Jersey City, NJ</td>
                                        <td className="px-6 py-4 bg-white/[0.02]">Archdiocese of Newark</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 bg-white/[0.02]">June 1970 &ndash; March 1976</td>
                                        <td className="px-6 py-4">Church of the Epiphany, Cliffside Park, NJ</td>
                                        <td className="px-6 py-4 bg-white/[0.02]">Archdiocese of Newark</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 bg-white/[0.02]">March 1976 &ndash; Feb 1980</td>
                                        <td className="px-6 py-4">St. Catherine’s, Glen Rock, NJ</td>
                                        <td className="px-6 py-4 bg-white/[0.02]">Archdiocese of Newark</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 bg-white/[0.02]">March 1980 &ndash; Oct 1982</td>
                                        <td className="px-6 py-4 font-bold text-[#8b1a1a]">St. Joseph’s Church, Hanover, PA</td>
                                        <td className="px-6 py-4 bg-white/[0.02] font-bold text-[#8b1a1a]">Diocese of Harrisburg</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 bg-white/[0.02]">Oct 1982 &ndash; April 1988</td>
                                        <td className="px-6 py-4">St. John the Evangelist, Enhaut, PA</td>
                                        <td className="px-6 py-4 bg-white/[0.02]">Diocese of Harrisburg</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Section II */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-black font-cinzel text-white uppercase tracking-widest border-b border-white/10 pb-4 mb-8 flex items-center gap-4">
                        <span className="text-[#8b1a1a]">II.</span> The Fortney Sisters: Grooming, Abuse, and Secrecy
                    </h3>
                    <p className="text-lg leading-relaxed text-zinc-300">
                        Following his initial Pennsylvania assignment in Hanover, Giella was transferred to St. John the Evangelist Church in Enhaut, located in Swatara Township, in October 1982. It was within this parish community that Giella identified and embedded himself into the lives of the Fortney family.
                    </p>
                    
                    <h4 className="text-xl font-bold text-white mt-10 mb-4 font-cinzel">The Mechanics of Predatory Grooming</h4>
                    <p className="text-lg leading-relaxed text-zinc-300">
                        Lara Fortney-McKeever was 10 years old and in the fifth grade when she first encountered Giella. Eager to serve her church and please the new pastor, she raised her hand to volunteer—an action she later publicly described as a decision she has regretted for over three decades.
                    </p>
                    <p className="text-lg leading-relaxed text-zinc-300">
                        Giella utilized classic, highly aggressive grooming techniques to ensnare not just the individual children, but the entire Fortney family system. He quickly became a fixture in the Fortney home, adopting a benevolent, grandfatherly persona. The psychological manipulation of the adults was so profound that the parents developed a severe form of inattentional blindness regarding Giella's highly inappropriate and escalating behavior.
                    </p>
                    
                    <h4 className="text-xl font-bold text-white mt-10 mb-4 font-cinzel">The Psychological Toll</h4>
                    <p className="text-lg leading-relaxed text-zinc-300">
                        The abuse was sustained and systemic, ultimately claiming at least five of the eight Fortney daughters as direct victims. Patty Fortney-Julius described the internal rationalization required to psychologically survive the ongoing trauma, repeatedly telling herself, <em>"He's my priest. He's the mediator between God and man. This is okay."</em>
                    </p>
                    
                    <div className="bg-black/40 border border-[#8b1a1a]/20 p-6 rounded-md my-8">
                        <div className="flex items-center gap-3 mb-4">
                            <Search className="w-4 h-4 text-[#8b1a1a]" />
                            <span className="text-xs uppercase tracking-widest font-mono text-zinc-400">Archival Evidence</span>
                        </div>
                        <p className="text-zinc-300 italic">
                            Giella’s pathology was exceptionally dark... A police search of his New Jersey residence yielded a horrifying collection of forensic evidence: soiled undergarments belonging to young girls, plastic containers containing pubic hairs identified by victims' initials, vials of urine, sex books, and photographs of children.
                        </p>
                    </div>
                </section>

                {/* Section III */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-black font-cinzel text-white uppercase tracking-widest border-b border-white/10 pb-4 mb-8 flex items-center gap-4">
                        <span className="text-[#8b1a1a]">III.</span> The Architecture of Concealment: The 1990s Settlement
                    </h3>
                    <p className="text-lg leading-relaxed text-zinc-300">
                        In the 1990s, the Diocese of Harrisburg entered into a legal settlement agreement with the Fortney family. However, rather than prioritizing the health, recovery, and vindication of the victims, the Diocese engaged in aggressive litigation tactics designed to minimize financial exposure and suppress public knowledge.
                    </p>
                    <p className="text-lg leading-relaxed text-zinc-300">
                        More devastatingly, the settlement included a draconian confidentiality agreement—effectively a "gag order"—that legally prohibited the Fortney family from discussing the abuse publicly, enforced under the explicit threat of recovering previously paid settlement monies. Giella ultimately evaded a criminal trial, dying in 1993 while awaiting justice.
                    </p>
                </section>

                {/* Section IV */}
                 <section className="space-y-6">
                    <h3 className="text-2xl font-black font-cinzel text-white uppercase tracking-widest border-b border-white/10 pb-4 mb-8 flex items-center gap-4">
                        <span className="text-[#8b1a1a]">IV.</span> The 2018 Pennsylvania Statewide Investigating {<Term id="Grand Jury">Grand Jury</Term>}
                    </h3>
                    <p className="text-lg leading-relaxed text-zinc-300">
                        The full scope of the cover-up was not exposed until the culmination of the 40th Statewide Investigating {<Term id="Grand Jury">Grand Jury</Term>} in August 2018, representing the most exhaustive investigation into church abuse in United States history.
                    </p>
                    <p className="text-lg leading-relaxed text-zinc-300">
                        Section VI of the {<Term id="Grand Jury">Grand Jury</Term>} Report, pointedly titled "Examples of Institutional Failure," explicitly highlighted the catastrophic case of Rev. Augustine Giella. The explosive release permitted the Fortney sisters to speak out publicly, breaking decades of enforced silence and transforming them into leading national advocates.
                    </p>
                </section>

                {/* Section V */}
                 <section className="space-y-6">
                    <h3 className="text-2xl font-black font-cinzel text-white uppercase tracking-widest border-b border-white/10 pb-4 mb-8 flex items-center gap-4">
                        <span className="text-[#8b1a1a]">V.</span> Legislative Revival and Civil Litigation
                    </h3>
                    <p className="text-lg leading-relaxed text-zinc-300">
                        While the 2018 report exposed historical truth, restrictive {<Term id="Statute of Limitations">statutes of limitations</Term>} paralyzed many victims. In 2019, New Jersey passed the Child Victims Act (NJCVA), executing a temporary two-year "lookback window."
                    </p>

                    <div className="my-10 bg-black/30 border border-white/5 rounded-lg overflow-hidden">
                        <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex items-center justify-between">
                            <span className="text-xs font-bold text-[#8b1a1a] uppercase tracking-[0.3em] font-mono flex items-center gap-2">
                                <Shield className="w-4 h-4" /> Legal Status Timeline
                            </span>
                        </div>
                        <table className="w-full text-left text-sm whitespace-nowrap">
                            <thead className="bg-white/[0.02]">
                                <tr className="border-b border-white/5 text-zinc-500 font-mono text-xs uppercase tracking-wider">
                                    <th className="px-6 py-4">Phase</th>
                                    <th className="px-6 py-4">Period</th>
                                    <th className="px-6 py-4">Legal Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-zinc-300 divide-y divide-white/5">
                                <tr>
                                    <td className="px-6 py-4 font-bold">Period of Abuse</td>
                                    <td className="px-6 py-4 font-mono">1980 - 1989</td>
                                    <td className="px-6 py-4 text-zinc-400">Blocked: Victims minors under coercion.</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-bold">Gag Order</td>
                                    <td className="px-6 py-4 font-mono">1990s - 2018</td>
                                    <td className="px-6 py-4 text-zinc-400">Barred: Settlement tied to silence.</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-bold">PA Grand Jury</td>
                                    <td className="px-6 py-4 font-mono">2018 - 2019</td>
                                    <td className="px-6 py-4 text-zinc-400">Exposed but Time-Barred.</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-bold text-[#c22121]">NJCVA Lookback</td>
                                    <td className="px-6 py-4 font-mono text-[#c22121]">12/2019 - 12/2021</td>
                                    <td className="px-6 py-4 text-[#c22121] font-bold">Revived: Civil claims window available.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-lg leading-relaxed text-zinc-300">
                        On December 2, 2019, Lara and Patty held a highly publicized press conference in Newark announcing civil lawsuits designed to "excavate the secrets of all the diocese’s records."
                    </p>
                </section>

                {/* Section VI */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-black font-cinzel text-white uppercase tracking-widest border-b border-white/10 pb-4 mb-8 flex items-center gap-4">
                        <span className="text-[#8b1a1a]">VI.</span> The Chapter 11 Shield: The Diocese of Harrisburg Bankruptcy
                    </h3>
                    <p className="text-lg leading-relaxed text-zinc-300">
                        Faced with a surge of lawsuits, the Diocese of Harrisburg filed for Chapter 11 bankruptcy on February 19, 2020. The immediate consequence was an "automatic stay," terminating the survivors' civil lawsuits and ending the aggressive discovery process.
                    </p>
                    <p className="text-lg leading-relaxed text-zinc-300">
                        Lara McKeever was appointed to the Official Committee of Tort Claimants and subsequently elected as its Chairperson. Her role transitioned from individual plaintiff to lead representative navigating high-stakes negotiations surrounding the bankruptcy estate and the Real Estate Trust.
                    </p>
                </section>

                {/* Section VII and Conclusion */}
                <section className="space-y-6">
                    <h3 className="text-2xl font-black font-cinzel text-white uppercase tracking-widest border-b border-white/10 pb-4 mb-8 flex items-center gap-4">
                        <span className="text-[#8b1a1a]">VII.</span> Final Resolution & The Survivor Compensation Trust
                    </h3>
                    <p className="text-lg leading-relaxed text-zinc-300">
                        In August 2022, a Joint Chapter 11 Plan of Reorganization was agreed upon. A massive Survivor Compensation Trust was established with $7,500,000, funded heavily by asset liquidation and a major loan from the Priest's Pension Plan.
                    </p>
                    <p className="text-lg leading-relaxed text-zinc-300">
                        The extensive saga of Lara McKeever and the Fortney sisters represents a devastating indictment of systemic administrative culture prioritizing self-preservation over child protection.
                    </p>
                    
                    {/* The crucial concluding thought heavily emphasized per user instructions */}
                    <div className="bg-[#8b1a1a]/10 border-l-4 border-[#8b1a1a] p-8 mt-12 shadow-[0_0_30px_rgba(139,26,26,0.1)]">
                        <p className="text-xl md:text-2xl text-white font-cinzel leading-relaxed uppercase tracking-widest mb-4">
                            Enforcing Accountability
                        </p>
                        <p className="text-lg text-[#c8bdb0]/90 italic font-medium leading-relaxed">
                            Ultimately, McKeever's evolution from a silenced, traumatized victim in Enhaut, Pennsylvania, to a pivotal, national legal advocate underscores the vital, transformative role of survivor-led litigation in enforcing institutional accountability.
                        </p>
                    </div>

                </section>

                <div className="pt-16 pb-8 border-t border-white/5 flex items-center justify-between">
                    <Link href="/evidence">
                        <a className="inline-flex items-center gap-3 text-zinc-500 hover:text-white uppercase tracking-widest text-xs font-mono transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Return to Archives
                        </a>
                    </Link>
                </div>

            </div>
        </div>
    );
}
