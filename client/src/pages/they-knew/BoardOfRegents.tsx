import { PageHero } from "@/components/PageHero";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

export default function BoardOfRegents() {
    const regents = [
        {
            name: "Henry F. D'Alessandro",
            status: "Current Chairman",
            role: "Named Defendant in Nyre Lawsuit",
            details: "Succeeded Kevin Marino as Chairman. Named individually in the lawsuit filed by former President Joseph Nyre alleging retaliation and gaslighting."
        },
        {
            name: "Kevin H. Marino",
            status: "Former Chairman",
            role: "Architect of the Cover-up",
            details: "Stepped down amid the Nyre lawsuit, which detailed allegations of his own sexual harassment and subsequent manipulation of university records by his allies."
        },
        {
            name: "Mary Pat Christie",
            status: "Former Member",
            role: "Resigned July 2025",
            details: "Wife of former Governor Chris Christie. Served on the Board during the suppression of the Latham Report and the approval of Reilly's presidency."
        },
        {
            name: "Michael J. Lucciola",
            status: "Member",
            role: "Named Defendant",
            details: "Named individually in the Nyre lawsuit for participating in the hostile environment and retaliatory actions."
        },
        {
            name: "Anthony Masherelli",
            status: "Member",
            role: "Named Defendant",
            details: "Named individually in the Nyre lawsuit for participating in the hostile environment and retaliatory actions."
        },
        {
            name: "James Edward Collins",
            status: "Member",
            role: "Named Defendant",
            details: "Named individually in the Nyre lawsuit for participating in the hostile environment and retaliatory actions."
        },
        {
            name: "Edward Charles Cerny IV",
            status: "Member",
            role: "Named Defendant",
            details: "Named individually in the Nyre lawsuit for participating in the hostile environment and retaliatory actions."
        }
    ];

    return (
        <div className="space-y-12 pb-24">
            <PageHero
                title="BOARD OF REGENTS"
                subtitle="The operational oversight that looked the other way."
            />
            <div className="container max-w-5xl mx-auto px-6 space-y-12 pt-8">

                <div className="prose prose-invert max-w-none">
                    <p className="text-xl leading-relaxed text-muted-foreground font-light font-serif">
                        The Board of Regents, tasked with the operational and fiduciary oversight of the university, actively participated in the suppression of the 2019 Latham Report. It was this body that ignored the internal task force's recommendations and voted to install Joseph Reilly as President despite known Title IX violations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {regents.map((regent, i) => (
                        <Card key={i} className="bg-card/50 border-border/50 hover:bg-card/80 transition-colors">
                            <CardHeader className="border-b border-border/50 pb-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="font-serif text-xl text-primary">{regent.name}</CardTitle>
                                        <Badge variant="outline" className="mt-2 text-xs font-mono">{regent.status}</Badge>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-4 space-y-4">
                                <div className="space-y-1">
                                    <div className="text-xs text-destructive uppercase tracking-wider font-mono flex items-center gap-2">
                                        <AlertTriangle className="w-3 h-3" />
                                        {regent.role}
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                                        {regent.details}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
