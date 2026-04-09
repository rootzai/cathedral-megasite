import { useState } from "react";
import InvestigativeModal from "./InvestigativeModal";

interface Node {
  id: string;
  name: string;
  role: string;
  firm?: string; // Law firm name (separate from role for lawyers)
  group: "board" | "law" | "victims";
  section?: string; // Section ID to scroll to
  christieConnection?: boolean; // Mark Christie-connected people
  dualRole?: string; // For RCAN members who are also on Board
  representedSHU?: boolean; // For lawyers - did they represent SHU?
  representsVictims?: boolean; // For lawyers - do they represent victims?
}

interface Connection {
  from: string;
  to: string;
  label: string;
}

export default function NetworkDiagram() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [isFullViewOpen, setIsFullViewOpen] = useState(false);

  const nodes: Node[] = [
    // Seton Hall Board (including RCAN members with dual roles)
    { id: "marino", name: "Kevin Marino", role: "Board Chair", group: "board", christieConnection: true, dualRole: "Regent during scandal, complicit in electing Reilly" },

    { id: "tobin", name: "Cardinal Joseph Tobin", role: "Archbishop of Newark", group: "board", dualRole: "RCAN + SHU Trustee, complicit in electing Reilly" },
    { id: "reilly", name: "Monsignor Joseph Reilly", role: "Rector → President", group: "board", dualRole: "RCAN + SHU Trustee" },
    { id: "lorenzo", name: "Bishop Elias 'Richard' Lorenzo", role: "Seminary Rector", group: "board", dualRole: "RCAN + SHU Trustee, complicit in electing Reilly" },
    { id: "masherelli", name: "Anthony Masherelli", role: "Regent", group: "board", dualRole: "Regent during scandal, complicit in electing Reilly" },
    { id: "flood", name: "Kevin Flood", role: "Regent (resigned)", group: "board", dualRole: "Regent during scandal, complicit in electing Reilly" },
    { id: "pat-christie", name: "Mary Pat Christie", role: "Regent", group: "board", christieConnection: true, dualRole: "Regent during scandal, complicit in electing Reilly" },
    { id: "checchio", name: "Bishop Checchio", role: "Trustee", group: "board", dualRole: "Trustee during scandal, complicit in electing Reilly" },
    { id: "williams", name: "Bishop Williams", role: "Trustee (Camden)", group: "board", dualRole: "Trustee during scandal, complicit in electing Reilly" },
    { id: "lasala", name: "Joe Lasala", role: "Regent", group: "board", dualRole: "Regent during scandal, complicit in electing Reilly" },
    { id: "murray", name: "Don Murray", role: "Regent", group: "board", dualRole: "Regent during scandal, complicit in electing Reilly" },
    { id: "mccarrick", name: "Theodore McCarrick", role: "Archbishop (deceased, defrocked)", group: "board", dualRole: "Former RCAN" },

    // Law Firms (standardized format: attorney name, firm name, represented SHU)
    { id: "porrino", name: "Chris Porrino", firm: "Lowenstein Sandler", role: "Marino's personal counsel", group: "law", christieConnection: true, representedSHU: false },
    { id: "scrivo", name: "Tom Scrivo", firm: "O'Toole Scrivo", role: "Represented SHU", group: "law", christieConnection: true, representedSHU: true },
    { id: "stio", name: "Angelo Stio", firm: "Troutman Pepper", role: "Represented SHU", group: "law", representedSHU: true },
    { id: "linares", name: "Judge José Linares", firm: "McCarter English", role: "Represented SHU", group: "law", representedSHU: true },
    { id: "agnifilo", name: "Karen Friedman Agnifilo", firm: "Perry Law Group", role: "Represented SHU", group: "law", representedSHU: true },
    { id: "ropes-gray", name: "Gregory L. Demers", firm: "Ropes & Gray", role: "Investigation Firm", group: "law", representedSHU: true },
    { id: "latham", name: "Jonathan Su", firm: "Latham & Watkins", role: "Investigation Firm", group: "law", representedSHU: true },
    { id: "carella", name: "James E. Cecchi", firm: "Carella Byrne", role: "Represented SHU", group: "law", representedSHU: true },
    { id: "gibbons", name: "Peter J. Torcicollo", firm: "Gibbons", role: "Investigation Firm", group: "law", representedSHU: true },
    { id: "archer", name: "Patrick Papalia", firm: "Archer & Greiner", role: "Represented SHU", group: "law", representedSHU: true },
    { id: "mcomber", name: "Armen McOmber", firm: "McOmber & McOmber", role: "Represents Victims", group: "law", representedSHU: false, representsVictims: true },
    { id: "baldante", name: "John Baldante", firm: "Baldante Rubinstein", role: "Represents Victims", group: "law", representedSHU: false, representsVictims: true },

    // Victims
    { id: "capadona", name: "Kim Capadona", role: "General Counsel (victim)", group: "victims" },
    { id: "mcmonagle", name: "Donna McMonagle", role: "CFO (victim)", group: "victims" },
    { id: "kelli", name: "Kelli Nyre", role: "President's Wife (victim)", group: "victims" },
    { id: "nyre", name: "Joe Nyre", role: "Former President (victim)", group: "victims" },
    { id: "seminarians", name: "Seminarians", role: "Abuse victims", group: "victims" },
    { id: "nephews", name: "McCarrick's 'Nephews'", role: "Abuse victims", group: "victims" },
    { id: "plaintiffs", name: "450 Plaintiffs", role: "Benjamin case victims", group: "victims" },
    { id: "delbarton", name: "36 Delbarton Victims (including TM)", role: "Abuse victims", group: "victims" },
  ];

  const connections: Connection[] = [
    // Christie Network
    { from: "marino", to: "porrino", label: "Porrino is Marino's personal lawyer" },
    { from: "marino", to: "scrivo", label: "hired O'Toole Scrivo for SHU defense" },
    { from: "porrino", to: "scrivo", label: "Christie administration colleagues" },
    { from: "pat-christie", to: "marino", label: "Board colleagues" },

    // Board-Law Firm Connections
    { from: "marino", to: "nyre", label: "harassed/bullied" },
    { from: "marino", to: "linares", label: "leaked report to Judge Linares" },
    { from: "marino", to: "stio", label: "hired Troutman Pepper for defense" },
    { from: "marino", to: "tobin", label: "Board-Cardinal relationship" },
    { from: "marino", to: "agnifilo", label: "hired Perry Law for whitewash" },
    { from: "marino", to: "archer", label: "hired Archer & Greiner for defense" },
    { from: "marino", to: "carella", label: "hired Carella Byrne for defense" },
    { from: "marino", to: "mcomber", label: "hired McOmber & McOmber for defense" },

    // Law Firm Network
    { from: "scrivo", to: "linares", label: "document concealment coordination" },
    { from: "stio", to: "masherelli", label: "logbook erasure coordination" },
    { from: "masherelli", to: "flood", label: "erasure → resignation" },
    { from: "agnifilo", to: "porrino", label: "Perry Law coordination" },
    { from: "gibbons", to: "tobin", label: "investigated Tobin's cooperation" },

    // RCAN Network (dual roles)
    { from: "tobin", to: "reilly", label: "protected from consequences" },
    { from: "tobin", to: "lorenzo", label: "recommended to Pope for elevation" },
    { from: "reilly", to: "lorenzo", label: "seminary colleagues since 1987" },
    { from: "reilly", to: "nyre", label: "replaced as President" },

    // Harassment Victims
    { from: "marino", to: "capadona", label: "sexually harassed" },
    { from: "marino", to: "mcmonagle", label: "sexually harassed" },
    { from: "marino", to: "kelli", label: "sexually harassed" },
  ];

  const groupColors = {
    board: { bg: "bg-red-900/40", border: "border-zinc-300", text: "text-red-300" },
    law: { bg: "bg-yellow-900/40", border: "border-yellow-500", text: "text-yellow-300" },
    victims: { bg: "bg-green-900/40", border: "border-green-500", text: "text-green-300" },
  };

  const groupLabels = {
    board: "Institutional Shield // Board & RCAN",
    law: "The Defensive Architecture // Law Firms",
    victims: "The Breach Points // Harassment Victims",
  };

  const handleNodeClick = (node: Node) => {
    if (node.section) {
      const element = document.getElementById(node.section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const getConnectionKey = (conn: Connection) => `${conn.from}-${conn.to}`;

  return (
    <div className="my-12 p-8 bg-gray-900/50 border-2 border-gray-700 rounded-lg">
      <h3 className="text-2xl font-bold mb-6 text-center">The Network: Key Players & Connections</h3>

      {/* Legend */}
      <div className="flex flex-wrap justify-between items-center gap-6 mb-12 bg-black/40 p-6 rounded-lg border border-white/5 shadow-inner">
        <div className="flex flex-wrap gap-6">
          {(Object.keys(groupLabels) as Array<keyof typeof groupLabels>).map((group) => (
            <div key={group} className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded ${groupColors[group].bg} ${groupColors[group].border} border-2`} />
              <span className="text-sm font-bold uppercase tracking-widest text-zinc-400">{groupLabels[group].split(' // ')[0]}</span>
            </div>
          ))}
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            <span className="text-sm font-bold uppercase tracking-widest text-zinc-400">Christie Network</span>
          </div>
        </div>
        <button
          onClick={() => setIsFullViewOpen(true)}
          className="px-6 py-3 border border-red-900/40 text-xs font-bold uppercase tracking-[0.3em] text-[#8b1a1a] hover:bg-[#8b1a1a] hover:text-white transition-all rounded"
        >
          High-Fidelity Map View
        </button>
      </div>

      {/* Network Visualization */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(Object.keys(groupLabels) as Array<keyof typeof groupLabels>).map((group) => {
          const groupNodes = nodes.filter((n) => n.group === group);
          return (
            <div key={group} className="space-y-3">
              <h4 className={`text-base font-black text-center uppercase tracking-[0.2em] mb-4 ${groupColors[group].text}`}>
                {groupLabels[group]}
              </h4>
              {groupNodes.map((node) => {
                const isHovered = hoveredNode === node.id;
                const isConnected = hoveredNode && connections.some(
                  (c) => (c.from === hoveredNode && c.to === node.id) || (c.to === hoveredNode && c.from === node.id)
                );

                const nodeConnections = connections.filter(
                  (c) => c.from === node.id || c.to === node.id
                );

                return (
                  <div
                    key={node.id}
                    className={`
                      ${groupColors[group].bg} ${groupColors[group].border}
                      border-2 rounded-lg p-3 transition-all cursor-pointer relative
                      ${isHovered ? "ring-4 ring-white scale-105 shadow-xl" : ""}
                      ${isConnected ? "ring-2 ring-gray-400" : ""}
                      ${node.section ? "hover:scale-105 hover:shadow-lg" : ""}
                    `}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    onClick={() => {
                      setSelectedNode(node);
                      handleNodeClick(node);
                    }}
                  >
                    {node.christieConnection && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold" title="Christie Connection">
                        C
                      </div>
                    )}

                    {/* Lawyer tiles: show firm name prominently, then attorney name */}
                    {node.firm ? (
                      <>
                        <div className={`font-bold text-base ${node.representsVictims ? "text-green-300" : "text-yellow-200"
                          }`}>{node.firm}</div>
                        <div className="text-sm text-gray-200 mt-1 font-bold">{node.name}</div>
                        <div className="text-xs text-gray-400 mt-1">{node.role}</div>
                        {node.representedSHU === false && !node.representsVictims && (
                          <div className="text-xs text-orange-400 mt-2 italic font-mono uppercase">Personal counsel</div>
                        )}
                      </>
                    ) : (
                      <>
                        <div className="font-bold text-base text-white">{node.name}</div>
                        <div className="text-xs text-gray-400 mt-1 font-medium">{node.role}</div>
                        {node.dualRole && (
                          <div className="text-xs text-purple-400 mt-2 italic border-t border-purple-900/30 pt-1">{node.dualRole}</div>
                        )}
                      </>
                    )}

                    {node.section && !node.christieConnection && (
                      <div className="text-xs text-blue-400 mt-2 font-black uppercase tracking-widest">→ Profile Access</div>
                    )}

                    {/* Hover indicator pulse (Replacing the old tooltip) */}
                    {isHovered && (
                      <div className="absolute top-0 right-0 p-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>



      {/* Node Analysis Modal */}
      <InvestigativeModal
        isOpen={!!selectedNode}
        onClose={() => setSelectedNode(null)}
        title={selectedNode?.name || ""}
        subtitle={selectedNode?.firm ? `${selectedNode.firm} // ${selectedNode.role}` : `${selectedNode?.role} // Forensic Profile`}
      >
        {selectedNode && (
          <div className="space-y-8">
            <div className="p-6 bg-black border border-[#8b1a1a]/20 rounded-lg">
              <h4 className="text-[#8b1a1a] font-mono text-xs uppercase tracking-[0.4em] mb-4">Network Connections</h4>
              <div className="grid gap-4">
                {connections.filter(c => c.from === selectedNode.id || c.to === selectedNode.id).map(conn => {
                  const otherId = conn.from === selectedNode.id ? conn.to : conn.from;
                  const other = nodes.find(n => n.id === otherId);
                  return (
                    <div key={getConnectionKey(conn)} className="flex items-start gap-4 p-4 border border-zinc-900 bg-zinc-900/30 rounded">
                      <div className={`w-3 h-3 rounded-full mt-1.5 ${groupColors[other?.group || 'board'].bg}`} />
                      <div>
                        <p className="text-white font-bold text-lg">{other?.name}</p>
                        <p className="text-[#8b1a1a] font-mono text-xs uppercase tracking-widest mt-1">{conn.label}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </InvestigativeModal>

      {/* Full Network Map Modal */}
      <InvestigativeModal
        isOpen={isFullViewOpen}
        onClose={() => setIsFullViewOpen(false)}
        title="The Labyrinth"
        subtitle="RCAN-SHU Institutional Power Grid // Full Density Capture"
      >
        <div className="relative aspect-video bg-black rounded border border-[#1a1a22] overflow-hidden flex items-center justify-center p-20 text-center">
          <div>
            <div className="w-24 h-24 border-4 border-[#8b1a1a]/20 border-t-[#8b1a1a] rounded-full animate-slow-spin mx-auto mb-8" />
            <h4 className="text-2xl font-bold text-white uppercase tracking-widest mb-4">Generating High-Fidelity Graph</h4>
            <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.4em]">Rendering Interactive Sovereignty Links...</p>
            <p className="mt-8 text-zinc-600 italic">"The complexity of the network is the primary defense against accountability."</p>
          </div>
        </div>
      </InvestigativeModal>

      <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-zinc-600 font-mono tracking-widest uppercase">
        <div className="flex justify-center gap-12">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500" /> Christie Connection
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-yellow-500" /> Defense Counsel
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" /> Victim Advocacy
          </div>
        </div>
      </div>
    </div >
  );
}
