import MemoryGate from "@/components/MemoryGate";
import EndgameLayout from "@/components/EndgameLayout";
import SectionHeader from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Crimes() {
    return (<div className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <div className="relative overflow-hidden rounded-sm -mx-4 mb-4">
            <img src="/assets/courtroom/courtroom_generic.jpg" alt="" className="w-full h-48 md:h-64 object-cover opacity-[0.10] select-none pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
            {/* ✝ — St. Andrew's Parish. 1977. The boys who were never believed */}
            <div className="absolute top-3 right-3 text-white/[0.04] hover:text-white/20 text-5xl font-cinzel font-black select-all transition-colors duration-1000 cursor-default" aria-hidden="true">✝</div>
        </div>
        <SectionHeader
            number="02"
            title="The Crawford Incident"
            subtitle="Abuse Prior to Ordination"
        />

        <div className="bg-card border border-border p-8 rounded-lg space-y-6 max-w-4xl">
            <div className="flex items-center justify-between">
                <h3 className="font-heading text-2xl text-destructive">St. Andrew's Parish</h3>
                <Badge variant="outline" className="text-destructive border-destructive/50 bg-destructive/10 font-mono">1977-1983</Badge>
            </div>

            <div className="space-y-4">
                <p className="font-body text-lg border-l-2 border-destructive/30 pl-4">Martin sexually abused Mark Crawford and his brothers.</p>
            </div>

            <div className="space-y-4">
                <h4 className="font-mono text-sm uppercase tracking-widest text-muted-foreground">The Cover-Up</h4>
                <p className="font-body text-muted-foreground leading-relaxed">
                    Mark Crawford reported the abuse directly to Newark archdiocesan officials in 1983 and specifically named Martin. Rather than removal, Martin was eventually ordained in 1989 and elevated to personal secretary for Theodore McCarrick, illustrating the system's deliberate protection of predators who proved useful down the line.
                </p>
            </div>
        </div>

        <MemoryGate registryId="person-martin" />
    </div>);
}
