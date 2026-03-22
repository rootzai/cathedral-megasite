import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Mail, AlertTriangle, ExternalLink } from "lucide-react";
import { JourneyNav } from "@/components/JourneyNav";

export default function EpsteinNexus() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="page-enter max-w-5xl mx-auto px-6 py-12 space-y-20 font-serif">
      {/* Hero Section */}
      <section className="relative border-b border-border pb-16">
        <div className="space-y-8 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/30 text-destructive text-xs font-mono uppercase tracking-[0.2em]">
            <AlertTriangle className="w-3 h-3" />
            Financial Intelligence & Communications
          </div>

          <h1 className="font-heading text-6xl md:text-7xl text-foreground leading-[0.9] tracking-tighter">
            The Epstein <br />
            <span className="text-destructive italic underline decoration-destructive/30 underline-offset-8">Nexus</span>
          </h1>

          <div className="prose-investigative text-xl leading-relaxed text-muted-foreground italic">
            "The investigation into sexual misconduct at a Catholic university was led by a lawyer who called the world's most notorious sex offender 'Uncle Jeffrey' — while he was paying tuition to the same university."
          </div>
        </div>
      </section>

      {/* The Ruemmler-Epstein Documented Pivot */}
      <section className="space-y-12">
        <header className="flex items-center gap-6">
          <h2 className="font-heading text-4xl text-foreground shrink-0 tracking-tighter">The Email Exhibits</h2>
          <div className="h-px flex-1 bg-border" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              The forensic analysis reveals two distinct threads: the intimate professional
              relationship between lead investigator Kathryn Ruemmler and Jeffrey Epstein during the
              probe, and the direct financial ties between Epstein's banking network and Seton Hall.
              Both threads were confirmed by the <span className="text-foreground font-bold">DOJ document dump of February 2026.</span>
            </p>
            <p>
              The emails presented here demonstrate ongoing logistical coordination between "J" (Jeffrey Epstein)
              and Kathryn Ruemmler throughout late 2018 and early 2019 — precisely the window when Ruemmler
              was interviewing Newark bishops and ostensibly leading the "independent" investigation into
              McCarrick's network.
            </p>
          </div>

          <div className="space-y-6">
            <button
              onClick={() => setSelectedImage("/assets/epstein-email-1.png")}
              className="w-full group text-left relative bg-zinc-900 border border-zinc-800 p-2 rounded hover:border-destructive transition-all"
            >
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <ExternalLink className="w-4 h-4 text-white" />
              </div>
              <img
                src="/assets/epstein-email-1.png"
                alt="Email correspondence showing September 2018 coordination before Seton Hall board presentation"
                className="w-full h-auto rounded grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100"
              />
              <div className="mt-4 px-4 pb-2">
                <p className="font-mono text-[10px] text-destructive uppercase tracking-widest mb-1">Exhibit A: Sept 29, 2018</p>
                <p className="text-sm text-zinc-400">Ruemmler references presenting to the Seton Hall board in New Jersey.</p>
              </div>
            </button>

            <button
              onClick={() => setSelectedImage("/assets/epstein-email-2.png")}
              className="w-full group text-left relative bg-zinc-900 border border-zinc-800 p-2 rounded hover:border-destructive transition-all"
            >
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <ExternalLink className="w-4 h-4 text-white" />
              </div>
              <img
                src="/assets/epstein-email-2.png"
                alt="Email correspondence showing February 2019 coordination regarding meeting Cardinal in Newark"
                className="w-full h-auto rounded grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100"
              />
              <div className="mt-4 px-4 pb-2">
                <p className="font-mono text-[10px] text-destructive uppercase tracking-widest mb-1">Exhibit B: Feb 27, 2019</p>
                <p className="text-sm text-zinc-400">Ruemmler coordinates with Epstein regarding interviewing "Bishops in Newark" and meeting "the Cardinal".</p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Epstein's Payments to Seton Hall */}
      <section className="bg-zinc-900 border border-border p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-destructive to-transparent" />

        <header className="mb-10 lg:w-2/3">
          <h2 className="font-heading text-3xl mb-4 text-foreground">Verified Financial Ties to Seton Hall</h2>
          <p className="text-muted-foreground leading-relaxed">
            Forensic verification of banking records confirms that Jeffrey Epstein made specific tuition
            payments to Seton Hall University between 2017 and 2019. These payments were issued from
            Deutsche Bank and JPMorgan Chase accounts and signed by Epstein's long-time lawyer, Darren Indyke.
          </p>
        </header>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-sm">
            <thead className="bg-zinc-950 border-y border-zinc-800">
              <tr>
                <th className="py-4 px-4 font-normal text-zinc-500 uppercase tracking-widest text-[10px]">Transaction Date</th>
                <th className="py-4 px-4 font-normal text-zinc-500 uppercase tracking-widest text-[10px]">Amount</th>
                <th className="py-4 px-4 font-normal text-zinc-500 uppercase tracking-widest text-[10px]">Beneficiary</th>
                <th className="py-4 px-4 font-normal text-zinc-500 uppercase tracking-widest text-[10px]">Signatory / Account</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="py-4 px-4 text-foreground">July 8, 2017</td>
                <td className="py-4 px-4 text-destructive font-bold">$17,060</td>
                <td className="py-4 px-4 text-zinc-400">Unnamed Student</td>
                <td className="py-4 px-4 text-zinc-400">Deutsche Bank</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="py-4 px-4 text-foreground">July 13, 2018</td>
                <td className="py-4 px-4 text-destructive font-bold">$11,749</td>
                <td className="py-4 px-4 text-zinc-400">Brian Beller</td>
                <td className="py-4 px-4 text-zinc-400">Deutsche Bank</td>
              </tr>
              <tr className="hover:bg-zinc-800/30 transition-colors">
                <td className="py-4 px-4 text-foreground">Feb 19, 2019</td>
                <td className="py-4 px-4 text-destructive font-bold">$4,068</td>
                <td className="py-4 px-4 text-zinc-400">Brian Beller</td>
                <td className="py-4 px-4 text-zinc-400">Darren Indyke (Attorney)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* The Timeline Conclusion */}
      <section className="max-w-3xl mx-auto text-center space-y-8 bg-zinc-950 p-12 border border-destructive/20 relative">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0a0a0c] px-4">
          <AlertTriangle className="w-6 h-6 text-destructive animate-pulse" />
        </div>
        <h3 className="font-mono text-xs text-destructive uppercase tracking-[0.3em]">17 Days — The Critical Window</h3>
        <p className="text-lg text-zinc-300 leading-relaxed italic">
          The Latham Report was presented to the Board on August 27, 2019 — exactly <strong>17 days</strong> after
          Jeffrey Epstein died in federal custody. The timeline is undeniable. The investigation that Ruemmler
          conducted while in contact with Epstein was presented in the immediate aftermath of his death — and then sealed.
        </p>
      </section>

      <JourneyNav />

      {/* Image Modal overlay */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[90vw] md:max-w-5xl bg-zinc-950 border-zinc-800 p-2 overflow-hidden">
          {selectedImage && (
            <div className="relative w-full h-full flex flex-col items-center justify-center bg-black/50">
              <img
                src={selectedImage}
                alt="Enlarged email exhibit"
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
