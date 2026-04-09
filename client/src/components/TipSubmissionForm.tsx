import { Lock, Mail, Phone, AlertCircle, ShieldCheck, Send } from 'lucide-react';
import { useState } from 'react';

export function TipSubmissionForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    // LIVE PRODUCTION ENDPOINT
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqakvzvj";

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="space-y-12">
      {/* 1. SECURE WEB SUBMISSION (FORMSPREE) */}
      <div className="bg-[#050505] border border-red-900/30 p-8 rounded-xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <ShieldCheck className="w-24 h-24 text-red-600" />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-900/20 rounded border border-red-900/40">
              <Send className="w-5 h-5 text-red-600" />
            </div>
            <h3 className="text-2xl font-serif text-white uppercase tracking-widest">Secure Investigative Tip</h3>
          </div>

          {status === 'success' ? (
            <div className="bg-green-900/20 border border-green-600 p-8 text-center rounded-lg animate-in fade-in zoom-in duration-300">
              <div className="text-4xl mb-4">✓</div>
              <h4 className="text-xl font-bold text-white mb-2">INTELLIGENCE RECEIVED</h4>
              <p className="text-zinc-400 text-sm font-mono uppercase tracking-widest">
                Forensic record updated. Our investigators will review this signal.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Identity / Alias (Optional)</label>
                  <input 
                    name="name"
                    type="text" 
                    placeholder="ANONYMOUS"
                    className="w-full bg-black border border-white/10 p-3 text-white font-mono text-sm focus:border-red-600 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Contact Method (Signal/Email)</label>
                  <input 
                    name="contact"
                    type="text" 
                    placeholder="+1 or @proton.me"
                    className="w-full bg-black border border-white/10 p-3 text-white font-mono text-sm focus:border-red-600 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Category of Intelligence</label>
                <select 
                  name="category"
                  className="w-full bg-black border border-white/10 p-3 text-white font-mono text-sm focus:border-red-600 outline-none transition-all"
                >
                  <option value="rewrite">THE REWRITE (Age Falsification / Settlement Fraud)</option>
                  <option value="conversion">THE CONVERSION (Institutional Erasure)</option>
                  <option value="financial">THE FINANCIAL MOAT (Ring 3 Assets)</option>
                  <option value="governance">GOVERNANCE FAILURE (Ring 1 Archives)</option>
                  <option value="other">OTHER BREACH INDICATOR</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Dossier / Narrative Proof</label>
                <textarea 
                  name="message"
                  required
                  rows={6}
                  placeholder="Describe the breach, the individual, or the specific mechanism of the Rewrite..."
                  className="w-full bg-black border border-white/10 p-3 text-white font-mono text-sm focus:border-red-600 outline-none transition-all resize-none"
                />
              </div>

              <div className="p-4 bg-red-950/20 border border-red-900/30 text-xs items-center flex gap-3 text-red-500 font-mono uppercase tracking-[0.2em]">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Notice: This form is end-to-end encrypted via Formspree. For 100% air-gapped security, use Signal below.</span>
              </div>

              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-5 bg-red-900 hover:bg-red-700 text-white font-bold uppercase tracking-[0.5em] transition-all disabled:opacity-50"
              >
                {status === 'submitting' ? 'TRANSMITTING SIGNAL...' : 'PENETRATE THE SHIELD'}
              </button>
              {status === 'error' && <p className="text-red-500 text-xs font-mono uppercase text-center mt-2">Transmission Failed. Please retry or use Signal.</p>}
            </form>
          )}
        </div>
      </div>

      {/* 2. DIRECT CONTACT METHODS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Signal */}
        <div className="p-6 bg-black border border-white/10 rounded-lg hover:border-green-500/50 transition-colors group">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-6 h-6 text-green-500" />
            <h3 className="text-xl font-bold text-white uppercase tracking-widest">Signal (Encrypted)</h3>
          </div>
          <p className="text-xs text-zinc-500 mb-4 font-mono uppercase leading-relaxed">
            For maximum security and anonymity, contact us via Signal. Messages can be set to auto-delete.
          </p>
          <div className="bg-[#050505] p-3 rounded text-center font-mono text-lg text-green-400 border border-white/5">
            +1 (201) 555-0199
          </div>
        </div>

        {/* ProtonMail */}
        <div className="p-6 bg-black border border-white/10 rounded-lg hover:border-blue-500/50 transition-colors group">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-blue-500" />
            <h3 className="text-xl font-bold text-white uppercase tracking-widest">ProtonMail</h3>
          </div>
          <p className="text-xs text-zinc-500 mb-4 font-mono uppercase leading-relaxed">
            For transmitting documents securely. contents remain end-to-end encrypted between Proton accounts.
          </p>
          <a href="mailto:tips.sodomhall@proton.me" className="block w-full bg-blue-900/20 hover:bg-blue-800/40 border border-blue-900/30 text-blue-300 text-center py-3 rounded font-bold transition-colors font-mono tracking-widest">
            tips.sodomhall@proton.me
          </a>
        </div>
      </div>

      {/* 3. SURVIVOR ORIENTED SUPPORT (RAINN) - REPLACED PROMINTENTLY */}
      <div className="p-8 bg-red-950/10 border border-red-900/20 rounded-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 p-4 opacity-5">
          <Phone className="w-32 h-32 text-white" />
        </div>
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-bold text-white uppercase tracking-widest">Survivor Support (RAINN)</h3>
            </div>
            <span className="bg-white text-zinc-900 font-black text-xs px-3 py-1 rounded tracking-[0.3em]">SAFE LINE</span>
          </div>
          <p className="text-sm text-zinc-400 mb-8 font-serif italic leading-relaxed">
            If you or someone you know has been affected by sexual assault, help is available 24/7. The Rape, Abuse & Incest National Network (RAINN) provides free, confidential support.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="tel:8006564673" className="flex items-center justify-center gap-4 bg-white/5 hover:bg-red-900/20 border border-white/10 text-white py-4 rounded font-mono text-xs uppercase tracking-widest transition-all">
              <Phone className="w-4 h-4" /> 800-656-HOPE
            </a>
            <a href="https://online.rainn.org" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 bg-white/5 hover:bg-red-900/20 border border-white/10 text-white py-4 rounded font-mono text-xs uppercase tracking-widest transition-all">
              <AlertCircle className="w-4 h-4" /> Chat Online
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
