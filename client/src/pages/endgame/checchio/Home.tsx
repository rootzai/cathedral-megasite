import MemoryGate from "@/components/MemoryGate";
import EndgameLayout from "@/components/EndgameLayout";
import ImageModal from "@/components/ImageModal";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckchioSectionNav } from "@/components/SectionNav";

export default function Home() {
  return (<div className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-4">
    <SectionHeader
      number="01"
      title="The Musical Chairs"
      subtitle="The Institutional Fixer: Exporting the Newark Playbook to New Orleans"
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
      <div className="space-y-6 font-serif text-lg leading-relaxed">
        <p className="lead text-xl font-serif border-l-4 border-destructive pl-6 italic text-zinc-600">
          "The Catholic Church isn’t cleaning up its sex-abuse scandal. They are franchising it."
        </p>
        <p>
          In an explosive 2024 article titled **"Exporting the Cover-Up: How the Church is spreading New Jersey’s rot to New Orleans,"** Senator Joseph Vitale and Dei Journo identified Bishop James Checchio as a primary agent of institutional preservation.
        </p>
        <p>
          Known as a "steady hand," Checchio's move to New Orleans is not a reformist mission—it is a strategic export. As the article states, "Checchio knows exactly how they bury the truth in New Jersey because he was trained on how to hold the shovel."
        </p>
        <p>
          His role as an **Institutional Fixer** was cemented during his tenure on the Seton Hall task force, where he voted to elevate Joseph Reilly despite explicit findings of misconduct. He embodies the "Calculated Game of Musical Chairs" where those who protect the secrets are rewarded with the highest seats of power.
        </p>
      </div>

      <ImageModal
        src="/assets/images/checchio_portrait.jpg"
        alt="Bishop James Francis Checchio"
        title="Leo's Calculated Risk"
        caption="A Newark product for a New Orleans crisis. Bishop Checchio's career reflects institutional loyalty amid the McCarrick scandal."
      >
        <div className="relative h-[500px] w-full overflow-hidden border border-zinc-300 group cursor-zoom-in bg-zinc-950">
          <img
            src="/assets/images/checchio_portrait.jpg"
            alt="Bishop James Francis Checchio"
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000 grayscale active:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <h2 className="text-3xl font-display uppercase text-white tracking-widest mb-1">The Fixer</h2>
            <p className="text-sm text-zinc-400 italic">"He knows how to hold the shovel."</p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20">
            <span className="bg-white/70 text-zinc-900 text-xs font-mono px-2 py-1 uppercase tracking-widest">Click to Expand</span>
          </div>
        </div>
      </ImageModal>
    </div>

    <div className="space-y-8">
      <h3 className="font-display font-bold text-2xl border-b border-border pb-2">Key Findings</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border p-6 hover:border-destructive/50 transition-colors">
          <h4 className="font-mono text-destructive uppercase text-sm mb-2">The Pipeline</h4>
          <p className="text-sm text-muted-foreground">
            Ordained in 1992 by Bishop James McHugh, appointed NAC Rector by Benedict XVI, and consecrated Bishop by McCarrick himself. His career is inextricably linked to the disgraced network.
          </p>
        </div>
        <div className="bg-card border border-border p-6 hover:border-destructive/50 transition-colors">
          <h4 className="font-mono text-destructive uppercase text-sm mb-2">The Silence</h4>
          <p className="text-sm text-muted-foreground">
            Despite hearing rumors of abuse and rejecting beach house invitations as a seminarian, Checchio remained silent for decades, speaking out only after the scandal broke in 2018.
          </p>
        </div>
        <div className="bg-card border border-border p-6 hover:border-destructive/50 transition-colors">
          <h4 className="font-mono text-destructive uppercase text-sm mb-2">The Cover-up</h4>
          <p className="text-sm text-muted-foreground">
            As a member of the Seton Hall task force, he advocated for "nuance" to save Msgr. Joseph Reilly from removal, despite findings of Title IX violations.
          </p>
        </div>
      </div>
    </div>

    <MemoryGate registryId="person-mccarrick" />
  </div>);
}
