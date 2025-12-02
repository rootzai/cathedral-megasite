import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Network() {
  return (
    <Layout>
      <div className="space-y-8 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <SectionHeader 
          number="04" 
          title="Network & Influence" 
          subtitle="McCarrick's Ecclesiastical Network and Political Reach"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6 font-serif text-lg leading-relaxed">
            <p>
              McCarrick's power was not just hierarchical; it was built on a vast network of personal loyalty, political connections, and financial patronage. He operated as a "kingmaker" within the American Church, influencing the appointment of bishops and shaping the Church's public policy engagement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative h-96 w-full overflow-hidden border border-destructive/30 group">
            <img 
              src="/assets/memes/TUT.png" 
              alt="The Unholy Trinity: McCarrick, Reilly, Tobin" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 animate-ken-burns"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h2 className="text-3xl font-display uppercase text-white text-shadow-blood mb-1">The Unholy Trinity</h2>
              <p className="text-sm text-gray-300 italic">"By the stang of the regents!"</p>
            </div>
          </div>
          <div className="relative h-96 w-full overflow-hidden border border-destructive/30 group">
            <img 
              src="/assets/memes/cardinalverse.png" 
              alt="The Cardinalverse: Infinite Scandals" 
              className="absolute inset-0 w-full h-full object-cover opacity-90 animate-ken-burns"
              style={{ animationDelay: '2s' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h2 className="text-3xl font-display uppercase text-white text-shadow-blood mb-1">The Cardinalverse</h2>
              <p className="text-sm text-gray-300 italic">Infinite Scandals. One Stang to Rule Them All.</p>
            </div>
          </div>
        </div>

        <div className="relative h-96 w-full overflow-hidden border border-destructive/30 mb-12 group">
          <img 
            src="/assets/memes/stangofregents.png" 
            alt="Stang of Regents Satire" 
            className="absolute inset-0 w-full h-full object-cover opacity-90 animate-ken-burns"
            style={{ animationDuration: '25s' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <h2 className="text-4xl font-display uppercase text-white text-shadow-blood mb-2">The Stang of Regents</h2>
            <p className="text-xl text-gray-300 italic">"The Board knew. The Board enabled. The Board is complicit."</p>
          </div>
        </div>
        </div>

        <div className="space-y-12">
          <section className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 border-t border-border pt-8">
            <h3 className="font-mono font-bold text-destructive uppercase tracking-widest text-sm mt-1">4.1 New Jersey</h3>
            <div className="space-y-4 font-serif">
              <h4 className="font-display font-bold text-2xl">Dioceses of Metuchen and Newark</h4>
              <p>
                In New Jersey, McCarrick established his base of power. He was known for his fundraising prowess, establishing the "Archbishop's Annual Appeal" which brought in millions. He also built a "cult of personality" among seminarians, inviting them to his beach house in Sea Girt, NJ—a location that would become central to many abuse allegations.
              </p>
              
              <div className="relative h-64 w-full overflow-hidden border border-destructive/30 my-6 group">
                <img 
                  src="/assets/images/grooming_legacy.png" 
                  alt="Sinister illustration of grooming" 
                  className="absolute inset-0 w-full h-full object-cover opacity-70 animate-ken-burns"
                  style={{ animationDuration: '30s' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 text-right">
                  <span className="block text-destructive font-mono text-sm uppercase tracking-widest">The Method</span>
                  <span className="block text-white font-display text-xl">Power & Predation</span>
                </div>
              </div>

              <p>
                He promoted loyalists to key positions, creating a wall of silence that made it difficult for complaints to gain traction.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 border-t border-border pt-8">
            <h3 className="font-mono font-bold text-destructive uppercase tracking-widest text-sm mt-1">4.2 Washington D.C.</h3>
            <div className="space-y-4 font-serif">
              <h4 className="font-display font-bold text-2xl">National Politics</h4>
              <p>
                As Archbishop of Washington, McCarrick became the face of the American Church in the nation's capital. He was a frequent guest at the White House and a confidant of politicians from both parties.
              </p>
              <p>
                He used this political capital to advocate for Church interests but also to insulate himself. His high public profile made him seem "untouchable" to his victims and subordinates.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 border-t border-border pt-8">
            <h3 className="font-mono font-bold text-destructive uppercase tracking-widest text-sm mt-1">4.3 The Vatican</h3>
            <div className="space-y-4 font-serif">
              <h4 className="font-display font-bold text-2xl">Global Roles & The Papal Foundation</h4>
              <p>
                McCarrick was a key figure in The Papal Foundation, a U.S.-based charity that provides millions of dollars annually to the Vatican. This financial leverage gave him extraordinary access to Vatican officials, including Pope John Paul II and Pope Benedict XVI.
              </p>
              <p>
                This "checkbook diplomacy" is cited by many experts as a primary reason why warnings about his behavior were ignored or suppressed in Rome.
              </p>
            </div>
          </section>
        </div>

        <div className="flex justify-between mt-12 pt-8 border-t border-border">
          <Link href="/profile" asChild>
            <Button variant="outline" className="font-mono uppercase tracking-widest rounded-none border-2">
              <span className="mr-2">←</span> Previous
            </Button>
          </Link>
          <Link href="/warnings" asChild>
            <Button size="lg" className="font-mono uppercase tracking-widest rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
              Proceed to Section 05 <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
