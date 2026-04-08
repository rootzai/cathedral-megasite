import EndgameLayout from "@/components/EndgameLayout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Mechanisms() {
  return (<div className="space-y-8 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <SectionHeader 
          number="08" 
          title="Mechanisms of Abuse" 
          subtitle="Enabling Abuse and Institutional Protection"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <div className="bg-zinc-900 border-2 border-red-900 p-10 hover:border-red-600 transition-all duration-500 group shadow-2xl relative overflow-hidden">
            <div className="absolute -top-4 -right-4 text-9xl font-mono font-black text-red-900/10 pointer-events-none group-hover:text-red-900/20 transition-colors">01</div>
            <div className="font-mono text-5xl font-black text-red-600 mb-6 group-hover:scale-110 transition-transform origin-left">01</div>
            <h3 className="font-cinzel font-black text-2xl mb-4 uppercase tracking-widest text-white">Clericalism</h3>
            <p className="font-serif text-lg leading-relaxed text-zinc-300 group-hover:text-white transition-colors">
              An systemic elevation of the clergy that places priests and bishops above criticism. This culture silenced victims and forced the laity to defer to "holy authority" over forensic truth.
            </p>
          </div>

          <div className="bg-zinc-900 border-2 border-red-900 p-10 hover:border-red-600 transition-all duration-500 group shadow-2xl relative overflow-hidden">
            <div className="absolute -top-4 -right-4 text-9xl font-mono font-black text-red-900/10 pointer-events-none group-hover:text-red-900/20 transition-colors">02</div>
            <div className="font-mono text-5xl font-black text-red-600 mb-6 group-hover:scale-110 transition-transform origin-left">02</div>
            <h3 className="font-cinzel font-black text-2xl mb-4 uppercase tracking-widest text-white">Power Dynamics</h3>
            <p className="font-serif text-lg leading-relaxed text-zinc-300 group-hover:text-white transition-colors">
              McCarrick used the episcopal office to coerce seminarians. He held the keys to their careers, making true consent impossible in a system built on total apostolic obedience.
            </p>
          </div>

          <div className="bg-zinc-900 border-2 border-red-900 p-10 hover:border-red-600 transition-all duration-500 group shadow-2xl relative overflow-hidden">
            <div className="absolute -top-4 -right-4 text-9xl font-mono font-black text-red-900/10 pointer-events-none group-hover:text-red-900/20 transition-colors">03</div>
            <div className="font-mono text-5xl font-black text-red-600 mb-6 group-hover:scale-110 transition-transform origin-left">03</div>
            <h3 className="font-cinzel font-black text-2xl mb-4 uppercase tracking-widest text-white">Grooming</h3>
            <p className="font-serif text-lg leading-relaxed text-zinc-300 group-hover:text-white transition-colors">
              The "Uncle Ted" persona was a strategic grooming mechanism. By feigning paternal affection and offering exclusive access, he systematically desensitized victims to predatory boundary-crossing.
            </p>
          </div>
        </div>
        </div>

        <div className="space-y-8 font-serif text-lg leading-relaxed border-t border-border pt-8">
          <h3 className="font-display font-bold text-2xl uppercase">Lack of Accountability for Bishops</h3>
          <p>
            Before 2018, the Church's procedures for handling abuse allegations (like the Dallas Charter) largely exempted bishops. There was no clear mechanism for investigating a bishop accused of abuse or negligence.
          </p>
          <p>
            Bishops were effectively "sovereign" in their dioceses, answerable only to the Pope. This created a system where peer correction was non-existent, and the Vatican was too distant and bureaucratic to intervene effectively without overwhelming evidence.
          </p>
        </div>

        <div className="flex justify-between mt-12 pt-8 border-t border-border">
          <Link href="/ledger/mccarrick/seton-hall" asChild>
            <Button variant="outline" className="font-mono uppercase tracking-widest rounded-none border-2">
              <span className="mr-2">←</span> Previous
            </Button>
          </Link>
          <Link href="/ledger/mccarrick/legal" asChild>
            <Button size="lg" className="font-mono uppercase tracking-widest rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
              Proceed to Section 09 <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </div>);
}
