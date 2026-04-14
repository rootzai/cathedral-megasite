import MemoryGate from "@/components/MemoryGate";
import EndgameLayout from "@/components/EndgameLayout";
import SectionHeader from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Expulsion() {
    return (<div className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <div className="relative overflow-hidden rounded-sm -mx-4 mb-4">
            <img src="/assets/figures/lorenzo_portrait.jpg" alt="" className="w-full h-48 md:h-64 object-cover opacity-[0.10] select-none pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
            {/* ⊘ — The Expelled. Removed, but never removed far enough */}
            <div className="absolute top-3 right-3 text-white/[0.04] hover:text-white/20 text-5xl font-cinzel font-black select-all transition-colors duration-1000 cursor-default" aria-hidden="true">⊘</div>
        </div>
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
                    At the time of his eviction, he was a seminarian alongside Mark Crawford. The mechanism of the ecclesiastical system at work was clear: expulsion merely relocated the issue rather than addressing it systemically.
                </p>
            </div>
        </div>

        <MemoryGate registryId="person-mccarrick" />
    </div>);
}
