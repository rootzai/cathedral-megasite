import React from "react";
import { SmartImage } from "@/components/SmartImage";

export function HomeMedia() {
    const assets = [
        { src: "/assets/Unholy.png", title: "The Unholy Trinity" },
        { src: "/assets/Blessmefather.png", title: "Bless Me Father" },
        { src: "/assets/BetterScrivocall.png", title: "Better Call Scrivo" },
        { src: "/assets/Mostlikely.png", title: "Most Likely" },
        { src: "/assets/HallofShame.png", title: "Hall of Shame" },
        { src: "/assets/pyramidscheme.png", title: "Pyramid Scheme" },
        { src: "/assets/goddamnright.png", title: "Goddamn Right" },
        { src: "/assets/Devillikesyourwork.png", title: "Devil Likes Your Work" },
        { src: "/assets/letuspray.png", title: "Let Us Pray" },
        { src: "/assets/who_speaks_scrivo.png", title: "Who Speaks for Scrivo" },
        { src: "/assets/inpractice.png", title: "In Practice" },
        { src: "/assets/canonlaw404.png", title: "Canon Law 404" },
        { src: "/assets/Beachhouseonce.png", title: "Beach House Once" },
        { src: "/assets/Bridgeclosing.png", title: "Bridge Closing" },
        { src: "/assets/degreeindenial.png", title: "Degree in Denial" },
        { src: "/assets/Incenseandholywater.png", title: "Incense & Holy Water" },
        { src: "/assets/truth_latham_report.png", title: "Truth: Latham Report" },
        { src: "/assets/smoking-gun-clean.png", title: "Smoking Gun" },
        { src: "/assets/Saulonsword.png", title: "Saul on Sword", downloadUrl: "/assets/images/Saulonsword.png" },
        { src: "/assets/mccarrick_with_jpii.png", title: "McCarrick with JPII" },
        { src: "/assets/jpii_with_cardinals.png", title: "JPII with Cardinals" },
        { src: "/assets/pope_francis_religious_leaders.png", title: "Pope Francis" },
        { src: "/assets/pope_jpii_giants_stadium.png", title: "JPII at Giants Stadium" },
    ];

    return (
        <section id="share" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 bg-gradient-to-b from-black to-gray-900 border-t border-red-900/10 text-zinc-900">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">Share This Report</h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-400 text-center mb-8 sm:mb-12">Download and share these images. The truth deserves to go viral.</p>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                    {assets.map((item, idx) => (
                        <div key={idx} className="text-center group">
                            <div className="overflow-hidden rounded-lg shadow-2xl mb-4 border-4 border-transparent group-hover:border-zinc-300 transition-all aspect-square flex items-center justify-center bg-zinc-50">
                                <SmartImage src={item.src} alt={item.title} className="w-full transform group-hover:scale-105 transition-transform" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                            <a href={item.downloadUrl || item.src} download className="inline-block bg-red-600 hover:bg-red-700 text-zinc-900 px-4 py-2 rounded text-sm font-bold transition-colors">
                                Download
                            </a>
                        </div>
                    ))}
                </div>

                <div className="mt-10 sm:mt-16 p-4 sm:p-8 bg-zinc-50 border-2 border-red-900/20 rounded-lg text-center">
                    <p className="text-gray-400 italic">
                        This investigation persists through the preservation of primary source documents.
                    </p>
                </div>
            </div>
        </section>
    );
}
