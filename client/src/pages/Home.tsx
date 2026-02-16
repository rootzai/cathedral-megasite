import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-24 animate-in fade-in duration-1000">
        {/* Hero Section */}
        <section className="text-center space-y-12 pt-12 pb-24 border-b border-zinc-800/30">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-4">
              <span className="h-px w-8 bg-destructive/50"></span>
              <p className="text-destructive font-mono text-[10px] uppercase tracking-[0.4em] font-bold">Special Investigation 2025</p>
              <span className="h-px w-8 bg-destructive/50"></span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white leading-none">SODOM HALL</h1>
            <h2 className="text-xl md:text-2xl font-serif italic text-zinc-500 tracking-wide">The Cathedral of Documents</h2>
          </div>

          <div className="max-w-xl mx-auto">
            <blockquote className="border-l-2 border-destructive/30 pl-8 py-4 italic text-2xl text-zinc-400 text-left leading-relaxed relative">
              <span className="absolute -left-2 top-0 text-6xl text-destructive/10 font-serif">"</span>
              It were better for him that a millstone were hanged about his neck, and he cast into the sea, than that he should offend one of these little ones.
              <footer className="text-zinc-600 text-[10px] mt-6 font-mono uppercase tracking-[0.2em]">— Luke 17:2</footer>
            </blockquote>
          </div>

          <div className="pt-12">
            <Link href="/ruling">
              <Button size="lg" className="bg-destructive hover:bg-white hover:text-black text-white font-mono text-[10px] uppercase tracking-[0.3em] px-16 py-8 rounded-none border border-white/5 transition-all duration-500 group relative overflow-hidden">
                <span className="relative z-10 transition-colors duration-500">The Vault Opens</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="max-w-2xl mx-auto space-y-12 text-zinc-400 font-serif text-lg leading-loose text-justify">
          <p className="first-letter:text-7xl first-letter:font-black first-letter:text-white first-letter:mr-4 first-letter:float-left first-letter:font-serif">
            In the Gospel of Matthew, Christ warns those who would harm children: better to have a millstone tied around your neck and be cast into the sea.
          </p>
          <p>
            For decades, a different kind of stone has been sinking — not into water, but into the institutional memory of the Roman Catholic Church and New Jersey's political establishment.
          </p>
          <p>
            This is the story of that stone, and the men who tried to hold it underwater.
          </p>

          <div className="pt-12 space-y-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600 border-b border-zinc-900 pb-4">Dedicated to the victims</p>
            <div className="grid grid-cols-2 gap-4 font-mono text-[11px] uppercase tracking-widest text-zinc-500">
              <div className="hover:text-destructive transition-colors cursor-default">Kim Capadona</div>
              <div className="hover:text-destructive transition-colors cursor-default">Donna McMonagle</div>
              <div className="hover:text-destructive transition-colors cursor-default">The SHU Seminarians</div>
              <div className="hover:text-destructive transition-colors cursor-default">Delbarton Students</div>
              <div className="hover:text-destructive transition-colors cursor-default">The 450 Plaintiffs</div>
              <div className="hover:text-destructive transition-colors cursor-default">The Truth</div>
            </div>
          </div>
        </section>

        {/* Action Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-900 border border-zinc-900">
          <Link href="/ruling">
            <a className="bg-black p-16 space-y-6 group hover:bg-zinc-950 transition-all duration-700 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-destructive scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-destructive font-bold">Document Archive</p>
              <h3 className="text-4xl font-bold text-white tracking-tighter transition-transform duration-700 group-hover:translate-x-2">The Ruling →</h3>
              <p className="text-zinc-500 text-sm font-serif leading-relaxed">
                Judge Benjamin has ordered the release of 20,500 pages. Explore the legal victory that broke the silence.
              </p>
            </a>
          </Link>
          <Link href="/endgame/mccarrick">
            <a className="bg-black p-16 space-y-6 group hover:bg-zinc-950 transition-all duration-700 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-destructive scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-destructive font-bold">Institutional Map</p>
              <h3 className="text-4xl font-bold text-white tracking-tighter transition-transform duration-700 group-hover:translate-x-2">The Network →</h3>
              <p className="text-zinc-500 text-sm font-serif leading-relaxed">
                From the Beach House to the Vatican. Trace the connections that protected Theodore McCarrick for decades.
              </p>
            </a>
          </Link>
        </section>

        <section className="text-center pt-12 pb-24">
          <p className="font-mono text-[9px] uppercase tracking-[0.5em] text-zinc-700">Truth Still Emerging</p>
        </section>
      </div>
    </Layout>
  );
}
