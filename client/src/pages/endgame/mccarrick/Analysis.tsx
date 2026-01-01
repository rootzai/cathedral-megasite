import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Analysis() {
  return (
    <Layout>
      <div className="space-y-8 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <SectionHeader 
          number="11" 
          title="Analysis" 
          subtitle="The McCarrick Case in Context"
        />

        <div className="prose prose-lg max-w-none font-serif">
          <p className="lead text-xl font-bold">
            The McCarrick case is not an anomaly; it is a symptom of systemic flaws within the Catholic Church's governance structure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <h3 className="font-display font-bold text-2xl uppercase border-b-4 border-destructive pb-2 inline-block">Patterns of Cover-up</h3>
            <p className="font-serif text-lg leading-relaxed">
              The "pass the trash" mentality that allowed abusive priests to move between parishes was replicated at the episcopal level. Bishops and cardinals prioritized the avoidance of scandal over the safety of the flock.
            </p>
            <p className="font-serif text-lg leading-relaxed">
              This was facilitated by a culture of secrecy (the "pontifical secret") that shielded internal investigations from civil authorities and the public.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="font-display font-bold text-2xl uppercase border-b-4 border-destructive pb-2 inline-block">Systemic Failures</h3>
            <ul className="space-y-4 font-serif text-lg">
              <li className="flex gap-4">
                <span className="font-mono font-bold text-destructive">01</span>
                <span><span className="font-bold">Clericalism:</span> The belief that the clergy are a separate, superior caste.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono font-bold text-destructive">02</span>
                <span><span className="font-bold">Lack of Checks and Balances:</span> Bishops had no effective oversight mechanism.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-mono font-bold text-destructive">03</span>
                <span><span className="font-bold">Financial Influence:</span> McCarrick's fundraising ability bought him protection and access.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-muted p-8 border border-border mt-12">
          <h3 className="font-mono font-bold uppercase text-sm mb-4 text-destructive tracking-widest">Lessons Learned</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-serif text-sm">
            <div>
              <h4 className="font-bold mb-2">Transparency is Non-Negotiable</h4>
              <p>The Church can no longer operate in secrecy. Trust, once lost, can only be regained through radical openness.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Lay Involvement is Crucial</h4>
              <p>Independent lay oversight boards are necessary to hold the hierarchy accountable.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Listen to Survivors</h4>
              <p>Survivors must be believed, supported, and placed at the center of the healing process.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-12 pt-8 border-t border-border">
          <Link href="/responses" asChild>
            <Button variant="outline" className="font-mono uppercase tracking-widest rounded-none border-2">
              <span className="mr-2">←</span> Previous
            </Button>
          </Link>
          <Link href="/conclusion" asChild>
            <Button size="lg" className="font-mono uppercase tracking-widest rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
              Proceed to Section 12 <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
