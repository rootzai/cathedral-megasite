import React, { useRef, useEffect, useState } from 'react';
import ForceGraph2D, { ForceGraphMethods } from 'react-force-graph-2d';

// The 13 nodes of the network
const gData = {
    nodes: [
        { id: '1', name: 'Kevin Marino', group: 1, val: 2 },
        { id: '2', name: 'Thomas Scrivo', group: 2, val: 2 },
        { id: '3', name: 'Christopher Porrino', group: 2, val: 2 },
        { id: '4', name: 'Perry Law', group: 3, val: 1 },
        { id: '5', name: 'Karen Agnifilo', group: 3, val: 1 },
        { id: '6', name: 'Angelo Stio', group: 2, val: 1 },
        { id: '7', name: 'Jennifer Davenport', group: 4, val: 1 },
        { id: '8', name: 'Johanna Barba Jones', group: 4, val: 1 },
        { id: '9', name: 'Kevin Flood', group: 5, val: 1 },
        { id: '10', name: 'James DiGiulio', group: 2, val: 1 },
        { id: '11', name: 'Peter Villar', group: 2, val: 1 },
        { id: '12', name: 'Joseph Nyre', group: 6, val: 2 },
        // The Thirteenth Figure - Cardinal Tobin (Central)
        { id: '13', name: 'Cardinal Joseph W. Tobin', group: 0, val: 5 },
    ],
    links: [
        // King to his immediate knights
        { source: '13', target: '1' },
        { source: '13', target: '2' },
        
        // Legal shielding array (O'Toole Scrivo / Porrino)
        { source: '2', target: '3' },
        { source: '2', target: '10' },
        { source: '2', target: '6' },
        { source: '6', target: '11' },

        // Board & Independent Counsel network
        { source: '1', target: '4' },
        { source: '4', target: '5' },
        { source: '5', target: '6' },

        // Christie/State shielding
        { source: '3', target: '7' },
        { source: '3', target: '8' },
        
        // The ones who fell/witnessed
        { source: '12', target: '1' },
        { source: '12', target: '2' },
        { source: '9', target: '1' },
        { source: '9', target: '13' },
    ]
};

export default function NetworkThirteen() {
    const fgRef = useRef<ForceGraphMethods>();
    const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            setDimensions({
                width: containerRef.current.clientWidth,
                height: 500
            });
        }
    }, []);

    return (
        <div ref={containerRef} className="w-full relative border border-border bg-[#050505] rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute top-4 left-4 z-10 font-mono text-xs text-muted-foreground uppercase tracking-widest bg-black/50 px-2 py-1 rounded">
                Entity Relationship Diagram // Thirteen Figures
            </div>
            
            <ForceGraph2D
                ref={fgRef}
                width={dimensions.width}
                height={dimensions.height}
                graphData={gData}
                nodeLabel="name"
                nodeColor={node => {
                    if (node.id === '13') return '#e74c3c'; // Cardinal Tobin (Crimson)
                    if (node.id === '12' || node.id === '9') return '#f39c12'; // Whistleblowers (Orange)
                    if (node.group === 2) return '#3498db'; // External Legal (Blue)
                    if (node.group === 4) return '#9b59b6'; // State/Ethics (Purple)
                    return '#bdc3c7'; // Default Grey
                }}
                nodeRelSize={6}
                linkColor={() => 'rgba(255, 255, 255, 0.2)'}
                linkWidth={1.5}
                linkDirectionalParticles={2}
                linkDirectionalParticleSpeed={0.01}
                cooldownTicks={100}
                onEngineStop={() => {
                    if (fgRef.current) {
                        fgRef.current.zoomToFit(400, 50);
                    }
                }}
            />
            
            <div className="absolute bottom-4 right-4 z-10 flex flex-col gap-2 font-mono text-[10px] text-zinc-500 text-right">
                <div><span className="inline-block w-2 h-2 rounded-full bg-[#e74c3c] mr-2"></span>The 13th Figure (Tobin)</div>
                <div><span className="inline-block w-2 h-2 rounded-full bg-[#3498db] mr-2"></span>External Shielding Counsel</div>
                <div><span className="inline-block w-2 h-2 rounded-full bg-[#f39c12] mr-2"></span>Whistleblowers / Targets</div>
            </div>
        </div>
    );
}
