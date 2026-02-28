/* ============================================================
   THE ARCHITECTURE OF SILENCE — Reilly's Ascent
   Bright parchment theme — investigative broadsheet
   ============================================================ */
export default function ReillyProtection() {
  return (
    <div className="page-enter max-w-4xl mx-auto px-6 py-10">
      <div className="exhibit-label">Section III · Ecclesiastical Record</div>
      <h1
        className="text-4xl font-black mb-2 leading-tight"
        style={{ fontFamily: "'Playfair Display', serif", color: "var(--ink)" }}
      >
        Monsignor Joseph Reilly: From McCarrick's Secretary to University President
      </h1>
      <p className="text-base mb-8" style={{ color: "var(--gold)", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
        The Lineage of Protection · Seton Hall University Presidency · July 1, 2024
      </p>

      <div className="pull-quote">
        "A bishop's secretary is not a clerk. He is the archbishop's shadow — present at every meeting, privy to every secret, keeper of every schedule. To claim ignorance is to claim absence."
      </div>

      {/* The Secretary's Role */}
      <h2 className="section-heading">What It Means to Be an Archbishop's Secretary</h2>
      <div className="space-y-5 text-base leading-relaxed mb-8" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
        <p>
          In the Catholic Church, the role of a bishop's personal secretary is not ceremonial. The secretary
          manages the bishop's calendar, correspondence, and access. He is present at virtually all meetings.
          He screens visitors, drafts communications, and serves as the institutional memory of the bishop's
          office. He is, in the truest sense, the bishop's shadow.
        </p>
        <p>
          Monsignor Joseph Reilly served as Archbishop Theodore McCarrick's personal secretary in
          <strong style={{ color: "var(--ink)" }}> 1994</strong> — the year before Pope John Paul II's
          historic visit to New Jersey in 1995. Reilly played a direct role in enabling and organizing
          that papal visit. The proximity required by that role — the daily, intimate access to McCarrick's
          schedule, his guests, his private communications — makes Reilly's subsequent claims of ignorance
          regarding McCarrick's conduct extraordinarily difficult to sustain.
        </p>
        <p>
          Against this backdrop, Reilly's admission that he visited McCarrick's notorious
          <strong style={{ color: "var(--ink)" }}> Sea Girt beach house</strong> — even once — must be
          understood in its full significance. The Sea Girt property was the documented site of McCarrick's
          sexual abuse of seminarians. The Vatican's own 2020 report on McCarrick identified it as a
          primary location of abuse. For a man who served as the archbishop's secretary — whose professional
          role required near-constant proximity — to claim only a single visit strains credulity and
          challenges the narrative of Reilly's innocence that the university has carefully cultivated.
        </p>
      </div>

      {/* The Latham Report findings */}
      <h2 className="section-heading">What the Latham Report Found</h2>
      <div className="space-y-4 text-base leading-relaxed mb-6" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
        <p>
          The 2019 Latham Report — 24,000 pages, sealed for six years, produced by Kathryn Ruemmler of
          Latham &amp; Watkins — identified Reilly as a central figure in reporting failures during his
          tenure as Rector of the Immaculate Conception Seminary (ICS). The Board of Regents' Special
          Task Force, which reviewed the report, issued two formal letters recommending Reilly's removal:
        </p>
      </div>

      <div className="finding-box mb-8">
        <div className="exhibit-label" style={{ color: "var(--blood-bright)", borderColor: "var(--blood)" }}>
          Task Force Removal Recommendations — Verified
        </div>
        <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
          <p>
            <strong style={{ color: "var(--ink)" }}>November 25, 2019:</strong> The Task Force recommended
            Reilly's removal from the Board of Trustees and Board of Overseers, citing his failure to
            report a 2012 sexual assault complaint through proper university Title IX channels — instead
            handling it "within the Archdiocesan process," bypassing federal oversight requirements.
          </p>
          <p>
            <strong style={{ color: "var(--ink)" }}>February 2020:</strong> A supplemental letter reiterated
            the removal recommendation, citing Reilly's failure to report a 2014 sexual harassment incident
            at St. Andrew's Hall. The letter noted that his failure to act on this second incident — after
            having been formally warned about reporting obligations — constituted a pattern, not an oversight.
          </p>
          <p>
            <strong style={{ color: "var(--blood)" }}>Neither recommendation was acted upon.</strong> The
            Board of Regents — the same body that issued these recommendations — subsequently elected
            Reilly as university president. The trustees who voted for Reilly were regents during the
            scandal. They were complicit in electing a man they knew was documented as unfit to serve.
          </p>
        </div>
      </div>

      {/* Chronology */}
      <h2 className="section-heading">From Removal Recommendation to the Presidency</h2>
      <div style={{ overflowX: "auto" }} className="mb-8">
        <table className="forensic-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Event</th>
              <th>Forensic Significance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>1994</td>
              <td style={{ color: "var(--ink)" }}>Reilly serves as McCarrick's personal secretary</td>
              <td>Daily proximity to McCarrick; enabled 1995 papal visit</td>
            </tr>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>2012</td>
              <td style={{ color: "var(--ink)" }}>Sexual assault complaint at ICS</td>
              <td>Reilly handled "in-house" via Archdiocesan process; no Title IX report</td>
            </tr>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>2014</td>
              <td style={{ color: "var(--ink)" }}>Sexual harassment at St. Andrew's Hall</td>
              <td>Reilly received information; took no formal action</td>
            </tr>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>Sept 6, 2019</td>
              <td style={{ color: "var(--ink)" }}>Latham Report presented to Board</td>
              <td>24,000 pages; 12 clergymen identified; Reilly's failures documented</td>
            </tr>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>Nov 25, 2019</td>
              <td style={{ color: "var(--ink)" }}>First Task Force removal letter</td>
              <td>Recommended removal from all boards</td>
            </tr>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>Feb 2020</td>
              <td style={{ color: "var(--ink)" }}>Second Task Force removal letter</td>
              <td>Reiterated removal; cited 2014 failure as pattern</td>
            </tr>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>May 2022</td>
              <td style={{ color: "var(--ink)" }}>Reilly placed on sabbatical</td>
              <td>Stepped down as ICS Rector; appointed Vice Provost</td>
            </tr>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>July 1, 2024</td>
              <td style={{ color: "var(--ink)" }}>Reilly installed as President</td>
              <td style={{ color: "var(--blood)", fontWeight: 700 }}>Elected by regents who knew of removal recommendations</td>
            </tr>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>July 18, 2024</td>
              <td style={{ color: "var(--ink)" }}>Grand jury subpoena to Google</td>
              <td>18 days after installation; attempt to unmask whistleblower warning regents</td>
            </tr>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>November 2025</td>
              <td style={{ color: "var(--ink)" }}>Judge Benjamin orders Latham Report produced</td>
              <td>Scrivo sanctioned for withholding it for years</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* The Task Force corruption */}
      <h2 className="section-heading">The Task Force's Double Dealing</h2>
      <div className="space-y-4 text-base leading-relaxed mb-8" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
        <p>
          The Board of Regents' Special Task Force is perhaps the most revealing element of this entire
          investigation. It was created to provide the appearance of accountability — and it did, briefly,
          by issuing two formal letters recommending Reilly's removal. But the Task Force's ultimate
          function was not accountability. It was containment.
        </p>
        <p>
          The same body that documented Reilly's unfitness for leadership subsequently presided over his
          election to the presidency. The cardinal — Cardinal Tobin, who himself failed to appear before
          investigators in the Gibbons probe — refused to abide by the Task Force's recommendations.
          Under the university's own protocols, a refusal to cooperate with an investigation carries
          automatic consequences. Those consequences were never applied. They were not applied to Tobin,
          and they were not applied to Reilly.
        </p>
        <p>
          This is the "double dealing and corruption of the task force" that whistleblowers have documented:
          a body that created the record of wrongdoing and then buried it, using the existence of the
          investigation as evidence of institutional seriousness while ensuring that none of the
          investigation's conclusions were ever realized.
        </p>
      </div>

      <div className="evidence-box">
        <div className="exhibit-label">The Latham Report — Six Years of Suppression</div>
        <p className="text-sm leading-relaxed" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
          The 2019 Latham Report was presented to the Board on August 27, 2019 — 17 days after Jeffrey
          Epstein's death. Its lead investigator, Kathryn Ruemmler, was in frequent contact with Epstein
          during the investigation (see Section VI). The report was subsequently sealed and withheld from
          plaintiffs, survivors, and the public for nearly six years. Thomas Scrivo was sanctioned by
          Judge Avion Benjamin for his role in withholding it. The report was finally ordered produced
          in November 2025 — six years after it documented, in 24,000 pages, what the institution already knew.
        </p>
      </div>
    </div>
  );
}
