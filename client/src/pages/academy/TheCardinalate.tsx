import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Crown, Users, DollarSign, Lock } from "lucide-react";

export default function TheCardinalate() {
  return (
    <Layout>
      <SectionHeader 
        title="The Cardinalate: Sovereign Wealth & Power" 
        subtitle="An analysis of the four US 'Princes of the Church' who control the donor networks, the Papal Foundation, and the true enterprise value of American Catholicism."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-8">
          <Card className="border-none shadow-none bg-transparent">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="font-serif text-2xl text-primary flex items-center">
                <Crown className="w-6 h-6 mr-3 text-accent" />
                The "Big Four" Power Structure
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 prose prose-slate max-w-none text-muted-foreground">
              <p>
                Contrary to popular belief, the wealth of the US Church is not evenly distributed among its 194 dioceses. It is concentrated in four "Sovereign Sees"—<strong>New York, Chicago, Boston, and Newark</strong> (historically)—which are traditionally led by Cardinals.
              </p>
              <p>
                These Cardinals are not merely spiritual leaders; they are the <strong>Gatekeepers of Enterprise Value</strong>. They alone possess direct access to the "Top 50" Catholic donors in the United States—a billionaire class that funds the Vatican's global operations, from the Papal Foundation to the restoration of St. Peter's.
              </p>
            </CardContent>
          </Card>

          <div className="border border-border rounded-sm overflow-hidden">
            <Table>
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead className="font-bold text-primary">Sovereign See</TableHead>
                  <TableHead className="font-bold text-primary">Current/Recent Cardinal</TableHead>
                  <TableHead className="font-bold text-primary">Strategic Asset</TableHead>
                  <TableHead className="font-bold text-primary">Est. Enterprise Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Archdiocese of New York</TableCell>
                  <TableCell>Card. Timothy Dolan</TableCell>
                  <TableCell>Global Media & Wall St. Nexus</TableCell>
                  <TableCell className="font-mono font-bold">$10B+</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Archdiocese of Chicago</TableCell>
                  <TableCell>Card. Blase Cupich</TableCell>
                  <TableCell>Real Estate & Political Machine</TableCell>
                  <TableCell className="font-mono font-bold">$7B+</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Archdiocese of Newark</TableCell>
                  <TableCell>Card. Joseph Tobin</TableCell>
                  <TableCell>Intl. Logistics & "McCarrick's Bank"</TableCell>
                  <TableCell className="font-mono font-bold">$4B+</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Archdiocese of Boston</TableCell>
                  <TableCell>Card. Sean O'Malley</TableCell>
                  <TableCell>Academic & Biotech Philanthropy</TableCell>
                  <TableCell className="font-mono font-bold">$5B+</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="text-xs text-muted-foreground p-2 bg-muted/20 italic">
              *Enterprise Value includes tangible assets (real estate, cash) plus the capitalized value of exclusive donor network access and political influence.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card border border-border p-6 rounded-sm">
            <h4 className="font-serif font-bold text-lg mb-4 flex items-center text-primary">
              <Lock className="w-5 h-5 mr-2" />
              The "Top 50" Access
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Only a Cardinal can summon the "Top 50"—the ultra-high-net-worth individuals who write seven-figure checks to the Papal Foundation. This access is the true currency of the Church.
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-border pb-1">
                <span>Papal Foundation Entry</span>
                <span className="font-mono font-bold">$1M Pledge</span>
              </li>
              <li className="flex justify-between border-b border-border pb-1">
                <span>Annual "Stewardship"</span>
                <span className="font-mono font-bold">$100k/yr</span>
              </li>
              <li className="flex justify-between border-b border-border pb-1">
                <span>Vatican Access</span>
                <span className="font-mono font-bold">Priceless</span>
              </li>
            </ul>
          </div>

          <div className="bg-muted/20 p-6 rounded-sm border border-border">
            <h4 className="font-serif font-bold text-lg mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2 text-accent" />
              The Newark Anomaly
            </h4>
            <p className="text-sm text-muted-foreground">
              Newark is often overlooked, but under <strong>Theodore McCarrick</strong>, it became a financial powerhouse. It sits on critical infrastructure (ports, airport) and served as the launchpad for McCarrick's fundraising dynasty, funneling millions to Rome and cementing his status as a "Kingmaker."
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
