import { PageHero } from "@/components/PageHero";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Network, Scale, ShieldAlert, Users } from "lucide-react";

export default function BoardOfVisitors() {
    const members = [
        {
            name: "Tom Scrivo",
            role: "Immediate Past Chair",
            firm: "O'Toole Scrivo, LLC",
            connections: ["Chris Christie (Former Chief Counsel)", "Joseph LaSala (Former Colleague)", "Kevin O'Toole (Partner)"],
            description: "Lead counsel defending Seton Hall in the abuse litigation. Blocked witnesses from participating in Cardinal Tobin's investigation.",
        },
        {
            name: "Joseph P. LaSala",
            role: "Former Chair",
            firm: "McElroy, Deutsch, Mulvaney & Carpenter, LLP",
            connections: ["Tom Scrivo (Former Colleague)", "Kevin Marino (Former Colleague)"],
            description: "Chaired the task force that reviewed the Latham Report. Documented Title IX violations but remained silent when those recommendations were ignored.",
        },
        {
            name: "Kevin H. Marino",
            role: "Member",
            firm: "Marino, Tortorella & Boyle, P.C.",
            connections: ["Joseph LaSala (Former Colleague)"],
            description: "As Chairman of the Board of Regents, presided over the body that approved Reilly as president despite the Latham Report findings. Resigned amid controversy.",
        },
        {
            name: "Craig Carpenito",
            role: "Member",
            firm: "King & Spalding",
            connections: ["Chris Christie (AUSA, Defended in Bridgegate)", "T.J. Scrivo (Colleague)"],
            description: "Christie ally reinforcing the network's control over Seton Hall's legal establishment.",
        },
        {
            name: "Christopher S. Porrino",
            role: "Member",
            firm: "Lowenstein Sandler LLP",
            connections: ["Chris Christie (Former AG)", "Tom Scrivo (Ally)"],
            description: "Part of the inner circle 'legal mafia' on the Board of Visitors.",
        },
        {
            name: "Chris Christie",
            role: "Member",
            firm: "Former Governor of New Jersey",
            connections: ["Tom Scrivo (Appointed Chief Counsel)", "Craig Carpenito", "Christopher Porrino"],
            description: "His wife sat on the Board of Regents that approved Reilly as president.",
        }
    ];

    return (
        <div className="space-y-12 pb-24">
            <PageHero
                title="BOARD OF VISITORS"
                subtitle="The advisory network of New Jersey's legal and political elite."
                imageSrc="/assets/sodom-hall-logo.png"
            />
            <div className="container max-w-5xl mx-auto px-6 space-y-12 pt-8">

                <div className="prose prose-invert max-w-none">
                    <p className="text-xl leading-relaxed text-muted-foreground font-light font-serif">
                        The Seton Hall Law Board of Visitors is not merely an advisory body—it is a concentration of New Jersey's legal and political elite, bound together by overlapping professional relationships, shared institutional loyalty, and mutual self-interest.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {members.map((member, i) => (
                        <Card key={i} className="bg-card/50 border-border/50 hover:bg-card/80 transition-colors">
                            <CardHeader className="border-b border-border/50 pb-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="font-serif text-xl text-primary">{member.name}</CardTitle>
                                        <p className="text-xs font-mono text-muted-foreground mt-1 uppercase tracking-wider">{member.role}</p>
                                    </div>
                                    <Scale className="w-5 h-5 text-muted-foreground" />
                                </div>
                            </CardHeader>
                            <CardContent className="pt-4 space-y-4">
                                <div className="space-y-1">
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-mono">Firm</div>
                                    <div className="text-sm font-medium">{member.firm}</div>
                                </div>

                                <div className="space-y-2">
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-mono flex items-center gap-2">
                                        <Network className="w-3 h-3" />
                                        Key Connections
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {member.connections.map((conn, j) => (
                                            <Badge key={j} variant="secondary" className="text-[10px] bg-secondary/50">
                                                {conn}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-1 pt-2 border-t border-border/50">
                                    <div className="text-xs text-destructive uppercase tracking-wider font-mono flex items-center gap-2">
                                        <ShieldAlert className="w-3 h-3" />
                                        Role in Scandal
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {member.description}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 p-6 border border-border/50 bg-muted/10 rounded-lg">
                    <h3 className="font-mono text-lg font-bold tracking-widest text-primary mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-destructive" />
                        INSTITUTIONAL CAPTURE
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        The Board of Visitors is not an independent oversight body. It is a self-reinforcing network of Seton Hall Law alumni, Christie administration veterans, and former colleagues from the same law firms. When the Latham Report found evidence of abuse cover-ups, this network did not act to protect victims. It acted to protect itself.
                    </p>
                </div>
            </div>
        </div>
    );
}
