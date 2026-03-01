import Layout from "@/components/ChurchBKLayout";
import SectionHeader from "@/components/SectionHeader";
import KeyMetricCard from "@/components/KeyMetricCard";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Shield, Scale, Gavel, AlertTriangle } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative w-full h-[400px] mb-12 rounded-sm overflow-hidden group">
        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
        <img 
          src="/images/hero-vatican-finance.png" 
          alt="Vatican Finance" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale"
        />
        <div className="absolute bottom-0 left-0 z-30 p-8 md:p-12 max-w-3xl">
          <div className="inline-block px-3 py-1 mb-4 bg-destructive text-destructive-foreground text-xs font-bold uppercase tracking-widest">
            Confidential Analysis
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight">
            The Bankruptcy Playbook
          </h1>
          <p className="text-lg text-white/90 font-light max-w-xl leading-relaxed">
            Investigating the "Corporate Veil" strategies, Alvarez & Marsal restructuring tactics, and the $4.4 billion Chapter 11 crisis facing US Dioceses.
          </p>
        </div>
      </div>

      {/* Executive Summary */}
      <section className="mb-16">
        <SectionHeader 
          title="Executive Summary: The Sovereign Shield" 
          subtitle="How the Catholic Church utilizes 'Corporation Sole' structures and strategic bankruptcy filings to ring-fence assets from abuse liability."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link href="/church-bk/active-case-dossiers">
            <KeyMetricCard 
              title="Active Bankruptcies" 
              value="43" 
              change="+2 (Q4)" 
              trend="up" 
              description="US Dioceses currently in Chapter 11 reorganization proceedings."
              highlight={true}
            />
          </Link>
          <Link href="/church-bk/diocesan-finance">
            <KeyMetricCard 
              title="Assets in Dispute" 
              value="$4.4B" 
              change="High Risk" 
              trend="neutral" 
              description="Total value of real estate and liquid capital subject to creditor claims."
            />
          </Link>
          <Link href="/church-bk/the-corporate-veil">
            <KeyMetricCard 
              title="Professional Fees" 
              value="$350M+" 
              change="Burn Rate" 
              trend="up" 
              description="Cumulative legal and restructuring fees paid to firms like Alvarez & Marsal."
            />
          </Link>
          <Link href="/church-bk/active-case-dossiers">
            <KeyMetricCard 
              title="Avg. Settlement" 
              value="18%" 
              change="Low" 
              trend="down" 
              description="Survivors typically receive less than 20 cents on the dollar of claim value."
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-serif font-bold text-primary mb-4 flex items-center">
                <span className="w-8 h-[1px] bg-destructive mr-3"></span>
                Strategic Findings
              </h3>
              <div className="prose prose-slate max-w-none text-muted-foreground">
                <p className="mb-4">
                  Our analysis reveals a coordinated legal strategy across multiple US jurisdictions. By filing for Chapter 11, Dioceses trigger an "Automatic Stay" that halts all civil litigation. This maneuver is not driven by traditional insolvency, but by a desire to cap liability exposure and force global settlements.
                </p>
                <p>
                  The "Two-Hat" legal defense allows Bishops to claim absolute ownership of assets under Canon Law while simultaneously arguing they are "mere administrators" of separate trusts under Civil Law. This contradiction is the central battleground of current bankruptcy litigation.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/church-bk/active-case-dossiers">
                <Card className="bg-card border-border/50 hover:border-primary/50 transition-colors cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Scale className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-bold text-foreground">Active Case Dossiers</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Live tracking of Rockville Centre, Buffalo, Oakland, and Santa Fe proceedings.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/church-bk/the-corporate-veil">
                <Card className="bg-card border-border/50 hover:border-primary/50 transition-colors cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-destructive/10 rounded-full">
                        <Shield className="w-5 h-5 text-destructive" />
                      </div>
                      <h4 className="font-bold text-foreground">The Corporate Veil</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Deep dive into the "Two-Hat" strategy and Alvarez & Marsal's restructuring playbook.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-muted/30 border border-border p-6 rounded-sm">
              <h3 className="font-serif font-bold text-lg mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-accent" />
                Critical Alerts
              </h3>
              <ul className="space-y-4">
                <li className="pb-4 border-b border-border/50 last:border-0 last:pb-0">
                  <span className="text-xs font-bold text-destructive uppercase block mb-1">Fraudulent Conveyance</span>
                  <span className="text-sm text-muted-foreground">Courts in Santa Fe and San Diego have ruled pre-bankruptcy asset transfers were illegal attempts to hide wealth.</span>
                </li>
                <li className="pb-4 border-b border-border/50 last:border-0 last:pb-0">
                  <span className="text-xs font-bold text-destructive uppercase block mb-1">Liquidity Trap</span>
                  <span className="text-sm text-muted-foreground">Dioceses are using professional fee "burn rates" to deplete cash and force early settlements.</span>
                </li>
              </ul>
            </div>
            
            <div className="border border-border p-6 rounded-sm">
              <h3 className="font-serif font-bold text-lg mb-4">Investigation Modules</h3>
              <nav className="space-y-3">
                <Link href="/church-bk/financial-operating-model" className="flex items-center justify-between text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
                  US Financial Operating Model
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                </Link>
                <Separator />
                <Link href="/church-bk/diocesan-finance" className="flex items-center justify-between text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
                  Diocesan Intelligence
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                </Link>
                <Separator />
                <Link href="/church-bk/cardinalate-mccarrick" className="flex items-center justify-between text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
                  The Cardinalate & McCarrick
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
