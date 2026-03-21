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
  const pillars = [
    { id: 'I', title: 'THE ORIGIN', path: '/origin', desc: 'How the abuse and cover-up started, and why no one spoke up.', icon: Factory },
    { id: 'II', title: 'THE COVER-UP', path: '/coverup', desc: 'How powerful people and organizations worked together to hide the truth.', icon: Shield },
    { id: 'III', title: 'THE BREACH', path: '/breach', desc: 'The moment the secret files were forced open by the court.', icon: Zap },
    { id: 'IV', title: 'THE SUCCESSION', path: '/succession', desc: 'Who is in charge now, and what happens next.', icon: Crown },
    { id: 'V', title: 'OPINION', path: '/opinion', desc: 'Different views on why this disaster happened.', icon: FileText },
    { id: 'VI', title: 'THE LEDGER', path: '/ledger', desc: 'A list of every person involved and what they did.', icon: Users },
    { id: 'VII', title: 'THE VAULT', path: '/vault', desc: 'Direct access to all 24,000 pages of the actual evidence.', icon: Archive }
  ];

  return (
    <>
      <style>{`
        .landing-container {
          position: relative;
          min-height: 100vh;
          width: 100%;
          background-color: black;
          background-image: url('/assets/bosch_triptych_clean.jpg');
          background-size: contain;
          background-position: center top;
          background-repeat: no-repeat;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 15vh;
        }
        
        @media (min-width: 1024px) {
          .landing-container {
            background-size: 100% auto;
            padding-top: 12vh;
          }
        }
        
        .title-block {
          text-align: center;
          z-index: 10;
          margin-bottom: 4rem;
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

        .enter-btn {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #faf6ee;
          border-bottom: 2px solid transparent;
          padding: 0.5rem 2rem;
          transition: all 0.5s ease;
          margin-bottom: 8rem;
          z-index: 20;
        }

        .enter-btn:hover {
          color: #a1a1aa;
          border-color: #a1a1aa;
        }
      `}</style>
      <div className="landing-container">
        <div className="title-block">
          <h1 className="title-overlay">Sodom Hall</h1>
          <p className="subtitle-overlay">The Architecture of Silence</p>
        </div>

        <Link href="/cathedral">
          <a className="enter-btn">
            Access The Investigation
          </a>
        </Link>

        {/* Exposed Architecture Grid */}
        <div className="w-full bg-zinc-950 border-t border-zinc-900 py-16 px-4 lg:px-12 flex flex-col items-center">
          <div className="max-w-7xl w-full">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl text-zinc-300 mb-2 uppercase tracking-tighter">Site Architecture</h2>
              <p className="text-zinc-500 font-serif italic text-lg uppercase tracking-widest">Index of Documentation</p>
              <div className="h-px w-32 bg-zinc-800 mx-auto mt-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 mb-16">
              {pillars.map((p) => (
                <Link key={p.id} href={p.path}>
                  <a className="group relative bg-zinc-900 border border-zinc-800 hover:border-zinc-600 p-6 rounded-lg transition-all duration-300 flex flex-col items-center text-center">
                    <span className="text-zinc-500 font-mono text-[10px] block mb-4 tracking-[0.3em]">SECTION {p.id}</span>
                    <p.icon className="w-8 h-8 text-zinc-400 mb-4 group-hover:text-zinc-200 transition-colors" />
                    <h3 className="text-sm font-bold text-zinc-100 mb-2 uppercase tracking-widest">{p.title}</h3>
                    <p className="text-xs text-zinc-400 font-serif italic leading-relaxed">
                      {p.desc}
                    </p>
                    {/* Tooltip hint indicator */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-zinc-800 text-xs px-2 py-1 rounded text-zinc-300 font-mono shadow-lg">Open <ChevronRight className="w-3 h-3 inline" /></div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center text-[10px] text-zinc-600 uppercase tracking-[0.5em] font-mono">
              SodomHall.com — An Investigation into Institutional Betrayal
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
