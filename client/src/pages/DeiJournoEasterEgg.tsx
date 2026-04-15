import { useEffect } from "react";
import { useLocation } from "wouter";

export default function DeiJournoEasterEgg() {
    const [, setLocation] = useLocation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLocation("/headline-news");
        }, 3500);

        return () => clearTimeout(timer);
    }, [setLocation]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white font-mono cursor-none select-none">
            <div className="text-center space-y-4 animate-pulse">
                <p className="text-red-600 text-sm tracking-[0.5em] uppercase font-bold">404 Exception Override</p>
                <h1 className="text-2xl md:text-4xl tracking-[0.2em] uppercase">Identity unmasked.</h1>
                <p className="text-zinc-500 text-xs tracking-widest mt-8">Redirecting to active investigation...</p>
            </div>

            {/* Stark scanner line top-to-bottom effect */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="w-full h-1 bg-red-600 animate-[scan_3s_ease-in-out_infinite]" />
            </div>
        </div>
    );
}
