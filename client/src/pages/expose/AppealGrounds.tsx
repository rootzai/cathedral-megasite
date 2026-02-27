/* ============================================================
   THE ARCHITECTURE OF SILENCE — Grounds for Appeal
   Bright parchment theme — investigative broadsheet
   ============================================================ */
export default function AppealGrounds() {
  const grounds = [
    {
      num: "I",
      title: "Improper Fact-Finding on a Motion to Dismiss",
      rule: "R. 4:6-2(e)",
      desc: "The court resolved disputed factual questions — including the credibility of the Perry Law Report and the severity of Marino's conduct — that are impermissible at the pleading stage. A motion to dismiss tests the legal sufficiency of a complaint, not its factual merit. The court's reliance on the Perry Law Report's conclusions to dismiss K. Nyre's harassment claims was reversible error.",
      severity: "Critical",
    },
    {
      num: "II",
      title: "Misapplication of the Religious Exemption",
      rule: "Romeo v. Seton Hall",
      desc: "The court applied Romeo v. Seton Hall — which addressed sexual orientation discrimination — to bar sexual harassment claims. The religious exemption in NJLAD has never been extended to shield institutions from liability for sexual harassment of lay employees. The court's extension of Romeo to this context was an error of law with no precedential support.",
      severity: "Critical",
    },
    {
      num: "III",
      title: "The EFAA Internal Contradiction",
      rule: "9 U.S.C. § 402",
      desc: "The court correctly found that the EFAA applies because K. Nyre's sexual harassment claims make the entire action one that 'relates to' a sexual harassment dispute. But the court then dismissed those same claims as legally insufficient. If the claims are sufficient to invoke the EFAA, they cannot simultaneously be insufficient under R. 4:6-2(e). One holding must be wrong.",
      severity: "Critical",
    },
    {
      num: "IV",
      title: "Failure to Address the Multiple-Victim Pattern",
      rule: "NJLAD Hostile Environment",
      desc: "The court characterized Marino's conduct as 'two isolated incidents.' This framing ignored six formal complaints by three different women within the same timeframe. A hostile environment analysis requires consideration of the full pattern of conduct, not a single victim's two most specific allegations. The court's restricted view was legal error.",
      severity: "Significant",
    },
    {
      num: "V",
      title: "Failure to Address Complaint Log Tampering",
      rule: "Spoliation / Obstruction",
      desc: "The court's opinion makes no mention of the alleged manipulation of Seton Hall's Confidential Log of Internal Complaints — the removal of Marino complaints before the Audit Committee meeting and their reinsertion after the lawsuit was filed. A university that tampers with its own complaint logs cannot benefit from those logs as evidence of a clean record.",
      severity: "Significant",
    },
    {
      num: "VI",
      title: "The Pukowsky Employee Status Analysis",
      rule: "Pukowsky v. Caruso",
      desc: "The court dismissed K. Nyre's NJLAD claims on the ground that she was not an 'employee' under the statute. The Pukowsky multi-factor test for determining employee status involves disputed factual questions — the degree of control, the method of payment, the furnishing of equipment — that cannot be resolved on a motion to dismiss. This was reversible error.",
      severity: "Significant",
    },
    {
      num: "VII",
      title: "The Release Agreement Catch-22",
      rule: "Contract / Retaliation",
      desc: "The court held that the Release Agreement bars Dr. Nyre's retaliation claims. But the university ceased all severance payments on February 26, 2024 — a material breach of the same agreement. A party that materially breaches a contract cannot simultaneously hold the other party to its terms. The court's failure to address this catch-22 was reversible error.",
      severity: "Significant",
    },
  ];

  const severityColor = (s: string) => s === "Critical" ? "var(--blood)" : "var(--gold)";

  return (
    <div className="page-enter max-w-4xl mx-auto px-6 py-10">
      <div className="exhibit-label">Section XI · Appellate Record</div>
      <h1
        className="text-4xl font-black mb-2 leading-tight"
        style={{ fontFamily: "'Playfair Display', serif", color: "var(--ink)" }}
      >
        Seven Grounds for Appellate Reversal
      </h1>
      <p className="text-base mb-8" style={{ color: "var(--gold)", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
        Legal Memorandum — Nyre v. Seton Hall University · Docket No. ESX-L-7578-25 · February 19, 2026 Order
      </p>

      <div className="pull-quote">
        "The February 19, 2026 order contains at least seven independent reversible errors — any one of which, standing alone, would warrant appellate reversal."
      </div>

      <div className="space-y-4 text-base leading-relaxed mb-8" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
        <p>
          The February 19, 2026 dismissal of <em>Nyre v. Seton Hall University</em> presents multiple
          independent grounds for appellate reversal. The errors documented below are not technical —
          they are substantive misapplications of established New Jersey law that, individually and
          collectively, denied the plaintiffs their right to have their claims adjudicated on the merits.
        </p>
        <p>
          The cumulative effect of these errors is to transform a motion to dismiss — a procedural
          mechanism designed to weed out legally deficient claims — into a final adjudication on the
          merits of disputed factual questions. This is not what Rule 4:6-2(e) permits.
        </p>
      </div>

      {/* Grounds */}
      <div className="grid gap-4 mb-10">
        {grounds.map((g) => (
          <div
            key={g.num}
            className="p-5"
            style={{
              background: "var(--parchment-panel)",
              border: "1px solid var(--stone-border)",
              borderTop: `3px solid ${severityColor(g.severity)}`,
            }}
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 text-2xl font-black"
                  style={{ fontFamily: "'Playfair Display', serif", color: "var(--gold)", lineHeight: 1 }}
                >
                  {g.num}
                </span>
                <div>
                  <div
                    className="text-base font-bold leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif", color: "var(--ink)" }}
                  >
                    {g.title}
                  </div>
                  <div
                    className="text-xs mt-0.5 font-mono"
                    style={{ color: "var(--gold)", fontFamily: "'Lora', serif" }}
                  >
                    {g.rule}
                  </div>
                </div>
              </div>
              <span
                className="flex-shrink-0 text-xs font-bold px-2 py-1"
                style={{
                  background: "transparent",
                  border: `1px solid ${severityColor(g.severity)}`,
                  color: severityColor(g.severity),
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: "0.05em",
                }}
              >
                {g.severity}
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}
            >
              {g.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Extraordinary review */}
      <h2 className="section-heading">The Case for Extraordinary Review</h2>
      <div className="space-y-4 text-base leading-relaxed mb-8" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
        <p>
          Beyond the standard appellate grounds, the circumstances of this litigation present a case
          for extraordinary review. The court that dismissed this case sits in a jurisdiction where
          the university's outside counsel helped appoint over 75 sitting judges. The regulatory body
          that declined to investigate that counsel's conduct cited "pending litigation" manufactured
          by that same counsel. The investigation that might have provided the factual predicate for
          the claims was sealed for six years and produced only under court order.
        </p>
        <p>
          These are not arguments about the merits of the underlying claims. They are arguments about
          whether the institutional conditions exist for a fair adjudication of those claims. The
          Appellate Division — and, if necessary, the New Jersey Supreme Court — has both the
          authority and the institutional responsibility to examine whether the judicial process
          in Essex County has been compromised by the same network that this dossier documents.
        </p>
      </div>

      <div className="evidence-box">
        <div className="exhibit-label">The Release Agreement Catch-22</div>
        <p className="text-sm leading-relaxed" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
          The court's holding that the Release Agreement is enforceable — while simultaneously finding
          no material breach occurred — creates a Catch-22: Seton Hall can breach the agreement with
          impunity while holding Dr. Nyre to his release of claims. Seton Hall ceased all severance
          payments as of February 26, 2024 — a fact the court acknowledges but dismisses without
          explanation of how a complete cessation of contractually required payments is not a material
          breach. This is unconscionable, and it is reversible error. A party that materially breaches
          a contract cannot simultaneously hold the other party to its terms. The court's failure to
          address this fundamental principle of contract law is the clearest possible demonstration
          that the dismissal was not a legal ruling. It was an institutional one.
        </p>
      </div>
    </div>
  );
}
