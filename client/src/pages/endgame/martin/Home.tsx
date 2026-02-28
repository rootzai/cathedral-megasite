import EndgameLayout from "@/components/EndgameLayout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertTriangle, Eye, Siren } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
    return (
        <EndgameLayout>
            <div className="space-y-16 animate-in fade-in duration-1000">
                {/* Hero Section */}
                <section className="relative border-b border-border pb-16">
                    <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                        <Siren className="w-96 h-96 text-destructive animate-pulse" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/30 text-destructive text-xs font-mono uppercase tracking-widest">
                                <AlertTriangle className="w-3 h-3" />
                                Serial Predator / Enforcer
                            </div>
                            <h1 className="font-heading text-6xl md:text-7xl text-foreground leading-tight">
                                The Case of Kenneth Martin: <br />
                                <span className="text-destructive">Father Kenneth Martin</span>
                            </h1>
                            <p className="font-body text-xl text-muted-foreground leading-relaxed max-w-xl">
                                The ecclesiastical system in New Jersey and Wilmington, Delaware, functioned not as a sanctuary, but as a laundering operation. Ordained in 1989, Kenneth Martin began his predatory path at St. Andrew's Parish in Bayonne, New Jersey. Despite direct reports of abuse in 1983, the system did not remove him; instead, he was promoted to personal secretary for Theodore McCarrick.
                            </p>
                        </div>

                        <Dialog>
                            <DialogTrigger asChild>
                                <div className="relative group cursor-pointer perspective-1000">
                                    <div className="absolute inset-0 bg-destructive/20 blur-3xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
                                    <div className="relative transform transition-transform duration-700 group-hover:rotate-y-12 group-hover:scale-105">
                                        <div className="aspect-[4/5] bg-black border-2 border-destructive/50 overflow-hidden relative shadow-2xl shadow-destructive/20">
                                            <img
                                                src="/assets/images/martin_portrait.png"
                                                alt="Father Kenneth Martin"
                                                className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                                <div className="font-mono text-xs text-destructive mb-2">STATUS: BARRED (2008)</div>
                                                <h2 className="font-heading text-3xl text-white">Father Kenneth Martin</h2>
                                                <p className="font-mono text-sm text-gray-400 mt-2">Personal Secretary to McCarrick</p>
                                                <div className="mt-4 flex items-center text-xs font-mono text-destructive opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <Eye className="w-4 h-4 mr-2" />
                                                    CLICK TO EXPAND
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl bg-black border-destructive/20">
                                <DialogHeader>
                                    <DialogTitle className="font-heading text-2xl text-destructive">Father Kenneth Martin</DialogTitle>
                                </DialogHeader>
                                <div className="relative aspect-auto max-h-[80vh] w-full overflow-hidden rounded-md">
                                    <img
                                        src="/assets/images/martin_portrait.png"
                                        alt="Father Kenneth Martin"
                                        className="h-full w-full object-contain object-top"
                                    />
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </section>

                <section className="pt-8 border-b border-border pb-16">
                    <div className="max-w-4xl space-y-12">
                        <div className="space-y-6">
                            <h2 className="font-heading text-4xl text-foreground uppercase">The Indictment: A Forensic Deep Dive into Father Kenneth Martin and the Architecture of Silence</h2>
                            <p className="font-body text-xl text-muted-foreground leading-relaxed">
                                The history of Father Kenneth Martin serves as a foundational indictment of the "Newark system," a predatory framework that treated child abusers not as criminals to be prosecuted, but as assets to be managed and promoted. Martin was a central figure in a network of "creeps"—including Theodore McCarrick, Joseph Reilly, and James Checchio—whose careers were built on a culture of grooming and institutional silence. This system was sustained by the high-level legal maneuvering of firms like O'Toole Scrivo and political protectors who prioritized the reputation of the Chancery over the safety of the faithful.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="font-heading text-3xl text-foreground uppercase border-l-4 border-destructive pl-4">The Maryland Origins and the Baltimore-Wilmington Axis</h2>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                The predatory career of Kenneth Martin began in the 1970s, not as a cleric, but as a lay teacher at Loyola Blakefield High School in Towson, Maryland. This early tenure established his presence in the Baltimore-Wilmington ecclesiastical corridor, where he would later return to hide after his New Jersey crimes were first reported. Martin was not ordained until 1989, meaning he spent over a decade grooming children as a "dedicated" lay educator and seminarian with the full support of church leadership.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="font-heading text-2xl text-foreground uppercase text-destructive">The Bayonne Nexus: Systematic Grooming of the Crawford Family</h3>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                Between 1977 and 1984, Martin was assigned to St. Andrew’s Parish in Bayonne, New Jersey. It was here that he executed a sophisticated grooming operation against the Crawford family, a devout household of nine children.
                            </p>
                            <ul className="space-y-4 font-body text-lg text-foreground/80">
                                <li><strong className="text-foreground">Inserting Himself into Trauma:</strong> Martin integrated himself into the family's life by presiding over the father’s funeral and becoming a daily fixture in their home. He cultivated a persona of hyper-orthodoxy, frequently wearing a full-length cassock to project an image of spiritual authority.</li>
                                <li><strong className="text-foreground">The Abuse of Mark Crawford:</strong> The abuse of Mark Crawford began when he was 13 years old (c. 1978). In one documented instance, Martin took Crawford on a train trip to Colorado, where they stayed in a mountain cabin; the abuse continued and intensified upon their return to New Jersey.</li>
                                <li><strong className="text-foreground">Expansion to Siblings:</strong> As Mark Crawford grew older and attempted to create distance by entering a seminary, Martin turned his focus to Crawford's younger brother, who eventually suffered an emotional breakdown from the trauma.</li>
                                <li><strong className="text-foreground">The 1981 and 1983 Reports:</strong> Crawford first reported Martin’s behavior in 1981 to Father Bill Cramer, a "friend" of Martin’s from the seminary. Cramer—a fellow creep later removed for abusing two brothers himself—responded with silence and avoidance. In 1983, Crawford reported the abuse to Auxiliary Bishop Jerome Pechillo. Pechillo’s response was a masterclass in institutional gaslighting: he chastised the 15-year-old for not calling him "His Excellency," claimed Crawford was merely "angry" about his father’s death, and dismissed the allegations entirely.</li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h3 className="font-heading text-2xl text-foreground uppercase text-destructive">The Promotion: Serving "Uncle Ted"</h3>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                The ultimate proof of the system's depravity occurred in 1992. Rather than being laicized for the Bayonne abuse, Martin was hand-picked to serve as the personal secretary to Archbishop Theodore McCarrick at the Sacred Heart Cathedral in Newark.
                            </p>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed mt-4">
                                In this role (1992–1994), Martin became the administrative gatekeeper for McCarrick’s own "nephew" grooming system. The two shared a bond of compromised silence; Martin’s history of abuse was known to the Chancery, making him the perfect accomplice for an Archbishop whose own "beach house" trips were an open secret. In 1994, the secretarial role was handed off to Joseph Reilly, ensuring that the "tight-lipped squad" maintained continuity during the critical "whitewashing" of 1995 when McCarrick hosted Pope John Paul II in Newark.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="font-heading text-2xl text-foreground uppercase text-destructive">The Wilmington Laundering and the 2001 Arrest</h3>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                In 1994, Martin was moved to the Diocese of Wilmington, Delaware, where his predatory behavior continued unchecked.
                            </p>
                            <ul className="space-y-4 font-body text-lg text-foreground/80">
                                <li><strong className="text-foreground">The Arrest:</strong> In 2001, Martin was finally arrested in Wilmington for child sexual abuse.</li>
                                <li><strong className="text-foreground">Probation and Payments:</strong> In December 2001, he was adjudicated with "probation before judgment." Despite this, the system continued to support him. He worked for entities owned by the Chicago Archdiocese for several years while the Wilmington diocese continued to send him cash payments until November 2009.</li>
                                <li><strong className="text-foreground">Pension Reinstatement:</strong> While the Church fought a 2012 court order to release his personnel files, they simultaneously supported a legal action that successfully reinstated Martin’s pension.</li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h3 className="font-heading text-2xl text-foreground uppercase text-destructive">Current Status: The Brick Resident and NJ Transit</h3>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                Today, Kenneth Martin lives as a free man in Brick, New Jersey. In a chilling intersection with public safety, he spent years working as a train conductor for NJ Transit after his "retirement" from the priesthood.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="font-heading text-2xl text-foreground uppercase border-l-4 border-destructive pl-4">The 2026 Legal Reckoning: The New Lawsuit and Deposition</h3>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                The indictment of Martin and his protectors has entered a new phase with a lawsuit filed in New Jersey court (Case No. 950344/20 and others). This litigation involves a man and his two brothers who were targeted by Martin, mirroring the patterns seen in the Crawford case. A critical deposition is scheduled for 2026, which aims to break the "tight-lipped" silence of the administrators who oversaw Martin’s transfers.
                            </p>
                        </div>

                        <div className="mt-8 border border-border rounded-lg overflow-hidden bg-black/50">
                            <table className="w-full text-left font-body">
                                <thead>
                                    <tr className="bg-muted/50 border-b border-border">
                                        <th className="p-4 font-mono text-sm uppercase text-muted-foreground tracking-widest w-1/4">Figure</th>
                                        <th className="p-4 font-mono text-sm uppercase text-muted-foreground tracking-widest w-1/2">Role in the Martin/McCarrick Network</th>
                                        <th className="p-4 font-mono text-sm uppercase text-muted-foreground tracking-widest">Current Status (2026)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border text-foreground/80">
                                    <tr className="hover:bg-muted/20 transition-colors">
                                        <td className="p-4 font-mono text-sm font-bold text-foreground">Ken Martin</td>
                                        <td className="p-4 text-sm">Secretary to McCarrick; Serial Predator.</td>
                                        <td className="p-4 text-sm text-destructive">Sued in NJ; upcoming deposition regarding abuse of 3 brothers.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/20 transition-colors">
                                        <td className="p-4 font-mono text-sm font-bold text-foreground">Joseph Reilly</td>
                                        <td className="p-4 text-sm">1994 Secretary; oversaw 1995 whitewashing.</td>
                                        <td className="p-4 text-sm">President of Seton Hall; facing calls to resign over prior knowledge.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/20 transition-colors">
                                        <td className="p-4 font-mono text-sm font-bold text-foreground">Elias Lorenzo</td>
                                        <td className="p-4 text-sm">Expelled "Richard" Lorenzo; Benedictine laundering.</td>
                                        <td className="p-4 text-sm">Auxiliary Bishop of Newark; under fire for Delbarton cover-ups.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/20 transition-colors">
                                        <td className="p-4 font-mono text-sm font-bold text-foreground">James Checchio</td>
                                        <td className="p-4 text-sm">Metuchen manager of McCarrick legacy.</td>
                                        <td className="p-4 text-sm">Coadjutor Archbishop of New Orleans; managing $230M bankruptcy.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="space-y-6">
                            <h3 className="font-heading text-2xl text-foreground uppercase border-l-4 border-destructive pl-4">The Legal Shield: Scrivo, O’Toole, and the Political Matrix</h3>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                The survival of these creeps is due to a "legal wall" constructed by Thomas Scrivo and Kevin O'Toole. Their firm, O'Toole Scrivo, has served as the primary defense for the Newark Chancery, utilizing aggressive "risk management" to block the discovery of personnel records that would link Martin's crimes to the administrators who promoted him. This defense is bolstered by connections to figures like Chris Christie, who ensured that political oversight of the Church remained minimal while elite fixers managed the fallout.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="font-heading text-2xl text-foreground uppercase border-l-4 border-destructive pl-4">The Ruemmler-Epstein Nexus</h3>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                The integration of high-level fixers is further evidenced by Kathryn Ruemmler, who oversaw the 2018 review of McCarrick's harassment at Seton Hall's seminary. During this same period, she was in frequent communication with Jeffrey Epstein, who made multiple tuition payments to Seton Hall between 2017 and 2019. This intersection of global sex traffickers and ecclesiastical "reviews" highlights the extreme measures taken to protect the network of influence surrounding the Newark and Metuchen chanceries.
                            </p>
                        </div>

                        <div className="space-y-6 pt-6 border-t border-border">
                            <h3 className="font-heading text-2xl text-foreground uppercase text-destructive">Conclusion: A System of Organized Concealment</h3>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                The deep dive into Kenneth Martin reveals a priest whose entire career was an exercise in institutional laundering. From Bayonne to Wilmington to Newark, Martin was never "held accountable" by the Church; he was merely shuffled and protected. As the 2026 depositions approach, the question remains whether the survivors—led by the tireless advocacy of individuals like Mark Crawford—will finally force the "tight-lipped squad" to answer for their decades of organized concealment.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="flex justify-end mt-12 pt-8">
                    <Link href="/endgame/martin/crimes" asChild>
                        <Button size="lg" className="font-mono uppercase tracking-widest rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
                            Proceed to Section 02 <span className="ml-2">→</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </EndgameLayout>
    );
}
