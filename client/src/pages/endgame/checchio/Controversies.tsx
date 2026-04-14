import MemoryGate from "@/components/MemoryGate";
import EndgameLayout from "@/components/EndgameLayout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Controversies() {
  return (<div className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-4">
    <div className="relative overflow-hidden rounded-sm -mx-4 mb-4">
      <img src="/assets/campus/seton_hall_campus.jpg" alt="" className="w-full h-48 md:h-64 object-cover opacity-[0.10] select-none pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      {/* ≠ — Not Lily White. The stain beneath the surface */}
      <div className="absolute top-3 right-3 text-white/[0.04] hover:text-white/20 text-5xl font-cinzel font-black select-all transition-colors duration-1000 cursor-default" aria-hidden="true">≠</div>
    </div>
    <SectionHeader
      number="06"
      title="Not 'Lily White'"
      subtitle="A Legacy Stained by Silence and Complicity"
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
      <div className="space-y-6 font-serif text-lg leading-relaxed">
        <p>
          While Checchio has not been directly accused of abuse, his career is defined by "associational" controversies and a pattern of silence that has enabled abusers.
        </p>
        <ul className="list-disc pl-6 space-y-4 marker:text-destructive">
          <li>
            <strong>The Beach House Silence (1987–1990):</strong> Refused invitations but failed to report the grooming behavior he witnessed and heard about.
          </li>
          <li>
            <strong>The NAC Hosting (2013):</strong> Hosted McCarrick during the conclave despite widespread rumors.
          </li>
          <li>
            <strong>Metuchen Settlements:</strong> Delayed disclosure of $180K in settlements regarding adult misconduct in the Diocese of Metuchen.
          </li>
          <li>
            <strong>The Reilly Protection:</strong> Instrumental in the task force override that saved Msgr. Reilly's career.
          </li>
        </ul>
      </div>

      <div className="space-y-6">
        <div className="bg-card border border-border p-6">
          <h4 className="font-mono font-bold uppercase text-sm mb-4 border-b border-border pb-2">Public Perception</h4>
          <div className="space-y-4 font-mono text-xs">
            <div className="p-3 bg-secondary/50 border-l-2 border-destructive">
              <p className="italic">"A cover-up enabler."</p>
              <p className="text-muted-foreground mt-1">— LifeSiteNews</p>
            </div>
            <div className="p-3 bg-secondary/50 border-l-2 border-destructive">
              <p className="italic">"Culpable silence."</p>
              <p className="text-muted-foreground mt-1">— BishopAccountability.org</p>
            </div>
            <div className="p-3 bg-secondary/50 border-l-2 border-destructive">
              <p className="italic">"Penn State enabler."</p>
              <p className="text-muted-foreground mt-1">— Substack Analysis (Sept. 2025)</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <MemoryGate registryId="person-mccarrick" />
  </div>);
}
