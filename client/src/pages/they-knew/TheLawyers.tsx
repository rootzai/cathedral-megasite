import { PageHero } from "@/components/PageHero";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EyeOff, FileWarning, Scale } from "lucide-react";

export default function TheLawyers() {
    const lawyers = [
        {
            name: "Thomas P. Scrivo",
            firm: "O'Toole Scrivo, LLC",
            role: "Lead Outside Counsel for Seton Hall",
            crime: "The Document Destroyer",
            details: "Accused of orchestrating the physical concealment of the 2019 Latham Report to hide evidence of institutional complicity from abuse survivors. Currently suing the whistleblower (Dr. Nyre) for leaking the very document his firm claims is privileged.",
            connections: ["Chris Christie Admin", "Seton Hall Board of Visitors", "Kevin O'Toole"]
        },
        {
            name: "Angelo A. Stio III",
            firm: "Troutman Pepper",
            role: "Compliance Architect",
            crime: "The Eraser",
            details: "Allegedly coordinated the erasure of multiple Title IX complaints from Seton Hall's logbook and managed a shadow compliance channel to divert complaints away from the official process. Active participant in the retaliation campaign against Nyre.",
            connections: ["Seton Hall Triple-Alumnus", "Chris Porrino"]
        },
        {
            name: "Craig Carpenito",
            firm: "King & Spalding",
            role: "Board of Visitors Member",
            crime: "The Enforcer",
            details: "Former Christie personal defense attorney during Bridgegate. Represents the reinforcement of the Christie political network's control over Seton Hall's legal establishment.",
            connections: ["Chris Christie", "T.J. Scrivo"]
        },
        {
            name: "Joseph P. LaSala",
            firm: "McElroy, Deutsch, Mulvaney & Carpenter",
            role: "Former Task Force Chair",
            crime: "The Silent Watcher",
            details: "Chaired the internal task force that supposedly reviewed the Latham Report. Documented severe Title IX violations in writing, recommended Reilly's removal, but ultimately remained completely silent when his own board ignored his findings.",
            connections: ["Tom Scrivo", "Kevin Marino"]
        },
        {
            name: "Christopher S. Porrino",
            firm: "Lowenstein Sandler",
            role: "Personal Counsel to Kevin Marino",
            crime: "The Fixer",
            details: "Former Christie Attorney General, now operating as the personal defense shield for Kevin Marino, the Chairman who presided over the installation of the compromised President.",
            connections: ["Chris Christie", "Kevin Marino"]
        }
    ];

    const investigators = [
        {
            name: "Kathryn Ruemmler & Jonathan Su",
            firm: "Latham & Watkins",
            role: "The Original Investigators (2018-2019)",
            details: "Drafted the 20,000-page report documenting decades of abuse under McCarrick and Reilly's failure to investigate. The report was subsequently buried by Seton Hall."
        },
        {
            name: "Christine Amalfe & Peter Torcicollo",
            firm: "Gibbons P.C.",
            role: "Special Counsel (2018)",
            details: "Retained to oversee the review, maintaining two partners on the Board of Visitors while technically acting as 'independent' counsel."
        },
        {
            name: "Ropes & Gray",
            firm: "Ropes & Gray LLP",
            role: "The Second Investigators (2025)",
            details: "Hired by Cardinal Tobin to review the 2019 investigation. Seton Hall's outside counsel (Scrivo) actively blocked witnesses from speaking to them."
        }
    ];

    return (
        <div className="space-y-12 pb-24">
            <PageHero
                title="THE LAWYERS"
                subtitle="The architects of deceit and the weaponization of privilege."
            />
            <div className="container max-w-6xl mx-auto px-6 space-y-16 pt-8">

                {/* Intro */}
                <div className="prose prose-invert max-w-none">
                    <p className="text-xl leading-relaxed text-muted-foreground font-light font-serif">
                        The legal defense of Seton Hall University transitioned from legitimate advocacy into active institutional self-preservation. This network of elite New Jersey attorneys utilized claims of attorney-client privilege not to protect legitimate legal strategy, but to actively bury evidence of abuse and retaliate against whistleblowers.
                    </p>
                </div>

                {/* The Architects */}
                <div className="space-y-8">
                    <h2 className="text-2xl font-serif text-primary border-b border-border/50 pb-2 flex items-center gap-3">
                        <Scale className="w-6 h-6" />
                        The Architects of Deceit
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {lawyers.map((lawyer, i) => (
                            <Card key={i} className="bg-card/50 border-border/50 hover:bg-card/80 transition-colors flex flex-col">
                                <CardHeader className="border-b border-border/50 pb-4">
                                    <CardTitle className="font-serif text-xl text-primary">{lawyer.name}</CardTitle>
                                    <div className="text-sm font-mono text-muted-foreground mt-1">{lawyer.firm}</div>
                                    <Badge variant="outline" className="mt-3 bg-background">{lawyer.role}</Badge>
                                </CardHeader>
                                <CardContent className="pt-4 space-y-4 flex-1 flex flex-col">
                                    <div className="space-y-1">
                                        <div className="text-xs text-destructive uppercase tracking-wider font-mono flex items-center gap-2">
                                            <EyeOff className="w-3 h-3" />
                                            {lawyer.crime}
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                                            {lawyer.details}
                                        </p>
                                    </div>
                                    <div className="mt-auto pt-4 space-y-2 border-t border-border/50">
                                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-mono">Network Ties</div>
                                        <div className="flex flex-wrap gap-1">
                                            {lawyer.connections.map((conn, j) => (
                                                <Badge key={j} variant="secondary" className="text-[9px] bg-secondary/30">
                                                    {conn}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* The Investigators */}
                <div className="space-y-8">
                    <h2 className="text-2xl font-serif text-primary border-b border-border/50 pb-2 flex items-center gap-3 mt-12">
                        <FileWarning className="w-6 h-6" />
                        The Investigators
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {investigators.map((inv, i) => (
                            <Card key={i} className="bg-muted/10 border-border/30">
                                <CardHeader className="pb-2">
                                    <div className="text-sm font-mono text-primary uppercase tracking-wider">{inv.firm}</div>
                                    <CardTitle className="font-serif text-lg">{inv.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Badge className="bg-secondary/50 text-secondary-foreground hover:bg-secondary/50 mb-3">{inv.role}</Badge>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {inv.details}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
