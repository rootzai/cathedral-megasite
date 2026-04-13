import { AtomizedShell } from "@/lib/atomizedData";
import { useLocation } from "wouter";
import { useGotus } from "@/contexts/GotusContext";

interface DataShellCardProps {
  shell: AtomizedShell;
}

export const DataShellCard: React.FC<DataShellCardProps> = ({ shell }) => {
  const [, setLocation] = useLocation();
  const { registerShellVisit } = useGotus();

  const handleNavigate = () => {
    registerShellVisit(shell.id);
    setLocation(shell.link);
  };

  const getBorderColor = () => {
    switch (shell.stats.classification) {
      case "TOP SECRET": return "border-[#cc0000]";
      case "COMPARTMENTED": return "border-[#cc0000] border-dashed";
      case "SECRET": return "border-[#D4A017]";
      case "CONFIDENTIAL": return "border-[#1B7A8A]";
      case "OPEN":
      case "UNCLASSIFIED":
      default: return "border-[#F5EDD0]/30";
    }
  };

  return (
    <div 
      onClick={handleNavigate}
      className={`group relative flex flex-col bg-black border-2 ${getBorderColor()} p-6 cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:bg-[#111] hover:shadow-[0_0_30px_rgba(204,0,0,0.15)] h-full min-h-[400px] font-['Share_Tech_Mono']`}
    >
      {/* Background Glitch Filter on Hover */}
      <div className="absolute inset-0 bg-[#cc0000]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-screen" />

      {/* Header Block */}
      <div className="flex justify-between items-start border-b border-[#F5EDD0]/20 pb-4 mb-4">
        <div>
          <span className="text-[#F5EDD0]/50 text-xs tracking-widest block mb-1">NODE {shell.id} // {shell.group.toUpperCase()}</span>
          <h3 className="text-[#F5EDD0] text-xl font-bold tracking-widest uppercase">{shell.title}</h3>
        </div>
        <div className="text-right">
          <span className="text-[#cc0000] text-xs tracking-widest block font-bold">{shell.stats.classification}</span>
          <span className="text-[#F5EDD0]/50 text-[10px] tracking-widest">{shell.stats.dataVolume}</span>
        </div>
      </div>

      {/* Core Stats */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-[#111] border border-[#F5EDD0]/10 p-2">
          <span className="text-[#F5EDD0]/30 text-[10px] uppercase block">Exposure Idx</span>
          <span className="text-[#D4A017] font-bold text-lg">{shell.stats.exposureIndex}</span>
        </div>
        <div className="bg-[#111] border border-[#F5EDD0]/10 p-2">
          <span className="text-[#F5EDD0]/30 text-[10px] uppercase block">Abstract Key</span>
          <span className="text-[#1B7A8A] text-xs uppercase block truncate mt-1">{shell.symbol}</span>
        </div>
      </div>

      {/* Narrative Body */}
      <div className="text-[#F5EDD0]/70 text-xs leading-relaxed mb-4 flex-grow">
        {shell.narrative}
      </div>

      {/* D&D Combat Stats Dropdown (Defenses & Vectors) */}
      <div className="space-y-3 border-t border-[#F5EDD0]/20 pt-4 mt-auto">
        <div>
          <span className="text-[#cc0000]/70 text-[10px] uppercase tracking-widest block mb-1">[ ACTIVE DEFENSES ]</span>
          <span className="text-[#F5EDD0]/90 text-xs truncate block">{shell.stats.activeDefenses}</span>
        </div>
        <div>
          <span className="text-[#1B7A8A]/70 text-[10px] uppercase tracking-widest block mb-1">[ PRIMARY VECTORS ]</span>
          <div className="flex flex-wrap gap-2">
            {shell.stats.vectors.map((vec, idx) => (
              <span key={idx} className="bg-[#F5EDD0]/10 text-[#F5EDD0] text-[9px] px-2 py-1 rounded max-w-full truncate">
                {vec}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hidden Hover Elements (Visual Features & Secondary connections) */}
      <div className="absolute inset-0 bg-black/95 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
        <span className="text-[#cc0000] text-xs mb-2 tracking-widest uppercase">Visual Payload:</span>
        <p className="text-[#F5EDD0]/80 text-sm italic mb-6 leading-relaxed">"{shell.visualFeatures}"</p>
        
        <span className="text-[#1B7A8A] text-[10px] uppercase tracking-widest mb-1 border-t border-[#F5EDD0]/20 pt-4">Primary Subjects</span>
        <p className="text-[#F5EDD0]/60 text-xs mb-4">{shell.people.primary.join(" // ")}</p>

        <span className="text-[#D4A017] text-[10px] uppercase tracking-widest mb-1">Secondary Connections</span>
        <p className="text-[#F5EDD0]/60 text-xs">{shell.people.secondary.join(" // ")}</p>
      </div>
    </div>
  );
};
