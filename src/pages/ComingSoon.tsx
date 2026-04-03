import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ObraviolLogo } from '../components/ObraviolLogo';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

const featureList = ['Estimating', 'Proposals', 'Contracts', 'Budgets', 'Billing', 'Scheduling', 'Payments'];

export function ComingSoon() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCount((prev) => { if (prev >= featureList.length + 1) { clearInterval(timer); return prev; } return prev + 1; });
    }, 300);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); if (email) { setSubmitted(true); setEmail(''); } };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #111D2E 50%, #0D1B2A 100%)' }}>
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#C8102E]/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="fade-in mb-16 relative z-10"><ObraviolLogo iconSize={48} /></div>

      <h1 className="fade-in-d2 text-5xl sm:text-6xl md:text-7xl font-[800] tracking-tight text-center mb-6 text-white relative z-10">Coming Soon</h1>

      <p className="fade-in-d3 text-white/40 text-lg md:text-xl text-center max-w-2xl leading-relaxed mb-12 relative z-10">
        Obravio is a full-stack construction management platform that handles estimating, proposals, contracts, budgets, billing, scheduling, and payments — all in one place. Powered by AI. Built on real jobsite experience.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 mb-14 max-w-xl relative z-10">
        {featureList.map((feature, idx) => (
          <span key={feature} className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/60 text-sm font-medium transition-all duration-400"
            style={{ opacity: idx < visibleCount ? 1 : 0, transform: idx < visibleCount ? 'scale(1)' : 'scale(0.8) translateY(10px)' }}>
            {feature}
          </span>
        ))}
        {visibleCount > featureList.length && (
          <span className="flex items-center gap-1.5 fade-in">
            <span className="text-white/20 text-2xl mx-2">&rarr;</span>
            <span className="px-4 py-2 rounded-full bg-[#C8102E]/10 border border-[#C8102E]/30 text-[#C8102E] text-sm font-bold">One Platform</span>
          </span>
        )}
      </div>

      <form onSubmit={handleSubmit} className="fade-in-d5 flex flex-col sm:flex-row gap-3 w-full max-w-md mb-10 relative z-10">
        {submitted ? (
          <div className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <Check className="w-5 h-5" /><span className="font-medium">You're on the list!</span>
          </div>
        ) : (<>
          <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required
            className="flex-1 px-5 py-3.5 rounded-lg bg-white/[0.04] border border-white/10 text-white placeholder-white/30 outline-none focus:border-[#C8102E]/50 focus:ring-1 focus:ring-[#C8102E]/30 transition-all" />
          <button type="submit" className="px-6 py-3.5 bg-[#C8102E] hover:bg-[#E01535] text-white font-semibold rounded-lg transition-all hover:shadow-[0_0_30px_rgba(200,16,46,0.3)] flex items-center justify-center gap-2 whitespace-nowrap">
            Join Waitlist <ArrowRight className="w-4 h-4" />
          </button>
        </>)}
      </form>

      <div className="fade-in-d7 relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 text-sm transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    </div>
  );
}
