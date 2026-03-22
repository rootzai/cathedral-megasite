/* ============================================================
   THE ARCHITECTURE OF SILENCE — Overview / Landing Page
   Bright parchment theme — investigative broadsheet
   ============================================================ */
import { AlertTriangle, ArrowRight, FileText, Network, Scale } from "lucide-react";
import { Link } from "wouter";

const sections = [
  {
    path: "/expose",
    section: "I",
    title: "The Overview",
    desc: "The 24,000-page Latham Report that was buried in a SCIF for six years until the Judge Benjamin mandate.",
    color: "var(--gold)",
  },
  {
    path: "/origin/network",
    section: "II",
    title: "The McCarrick Network",
    desc: "How one archbishop built an interlocking system of church, state, and organized crime that outlasted his defrocking.",
    color: "var(--blood)",
  },
  {
    path: "/expose/reilly-protection",
    section: "III",
    title: "Reilly's Ascent",
    desc: "McCarrick's 1994 secretary — who admitted visiting the Sea Girt beach house — became Seton Hall's president in 2024.",
    color: "var(--blood)",
  },
  {
    path: "/expose/nyre-dismissal",
    section: "IV",
    title: "The Nyre Dismissal",
    desc: "A February 19, 2026 ruling that resolved disputed facts on a motion to dismiss — crediting a report commissioned by the accused.",
    color: "var(--blood)",
  },
  {
    path: "/expose/legal-triumvirate",
    section: "V",
    title: "The Christie Administration Legal Network",
    desc: "Scrivo, Porrino, and Ruemmler — three alumni who built New Jersey's judiciary and now deploy it to protect the institution.",
    color: "var(--gold)",
  },
  {
    path: "/expose/epstein-nexus",
    section: "VI",
    title: "The Epstein Nexus",
    desc: "The lead investigator was in intimate contact with Jeffrey Epstein while his money was simultaneously flowing into the university.",
    color: "var(--blood)",
  },
  {
    path: "/origin/martin",
    section: "VII",
    title: "Father Kenneth Martin",
    desc: "The internal 1980s warnings at the Newark seminary that exposed the start of the McCarrick 'nephews' network.",
    color: "var(--blood)",
  },
  {
    path: "/succession/checchio",
    section: "VIII",
    title: "Checchio & New Orleans",
    desc: "The calculus of relocation: how key figures from the Newark/Metuchen axis are exported to southern outposts.",
    color: "var(--blood)",
  },
  {
    path: "/breach/rabner",
    section: "IX",
    title: "The Rabner Dossier",
    desc: "19 verified exhibits of corruption submitted to the Chief Justice, documenting the breach of the Architecture of Silence.",
    color: "var(--gold)",
  },
  {
    path: "/breach/whistleblowers",
    section: "X",
    title: "Subpoena of a Journalist",
    desc: "A criminal grand jury subpoena to Google, 18 days after Reilly's installation — weaponizing prosecutorial power to silence truth.",
    color: "var(--blood)",
  },
  {
    path: "/expose/appeal-grounds",
    section: "XI",
    title: "Grounds for Appeal",
    desc: "The seven reversible errors in the Nyre dismissal that provide the path forward for appellate review and accountability.",
    color: "var(--gold)",
  },
];

export default function Overview() {
  return (
    <div className="page-enter">
      {/* Hero banner — dark ink on parchment page */}
      <div
        className="relative px-8 py-14"
        style={{
          background: "var(--ink)",
          borderBottom: "4px solid var(--gold)",
        }}
      >
        <div className="absolute top-6 right-8">
          <Link href="/">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#a8a29e] hover:text-white cursor-pointer transition-colors border border-[#2e2416] px-4 py-2 rounded-full">
              <ArrowRight size={14} className="rotate-180" /> Return to Archway
            </div>
          </Link>
        </div>
        <div className="max-w-4xl mx-auto">
          <div
            className="text-sm tracking-widest uppercase mb-4 font-semibold"
            style={{ color: "var(--gold)", fontFamily: "'Playfair Display', serif", letterSpacing: "0.18em" }}
          >
            Forensic Analysis · February 2026 · New Jersey
          </div>
          <h1
            className="text-5xl md:text-7xl font-black leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#faf6ee" }}
          >
            The Architecture<br />of Silence
          </h1>
          <p
            className="text-xl md:text-2xl leading-relaxed max-w-2xl bg-black/20 p-4 rounded"
            style={{ color: "#d1d5db", fontFamily: "'Lora', serif" }}
          >
            Institutional protectionism in the ecclesiastical and legal networks of New Jersey.
            How the house that McCarrick built has grown stronger since his departure.
          </p>
          <div
            className="mt-6 pt-5 flex flex-wrap gap-8 text-sm"
            style={{ borderTop: "1px solid #2e2416", fontFamily: "'Lora', serif", color: "#a8a29e" }}
          >
            <span><strong style={{ color: "var(--gold)" }}>19</strong> Verified Exhibits</span>
            <span><strong style={{ color: "var(--gold)" }}>11</strong> Sections</span>
            <span><strong style={{ color: "var(--gold)" }}>12</strong> Clergymen Named in Latham Report</span>
            <span><strong style={{ color: "var(--gold)" }}>6</strong> Years the Report Was Sealed</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* Status alert */}
        <div
          className="flex gap-3 p-4 mb-8"
          style={{
            background: "#fdf0f0",
            borderLeft: "4px solid var(--blood-bright)",
          }}
        >
          <AlertTriangle size={18} style={{ color: "var(--blood-bright)", flexShrink: 0, marginTop: "2px" }} />
          <div>
            <div
              className="text-xs font-bold tracking-widest uppercase mb-1"
              style={{ color: "var(--blood-bright)", fontFamily: "'Playfair Display', serif" }}
            >
              Active Investigation — Status: February 2026
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
              This dossier synthesizes findings from the February 19, 2026 dismissal of{" "}
              <em>Nyre v. Seton Hall University</em>, DOJ document releases, investigative journalism,
              and verified court records. All 19 exhibits cited herein have been submitted to New Jersey
              Chief Justice Stuart Rabner. The Latham Report — sealed for six years — was ordered
              produced by Judge Avion Benjamin in November 2025.
            </p>
          </div>
        </div>

        {/* Executive Summary */}
        <h2 className="section-heading">Executive Summary</h2>
        <div className="space-y-5 text-base leading-relaxed mb-10" style={{ color: "var(--ink-mid)", fontFamily: "'Lora', serif" }}>
          <p>
            The following forensic analysis investigates a complex network of
            <strong style={{ color: "var(--ink)" }}> institutional protectionism, procedural corruption, and
              coordinated retaliation</strong> centered on Seton Hall University, the Archdiocese of Newark,
            and the legal apparatus built during the Christie administration. The investigation spans four
            decades — from the first documented protection of an abuser in 1983 to the installation of
            McCarrick's former secretary as university president in 2024.
          </p>
          <p>
            The central thesis is straightforward: Theodore McCarrick did not merely abuse seminarians.
            He built an institutional machine — a network of loyalists embedded in the church, the judiciary,
            the state bar, and the university's governance structure — that was designed to protect itself
            from accountability. His defrocking in 2019 removed him from the machine but did not stop it.
            <strong style={{ color: "var(--ink)" }}> The machine is operating today.</strong>
          </p>
          <p>
            The February 19, 2026 dismissal of <em>Nyre v. Seton Hall University</em> is not merely a
            legal setback for one whistleblower. It is a data point in a pattern that includes the sealing
            of the Latham Report, the sanctioning of university counsel for withholding documents, the
            use of a criminal grand jury subpoena to identify a civil whistleblower, and the promotion
            of a man documented as unfit to serve to the highest office in the university.
            <strong style={{ color: "var(--ink)" }}> Each of these events is individually explicable. Together, they are a system.</strong>
          </p>
        </div>

        {/* Section cards */}
        <h2 className="section-heading">Key Findings by Section</h2>
        <div className="grid gap-4 mb-10" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
          {sections.map((s) => (
            <Link key={s.path} href={s.path}>
              <div
                className="person-card cursor-pointer h-full"
                style={{ borderTopColor: s.color, transition: "box-shadow 0.15s, transform 0.15s" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.12)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                <div
                  className="text-xs font-bold tracking-widest uppercase mb-1"
                  style={{ color: s.color, fontFamily: "'Playfair Display', serif" }}
                >
                  Section {s.section}
                </div>
                <div
                  className="text-base font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", color: "var(--ink)" }}
                >
                  {s.title}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--ink-light)", fontFamily: "'Lora', serif" }}>
                  {s.desc}
                </p>
                <div
                  className="flex items-center gap-1 mt-3 text-xs font-semibold"
                  style={{ color: s.color, fontFamily: "'Playfair Display', serif" }}
                >
                  Read Section <ArrowRight size={12} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* How to use */}
        <div className="evidence-box">
          <div className="exhibit-label">How to Use This Dossier</div>
          <div className="grid gap-4 text-sm" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", fontFamily: "'Lora', serif", color: "var(--ink-mid)" }}>
            <div className="flex gap-2">
              <Network size={16} style={{ color: "var(--gold)", flexShrink: 0, marginTop: "2px" }} />
              <span>Navigate using the left sidebar. Each section is a self-contained investigation with its own evidence tables and source citations.</span>
            </div>
            <div className="flex gap-2">
              <FileText size={16} style={{ color: "var(--gold)", flexShrink: 0, marginTop: "2px" }} />
              <span>Exhibit numbers correspond to the dossier submitted to Chief Justice Rabner. Gold-bordered boxes are verified source citations.</span>
            </div>
            <div className="flex gap-2">
              <Scale size={16} style={{ color: "var(--gold)", flexShrink: 0, marginTop: "2px" }} />
              <span>Red-bordered boxes are critical findings with direct legal or criminal implications. Section XI contains the seven grounds for appellate reversal.</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs italic" style={{ color: "var(--ink-light)", fontFamily: "'Lora', serif" }}>
          Docket No. ESX-L-7578-25 · Superior Court of New Jersey, Essex County · All findings based on verified court records and DOJ document releases
        </div>
      </div>
    </div>
  );
}
