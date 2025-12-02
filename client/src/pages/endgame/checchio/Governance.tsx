import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Governance() {
  return (
    <Layout>
      <div className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <SectionHeader 
          number="04" 
          title="The Whitewash" 
          subtitle="2019–2024: Orchestrating the 'Save' of Msgr. Reilly"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6 font-serif text-lg leading-relaxed">
            <p>
              Checchio's involvement with Seton Hall deepened in 2016 with his appointment to the Board of Regents. This role placed him in a position of oversight during the critical period of the Latham & Watkins investigation into seminary abuse.
            </p>
            <p>
              In November 2019, he was appointed to a Special Task Force—along with Joseph LaSala and Don Murray—to review the Latham findings and draft a Responsive Action Plan (RAP).
            </p>
          </div>
          
          <div className="relative h-[400px] w-full overflow-hidden border border-destructive/30 group">
            <img 
              src="/assets/images/checchio_closeup.jpg" 
              alt="Bishop Checchio Closeup" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 animate-ken-burns"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h2 className="text-3xl font-display uppercase text-white text-shadow-blood mb-1">The Fix Is In</h2>
              <p className="text-sm text-gray-300 italic">"The Whitewashing of the Century."</p>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <section className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 border-t border-border pt-8">
            <h3 className="font-mono font-bold text-destructive uppercase tracking-widest text-sm mt-1">The Findings</h3>
            <div className="space-y-4 font-serif">
              <p>
                The Latham investigation found that Msgr. Joseph Reilly, then Rector of the seminary, was aware of harassment allegations and had violated Title IX reporting requirements. The firm recommended his removal from leadership.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 border-t border-border pt-8">
            <h3 className="font-mono font-bold text-destructive uppercase tracking-widest text-sm mt-1">The "Save"</h3>
            <div className="space-y-4 font-serif">
              <p>
                Instead of enforcing accountability, Checchio advocated for "nuance." He framed Reilly's actions as "cooperative," enabling Cardinal Joseph Tobin to override the removal recommendation.
              </p>
              <p>
                This maneuver allowed Reilly to retain his position, eventually leading to his promotion to President of Seton Hall University in 2024.
              </p>
              <div className="bg-secondary/50 p-6 border border-destructive/20 mt-4">
                <h4 className="font-mono text-sm text-destructive uppercase mb-4">Assessment: 85–90% Complicity</h4>
                <p className="text-sm font-mono">
                  Checchio's role in the task force substantiates "institutional protectionism." By saving Reilly, he prioritized the reputation of the institution and its allies over justice for victims.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="flex justify-between mt-12 pt-8 border-t border-border">
          <Link href="/ascent" asChild>
            <Button variant="outline" className="font-mono uppercase tracking-widest rounded-none border-2">
              <span className="mr-2">←</span> Previous
            </Button>
          </Link>
          <Link href="/purge" asChild>
            <Button size="lg" className="font-mono uppercase tracking-widest rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
              Proceed to Section 05 <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
