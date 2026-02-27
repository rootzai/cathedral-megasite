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
                                                src="/assets/images/martin_portrait.jpg"
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
                                        src="/assets/images/martin_portrait.jpg"
                                        alt="Father Kenneth Martin"
                                        className="h-full w-full object-contain object-top"
                                    />
                                </div>
                            </DialogContent>
                        </Dialog>
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
