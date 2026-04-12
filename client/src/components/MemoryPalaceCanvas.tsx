import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Sparkles, OrbitControls, Stars } from '@react-three/drei';
import { useLocation } from 'wouter';
import * as THREE from 'three';
import { MEMORY_PALACE, ChamberKey, LocusNode, CHAMBER_ORDER } from '@/lib/memoryPalaceData';

// Individual Locus 3D Node
function LocusObject({ node, onNavigate, setHoveredLocus }: { node: LocusNode, onNavigate: (route: string) => void, setHoveredLocus: (node: LocusNode | null) => void }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * (hovered ? 1.5 : 0.2);
            meshRef.current.rotation.x += delta * (hovered ? 0.5 : 0.1);
        }
    });

    const getGeometry = () => {
        switch (node.shape) {
            case 'monolith': return <boxGeometry args={[1, 4, 1]} />;
            case 'shard': return <coneGeometry args={[1, 3, 3]} />;
            case 'orb': return <sphereGeometry args={[1.5, 32, 32]} />;
            case 'ring': return <torusGeometry args={[1.5, 0.2, 16, 100]} />;
            case 'pyramid': return <coneGeometry args={[1.5, 2.5, 4]} />;
            case 'cube': return <boxGeometry args={[2, 2, 2]} />;
            default: return <sphereGeometry args={[1, 16, 16]} />;
        }
    };

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1} position={node.positionOffset}>
            <mesh
                ref={meshRef}
                onPointerOver={(e) => { e.stopPropagation(); setHover(true); setHoveredLocus(node); }}
                onPointerOut={(e) => { e.stopPropagation(); setHover(false); setHoveredLocus(null); }}
                onClick={(e) => { e.stopPropagation(); onNavigate(node.route); }}
                castShadow
                receiveShadow
            >
                {getGeometry()}
                <meshStandardMaterial 
                    color={hovered ? '#ff1a1a' : '#2a2a2a'} 
                    roughness={0.2}
                    metalness={0.8}
                    wireframe={node.shape === 'shard' && hovered}
                    emissive={hovered ? '#8b0000' : '#000000'}
                    emissiveIntensity={hovered ? 1 : 0}
                />
            </mesh>
        </Float>
    );
}

// Full Chamber Scene
function ChamberScene({ chamberKey, setLocation, setHoveredLocus }: { chamberKey: ChamberKey, setLocation: (route: string) => void, setHoveredLocus: (node: LocusNode | null) => void }) {
    const chamber = MEMORY_PALACE[chamberKey];

    return (
        <group>
            {/* Environment Fog */}
            <fog attach="fog" args={[chamber.fogColor, 5, 25]} />
            
            {/* Lighting */}
            <ambientLight intensity={0.2} />
            <spotLight position={[0, 15, 0]} intensity={1.5} penumbra={1} color="#ff3333" castShadow />
            <pointLight position={[10, -5, -10]} intensity={0.5} color="#4444ff" />

            {/* Atmosphere */}
            <Sparkles count={200} scale={15} size={2} speed={0.4} opacity={0.2} color="#ff9999" />
            {(chamberKey === 'catacombs' || chamberKey === 'vestibule') && <Stars radius={50} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />}

            {/* Base Platform */}
            {chamber.baseShape === 'platform' && (
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]} receiveShadow>
                    <cylinderGeometry args={[15, 15, 0.5, 32]} />
                    <meshStandardMaterial color="#111" roughness={0.8} />
                </mesh>
            )}
            {(chamber.baseShape === 'mirror' || chamber.baseShape === 'ruins') && (
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]} receiveShadow>
                    <planeGeometry args={[50, 50]} />
                    <meshStandardMaterial color={chamber.baseShape === 'mirror' ? "#050505" : "#1a1a1a"} roughness={chamber.baseShape === 'mirror' ? 0.1 : 0.9} metalness={0.5} />
                </mesh>
            )}

            {/* Loci Nodes */}
            {chamber.loci.map(locus => (
                <LocusObject key={locus.id} node={locus} onNavigate={setLocation} setHoveredLocus={setHoveredLocus} />
            ))}
        </group>
    );
}

// Main Component
export default function MemoryPalaceCanvas() {
    const [_, setLocation] = useLocation();
    const [currentChamberIndex, setCurrentChamberIndex] = useState(0);
    const [hoveredLocus, setHoveredLocus] = useState<LocusNode | null>(null);

    const activeChamberKey = CHAMBER_ORDER[currentChamberIndex];
    const chamberData = MEMORY_PALACE[activeChamberKey];

    const nextChamber = () => setCurrentChamberIndex((prev) => (prev + 1) % CHAMBER_ORDER.length);
    const prevChamber = () => setCurrentChamberIndex((prev) => (prev - 1 + CHAMBER_ORDER.length) % CHAMBER_ORDER.length);

    return (
        <div className="w-full h-[100vh] bg-black relative overflow-hidden flex flex-col font-mono text-white">
            
            {/* Top Navigation HUD */}
            <div className="absolute top-0 left-0 w-full p-6 z-10 flex justify-between items-start pointer-events-auto">
                <div className="max-w-xl">
                    <h3 className="text-red-600 text-xs font-black tracking-[0.4em] uppercase mb-1">Architecture of Recall</h3>
                    <h1 className="text-4xl font-cinzel text-zinc-100 tracking-[0.2em]">{chamberData.title}</h1>
                    <p className="text-zinc-400 mt-2 text-sm leading-relaxed max-w-md border-l border-red-900 pl-4">{chamberData.description}</p>
                </div>
                
                <div className="flex gap-4">
                    <button onClick={prevChamber} className="bg-black/80 border border-white/10 hover:border-red-500 hover:text-red-500 text-zinc-400 px-6 py-3 text-xs uppercase tracking-widest transition-all">
                        ← Previous Sector
                    </button>
                    <button onClick={nextChamber} className="bg-black/80 border border-white/10 hover:border-red-500 hover:text-red-500 text-zinc-400 px-6 py-3 text-xs uppercase tracking-widest transition-all">
                        Next Sector →
                    </button>
                </div>
            </div>

            {/* Bottom Controls Hint */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-center pointer-events-none">
                <p className="text-zinc-600 text-xs uppercase tracking-[0.4em] animate-pulse">Drag left/right to orbit. Scroll to zoom. Click to unseal.</p>
            </div>

            {/* Standard 2D Tooltip HUD (Fixed Version) */}
            <div className={`absolute bottom-20 left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-all duration-300 ${hoveredLocus ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                {hoveredLocus && (
                    <div className="bg-black/80 backdrop-blur-md border border-[#8b1a1a]/30 p-6 w-80 text-center shadow-[0_0_40px_rgba(139,26,26,0.25)] relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff4444] to-transparent opacity-50" />
                        <div className="text-[10px] font-mono text-[#ff4444] uppercase tracking-[0.4em] mb-3 border-b border-[#8b1a1a]/30 pb-2">
                           [ DOSSIER: {hoveredLocus.mnemonicAnchor} ]
                        </div>
                        <h3 className="text-white font-cinzel font-black tracking-widest text-lg uppercase leading-tight">
                           {hoveredLocus.title}
                        </h3>
                        <div className="mt-4 text-[#ff4444] text-[10px] tracking-widest animate-pulse font-bold">
                            CLICK TO INITIATE →
                        </div>
                    </div>
                )}
            </div>

            {/* The 3D Render Engine */}
            <Canvas shadows camera={{ position: [0, 2, 12], fov: 60 }} className="absolute inset-0 z-0 bg-black">
                <ChamberScene chamberKey={activeChamberKey} setLocation={setLocation} setHoveredLocus={setHoveredLocus} />
                <OrbitControls 
                    enablePan={false} 
                    minDistance={5} 
                    maxDistance={25} 
                    maxPolarAngle={Math.PI / 2 - 0.1} // Prevent going below floor
                    autoRotate
                    autoRotateSpeed={0.5}
                />
            </Canvas>
        </div>
    );
}
