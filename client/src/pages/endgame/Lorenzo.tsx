import EndgameLayout from "@/components/EndgameLayout";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertTriangle, Eye, ShieldAlert } from "lucide-react";

export default function Lorenzo() {
    return (
        <EndgameLayout>
            <div className="space-y-16 animate-in fade-in duration-1000">

                {/* Hero Section */}
                <section className="relative border-b border-border pb-16">
                    <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                        <ShieldAlert className="w-96 h-96 text-destructive animate-pulse" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/30 text-destructive text-xs font-mono uppercase tracking-widest">
                                <AlertTriangle className="w-3 h-3" />
                                The Rehabilitated
                            </div>
                            <h1 className="font-heading text-6xl md:text-7xl text-foreground leading-none">
                                The Rehabilitated: <br />
                                <span className="text-destructive">Elias Lorenzo</span>
                            </h1>
                            <p className="font-body text-xl text-muted-foreground leading-relaxed max-w-xl">
                                Born Richard Lorenzo. After being expelled from the Salesians for deviant conduct, he was "rehabilitated" by the Benedictines. Rather than facing consequences, he was rebranded and ultimately elevated to Auxiliary Bishop of Newark.
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
                                                alt="Elias Lorenzo Placeholder"
                                                className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                                <div className="font-mono text-xs text-destructive mb-2">STATUS: ACTIVE BISHOP</div>
                                                <h2 className="font-heading text-3xl text-white">Elias Lorenzo</h2>
                                                <p className="font-mono text-sm text-gray-400 mt-2">Auxiliary Bishop of Newark</p>
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
                                    <DialogTitle className="font-heading text-2xl text-destructive">Elias Lorenzo</DialogTitle>
                                </DialogHeader>
                                <div className="relative aspect-auto max-h-[80vh] w-full overflow-hidden rounded-md">
                                    <img
                                        src="/assets/Unholy.png"
                                        alt="Elias Lorenzo"
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
                            <ShieldAlert className="w-6 h-6 text-destructive" />
                            The Pipeline of Promotion
                        </h2>
                        <div className="h-px flex-1 bg-border" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-card border border-border p-8 rounded-lg space-y-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-heading text-2xl text-destructive">Expulsion and Rebranding</h3>
                                    <Badge variant="outline" className="text-destructive border-destructive/50 bg-destructive/10 font-mono">1980s</Badge>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">The Salesian Expulsion</h4>
                                    <p className="font-body text-lg">Richard Lorenzo was expelled from the Salesian order due to deviant conduct.</p>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">The Benedictine Rehabilitation</h4>
                                    <p className="font-body text-muted-foreground leading-relaxed">
                                        A key component of the network's strategy is the "rehabilitation" of compromised individuals. Instead of being completely removed from the priesthood, Lorenzo was taken in by the Benedictines, renamed "Elias," and allowed to continue his rise through the ranks.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-card border border-border p-8 rounded-lg space-y-6">
                                <h3 className="font-heading text-2xl text-foreground">Current Elevation</h3>
                                <div className="space-y-6 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-border">
                                    <div className="relative pl-8">
                                        <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-border border-4 border-background" />
                                        <h4 className="font-mono text-sm text-destructive mb-1">Pre-1980s</h4>
                                        <p className="font-body text-muted-foreground">Active as Richard Lorenzo in the Salesian order; later expelled for deviant conduct.</p>
                                    </div>
                                    <div className="relative pl-8">
                                        <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-border border-4 border-background" />
                                        <h4 className="font-mono text-sm text-destructive mb-1">Rehabilitation</h4>
                                        <p className="font-body text-muted-foreground">Joins the Benedictines. Repackaged as Elias Lorenzo.</p>
                                    </div>
                                    <div className="relative pl-8">
                                        <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-destructive border-4 border-background animate-pulse" />
                                        <h4 className="font-mono text-sm text-destructive mb-1">2020</h4>
                                        <p className="font-body text-foreground font-bold">Appointed Auxiliary Bishop of Newark by Pope Francis, serving alongside the McCarrick network.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-destructive/5 border border-destructive/20 p-6 rounded-lg">
                                <h3 className="font-heading text-xl text-destructive mb-4">The Matrix: Institutional Protectionism</h3>
                                <p className="font-body text-muted-foreground text-sm mb-4">
                                    The matrix protects its own by shuffling predators from one order or diocese to another, hiding their past behind new names or roles, and leaning on fixers and powerful legal shields to silence victims.
                                </p>
                                <ul className="space-y-3 font-mono text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-destructive">•</span>
                                        Expulsion ignored by wider Church
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-destructive">•</span>
                                        Benedictine complicity
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-destructive">•</span>
                                        Newark Archdiocese promotion
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
