import { Link } from "wouter";

export default function Portal() {
  return (
    <div className="min-h-screen bg-black text-white font-serif flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: "url('/assets/images/paper_texture.png')" }}></div>

      <div className="z-10 max-w-4xl w-full space-y-12 text-center">
        <div className="space-y-4 animate-in fade-in duration-1000 slide-in-from-top-8">
          <h1 className="text-5xl md:text-7xl font-display uppercase tracking-tighter text-white text-shadow-blood">
            The Franchisor
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 italic font-serif max-w-2xl mx-auto">
            "Two generations of corruption. One common source."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {/* McCarrick Dossier Card */}
          <Link href="/endgame/mccarrick">
            <div className="group cursor-pointer relative h-[400px] border border-gray-800 hover:border-destructive transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>
              <img
                src="/assets/images/mccarrick_portrait.jpg"
                alt="Theodore McCarrick"
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-left transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="block text-destructive font-mono text-xs uppercase tracking-widest mb-2">Case File #2018-TM</span>
                <h2 className="text-3xl font-display uppercase text-white mb-2 group-hover:text-shadow-blood transition-all">
                  The Architect
                </h2>
                <p className="text-sm text-gray-300 line-clamp-2 group-hover:text-white transition-colors">
                  The rise and fall of Theodore McCarrick, the predator who built the pipeline.
                </p>
              </div>
            </div>
          </Link>

          {/* Checchio Dossier Card */}
          <Link href="/endgame/checchio">
            <div className="group cursor-pointer relative h-[400px] border border-gray-800 hover:border-destructive transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>
              <img
                src="/assets/images/checchio_portrait.jpg"
                alt="James Checchio"
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-left transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="block text-destructive font-mono text-xs uppercase tracking-widest mb-2">Case File #2026-JC</span>
                <h2 className="text-3xl font-display uppercase text-white mb-2 group-hover:text-shadow-blood transition-all">
                  The Protégé
                </h2>
                <p className="text-sm text-gray-300 line-clamp-2 group-hover:text-white transition-colors">
                  James Checchio: The Newark export sent to bury the past in New Orleans.
                </p>
              </div>
            </div>
          </Link>

          {/* Reilly Dossier Card */}
          <Link href="/endgame/reilly">
            <div className="group cursor-pointer relative h-[400px] border border-gray-800 hover:border-destructive transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>
              <img
                src="/assets/figures/reilly_portrait.jpg"
                alt="Joseph Reilly"
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-left transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="block text-destructive font-mono text-xs uppercase tracking-widest mb-2">Case File #2026-SHU</span>
                <h2 className="text-3xl font-display uppercase text-white mb-2 group-hover:text-shadow-blood transition-all">
                  The Face of Impunity
                </h2>
                <p className="text-sm text-gray-300 line-clamp-2 group-hover:text-white transition-colors">
                  Joseph Reilly: Protected and promoted to President of Seton Hall University.
                </p>
              </div>
            </div>
          </Link>

          {/* Martin Dossier Card */}
          <Link href="/endgame/martin">
            <div className="group cursor-pointer relative h-[400px] border border-gray-800 hover:border-destructive transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>
              <img
                src="/assets/images/martin_portrait.png"
                alt="Ken Martin"
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-left transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="block text-destructive font-mono text-xs uppercase tracking-widest mb-2">Case File #1989-KM</span>
                <h2 className="text-3xl font-display uppercase text-white mb-2 group-hover:text-shadow-blood transition-all">
                  The Enforcer
                </h2>
                <p className="text-sm text-gray-300 line-clamp-2 group-hover:text-white transition-colors">
                  Ken Martin: Serial abuser laundered through the system to serve McCarrick.
                </p>
              </div>
            </div>
          </Link>

          {/* Lorenzo Dossier Card */}
          <Link href="/endgame/lorenzo">
            <div className="group cursor-pointer relative h-[400px] border border-gray-800 hover:border-destructive transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>
              <img
                src="/assets/images/lorenzo_portrait.jpg"
                alt="Elias Lorenzo"
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-left transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="block text-destructive font-mono text-xs uppercase tracking-widest mb-2">Case File #1980-EL</span>
                <h2 className="text-3xl font-display uppercase text-white mb-2 group-hover:text-shadow-blood transition-all">
                  The Rehabilitated
                </h2>
                <p className="text-sm text-gray-300 line-clamp-2 group-hover:text-white transition-colors">
                  Elias Lorenzo: Kicked out for deviant conduct, rebranded, and elevated to Bishop.
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="pt-12 border-t border-gray-900">
          <p className="text-xs text-gray-600 font-mono uppercase tracking-widest">
            Confidential Dossier • Restricted Access • 2026
          </p>
        </div>
      </div>
    </div>
  );
}
