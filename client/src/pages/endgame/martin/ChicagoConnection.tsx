import EndgameLayout from "@/components/EndgameLayout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MartinSectionNav } from "@/components/SectionNav";

export default function ChicagoConnection() {
    return (<div className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <SectionHeader
            number="04"
            title="The Extortion Parallel"
            subtitle="Chicago & The Mechanism of Complicity"
        />

        <div className="space-y-8 max-w-4xl">
            <div className="bg-destructive/5 border border-destructive/20 p-6 rounded-lg">
                <h3 className="font-heading text-xl text-destructive mb-4">The Matrix</h3>
                <p className="font-body text-muted-foreground text-sm mb-4">
                    This cycle of protection was facilitated by a network of "protectors" like the legal team at O'Toole Scrivo, whose partners like Kevin O'Toole and Thomas Scrivo have served as the ultimate legal shield for the Chancery, utilizing their political leverage to block the release of personnel files.
                </p>
                <ul className="space-y-3 font-mono text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                        <span className="text-destructive">•</span>
                        Newark Archdiocese (Origin)
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-destructive">•</span>
                        Metuchen/Newark (McCarrick era)
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-destructive">•</span>
                        Wilmington Diocese
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-destructive">•</span>
                        Chicago Archdiocese
                    </li>
                </ul>
            </div>

            <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="font-heading text-xl text-foreground mb-4">The Extortion Parallel</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    Martin's ability to maintain a flow of cash from the ecclesiastical network long after he was technically barred from ministry mirrors the leverage held by other insiders. Like others who knew too much about the "Franchise" operations, Martin's silence was purchased. His deployment to the Chicago Archdiocese demonstrates that the rot isn't confined to New Jersey; it is a national franchise of protection.
                </p>
            </div>
        </div>

        <div className="mt-16 bg-zinc-100 border border-border p-8 rounded-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-destructive/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <h2 className="font-heading text-3xl mb-6 relative z-10">The Mechanism of Complicity</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <div>
                    <h4 className="font-mono text-xs text-destructive mb-2 uppercase tracking-widest">The "Open Secret"</h4>
                    <p className="font-body text-muted-foreground text-sm">
                        Martin's presence as McCarrick's secretary wasn't an accident. A compromised subordinate is a loyal subordinate. By promoting a known predator, the hierarchy ensured unswerving loyalty. Martin could not blow the whistle on the beach house trips or the "nephew" grooming system because his own position relied entirely on the suppression of the 1983 Crawford reports.
                    </p>
                </div>
                <div>
                    <h4 className="font-mono text-xs text-destructive mb-2 uppercase tracking-widest">The Chicago Connection</h4>
                    <p className="font-body text-muted-foreground text-sm">
                        The Franchise protects its own across state lines. The fact that a barred priest who admitted to abuse could find employment in Chicago entities highlights the failure of the Dallas Charter. The same network of canon lawyers, PR firms, and political fixers that protected him in Newark ensured his soft landing in the Midwest.
                    </p>
                </div>
            </div>
        </div>

        <MemoryGate registryId="person-martin" />
    </div>);
}
