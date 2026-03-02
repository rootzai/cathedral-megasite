import Layout from "@/components/ChurchBKLayout";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Crown, Network, Building2, Users, MapPin, TrendingUp } from "lucide-react";
import SmartGlossary from "@/components/SmartGlossary";

export default function CardinalateAndMcCarrick() {
  return (
    <>
      <SectionHeader 
        title="The Cardinalate & The McCarrick Mechanism" 
        subtitle="An analysis of the 'Sovereign Sees' power structure and the fundraising dynasty that bought influence in Rome."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-8">
          <Card className="border-none shadow-none bg-transparent">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="font-serif text-2xl text-primary flex items-center">
                <Crown className="w-6 h-6 mr-3 text-accent" />
                The "Big Six" Sovereign Sees
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 prose prose-slate max-w-none text-muted-foreground">
              <p>
                In the US Church, power is not distributed equally. Six "Sovereign Sees"—<strong>New York, Chicago, Boston, Newark, Los Angeles, and San Francisco</strong>—operate as independent financial city-states. The <SmartGlossary term="Cardinalate">Cardinals</SmartGlossary> (or Archbishops) of these archdioceses control the "Top 50" donor network, giving them disproportionate influence over Vatican policy compared to the other 190+ US dioceses.
              </p>
              <p>
                These leaders do not just lead flocks; they manage <strong>multi-billion dollar enterprise values</strong>. Their power is derived from their ability to aggregate high-net-worth capital and channel it directly to the <SmartGlossary term="Holy See" />, bypassing standard bureaucratic controls.
              </p>
            </CardContent>
          </Card>

          <div className="border border-border rounded-sm overflow-hidden">
            <Table>
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead className="font-bold text-primary">Sovereign See</TableHead>
                  <TableHead className="font-bold text-primary">Est. Enterprise Value</TableHead>
                  <TableHead className="font-bold text-primary">Key Strategic Asset</TableHead>
                  <TableHead className="font-bold text-primary">Influence Sphere</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Archdiocese of New York</TableCell>
                  <TableCell>$10B+</TableCell>
                  <TableCell>Manhattan Real Estate</TableCell>
                  <TableCell>Wall Street / UN</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Archdiocese of Los Angeles</TableCell>
                  <TableCell>$8B+</TableCell>
                  <TableCell>Oil Rights / Urban Land</TableCell>
                  <TableCell>Hollywood / Media</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Archdiocese of Chicago</TableCell>
                  <TableCell>$6B+</TableCell>
                  <TableCell>Investment Portfolio</TableCell>
                  <TableCell>US Conference of Bishops</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Archdiocese of San Francisco</TableCell>
                  <TableCell>$5.9B+</TableCell>
                  <TableCell>Silicon Valley Real Estate</TableCell>
                  <TableCell>Tech Philanthropy</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Archdiocese of Boston</TableCell>
                  <TableCell>$4B+</TableCell>
                  <TableCell>Educational/Medical</TableCell>
                  <TableCell>Intellectual/Academic</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Archdiocese of Newark</TableCell>
                  <TableCell>$4.0B+</TableCell>
                  <TableCell>Logistics/Transport Hubs</TableCell>
                  <TableCell>Strategic "Shadow" Capital</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="bg-accent/10 p-6 rounded-sm border border-accent/20">
            <h4 className="font-serif font-bold text-lg mb-4 flex items-center text-primary">
              <Network className="w-5 h-5 mr-2" />
              The McCarrick Mechanism: A Fundraising Dynasty
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Theodore McCarrick, the disgraced former Cardinal, built a fundraising machine that generated over <strong>$1 Billion annually</strong> for Church entities. This "Mechanism" relied on a dual-pipeline model:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              <li><strong>The Public Pipeline:</strong> Securing massive government grants for Catholic Charities (approx. 65% of their budget), effectively subsidizing Church operations with taxpayer money.</li>
              <li><strong>The Private Pipeline:</strong> The <SmartGlossary term="Papal Foundation" />, a club for wealthy donors who pledged $1M+ for direct access to the Pope. McCarrick used these funds as a personal "slush fund" to write checks to Vatican officials, buying silence and protection.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card border border-border p-6 rounded-sm">
            <h4 className="font-serif font-bold text-lg mb-4 flex items-center text-primary">
              <Users className="w-5 h-5 mr-2" />
              The "Top 50" Access
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Only the Cardinals of the Sovereign Sees have direct, personal access to the "Top 50" Catholic donors in the US—billionaires and titans of industry who fund the Church's global operations.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm border-b border-border pb-2">
                <span>Papal Foundation Members</span>
                <span className="font-bold">~120 Families</span>
              </div>
              <div className="flex items-center justify-between text-sm border-b border-border pb-2">
                <span>Entry Price</span>
                <span className="font-bold">$1,000,000</span>
              </div>
              <div className="flex items-center justify-between text-sm border-b border-border pb-2">
                <span>Total Endowment</span>
                <span className="font-bold">$215M+</span>
              </div>
            </div>
          </div>

          <div className="bg-muted/20 p-6 rounded-sm border border-border">
            <h4 className="font-serif font-bold text-lg mb-4 flex items-center">
              <Building2 className="w-5 h-5 mr-2 text-accent" />
              Catholic Charities USA
            </h4>
            <div className="mb-4">
              <div className="text-3xl font-bold text-primary">$4.4 Billion</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Annual Revenue</div>
            </div>
            <p className="text-sm text-muted-foreground">
              The largest social safety net in the US outside the federal government. Crucially, <strong>65% of this revenue comes from government sources</strong>, a funding stream mastered and expanded by McCarrick to build political leverage.
            </p>
          </div>

          <div className="bg-card border border-border p-6 rounded-sm">
            <h4 className="font-serif font-bold text-lg mb-4 flex items-center text-primary">
              <MapPin className="w-5 h-5 mr-2" />
              West Coast Power Shift
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Historically, power resided in the East Coast (NY/Boston). However, the massive real estate valuations in <strong>Los Angeles and San Francisco</strong> have shifted the financial center of gravity.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span>LA/SF Real Estate &gt; NY/Boston Endowments</span>
            </div>
          </div>
        </div>
      </div>    </>
  );
}
