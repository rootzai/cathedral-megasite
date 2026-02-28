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
                            <h2 className="font-heading text-4xl text-foreground uppercase">The Indictment: Institutional Protectionism and the McCarrick-Reilly Network</h2>
                            <p className="font-body text-xl text-muted-foreground leading-relaxed">
                                The ecclesiastical landscape of New Jersey and its extensions into Delaware and Louisiana represents a systemic failure of leadership and a calculated effort to harbor predators. At the core of this crisis are Father Kenneth Martin and a cadre of enablers who utilized the Catholic Church's hierarchy to groom families, abuse children, and silence whistleblowers. This network—comprising Ken Martin, Joseph Reilly, and James Checchio—is sustained by an outer ring of political and legal protectors like Thomas Scrivo and Kevin O'Toole, who have prioritized institutional stability over the safety of the vulnerable.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="font-heading text-3xl text-foreground uppercase border-l-4 border-destructive pl-4">Father Kenneth Martin: The Career of a Protected Predator</h2>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                Kenneth Martin's history as a priest is a study in how the "Newark system" laundered and promoted known abusers. Martin began his career not as a priest, but as a lay teacher at Loyola Blakefield High School in Towson, Maryland, in the 1970s. By the late 1970s, he had moved into the Archdiocese of Newark, where he was assigned to St. Andrew's Parish in Bayonne, New Jersey.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="font-heading text-2xl text-foreground uppercase text-destructive">The Bayonne Nexus and the Crawford Family</h3>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                It was at St. Andrew's that Martin's predatory behavior became a documented part of the archdiocesan record—decades before he was finally "barred" from ministry.
                            </p>
                            <ul className="space-y-4 font-body text-lg text-foreground/80">
                                <li><strong className="text-foreground">Abuse and Early Warnings:</strong> Between 1977 and 1983, Martin sexually abused Mark Crawford and his younger brother. Mark Crawford, who would later become the New Jersey coordinator for SNAP, first reported the abuse to a priest friend of Martin's, Father Bill Cramer, in 1981. Cramer—who was later removed for abusing two brothers himself—responded by simply avoiding Crawford.</li>
                                <li><strong className="text-foreground">The 1983 Denunciation:</strong> In 1983, Crawford took the courageous step of reporting Martin directly to Newark Auxiliary Bishop Jerome Pechillo. Instead of investigating the situation, Pechillo chastised Crawford for failing to address him as "His Excellency" and dismissed the trauma as "anger" over his father's recent death.</li>
                                <li><strong className="text-foreground">Shuffling to Promote:</strong> Despite these credible allegations, the system did not remove Martin. He continued working at St. Andrew's through 1984 before being shuffled between parishes. In 1989, he was officially ordained—a move that validated his protectors' support.</li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h3 className="font-heading text-2xl text-foreground uppercase text-destructive">The Secretarial Promotion and "Uncle Ted"</h3>
                            <p className="font-body text-lg text-foreground/80 leading-relaxed">
                                The most damning evidence of the system's corruption occurred in 1992. Rather than being laicized for the Bayonne abuse, Martin was promoted to serve as the personal secretary to Archbishop Theodore McCarrick. This role placed him at the nerve center of McCarrick's "nephew" grooming system, where the two shared a personal and professional bond of silence.
                            </p>
                        </div>

                        <div className="mt-8 border border-border rounded-lg overflow-hidden bg-black/50">
                            <table className="w-full text-left font-body">
                                <thead>
                                    <tr className="bg-muted/50 border-b border-border">
                                        <th className="p-4 font-mono text-sm uppercase text-muted-foreground tracking-widest w-1/4">Period</th>
                                        <th className="p-4 font-mono text-sm uppercase text-muted-foreground tracking-widest w-1/3">Assignment / Role</th>
                                        <th className="p-4 font-mono text-sm uppercase text-muted-foreground tracking-widest">Institutional Response</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border text-foreground/80">
                                    <tr className="hover:bg-muted/20 transition-colors">
                                        <td className="p-4 font-mono text-xs">1970s</td>
                                        <td className="p-4">Lay Teacher, Loyola Blakefield (MD)</td>
                                        <td className="p-4 text-sm">Early career established in the Baltimore-Wilmington axis.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/20 transition-colors">
                                        <td className="p-4 font-mono text-xs">1977–1984</td>
                                        <td className="p-4 text-destructive">St. Andrew's, Bayonne (NJ)</td>
                                        <td className="p-4 text-sm">Repeatedly reported for abuse; allegations dismissed by Bishop Pechillo.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/20 transition-colors">
                                        <td className="p-4 font-mono text-xs font-bold text-foreground">1992–1994</td>
                                        <td className="p-4 font-bold text-foreground hover:text-destructive transition-colors">Personal Secretary to McCarrick</td>
                                        <td className="p-4 text-sm font-bold">Promoted into the inner circle despite being a known offender.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/20 transition-colors">
                                        <td className="p-4 font-mono text-xs">1994–2001</td>
                                        <td className="p-4">Diocese of Wilmington (DE/MD)</td>
                                        <td className="p-4 text-sm">Transferred to Wilmington, Delaware, where his predatory behavior continued.</td>
                                    </tr>
                                    <tr className="hover:bg-muted/20 transition-colors bg-destructive/5">
                                        <td className="p-4 font-mono text-xs text-destructive">2001–2008</td>
                                        <td className="p-4 text-destructive font-bold">Arrest and "Probation"</td>
                                        <td className="p-4 text-sm text-destructive">Arrested in Wilmington for child sex abuse; Church fought to hide his files.</td>
                                    </tr>
                                </tbody>
                            </table>
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
