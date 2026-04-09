/* ============================================================
   THE ARCHITECTURE OF SILENCE — The McCarrick Network
   Church, State & the Mob — NJ Systemic Corruption
   ============================================================ */
import { PersonCard } from "@/components/PersonCard";
import { type Person, type Badge, boardOfTrustees, boardOfRegents, shuLawyers, investigativeFirms } from "@/lib/data";

export default function McCarrickNetwork() {
  // Extract key actors for the network grid
  const mccarrick: Person = {
    name: "Theodore McCarrick",
    role: "Former Archbishop of Newark/Washington",
    tenure: "1981–2001 (NJ)",
    badges: ["clergy"] as Badge[],
    note: "Network founder; patron of Reilly, Checchio, and others. Defrocked 2019 after decades of documented abuse."
  };

  const tobin = boardOfTrustees.leadership.find(p => p.name.includes("Tobin"));
  const reilly = boardOfTrustees.exOfficio.find(p => p.name.includes("Reilly"));
  const checchio = boardOfTrustees.members.find(p => p.name.includes("Checchio"));

  const scrivoAttorney = shuLawyers.find(f => f.firm === "O'Toole Scrivo, LLC")?.attorneys.find(a => a.name === "Thomas P. Scrivo");
  const porrinoAttorney = shuLawyers.find(f => f.firm === "Lowenstein Sandler LLP")?.attorneys.find(a => a.name === "Christopher S. Porrino");
  const ruemmlerAttorney = investigativeFirms.find(f => f.firm === "Latham & Watkins LLP")?.attorneys.find(a => a.name === "Kathryn Ruemmler");
  const marino = boardOfRegents.leadership.find(p => p.name.includes("Marino"));

  const networkActors: Person[] = [
    mccarrick,
    tobin as Person,
    reilly as Person,
    checchio as Person,
    {
      name: scrivoAttorney?.name || "Thomas Scrivo",
      role: scrivoAttorney?.title || "Lead Counsel",
      tenure: "2018–Present",
      badges: (scrivoAttorney as any)?.badges || [],
      note: scrivoAttorney?.note
    },
    {
      name: porrinoAttorney?.name || "Christopher Porrino",
      role: porrinoAttorney?.title || "Strategist",
      tenure: "Active",
      badges: (porrinoAttorney as any)?.badges || [],
      note: porrinoAttorney?.note
    },
    {
      name: ruemmlerAttorney?.name || "Kathryn Ruemmler",
      role: ruemmlerAttorney?.title || "Investigator",
      tenure: "2018–2019",
      badges: (ruemmlerAttorney as any)?.badges || [],
      note: ruemmlerAttorney?.note
    },
    marino as Person
  ].filter(Boolean);

  return (
    <div className="page-enter max-w-6xl mx-auto px-6 py-10">
      <div className="exhibit-label">Section II · The Network</div>
      <h1
        className="text-4xl md:text-6xl font-black mb-4 leading-tight tracking-tighter"
        style={{ fontFamily: "'Playfair Display', serif", color: "var(--ink)" }}
      >
        The House <br />McCarrick <span className="text-zinc-800 italic">Built</span>
      </h1>
      <p className="text-lg md:text-xl mb-2 text-gold italic font-serif">
        Church, State, Judiciary &amp; Organized Crime — The Interlocking Architecture of New Jersey Corruption
      </p>
      <p className="text-xs mb-12 font-mono text-muted-foreground uppercase tracking-widest">
        Forensic Analysis · February 2026 · Submitted to Chief Justice Stuart Rabner
      </p>

      <div className="pull-quote border-l-4 border-zinc-400 pl-8 mb-16">
        <p className="text-2xl italic text-muted-foreground font-serif leading-relaxed">
          "McCarrick didn't just abuse seminarians. He built a maze that his men are still running."
        </p>
      </div>

      {/* Introduction */}
      <div className="prose-investigative max-w-4xl text-lg leading-relaxed text-muted-foreground font-serif space-y-8 mb-20">
        <p className="first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-ink">
          T
          heodore Edgar McCarrick was not merely a predator. He was the architect of a
          <strong className="text-ink"> patronage and protection network</strong> that fused the Catholic
          Archdiocese of Newark, the New Jersey judiciary, the state's political class, and — through documented
          financial relationships — elements of organized crime. His defrocking by the Vatican in 2019 did not
          dismantle this network. It went underground, and it is stronger today than when he left.
        </p>
        <p>
          Seton Hall University is the institutional center of gravity for this network. Founded in 1856 by the
          Diocese of Newark, it is the only Catholic diocesan university in the United States. Every president
          since its founding has been a priest of the Archdiocese of Newark. The Board of Regents — the
          governing body — is composed of bishops, archbishops, and lay trustees appointed by the same
          ecclesiastical hierarchy that McCarrick commanded.
          <strong className="text-ink"> Seton Hall is not merely affiliated with the Archdiocese. It is the Archdiocese's instrument.</strong>
        </p>
        <p>
          When McCarrick was elevated to Archbishop of Washington in 2000 and made a Cardinal in 2001, he left
          behind a network of loyalists embedded at every level of New Jersey institutional life. The men he
          promoted, the judges whose appointments he influenced, the lawyers he cultivated — they remain in
          place. The investigation documented in this dossier is, at its core, an investigation of what happens
          when that network is threatened with exposure.
        </p>
      </div>

      {/* The Three Pillars */}
      <h2 className="section-heading mb-12">The Three Pillars of the Network</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        {/* Pillar 1: Church */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-zinc-800 border-b border-zinc-400/20 pb-2 font-display">I. The Church</h3>
          <p className="text-base text-muted-foreground font-serif leading-relaxed">
            The seminary at Seton Hall was McCarrick's recruitment ground. Those who submitted to his
            demands were rewarded with rapid promotion. Today, the same hierarchy protects the network's legacy.
          </p>
        </div>

        {/* Pillar 2: State */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-zinc-800 border-b border-zinc-400/20 pb-2 font-display">II. The State</h3>
          <p className="text-base text-muted-foreground font-serif leading-relaxed">
            Governor Christie appointed 75+ judges currently on the bench. His top legal aides now
            serve as the university's defense counsel, creating a "closed loop" in the judiciary.
          </p>
        </div>

        {/* Pillar 3: The Mob */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-zinc-800 border-b border-zinc-400/20 pb-2 font-display">III. The Omertà</h3>
          <p className="text-base text-muted-foreground font-serif leading-relaxed">
            The institutional response to abuse — silence, transfer, and intimidation — is structurally
            identical to the mob's culture of omertà. Loyalty is the supreme virtue; exposure is the crime.
          </p>
        </div>
      </div>

      {/* Network Grid */}
      <h2 className="section-heading mb-8">The Network · Audit Results</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {networkActors.map((person, idx) => (
          <PersonCard key={person.name} person={person} index={idx} />
        ))}
      </div>

      {/* Where are they now */}
      <div className="finding-box bg-zinc-50 border border-zinc-300 p-12 rounded-sm mb-20 ring-1 ring-blood/20">
        <div className="exhibit-label mb-6 bg-zinc-800 text-zinc-100 inline-block px-4 py-1 uppercase tracking-widest text-xs font-bold">
          The 12 Clergymen — "Where Are They Now?"
        </div>
        <div className="space-y-6 text-lg text-muted-foreground font-serif leading-relaxed">
          <p>
            The Latham Report's 12 identified clergymen were not prosecuted, not laicized, and not publicly
            named. They were transferred. The dioceses that now unknowingly host these individuals include
            parishes and schools across the Northeast. This is the mechanism by which the network perpetuates
            itself: not through active conspiracy in every case, but through the institutional reflex of
            <strong className="text-zinc-900"> moving the problem rather than solving it</strong>.
          </p>
          <p>
            The task force's "double dealing and corruption" — its refusal to abide by its own recommendations,
            its ultimate facilitation of Reilly's promotion — is the clearest evidence that the Board of Regents
            was not a reform body. It was a containment body. Its purpose was to manage the appearance of
            accountability while ensuring none of the actual consequences of accountability were realized.
          </p>
        </div>
      </div>

      {/* The Sopranos parallel */}
      <div className="evidence-box border-t-4 border-zinc-400 pt-12">
        <h3 className="text-xs font-bold font-mono tracking-widest uppercase text-zinc-800 mb-4">Case Study · Institutional Parallels</h3>
        <p className="text-2xl font-black mb-6 leading-tight font-display">The Sopranos Parallel — <br />Not a Metaphor</p>
        <div className="space-y-6 text-base text-muted-foreground font-serif leading-relaxed max-w-3xl">
          <p>
            David Chase set <em>The Sopranos</em> in New Jersey deliberately. The show's central insight — that
            organized crime, institutional religion, and political power in New Jersey are not separate systems
            but a single interlocking culture of omertà — is not fiction.
          </p>
          <p>
            The difference is that the Church's version of this system has tax-exempt status, a law school,
            and a university presidency to offer its loyalists. The use of a criminal grand jury subpoena
            to unmask a civil whistleblower is the institutional equivalent of a knock on the door at night.
            The message is: <strong className="text-zinc-800 shadow-blood">we know who you are, and we will find you.</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
