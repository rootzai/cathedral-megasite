import { JourneyNav } from "@/components/JourneyNav";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";


export default function LegalTrumvirate() {
  return (
    <div className="page-enter max-w-4xl mx-auto px-6 py-12 space-y-16">

      <div className="mb-6">
        <Link href="/coverup" className="text-xs font-mono text-gold flex items-center gap-1 hover:underline">
          <ArrowLeft size={12} /> Back to Cover-Up Overview
        </Link>
      </div>

      {/* Investigative Header */}
      <header className="mb-16">
        <div className="exhibit-label mb-4 uppercase tracking-[0.2em] font-mono text-xs text-gold">Forensic Audit · The Legal Network</div>
        <h1
          className="text-6xl font-black mb-6 leading-tight tracking-tighter"
          style={{ fontFamily: "'Playfair Display', serif", color: "var(--ink)" }}
        >
          The Architecture <br />of <span className="text-blood italic">Silence</span>
        </h1>
        <p className="text-2xl leading-relaxed italic text-muted-foreground font-serif">
          Six attorneys. Four firms. One institution. How a closed-loop legal apparatus was deployed to dismantle the truth.
        </p>
      </header>

      {/* Narrative Prose */}
      <section className="prose-investigative max-w-none text-lg leading-relaxed text-muted-foreground font-serif space-y-8">
        <p className="first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-ink">
          T
          he structural integrity of a cover-up is not maintained by priests alone.
          In the Archdiocese of Newark, it is maintained by a cohort of high-profile legal
          actors who operate within a profound, closed-loop institutional system.
          To understand the "Legal Triumvirate" is to understand how the power of
          the state—accumulated through years of political and judicial appointments—has
          been turned inward to protect the Cathedral and silence its survivors.
        </p>
        <p>
          This is what critics call "Christie’s legal network." It is a shorthand for
          an apparatus built during the administration of Governor Chris Christie,
          where the lines between public service, private practice, and institutional
          loyalty have become hauntingly blurred. The result is a system of
          "Ecclesiastical Omertà" that functions with the efficiency of a
          high-stakes litigation strategy.
        </p>
      </section>

      {/* Interactive Person Profiles - Long-form Style */}
      <div className="space-y-24 mt-20">

        {/* Scrivo Profile */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-12">
            <div className="h-px bg-gold/30 mb-8" />
            <h3 className="text-xs font-bold tracking-widest uppercase text-gold mb-2 font-mono">Profile 01: The Gatekeeper</h3>
            <h2 className="text-4xl font-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Thomas P. Scrivo</h2>
            <div className="prose-investigative text-lg text-muted-foreground font-serif italic mb-8 border-l-4 border-gold/20 pl-8">
              "He files motions in Essex County before judges he helped appoint. In 2025, the court sanctioned him for withholding documents. The Office of Attorney Ethics did nothing."
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base">
              <p>
                Thomas Scrivo is the architect of the university's defense. As the former
                Chief Counsel to Governor Christie, he was responsible for the vetting of
                nearly 75 judicial appointments. Today, as managing partner of O’Toole Scrivo,
                he serves as the outside litigation counsel for Seton Hall University.
              </p>
              <p>
                The conflict is both structural and personal. A Seton Hall alumnus with deep
                family ties to the institution, Scrivo represents the "Closed Loop" at its
                most efficient. In the Nyre litigation, he was found to have withheld
                crucial documents—a tactic that earned him a court sanction but no
                regulatory consequence.
              </p>
            </div>
          </div>
        </section>

        {/* Porrino Profile */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-12">
            <div className="h-px bg-gold/30 mb-8" />
            <h3 className="text-xs font-bold tracking-widest uppercase text-gold mb-2 font-mono">Profile 02: The Strategist</h3>
            <h2 className="text-4xl font-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Christopher Porrino</h2>
            <div className="prose-investigative text-lg text-muted-foreground font-serif italic mb-8 border-l-4 border-gold/20 pl-8">
              "As a former Attorney General, he knows the levers of narrative control. He launched the media campaign that turned the Perry Law Report—a document commissioned by the accused—into a public exoneration."
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base">
              <p>
                Christopher Porrino, the 60th Attorney General of New Jersey, serves as counsel
                to Kevin Marino. His role is not merely legal; it is strategic. Porrino
                orchestrated the media placement of the Perry Law Report—a report into
                Marino’s conduct that was paid for by the university Marino chaired.
              </p>
              <p>
                The Perry Law campaign was a masterclass in pre-emptive strikes. By
                securing favorable coverage in legacy media outlets, Porrino pre-shaped
                the judicial and public perception of the case before the whistleblowers
                could have their day in court. Like Scrivo, he is a Seton Hall Law alumnus.
              </p>
            </div>
          </div>
        </section>

        {/* Ruemmler Profile */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-12">
            <div className="h-px bg-blood/30 mb-8" />
            <h3 className="text-xs font-bold tracking-widest uppercase text-blood mb-2 font-mono">Profile 03: The Investigtor</h3>
            <h2 className="text-4xl font-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Kathryn Ruemmler</h2>
            <div className="prose-investigative text-lg text-muted-foreground font-serif italic mb-8 border-l-4 border-blood/20 pl-8">
              "While leading the Latham investigation into the seminary's dark history, she was in 'intimate personal contact' with Jeffrey Epstein. Every name she cleared in that report must now be re-examined."
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base">
              <p>
                Kathryn Ruemmler produced the 24,000-page Latham Report—the very document
                the Regents fought to keep sealed for six years. A former White House
                Counsel, her credibility was the shield that protected the "Twelve Names"
                of August 2019.
              </p>
              <p>
                But the 2026 DOJ data dump revealed a haunting nexus. During the period of
                the investigation, Ruemmler was referring to Jeffrey Epstein as "Uncle Jeffrey"
                in private emails. Epstein’s own financial network had documented ties to
                Seton Hall. The report she authored was not an end to the scandal; it was
                part of its concealment.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Forensic Findings Box */}
      <div className="evidence-box bg-ink text-parchment p-12 rounded-sm shadow-2xl mt-20">
        <h3 className="section-heading text-gold mb-8 uppercase tracking-widest text-sm">Conclusion of Audit · The Closed Loop</h3>
        <p className="text-xl leading-relaxed italic mb-8 font-serif">
          "The Result is not an error in the system; it is the system's intended output."
        </p>
        <div className="space-y-6 text-sm opacity-80 font-serif leading-relaxed">
          <p>
            When whistleblowers enter the courtrooms of New Jersey, they do not just
            face an opposing counsel. They face an entire ecosystem of alumni,
            political allies, and judicial appointees who share a vested interest
            in the institution’s survival.
          </p>
          <p>
            This "Architecture of Silence" was engineered to withstand exactly this crisis.
            By placing the same people in the chancery, the boardrooms, and the
            bench, the Cathedral ensured that no matter how loud the truth became,
            the response would remain perfectly, tactically silent.
          </p>
        </div>
      </div>

      <JourneyNav />
    </div>
  );
}
