import React, { useState, useEffect } from "react";
import EndgameLayout from "@/components/EndgameLayout";
import { LedgerNav } from "@/components/SectionNav";
import { ExternalLink, AlertTriangle, Loader2 } from "lucide-react";

export default function MadmanDossier() {
  const [iframeStatus, setIframeStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [retryCount, setRetryCount] = useState(0);
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    if (iframeStatus === 'loaded' || iframeStatus === 'error') return;

    // 10-second timeout before assuming the iframe failed to load during cold start
    const timer = setTimeout(() => {
      if (retryCount < 1) {
        // First timeout: Retry once
        setRetryCount(prev => prev + 1);
        setIframeKey(prev => prev + 1); // Force Remount
        setIframeStatus('loading');
      } else {
        // Second timeout: Show explicit error/fallback
        setIframeStatus('error');
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [iframeStatus, retryCount, iframeKey]);

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

      {/* Iframe Container — with retry logic and full-width fallback button */}
      <section className="relative w-full">
        <div className="border border-border rounded-lg overflow-hidden bg-muted/10 shadow-2xl relative min-h-[600px]">
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
          
          <div className="relative">
            {iframeStatus === 'loading' && (
              <div className="absolute inset-0 bg-zinc-950 z-10 flex flex-col items-center justify-center gap-4 border-2 border-red-900/20">
                <Loader2 className="w-12 h-12 text-red-500 animate-spin" />
                <h3 className="font-mono text-lg font-black text-white uppercase tracking-widest animate-pulse">
                  Loading External Archive...
                </h3>
                <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest mt-2">
                  Attempt {retryCount + 1} / 2 // Establishing secure connection
                </p>
              </div>
            )}

            {iframeStatus !== 'error' ? (
              <iframe
                key={iframeKey}
                src="https://madmansec-nuaqskqw.manus.space"
                className={`w-full h-[1200px] border-none block ${iframeStatus === 'loading' ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}`}
                title="Madman McCarrick Dossier — External Archive"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                onLoad={() => setIframeStatus('loaded')}
              />
            ) : (
              <div className="w-full h-[600px] bg-zinc-950 border-2 border-red-900/40 flex flex-col items-center justify-center gap-8 text-center p-12">
                <AlertTriangle className="w-16 h-16 text-red-500 mx-auto" />
                <div>
                  <h3 className="font-mono text-2xl font-black text-white uppercase tracking-widest mb-2">
                    Archive Temporarily Unavailable
                  </h3>
                  <p className="text-zinc-400 font-serif text-lg max-w-xl mx-auto">
                    The external archive server timed out during cold start. The records still exist, but the direct connection failed.
                  </p>
                </div>
                <a
                  href="https://madmansec-nuaqskqw.manus.space"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-2xl flex items-center justify-center gap-3 bg-red-900 hover:bg-red-700 text-white px-8 py-6 font-mono text-lg font-black uppercase tracking-widest transition-all shadow-[0_0_30px_rgba(139,26,26,0.2)] hover:shadow-[0_0_50px_rgba(139,26,26,0.5)] border border-red-500"
                >
                  <ExternalLink className="w-6 h-6" />
                  ACCESS ARCHIVE DIRECTLY
                </a>
              </div>
            )}
          </div>
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

      <LedgerNav />
    </div>
  );
}
