import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SceneBlockProps {
    children: React.ReactNode;
    chapterTitle: string;
    isLast?: boolean;
}

export default function SceneBlock({ children, chapterTitle, isLast }: SceneBlockProps) {
    const sceneRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sceneRef.current || !contentRef.current) return;

        // Pin the scene so it stays on screen while content animates in
        const st = ScrollTrigger.create({
            trigger: sceneRef.current,
            start: "top top",
            end: "+=150%", // User scrolls 150% of the viewport height while pinned
            pin: true,
            anticipatePin: 1
        });

        // Parallax and fade reveals for child elements
        const elements = contentRef.current.children;
        gsap.fromTo(elements, 
            { opacity: 0, y: 50 },
            { 
                opacity: 1, 
                y: 0, 
                stagger: 0.2, 
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sceneRef.current,
                    start: "top center",
                    end: "+=50%",
                    scrub: 1
                }
            }
        );

        return () => {
            st.kill();
        };
    }, []);

    return (
        <section ref={sceneRef} className="h-screen w-full flex flex-col justify-center relative overflow-hidden bg-transparent">
            {/* Ink Chapter Transition Divider */}
            <div className="absolute top-0 left-0 w-full text-center text-[#8b1a1a] opacity-20 text-xs tracking-[1em] font-mono select-none">
                {chapterTitle !== 'I. The Wall' && '✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦'}
            </div>

            <div className="max-w-4xl mx-auto px-6 w-full h-full flex flex-col justify-center" ref={contentRef}>
                <h3 className="font-heading text-4xl md:text-5xl text-[#f4ecd8] border-b border-[#333] pb-4 mb-12 uppercase tracking-wide">
                    {chapterTitle}
                </h3>
                
                <div className="space-y-8 max-h-[70vh] overflow-y-auto pb-24 pr-4 custom-scrollbar">
                    {children}
                </div>
            </div>
            
            {!isLast && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50 animate-pulse">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">Scroll To Continue</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent"></div>
                </div>
            )}
        </section>
    );
}
