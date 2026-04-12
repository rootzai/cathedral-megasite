import MemoryGate from "@/components/MemoryGate";
import SectionHeader from "@/components/SectionHeader";
import ImageModal from "@/components/ImageModal";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Eye, Scale, ShieldAlert } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function ReillyHome() {
  return (
    <div className="space-y-16 animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative border-b border-border pb-16">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <Scale className="w-96 h-96 text-destructive animate-pulse" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 z-10">
            <SectionHeader
              number="01"
              title="Joseph Reilly"
              subtitle="The Secretary Who Became President"
            />
            <p className="font-body text-xl text-muted-foreground leading-relaxed max-w-xl">
              Monsignor Joseph Reilly served as Theodore McCarrick's personal secretary in 1994, managed the seminary where abuse was reported for a decade, was twice recommended for removal by Seton Hall's own task force — and was then unanimously elected president. His career is the single most complete illustration of how the system rewards silence.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="text-destructive border-destructive/50 bg-destructive/10 font-mono">McCarrick Secretary 1994</Badge>
              <Badge variant="outline" className="text-destructive border-destructive/50 bg-destructive/10 font-mono">ICS Rector 2012–2022</Badge>
              <Badge variant="outline" className="text-destructive border-destructive/50 bg-destructive/10 font-mono">SHU President 2024</Badge>
            </div>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-destructive/20 blur-3xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
                <div className="relative transform transition-transform duration-700 group-hover:scale-105">
                  <div className="aspect-[4/5] bg-white border-2 border-destructive/50 overflow-hidden relative shadow-2xl shadow-destructive/20">
                    <img
                      src="/assets/figures/reilly_portrait.jpg"
                      alt="Msgr. Joseph Reilly"
                      className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="font-mono text-xs text-destructive mb-2">STATUS: UNDER INVESTIGATION</div>
                      <h2 className="font-heading text-3xl text-zinc-900">Msgr. Joseph Reilly</h2>
                      <p className="font-mono text-sm text-gray-400 mt-2">President, Seton Hall University</p>
                      <div className="mt-4 flex items-center text-xs font-mono text-destructive opacity-0 group-hover:opacity-100 transition-opacity">
                        <Eye className="w-4 h-4 mr-2" />
                        CLICK TO EXPAND
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl bg-white border-destructive/20">
              <DialogHeader>
                <DialogTitle className="font-heading text-2xl text-destructive">Msgr. Joseph Reilly</DialogTitle>
              </DialogHeader>
              <div className="relative aspect-auto max-h-[80vh] w-full overflow-hidden rounded-md">
                <img src="/assets/figures/reilly_portrait.jpg" alt="Msgr. Joseph Reilly" className="h-full w-full object-contain" />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-card border border-border p-6 hover:border-destructive/50 transition-colors">
          <div className="flex items-center gap-2 mb-3">
            <ShieldAlert className="w-5 h-5 text-destructive" />
            <h4 className="font-mono text-destructive uppercase text-sm">The Secretary</h4>
          </div>
          <p className="text-sm text-muted-foreground">
            In 1994, Reilly served as McCarrick's personal priest secretary — the man who managed the Archbishop's calendar, screened visitors, and controlled access. He admitted visiting the Sea Girt beach house, the documented primary site of McCarrick's abuse of seminarians.
          </p>
        </div>
        <div className="bg-card border border-border p-6 hover:border-destructive/50 transition-colors">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <h4 className="font-mono text-destructive uppercase text-sm">The Rector</h4>
          </div>
          <p className="text-sm text-muted-foreground">
            As Rector of the Immaculate Conception Seminary (2012–2022), Reilly failed to report a 2012 sexual assault and a 2014 harassment incident through proper Title IX channels. The Latham Report documented these failures and twice recommended his removal.
          </p>
        </div>
        <div className="bg-card border border-border p-6 hover:border-destructive/50 transition-colors">
          <div className="flex items-center gap-2 mb-3">
            <Scale className="w-5 h-5 text-destructive" />
            <h4 className="font-mono text-destructive uppercase text-sm">The President</h4>
          </div>
          <p className="text-sm text-muted-foreground">
            On July 1, 2024, Reilly was unanimously elected president by a Board of Regents who knew of the removal recommendations. Eighteen days later, the university served a grand jury subpoena to Google — not to investigate abuse, but to unmask the whistleblower who warned the regents.
          </p>
        </div>
      </section>

      {/* Key Quote */}
      <section className="bg-zinc-900/50 border border-border p-10">
        <blockquote className="font-serif text-2xl italic text-white/90 border-l-4 border-destructive pl-8">
          "A bishop's secretary is not a clerk. He is the archbishop's shadow — present at every meeting, privy to every secret, keeper of every schedule. To claim ignorance is to claim absence."
        </blockquote>
        <p className="text-right text-sm font-mono mt-4 text-zinc-500">— Investigative Analysis, ReillyProtection Dossier</p>
      </section>

      {/* The Central Question */}
      <section className="space-y-6">
        <h2 className="font-heading text-3xl text-foreground border-b border-border pb-4">The Central Question</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Joseph Reilly's career trajectory represents the most direct test of whether institutional accountability is possible within the Catholic Church's university system. He is the only figure to have been:
            </p>
            <ul className="space-y-2 font-body text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-destructive font-bold">1.</span>
                Named in a secret internal investigation (Latham Report, 2019)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive font-bold">2.</span>
                Twice formally recommended for removal by the university's own task force
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive font-bold">3.</span>
                Promoted to the highest position in the institution by the same body that recommended removal
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive font-bold">4.</span>
                The subject of a whistleblower-hunting campaign using the criminal justice system
              </li>
            </ul>
          </div>
          <div className="bg-destructive/5 border border-destructive/20 p-8 rounded-lg flex flex-col justify-center">
            <h3 className="font-heading text-xl text-destructive mb-4">Threat Assessment</h3>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex justify-between"><span className="text-zinc-400">Implication Level</span><span className="text-destructive font-bold">100%</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Latham Report Named</span><span className="text-destructive font-bold">YES</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Task Force Removal Rec.</span><span className="text-destructive font-bold">2x (2019, 2020)</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Beach House Knowledge</span><span className="text-destructive font-bold">ADMITTED</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Title IX Failures</span><span className="text-destructive font-bold">2 DOCUMENTED</span></div>
              <div className="flex justify-between"><span className="text-zinc-400">Current Status</span><span className="text-white font-bold">SHU PRESIDENT</span></div>
            </div>
          </div>
        </div>
      </section>

      <MemoryGate registryId="person-reilly" />
    </div>
  );
}
