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
          <div className="aspect-[2/1] relative w-full overflow-hidden">
             <img
                src="/assets/images/same-day-same-ring.png"
                alt="McCarrick and Bergoglio elevated by John Paul II on the same day"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
             <div className="absolute bottom-6 left-6 text-white font-cinzel text-shadow-blood">
                <span className="bg-[#8b1a1a] text-white text-[10px] uppercase tracking-[0.4em] px-3 py-1 font-mono mb-3 inline-block">Photographic Record</span>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-widest block">The Consistory of 2001</h2>
             </div>
          </div>
          <div className="bg-[#111116] p-6 border-t border-[#8b1a1a]/30">
             <p className="text-[#8b1a1a] font-bold text-2xl text-center font-cinzel uppercase tracking-[0.2em] mb-2">Same Day. Same Ring. Same Rank.</p>
             <p className="text-zinc-400 font-serif text-center max-w-3xl mx-auto italic text-sm">
                 Theodore McCarrick and Jorge Mario Bergoglio (Pope Francis) were both elevated to the College of Cardinals by Pope John Paul II during the exact same consistory on February 21, 2001.
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
