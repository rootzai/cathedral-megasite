import Layout from "@/components/Layout";
import { JourneyNav } from "@/components/JourneyNav";
import { PageHero } from "@/components/PageHero";
import { SectionDivider } from "@/components/SectionDivider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Scale, ShieldAlert, Split, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageModal } from "@/components/ImageModal";

export default function CorporateVeil() {
  return (
    <Layout>
      <div className="space-y-16 animate-in fade-in duration-1000">
        
        <PageHero 
          sectionNumber="06" 
          title="The Corporate" 
          titleHighlight="Veil"
        >
          <div className="space-y-6 max-w-4xl">
            <p className="font-body text-xl text-muted-foreground leading-relaxed">
              It is the ultimate legal magic trick. When the Archdiocese is sued, they claim Seton Hall is an independent university. When Seton Hall is investigated, they claim religious autonomy under the Archdiocese.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Two Politico exposés, published eight months apart, reveal a coordinated strategy to block investigations by pretending the left hand doesn't know what the right hand is doing—even when Cardinal Tobin controls both.
            </p>
          </div>
          
          <ImageModal 
            src="/images/corporate-veil-abstract.png" 
            alt="Abstract representation of the corporate veil" 
            className="mt-12 aspect-[21/9] md:aspect-[3/1]"
            caption="The Corporate Veil: A Legal Fiction"
          />
        </PageHero>

        <SectionDivider />

        {/* The Strategy Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/30 text-destructive text-xs font-mono uppercase tracking-widest">
              <Split className="w-3 h-3" />
              The Legal Fiction
            </div>
            <h2 className="font-heading text-4xl text-foreground">Schrödinger's University</h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Seton Hall exists in a state of quantum liability: it is simultaneously a "Catholic instrument" and a "secular institution," depending entirely on which definition protects it from discovery.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-card border border-border rounded shrink-0">
                  <ShieldAlert className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-foreground">The "Independent" Defense</h4>
                  <p className="font-mono text-xs text-muted-foreground mt-1">Used when the Archdiocese is sued. "We have no control over the University's internal operations."</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="p-2 bg-card border border-border rounded shrink-0">
                  <Users className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-foreground">The "Religious" Defense</h4>
                  <p className="font-mono text-xs text-muted-foreground mt-1">Used when the University is subpoenaed. "We are a religious entity subject to Canon Law."</p>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <ImageModal 
                src="/images/diocesan-bankruptcy.png" 
                alt="Diocesan Bankruptcies Article" 
                className="aspect-video w-full shadow-xl border-destructive/20"
                caption="The Bankruptcy Strategy: Hiding Assets, Blocking Justice"
              />
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-destructive/5 blur-3xl rounded-full" />
            <Card className="bg-card border-border relative z-10">
              <CardHeader>
                <CardTitle className="font-heading text-xl flex items-center gap-2">
                  <Scale className="w-5 h-5 text-destructive" />
                  The "Two-Hat" Trick
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-zinc-900/50 border border-border rounded-lg">
                  <div className="text-center w-1/3">
                    <div className="w-12 h-12 mx-auto bg-zinc-800 rounded-full flex items-center justify-center mb-2">
                      <span className="font-heading text-xl">RCAN</span>
                    </div>
                    <p className="font-mono text-[10px] uppercase text-muted-foreground">Archdiocese</p>
                  </div>
                  <div className="flex-1 px-4 text-center">
                    <div className="h-px bg-destructive/50 w-full relative">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-card px-2 font-mono text-[10px] text-destructive uppercase">
                        Same People
                      </div>
                    </div>
                  </div>
                  <div className="text-center w-1/3">
                    <div className="w-12 h-12 mx-auto bg-zinc-800 rounded-full flex items-center justify-center mb-2">
                      <span className="font-heading text-xl">SHU</span>
                    </div>
                    <p className="font-mono text-[10px] uppercase text-muted-foreground">University</p>
                  </div>
                </div>
                <p className="font-body text-sm text-muted-foreground italic text-center">
                  "Cardinal Tobin orders the investigation as Archbishop, then blocks the witness as Chair of the Board of Trustees."
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <SectionDivider />

        {/* The Evidence Section */}
        <section className="space-y-8">
          <h2 className="font-heading text-3xl text-foreground text-center">The Pattern of Obstruction</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Article 1 */}
            <Card className="bg-card border-border hover:border-destructive/50 transition-colors group">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="outline" className="font-mono text-xs">MAY 23, 2025</Badge>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-destructive transition-colors" />
                </div>
                <CardTitle className="font-heading text-2xl leading-tight group-hover:text-destructive transition-colors">
                  Seton Hall blocks key witness in clergy abuse probe ordered by Cardinal
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-body text-muted-foreground">
                  The first sign of the strategy. While publicly calling for transparency, the University's legal team—ultimately answerable to the Board Chair (Tobin)—moved to prevent a key witness from testifying, citing procedural separation.
                </p>
                <Separator className="bg-border/50" />
                <Button 
                  variant="link" 
                  className="p-0 h-auto font-mono text-xs text-destructive uppercase tracking-wider"
                  onClick={() => window.open("https://www.politico.com/news/2025/05/23/seton-hall-blocks-key-witness-in-clergy-abuse-probe-ordered-by-cardinal-00365732", "_blank")}
                >
                  Read Full Article
                </Button>
              </CardContent>
            </Card>

            {/* Article 2 */}
            <Card className="bg-card border-border hover:border-destructive/50 transition-colors group">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="outline" className="font-mono text-xs">NOV 29, 2025</Badge>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-destructive transition-colors" />
                </div>
                <CardTitle className="font-heading text-2xl leading-tight group-hover:text-destructive transition-colors">
                  Seton Hall abuse investigation former president
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-body text-muted-foreground">
                  Eight months later, the exact same tactic. As the investigation turned toward the former president's role in the cover-up, the "corporate veil" was dropped again to shield executive communications from the probe.
                </p>
                <Separator className="bg-border/50" />
                <Button 
                  variant="link" 
                  className="p-0 h-auto font-mono text-xs text-destructive uppercase tracking-wider"
                  onClick={() => window.open("https://www.politico.com/news/2025/11/29/seton-hall-abuse-investigation-former-president-00668657", "_blank")}
                >
                  Read Full Article
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <JourneyNav />
      </div>
    </Layout>
  );
}
