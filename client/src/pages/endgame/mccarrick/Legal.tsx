import EndgameLayout from "@/components/EndgameLayout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Legal() {
  return (<div className="space-y-8 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <SectionHeader 
          number="09" 
          title="Legal Actions" 
          subtitle="Civil Lawsuits, Criminal Charges, and Posthumous Developments"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="relative h-96 w-full overflow-hidden border-4 border-red-900 group shadow-[0_0_50px_rgba(139,26,26,0.4)]">
            <img 
              src="/assets/Reillyrides.png" 
              alt="Reilly Rides a Stang Satire" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h2 className="text-4xl font-cinzel font-black uppercase text-white text-shadow-blood mb-2 tracking-tighter">REILLY RIDES A STANG</h2>
              <p className="text-lg text-red-500 font-bold italic bg-black/60 px-2 py-1 inline-block">"THE WILD RIDE OF COVER-UPS."</p>
            </div>
            <div className="absolute top-4 right-4 bg-red-900 text-white font-mono text-xs px-3 py-1 font-black uppercase tracking-widest border border-white">FORENSIC SATIRE</div>
          </div>
          <div className="relative h-96 w-full overflow-hidden border-4 border-red-900 group shadow-[0_0_50px_rgba(139,26,26,0.4)]">
            <img 
              src="/assets/demandaction.png" 
              alt="Demand Action Poster" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h2 className="text-4xl font-cinzel font-black uppercase text-white text-shadow-blood mb-2 tracking-tighter">DEMAND ACTION</h2>
              <p className="text-lg text-red-500 font-bold italic bg-black/60 px-2 py-1 inline-block">"TOBIN CONSPIRED TO COVER UP REILLY'S CRIMES!"</p>
            </div>
            <div className="absolute top-4 right-4 bg-red-900 text-white font-mono text-xs px-3 py-1 font-black uppercase tracking-widest border border-white">RECRUITMENT ASSET</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-10 font-serif text-xl leading-relaxed text-zinc-300">
            <section className="bg-zinc-900/50 p-8 border-l-4 border-red-900 shadow-xl">
              <h3 className="font-cinzel font-black text-3xl text-white mb-6 uppercase tracking-widest">Criminal Charges</h3>
              <p>
                In July 2021, McCarrick was charged criminally in Massachusetts with three counts of indecent assault and battery on a person over 14. The charges stemmed from an alleged assault on a 16-year-old boy during a wedding reception at Wellesley College in 1974.
              </p>
              <p className="mt-6 border-t border-red-900/30 pt-6">
                This marked the first time a U.S. cardinal (former or current) had faced criminal charges for sexual abuse. However, in August 2023, the case was dismissed after a judge ruled that McCarrick, then 93 and suffering from dementia, was not competent to stand trial.
              </p>
            </section>

            <section className="bg-zinc-900/50 p-8 border-l-4 border-red-900 shadow-xl">
              <h3 className="font-cinzel font-black text-3xl text-white mb-6 uppercase tracking-widest">Civil Lawsuits</h3>
              <p>
                Numerous civil lawsuits have been filed against McCarrick and the dioceses he led (Newark, Metuchen) under "lookback window" laws in New Jersey and New York. These laws temporarily suspended the statute of limitations, allowing older victims to sue.
              </p>
              <p className="mt-6 border-t border-red-900/30 pt-6">
                These lawsuits have resulted in significant financial settlements and have forced the release of internal church documents that further corroborated the cover-up.
              </p>
            </section>
          </div>

          <div className="space-y-10">
            <div className="bg-zinc-900 border-2 border-red-900 p-2 group shadow-2xl">
              <div className="aspect-video relative overflow-hidden bg-black">
                <iframe 
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 brightness-75 group-hover:brightness-110"
                  src="https://www.youtube.com/embed/8uPSR4ysAaw" 
                  title="Cardinal McCarrick's history in DC"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              </div>
              <div className="p-6 bg-black/50">
                <span className="font-mono text-sm font-black text-red-600 uppercase tracking-[0.3em]">VIDEO EVIDENCE 01</span>
                <h4 className="text-white font-cinzel text-xl mt-2 uppercase tracking-tighter">Cardinal McCarrick's history in DC</h4>
              </div>
            </div>

            <div className="bg-zinc-900 border-2 border-red-900 p-2 group shadow-2xl">
              <div className="aspect-video relative overflow-hidden bg-black">
                <iframe 
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 brightness-75 group-hover:brightness-110"
                  src="https://www.youtube.com/embed/gT53J-7Xv7A" 
                  title="PBS NewsHour - Former Cardinal McCarrick charged"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              </div>
              <div className="p-6 bg-black/50">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-mono text-sm font-black text-red-600 uppercase tracking-[0.3em]">VIDEO EVIDENCE 02</span>
                  <span className="bg-red-900 text-white px-2 py-0.5 font-mono text-[10px] font-black uppercase">PBS ARCHIVE</span>
                </div>
                <h4 className="text-white font-cinzel text-xl uppercase tracking-tighter">Former Cardinal McCarrick charged with sexual assault</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-12 pt-8 border-t border-border">
          <Link href="/ledger/mccarrick/mechanisms" asChild>
            <Button variant="outline" className="font-mono uppercase tracking-widest rounded-none border-2">
              <span className="mr-2">←</span> Previous
            </Button>
          </Link>
          <Link href="/ledger/mccarrick/responses" asChild>
            <Button size="lg" className="font-mono uppercase tracking-widest rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
              Proceed to Section 10 <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </div>);
}
