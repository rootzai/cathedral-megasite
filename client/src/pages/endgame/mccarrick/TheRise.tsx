import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import ImageModal from "@/components/ImageModal";

export default function TheRise() {
  return (
    <Layout>
      <div className="space-y-12 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <SectionHeader 
          number="ACT I" 
          title="The Rise" 
          subtitle="From Priesthood to Power: The Making of a Predator"
        />

        {/* Introduction / Background */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-6 text-lg leading-relaxed font-serif">
            <p>
              <span className="font-bold first-letter:text-5xl first-letter:font-display first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">T</span>
              he American Catholic Church’s abuse crisis first gained national attention in 2002, but the seeds were sown decades earlier. Amidst this systemic failure rose Theodore McCarrick, a charismatic cleric whose ascent from a New York priest to a Washington Cardinal was fueled by ambition, fundraising prowess, and a "cult of personality."
            </p>
            <p>
              Born in 1930 and ordained in 1958, McCarrick quickly gained a reputation as an intelligent and ambitious networker. His early career in education and administration paved the way for a rapid rise through the hierarchy: Auxiliary Bishop of New York (1977), Bishop of Metuchen (1981), Archbishop of Newark (1986), and finally Archbishop of Washington D.C. (2000) and Cardinal (2001).
            </p>
          </div>
          <div className="lg:col-span-4">
            <div className="bg-muted p-6 border border-border">
              <h4 className="font-mono font-bold uppercase text-sm mb-4 border-b border-border pb-2">Career Trajectory</h4>
              <ul className="space-y-3 font-mono text-xs">
                <li className="flex justify-between"><span className="text-muted-foreground">1958</span> <span className="font-bold">Ordained Priest (NY)</span></li>
                <li className="flex justify-between"><span className="text-muted-foreground">1977</span> <span className="font-bold">Auxiliary Bishop (NY)</span></li>
                <li className="flex justify-between"><span className="text-muted-foreground">1981</span> <span className="font-bold">Bishop of Metuchen</span></li>
                <li className="flex justify-between"><span className="text-muted-foreground">1986</span> <span className="font-bold">Archbishop of Newark</span></li>
                <li className="flex justify-between"><span className="text-muted-foreground">2000</span> <span className="font-bold">Archbishop of DC</span></li>
                <li className="flex justify-between"><span className="text-destructive font-bold">2001</span> <span className="font-bold text-destructive">Elevated to Cardinal</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* The Network & Influence */}
        <div className="border-t border-border pt-12">
          <h3 className="font-display font-bold text-3xl mb-8 uppercase">The Network of Influence</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Image 1: The Unholy Trinity */}
            <div className="space-y-2">
              <ImageModal
                src="/assets/memes/TUT.png"
                alt="The Unholy Trinity"
                title="The Unholy Trinity"
                caption="McCarrick, Reilly, and Tobin: A triumvirate of power that shaped the New Jersey church."
              >
                <div className="aspect-video bg-muted relative overflow-hidden border border-border group cursor-zoom-in">
                  <img 
                    src="/assets/memes/TUT.png" 
                    alt="The Unholy Trinity" 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white font-mono text-xs uppercase tracking-widest bg-black/70 px-2 py-1">Expand</span>
                  </div>
                </div>
              </ImageModal>
              <p className="font-mono text-xs text-muted-foreground">Fig 1.1: The Power Structure</p>
            </div>

            {/* Image 2: The Cardinalverse */}
            <div className="space-y-2">
              <ImageModal
                src="/assets/memes/cardinalverse.png"
                alt="The Cardinalverse"
                title="The Cardinalverse"
                caption="A satirical look at the infinite web of scandals and cover-ups."
              >
                <div className="aspect-video bg-muted relative overflow-hidden border border-border group cursor-zoom-in">
                  <img 
                    src="/assets/memes/cardinalverse.png" 
                    alt="The Cardinalverse" 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white font-mono text-xs uppercase tracking-widest bg-black/70 px-2 py-1">Expand</span>
                  </div>
                </div>
              </ImageModal>
              <p className="font-mono text-xs text-muted-foreground">Fig 1.2: Systemic Corruption</p>
            </div>

            {/* Image 3: Stang of Regents */}
            <div className="space-y-2">
              <ImageModal
                src="/assets/memes/stangofregents.png"
                alt="The Stang of Regents"
                title="The Stang of Regents"
                caption="The Board of Regents knew, enabled, and was complicit."
              >
                <div className="aspect-video bg-muted relative overflow-hidden border border-border group cursor-zoom-in">
                  <img 
                    src="/assets/memes/stangofregents.png" 
                    alt="The Stang of Regents" 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white font-mono text-xs uppercase tracking-widest bg-black/70 px-2 py-1">Expand</span>
                  </div>
                </div>
              </ImageModal>
              <p className="font-mono text-xs text-muted-foreground">Fig 1.3: Institutional Complicity</p>
            </div>

          </div>
        </div>

        {/* The "Uncle Ted" Persona */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-border pt-12">
          <div className="space-y-6 font-serif text-lg leading-relaxed">
            <h3 className="font-display font-bold text-2xl uppercase">The "Uncle Ted" Persona</h3>
            <p>
              McCarrick cultivated a persona of a benevolent, grandfatherly figure. This "Uncle Ted" image was a key mechanism of his grooming behavior, allowing him to cross boundaries with seminarians and young priests under the guise of mentorship and familial affection.
            </p>
            <p>
              He invited them to his beach house in Sea Girt, NJ—a location that would become central to many abuse allegations. There, the "cult of personality" he built served to silence dissent and normalize his predatory behavior.
            </p>
          </div>
          <div className="relative h-full min-h-[300px] bg-muted border border-border p-1">
             <ImageModal
                src="/assets/images/grooming_legacy.png"
                alt="Grooming Legacy"
                title="The Method: Power & Predation"
                caption="A visual representation of the grooming tactics used to exploit power dynamics."
              >
                <div className="w-full h-full relative overflow-hidden group cursor-zoom-in">
                  <img 
                    src="/assets/images/grooming_legacy.png" 
                    alt="Grooming Legacy" 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-80 hover:opacity-100"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <span className="bg-black/70 text-white text-xs font-mono px-2 py-1 uppercase tracking-widest">Click to Expand</span>
                  </div>
                </div>
              </ImageModal>
          </div>
        </div>

        <div className="flex justify-between mt-12 pt-8 border-t border-border">
          <Link href="/mccarrick" asChild>
            <Button variant="outline" className="font-mono uppercase tracking-widest rounded-none border-2">
              <span className="mr-2">←</span> Home
            </Button>
          </Link>
          <Link href="/mccarrick/regime" asChild>
            <Button size="lg" className="font-mono uppercase tracking-widest rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
              Proceed to Act II: The Regime <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
