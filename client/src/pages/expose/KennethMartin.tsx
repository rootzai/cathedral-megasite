/* ============================================================
   THE ARCHITECTURE OF SILENCE — Father Kenneth Martin
   Bright parchment theme — investigative broadsheet
   ============================================================ */
export default function KennethMartin() {
  return (
    <div className="page-enter max-w-4xl mx-auto px-6 py-10">
      <div className="exhibit-label">Section VII · Historical Record</div>
      <h1
        className="text-4xl font-black mb-2 leading-tight"
        style={{ fontFamily: "'Playfair Display', serif", color: "var(--ink)" }}
      >
        Father Kenneth Martin
      </h1>
      <p className="text-base mb-8" style={{ color: "var(--gold)", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
        The Founding Template — From Documented Abuser to Archbishop's Secretary · 1983–2008
      </p>

      <div className="pull-quote">
        "The lineage is not metaphorical. The same institutional logic that protected Martin in 1983 protected McCarrick in 2019 and protects Reilly today. The machine has one operating principle: protect the institution, destroy the witness."
      </div>

      <div className="space-y-5 text-base leading-relaxed mb-8" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
        <p>
          To understand the institutional logic of the current crisis, one must begin with Father Kenneth
          Martin — a documented child molester who was protected by the Archdiocese of Newark in 1983
          and subsequently became the personal secretary to Archbishop Theodore McCarrick. Martin is not
          a peripheral figure. He is the founding template.
        </p>
        <p>
          The pattern established with Martin — documentation of abuse, institutional suppression,
          reassignment, promotion — was replicated with such consistency over the following four decades
          that it must be understood as <strong style={{ color: "var(--ink)" }}>institutional policy,
          not institutional failure</strong>. The Archdiocese did not fail to address abuse. It
          deliberately chose to protect abusers. Martin was the first documented instance of that choice
          in the McCarrick era.
        </p>
      </div>

      {/* The Martin Record */}
      <h2 className="section-heading">The Documented Record</h2>
      <div style={{ overflowX: "auto" }} className="mb-8">
        <table className="forensic-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Event</th>
              <th>Institutional Response</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>1983</td>
              <td style={{ color: "var(--ink)" }}>Mark Crawford reports long-term abuse by Martin to Bishop Jerome Pechillo of the Newark Archdiocese</td>
              <td style={{ color: "var(--blood)" }}>Martin never removed from ministry. Promoted instead.</td>
            </tr>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>~1990</td>
              <td style={{ color: "var(--ink)" }}>Martin appointed personal secretary to Archbishop McCarrick</td>
              <td>Promotion despite documented 1983 abuse report. McCarrick himself would later be defrocked.</td>
            </tr>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>1994</td>
              <td style={{ color: "var(--ink)" }}>Reilly succeeds Martin as McCarrick's secretary</td>
              <td>Continuity of the secretary role; Reilly inherits Martin's institutional position</td>
            </tr>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>1997</td>
              <td style={{ color: "var(--ink)" }}>Crawford meets with McCarrick, who promises Martin will never have access to children again</td>
              <td style={{ color: "var(--blood)" }}>Martin immediately returned to ministry. Photographed with McCarrick at a children's party.</td>
            </tr>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>2001</td>
              <td style={{ color: "var(--ink)" }}>Martin arrested in Wilmington, Delaware for child sex abuse</td>
              <td>Court ruled "probation before judgment." Permitted to work for ecclesiastical entities for years after.</td>
            </tr>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>2008</td>
              <td style={{ color: "var(--ink)" }}>Martin formally barred from ministry by the Vatican</td>
              <td style={{ color: "var(--blood)" }}>25 years after the initial abuse report to the Archdiocese</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* The Secretary Succession */}
      <h2 className="section-heading">The Secretary Succession — A Chain of Institutional Knowledge</h2>
      <div className="space-y-4 text-base leading-relaxed mb-8" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
        <p>
          The succession from Martin to Reilly in the role of McCarrick's personal secretary is not
          merely a biographical detail. It is a chain of institutional knowledge. Martin knew what
          McCarrick was. He served as his secretary anyway — and was promoted to that role after his
          own abuse history was documented. Reilly succeeded Martin in the same role in 1994. The
          question of what Reilly knew, and when he knew it, is not answered by his admission of a
          single visit to the Sea Girt beach house. It is answered by the institutional logic of
          the role he occupied.
        </p>
        <p>
          A bishop's secretary does not merely manage a calendar. He is the gatekeeper of the bishop's
          private life. He knows who visits, who calls, who is invited to the beach house. The claim
          that Reilly — who served in this role for years, who organized the 1995 papal visit, who was
          present at the highest levels of the Archdiocese's operations — was unaware of the conduct
          that the Vatican's own 2020 report documented in exhaustive detail is not a plausible claim.
          It is a legal position.
        </p>
      </div>

      {/* The Delbarton Connection */}
      <h2 className="section-heading">The Delbarton Connection</h2>
      <div className="space-y-4 text-base leading-relaxed mb-8" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
        <p>
          The abuse network documented in this dossier extends beyond the Archdiocese of Newark to
          Delbarton School — the prestigious Benedictine preparatory school in Morris County, New Jersey.
          At least one of the principal figures in this investigation is a documented Delbarton victim.
          The school's own abuse history — documented in civil litigation — is part of the same
          institutional ecosystem: the same Catholic hierarchy, the same culture of suppression, the
          same deployment of legal resources to protect the institution from accountability.
        </p>
        <p>
          Attorney McOmber, a prominent victims' attorney in New Jersey, has represented multiple
          Delbarton survivors. The intersection of the Delbarton abuse history with the Seton Hall
          network is not coincidental — it reflects the geographic and institutional concentration
          of Catholic institutional power in northern New Jersey, where the same hierarchy, the same
          lawyers, and the same culture of omertà have operated for decades.
        </p>
      </div>

      <div className="evidence-box">
        <div className="exhibit-label">The Pattern — Four Decades of Institutional Logic</div>
        <p className="text-sm leading-relaxed" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
          The sequence from Martin (1983) to McCarrick (2019) to Reilly (2024) is not a series of
          isolated failures. It is a demonstration of institutional consistency. In each case, the
          institution had documentation of misconduct. In each case, the institution chose protection
          over accountability. In each case, the individuals who could have spoken were silenced —
          through settlement agreements, through career consequences, through the deployment of legal
          resources that most victims cannot match. The machine has one operating principle: protect
          the institution, destroy the witness. Father Kenneth Martin was the first documented
          application of that principle in the McCarrick era. He was not the last.
        </p>
      </div>
    </div>
  );
}
