/* ============================================================
   THE ARCHITECTURE OF SILENCE — Checchio & New Orleans
   Bright parchment theme — investigative broadsheet
   ============================================================ */
export default function CheckchioNewOrleans() {
  return (
    <div className="page-enter max-w-4xl mx-auto px-6 py-10">
      <div className="exhibit-label">Section VIII · Ecclesiastical Transfers</div>
      <h1
        className="text-4xl font-black mb-2 leading-tight"
        style={{ fontFamily: "'Playfair Display', serif", color: "var(--ink)" }}
      >
        Archbishop Checchio &amp; the New Orleans Transfer
      </h1>
      <p className="text-base mb-8" style={{ color: "var(--gold)", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
        Musical Chairs — From Seton Hall Regent to Archbishop of New Orleans · February 11, 2026
      </p>

      <div className="pull-quote">
        "The New Orleans transfer is not a coincidence. It is the network's self-preservation mechanism — moving the problem before accountability can arrive."
      </div>

      <div className="space-y-5 text-base leading-relaxed mb-8" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
        <p>
          Archbishop James Checchio served as a member of Seton Hall University's Board of Regents during
          the most consequential period in the university's modern history: the release of the Latham Report,
          the Task Force letters recommending Reilly's removal, and the subsequent election of Reilly as
          university president. As a regent, Checchio was a member of the governing body that received the
          Task Force's recommendations — and chose not to act on them.
        </p>
        <p>
          On February 11, 2026 — as the Nyre litigation reached its critical juncture and the Latham Report
          was finally being produced under court order — Checchio officially assumed the archepiscopal seat
          of <strong style={{ color: "var(--ink)" }}>New Orleans</strong>, succeeding Gregory Aymond, who had
          led the archdiocese into bankruptcy in May 2020 to manage over 500 clergy abuse claims. The timing
          is precise. The transfer removes Checchio from the jurisdiction of the New Jersey courts, from the
          reach of the Essex County litigation, and from the institutional accountability that the unsealing
          of the Latham Report might otherwise impose.
        </p>
      </div>

      {/* Checchio's role */}
      <h2 className="section-heading">Checchio's Role in the Suppression</h2>
      <div style={{ overflowX: "auto" }} className="mb-8">
        <table className="forensic-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Checchio's Role</th>
              <th>Forensic Significance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>2018–2024</td>
              <td style={{ color: "var(--ink)" }}>Member, Seton Hall Board of Regents</td>
              <td>Present during Latham Report presentation and Task Force deliberations</td>
            </tr>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>Aug 27, 2019</td>
              <td style={{ color: "var(--ink)" }}>Regent during Latham Report presentation</td>
              <td>Received 24,000 pages of findings; report subsequently sealed</td>
            </tr>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>Nov 2019–Feb 2020</td>
              <td style={{ color: "var(--ink)" }}>Regent during Task Force removal letters</td>
              <td>Governing body received two formal letters recommending Reilly's removal; took no action</td>
            </tr>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>July 1, 2024</td>
              <td style={{ color: "var(--ink)" }}>Regent who elected Reilly as president</td>
              <td style={{ color: "var(--blood)", fontWeight: 600 }}>Voted to install a man documented as unfit to serve</td>
            </tr>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>Feb 11, 2026</td>
              <td style={{ color: "var(--ink)" }}>Installed as Archbishop of New Orleans</td>
              <td style={{ color: "var(--blood)", fontWeight: 600 }}>Transfer coincides with Latham Report production and Nyre dismissal</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* The Musical Chairs Pattern */}
      <h2 className="section-heading">The Musical Chairs Pattern — A Systemic Mechanism</h2>
      <div className="space-y-4 text-base leading-relaxed mb-8" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
        <p>
          The transfer of Checchio to New Orleans is not an isolated event. It is the latest iteration
          of a pattern that has characterized the Catholic Church's response to accountability for decades:
          when exposure approaches, move the problem. The 12 clergymen identified in the Latham Report
          were not prosecuted or laicized — they were transferred to other dioceses. Cardinal Tobin,
          named in the Gibbons Report, was not removed — he was elevated to Archbishop of Newark.
          Reilly was not removed — he was promoted to the presidency.
        </p>
        <p>
          When asked at a news conference if he would investigate Archbishop Aymond's alleged role in
          hiding abuse, Checchio replied that he saw <strong style={{ color: "var(--blood)" }}>"no reason"</strong> to
          do so. This response — from a man who was present on the Seton Hall Board of Regents when the
          Latham Report was suppressed — is not surprising. It is consistent. The architecture of silence
          does not collapse when it is transferred to a new jurisdiction. It relocates.
        </p>
      </div>

      {/* New Orleans Bankruptcy */}
      <h2 className="section-heading">New Orleans Archdiocese Bankruptcy — The Settlement Checchio Inherited</h2>
      <div style={{ overflowX: "auto" }} className="mb-8">
        <table className="forensic-table">
          <thead>
            <tr>
              <th>Settlement Component</th>
              <th>Amount</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ color: "var(--ink)", fontWeight: 600 }}>Base Survivor Fund</td>
              <td style={{ color: "var(--gold)", fontWeight: 700 }}>$230 Million</td>
              <td>Approved December 9, 2025</td>
            </tr>
            <tr>
              <td style={{ color: "var(--ink)", fontWeight: 600 }}>Insurer Contribution</td>
              <td style={{ color: "var(--gold)", fontWeight: 700 }}>$75 Million</td>
              <td>Negotiated with Travelers Insurance</td>
            </tr>
            <tr>
              <td style={{ color: "var(--ink)", fontWeight: 600 }}>Total Compensation</td>
              <td style={{ color: "var(--gold)", fontWeight: 700 }}>$305 Million</td>
              <td>For approximately 600 survivors</td>
            </tr>
            <tr>
              <td style={{ color: "var(--ink)", fontWeight: 600 }}>Legal Fees</td>
              <td style={{ color: "var(--blood)", fontWeight: 700 }}>$50 Million</td>
              <td>Incurred over five years of Chapter 11 proceedings</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Tobin parallel */}
      <div className="finding-box mb-8">
        <div className="exhibit-label" style={{ color: "var(--blood-bright)", borderColor: "var(--blood)" }}>
          The Tobin Parallel — Named in Gibbons Report, Refused to Appear
        </div>
        <p className="text-sm leading-relaxed" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
          Cardinal Joseph Tobin — the current Archbishop of Newark — was named in the Gibbons Report,
          the first investigation into seminary misconduct. Tobin
          <strong style={{ color: "var(--ink)" }}> failed to appear before investigators</strong>. Under
          the university's own protocols, failure to cooperate with an investigation is grounds for
          immediate termination. This consequence was never applied. Tobin remains the Archbishop of
          Newark — the ecclesiastical superior of Seton Hall University, the man who presides over
          the same institution whose governance failures he refused to help investigate. The Checchio
          transfer and the Tobin non-removal are two expressions of the same institutional logic:
          accountability is for others.
        </p>
      </div>

      <div className="evidence-box">
        <div className="exhibit-label">The Network's Self-Preservation Logic</div>
        <p className="text-sm leading-relaxed" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
          The appointment of Checchio to lead the post-settlement New Orleans Archdiocese illustrates
          the self-perpetuating nature of the protectionist network. Officials who managed abuse scandals
          are not removed — they are transferred to larger jurisdictions, given greater authority, and
          positioned to manage the next wave of accountability demands. The Archdiocese of New Orleans —
          itself with its own history of abuse and cover-up — now hosts a man who was present at the
          highest levels of the Seton Hall suppression apparatus. The architecture of silence does not
          collapse. It relocates, and it grows.
        </p>
      </div>
    </div>
  );
}
