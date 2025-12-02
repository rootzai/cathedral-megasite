import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Building, DollarSign, FileText, TrendingUp } from "lucide-react";

export default function DiocesanFinance() {
  return (
    <Layout>
      <SectionHeader 
        title="US Diocesan Financial Intelligence" 
        subtitle="A forensic analysis of the wealth, real estate holdings, and liquidity of major US Archdioceses."
      />

      <Tabs defaultValue="wealth-estimates" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8 bg-muted/50 p-1 rounded-sm">
          <TabsTrigger value="wealth-estimates" className="font-serif">Wealth Estimates</TabsTrigger>
          <TabsTrigger value="real-estate" className="font-serif">Real Estate Portfolios</TabsTrigger>
          <TabsTrigger value="liquidity" className="font-serif">Liquidity & Cash</TabsTrigger>
          <TabsTrigger value="bankruptcy" className="font-serif">Bankruptcy Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="wealth-estimates">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-none bg-transparent">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="font-serif text-2xl text-primary">The "Billionaire" Dioceses</CardTitle>
              </CardHeader>
              <CardContent className="px-0 prose prose-slate max-w-none text-muted-foreground">
                <p>
                  While financial transparency varies wildly, forensic analysis of available data (audits, bankruptcy filings, and real estate records) reveals a tier of "Super-Dioceses" with assets rivaling Fortune 500 corporations.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-bold text-foreground">Archdiocese of New York</span>
                    <span className="font-mono text-primary font-bold">$10.0B+ (EV)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-bold text-foreground">Archdiocese of Chicago</span>
                    <span className="font-mono text-primary font-bold">$7.0B+ (EV)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-bold text-foreground">Archdiocese of Boston</span>
                    <span className="font-mono text-primary font-bold">$5.0B+ (EV)</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-bold text-foreground">Archdiocese of Newark</span>
                    <span className="font-mono text-primary font-bold">$4.0B+ (EV)</span>
                  </div>
                </div>
                <p className="text-xs mt-4 italic">
                  *Estimates include real estate market value, investment portfolios, and insurance trusts. Official "book value" is often significantly lower due to historical cost accounting.
                </p>
              </CardContent>
            </Card>
            <div className="bg-muted/20 p-6 rounded-sm border border-border">
              <h4 className="font-serif font-bold text-lg mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-accent" />
                Wealth Concentration
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                The top 10 US Archdioceses control approximately <strong>35%</strong> of the total US Church wealth, creating a "financial primate" system where coastal urban centers subsidize rural mission dioceses and national initiatives.
              </p>
              <div className="h-48 bg-background border border-border rounded-sm flex items-center justify-center text-muted-foreground text-xs">
                [Interactive Wealth Map Placeholder]
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="real-estate">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="font-serif font-bold text-xl mb-4 text-primary">Manhattan & The "Holy Land"</h3>
              <p className="text-muted-foreground mb-6">
                The Archdiocese of New York is arguably the largest private landowner in Manhattan, second only to Columbia University and Trinity Church (Episcopal). Its portfolio includes prime 5th Avenue frontage, air rights, and historic landmarks.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-card border border-border">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-bold uppercase text-muted-foreground">St. Patrick's Cathedral Block</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-serif font-bold text-primary">~$3.0B</p>
                    <p className="text-xs text-muted-foreground">Estimated land & air rights value</p>
                  </CardContent>
                </Card>
                <Card className="bg-card border border-border">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-bold uppercase text-muted-foreground">Recent Divestments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-serif font-bold text-destructive">-$100M</p>
                    <p className="text-xs text-muted-foreground">Sale of HQ to residential developers (2024)</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="bg-muted/20 p-6 rounded-sm border border-border">
              <h4 className="font-serif font-bold text-lg mb-4 flex items-center">
                <Building className="w-5 h-5 mr-2 text-accent" />
                Portfolio Strategy
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <strong>Lease vs. Sell:</strong> Shift towards 99-year ground leases to retain long-term ownership while generating cash flow.
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <strong>Consolidation:</strong> Aggressive merging of parishes to liquidate underutilized properties ("Renew My Church" in Chicago).
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="liquidity">
          <div className="space-y-6">
            <h3 className="font-serif font-bold text-xl text-primary">Liquid Assets & Investment Trusts</h3>
            <p className="text-muted-foreground max-w-3xl">
              Beyond real estate, Dioceses manage massive investment pools. The <strong>Archdiocese of Chicago</strong>, for example, reported over <strong>$1.2 Billion</strong> in financial assets available for general expenditure in its 2024 report.
            </p>
            <div className="border border-border rounded-sm overflow-hidden">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead className="font-bold text-primary">Asset Class</TableHead>
                    <TableHead className="font-bold text-primary">Typical Allocation</TableHead>
                    <TableHead className="font-bold text-primary">Purpose</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Diocesan Deposit & Loan Fund</TableCell>
                    <TableCell>40-50%</TableCell>
                    <TableCell>Internal "Bank" for parishes to deposit savings and borrow for construction.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Pension & Benefit Trusts</TableCell>
                    <TableCell>30-40%</TableCell>
                    <TableCell>Restricted funds for clergy and lay employee retirement (often underfunded).</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Endowments & Foundations</TableCell>
                    <TableCell>10-20%</TableCell>
                    <TableCell>Long-term restricted capital for education and seminaries.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="bankruptcy">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif font-bold text-xl mb-4 text-primary">The Chapter 11 Shield</h3>
              <p className="text-muted-foreground mb-4">
                Since 2004, over 30 US Dioceses (including Rockville Centre, San Francisco, and New Orleans) have filed for Chapter 11 bankruptcy. This legal maneuver halts sexual abuse lawsuits and forces settlements to be negotiated from a limited pool of "available" assets.
              </p>
              <div className="bg-destructive/10 p-4 rounded-sm border border-destructive/20">
                <p className="text-sm font-bold text-destructive flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Strategic Insolvency?
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Critics argue dioceses use bankruptcy to protect core assets by classifying them as "restricted" or belonging to separate parish corporations, shielding them from abuse survivors.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-sm uppercase text-muted-foreground">Notable Filings & Settlements</h4>
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span>Los Angeles (Settlement)</span>
                <span className="font-mono font-bold">$880M</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span>San Diego (Bankruptcy)</span>
                <span className="font-mono font-bold">Pending</span>
              </div>
              <div className="flex justify-between items-center border-b border-border pb-2">
                <span>Rockville Centre (Bankruptcy)</span>
                <span className="font-mono font-bold">$320M Offer</span>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Layout>
  );
}
