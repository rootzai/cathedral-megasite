import EndgameLayout from "@/components/EndgameLayout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Conclusion() {
  return (<div className="space-y-8 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <SectionHeader 
          number="12" 
          title="Conclusion" 
          subtitle="Toward Transparency and Accountability"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-12 font-serif text-xl leading-relaxed text-zinc-300">
            <p className="bg-zinc-900/50 p-8 border-l-4 border-red-900 shadow-xl">
              The Theodore McCarrick scandal is a dark chapter in the history of the Catholic Church, but it also serves as a turning point. The exposure of his crimes and the subsequent investigations have forced the Church to confront its systemic failures and implement necessary reforms.
            </p>
            <p>
              While justice for many survivors remains elusive, the laicization of a cardinal and the publication of the McCarrick Report represent significant steps toward accountability. The path forward requires continued vigilance, a commitment to transparency, and an unwavering dedication to protecting the vulnerable.
            </p>
            <div className="p-8 border-4 border-red-900 bg-red-900 text-white font-cinzel font-black text-2xl uppercase tracking-tighter text-center shadow-2xl">
              "This dossier stands as a record of the facts, a testament to the survivors, and a reminder that no one is above the law—canon or civil."
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="bg-zinc-900 border-2 border-red-900 p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-900/10 blur-3xl" />
              <h4 className="font-cinzel font-black uppercase text-xl mb-8 border-b-2 border-red-900 pb-4 tracking-widest text-white">Sources & Archive</h4>
              <ul className="space-y-6 font-mono text-sm font-black uppercase">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 mt-1.5 shrink-0" />
                  <a href="#" className="text-red-500 hover:text-white transition-colors underline decoration-2 underline-offset-4">Holy See McCarrick Report (2020)</a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 mt-1.5 shrink-0" />
                  <a href="#" className="text-red-500 hover:text-white transition-colors underline decoration-2 underline-offset-4">Vos Estis Lux Mundi (2019)</a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 mt-1.5 shrink-0" />
                  <a href="#" className="text-red-500 hover:text-white transition-colors underline decoration-2 underline-offset-4">Boston Globe "Spotlight" Archives</a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 mt-1.5 shrink-0" />
                  <a href="#" className="text-red-500 hover:text-white transition-colors underline decoration-2 underline-offset-4">BishopAccountability.org</a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-600 mt-1.5 shrink-0" />
                  <a href="#" className="text-red-500 hover:text-white transition-colors underline decoration-2 underline-offset-4">Washington Post Investigations</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-start mt-12 pt-8 border-t border-border">
          <Link href="/ledger/mccarrick/analysis" asChild>
            <Button variant="outline" className="font-mono uppercase tracking-widest rounded-none border-2">
              <span className="mr-2">←</span> Previous
            </Button>
          </Link>
          <Link href="/ledger" asChild>
            <Button variant="ghost" className="ml-auto font-mono uppercase tracking-widest hover:bg-transparent hover:text-destructive transition-colors">
              Return to Ledger
            </Button>
          </Link>
        </div>
      </div>);
}
