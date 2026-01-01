import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Conclusion() {
  return (
    <Layout>
      <div className="space-y-8 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <SectionHeader 
          number="12" 
          title="Conclusion" 
          subtitle="Toward Transparency and Accountability"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-8 font-serif text-lg leading-relaxed">
            <p>
              The Theodore McCarrick scandal is a dark chapter in the history of the Catholic Church, but it also serves as a turning point. The exposure of his crimes and the subsequent investigations have forced the Church to confront its systemic failures and implement necessary reforms.
            </p>
            <p>
              While justice for many survivors remains elusive, the laicization of a cardinal and the publication of the McCarrick Report represent significant steps toward accountability. The path forward requires continued vigilance, a commitment to transparency, and an unwavering dedication to protecting the vulnerable.
            </p>
            <p className="font-bold">
              This dossier stands as a record of the facts, a testament to the survivors, and a reminder that no one is above the law—canon or civil.
            </p>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-card border border-border p-6">
              <h4 className="font-mono font-bold uppercase text-sm mb-4 border-b border-border pb-2">Sources & Further Reading</h4>
              <ul className="space-y-3 font-mono text-xs">
                <li>
                  <a href="#" className="hover:text-destructive transition-colors underline decoration-dotted">The Holy See’s McCarrick Report (2020)</a>
                </li>
                <li>
                  <a href="#" className="hover:text-destructive transition-colors underline decoration-dotted">Vos estis lux mundi (2019)</a>
                </li>
                <li>
                  <a href="#" className="hover:text-destructive transition-colors underline decoration-dotted">The Boston Globe "Spotlight" Archives</a>
                </li>
                <li>
                  <a href="#" className="hover:text-destructive transition-colors underline decoration-dotted">BishopAccountability.org</a>
                </li>
                <li>
                  <a href="#" className="hover:text-destructive transition-colors underline decoration-dotted">The Washington Post Investigations</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-start mt-12 pt-8 border-t border-border">
          <Link href="/analysis" asChild>
            <Button variant="outline" className="font-mono uppercase tracking-widest rounded-none border-2">
              <span className="mr-2">←</span> Previous
            </Button>
          </Link>
          <Link href="/" asChild>
            <Button variant="ghost" className="ml-auto font-mono uppercase tracking-widest hover:bg-transparent hover:text-destructive transition-colors">
              Return to Start
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
