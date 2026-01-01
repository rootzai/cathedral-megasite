import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import KeyMetricCard from "@/components/KeyMetricCard";
import { Card, CardContent } from "@/components/ui/card";

export default function SacramentalData() {
  return (
    <Layout>
      <SectionHeader 
        title="Sacramental Index" 
        subtitle="Tracking the core engagement metrics of the faithful: Baptisms, Communions, and Confirmations."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <KeyMetricCard 
          title="Adult Baptisms" 
          value="2.70M" 
          change="+35.0%" 
          trend="up" 
          description="Significant 30-year growth, with Africa accounting for 36% of the global total."
          highlight={true}
        />
        <KeyMetricCard 
          title="Total Baptisms" 
          value="13.15M" 
          change="-20.3%" 
          trend="down" 
          description="Decline correlates with falling global birth rates. Peak was 18.4M in 2000."
        />
        <KeyMetricCard 
          title="First Communions" 
          value="9.10M" 
          change="+21.3%" 
          trend="up" 
          description="Strong rebound post-2020, led by the Americas and Europe."
        />
        <KeyMetricCard 
          title="Confirmations" 
          value="7.70M" 
          change="+18.5%" 
          trend="up" 
          description="Steady increase in youth engagement, particularly in Oceania and Africa."
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border border-border shadow-sm">
          <CardContent className="p-8">
            <h3 className="font-serif font-bold text-xl mb-4 text-primary">The Baptismal Shift</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The divergence between infant and adult baptisms tells a story of demographic transition. While total baptisms have decreased by 20.3% over 30 years—mirroring the global decline in fertility rates—adult baptisms have surged by 35.0%.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              This indicates a shift from "cultural Catholicism" (inherited at birth) to "intentional Catholicism" (chosen by adults), particularly in mission territories where the Church is expanding through conversion rather than just biological growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="bg-muted/30 p-4 rounded-sm border border-border">
                <span className="block text-xs font-bold uppercase text-muted-foreground mb-1">Africa's Share</span>
                <span className="text-2xl font-serif font-bold text-primary">36%</span>
                <span className="block text-xs text-muted-foreground mt-1">of all adult baptisms</span>
              </div>
              <div className="bg-muted/30 p-4 rounded-sm border border-border">
                <span className="block text-xs font-bold uppercase text-muted-foreground mb-1">Adult Share</span>
                <span className="text-2xl font-serif font-bold text-primary">~20%</span>
                <span className="block text-xs text-muted-foreground mt-1">of total baptisms are adults</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-primary text-primary-foreground p-8 rounded-sm flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/marble-texture-bg.png')] opacity-10 mix-blend-overlay" />
          <div className="relative z-10">
            <h3 className="font-serif font-bold text-2xl mb-4 text-accent">Sacramental Retention</h3>
            <p className="text-primary-foreground/80 mb-6 text-sm leading-relaxed">
              The gap between Baptisms (13.15M) and First Communions (9.10M) represents the primary retention funnel.
            </p>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1 opacity-80">
                  <span>Baptisms</span>
                  <span>100%</span>
                </div>
                <div className="h-1 bg-primary-foreground/20 rounded-full">
                  <div className="h-full bg-accent w-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1 opacity-80">
                  <span>First Communions</span>
                  <span>~69%</span>
                </div>
                <div className="h-1 bg-primary-foreground/20 rounded-full">
                  <div className="h-full bg-accent w-[69%]" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1 opacity-80">
                  <span>Confirmations</span>
                  <span>~58%</span>
                </div>
                <div className="h-1 bg-primary-foreground/20 rounded-full">
                  <div className="h-full bg-accent w-[58%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
