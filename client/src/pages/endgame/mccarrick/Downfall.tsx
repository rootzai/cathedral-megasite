import EndgameLayout from "@/components/EndgameLayout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import MemoryGate from "@/components/MemoryGate";

export default function Downfall() {
  return (<div className="space-y-8 animate-in fade-in duration-1000 slide-in-from-bottom-4">
    <div className="relative overflow-hidden rounded-sm -mx-4 mb-4">
      <img src="/assets/vatican/st_peters_interior_1.jpg" alt="" className="w-full h-48 md:h-64 object-cover opacity-[0.10] select-none pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      {/* Λ — The Fall. 449 pages sealed the verdict */}
      <div className="absolute top-3 right-3 text-white/[0.04] hover:text-white/20 text-5xl font-cinzel font-black select-all transition-colors duration-1000 cursor-default" aria-hidden="true">Λ</div>
    </div>
    <SectionHeader
      number="04"
      title="Exposure & Downfall"
      subtitle="2017–2019: The End of Impunity"
    />

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-8 space-y-12 font-serif text-xl leading-relaxed text-zinc-300">
        <section className="bg-zinc-900/50 p-8 border-l-4 border-red-900 shadow-xl">
          <h3 className="font-mono font-black text-red-600 uppercase tracking-[0.3em] mb-6 text-base">SECTION 4.1: FIRST PUBLIC ACCUSATIONS</h3>
          <h4 className="font-cinzel font-black text-3xl text-white mb-6 uppercase tracking-widest">The "Smoking Gun"</h4>
          <p>
            In 2017, the Archdiocese of New York received a credible allegation that McCarrick had abused a minor in the 1970s. This was the "smoking gun" that finally triggered a formal canonical process.
          </p>
          <p className="mt-6 border-t border-red-900/30 pt-6">
            On June 20, 2018, the Vatican announced that the allegation had been found "credible and substantiated" and that McCarrick had been removed from public ministry. This announcement sent shockwaves through the global Church.
          </p>
        </section>

        <section className="bg-zinc-900/50 p-8 border-l-4 border-red-900 shadow-xl">
          <h3 className="font-mono font-black text-red-600 uppercase tracking-[0.3em] mb-6 text-base">SECTION 4.2: THE RESIGNATION</h3>
          <h4 className="font-cinzel font-black text-3xl text-white mb-6 uppercase tracking-widest">Resignation from the College of Cardinals</h4>
          <p>
            As more allegations surfaced—including from adults who had been seminarians—pressure mounted. In July 2018, Pope Francis accepted McCarrick's resignation from the College of Cardinals.
          </p>
          <div className="mt-8 p-10 bg-red-900/10 border-2 border-red-900 italic text-white text-2xl font-cinzel text-center shadow-[inset_0_0_20px_rgba(139,26,26,0.3)]">
            "It was the first time in nearly a century that a cardinal had resigned his title, and the first time ever for reasons of sexual abuse."
          </div>
        </section>

        <section className="bg-zinc-900/50 p-8 border-l-4 border-red-900 shadow-xl">
          <h3 className="font-mono font-black text-red-600 uppercase tracking-[0.3em] mb-6 text-base">SECTION 4.3: THE FINAL VERDICT</h3>
          <h4 className="font-cinzel font-black text-3xl text-white mb-6 uppercase tracking-widest">Formal Laicization</h4>
          <p>
            Following a canonical trial, the Vatican's Congregation for the Doctrine of the Faith found McCarrick guilty of "solicitation in the Sacrament of Confession and sins against the Sixth Commandment with minors and with adults, with the aggravating factor of the abuse of power."
          </p>
          <p className="mt-6 p-6 border-2 border-red-600 bg-red-900/40 text-white font-black uppercase text-center shadow-2xl">
            On February 16, 2019, Pope Francis confirmed the penalty of dismissial from the clerical state (laicization). Theodore McCarrick was now simply "Mr. McCarrick."
          </p>
        </section>
      </div>

      <div className="lg:col-span-4 space-y-8">
        <div className="bg-zinc-900 border-2 border-red-900 p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-900/10 blur-3xl" />
          <h4 className="font-cinzel font-black uppercase text-xl mb-8 border-b-2 border-red-900 pb-4 tracking-widest text-white">The Fall Timeline</h4>
          <div className="space-y-8 font-mono text-sm tracking-tight text-white">
            <div className="relative pl-6 border-l-4 border-red-600">
              <span className="block font-black text-red-600 mb-2 text-lg uppercase">JUNE 20, 2018</span>
              <span className="block leading-tight uppercase font-bold">Removed from public ministry following credible allegation.</span>
            </div>
            <div className="relative pl-6 border-l-4 border-red-600">
              <span className="block font-black text-red-600 mb-2 text-lg uppercase">JULY 28, 2018</span>
              <span className="block leading-tight uppercase font-bold">Resigns from College of Cardinals. Ordered to life of prayer and penance.</span>
            </div>
            <div className="relative pl-6 border-l-4 border-red-600">
              <span className="block font-black text-red-600 mb-2 text-lg uppercase">FEB 16, 2019</span>
              <span className="block leading-tight uppercase font-bold">Laicized (defrocked) by Pope Francis in a definitive sentence.</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <MemoryGate registryId="person-mccarrick" />
  </div>);
}
