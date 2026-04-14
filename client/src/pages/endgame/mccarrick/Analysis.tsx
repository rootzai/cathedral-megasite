import EndgameLayout from "@/components/EndgameLayout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import MemoryGate from "@/components/MemoryGate";

export default function Analysis() {
  return (<div className="space-y-8 animate-in fade-in duration-1000 slide-in-from-bottom-4">
    <div className="relative overflow-hidden rounded-sm -mx-4 mb-4">
      <img src="/assets/images/network_web.png" alt="" className="w-full h-48 md:h-64 object-cover opacity-[0.08] select-none pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      {/* ∞ — The Web. Every thread connects to every other */}
      <div className="absolute top-3 right-3 text-white/[0.04] hover:text-white/20 text-5xl font-cinzel font-black select-all transition-colors duration-1000 cursor-default" aria-hidden="true">∞</div>
    </div>
    <SectionHeader
      number="11"
      title="Analysis"
      subtitle="The McCarrick Case in Context"
    />

    <div className="prose prose-lg max-w-none font-serif">
      <p className="lead text-xl font-bold">
        The McCarrick case is not an anomaly; it is a symptom of systemic flaws within the Catholic Church's governance structure.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
      <div className="space-y-10">
        <h3 className="font-cinzel font-black text-2xl uppercase border-b-4 border-red-900 pb-4 tracking-widest text-white text-shadow-blood inline-block">Patterns of Cover-up</h3>
        <p className="font-serif text-xl leading-relaxed text-zinc-300">
          The "pass the trash" mentality that allowed abusive priests to move between parishes was replicated at the episcopal level. Bishops and cardinals prioritized the avoidance of scandal over the safety of the flock.
        </p>
        <p className="font-serif text-xl leading-relaxed text-zinc-300 p-6 bg-zinc-900/50 border-l-4 border-red-900 italic">
          This was facilitated by a culture of secrecy (the "pontifical secret") that shielded internal investigations from civil authorities and the public.
        </p>
      </div>

      <div className="space-y-10">
        <h3 className="font-cinzel font-black text-2xl uppercase border-b-4 border-red-900 pb-4 tracking-widest text-white text-shadow-blood inline-block">Systemic Failures</h3>
        <ul className="space-y-6 font-mono text-lg font-black uppercase">
          <li className="flex gap-6 items-start group">
            <span className="font-black text-red-600 bg-red-900/10 px-3 py-1 border border-red-900 group-hover:bg-red-900 group-hover:text-white transition-all">01</span>
            <span className="text-white"><span className="text-red-500">Clericalism:</span> The belief that the clergy are a superior caste.</span>
          </li>
          <li className="flex gap-6 items-start group">
            <span className="font-black text-red-600 bg-red-900/10 px-3 py-1 border border-red-900 group-hover:bg-red-900 group-hover:text-white transition-all">02</span>
            <span className="text-white"><span className="text-red-500">Toxic Autonomy:</span> Absolute power without effective oversight.</span>
          </li>
          <li className="flex gap-6 items-start group">
            <span className="font-black text-red-600 bg-red-900/10 px-3 py-1 border border-red-900 group-hover:bg-red-900 group-hover:text-white transition-all">03</span>
            <span className="text-white"><span className="text-red-500">Financial Leverage:</span> Using wealth to buy access and silence.</span>
          </li>
        </ul>
      </div>
    </div>

    <div className="bg-red-900 p-12 border-4 border-white/20 shadow-[0_0_100px_rgba(139,26,26,0.5)] mt-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl pointer-events-none" />
      <h3 className="font-mono font-black uppercase text-xl mb-10 text-white tracking-[0.4em] border-b-2 border-white/30 pb-4 inline-block">Lessons Learned</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white">
        <div className="space-y-4">
          <h4 className="font-cinzel font-black text-xl uppercase tracking-tighter shadow-sm">RADICAL TRANSPARENCY</h4>
          <p className="font-serif text-lg leading-snug">The Church can no longer operate in secrecy. Trust, once lost, can only be regained through radical, institutional openness.</p>
        </div>
        <div className="space-y-4">
          <h4 className="font-cinzel font-black text-xl uppercase tracking-tighter shadow-sm">INDEPENDENT OVERSIGHT</h4>
          <p className="font-serif text-lg leading-snug">Independent lay oversight boards are necessary to hold the hierarchy accountable and break the cycle of self-regulation.</p>
        </div>
        <div className="space-y-4">
          <h4 className="font-cinzel font-black text-xl uppercase tracking-tighter shadow-sm">PRIMACY OF SURVIVORS</h4>
          <p className="font-serif text-lg leading-snug">Survivors must be heard, believed, and placed at the absolute center of every healing and justice process.</p>
        </div>
      </div>
    </div>

    <MemoryGate registryId="person-mccarrick" />
  </div>);
}
