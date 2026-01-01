import { cn } from "@/lib/utils";

interface SymbolProps {
  className?: string;
  opacity?: number;
}

export const TwistedBranch = ({ className, opacity = 0.1 }: SymbolProps) => (
  <svg
    viewBox="0 0 200 100"
    className={cn("pointer-events-none select-none", className)}
    style={{ opacity }}
    aria-hidden="true"
  >
    <path
      d="M0,50 C50,20 80,80 120,40 S180,10 200,60"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="animate-pulse-slow"
    />
    <path
      d="M20,60 C60,90 100,30 140,70 S190,40 200,80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      className="opacity-50"
    />
  </svg>
);

export const BoschOwl = ({ className, opacity = 0.1 }: SymbolProps) => (
  <svg
    viewBox="0 0 100 100"
    className={cn("pointer-events-none select-none", className)}
    style={{ opacity }}
    aria-hidden="true"
  >
    {/* Stylized abstract owl shape */}
    <path
      d="M30,40 Q20,20 50,20 Q80,20 70,40 Q90,50 80,80 Q50,100 20,80 Q10,50 30,40 Z"
      fill="currentColor"
    />
    <circle cx="40" cy="45" r="5" fill="var(--background)" />
    <circle cx="60" cy="45" r="5" fill="var(--background)" />
  </svg>
);

export const HollowEye = ({ className, opacity = 0.1 }: SymbolProps) => (
  <svg
    viewBox="0 0 100 60"
    className={cn("pointer-events-none select-none", className)}
    style={{ opacity }}
    aria-hidden="true"
  >
    <path
      d="M10,30 Q50,-10 90,30 Q50,70 10,30 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="50" cy="30" r="10" fill="currentColor" className="animate-pulse" />
  </svg>
);

export const Dagger = ({ className, opacity = 0.1 }: SymbolProps) => (
  <svg
    viewBox="0 0 40 100"
    className={cn("pointer-events-none select-none", className)}
    style={{ opacity }}
    aria-hidden="true"
  >
    <path
      d="M20,0 L25,20 L35,25 L25,30 L20,100 L15,30 L5,25 L15,20 Z"
      fill="currentColor"
    />
  </svg>
);
