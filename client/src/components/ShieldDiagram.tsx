/**
 * ShieldDiagram.tsx — Ecclesiastical Noir / Gothic Machinery
 * v5.5 Refined Click-Functional Implementation
 */

import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";

type NodeIcon = "person" | "media" | "church" | "govt" | "legal" | "victim-crowd" | "org" | "dot";

interface NodeDef {
  id: string;
  label: string;
  angle: number;
  ring: number;
  sublabel?: string;
  isMedia?: boolean;
  isVictim?: boolean;
  icon?: NodeIcon;
  destination: string;        // URL path or external URL
  destinationType: 'internal' | 'external';
}

interface Ring {
  id: number;
  label: string;
  radiusFraction: number;
  rotationDuration: number;
  rotationDirection: 1 | -1;
  tickCount: number;
}

const RINGS: Ring[] = [
  { id: 5, label: "Victims & Survivors", radiusFraction: 1.00, rotationDuration: 200, rotationDirection:  1, tickCount: 72 },
  { id: 4, label: "The Outer Walls",     radiusFraction: 0.78, rotationDuration: 55,  rotationDirection: -1, tickCount: 60 },
  { id: 3, label: "Legal Apparatus",     radiusFraction: 0.59, rotationDuration: 30,  rotationDirection:  1, tickCount: 48 },
  { id: 2, label: "Legal Fortress",      radiusFraction: 0.41, rotationDuration: 18,  rotationDirection: -1, tickCount: 36 },
  { id: 1, label: "Secret Archives",     radiusFraction: 0.24, rotationDuration: 10,  rotationDirection:  1, tickCount: 24 },
];

const NODES: NodeDef[] = [
  // Ring 5
  { id: "kelli-nyre",     label: "Kelli Nyre",               angle: 35,  ring: 5, destination: "/evidence/board#kelli-nyre", destinationType: 'internal' },
  { id: "national-media", label: "NATIONAL MEDIA",           angle: 60,  ring: 5, isMedia: true, destination: "/evidence/present#nyt-placement", destinationType: 'internal' },
  { id: "lara-mck",       label: "Lara McKeever",            sublabel: "and Sisters", angle: 82, ring: 5, destination: "/evidence/victims#lara-mckeever", destinationType: 'internal' },
  { id: "bishops-acc",    label: "BishopsAccountability",    angle: 108, ring: 5, destination: "https://www.bishopaccountability.org", destinationType: 'external' },
  { id: "congress",       label: "Congress",                 angle: 132, ring: 5, destination: "/breach#congressional-track", destinationType: 'internal' },
  { id: "victims-bottom", label: "VICTIMS",                  angle: 178, ring: 5, isVictim: true, destination: "/evidence/victims", destinationType: 'internal' },
  { id: "victims-law",    label: "Victims Law Firms",        angle: 205, ring: 5, destination: "/evidence/victims#victims-law-firms", destinationType: 'internal' },
  { id: "snap",           label: "SNAP",                     angle: 228, ring: 5, destination: "https://www.snapnetwork.org", destinationType: 'external' },
  { id: "joe-nyre",       label: "Joe Nyre",                 angle: 252, ring: 5, destination: "/evidence/board#joe-nyre", destinationType: 'internal' },
  { id: "nj-media",       label: "NJ MEDIA",                 angle: 278, ring: 5, isMedia: true, destination: "/evidence/present#nj-media", destinationType: 'internal' },
  { id: "mark-crawford",  label: "Mark Crawford",            angle: 298, ring: 5, destination: "/evidence/origin#crawford", destinationType: 'internal' },
  { id: "mccomber",       label: "McOmber McOmber",          sublabel: "(Victims Atty)", angle: 155, ring: 5, destination: "https://www.mcombermcumber.com", destinationType: 'external' },

  // Ring 4
  { id: "shu-univ",       label: "Seton Hall",      sublabel: "University",          angle: 50,  ring: 4, destination: "/ledger#shu", destinationType: 'internal' },
  { id: "usccb",          label: "USCCB",           sublabel: "(Catholic Bishops)",   angle: 90,  ring: 4, destination: "https://www.usccb.org", destinationType: 'external' },
  { id: "vatican-state",  label: "Holy See",        sublabel: "(Vatican State)",      angle: 148, ring: 4, destination: "https://www.vatican.va", destinationType: 'external' },
  { id: "nj-governor",    label: "NJ Governor",     sublabel: "Office",               angle: 170, ring: 4, destination: "https://www.nj.gov/governor", destinationType: 'external' },
  { id: "nj-legislature", label: "NJ Legislature",                                    angle: 193, ring: 4, destination: "https://www.njleg.state.nj.us", destinationType: 'external' },
  { id: "rcan",           label: "RCAN",            sublabel: "(Newark Archdiocese)", angle: 212, ring: 4, destination: "/evidence/present#rcan-advisory", destinationType: 'internal' },
  { id: "shu-board",      label: "Seton Hall Board",                                    angle: 325, ring: 4, destination: "/ledger#board-of-regents", destinationType: 'internal' },
  { id: "delbarton",      label: "Delbarton School",                                   angle: 335, ring: 4, destination: "/evidence/machine#delbarton", destinationType: 'internal' },

  // Ring 3
  { id: "gibbons-pc",     label: "Gibbons P.C.",                                angle: 30,  ring: 3, destination: "/ledger#gibbons", destinationType: 'internal' },
  { id: "latham",         label: "Latham & Watkins",                            angle: 72,  ring: 3, destination: "/evidence/machine#ruemmler-convergence", destinationType: 'internal' },
  { id: "ropes-gray",     label: "Ropes & Gray",                                angle: 112, ring: 3, destination: "/evidence/board#ropes-gray", destinationType: 'internal' },
  { id: "seton-law",      label: "Seton Hall Law School",                       angle: 162, ring: 3, destination: "/ledger#shu-law", destinationType: 'internal' },
  { id: "rome",           label: "Rome (Vatican)",                              angle: 218, ring: 3, destination: "https://www.vatican.va", destinationType: 'external' },
  { id: "ag-office",      label: "AG Office",                                   angle: 228, ring: 3, destination: "/evidence/legal#ag-office", destinationType: 'internal' },
  { id: "nj-courts",      label: "NJ Courts",                                   angle: 285, ring: 3, destination: "/breach#nj-courts", destinationType: 'internal' },
  { id: "lowenstein",     label: "Lowenstein",                                  angle: 300, ring: 3, destination: "/ledger#lowenstein", destinationType: 'internal' },
  { id: "troutman",        label: "Troutman Pepper",                             angle: 318, ring: 3, destination: "/evidence/legal#troutman", destinationType: 'internal' },
  { id: "usccb-legal",    label: "USCCB Legal",    sublabel: "Counsel",         angle: 12,  ring: 3, destination: "https://www.usccb.org", destinationType: 'external' },

  // Ring 2
  { id: "shu-legal",      label: "SHU Legal Firms",                             angle: 36,  ring: 2, destination: "/ledger#shu-legal", destinationType: 'internal' },
  { id: "christie-ag",    label: "Christie's",     sublabel: "Legal Mafia",     angle: 75, ring: 2, destination: "/evidence/legal#christie-network", destinationType: 'internal' },
  { id: "canon-law",      label: "Canon Law",      sublabel: "Tribunal",        angle: 235, ring: 2, destination: "/vault/documents#canon-law", destinationType: 'internal' },
  { id: "secret-archives-legal", label: "Archdiocese", sublabel: "Legal Counsel", angle: 300, ring: 2, destination: "/evidence/legal#archdiocese-counsel", destinationType: 'internal' },
];

const CORE_NAMES: Record<string, string> = {
  "Theodore McCarrick": "/evidence/machine#mccarrick",
  "Msgr Joseph Reilly": "/evidence/board#reilly",
  "Fr. Kenneth Martin": "/evidence/origin#martin",
  "Hank D'Allesandro": "/ledger#dalessandro",
  "Kevin Marino": "/evidence/legal#marino",
  "Chris Porrino": "/evidence/legal#porrino",
  "Tom Scrivo": "/evidence/legal#scrivo",
  "The Dirty Dozen": "/ledger#board-of-regents",
  "Cardinal Tobin": "/ledger#tobin",
  "Chris Christie": "/evidence/legal#christie-network",
  "Elias Lorenzo Bishop": "/evidence/machine#lorenzo",
  "Bishop Checchio": "/evidence/machine#checchio"
};

function degToRad(deg: number) {
  return ((deg - 90) * Math.PI) / 180;
}

function polarToXY(angle: number, radius: number, cx: number, cy: number) {
  const rad = degToRad(angle);
  return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
}

export default function ShieldDiagram({ 
  onNodeClick 
}: { 
  onNodeClick?: (nodeId: string) => void;
  onRingClick?: (ringId: number) => void;
}) {
  const [, setLocation] = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(700);
  const [rotations, setRotations] = useState<number[]>([0, 0, 0, 0, 0]);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [clickedNode, setClickedNode] = useState<string | null>(null);
  const [tracerActive, setTracerActive] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [zoomCenter, setZoomCenter] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  
  const lastTimeRef = useRef<number>(0);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      if (containerRef.current) {
        setSize(Math.min(containerRef.current.clientWidth, 960));
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const animate = (ts: number) => {
      const delta = lastTimeRef.current ? (ts - lastTimeRef.current) / 1000 : 0;
      lastTimeRef.current = ts;
      setRotations((prev) =>
        RINGS.map((ring, i) => prev[i] + (360 / ring.rotationDuration) * ring.rotationDirection * delta)
      );
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [mounted]);

  const cx = size / 2;
  const cy = size / 2 + size * 0.055;

  const handleNodeClick = (node: NodeDef) => {
    const r = (RINGS.find(rng => rng.id === node.ring)?.radiusFraction ?? 0) * (size * 0.40) || 0;
    const rot = rotations[5 - node.ring] || 0;
    const pos = polarToXY(node.angle + rot, r, cx, cy);

    if (node.destinationType === 'external') {
      window.open(node.destination, '_blank', 'noopener noreferrer');
      return;
    }

    // Sequence:
    // 1. Clicked node pulses (setClickedNode)
    // 2. Zoom toward node & Show Tracer (setTracerActive)
    setClickedNode(node.id);
    setZoomLevel(2.2);
    setZoomCenter(pos);
    
    setTimeout(() => setTracerActive(true), 200);

    if (onNodeClick) onNodeClick(node.id);

    setTimeout(() => {
      setLocation(node.destination);
    }, 600);
  };

  const handleCoreClick = (name: string) => {
    const dest = CORE_NAMES[name];
    if (!dest) return;
    
    setClickedNode(`core-${name}`);
    setZoomLevel(1.8);
    setZoomCenter({ x: cx, y: cy });
    
    setTimeout(() => {
      setLocation(dest);
    }, 600);
  };

  const maxR = size * 0.40;
  const radii = RINGS.map((r) => r.radiusFraction * maxR);
  const fs = size * 0.016;

  // Node that's being tracked for the tracer line
  const trackingNode = NODES.find(n => n.id === clickedNode);
  const trackingPos = trackingNode ? polarToXY(trackingNode.angle + rotations[5 - trackingNode.ring], radii[5 - trackingNode.ring], cx, cy) : null;

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full flex items-center justify-center transition-all duration-700 ease-in-out bg-black overflow-hidden"
      style={{ 
        transform: `scale(${zoomLevel}) translate(${(cx - zoomCenter.x) * (zoomLevel - 1) / zoomLevel}px, ${(cy - zoomCenter.y) * (zoomLevel - 1) / zoomLevel}px)`,
        transformOrigin: 'center'
      }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
        <defs>
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#780000" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.3" />
          </radialGradient>

          <filter id="gGold" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
            <feFlood floodColor="#f0c060" floodOpacity="0.8" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="gClick" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="8" result="blur" />
            <feFlood floodColor="#f0c060" floodOpacity="1" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* RINGS */}
        {radii.map((r, i) => (
          <circle 
            key={i} cx={cx} cy={cy} r={r} 
            fill="url(#grad1)" stroke="#c9a84c" strokeWidth="1" 
            opacity={clickedNode ? 0.05 : 0.25} 
            className="transition-opacity duration-300"
          />
        ))}

        {/* TRACER LINE (Stage 2) */}
        {tracerActive && trackingPos && (
          <line 
            x1={trackingPos.x} y1={trackingPos.y}
            x2={trackingPos.x + (trackingPos.x - cx) * 2} y2={trackingPos.y + (trackingPos.y - cy) * 2}
            stroke="#f0c060" strokeWidth="0.8" strokeDasharray="4 2"
            className="animate-pulse"
          />
        )}

        {/* NODES */}
        {NODES.map((node) => {
          const r = radii[5 - node.ring];
          const pos = polarToXY(node.angle + (rotations[5 - node.ring] || 0), r, cx, cy);
          const isClicked = clickedNode === node.id;
          const isHovered = hoveredNode === node.id;
          const othersClicked = clickedNode && !isClicked;

          return (
            <g 
              key={node.id} 
              onMouseEnter={() => !clickedNode && setHoveredNode(node.id)} 
              onMouseLeave={() => setHoveredNode(null)}
              onClick={() => handleNodeClick(node)}
              className="cursor-pointer transition-all duration-300"
              opacity={othersClicked ? 0.1 : 1}
              filter={(isClicked || isHovered) ? (isClicked ? "url(#gClick)" : "url(#gGold)") : undefined}
            >
              <circle 
                cx={pos.x} cy={pos.y} 
                r={isClicked ? 10 : 4} 
                fill={isClicked || isHovered ? "#f0c060" : "#c9a84c"} 
                className="transition-all duration-300"
              />
              <text 
                x={pos.x + (isClicked ? 14 : 8)} y={pos.y + 4} 
                fill="#e8d8c0" fontSize={isClicked ? "12" : "9"} 
                fontFamily="Courier Prime"
                className="pointer-events-none transition-all"
                fontWeight={isClicked ? "bold" : "normal"}
              >
                {node.label}
              </text>
              
              {/* Tooltip */}
              {isHovered && (
                <g transform={`translate(${pos.x}, ${pos.y + 18})`}>
                  <text 
                    textAnchor="middle" 
                    fill="#f0c060" 
                    fontSize="10" 
                    fontFamily="Courier Prime"
                    className="font-black tracking-widest uppercase"
                  >
                    [{node.destinationType === 'external' ? 'Visit' : 'Read'}]: {node.destination.split('#').pop() || node.label} {node.destinationType === 'external' ? '↗' : '→'}
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {/* CORE SECTION */}
        <g opacity={clickedNode && !clickedNode.startsWith('core-') ? 0.05 : 1} className="transition-opacity duration-300">
           <circle cx={cx} cy={cy} r={radii[4] * 0.8} fill="rgba(25,0,0,0.90)" stroke="#cc1111" strokeWidth="1.2" opacity="0.6" />
           <text x={cx} y={cy - radii[4] * 0.45} textAnchor="middle" fill="#f0c060" fontSize={fs * 0.8} fontFamily="Cinzel" letterSpacing="0.12em" fontWeight="700">FALSIFIERS</text>
           <line x1={cx - 20} y1={cy - radii[4] * 0.4} x2={cx + 20} y2={cy - radii[4] * 0.4} stroke="#f0c060" strokeWidth="0.6" opacity="0.4" />
           
           {Object.keys(CORE_NAMES).map((name, i) => {
             const isClicked = clickedNode === `core-${name}`;
             const isHovered = hoveredNode === `core-${name}`;
             const yPos = cy - radii[4] * 0.3 + i * 11;
             return (
               <g 
                 key={name} 
                 onClick={() => handleCoreClick(name)} 
                 onMouseEnter={() => !clickedNode && setHoveredNode(`core-${name}`)}
                 onMouseLeave={() => setHoveredNode(null)}
                 className="cursor-pointer group"
                >
                  <text 
                    x={cx} y={yPos}
                    textAnchor="middle"
                    fill={isClicked || isHovered ? "#f0c060" : "#e0cdb0"}
                    fontSize="8"
                    fontFamily="Cormorant Garamond"
                    className="transition-colors group-hover:font-bold"
                    filter={isClicked ? "url(#gClick)" : undefined}
                  >
                    {name}
                  </text>
                  {isHovered && (
                    <text 
                      x={cx} y={yPos + 8} 
                      textAnchor="middle" 
                      fill="#f0c060" 
                      fontSize="7" 
                      fontFamily="Courier Prime"
                      className="font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      → READ DOSSIER
                    </text>
                  )}
               </g>
             );
           })}
        </g>
      </svg>
    </div>
  );
}
