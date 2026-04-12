import React, { useRef, useLayoutEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Text, Sparkles, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Procedural stylized parchment/paper material
const PaperMaterial = () => {
    return (
        <meshStandardMaterial 
            color="#f4ecd8" 
            roughness={0.9} 
            metalness={0.1}
            bumpScale={0.02}
        />
    );
};

const EggScene = () => {
    const eggRef = useRef<THREE.Group>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera>(null);

    useLayoutEffect(() => {
        if (!eggRef.current || !cameraRef.current) return;

        // Establish the GSAP ScrollTrigger sequence tied to the global scroll
        // The egg starts sitting on a "wall" (Y=0)
        // As user scrolls, it tips forward (rotateX), then plummets down (Y=-20)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#easter-scroll-container",
                start: "top top",
                end: "+=150%",
                scrub: 1, // Smooth dragging
            }
        });

        // 1. the tip
        tl.to(eggRef.current.rotation, {
            x: Math.PI / 2.2, // tips forward slightly past 90
            ease: "power1.inOut",
            duration: 1
        }, 0);

        // 2. the fall
        tl.to(eggRef.current.position, {
            y: -15, // falls out of frame
            z: 5,  // falls toward camera
            ease: "power2.in",
            duration: 1.5
        }, 0.5);

        // 3. camera tilt tracking
        tl.to(cameraRef.current.rotation, {
            x: -Math.PI / 6, // look down slightly as it falls
            ease: "power1.inOut",
            duration: 1.5
        }, 0.8);

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <>
            <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 2, 10]} />
            
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
            <Environment preset="city" />
            
            <Sparkles count={500} scale={15} size={2} color="#ffffff" speed={0.4} opacity={0.2} />

            {/* The Wall */}
            <group position={[0, -2, 0]}>
                <mesh receiveShadow>
                    <boxGeometry args={[20, 4, 4]} />
                    <meshStandardMaterial color="#111114" roughness={0.9} />
                </mesh>
            </group>

            {/* The Egg */}
            <group ref={eggRef} position={[0, 0.8, 0]}>
                <mesh castShadow scale={[1.2, 1.6, 1.2]}>
                    <sphereGeometry args={[1, 64, 64]} />
                    <PaperMaterial />
                </mesh>
            </group>

            {/* Title Text in 3D Space */}
            <group position={[0, 4, -2]}>
                <Text 
                    fontSize={1.2} 
                    font="https://fonts.gstatic.com/s/cinzel/v11/8vII7qw6GncylovmCUHzyQ.woff"
                    color="#f4ecd8"
                    anchorX="center"
                    anchorY="middle"
                    maxWidth={10}
                    textAlign="center"
                >
                    HUMPTY DUMPTY
                </Text>
                <Text 
                    position={[0, -1.2, 0]}
                    fontSize={0.4} 
                    font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf"
                    color="#88888b"
                    anchorX="center"
                    anchorY="middle"
                    maxWidth={10}
                    textAlign="center"
                >
                    A Case Study Masquerading as a Nursery Rhyme
                </Text>
            </group>
        </>
    );
};

export default function ThreeHeroFall() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -1, pointerEvents: 'none', background: 'radial-gradient(circle at center, #111114 0%, #050505 100%)' }}>
            <Canvas shadows dpr={[1, 2]} gl={{ antialias: true }}>
                <EggScene />
            </Canvas>
        </div>
    );
}
