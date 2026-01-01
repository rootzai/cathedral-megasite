import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import RedactedText from "@/components/RedactedText";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Warnings() {
  return (
    <Layout>
      <div className="space-y-8 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <SectionHeader 
          number="05" 
          title="Warnings & Cover-ups" 
          subtitle="Early Warnings, Allegations, and Patterns of Concealment"
        />

        <div className="prose prose-lg max-w-none font-serif">
          <p className="lead text-xl">
            The tragedy of the McCarrick case is not just the abuse itself, but the fact that it was an "open secret" for decades. Numerous warnings were issued, complaints were filed, and settlements were paid—yet he continued to rise.
          </p>
        </div>

        <div className="space-y-12 mt-12">
          <div className="relative pl-8 border-l border-border">
            <div className="absolute -left-1.5 top-0 w-3 h-3 bg-destructive rounded-full" />
            <h3 className="font-display font-bold text-2xl mb-2">1980s–1990s: Initial Complaints</h3>
            <p className="font-serif text-lg mb-4">
              Rumors about McCarrick's behavior with seminarians began almost immediately upon his appointment as Bishop of Metuchen. Priests and seminarians whispered about his insistence on sharing a bed with young men at his beach house.
            </p>
            <div className="bg-muted p-4 font-mono text-sm border border-border">
              <p className="mb-2 font-bold uppercase text-destructive">Anonymous Letter (c. 1990s)</p>
              <p>"He shares his bed with seminarians. Everyone knows it. It is a scandal waiting to happen."</p>
            </div>
          </div>

          <div className="relative pl-8 border-l border-border">
            <div className="absolute -left-1.5 top-0 w-3 h-3 bg-destructive rounded-full" />
            <h3 className="font-display font-bold text-2xl mb-2">2000s: Secret Settlements</h3>
            <p className="font-serif text-lg mb-4">
              In the mid-2000s, two separate settlements were paid to adult men who accused McCarrick of sexual misconduct. These settlements were paid by dioceses (Metuchen and Newark) and included strict confidentiality agreements (NDAs).
            </p>
            <ul className="list-disc pl-5 space-y-2 font-serif">
              <li>
                <span className="font-bold">2004:</span> A priest of the Diocese of Metuchen reported abuse.
              </li>
              <li>
                <span className="font-bold">2005:</span> A settlement was reached with a former priest involving allegations against McCarrick.
              </li>
            </ul>
            <p className="mt-4 font-serif italic text-muted-foreground">
              These settlements were hidden from the public and, crucially, from the Vatican officials vetting him for promotion (or so it was claimed).
            </p>
          </div>

          <div className="relative pl-8 border-l border-border">
            <div className="absolute -left-1.5 top-0 w-3 h-3 bg-destructive rounded-full" />
            <h3 className="font-display font-bold text-2xl mb-2">Internal Communications</h3>
            <p className="font-serif text-lg mb-4">
              The 2020 Vatican Report revealed that high-ranking Church officials, including Cardinals in the Vatican, were aware of the allegations.
            </p>
            <div className="bg-black text-white p-6 font-mono text-sm leading-loose">
              <p className="mb-4 uppercase text-destructive font-bold border-b border-white/20 pb-2">CONFIDENTIAL MEMO: O'CONNOR TO NUNCIO</p>
              <p>
                In 1999, Cardinal John O'Connor of New York wrote a letter warning against McCarrick's promotion to Washington, citing <RedactedText>credible allegations of sexual misconduct</RedactedText> with young men.
              </p>
              <p className="mt-4">
                Despite this warning, McCarrick wrote a letter to the Pope's secretary denying the allegations, and Pope John Paul II—convinced by McCarrick's denial and his political utility—<RedactedText>approved the appointment</RedactedText>.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-12 pt-8 border-t border-border">
          <Link href="/network" asChild>
            <Button variant="outline" className="font-mono uppercase tracking-widest rounded-none border-2">
              <span className="mr-2">←</span> Previous
            </Button>
          </Link>
          <Link href="/mechanisms" asChild>
            <Button size="lg" className="font-mono uppercase tracking-widest rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
              Proceed to Section 06 <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
