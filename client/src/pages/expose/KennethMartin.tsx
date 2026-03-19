/* ============================================================
   THE ARCHITECTURE OF SILENCE — The Founding Template
   Parchment theme — investigative broadsheet
   ============================================================ */
export default function KennethMartin() {
  return (
    <div className="page-enter max-w-4xl mx-auto px-6 py-12">
      <div className="exhibit-label mb-4">Historical Record · Exhibit 01</div>

      <header className="mb-12">
        <h1
          className="text-5xl font-black mb-4 leading-tight tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif", color: "var(--ink)" }}
        >
          The Ghost of <br />Kenneth Martin
        </h1>
        <p className="text-xl leading-relaxed mb-6" style={{ color: "var(--gold)", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
          How a documented predator became the blueprint for forty years of institutional concealment.
        </p>
        <div className="h-1 w-20 bg-blood mb-8" />
      </header>

      <div className="prose-investigative mb-16">
        <p className="first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:leading-none">
          T
          o understand the structural rot of the Cathedral, one must first confront the ghost of Father Kenneth Martin.
          He is not merely a footnote in the scandal; he is the DNA of the cover-up. Before Theodore McCarrick was
          a cardinal, before Joseph Reilly was a president, there was Martin—a man whose career demonstrated that
          in the Archdiocese of Newark, a documented history of child abuse was not a disqualification for power,
          but a prerequisite for loyalty.
        </p>

        <p>
          The lineage is direct. In 1983, when the first reports of Martin’s predations reached the chancery,
          the institution made a choice. It was a choice that would be replicated with haunting precision
          for four decades: protect the predator, promote the loyalist, and destroy the witness. Martin
          didn't just survive the allegations; he was elevated, eventually serving as the personal
          secretary to Archbishop McCarrick himself. He was the founding template for the "Architecture of Silence."
        </p>
      </div>

      <section className="mb-16">
        <h2 className="section-heading mb-8">The 1983 Mandate</h2>
        <div className="space-y-6 text-lg leading-relaxed italic border-l-4 border-gold/30 pl-8 mb-10" style={{ fontFamily: "'Lora', serif", color: "var(--ink-mid)" }}>
          "The machine has one operating principle: protect the institution, destroy the witness. Martin was the first documented application of that principle in the McCarrick era."
        </div>

        <div className="space-y-6 text-base leading-relaxed" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
          <p>
            When Mark Crawford first reported Martin’s abuse to Bishop Jerome Pechillo, he was met with the cold
            machinery of institutional indifference. Martin was never removed from ministry. Instead, he was
            moved—a tactical reassignment that shielded him from the law while keeping him within the fold.
            By 1990, Martin had transitioned from a local scandal to the inner circle of power, becoming
            the personal secretary to the man who would define the era: Theodore McCarrick.
          </p>
          <p>
            This was the "Founding Template" in action. The Archdiocese did not fail to address the abuse;
            it deliberately chose to weaponize it. A secretary with a dark secret is a secretary who is
            uniquely loyal. By the time Joseph Reilly succeeded Martin as McCarrick's right hand in 1994,
            the "Secretary Succession" had become a chain of institutional knowledge—a relay race of
            concealment that ran straight through the beach houses of Sea Girt and the seminaries of South Orange.
          </p>
        </div>
      </section>

      <section className="mb-16 bg-zinc-50 p-10 rounded-sm border border-gold/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <span className="text-8xl font-black font-serif">1983</span>
        </div>
        <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>The Chronology of Impunity</h3>

        <div className="space-y-8 relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gold/20" />

          <div className="relative pl-12">
            <div className="absolute left-3 top-2 w-3 h-3 rounded-full bg-blood shadow-sm" />
            <h4 className="font-bold text-ink mb-1 uppercase tracking-widest text-xs">The Report</h4>
            <p className="text-sm text-ink-mid uppercase mb-2">1983 · Newark Chancery</p>
            <p className="text-base text-ink-mid">
              Mark Crawford reports long-term abuse to the Archdiocese. Martin remains in ministry.
              The institution begins its forty-year strategy of tactical promotion.
            </p>
          </div>

          <div className="relative pl-12">
            <div className="absolute left-3 top-2 w-3 h-3 rounded-full bg-gold shadow-sm" />
            <h4 className="font-bold text-ink mb-1 uppercase tracking-widest text-xs">The Ascension</h4>
            <p className="text-sm text-ink-mid uppercase mb-2">1990 · The Inner Circle</p>
            <p className="text-base text-ink-mid">
              Martin is appointed personal secretary to Archbishop McCarrick. The abuser is now
              the gatekeeper of the Archdiocese's darkest secrets.
            </p>
          </div>

          <div className="relative pl-12">
            <div className="absolute left-3 top-2 w-3 h-3 rounded-full bg-gold shadow-sm" />
            <h4 className="font-bold text-ink mb-1 uppercase tracking-widest text-xs">The Succession</h4>
            <p className="text-sm text-ink-mid uppercase mb-2">1994 · Handing the Baton</p>
            <p className="text-base text-ink-mid">
              Joseph Reilly succeeds Martin as McCarrick's secretary. The infrastructure of
              silence is handed to a new generation of loyalists.
            </p>
          </div>

          <div className="relative pl-12">
            <div className="absolute left-3 top-2 w-3 h-3 rounded-full bg-blood shadow-sm" />
            <h4 className="font-bold text-ink mb-1 uppercase tracking-widest text-xs">The Arrest</h4>
            <p className="text-sm text-ink-mid uppercase mb-2">2001 · Wilmington, DE</p>
            <p className="text-base text-ink-mid">
              Martin is arrested for child sex abuse. The court grants "probation before judgment,"
              and the Church continues to permit his work for ecclesiastical entities.
            </p>
          </div>

          <div className="relative pl-12">
            <div className="absolute left-3 top-2 w-3 h-3 rounded-full bg-ink shadow-sm" />
            <h4 className="font-bold text-ink mb-1 uppercase tracking-widest text-xs">The Reckoning</h4>
            <p className="text-sm text-ink-mid uppercase mb-2">2008 · The Vatican</p>
            <p className="text-base text-ink-mid">
              Twenty-five years after the first report, the Vatican finally bars Martin from
              ministry. The template had served its purpose for a quarter-century.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="section-heading mb-8">The Delbarton Nexus</h2>
        <div className="space-y-6 text-base leading-relaxed" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
          <p>
            This was never just about a handful of wayward priests in Newark. The Martin template extended its
            reach into the elite corridors of the Delbarton School, the Benedictine preparatory academy
            where New Jersey's powerful educate their sons. The intersection was not coincidental. It
            was geographic, institutional, and cultural.
          </p>
          <p>
            In the northern New Jersey ecosystem, the same lawyers who defended the Archdiocese
            were the same men who sat on the boards of its institutions. The same culture of
            *omertà* that protected Martin was deployed to shield Delbarton from civil accountability.
            Victims' attorneys like McOmber documented a shared history of suppression that
            linked the two institutions—a "Cathedral of Documents" that housed the shared secrets
            of a unified power structure.
          </p>
        </div>
      </section>

      <div className="evidence-box bg-ink text-parchment p-12 rounded-sm shadow-2xl">
        <div className="exhibit-label text-gold mb-4 uppercase tracking-[0.2em] font-mono text-xs">Closing Argument · Exhibit 01</div>
        <p className="text-xl leading-relaxed italic mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
          "The machine does not fail; it functions as designed."
        </p>
        <p className="text-sm leading-relaxed opacity-80" style={{ fontFamily: "'Lora', serif" }}>
          Kenneth Martin was the test case. His career proved that the Church could survive the exposure
          of its worst elements by simply internalizing them. By making the abuser the secretary, the
          institution ensured that the most dangerous knowledge was held by the most compromised people.
          This is the foundation of the Origin: a labyrinth built not to seek the truth, but to bury it
          beneath layers of tactical promotion and strategic silence.
        </p>
      </div>
    </div>
  );
}
