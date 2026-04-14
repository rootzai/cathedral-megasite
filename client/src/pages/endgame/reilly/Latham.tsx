import MemoryGate from "@/components/MemoryGate";
import { ReillySectionNav } from "@/components/SectionNav";
import SectionHeader from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, FileText, ShieldAlert } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function Latham() {
  return (
    <div className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-4">
      <SectionHeader
        number="03"
        title="The Latham Report"
        subtitle="24,000 Pages, Six Years of Suppression"
      />

      {/* The Report */}
      <div className="bg-zinc-900/50 border border-border p-10 space-y-6">
        <div className="flex items-center gap-3">
          <FileText className="w-8 h-8 text-destructive" />
          <h3 className="font-heading text-2xl text-foreground">What the Latham Report Found</h3>
        </div>
        <p className="font-body text-lg text-muted-foreground leading-relaxed">
          The 2019 Latham Report — 24,000 pages, sealed for six years, produced by Kathryn Ruemmler of Latham & Watkins — identified Reilly as a central figure in reporting failures during his tenure as Rector of the Immaculate Conception Seminary (ICS). The Board of Regents' Special Task Force, which reviewed the report, issued two formal letters recommending Reilly's removal.
        </p>
        <p className="font-body text-sm text-zinc-500">
          The report was presented to the Board on August 27, 2019 — 17 days after Jeffrey Epstein's death. Its lead investigator, Kathryn Ruemmler, was in frequent contact with Epstein during the investigation. The report was subsequently sealed and withheld from plaintiffs, survivors, and the public for nearly six years.
        </p>
      </div>

      {/* Task Force Removal Recommendations */}
      <div className="space-y-8">
        <h3 className="font-heading text-2xl text-foreground border-b border-border pb-2">Task Force Removal Recommendations</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-card border-2 border-destructive/30 p-8 rounded-lg space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-heading text-xl text-destructive">First Letter</h4>
              <Badge variant="outline" className="text-destructive border-destructive/50 bg-destructive/10 font-mono">November 25, 2019</Badge>
            </div>
            <p className="font-body text-muted-foreground leading-relaxed">
              The Task Force recommended Reilly's removal from the Board of Trustees and Board of Overseers, citing his failure to report a <strong className="text-white">2012 sexual assault complaint</strong> through proper university Title IX channels — instead handling it "within the Archdiocesan process," bypassing federal oversight requirements.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative h-48 w-full overflow-hidden border border-border cursor-pointer group">
                  <img src="/assets/ReillySupplementalNotice.png" alt="Notice to Reilly" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-xs text-destructive bg-black/80 px-4 py-2 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">View Document</span>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle className="font-heading text-xl text-destructive">Task Force Notice to Reilly</DialogTitle>
                </DialogHeader>
                <img src="/assets/ReillySupplementalNotice.png" alt="Notice to Reilly" className="w-full object-contain" />
              </DialogContent>
            </Dialog>
          </div>

          <div className="bg-card border-2 border-destructive/30 p-8 rounded-lg space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-heading text-xl text-destructive">Second Letter</h4>
              <Badge variant="outline" className="text-destructive border-destructive/50 bg-destructive/10 font-mono">February 2020</Badge>
            </div>
            <p className="font-body text-muted-foreground leading-relaxed">
              A supplemental letter reiterated the removal recommendation, citing Reilly's failure to report a <strong className="text-white">2014 sexual harassment incident at St. Andrew's Hall</strong>. The letter noted that his failure to act on this second incident — after having been formally warned about reporting obligations — constituted a <strong className="text-destructive">pattern, not an oversight</strong>.
            </p>
            <div className="bg-destructive/10 border border-destructive/30 p-4">
              <p className="font-mono text-sm text-destructive font-bold">
                Neither recommendation was acted upon. The Board of Regents — the same body that issued these recommendations — subsequently elected Reilly as university president.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Ruemmler-Epstein Connection */}
      <div className="space-y-6">
        <h3 className="font-heading text-2xl text-foreground border-b border-border pb-2">The Ruemmler-Epstein Shadow</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Kathryn Ruemmler — former White House Counsel to President Obama — led the Latham & Watkins investigation. During the same period, Ruemmler was in documented contact with Jeffrey Epstein. Her dual role raises fundamental questions about the independence of the investigation and whether its scope was deliberately limited.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              The report identified 12 priests and bishops for action, yet its recommendations were never fully implemented. The investigation examined over 500,000 documents and conducted more than 100 interviews, yet the Board treated its conclusions as advisory rather than binding.
            </p>
          </div>
          <div className="bg-destructive/5 border border-destructive/20 p-6 rounded-lg">
            <h4 className="font-heading text-lg text-destructive mb-4">Key Timeline</h4>
            <div className="space-y-3 font-mono text-xs text-muted-foreground">
              <div className="border-b border-border pb-2">
                <span className="text-destructive font-bold">Aug 10, 2019</span><br />Jeffrey Epstein dies
              </div>
              <div className="border-b border-border pb-2">
                <span className="text-destructive font-bold">Aug 27, 2019</span><br />Latham Report presented to SHU Board
              </div>
              <div className="border-b border-border pb-2">
                <span className="text-destructive font-bold">Nov 25, 2019</span><br />First removal recommendation
              </div>
              <div className="border-b border-border pb-2">
                <span className="text-destructive font-bold">Feb 2020</span><br />Second removal recommendation
              </div>
              <div>
                <span className="text-destructive font-bold">Nov 2025</span><br />Judge Benjamin orders report produced
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Six Years of Suppression */}
      <div className="bg-card border border-border p-8 rounded-lg space-y-6">
        <div className="flex items-center gap-3">
          <ShieldAlert className="w-6 h-6 text-destructive" />
          <h3 className="font-heading text-2xl text-foreground">Six Years of Suppression</h3>
        </div>
        <p className="font-body text-muted-foreground leading-relaxed">
          The Latham Report was sealed and withheld from plaintiffs, survivors, and the public for nearly six years. Thomas Scrivo of O'Toole Scrivo LLC was sanctioned by Judge Avion Benjamin for his role in withholding it. The report was finally ordered produced in November 2025 — six years after it documented, in 24,000 pages, what the institution already knew.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <div className="relative h-48 w-full overflow-hidden border border-border cursor-pointer group">
              <img src="/assets/truth_latham_report.png" alt="Latham Report" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-xs text-destructive bg-black/80 px-4 py-2 uppercase tracking-widest">View Evidence</span>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle className="font-heading text-xl text-destructive">The Latham Report — Suppressed Evidence</DialogTitle>
            </DialogHeader>
            <img src="/assets/truth_latham_report.png" alt="Latham Report" className="w-full object-contain" />
          </DialogContent>
        </Dialog>
      </div>

      <MemoryGate registryId="person-reilly" />
    </div>
  );
}
