import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Responses() {
  return (
    <Layout>
      <div className="space-y-8 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <SectionHeader 
          number="10" 
          title="Institutional Response" 
          subtitle="Reforms, Reports, and the Path Forward"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="col-span-1 lg:col-span-2 space-y-8 font-serif text-lg leading-relaxed">
            <section>
              <h3 className="font-display font-bold text-2xl mb-4">The McCarrick Report (2020)</h3>
              <p>
                In November 2020, the Vatican released a 449-page report detailing its institutional knowledge and decision-making regarding McCarrick. It was an unprecedented act of transparency for the Holy See.
              </p>
              <p className="mt-4">
                The report admitted to "shortcomings in the information gathering process" and acknowledged that Pope John Paul II had been deceived by McCarrick's denials, while Pope Benedict XVI and Pope Francis had failed to enforce informal sanctions effectively until the 2017 allegation.
              </p>
            </section>

            <section>
              <h3 className="font-display font-bold text-2xl mb-4">Vos Estis Lux Mundi (2019)</h3>
              <p>
                In response to the scandal, Pope Francis issued the motu proprio <span className="italic">Vos Estis Lux Mundi</span> ("You are the light of the world"). This new law established:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 font-serif text-base">
                <li>Mandatory reporting of abuse and cover-up.</li>
                <li>A clear mechanism for investigating bishops (metropolitans investigating suffragans).</li>
                <li>Protections for whistleblowers.</li>
              </ul>
            </section>
          </div>

          <div className="col-span-1 space-y-6">
            <div className="bg-muted p-6 border border-border">
              <h4 className="font-mono font-bold uppercase text-sm mb-4 border-b border-border pb-2">Official Documents</h4>
              <div className="space-y-4">
                <a href="#" className="block group">
                  <div className="font-mono text-xs text-muted-foreground mb-1 group-hover:text-destructive transition-colors">PDF DOCUMENT</div>
                  <div className="font-bold leading-tight group-hover:underline">Report on the Holy See's Institutional Knowledge... (McCarrick Report)</div>
                </a>
                <a href="#" className="block group">
                  <div className="font-mono text-xs text-muted-foreground mb-1 group-hover:text-destructive transition-colors">APOSTOLIC LETTER</div>
                  <div className="font-bold leading-tight group-hover:underline">Vos Estis Lux Mundi</div>
                </a>
              </div>
            </div>

            <div className="border border-border p-4 bg-card">
              <div className="aspect-[3/2] bg-muted relative overflow-hidden mb-4 grayscale contrast-125">
                <img 
                  src="/assets/images/vatican_exterior.jpg" 
                  alt="Vatican" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="font-mono text-xs text-center text-muted-foreground">
                VATICAN CITY, ROME
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-12 pt-8 border-t border-border">
          <Link href="/survivors" asChild>
            <Button variant="outline" className="font-mono uppercase tracking-widest rounded-none border-2">
              <span className="mr-2">←</span> Previous
            </Button>
          </Link>
          <Link href="/analysis" asChild>
            <Button size="lg" className="font-mono uppercase tracking-widest rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
              Proceed to Section 11 <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
