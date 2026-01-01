import Layout from "@/components/Layout";
import { JourneyNav } from "@/components/JourneyNav";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle, Gavel, Scale, ShieldAlert, FileWarning, BookOpen } from "lucide-react";

export default function SanctionPlea() {
  return (
    <Layout>
      <div className="space-y-16 animate-in fade-in duration-1000">
        
        {/* Hero Section */}
        <section className="relative border-b border-border pb-16">
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
            <Gavel className="w-96 h-96 text-destructive animate-pulse" />
          </div>
          
          <div className="space-y-6 z-10 relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/30 text-destructive text-xs font-mono uppercase tracking-widest">
              <AlertTriangle className="w-3 h-3" />
              Legal Motion
            </div>
            <h1 className="font-heading text-5xl md:text-7xl text-foreground leading-none">
              A Plea to <br/>
              <span className="text-destructive">Judge Benjamin</span>
            </h1>
            <p className="font-body text-2xl text-muted-foreground leading-relaxed max-w-3xl">
              Sanction Tom Scrivo. The discovery abuse must be punished.
            </p>
          </div>
        </section>

        {/* The Double Crime Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <h2 className="font-heading text-3xl text-foreground flex items-center gap-2">
              <Scale className="w-6 h-6 text-destructive" />
              The Double Crime
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card border-border hover:border-destructive/50 transition-all duration-500">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2 font-mono text-destructive border-destructive/50">CRIME ONE</Badge>
                <CardTitle className="font-heading text-2xl text-white">Hiding the Latham Report</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-body text-muted-foreground">
                  For six years, Seton Hall concealed the Latham Report as if it never existed. When survivors sought discovery, Scrivo's team:
                </p>
                <ul className="list-disc list-inside space-y-2 font-mono text-sm text-gray-400">
                  <li>Failed to disclose the report's existence</li>
                  <li>Claimed attorney-client privilege when finally forced to acknowledge it</li>
                  <li>Fought tooth and nail to prevent its production</li>
                </ul>
                <p className="font-body text-white border-l-2 border-destructive pl-4 italic">
                  "This was not negligence. This was planned, deliberate concealment."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-destructive/50 transition-all duration-500">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2 font-mono text-destructive border-destructive/50">CRIME TWO</Badge>
                <CardTitle className="font-heading text-2xl text-white">Suing Joe Nyre for "Leaking" It</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-body text-muted-foreground">
                  Simultaneously, Mr. Scrivo's firm sued whistleblower Joe Nyre for allegedly disclosing information from that same Latham Report.
                </p>
                <div className="bg-destructive/10 p-4 rounded border border-destructive/20">
                  <p className="font-body text-white">
                    They claimed the report was privileged and couldn't be produced, while simultaneously suing someone for disclosing it.
                  </p>
                </div>
                <p className="font-body text-muted-foreground">
                  By suing Nyre, Scrivo admitted:
                </p>
                <ul className="list-disc list-inside space-y-2 font-mono text-sm text-gray-400">
                  <li>The report existed (contradicting concealment)</li>
                  <li>The information was disclosed (contradicting privilege)</li>
                  <li>They knew what was in it (contradicting ignorance)</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-secondary/20 border border-destructive/30 p-8 rounded-lg text-center max-w-4xl mx-auto">
            <p className="font-heading text-2xl text-white leading-relaxed">
              "You cannot have it both ways. You cannot claim something is privileged AND sue someone for disclosing it. That's not legal strategy—that's fraud on the court."
            </p>
          </div>
        </section>

        {/* Legal Precedent Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <h2 className="font-heading text-3xl text-foreground flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-destructive" />
              New Jersey Precedent for Sanctions
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4 p-6 border border-border bg-black/50 hover:bg-secondary/10 transition-colors">
              <div className="font-mono text-xs text-destructive uppercase tracking-widest">R. 1:4-8 and R. 4:23</div>
              <h3 className="font-heading text-xl text-white">Monetary Sanctions</h3>
              <p className="font-body text-sm text-muted-foreground">
                For willful failure to comply with discovery obligations.
              </p>
              <p className="font-mono text-xs text-gray-500 italic">Abtrax Pharms., Inc. v. Elkins-Sinn, Inc. (1995)</p>
            </div>

            <div className="space-y-4 p-6 border border-border bg-black/50 hover:bg-secondary/10 transition-colors">
              <div className="font-mono text-xs text-destructive uppercase tracking-widest">Adverse Inference</div>
              <h3 className="font-heading text-xl text-white">Evidentiary Penalty</h3>
              <p className="font-body text-sm text-muted-foreground">
                When a party destroys or conceals evidence.
              </p>
              <p className="font-mono text-xs text-gray-500 italic">Rosenblit v. Zimmerman (2001)</p>
            </div>

            <div className="space-y-4 p-6 border border-border bg-black/50 hover:bg-secondary/10 transition-colors">
              <div className="font-mono text-xs text-destructive uppercase tracking-widest">Dismissal or Default</div>
              <h3 className="font-heading text-xl text-white">Egregious Violations</h3>
              <p className="font-body text-sm text-muted-foreground">
                For severe and intentional discovery abuse.
              </p>
              <p className="font-mono text-xs text-gray-500 italic">Abouzahr v. Matera Concrete Prods., Inc. (1997)</p>
            </div>
          </div>
        </section>

        {/* Bad Faith & The Man Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <section className="space-y-6">
            <h2 className="font-heading text-3xl text-foreground flex items-center gap-2">
              <ShieldAlert className="w-6 h-6 text-destructive" />
              Bad Faith Litigation
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              The lawsuit against Joe Nyre was not just discovery abuse—it was bad faith litigation designed to intimidate a whistleblower and chill future disclosures.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              New Jersey recognizes that abuse of process claims lie when legal proceedings are used for an improper purpose (LoBiondo v. Schwartz, 2009). Suing a whistleblower for disclosing the very documents you're hiding in discovery is textbook abuse of process.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-heading text-3xl text-foreground flex items-center gap-2">
              <FileWarning className="w-6 h-6 text-destructive" />
              The Sanction Must Fit
            </h2>
            <div className="bg-card border border-border p-6 space-y-4">
              <p className="font-body text-white">
                Tom Scrivo is not just any lawyer. He knew better.
              </p>
              <ul className="space-y-2 font-mono text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-destructive rounded-full"/> Former Chief Counsel to Gov. Chris Christie</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-destructive rounded-full"/> Chair of NJ Economic Development Authority</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-destructive rounded-full"/> Partner at prominent NJ law firm</li>
                <li className="flex items-center gap-2"><span className="w-1 h-1 bg-destructive rounded-full"/> Seton Hall Law School Graduate</li>
              </ul>
            </div>
          </section>
        </div>

        {/* The Demand Section */}
        <section className="bg-destructive/5 border border-destructive/20 p-8 md:p-12 rounded-lg space-y-8">
          <div className="text-center space-y-4">
            <h2 className="font-heading text-4xl text-white">For the Record</h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Tom Scrivo is a creep. Not because of his legal tactics—though those are reprehensible—but because he used the law as a weapon against abuse survivors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="font-heading text-2xl text-destructive mb-2">Monetary</div>
              <p className="font-mono text-sm text-gray-400">Pay survivors' attorney fees for all discovery motions related to the Latham Report.</p>
            </div>
            <div className="p-4 border-x border-destructive/20">
              <div className="font-heading text-2xl text-destructive mb-2">Professional</div>
              <p className="font-mono text-sm text-gray-400">Referral to the Office of Attorney Ethics for investigation.</p>
            </div>
            <div className="p-4">
              <div className="font-heading text-2xl text-destructive mb-2">Evidentiary</div>
              <p className="font-mono text-sm text-gray-400">Adverse inference that concealed documents contain evidence of complicity.</p>
            </div>
          </div>

          <Separator className="bg-destructive/30" />

          <div className="text-center space-y-6">
            <p className="font-heading text-2xl text-white">
              "Sanction Tom Scrivo. Make it hurt. Make it public."
            </p>
            <p className="font-body text-muted-foreground">
              Make it a warning to every lawyer who thinks they can hide evidence of abuse behind privilege claims while simultaneously weaponizing the courts against survivors.
            </p>
            <div className="inline-block border-b-2 border-destructive pb-1">
              <span className="font-heading text-3xl text-white uppercase tracking-widest">Justice Demands It</span>
            </div>
          </div>
        </section>

        <JourneyNav />
      </div>
    </Layout>
  );
}
