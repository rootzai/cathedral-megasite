import React, { useState } from "react";
import { SEO } from "@/components/SEO";
import { Lock, FileWarning, ArrowRight, ShieldAlert, Key } from "lucide-react";
import { atomizedShells } from "@/lib/atomizedData";

export default function DesignAvatar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // The SWITCH: Change this password to whatever you want the access code to be
        if (password.toUpperCase() === "NORTHLIGHT") {
            setIsAuthenticated(true);
            setError(false);
        } else {
            setError(true);
            setPassword("");
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-[#0a0a0c] flex items-center justify-center p-4 font-mono">
                <SEO title="Restricted Access | FBC" />
                <div className="max-w-md w-full bg-black border border-[#8b1a1a]/30 p-8 shadow-[0_0_50px_rgba(139,26,26,0.1)]">
                    <div className="flex items-center gap-3 mb-6 border-b border-[#8b1a1a]/30 pb-4">
                        <Lock className="text-[#8b1a1a] w-5 h-5" />
                        <h1 className="text-[#c0bba5] tracking-[0.3em] text-sm uppercase font-bold">Director Override</h1>
                    </div>
                    
                    <p className="text-zinc-500 text-xs mb-8 leading-relaxed">
                        UNAUTHORIZED ACCESS IS A CLASS-4 PARANATURAL OFFENSE. LOG YOUR CLEARANCE CODE TO PROCEED.
                    </p>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <input 
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`w-full bg-transparent border ${error ? 'border-red-600' : 'border-zinc-700'} text-[#c0bba5] px-4 py-3 focus:outline-none focus:border-[#8b1a1a] transition-colors tracking-widest`}
                                placeholder="ENTER OVERRIDE KEY"
                            />
                            {error && <span className="text-red-600 text-xs mt-2 block animate-pulse">INVALID RESONANCE SIGNATURE</span>}
                        </div>
                        <button type="submit" className="w-full bg-[#8b1a1a] hover:bg-white hover:text-black text-white font-bold py-3 uppercase tracking-widest transition-colors flex items-center justify-center gap-2">
                            Authenticate <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0a0a0c] text-[#c0bba5] font-serif pb-32">
            <SEO title="Design Avatar | Control Mapping" />
            
            {/* Header Block */}
            <div className="bg-[#8b1a1a] pt-24 pb-12 px-6">
                <div className="max-w-4xl mx-auto">
                    <span className="font-mono text-black/50 text-sm tracking-[0.5em] font-black block mb-4 uppercase">Internal Architecture Document // DO NOT DISTRIBUTE</span>
                    <h1 className="text-5xl md:text-8xl font-black font-sans text-white tracking-widest uppercase mb-6 leading-none">
                        THE CONTROL<br/>PARADIGM
                    </h1>
                    <p className="text-xl text-black/80 font-mono max-w-2xl font-bold leading-relaxed">
                        Cloning Document: Mapping the Cathedral Megasite to the metaphysical architecture and gameplay loops of Remedy Entertainment's "Control".
                    </p>
                </div>
            </div>

            <main className="max-w-4xl mx-auto px-6 mt-16 space-y-24">
                
                <section className="border-l-4 border-[#8b1a1a] pl-8">
                    <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-2">01. The Aesthetic & Tone</h2>
                    <h3 className="text-3xl font-sans font-black text-white uppercase tracking-wider mb-6">Institutional Dread</h3>
                    <p className="text-lg leading-relaxed text-[#c0bba5] mb-6">
                        <strong className="text-white">Control</strong> is fundamentally about the horror of bureaucracy. It takes place in the Oldest House, a brutalist government building where world-ending anomalies are hidden behind endless paperwork, redactions, and mundane corporate jargon. 
                    </p>
                    <p className="text-lg leading-relaxed text-[#c0bba5]">
                        <strong className="text-white">Sodom Hall</strong> functions identically. The horrors of McCarrick and the cover-up were systematically protected not by monsters, but by lawyers, HR policies, PR invoices, and "calendar management." The aesthetic must always reinforce this: sterile, institutional, and heavily redacted, where the true evil is hidden in the footnotes.
                    </p>
                </section>

                <section className="bg-[#111] p-8 border border-zinc-800 relative">
                    <FileWarning className="absolute top-4 right-4 text-zinc-700 w-12 h-12 opacity-50" />
                    <h2 className="text-sm font-mono text-[#8b1a1a] uppercase tracking-widest mb-4">02. 1-to-1 Conceptual Cloning</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-8">
                        <div>
                            <span className="font-mono text-xs text-zinc-500 uppercase block">The Oldest House</span>
                            <h4 className="text-xl font-sans font-black text-white mt-1 mb-2">The Cathedral</h4>
                            <p className="text-sm leading-relaxed">A massive, labyrinthine physical structure that shifts to protect its secrets. It operates on its own internal logic, defiant of outside laws.</p>
                        </div>
                        <div>
                            <span className="font-mono text-xs text-zinc-500 uppercase block">The Board</span>
                            <h4 className="text-xl font-sans font-black text-white mt-1 mb-2">The Hierarchy</h4>
                            <p className="text-sm leading-relaxed">The faceless, untouchable inner circle giving orders. They speak in contradictions and demand absolute loyalty to the system above all else.</p>
                        </div>
                        <div>
                            <span className="font-mono text-xs text-zinc-500 uppercase block">The Hiss</span>
                            <h4 className="text-xl font-sans font-black text-white mt-1 mb-2">Institutional Complicity</h4>
                            <p className="text-sm leading-relaxed">A pervasive, corrupting resonance. It isn't a single enemy; it infects the minds of everyday workers, turning good people into defenders of the cover-up.</p>
                        </div>
                        <div>
                            <span className="font-mono text-xs text-zinc-500 uppercase block">The Ashtray Maze</span>
                            <h4 className="text-xl font-sans font-black text-white mt-1 mb-2">The Financial Slush Fund</h4>
                            <p className="text-sm leading-relaxed">An impossible, shifting labyrinth designed to keep intruders out. You cannot navigate the money trail without possessing the correct "key" (The Latham Report).</p>
                        </div>
                        <div>
                            <span className="font-mono text-xs text-zinc-500 uppercase block">Dr. Casper Darling</span>
                            <h4 className="text-xl font-sans font-black text-white mt-1 mb-2">The Lead Investigator</h4>
                            <p className="text-sm leading-relaxed">The obsessed forensic modeller (us) trying to document the anomalies. Presented via stark, fourth-wall-breaking "tapes" or methodology readouts.</p>
                        </div>
                        <div>
                            <span className="font-mono text-xs text-zinc-500 uppercase block">Ahti the Janitor</span>
                            <h4 className="text-xl font-sans font-black text-white mt-1 mb-2">The Whistleblowers</h4>
                            <p className="text-sm leading-relaxed">Those who exist outside the strict hierarchy. They quietly clean up the messes, possess the true keys to the building, and point the Director where to go.</p>
                        </div>
                    </div>
                </section>

                <section className="border-l-4 border-[#8b1a1a] pl-8">
                    <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-2">03. The Maproom Mechanics (Sector Lockdown)</h2>
                    <h3 className="text-3xl font-sans font-black text-white uppercase tracking-wider mb-6">Progressive Decryption</h3>
                    <p className="text-lg leading-relaxed text-[#c0bba5] mb-6">
                        In <span className="italic">Control</span>, the player does not start with a full map. They must physically enter a <strong>Sector</strong>, secure the Control Point, and find clearance cards to access new rooms. 
                    </p>
                    <p className="text-lg leading-relaxed text-[#c0bba5] mb-8">
                        The Cathedral Maproom will copy this sequence. We do not show the 24 cards. We show <strong>Four Sectors</strong>. When a user enters "Sector 02: Cover-Up," they find the room encrypted. They are granted access to a single file. Reading that file and finding the embedded "Clearance Keys" inside the text will decrypt the adjacent cards in the Sector.
                    </p>

                    <div className="bg-black border p-6 font-mono text-xs text-[#8b1a1a] uppercase">
                        [ SYSTEMIC LOOP ]<br/>
                        1. ENTER SECTOR (ACT)<br/>
                        2. READ INITIAL UNLOCKED DOSSIER<br/>
                        3. IDENTIFY REDACTED CLEARANCE KEY IN TEXT<br/>
                        4. CLICK KEY -{">"} DECRYPT NEXT SIBLING DOSSIER<br/>
                        5. COMPLETE SECTOR -{">"} UNLOCK METADATA (EXPOSURE IDX, MEMORY PALACE VIEW)
                    </div>
                </section>

                <section className="border-l-4 border-[#8b1a1a] pl-8 mb-32">
                    <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-2">04. The Combat / Traversal</h2>
                    <h3 className="text-3xl font-sans font-black text-white uppercase tracking-wider mb-6">Acquiring the Arsenal</h3>
                    <p className="text-lg leading-relaxed text-[#c0bba5]">
                        Just as Jesse Faden acquires "Objects of Power" (Launch, Levitate, Shield) to navigate the Oldest House, the user of this site acquires forensic tools. As they progress, they unlock the ability to view the <strong>Court Filings</strong> (The Shield), the <strong>Financial Logs</strong> (Levitate - allowing them to bypass roadblocks), and eventually, they access the <strong>Memory Palace</strong> (The Service Weapon), giving them absolute mastery over the data.
                    </p>
                </section>

                {/* THE FULL MAP */}
                <section className="border-t border-zinc-800 pt-16 mb-48">
                    <div className="flex items-center gap-4 mb-4">
                        <ShieldAlert className="text-[#8b1a1a] w-8 h-8" />
                        <h2 className="text-xl font-mono text-[#8b1a1a] uppercase tracking-[0.3em] font-bold">05. The Full Sector Map</h2>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-sans font-black text-white uppercase tracking-wider mb-8">Architectural Layout</h3>
                    <p className="text-lg leading-relaxed text-[#c0bba5] mb-12">
                        This is the literal blueprint of the <strong>Sector Lockdown</strong> plan. Below is how the massive 24-node payload of Sodom Hall will be physically carved into Four Sectors. In each Sector, only the <span className="text-[#8b1a1a] font-bold">Entry Point</span> is unlocked. The user must find the clearance keys inside that initial document to decrypt the rest of the Sector.
                    </p>

                    <div className="flex flex-col gap-12">
                        {/* SECTOR 1 */}
                        <div className="bg-black border border-zinc-800 p-8 flex flex-col">
                            <div className="border-b border-[#8b1a1a]/50 pb-6 mb-8 flex justify-between items-end">
                                <div>
                                    <span className="font-mono text-xs text-[#8b1a1a] font-bold tracking-widest mb-2 block">SECTOR 01</span>
                                    <h4 className="text-4xl md:text-5xl font-black text-white tracking-widest uppercase">The Origin</h4>
                                    <p className="text-sm font-mono text-zinc-400 mt-3 uppercase">Core Engine // Structural Mechanics</p>
                                </div>
                                <div className="text-right font-mono text-xs text-zinc-600 uppercase">
                                    Status: Lockdown<br/>Nodes: {atomizedShells.filter(s => s.group === "Structural Mechanics").length}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
                                {atomizedShells.filter(s => s.group === "Structural Mechanics").map((node, i) => (
                                    <div key={node.id} className={`p-6 border relative overflow-hidden group flex flex-col ${i === 0 ? 'border-[#8b1a1a] bg-[#8b1a1a]/5' : 'border-zinc-800 bg-zinc-900/30'}`}>
                                        {/* Status Header */}
                                        <div className="flex items-center justify-between relative z-10 mb-6 border-b border-zinc-800 pb-4">
                                            <div>
                                                <span className="font-mono text-[10px] text-zinc-500 uppercase block mb-1 tracking-widest">NODE {node.id} // {node.stats.classification}</span>
                                                <h5 className={`font-sans text-xl font-black uppercase tracking-wider ${i === 0 ? 'text-white' : 'text-zinc-500'}`}>{node.title}</h5>
                                            </div>
                                            {i === 0 ? <span className="text-xs font-mono font-bold text-[#8b1a1a] bg-black border border-[#8b1a1a] px-2 py-1 uppercase animate-pulse">Unlocked</span> : <Lock className="w-5 h-5 text-zinc-700" />}
                                        </div>
                                        
                                        {/* Content Shell Deep Logic */}
                                        <div className={`space-y-4 flex-grow relative ${i === 0 ? 'opacity-100' : 'opacity-40 blur-[1px] select-none hover:blur-none hover:opacity-100 transition-all duration-500'}`}>
                                            <div>
                                                <span className="font-mono text-[9px] text-[#8b1a1a] uppercase block mb-1">Narrative Payload</span>
                                                <p className="text-xs font-serif text-zinc-300 leading-relaxed">{node.narrative}</p>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                                                <div className="bg-black border border-zinc-800 p-2">
                                                    <span className="text-zinc-600 block text-[9px] uppercase mb-1">Exposure Idx</span>
                                                    <span className={`font-bold ${parseFloat(node.stats.exposureIndex) >= 9 ? 'text-red-500' : 'text-zinc-300'}`}>{node.stats.exposureIndex}</span>
                                                </div>
                                                <div className="bg-black border border-zinc-800 p-2">
                                                    <span className="text-zinc-600 block text-[9px] uppercase mb-1">Data Volume</span>
                                                    <span className="text-zinc-300">{node.stats.dataVolume}</span>
                                                </div>
                                            </div>
                                            <div className="bg-black border border-zinc-800 p-3">
                                                <span className="text-[#8b1a1a] font-mono text-[9px] uppercase mb-2 block">Primary Vectors</span>
                                                <div className="flex flex-wrap gap-2">
                                                    {node.stats.vectors.map(v => <span key={v} className="text-[10px] bg-zinc-900 border border-zinc-700 px-2 py-0.5 text-zinc-400">{v}</span>)}
                                                </div>
                                            </div>
                                            <div>
                                                <span className="font-mono text-[9px] text-[#8b1a1a] uppercase block mb-1">Active Defenses</span>
                                                <p className="text-[10px] text-zinc-400 font-mono italic">{node.stats.activeDefenses}</p>
                                            </div>
                                            <div className="border-t border-zinc-800 pt-3 mt-4">
                                                <span className="font-mono text-[9px] text-zinc-600 uppercase block mb-1">Primary Targets</span>
                                                <p className="text-[11px] text-[#c0bba5] uppercase tracking-wider">{node.people.primary.join(', ')}</p>
                                            </div>
                                        </div>

                                        {/* Security Overlay for Locked */}
                                        {i !== 0 && (
                                            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity bg-black/40">
                                                <span className="bg-[#8b1a1a] text-black font-black font-mono text-xs px-4 py-1 uppercase tracking-widest rotate-[-15deg]">Clearance Required</span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SECTOR 2 */}
                        <div className="bg-black border border-zinc-800 p-8 flex flex-col">
                            <div className="border-b border-[#8b1a1a]/50 pb-6 mb-8 flex justify-between items-end">
                                <div>
                                    <span className="font-mono text-xs text-[#8b1a1a] font-bold tracking-widest mb-2 block">SECTOR 02</span>
                                    <h4 className="text-4xl md:text-5xl font-black text-white tracking-widest uppercase">The Cover-Up</h4>
                                    <p className="text-sm font-mono text-zinc-400 mt-3 uppercase">The Architects // Complicity Matrix</p>
                                </div>
                                <div className="text-right font-mono text-xs text-zinc-600 uppercase">
                                    Status: Lockdown<br/>Nodes: {atomizedShells.filter(s => s.group === "The Architects").length}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
                                {atomizedShells.filter(s => s.group === "The Architects").map((node, i) => (
                                    <div key={node.id} className={`p-6 border relative overflow-hidden group flex flex-col ${i === 0 ? 'border-[#8b1a1a] bg-[#8b1a1a]/5' : 'border-zinc-800 bg-zinc-900/30'}`}>
                                        <div className="flex items-center justify-between relative z-10 mb-6 border-b border-zinc-800 pb-4">
                                            <div>
                                                <span className="font-mono text-[10px] text-zinc-500 uppercase block mb-1 tracking-widest">NODE {node.id} // {node.stats.classification}</span>
                                                <h5 className={`font-sans text-xl font-black uppercase tracking-wider ${i === 0 ? 'text-white' : 'text-zinc-500'}`}>{node.title}</h5>
                                            </div>
                                            {i === 0 ? <span className="text-xs font-mono font-bold text-[#8b1a1a] bg-black border border-[#8b1a1a] px-2 py-1 uppercase">Unlocked</span> : <Lock className="w-5 h-5 text-zinc-700" />}
                                        </div>
                                        
                                        <div className={`space-y-4 flex-grow relative ${i === 0 ? 'opacity-100' : 'opacity-40 blur-[1px] select-none hover:blur-none hover:opacity-100 transition-all duration-500'}`}>
                                            <div>
                                                <span className="font-mono text-[9px] text-[#8b1a1a] uppercase block mb-1">Narrative Payload</span>
                                                <p className="text-xs font-serif text-zinc-300 leading-relaxed">{node.narrative}</p>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                                                <div className="bg-black border border-zinc-800 p-2">
                                                    <span className="text-zinc-600 block text-[9px] uppercase mb-1">Exposure Idx</span>
                                                    <span className={`font-bold ${node.stats.exposureIndex === 'ACTV' || parseFloat(node.stats.exposureIndex) >= 9 ? 'text-red-500' : 'text-zinc-300'}`}>{node.stats.exposureIndex}</span>
                                                </div>
                                                <div className="bg-black border border-zinc-800 p-2">
                                                    <span className="text-zinc-600 block text-[9px] uppercase mb-1">Data Volume</span>
                                                    <span className="text-zinc-300">{node.stats.dataVolume}</span>
                                                </div>
                                            </div>
                                            <div className="bg-black border border-zinc-800 p-3">
                                                <span className="text-[#8b1a1a] font-mono text-[9px] uppercase mb-2 block">Primary Vectors</span>
                                                <div className="flex flex-wrap gap-2">
                                                    {node.stats.vectors.map(v => <span key={v} className="text-[10px] bg-zinc-900 border border-zinc-700 px-2 py-0.5 text-zinc-400">{v}</span>)}
                                                </div>
                                            </div>
                                            <div>
                                                <span className="font-mono text-[9px] text-[#8b1a1a] uppercase block mb-1">Active Defenses</span>
                                                <p className="text-[10px] text-zinc-400 font-mono italic">{node.stats.activeDefenses}</p>
                                            </div>
                                            <div className="border-t border-zinc-800 pt-3 mt-4">
                                                <span className="font-mono text-[9px] text-zinc-600 uppercase block mb-1">Primary Targets</span>
                                                <p className="text-[11px] text-[#c0bba5] uppercase tracking-wider">{node.people.primary.join(', ')}</p>
                                            </div>
                                        </div>

                                        {i !== 0 && (
                                            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity bg-black/40">
                                                <span className="bg-[#8b1a1a] text-black font-black font-mono text-xs px-4 py-1 uppercase tracking-widest rotate-[-15deg]">Clearance Required</span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SECTOR 3 */}
                        <div className="bg-black border border-zinc-800 p-8 flex flex-col">
                            <div className="border-b border-[#8b1a1a]/50 pb-6 mb-8 flex justify-between items-end">
                                <div>
                                    <span className="font-mono text-xs text-[#8b1a1a] font-bold tracking-widest mb-2 block">SECTOR 03</span>
                                    <h4 className="text-4xl md:text-5xl font-black text-white tracking-widest uppercase">The Breach</h4>
                                    <p className="text-sm font-mono text-zinc-400 mt-3 uppercase">Vault Data // Collapse Timeline</p>
                                </div>
                                <div className="text-right font-mono text-xs text-zinc-600 uppercase">
                                    Status: Lockdown<br/>Nodes: {atomizedShells.filter(s => s.group === "The Vault Data" || s.group === "The Collapse Timeline").length}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
                                {atomizedShells.filter(s => s.group === "The Vault Data" || s.group === "The Collapse Timeline").map((node, i) => (
                                    <div key={node.id} className={`p-6 border relative overflow-hidden group flex flex-col ${i === 0 ? 'border-[#8b1a1a] bg-[#8b1a1a]/5' : 'border-zinc-800 bg-zinc-900/30'}`}>
                                        <div className="flex items-center justify-between relative z-10 mb-6 border-b border-zinc-800 pb-4">
                                            <div>
                                                <span className="font-mono text-[10px] text-zinc-500 uppercase block mb-1 tracking-widest">NODE {node.id} // {node.stats.classification}</span>
                                                <h5 className={`font-sans text-xl font-black uppercase tracking-wider ${i === 0 ? 'text-white' : 'text-zinc-500'}`}>{node.title}</h5>
                                            </div>
                                            {i === 0 ? <span className="text-xs font-mono font-bold text-[#8b1a1a] bg-black border border-[#8b1a1a] px-2 py-1 uppercase">Unlocked</span> : <Lock className="w-5 h-5 text-zinc-700" />}
                                        </div>
                                        
                                        <div className={`space-y-4 flex-grow relative ${i === 0 ? 'opacity-100' : 'opacity-40 blur-[1px] select-none hover:blur-none hover:opacity-100 transition-all duration-500'}`}>
                                            <div>
                                                <span className="font-mono text-[9px] text-[#8b1a1a] uppercase block mb-1">Narrative Payload</span>
                                                <p className="text-xs font-serif text-zinc-300 leading-relaxed">{node.narrative}</p>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                                                <div className="bg-black border border-zinc-800 p-2">
                                                    <span className="text-zinc-600 block text-[9px] uppercase mb-1">Exposure Idx</span>
                                                    <span className={`font-bold ${node.stats.exposureIndex === 'FATAL' || parseFloat(node.stats.exposureIndex) >= 9 ? 'text-red-500' : 'text-zinc-300'}`}>{node.stats.exposureIndex}</span>
                                                </div>
                                                <div className="bg-black border border-zinc-800 p-2">
                                                    <span className="text-zinc-600 block text-[9px] uppercase mb-1">Data Vol</span>
                                                    <span className="text-zinc-300">{node.stats.dataVolume}</span>
                                                </div>
                                            </div>
                                            <div className="bg-black border border-zinc-800 p-3">
                                                <span className="text-[#8b1a1a] font-mono text-[9px] uppercase mb-2 block">Primary Vectors</span>
                                                <div className="flex flex-wrap gap-2">
                                                    {node.stats.vectors.map(v => <span key={v} className="text-[10px] bg-zinc-900 border border-zinc-700 px-2 py-0.5 text-zinc-400">{v}</span>)}
                                                </div>
                                            </div>
                                            <div>
                                                <span className="font-mono text-[9px] text-[#8b1a1a] uppercase block mb-1">Active Defenses</span>
                                                <p className="text-[10px] text-zinc-400 font-mono italic">{node.stats.activeDefenses}</p>
                                            </div>
                                            <div className="border-t border-zinc-800 pt-3 mt-4">
                                                <span className="font-mono text-[9px] text-zinc-600 uppercase block mb-1">Primary Targets</span>
                                                <p className="text-[11px] text-[#c0bba5] uppercase tracking-wider">{node.people.primary.join(', ')}</p>
                                            </div>
                                        </div>

                                        {i !== 0 && (
                                            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity bg-black/40">
                                                <span className="bg-[#8b1a1a] text-black font-black font-mono text-xs px-4 py-1 uppercase tracking-widest rotate-[-15deg]">Clearance Required</span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SECTOR 4 */}
                        <div className="bg-black border border-zinc-800 p-8 flex flex-col relative overflow-hidden">
                            <div className="absolute -right-32 -top-32 opacity-5 pointer-events-none">
                                <Key className="w-96 h-96 text-white" />
                            </div>
                            <div className="border-b border-[#8b1a1a]/50 pb-6 mb-8 flex justify-between items-end relative z-10">
                                <div>
                                    <span className="font-mono text-xs text-[#8b1a1a] font-bold tracking-widest mb-2 block">SECTOR 04</span>
                                    <h4 className="text-4xl md:text-5xl font-black text-white tracking-widest uppercase">The Succession</h4>
                                    <p className="text-sm font-mono text-zinc-400 mt-3 uppercase">Meta & Narrative Scope // Endowment</p>
                                </div>
                                <div className="text-right font-mono text-xs text-zinc-600 uppercase">
                                    Status: Lockdown<br/>Nodes: {atomizedShells.filter(s => s.group === "Meta & Narrative Scope").length}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow relative z-10">
                                {atomizedShells.filter(s => s.group === "Meta & Narrative Scope").map((node, i) => (
                                    <div key={node.id} className={`p-6 border relative overflow-hidden group flex flex-col ${i === 0 ? 'border-[#8b1a1a] bg-[#8b1a1a]/5' : 'border-zinc-800 bg-zinc-900/30'}`}>
                                        <div className="flex items-center justify-between relative z-10 mb-6 border-b border-zinc-800 pb-4">
                                            <div>
                                                <span className="font-mono text-[10px] text-zinc-500 uppercase block mb-1 tracking-widest">NODE {node.id} // {node.stats.classification}</span>
                                                <h5 className={`font-sans text-xl font-black uppercase tracking-wider ${i === 0 ? 'text-white' : 'text-zinc-500'}`}>{node.title}</h5>
                                            </div>
                                            {i === 0 ? <span className="text-xs font-mono font-bold text-[#8b1a1a] bg-black border border-[#8b1a1a] px-2 py-1 uppercase">Unlocked</span> : <Lock className="w-5 h-5 text-zinc-700" />}
                                        </div>
                                        
                                        <div className={`space-y-4 flex-grow relative ${i === 0 ? 'opacity-100' : 'opacity-40 blur-[1px] select-none hover:blur-none hover:opacity-100 transition-all duration-500'}`}>
                                            <div>
                                                <span className="font-mono text-[9px] text-[#8b1a1a] uppercase block mb-1">Narrative Payload</span>
                                                <p className="text-xs font-serif text-zinc-300 leading-relaxed">{node.narrative}</p>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                                                <div className="bg-black border border-zinc-800 p-2">
                                                    <span className="text-zinc-600 block text-[9px] uppercase mb-1">Exposure Idx</span>
                                                    <span className={`font-bold ${node.stats.exposureIndex === 'MAX' || parseFloat(node.stats.exposureIndex) >= 9 ? 'text-red-500' : 'text-zinc-300'}`}>{node.stats.exposureIndex}</span>
                                                </div>
                                                <div className="bg-black border border-zinc-800 p-2">
                                                    <span className="text-zinc-600 block text-[9px] uppercase mb-1">Data Vol</span>
                                                    <span className="text-zinc-300">{node.stats.dataVolume}</span>
                                                </div>
                                            </div>
                                            <div className="bg-black border border-zinc-800 p-3">
                                                <span className="text-[#8b1a1a] font-mono text-[9px] uppercase mb-2 block">Primary Vectors</span>
                                                <div className="flex flex-wrap gap-2">
                                                    {node.stats.vectors.map(v => <span key={v} className="text-[10px] bg-zinc-900 border border-zinc-700 px-2 py-0.5 text-zinc-400">{v}</span>)}
                                                </div>
                                            </div>
                                            <div>
                                                <span className="font-mono text-[9px] text-[#8b1a1a] uppercase block mb-1">Active Defenses</span>
                                                <p className="text-[10px] text-zinc-400 font-mono italic">{node.stats.activeDefenses}</p>
                                            </div>
                                            <div className="border-t border-zinc-800 pt-3 mt-4">
                                                <span className="font-mono text-[9px] text-zinc-600 uppercase block mb-1">Primary Targets</span>
                                                <p className="text-[11px] text-[#c0bba5] uppercase tracking-wider">{node.people.primary.join(', ')}</p>
                                            </div>
                                        </div>

                                        {i !== 0 && (
                                            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity bg-black/40">
                                                <span className="bg-[#8b1a1a] text-black font-black font-mono text-xs px-4 py-1 uppercase tracking-widest rotate-[-15deg]">Clearance Required</span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
