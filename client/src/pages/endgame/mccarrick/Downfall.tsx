import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Downfall() {
  return (
    <Layout>
      <div className="space-y-8 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <SectionHeader 
          number="07" 
          title="Exposure & Downfall" 
          subtitle="2017–2019: The End of Impunity"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-8 font-serif text-lg leading-relaxed">
            <section>
              <h3 className="font-mono font-bold text-destructive uppercase tracking-widest mb-4 text-sm">7.1 First Public Accusations</h3>
              <p>
                In 2017, the Archdiocese of New York received a credible allegation that McCarrick had abused a minor in the 1970s. This was the "smoking gun" that finally triggered a formal canonical process.
              </p>
              <p>
                On June 20, 2018, the Vatican announced that the allegation had been found "credible and substantiated" and that McCarrick had been removed from public ministry. This announcement sent shockwaves through the global Church.
              </p>
            </section>

            <section>
              <h3 className="font-mono font-bold text-destructive uppercase tracking-widest mb-4 text-sm">7.2 Resignation from the College of Cardinals</h3>
              <p>
                As more allegations surfaced—including from adults who had been seminarians—pressure mounted. In July 2018, Pope Francis accepted McCarrick's resignation from the College of Cardinals.
              </p>
              <div className="pl-6 border-l-4 border-destructive italic text-muted-foreground">
                "It was the first time in nearly a century that a cardinal had resigned his title, and the first time ever for reasons of sexual abuse."
              </div>
            </section>

            <section>
              <h3 className="font-mono font-bold text-destructive uppercase tracking-widest mb-4 text-sm">7.3 Laicization</h3>
              <p>
                Following a canonical trial, the Vatican's Congregation for the Doctrine of the Faith found McCarrick guilty of "solicitation in the Sacrament of Confession and sins against the Sixth Commandment with minors and with adults, with the aggravating factor of the abuse of power."
              </p>
              <p>
                On February 16, 2019, Pope Francis confirmed the penalty of <span className="font-bold text-destructive">dismissal from the clerical state</span> (laicization). Theodore McCarrick was now simply "Mr. McCarrick."
              </p>
            </section>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-muted p-6 border border-border">
              <h4 className="font-mono font-bold uppercase text-sm mb-4 border-b border-border pb-2">The Fall Timeline</h4>
              <div className="space-y-6 font-mono text-xs">
                <div className="relative pl-4 border-l border-destructive">
                  <span className="block font-bold text-destructive mb-1">JUNE 20, 2018</span>
                  <span className="block text-muted-foreground">Removed from public ministry following credible allegation.</span>
                </div>
                <div className="relative pl-4 border-l border-destructive">
                  <span className="block font-bold text-destructive mb-1">JULY 28, 2018</span>
                  <span className="block text-muted-foreground">Resigns from College of Cardinals. Ordered to life of prayer and penance.</span>
                </div>
                <div className="relative pl-4 border-l border-destructive">
                  <span className="block font-bold text-destructive mb-1">FEB 16, 2019</span>
                  <span className="block text-muted-foreground">Laicized (defrocked) by Pope Francis.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-12 pt-8 border-t border-border">
          <Link href="/mechanisms" asChild>
            <Button variant="outline" className="font-mono uppercase tracking-widest rounded-none border-2">
              <span className="mr-2">←</span> Previous
            </Button>
          </Link>
          <Link href="/legal" asChild>
            <Button size="lg" className="font-mono uppercase tracking-widest rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
              Proceed to Section 08 <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
