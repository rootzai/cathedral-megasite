import MemoryGate from "@/components/MemoryGate";
import EndgameLayout from "@/components/EndgameLayout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function TheLaunder() {
    return (<div className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <div className="relative overflow-hidden rounded-sm -mx-4 mb-4">
            <img src="/assets/images/sh_coverup_vault.png" alt="" className="w-full h-48 md:h-64 object-cover opacity-[0.10] select-none pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
            {/* ⌛ — The Launder. Time erases evidence; evidence erases time */}
            <div className="absolute top-3 right-3 text-white/[0.04] hover:text-white/20 text-5xl font-cinzel font-black select-all transition-colors duration-1000 cursor-default" aria-hidden="true">⌛</div>
        </div>
        <SectionHeader
            number="03"
            title="The Launder Record"
            subtitle="Career Timeline & Evasion"
        />

        <div className="bg-card border border-border p-8 rounded-lg space-y-6 max-w-4xl">
            <h3 className="font-heading text-2xl text-foreground">Timeline</h3>
            <div className="space-y-6 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-border">
                <div className="relative pl-8">
                    <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-border border-4 border-background" />
                    <h4 className="font-mono text-sm text-destructive mb-1">1983</h4>
                    <p className="font-body text-muted-foreground">Abuse reported by Mark Crawford to Newark Archdiocese. No action taken.</p>
                </div>
                <div className="relative pl-8">
                    <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-border border-4 border-background" />
                    <h4 className="font-mono text-sm text-destructive mb-1">1989</h4>
                    <p className="font-body text-muted-foreground">Ordained. Elevated to Personal Secretary for McCarrick.</p>
                </div>
                <div className="relative pl-8">
                    <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-border border-4 border-background" />
                    <h4 className="font-mono text-sm text-destructive mb-1">2001</h4>
                    <p className="font-body text-muted-foreground">Arrested for child sex abuse in the Diocese of Wilmington. Receives "probation before judgment".</p>
                </div>
                <div className="relative pl-8">
                    <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-destructive border-4 border-background animate-pulse" />
                    <h4 className="font-mono text-sm text-destructive mb-1">2008 & Beyond</h4>
                    <p className="font-body text-foreground font-bold">"Barred" by the Vatican, yet continues to receive cash payments from Wilmington until 2009 and works for Chicago Archdiocese entities.</p>
                </div>
            </div>
        </div>

        <MemoryGate registryId="person-martin" />
    </div>);
}
