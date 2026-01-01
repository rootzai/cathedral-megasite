import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Landmark, Briefcase, Network, ArrowRight } from "lucide-react";

export default function McCarrickMechanism() {
  return (
    <Layout>
      <SectionHeader 
        title="The McCarrick Mechanism" 
        subtitle="Deconstructing the fundraising dynasty that generated over $1 Billion in government grants and private donations, buying influence and silence for decades."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="space-y-6">
          <h3 className="font-serif font-bold text-2xl text-primary">The "Kingmaker" of Capital</h3>
          <p className="text-muted-foreground leading-relaxed">
            Theodore McCarrick was not just a prelate; he was the most prolific fundraiser in the modern history of the American Church. He constructed a "dual-pipeline" financial engine that made him indispensable to the Vatican and untouchable at home.
          </p>
          
          <div className="pl-4 border-l-2 border-accent space-y-4">
            <div>
              <h4 className="font-bold text-foreground">Pipeline 1: The Government Spigot</h4>
              <p className="text-sm text-muted-foreground">
                McCarrick mastered the art of securing federal and state grants. Under his influence, <strong>Catholic Charities USA</strong> grew to receive over <strong>$1 Billion annually</strong> in government funds (approx. 65% of its total revenue), transforming it into a quasi-governmental agency for social services.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground">Pipeline 2: The Papal Foundation</h4>
              <p className="text-sm text-muted-foreground">
                Co-founded by McCarrick in 1988, the Papal Foundation aggregated American wealth for the Holy See. McCarrick personally recruited wealthy donors, offering them exclusive access to the Pope in exchange for million-dollar endowments. This created an "off-books" slush fund for the Vatican.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-muted/20 p-8 rounded-sm border border-border">
          <h3 className="font-serif font-bold text-xl mb-6 flex items-center">
            <Network className="w-6 h-6 mr-3 text-accent" />
            The "Uncle Ted" Ledger
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            McCarrick maintained a personal "Archbishop's Fund"—a private account used to distribute cash gifts to other powerful clerics. Forensic reports revealed over <strong>$600,000</strong> in checks written to high-ranking Vatican officials, effectively "tipping" the hierarchy to ensure his promotion and protection.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-background p-3 rounded-sm border border-border">
              <span className="text-sm font-medium">To Vatican Curia Officials</span>
              <span className="font-mono font-bold text-destructive">$250,000+</span>
            </div>
            <div className="flex items-center justify-between bg-background p-3 rounded-sm border border-border">
              <span className="text-sm font-medium">To Fellow US Bishops</span>
              <span className="font-mono font-bold text-destructive">$100,000+</span>
            </div>
            <div className="flex items-center justify-between bg-background p-3 rounded-sm border border-border">
              <span className="text-sm font-medium">Travel & "Hospitality"</span>
              <span className="font-mono font-bold text-destructive">$200,000+</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="font-serif font-bold text-xl mb-6 text-center">The Flow of Influence</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <Card className="bg-card border border-border">
            <CardHeader>
              <CardTitle className="text-lg"><Landmark className="w-8 h-8 mx-auto mb-2 text-primary" />US Government</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Federal Grants & Contracts</p>
              <ArrowRight className="w-4 h-4 mx-auto my-2 text-muted-foreground rotate-90 md:rotate-0" />
            </CardContent>
          </Card>

          <Card className="bg-card border border-border relative overflow-visible">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-2 py-0.5 text-xs font-bold rounded-full">McCarrick's Control</div>
            <CardHeader>
              <CardTitle className="text-lg"><Briefcase className="w-8 h-8 mx-auto mb-2 text-primary" />Catholic Charities / Papal Fdn</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Aggregation & Bundling</p>
              <ArrowRight className="w-4 h-4 mx-auto my-2 text-muted-foreground rotate-90 md:rotate-0" />
            </CardContent>
          </Card>

          <Card className="bg-card border border-border">
            <CardHeader>
              <CardTitle className="text-lg"><Landmark className="w-8 h-8 mx-auto mb-2 text-primary" />The Vatican</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Peter's Pence & Discretionary Funds</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
