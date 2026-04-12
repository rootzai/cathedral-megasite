import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Sparkles, OrbitControls, Stars, Text } from '@react-three/drei';
import { useLocation } from 'wouter';
import * as THREE from 'three';
import { MEMORY_PALACE, ChamberKey, LocusNode, CHAMBER_ORDER } from '@/lib/memoryPalaceData';

// Individual Locus 3D Node (Massive Obsidian Stele + Typography)
function LocusObject({ node, onNavigate, setHoveredLocus }: { node: LocusNode, onNavigate: (route: string) => void, setHoveredLocus: (node: LocusNode | null) => void }) {
    const groupRef = useRef<THREE.Group>(null);
    const [hovered, setHover] = useState(false);

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Elegant, solemn vertical floating
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8 + node.positionOffset[0]) * 0.4;
        }
    });

    // Expand the bounding positions massively so the steles don't overlap
    const spreadOffset = [
        node.positionOffset[0] * 5, 
        node.positionOffset[1] + 1, 
        node.positionOffset[2] * 4
    ] as [number, number, number];

    return (
        <group ref={groupRef} position={spreadOffset}>
            <mesh
                onPointerOver={(e) => { e.stopPropagation(); setHover(true); setHoveredLocus(node); document.body.style.cursor = 'pointer'; }}
                onPointerOut={(e) => { e.stopPropagation(); setHover(false); setHoveredLocus(null); document.body.style.cursor = 'auto'; }}
                onClick={(e) => { e.stopPropagation(); onNavigate(node.route); }}
                castShadow
                receiveShadow
            >
                {/* The Monumental Stele */}
                <boxGeometry args={[4, 10, 0.5]} />
                <meshStandardMaterial 
                    color={hovered ? '#150000' : '#030303'} 
                    roughness={0.15}
                    metalness={0.9}
                    emissive={hovered ? '#4a0000' : '#000000'}
                    emissiveIntensity={hovered ? 0.6 : 0}
                />
            </mesh>
            
            {/* The HIGH CONTRAST Typography Anchor - Hovering on the front face */}
            <Text 
                position={[0, 2.5, 0.35]} 
                fontSize={0.8} 
                maxWidth={3.8} 
                textAlign="center"
                 font="https://fonts.gstatic.com/s/cinzel/v11/20d8_pQ2m11mb0_R-5iigP_y.woff2"
                color={hovered ? "#ffffff" : "#ff3b3b"}
                anchorX="center"
                anchorY="middle"
                outlineWidth={hovered ? 0.03 : 0}
                outlineColor="#000000"
                material-toneMapped={false}
            >
                {node.mnemonicAnchor}
            </Text>

            {/* Subtext */}
            <Text 
                 position={[0, -2.5, 0.35]} 
                 fontSize={0.25} 
                 maxWidth={3.0} 
                 textAlign="center"
                 font="https://fonts.gstatic.com/s/oswald/v49/TK3_WkUHHAIjg75cFRf3bXL8LICs1_FvsUtiZTaR.woff2"
                 color={hovered ? "#ffcccc" : "#888888"}
            >
                 {node.title}
            </Text>
        </group>
    );
}

// Interconnected Chamber Segment
function ChamberGroup({ chamberKey, zOffset, setLocation, setHoveredLocus }: { chamberKey: ChamberKey, zOffset: number, setLocation: (route: string) => void, setHoveredLocus: (node: LocusNode | null) => void }) {
    const chamber = MEMORY_PALACE[chamberKey];

    return (
        <group position={[0, 0, zOffset]}>
            {/* Ambient Base Plane for reflections */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]} receiveShadow>
                <planeGeometry args={[120, 120]} />
                <meshStandardMaterial color="#010101" roughness={0.08} metalness={0.9} />
            </mesh>

            {/* Loci Nodes */}
            {chamber.loci.map(locus => (
                <LocusObject key={locus.id} node={locus} onNavigate={setLocation} setHoveredLocus={setHoveredLocus} />
            ))}
            
            {/* Local Chamber Fog/Lighting to differentiate spaces */}
            <pointLight position={[0, 15, 0]} intensity={0.6} color={chamber.fogColor === '#0a0a0a' ? '#ffffff' : chamber.fogColor} distance={80} />
            <spotLight position={[0, 25, 0]} intensity={3} angle={0.6} penumbra={1} color="#ff0000" castShadow />
            <Sparkles count={150} scale={25} size={3} speed={0.3} opacity={0.6} color="#ffffff" />
        </group>
    );
}

// Unified World Map Slider (The Rail System)
function WorldMap({ currentChamberIndex, setLocation, setHoveredLocus }: { currentChamberIndex: number, setLocation: (route: string) => void, setHoveredLocus: (node: LocusNode | null) => void }) {
    const groupRef = useRef<THREE.Group>(null);
    useFrame(() => {
        if (groupRef.current) {
            // The world physically slides backwards based on the active chamber index!
            const targetZ = currentChamberIndex * 80;
            groupRef.current.position.z += (targetZ - groupRef.current.position.z) * 0.04;
        }
    });

    return (
        <group ref={groupRef}>
            {CHAMBER_ORDER.map((key, index) => (
                <ChamberGroup 
                    key={key} 
                    chamberKey={key} 
                    zOffset={-index * 80} 
                    setLocation={setLocation} 
                    setHoveredLocus={setHoveredLocus} 
                />
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
            <Canvas shadows camera={{ position: [0, 5, 20], fov: 60 }} className="absolute inset-0 z-0 bg-black">
                <color attach="background" args={['#020000']} />
                <fog attach="fog" args={["#000000", 15, 70]} />
                <ambientLight intensity={0.15} />
                <Stars radius={150} depth={50} count={4000} factor={5} saturation={1} fade speed={1.5} />
                
                <WorldMap currentChamberIndex={currentChamberIndex} setLocation={setLocation} setHoveredLocus={setHoveredLocus} />
                
                <OrbitControls 
                    enablePan={false} 
                    enableZoom={true} 
                    minDistance={5} 
                    maxDistance={35} 
                    maxPolarAngle={Math.PI / 2 - 0.05} // Prevent going below the massive mirror floor
                    autoRotate
                    autoRotateSpeed={0.3}
                />
            </Canvas>
        </div>
    );
}
