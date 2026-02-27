/* ============================================================
   THE ARCHITECTURE OF SILENCE — The Spitz Unmasking
   Bright parchment theme — investigative broadsheet
   ============================================================ */
export default function SpitzUnmasking() {
  return (
    <div className="page-enter max-w-4xl mx-auto px-6 py-10">
      <div className="exhibit-label">Section X · Retaliation Record</div>
      <h1
        className="text-4xl font-black mb-2 leading-tight"
        style={{ fontFamily: "'Playfair Display', serif", color: "var(--ink)" }}
      >
        The Spitz Unmasking
      </h1>
      <p className="text-base mb-8" style={{ color: "var(--gold)", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
        Weaponizing Criminal Grand Jury Process Against a Civil Whistleblower · November 2024 – January 2026
      </p>

      <div className="pull-quote">
        "A criminal grand jury subpoena to Google, 18 days after Reilly's installation. The message was not legal. It was institutional: we know who you are, and we will find you."
      </div>

      <div className="space-y-5 text-base leading-relaxed mb-8" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
        <p>
          On July 18, 2024 — 18 days after Joseph Reilly was installed as President of Seton Hall
          University — a grand jury subpoena was issued in Bergen County, New Jersey, compelling Google
          to identify the user behind the email account <strong style={{ color: "var(--ink)" }}>cardinaltobin@gmail.com</strong>.
          The account had been sending emails to university regents warning them that Reilly was
          documented in the Latham Report as having failed to report sexual abuse — and that his
          election to the presidency was therefore a governance failure.
        </p>
        <p>
          The target of the subpoena was <strong style={{ color: "var(--ink)" }}>Eric Spitz</strong> —
          a journalist and former newspaper publisher based in California. The use of a
          <strong style={{ color: "var(--blood)" }}> criminal grand jury subpoena</strong> — a tool
          designed for criminal investigations — to identify a civil whistleblower in a civil dispute
          is not a legal tactic. It is a message. It is the institutional equivalent of a knock on
          the door at night.
        </p>
      </div>

      {/* The Unmasking Timeline */}
      <h2 className="section-heading">The Unmasking Campaign — Verified Timeline</h2>
      <div style={{ overflowX: "auto" }} className="mb-8">
        <table className="forensic-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Action</th>
              <th>Jurisdiction</th>
              <th>Forensic Significance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>July 1, 2024</td>
              <td style={{ color: "var(--ink)" }}>Reilly installed as SHU President</td>
              <td>South Orange, NJ</td>
              <td>Day 0 of the retaliation clock</td>
            </tr>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>July 18, 2024</td>
              <td style={{ color: "var(--ink)" }}>Grand jury subpoena to Google</td>
              <td>Bergen County, NJ</td>
              <td style={{ color: "var(--blood)", fontWeight: 600 }}>18 days after installation; criminal process for civil matter</td>
            </tr>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>Oct 2024</td>
              <td style={{ color: "var(--ink)" }}>Archdiocese bulletin claims "solicitation"</td>
              <td>Newark, NJ</td>
              <td>Manufactured criminal predicate to justify grand jury process</td>
            </tr>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>Nov 20, 2024</td>
              <td style={{ color: "var(--ink)" }}>Second grand jury subpoena to Google</td>
              <td>Bergen County, NJ</td>
              <td>Spitz identified as account holder</td>
            </tr>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>Nov 20, 2025</td>
              <td style={{ color: "var(--ink)" }}>Orange County civil subpoena for Spitz deposition</td>
              <td>Orange County, CA</td>
              <td style={{ color: "var(--blood)", fontWeight: 600 }}>Exactly one year later; cross-jurisdictional escalation</td>
            </tr>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>Jan 2026</td>
              <td style={{ color: "var(--ink)" }}>52-page deposition package sent to Spitz</td>
              <td>Multi-jurisdictional</td>
              <td>Continued harassment after CA case disposed</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* The Legal Analysis */}
      <h2 className="section-heading">The Legal Problem — Misuse of Grand Jury Process</h2>
      <div className="space-y-4 text-base leading-relaxed mb-8" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
        <p>
          Grand jury subpoenas are instruments of criminal investigation. They carry the full coercive
          power of the state — the power to compel testimony, to require production of documents, and
          to pierce the anonymity that civil law protects. The use of a grand jury subpoena to identify
          a civil whistleblower — someone who was warning university regents about governance failures
          in a civil context — is a fundamental misuse of that power.
        </p>
        <p>
          The Archdiocese's October 2024 bulletin claiming "solicitation" was not a genuine criminal
          complaint. It was a <strong style={{ color: "var(--ink)" }}>manufactured predicate</strong> —
          a document designed to create the appearance of a criminal matter sufficient to justify grand
          jury process. The forensic analysis of the timing — 18 days after Reilly's installation,
          targeting the person who was warning regents about Reilly's documented history — makes the
          retaliatory purpose unmistakable.
        </p>
        <p>
          New Jersey's Shield Law (N.J.S.A. 2A:84A-21) and California's Shield Law (Cal. Const. Art. I, § 2(b))
          both protect journalists from compelled disclosure of sources. Spitz has invoked both statutes.
          The university's counter-argument — that Spitz is not a "journalist" because the account was
          anonymous — is precisely the argument Shield Laws were designed to defeat. Anonymous reporting
          on institutional misconduct is the paradigmatic case for shield protection.
        </p>
      </div>

      {/* The Mob Parallel */}
      <div className="finding-box mb-8">
        <div className="exhibit-label" style={{ color: "var(--blood-bright)", borderColor: "var(--blood)" }}>
          The Omertà Parallel — Institutional vs. Organized Crime
        </div>
        <p className="text-sm leading-relaxed" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
          The use of a criminal grand jury subpoena to identify and silence a civil whistleblower is
          structurally identical to the mob's response to informants. The mechanism is different —
          the mob uses violence; the institution uses litigation — but the purpose is the same:
          to identify the person who is talking, to expose them, and to make the cost of talking
          so high that others will not follow. This is not a metaphor. It is the documented
          institutional response to Eric Spitz's warnings to university regents. The message was
          not legal. It was institutional:
          <strong style={{ color: "var(--blood)" }}> we know who you are, and we will find you.</strong>
        </p>
      </div>

      <div className="evidence-box">
        <div className="exhibit-label">The 52-Page Deposition Package — Attrition as Strategy</div>
        <p className="text-sm leading-relaxed" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
          The California case (No. 30-2025-01528524-CU-PT-CJC) was disposed of on November 20, 2025.
          The university's attorneys then sent Spitz a 52-page deposition package in January 2026 —
          months after the case was closed. This is not legal process. It is attrition. The goal is
          to impose maximum cost and inconvenience on a journalist who lives on the opposite coast
          from the litigation, using the legal system as a weapon. The Spitz campaign is the clearest
          possible evidence that the network's response to exposure is not legal defense — it is
          institutional warfare.
        </p>
      </div>
    </div>
  );
}
