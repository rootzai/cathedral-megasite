import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function GlobalGrowth() {
  const growthData = [
    { metric: "Global Catholics (millions)", val1995: "1,027", val2010: "1,196", val2023: "1,405", change15: "+17.5%", change30: "+36.8%" },
    { metric: "World Population (millions)", val1995: "5,743", val2010: "6,958", val2023: "7,915", change15: "+13.7%", change30: "+37.8%" },
    { metric: "Catholic % of World Pop.", val1995: "17.9%", val2010: "17.2%", val2023: "17.8%", change15: "+0.6 pts", change30: "-0.1 pts" },
  ];

  return (
    <Layout>
      <SectionHeader 
        title="Global Expansion Analysis" 
        subtitle="A 30-year longitudinal study of Catholic population growth relative to global demographic trends (1995–2023)."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <Card className="lg:col-span-2 border-none shadow-none bg-transparent">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="font-serif text-2xl text-primary">Population Trajectory</CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <div className="aspect-video w-full bg-sidebar rounded-sm overflow-hidden relative mb-4 border border-border">
               <img 
                src="/images/global-map-data.png" 
                alt="Global Map Data" 
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm p-4 border border-border max-w-xs">
                <p className="text-xs font-bold uppercase text-muted-foreground mb-1">Insight</p>
                <p className="text-sm font-medium">Catholic growth (+36.8%) has effectively matched world population growth (+37.8%) over the last three decades.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <div className="bg-card border border-border p-6 rounded-sm">
            <h3 className="font-serif font-bold text-lg mb-2 text-primary">Regional Dynamics</h3>
            <p className="text-sm text-muted-foreground mb-4">
              While aggregate numbers remain strong, the internal composition has shifted significantly.
            </p>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Africa</span>
                  <span className="text-emerald-600 font-bold">High Growth</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-600 w-[85%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Asia</span>
                  <span className="text-emerald-500 font-bold">Moderate Growth</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[60%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Americas</span>
                  <span className="text-amber-500 font-bold">Stable</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 w-[45%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Europe</span>
                  <span className="text-rose-500 font-bold">Decline</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-rose-500 w-[20%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="font-serif font-bold text-xl mb-6 text-primary border-b border-border pb-2">Comparative Metrics (1995–2023)</h3>
        <div className="rounded-sm border border-border overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="font-bold text-primary">Metric</TableHead>
                <TableHead className="text-right font-medium">1995 Value</TableHead>
                <TableHead className="text-right font-medium">2010 Value</TableHead>
                <TableHead className="text-right font-bold text-primary">2023 Value</TableHead>
                <TableHead className="text-right font-medium text-muted-foreground">15-Year Change</TableHead>
                <TableHead className="text-right font-bold text-accent-foreground">30-Year Change</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {growthData.map((row) => (
                <TableRow key={row.metric}>
                  <TableCell className="font-medium">{row.metric}</TableCell>
                  <TableCell className="text-right text-muted-foreground">{row.val1995}</TableCell>
                  <TableCell className="text-right text-muted-foreground">{row.val2010}</TableCell>
                  <TableCell className="text-right font-bold">{row.val2023}</TableCell>
                  <TableCell className="text-right text-sm">{row.change15}</TableCell>
                  <TableCell className="text-right font-bold text-emerald-700">{row.change30}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <p className="text-xs text-muted-foreground mt-4 italic">
          Source: Pontifical Yearbook, Annuarium Statisticum Ecclesiae, UN Worldometer. Figures are end-of-year estimates.
        </p>
      </div>
    </Layout>
  );
}
