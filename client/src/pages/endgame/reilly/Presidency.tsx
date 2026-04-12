import MemoryGate from "@/components/MemoryGate";
import SectionHeader from "@/components/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Clock, Siren } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function Presidency() {
  return (
    <div className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-4">
      <SectionHeader
        number="04"
        title="The Presidency"
        subtitle="From Removal Recommendation to the Corner Office"
      />

      {/* The 18-Day Clock */}
      <div className="bg-red-950/20 border-2 border-destructive/40 p-10 space-y-6 relative overflow-hidden">
        <div className="absolute top-4 right-4 opacity-10">
          <Clock className="w-32 h-32 text-destructive" />
        </div>
        <div className="flex items-center gap-3">
          <Siren className="w-8 h-8 text-destructive animate-pulse" />
          <h3 className="font-heading text-2xl text-destructive">The 18-Day Clock: The Unmasking</h3>
        </div>
        <p className="font-body text-lg text-white/90 leading-relaxed">
          On July 1, 2024, Monsignor Joseph Reilly was installed as President. Exactly 18 days later, on July 18, 2024, the institution unmasked its true intent. A grand jury subpoena was served to Google — not to investigate the decades of abuse at the beach house, but to identify the anonymous whistleblower account that had spent months warning the Regents about the Reilly succession.
        </p>
        <p className="font-body text-muted-foreground leading-relaxed">
          The speed with which the university deployed the criminal justice apparatus to silence dissent — while taking no action on the substantive abuse allegations — reveals the institution's true priorities: protection of the presidency, not protection of survivors.
        </p>
      </div>

      {/* Chronology */}
      <div className="space-y-6">
        <h3 className="font-heading text-2xl text-foreground border-b border-border pb-2">The Timeline of Impunity</h3>
        <div className="space-y-0">
          {[
            { date: "1987", event: "Reilly ordained", detail: "Begins career in the Archdiocese of Newark" },
            { date: "1994", event: "McCarrick's personal secretary", detail: "Daily proximity; enabled 1995 papal visit logistics" },
            { date: "2002", event: "Joins ICS faculty", detail: "Begins rise within the seminary apparatus" },
            { date: "2012", event: "Sexual assault complaint at ICS", detail: "Reilly handles 'in-house' via Archdiocesan process; no Title IX report filed" },
            { date: "2014", event: "Harassment at St. Andrew's Hall", detail: "Reilly receives information; takes no formal action" },
            { date: "Sep 6, 2019", event: "Latham Report presented to Board", detail: "24,000 pages; 12 clergymen identified; Reilly's failures documented" },
            { date: "Nov 25, 2019", event: "First Task Force removal letter", detail: "Recommended removal from all boards — citing 2012 failure" },
            { date: "Feb 2020", event: "Second Task Force removal letter", detail: "Reiterated removal; cited 2014 failure as a pattern" },
            { date: "May 2022", event: "Reilly placed on sabbatical", detail: "Stepped down as ICS Rector; later appointed Vice Provost" },
            { date: "Jul 1, 2024", event: "Installed as SHU President", detail: "Unanimous Board vote — by regents who knew of removal recommendations", highlight: true },
            { date: "Jul 18, 2024", event: "Grand jury subpoena to Google", detail: "18 days post-installation; targeting the whistleblower, not the abuse", highlight: true },
            { date: "Jan 2025", event: "NJ lawmakers call for resignation", detail: "State legislators publicly demand Reilly step down" },
            { date: "Feb 2025", event: "Ropes & Gray review announced", detail: "Second outside investigation — unprecedented for a sitting president" },
            { date: "Nov 2025", event: "Judge Benjamin orders Latham Report produced", detail: "Scrivo sanctioned for withholding it for years" },
          ].map((item, i) => (
            <div key={i} className={`relative pl-10 py-4 border-l-2 ${item.highlight ? 'border-destructive bg-destructive/5' : 'border-border'}`}>
              <div className={`absolute left-[-6px] top-6 w-3 h-3 rounded-full ${item.highlight ? 'bg-destructive animate-pulse' : 'bg-zinc-600'} border-2 border-background`} />
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <span className={`font-mono text-sm font-bold ${item.highlight ? 'text-destructive' : 'text-zinc-400'}`}>{item.date}</span>
                <span className="font-heading text-foreground">{item.event}</span>
              </div>
              <p className="font-body text-sm text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* The O'Toole Scrivo Shield */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-card border border-border p-8 rounded-lg space-y-6">
          <h3 className="font-heading text-2xl text-foreground">The O'Toole Scrivo Shield</h3>
          <p className="font-body text-muted-foreground leading-relaxed">
            O'Toole Scrivo LLC — headed by Kevin O'Toole and Tom Scrivo — served as the ultimate legal buffer. When the Latham Report threatened to dismantle the network, O'Toole Scrivo utilized their vast political leverage within New Jersey to block inquiries and bury the findings.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            Rather than facing discipline for his role in the reporting failures, Reilly was protected, insulated, and ultimately installed as the President of Seton Hall University — a physical monument to impunity.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <div className="relative h-40 w-full overflow-hidden border border-border cursor-pointer group">
                <img src="/assets/who_speaks_scrivo.png" alt="Scrivo Evidence" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-xs text-destructive bg-black/80 px-4 py-2 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">View Evidence</span>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle className="font-heading text-xl text-destructive">O'Toole Scrivo — Legal Architecture</DialogTitle>
              </DialogHeader>
              <img src="/assets/who_speaks_scrivo.png" alt="Scrivo Evidence" className="w-full object-contain" />
            </DialogContent>
          </Dialog>
        </div>

        <div className="bg-card border border-border p-8 rounded-lg space-y-6">
          <h3 className="font-heading text-2xl text-foreground">The Task Force's Double Dealing</h3>
          <p className="font-body text-muted-foreground leading-relaxed">
            The Board of Regents' Special Task Force is perhaps the most revealing element. It was created to provide the appearance of accountability — and it did, briefly, by issuing two formal removal letters. But the Task Force's ultimate function was not accountability. It was containment.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            The same body that documented Reilly's unfitness for leadership subsequently presided over his election to the presidency. Cardinal Tobin — who himself refused to appear before Latham investigators — refused to abide by the Task Force's recommendations.
          </p>
          <blockquote className="font-serif text-lg italic text-white/80 border-l-2 border-destructive pl-4">
            "A body that created the record of wrongdoing and then buried it, using the existence of the investigation as evidence of institutional seriousness while ensuring that none of the investigation's conclusions were ever realized."
          </blockquote>
        </div>
      </div>

      {/* Politico */}
      <div className="bg-card border border-border p-8 rounded-lg space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-2xl text-foreground">The Politico Exposé</h3>
          <Badge variant="outline" className="text-destructive border-destructive/50 bg-destructive/10 font-mono">November 2025</Badge>
        </div>
        <p className="font-body text-muted-foreground leading-relaxed">
          In November 2025, Politico published a comprehensive exposé on the Seton Hall scandal, revealing the full scope of the Latham Report suppression and Reilly's documented failures. The article triggered renewed calls for his resignation from New Jersey state legislators and accelerated the judicial proceedings.
        </p>
        <a
          href="https://www.politico.com/news/2025/11/17/seton-hall-clergy-abuse-documents-00654168"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-destructive hover:bg-destructive/90 text-white px-6 py-3 font-mono text-sm uppercase tracking-widest transition-all"
        >
          Read the Politico Exposé →
        </a>
      </div>

      <MemoryGate registryId="person-reilly" />
    </div>
  );
}
