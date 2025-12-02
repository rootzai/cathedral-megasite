import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Shield, Gavel, Scale, AlertTriangle } from "lucide-react";

export default function TheCorporateVeil() {
  return (
    <Layout>
      <SectionHeader 
        title="The Corporate Veil: Bankruptcy as Strategy" 
        subtitle="How the 'Corporation Sole' legal structure allows Archbishops to shield billions in assets while claiming poverty in federal court."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-8">
          <Card className="border-none shadow-none bg-transparent">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="font-serif text-2xl text-primary flex items-center">
                <Shield className="w-6 h-6 mr-3 text-accent" />
                The "Two-Hat" Legal Defense
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 prose prose-slate max-w-none text-muted-foreground">
              <p>
                US Dioceses operate under a sophisticated legal paradox known as the <strong>"Two-Hat" Strategy</strong>. When soliciting funds or exercising control, the Bishop is the absolute sovereign owner of all parish assets (under Canon Law). However, when facing liability for sex abuse claims, the Diocese argues that parishes are "separate trusts" that the Bishop cannot touch (under Civil Law).
              </p>
              <p>
                This maneuver allows Dioceses to file for <strong>Chapter 11 Bankruptcy</strong> to halt litigation, while simultaneously ring-fencing 90% of their real wealth—parish real estate, schools, and cemeteries—outside the bankruptcy estate.
              </p>
            </CardContent>
          </Card>

          <div className="border border-border rounded-sm overflow-hidden">
            <Table>
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead className="font-bold text-primary">Legal Domain</TableHead>
                  <TableHead className="font-bold text-primary">Bishop's Claimed Power</TableHead>
                  <TableHead className="font-bold text-primary">Asset Status</TableHead>
                  <TableHead className="font-bold text-primary">Strategic Outcome</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Canon Law (Internal)</TableCell>
                  <TableCell>Absolute Sovereign</TableCell>
                  <TableCell>Unified "Patrimony"</TableCell>
                  <TableCell>Total Control of Funds</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Civil Law (Liability)</TableCell>
                  <TableCell>"Mere Administrator"</TableCell>
                  <TableCell>Separate Trusts</TableCell>
                  <TableCell>Assets Shielded from Victims</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Bankruptcy Court</TableCell>
                  <TableCell>Debtor-in-Possession</TableCell>
                  <TableCell>Excluded from Estate</TableCell>
                  <TableCell>Cents on the Dollar Settlements</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          <div className="bg-destructive/10 p-6 rounded-sm border border-destructive/20">
            <h4 className="font-serif font-bold text-lg mb-4 flex items-center text-destructive">
              <AlertTriangle className="w-5 h-5 mr-2" />
              The "Corporation Sole" Loophole
            </h4>
            <p className="text-sm text-muted-foreground">
              In many states, the Bishop is incorporated as a <strong>"Corporation Sole"</strong>—a legal entity consisting of a single person. This archaic structure, originally designed for monarchs, allows the Bishop to hold title to billions in property personally, without a board of directors or shareholder oversight. Yet, in bankruptcy, they argue this entity is "insolvent" by excluding the very assets they hold title to.
            </p>
          </div>

          <div className="mt-8 border rounded-lg overflow-hidden shadow-sm bg-white">
            <img 
              src="/images/bankruptcy-article.png" 
              alt="Diocesan Bankruptcies Article Headline" 
              className="w-full h-auto object-contain"
            />
            <div className="p-3 bg-muted/30 text-xs text-center text-muted-foreground italic border-t">
              Figure 3.1: Media coverage highlighting the $4.4 billion crisis and the strategic nature of Chapter 11 filings.
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card border border-border p-6 rounded-sm">
            <h4 className="font-serif font-bold text-lg mb-4 flex items-center text-primary">
              <Gavel className="w-5 h-5 mr-2" />
              Strategic Bankruptcy Filings
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Since 2004, over 30 US Dioceses have filed for Chapter 11. This is not due to lack of funds, but a strategic choice to cap liability.
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-border pb-1">
                <span>Portland (2004)</span>
                <span className="font-mono text-muted-foreground">First "Test Case"</span>
              </li>
              <li className="flex justify-between border-b border-border pb-1">
                <span>San Diego (2007)</span>
                <span className="font-mono text-muted-foreground">Failed Shield Attempt</span>
              </li>
              <li className="flex justify-between border-b border-border pb-1">
                <span>Santa Fe (2018)</span>
                <span className="font-mono text-muted-foreground">"Empty Pockets" Plea</span>
              </li>
              <li className="flex justify-between border-b border-border pb-1">
                <span>Rockville Centre (2020)</span>
                <span className="font-mono text-muted-foreground">Aggressive Asset Hiding</span>
              </li>
            </ul>
          </div>

          <div className="bg-muted/20 p-6 rounded-sm border border-border">
            <h4 className="font-serif font-bold text-lg mb-4 flex items-center">
              <Scale className="w-5 h-5 mr-2 text-accent" />
              The "Fraudulent Transfer" Risk
            </h4>
            <p className="text-sm text-muted-foreground">
              Courts are increasingly scrutinizing pre-bankruptcy asset transfers. In <strong>San Diego</strong> and <strong>Santa Fe</strong>, judges found evidence of "fraudulent conveyance"—moving assets to new trusts specifically to hide them from abuse victims. This remains the single biggest legal threat to the Church's sovereign wealth.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
