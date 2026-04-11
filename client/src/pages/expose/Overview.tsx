/* ============================================================
   THE ARCHITECTURE OF SILENCE — Overview / Landing Page
   Forensic terminal theme
   ============================================================ */
import { AlertTriangle, ArrowRight, FileText, Network, Scale } from "lucide-react";
import { Link } from "wouter";

const sections = [
  {
    path: "/expose",
    section: "I",
    title: "The Overview",
    desc: "The 24,000-page Latham Report that was buried in a SCIF for six years until the Judge Benjamin mandate.",
  },
  {
    path: "/origin/network",
    section: "II",
    title: "The McCarrick Network",
    desc: "How one archbishop built an interlocking system of church, state, and organized crime that outlasted his defrocking.",
  },
  {
    path: "/expose/reilly-protection",
    section: "III",
    title: "Reilly's Ascent",
    desc: "McCarrick's 1994 secretary — who admitted visiting the Sea Girt beach house — became Seton Hall's president in 2024.",
  },
  {
    path: "/expose/nyre-dismissal",
    section: "IV",
    title: "The Nyre Dismissal",
    desc: "A February 19, 2026 ruling that resolved disputed facts on a motion to dismiss — crediting a report commissioned by the accused.",
  },
  {
    path: "/expose/legal-triumvirate",
    section: "V",
    title: "The Christie Administration Legal Network",
    desc: "Scrivo, Porrino, and Ruemmler — three alumni who built New Jersey's judiciary and now deploy it to protect the institution.",
  },
  {
    path: "/expose/epstein-nexus",
    section: "VI",
    title: "The Epstein Nexus",
    desc: "The lead investigator was in intimate contact with Jeffrey Epstein while his money was simultaneously flowing into the university.",
  },
  {
    path: "/origin/martin",
    section: "VII",
    title: "Father Kenneth Martin",
    desc: "The internal 1980s warnings at the Newark seminary that exposed the start of the McCarrick 'nephews' network.",
  },
  {
    path: "/succession/checchio",
    section: "VIII",
    title: "Checchio & New Orleans",
    desc: "The calculus of relocation: how key figures from the Newark/Metuchen axis are exported to southern outposts.",
  },
  {
    path: "/breach/rabner",
    section: "IX",
    title: "The Rabner Dossier",
    desc: "19 verified exhibits of corruption submitted to the Chief Justice, documenting the breach of the Architecture of Silence.",
  },
  {
    path: "/breach/whistleblowers",
    section: "X",
    title: "Subpoena of a Journalist",
    desc: "A criminal grand jury subpoena to Google, 18 days after Reilly's installation — weaponizing prosecutorial power to silence truth.",
  },
  {
    path: "/expose/appeal-grounds",
    section: "XI",
    title: "Grounds for Appeal",
    desc: "The seven reversible errors in the Nyre dismissal that provide the path forward for appellate review and accountability.",
  },
];

export default function Overview() {
  return (
    <div className="page-enter max-w-5xl mx-auto px-6 py-12 space-y-20">
      {/* Hero banner */}
      <section className="relative border-b border-border pb-16">
        <div className="absolute top-0 right-0">
          <Link href="/">
            <a className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground cursor-pointer transition-colors border border-border px-4 py-2 rounded-sm group hover:border-destructive/30">
              <ArrowRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" /> Return to Archway
            </a>
          </Link>
        </div>
        
        <div className="space-y-8 max-w-3xl pt-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/30 text-destructive text-xs font-mono uppercase tracking-[0.2em]">
            <Network className="w-3 h-3" />
            Active Investigation · Feb 2026
          </div>

          <h1 className="font-heading text-6xl md:text-8xl text-foreground leading-[0.9] tracking-tighter">
            The Architecture<br />
            <span className="text-zinc-600 block mt-2">of Silence</span>
          </h1>

          <div className="prose-investigative text-xl leading-relaxed text-muted-foreground font-serif italic border-l-4 border-destructive/50 pl-6 py-2 bg-destructive/5">
            Institutional protectionism in the ecclesiastical and legal networks of New Jersey. How the house that McCarrick built has grown stronger since his departure.
          </div>

          <div className="flex flex-wrap gap-6 pt-6 border-t border-border mt-8 font-mono text-xs uppercase tracking-widest text-zinc-500">
            <span><strong className="text-destructive">19</strong> Verified Exhibits</span>
            <span><strong className="text-destructive">11</strong> Sections</span>
            <span><strong className="text-destructive">12</strong> Clergymen Named in Latham Report</span>
            <span><strong className="text-destructive">6</strong> Years the Report Was Sealed</span>
          </div>
        </div>
      </section>

      {/* Status alert */}
      <section>
        <div className="flex gap-4 p-6 bg-destructive/[0.02] border border-destructive/20 relative shadow-inner">
          <AlertTriangle className="w-6 h-6 text-destructive shrink-0 mt-1 animate-pulse" />
          <div className="space-y-2 relative z-10">
            <div className="text-xs font-mono font-bold tracking-widest uppercase text-destructive">
              Status: February 2026 — Active Dossier
            </div>
            <p className="text-base text-foreground font-serif leading-relaxed">
              This dossier synthesizes findings from the February 19, 2026 dismissal of <em>Nyre v. Seton Hall University</em>, DOJ document releases, investigative journalism, and verified court records. All 19 exhibits cited herein have been submitted to New Jersey Chief Justice Stuart Rabner. The Latham Report — sealed for six years — was ordered produced by Judge Avion Benjamin in November 2025.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-12 prose-investigative max-w-none">
          <h2 className="section-heading mb-12">Executive Summary</h2>

          <div className="columns-1 md:columns-2 gap-12 space-y-8 text-lg leading-relaxed text-muted-foreground font-serif">
            <p className="first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-foreground">
              T
              he following forensic analysis investigates a complex network of <strong className="text-foreground">institutional protectionism, procedural corruption, and coordinated retaliation</strong> centered on Seton Hall University, the Archdiocese of Newark, and the legal apparatus built during the Christie administration. The investigation spans four decades — from the first documented protection of an abuser in 1983 to the installation of McCarrick's former secretary as university president in 2024.
            </p>

            <p>
              The central thesis is straightforward: Theodore McCarrick did not merely abuse seminarians. He built an institutional machine — a network of loyalists embedded in the church, the judiciary, the state bar, and the university's governance structure — that was designed to protect itself from accountability. His defrocking in 2019 removed him from the machine but did not stop it. <strong className="text-foreground">The machine is operating today.</strong>
            </p>

            <p>
              The February 19, 2026 dismissal of <em>Nyre v. Seton Hall University</em> is not merely a legal setback for one whistleblower. It is a data point in a pattern that includes the sealing of the Latham Report, the sanctioning of university counsel for withholding documents, the use of a criminal grand jury subpoena to identify a civil whistleblower, and the promotion of a man documented as unfit to serve to the highest office in the university.
            </p>

            <blockquote className="border-l-4 border-destructive pl-8 py-4 my-10 bg-destructive/5 not-italic text-foreground">
              <p className="text-2xl font-bold leading-tight mb-4">
                "Each of these events is individually explicable. Together, they are a system."
              </p>
              <footer className="font-mono text-xs uppercase tracking-widest opacity-60">
                — Strategic Analysis Conclusion
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Section cards */}
      <section className="space-y-12">
        <header className="flex items-center gap-6">
          <h2 className="font-heading text-4xl text-foreground shrink-0 uppercase tracking-tighter">Key Findings by Section</h2>
          <div className="h-px flex-1 bg-border" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((s, idx) => (
            <Link key={s.path} href={s.path}>
              <a className="block h-full">
                <div className="p-8 border border-border h-full bg-zinc-50/5 hover:bg-zinc-50 hover:border-destructive/50 transition-all group flex flex-col group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-destructive/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="font-mono text-xs font-bold tracking-widest uppercase mb-4 text-destructive">
                    Section {s.section}
                  </div>
                  <div className="text-2xl font-heading text-foreground mb-4 group-hover:text-destructive transition-colors">
                    {s.title}
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground font-serif flex-1">
                    {s.desc}
                  </p>
                  
                  <div className="mt-8 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 group-hover:text-destructive font-bold transition-colors">
                    Access File <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </section>

      {/* How to use */}
      <section className="bg-zinc-950 p-12 rounded-sm border border-border">
        <h3 className="font-heading text-3xl text-zinc-100 mb-8">Navigation Protocol</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Network className="w-8 h-8 text-zinc-600" />
            <p className="font-serif text-sm text-zinc-400">Navigate using the primary sections above. Each module is a self-contained investigation with its own evidence tables and source citations.</p>
          </div>
          <div className="space-y-4">
            <FileText className="w-8 h-8 text-zinc-600" />
            <p className="font-serif text-sm text-zinc-400">Exhibit numbers correspond to the docket submitted to Chief Justice Rabner. Key findings are verified against federal court records or leaked DOJ releases.</p>
          </div>
          <div className="space-y-4">
            <Scale className="w-8 h-8 text-destructive/60" />
            <p className="font-serif text-sm text-zinc-400">Red-bordered components denote critical findings with direct legal or criminal implications. Section XI contains the seven grounds for appellate reversal.</p>
          </div>
        </div>
      </section>

      <div className="text-center pb-20">
         <div className="font-mono text-[10px] text-zinc-600 tracking-widest uppercase">
            Docket No. ESX-L-7578-25 · Superior Court of New Jersey, Essex County
         </div>
      </div>
    </div>
  );
}
