import EndgameLayout from "@/components/EndgameLayout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ThePopes() {
  return (
    <div className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-4">
      <SectionHeader
        number="EXHIBIT"
        title="McCarrick & The Popes"
        subtitle="Same Day. Same Ring. Same Rank."
      />

      {/* Hero Visual Comparison */}
      <div className="grid grid-cols-1 mb-8">
        <div className="relative w-full border border-[#8b1a1a]/30 overflow-hidden bg-black flex flex-col group">
          {/* We assume the user places the screenshot at this path */}
          <div className="aspect-[2/1] relative w-full overflow-hidden border-b-4 border-red-900 shadow-2xl">
             <img
                src="/assets/images/same-day-same-ring.png"
                alt="McCarrick and Bergoglio elevated by John Paul II on the same day"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[10s]"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
             <div className="absolute bottom-10 left-10 text-white font-cinzel text-shadow-blood">
                <span className="bg-red-600 text-white text-sm uppercase tracking-[0.5em] px-4 py-2 font-mono font-black mb-4 inline-block border-2 border-white shadow-2xl">FORENSIC PHOTOGRAPH</span>
                <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter block leading-none">THE CONSISTORY OF 2001</h2>
             </div>
          </div>
          <div className="bg-zinc-900 p-10 border-t border-red-900 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/10 blur-3xl pointer-events-none" />
             <p className="text-red-500 font-extrabold text-3xl text-center font-cinzel uppercase tracking-[0.3em] mb-4">SAME DAY. SAME RING. SAME RANK.</p>
             <p className="text-zinc-200 font-serif text-center max-w-4xl mx-auto italic text-xl leading-relaxed">
                 Theodore McCarrick and Jorge Mario Bergoglio (Pope Francis) were both elevated to the College of Cardinals by Pope John Paul II during the exact same consistory on February 21, 2001. Bound by the same generation of power.
             </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8">
        {/* Narrative Block 1 */}
        <div className="space-y-6">
           <div className="relative pl-8 border-l border-[#8b1a1a]/40">
             <div className="absolute -left-1.5 top-0 w-3 h-3 bg-[#8b1a1a] " />
             <h3 className="font-display font-black font-cinzel text-2xl mb-4 text-white uppercase tracking-widest">The Patronage Shield</h3>
             <p className="font-serif text-lg leading-relaxed text-zinc-300">
               McCarrick’s elevation to the cardinalate occurred despite profound, documented warnings submitted directly to the Vatican by Cardinal John O'Connor in 1999. The decision to grant McCarrick the red hat was not an oversight, but a calculated institutional gamble by Pope John Paul II, who prioritized McCarrick's prolific fundraising machinery (the Papal Foundation) and geopolitical utility over the safety of the vulnerable.
             </p>
             <p className="font-serif text-lg leading-relaxed text-zinc-300 mt-4">
               By being elevated on the exact same day as the man who would eventually become Pope Francis, McCarrick secured a peer-level relationship with the highest echelons of the future Catholic governance structure. 
             </p>
           </div>
        </div>

        {/* Narrative Block 2 */}
        <div className="space-y-6">
           <div className="relative pl-8 border-l border-[#8b1a1a]/40">
             <div className="absolute -left-1.5 top-0 w-3 h-3 bg-[#8b1a1a] " />
             <h3 className="font-display font-black font-cinzel text-2xl mb-4 text-white uppercase tracking-widest">Institutional Amnesia</h3>
             <p className="font-serif text-lg leading-relaxed text-zinc-300">
               When Pope Francis ascended to the papacy, he claimed initial ignorance regarding the severity of McCarrick's abuses. Yet, their mutual elevation in 2001 binds them to the same generational cohort of the College of Cardinals—a tight-knit fraternity where McCarrick's "open secret" was universally whispered.
             </p>
             <p className="font-serif text-lg leading-relaxed text-zinc-300 mt-4">
               The proximity of their ascent illustrates the profound depth of the "Architecture of Secrecy." The men who wear the rings swore to defend the Church with their blood, but in practice, the blood they shed belonged entirely to the victims they systematically ignored.
             </p>
           </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-16 pt-8 border-t border-border">
        <Link href="/ledger/mccarrick/network" asChild>
          <Button variant="outline" className="font-mono uppercase tracking-widest rounded-none border-2 text-zinc-400 hover:text-white border-white/10 hover:border-white transition-colors">
            <span className="mr-2">←</span> Return to Network
          </Button>
        </Link>
        <Link href="/ledger/mccarrick/warnings" asChild>
          <Button size="lg" className="bg-[#8b1a1a] text-white font-mono uppercase tracking-[0.2em] rounded-none hover:bg-white hover:text-black transition-all">
            Proceed to Warnings <span className="ml-2">→</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
