import React, { useEffect } from "react";
import { X } from "lucide-react";

interface InvestigativeModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}

export default function InvestigativeModal({ isOpen, onClose, title, subtitle, children }: InvestigativeModalProps) {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleEsc);
        }
        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 md:p-12">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/95 backdrop-blur-xl transition-opacity animate-in fade-in duration-500"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="relative w-full max-w-6xl max-h-full bg-[#111116] border border-[#8b1a1a]/40 shadow-2xl shadow-red-900/40 flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-[#1a1a22] bg-[#0d0d10]">
                    <div>
                        <span className="text-[#8b1a1a] font-mono text-[10px] uppercase tracking-[0.4em] block mb-1">Investigation // Deep Dive</span>
                        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">{title}</h2>
                        {subtitle && <p className="text-xs text-zinc-400 italic mt-1 font-medium">{subtitle}</p>}
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-[#8b1a1a]/20 text-[#8b1a1a] transition-all rounded-sm group"
                    >
                        <X className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-8 forensic-modal-scroll">
                    {children}
                </div>

                {/* Footer Meta */}
                <div className="p-4 bg-black/40 border-t border-[#1a1a22] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#8b1a1a] animate-pulse" />
                        <span className="text-[#333] font-mono text-[8px] uppercase tracking-widest">Verification: Forensic Integrity // High-Fidelity Capture</span>
                    </div>
                    <span className="text-zinc-400 font-mono text-[11px] font-bold uppercase tracking-[0.3em]">RCAN-SHU // Investigative Record // 2026</span>
                </div>
            </div>
        </div>
    );
}
