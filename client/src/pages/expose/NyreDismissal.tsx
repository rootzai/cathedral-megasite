/* ============================================================
   THE ARCHITECTURE OF SILENCE — The Nyre Dismissal
   Bright parchment theme — investigative broadsheet
   ============================================================ */
export default function NyreDismissal() {
  return (
    <div className="page-enter max-w-4xl mx-auto px-6 py-10">
      <div className="exhibit-label">Section IV · Judicial Record</div>
      <h1
        className="text-4xl font-black mb-2 leading-tight"
        style={{ fontFamily: "'Playfair Display', serif", color: "var(--ink)" }}
      >
        The Nyre Dismissal
      </h1>
      <p className="text-base mb-8" style={{ color: "var(--gold)", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
        February 19, 2026 · Judge Spencer · Superior Court of New Jersey, Essex County · Docket No. ESX-L-7578-25
      </p>

      <div className="pull-quote">
        "The court resolved disputed facts on a motion to dismiss — the very thing Rule 4:6-2(e) forbids."
      </div>

      {/* Background */}
      <h2 className="section-heading">Background: Who Are the Nyres?</h2>
      <div className="space-y-4 text-base leading-relaxed mb-8" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
        <p>
          Dr. Joseph Nyre served as President of Seton Hall University from 2018 to 2023. His tenure 
          coincided with the most turbulent period in the university's modern history: the release of the 
          Latham Report, the Task Force letters recommending Reilly's removal, and the emergence of 
          multiple sexual harassment complaints against Board Chair Kevin Marino.
        </p>
        <p>
          Dr. Nyre was a whistleblower. He reported Marino's conduct through proper channels. He was 
          subsequently blocked from participating in the Ropes &amp; Gray investigation — the third 
          investigative firm retained by the university — in an act of obstruction documented as 
          Exhibit 18 in the Rabner dossier. His wife, Kelli Nyre, was the direct target of Marino's 
          documented sexual harassment at university events.
        </p>
        <p>
          The Nyres' lawsuit — filed after the university ceased all severance payments to Dr. Nyre 
          on February 26, 2024 — alleged sexual harassment under NJLAD, breach of contract, and 
          retaliation. On February 19, 2026, Judge Spencer dismissed the First Amended Complaint in 
          its entirety on a motion to dismiss.
        </p>
      </div>

      {/* The Perry Law Report problem */}
      <h2 className="section-heading">The Tainted Investigation: Perry Law Report</h2>
      <div className="space-y-4 text-base leading-relaxed mb-6" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
        <p>
          The court's ruling rested heavily on the Perry Law Report — an internal investigation 
          commissioned by Seton Hall that concluded Marino's conduct did not constitute sexual harassment. 
          The problem: the Perry Law Report was effectively controlled by the accused harasser himself.
        </p>
        <p>
          Kevin Marino was Chairman of the Board of Regents. Perry Law was the 
          <strong style={{ color: "var(--ink)" }}> third</strong> investigative firm assigned to the matter — 
          Dechert LLP was removed after apparently proving insufficiently pliable. The report's own 
          recitation of witness testimony directly contradicts its headline conclusion: Regent Flood 
          observed Marino standing behind Mrs. Nyre with his hands on her shoulders — precisely the 
          conduct she alleged. The report called this "not corroboration."
        </p>
      </div>

      <div className="finding-box mb-8">
        <div className="exhibit-label" style={{ color: "var(--blood-bright)", borderColor: "var(--blood)" }}>
          The Multiple-Victim Problem the Court Ignored
        </div>
        <p className="text-sm leading-relaxed" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
          The court characterized the harassment as "two isolated incidents." This framing ignores that 
          Marino was the subject of at least <strong style={{ color: "var(--ink)" }}>six formal complaints 
          by three different women</strong> within the same timeframe: March 23, 25, and 28, 2023 complaints 
          from Mrs. Nyre; multiple complaints by General Counsel Kim Capadona spanning November 2022 through 
          April 2023; and verbal reports by Ms. McMonagle in March 2023. A court cannot assess whether 
          conduct is "isolated" by restricting its view to one victim's two most specific allegations 
          while ignoring a documented pattern involving others.
        </p>
      </div>

      {/* Complaint log tampering */}
      <h2 className="section-heading">Tampering with the Complaint Log</h2>
      <div className="space-y-4 text-base leading-relaxed mb-8" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
        <p>
          The court's opinion makes no mention of the alleged manipulation of Seton Hall's Confidential 
          Log of Internal Complaints. In May 2023, Anthony Masherelli allegedly directed that complaints 
          against Marino be removed from the log before the Audit Committee meeting. The sanitized logs 
          were presented to the Audit Committee. The complaints were reinserted in March 2024 — 
          <strong style={{ color: "var(--ink)" }}> after the lawsuit was filed</strong>.
        </p>
        <p>
          A university that tampers with its own complaint logs cannot then present those logs as 
          evidence that complaints did not exist. The court's silence on this issue is itself a 
          reversible error — it permitted the university to benefit from evidence that was allegedly 
          manipulated to create the appearance of a clean record.
        </p>
      </div>

      {/* What was dismissed */}
      <h2 className="section-heading">What Was Dismissed — and Why It Matters</h2>
      <div style={{ overflowX: "auto" }} className="mb-8">
        <table className="forensic-table">
          <thead>
            <tr>
              <th>Claim</th>
              <th>Court's Ruling</th>
              <th>Forensic Problem</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ color: "var(--ink)", fontWeight: 600 }}>K. Nyre — NJLAD Sexual Harassment</td>
              <td>Dismissed — "two isolated incidents"</td>
              <td>Ignored six complaints by three women; credited tainted Perry Law Report</td>
            </tr>
            <tr>
              <td style={{ color: "var(--ink)", fontWeight: 600 }}>K. Nyre — Employee Status</td>
              <td>Dismissed — not an "employee" under NJLAD</td>
              <td>Pukowsky analysis cannot be resolved at pleading stage; factual dispute</td>
            </tr>
            <tr>
              <td style={{ color: "var(--ink)", fontWeight: 600 }}>J. Nyre — Breach of Contract</td>
              <td>Dismissed — no material breach</td>
              <td>SHU ceased all severance payments Feb 26, 2024 — acknowledged but dismissed without explanation</td>
            </tr>
            <tr>
              <td style={{ color: "var(--ink)", fontWeight: 600 }}>J. Nyre — Retaliation</td>
              <td>Dismissed — Release Agreement bars claims</td>
              <td>Catch-22: SHU can breach the agreement while holding Dr. Nyre to his release</td>
            </tr>
            <tr>
              <td style={{ color: "var(--ink)", fontWeight: 600 }}>Religious Exemption (Romeo)</td>
              <td>Applied to bar NJLAD claims</td>
              <td>Romeo addressed sexual orientation, not sexual harassment — misapplication of statute</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* EFAA paradox */}
      <div className="evidence-box">
        <div className="exhibit-label">The EFAA Internal Contradiction</div>
        <p className="text-sm leading-relaxed" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
          Judge Spencer correctly found that the Ending Forced Arbitration Act of 2021 (EFAA) applies 
          because K. Nyre's sexual harassment claims make the entire action one that "relates to" a 
          sexual harassment dispute. But the court then dismissed the very sexual harassment claims 
          that triggered the EFAA's protections. If the claims are sufficient to invoke the EFAA — 
          which requires that the claims "relate[] to" a sexual harassment dispute — how can those 
          same claims simultaneously be so insubstantial as to fail under Rule 4:6-2(e)? One of 
          those holdings must be wrong. This internal inconsistency is a self-contained ground for 
          appellate reversal.
        </p>
      </div>
    </div>
  );
}
