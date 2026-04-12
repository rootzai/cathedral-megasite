import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WallCrack() {
    const crackRef = useRef<SVGPathElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!crackRef.current || !containerRef.current) return;

        const pathLength = crackRef.current.getTotalLength();
        
        // Initial state: crack is hidden
        gsap.set(crackRef.current, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength
        });

        // Animate the crack drawing down the entire document
        gsap.to(crackRef.current, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.5
            }
        });

    }, []);

    return (
        <div 
            ref={containerRef} 
            className="fixed top-0 left-0 w-12 md:w-24 h-full pointer-events-none z-[-1] opacity-30"
        >
            <svg 
                viewBox="0 0 100 1000" 
                preserveAspectRatio="none" 
                className="w-full h-full stroke-[#8b1a1a]"
            >
                <path
                    ref={crackRef}
                    d="M 50,0 Q 60,100 40,200 T 50,400 T 20,600 T 70,800 T 40,1000"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                />
                <path
                    d="M 50,0 Q 60,100 40,200 T 50,400 T 20,600 T 70,800 T 40,1000"
                    fill="none"
                    stroke="black"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                    className="opacity-50"
                />
            </svg>
        </div>
    );
}
