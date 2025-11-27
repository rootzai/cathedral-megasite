import { useState, FormEvent, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLocation } from 'wouter';

export default function Login() {
  const [, setLocation] = useLocation();
  const { user, loading: authLoading, signIn } = useAuth();

  useEffect(() => {
    // Redirect if already authenticated
    if (!authLoading && user) {
      setLocation('/');
    }
  }, [user, authLoading, setLocation]);

  useEffect(() => {
    // Override body styles
    document.body.style.background = '#0a0a0a';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.background = '';
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.overflow = '';
    };
  }, []);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error: signInError } = await signIn(username, password);
    if (signInError) {
      setError(signInError.message);
    }
    setLoading(false);
  };

  // Show loading while checking auth state
  if (authLoading) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#0a0a0a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ color: '#00ff88', fontFamily: 'monospace' }}>Loading...</div>
      </div>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      background: '#0a0a0a',
      overflow: 'hidden'
    }}>
      {/* Industrial grid background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.2
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Corner accents */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '8rem',
        height: '8rem',
        borderLeft: '2px solid #00ff88',
        borderTop: '2px solid #00ff88',
        opacity: 0.3
      }} />
      <div style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '8rem',
        height: '8rem',
        borderRight: '2px solid #00ff88',
        borderBottom: '2px solid #00ff88',
        opacity: 0.3
      }} />

      {/* Login container - ABSOLUTELY CENTERED */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        maxWidth: '28rem',
        zIndex: 10
      }}>
        <div className="bg-[#151515] border-2 border-[#00ff88]/30 rounded-none shadow-[0_0_30px_rgba(0,255,136,0.15)]">
          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="flex items-center">
              <label className="text-[#00ff88] font-mono text-xs tracking-widest uppercase whitespace-nowrap" style={{ marginRight: '3ch' }}>
                Username
              </label>
              <input
                type="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                disabled={loading}
                className="flex-1 bg-[#0a0a0a] border-2 border-[#00ff88]/30 px-4 py-3 text-white font-mono focus:outline-none focus:border-[#00ff88] focus:shadow-[0_0_10px_rgba(0,255,136,0.3)] transition-all disabled:opacity-50"
                placeholder="Enter email"
              />
            </div>

            <div className="flex items-center">
              <label className="text-[#00ff88] font-mono text-xs tracking-widest uppercase whitespace-nowrap" style={{ marginRight: '3ch' }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
                className="flex-1 bg-[#0a0a0a] border-2 border-[#00ff88]/30 px-4 py-3 text-white font-mono focus:outline-none focus:border-[#00ff88] focus:shadow-[0_0_10px_rgba(0,255,136,0.3)] transition-all disabled:opacity-50"
                placeholder="Enter password"
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border-2 border-red-500 px-4 py-3">
                <p className="text-red-400 font-mono text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#00ff88] text-black font-mono font-bold py-3 px-4 uppercase tracking-wider hover:bg-[#00ff88]/90 hover:shadow-[0_0_20px_rgba(0,255,136,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
            >
              {loading ? 'ACCESSING...' : 'ACCESS SYSTEM'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
