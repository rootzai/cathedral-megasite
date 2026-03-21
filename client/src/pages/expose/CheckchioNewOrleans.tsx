import { JourneyNav } from "@/components/JourneyNav";
import { ArrowRight, Landmark, MapPin } from "lucide-react";

export default function CheckchioNewOrleans() {
  return (
    <div className="page-enter max-w-5xl mx-auto px-6 py-12 space-y-20">

      {/* Investigative Header */}
      <header className="mb-16 border-b-2 border-gold/30 pb-12">
        <div className="exhibit-label mb-4 uppercase tracking-[0.2em] font-mono text-xs text-gold">The Succession · Special Report</div>
        <h1 className="text-6xl font-black mb-6 leading-[0.9] tracking-tighter uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
          The Musical <br />
          <span className="text-gold italic">Chairs</span>
        </h1>
        <p className="text-2xl font-serif italic text-muted-foreground leading-relaxed max-w-3xl">
          From Seton Hall Regent to the Archdiocese of New Orleans—how the hierarchy relocates the problem days before the truth is scheduled to arrive.
        </p>
      </header>

      {/* Narrative Section: The New Orleans Transfer */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-12 prose-investigative max-w-none">
          <h2 className="section-heading mb-12">The Calculus of Relocation</h2>

          <div className="columns-1 md:columns-2 gap-12 space-y-8 text-lg leading-relaxed text-muted-foreground font-serif">
            <p className="first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-foreground">
              J
              ames Checchio was more than a bishop; he was a Regent. He sat on the
              Seton Hall Board during the most consequential period in its modern
              history. He was in the room on August 27, 2019, when the Latham Report
              findings were read. He was present when the formal removal letters for
              Joseph Reilly were received—and ignored.
            </p>

            <p>
              On February 11, 2026—as the 24,000-page Latham Report was finally being
              produced under New Jersey court order—the "Musical Chairs" mechanism was
              activated. James Checchio was officially installed as the Archbishop
              of New Orleans. The timing was surgical.
            </p>

            <blockquote className="border-l-4 border-gold pl-8 py-4 my-10 bg-gold/5 not-italic text-foreground">
              <p className="text-2xl font-bold leading-tight mb-4">
                "The transfer is not a coincidence. It is the network's self-preservation
                mechanism—moving the problem before accountability can arrive."
              </p>
              <footer className="font-mono text-xs uppercase tracking-widest opacity-60">
                — Forensic Finding
              </footer>
            </blockquote>

            <p>
              By moving Checchio to Louisiana, the hierarchy achieved a dual victory:
              they removed a key Seton Hall regent from the immediate jurisdiction
              of the New Jersey courts, and they placed a veteran of the "Architecture
              of Silence" at the head of an Archdiocese that had just led the world into the first
              clerical bankruptcy of the 2020s.
            </p>
          </div>
        </div>
      </section>

      {/* Forensic Asset: The Relocation Map */}
      <section className="bg-zinc-50 p-12 rounded-sm border border-border shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

        <header className="mb-12 text-center">
          <h3 className="font-heading text-3xl mb-2">Relocation Path: NJ → LA</h3>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Jurisdictional Avoidance Dataset</p>
        </header>

        <div className="relative h-48 flex items-center justify-center mb-12">
          <div className="flex flex-col items-center">
            <Landmark className="w-12 h-12 text-gold mb-2" />
            <span className="font-mono text-[10px] uppercase text-gold">Seton Hall</span>
            <span className="text-sm font-bold">Newark, NJ</span>
          </div>
          <div className="flex-1 h-px bg-dashed border-t border-dashed border-gold/30 mx-8 relative">
            <ArrowRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-gold animate-pulse" />
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="w-12 h-12 text-zinc-800 mb-2" />
            <span className="font-mono text-[10px] uppercase text-zinc-800">The See</span>
            <span className="text-sm font-bold">New Orleans, LA</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="p-6 bg-white/5 border border-white/10 space-y-4">
            <h4 className="font-heading text-lg text-gold">Governance Record (NJ)</h4>
            <ul className="text-sm space-y-2 font-serif text-muted-foreground list-disc pl-4">
              <li>Voted to elect Joseph Reilly President (July 2024).</li>
              <li>Ignored Task Force removal recommendations (2019).</li>
              <li>Oversaw the sealing of the 24,000-page Latham Report.</li>
            </ul>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 space-y-4">
            <h4 className="font-heading text-lg text-zinc-800">Inherited Settlement (LA)</h4>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-xs font-mono uppercase tracking-widest">Base Payout</span>
                <span className="text-xs font-bold">$230 Million</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-xs font-mono uppercase tracking-widest">Survivors</span>
                <span className="text-xs font-bold">~600 Claims</span>
              </div>
              <p className="text-[10px] italic font-serif text-muted-foreground pt-2">
                Checchio stated he saw 'no reason' to investigate the prior administration's concealment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Final Connection */}
      <div className="evidence-box bg-gold/10 text-foreground p-12 rounded-none border-l-4 border-gold shadow-2xl">
        <div className="exhibit-label text-gold mb-4 uppercase tracking-[0.2em] font-mono text-xs">Conclusion · Relocation Strategy</div>
        <p className="text-2xl leading-relaxed italic mb-8 font-serif">
          "The architecture of silence does not collapse when it is transferred to a new
          jurisdiction. It relocates, and it grows."
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground font-serif max-w-2xl">
          The Checchio transfer is the textbook example of hierarchical self-preservation.
          As the investigation in New Jersey reaches the level of the Board of Regents,
          the key players are moved to different see cities, positioned behind the
          walls of new dioceses and the complexity of Chapter 11 proceedings.
          The silence remains unbroken; it simply changes zip codes.
        </p>
      </div>

      <JourneyNav />
    </div>
  );
}
