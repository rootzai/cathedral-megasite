import EndgameLayout from "@/components/EndgameLayout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import MemoryGate from "@/components/MemoryGate";

export default function Responses() {
  return (<div className="space-y-8 animate-in fade-in duration-1000 slide-in-from-bottom-4">
    <SectionHeader
      number="10"
      title="Institutional Response"
      subtitle="Reforms, Reports, and the Path Forward"
    />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
      <div className="col-span-1 lg:col-span-2 space-y-10 font-serif text-xl leading-relaxed text-zinc-300">
        <section className="bg-zinc-900/50 p-8 border-l-4 border-red-900 shadow-xl">
          <h3 className="font-cinzel font-black text-3xl text-white mb-6 uppercase tracking-widest text-shadow-blood">The McCarrick Report (2020)</h3>
          <p>
            In November 2020, the Vatican released a 449-page report detailing its institutional knowledge and decision-making regarding McCarrick. It was an unprecedented act of transparency for the Holy See.
          </p>
          <p className="mt-6 border-t border-red-900/30 pt-6">
            The report admitted to "shortcomings in the information gathering process" and acknowledged that Pope John Paul II had been deceived by McCarrick's denials, while Pope Benedict XVI and Pope Francis had failed to enforce informal sanctions effectively until the 2017 allegation.
          </p>
        </section>

        <section className="bg-zinc-900/50 p-8 border-l-4 border-red-900 shadow-xl">
          <h3 className="font-cinzel font-black text-3xl text-white mb-6 uppercase tracking-widest text-shadow-blood">Vos Estis Lux Mundi (2019)</h3>
          <p>
            In response to the scandal, Pope Francis issued the motu proprio <span className="italic font-bold text-red-500">Vos Estis Lux Mundi</span> ("You are the light of the world"). This new law established:
          </p>
          <ul className="mt-6 space-y-4 font-serif text-lg">
            <li className="flex items-start gap-4">
              <span className="w-2 h-2 rounded-full bg-red-600 mt-2 shrink-0 shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
              <span>Mandatory reporting of abuse and cover-up for all clergy and religious.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-2 h-2 rounded-full bg-red-600 mt-2 shrink-0 shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
              <span>A clear mechanism for investigating bishops (metropolitans investigating suffragans).</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-2 h-2 rounded-full bg-red-600 mt-2 shrink-0 shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
              <span>Legal protections and support for whistleblowers (complainants).</span>
            </li>
          </ul>
        </section>
      </div>

      <div className="col-span-1 space-y-8">
        <div className="bg-zinc-900 border-2 border-red-900 p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-900/10 blur-3xl" />
          <h4 className="font-cinzel font-black uppercase text-xl mb-6 border-b-2 border-red-900 pb-4 tracking-widest text-white">Official Dossiers</h4>
          <div className="space-y-6">
            <a href="#" className="block group bg-black/40 p-4 border border-red-900/30 hover:border-red-600 transition-all">
              <div className="font-mono text-sm font-black text-red-600 mb-2 uppercase tracking-widest group-hover:text-red-500">PDF ARCHIVE</div>
              <div className="font-black text-lg text-white leading-tight group-hover:text-red-400 transition-colors">Vatican Report on Institutional Knowledge (The McCarrick Report)</div>
            </a>
            <a href="#" className="block group bg-black/40 p-4 border border-red-900/30 hover:border-red-600 transition-all">
              <div className="font-mono text-sm font-black text-red-600 mb-2 uppercase tracking-widest group-hover:text-red-500">APOSTOLIC LETTER</div>
              <div className="font-black text-lg text-white leading-tight group-hover:text-red-400 transition-colors italic">Vos Estis Lux Mundi</div>
            </a>
          </div>
        </div>

        <div className="border-2 border-red-900 p-2 bg-zinc-900 group shadow-2xl">
          <div className="aspect-[3/4] bg-black relative overflow-hidden mb-4 border border-red-900">
            <img
              src="/assets/images/vatican_exterior.jpg"
              alt="Vatican"
              className="object-cover w-full h-full brightness-75 group-hover:brightness-110 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-x-0 bottom-0 py-6 bg-gradient-to-t from-black to-transparent">
              <span className="block text-center font-mono text-sm font-black text-red-600 uppercase tracking-[0.3em]">VATICAN CITY, ROME</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <MemoryGate registryId="person-mccarrick" />
  </div>);
}
