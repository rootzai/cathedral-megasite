import Layout from "@/components/ChurchBKLayout";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Shield, Gavel, Scale, AlertTriangle, Briefcase, TrendingDown, Users, FileText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TheCorporateVeil() {
  return (
    <>
      <SectionHeader 
        title="The Corporate Veil: Bankruptcy as Strategy" 
        subtitle="How the 'Corporation Sole' legal structure allows Archbishops to shield billions in assets while claiming poverty in federal court."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="bg-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Shield className="h-5 w-5 text-primary" />
              The "Two-Hat" Strategy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Archbishops claim absolute ownership under Canon Law ("Sole Sovereign") to control assets, while feigning powerlessness under Civil Law ("Mere Administrator") to avoid liability.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Gavel className="h-5 w-5 text-primary" />
              The Alvarez & Marsal Playbook
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A standardized restructuring paradigm led by firms like Alvarez & Marsal to ring-fence "mission-critical" assets and define strict liquidity thresholds.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Briefcase className="h-5 w-5 text-primary" />
              The "Liquidity Trap"
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Using professional fee "burn rates" to deplete unrestricted cash, forcing survivors to settle before the diocese "runs out of money" and dismisses the case.
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="strategy" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="strategy">The A&M Strategy</TabsTrigger>
          <TabsTrigger value="liquidity">The Liquidity Trap</TabsTrigger>
          <TabsTrigger value="entanglement">Financial Entanglement</TabsTrigger>
        </TabsList>

        <TabsContent value="strategy" className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-foreground">The Financial Architects: Alvarez & Marsal</h3>
              <p className="text-muted-foreground leading-relaxed">
                The current wave of diocesan bankruptcies is not a chaotic collapse, but a highly engineered restructuring process led by top-tier firms like Alvarez & Marsal (A&M). Their methodology focuses on defining a strict boundary between the "bankruptcy estate" and "mission-critical" assets.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="mt-1 bg-primary/10 p-1 rounded-full h-fit">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">The Core Leadership</h4>
                    <p className="text-sm text-muted-foreground">
                      Managing Directors like Charles Moore, Matthew Frank, and Paul Rundell serve as Restructuring Advisors and CROs across multiple cases (Rockville Centre, Buffalo, Oakland, New Orleans), applying a standardized playbook.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 bg-primary/10 p-1 rounded-full h-fit">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">First Day Declarations</h4>
                    <p className="text-sm text-muted-foreground">
                      These filings serve as the definitive map of the debtor's financial world, often carving out high-value real estate (Chanceries, Cathedrals) as "separate trusts" unavailable to creditors.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <figure className="overflow-hidden rounded-lg border border-border/50 shadow-sm">
                <img 
                  src="/images/bankruptcy-article.png" 
                  alt="Diocesan Bankruptcies Article Headline" 
                  className="w-full h-auto object-cover"
                />
                <figcaption className="bg-muted/50 p-3 text-xs text-center text-muted-foreground border-t border-border/50">
                  Figure 3.1: Media coverage of the $4.4 billion Chapter 11 crisis facing US Dioceses.
                </figcaption>
              </figure>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="liquidity" className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-foreground">The "Liquidity Clock" Weapon</h3>
              <p className="text-muted-foreground leading-relaxed">
                A&M experts establish a strict "liquidity threshold" (typically $3.0 million) for "mission-critical" operations. This threshold is weaponized against survivor committees.
              </p>
              <div className="bg-muted/30 p-6 rounded-lg border border-border/50">
                <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                  <TrendingDown className="h-4 w-4 text-destructive" />
                  The Burn Rate Strategy
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  By engaging in complex litigation, the Diocese accelerates the "administrative burn" of professional fees. When cash hits the threshold, the Diocese threatens to dismiss the case, leaving survivors with nothing.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-background p-3 rounded border border-border/50">
                    <div className="text-xl font-bold text-foreground">$70M</div>
                    <div className="text-xs text-muted-foreground">Rockville Centre Fees</div>
                  </div>
                  <div className="bg-background p-3 rounded border border-border/50">
                    <div className="text-xl font-bold text-foreground">$37M</div>
                    <div className="text-xs text-muted-foreground">Oakland Fees</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-foreground">Forced Settlements</h3>
              <p className="text-muted-foreground leading-relaxed">
                In the Diocese of Oakland, A&M managed the controversial decision to "tap" into Priest Retirement (SERP) and Long Term Care (LTC) accounts to maintain liquidity, proving these "separate trusts" are often fungible when the burn rate demands it.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This creates a deadline: survivors must settle on the Diocese's terms before the "clock" runs out, or face the chaos of case dismissal and hundreds of simultaneous state-court trials.
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="entanglement" className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-foreground">Proof of "Artificial" Money Movement</h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              Plaintiffs' counsel argue that the movement of money between dioceses and parishes is not based on arms-length governance but is an "artificial" mechanism to shield assets.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-base">The Deposit & Loan Fund (DLF)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Often called the "Parish Trust," this internal bank allows the Diocese to exercise "complete control and domination" over parish excess collections. In Fresno, the Diocese owes $30.3M to its own internal DLF.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-base">The "Buffalo Tax" (Accounts 2995/2996)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Internal audits revealed the Diocese of Buffalo instructed parishes to create specific liability accounts ("SJIF CVA CONTRIBUTION") to fund the settlement, proving the "independence" of parishes is a legal fiction.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>    </>
  );
}
