import { JourneyNav } from "@/components/JourneyNav";
import { Lock, Scale } from "lucide-react";

export default function WhistleblowerUnmasking() {
  return (
    <div className="page-enter max-w-5xl mx-auto px-6 py-12 space-y-20">

      {/* Investigative Header */}
      <header className="mb-16 border-b-4 border-zinc-400 pb-12">
        <div className="exhibit-label text-zinc-800 mb-4">Special Investigation · The Breach</div>
        <h1 className="text-6xl font-black mb-6 leading-[0.9] tracking-tighter uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
          The Unmasking <br />
          <span className="text-zinc-800">Campaign</span>
        </h1>
        <p className="text-2xl font-serif italic text-muted-foreground leading-relaxed max-w-3xl">
          How a criminal grand jury was weaponized to identify a civil whistleblower—and the 18-day retaliation clock that followed a presidential installation.
        </p>
      </header>

      {/* The 18-Day Clock Narrative */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-12 prose-investigative max-w-none">
          <h2 className="section-heading mb-12">The Retaliation Clock</h2>

          <div className="columns-1 md:columns-2 gap-12 space-y-8 text-lg leading-relaxed text-muted-foreground font-serif">
            <p className="first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-foreground">
              O
              n July 1, 2024, Joseph Reilly was installed as the President of Seton Hall University.
              The appointment was a triumph of the "Architecture of Silence"—the promotion of a man
              whose career was inextricably linked to the McCarrick network. But the triumph was
              threatened by an anonymous voice: an email account, *cardinaltobin@gmail.com*,
              that was methodically warning the university's regents about the documentation
              buried in the Latham Report.
            </p>

            <p>
              The institutional response was swift, surgical, and chilling. Exactly eighteen days
              after the installation, a criminal grand jury subpoena was issued in Bergen County,
              New Jersey. It did not target a criminal; it targeted Google. The objective was
              to pierce the anonymity of the whistleblower and silence the warnings before
              they could reach the public.
            </p>

            <blockquote className="border-l-4 border-zinc-400 pl-8 py-4 my-10 bg-zinc-800/5 not-italic text-foreground">
              <p className="text-2xl font-bold leading-tight mb-4">
                "The message was not legal. It was institutional: we know who you are, and we will find you."
              </p>
              <footer className="font-mono text-xs uppercase tracking-widest opacity-60">
                — Evidence of Institutional Warfare
              </footer>
            </blockquote>

            <p>
              This was not a standard legal defense. It was the weaponization of the state’s
              criminal apparatus against a civil whistleblower. By manufacturing a criminal
              predicate—a claim of "solicitation" published in an Archdiocese bulletin—the
              network secured the coercive power of a grand jury to achieve what civil
              litigation could not: the unmasking of a witness.
            </p>
          </div>
        </div>
      </section>

      {/* Forensic Timeline Visualization */}
      <section className="bg-zinc-50 p-12 rounded-sm border border-border shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />

        <header className="mb-12 text-center">
          <h3 className="font-heading text-3xl mb-2">Timeline of Retaliation</h3>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Cross-Jurisdictional Suppression · 2024-2026</p>
        </header>

        <div className="space-y-8 relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-zinc-800/20" />

          <div className="relative pl-16 group">
            <div className="absolute left-5 top-1.5 w-3 h-3 rounded-full bg-zinc-800 group-hover:scale-150 transition-transform" />
            <div className="bg-zinc-100/50 p-6 border border-border rounded-sm">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-zinc-900 uppercase tracking-widest text-xs">Day 18: The First Strike</h4>
                <span className="font-mono text-[10px] text-zinc-800">JULY 18, 2024</span>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed font-serif">
                Grand jury subpoena issued to Google. The network bypasses civil discovery
                to pierce the whistleblower's anonymity using the threat of criminal prosecution.
              </p>
            </div>
          </div>

          <div className="relative pl-16 group">
            <div className="absolute left-5 top-1.5 w-3 h-3 rounded-full bg-gold group-hover:scale-150 transition-transform" />
            <div className="bg-zinc-100/50 p-6 border border-border rounded-sm">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-zinc-900 uppercase tracking-widest text-xs">The Manufactured Predicate</h4>
                <span className="font-mono text-[10px] text-gold">OCT 2024</span>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed font-serif">
                Archdiocese bulletin publishes claims of "solicitation," providing the thin
                veneer of criminal suspicion required to justify the ongoing grand jury process.
              </p>
            </div>
          </div>

          <div className="relative pl-16 group">
            <div className="absolute left-5 top-1.5 w-3 h-3 rounded-full bg-zinc-800 group-hover:scale-150 transition-transform" />
            <div className="bg-zinc-100/50 p-6 border border-border rounded-sm">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-zinc-900 uppercase tracking-widest text-xs">Transcontinental Escalation</h4>
                <span className="font-mono text-[10px] text-zinc-800">NOV 20, 2025</span>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed font-serif">
                Exactly one year later, despite the California court disposing of the matter,
                a 52-page deposition package is sent to the whistleblower. Attrition becomes the final strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Shield Law Conflict */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <h2 className="font-heading text-4xl text-foreground uppercase tracking-tighter">The Shield Under Siege</h2>
          <div className="prose-investigative text-lg text-muted-foreground font-serif leading-relaxed space-y-4">
            <p>
              At the heart of the unmasking campaign is a fundamental challenge to the
              First Amendment. The whistleblower—a California-based investigative
              journalist—has invoked the Shield Laws of both New Jersey and California.
            </p>
            <p>
              The hierarchy’s response? A semantic defense. They argue that an
              anonymous emailer cannot be a "journalist," seeking to redefine
              media protection in a way that excludes a whistleblower exposing
              clerical misconduct.
            </p>
          </div>
        </div>

        <div className="p-10 border border-border bg-zinc-50 rounded-sm space-y-8">
          <div className="flex items-center gap-4 text-zinc-800">
            <Scale className="w-8 h-8" />
            <h3 className="font-heading text-2xl uppercase italic">Legal Precedent</h3>
          </div>
          <div className="space-y-4">
            <div className="border-b border-border pb-4">
              <p className="font-mono text-[10px] uppercase text-gold mb-1">N.J.S.A. 2A:84A-21</p>
              <p className="text-sm font-serif text-muted-foreground">"Protects the gathering and dissemination of news from compelled disclosure."</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase text-gold mb-1">Cal. Const. Art. I, § 2(b)</p>
              <p className="text-sm font-serif text-muted-foreground">"Absolute immunity for journalists refusing to disclose sources."</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground italic font-serif leading-relaxed">
            The use of a grand jury to bypass these constitutional protections sets a
            dangerous precedent: that any institution with enough political pull can
            unmask its critics by simply calling them "suspects."
          </p>
        </div>
      </section>

      <div className="evidence-box bg-zinc-50 text-parchment p-12 rounded-sm shadow-2xl relative">
        <div className="absolute inset-0 bg-zinc-800/5 flex items-center justify-center pointer-events-none">
          <Lock className="w-64 h-64 opacity-5 rotate-12" />
        </div>
        <div className="exhibit-label text-zinc-800 mb-4 uppercase tracking-[0.2em] font-mono text-xs">Closing Finding · Retaliation</div>
        <p className="text-2xl leading-relaxed italic mb-8 font-serif">
          "The unmasking was not about discovery; it was about exposure."
        </p>
        <p className="text-sm leading-relaxed opacity-80 font-serif max-w-2xl">
          The campaign against the *cardinaltobin* account represents the most
          aggressive use of state power in the history of the McCarrick scandal.
          By pursuing a journalist across state lines for the "crime" of warning
          university regents, the network proved that its first operating
          principle remains unchanged: *the machine will protect the institution,
          and it will destroy the witness.*
        </p>
      </div>

      <JourneyNav />
    </div>
  );
}
