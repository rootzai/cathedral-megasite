import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, Info } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'wouter';

export default function LandingPage() {
  const [showLogic, setShowLogic] = useState(false);

  const pillars = [
    { id: '01', title: 'THE ORIGIN', path: '/origin', desc: 'The Machine is Built' },
    { id: '02', title: 'THE COVER-UP', path: '/coverup', desc: 'The Institutional Protection' },
    { id: '03', title: 'THE BREACH', path: '/breach', desc: 'The Vault is Unsealed' },
    { id: '04', title: 'THE SUCCESSION', path: '/succession', desc: 'The Existential Horizon' },
    { id: '05', title: 'THE LEDGER', path: '/ledger', desc: 'Complicity Matrix' },
    { id: '06', title: 'THE VAULT', path: '/vault', desc: 'Forensic Documents' }
  ];

  return (
    <>
      <style>{`
        .landing-container {
          position: relative;
          height: 100vh;
          width: 100%;
          background-color: black;
          background-image: url('/assets/bosch_triptych_clean.jpg');
          background-size: contain;
          background-position: center 10%;
          background-repeat: no-repeat;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-top: 15vh;
          overflow: hidden;
        }
        
        @media (min-width: 1024px) {
          .landing-container {
            background-size: cover;
            background-position: center;
            padding-top: 12vh;
          }
        }
        
        .title-block {
          text-align: center;
          z-index: 10;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .title-overlay {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: clamp(3rem, 8vw, 7rem);
          color: #faf6ee;
          letter-spacing: 0.15em;
          text-shadow: 0px 8px 30px rgba(0, 0, 0, 0.9), 0px 4px 15px rgba(0, 0, 0, 0.7);
          text-transform: uppercase;
          line-height: 1;
          margin: 0;
        }

        .subtitle-overlay {
          font-family: 'Lora', serif;
          font-size: clamp(0.9rem, 2vw, 1.2rem);
          color: rgba(250, 246, 238, 0.8);
          letter-spacing: 0.4em;
          margin-top: 1rem;
          font-style: italic;
          text-shadow: 0px 4px 15px rgba(0, 0, 0, 0.9);
          text-transform: uppercase;
        }

        .logic-trigger {
          position: absolute;
          bottom: 4rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 50;
          background: rgba(0,0,0,0.6);
          border: 1px solid rgba(250, 246, 238, 0.2);
          color: #faf6ee;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          font-family: 'Playfair Display', serif;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-size: 0.75rem;
          display: flex;
          items-center;
          gap: 0.5rem;
          backdrop-blur: sm;
          transition: all 0.3s ease;
        }

        .logic-trigger:hover {
          background: rgba(185, 28, 28, 0.4);
          border-color: rgba(185, 28, 28, 0.6);
        }

        .enter-btn {
          position: absolute;
          bottom: 8rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #faf6ee;
          border-bottom: 2px solid transparent;
          padding: 0.5rem 2rem;
          transition: all 0.5s ease;
        }

        .enter-btn:hover {
          color: #dc2626;
          border-color: #dc2626;
          text-shadow: 0 0 20px rgba(220, 38, 38, 0.4);
        }
      `}</style>
      <div className="landing-container">
        <div className={`title-block ${showLogic ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100'}`}>
          <h1 className="title-overlay">Sodom Hall</h1>
          <p className="subtitle-overlay">The Architecture of Silence</p>
        </div>

        <Link href="/cathedral">
          <a className={`enter-btn ${showLogic ? 'opacity-0' : 'opacity-100'}`}>
            Enter The Vault
          </a>
        </Link>

        <button
          className="logic-trigger"
          onClick={() => setShowLogic(!showLogic)}
        >
          <Info className="w-4 h-4" />
          {showLogic ? 'Hide Architecture' : 'Examine Architecture'}
        </button>

        <AnimatePresence>
          {showLogic && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-30 bg-black/98 flex items-center justify-center p-4 lg:p-12 overflow-y-auto"
            >
              <div className="max-w-7xl w-full py-12">
                <div className="text-center mb-16">
                  <h2 className="font-heading text-6xl text-gold mb-2 uppercase tracking-tighter">The Triptych of Exposure</h2>
                  <p className="text-zinc-500 font-serif italic text-lg uppercase tracking-widest">Site Architecture & Narrative Logic</p>
                  <div className="h-px w-32 bg-red-600/50 mx-auto mt-6" />
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                  {/* Panel I: The Descent */}
                  <div className="bg-zinc-950/60 border border-red-900/20 p-8 rounded-lg group hover:border-red-600/40 transition-all duration-500">
                    <span className="text-red-600 font-mono text-xs block mb-4 tracking-[0.3em]">PANEL I</span>
                    <h3 className="text-2xl font-bold text-parchment mb-4 uppercase tracking-tighter">The Descent</h3>
                    <p className="text-zinc-500 font-serif italic mb-6 text-sm">Institutional Betrayal</p>
                    <div className="prose prose-invert prose-sm text-zinc-400 leading-relaxed mb-8">
                      <p>For four decades, the McCarrick network flourished within an <strong>"Architecture of Silence."</strong> This panel maps the foundational corruption: the grooming of seminarians, the strategic placement of protégés, and the "Closed Loop" of New Jersey legal and judicial power built to protect the establishment.</p>
                      <p className="mt-4">The Cathedral narrative (Acts I-VI) identifies the twelve clergymen and the board members who chose institutional reputation over the safety of the vulnerable.</p>
                    </div>
                    <Link href="/cathedral">
                      <a className="inline-flex items-center gap-2 text-xs font-bold text-zinc-500 group-hover:text-red-500 transition-colors uppercase tracking-widest">
                        Enter The Cathedral <ChevronRight className="w-3 h-3" />
                      </a>
                    </Link>
                  </div>

                  {/* Panel II: The Breach */}
                  <div className="bg-zinc-900/40 border border-red-600/30 p-8 rounded-lg transform lg:-translate-y-4 shadow-2xl shadow-red-900/10 group hover:bg-zinc-900/60 transition-all duration-500">
                    <span className="text-red-600 font-mono text-xs block mb-4 tracking-[0.3em]">PANEL II</span>
                    <h3 className="text-2xl font-bold text-parchment mb-4 uppercase tracking-tighter">The Breach</h3>
                    <p className="text-zinc-500 font-serif italic mb-6 text-sm">The Legal Unsealing</p>
                    <div className="prose prose-invert prose-sm text-zinc-400 leading-relaxed mb-8">
                      <p>November 12, 2025. The day the veil was pierced. <strong>Judge Avion Benjamin</strong> ordered the release of the suppressed Latham and Gibbons reports, ending six years of University litigation.</p>
                      <p className="mt-4 text-zinc-300">This center panel represents the breakthrough—where the "Closed Loop" failed and the first 20,500 pages of evidence were forced into the light.</p>
                    </div>
                    <Link href="/ruling">
                      <a className="inline-flex items-center gap-2 text-xs font-bold text-zinc-500 group-hover:text-red-500 transition-colors uppercase tracking-widest">
                        Examine The Ruling <ChevronRight className="w-3 h-3" />
                      </a>
                    </Link>
                  </div>

                  {/* Panel III: The Reckoning */}
                  <div className="bg-zinc-950/60 border border-red-900/20 p-8 rounded-lg group hover:border-red-600/40 transition-all duration-500">
                    <span className="text-red-600 font-mono text-xs block mb-4 tracking-[0.3em]">PANEL III</span>
                    <h3 className="text-2xl font-bold text-parchment mb-4 uppercase tracking-tighter">The Reckoning</h3>
                    <p className="text-zinc-500 font-serif italic mb-6 text-sm">Forensic Exhibits</p>
                    <div className="prose prose-invert prose-sm text-zinc-400 leading-relaxed mb-8">
                      <p>The final exposure: 24,000 pages of previously suppressed records. Title IX logs, Board Risk Committee minutes, and the <strong>Rabner Dossier</strong>.</p>
                      <p className="mt-4">This panel catalogs the physical evidence of institutional fraud against the State of New Jersey and the individual survivors who stood against the McCarrick legacy. The Architecture of Silence has been replaced by the Architecture of Exposure.</p>
                    </div>
                    <Link href="/expose">
                      <a className="inline-flex items-center gap-2 text-xs font-bold text-zinc-500 group-hover:text-red-500 transition-colors uppercase tracking-widest">
                        Review Exhibits <ChevronRight className="w-3 h-3" />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {pillars.map((p) => (
                    <Link key={p.id} href={p.path}>
                      <a className="group p-4 border border-zinc-900 bg-zinc-950/40 hover:bg-red-950/20 hover:border-red-600/50 transition-all text-center">
                        <span className="text-red-600 font-mono text-[8px] block mb-1 opacity-60">{p.id}</span>
                        <span className="text-parchment font-bold text-[10px] tracking-widest uppercase block mb-1">{p.title}</span>
                        <span className="text-[9px] text-zinc-600 italic font-serif hidden lg:block">{p.desc}</span>
                      </a>
                    </Link>
                  ))}
                </div>

                <div className="mt-12 text-center text-[10px] text-zinc-600 uppercase tracking-[0.5em] font-mono">
                  SodomHall.com — An Investigation into Institutional Betrayal
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
