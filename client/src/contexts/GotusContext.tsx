import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useLocation } from "wouter";
import { atomizedShells } from "@/lib/atomizedData";

interface GotusContextProps {
  visitedPathCount: number;
  isGotusTakeoverActive: boolean;
  registerShellVisit: (shellId: string) => void;
  gotusMessage: string | null;
}

const GotusContext = createContext<GotusContextProps | undefined>(undefined);

export const GotusProvider = ({ children }: { children: ReactNode }) => {
  const [, setLocation] = useLocation();
  const [visitedPathCount, setVisitedPathCount] = useState<number>(0);
  const [isGotusTakeoverActive, setIsGotusTakeoverActive] = useState<boolean>(false);
  const [gotusMessage, setGotusMessage] = useState<string | null>(null);
  const [lastVisitedShellId, setLastVisitedShellId] = useState<string | null>(null);

  const registerShellVisit = (shellId: string) => {
    // Avoid double counting same page loads
    if (shellId === lastVisitedShellId) return;

    const newCount = visitedPathCount + 1;
    setVisitedPathCount(newCount);
    setLastVisitedShellId(shellId);

    // GOTUS Threshold: every 3 visits triggers a hijacking
    if (newCount >= 3) {
      triggerGotusTakeover(shellId);
    }
  };

  const triggerGotusTakeover = (currentShellId: string) => {
    setIsGotusTakeoverActive(true);
    setVisitedPathCount(0); // reset counter

    const shell = atomizedShells.find((s) => s.id === currentShellId);
    
    // Fallback if not found or no secondaries
    if (!shell || !shell.people.secondary.length) {
      setTimeout(() => {
        setIsGotusTakeoverActive(false);
      }, 3000);
      return;
    }

    const secondaryActor = shell.people.secondary[0];
    setGotusMessage(`GOTUS OVERRIDE // Following connection: ${secondaryActor}`);

    // Find another shell that has this actor as a primary subject
    const targetShell = atomizedShells.find(
      (s) => s.id !== currentShellId && s.people.primary.includes(secondaryActor)
    ) || atomizedShells.find(s => s.id !== currentShellId); // Fallback to first other shell

    setTimeout(() => {
      if (targetShell) {
        setLocation(targetShell.link);
      } else {
        setLocation("/maproom");
      }
      setTimeout(() => {
        setIsGotusTakeoverActive(false);
        setGotusMessage(null);
      }, 2000);
    }, 4500); // UI glitch lasts 4.5 seconds before routing
  };

  return (
    <GotusContext.Provider
      value={{
        visitedPathCount,
        isGotusTakeoverActive,
        registerShellVisit,
        gotusMessage,
      }}
    >
      {isGotusTakeoverActive && (
        <div className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif')] opacity-20 mix-blend-screen" />
          <h1 className="text-[#cc0000] font-['Share_Tech_Mono'] text-6xl md:text-8xl tracking-[1em] animate-pulse relative z-10 glitch-text">
            GOTUS
          </h1>
          <p className="text-[#f5edd0] font-['Share_Tech_Mono'] text-xl mt-8 relative z-10 tracking-widest text-center max-w-2xl px-6">
            {gotusMessage}
          </p>
          <div className="absolute inset-0 bg-red-900/10 animate-ping" />
        </div>
      )}
      {children}
    </GotusContext.Provider>
  );
};

export const useGotus = () => {
  const context = useContext(GotusContext);
  if (context === undefined) {
    throw new Error("useGotus must be used within a GotusProvider");
  }
  return context;
};
