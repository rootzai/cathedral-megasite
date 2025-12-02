import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function StakeholderAnalysis() {
  return (
    <Layout>
      <SectionHeader 
        title="Stakeholder Analysis" 
        subtitle="Mapping the influential para-church organizations and donor networks that shape US Catholic strategy and funding."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Opus Dei */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif font-bold text-2xl text-primary">Opus Dei</h3>
            <Badge variant="outline" className="text-xs font-bold border-primary text-primary">Personal Prelature</Badge>
          </div>
          <div className="relative h-48 rounded-sm overflow-hidden border border-border">
            <img 
              src="/images/opus-dei-headquarters.png" 
              alt="Opus Dei Headquarters" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            <div className="absolute bottom-0 left-0 p-4 bg-background/90 backdrop-blur-sm border-t border-r border-border">
              <p className="text-xs font-bold uppercase text-muted-foreground">Financial Strategy</p>
              <p className="text-sm font-medium">Decentralized Asset Holding</p>
            </div>
          </div>
          <div className="prose prose-sm text-muted-foreground">
            <p>
              <strong>Structure:</strong> The only "Personal Prelature" in the Church. It operates not by owning assets directly, but through a network of foundations and non-profits run by lay members (e.g., Woodlawn Foundation in the US).
            </p>
            <p>
              <strong>The "Non-Ownership" Model:</strong> Opus Dei statutes (no. 122) dictate that the Prelature itself does not own the schools, residences, or centers it serves. Instead, these are owned by civil corporations of lay members. This insulates the central hierarchy from liability and financial transparency requirements.
            </p>
            <p>
              <strong>Key US Assets:</strong> Murray Hill Place (NYC headquarters, valued at ~$60M+), various university centers, and retreat houses.
            </p>
          </div>
        </div>

        {/* Napa Institute */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif font-bold text-2xl text-primary">The Napa Institute</h3>
            <Badge variant="outline" className="text-xs font-bold border-accent text-accent-foreground">Influencer Network</Badge>
          </div>
          <div className="relative h-48 rounded-sm overflow-hidden border border-border">
            <img 
              src="/images/napa-institute-conference.png" 
              alt="Napa Institute Conference" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-accent/10 mix-blend-multiply" />
            <div className="absolute bottom-0 left-0 p-4 bg-background/90 backdrop-blur-sm border-t border-r border-border">
              <p className="text-xs font-bold uppercase text-muted-foreground">Financial Strategy</p>
              <p className="text-sm font-medium">High-Net-Worth Aggregation</p>
            </div>
          </div>
          <div className="prose prose-sm text-muted-foreground">
            <p>
              <strong>Mission:</strong> Founded by Tim Busch, it serves as a networking hub for wealthy Catholic philanthropists, bishops, and conservative intellectuals. It is often described as the "Davos of Catholic orthodoxy."
            </p>
            <p>
              <strong>Financial Influence:</strong> While its direct budget is modest (~$1-2M annual contributions), its <em>leverage</em> is immense. It connects donors with specific apostolates (e.g., FOCUS, Augustine Institute) and bishops seeking funding for diocesan projects.
            </p>
            <p>
              <strong>Strategic Giving:</strong> Promotes "donor intent" protections, encouraging wealthy Catholics to bypass general diocesan appeals and fund specific, aligned ministries directly.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-muted/30 border border-border rounded-sm p-8 mb-12">
        <h3 className="font-serif font-bold text-xl mb-6 text-primary">Other Key Financial Powerhouses</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="relative h-32 rounded-sm overflow-hidden border border-border">
              <img 
                src="/images/knights-columbus-vault.png" 
                alt="Knights of Columbus Vault" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
            <div>
              <h4 className="font-bold text-primary mb-2">Knights of Columbus</h4>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Asset Class:</strong> Insurance & Investments
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                A Fortune 1000 equivalent with over <strong>$29 Billion</strong> in assets under management. It funds Vatican initiatives and US diocesan projects, acting as a "central bank" for loyalist causes.
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-2">Legatus</h4>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Asset Class:</strong> Executive Network
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              An exclusive organization for Catholic CEOs (min. revenue requirements). It functions as a peer-to-peer influence network, aligning corporate wealth with Church teaching.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-2">Papal Foundation</h4>
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Asset Class:</strong> Direct Vatican Aid
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              A US-based endowment (fund size ~$300M+) where "Stewards" pledge $1M+ to give the Pope discretionary funds. It grants US donors outsized access to the Holy See.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
