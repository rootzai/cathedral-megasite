import EndgameLayout from "@/components/EndgameLayout";
import { JourneyNav } from "@/components/JourneyNav";
import { ExternalLink, AlertTriangle } from "lucide-react";

export default function MadmanDossier() {
  return (
    <div className="space-y-8 animate-in fade-in duration-1000">
      {/* Header Section */}
      <section className="relative border-b border-border pb-8">
        <div className="max-w-5xl space-y-4 z-10 relative">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-sm bg-red-950/40 border border-red-500 text-red-500 text-sm font-mono uppercase tracking-[0.4em] font-black shadow-lg">
            <ExternalLink className="w-4 h-4" />
            External Forensic Dossier
          </div>
          <h1 className="font-heading text-5xl md:text-6xl text-foreground leading-tight">
            Madman McCarrick: <br />
            <span className="text-destructive">The Secretarial Archive</span>
          </h1>
          <p className="font-body text-3xl text-zinc-200 leading-relaxed max-w-4xl italic border-l-4 border-red-700 pl-8 py-4">
            An exhaustive analysis of the secretarial apparatus under Archbishop Theodore McCarrick in Newark (1986–2000). This companion dossier examines how the chancery's bureaucratic machinery facilitated, concealed, and perpetuated systemic abuse.
          </p>
          <div className="flex items-center gap-3 text-lg text-amber-500 font-mono font-bold uppercase tracking-widest">
            <AlertTriangle className="w-6 h-6" />
            <span>Hosted @ madmansec-nuaqskqw.manus.space</span>
          </div>
        </div>
      </section>

      {/* Iframe Container */}
      <section className="relative w-full">
        <div className="border border-border rounded-lg overflow-hidden bg-muted/10 shadow-2xl">
          <div className="bg-muted/30 border-b border-border px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="font-mono text-sm text-zinc-300 uppercase tracking-[0.2em] font-bold">
              SECURITY PROTOCOL ENABLED // SOURCE: MANUS.SPACE
            </span>
            <div className="w-16" />
          </div>
          <iframe
            src="https://madmansec-nuaqskqw.manus.space"
            width="100%"
            height="1200"
            style={{ border: "none" }}
            title="Madman McCarrick Dossier"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          />
        </div>
      </section>

      {/* Context Footer */}
      <section className="border-t-2 border-red-900/30 pt-16 mt-16 bg-red-950/5 p-12">
        <div className="max-w-5xl space-y-8">
          <h2 className="font-heading text-4xl text-white uppercase tracking-tighter font-black">Archive Context</h2>
          <p className="font-body text-2xl text-zinc-200 leading-relaxed">
            The Madman McCarrick dossier represents a comprehensive investigation into the logistical and administrative infrastructure that sustained Theodore McCarrick's predatory operations in Newark. It examines the role of priest secretaries as operational buffers, the management of the "nephew" network, and the systemic normalization of abuse within the highest echelons of diocesan power.
          </p>
          <p className="font-body text-2xl text-zinc-200 leading-relaxed font-serif italic border-l-2 border-zinc-700 pl-8">
            This external archive complements the evidence presented in the main McCarrick dossier and serves as a permanent record of institutional complicity.
          </p>
        </div>
      </section>

      <JourneyNav />
    </div>
  );
}
