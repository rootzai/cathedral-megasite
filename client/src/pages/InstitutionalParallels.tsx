/* ============================================================
   THE PRECEDENT — Institutional Parallels
   Penn State / Michigan State / Seton Hall — Side by Side
   Parchment theme — investigative broadsheet
   ============================================================ */
import { ArrowLeft, Scale, AlertTriangle, CheckCircle, X, Minus } from "lucide-react";
import { Link } from "wouter";

function StatusBadge({ status }: { status: "done" | "failed" | "pending" }) {
    if (status === "done") return <span className="inline-flex items-center gap-1 text-green-500 font-bold text-xs uppercase"><CheckCircle className="w-3 h-3" /> Yes</span>;
    if (status === "failed") return <span className="inline-flex items-center gap-1 text-zinc-700 font-bold text-xs uppercase"><X className="w-3 h-3" /> No</span>;
    return <span className="inline-flex items-center gap-1 text-yellow-500 font-bold text-xs uppercase"><Minus className="w-3 h-3" /> Pending</span>;
}

const comparisonData = [
    {
        dimension: "The Predator",
        pennState: "Jerry Sandusky — Assistant Football Coach",
        michiganState: "Larry Nassar — Team Physician",
        setonHall: "Theodore McCarrick — Archbishop of Newark",
    },
    {
        dimension: "Duration of Known Abuse",
        pennState: "15 years (1994–2009)",
        michiganState: "20 years (1997–2016)",
        setonHall: "40+ years (1980s–2018)",
    },
    {
        dimension: "Victims",
        pennState: "35+ (settled)",
        michiganState: "332+ (settled)",
        setonHall: "450+ plaintiffs (ongoing)",
    },
    {
        dimension: "Internal Investigation",
        pennState: "Freeh Report — released publicly",
        michiganState: "Title IX investigation — public findings",
        setonHall: "Latham Report — sealed for 6 years",
    },
    {
        dimension: "Pages of Evidence",
        pennState: "~267 pages (Freeh Report)",
        michiganState: "6,000+ documents fought over",
        setonHall: "24,000 pages — sealed by counsel",
    },
    {
        dimension: "University President",
        pennState: "Graham Spanier — fired by Board of Trustees",
        michiganState: "Lou Anna Simon — resigned hours after sentencing",
        setonHall: "Joseph Reilly — promoted to President in 2024",
    },
    {
        dimension: "Criminal Charges (Officials)",
        pennState: "Spanier, Curley, Schultz — convicted",
        michiganState: "Simon — charged with lying to police",
        setonHall: "None",
    },
    {
        dimension: "Financial Settlement",
        pennState: "$109 million",
        michiganState: "$500 million",
        setonHall: "$0 (to date)",
    },
    {
        dimension: "Dept. of Education Fine",
        pennState: "$2.4 million (record at the time)",
        michiganState: "$4.5 million (current record)",
        setonHall: "$0",
    },
    {
        dimension: "Institutional Response",
        pennState: "Investigation → accountability → reforms",
        michiganState: "Investigation → accountability → reforms",
        setonHall: "\"No comment\"",
    },
    {
        dimension: "Document Transparency",
        pennState: "Freeh Report released to public",
        michiganState: "6,000 docs fought over — pressure to release",
        setonHall: "Counsel sanctioned for withholding; report remains sealed",
    },
    {
        dimension: "Head Coach / Leader Fired",
        pennState: "Joe Paterno — fired on national television",
        michiganState: "Athletic Director Mark Hollis — resigned",
        setonHall: "No personnel changes",
    },
    {
        dimension: "Whistleblower Treatment",
        pennState: "Mike McQueary — testified, faced retaliation, won $12M suit",
        michiganState: "Rachael Denhollander — testified, named Time 100",
        setonHall: "Grand jury subpoena issued to unmask anonymous whistleblower",
    },
];

const noCommentLog = [
    { date: "2019", entity: "Seton Hall University", context: "Request for comment on Latham Report contents", response: "No comment" },
    { date: "2020", entity: "Archdiocese of Newark", context: "Vatican McCarrick Report findings", response: "Declined to comment" },
    { date: "2024", entity: "Seton Hall University", context: "Reilly appointment despite Task Force recommendations", response: "No comment" },
    { date: "2024", entity: "Archdiocese of Newark", context: "Grand jury subpoena targeting whistleblower", response: "No comment" },
    { date: "2025", entity: "Thomas Scrivo / O'Toole Scrivo", context: "Court sanctions for document withholding", response: "No comment" },
    { date: "2025", entity: "Seton Hall University", context: "Board resignations amid scandal", response: "No comment" },
    { date: "2026", entity: "Seton Hall University", context: "Ruemmler–Epstein communications revealed by DOJ", response: "No comment" },
    { date: "2026", entity: "Archdiocese of Newark", context: "Checchio transferred to New Orleans", response: "No comment" },
];

export default function InstitutionalParallels() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-zinc-900">
            <header className="relative z-50 bg-white/90 backdrop-blur-sm border-b border-zinc-300">
                <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex justify-between items-center">
                    <Link href="/">
                        <a className="text-2xl font-bold text-zinc-800 hover:text-zinc-700 transition-colors">
                            SODOM HALL
                        </a>
                    </Link>
                    <nav className="flex gap-3 sm:gap-6">
                        <Link href="/"><a className="text-gray-300 hover:text-zinc-900 transition-colors">Home</a></Link>
                        <Link href="/about"><a className="text-gray-300 hover:text-zinc-900 transition-colors">About</a></Link>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16 max-w-6xl">

                <nav className="mb-8 sm:mb-12">
                    <Link href="/">
                        <a className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-gray-400 hover:text-zinc-900 transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            Return to Archway
                        </a>
                    </Link>
                </nav>

                {/* Header */}
                <div className="text-center mb-12 sm:mb-16 md:mb-24">
                    <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.5em] text-zinc-700 mb-4 sm:mb-6">Special Forensic Analysis</p>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-6 tracking-tighter leading-[0.9]" style={{ fontFamily: "'Playfair Display', serif" }}>
                        The <span className="italic text-zinc-800">Precedent</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-2xl text-gray-400 italic max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8" style={{ fontFamily: "'Lora', serif" }}>
                        When Penn State and Michigan State faced their reckonings, presidents were fired, settlements were paid, and records were opened. Seton Hall's response has been: silence.
                    </p>
                    <div className="w-16 sm:w-24 h-1 bg-red-600 mx-auto" />
                </div>

                {/* Lead Narrative */}
                <section className="max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-24">
                    <div className="columns-1 md:columns-2 gap-8 md:gap-12 space-y-6 sm:space-y-8 text-base sm:text-lg leading-relaxed text-gray-300" style={{ fontFamily: "'Lora', serif" }}>
                        <p className="first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-zinc-900 first-letter:leading-none">
                            E
                            very institutional abuse scandal in American higher education follows the same five-step
                            playbook: <em>know</em> about the abuse, <em>commission</em> an internal report, <em>suppress</em> the
                            report, <em>promote</em> the loyalists, and <em>attack</em> the whistleblowers.
                        </p>
                        <p>
                            Penn State was caught at step three. Michigan State was caught at step three. Both institutions
                            paid catastrophic prices — financially, reputationally, and in terms of criminal accountability
                            for their leadership.
                        </p>
                        <p>
                            Seton Hall University is <strong className="text-zinc-900">currently at step four</strong>. The man whose career was built
                            within the McCarrick network was promoted to university president <em>after</em> the sealed report
                            recommended his removal. Step five — the attack on the whistleblowers — is actively in progress,
                            with a criminal grand jury subpoena deployed to unmask an anonymous source.
                        </p>
                        <p>
                            The question is not whether the pattern is the same. It is whether the consequences will be.
                        </p>
                    </div>
                </section>

                {/* The Comparison Table */}
                <section className="mb-12 sm:mb-16 md:mb-24">
                    <div className="flex items-center gap-4 mb-8">
                        <Scale className="w-8 h-8 text-zinc-700" />
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                            The Forensic Comparison
                        </h2>
                    </div>
                    <p className="text-gray-400 text-sm font-mono uppercase tracking-widest mb-8">
                        Three Universities · Three Scandals · Three Responses
                    </p>

                    <div className="overflow-x-auto border border-gray-800 rounded-lg shadow-2xl">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b-2 border-zinc-300">
                                    <th className="text-left p-4 bg-gray-900 font-mono text-xs uppercase tracking-widest text-gray-400 w-1/4">
                                        Dimension
                                    </th>
                                    <th className="text-left p-4 bg-blue-950/30 font-mono text-xs uppercase tracking-widest text-blue-400 w-1/4">
                                        Penn State
                                        <span className="block text-[10px] text-blue-400/60 mt-1">Sandusky · 2011</span>
                                    </th>
                                    <th className="text-left p-4 bg-green-950/30 font-mono text-xs uppercase tracking-widest text-green-400 w-1/4">
                                        Michigan State
                                        <span className="block text-[10px] text-green-400/60 mt-1">Nassar · 2016</span>
                                    </th>
                                    <th className="text-left p-4 bg-zinc-100/30 font-mono text-xs uppercase tracking-widest text-red-400 w-1/4">
                                        Seton Hall
                                        <span className="block text-[10px] text-red-400/60 mt-1">McCarrick · 2018</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row, i) => (
                                    <tr
                                        key={i}
                                        className={`border-b border-gray-800/50 hover:bg-white/[0.02] transition-colors ${i % 2 === 0 ? "bg-gray-950/30" : "bg-transparent"
                                            }`}
                                    >
                                        <td className="p-4 font-bold text-gray-300 text-xs uppercase tracking-wider align-top">
                                            {row.dimension}
                                        </td>
                                        <td className="p-4 text-gray-400 align-top leading-relaxed">{row.pennState}</td>
                                        <td className="p-4 text-gray-400 align-top leading-relaxed">{row.michiganState}</td>
                                        <td className="p-4 text-red-300/90 font-semibold align-top leading-relaxed">{row.setonHall}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* The Accountability Scorecard */}
                <section className="mb-12 sm:mb-16 md:mb-24">
                    <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-zinc-700 mb-8">Accountability Scorecard</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                label: "Penn State",
                                color: "blue",
                                items: [
                                    { q: "President removed", s: "done" as const },
                                    { q: "Coach fired", s: "done" as const },
                                    { q: "Officials criminally charged", s: "done" as const },
                                    { q: "Report made public", s: "done" as const },
                                    { q: "Financial settlement paid", s: "done" as const },
                                    { q: "Federal fine imposed", s: "done" as const },
                                    { q: "Institutional reforms enacted", s: "done" as const },
                                ],
                            },
                            {
                                label: "Michigan State",
                                color: "green",
                                items: [
                                    { q: "President removed", s: "done" as const },
                                    { q: "Athletics director resigned", s: "done" as const },
                                    { q: "Officials criminally charged", s: "done" as const },
                                    { q: "Documents released (partial)", s: "pending" as const },
                                    { q: "Financial settlement paid", s: "done" as const },
                                    { q: "Federal fine imposed", s: "done" as const },
                                    { q: "Institutional reforms enacted", s: "done" as const },
                                ],
                            },
                            {
                                label: "Seton Hall",
                                color: "red",
                                items: [
                                    { q: "President removed", s: "failed" as const },
                                    { q: "Implicated clergy removed", s: "failed" as const },
                                    { q: "Officials criminally charged", s: "failed" as const },
                                    { q: "Report made public", s: "failed" as const },
                                    { q: "Financial settlement paid", s: "failed" as const },
                                    { q: "Federal fine imposed", s: "failed" as const },
                                    { q: "Institutional reforms enacted", s: "failed" as const },
                                ],
                            },
                        ].map((institution) => (
                            <div
                                key={institution.label}
                                className={`border rounded-lg p-6 ${institution.color === "red"
                                    ? "border-red-900/50 bg-zinc-100/10"
                                    : institution.color === "blue"
                                        ? "border-blue-900/50 bg-blue-950/10"
                                        : "border-green-900/50 bg-green-950/10"
                                    }`}
                            >
                                <h3
                                    className={`text-lg font-black uppercase tracking-wider mb-6 ${institution.color === "red"
                                        ? "text-red-400"
                                        : institution.color === "blue"
                                            ? "text-blue-400"
                                            : "text-green-400"
                                        }`}
                                >
                                    {institution.label}
                                </h3>
                                <div className="space-y-3">
                                    {institution.items.map((item, j) => (
                                        <div key={j} className="flex items-center justify-between gap-3">
                                            <span className="text-gray-400 text-xs">{item.q}</span>
                                            <StatusBadge status={item.s} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* The No Comment Doctrine */}
                <section className="mb-12 sm:mb-16 md:mb-24">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4">
                        <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                            The "No Comment" Doctrine
                        </h2>
                    </div>
                    <p className="text-gray-400 text-sm mb-8 max-w-3xl leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
                        Penn State's Graham Spanier was cross-examined under oath. Michigan State's Lou Anna Simon
                        resigned within hours of sentencing. Seton Hall's response to every inquiry has been
                        two words. We accept it as their answer.
                    </p>

                    <div className="overflow-x-auto border border-gray-800 rounded-lg">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-yellow-600/50">
                                    <th className="text-left p-3 bg-gray-900 font-mono text-[10px] uppercase tracking-widest text-gray-500">Date</th>
                                    <th className="text-left p-3 bg-gray-900 font-mono text-[10px] uppercase tracking-widest text-gray-500">Entity</th>
                                    <th className="text-left p-3 bg-gray-900 font-mono text-[10px] uppercase tracking-widest text-gray-500">Context</th>
                                    <th className="text-left p-3 bg-gray-900 font-mono text-[10px] uppercase tracking-widest text-yellow-600">Response</th>
                                </tr>
                            </thead>
                            <tbody>
                                {noCommentLog.map((row, i) => (
                                    <tr key={i} className="border-b border-gray-800/50 hover:bg-white/[0.02]">
                                        <td className="p-3 text-gray-500 font-mono text-xs whitespace-nowrap">{row.date}</td>
                                        <td className="p-3 text-gray-400 font-semibold">{row.entity}</td>
                                        <td className="p-3 text-gray-400">{row.context}</td>
                                        <td className="p-3 text-yellow-500 font-bold italic">"{row.response}"</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 p-6 bg-yellow-950/10 border border-yellow-900/30 rounded-lg">
                        <p className="text-yellow-200/80 text-sm leading-relaxed italic" style={{ fontFamily: "'Lora', serif" }}>
                            As journalists, we accept "no comment" as the answer. It means what it means: the institution
                            has been given the opportunity to dispute, clarify, or correct the record — and has
                            chosen not to. Every silence is published. Every silence is permanent.
                        </p>
                    </div>
                </section>

                {/* What Should Have Happened */}
                <section className="mb-12 sm:mb-16 md:mb-24">
                    <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-zinc-700 mb-8">Based on Precedent: What Should Have Happened</h2>
                    <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 sm:p-8 md:p-10 space-y-4 sm:space-y-6 text-gray-300 leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
                        <p>
                            If Seton Hall University were held to the same standard as Penn State or Michigan State,
                            the following would have occurred:
                        </p>
                        <ol className="list-decimal list-inside space-y-4 pl-4">
                            <li>
                                <strong className="text-zinc-900">The Latham Report would have been released to the public</strong> — as the Freeh
                                Report was at Penn State. Instead, it has been sealed for six years and its
                                release was resisted by counsel who was subsequently sanctioned.
                            </li>
                            <li>
                                <strong className="text-zinc-900">The university president would have been removed</strong> — as Spanier was at
                                Penn State and Simon was at Michigan State. Instead, Joseph Reilly — whose career
                                was built within the McCarrick network — was promoted to the presidency.
                            </li>
                            <li>
                                <strong className="text-zinc-900">University officials who failed to act on abuse reports would face criminal charges</strong> — as
                                Curley and Schultz did at Penn State. No official at Seton Hall or the Archdiocese
                                of Newark has been criminally charged in connection with the McCarrick cover-up.
                            </li>
                            <li>
                                <strong className="text-zinc-900">A financial settlement would have been negotiated</strong> — Penn State paid $109M,
                                Michigan State paid $500M. Seton Hall's 450+ plaintiffs have received nothing.
                            </li>
                            <li>
                                <strong className="text-zinc-900">The Department of Education would have investigated and imposed fines</strong> — as
                                it did at both Penn State ($2.4M) and Michigan State ($4.5M). No such action
                                has been taken against Seton Hall.
                            </li>
                            <li>
                                <strong className="text-zinc-900">Whistleblowers would have been protected, not pursued</strong> — McQueary won a
                                $12M whistleblower suit. Denhollander was named to the Time 100. Seton Hall's
                                whistleblower was targeted with a criminal grand jury subpoena.
                            </li>
                        </ol>
                    </div>
                </section>

                {/* Closing */}
                <div className="bg-gray-950 border-2 border-red-900/50 rounded-lg p-6 sm:p-8 md:p-12 text-center mb-12 sm:mb-16">
                    <p className="text-xl sm:text-2xl md:text-3xl font-black italic mb-4 sm:mb-6 text-zinc-900 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                        "The pattern is not a coincidence.<br />It is a playbook."
                    </p>
                    <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm" style={{ fontFamily: "'Lora', serif" }}>
                        Every institution that has faced a reckoning for enabling sexual abuse has followed the
                        same arc: suppress, promote, attack — and then, when the seal breaks, pay. The only
                        variable is when the seal breaks. At Penn State, it took a grand jury. At Michigan State,
                        it took a single brave survivor. At Seton Hall, the seal is breaking now — and the
                        institution's only response has been: "No comment."
                    </p>
                </div>

                <div className="text-center">
                    <Link href="/">
                        <a className="inline-block bg-red-600 hover:bg-red-700 text-zinc-900 px-8 py-3 rounded font-bold transition-colors">
                            Return to Investigation
                        </a>
                    </Link>
                </div>
            </main>
        </div>
    );
}
