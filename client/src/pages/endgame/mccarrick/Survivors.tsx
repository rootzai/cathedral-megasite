import EndgameLayout from "@/components/EndgameLayout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Survivors() {
  return (<div className="space-y-8 animate-in fade-in duration-1000 slide-in-from-bottom-4">
        <SectionHeader 
          number="06" 
          title="Survivor Testimonies" 
          subtitle="The Human Toll and Calls for Justice"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-8 font-serif text-lg leading-relaxed">
            <p>
              Behind the legal battles and ecclesiastical politics are the human beings whose lives were irrevocably altered by McCarrick's abuse. Their courage in coming forward broke the silence.
            </p>

            <div className="bg-zinc-900 border-l-8 border-red-900 p-10 relative shadow-2xl">
              <span className="absolute top-4 left-6 text-9xl font-cinzel text-red-900/20 pointer-events-none">"</span>
              <p className="italic mb-6 relative z-10 font-serif text-2xl leading-relaxed text-white">
                "He was a father figure to me. I trusted him. And he used that trust to destroy me."
              </p>
              <p className="font-mono text-lg font-black text-red-600 uppercase tracking-widest text-right">— James Grein</p>
            </div>

            <h3 className="font-cinzel font-black text-3xl mt-12 mb-6 uppercase tracking-widest text-shadow-blood">James Grein</h3>
            <p className="text-zinc-300">
              James Grein is one of the most vocal survivors of McCarrick's abuse. He has detailed how McCarrick groomed him from childhood, becoming a close family friend before initiating sexual abuse that continued for decades. Grein's testimony was pivotal in the Vatican's investigation.
            </p>

            <h3 className="font-cinzel font-black text-3xl mt-12 mb-6 uppercase tracking-widest text-shadow-blood">The "Beach House" Survivors</h3>
            <p className="text-zinc-300">
              Multiple men have described similar patterns of abuse at McCarrick's beach house in Sea Girt, NJ. They describe a "cult-like" atmosphere where seminarians were pressured to share a bed with the Bishop, often under the guise of "humility" or "bonding."
            </p>
          </div>

          <div className="lg:col-span-4 space-y-10">
            <div className="border-2 border-red-900 p-2 bg-zinc-900 group shadow-2xl">
              <div className="aspect-[4/3] bg-black relative overflow-hidden mb-6 border border-red-900">
                <img 
                  src="/assets/images/survivors_protest.jpg" 
                  alt="Survivors Protest" 
                  className="object-cover w-full h-full brightness-75 group-hover:brightness-110 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-red-900/10 group-hover:bg-transparent" />
              </div>
              <div className="font-mono text-sm space-y-3 px-4 pb-4">
                <div className="flex justify-between border-b border-red-900/30 pb-2">
                  <span className="text-red-600 font-black uppercase">EVENT</span>
                  <span className="font-bold text-white">SURVIVOR PROTEST</span>
                </div>
                <div className="flex justify-between border-b border-red-900/30 pb-2">
                  <span className="text-red-600 font-black uppercase">LOCATION</span>
                  <span className="font-bold text-white">BALTIMORE, MD</span>
                </div>
              </div>
            </div>

            <div className="bg-red-900 p-8 text-white font-mono shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 blur-2xl" />
              <h4 className="font-black uppercase text-xl mb-6 border-b-2 border-white/30 pb-4 tracking-widest">Impact Statement</h4>
              <p className="font-bold text-red-100 mb-4">
                THE PSYCHOLOGICAL TOLL:
              </p>
              <ul className="space-y-4 text-sm font-bold">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white]" /> LOSS OF FAITH & SPIRITUAL CRISIS</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white]" /> DEPRESSION, ANXIETY & PTSD</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white]" /> SUBSTANCE ABUSE & RELATIONAL DECAY</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10_white]" /> SYSTEMIC BETRAYAL TRAUMA</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-12 pt-8 border-t border-border">
          <Link href="/ledger/mccarrick/warnings" asChild>
            <Button variant="outline" className="font-mono uppercase tracking-widest rounded-none border-2">
              <span className="mr-2">←</span> Previous
            </Button>
          </Link>
          <Link href="/ledger/mccarrick/seton-hall" asChild>
            <Button size="lg" className="font-mono uppercase tracking-widest rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
              Proceed to Section 07 <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </div>);
}
