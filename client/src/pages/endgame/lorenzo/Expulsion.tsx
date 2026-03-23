import EndgameLayout from "@/components/EndgameLayout";
import SectionHeader from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Expulsion() {
    return (<div className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-4">
                <SectionHeader
                    number="02"
                    title="The Salesian Expulsion"
                    subtitle="Pre-1980s Track Record"
                />

                <div className="bg-card border border-border p-8 rounded-lg space-y-6 max-w-4xl">
                    <div className="flex items-center justify-between">
                        <h3 className="font-heading text-2xl text-destructive">Expulsion</h3>
                        <Badge variant="outline" className="text-destructive border-destructive/50 bg-destructive/10 font-mono">1980s</Badge>
                    </div>

                    <div className="space-y-4">
                        <p className="font-body text-lg border-l-2 border-destructive/30 pl-4">Richard Lorenzo was expelled from the Salesian order due to deviant conduct.</p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">The Early Pattern</h4>
                        <p className="font-body text-muted-foreground leading-relaxed">
                            At the time of his eviction, he was a seminarian alongside Mark Crawford. The mechanism of the ecclesiastical system at work was clear: expulsion merely relocated the issue rather than addressing it methodicalally.
                        </p>
                    </div>
                </div>

                <div className="flex justify-between mt-12 pt-8 border-t border-border">
                    <Link href="/endgame/lorenzo" asChild>
                        <Button variant="outline" className="font-mono uppercase tracking-widest rounded-none border-2">
                            <span className="mr-2">←</span> Previous
                        </Button>
                    </Link>
                    <Link href="/endgame/lorenzo/rehabilitation" asChild>
                        <Button size="lg" className="font-mono uppercase tracking-widest rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
                            Proceed to Section 03 <span className="ml-2">→</span>
                        </Button>
                    </Link>
                </div>
            </div>);
}
