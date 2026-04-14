import { Streamdown } from "streamdown";

export default function Dedication() {
    return (
        <div>
            {/* Hero — candlelight vigil atmosphere */}
            <div className="relative overflow-hidden h-48 md:h-64">
                <img src="/assets/cathedral/cathedral_rose_window.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.06] select-none pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background" />
                {/* ✦ — For those who were never believed */}
                <div className="absolute top-4 right-4 text-white/[0.03] hover:text-white/20 text-7xl font-cinzel font-black select-all transition-colors duration-1000 cursor-default" aria-hidden="true">✦</div>
            </div>
            <div className="container mx-auto max-w-4xl py-20 px-4 mt-20">
                <h1 className="text-4xl font-heading mb-12 text-center text-foreground uppercase tracking-widest border-b border-border pb-4">
                    Dedication
                </h1>
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
