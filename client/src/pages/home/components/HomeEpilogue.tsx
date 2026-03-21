import { Streamdown } from 'streamdown';

export function HomeEpilogue() {
    return (
        <>
            {/* A Plea to Judge Benjamin */}
            <section className="py-12 sm:py-16 md:py-24 bg-zinc-950 border-y border-zinc-800/50 text-white">
                <div className="container mx-auto max-w-4xl px-3 sm:px-4">
                    <div className="bg-zinc-950 p-6 sm:p-8 md:p-12 rounded-lg border-2 border-zinc-800 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-8 text-center text-zinc-500 uppercase tracking-widest">A Plea to Judge Benjamin</h2>
                        <div className="prose prose-invert prose-xl max-w-none text-center italic font-serif text-gray-300">
                            <Streamdown>{`
"Your Honor, the time for discretion has passed. Thomas Scrivo and Kevin Marino have not merely litigated this case; they have managed it as an institutional asset. They have withheld 22,000 documents, leaked confidential reports to the accused, and used their influence to build a shield around the McCarrick network."

**Sanction the concealment. Unseal the remaining 22,000 pages.**

The truth is not a privilege. It is a right.
`}</Streamdown>
                        </div>
                    </div>
                </div>
            </section>

            {/* Epilogue */}
            <section
                className="py-24 px-4 relative bg-cover bg-center bg-blend-overlay bg-zinc-950 text-white"
            >
                <div className="container mx-auto max-w-4xl relative z-10">
                    <div className="bg-zinc-950 p-8 sm:p-12 md:p-16 rounded-lg border-2 sm:border-4 border-zinc-800 shadow-2xl">
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-8 text-center text-white tracking-tighter">Epilogue</h2>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center text-zinc-400 uppercase tracking-widest">The Millstone Rises</h3>

                        <div className="prose prose-invert prose-2xl max-w-none">
                            <Streamdown>{`
> "But whoso shall offend one of these little ones... it were better for him that a millstone were hanged about his neck, and that he were drowned in the depth of the sea."
> 
> — **Matthew 18:6**

For six years, the millstone has been sinking — weighted by institutional silence, pulled down by deliberate concealment, dragged into darkness by those who chose the "Architecture of Silence" over the light of the Gospel.

**But millstones do not stay underwater forever.**

As of 2026, the stone has reached the surface. The vault that was meant to stay closed is open. The network that was meant to stay hidden is exposed. From McCarrick's first "nephews" to the 2024 installation of his secretary as president, the chain is broken.

For the survivors who spoke when it was dangerous.
For the whistleblowers who refused the silence.
For the truth that finally demands to be seen.

**The cathedral of documents stands open.**
**The reckoning is absolute.**

---

*This investigative dossier is maintained by SodomHall.com. All exhibits, court filings, and reports cited are available in the public record.*

**Emergency Resource:** RAINN National Sexual Assault Hotline 1-800-656-4673
`}</Streamdown>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
