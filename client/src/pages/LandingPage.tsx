import { AnimatePresence, motion } from 'framer-motion';
import {
  Archive,
  ChevronRight,
  Crown,
  Factory,
  FileText,
  Info,
  Shield,
  Users,
  Zap
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'wouter';



export default function LandingPage() {
  const [showLogic, setShowLogic] = useState(false);

  const pillars = [
    { id: 'I', title: 'THE ORIGIN', path: '/origin', desc: 'How the machine was built in silence.', icon: Factory },
    { id: 'II', title: 'THE COVER-UP', path: '/coverup', desc: 'The institutional walls that held the line.', icon: Shield },
    { id: 'III', title: 'THE BREACH', path: '/breach', desc: 'The day the legal seal finally shattered.', icon: Zap },
    { id: 'IV', title: 'THE SUCCESSION', path: '/succession', desc: 'The next regime and the future horizon.', icon: Crown },
    { id: 'V', title: 'OPINION', path: '/opinion', desc: 'Four perspectives on a moral catastrophe.', icon: FileText },
    { id: 'VI', title: 'THE LEDGER', path: '/ledger', desc: 'A forensic index of every name involved.', icon: Users },
    { id: 'VII', title: 'THE VAULT', path: '/vault', desc: 'Direct access to 24,000 pages of evidence.', icon: Archive }
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
          background: rgba(250, 246, 238, 0.1);
          border-color: rgba(250, 246, 238, 0.4);
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
          color: #a1a1aa;
          border-color: #a1a1aa;
        }
      `}</style>
      <div className="landing-container">
        <div className={`title-block ${showLogic ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100'}`}>
          <h1 className="title-overlay">Sodom Hall</h1>
          <p className="subtitle-overlay">The Architecture of Silence</p>
        </div>

        <Link href="/expose">
          <a className={`enter-btn ${showLogic ? 'opacity-0' : 'opacity-100'}`}>
            Access The Audit
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 mb-16">
                  {pillars.map((p) => (
                    <Link key={p.id} href={p.path}>
                      <a className="group bg-zinc-950 border border-zinc-900 hover:border-zinc-700 p-6 rounded-lg transition-all duration-500 flex flex-col items-center text-center">
                        <span className="text-zinc-600 font-mono text-[10px] block mb-4 tracking-[0.3em]">{p.id}</span>
                        <p.icon className="w-8 h-8 text-zinc-500 mb-4 group-hover:text-zinc-300 transition-colors" />
                        <h3 className="text-sm font-bold text-zinc-100 mb-2 uppercase tracking-widest">{p.title}</h3>
                        <p className="text-[10px] text-zinc-500 font-serif italic leading-relaxed">
                          {p.desc}
                        </p>
                        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ChevronRight className="w-4 h-4 text-zinc-500" />
                        </div>
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
