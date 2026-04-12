import React, { useEffect, useState } from 'react';

// May 28, 2026
const TARGET_DATE = new Date('2026-05-28T09:00:00').getTime();

export default function DoomsdayClock() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = TARGET_DATE - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="my-16 border border-red-900/30 bg-black/50 p-8 rounded-lg shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ 
                backgroundImage: 'repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', 
                backgroundPosition: '0 0, 10px 10px', 
                backgroundSize: '20px 20px' 
            }} />
            
            <div className="relative z-10 text-center space-y-6">
                <h3 className="font-heading text-2xl text-red-500 uppercase tracking-widest">Orange County Superior Court</h3>
                <div className="font-mono text-sm text-zinc-500">Case No. 30-2026-01555640-CU-PT-CJC</div>
                
                <div className="flex justify-center gap-4 md:gap-8 pt-4">
                    <div className="flex flex-col items-center">
                        <span className="font-mono text-4xl md:text-6xl text-white font-bold tracking-tighter">{String(timeLeft.days).padStart(3, '0')}</span>
                        <span className="font-mono text-[10px] uppercase text-zinc-500 tracking-widest mt-2">Days</span>
                    </div>
                    <span className="font-mono text-4xl md:text-6xl text-red-900/50">:</span>
                    <div className="flex flex-col items-center">
                        <span className="font-mono text-4xl md:text-6xl text-white font-bold tracking-tighter">{String(timeLeft.hours).padStart(2, '0')}</span>
                        <span className="font-mono text-[10px] uppercase text-zinc-500 tracking-widest mt-2">Hours</span>
                    </div>
                    <span className="font-mono text-4xl md:text-6xl text-red-900/50">:</span>
                    <div className="flex flex-col items-center">
                        <span className="font-mono text-4xl md:text-6xl text-white font-bold tracking-tighter">{String(timeLeft.minutes).padStart(2, '0')}</span>
                        <span className="font-mono text-[10px] uppercase text-zinc-500 tracking-widest mt-2">Mins</span>
                    </div>
                    <span className="font-mono text-4xl md:text-6xl text-red-900/50">:</span>
                    <div className="flex flex-col items-center">
                        <span className="font-mono text-4xl md:text-6xl text-red-500 font-bold tracking-tighter animate-pulse">{String(timeLeft.seconds).padStart(2, '0')}</span>
                        <span className="font-mono text-[10px] uppercase text-red-500/50 tracking-widest mt-2">Secs</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
