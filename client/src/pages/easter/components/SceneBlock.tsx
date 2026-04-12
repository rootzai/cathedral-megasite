import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SceneBlockProps {
    children: React.ReactNode;
    chapterTitle: string;
    isLast?: boolean;
    index?: number; // pass an index or just alternate based on a local trick. We can just use standard repeating background gradient.
}

export default function SceneBlock({ children, chapterTitle, isLast }: SceneBlockProps) {
    const sceneRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sceneRef.current || !contentRef.current) return;

        // Simple elegant fade-up reveal on scroll without disruptive pinning
        const elements = contentRef.current.children;
        gsap.fromTo(elements, 
            { opacity: 0, y: 30 },
            { 
                opacity: 1, 
                y: 0, 
                stagger: 0.15, 
                ease: "power2.out",
                duration: 1,
                scrollTrigger: {
                    trigger: sceneRef.current,
                    start: "top 80%", // trigger when top of section hits 80% down viewport
                    end: "top 30%",
                    scrub: 0.5,
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, []);

    return (
        <section 
            ref={sceneRef} 
            className="min-h-screen w-full flex flex-col justify-center relative bg-gradient-to-b from-[#050505] via-[#0a0a12] to-[#050505] border-t border-white/5 pb-24 pt-24"
        >
            {/* Ink Chapter Transition Divider */}
            <div className="absolute top-0 left-0 w-full text-center text-[#8b1a1a] opacity-40 text-xs tracking-[1em] font-mono select-none py-4 bg-gradient-to-b from-[#8b1a1a]/10 to-transparent">
                {chapterTitle !== 'I. The Wall' && '✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦'}
            </div>

            <div className="max-w-4xl mx-auto px-6 w-full flex flex-col justify-center z-10" ref={contentRef}>
                <h3 className="font-heading text-4xl md:text-5xl text-[#f4ecd8] border-b border-[#333] pb-4 mb-12 uppercase tracking-wide opacity-0">
                    {chapterTitle}
                </h3>
                
                <div className="space-y-12">
                    {children}
                </div>
            </div>
            
            {!isLast && (
                <div className="mt-24 flex flex-col items-center opacity-30">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Scroll</span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-zinc-500 to-transparent"></div>
                </div>
            )}
        </section>
    );
}

