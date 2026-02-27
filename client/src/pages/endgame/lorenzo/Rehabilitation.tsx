import EndgameLayout from "@/components/EndgameLayout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Rehabilitation() {
    return (
        <EndgameLayout>
            <div className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-4">
                <SectionHeader
                    number="03"
                    title="The Rehabilitation"
                    subtitle="Rebranding as 'Elias'"
                />

                <div className="bg-card border border-border p-8 rounded-lg space-y-6 max-w-4xl">
                    <h3 className="font-heading text-2xl text-foreground">Timeline</h3>
                    <div className="space-y-6 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-border">
                        <div className="relative pl-8">
                            <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-border border-4 border-background" />
                            <h4 className="font-mono text-sm text-destructive mb-1">Pre-1980s</h4>
                            <p className="font-body text-muted-foreground">Expelled from the Salesians for deviant conduct. At the time of his eviction, he was a seminarian alongside Mark Crawford.</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-border border-4 border-background" />
                            <h4 className="font-mono text-sm text-destructive mb-1">Rehabilitation</h4>
                            <p className="font-body text-muted-foreground">Joins the Benedictines. Repackaged as Elias Lorenzo.</p>
                        </div>
                        <div className="relative pl-8">
                            <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-destructive border-4 border-background animate-pulse" />
                            <h4 className="font-mono text-sm text-destructive mb-1">St. Mary's Abbey</h4>
                            <p className="font-body text-foreground font-bold">This "Benedictine rehabilitation" allowed Lorenzo to ascend through the hierarchy under the protection of St. Mary's Abbey in Morristown.</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-8 max-w-4xl">
                    <div className="bg-card border border-border p-8 rounded-lg space-y-6">
                        <div className="space-y-4">
                            <h4 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">The Benedictine Rehabilitation</h4>
                            <p className="font-body text-muted-foreground leading-relaxed">
                                Instead of being dismissed from religious life, "Richard" was rebranded as "Elias" and taken in by the Benedictines at St. Mary's Abbey in Morristown. This transition was part of a larger network of Benedictine silence that includes figures like Patric Wall, a former Benedictine who later became a whistleblower. The system's ability to take a man expelled for "deviant conduct" and transform him into a "Prince of the Church" highlights the absolute moral bankruptcy of the New Jersey ecclesiastical leadership.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between mt-12 pt-8 border-t border-border">
                    <Link href="/endgame/lorenzo/expulsion" asChild>
                        <Button variant="outline" className="font-mono uppercase tracking-widest rounded-none border-2">
                            <span className="mr-2">←</span> Previous
                        </Button>
                    </Link>
                    <Link href="/endgame/lorenzo/elevation" asChild>
                        <Button size="lg" className="font-mono uppercase tracking-widest rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
                            Proceed to Section 04 <span className="ml-2">→</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </EndgameLayout>
    );
}
