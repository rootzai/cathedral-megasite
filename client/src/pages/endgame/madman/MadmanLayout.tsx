import React from 'react';
import MadmanNav from './MadmanNav';

export default function MadmanLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="madman-dossier-root min-h-screen bg-[#0d0d0d] text-[#F5EDD0]">
      {/* 
        This handles the specific styling overrides needed since we're using dangerouslySetInnerHTML
        for the internal content, isolated to this route group. 
      */}
      <style dangerouslySetInnerHTML={{__html: `
        .madman-dossier-root {
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
        .madman-dossier-root .font-boogaloo {
          font-family: "Boogaloo", cursive;
          font-size: clamp(2rem, 3vw, 2.5rem) !important;
        }
        .madman-dossier-root .font-abril {
          font-family: "Abril Fatface", serif;
          font-size: clamp(4rem, 6vw, 6rem) !important;
        }
        .madman-dossier-root .font-elite {
          font-family: "Special Elite", cursive;
          font-size: clamp(1.6rem, 2vw, 2rem) !important;
          line-height: 1.8 !important;
        }
        .madman-dossier-root .font-courier {
          font-family: "Courier Prime", monospace;
          font-size: clamp(1.4rem, 2vw, 1.8rem) !important;
          line-height: 2 !important;
        }
        .madman-dossier-content img {
          max-width: 100%;
          height: auto;
        }
        .madman-dossier-content .container {
          width: 100%;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }
      `}} />
      
      <MadmanNav />
      {children}
    </div>
  );
}
