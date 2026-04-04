/**
 * ShieldDiagram.tsx — Ecclesiastical Noir / Gothic Machinery
 *
 * Fixes applied:
 * 1. "Ecclesiastical Noir" appears only once (bottom-left branding), removed from title block
 * 2. Typography: Cormorant Garamond for node labels (readable, elegant, not distracting)
 *    Cinzel Decorative kept only for the main title; ring labels use Cinzel (not Decorative)
 * 3. Ring radii varied non-uniformly so each band has enough width for its label
 * 4. Nodes redistributed evenly around the full 360° to avoid crowding
 * 5. Ring number badges are small, muted, and placed above the ring title (subordinate)
 */

import { useEffect, useRef, useState } from "react";

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
}

interface Ring {
  id: number;
  label: string;
  radiusFraction: number;
  rotationDuration: number;
  rotationDirection: 1 | -1;
  tickCount: number;
}

// Ring radii varied so each band has enough width for its label text
// Ring 5 (outermost) — wide band for "Victims & Survivors"
// Ring 4 — medium band for "The Outer Walls"
// Ring 3 — medium band for "Legal Apparatus"
// Ring 2 — narrower for "Legal Fortress"
// Ring 1 — innermost, "Secret Archives" core
const RINGS: Ring[] = [
  // Ring 5 — very slow, stately outer sentinel
  { id: 5, label: "Victims & Survivors", radiusFraction: 1.00, rotationDuration: 200, rotationDirection:  1, tickCount: 72 },
  // Ring 4 — medium-slow
  { id: 4, label: "The Outer Walls",     radiusFraction: 0.78, rotationDuration: 55,  rotationDirection: -1, tickCount: 60 },
  // Ring 3 — medium, opposite direction
  { id: 3, label: "Legal Apparatus",     radiusFraction: 0.59, rotationDuration: 30,  rotationDirection:  1, tickCount: 48 },
  // Ring 2 — noticeably faster
  { id: 2, label: "Legal Fortress",      radiusFraction: 0.41, rotationDuration: 18,  rotationDirection: -1, tickCount: 36 },
  // Ring 1 — fastest, the core spins urgently
  { id: 1, label: "Secret Archives",     radiusFraction: 0.24, rotationDuration: 10,  rotationDirection:  1, tickCount: 24 },
];

// Nodes spread evenly across the full 360°, avoiding 340–20° (top, where ring labels sit)
// Ring structure:
// Ring 1 — FALSIFIERS: named individuals (core list in CoreSection, not nodes)
// Ring 2 — LEGAL FORTRESS: law firms & legal entities directly shielding the core
// Ring 3 — LEGAL APPARATUS: broader institutional legal machinery
// Ring 4 — OUTER WALLS: major institutional shields (church, university, government)
// Ring 5 — VICTIMS & SURVIVORS: individuals and advocacy orgs on the outside
const NODES: NodeDef[] = [

  // ── Ring 5 — Victims, advocates, journalists, whistleblowers ──
  { id: "kelli-nyre",     label: "Kelli Nyre",               angle: 35,  ring: 5 },
  { id: "national-media", label: "NATIONAL MEDIA",           angle: 60,  ring: 5, isMedia: true },
  { id: "lara-mck",       label: "Lara McKeever",            sublabel: "and Sisters", angle: 82, ring: 5 },
  { id: "bishops-acc",    label: "BishopsAccountability",    angle: 108, ring: 5 },
  { id: "congress",       label: "Congress",                 angle: 132, ring: 5 },
  { id: "victims-bottom", label: "VICTIMS",                  angle: 178, ring: 5, isVictim: true },
  { id: "victims-law",    label: "Victims Law Firms",        angle: 205, ring: 5 },
  { id: "snap",           label: "SNAP",                     angle: 228, ring: 5 },
  { id: "joe-nyre",       label: "Joe Nyre",                 angle: 252, ring: 5 },
  { id: "nj-media",       label: "NJ MEDIA",                 angle: 278, ring: 5, isMedia: true },
  { id: "mark-crawford",  label: "Mark Crawford",            angle: 298, ring: 5 },
  { id: "mccomber",       label: "McOmber McOmber",          sublabel: "(Victims Atty)", angle: 155, ring: 5 },

  // ── Ring 4 — Outer Walls: major institutional shields ──
  { id: "shu-univ",       label: "Seton Hall",      sublabel: "University",          angle: 50,  ring: 4 },
  { id: "usccb",          label: "USCCB",           sublabel: "(Catholic Bishops)",   angle: 90,  ring: 4 },
  { id: "vatican-state",  label: "Holy See",        sublabel: "(Vatican State)",      angle: 148, ring: 4 },
  { id: "nj-governor",    label: "NJ Governor",     sublabel: "Office",               angle: 170, ring: 4 },
  { id: "nj-legislature", label: "NJ Legislature",                                    angle: 193, ring: 4 },
  { id: "rcan",           label: "RCAN",            sublabel: "(Newark Archdiocese)", angle: 212, ring: 4 },
  { id: "shu-board",      label: "Seton Hall Board",                                    angle: 325, ring: 4 },
  { id: "delbarton",      label: "Delbarton School",                                   angle: 335, ring: 4 },

  // ── Ring 3 — Legal Apparatus: the institutional legal machinery ──
  { id: "gibbons-pc",     label: "Gibbons P.C.",                                angle: 30,  ring: 3 },
  { id: "latham",         label: "Latham & Watkins",                            angle: 72,  ring: 3 },
  { id: "ropes-gray",     label: "Ropes & Gray",                                angle: 112, ring: 3 },
  { id: "seton-law",      label: "Seton Hall Law School",                       angle: 162, ring: 3 },
  { id: "rome",           label: "Rome (Vatican)",                              angle: 218, ring: 3 },
  { id: "ag-office",      label: "AG Office",                                   angle: 228, ring: 3 },
  { id: "nj-courts",      label: "NJ Courts",                                   angle: 285, ring: 3 },
  { id: "lowenstein",     label: "Lowenstein",                                  angle: 300, ring: 3 },
  { id: "troutman",        label: "Troutman Pepper",                             angle: 318, ring: 3 },
  { id: "usccb-legal",    label: "USCCB Legal",    sublabel: "Counsel",         angle: 12,  ring: 3 },

  // ── Ring 2 — Legal Fortress: direct legal shield around the core ──
  { id: "shu-legal",      label: "SHU Legal Firms",                             angle: 36,  ring: 2 },
  { id: "christie-ag",    label: "Christie's",     sublabel: "Legal Mafia",     angle: 75, ring: 2 },
  { id: "canon-law",      label: "Canon Law",      sublabel: "Tribunal",        angle: 235, ring: 2 },
  { id: "secret-archives-legal", label: "Archdiocese", sublabel: "Legal Counsel", angle: 300, ring: 2 },
];

function degToRad(deg: number) {
  return ((deg - 90) * Math.PI) / 180;
}

// ─── Icon Components ─────────────────────────────────────────────────────────
// All icons are drawn at origin (0,0) and scaled via transform at call site
// Scale: 1 unit = ~1px at the diagram's base size

function PersonIcon({ x, y, s, color, hovered }: { x: number; y: number; s: number; color: string; hovered: boolean }) {
  // Classic stick figure: circle head + body line + arms + legs
  const headR = s * 0.9;
  const glow = hovered ? "url(#gGold)" : undefined;
  return (
    <g transform={`translate(${x}, ${y})`} filter={glow}>
      {/* Head */}
      <circle cx={0} cy={-s * 3.2} r={headR} fill={color} opacity={0.9} />
      {/* Body */}
      <line x1={0} y1={-s * 2.3} x2={0} y2={0} stroke={color} strokeWidth={s * 0.55} strokeLinecap="round" />
      {/* Arms */}
      <line x1={-s * 1.6} y1={-s * 1.6} x2={s * 1.6} y2={-s * 1.6} stroke={color} strokeWidth={s * 0.45} strokeLinecap="round" />
      {/* Legs */}
      <line x1={0} y1={0} x2={-s * 1.4} y2={s * 2} stroke={color} strokeWidth={s * 0.45} strokeLinecap="round" />
      <line x1={0} y1={0} x2={s * 1.4} y2={s * 2} stroke={color} strokeWidth={s * 0.45} strokeLinecap="round" />
    </g>
  );
}

function MediaIcon({ x, y, s, color, hovered }: { x: number; y: number; s: number; color: string; hovered: boolean }) {
  // Newspaper: rectangle with ruled lines inside
  const w = s * 3.2; const h = s * 2.6;
  const glow = hovered ? "url(#gGold)" : undefined;
  return (
    <g transform={`translate(${x - w / 2}, ${y - h / 2})`} filter={glow}>
      <rect x={0} y={0} width={w} height={h} fill="none" stroke={color} strokeWidth={s * 0.45} rx={s * 0.3} opacity={0.9} />
      {/* Headline bar */}
      <rect x={s * 0.4} y={s * 0.4} width={w - s * 0.8} height={s * 0.7} fill={color} opacity={0.7} rx={s * 0.15} />
      {/* Text lines */}
      <line x1={s * 0.4} y1={s * 1.4} x2={w - s * 0.4} y2={s * 1.4} stroke={color} strokeWidth={s * 0.3} opacity={0.55} />
      <line x1={s * 0.4} y1={s * 1.9} x2={w * 0.7} y2={s * 1.9} stroke={color} strokeWidth={s * 0.3} opacity={0.45} />
    </g>
  );
}

function ChurchIcon({ x, y, s, color, hovered }: { x: number; y: number; s: number; color: string; hovered: boolean }) {
  // Cross: vertical + horizontal bar
  const glow = hovered ? "url(#gGold)" : undefined;
  return (
    <g transform={`translate(${x}, ${y})`} filter={glow}>
      {/* Vertical */}
      <line x1={0} y1={-s * 3.2} x2={0} y2={s * 1.8} stroke={color} strokeWidth={s * 0.7} strokeLinecap="round" opacity={0.9} />
      {/* Horizontal crossbar (upper third) */}
      <line x1={-s * 2} y1={-s * 1.6} x2={s * 2} y2={-s * 1.6} stroke={color} strokeWidth={s * 0.6} strokeLinecap="round" opacity={0.9} />
    </g>
  );
}

function GovtIcon({ x, y, s, color, hovered }: { x: number; y: number; s: number; color: string; hovered: boolean }) {
  // Capitol dome silhouette: dome arc + columns
  const glow = hovered ? "url(#gGold)" : undefined;
  return (
    <g transform={`translate(${x}, ${y})`} filter={glow}>
      {/* Base */}
      <rect x={-s * 2.5} y={s * 0.5} width={s * 5} height={s * 0.7} fill={color} opacity={0.85} rx={s * 0.1} />
      {/* Columns */}
      {[-1.6, -0.6, 0.6, 1.6].map((cx2, i) => (
        <rect key={i} x={cx2 * s - s * 0.2} y={-s * 1.2} width={s * 0.4} height={s * 1.7} fill={color} opacity={0.7} />
      ))}
      {/* Dome */}
      <path d={`M ${-s * 1.8} ${-s * 1.2} Q 0 ${-s * 4} ${s * 1.8} ${-s * 1.2}`}
        fill="none" stroke={color} strokeWidth={s * 0.55} strokeLinecap="round" opacity={0.9} />
      {/* Spire */}
      <line x1={0} y1={-s * 4} x2={0} y2={-s * 5.2} stroke={color} strokeWidth={s * 0.4} strokeLinecap="round" opacity={0.8} />
    </g>
  );
}

function LegalIcon({ x, y, s, color, hovered }: { x: number; y: number; s: number; color: string; hovered: boolean }) {
  // Scales of justice: balance beam + two pans
  const glow = hovered ? "url(#gGold)" : undefined;
  return (
    <g transform={`translate(${x}, ${y})`} filter={glow}>
      {/* Center pillar */}
      <line x1={0} y1={-s * 3.5} x2={0} y2={s * 1.5} stroke={color} strokeWidth={s * 0.5} strokeLinecap="round" opacity={0.9} />
      {/* Beam */}
      <line x1={-s * 2.8} y1={-s * 2.2} x2={s * 2.8} y2={-s * 2.2} stroke={color} strokeWidth={s * 0.5} strokeLinecap="round" opacity={0.9} />
      {/* Left pan strings */}
      <line x1={-s * 2.8} y1={-s * 2.2} x2={-s * 2.2} y2={-s * 0.6} stroke={color} strokeWidth={s * 0.35} opacity={0.7} />
      <line x1={-s * 2.8} y1={-s * 2.2} x2={-s * 3.4} y2={-s * 0.6} stroke={color} strokeWidth={s * 0.35} opacity={0.7} />
      {/* Right pan strings */}
      <line x1={s * 2.8} y1={-s * 2.2} x2={s * 2.2} y2={-s * 0.6} stroke={color} strokeWidth={s * 0.35} opacity={0.7} />
      <line x1={s * 2.8} y1={-s * 2.2} x2={s * 3.4} y2={-s * 0.6} stroke={color} strokeWidth={s * 0.35} opacity={0.7} />
      {/* Pans */}
      <path d={`M ${-s * 3.4} ${-s * 0.6} Q ${-s * 2.8} ${s * 0.4} ${-s * 2.2} ${-s * 0.6}`} fill="none" stroke={color} strokeWidth={s * 0.45} opacity={0.85} />
      <path d={`M ${s * 2.2} ${-s * 0.6} Q ${s * 2.8} ${s * 0.4} ${s * 3.4} ${-s * 0.6}`} fill="none" stroke={color} strokeWidth={s * 0.45} opacity={0.85} />
      {/* Base */}
      <line x1={-s * 1.2} y1={s * 1.5} x2={s * 1.2} y2={s * 1.5} stroke={color} strokeWidth={s * 0.5} strokeLinecap="round" opacity={0.8} />
    </g>
  );
}

function OrgIcon({ x, y, s, color, hovered }: { x: number; y: number; s: number; color: string; hovered: boolean }) {
  // Shield shape: protection / advocacy org
  const glow = hovered ? "url(#gGold)" : undefined;
  return (
    <g transform={`translate(${x}, ${y})`} filter={glow}>
      <path d={`M 0 ${-s * 3.5} L ${s * 2.5} ${-s * 2} L ${s * 2.5} ${s * 0.5} Q 0 ${s * 2.5} ${-s * 2.5} ${s * 0.5} L ${-s * 2.5} ${-s * 2} Z`}
        fill="none" stroke={color} strokeWidth={s * 0.55} strokeLinejoin="round" opacity={0.9} />
    </g>
  );
}

function VictimCrowdIcon({ x, y, s, color }: { x: number; y: number; s: number; color: string }) {
  // Two staggered rows of smaller figures — front row 6, back row 5
  // s is already small; scale down further so crowd is dense but not huge
  const fs = s * 0.55;
  const frontRow = [-2.5, -1.5, -0.5, 0.5, 1.5, 2.5];
  const backRow  = [-2, -1, 0, 1, 2];
  return (
    <g>
      {/* Back row — slightly higher, slightly more transparent */}
      {backRow.map((o, i) => (
        <PersonIcon key={`b${i}`} x={x + o * fs * 3.2} y={y - fs * 5} s={fs * 0.85} color={color} hovered={false} />
      ))}
      {/* Front row */}
      {frontRow.map((o, i) => (
        <PersonIcon key={`f${i}`} x={x + o * fs * 3.2} y={y} s={fs} color={color} hovered={false} />
      ))}
    </g>
  );
}

function NodeIconRenderer({ node, pos, s, hovered }: {
  node: NodeDef; pos: { x: number; y: number }; s: number; hovered: boolean;
}) {
  const color = hovered ? "#f0c060" : node.isMedia ? "#c9a84c" : node.isVictim ? "#ffffff" : "#e8d8c0";
  switch (node.icon) {
    case "person": return <PersonIcon x={pos.x} y={pos.y} s={s} color={color} hovered={hovered} />;
    case "media": return <MediaIcon x={pos.x} y={pos.y} s={s} color={color} hovered={hovered} />;
    case "church": return <ChurchIcon x={pos.x} y={pos.y} s={s} color={color} hovered={hovered} />;
    case "govt": return <GovtIcon x={pos.x} y={pos.y} s={s} color={color} hovered={hovered} />;
    case "legal": return <LegalIcon x={pos.x} y={pos.y} s={s} color={color} hovered={hovered} />;
    case "org": return <OrgIcon x={pos.x} y={pos.y} s={s} color={color} hovered={hovered} />;
    case "victim-crowd": return <VictimCrowdIcon x={pos.x} y={pos.y} s={s} color={color} />;
    default: return <circle cx={pos.x} cy={pos.y} r={s * 1.2} fill={color} stroke="#c9a84c" strokeWidth="1" />;
  }
}

function polarToXY(angle: number, radius: number, cx: number, cy: number) {
  const rad = degToRad(angle);
  return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
}

function TickRing({ cx, cy, radius, count, rotation }: {
  cx: number; cy: number; radius: number; count: number; rotation: number;
}) {
  // Tick marks are purely decorative — kept very fine and subtle
  // Only quarter-point ticks are visible; minor ticks are near-invisible
  const ticks = [];
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * 2 * Math.PI;
    const isQuarter = i % (count / 4) === 0;
    const isMajor = i % 6 === 0;
    // Skip minor ticks entirely — they add noise
    if (!isQuarter && !isMajor) continue;
    const tickLen = isQuarter ? 6 : 3;
    const inner = radius - tickLen / 2;
    const outer = radius + tickLen / 2;
    ticks.push(
      <line key={i}
        x1={cx + inner * Math.cos(angle)} y1={cy + inner * Math.sin(angle)}
        x2={cx + outer * Math.cos(angle)} y2={cy + outer * Math.sin(angle)}
        stroke={isQuarter ? "#c9a84c" : "#5a3c10"}
        strokeWidth={isQuarter ? 1.2 : 0.5}
        opacity={isQuarter ? 0.55 : 0.2}
      />
    );
  }
  return (
    <g style={{ transform: `rotate(${rotation}deg)`, transformOrigin: `${cx}px ${cy}px` }}>
      {ticks}
    </g>
  );
}

function FiligreeArc({ cx, cy, r1, r2, segments = 12 }: {
  cx: number; cy: number; r1: number; r2: number; segments?: number;
}) {
  const midR = (r1 + r2) / 2;
  const elements = [];
  for (let i = 0; i < segments; i++) {
    const angle = (i / segments) * 2 * Math.PI;
    const x = cx + midR * Math.cos(angle);
    const y = cy + midR * Math.sin(angle);
    elements.push(<circle key={i} cx={x} cy={y} r={1.5} fill="none" stroke="#7a5c1e" strokeWidth="0.6" opacity="0.35" />);
    if (i % 3 === 0) {
      const len = 5;
      elements.push(
        <g key={`cross-${i}`}>
          <line x1={x - len} y1={y} x2={x + len} y2={y} stroke="#7a5c1e" strokeWidth="0.5" opacity="0.3" />
          <line x1={x} y1={y - len} x2={x} y2={y + len} stroke="#7a5c1e" strokeWidth="0.5" opacity="0.3" />
        </g>
      );
    }
  }
  return <g>{elements}</g>;
}

function Spire({ x, y, size }: { x: number; y: number; size: number }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <polygon points={`0,${-size} ${size * 0.3},0 ${-size * 0.3},0`} fill="#7a5c1e" opacity="0.5" />
      <circle cx={0} cy={-size * 1.15} r={size * 0.2} fill="#c9a84c" opacity="0.5" />
    </g>
  );
}

export default function ShieldDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(700);
  const [rotations, setRotations] = useState<number[]>([0, 0, 0, 0, 0]);
  // Per-node orbital offsets — each node drifts at its own speed within its ring band
  const [nodeAngles, setNodeAngles] = useState<Record<string, number>>(() => ({
    ...Object.fromEntries(NODES.map((n) => [n.id, 0])),
    // ambient symbols per ring
    ...Object.fromEntries([0,1,2,3,4,5,6,7].map((i) => [`ambient-${i}`, 0])),
  }));
  // Per-node orbital speed (degrees/sec) — wide variance: 0.4 to 12 deg/sec
  // Inner ring nodes move faster; outer ring nodes move slower
  // Directions alternate per node for visual chaos
  const AMBIENT_SPEEDS: Record<string, number> = {
    "ambient-0": 4,  "ambient-1": -3,  // ring 5
    "ambient-2": -6, "ambient-3": 5,   // ring 4
    "ambient-4": 8,  "ambient-5": -7,  // ring 3
    "ambient-6": -12,"ambient-7": 10,  // ring 2
  };
  const NODE_SPEEDS = {
    ...Object.fromEntries(
      NODES.map((n, i) => {
        const ringFactor = n.ring === 1 ? 3.5 : n.ring === 2 ? 2.8 : n.ring === 3 ? 1.8 : n.ring === 4 ? 1.0 : 0.5;
        const variance = [0.4, 1.2, 2.5, 4.0, 6.5, 9.0, 12.0][i % 7];
        const dir = (i % 3 === 0 ? 1 : i % 3 === 1 ? -1 : (i % 2 === 0 ? 1 : -1));
        return [n.id, dir * variance * ringFactor];
      })
    ),
    ...AMBIENT_SPEEDS,
  };
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const lastTimeRef = useRef<number>(0);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      if (containerRef.current) {
        const s = Math.min(containerRef.current.clientWidth, containerRef.current.clientHeight, 960);
        setSize(Math.max(s, 400));
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    let running = true;
    const animate = (ts: number) => {
      if (!running) return;
      const delta = lastTimeRef.current ? (ts - lastTimeRef.current) / 1000 : 0;
      lastTimeRef.current = ts;
      setRotations((prev) =>
        RINGS.map((ring, i) => prev[i] + (360 / ring.rotationDuration) * ring.rotationDirection * delta)
      );
      setNodeAngles((prev) => {
        const next: Record<string, number> = {};
        for (const id in prev) {
          next[id] = prev[id] + (NODE_SPEEDS[id] ?? 2) * delta;
        }
        return next;
      });
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animFrameRef.current = requestAnimationFrame(animate);
    return () => { running = false; cancelAnimationFrame(animFrameRef.current); };
  }, [mounted]);

  const cx = size / 2;
  const cy = size / 2 + size * 0.055;
  const maxR = size * 0.40;
  const radii = RINGS.map((r) => r.radiusFraction * maxR);

  const fs = (frac: number) => Math.max(size * frac, 7);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: `${size * 0.85}px`, height: `${size * 0.85}px`,
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(120,0,0,0.22) 0%, rgba(60,0,0,0.12) 40%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <svg
        width={size} height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{
          position: "relative", zIndex: 1,
          opacity: mounted ? 1 : 0,
          transition: "opacity 1.5s ease",
          filter: "drop-shadow(0 0 50px rgba(139,0,0,0.35))",
          overflow: "visible",
        }}
      >
        <defs>
          <radialGradient id="bg5" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1a0800" stopOpacity="0.97" />
            <stop offset="100%" stopColor="#0d0503" stopOpacity="0.99" />
          </radialGradient>
          <radialGradient id="bg4" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#200900" stopOpacity="0.97" />
            <stop offset="100%" stopColor="#150600" stopOpacity="0.99" />
          </radialGradient>
          <radialGradient id="bg3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2e0a00" stopOpacity="0.97" />
            <stop offset="100%" stopColor="#1e0600" stopOpacity="0.99" />
          </radialGradient>
          <radialGradient id="bg2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#460c00" stopOpacity="0.97" />
            <stop offset="100%" stopColor="#2e0800" stopOpacity="0.99" />
          </radialGradient>
          <radialGradient id="bg1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#780000" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#450000" stopOpacity="0.97" />
          </radialGradient>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff3333" stopOpacity="0.85" />
            <stop offset="35%" stopColor="#aa0000" stopOpacity="0.6" />
            <stop offset="70%" stopColor="#550000" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0a0806" stopOpacity="0" />
          </radialGradient>

          <filter id="gGold" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood floodColor="#c9a84c" floodOpacity="0.6" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge><feMergeNode in="glow" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="gCrimson" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood floodColor="#cc0000" floodOpacity="0.7" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge><feMergeNode in="glow" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="gText" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feFlood floodColor="#f0c060" floodOpacity="0.5" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge><feMergeNode in="glow" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <marker id="arrowOrange" markerWidth="8" markerHeight="8" refX="4" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#ff6b00" />
          </marker>
        </defs>

        {/* ═══ RING FILLS ═══ */}
        <circle cx={cx} cy={cy} r={radii[0]} fill="url(#bg5)" />
        <circle cx={cx} cy={cy} r={radii[1]} fill="url(#bg4)" />
        <circle cx={cx} cy={cy} r={radii[2]} fill="url(#bg3)" />
        <circle cx={cx} cy={cy} r={radii[3]} fill="url(#bg2)" />
        <circle cx={cx} cy={cy} r={radii[4]} fill="url(#bg1)" />
        {/* Core glow */}
        <circle cx={cx} cy={cy} r={radii[4] * 1.4} fill="url(#coreGlow)" opacity="0.6">
          <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3.5s" repeatCount="indefinite" />
        </circle>

        {/* ═══ TICK RINGS ═══ */}
        {RINGS.map((ring, i) => (
          <TickRing key={ring.id} cx={cx} cy={cy} radius={radii[i]} count={ring.tickCount} rotation={rotations[i]} />
        ))}

        {/* Spoke pattern removed — was adding inner clutter */}

        {/* ═══ RING BORDERS ═══ */}
        {/* Ring 5 — gold */}
        <circle cx={cx} cy={cy} r={radii[0]} fill="none" stroke="#c9a84c" strokeWidth="1.8" opacity="0.75" filter="url(#gGold)" />
        <circle cx={cx} cy={cy} r={radii[0] - 7} fill="none" stroke="#7a5c1e" strokeWidth="0.6" opacity="0.35" />
        <circle cx={cx} cy={cy} r={radii[0] + 5} fill="none" stroke="#5a3c10" strokeWidth="0.5" opacity="0.25" />
        {/* Ring 4 */}
        <circle cx={cx} cy={cy} r={radii[1]} fill="none" stroke="#a07830" strokeWidth="1.4" opacity="0.65" />
        <circle cx={cx} cy={cy} r={radii[1] - 5} fill="none" stroke="#7a5c1e" strokeWidth="0.5" opacity="0.3" />
        {/* Ring 3 */}
        <circle cx={cx} cy={cy} r={radii[2]} fill="none" stroke="#cc2222" strokeWidth="1.6" opacity="0.7" filter="url(#gCrimson)" />
        <circle cx={cx} cy={cy} r={radii[2] - 5} fill="none" stroke="#8b1111" strokeWidth="0.5" opacity="0.3" />
        {/* Ring 2 */}
        <circle cx={cx} cy={cy} r={radii[3]} fill="none" stroke="#dd3333" strokeWidth="2" opacity="0.85" filter="url(#gCrimson)" />
        {/* Ring 1 */}
        <circle cx={cx} cy={cy} r={radii[4]} fill="none" stroke="#c9a84c" strokeWidth="1.5" opacity="0.7" />

        {/* Dashed accent rings removed from inner rings — kept clean */}

        {/* ═══ FILIGREE — outer ring only, inner rings kept clean ═══ */}
        <FiligreeArc cx={cx} cy={cy} r1={radii[0]} r2={radii[1]} segments={18} />

        {/* ═══ ANIMATED OUTER SENTINEL RINGS ═══ */}
        <g style={{ transform: `rotate(${rotations[0] * 0.3}deg)`, transformOrigin: `${cx}px ${cy}px` }}>
          <circle cx={cx} cy={cy} r={radii[0] + size * 0.022}
            fill="none" stroke="#5a3c10" strokeWidth="1" opacity="0.4"
            strokeDasharray={`${size * 0.012} ${size * 0.018}`} />
        </g>
        <g style={{ transform: `rotate(${-rotations[0] * 0.5}deg)`, transformOrigin: `${cx}px ${cy}px` }}>
          <circle cx={cx} cy={cy} r={radii[0] + size * 0.038}
            fill="none" stroke="#7a5c1e" strokeWidth="0.7" opacity="0.3"
            strokeDasharray={`${size * 0.008} ${size * 0.025}`} />
        </g>

        {/* Rune ring removed from inner core — kept clean */}

        {/* ═══ GOTHIC SPIRES at cardinal points on ring 5 ═══ */}
        {[0, 90, 180, 270].map((angle) => {
          const pos = polarToXY(angle, radii[0], cx, cy);
          return <Spire key={angle} x={pos.x} y={pos.y} size={size * 0.018} />;
        })}
        {[45, 135, 225, 315].map((angle) => {
          const pos = polarToXY(angle, radii[0], cx, cy);
          return <Spire key={angle} x={pos.x} y={pos.y} size={size * 0.011} />;
        })}

        {/* ═══ RING LABELS ═══
            Each label is centered in its ring band at the top (12 o'clock).
            Ring number appears ABOVE the title, smaller and muted — purely subordinate. */}

        {/* Ring 5 */}
        {(() => {
          const bandMidY = cy - radii[1] - (radii[0] - radii[1]) * 0.5;
          const numY = bandMidY - fs(0.022) * 0.75;
          const titleY = bandMidY + fs(0.022) * 0.45;
          return (
            <g>
              <text x={cx} y={numY} textAnchor="middle" fill="#7a5c1e"
                fontSize={fs(0.013)} fontFamily="'Cinzel', serif" letterSpacing="0.18em" opacity="0.55">
                RING 5
              </text>
              <text x={cx} y={titleY} textAnchor="middle" fill="#c9a84c"
                fontSize={fs(0.026)} fontFamily="'Cinzel', serif"
                letterSpacing="0.1em" fontWeight="700" filter="url(#gGold)">
                VICTIMS &amp; SURVIVORS
              </text>
            </g>
          );
        })()}

        {/* Ring 4 */}
        {(() => {
          const bandMidY = cy - (radii[1] + radii[2]) / 2;
          const numY = bandMidY - fs(0.021) * 0.75;
          const titleY = bandMidY + fs(0.021) * 0.45;
          return (
            <g>
              <text x={cx} y={numY} textAnchor="middle" fill="#7a5c1e"
                fontSize={fs(0.013)} fontFamily="'Cinzel', serif" letterSpacing="0.18em" opacity="0.55">
                RING 4
              </text>
              <text x={cx} y={titleY} textAnchor="middle" fill="#c9a84c"
                fontSize={fs(0.024)} fontFamily="'Cinzel', serif"
                letterSpacing="0.10em" fontWeight="700" filter="url(#gGold)">
                THE OUTER WALLS
              </text>
            </g>
          );
        })()}

        {/* Ring 3 */}
        {(() => {
          // Title centered in Ring 3 band (original position)
          const bandMidY = cy - (radii[2] + radii[3]) / 2;
          const numY = bandMidY - fs(0.020) * 0.75;
          const titleY = bandMidY + fs(0.020) * 0.45;
          return (
            <g>
              <text x={cx} y={numY} textAnchor="middle" fill="#7a5c1e"
                fontSize={fs(0.013)} fontFamily="'Cinzel', serif" letterSpacing="0.18em" opacity="0.55">
                RING 3
              </text>
              <text x={cx} y={titleY} textAnchor="middle" fill="#ff7777"
                fontSize={fs(0.022)} fontFamily="'Cinzel', serif"
                letterSpacing="0.08em" fontWeight="700" filter="url(#gCrimson)">
                LEGAL APPARATUS
              </text>
            </g>
          );
        })()}

        {/* Ring 2 */}
        {(() => {
          const bandMidY = cy - (radii[3] + radii[4]) / 2;
          const numY = bandMidY - fs(0.019) * 0.75;
          const titleY = bandMidY + fs(0.019) * 0.45;
          return (
            <g>
              <text x={cx} y={numY} textAnchor="middle" fill="#7a5c1e"
                fontSize={fs(0.013)} fontFamily="'Cinzel', serif" letterSpacing="0.18em" opacity="0.55">
                RING 2
              </text>
              <text x={cx} y={titleY} textAnchor="middle" fill="#ff5555"
                fontSize={fs(0.020)} fontFamily="'Cinzel', serif"
                letterSpacing="0.06em" fontWeight="700" filter="url(#gCrimson)">
                LEGAL FORTRESS
              </text>
            </g>
          );
        })()}

        {/* Ring 1 — Secret Archives: label sits at top of ring 1 band, above the name list */}
        {(() => {
          // Place label near the top of ring 1 (just inside the ring border)
          const titleY = cy - radii[4] * 0.82;
          const numY = titleY - fs(0.018) * 1.1;
          return (
            <g>
              <text x={cx} y={numY} textAnchor="middle" fill="#7a5c1e"
                fontSize={fs(0.013)} fontFamily="'Cinzel', serif" letterSpacing="0.18em" opacity="0.55">
                RING 1
              </text>
              <text x={cx} y={titleY} textAnchor="middle" fill="#c9a84c"
                fontSize={fs(0.020)} fontFamily="'Cinzel', serif"
                letterSpacing="0.06em" fontWeight="700" filter="url(#gGold)">
                SECRET ARCHIVES
              </text>
            </g>
          );
        })()}

        {/* ═══ PERPETRATORS CORE ═══ */}
        <CoreSection cx={cx} cy={cy} radius={radii[4]} size={size} />

        {/* ═══ AMBIENT RING SYMBOLS — 1-2 per ring, orbiting slowly ═══ */}
        {[
          // Ring 5: person + media icon
          { ring: 5, icon: "person" as const, baseAngle: 0,   speed: 4  },
          { ring: 5, icon: "media"  as const, baseAngle: 180, speed: -3 },
          // Ring 4: church cross + govt dome
          { ring: 4, icon: "church" as const, baseAngle: 45,  speed: -6 },
          { ring: 4, icon: "govt"   as const, baseAngle: 225, speed: 5  },
          // Ring 3: scales of justice + scroll
          { ring: 3, icon: "legal"  as const, baseAngle: 90,  speed: 8  },
          { ring: 3, icon: "org"    as const, baseAngle: 270, speed: -7 },
          // Ring 2: scales + church
          { ring: 2, icon: "legal"  as const, baseAngle: 135, speed: -12 },
          { ring: 2, icon: "church" as const, baseAngle: 315, speed: 10  },
        ].map((sym, i) => {
          const ringIndex = RINGS.findIndex((r) => r.id === sym.ring);
          const innerRingIndex = ringIndex + 1;
          const outerR = radii[ringIndex];
          const innerR = innerRingIndex < radii.length ? radii[innerRingIndex] : 0;
          const nodeR = (outerR + innerR) / 2;
          // Use a shared ambient angle that advances with time
          const ambientAngle = sym.baseAngle + (nodeAngles[`ambient-${i}`] ?? 0);
          const pos = polarToXY(ambientAngle, nodeR, cx, cy);
          const s = size * 0.009; // ambient decorative — one tick smaller than before
          const color = "#7a5c1e";
          const fakeNode: NodeDef = { id: `ambient-${i}`, label: "", angle: sym.baseAngle, ring: sym.ring as any, icon: sym.icon };
          return (
            <g key={`ambient-${i}`} style={{ pointerEvents: "none" }} opacity="0.35">
              <NodeIconRenderer node={fakeNode} pos={pos} s={s} hovered={false} />
            </g>
          );
        })}

        {/* ═══ NODES — labels only, no per-node icons ═══ */}
        {NODES.map((node) => {
          const ringIndex = RINGS.findIndex((r) => r.id === node.ring);
          const innerRingIndex = ringIndex + 1;
          const outerR = radii[ringIndex];
          const innerR = innerRingIndex < radii.length ? radii[innerRingIndex] : 0;
          const nodeR = (outerR + innerR) / 2;

          const labelPos = polarToXY(node.angle, nodeR, cx, cy);
          const isHovered = hoveredNode === node.id;

          return (
            <g key={node.id} style={{ cursor: "pointer" }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}>
              {/* Small dot marker at label anchor */}
              <circle cx={labelPos.x} cy={labelPos.y} r={size * 0.004}
                fill={isHovered ? "#f0c060" : "#c9a84c"} opacity={isHovered ? 0.9 : 0.5}
                filter={isHovered ? "url(#gGold)" : undefined} />
              <NodeLabel
                x={labelPos.x} y={labelPos.y}
                label={node.label}
                sublabel={node.sublabel}
                angle={node.angle}
                size={size}
                ring={node.ring}
                isHovered={isHovered}
                isMedia={node.isMedia}
                iconS={0}
              />
            </g>
          );
        })}

        {/* Victim crowd is now rendered as part of the VICTIMS node icon */}

        {/* ═══ BREACH POINT ═══ */}
        <BreachPoint cx={cx} cy={cy} radii={radii} size={size} />

        {/* ═══ OUTER TITLE & BRANDING ═══ */}
        <OuterChrome cx={cx} cy={cy} size={size} outerR={radii[0]} />
      </svg>
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function NodeLabel({ x, y, label, sublabel, angle, size, ring, isHovered, isMedia, iconS }: {
  x: number; y: number; label: string; sublabel?: string; angle: number; size: number;
  ring?: number; isHovered: boolean; isMedia?: boolean; iconS?: number;
}) {
  // Scale font by ring: ring 2 (innermost) gets smaller text, ring 5 (outermost) gets larger
  const ringFactor = ring === 2 ? 0.013 : ring === 3 ? 0.015 : 0.016;
  const fs = Math.max(size * ringFactor, 7);
  // gap accounts for icon height so label clears the icon
  const gap = (iconS ?? 0) * 5.5 + 4;

  let dx = 0;
  let dy = gap;
  let anchor: "middle" | "start" | "end" = "middle";

  const a = ((angle % 360) + 360) % 360;
  if (a > 25 && a < 155) {
    dx = gap; dy = 4; anchor = "start";
  } else if (a > 205 && a < 335) {
    dx = -gap; dy = 4; anchor = "end";
  } else if (a >= 155 && a <= 205) {
    dy = gap + 4; anchor = "middle";
  } else {
    dy = -gap; anchor = "middle";
  }

  const fill = isHovered ? "#f0c060" : isMedia ? "#c9a84c" : "#e8d8c0";
  const weight = isMedia ? "600" : "400";

  return (
    <g style={{ pointerEvents: "none" }}>
      <text x={x + dx} y={y + dy}
        textAnchor={anchor} fill={fill}
        fontSize={fs} fontFamily="'Cormorant Garamond', serif" fontWeight={weight}
        filter={isHovered ? "url(#gText)" : undefined}
        style={{ transition: "fill 0.2s ease" }}>
        {label}
      </text>
      {sublabel && (
        <text x={x + dx} y={y + dy + fs * 1.3}
          textAnchor={anchor} fill={fill}
          fontSize={fs * 0.82} fontFamily="'Cormorant Garamond', serif" fontStyle="italic" opacity="0.75"
          style={{ transition: "fill 0.2s ease" }}>
          {sublabel}
        </text>
      )}
    </g>
  );
}

function CoreSection({ cx, cy, radius, size }: { cx: number; cy: number; radius: number; size: number }) {
  // Clean inner core: SECRET ARCHIVES at top (rendered outside, in ring label section)
  // PERPETRATORS label just below that, then names in a tight centered list
  const innerR = radius * 0.72;
  // Font size scaled to fit 11 names inside the circle — tighter spacing
  const fs = Math.max(size * 0.012, 6);
  const lineH = fs * 1.28;

  const names = [
    "Theodore McCarrick \u2018Uncle Ted\u2019",
    "Msgr Joseph Reilly",
    "Fr. Kenneth Martin",
    "Hank D\u2019Alessandro",
    "Kevin Marino",
    "Chris Porrino",
    "Tom Scrivo",
    "The Dirty Dozen",
    "Cardinal Tobin",
    "Chris Christie",
    "Elias Lorenzo Bishop",
    "Bishop Checchio",
  ];

  // Layout: FALSIFIERS at top of core, names tightly packed below
  const perpY = cy - innerR * 0.88;
  const underlineY = perpY + fs * 1.15;
  const namesStartY = underlineY + fs * 0.9;

  return (
    <g>
      {/* Core fill */}
      <circle cx={cx} cy={cy} r={innerR} fill="rgba(40,0,0,0.80)" />
      <circle cx={cx} cy={cy} r={innerR} fill="none" stroke="#cc1111" strokeWidth="1.2" opacity="0.5" />

      {/* FALSIFIERS label — bright gold, readable */}
      <text x={cx} y={perpY}
        textAnchor="middle" fill="#f0c060"
        fontSize={fs * 1.05} fontFamily="'Cinzel', serif"
        letterSpacing="0.12em" fontWeight="700" filter="url(#gGold)">
        FALSIFIERS
      </text>

      {/* Underline rule directly below FALSIFIERS */}
      <line
        x1={cx - innerR * 0.52} y1={underlineY}
        x2={cx + innerR * 0.52} y2={underlineY}
        stroke="#f0c060" strokeWidth="0.8" opacity="0.55" />

      {/* Names — tight below underline */}
      {names.map((name, i) => {
        const isBold = [
          "Theodore McCarrick \u2018Uncle Ted\u2019",
          "Msgr Joseph Reilly",
          "Fr. Kenneth Martin",
          "Cardinal Tobin",
          "Elias Lorenzo Bishop",
          "Bishop Checchio",
          "The Dirty Dozen",
        ].includes(name);
        return (
          <text key={name}
            x={cx} y={namesStartY + i * lineH}
            textAnchor="middle"
            fill={isBold ? "#f0c060" : "#e0cdb0"}
            fontSize={isBold ? fs * 1.05 : fs}
            fontFamily="'Cormorant Garamond', serif"
            fontWeight={isBold ? "700" : "400"}
            opacity="0.95">
            {name}
          </text>
        );
      })}
    </g>
  );
}

function BreachPoint({ cx, cy, radii, size }: { cx: number; cy: number; radii: number[]; size: number }) {
  const angle = 127;
  const r = (radii[2] + radii[3]) / 2;
  const pos = polarToXY(angle, r, cx, cy);
  const arrowEnd = polarToXY(angle, radii[3] * 0.55, cx, cy);
  const fs = Math.max(size * 0.016, 8);

  return (
    <g>
      <line x1={pos.x} y1={pos.y} x2={arrowEnd.x} y2={arrowEnd.y}
        stroke="#ff6b00" strokeWidth="2.2" markerEnd="url(#arrowOrange)" opacity="0.9" />
      <circle cx={pos.x} cy={pos.y} r={24} fill="rgba(255,107,0,0.08)" stroke="#ff6b00" strokeWidth="1.5">
        <animate attributeName="r" values="22;29;22" dur="2.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;1;0.7" dur="2.2s" repeatCount="indefinite" />
      </circle>
      <circle cx={pos.x} cy={pos.y} r={14} fill="rgba(255,107,0,0.18)" stroke="#ff6b00" strokeWidth="2">
        <animate attributeName="opacity" values="0.5;0.95;0.5" dur="2.2s" repeatCount="indefinite" />
      </circle>
      <circle cx={pos.x} cy={pos.y} r={5} fill="#ff6b00" opacity="0.9" />
      <text x={pos.x + 30} y={pos.y}
        textAnchor="start" fill="#ff6b00"
        fontSize={fs * 0.9} fontFamily="'Cinzel', serif"
        fontWeight="700" letterSpacing="0.05em" filter="url(#gCrimson)">
        BREACH
      </text>
      <text x={pos.x + 30} y={pos.y + fs + 2}
        textAnchor="start" fill="#ff6b00"
        fontSize={fs * 0.9} fontFamily="'Cinzel', serif"
        fontWeight="700" letterSpacing="0.05em" filter="url(#gCrimson)">
        POINT
      </text>
    </g>
  );
}

function OuterChrome({ cx, cy, size, outerR }: { cx: number; cy: number; size: number; outerR: number }) {
  const fs = (f: number) => Math.max(size * f, 8);

  return (
    <g>
      {/* Main title — Cormorant Garamond SC, bold, elegant, not decorative-distracting */}
      <text x={cx} y={size * 0.042}
        textAnchor="middle" fill="#c9a84c"
        fontSize={fs(0.038)} fontFamily="'Cormorant SC', 'Cormorant Garamond', Georgia, serif"
        letterSpacing="0.08em" fontWeight="700" filter="url(#gGold)">
        THE CHURCH SHIELD DIAGRAM
      </text>
      {/* Subtitle — spaced caps, Cinzel, muted */}
      <text x={cx} y={size * 0.042 + fs(0.038) * 1.25}
        textAnchor="middle" fill="#d4c4a0"
        fontSize={fs(0.016)} fontFamily="'Cinzel', serif"
        letterSpacing="0.3em" opacity="0.75" fontWeight="400">
        ARCHITECTURE OF PROTECTION
      </text>

      {/* Decorative rule under title */}
      {(() => {
        const ruleY = size * 0.042 + fs(0.036) * 1.3 + fs(0.018) * 1.5;
        const ruleW = outerR * 0.5;
        return (
          <g>
            <line x1={cx - ruleW} y1={ruleY} x2={cx + ruleW} y2={ruleY}
              stroke="#7a5c1e" strokeWidth="0.6" opacity="0.5" />
            <circle cx={cx} cy={ruleY} r={3} fill="#7a5c1e" opacity="0.5" />
            <circle cx={cx - ruleW} cy={ruleY} r={2} fill="#7a5c1e" opacity="0.4" />
            <circle cx={cx + ruleW} cy={ruleY} r={2} fill="#7a5c1e" opacity="0.4" />
          </g>
        );
      })()}

      {/* Bottom branding — Sodom Hall title + Church Shield Diagram subtitle */}
      <text x={size * 0.055} y={size * 0.965}
        textAnchor="start" fill="#c9a84c"
        fontSize={fs(0.034)} fontFamily="'Cormorant SC', 'Cormorant Garamond', Georgia, serif"
        letterSpacing="0.04em" fontWeight="700" filter="url(#gGold)">
        Sodom Hall
      </text>


      {/* Cardinal ornaments on outer ring */}
      {[0, 90, 180, 270].map((a) => {
        const p = polarToXY(a, outerR + size * 0.03, cx, cy);
        return (
          <g key={a}>
            <circle cx={p.x} cy={p.y} r={4.5} fill="#7a5c1e" opacity="0.55" />
            <circle cx={p.x} cy={p.y} r={8} fill="none" stroke="#7a5c1e" strokeWidth="0.8" opacity="0.35" />
            <circle cx={p.x} cy={p.y} r={12} fill="none" stroke="#5a3c10" strokeWidth="0.5" opacity="0.2" />
          </g>
        );
      })}
      {[45, 135, 225, 315].map((a) => {
        const p = polarToXY(a, outerR + size * 0.025, cx, cy);
        return <circle key={a} cx={p.x} cy={p.y} r={2.5} fill="#7a5c1e" opacity="0.4" />;
      })}
    </g>
  );
}
