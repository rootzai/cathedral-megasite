import { ReillySectionNav } from "@/components/SectionNav";
import SectionHeader from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, ExternalLink, ShieldAlert, Target } from "lucide-react";

export default function Status() {
  return (
    <div className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-4">
      <SectionHeader
        number="07"
        title="Current Status"
        subtitle="The System Under Pressure"
      />

      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-destructive/10 border border-destructive/30 p-6 text-center space-y-2">
          <Target className="w-8 h-8 text-destructive mx-auto" />
          <h4 className="font-heading text-lg text-destructive">Position</h4>
          <p className="font-mono text-sm text-white font-bold">SHU PRESIDENT</p>
          <p className="font-mono text-xs text-zinc-500">As of July 1, 2024</p>
        </div>
        <div className="bg-destructive/10 border border-destructive/30 p-6 text-center space-y-2">
          <ShieldAlert className="w-8 h-8 text-destructive mx-auto" />
          <h4 className="font-heading text-lg text-destructive">Investigation</h4>
          <p className="font-mono text-sm text-white font-bold">ROPES & GRAY</p>
          <p className="font-mono text-xs text-zinc-500">Ongoing since Feb 2025</p>
        </div>
        <div className="bg-destructive/10 border border-destructive/30 p-6 text-center space-y-2">
          <AlertTriangle className="w-8 h-8 text-destructive mx-auto" />
          <h4 className="font-heading text-lg text-destructive">Latham Report</h4>
          <p className="font-mono text-sm text-white font-bold">COURT-ORDERED</p>
          <p className="font-mono text-xs text-zinc-500">Ordered produced Nov 2025</p>
        </div>
        <div className="bg-destructive/10 border border-destructive/30 p-6 text-center space-y-2">
          <ExternalLink className="w-8 h-8 text-destructive mx-auto" />
          <h4 className="font-heading text-lg text-destructive">Legislative</h4>
          <p className="font-mono text-sm text-white font-bold">RESIGNATION CALLS</p>
          <p className="font-mono text-xs text-zinc-500">NJ lawmakers, Jan 2025</p>
        </div>
      </div>

      {/* The Ropes & Gray Investigation */}
      <div className="bg-card border border-border p-8 rounded-lg space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-2xl text-foreground">The Ropes & Gray Investigation</h3>
          <Badge variant="outline" className="text-destructive border-destructive/50 bg-destructive/10 font-mono">ONGOING</Badge>
        </div>
        <p className="font-body text-muted-foreground leading-relaxed">
          In February 2025, under mounting legislative and media pressure, the Board of Regents announced a second outside investigation — this time by Ropes & Gray LLP — to review the circumstances of Reilly's election and the handling of the Latham Report. This is unprecedented: a sitting university president under two separate outside investigations simultaneously.
        </p>
        <p className="font-body text-muted-foreground leading-relaxed">
          Critics have noted the structural flaw in this approach: the investigation was commissioned by the same Board of Regents whose conduct is in question. The Board that received the removal recommendations, ignored them, and elected Reilly is now overseeing the investigation into whether that election was proper. The fox, once again, investigates the henhouse.
        </p>
      </div>

      {/* The Broader Pattern */}
      <div className="space-y-6">
        <h3 className="font-heading text-2xl text-foreground border-b border-border pb-2">The Institutional Pattern</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Joseph Reilly's presidency is not an aberration — it is the system working as designed. The Catholic university governance model, in which the Archdiocese controls the Board and the Board controls the presidency, creates a closed loop of accountability where the institution investigates itself and invariably finds nothing wrong.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Consider the chain: McCarrick groomed seminarians at the beach house. His secretary, Reilly, admitted visiting that beach house. Reilly became rector of the seminary where abuse was reported. The seminary's parent university investigated and recommended removal. The university's Board ignored the recommendation. The Board elected Reilly president. The president then used the criminal justice system to hunt the whistleblower who warned about all of this.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Every link in this chain represents not a failure of the system, but the system functioning exactly as intended: protecting its own, promoting the loyal, and punishing those who speak.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-zinc-900/50 border border-border p-6 space-y-4">
              <h4 className="font-heading text-lg text-destructive">Key Evidence Summary</h4>
              <ul className="space-y-3 font-mono text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">■</span>
                  Named in the 24,000-page Latham Report (2019)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">■</span>
                  Twice recommended for removal by Task Force (2019, 2020)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">■</span>
                  Failed to report 2012 sexual assault via Title IX
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">■</span>
                  Failed to report 2014 harassment at St. Andrew's Hall
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">■</span>
                  Admitted knowledge of McCarrick beach house (1994)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">■</span>
                  Elected president by regents who knew of removal recs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">■</span>
                  Whistleblower subpoenaed 18 days post-installation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">■</span>
                  NJ legislators publicly called for his resignation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">■</span>
                  Politico exposé (November 2025)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">■</span>
                  Latham Report court-ordered produced (November 2025)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Viability Rating */}
      <div className="bg-destructive/5 border-2 border-destructive/30 p-10 space-y-6">
        <h3 className="font-heading text-2xl text-destructive">Viability Assessment: The Reilly Presidency</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h4 className="font-mono text-sm text-zinc-400 uppercase">Survivability</h4>
            <div className="text-5xl font-heading text-destructive font-bold">35%</div>
            <p className="font-mono text-xs text-muted-foreground">
              Declining. The convergence of judicial orders, legislative pressure, media exposure, and the second investigation has created an untenable position. The question is not whether Reilly survives — but when the Board calculates that his removal costs less than his retention.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-mono text-sm text-zinc-400 uppercase">Risk to Institution</h4>
            <div className="text-5xl font-heading text-white font-bold">95%</div>
            <p className="font-mono text-xs text-muted-foreground">
              Critical. Every day Reilly remains as president, Seton Hall's accreditation, enrollment, donor base, and legal exposure worsen. The Penn State and Michigan State precedents demonstrate that institutions that delay accountability pay exponentially higher costs.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-mono text-sm text-zinc-400 uppercase">System Integrity</h4>
            <div className="text-5xl font-heading text-zinc-500 font-bold">0%</div>
            <p className="font-mono text-xs text-muted-foreground">
              The system that was designed to protect has become the system that promotes. When the same body that recommends removal also conducts the election, institutional integrity does not exist. It is a performance.
            </p>
          </div>
        </div>
      </div>

      {/* Closing */}
      <div className="bg-zinc-900/50 border border-border p-10 space-y-4">
        <blockquote className="font-serif text-2xl italic text-white/90 border-l-4 border-destructive pl-8">
          "At Penn State, they went to prison. At Michigan State, the president resigned. At Seton Hall, they gave him a promotion and hunted the whistleblower. That's not a failure of the system. That's the system."
        </blockquote>
        <p className="text-right font-mono text-xs text-zinc-500">— Investigative Summary, 2025</p>
      </div>

      <MemoryGate registryId="person-reilly" />
    </div>
  );
}
