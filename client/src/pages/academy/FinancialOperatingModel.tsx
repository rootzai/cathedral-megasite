import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowRight, Building2, Scale, Wallet } from "lucide-react";

export default function FinancialOperatingModel() {
  return (
    <Layout>
      <SectionHeader 
        title="US Financial Operating Model" 
        subtitle="An analysis of the 'Corporation Sole' structure, diocesan asset management, and the bifurcation of Canon and Civil law in financial governance."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <Card className="lg:col-span-2 border-none shadow-none bg-transparent">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="font-serif text-2xl text-primary">The "Corporation Sole" Mechanism</CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <div className="prose prose-slate max-w-none text-muted-foreground">
              <p className="mb-4">
                In the United States, the financial sovereignty of a diocese is often legally structured as a <strong>Corporation Sole</strong>. This unique legal entity allows the Bishop to hold title to all church property—parishes, schools, cemeteries, and liquid assets—not as an individual, but as the incumbent of the office.
              </p>
              <p className="mb-4">
                This structure creates a powerful centralization of financial control. While Canon Law (c. 1256) asserts that ownership belongs to the "juridic person" (e.g., the parish) that acquired the goods, Civil Law in many states recognizes the Bishop (Corporation Sole) as the ultimate owner. This tension is the fulcrum of diocesan financial operations.
              </p>
              <div className="bg-muted/30 p-6 rounded-sm border-l-4 border-accent my-6">
                <h4 className="font-bold text-primary mb-2 uppercase tracking-wider text-sm">Key Distinction</h4>
                <p className="text-sm italic">
                  "The distinction between the who and why of corporation sole formation... is that it is formed by the bishop for the purpose of administering and managing the affairs, property, and temporalities thereof." — Napa Legal Institute
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <div className="bg-card border border-border p-6 rounded-sm">
            <h3 className="font-serif font-bold text-lg mb-4 text-primary flex items-center">
              <Wallet className="w-5 h-5 mr-2 text-accent" />
              Asset Estimation
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Real Estate Holdings</span>
                  <span className="text-primary font-bold">~$50B+</span>
                </div>
                <p className="text-xs text-muted-foreground">Estimated value of US parish/school land.</p>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Liquid Assets</span>
                  <span className="text-primary font-bold">~$10-15B</span>
                </div>
                <p className="text-xs text-muted-foreground">Diocesan investment trusts & endowments.</p>
              </div>
              <div className="pt-4 border-t border-border">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Annual OpEx</span>
                  <span className="text-primary font-bold">Unknown</span>
                </div>
                <p className="text-xs text-muted-foreground">Highly opaque; varies by diocese size.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="font-serif font-bold text-xl mb-6 text-primary border-b border-border pb-2">Governance: Canon vs. Civil Law</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-serif">
                <Scale className="w-5 h-5 mr-2 text-muted-foreground" />
                Canon Law (Ecclesiastical)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 mr-2 mt-0.5 text-accent shrink-0" />
                  <span><strong>Parish Ownership:</strong> Goods belong to the parish (juridic person), not the bishop.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 mr-2 mt-0.5 text-accent shrink-0" />
                  <span><strong>Finance Councils:</strong> Mandatory for every parish (c. 537) to aid administration.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 mr-2 mt-0.5 text-accent shrink-0" />
                  <span><strong>Alienation:</strong> Bishop needs Vatican permission to sell assets over ~$3.5M.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border border-border">
            <CardHeader>
              <CardTitle className="flex items-center text-lg font-serif">
                <Building2 className="w-5 h-5 mr-2 text-muted-foreground" />
                Civil Law (US Secular)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 mr-2 mt-0.5 text-primary shrink-0" />
                  <span><strong>Corporation Sole:</strong> Bishop holds title to all assets; parish has no separate legal existence.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 mr-2 mt-0.5 text-primary shrink-0" />
                  <span><strong>Liability:</strong> Diocese assets can be targeted in lawsuits (e.g., abuse claims) against the Bishop.</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 mr-2 mt-0.5 text-primary shrink-0" />
                  <span><strong>Bankruptcy:</strong> Dioceses can file Chapter 11 to restructure debt and settle claims.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
