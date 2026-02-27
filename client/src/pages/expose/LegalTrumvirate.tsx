/* ============================================================
   THE ARCHITECTURE OF SILENCE — Christie's Legal Network
   Bright parchment theme — investigative broadsheet
   All law firm affiliations verified February 2026
   ============================================================ */
export default function LegalTrumvirate() {
  return (
    <div className="page-enter max-w-4xl mx-auto px-6 py-10">
      <div className="exhibit-label">Section V · Legal Network</div>
      <h1
        className="text-4xl font-black mb-2 leading-tight"
        style={{ fontFamily: "'Playfair Display', serif", color: "var(--ink)" }}
      >
        Christie's Legal Network
      </h1>
      <p className="text-base mb-8" style={{ color: "var(--gold)", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
        Six Attorneys. Four Firms. One Institution. The Christie Administration's Legal Apparatus Deployed Against Whistleblowers.
      </p>

      <div className="pull-quote">
        "When Scrivo files a motion in Essex County, he is filing it before judges he helped appoint. When Porrino represents the accused, he does so as a former Attorney General whose office shaped the regulatory structure overseeing the case. This is not coincidence. It is the architecture."
      </div>

      <div className="space-y-4 text-base leading-relaxed mb-8" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
        <p>
          The structural integrity of the protectionist network is maintained by a cohort of high-profile legal
          actors with profound influence over the New Jersey judiciary and ecclesiastical oversight. The majority
          are Seton Hall Law alumni. Most built their careers during or around the Christie administration.
          All are now deployed — directly or indirectly — in the defense of an institution they helped shape,
          against the people who tried to hold it accountable.
        </p>
        <p>
          Critics call them <strong style={{ color: "var(--ink)" }}>"Christie's legal network"</strong> — not
          because they are criminals, but because they operate by the same logic as any closed institutional
          system: loyalty over law, institutional protection over individual accountability, and the deployment
          of accumulated political capital to silence those who speak. The result is a
          <strong style={{ color: "var(--ink)" }}> closed loop</strong> — the lawyers who protect the university
          are the same lawyers who built the judiciary that adjudicates challenges to the university.
        </p>
      </div>

      {/* ── SCRIVO ── */}
      <div className="person-card mb-6">
        <div className="flex items-start justify-between mb-1">
          <div
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: "var(--gold)", fontFamily: "'Playfair Display', serif", letterSpacing: "0.14em" }}
          >
            O'Toole Scrivo, LLC · Cedar Grove, NJ
          </div>
        </div>
        <h2 className="text-xl font-black mb-0.5" style={{ fontFamily: "'Playfair Display', serif", color: "var(--ink)" }}>
          Thomas P. Scrivo
        </h2>
        <p className="text-sm italic mb-3" style={{ color: "var(--ink-light)", fontFamily: "'Lora', serif" }}>
          Managing Partner · Former Chief Counsel to Governor Christie · Outside Litigation Counsel, Seton Hall University
        </p>
        <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
          <p>
            Thomas Scrivo served as Chief Counsel to Governor Chris Christie — the most powerful legal position
            in state government, responsible for vetting and recommending judicial appointments. During Christie's
            two terms, Scrivo was instrumental in placing <strong style={{ color: "var(--ink)" }}>over 75 judges</strong> on
            the New Jersey bench. He then co-founded O'Toole Scrivo, LLC with former State Senator Kevin O'Toole,
            and became outside litigation counsel to Seton Hall University.
          </p>
          <p>
            The structural conflict is explicit: Scrivo files motions in Essex County Superior Court before judges
            he helped appoint. In 2025, Scrivo was <strong style={{ color: "var(--blood)" }}>sanctioned by the court</strong> for
            withholding documents in the Nyre litigation. The Office of Attorney Ethics declined to investigate.
            His father, three of his children, and he himself are Seton Hall alumni — a family loyalty that
            transforms professional representation into personal institutional protection.
          </p>
        </div>
        <div className="mt-3 pt-3 flex gap-6 text-xs" style={{ borderTop: "1px solid var(--stone-border)", fontFamily: "'Lora', serif", color: "var(--ink-light)" }}>
          <span><strong style={{ color: "var(--blood)" }}>Role:</strong> SHU Litigation Counsel</span>
          <span><strong style={{ color: "var(--blood)" }}>Sanction:</strong> 2025 — Withheld documents</span>
          <span><strong style={{ color: "var(--blood)" }}>OAE:</strong> Declined to investigate</span>
        </div>
      </div>

      {/* ── PORRINO ── */}
      <div className="person-card mb-6">
        <div className="flex items-start justify-between mb-1">
          <div
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: "var(--gold)", fontFamily: "'Playfair Display', serif", letterSpacing: "0.14em" }}
          >
            Lowenstein Sandler LLP · Roseland, NJ
          </div>
        </div>
        <h2 className="text-xl font-black mb-0.5" style={{ fontFamily: "'Playfair Display', serif", color: "var(--ink)" }}>
          Christopher Porrino
        </h2>
        <p className="text-sm italic mb-3" style={{ color: "var(--ink-light)", fontFamily: "'Lora', serif" }}>
          Partner &amp; Chair, Litigation Department · Former Attorney General of New Jersey (60th) · Counsel to Kevin Marino
        </p>
        <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
          <p>
            Christopher Porrino served as New Jersey's 60th Attorney General under Governor Christie, following
            his earlier role as Christie's Chief Counsel. He returned to Lowenstein Sandler in 2018 and now
            chairs the firm's Litigation Department. His role in this network is to represent
            <strong style={{ color: "var(--ink)" }}> Kevin Marino</strong> — the former Seton Hall Board Chair
            who is the accused harasser at the center of the Nyre litigation.
          </p>
          <p>
            Porrino's most documented act in this network was orchestrating the
            <strong style={{ color: "var(--blood)" }}> Perry Law media campaign</strong> — a coordinated effort
            to place favorable coverage of the Perry Law Report (the investigation commissioned by Marino himself
            into Marino's own conduct) in New Jersey media outlets. This campaign was designed to pre-shape
            public and judicial perception of the investigation's findings before the Nyre case could proceed.
            The Office of Attorney Ethics declined to investigate Porrino's conduct in this matter.
          </p>
        </div>
        <div className="mt-3 pt-3 flex gap-6 text-xs" style={{ borderTop: "1px solid var(--stone-border)", fontFamily: "'Lora', serif", color: "var(--ink-light)" }}>
          <span><strong style={{ color: "var(--blood)" }}>Role:</strong> Counsel to Kevin Marino</span>
          <span><strong style={{ color: "var(--blood)" }}>Act:</strong> Perry Law media campaign</span>
          <span><strong style={{ color: "var(--blood)" }}>OAE:</strong> Declined to investigate</span>
        </div>
      </div>

      {/* ── RUEMMLER ── */}
      <div className="person-card mb-6">
        <div className="flex items-start justify-between mb-1">
          <div
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: "var(--gold)", fontFamily: "'Playfair Display', serif", letterSpacing: "0.14em" }}
          >
            Goldman Sachs (resigned Feb. 2026) · Formerly Latham &amp; Watkins LLP
          </div>
        </div>
        <h2 className="text-xl font-black mb-0.5" style={{ fontFamily: "'Playfair Display', serif", color: "var(--ink)" }}>
          Kathryn Ruemmler
        </h2>
        <p className="text-sm italic mb-3" style={{ color: "var(--ink-light)", fontFamily: "'Lora', serif" }}>
          Former Chief Legal Officer, Goldman Sachs · Former White House Counsel (Obama) · Led the Latham &amp; Watkins Seminary Investigation
        </p>
        <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
          <p>
            Kathryn Ruemmler led the Latham &amp; Watkins investigation into sexual misconduct at Seton Hall's
            Immaculate Conception Seminary — the investigation that produced the 24,000-page Latham Report,
            sealed for six years. The DOJ document release of February 2026 revealed that during the period
            she was conducting this investigation, Ruemmler was in
            <strong style={{ color: "var(--blood)" }}> intimate personal contact with Jeffrey Epstein</strong>,
            referring to him in emails as "Uncle Jeffrey."
          </p>
          <p>
            Simultaneously, Epstein's banking network had documented financial ties to Seton Hall University.
            Ruemmler resigned as Goldman Sachs Chief Legal Officer effective June 30, 2026, following the
            public release of the Epstein emails. The Latham Report she produced was sealed from 2019 to 2025,
            when Judge Avion Benjamin ordered it produced. The question of whether the report's conclusions
            were shaped by Ruemmler's relationship with Epstein — and with the institution that commissioned it —
            remains unanswered.
          </p>
        </div>
        <div className="mt-3 pt-3 flex gap-6 text-xs" style={{ borderTop: "1px solid var(--stone-border)", fontFamily: "'Lora', serif", color: "var(--ink-light)" }}>
          <span><strong style={{ color: "var(--blood)" }}>Role:</strong> Led seminary investigation</span>
          <span><strong style={{ color: "var(--blood)" }}>Report:</strong> Sealed 2019–2025</span>
          <span><strong style={{ color: "var(--blood)" }}>Status:</strong> Resigned Goldman Sachs Feb. 2026</span>
        </div>
      </div>

      {/* ── MARINO ── */}
      <div className="person-card mb-6">
        <div className="flex items-start justify-between mb-1">
          <div
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: "var(--gold)", fontFamily: "'Playfair Display', serif", letterSpacing: "0.14em" }}
          >
            Marino, Tortorella &amp; Boyle, P.C. · Chatham, NJ
          </div>
        </div>
        <h2 className="text-xl font-black mb-0.5" style={{ fontFamily: "'Playfair Display', serif", color: "var(--ink)" }}>
          Kevin H. Marino
        </h2>
        <p className="text-sm italic mb-3" style={{ color: "var(--ink-light)", fontFamily: "'Lora', serif" }}>
          Founding Partner · Former Chair, Seton Hall University Board of Regents · Accused Harasser — Subject of the Nyre Litigation
        </p>
        <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
          <p>
            Kevin Marino occupies a unique position in this network: he is simultaneously a prominent white-collar
            defense attorney and the central accused figure in the Nyre litigation. As founding partner of
            Marino, Tortorella &amp; Boyle — one of New Jersey's most respected white-collar boutiques — he
            commanded enormous institutional credibility. As Chair of the Seton Hall Board of Regents, he
            wielded direct governance authority over the university.
          </p>
          <p>
            Multiple Seton Hall employees documented Marino's sexual harassment of Kelli Nyre at university
            events. When Dr. Joseph Nyre reported Marino's conduct through proper channels, Marino
            <strong style={{ color: "var(--blood)" }}> commissioned the Perry Law Report</strong> — an investigation
            into his own conduct, conducted by a firm he selected, paid for by the university he chaired.
            That report's conclusions were then used by Judge Spencer to dismiss the Nyres' complaint on
            February 19, 2026. Marino resigned as Board Chair but was not removed; he was allowed to resign
            on his own terms, with his reputation managed by Christopher Porrino.
          </p>
        </div>
        <div className="mt-3 pt-3 flex gap-6 text-xs" style={{ borderTop: "1px solid var(--stone-border)", fontFamily: "'Lora', serif", color: "var(--ink-light)" }}>
          <span><strong style={{ color: "var(--blood)" }}>Role:</strong> Former SHU Board Chair</span>
          <span><strong style={{ color: "var(--blood)" }}>Act:</strong> Commissioned own investigation</span>
          <span><strong style={{ color: "var(--blood)" }}>Status:</strong> Resigned as Chair; represented by Porrino</span>
        </div>
      </div>

      {/* ── CRITCHLEY ── */}
      <div className="person-card mb-6">
        <div className="flex items-start justify-between mb-1">
          <div
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: "var(--gold)", fontFamily: "'Playfair Display', serif", letterSpacing: "0.14em" }}
          >
            Critchley, Kinum &amp; Luria, LLC · Roseland, NJ
          </div>
        </div>
        <h2 className="text-xl font-black mb-0.5" style={{ fontFamily: "'Playfair Display', serif", color: "var(--ink)" }}>
          Michael Critchley, Sr.
        </h2>
        <p className="text-sm italic mb-3" style={{ color: "var(--ink-light)", fontFamily: "'Lora', serif" }}>
          Founding Partner · Seton Hall University B.A. &amp; J.D. · New Jersey's Preeminent White-Collar Defense Attorney
        </p>
        <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
          <p>
            Michael Critchley, Sr. is among the most decorated white-collar criminal defense attorneys in
            New Jersey history. A Seton Hall alumnus at both the undergraduate and law school level, he founded
            Critchley, Kinum &amp; Luria in 1975. The firm has represented individuals and institutions in
            federal and state white-collar criminal matters for five decades. Critchley and Kevin Marino are
            ranked together as <strong style={{ color: "var(--ink)" }}>No. 2 on NJBiz's 2024 Legal Power List</strong> —
            a pairing that reflects their shared institutional standing in New Jersey's legal elite.
          </p>
          <p>
            Critchley's relevance to this network is structural: he represents the depth of the Seton Hall
            alumni legal establishment. His firm's expertise in white-collar defense, internal investigations,
            and government relations places it at the intersection of the ecclesiastical and legal networks
            documented throughout this dossier. The firm's work in the
            <strong style={{ color: "var(--blood)" }}> George Norcross indictment defense</strong> — alongside
            Kevin Marino — demonstrates the tight cohesion of this legal cohort when institutional power
            is threatened.
          </p>
        </div>
        <div className="mt-3 pt-3 flex gap-6 text-xs" style={{ borderTop: "1px solid var(--stone-border)", fontFamily: "'Lora', serif", color: "var(--ink-light)" }}>
          <span><strong style={{ color: "var(--blood)" }}>Firm founded:</strong> 1975</span>
          <span><strong style={{ color: "var(--blood)" }}>Education:</strong> Seton Hall B.A. &amp; J.D.</span>
          <span><strong style={{ color: "var(--blood)" }}>NJBiz 2024:</strong> #2 Legal Power List (with Marino)</span>
        </div>
      </div>

      {/* ── STIO ── */}
      <div className="person-card mb-8">
        <div className="flex items-start justify-between mb-1">
          <div
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: "var(--gold)", fontFamily: "'Playfair Display', serif", letterSpacing: "0.14em" }}
          >
            Troutman Pepper Locke LLP · Princeton, NJ
          </div>
        </div>
        <h2 className="text-xl font-black mb-0.5" style={{ fontFamily: "'Playfair Display', serif", color: "var(--ink)" }}>
          Angelo A. Stio III
        </h2>
        <p className="text-sm italic mb-3" style={{ color: "var(--ink-light)", fontFamily: "'Lora', serif" }}>
          Partner · Seton Hall University B.S. (1988) · Counsel of Record for Seton Hall University in Multiple Federal Cases
        </p>
        <div className="space-y-3 text-sm leading-relaxed" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
          <p>
            Angelo Stio is the Seton Hall network's institutional defense attorney of record in federal court.
            A Seton Hall undergraduate alumnus (B.S. 1988), Stio has represented the university in multiple
            federal cases, including student tuition refund litigation arising from COVID-19 closures and
            employment discrimination matters. His firm, Troutman Pepper Locke, is one of the largest
            Am Law 100 firms with a significant New Jersey presence.
          </p>
          <p>
            Stio's role in this network is to provide the institutional legal infrastructure for Seton Hall's
            federal court defense — the complement to Scrivo's state court work. His documented representation
            of the university in cases where students and employees challenged the institution's conduct
            establishes him as a <strong style={{ color: "var(--ink)" }}>repeat institutional defender</strong>
            whose professional identity is intertwined with the university's legal interests. His Seton Hall
            undergraduate degree adds the same alumni loyalty dimension present throughout this network.
          </p>
        </div>
        <div className="mt-3 pt-3 flex gap-6 text-xs" style={{ borderTop: "1px solid var(--stone-border)", fontFamily: "'Lora', serif", color: "var(--ink-light)" }}>
          <span><strong style={{ color: "var(--blood)" }}>Role:</strong> SHU Federal Defense Counsel</span>
          <span><strong style={{ color: "var(--blood)" }}>Education:</strong> Seton Hall B.S. 1988</span>
          <span><strong style={{ color: "var(--blood)" }}>Firm:</strong> Am Law 100 — Troutman Pepper Locke</span>
        </div>
      </div>

      {/* Summary table */}
      <h2 className="section-heading">The Network — Verified Affiliations</h2>
      <div style={{ overflowX: "auto" }} className="mb-8">
        <table className="forensic-table">
          <thead>
            <tr>
              <th>Attorney</th>
              <th>Firm (Verified)</th>
              <th>Christie Role</th>
              <th>Role in Network</th>
              <th>SHU Tie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ color: "var(--ink)", fontWeight: 700 }}>Thomas P. Scrivo</td>
              <td>O'Toole Scrivo, LLC</td>
              <td>Chief Counsel</td>
              <td>SHU litigation counsel; sanctioned 2025</td>
              <td style={{ color: "var(--blood)" }}>SHU Law alumnus; family alumni</td>
            </tr>
            <tr>
              <td style={{ color: "var(--ink)", fontWeight: 700 }}>Christopher Porrino</td>
              <td>Lowenstein Sandler LLP</td>
              <td>Attorney General (60th)</td>
              <td>Counsel to Marino; Perry Law media campaign</td>
              <td style={{ color: "var(--blood)" }}>SHU Law alumnus</td>
            </tr>
            <tr>
              <td style={{ color: "var(--ink)", fontWeight: 700 }}>Kathryn Ruemmler</td>
              <td>Goldman Sachs (resigned 2/2026)</td>
              <td>N/A — Obama WH Counsel</td>
              <td>Led seminary investigation; sealed report</td>
              <td style={{ color: "var(--blood)" }}>Epstein financial ties to SHU</td>
            </tr>
            <tr>
              <td style={{ color: "var(--ink)", fontWeight: 700 }}>Kevin H. Marino</td>
              <td>Marino, Tortorella &amp; Boyle, P.C.</td>
              <td>N/A</td>
              <td>Former SHU Board Chair; accused harasser</td>
              <td style={{ color: "var(--blood)" }}>SHU Board of Regents Chair</td>
            </tr>
            <tr>
              <td style={{ color: "var(--ink)", fontWeight: 700 }}>Michael Critchley, Sr.</td>
              <td>Critchley, Kinum &amp; Luria, LLC</td>
              <td>N/A</td>
              <td>NJ white-collar elite; co-ranked with Marino</td>
              <td style={{ color: "var(--blood)" }}>SHU B.A. &amp; J.D.</td>
            </tr>
            <tr>
              <td style={{ color: "var(--ink)", fontWeight: 700 }}>Angelo A. Stio III</td>
              <td>Troutman Pepper Locke LLP</td>
              <td>N/A</td>
              <td>SHU federal defense counsel of record</td>
              <td style={{ color: "var(--blood)" }}>SHU B.S. 1988</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* The closed loop */}
      <div className="finding-box mb-8">
        <div className="exhibit-label" style={{ color: "var(--blood-bright)", borderColor: "var(--blood)" }}>
          Critical Finding — The Closed Loop
        </div>
        <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
          Every attorney in this network shares at least one of three characteristics: they are Seton Hall
          alumni, they built their careers during the Christie administration, or they have direct financial
          relationships with the university. The result is a closed loop in which:
        </p>
        <ul className="text-sm leading-relaxed space-y-2" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif", paddingLeft: "1.25rem", listStyleType: "disc" }}>
          <li>The lawyers who defend the university helped appoint the judges who adjudicate challenges to it (Scrivo).</li>
          <li>The lawyer who represents the accused harasser is the former Attorney General who shaped the regulatory structure overseeing the case (Porrino).</li>
          <li>The lawyer who investigated the seminary's misconduct was in personal contact with a convicted sex offender while doing so, and his money was simultaneously flowing into the university (Ruemmler).</li>
          <li>The accused harasser himself is a prominent attorney whose firm's reputation is intertwined with the institution's (Marino).</li>
          <li>The federal defense counsel and the white-collar elite are both Seton Hall alumni whose professional identities are bound to the university's continued reputation (Stio, Critchley).</li>
        </ul>
        <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
          Whistleblowers and victims enter this system at a structural disadvantage that is not accidental.
          <strong style={{ color: "var(--ink)" }}> It was engineered.</strong>
        </p>
      </div>

      {/* OAE pattern */}
      <div className="evidence-box">
        <div className="exhibit-label">Pattern of Record — Office of Attorney Ethics</div>
        <p className="text-sm leading-relaxed" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
          The Office of Attorney Ethics (OAE) declined to investigate both Thomas Scrivo (sanctioned for
          withholding documents) and Christopher Porrino (Perry Law media campaign). The OAE operates within
          the New Jersey Supreme Court's administrative structure — the same structure that Christie's judicial
          appointments shaped. The pattern of OAE declinations in matters involving this network is not
          a series of independent decisions. It is a feature of the closed loop.
        </p>
      </div>
    </div>
  );
}
