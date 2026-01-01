import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import KeyMetricCard from "@/components/KeyMetricCard";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function ClergyMetrics() {
  const seminaryData = [
    { region: "Worldwide", seminarians: "108,481", ordinations: "5,299", rate: "≈ 70–75%", notes: "Historical cohorts 2015–2023 show 72% eventual ordination" },
    { region: "United States", seminarians: "3,297", ordinations: "504", rate: "≈ 82–85%", notes: "Highest retention in decades (USCCB/CARA 2024)" },
    { region: "Africa", seminarians: "33,400+", ordinations: "~2,100", rate: "≈ 90%+", notes: "Fastest growing; very low dropout" },
    { region: "Europe", seminarians: "~18,000", ordinations: "~1,100", rate: "≈ 55–60%", notes: "Highest dropout rate globally" },
  ];

  return (
    <Layout>
      <SectionHeader 
        title="Clergy & Vocations" 
        subtitle="Analysis of the priestly pipeline, from major seminary enrollment to ordination, highlighting regional efficiency variances."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <KeyMetricCard 
          title="Total Priests" 
          value="406,996" 
          change="+0.5%" 
          trend="up" 
          description="Global stagnation; declines in West offset by Global South gains (1995-2023)."
        />
        <KeyMetricCard 
          title="Major Seminarians" 
          value="106,495" 
          change="-1.4%" 
          trend="down" 
          description="Slight long-term decline, but quality/retention is increasing in key markets."
        />
        <KeyMetricCard 
          title="Bishops" 
          value="5,430" 
          change="+20.7%" 
          trend="up" 
          description="Robust expansion of the episcopal college, ensuring administrative coverage."
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h3 className="font-serif font-bold text-xl mb-6 text-primary border-b border-border pb-2">Seminarian Pipeline Efficiency</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            The "conversion rate" of seminarians to ordained priests is a critical KPI for institutional health. While raw enrollment numbers have dipped slightly, the efficiency of formation programs has improved significantly in specific regions.
          </p>
          
          <div className="bg-muted/30 p-6 rounded-sm border border-border">
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-primary">Key Insight: The U.S. Anomaly</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Despite secular cultural headwinds, the United States currently enjoys its <strong>best retention rate in 50 years</strong>. Approximately <strong>83-85%</strong> of men who enter theology are eventually ordained.
            </p>
            <div className="h-1 w-full bg-border rounded-full overflow-hidden">
              <div className="h-full bg-accent w-[83%]" />
            </div>
            <div className="flex justify-between text-xs mt-2 text-muted-foreground">
              <span>Entry</span>
              <span>83% Ordination Rate</span>
            </div>
          </div>
        </div>

        <div className="relative h-[300px] lg:h-auto rounded-sm overflow-hidden border border-border">
          <img 
            src="/images/seminary-library.png" 
            alt="Seminary Library" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
        </div>
      </div>

      <div className="mb-12">
        <h3 className="font-serif font-bold text-xl mb-6 text-primary border-b border-border pb-2">Regional Ordination Data (2023-2024)</h3>
        <div className="rounded-sm border border-border overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="font-bold text-primary">Region</TableHead>
                <TableHead className="text-right font-medium">Major Seminarians</TableHead>
                <TableHead className="text-right font-medium">Ordinations</TableHead>
                <TableHead className="text-right font-bold text-primary">Conversion Rate</TableHead>
                <TableHead className="font-medium text-muted-foreground w-[40%]">Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {seminaryData.map((row) => (
                <TableRow key={row.region}>
                  <TableCell className="font-bold">{row.region}</TableCell>
                  <TableCell className="text-right text-muted-foreground">{row.seminarians}</TableCell>
                  <TableCell className="text-right text-muted-foreground">{row.ordinations}</TableCell>
                  <TableCell className="text-right font-bold text-accent-foreground">{row.rate}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{row.notes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Layout>
  );
}
