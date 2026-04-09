import React from "react";
import { Link } from "wouter";
import { 
    Users, 
    ShieldCheck, 
    BookOpen, 
    Database,
    Zap,
    Scale
} from "lucide-react";

export default function PatrickWall() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#c8bdb0] font-serif">
      {/* AUTHORITATIVE HEADER */}
      <section className="relative py-32 px-6 border-b border-red-900/20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/cathedral-blueprint.jpg')] opacity-5 grayscale" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-8">
            <Users className="w-12 h-12 text-red-700" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 italic">
            Patrick Wall
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-serif leading-relaxed italic max-w-2xl mx-auto">
            "The insider who built the machine. The man who saw the gears of the institutional shield."
          </p>
        </div>
      </section>

      {/* THE VALIDATOR SECTION (10TH GRADE READABILITY) */}
      <section className="py-24 px-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-white uppercase tracking-widest italic">The Insider Engine</h2>
            <p className="text-lg leading-relaxed text-zinc-300">
                Patrick Wall was not a victim. He was part of the Church staff. He saw how the 
                Church used lawyers and money to stop survivors from getting justice. 
            </p>
            <p className="text-lg leading-relaxed text-zinc-300">
                Because he saw it from the inside, he knows where the bodies are buried. He understands 
                the <strong>institutional tactics</strong>—the secret set of rules the Church uses to protect its assets.
            </p>
          </div>
          <div className="bg-[#111116] border border-white/5 p-8 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-red-900/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <ShieldCheck className="w-12 h-12 text-red-600 mb-6" />
            <h3 className="text-xl font-bold text-white mb-4 italic">Operation Intelligence</h3>
            <p className="text-sm text-zinc-500 font-mono uppercase tracking-widest leading-loose">
                "Patrick's knowledge is our unfair advantage. He transforms this site from a news report into a legal weapon."
            </p>
          </div>
        </div>
      </section>


      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <BookOpen className="w-8 h-8 text-red-700 mb-4" />
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-widest mb-6 italic">The Institutional Shield</h2>
            <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.4em]">Forensic Dossier // Asset-Intelligence-043</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Asset Shifting", 
                desc: "Moving money from a parish into a 'Foundation' to ring-fence assets.",
                icon: Database
              },
              { 
                title: "Administrative Priority", 
                desc: "Ensuring lawyers get paid millions while survivors get pennies.",
                icon: Scale
              },
              { 
                title: "The Silent Trust", 
                desc: "Using hidden bank accounts to keep cash off the court's balance sheet.",
                icon: Zap
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-black border border-white/10 p-8 hover:border-red-900/40 transition-all group">
                <item.icon className="w-6 h-6 text-red-900 mb-6 group-hover:animate-pulse" />
                <h4 className="text-lg font-bold text-white uppercase mb-4 tracking-widest">{item.title}</h4>
                <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-32 px-6 border-t border-white/5 text-center">
        <div className="max-w-2xl mx-auto space-y-12">
            <h2 className="text-2xl font-black text-white uppercase tracking-widest italic">Request Patrick's Advisory</h2>
            <p className="text-zinc-400 font-serif text-lg italic leading-relaxed">
                Patrick Wall provides operational intelligence for plaintiff firms seeking to penetrate the institutional shield.
            </p>
            <Link href="/tips">
                <a className="bg-red-900 hover:bg-red-700 text-white px-12 py-6 font-black uppercase tracking-[0.4em] text-xs shadow-[0_0_40px_rgba(139,26,26,0.5)]">
                    Contact The Intelligence Cell
                </a>
            </Link>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center">
        <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">The Cathedral Megasite // Insider Intelligence Hub</span>
      </footer>
    </div>
  );
}
