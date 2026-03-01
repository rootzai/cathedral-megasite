import { PageHero } from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { BookX, ShieldAlert } from "lucide-react";

export default function TheyKnewHome() {
    return (
        <div className="space-y-12 pb-24">
            <PageHero
                title="THEY KNEW"
                subtitle="The architects of institutional complicity."
                imageSrc="/assets/catholic/cathedral-interior-dark.jpg"
            />

            <div className="container max-w-5xl mx-auto px-6 space-y-12 pt-8">
                <div className="prose prose-invert max-w-none">
                    <p className="text-xl leading-relaxed text-muted-foreground font-light font-serif">
                        A comprehensive investigation into the deliberate concealment of abuse and the orchestrated cover-up by the institutional leadership, spanning the Boards of Trustees, Regents, Visitors, and the legal architects who enabled them.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-card/50 border-border/50">
                        <CardContent className="p-6 space-y-4">
                            <ShieldAlert className="w-8 h-8 text-destructive" />
                            <h3 className="font-mono text-lg font-bold tracking-widest text-primary">THE COMPLICITY NETWORK</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                These interlocking boards created a fortified structure designed to protect the institution above all else. Power was concentrated among loyalists who prioritized risk mitigation over truth.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-card/50 border-border/50">
                        <CardContent className="p-6 space-y-4">
                            <BookX className="w-8 h-8 text-destructive" />
                            <h3 className="font-mono text-lg font-bold tracking-widest text-primary">THE BURIED REPORT</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                The 2019 Latham & Watkins investigation was systematically suppressed. Its findings, devastating to the current leadership pipeline, were hidden behind claims of attorney-client privilege.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
