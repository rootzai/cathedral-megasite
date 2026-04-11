import { JourneyNav } from "@/components/JourneyNav";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { PersonCard } from "@/components/PersonCard";
import { shuLawyers, investigativeFirms, type Badge, type Person } from "@/lib/data";

export default function LegalTrumvirate() {
  // Extract the triumvirate members from the structured data
  const scrivo = shuLawyers.find(f => f.firm === "O'Toole Scrivo, LLC")?.attorneys.find(a => a.name === "Thomas P. Scrivo");
  const porrino = shuLawyers.find(f => f.firm === "Lowenstein Sandler LLP")?.attorneys.find(a => a.name === "Christopher S. Porrino");
  const ruemmler = investigativeFirms.find(f => f.firm === "Latham & Watkins LLP")?.attorneys.find(a => a.name === "Kathryn Ruemmler");

  // Helper to convert attorney data to Person format for PersonCard
  const toPerson = (attorney: any, tenure: string): Person => ({
    name: attorney.name,
    role: attorney.title,
    tenure: tenure,
    badges: attorney.badges || [],
    note: attorney.note
  });

  return (
    <div className="page-enter max-w-4xl mx-auto px-6 py-12 space-y-16">

      <div className="mb-6">
        <Link href="/coverup" className="text-xs font-mono text-zinc-900 flex items-center gap-1 hover:underline font-bold">
          <ArrowLeft size={12} /> Back to Cover-Up Overview
        </Link>
      </div>

      {/* Investigative Header */}
      <header className="mb-16">
        <div className="exhibit-label mb-4 uppercase tracking-[0.2em] font-mono text-xs text-zinc-900 font-bold">Forensic Audit · The Legal Network</div>
        <h1
          className="text-6xl font-black mb-6 leading-tight tracking-tighter"
          style={{ fontFamily: "'Playfair Display', serif", color: "var(--ink)" }}
        >
          The Architecture <br />of <span className="text-zinc-600 italic">Silence</span>
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
          <div className="lg:col-span-5">
            {scrivo && <PersonCard person={toPerson(scrivo, "2018–Present")} index={0} />}
          </div>
          <div className="lg:col-span-7">
            <h3 className="text-xs font-bold tracking-widest uppercase text-zinc-600 mb-2 font-mono">Profile 01: The Gatekeeper</h3>
            <h2 className="text-4xl font-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Thomas P. Scrivo</h2>
            <div className="prose-investigative text-lg text-muted-foreground font-serif italic mb-8 border-l-4 border-zinc-300 pl-8">
              "He files motions in Essex County before judges he helped appoint. In 2025, the court sanctioned him for withholding documents. The Office of Attorney Ethics did nothing."
            </div>
            <div className="grid grid-cols-1 gap-6 text-base text-muted-foreground font-serif">
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
            <div className="h-px bg-zinc-200 mb-16" />
          </div>
          <div className="lg:col-span-5">
            {porrino && <PersonCard person={toPerson(porrino, "Active")} index={1} />}
          </div>
          <div className="lg:col-span-7">
            <h3 className="text-xs font-bold tracking-widest uppercase text-zinc-600 mb-2 font-mono">Profile 02: The Strategist</h3>
            <h2 className="text-4xl font-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Christopher Porrino</h2>
            <div className="prose-investigative text-lg text-muted-foreground font-serif italic mb-8 border-l-4 border-zinc-300 pl-8">
              "As a former Attorney General, he knows the levers of narrative control. He launched the media campaign that turned the Perry Law Report—a document commissioned by the accused—into a public exoneration."
            </div>
            <div className="grid grid-cols-1 gap-6 text-base text-muted-foreground font-serif">
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
            <div className="h-px bg-zinc-200 mb-16" />
          </div>
          <div className="lg:col-span-5">
            {ruemmler && <PersonCard person={toPerson(ruemmler, "2018–2019")} index={2} />}
          </div>
          <div className="lg:col-span-7">
            <h3 className="text-xs font-bold tracking-widest uppercase text-zinc-900 mb-2 font-mono">Profile 03: The Investigator</h3>
            <h2 className="text-4xl font-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Kathryn Ruemmler</h2>
            <div className="prose-investigative text-lg text-muted-foreground font-serif italic mb-8 border-l-4 border-zinc-300 pl-8">
              "While leading the Latham investigation into the seminary's dark history, she was in 'intimate personal contact' with Jeffrey Epstein. Every name she cleared in that report must now be re-examined."
            </div>
            <div className="grid grid-cols-1 gap-6 text-base text-muted-foreground font-serif">
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
        {/* Marino Profile */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-12">
            <div className="h-px bg-zinc-200 mb-16" />
          </div>
          <div className="lg:col-span-5">
             <div className="bg-zinc-100 p-8 border border-zinc-200 rounded-sm">
                <h4 className="font-mono text-xs uppercase tracking-tighter mb-2">Docket: ESX-L-8762-19</h4>
                <div className="text-3xl font-black mb-1">Kevin Marino</div>
                <div className="text-sm font-bold text-zinc-600 mb-4 uppercase">Architect of Privilege</div>
                <div className="space-y-1 text-xs font-mono uppercase tracking-widest text-zinc-500">
                  <div>Firm: MARINO, TORTORELLA & BOYLE</div>
                  <div>Role: General Counsel / Board Liaison</div>
                </div>
             </div>
          </div>
          <div className="lg:col-span-7">
            <h3 className="text-xs font-bold tracking-widest uppercase text-zinc-600 mb-2 font-mono">Profile 04: The Lead Counsel</h3>
            <h2 className="text-4xl font-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Kevin Marino</h2>
            <div className="prose-investigative text-lg text-muted-foreground font-serif italic mb-8 border-l-4 border-zinc-300 pl-8">
              "The mastermind behind the 'Shield' strategy. By classifying forensic audits as work-product, he ensured that evidence of institutional knowledge never reached the public domain."
            </div>
            <div className="grid grid-cols-1 gap-6 text-base text-muted-foreground font-serif">
              <p>
                Kevin Marino served as the outside general counsel who coordinated the university's defense during the most critical phases of the McCarrick litigation. His approach was defined by an aggressive use of the attorney-client privilege doctrine to seal nearly 24,000 pages of investigative data.
              </p>
              <p>
                In 2025, discovery revealed that Marino's firm was the central hub through which all "sensitive" institutional findings were filtered before being presented—in redacted form—to the Board of Regents.
              </p>
            </div>
          </div>
        </section>

        {/* The Perimeter Profile */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-12">
            <div className="h-px bg-zinc-200 mb-16" />
          </div>
          <div className="lg:col-span-5">
             <div className="bg-zinc-100 p-8 border border-zinc-200 rounded-sm">
                <h4 className="font-mono text-xs uppercase tracking-tighter mb-2">Docket: Newark Chancery Archive</h4>
                <div className="text-3xl font-black mb-1">Stio · Linares · Papalia</div>
                <div className="text-sm font-bold text-zinc-600 mb-4 uppercase">The Operational Perimeter</div>
                <div className="space-y-1 text-xs font-mono uppercase tracking-widest text-zinc-500">
                  <div>Network: The Newark Shield</div>
                  <div>Capacity: Operational Enforcers</div>
                </div>
             </div>
          </div>
          <div className="lg:col-span-7">
            <h3 className="text-xs font-bold tracking-widest uppercase text-zinc-600 mb-2 font-mono">Profile 05: The Enforcers</h3>
            <h2 className="text-4xl font-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Stio, Linares, & Papalia</h2>
            <div className="prose-investigative text-lg text-muted-foreground font-serif italic mb-8 border-l-4 border-zinc-300 pl-8">
              "The operational backbone of the Legal Wall. These attorneys managed the day-to-day suppression of documents across the Essex County court system."
            </div>
            <div className="grid grid-cols-1 gap-6 text-base text-muted-foreground font-serif">
              <p>
                Representing the boots-on-the-ground legal effort, the teams led by Stio, Linares, and Papalia were responsible for the technical execution of the discovery freeze. Their names appear consistently in the 2025 logs as the primary objectors to the release of the "Twelve Names."
              </p>
              <p>
                Their coordinated motion strategy in Essex County created a three-year delay in the unsealing of the Latham and Rabner exhibits, shielding the institution during the height of its financial reconfiguration.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Forensic Findings Box */}
      <div className="evidence-box bg-zinc-950 text-foreground p-12 rounded-sm shadow-2xl mt-20 border-t-4 border-zinc-800">
        <h3 className="section-heading text-zinc-400 mb-8 uppercase tracking-widest text-sm">Conclusion of Audit · The Closed Loop</h3>
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
