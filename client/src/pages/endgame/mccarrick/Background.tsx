import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Background() {
  return (
    <Layout>
      <div className="space-y-8 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <SectionHeader 
          number="02" 
          title="The Crisis" 
          subtitle="Background: The Clergy Sexual Abuse Crisis in the U.S. Church"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed font-serif">
            <p>
              The American Catholic Church’s abuse crisis first gained national attention in 2002, when investigative reporting (most prominently by <span className="italic font-bold">The Boston Globe</span>) revealed that dozens of priests had sexually abused minors and that church leaders concealed these crimes by shuffling perpetrators between parishes.
            </p>
            
            <div className="pl-6 border-l-4 border-destructive/50 italic text-muted-foreground my-6">
              "Subsequent investigations – including a 2018 Pennsylvania grand jury report – confirmed that cover-ups were widespread and often involved high-ranking prelates prioritizing the church’s reputation over the protection of children."
            </div>

            <p>
              Over the past two decades, hundreds of clergy abuse lawsuits have been filed across the country, dioceses have paid out billions in settlements, and several dioceses (including in New Jersey) established compensation funds or declared bankruptcy under the weight of claims.
            </p>

            <h3 className="font-display font-bold text-2xl mt-8 mb-4 uppercase">The Accountability Gap</h3>
            <p>
              Despite reforms initiated after 2002 (such as the <span className="italic">Dallas Charter</span> for the Protection of Children and Young People), these measures focused largely on priests and deacons, not on bishops. This left a significant accountability gap: bishops accused of misconduct, or of ignoring abuse by others, often answered only to the Vatican.
            </p>
            
            <p>
              By the 2010s, this gap became painfully evident as allegations surfaced against a few bishops themselves – culminating in the explosive revelations about Cardinal Theodore McCarrick in 2018.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-2 bg-destructive/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src="/assets/images/abuse_statistics.png" 
                alt="Abuse Statistics Chart" 
                className="w-full border border-border grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
              />
              <p className="font-mono text-xs mt-2 text-muted-foreground uppercase tracking-wider">
                Fig 2.1: Reported Allegations 2006-2012
              </p>
            </div>

            <div className="bg-muted p-6 border border-border">
              <h4 className="font-mono font-bold uppercase text-sm mb-4 border-b border-border pb-2">Timeline of Exposure</h4>
              <ul className="space-y-4 font-mono text-xs">
                <li className="grid grid-cols-[80px_1fr] gap-4">
                  <span className="font-bold text-destructive">2002</span>
                  <span>Boston Globe "Spotlight" investigation reveals systemic cover-up.</span>
                </li>
                <li className="grid grid-cols-[80px_1fr] gap-4">
                  <span className="font-bold text-destructive">2002</span>
                  <span>USCCB adopts the Dallas Charter.</span>
                </li>
                <li className="grid grid-cols-[80px_1fr] gap-4">
                  <span className="font-bold text-destructive">2018</span>
                  <span>PA Grand Jury Report names 300+ predator priests.</span>
                </li>
                <li className="grid grid-cols-[80px_1fr] gap-4">
                  <span className="font-bold text-destructive">2018</span>
                  <span>McCarrick allegations become public.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-12 pt-8 border-t border-border">
          <Link href="/" asChild>
            <Button variant="outline" className="font-mono uppercase tracking-widest rounded-none border-2">
              <span className="mr-2">←</span> Previous
            </Button>
          </Link>
          <Link href="/profile" asChild>
            <Button size="lg" className="font-mono uppercase tracking-widest rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
              Proceed to Section 03 <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
