import Layout from "@/components/Layout";
import { JourneyNav } from "@/components/JourneyNav";
import { PageHero } from "@/components/PageHero";
import { SectionDivider } from "@/components/SectionDivider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Scale, ShieldAlert, Split, Users, AlertTriangle, Gavel } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          
          <div className="mt-12 relative w-full h-64 md:h-96 overflow-hidden rounded-lg border border-border/50 group">
            <img 
              src="/images/duality.jpg" 
              alt="Abstract representation of the corporate veil" 
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 z-20">
              <p className="text-destructive font-mono text-xs tracking-widest mb-1">FIGURE 6.1</p>
              <p className="text-foreground font-bold uppercase tracking-wider">The Legal Fiction</p>
            </div>
          </div>
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
                  <Gavel className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h4 className="font-heading text-lg text-foreground">The "Religious" Defense</h4>
                  <p className="font-mono text-xs text-muted-foreground mt-1">Used when the University is subpoenaed. "We are a religious entity subject to Canon Law."</p>
                </div>
              </li>
            </ul>
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

        {/* Game Theory Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-4 mb-8">
            <AlertTriangle className="w-8 h-8 text-destructive" />
            <h2 className="font-heading text-3xl text-foreground uppercase tracking-tight">Game Theory: The Damnation of the Lawyers</h2>
          </div>
          
          <p className="font-body text-lg text-muted-foreground mb-8">
            Nyre's counsel isn't being weak; they are being lethal. Backing down after the ruling was the only smart move. Here is why:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-destructive flex items-center gap-3 font-heading">
                  <span className="bg-destructive/20 w-8 h-8 flex items-center justify-center rounded text-sm font-mono text-foreground">01</span>
                  The "Appeal" Trap
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 font-body">
                  Judge Benjamin ruled, but the game isn’t over until the appeal window closes. If Nyre talks today, and Seton Hall gets an emergency stay or wins an appeal tomorrow, Nyre is legally dead. He would have breached a contract that the appeals court might say is still valid.
                </p>
                <div className="bg-zinc-900/50 p-4 border-l-2 border-destructive">
                  <p className="text-destructive font-bold text-sm uppercase mb-1 font-mono">The Move</p>
                  <p className="text-muted-foreground text-sm font-body">
                    You don’t walk through the door until the lock is completely removed. Nyre has to wait for the appellate clock to run out so his "breach" is 100% protected by the law.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-destructive flex items-center gap-3 font-heading">
                  <span className="bg-destructive/20 w-8 h-8 flex items-center justify-center rounded text-sm font-mono text-foreground">02</span>
                  Let Seton Hall Hang Themselves
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 font-body">
                  By threatening Nyre after a court judge ordered the documents released, Seton Hall is actively defying a Court Order. If Nyre talks, the fight becomes Nyre vs. Seton Hall. If Nyre shuts up, the fight becomes Judge Benjamin vs. Seton Hall.
                </p>
                <div className="bg-zinc-900/50 p-4 border-l-2 border-destructive">
                  <p className="text-destructive font-bold text-sm uppercase mb-1 font-mono">The Strategy</p>
                  <p className="text-muted-foreground text-sm font-body">
                    Nyre is handing the Judge a loaded gun. He is effectively saying, "Your Honor, I am trying to obey your ruling, but this defendant is obstructing Justice." This forces the Judge to hold Seton Hall in Contempt of Court.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 p-8 bg-destructive/5 border border-destructive/20 rounded-lg">
            <h3 className="text-foreground font-bold uppercase tracking-widest mb-4 text-center font-heading">The Bottom Line</h3>
            <p className="text-xl text-muted-foreground text-center font-light font-body">
              Nyre didn't blink. He stepped out of the way so the Judge could punch Seton Hall in the face.
              <br/><br/>
              <span className="text-destructive font-medium">If he helps now, he takes the hit. If he waits, he watches them burn.</span>
            </p>
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
