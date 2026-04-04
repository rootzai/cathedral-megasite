import { TipSubmissionForm } from "@/components/TipSubmissionForm";
import { Shield, Lock, AlertCircle, Search } from "lucide-react";

export default function TipsPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0c] text-white pt-24 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-12 border-b border-red-900/30 pb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Shield className="w-6 h-6 text-red-600" />
                        <span className="font-mono text-xs text-red-600 uppercase tracking-[0.5em]">Forensic Signal // Whistleblower Portal</span>
                    </div>
                    <h1 className="text-5xl font-serif uppercase tracking-wider mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Submit Intelligence
                    </h1>
                    <p className="text-zinc-400 font-serif text-lg italic leading-relaxed">
                        Secure, encrypted channel for transmitting evidence regarding institutional cover-up, settlement fraud (The Rewrite), and clerical networks.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12">
                    {/* The Form */}
                    <TipSubmissionForm />

                    {/* Safety Protocols */}
                    <div className="bg-red-950/5 border border-white/5 p-8 rounded-lg space-y-6">
                        <div className="flex items-center gap-2 mb-2">
                            <Lock className="w-4 h-4 text-zinc-500" />
                            <h4 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Forensic Safety Protocols</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <h5 className="text-red-900 font-bold text-xs uppercase tracking-widest">1. Technical Hygiene</h5>
                                <p className="text-[10px] text-zinc-600 font-mono leading-loose uppercase">
                                    Do not use employer-issued devices or networks. Access this portal via Tor or a non-logging VPN on a personal device.
                                </p>
                            </div>
                            <div className="space-y-3">
                                <h5 className="text-red-900 font-bold text-xs uppercase tracking-widest">2. Document Integrity</h5>
                                <p className="text-[10px] text-zinc-600 font-mono leading-loose uppercase">
                                    Avoid printing or photographing documents on devices that store metadata or serial numbers. Use the Signal channel for raw evidence scans.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Disclaimer */}
                <div className="mt-20 pt-10 border-t border-white/5 text-center">
                    <p className="text-[9px] font-mono text-zinc-700 uppercase tracking-[0.4em]">
                        Archival ID: SH-TIP-CORE // All signals are monitored for forensic authenticity.
                    </p>
                </div>
            </div>
        </div>
    );
}
