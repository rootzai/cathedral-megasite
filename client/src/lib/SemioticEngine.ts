import { getSortedRegistry, UniversalNode } from "./UniversalRegistry";

export type PalaceRoom = "THE_VAULT" | "THE_SANCTUARY" | "THE_LEDGER" | "THE_CRYPT" | "ORPHAN";

export interface SemioticPath {
  room: PalaceRoom;
  signifier: string;
  themeColor: string;
  targetNode: UniversalNode;
  gateLabel: string;
}

const ROOM_MAP: Record<PalaceRoom, { signifier: string; themeColor: string; action: string }> = {
  THE_VAULT: { signifier: "⚖️", themeColor: "#CC2200", action: "ENTER THE VAULT" },
  THE_SANCTUARY: { signifier: "✝️", themeColor: "#5B2A86", action: "ASCEND TO THE SANCTUARY" },
  THE_LEDGER: { signifier: "🏛️", themeColor: "#555555", action: "CONTINUE IN THE LEDGER" },
  THE_CRYPT: { signifier: "👁️", themeColor: "#F5EDD0", action: "DESCEND TO THE CRYPT" },
  ORPHAN: { signifier: "🗝️", themeColor: "#D4A017", action: "UNLOCK MEMORY" }
};

/**
 * Determine the physical room of the Cathedral memory palace a node belongs to
 * based on its semiotic tags and its primary architectural classification.
 */
export function determineRoom(node: UniversalNode): PalaceRoom {
  const { tags } = node;
  
  if (tags.includes("latham") || tags.includes("vault") || tags.includes("evidence")) return "THE_VAULT";
  if (tags.includes("clergy") || tags.includes("mccarrick") || tags.includes("reilly")) return "THE_SANCTUARY";
  if (tags.includes("board") || tags.includes("legal-wall") || tags.includes("boards")) return "THE_LEDGER";
  if (tags.includes("survivor") || tags.includes("leaks") || tags.includes("press")) return "THE_CRYPT";

  // Fallbacks based on category if tags are missing
  if (node.category === "DOCUMENT") return "THE_VAULT";
  if (node.category === "BOARD_OR_FIRM") return "THE_LEDGER";

  return "ORPHAN";
}

/**
 * The core algorithm identifying "Mnemonic Gravity".
 * It takes the current node you are on, finds its primary semiotic tags,
 * and searches the Universal Registry for the heaviest associated nodes.
 */
export function calculateMnemonicPath(currentNodeId: string): { primary: SemioticPath | null, secondary: SemioticPath | null } {
  const registry = getSortedRegistry();
  const current = registry.find(n => n.id === currentNodeId);
  
  if (!current) return { primary: null, secondary: null };

  // Calculate scores for all other nodes based on tag intersections
  let candidates = registry
    .filter(n => n.id !== current.id)
    .map(node => {
      // Intersection mapping (how many tags do they share conceptually?)
      const intersectionCount = node.tags.filter(t => current.tags.includes(t)).length;
      
      // Calculate sheer gravity logic based on cross-tag connections
      const mnemonicWeight = (intersectionCount * 50) + node.rankings.globalWeight;
      
      return { node, mnemonicWeight };
    });

  // Sort candidates by heaviest mnemonic weight
  candidates.sort((a, b) => b.mnemonicWeight - a.mnemonicWeight);

  // We want to force a bit of dimension hopping, so we try to provide
  // one node in the SAME room, and one node in a DIFFERENT room if possible.
  const currentRoom = determineRoom(current);
  
  const sameRoomCandidate = candidates.find(c => determineRoom(c.node) === currentRoom);
  const diffRoomCandidate = candidates.find(c => determineRoom(c.node) !== currentRoom && determineRoom(c.node) !== "ORPHAN");

  let primaryCandidate = sameRoomCandidate?.node || candidates[0]?.node;
  let secondaryCandidate = diffRoomCandidate?.node || candidates[1]?.node;

  // Formatting output helper
  const formPath = (target: UniversalNode | undefined): SemioticPath | null => {
    if (!target) return null;
    const room = determineRoom(target);
    const config = ROOM_MAP[room];
    return {
      room,
      signifier: config.signifier,
      themeColor: config.themeColor,
      targetNode: target,
      gateLabel: `${config.action}: ${target.name}`
    };
  };

  return {
    primary: formPath(primaryCandidate),
    secondary: formPath(secondaryCandidate)
  };
}
