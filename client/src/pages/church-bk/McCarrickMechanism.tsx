import { JourneyNav } from "@/components/JourneyNav";
import { Briefcase, Landmark, Network, ShieldAlert, FileText } from "lucide-react";
import { Level3EvidenceStream } from "@/components/Level3EvidenceStream";


export default function McCarrickMechanism() {
  return (
    <div className="page-enter max-w-4xl mx-auto px-6 py-12 space-y-20">

      {/* Investigative Header */}
      <header className="mb-16 border-b-4 border-zinc-400 pb-12">
        <div className="exhibit-label text-zinc-800 mb-4">Special Investigation · The Cover-Up</div>
        <h1 className="text-6xl font-black mb-6 leading-[0.9] tracking-tighter uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
          The Billion-Dollar <br />
          <span className="text-zinc-800">Mechanism</span>
        </h1>
        <p className="text-2xl font-serif italic text-muted-foreground leading-relaxed">
          How Theodore McCarrick turned the American Church into a global fundraising engine—and bought decades of institutional silence with the proceeds.
        </p>
      </header>

      {/* The 2019 Catalyst (The Secret Meeting) */}
      <section className="bg-zinc-50 p-12 rounded-sm border-2 border-zinc-400/20 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-6 opacity-5">
          <Landmark className="w-32 h-32 text-zinc-800" />
        </div>

        <h2 className="text-3xl font-bold mb-8 text-zinc-800 uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>
          August 27, 2019: The Vault Closes
        </h2>

        <div className="prose-investigative text-lg leading-relaxed text-zinc-800 font-serif space-y-6">
          <p>
            The room was silent. Thirty-five members of the Seton Hall Board of Regents sat in
            executive session, listening to the findings of the Latham Report. It was a
            moment of existential reckoning. For hours, attorneys had read aloud the
            names of twelve priests—men who had enabled or concealed the predations
            of Theodore McCarrick for decades.
          </p>
          <p>
            Among them was the university’s own powerful seminary rector. The evidence
            was absolute. The crime was documented. But in that room, the
            conversation didn't turn to justice—it turned to management.
          </p>
          <div className="bg-zinc-800/10 border-l-4 border-zinc-400 p-8 my-10 italic">
            "We've been through difficult situations before. The key is unity and discretion. Trust me—I know how to manage these matters."
            <footer className="mt-4 font-mono text-xs uppercase tracking-widest opacity-60">— Kevin Marino, Board Chair</footer>
          </div>
          <p>
            That afternoon, the Board unanimously voted to accept a "Responsive Action Plan."
            It was a masterclass in tactical concealment. The twelve named priests were
            quietly removed, their names never released to the public. The 24,000-page
            Latham Report was placed in a "Secured Confidential Information Facility"—a
            vault meant to store the truth until it could be safely forgotten.
          </p>
        </div>
      </section>

      {/* The Financial Engine */}
      <section className="space-y-12">
        <h2 className="section-heading">The Kingmaker of Capital</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-serif text-lg leading-relaxed text-muted-foreground">
          <div className="space-y-6">
            <p>
              To understand why the vault was sealed, one must understand the money.
              Theodore McCarrick was not merely a prelate; he was the most prolific
              fundraiser in the modern history of the American Church. He constructed
              a "dual-pipeline" financial engine that made him indispensable to the
              Vatican and untouchable at home.
            </p>
            <p>
              The first pipeline was the **Government Spigot**. Under McCarrick’s
              influence, Catholic Charities USA was transformed into a
              quasi-governmental agency, securing over **$1 Billion annually** in
              federal and state grants. This stream of capital turned the Church
              into a primary contractor for social services, creating a level of
              institutional leverage that few politicians dared to challenge.
            </p>
          </div>
          <div className="space-y-6">
            <p>
              The second pipeline was the **Papal Foundation**. Co-founded by McCarrick
              in 1988, it served as an "off-books" slush fund for the Holy See.
              McCarrick personally recruited American billionaires, offering them
              exclusive access to the Pope in exchange for million-dollar endowments.
            </p>
            <p>
              He used his private "Archbishop’s Fund" to distribute cash gifts—forensic
              reports revealed over **$600,000** in checks written to high-ranking
              Vatican officials. He was "tipping" the curia with the proceeds of
              his fundraising, ensuring that when the rumors of his abuse surfaced,
              the hierarchy had half a million reasons to look the other way.
            </p>
          </div>
        </div>
      </section>

      {/* Forensic Breakdown */}
      <section className="bg-zinc-50 p-12 rounded-sm border border-gold/10 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>The Transactional Church</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The McCarrick Mechanism was a closed-loop system of financial and moral leverage.
            By centralizing the flow of billions, McCarrick ensured that any attack on
            his person was perceived as an attack on the Church's very survival.
          </p>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white border border-border shadow-sm flex flex-col justify-between aspect-square">
            <Landmark className="w-8 h-8 text-zinc-800 mb-4" />
            <div className="font-bold text-lg leading-tight mb-2">Government Grants</div>
            <p className="text-[10px] uppercase font-mono tracking-widest opacity-60">$1.2B / Year</p>
          </div>
          <div className="p-6 bg-white border border-border shadow-sm flex flex-col justify-between aspect-square">
            <Briefcase className="w-8 h-8 text-gold mb-4" />
            <div className="font-bold text-lg leading-tight mb-2">Papal Foundation</div>
            <p className="text-[10px] uppercase font-mono tracking-widest opacity-60">Private Slush Fund</p>

          </div>
          <div className="p-6 bg-white border border-border shadow-sm flex flex-col justify-between aspect-square border-l-4 border-l-blood">
            <Network className="w-8 h-8 text-zinc-800 mb-4" />
            <div className="font-bold text-lg leading-tight mb-2">Archbishop's Fund</div>
            <p className="text-[10px] uppercase font-mono tracking-widest opacity-60">Leverage & Tips</p>
          </div>
        </div>
      </section>

      <div className="evidence-box bg-zinc-800 text-parchment p-12 rounded-none shadow-2xl">
        <div className="exhibit-label text-zinc-900/60 mb-4 uppercase tracking-[0.2em] font-mono text-xs">Closing Statement · The Mechanism</div>
        <p className="text-2xl leading-relaxed italic mb-6 font-serif">
          "The fundraising was the shield. The money didn't just buy influence; it bought immunity."
        </p>
        <p className="text-sm leading-relaxed opacity-80 font-serif">
          The 2019 meeting was the moment the mechanism went into a defensive posture. By sealing the
          Latham Report, the Regents weren't just protecting twelve priests; they were protecting the
          billion-dollar pipelines that those priests managed. To admit to the mechanism was to admit
          that the Church’s survival was predicated on the silence of its victims.
        </p>
      </div>

      <div className="bg-zinc-900 border border-gold/20 p-8 my-16 shadow-3xl">
        <div className="flex items-center gap-3 mb-6 text-gold">
          <ShieldAlert className="w-6 h-6" />
          <h3 className="uppercase tracking-[0.3em] font-bold text-sm">Forensic Data Stream // Section IV: The Papal Foundation Slush Fund</h3>
        </div>
        <Level3EvidenceStream />
        <p className="mt-6 text-xs text-zinc-500 font-mono leading-relaxed text-center">
          METRIC: Individual $2,500 "gratuity" checks identified in unredacted Vatican Report Annex. <br />
          TOTAL TRACED: $628,400 directed to officials overseeing the Congregation for Bishops.
        </p>
      </div>

      <JourneyNav />
    </div>
  );
}
