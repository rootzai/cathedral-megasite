import MemoryGate from "@/components/MemoryGate";
import { ReillySectionNav } from "@/components/SectionNav";
import SectionHeader from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Gavel, Scale, Siren } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function Reckoning() {
  return (
    <div className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-4">
      <SectionHeader
        number="06"
        title="The Reckoning"
        subtitle="Judicial Orders, Legislative Demands, and the Walls Closing In"
      />

      {/* Judge Benjamin */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-card border border-border p-8 rounded-lg space-y-6">
          <div className="flex items-center gap-3">
            <Gavel className="w-6 h-6 text-destructive" />
            <h3 className="font-heading text-2xl text-foreground">Judge Avion Benjamin's Order</h3>
          </div>
          <p className="font-body text-muted-foreground leading-relaxed">
            In November 2025, Judge Avion Benjamin ordered the production of the Latham Report — the 24,000-page investigation that Seton Hall and its legal counsel, Thomas Scrivo of O'Toole Scrivo LLC, had suppressed for six years. The judge found that Scrivo had engaged in a pattern of withholding material evidence and sanctioned him accordingly.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            This order represented the first judicial crack in the wall of institutional silence. For the first time, the documented record of what Reilly knew — and when he knew it — was ordered into the hands of plaintiffs and their attorneys.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <div className="relative h-40 w-full overflow-hidden border border-border cursor-pointer group">
                <img src="/assets/ReillytoNyreletter.png" alt="Reilly Letter" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-xs text-destructive bg-black/80 px-4 py-2 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">View Document</span>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle className="font-heading text-xl text-destructive">Reilly Correspondence</DialogTitle>
              </DialogHeader>
              <img src="/assets/ReillytoNyreletter.png" alt="Reilly Letter" className="w-full object-contain" />
            </DialogContent>
          </Dialog>
        </div>

        <div className="bg-card border border-border p-8 rounded-lg space-y-6">
          <div className="flex items-center gap-3">
            <Scale className="w-6 h-6 text-destructive" />
            <h3 className="font-heading text-2xl text-foreground">The Scrivo Sanctions</h3>
          </div>
          <p className="font-body text-muted-foreground leading-relaxed">
            Thomas Scrivo's sanctions are historically significant. As the university's outside counsel, Scrivo had argued for years that the Latham Report was protected by attorney-client privilege. Judge Benjamin rejected this argument, finding that the report was commissioned not as legal advice but as an investigative audit — and that its suppression constituted a deliberate obstruction of discovery.
          </p>
          <div className="bg-destructive/10 border border-destructive/30 p-4 space-y-2">
            <h4 className="font-mono text-sm text-destructive uppercase">Sanctions Record</h4>
            <ul className="space-y-2 font-mono text-xs text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-destructive">•</span>
                Failed to produce documents ordered by court
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive">•</span>
                Misrepresented privilege claims over investigative materials
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive">•</span>
                Delayed proceedings for six years through procedural obstruction
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive">•</span>
                Used political connections to suppress judicial inquiry
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Legislative Response */}
      <div className="space-y-6">
        <h3 className="font-heading text-2xl text-foreground border-b border-border pb-2">The Legislative Firestorm</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              In January 2025, New Jersey state legislators publicly called for Reilly's resignation. The demands came after the Politico exposé revealed the full scope of the Latham Report's findings and the Board of Regents' decision to elect Reilly despite the removal recommendations.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Multiple lawmakers cited the Penn State precedent — where university president Graham Spanier was convicted and sentenced for his role in the Sandusky cover-up — as the standard that should apply to Seton Hall. The comparison was devastating: at Penn State, officials went to prison for failing to report abuse. At Seton Hall, Reilly was promoted.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              The legislative pressure prompted the Board of Regents to announce a second outside investigation — this time by Ropes & Gray LLP — in February 2025. The announcement was widely viewed as another containment strategy rather than a genuine effort at accountability.
            </p>
          </div>
          <div className="space-y-4">
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative h-64 w-full overflow-hidden border border-border cursor-pointer group">
                  <img src="/assets/reilly-politico.png" alt="Reilly Politico" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-xs text-destructive bg-black/80 px-4 py-2 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">View</span>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle className="font-heading text-xl text-destructive">Politico Coverage</DialogTitle>
                </DialogHeader>
                <img src="/assets/reilly-politico.png" alt="Reilly Politico" className="w-full object-contain" />
              </DialogContent>
            </Dialog>
            <div className="bg-destructive/5 border border-destructive/20 p-4">
              <h4 className="font-mono text-xs text-destructive uppercase mb-2">The Penn State Comparison</h4>
              <p className="font-mono text-xs text-muted-foreground">
                At Penn State, university officials went to prison for failing to report abuse. At Michigan State, the president resigned under pressure. At Seton Hall, the man named in the report was elected president.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Whistleblower Hunt */}
      <div className="bg-red-950/20 border-2 border-destructive/40 p-10 space-y-6">
        <div className="flex items-center gap-3">
          <Siren className="w-8 h-8 text-destructive animate-pulse" />
          <h3 className="font-heading text-2xl text-destructive">The Whistleblower Hunt</h3>
        </div>
        <p className="font-body text-lg text-white/90 leading-relaxed">
          Perhaps the most damning element of the Reilly presidency is not what he failed to report — but what he actively pursued. Eighteen days after his installation, Seton Hall served a grand jury subpoena to Google targeting the anonymous whistleblower account @SodomHall, which had been warning the Board of Regents about the Reilly succession for months.
        </p>
        <p className="font-body text-muted-foreground leading-relaxed">
          The subpoena used Essex County's criminal justice resources to unmask a critic — not an abuser. The institution deployed the full weight of the legal system to protect its president's reputation while taking no comparable action to address the abuse allegations documented in the Latham Report.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-black/50 border border-destructive/30 p-4 text-center">
            <div className="font-heading text-3xl text-destructive">18</div>
            <div className="font-mono text-xs text-zinc-500 uppercase">Days after installation</div>
          </div>
          <div className="bg-black/50 border border-destructive/30 p-4 text-center">
            <div className="font-heading text-3xl text-destructive">0</div>
            <div className="font-mono text-xs text-zinc-500 uppercase">Abuse investigations opened</div>
          </div>
          <div className="bg-black/50 border border-destructive/30 p-4 text-center">
            <div className="font-heading text-3xl text-destructive">1</div>
            <div className="font-mono text-xs text-zinc-500 uppercase">Whistleblower subpoenaed</div>
          </div>
        </div>
      </div>

      {/* Resignation from Search Committee */}
      <div className="bg-card border border-border p-8 rounded-lg space-y-6">
        <h3 className="font-heading text-2xl text-foreground">The Search Committee Resignation</h3>
        <p className="font-body text-muted-foreground leading-relaxed">
          Before Reilly was installed as president, he had served on the presidential search committee — the very body tasked with selecting the next university leader. When it became clear that Reilly himself would be the candidate, he resigned from the committee — a procedural fig leaf that the Board used to claim the process was legitimate.
        </p>
        <p className="font-body text-muted-foreground leading-relaxed">
          The resignation letter, obtained through discovery, reveals the timeline of coordination between the Board, Cardinal Tobin's office, and Reilly himself — raising questions about whether the "search" was ever anything more than a formality designed to install a predetermined candidate.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <div className="relative h-48 w-full overflow-hidden border border-border cursor-pointer group">
              <img src="/assets/Reillyresignsfromsearchcommittee.png" alt="Reilly Resigns from Search Committee" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-xs text-destructive bg-black/80 px-4 py-2 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">View Document</span>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle className="font-heading text-xl text-destructive">Reilly Resigns from Search Committee</DialogTitle>
            </DialogHeader>
            <img src="/assets/Reillyresignsfromsearchcommittee.png" alt="Reilly Resigns from Search Committee" className="w-full object-contain" />
          </DialogContent>
        </Dialog>
      </div>

      <MemoryGate registryId="person-reilly" />
    </div>
  );
}
