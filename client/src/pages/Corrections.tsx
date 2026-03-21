import { Link } from "wouter";
import { CheckCircle, Mail, Clock } from "lucide-react";

export default function Corrections() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-zinc-900">
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-zinc-300">
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

            <main className="container mx-auto px-3 sm:px-4 py-12 sm:py-16 md:py-24 max-w-3xl">

                {/* Header */}
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.5em] text-zinc-700 mb-4 sm:mb-6">Public Record</p>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6 tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Corrections &<br />Clarifications
                    </h1>
                    <div className="w-16 sm:w-24 h-1 bg-red-600 mx-auto mb-6 sm:mb-8" />
                    <p className="text-base sm:text-lg md:text-xl text-gray-400 italic max-w-xl mx-auto leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
                        A public log of every factual correction requested by any party documented on this site.
                    </p>
                </div>

                {/* The Empty Record */}
                <section className="mb-12 sm:mb-16 md:mb-20">
                    <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 sm:p-12 md:p-16 text-center">
                        <CheckCircle className="w-10 h-10 sm:w-16 sm:h-16 text-green-600/40 mx-auto mb-4 sm:mb-6" />
                        <h2 className="text-2xl font-bold mb-4 text-gray-300">No Corrections Requested</h2>
                        <p className="text-gray-500 max-w-lg mx-auto leading-relaxed mb-8">
                            No corrections have been requested or required since this site's publication.
                            This page will be updated if any factual error is identified by any party.
                        </p>
                        <div className="flex items-center justify-center gap-2 text-gray-600 text-sm font-mono">
                            <Clock className="w-4 h-4" />
                            Last reviewed: March 19, 2026
                        </div>
                    </div>
                </section>

                {/* The Record of Silence */}
                <section className="mb-12 sm:mb-16 md:mb-20">
                    <h2 className="text-[10px] sm:text-sm font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-zinc-700 mb-4 sm:mb-6">Institutional Response Log</h2>
                    <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 sm:p-8 md:p-10">
                        <p className="text-gray-300 leading-relaxed mb-6">
                            To date, <strong className="text-zinc-900">no counsel</strong> for Seton Hall University, the Archdiocese
                            of Newark, or any individual named on this site has contacted the operators of this
                            publication to dispute any factual claim.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            No cease-and-desist letter has been received. No demand for retraction has been issued.
                            No correction has been requested.
                        </p>
                        <p className="text-gray-400 italic leading-relaxed text-sm">
                            We note that the institutions documented herein retain some of the most aggressive
                            litigation counsel in New Jersey — firms that have demonstrated a willingness to
                            pursue whistleblowers across state lines using criminal grand jury subpoenas.
                            Their silence toward this publication is itself a data point.
                        </p>
                    </div>
                </section>

                {/* Demand Letter Policy */}
                <section className="mb-12 sm:mb-16 md:mb-20">
                    <h2 className="text-[10px] sm:text-sm font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-zinc-700 mb-4 sm:mb-6">Demand Letter Policy</h2>
                    <div className="bg-zinc-100/20 border border-red-900/50 rounded-lg p-6 sm:p-8 md:p-10">
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Any legal demand, cease-and-desist notice, or takedown request directed at this
                            publication will be <strong className="text-red-400">published in full on this page</strong>, redacted
                            only as required by law. We believe the public has a right to know when
                            institutions attempt to suppress reporting on matters of public concern.
                        </p>
                        <p className="text-gray-400 text-sm italic">
                            We do not retract documented facts. We welcome corrections to factual errors.
                            There is a difference.
                        </p>
                    </div>
                </section>

                {/* Request a Correction */}
                <section className="mb-16">
                    <h2 className="text-[10px] sm:text-sm font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-zinc-700 mb-4 sm:mb-6">Request a Correction</h2>
                    <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 sm:p-8 md:p-10">
                        <p className="text-gray-300 leading-relaxed mb-6">
                            If you believe any factual claim on this site is in error, we invite you to
                            identify it. Corrections must specify:
                        </p>
                        <ol className="list-decimal list-inside space-y-3 text-gray-400 mb-8 pl-4">
                            <li>The specific factual claim alleged to be incorrect</li>
                            <li>The correct information, with supporting documentation</li>
                            <li>The identity of the requesting party (anonymous corrections will be reviewed but not published)</li>
                        </ol>
                        <div className="flex items-center gap-3 text-gray-500">
                            <Mail className="w-5 h-5" />
                            <span className="text-sm">Contact information available on the <Link href="/about"><a className="text-red-400 hover:text-red-300 underline">About page</a></Link></span>
                        </div>
                    </div>
                </section>

                <div className="text-center pt-8 border-t border-gray-800">
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
