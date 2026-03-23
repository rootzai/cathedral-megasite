import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { networkData, NetworkNode, NetworkLink } from '@/lib/data';
import { Shield, Gavel, Church, FileText, Link as LinkIcon, AlertCircle, User } from 'lucide-react';

const NODE_GLOW = {
    clergy: "shadow-[0_0_20px_rgba(139,26,26,0.5)] border-[#8b1a1a]",
    board: "shadow-[0_0_20px_rgba(212,175,55,0.3)] border-[#d4af37]",
    legal: "shadow-[0_0_20px_rgba(70,130,180,0.3)] border-[#4682b4]",
    nexus: "shadow-[0_0_20px_rgba(147,112,219,0.3)] border-[#9370db]",
    evidence: "shadow-[0_0_20px_rgba(255,255,255,0.2)] border-white/50",
};

const NODE_ICONS = {
    clergy: Church,
    board: Shield,
    legal: Gavel,
    nexus: LinkIcon,
    evidence: FileText,
};

export default function McCarrickNetwork() {
    const [selectedNode, setSelectedNode] = useState<NetworkNode | null>(null);
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    // Calculate node positions in a circular layout
    const radius = 300;
    const centerX = 400;
    const centerY = 400;

    const getNodePos = (index: number, total: number, type: string) => {
        if (type === 'root') return { x: centerX, y: centerY };
        const angle = (index / (total - 1)) * 2 * Math.PI;
        return {
            x: centerX + radius * Math.cos(angle),
            y: centerY + radius * Math.sin(angle)
        };
    };

    const nodesWithPos = networkData.nodes.map((node, i) => ({
        ...node,
        ...getNodePos(i, networkData.nodes.length, node.type)
    }));

    return (
        <div className="relative w-full aspect-square max-w-4xl mx-auto bg-[#0a0a0c] rounded-full border border-white/5 overflow-hidden shadow-2xl">
            {/* SVG CONNECTION LINES */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 800">
                <defs>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8b1a1a" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="#8b1a1a" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#8b1a1a" stopOpacity="0.2" />
                    </linearGradient>
                </defs>
                {networkData.links.map((link, i) => {
                    const source = nodesWithPos.find(n => n.id === link.source);
                    const target = nodesWithPos.find(n => n.id === link.target);
                    if (!source || !target) return null;

                    const isHighlighted = hoveredNode === source.id || hoveredNode === target.id;

                    return (
                        <g key={i}>
                            <motion.path
                                d={`M ${source.x} ${source.y} L ${target.x} ${target.y}`}
                                stroke={isHighlighted ? "#8b1a1a" : "#333"}
                                strokeWidth={isHighlighted ? 3 : 1}
                                fill="none"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: isHighlighted ? 1 : 0.3 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                            {isHighlighted && (
                                <motion.circle
                                    r="3"
                                    fill="#8b1a1a"
                                    initial={{ offset: 0 }}
                                    animate={{ offset: 1 }}
                                >
                                    <animateMotion
                                        path={`M ${source.x} ${source.y} L ${target.x} ${target.y}`}
                                        dur="2s"
                                        repeatCount="indefinite"
                                    />
                                </motion.circle>
                            )}
                        </g>
                    );
                })}
            </svg>

            {/* NODES */}
            {nodesWithPos.map((node) => {
                const Icon = NODE_ICONS[node.group] || User;
                const isHovered = hoveredNode === node.id;
                const isSelected = selectedNode?.id === node.id;

                return (
                    <motion.div
                        key={node.id}
                        className={`absolute cursor-pointer flex flex-col items-center justify-center z-20`}
                        style={{ left: node.x, top: node.y, transform: 'translate(-50%, -50%)' }}
                        onMouseEnter={() => setHoveredNode(node.id)}
                        onMouseLeave={() => setHoveredNode(null)}
                        onClick={() => setSelectedNode(node)}
                        whileHover={{ scale: 1.1 }}
                        animate={{
                            scale: isHovered || isSelected ? 1.2 : 1,
                        }}
                    >
                        <div className={`w-16 h-16 rounded-full bg-black border-2 flex items-center justify-center transition-all ${NODE_GLOW[node.group]}`}>
                            <Icon className={`w-8 h-8 ${isHovered ? 'text-white' : 'text-white/60'}`} />
                        </div>
                        <span className={`mt-3 text-[10px] font-bold uppercase tracking-widest text-center max-w-[100px] leading-tight transition-colors ${isHovered ? 'text-white' : 'text-white/40'}`}>
                            {node.name}
                        </span>
                        {node.connection && (
                            <span className="text-[8px] text-[#8b1a1a] font-bold uppercase tracking-tighter mt-1">
                                {node.connection}
                            </span>
                        )}
                    </motion.div>
                );
            })}

            {/* DOSSIER PANEL */}
            <AnimatePresence>
                {selectedNode && (
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        className="absolute right-8 top-8 bottom-8 w-80 bg-black/95 border border-[#8b1a1a]/40 p-8 z-50 backdrop-blur-xl shadow-2xl"
                    >
                        <button 
                            onClick={() => setSelectedNode(null)}
                            className="absolute top-4 right-4 text-white/40 hover:text-white"
                        >
                            ✕
                        </button>
                        <span className="text-[#8b1a1a] font-bold text-[10px] uppercase tracking-[0.4em] block mb-6">
                            Forensic Dossier // {selectedNode.group}
                        </span>
                        <h3 className="text-2xl font-bold text-white uppercase tracking-tighter mb-4 leading-tight">
                            {selectedNode.name}
                        </h3>
                        <p className="text-sm text-white/80 leading-relaxed italic mb-8 border-l-2 border-[#8b1a1a] pl-4">
                            "{selectedNode.note}"
                        </p>
                        <div className="space-y-4">
                            <div className="bg-white/5 p-4 border border-white/10">
                                <span className="text-[8px] text-white/40 uppercase block mb-1">Status</span>
                                <span className="text-[10px] text-white font-bold uppercase">Institutional Agent</span>
                            </div>
                            <div className="bg-white/5 p-4 border border-white/10">
                                <span className="text-[8px] text-white/40 uppercase block mb-1">Connection Strength</span>
                                <span className="text-[10px] text-[#8b1a1a] font-bold uppercase">High-Fidelity</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* RADAR SWEEP BACKGROUND */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 rounded-full border border-white/20" />
                <div className="absolute inset-0 rounded-full border border-white/20 scale-75" />
                <div className="absolute inset-0 rounded-full border border-white/20 scale-50" />
                <div className="absolute inset-0 rounded-full border border-white/20 scale-25" />
                <div className="absolute top-1/2 left-0 w-full h-px bg-white/20" />
                <div className="absolute left-1/2 top-0 w-px h-full bg-white/20" />
            </div>
        </div>
    );
}
