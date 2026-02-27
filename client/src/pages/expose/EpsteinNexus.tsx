/* ============================================================
   THE ARCHITECTURE OF SILENCE — The Epstein Nexus
   Bright parchment theme — investigative broadsheet
   ============================================================ */
export default function EpsteinNexus() {
  return (
    <div className="page-enter max-w-4xl mx-auto px-6 py-10">
      <div className="exhibit-label">Section VI · Financial Intelligence</div>
      <h1
        className="text-4xl font-black mb-2 leading-tight"
        style={{ fontFamily: "'Playfair Display', serif", color: "var(--ink)" }}
      >
        The Epstein Nexus
      </h1>
      <p className="text-base mb-8" style={{ color: "var(--gold)", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
        Ruemmler–Epstein Communications &amp; Verified Financial Ties to Seton Hall University · DOJ Files, February 2026
      </p>

      <div className="pull-quote">
        "The investigation into sexual misconduct at a Catholic university was led by a lawyer who called the world's most notorious sex offender 'Uncle Jeffrey' — while he was paying tuition to the same university."
      </div>

      <div className="space-y-5 text-base leading-relaxed mb-8" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
        <p>
          The forensic analysis of the Epstein nexus reveals two distinct but converging threads: the 
          intimate professional relationship between lead investigator Kathryn Ruemmler and Jeffrey 
          Epstein during the seminary investigation, and the direct financial ties between Epstein's 
          banking network and Seton Hall University. Both threads were confirmed by the 
          <strong style={{ color: "var(--ink)" }}> DOJ document dump of February 2026</strong>.
        </p>
        <p>
          The convergence of these threads — Epstein's financial presence at Seton Hall and Ruemmler's 
          intimate relationship with Epstein during the investigation — creates a profound question of 
          institutional integrity. The investigation that was supposed to hold the university accountable 
          for sexual misconduct was conducted by a lawyer in close personal contact with one of history's 
          most notorious sexual predators, while that predator's money was simultaneously flowing into 
          the university's accounts. The Latham Report was then sealed.
        </p>
      </div>

      {/* Ruemmler-Epstein */}
      <h2 className="section-heading">The Ruemmler–Epstein Communication Record</h2>
      <div style={{ overflowX: "auto" }} className="mb-8">
        <table className="forensic-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Event</th>
              <th>Forensic Context</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>Sept 2018</td>
              <td style={{ color: "var(--ink)" }}>Paul Weiss Withdrawal</td>
              <td>Firm withdrew from SHU probe due to "unidentified conflict."</td>
            </tr>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>Sept 29, 2018</td>
              <td style={{ color: "var(--ink)" }}>Epstein–Ruemmler Email</td>
              <td>Ruemmler told Epstein she was "presenting to Seton Hall board" that morning.</td>
            </tr>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>Oct 2018</td>
              <td style={{ color: "var(--ink)" }}>Latham Takes Over</td>
              <td>Ruemmler officially assumed the SHU investigation.</td>
            </tr>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>Feb 2019</td>
              <td style={{ color: "var(--ink)" }}>Travel Emails</td>
              <td>Ruemmler complained to Epstein about interviewing Newark bishops.</td>
            </tr>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>Aug 10, 2019</td>
              <td style={{ color: "var(--ink)" }}>Epstein Death</td>
              <td>Epstein died in federal custody.</td>
            </tr>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>Aug 27, 2019</td>
              <td style={{ color: "var(--ink)" }}>Report Presentation</td>
              <td>Ruemmler presented Latham findings to the Board — 17 days after Epstein's death.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="finding-box mb-8">
        <div className="exhibit-label" style={{ color: "var(--blood-bright)", borderColor: "var(--blood)" }}>
          Verified DOJ Finding — February 2026 (Exhibit 16)
        </div>
        <p className="text-sm leading-relaxed" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
          The DOJ document dump of February 2026 revealed that Ruemmler referred to Epstein as 
          <strong style={{ color: "var(--ink)" }}> "Uncle Jeffrey"</strong> and accepted luxury gifts 
          from him during the same window she was overseeing the investigation into sexual misconduct 
          at a Catholic university. This constitutes a direct and undisclosed conflict of interest in 
          the investigation that produced the Latham Report — the very report that the university 
          subsequently sealed and fought to suppress for six years.
        </p>
        <p className="text-sm leading-relaxed mt-2" style={{ color: "var(--ink-light)", fontFamily: "'Lora', serif" }}>
          Source: The Setonian, February 9, 2026 (Exhibit 13 in the Rabner Dossier)
        </p>
      </div>

      {/* Epstein payments */}
      <h2 className="section-heading">Jeffrey Epstein's Verified Financial Ties to Seton Hall</h2>
      <div className="space-y-4 text-base leading-relaxed mb-6" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
        <p>
          Forensic verification of banking records and DOJ filings confirms that Jeffrey Epstein made 
          specific tuition payments to Seton Hall University between 2017 and 2019. These payments 
          were issued from <strong style={{ color: "var(--ink)" }}>Deutsche Bank and JPMorgan Chase 
          accounts</strong> and signed by Epstein's long-time lawyer, Darren Indyke.
        </p>
        <p>
          The primary verified recipient was <strong style={{ color: "var(--ink)" }}>Brian Beller</strong>, 
          who graduated from Seton Hall with an M.S. in Accounting in December 2019. Beller is the 
          son of Harry Beller, an "Epstein employee" and financial advisor. Seton Hall is one of 
          approximately <strong style={{ color: "var(--ink)" }}>20 schools</strong> identified in the 
          Epstein files as receiving tuition payments on behalf of his associates and potential victims.
        </p>
      </div>

      <div style={{ overflowX: "auto" }} className="mb-8">
        <table className="forensic-table">
          <thead>
            <tr>
              <th>Transaction Date</th>
              <th>Amount</th>
              <th>Beneficiary</th>
              <th>Signatory / Account</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>July 8, 2017</td>
              <td style={{ color: "var(--ink)", fontWeight: 700 }}>$17,060</td>
              <td>Unnamed Student</td>
              <td>Deutsche Bank</td>
            </tr>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>July 13, 2018</td>
              <td style={{ color: "var(--ink)", fontWeight: 700 }}>$11,749</td>
              <td>Brian Beller</td>
              <td>Deutsche Bank</td>
            </tr>
            <tr>
              <td style={{ color: "var(--gold)", fontWeight: 600, whiteSpace: "nowrap" }}>Feb 19, 2019</td>
              <td style={{ color: "var(--ink)", fontWeight: 700 }}>$4,068</td>
              <td>Brian Beller</td>
              <td>Darren Indyke (Epstein's attorney)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="evidence-box">
        <div className="exhibit-label">17 Days — The Critical Window</div>
        <p className="text-sm leading-relaxed" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
          The Latham Report was presented to the Board on August 27, 2019 — exactly 17 days after 
          Jeffrey Epstein died in federal custody on August 10, 2019. The timing is not proof of 
          coordination. But it is a fact. The investigation that Ruemmler conducted while in intimate 
          contact with Epstein was presented to the Board in the immediate aftermath of his death — 
          and then sealed. The report that might have exposed the full scope of the network was 
          locked away at precisely the moment when its principal external connection was eliminated. 
          These facts are not allegations. They are verified by DOJ records and court filings.
        </p>
      </div>
    </div>
  );
}
