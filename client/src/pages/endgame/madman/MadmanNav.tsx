import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';

export default function MadmanNav() {
  const [location, setLocation] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Normalize path to check active state
  const isActive = (path: string) => {
    // Exact match for home
    if (path === '/madman') {
      return location === '/madman' || location === '/madman/';
    }
    return location === path || location.startsWith(`${path}/`);
  };

  const navLinks = [
    { label: 'HOME', path: '/madman', tagline: 'The Dossier' },
    { label: 'PART 0', path: '/madman/the-machine', tagline: 'The Machine' },
    { label: 'PART I', path: '/madman/exhibit-a', tagline: 'The World Before' },
    { label: 'PART II', path: '/madman/exhibit-b', tagline: 'The Keepers' },
    { label: 'PART III', path: '/madman/exhibit-c', tagline: 'The Shield' },
    { label: 'PART IV', path: '/madman/exhibit-d', tagline: 'The Wall' },
    { label: 'PART V', path: '/madman/exhibit-e', tagline: 'The Architecture' },
    { label: 'PART VI', path: '/madman/exhibit-f', tagline: 'The Money' },
  ];

  const specialLinks = [
    // Extracts moved to UniversalRegistry native nodes:
    // /ledger/reilly/irishman, /vault/epstein-emails, /expose/press-briefing
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigate = (path: string) => {
    setLocation(path);
    setIsOpen(false);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .madman-nav-container {
          position: sticky;
          top: 0;
          z-index: 50;
          background: #1A1208;
          border-bottom: 4px solid #CC2200;
          box-shadow: 0 3px 0 #D4A017;
        }
        .madman-nav-top-bar {
          background: #1B7A8A;
          height: 3px;
          width: 100%;
        }
        .madman-nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem 1.5rem;
          color: #F5EDD0;
        }
        .madman-brand {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          cursor: pointer;
        }
        .madman-brand-1 {
          font-family: "Abril Fatface", serif;
          font-size: 2.5rem;
          color: #F5EDD0;
          line-height: 1;
        }
        .madman-brand-2 {
          font-family: "Boogaloo", cursive;
          color: #D4A017;
          font-size: 1.8rem;
          letter-spacing: 0.1em;
        }
        .madman-menu-btn {
          background: transparent;
          border: 3px solid #CC2200;
          color: #F5EDD0;
          padding: 8px 20px;
          font-family: "Boogaloo", cursive;
          font-size: 1.8rem;
          letter-spacing: 0.05em;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: background 0.2s, color 0.2s;
        }
        .madman-menu-btn:hover {
          background: #CC2200;
        }
      `}} />

      <nav className="madman-nav-container">
        <div className="madman-nav-top-bar" />
        <div className="madman-nav-inner">
          <div className="madman-brand" onClick={() => handleNavigate('/madman')}>
            <span className="madman-brand-1">MADMAN</span>
            <span className="madman-brand-2">McCARRICK</span>
          </div>
          
          <button className="madman-menu-btn" onClick={toggleMenu} aria-expanded={isOpen}>
            {isOpen ? 'CLOSE ✕' : 'MENU ≡'}
          </button>
        </div>
      </nav>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[49] top-[55px] flex justify-end">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative w-full max-w-sm bg-[#1A1208] border-b-4 border-[#CC2200] max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <div 
                  key={link.path}
                  onClick={() => handleNavigate(link.path)}
                  className={`
                    flex flex-col px-6 py-4 border-b border-[#F5EDD0]/10 cursor-pointer transition-colors
                    ${isActive(link.path) ? 'bg-[#D4A017]/20 border-l-[3px] border-l-[#D4A017]' : 'hover:bg-[#F5EDD0]/5 border-l-[3px] border-l-transparent'}
                  `}
                >
                  <span className={`font-['Boogaloo'] text-3xl tracking-widest ${isActive(link.path) ? 'text-[#D4A017]' : 'text-[#F5EDD0]'}`}>
                    {link.label}
                  </span>
                  <span className="font-['Special_Elite'] text-xl tracking-widest text-[#F5EDD0]/50 mt-2">
                    {link.tagline}
                  </span>
                </div>
              ))}

              <div className="h-4" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
