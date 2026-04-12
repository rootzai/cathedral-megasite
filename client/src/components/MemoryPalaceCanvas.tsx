import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Sparkles, OrbitControls, Stars, Text } from '@react-three/drei';
import { useLocation } from 'wouter';
import * as THREE from 'three';
import { usePalaceStore } from '@/stores/usePalaceStore';
import { MEMORY_PALACE, ChamberKey, LocusNode, CHAMBER_ORDER } from '@/lib/memoryPalaceData';

function LocusObject({ node, onNavigate }: { node: LocusNode, onNavigate: (route: string) => void }) {
    const groupRef = useRef<THREE.Group>(null);
    const [hovered, setHover] = useState(false);
    const setHoveredLocus = usePalaceStore(s => s.setHoveredLocus);

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Elegant, solemn vertical floating
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8 + node.positionOffset[0]) * 0.4;
            
            // AQUINAS EFFECT: "Unwonted Illustration"
            // When hovered, the stele pulses violently to sear it into memory
            if (hovered && groupRef.current.children[0]) {
                const mesh = groupRef.current.children[0] as THREE.Mesh;
                const mat = mesh.material as THREE.MeshStandardMaterial;
                mat.emissiveIntensity = 0.6 + Math.sin(state.clock.elapsedTime * 15) * 0.4;
            } else if (!hovered && groupRef.current.children[0]) {
                const mesh = groupRef.current.children[0] as THREE.Mesh;
                const mat = mesh.material as THREE.MeshStandardMaterial;
                mat.emissiveIntensity = 0;
            }
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
                 fontSize={0.45} 
                 maxWidth={4.0} 
                 textAlign="center"
                 color={hovered ? "#ffffff" : "#c8bdb0"}
                 material-toneMapped={false}
                 outlineWidth={hovered ? 0.01 : 0}
                 outlineColor="#000000"
            >
                 {node.title}
            </Text>
        </group>
    );
}

// Interconnected Chamber Segment
function ChamberGroup({ chamberKey, zOffset, setLocation }: { chamberKey: ChamberKey, zOffset: number, setLocation: (route: string) => void }) {
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
                <LocusObject key={locus.id} node={locus} onNavigate={setLocation} />
            ))}
            
            {/* Local Chamber Fog/Lighting to differentiate spaces */}
            <pointLight position={[0, 15, 0]} intensity={0.6} color={chamber.fogColor === '#0a0a0a' ? '#ffffff' : chamber.fogColor} distance={80} />
            <spotLight position={[0, 25, 0]} intensity={3} angle={0.6} penumbra={1} color="#ff0000" castShadow />
            <Sparkles count={150} scale={25} size={3} speed={0.3} opacity={0.6} color="#ffffff" />
        </group>
    );
}

// Unified World Map Slider (The Rail System)
function WorldMap({ setLocation }: { setLocation: (route: string) => void }) {
    const groupRef = useRef<THREE.Group>(null);
    const currentChamberIndex = usePalaceStore(s => s.currentChamberIndex);

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
                />
            ))}
        </group>
    );
}

// Main View Component (Decoupled from 2D DOM)
export default function MemoryPalaceCanvas() {
    const [_, setLocation] = useLocation();

    return (
        <div className="absolute inset-0 z-0 bg-black">
            <Canvas shadows camera={{ position: [0, 5, 20], fov: 60 }} className="w-full h-full">
                <color attach="background" args={['#020000']} />
                <fog attach="fog" args={["#000000", 15, 70]} />
                <ambientLight intensity={0.15} />
                <Stars radius={150} depth={50} count={4000} factor={5} saturation={1} fade speed={1.5} />
                
                <WorldMap setLocation={setLocation} />
                
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
