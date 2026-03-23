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
    { id: 'I', title: 'THE ORIGIN', path: '/origin/martin', desc: 'The 1980s warnings at the Newark seminary and the grooming of the "nephews" network.', icon: Factory },
    { id: 'II', title: 'THE COVER-UP', path: '/coverup/financial', desc: 'Six years of systematic concealment: How a 24,000-page report was buried in a SCIF.', icon: Shield },
    { id: 'III', title: 'EPSTEIN NEXUS', path: '/expose/epstein-nexus', desc: 'The lead investigator was in intimate contact with Jeffrey Epstein during the probe.', icon: Zap },
    { id: 'IV', title: 'THE SUCCESSION', path: '/succession/regime', desc: 'The 2024 installation of the old guard to preserve the institutional machine.', icon: Crown },
    { id: 'X', title: 'THE SUBPOENA', path: '/breach/whistleblowers', desc: 'The fabricated crime: A grand jury subpoena to Google to silence a whistleblower.', icon: FileText },
    { id: 'XI', title: 'THE MANDATE', path: '/breach/courtroom', desc: 'Judge Avion Benjamin\'s landmark ruling that shattered the Architecture of Silence.', icon: Archive }
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

        .survivor-link {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 50;
          background: rgba(185, 28, 28, 0.9);
          color: white;
          padding: 0.75rem 1.5rem;
          font-family: 'Lora', serif;
          font-size: 0.8rem;
          font-style: italic;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(8px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.3s ease;
        }

        .survivor-link:hover {
          transform: translateY(-4px);
          background: rgb(185, 28, 28);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.6);
        }
      `}</style>
      <div className="landing-container">
        {/* Floating Survivor Link */}
        <a
          href="https://www.rainn.org"
          target="_blank"
          rel="noopener noreferrer"
          className="survivor-link"
        >
          <Info size={16} />
          Survivor Resources Center
        </a>

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
        <div className="w-full bg-zinc-50 border-t border-zinc-300 py-16 px-4 lg:px-12 flex flex-col items-center">
          <div className="max-w-7xl w-full">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl text-zinc-800 mb-2 uppercase tracking-tighter">Site Architecture</h2>
              <p className="text-zinc-600 font-serif italic text-lg uppercase tracking-widest">Index of Documentation</p>
              <div className="h-px w-32 bg-zinc-200 mx-auto mt-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-16">
              {pillars.map((p) => (
                <Link key={p.id} href={p.path}>
                  <a className="group relative bg-zinc-100 border border-zinc-300 hover:border-zinc-600 p-6 rounded-lg transition-all duration-300 flex flex-col items-center text-center">
                    <span className="text-zinc-400 font-mono text-xs block mb-4 tracking-[0.3em]">SECTION {p.id}</span>
                    <p.icon className="w-8 h-8 text-zinc-400 mb-4 group-hover:text-zinc-200 transition-colors" />
                    <h3 className="text-sm font-bold text-zinc-100 mb-2 uppercase tracking-widest">{p.title}</h3>
                    <p className="text-sm text-zinc-300 font-serif italic leading-relaxed">
                      {p.desc}
                    </p>
                    {/* Tooltip hint indicator */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-zinc-200 text-xs px-2 py-1 rounded text-zinc-800 font-mono shadow-lg">Open <ChevronRight className="w-3 h-3 inline" /></div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center text-xs text-zinc-500 uppercase tracking-[0.5em] font-mono">
              SodomHall.com — An Investigation into Institutional Betrayal
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
