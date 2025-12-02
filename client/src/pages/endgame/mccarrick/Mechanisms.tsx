import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Mechanisms() {
  return (
    <Layout>
      <div className="space-y-8 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <SectionHeader 
          number="06" 
          title="Mechanisms of Abuse" 
          subtitle="Enabling Abuse and Institutional Protection"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card border border-border p-6 hover:border-destructive transition-colors duration-500 group">
            <div className="font-mono text-4xl font-bold text-destructive mb-4 opacity-50 group-hover:opacity-100">01</div>
            <h3 className="font-display font-bold text-xl mb-3 uppercase">Clericalism</h3>
            <p className="font-serif text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
              An exaggerated respect for the clergy that places priests and bishops above criticism or suspicion. This culture discouraged victims from coming forward and led the laity to doubt accusations against "holy men."
            </p>
          </div>

          <div className="bg-card border border-border p-6 hover:border-destructive transition-colors duration-500 group">
            <div className="font-mono text-4xl font-bold text-destructive mb-4 opacity-50 group-hover:opacity-100">02</div>
            <h3 className="font-display font-bold text-xl mb-3 uppercase">Power Dynamics</h3>
            <p className="font-serif text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
              McCarrick used his position as a bishop to coerce seminarians. He held the power to ordain them or end their careers. This imbalance made consent impossible, even if the interactions appeared "consensual" to outsiders.
            </p>
          </div>

          <div className="bg-card border border-border p-6 hover:border-destructive transition-colors duration-500 group">
            <div className="font-mono text-4xl font-bold text-destructive mb-4 opacity-50 group-hover:opacity-100">03</div>
            <h3 className="font-display font-bold text-xl mb-3 uppercase">Grooming</h3>
            <p className="font-serif text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
              The "Uncle Ted" persona was a classic grooming tactic. By feigning paternal affection, buying gifts, and offering special privileges (like trips to the beach house), he desensitized victims and blurred professional boundaries.
            </p>
          </div>
        </div>

        <div className="space-y-8 font-serif text-lg leading-relaxed border-t border-border pt-8">
          <h3 className="font-display font-bold text-2xl uppercase">Lack of Accountability for Bishops</h3>
          <p>
            Before 2018, the Church's procedures for handling abuse allegations (like the Dallas Charter) largely exempted bishops. There was no clear mechanism for investigating a bishop accused of abuse or negligence.
          </p>
          <p>
            Bishops were effectively "sovereign" in their dioceses, answerable only to the Pope. This created a system where peer correction was non-existent, and the Vatican was too distant and bureaucratic to intervene effectively without overwhelming evidence.
          </p>
        </div>

        <div className="flex justify-between mt-12 pt-8 border-t border-border">
          <Link href="/warnings" asChild>
            <Button variant="outline" className="font-mono uppercase tracking-widest rounded-none border-2">
              <span className="mr-2">←</span> Previous
            </Button>
          </Link>
          <Link href="/downfall" asChild>
            <Button size="lg" className="font-mono uppercase tracking-widest rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
              Proceed to Section 07 <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
