import Layout from "@/components/Layout";
import { JourneyNav } from "@/components/JourneyNav";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, Camera, FileText, Link as LinkIcon } from "lucide-react";

export default function SheeranMcCarrick() {
  return (
    <Layout>
      <div className="space-y-12 animate-in fade-in duration-1000">
        <div className="border-l-2 border-primary pl-6 py-2">
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-2">Section 10</p>
          <h1 className="font-heading text-6xl md:text-7xl text-foreground leading-none mb-4">
            The Sheeran-McCarrick Nexus
          </h1>
          <p className="font-heading text-2xl text-muted-foreground italic">
            A bond forged in Rome, solidified in Newark, and hidden in plain sight.
          </p>
        </div>

        <Separator className="opacity-20" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-12">
            <section>
              <h3 className="font-mono text-sm text-primary uppercase tracking-widest mb-4 border-b border-border pb-2 inline-block">The Rome Connection</h3>
              <p className="font-body text-lg leading-relaxed text-foreground/80 mb-6">
                The relationship between Msgr. Robert Sheeran and Theodore McCarrick was not merely professional; it was deeply personal and strategically aligned. Their connection traces back to the highest corridors of power in the Vatican.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/80 mb-6">
                Archival records confirm that Sheeran was a frequent companion of McCarrick during pivotal moments in Rome. In 2000, during a Regents Retreat, Sheeran was photographed receiving a medal directly from Pope John Paul II—an honor facilitated by McCarrick's influence.
              </p>
              
              <div className="bg-muted/5 border border-border p-6 my-8">
                <div className="flex items-center gap-3 mb-4 text-muted-foreground">
                  <Camera className="w-5 h-5" />
                  <span className="font-mono text-xs uppercase tracking-widest">Archival Evidence</span>
                </div>
                <div className="aspect-video bg-black/40 flex items-center justify-center border border-dashed border-muted-foreground/30 mb-4">
                  <p className="font-mono text-sm text-muted-foreground text-center px-4">
                    [PLACEHOLDER: Photo of Msgr. Sheeran receiving medal from Pope John Paul II, Rome, 2000]<br/>
                    <span className="text-xs opacity-60">Source: Monsignor William Noe Field Archives (SHU-0049x)</span>
                  </p>
                </div>
                <p className="font-body text-sm text-foreground/70 italic">
                  "Msgr. Sheeran receives medal from Pope John Paul II during a Regents Retreat, Rome, 2000."
                </p>
              </div>
            </section>

            <section>
              <h3 className="font-mono text-sm text-primary uppercase tracking-widest mb-4 border-b border-border pb-2 inline-block">The 1995 Papal Visit</h3>
              <p className="font-body text-lg leading-relaxed text-foreground/80 mb-6">
                When Pope John Paul II visited New Jersey in 1995, it was McCarrick who orchestrated the spectacle, but it was Sheeran who stood by his side. As Executive Vice Chancellor and later President of Seton Hall, Sheeran was instrumental in executing McCarrick's vision.
              </p>
              <p className="font-body text-lg leading-relaxed text-foreground/80">
                This was not just a visit; it was a consolidation of power. The "contagious enthusiasm" attributed to McCarrick in contemporary reports masked a darker reality—one where access to the Pope was a currency traded between McCarrick and his loyal lieutenants like Sheeran.
              </p>
            </section>

            <section>
              <h3 className="font-mono text-sm text-primary uppercase tracking-widest mb-4 border-b border-border pb-2 inline-block">A Separate Focus</h3>
              <p className="font-body text-lg leading-relaxed text-foreground/80 mb-6">
                The sheer volume of photographic evidence linking Sheeran and McCarrick suggests a "separate focus"—a parallel structure of influence that operated outside standard diocesan channels.
              </p>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <p className="font-body text-lg text-foreground/80">
                    <strong>The "Uncle Ted" Dynamic:</strong> Sheeran was part of the inner circle that normalized McCarrick's behavior, reframing his predatory grooming as "mentorship."
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                  <p className="font-body text-lg text-foreground/80">
                    <strong>Institutional Cover:</strong> As President of Seton Hall, Sheeran ensured the university remained a safe harbor for McCarrick's reputation, even as rumors swirled.
                  </p>
                </li>
              </ul>
            </section>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <Card className="bg-card border border-border rounded-none">
              <CardContent className="p-0">
                <div className="bg-muted/20 p-4 border-b border-border">
                  <h3 className="font-mono text-xs text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                    <LinkIcon className="w-3 h-3" /> Connected Entities
                  </h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="group">
                    <h4 className="font-heading text-lg text-foreground">Theodore McCarrick</h4>
                    <p className="font-body text-sm text-muted-foreground mt-1">Former Cardinal, disgraced and laicized.</p>
                  </div>
                  <Separator className="opacity-20" />
                  <div className="group">
                    <h4 className="font-heading text-lg text-foreground">Pope John Paul II</h4>
                    <p className="font-body text-sm text-muted-foreground mt-1">Visited NJ in 1995; met Sheeran in Rome in 2000.</p>
                  </div>
                  <Separator className="opacity-20" />
                  <div className="group">
                    <h4 className="font-heading text-lg text-foreground">Seton Hall Board of Regents</h4>
                    <p className="font-body text-sm text-muted-foreground mt-1">The body that facilitated the Rome retreats.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-destructive/10 border border-destructive/30 p-6 rounded-none">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4 text-destructive" />
                <h3 className="font-mono text-xs text-destructive uppercase tracking-widest">Investigative Note</h3>
              </div>
              <p className="font-body text-sm text-foreground/80 leading-relaxed">
                The ties between Sheeran and McCarrick are not just historical footnotes. They represent the structural integrity of the cover-up. To understand how the "Dirty Dozen" survived, one must understand the protection provided by this nexus.
              </p>
            </div>
          </div>
        </div>
        <JourneyNav />
      </div>
    </Layout>
  );
}
