import { Streamdown } from "streamdown";

export default function Dedication() {
    return (
        <div>
            {/* Hero — candlelight vigil atmosphere */}
            <div className="relative overflow-hidden h-64 md:h-80 flex items-center justify-center">
                <img src="/assets/cathedral/cathedral_rose_window.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.15] select-none pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background" />
                {/* ✦ — For those who were never believed */}
                <div className="absolute top-4 right-4 text-white/[0.03] hover:text-white/20 text-7xl font-cinzel font-black select-all transition-colors duration-1000 cursor-default" aria-hidden="true">✦</div>
                <h1 className="relative z-10 text-5xl md:text-6xl font-heading text-center text-white uppercase tracking-widest drop-shadow-xl border-b border-white/20 pb-4">
                    Dedication
                </h1>
            </div>
            <div className="container mx-auto max-w-4xl py-12 px-4 relative z-10">
                <div className="prose prose-invert prose-xl max-w-none text-center">
                    <Streamdown>{`
**For the victims:**

Kim Capadona
Donna McMonagle
Lara McKeever and her sisters
TM
The innocent young boys of Delbarton
The seminarians from Immaculate Conception and St. Andrew's
The seminarians McCarrick called his "nephews"
Mark Crawford and the SNAP survivors
The 450 plaintiffs in Judge Benjamin's case
Joe and Kelli Nyre who demanded truth
Those still silenced by fear
Those denied justice
The children betrayed
For truth still emerging
`}</Streamdown>
                </div>
            </div>
        </div>
    );
}
