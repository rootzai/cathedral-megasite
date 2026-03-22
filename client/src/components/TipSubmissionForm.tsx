import { Lock, Mail, Phone, AlertCircle } from 'lucide-react';

export function TipSubmissionForm() {
  return (
    <div className="space-y-6">
      {/* Privacy Notice */}
      <div className="p-4 bg-blue-900/20 border border-blue-600 rounded-lg text-sm mb-6">
        <p className="text-blue-300">
          <strong>Security Notice:</strong> To ensure the highest level of source protection, we do not use web-based submission forms which can leave digital traces. Please use one of the direct, encrypted contact methods below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Signal */}
        <div className="p-6 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-green-500/50 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-6 h-6 text-green-500" />
            <h3 className="text-xl font-bold text-gray-200">Signal (Encrypted)</h3>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            For maximum security and anonymity, contact us via the Signal encrypted messaging app. Messages can be set to auto-delete.
          </p>
          <div className="bg-gray-900 p-3 rounded text-center font-mono text-lg text-green-400 border border-gray-800">
            +1 (201) 555-0199
          </div>
        </div>

        {/* ProtonMail */}
        <div className="p-6 bg-gray-800/50 border border-gray-700 rounded-lg hover:border-blue-500/50 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-blue-500" />
            <h3 className="text-xl font-bold text-gray-200">ProtonMail</h3>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            For transmitting documents securely. If you use a ProtonMail account to email us, the contents remain end-to-end encrypted.
          </p>
          <a href="mailto:tips.sodomhall@proton.me" className="block w-full bg-blue-900/30 hover:bg-blue-800/50 border border-blue-800/50 text-blue-300 text-center py-3 rounded font-bold transition-colors">
            tips.sodomhall@proton.me
          </a>
        </div>

        {/* RAINN Hotline */}
        <div className="p-6 bg-red-950/20 border border-red-900/50 rounded-lg md:col-span-2">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-red-500" />
              <h3 className="text-xl font-bold text-gray-200">Survivor Support (RAINN)</h3>
            </div>
            {/* Using a text badge instead of external image to prevent broken links */}
            <span className="bg-white text-zinc-900 font-black text-xs px-2 py-1 rounded tracking-widest hidden sm:inline-block">RAINN</span>
          </div>
          <p className="text-sm text-gray-300 mb-4">
            If you or someone you know has been affected by sexual assault, help is available 24/7. The Rape, Abuse & Incest National Network (RAINN) provides free, confidential support.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="tel:8006564673" className="flex items-center justify-center gap-2 bg-red-900/40 hover:bg-red-800/60 border border-red-800/50 text-red-300 py-3 rounded font-bold transition-colors">
              <Phone className="w-4 h-4" /> 800-656-HOPE
            </a>
            <a href="https://online.rainn.org" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-red-900/40 hover:bg-red-800/60 border border-red-800/50 text-red-300 py-3 rounded font-bold transition-colors">
              <AlertCircle className="w-4 h-4" /> Chat Online (rainn.org)
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
