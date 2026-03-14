import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, Info } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'wouter';

export default function LandingPage() {
  const [showLogic, setShowLogic] = useState(false);

  const pillars = [
    { id: '01', title: 'CATHEDRAL', path: '/cathedral', desc: 'The Master Narrative' },
    { id: '02', title: 'RULING', path: '/ruling', desc: 'The Legal Breach' },
    { id: '03', title: 'FRANCHISE', path: '/endgame', desc: 'Institutional Players' },
    { id: '04', title: 'EPSTEIN', path: '/epstein', desc: 'Cross-Network Nexus' },
    { id: '05', title: 'CHURCH BK', path: '/church-bk', desc: 'Financial Ledger' },
    { id: '06', title: 'THEY KNEW', path: '/they-knew', desc: 'Complicity Matrix' },
    { id: '07', title: 'ARCHITECTURE', path: '/expose', desc: 'Forensic Exhibits' }
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
          z-index: 20;
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
              className="absolute inset-0 z-30 bg-black/95 flex items-center justify-center p-8 overflow-y-auto"
            >
              <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center py-20">
                <div className="order-2 lg:order-1">
                  <h2 className="font-heading text-4xl text-gold mb-2 uppercase tracking-tighter">Site Logic</h2>
                  <p className="text-parchment/60 font-serif italic mb-12">Mapping the Seven Pillars of Forensic Exposure</p>

                  <div className="space-y-4">
                    {pillars.map((p) => (
                      <Link key={p.id} href={p.path}>
                        <a className="group flex items-center justify-between p-4 border-l-2 border-red-900/30 hover:border-red-600 bg-zinc-950/40 transition-all hover:bg-zinc-900/60">
                          <div>
                            <span className="text-red-600 font-mono text-[10px] block mb-1">{p.id}</span>
                            <span className="text-parchment font-bold text-sm tracking-widest uppercase">{p.title}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-zinc-500 font-serif italic text-xs opacity-0 group-hover:opacity-100 transition-opacity">{p.desc}</span>
                            <ChevronRight className="w-4 h-4 text-zinc-700 group-hover:text-red-600" />
                          </div>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="order-1 lg:order-2 relative aspect-[4/5] lg:aspect-square">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="absolute inset-0 rounded-lg border border-red-900/20 overflow-hidden shadow-2xl shadow-red-900/10"
                  >
                    <img
                      src="/assets/site_logic_triptych_style_1773527451986.png"
                      alt="The Architecture of Silence"
                      className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000 cursor-crosshair"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
