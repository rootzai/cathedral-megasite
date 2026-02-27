import EndgameLayout from "@/components/EndgameLayout";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertTriangle, Eye, Siren } from "lucide-react";

export default function Martin() {
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
                            <h1 className="font-heading text-6xl md:text-7xl text-foreground leading-none">
                                The Enforcer: <br />
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
                                                src="/assets/Unholy.png"
                                                alt="Ken Martin Placeholder"
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
                                        src="/assets/Unholy.png"
                                        alt="Ken Martin"
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </section>

                {/* Detailed Dossier Section */}
                <section className="space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="h-px flex-1 bg-border" />
                        <h2 className="font-heading text-3xl text-foreground flex items-center gap-2">
                            <AlertTriangle className="w-6 h-6 text-destructive" />
                            The Abuse & Launder Record
                        </h2>
                        <div className="h-px flex-1 bg-border" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-card border border-border p-8 rounded-lg space-y-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-heading text-2xl text-destructive">The Crawford Incident</h3>
                                    <Badge variant="outline" className="text-destructive border-destructive/50 bg-destructive/10 font-mono">PRIOR TO ORDINATION</Badge>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">St. Andrew's Parish (1977-1983)</h4>
                                    <p className="font-body text-lg">Martin sexually abused Mark Crawford and his brothers.</p>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">The Cover-Up</h4>
                                    <p className="font-body text-muted-foreground leading-relaxed">
                                        Mark Crawford reported the abuse directly to Newark archdiocesan officials in 1983 and specifically named Martin. Rather than removal, Martin was eventually ordained in 1989 and elevated to personal secretary for Theodore McCarrick, illustrating the system's deliberate protection of predators who proved useful down the line.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-card border border-border p-8 rounded-lg space-y-6">
                                <h3 className="font-heading text-2xl text-foreground">Career Timeline & Evasion</h3>
                                <div className="space-y-6 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-border">
                                    <div className="relative pl-8">
                                        <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-border border-4 border-background" />
                                        <h4 className="font-mono text-sm text-destructive mb-1">1983</h4>
                                        <p className="font-body text-muted-foreground">Abuse reported by Mark Crawford to Newark Archdiocese. No action taken.</p>
                                    </div>
                                    <div className="relative pl-8">
                                        <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-border border-4 border-background" />
                                        <h4 className="font-mono text-sm text-destructive mb-1">1989</h4>
                                        <p className="font-body text-muted-foreground">Ordained. Elevated to Personal Secretary for McCarrick.</p>
                                    </div>
                                    <div className="relative pl-8">
                                        <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-border border-4 border-background" />
                                        <h4 className="font-mono text-sm text-destructive mb-1">2001</h4>
                                        <p className="font-body text-muted-foreground">Arrested for child sex abuse in the Diocese of Wilmington. Receives "probation before judgment".</p>
                                    </div>
                                    <div className="relative pl-8">
                                        <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-destructive border-4 border-background animate-pulse" />
                                        <h4 className="font-mono text-sm text-destructive mb-1">2008 & Beyond</h4>
                                        <p className="font-body text-foreground font-bold">"Barred" by the Vatican, yet continues to receive cash payments from Wilmington until 2009 and works for Chicago Archdiocese entities.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-destructive/5 border border-destructive/20 p-6 rounded-lg">
                                <h3 className="font-heading text-xl text-destructive mb-4">The Matrix</h3>
                                <p className="font-body text-muted-foreground text-sm mb-4">
                                    This cycle of protection was facilitated by a network of "protectors" like the legal team at O'Toole Scrivo, whose partners like Kevin O'Toole and Thomas Scrivo have served as the ultimate legal shield for the Chancery, utilizing their political leverage to block the release of personnel files.
                                </p>
                                <ul className="space-y-3 font-mono text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-destructive">•</span>
                                        Newark Archdiocese (Origin)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-destructive">•</span>
                                        Metuchen/Newark (McCarrick era)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-destructive">•</span>
                                        Wilmington Diocese
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-destructive">•</span>
                                        Chicago Archdiocese
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </EndgameLayout>
    );
}
