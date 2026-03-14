/* ============================================================
   THE ARCHITECTURE OF SILENCE — The Rabner Dossier
   Bright parchment theme — investigative broadsheet
   ============================================================ */
import { FileText } from "lucide-react";
export default function RabnerExhibits() {
  const exhibits = [
    { num: "00", title: "Letter to Chief Justice Rabner — Feb 13, 2026", desc: "Foundational formal escalation documenting ethical and constitutional violations in the Nyre v. Seton Hall litigation. Demanded appointment of a Special Prosecutor and ACJC referral.", category: "Judicial" },
    { num: "1", title: "OAE Declination Letter — Jan 20, 2026", desc: "Office of Attorney Ethics refused to docket Scrivo/Porrino grievances, citing 'pending litigation' — itself manufactured by Scrivo.", category: "Judicial" },
    { num: "2", title: "Latham Report — Summary Findings", desc: "24,000-page investigation by Kathryn Ruemmler of Latham & Watkins. Identified 12 clergymen; documented Reilly's reporting failures at ICS. Sealed 2019–2025.", category: "Church" },
    { num: "3", title: "Benjamin Sanctions Order — November 2025", desc: "Judge Avion Benjamin sanctioned Scrivo for failing to produce Latham Report documents over multiple years.", category: "Judicial" },
    { num: "4", title: "Venable Letter Opinion — Oct 7, 2024", desc: "Order transferring Nyre litigation to Hudson County. Part of Scrivo's multi-venue delay strategy.", category: "Judicial" },
    { num: "5", title: "Task Force Letters — Nov 2019 & Feb 2020", desc: "Two formal recommendations for Reilly's removal from all boards. Both ignored by the Board of Regents.", category: "Church" },
    { num: "6", title: "Orange County (CA) Subpoena — Nov 20, 2025", desc: "Cross-jurisdictional subpoena for deposition of a California journalist. Filed exactly one year after initial Google subpoena.", category: "Retaliation" },
    { num: "7", title: "Perry Law (Agnifilo) Report — July 2024", desc: "Third investigative firm; commissioned by Marino's board. Concluded no harassment despite internal contradictions. Regent Flood corroborated Mrs. Nyre's account.", category: "Obstruction" },
    { num: "8", title: "Archdiocese Bulletin — Oct 2024", desc: "Bulletin claiming 'solicitation' — manufactured to create a criminal predicate for the grand jury subpoena.", category: "Retaliation" },
    { num: "9", title: "Grand Jury Subpoena to Google — Nov 20, 2024", desc: "Bergen County grand jury subpoena issued 18 days after Reilly's installation. Sought identity of cardinaltobin@gmail.com account holder.", category: "Retaliation" },
    { num: "10", title: "Complaint Log Manipulation — May 2023", desc: "Masharelli allegedly directed removal of Marino complaints from Confidential Log before Audit Committee meeting. Reinserted March 2024 — after lawsuit filed.", category: "Obstruction" },
    { num: "11", title: "Porrino Amicus Brief — July 10, 2024", desc: "Filed unredacted Perry Law Report as exhibit, exposing victims' names. NYT article published next day. Described as coordinated media hit.", category: "Retaliation" },
    { num: "12", title: "Christie Judicial Appointment Record", desc: "Documentation of 75+ judges appointed by Christie administration, including Scrivo's role as Chief Counsel in the appointment process.", category: "Judicial" },
    { num: "13", title: "The Setonian — Epstein-Ruemmler Report", desc: "February 9, 2026 student newspaper report documenting Ruemmler's 'Uncle Jeffrey' communications during the seminary investigation.", category: "Epstein" },
    { num: "14", title: "DOJ Epstein Files — Seton Hall Tuition Payments", desc: "February 2026 DOJ document dump confirming Epstein tuition payments to Seton Hall via Deutsche Bank and JPMorgan accounts.", category: "Epstein" },
    { num: "15", title: "Gibbons Report — Cardinal Tobin Named", desc: "First seminary investigation. Tobin named among clergy. Tobin failed to appear before investigators. No consequences applied.", category: "Church" },
    { num: "16", title: "Ruemmler-Epstein Email — Sept 29, 2018", desc: "DOJ-released email showing Ruemmler informed Epstein she was 'presenting to Seton Hall board' that morning.", category: "Epstein" },
    { num: "17", title: "Checchio Board Membership Record", desc: "Documentation of Checchio's tenure on Seton Hall Board of Regents during Latham Report suppression and Reilly election.", category: "Church" },
    { num: "18", title: "Ropes & Gray — Nyre Exclusion (Politico, May 23, 2025)", desc: "Report documenting Seton Hall's blocking of Dr. Nyre from participating in the Ropes & Gray investigation.", category: "Obstruction" },
    { num: "19", title: "Vatican 2020 Report on McCarrick", desc: "Vatican's own investigation documenting Sea Girt beach house as primary abuse location. Reilly admitted to visiting once.", category: "Church" },
  ];

  const categoryColors: Record<string, string> = {
    Church: "var(--blood)",
    Obstruction: "var(--gold)",
    Retaliation: "#b45309",
    Judicial: "var(--ink)",
    Epstein: "var(--blood)",
  };

  return (
    <div className="page-enter max-w-4xl mx-auto px-6 py-10">
      <div className="exhibit-label">Section IX · Evidentiary Record</div>
      <h1
        className="text-4xl font-black mb-2 leading-tight"
        style={{ fontFamily: "'Playfair Display', serif", color: "var(--ink)" }}
      >
        The Rabner Dossier
      </h1>
      <p className="text-base mb-8" style={{ color: "var(--gold)", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
        19 Verified Exhibits Submitted to Chief Justice Stuart Rabner · New Jersey Supreme Court
      </p>

      <div className="pull-quote">
        "Chief Justice Rabner received 19 exhibits documenting systemic corruption in the OAE, the Essex County judiciary, and the ecclesiastical governance of Seton Hall University."
      </div>

      <div className="space-y-4 text-base leading-relaxed mb-8" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
        <p>
          On February 13, 2026, a comprehensive forensic dossier was formally submitted to New Jersey Chief Justice Stuart Rabner.
          The escalation documented what is described as a "Closed Loop" of institutional protectionism, where the Office of Attorney Ethics (OAE)
          declined to investigate potential misconduct by citing the very litigation through which that misconduct was occurring.
        </p>
        <p>
          The dossier demanded two extraordinary remedies: the appointment of a <strong>Special Prosecutor</strong> to investigate official misconduct
          within the Bergen County Prosecutor's Office and the Essex County Superior Court, and the formal referral of the judiciary's handling
          of the <em>Nyre</em> matter to the <strong>Advisory Committee on Judicial Conduct (ACJC)</strong>.
        </p>
      </div>

      {/* Category legend */}
      <div className="flex flex-wrap gap-3 mb-6">
        {Object.entries(categoryColors).map(([cat, color]) => (
          <span
            key={cat}
            className="text-xs font-semibold px-3 py-1"
            style={{
              background: "var(--parchment-panel)",
              border: `1px solid ${color}`,
              color: color,
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "0.05em",
            }}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Exhibits list */}
      <div className="grid gap-3 mb-10">
        {exhibits.map((ex) => (
          <div
            key={ex.num}
            className="flex gap-4 p-4"
            style={{
              background: "var(--parchment-panel)",
              border: "1px solid var(--stone-border)",
              borderLeft: `4px solid ${categoryColors[ex.category]}`,
            }}
          >
            <div
              className="flex-shrink-0 text-2xl font-black"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "var(--gold)",
                minWidth: "2.5rem",
                lineHeight: 1,
              }}
            >
              {ex.num}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <div
                  className="text-sm font-bold"
                  style={{ fontFamily: "'Playfair Display', serif", color: "var(--ink)" }}
                >
                  {ex.title}
                </div>
                <span
                  className="flex-shrink-0 text-xs font-semibold px-2 py-0.5"
                  style={{
                    background: "transparent",
                    border: `1px solid ${categoryColors[ex.category]}`,
                    color: categoryColors[ex.category],
                    fontFamily: "'Lora', serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  {ex.category}
                </span>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}
              >
                {ex.desc}
              </p>
              {ex.num === "00" && (
                <div className="mt-3">
                  <a
                    href="/Rabner-Letter-Feb-13-2026.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-gold hover:text-gold/80 hover:underline transition-all"
                  >
                    <FileText size={14} /> Download Foundational Letter (PDF)
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="evidence-box">
        <div className="exhibit-label">The OAE's Circular Defense</div>
        <p className="text-sm leading-relaxed" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
          The Office of Attorney Ethics' January 20, 2026 declination letter cited "pending litigation"
          as the reason it could not investigate Scrivo and Porrino's conduct. The pending litigation
          was itself created by Scrivo. The OAE's refusal to investigate misconduct in litigation
          that the accused attorney is conducting is a circular defense — it means that any attorney
          who is sufficiently aggressive in litigation can immunize himself from OAE scrutiny simply
          by ensuring that litigation is always pending. This is not a regulatory system.
          It is a shield. The 19 exhibits in the Rabner dossier document, in granular detail,
          how that shield was constructed and how it operates.
        </p>
      </div>
    </div>
  );
}
