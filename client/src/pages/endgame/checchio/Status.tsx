import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckchioSectionNav } from "@/components/SectionNav";

export default function Status() {
  return (<div className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-4">
    <SectionHeader
      number="07"
      title="The New Orleans Gamble"
      subtitle="November 2025: Importing the Newark Problem"
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
      <div className="space-y-6 font-serif text-lg leading-relaxed">
        <p>
          Ordained in 1992 by Bishop James McHugh, James Checchio was named Coadjutor Archbishop of New Orleans in September 2025 to handle a $230 million settlement and a complex bankruptcy process. He is set to succeed Archbishop Gregory Aymond in mid-2026.
        </p>
        <p>
          This promotion places him in charge of 1.1 million Catholics and over $500 million in assets, despite the cloud of the McCarrick scandal and his role in the Seton Hall cover-up.
        </p>
        <p>
          His testimony in the 2025 bankruptcy hearings followed the "tight-lipped squad's" established playbook: he expressed a commitment to prevention while stating he saw "no reason" to launch a cover-up investigation into his predecessor, Gregory Aymond.
        </p>
      </div>

      <div className="relative h-[400px] w-full overflow-hidden border border-destructive/30 group">
        <img
          src="/assets/images/checchio_portrait.jpg"
          alt="Bishop Checchio Portrait"
          className="absolute inset-0 w-full h-full object-cover opacity-90 animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
          <h2 className="text-3xl font-display uppercase text-zinc-900 text-shadow-blood mb-1">The Fixer</h2>
          <p className="text-sm text-gray-300 italic">"Can a Newark product clean up New Orleans?"</p>
        </div>
      </div>
    </div>

    {/* Article Spotlight */}
    <div className="bg-destructive/10 border border-destructive/30 p-8 rounded-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-destructive/5 rounded-full blur-3xl -mr-10 -mt-10" />
      <h3 className="font-heading text-3xl text-destructive mb-2 relative z-10">Exporting the Cover-Up</h3>
      <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6 relative z-10">
        Insights from Senator Joseph Vitale and a California-based whistleblower
      </p>
      <div className="space-y-4 font-body text-lg text-foreground/90 relative z-10">
        <p>
          By promoting Checchio to New Orleans, the Vatican is effectively "exporting New Jersey's rot" to a new jurisdiction. Rather than a fresh start for a troubled archdiocese, Checchio is being deployed as the <strong>"New Orleans Fixer."</strong>
        </p>
        <p>
          He brings with him the same methods of institutional protectionism and victim suppression perfected under McCarrick in Metuchen and Newark. The blueprint remains identical: utilize massive political leverage, employ aggressive legal shielding (such as the O'Toole Scrivo firm), and project a facade of reform while fiercely guarding the Franchisor network from legal discovery.
        </p>
      </div>
    </div>

    <div className="space-y-8 border-t border-border pt-8">
      <h3 className="font-display font-bold text-2xl">Viability Assessment</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-secondary/50 p-6 border border-destructive/20">
          <h4 className="font-mono text-destructive uppercase text-sm mb-4">Risk Factors</h4>
          <ul className="list-disc pl-6 space-y-2 font-mono text-xs">
            <li>Unsealing of Latham Report documents (Dec. 2025 appeal)</li>
            <li>Potential Ropes & Gray probe into task force conduct (Jan. 2026)</li>
            <li>Backlash from survivor groups (SNAP) in New Orleans</li>
          </ul>
        </div>
        <div className="bg-secondary/50 p-6 border border-destructive/20">
          <h4 className="font-mono text-destructive uppercase text-sm mb-4">Conclusion</h4>
          <p className="font-mono text-xs">
            Checchio embodies the "loyalty premium" of the McCarrick era. His survival and promotion depend on his ability to navigate the continued fallout of the scandal and the potential exposure of his role in the Seton Hall cover-up.
          </p>
          <p className="font-mono text-xs mt-4 font-bold">
            Viability Rating: 85–90% (High Risk)
          </p>
        </div>
      </div>
    </div>

    <CheckchioSectionNav currentHref="/ledger/checchio/status" />
  </div>);
}
