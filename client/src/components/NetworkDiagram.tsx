import { useState } from "react";

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
    board: { bg: "bg-red-900/40", border: "border-red-500", text: "text-red-300" },
    law: { bg: "bg-yellow-900/40", border: "border-yellow-500", text: "text-yellow-300" },
    victims: { bg: "bg-green-900/40", border: "border-green-500", text: "text-green-300" },
  };

  const groupLabels = {
    board: "Seton Hall Board & RCAN",
    law: "Law Firms",
    victims: "Harassment Victims",
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
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {(Object.keys(groupLabels) as Array<keyof typeof groupLabels>).map((group) => (
          <div key={group} className="flex items-center gap-2">
            <div className={`w-4 h-4 rounded ${groupColors[group].bg} ${groupColors[group].border} border-2`} />
            <span className="text-sm">{groupLabels[group]}</span>
          </div>
        ))}
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-blue-500" />
          <span className="text-sm">Christie Connection</span>
        </div>
      </div>

      {/* Network Visualization */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(Object.keys(groupLabels) as Array<keyof typeof groupLabels>).map((group) => {
          const groupNodes = nodes.filter((n) => n.group === group);
          return (
            <div key={group} className="space-y-3">
              <h4 className={`text-sm font-bold text-center ${groupColors[group].text}`}>
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
                    onClick={() => handleNodeClick(node)}
                  >
                    {node.christieConnection && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold" title="Christie Connection">
                        C
                      </div>
                    )}
                    
                    {/* Lawyer tiles: show firm name prominently, then attorney name */}
                    {node.firm ? (
                      <>
                        <div className={`font-bold text-sm ${
                          node.representsVictims ? "text-green-300" : "text-yellow-200"
                        }`}>{node.firm}</div>
                        <div className="text-xs text-gray-300 mt-1">{node.name}</div>
                        <div className="text-xs text-gray-400 mt-1">{node.role}</div>
                        {node.representedSHU === false && !node.representsVictims && (
                          <div className="text-xs text-orange-400 mt-1 italic">Personal counsel (not SHU)</div>
                        )}
                      </>
                    ) : (
                      <>
                        <div className="font-bold text-sm">{node.name}</div>
                        <div className="text-xs text-gray-400 mt-1">{node.role}</div>
                        {node.dualRole && (
                          <div className="text-xs text-purple-400 mt-1 italic">{node.dualRole}</div>
                        )}
                      </>
                    )}
                    
                    {node.section && (
                      <div className="text-xs text-blue-400 mt-1">→ View Profile</div>
                    )}
                    
                    {/* Inline tooltip showing connections on hover */}
                    {isHovered && nodeConnections.length > 0 && (
                      <div className={`absolute top-0 z-50 w-64 bg-gray-900 border-2 border-gray-600 rounded-lg p-3 shadow-2xl ${
                        group === "victims" ? "right-full mr-4" : "left-full ml-4"
                      }`}>
                        <div className="font-bold text-sm mb-2 text-white">Connections:</div>
                        <div className="space-y-1 max-h-48 overflow-y-auto">
                          {nodeConnections.map((conn) => {
                            const otherNodeId = conn.from === node.id ? conn.to : conn.from;
                            const otherNode = nodes.find((n) => n.id === otherNodeId);
                            const direction = conn.from === node.id ? "→" : "←";
                            
                            return (
                              <div key={getConnectionKey(conn)} className="text-xs">
                                <span className="text-gray-400">{direction}</span>{" "}
                                <span className="font-bold text-gray-200">{otherNode?.name}</span>
                                <div className="text-gray-400 ml-3">{conn.label}</div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>



      <div className="mt-6 text-center text-sm text-gray-400">
        <p>Hover over nodes to see their connections in a tooltip.</p>
        <p className="mt-2">Blue "C" badge indicates Christie administration connection.</p>
        <p className="mt-2"><span className="text-yellow-200">Yellow</span> law firms represented Seton Hall. <span className="text-green-300">Green</span> law firms represent victims.</p>
      </div>
    </div>
  );
}
