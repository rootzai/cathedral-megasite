import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import KeyMetricCard from "@/components/KeyMetricCard";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative w-full h-[400px] mb-12 rounded-sm overflow-hidden group">
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
        <img 
          src="/images/hero-vatican-finance.png" 
          alt="Vatican Finance" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 z-30 p-8 md:p-12 max-w-3xl">
          <div className="inline-block px-3 py-1 mb-4 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-widest">
            Executive Report 2025
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight">
            The Cathedral Capital Report
          </h1>
          <p className="text-lg text-white/90 font-light max-w-xl leading-relaxed">
            A comprehensive analysis of the Catholic Church's institutional growth, demographic shifts, and 30-year strategic outlook.
          </p>
        </div>
      </div>

      {/* Executive Summary */}
      <section className="mb-16">
        <SectionHeader 
          title="Executive Summary" 
          subtitle="Despite secularization narratives in the West, the Catholic Church demonstrates robust global expansion driven by the Global South, outpacing world population growth over the last 30 years."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <KeyMetricCard 
            title="Global Catholics" 
            value="1.405B" 
            change="+36.8%" 
            trend="up" 
            description="Steady growth outpacing world population since 1995. Africa and Asia are primary drivers."
            highlight={true}
          />
          <KeyMetricCard 
            title="World Share" 
            value="17.8%" 
            change="-0.1 pts" 
            trend="neutral" 
            description="Remarkably stable market share of global population over three decades (17-18%)."
          />
          <KeyMetricCard 
            title="Bishops" 
            value="5,430" 
            change="+20.7%" 
            trend="up" 
            description="Institutional leadership has expanded significantly, particularly in emerging markets."
          />
          <KeyMetricCard 
            title="Seminarian Retention" 
            value="~75%" 
            change="High" 
            trend="up" 
            description="Global ordination conversion rate remains strong at 70-75%, with US hitting 50-year highs."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-serif font-bold text-primary mb-4 flex items-center">
                <span className="w-8 h-[1px] bg-accent mr-3"></span>
                Strategic Outlook: The 30-Year View
              </h3>
              <div className="prose prose-slate max-w-none text-muted-foreground">
                <p className="mb-4">
                  The data reveals a decisive shift in the center of gravity for the Catholic Church. While European metrics show stagnation or decline, the "Global South" strategy has yielded substantial dividends. The 36.8% growth in the total Catholic population from 1995 to 2023 closely tracks the 37.8% growth in world population, indicating a resilient brand retention despite external pressures.
                </p>
                <p>
                  Key operational metrics such as the number of Bishops (+20.7%) suggest a strengthening of the administrative backbone, essential for managing a decentralized global institution of 1.4 billion members.
                </p>
              </div>
            </div>

            <Card className="bg-muted/30 border-none">
              <CardContent className="p-6">
                <h4 className="font-bold text-primary mb-2 uppercase tracking-wider text-sm">Analyst Note</h4>
                <p className="text-sm text-muted-foreground italic">
                  "Of every 100 men currently listed as 'major seminarians' worldwide, roughly 72–75 will be ordained priests; in the U.S. that number is now 83–85 — the highest in half a century." — <span className="not-italic font-medium">Vatican Central Office of Church Statistics</span>
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="bg-primary text-primary-foreground p-6 rounded-sm">
              <h3 className="font-serif font-bold text-xl mb-4 text-accent">Key Drivers</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">01</span>
                  <span className="text-sm opacity-90">Demographic dividend in Sub-Saharan Africa driving baptismal numbers.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">02</span>
                  <span className="text-sm opacity-90">Stabilization of clergy numbers through efficient redistribution.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 font-bold">03</span>
                  <span className="text-sm opacity-90">High retention rates in priestly formation programs (Seminaries).</span>
                </li>
              </ul>
            </div>
            
            <div className="border border-border p-6 rounded-sm">
              <h3 className="font-serif font-bold text-lg mb-4">Report Sections</h3>
              <nav className="space-y-3">
                <Link href="/global-growth" className="flex items-center justify-between text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
                  Global Expansion Data
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                </Link>
                <Separator />
                <Link href="/clergy-metrics" className="flex items-center justify-between text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
                  Clergy & Vocations Analysis
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                </Link>
                <Separator />
                <Link href="/sacramental-data" className="flex items-center justify-between text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
                  Sacramental Index
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
