import { PageHero } from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { BookX, Crown } from "lucide-react";

export default function BoardOfTrustees() {
    return (
        <div className="space-y-12 pb-24">
            <PageHero
                title="BOARD OF TRUSTEES"
                subtitle="The ultimate ecclesiastic authority."
                imageSrc="/assets/catholic/cathedral-interior-dark.jpg"
            />
            <div className="container max-w-4xl mx-auto px-6 space-y-12 pt-8">

                <div className="prose prose-invert max-w-none">
                    <p className="text-xl leading-relaxed text-muted-foreground font-light font-serif">
                        The Board of Trustees represents the absolute peak of the university's governance structure, primarily composed of the Roman Catholic Archdiocese of Newark's (RCAN) highest-ranking officials. The Board has the ultimate authority to hire and fire the university president.
                    </p>
                </div>

                <Card className="bg-card/50 border-border/50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                        <Crown className="w-32 h-32" />
                    </div>
                    <CardContent className="p-8 space-y-6 relative z-10">
                        <div className="space-y-2">
                            <h2 className="font-serif text-3xl font-bold text-primary">Cardinal Joseph W. Tobin</h2>
                            <div className="text-sm font-mono tracking-widest uppercase text-muted-foreground">
                                President of the Board of Trustees / Archbishop of Newark
                            </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-border/50">
                            <h3 className="font-mono text-destructive tracking-widest font-bold text-sm flex items-center gap-2">
                                <BookX className="w-4 h-4" />
                                THE TOBIN CONTRADICTION
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                As the President of the Board of Trustees, Cardinal Tobin holds absolute authority over Seton Hall University. Despite ordering a "comprehensive investigation" with "full cooperation" into the 2019 Latham Report via Ropes & Gray, his own university's counsel (Tom Scrivo) actively blocked witnesses from participating in that very investigation.
                            </p>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Former President Nyre publicly challenged this contradiction: "Either the Cardinal has been overruled by his own board, including the bishops who sit on it, or the openness he promised is being applied only when convenient."
                            </p>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-border/50">
                            <h3 className="font-mono text-primary tracking-widest font-bold text-sm">
                                ECCLESIASTIC SHIELDING
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                RCAN has routinely argued in court that it does not possess the highly sought-after records and that Seton Hall "is not part of" the archdiocese—a legal fiction designed to shield the Archdiocese from liability, despite Cardinal Tobin acting as the chair of the Board of Trustees.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
