import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export default function GlobalTabs() {
  const [location] = useLocation();
  
  const isMcCarrick = location.startsWith("/mccarrick");
  const isChecchio = location.startsWith("/checchio");

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 pointer-events-none">
      <div className="bg-background/95 backdrop-blur-sm border border-border rounded-full p-1 shadow-2xl pointer-events-auto flex gap-1">
        <Link href="/mccarrick">
          <a className={cn(
            "px-6 py-2 rounded-full font-mono text-sm uppercase tracking-widest transition-all duration-300",
            isMcCarrick 
              ? "bg-destructive text-destructive-foreground shadow-lg scale-105 font-bold" 
              : "text-muted-foreground hover:text-foreground hover:bg-secondary"
          )}>
            The Architect
          </a>
        </Link>
        <Link href="/checchio">
          <a className={cn(
            "px-6 py-2 rounded-full font-mono text-sm uppercase tracking-widest transition-all duration-300",
            isChecchio 
              ? "bg-blue-900 text-white shadow-lg scale-105 font-bold" 
              : "text-muted-foreground hover:text-foreground hover:bg-secondary"
          )}>
            The Protégé
          </a>
        </Link>
      </div>
    </div>
  );
}
