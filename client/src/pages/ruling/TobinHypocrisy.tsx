import Layout from "@/components/Layout";
import { JourneyNav } from "@/components/JourneyNav";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Quote, AlertCircle } from "lucide-react";

export default function TobinHypocrisy() {
  return (
    <Layout>
      <div className="space-y-12 animate-in fade-in duration-1000">
        <div className="border-l-2 border-primary pl-6 py-2">
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-2">Section 03</p>
          <h1 className="font-heading text-6xl md:text-7xl text-foreground leading-none mb-4">
            Tobin's Hypocrisy
          </h1>
          <p className="font-heading text-2xl text-muted-foreground italic">
            The Cardinal who ordered the investigation refused to appear.
          </p>
        </div>

        <Separator className="opacity-20" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-8">
            <p className="font-body text-xl leading-relaxed text-foreground/90">
              The Gibbons Report, delivered contemporaneously with the Latham Report in August 2019, contains a revelation that strikes at the very heart of the Archdiocese's credibility. In the report's "priest by priest overview" section, it is explicitly revealed that Cardinal Joseph Tobin himself did not participate with the Latham attorneys.
            </p>
            
            <p className="font-body text-lg leading-relaxed text-foreground/80">
              This fact is devastating not just for its irony, but for its blatant hypocrisy. It was Cardinal Tobin who commissioned the investigation. It was Cardinal Tobin who mandated cooperation. And it was Cardinal Tobin who threatened "automatic and summary removal" for any cleric who refused to appear before the investigators.
            </p>

            <div className="my-12 relative border-y border-primary/30 py-12 bg-muted/5">
              <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/20 rotate-180" />
              <blockquote className="font-heading text-3xl text-foreground text-center px-12 leading-tight">
                "Failure to appear before the investigators will result in automatic and summary removal from ministry."
              </blockquote>
              <p className="text-center font-mono text-xs text-primary mt-8 uppercase tracking-widest">— Cardinal Joseph Tobin's Mandate</p>
            </div>

            <p className="font-body text-lg leading-relaxed text-foreground/80">
              Yet, when the investigators called, Tobin did not answer. The Gibbons Report documents his failure to appear—a violation of the very edict he issued to his subordinates.
            </p>
          </div>

          <div className="lg:col-span-4 space-y-8 sticky top-24">
            <Card className="bg-card border border-border rounded-none">
              <CardContent className="p-0">
                <div className="bg-muted/20 p-4 border-b border-border">
                  <h3 className="font-mono text-xs text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                    <AlertCircle className="w-3 h-3" /> Analysis
                  </h3>
                </div>
                
                <div className="p-6 space-y-8">
                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-3">The Double Standard</h3>
                    <p className="font-body text-sm leading-relaxed text-muted-foreground">
                      Dozens of lower-ranking clergy were threatened with career destruction for non-compliance. The "Dirty Dozen" faced removals, demotions, and forced retirements. But for the Cardinal? Silence. No removal. No penalty. Only a continued reign of power while the rules apply to everyone else.
                    </p>
                  </div>

                  <Separator className="opacity-20" />

                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-3">The Cover-Up Continues</h3>
                    <p className="font-body text-sm leading-relaxed text-muted-foreground">
                      Tobin's refusal to appear suggests more than just arrogance; it suggests fear. What questions did the investigators have for the Cardinal? What did he know about the "Dirty Dozen" before the report was even commissioned? His silence speaks volumes.
                    </p>
                  </div>

                  <Separator className="opacity-20" />

                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-3">Automatic Firing?</h3>
                    <p className="font-body text-sm leading-relaxed text-muted-foreground">
                      If the penalty for non-appearance is "automatic firing," then by his own decree, Cardinal Tobin should be removed from office immediately. The law of the Church cannot be a weapon used only against the weak while the powerful remain immune.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <JourneyNav />
      </div>
    </Layout>
  );
}
