import EndgameLayout from "@/components/EndgameLayout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Rehabilitation() {
    return (
        <EndgameLayout>
            <div className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-4">
                <SectionHeader
                    number="03"
                    title="The Rehabilitation"
                    subtitle="Rebranding as 'Elias'"
                />

                <div className="bg-card border border-border p-8 rounded-lg space-y-8 max-w-4xl">
                    <div className="space-y-2 border-b border-border pb-4">
                        <h3 className="font-heading text-3xl text-foreground">Timeline of Career & Allegations</h3>
                        <p className="font-body text-muted-foreground leading-relaxed">
                            Following his expulsion from the Salesians, Richard Lorenzo was repackaged as "Elias" and placed within the Benedictine order at St. Mary's Abbey in Morristown, which operates the elite Delbarton School.
                        </p>
                    </div>

                    <div className="space-y-10 relative before:absolute before:inset-y-0 before:left-3 before:w-px before:bg-border">
                        {/* 1980s */}
                        <div className="relative pl-10 space-y-4">
                            <div className="absolute left-1 top-2 w-4 h-4 rounded-full bg-border border-4 border-background" />
                            <h4 className="font-mono text-lg text-destructive uppercase tracking-widest">1983 – 1989: Entry and Early Teaching</h4>
                            <ul className="space-y-4 font-body text-muted-foreground">
                                <li><strong className="text-foreground">1983:</strong> Richard Lorenzo enters <strong className="text-foreground">St. Mary's Abbey</strong>. He immediately begins teaching at Delbarton School.</li>
                                <li><strong className="text-foreground">1985:</strong> He makes his first profession of monastic vows.</li>
                                <li><strong className="text-foreground">1989:</strong> He is ordained a priest. Following ordination, he is named <strong className="text-foreground">Director of Liturgy</strong> for the Abbey, a post he holds for a decade.</li>
                            </ul>
                        </div>

                        {/* 1990s */}
                        <div className="relative pl-10 space-y-4">
                            <div className="absolute left-1 top-2 w-4 h-4 rounded-full bg-border border-4 border-background" />
                            <h4 className="font-mono text-lg text-destructive uppercase tracking-widest">1990s: Rise to Leadership</h4>
                            <ul className="space-y-4 font-body text-muted-foreground">
                                <li><strong className="text-foreground">1991:</strong> Becomes Chairman of the Paterson Diocesan Liturgical Commission.</li>
                                <li><strong className="text-foreground">1995:</strong> Appointed <strong className="text-foreground">Prior of St. Mary's Abbey</strong> (second-in-command of the monastery).</li>
                                <li className="bg-muted/30 p-4 border-l-2 border-destructive text-sm italic">
                                    <strong className="text-foreground not-italic">Context:</strong> As Prior, he held significant authority over the monks and internal governance during a period later scrutinized for how it handled historical abuse claims.
                                </li>
                                <li><strong className="text-foreground">Throughout the 90s:</strong> Holds concurrent senior roles at Delbarton School, including <strong className="text-foreground">Director of Campus Ministry</strong>, <strong className="text-foreground">Chairman of Religious Studies</strong>, and <strong className="text-foreground">Vice President for Development</strong>. Also serves on the Board of Trustees.</li>
                            </ul>
                        </div>

                        {/* 2000s */}
                        <div className="relative pl-10 space-y-4">
                            <div className="absolute left-1 top-2 w-4 h-4 rounded-full bg-border border-4 border-background" />
                            <h4 className="font-mono text-lg text-destructive uppercase tracking-widest">2000s: Administrative Power & Policy</h4>
                            <ul className="space-y-4 font-body text-muted-foreground">
                                <li><strong className="text-foreground">2000s Era:</strong> Continues in high-level administration. Helps implement <strong className="text-foreground">Praesidium</strong> accreditation. While supporters cite this as evidence of safety commitment, survivor groups (like SNAP) argue the leadership culture remained notoriously protective of the institution's reputation.</li>
                                <li><strong className="text-foreground">2009:</strong> Lorenzo leaves New Jersey for Rome to serve as Prior of <strong className="text-foreground">Sant’Anselmo</strong> (international Benedictine headquarters) and later as Procurator General for the Order.</li>
                            </ul>
                        </div>

                        {/* 2010s */}
                        <div className="relative pl-10 space-y-4">
                            <div className="absolute left-1 top-2 w-4 h-4 rounded-full bg-border border-4 border-background" />
                            <h4 className="font-mono text-lg text-destructive uppercase tracking-widest">2010s: The Scandal Explodes</h4>
                            <ul className="space-y-4 font-body text-muted-foreground">
                                <li><strong className="text-foreground">2012:</strong> A major lawsuit is filed by former students (including Tom Crane) alleging sexual abuse by monks in the 1970s and 80s.</li>
                                <li className="bg-muted/30 p-4 border-l-2 border-destructive text-sm italic">
                                    <strong className="text-foreground not-italic">Significance:</strong> While the abuse occurred before Lorenzo was in charge, the lawsuits alleged that the Abbey’s leadership (which Lorenzo was part of for decades) had long engaged in a culture of silence to suppress these claims.
                                </li>
                                <li><strong className="text-foreground">2016:</strong> Returns to the U.S. and is elected <strong className="text-foreground">Abbot President</strong> of the American-Cassinese Congregation.</li>
                                <li><strong className="text-foreground">2018:</strong> Under mounting pressure, Delbarton publicly acknowledges that <strong className="text-foreground">30 former students</strong> had come forward with credible allegations against <strong className="text-foreground">12 monks and 1 lay teacher</strong>.</li>
                                <li className="bg-muted/30 p-4 border-l-2 border-destructive text-sm italic">
                                    <strong className="text-foreground not-italic">Lorenzo's Connection:</strong> Advocacy groups noted Lorenzo was a senior leader (Prior and VP) during the years when the Abbey was allegedly managing "quiet settlements" and failing to fully disclose the extent of the abuse.
                                </li>
                            </ul>
                        </div>

                        {/* 2020s */}
                        <div className="relative pl-10 space-y-4">
                            <div className="absolute left-1 top-2 w-4 h-4 rounded-full bg-destructive border-4 border-background animate-pulse" />
                            <h4 className="font-mono text-lg text-destructive uppercase tracking-widest">2020s: Episcopal Appointment & Trials</h4>
                            <ul className="space-y-4 font-body text-muted-foreground">
                                <li><strong className="text-foreground">2020:</strong> Pope Francis appoints him Auxiliary Bishop of Newark.</li>
                                <li><strong className="text-foreground">2023–2025:</strong> Legal battles explode as New Jersey’s Child Victims Act window leads to nearly 40 pending lawsuits against Delbarton.</li>
                                <li><strong className="text-foreground">October 2025:</strong> A jury awards <strong className="text-foreground">$5 million</strong> to a former student abused in 1975 — the first of many cases to go to trial.</li>
                                <li className="bg-destructive/10 p-4 border-l-2 border-destructive text-sm">
                                    <strong className="text-destructive">Current Status:</strong> While Lorenzo is now a Bishop, his past leadership at Delbarton remains a central point of contention. The school cites his role in establishing the review board as a defense, while plaintiffs argue his leadership enabled the cover-up.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="space-y-8 max-w-4xl">
                    <div className="bg-card border border-border p-8 rounded-lg space-y-6">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-1 space-y-4">
                                <h4 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">The Benedictine Rehabilitation</h4>
                                <p className="font-body text-muted-foreground leading-relaxed">
                                    The system's ability to take a man expelled for "deviant conduct" and transform him into a "Prince of the Church" highlights the absolute moral bankruptcy of the New Jersey ecclesiastical leadership. The "Benedictine rehabilitation" allowed Lorenzo to ascend through the hierarchy under the protection of St. Mary's Abbey.
                                </p>
                                <a
                                    href="https://www.youtube.com/watch?v=0rdopdpz99I"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-destructive hover:text-destructive/80 font-mono text-sm uppercase transition-colors"
                                >
                                    <span className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">▶</span>
                                    Watch: NJ Catholic school sex abuse trial begins
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between mt-12 pt-8 border-t border-border">
                    <Link href="/endgame/lorenzo/expulsion" asChild>
                        <Button variant="outline" className="font-mono uppercase tracking-widest rounded-none border-2">
                            <span className="mr-2">←</span> Previous
                        </Button>
                    </Link>
                    <Link href="/endgame/lorenzo/elevation" asChild>
                        <Button size="lg" className="font-mono uppercase tracking-widest rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
                            Proceed to Section 04 <span className="ml-2">→</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </EndgameLayout>
    );
}
