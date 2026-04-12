import { create } from 'zustand';
import { LocusNode, ChamberKey, CHAMBER_ORDER } from '@/lib/memoryPalaceData';

interface PalaceState {
    currentChamberIndex: number;
    hoveredLocus: LocusNode | null;
    activeChamberKey: ChamberKey;
    setHoveredLocus: (node: LocusNode | null) => void;
    nextChamber: () => void;
    prevChamber: () => void;
}

export const usePalaceStore = create<PalaceState>((set) => ({
    currentChamberIndex: 0,
    hoveredLocus: null,
    activeChamberKey: CHAMBER_ORDER[0],
    setHoveredLocus: (node) => set({ hoveredLocus: node }),
    nextChamber: () => set((state) => {
        const nextIndex = (state.currentChamberIndex + 1) % CHAMBER_ORDER.length;
        return { 
            currentChamberIndex: nextIndex, 
            activeChamberKey: CHAMBER_ORDER[nextIndex] 
        };
    }),
    prevChamber: () => set((state) => {
        const prevIndex = (state.currentChamberIndex - 1 + CHAMBER_ORDER.length) % CHAMBER_ORDER.length;
        return { 
            currentChamberIndex: prevIndex, 
            activeChamberKey: CHAMBER_ORDER[prevIndex] 
        };
    }),
}));
