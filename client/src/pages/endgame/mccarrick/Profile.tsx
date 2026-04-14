import EndgameLayout from "@/components/EndgameLayout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import MemoryGate from "@/components/MemoryGate";

export default function Profile() {
  return (<div className="space-y-8 animate-in fade-in duration-1000 slide-in-from-bottom-4">
    {/* Hero visual — McCarrick portrait */}
    <div className="relative overflow-hidden rounded-sm -mx-4 mb-4">
      <img src="/assets/images/mccarrick_portrait.jpg" alt="" className="w-full h-48 md:h-64 object-cover opacity-[0.12] select-none pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      {/* Ξ — The Ascendant. 1958→2018: 60 years, 5 dioceses, 0 accountability */}
      <div className="absolute top-3 right-3 text-white/[0.04] hover:text-white/20 text-5xl font-cinzel font-black select-all transition-colors duration-1000 cursor-default" aria-hidden="true">Ξ</div>
    </div>
    <SectionHeader
      number="03"
      title="Profile: McCarrick"
      subtitle="Rise in the Church: From Priesthood to Cardinalate"
    />

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-4 order-2 lg:order-1">
        <div className="sticky top-24 space-y-6">
          <div className="border-t-4 border-destructive pt-4">
            <h3 className="font-display font-bold text-3xl uppercase mb-2">Career Path</h3>
            <div className="space-y-0 font-mono text-sm">
              <div className="flex py-3 border-b border-border/50">
                <span className="w-24 font-bold text-muted-foreground">1958</span>
                <span>Ordained Priest (New York)</span>
              </div>
              <div className="flex py-3 border-b border-border/50">
                <span className="w-24 font-bold text-muted-foreground">1977</span>
                <span>Auxiliary Bishop (New York)</span>
              </div>
              <div className="flex py-3 border-b border-border/50">
                <span className="w-24 font-bold text-muted-foreground">1981</span>
                <span>Bishop of Metuchen, NJ</span>
              </div>
              <div className="flex py-3 border-b border-border/50">
                <span className="w-24 font-bold text-muted-foreground">1986</span>
                <span>Archbishop of Newark, NJ</span>
              </div>
              <div className="flex py-3 border-b border-border/50">
                <span className="w-24 font-bold text-muted-foreground">2000</span>
                <span>Archbishop of Washington, DC</span>
              </div>
              <div className="flex py-3 border-b border-border/50">
                <span className="w-24 font-bold text-destructive">2001</span>
                <span className="font-bold">Elevated to Cardinal</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-8 order-1 lg:order-2 space-y-8 text-lg leading-relaxed font-serif">
        <section>
          <h3 className="font-mono font-bold text-destructive uppercase tracking-widest mb-4 text-sm">3.1 Early Life and Priesthood</h3>
          <p>
            Born in New York City in 1930, Theodore McCarrick was ordained a priest for the Archdiocese of New York in 1958. He quickly gained a reputation as an intelligent, charismatic, and ambitious cleric. His early career included roles in education and administration, notably as president of the Catholic University of Puerto Rico.
          </p>
        </section>

        <section>
          <h3 className="font-mono font-bold text-destructive uppercase tracking-widest mb-4 text-sm">3.2 Episcopal Appointments</h3>
          <p className="mb-4">
            McCarrick's rise through the hierarchy was rapid. In 1981, he was appointed the founding bishop of the Diocese of Metuchen, New Jersey. Five years later, he was promoted to Archbishop of Newark, a major metropolitan see.
          </p>
          <p>
            In Newark, McCarrick solidified his reputation as a prodigious fundraiser and a skilled networker. He cultivated relationships with powerful political and religious figures, earning the nickname "The Uncle Ted" among his seminarians and younger priests—a moniker that would later take on a sinister connotation.
          </p>
        </section>

        <section>
          <h3 className="font-mono font-bold text-destructive uppercase tracking-widest mb-4 text-sm">3.3 Cardinalate and International Influence</h3>
          <p className="mb-4">
            The pinnacle of his career came in 2000 when Pope John Paul II appointed him Archbishop of Washington, D.C., arguably the most politically significant Catholic post in the United States. He was created a Cardinal in 2001.
          </p>
          <p>
            As a Cardinal, McCarrick traveled extensively, often acting as an unofficial diplomat for the Vatican in sensitive regions like China and the Middle East. His ability to raise vast sums of money for the Church and his apparent orthodoxy made him a favorite of the Vatican hierarchy, shielding him from scrutiny despite swirling rumors.
          </p>
        </section>

        <div className="bg-muted p-8 border border-border mt-8">
          <h4 className="font-display font-bold text-xl mb-4">The "Uncle Ted" Persona</h4>
          <p className="italic text-muted-foreground">
            "He cultivated a persona of a benevolent, grandfatherly figure. This 'Uncle Ted' image was a key mechanism of his grooming behavior, allowing him to cross boundaries with seminarians and young priests under the guise of mentorship and familial affection."
          </p>
        </div>
      </div>
    </div>

    <MemoryGate registryId="person-mccarrick" />
  </div>);
}
