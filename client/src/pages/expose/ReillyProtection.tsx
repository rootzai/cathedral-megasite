import { Level3EvidenceStream } from "@/components/Level3EvidenceStream";
import { JourneyNav } from "@/components/JourneyNav";
import { AlertTriangle, Clock, Users, ArrowRight } from "lucide-react";

export default function ReillyProtection() {
  return (
    <div className="page-enter max-w-5xl mx-auto px-6 py-12 space-y-20">
      
      {/* Narrative Hero */}
      <section className="relative border-b border-border pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/30 text-destructive text-xs font-mono uppercase tracking-[0.2em]">
              <Users className="w-3 h-3" />
              The Architecture of the Secretary
            </div>

            <h1 className="font-heading text-6xl md:text-7xl text-foreground leading-[0.9] tracking-tighter">
              Joseph <br />
              <span className="text-destructive italic underline decoration-destructive/30 underline-offset-8">Reilly</span>
            </h1>

            <div className="prose-investigative text-xl leading-relaxed text-muted-foreground font-serif italic">
              "A bishop's secretary is not a clerk. He is the archbishop's shadow — present at every meeting, privy to every secret, keeper of every schedule. To claim ignorance is to claim absence."
            </div>
          </div>
        </div>
      </section>

      {/* The Secretary's Role */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-12 prose-investigative max-w-none">
          <h2 className="section-heading mb-12">The Proximity of Power</h2>

          <div className="columns-1 md:columns-2 gap-12 space-y-8 text-lg leading-relaxed text-muted-foreground font-serif">
            <p className="first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-foreground">
              I
              n the Catholic Church, the role of a bishop's personal secretary is not ceremonial. The secretary manages the bishop's calendar, correspondence, and access. He is present at virtually all meetings. He screens visitors, drafts communications, and serves as the institutional memory of the bishop's office. He is, in the truest sense, the bishop's shadow.
            </p>

            <p>
              Monsignor Joseph Reilly served as Archbishop Theodore McCarrick's personal secretary in <strong className="text-foreground">1994</strong> — the year before Pope John Paul II's historic visit to New Jersey in 1995. Reilly played a direct role in enabling and organizing that papal visit. The proximity required by that role — the daily, intimate access to McCarrick's schedule, his guests, his private communications — makes Reilly's subsequent claims of ignorance regarding McCarrick's conduct extraordinarily difficult to sustain.
            </p>

            <blockquote className="border-l-4 border-destructive pl-8 py-4 my-10 bg-destructive/5 not-italic text-foreground">
              <p className="text-2xl font-bold leading-tight mb-4">
                "Reilly admitted visiting the Sea Girt beach house."
              </p>
              <footer className="font-mono text-xs uppercase tracking-widest opacity-60">
                — Documented admission, despite claims of isolation
              </footer>
            </blockquote>

            <p>
              Against this backdrop, Reilly's admission that he visited McCarrick's notorious <strong className="text-foreground">Sea Girt beach house</strong> — even once — must be understood in its full significance. The Sea Girt property was the documented site of McCarrick's sexual abuse of seminarians. For a man who served as the archbishop's secretary to claim only a single visit strains credulity and challenges the narrative of Reilly's innocence.
            </p>
          </div>
        </div>
      </section>

      {/* The 18-Day Clock */}
      <section className="bg-zinc-50 p-12 rounded-sm border border-border shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 transition-opacity duration-700 group-hover:opacity-20">
          <Clock className="w-48 h-48 text-destructive" />
        </div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-destructive to-transparent" />
        
        <h3 className="text-destructive font-black uppercase tracking-tighter text-3xl mb-6 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 animate-pulse" /> THE 18-DAY CLOCK: THE UNMASKING
        </h3>
        <p className="text-foreground font-serif text-xl leading-relaxed mb-8 relative z-10 max-w-3xl">
          On July 1, 2024, Monsignor Joseph Reilly was installed as President. Exactly 18 days later, on July 18, 2024, the institution unmasked its true intent. A grand jury subpoena was served to Google—not to investigate the decades of abuse at the beach house, but to identify the anonymous whistleblower account that had spent months warning the Regents about the Reilly succession.
        </p>

        <div className="relative z-10 border border-border/50 bg-white/50 p-6 backdrop-blur-sm shadow-inner">
          <Level3EvidenceStream />
        </div>
      </section>

      {/* The Latham Report findings */}
      <section className="space-y-12">
        <header className="flex items-center gap-6">
          <h2 className="font-heading text-4xl text-foreground shrink-0 uppercase tracking-tighter">The Latham Report</h2>
          <div className="h-px flex-1 bg-border" />
        </header>

        <div className="prose-investigative max-w-3xl text-lg text-muted-foreground font-serif">
          <p>
            The 2019 Latham Report — 24,000 pages, sealed for six years, produced by Kathryn Ruemmler of Latham &amp; Watkins — identified Reilly as a central figure in reporting failures during his tenure as Rector of the Immaculate Conception Seminary (ICS). The Board of Regents' Special Task Force issued two formal letters recommending his removal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border border-border bg-zinc-50 hover:border-destructive/50 transition-colors">
            <div className="font-mono text-xs uppercase tracking-widest text-destructive mb-4">Nov 25, 2019</div>
            <h4 className="font-heading text-xl text-foreground mb-4">First Removal Recommendation</h4>
            <p className="font-serif text-base text-muted-foreground">
              The Task Force recommended Reilly's removal from all boards, citing his failure to report a 2012 sexual assault complaint through proper Title IX channels, bypassing federal oversight.
            </p>
          </div>
          <div className="p-8 border border-border bg-zinc-50 hover:border-destructive/50 transition-colors">
            <div className="font-mono text-xs uppercase tracking-widest text-destructive mb-4">Feb 2020</div>
            <h4 className="font-heading text-xl text-foreground mb-4">Supplemental Letter</h4>
            <p className="font-serif text-base text-muted-foreground">
              Reiterated the removal recommendation, citing a 2014 failure to report sexual harassment at St. Andrew's Hall. This second failure constituted a formal pattern.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline of Protection */}
      <section className="bg-zinc-950 p-12 rounded-sm border border-border text-zinc-400">
        <h3 className="font-heading text-3xl text-zinc-100 mb-10">The Timeline of Protection</h3>
        
        <div className="space-y-6">
          {[
            { date: "1994", event: "Reilly serves as McCarrick's personal secretary.", significance: "Daily proximity to McCarrick." },
            { date: "2012", event: "Sexual assault complaint at ICS.", significance: "Handled 'in-house', no Title IX report." },
            { date: "2014", event: "Sexual harassment at St. Andrew's Hall.", significance: "Reilly received information; took no formal action." },
            { date: "Sept 6, 2019", event: "Latham Report presented to Board.", significance: "24,000 pages; Reilly's failures documented." },
            { date: "Nov 25, 2019", event: "First Task Force removal letter.", significance: "Recommended removal from all boards." },
            { date: "May 2022", event: "Reilly placed on sabbatical.", significance: "Appointed Vice Provost." },
            { date: "July 1, 2024", event: "Reilly installed as President.", significance: "Elected by regents who knew of removal recommendations.", alert: true },
            { date: "July 18, 2024", event: "Grand jury subpoena to Google.", significance: "Attempt to unmask whistleblower warning regents." },
            { date: "November 2025", event: "Judge Benjamin orders Latham Report produced.", significance: "Scrivo sanctioned for withholding it for years." }
          ].map((item, i) => (
            <div key={i} className={`flex flex-col md:flex-row gap-4 p-4 border-b border-zinc-800 ${item.alert ? 'bg-destructive/10 border-destructive/30' : ''}`}>
              <div className={`font-mono w-32 shrink-0 ${item.alert ? 'text-destructive' : 'text-zinc-500'}`}>{item.date}</div>
              <div className={`font-serif flex-1 ${item.alert ? 'text-zinc-100' : 'text-zinc-300'}`}>{item.event}</div>
              <div className={`font-mono text-xs uppercase tracking-widest flex-1 ${item.alert ? 'text-destructive font-bold' : 'text-zinc-500'}`}>{item.significance}</div>
            </div>
          ))}
        </div>
      </section>

      <JourneyNav />
    </div>
  );
}
