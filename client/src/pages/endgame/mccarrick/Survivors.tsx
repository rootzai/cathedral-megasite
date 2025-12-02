import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Survivors() {
  return (
    <Layout>
      <div className="space-y-8 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <SectionHeader 
          number="09" 
          title="Survivor Testimonies" 
          subtitle="The Human Toll and Calls for Justice"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-8 font-serif text-lg leading-relaxed">
            <p>
              Behind the legal battles and ecclesiastical politics are the human beings whose lives were irrevocably altered by McCarrick's abuse. Their courage in coming forward broke the silence.
            </p>

            <div className="bg-muted p-8 border-l-4 border-destructive relative">
              <span className="absolute top-4 left-4 text-6xl font-display text-destructive/20">"</span>
              <p className="italic mb-4 relative z-10">
                "He was a father figure to me. I trusted him. And he used that trust to destroy me."
              </p>
              <p className="font-mono text-sm font-bold text-destructive uppercase text-right">— James Grein</p>
            </div>

            <h3 className="font-display font-bold text-2xl mt-8 mb-4">James Grein</h3>
            <p>
              James Grein is one of the most vocal survivors of McCarrick's abuse. He has detailed how McCarrick groomed him from childhood, becoming a close family friend before initiating sexual abuse that continued for decades. Grein's testimony was pivotal in the Vatican's investigation.
            </p>

            <h3 className="font-display font-bold text-2xl mt-8 mb-4">The "Beach House" Survivors</h3>
            <p>
              Multiple men have described similar patterns of abuse at McCarrick's beach house in Sea Girt, NJ. They describe a "cult-like" atmosphere where seminarians were pressured to share a bed with the Bishop, often under the guise of "humility" or "bonding."
            </p>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="border border-border p-4 bg-card">
              <div className="aspect-[4/3] bg-muted relative overflow-hidden mb-4 grayscale contrast-125">
                <img 
                  src="/assets/images/survivors_protest.jpg" 
                  alt="Survivors Protest" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-destructive/10 mix-blend-multiply pointer-events-none" />
              </div>
              <div className="font-mono text-xs space-y-2">
                <div className="flex justify-between border-b border-border pb-1">
                  <span className="text-muted-foreground">EVENT</span>
                  <span className="font-bold">SURVIVOR PROTEST</span>
                </div>
                <div className="flex justify-between border-b border-border pb-1">
                  <span className="text-muted-foreground">LOCATION</span>
                  <span className="font-bold">BALTIMORE, MD</span>
                </div>
              </div>
            </div>

            <div className="bg-black text-white p-6 font-mono text-xs leading-loose">
              <h4 className="font-bold uppercase text-destructive mb-4 border-b border-white/20 pb-2">Impact Statement</h4>
              <p>
                The psychological toll on survivors includes:
              </p>
              <ul className="list-disc pl-4 mt-2 space-y-2">
                <li>Loss of faith and spiritual crisis</li>
                <li>Depression, anxiety, and PTSD</li>
                <li>Substance abuse and relationship difficulties</li>
                <li>Deep sense of betrayal by the institution</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-12 pt-8 border-t border-border">
          <Link href="/legal" asChild>
            <Button variant="outline" className="font-mono uppercase tracking-widest rounded-none border-2">
              <span className="mr-2">←</span> Previous
            </Button>
          </Link>
          <Link href="/responses" asChild>
            <Button size="lg" className="font-mono uppercase tracking-widest rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
              Proceed to Section 10 <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
