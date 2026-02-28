import RootLayout from "@/components/RootLayout";
import { Streamdown } from "@/components/Streamdown";

export default function Dedication() {
    return (
        <RootLayout>
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
        </RootLayout>
    );
}
