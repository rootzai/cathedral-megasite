import EndgameLayout from "@/components/EndgameLayout";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertTriangle, Eye, Scale } from "lucide-react";

export default function Reilly() {
    return (
        <EndgameLayout>
            <div className="space-y-16 animate-in fade-in duration-1000">

                {/* Hero Section */}
                <section className="relative border-b border-border pb-16">
                    <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                        <Scale className="w-96 h-96 text-destructive animate-pulse" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/30 text-destructive text-xs font-mono uppercase tracking-widest">
                                <AlertTriangle className="w-3 h-3" />
                                The Face of Impunity
                            </div>
                            <h1 className="font-heading text-6xl md:text-7xl text-foreground leading-none">
                                The Setup: <br />
                                <span className="text-destructive">Joseph Reilly</span>
                            </h1>
                            <p className="font-body text-xl text-muted-foreground leading-relaxed max-w-xl">
                                Joseph Reilly was intimately tied to the 1995 Papal whitewashing efforts at Seton Hall's Seminary. Despite the devastating findings of the Latham Report, Reilly was shielded by the network's legal fixers and elevated to the Presidency of Seton Hall University.
                            </p>
                        </div>

                        <Dialog>
                            <DialogTrigger asChild>
                                <div className="relative group cursor-pointer perspective-1000">
                                    <div className="absolute inset-0 bg-destructive/20 blur-3xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
                                    <div className="relative transform transition-transform duration-700 group-hover:rotate-y-12 group-hover:scale-105">
                                        <div className="aspect-[4/5] bg-black border-2 border-destructive/50 overflow-hidden relative shadow-2xl shadow-destructive/20">
                                            <img
                                                src="/assets/figures/reilly_portrait.jpg"
                                                alt="Joseph Reilly"
                                                className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                                <div className="font-mono text-xs text-destructive mb-2">STATUS: SHU PRESIDENT</div>
                                                <h2 className="font-heading text-3xl text-white">Joseph Reilly</h2>
                                                <p className="font-mono text-sm text-gray-400 mt-2">President, Seton Hall University</p>
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
                                    <DialogTitle className="font-heading text-2xl text-destructive">Joseph Reilly</DialogTitle>
                                </DialogHeader>
                                <div className="relative aspect-auto max-h-[80vh] w-full overflow-hidden rounded-md">
                                    <img
                                        src="/assets/figures/reilly_portrait.jpg"
                                        alt="Joseph Reilly"
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
                            <Scale className="w-6 h-6 text-destructive" />
                            The Whitewash of 1995
                        </h2>
                        <div className="h-px flex-1 bg-border" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-card border border-border p-8 rounded-lg space-y-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-heading text-2xl text-destructive">The Papal Whitewash</h3>
                                    <Badge variant="outline" className="text-destructive border-destructive/50 bg-destructive/10 font-mono">1995</Badge>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">The Setup</h4>
                                    <p className="font-body text-lg">In October 1995, just before Pope John Paul II's visit to the US, McCarrick orchestrates a staged event at Seton Hall’s Immaculate Conception Seminary.</p>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">The Execution</h4>
                                    <p className="font-body text-muted-foreground leading-relaxed">
                                        This staging is led by Joseph Reilly under the directive to create an illusion of piety and order to mask the deep-rooted corruption. This "papal whitewashing" directly preceded the explosive Latham Report which exposed rampant sexual misconduct at the seminary.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-card border border-border p-8 rounded-lg space-y-6">
                                <h3 className="font-heading text-2xl text-foreground">The O'Toole Scrivo Shield</h3>
                                <div className="space-y-6">
                                    <p className="font-body text-muted-foreground leading-relaxed">
                                        O'Toole Scrivo LLC—headed by Kevin O’Toole and Tom Scrivo—served as the ultimate legal buffer. When the Latham Report threatened to dismantle the network, O'Toole Scrivo utilized their vast political leverage within New Jersey to block inquiries and bury the findings.
                                    </p>
                                    <p className="font-body text-muted-foreground leading-relaxed">
                                        Rather than facing discipline for his role in the 1995 cover-ups, Reilly was protected, insulated, and ultimately installed as the President of Seton Hall University—a physical monument to impunity.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-destructive/5 border border-destructive/20 p-6 rounded-lg">
                                <h3 className="font-heading text-xl text-destructive mb-4">The Matrix: Legal & Political Leverage</h3>
                                <p className="font-body text-muted-foreground text-sm mb-4">
                                    The intersection of Catholic leadership and New Jersey political power meant the law did not apply to them.
                                </p>
                                <ul className="space-y-3 font-mono text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-destructive">•</span>
                                        O'Toole Scrivo legal shielding
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-destructive">•</span>
                                        Suppression of the Latham Report
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-destructive">•</span>
                                        Elevation to SHU Presidency
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
