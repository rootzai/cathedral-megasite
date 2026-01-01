import ClergyMap from "@/components/ClergyMap";
import Layout from "@/components/Layout";
import { JourneyNav } from "@/components/JourneyNav";
import Timeline from "@/components/Timeline";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, ArrowRight, FileText } from "lucide-react";

export default function Analysis() {
  return (
    <Layout>
      <div className="space-y-12 animate-in fade-in duration-1000">
        <div className="border-l-2 border-primary pl-6 py-2">
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-2">Section 09</p>
          <h1 className="font-heading text-6xl md:text-7xl text-foreground leading-none mb-4">
            Analysis & Impact
          </h1>
          <p className="font-heading text-2xl text-muted-foreground italic">
            Connecting the dots between the silence and the scandal.
          </p>
        </div>

        <Separator className="opacity-20" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="prose prose-invert max-w-none">
              <div className="relative w-full aspect-[21/9] overflow-hidden rounded-lg border border-border/50 mb-8 group">
                <img 
                  src="/images/analysis-network.png" 
                  alt="Network graph of influence" 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
              </div>

              <h2 className="font-heading text-3xl text-foreground mb-6">Systemic Failure</h2>
              <p className="font-body text-lg text-foreground/80 leading-relaxed mb-6">
                The Benjamin Ruling is not just a legal victory; it is an indictment of a decades-long strategy of containment. The "Dirty Dozen" were not rogue actors. They were the operating system of the Archdiocese of Newark and Seton Hall University.
              </p>
              <p className="font-body text-lg text-foreground/80 leading-relaxed mb-6">
                By tracking their movements—removals, demotions, and quiet transfers—we can see the institution's true priorities: preservation over protection. The "soft landings" provided to men like Nydegger and Ziccardi stand in stark contrast to the "zero tolerance" rhetoric espoused publicly.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="font-heading text-2xl text-foreground border-b border-border pb-2">
                Timeline of Events
              </h3>
              <Timeline />
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-muted/5 border border-border p-6">
              <h3 className="font-heading text-xl text-foreground mb-4">Next Steps</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="font-mono text-primary font-bold">01</span>
                  <p className="font-body text-sm text-foreground/80">
                    <strong className="text-foreground block mb-1">Full Document Release</strong>
                    The court has ordered the unsealing of the Latham & Watkins report. We await the full text to confirm the specific allegations against each named individual.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-primary font-bold">02</span>
                  <p className="font-body text-sm text-foreground/80">
                    <strong className="text-foreground block mb-1">Canonical Inquiries</strong>
                    With the names public, the Vatican may be forced to open canonical investigations into the cover-up itself (Vos Estis Lux Mundi).
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-primary font-bold">03</span>
                  <p className="font-body text-sm text-foreground/80">
                    <strong className="text-foreground block mb-1">Institutional Reform</strong>
                    Seton Hall University faces a reckoning. The governance structures that allowed this secrecy must be dismantled and replaced with genuine lay oversight.
                  </p>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-xl text-foreground border-b border-border pb-2">
                Geographic Impact
              </h3>
              <ClergyMap />
              <p className="font-mono text-xs text-muted-foreground mt-2">
                * Locations based on 2025 parish assignment lists and public records.
              </p>
            </div>

            <Card className="bg-card border border-border rounded-none">
              <CardContent className="p-0">
                <div className="bg-muted/20 p-4 border-b border-border">
                  <h3 className="font-mono text-xs text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                    <FileText className="w-3 h-3" /> Key Documents
                  </h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="group cursor-pointer">
                    <h4 className="font-heading text-lg text-foreground group-hover:text-primary transition-colors">The Latham Report</h4>
                    <p className="font-body text-sm text-muted-foreground mt-1 leading-relaxed">The internal investigation that identified the 12 clergymen.</p>
                  </div>
                  <Separator className="opacity-20" />
                  <div className="group cursor-pointer">
                    <h4 className="font-heading text-lg text-foreground group-hover:text-primary transition-colors">The Gibbons Report</h4>
                    <p className="font-body text-sm text-muted-foreground mt-1 leading-relaxed">The independent review that exposed Tobin's non-compliance.</p>
                  </div>
                  <Separator className="opacity-20" />
                  <div className="group cursor-pointer">
                    <h4 className="font-heading text-lg text-foreground group-hover:text-primary transition-colors">Judge Benjamin's Order</h4>
                    <p className="font-body text-sm text-muted-foreground mt-1 leading-relaxed">The Nov 2025 ruling mandating the release of names.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-destructive/10 border border-destructive/30 p-6 rounded-none">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4 text-destructive" />
                <h3 className="font-mono text-xs text-destructive uppercase tracking-widest">Public Safety Warning</h3>
              </div>
              <p className="font-body text-sm text-foreground/80 leading-relaxed">
                Many of the identified clergy are still active in parishes in New Jersey. Parishioners in <strong>Westfield</strong>, <strong>Short Hills</strong>, and <strong>Elizabeth</strong> should be aware of the history of their pastors.
              </p>
            </div>
          </div>
        </div>
        <JourneyNav />
      </div>
    </Layout>
  );
}
