import EndgameLayout from "@/components/EndgameLayout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { LorenzoSectionNav } from "@/components/SectionNav";

export default function Elevation() {
    return (<div className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <SectionHeader
            number="04"
            title="The Elevation"
            subtitle="Auxiliary Bishop & The System"
        />

        <div className="space-y-8 max-w-4xl">
            <div className="bg-destructive/5 border border-destructive/20 p-6 rounded-lg">
                <h3 className="font-heading text-xl text-destructive mb-4">The Matrix: Institutional Protectionism</h3>
                <p className="font-body text-muted-foreground text-sm mb-4">
                    The matrix protects its own by shuffling predators from one order or diocese to another, hiding their past behind new names or roles, and leaning on fixers and powerful legal shields to silence victims.
                </p>
                <ul className="space-y-3 font-mono text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                        <span className="text-destructive">•</span>
                        Expulsion ignored by wider Church
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-destructive">•</span>
                        Benedictine complicity
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-destructive">•</span>
                        Newark Archdiocese promotion
                    </li>
                </ul>
            </div>

            <div className="bg-card border border-border p-6 rounded-lg mt-8">
                <h3 className="font-heading text-xl text-foreground mb-4">The Cardinal Tobin Era</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    Lorenzo's appointment to Auxiliary Bishop did not happen in a vacuum. It occurred under the tenure of Cardinal Joseph Tobin, demonstrating continuity of the Franchise's methodologies. Instead of cleansing the archdiocese, the current regime inherited and elevated figures with documented problematic pasts.
                </p>
            </div>
        </div>

        {/* New Mechanism Section */}
        <div className="mt-16 bg-zinc-100 border border-border p-8 rounded-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-destructive/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <h2 className="font-heading text-3xl mb-6 relative z-10">The Mechanism of Rebranding</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <div>
                    <h4 className="font-mono text-xs text-destructive mb-2 uppercase tracking-widest">The Wall Precedent</h4>
                    <p className="font-body text-muted-foreground">
                        Patric Wall, a former Benedictine monk and now a whistleblower, directly exposed the complicity of St. Mary's Abbey in protecting abusers. The Benedictine network's decision to "rehabilitate" Lorenzo is perfectly consistent with their broader strategy of housing and hiding disgraced clerics. This creates an environment of mutual blackmail, ensuring institutional loyalty over victim protection.
                    </p>
                </div>
                <div>
                    <h4 className="font-mono text-xs text-destructive mb-2 uppercase tracking-widest">Failure of the Dallas Charter</h4>
                    <p className="font-body text-muted-foreground">
                        Lorenzo's elevation to bishop in 2020 makes a mockery of the 2002 Dallas Charter promises of "zero tolerance." By ignoring pre-ordination history, the ecclesiastical system actively circumvents its own public reforms. A man expelled for deviances as a seminarian now oversees parishes and schools for the Archdiocese of Newark.
                    </p>
                </div>
            </div>
        </div>

        <MemoryGate registryId="person-mccarrick" />
    </div>);
}
