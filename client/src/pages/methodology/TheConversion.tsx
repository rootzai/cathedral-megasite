import React from "react";
import { Link } from "wouter";
import { 
    RefreshCcw, 
    ArrowRight, 
    ShieldAlert, 
    FileText,
    TrendingDown,
    Scale
} from "lucide-react";

export default function TheConversion() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#c8bdb0] font-serif">
      {/* AUTHORITATIVE HEADER */}
      <section className="relative py-32 px-6 border-b border-red-900/20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/cathedral-blueprint.jpg')] opacity-5 grayscale" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-8">
            <RefreshCcw className="w-12 h-12 text-red-700 animate-spin-slow" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 italic">
            The Conversion
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-serif leading-relaxed italic max-w-2xl mx-auto">
            "The methodology of institutional erasure: where 'I suffered' becomes 'the process was followed'."
          </p>
        </div>
      </section>

      {/* THE THEORY SECTION (10TH GRADE READABILITY) */}
      <section className="py-24 px-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-white uppercase tracking-widest">How the Machine Works</h2>
            <p className="text-lg leading-relaxed text-zinc-300">
                The Church has a special way of making crimes disappear. They call it "process." 
                When a victim says <strong>"He did this to me,"</strong> the Church changes it to 
                <strong>"The allegations are being reviewed according to our policy."</strong>
            </p>
            <p className="text-lg leading-relaxed text-zinc-300">
                By the time they are done, the person who did the crime is gone. All that is left 
                is a spreadsheet and a lawyer. This is <strong>The Conversion</strong>.
            </p>
          </div>
          <div className="bg-red-950/10 border border-red-900/20 p-8 flex flex-col justify-center">
            <TrendingDown className="w-12 h-12 text-red-600 mb-6" />
            <h3 className="text-xl font-bold text-white mb-4 italic">The Goal: Institutional Safety</h3>
            <p className="text-sm text-zinc-500 font-mono uppercase tracking-widest leading-loose">
                The objective is to remove the "human element" so the institution can survive. If there is no person to blame, there is no one for a jury to hate.
            </p>
          </div>
        </div>
      </section>

      {/* THE CENTRAL EXAMPLE: THE $108,000 TRAP */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <ShieldAlert className="w-8 h-8 text-red-700 mb-4" />
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-widest mb-6">Case Study: The $108,000 Trap</h2>
            <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.4em]">EXHIBIT // SETTLEMENT-MECHANISM-001</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-12 bg-black border border-white/10 p-12 relative group shadow-2xl">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <FileText className="w-32 h-32 text-red-600" />
              </div>
              <div className="relative z-10 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <span className="text-red-700 font-black text-xs uppercase tracking-widest">The "Offer"</span>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Victims are approached with a "voluntary" payment. In the McCarrick/Martin nexus, this was often set at **$108,000**.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <span className="text-red-700 font-black text-xs uppercase tracking-widest">The "Condition"</span>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            To get the money, the victim must sign an NDA that bars them from ever using the perpetrator's name in a legal setting.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <span className="text-red-700 font-black text-xs uppercase tracking-widest">The "Erasure"</span>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Once signed, the crime is "converted" into a closed financial transaction. The perpetrator's name is wiped from the public record.
                        </p>
                    </div>
                </div>
                
                <div className="pt-12 border-t border-white/5">
                    <p className="text-lg text-white font-serif leading-relaxed italic max-w-3xl mx-auto text-center">
                        "The offer isn't about helping the victim. It is a legal vaccine designed to kill the lawsuit before it can infect the institution."
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA TO THE REWRITE */}
      <section className="py-24 px-6 border-t border-white/5 bg-black">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-2xl font-black text-white uppercase tracking-widest italic">How to Break the Conversion</h2>
          <p className="text-zinc-400 font-serif text-lg leading-relaxed max-w-xl mx-auto">
            The Conversion only works if the archive remains sealed. When you find <strong>The Rewrite</strong>—the moment they lied to protect the money—the whole machine fails.
          </p>
          <Link href="/opinion">
            <a className="inline-flex items-center gap-4 bg-red-900 hover:bg-red-700 text-white px-12 py-6 font-black uppercase tracking-[0.4em] text-[10px] transition-all shadow-[0_0_40px_rgba(139,26,26,0.5)]">
               UNSEAL THE REWRITE <ArrowRight className="w-4 h-4" />
            </a>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 text-center">
        <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">The Cathedral Megasite // Forensic Methodology Archive</span>
      </footer>
    </div>
  );
}
