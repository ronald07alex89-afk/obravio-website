import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ObraviolLogo } from '../components/ObraviolLogo';
import {
  Calculator,
  FileText,
  BarChart3,
  Receipt,
  GanttChart,
  CreditCard,
  FileSignature,
  ArrowLeft,
  ArrowRight,
  Check,
} from 'lucide-react';

const plates = [
  { label: 'Estimating', icon: Calculator, z: 40 },
  { label: 'Proposals', icon: FileText, z: 60 },
  { label: 'Contracts', icon: FileSignature, z: 30 },
  { label: 'Budgets', icon: BarChart3, z: 50 },
  { label: 'Billing', icon: Receipt, z: 70 },
  { label: 'Scheduling', icon: GanttChart, z: 35 },
  { label: 'Payments', icon: CreditCard, z: 55 },
];

export function ComingSoon() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch('https://mhvgbquhfmcfrgwfrvmo.supabase.co/functions/v1/waitlist-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'coming-soon' }),
      });
      setSubmitted(true);
      setEmail('');
    } catch {
      setSubmitted(true);
      setEmail('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center relative overflow-hidden blueprint-grid concrete-texture"
      style={{ background: 'linear-gradient(180deg, #0a1018 0%, #0d141d 40%, #111a26 100%)' }}
    >
      {/* Corner rivets */}
      <div className="rivet" style={{ width: 12, height: 12, top: 16, left: 16, opacity: 0.3 }} />
      <div className="rivet" style={{ width: 12, height: 12, top: 16, right: 16, opacity: 0.3 }} />
      <div className="rivet" style={{ width: 12, height: 12, bottom: 16, left: 16, opacity: 0.3 }} />
      <div className="rivet" style={{ width: 12, height: 12, bottom: 16, right: 16, opacity: 0.3 }} />

      {/* Ambient red/copper glow behind the grid */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 700,
          height: 500,
          background: 'radial-gradient(ellipse, rgba(184,115,51,0.08) 0%, rgba(200,16,46,0.04) 40%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Header — logo */}
      <div className="fade-in pt-16 pb-10 relative z-10">
        <ObraviolLogo iconSize={48} />
      </div>

      {/* COMING SOON headline */}
      <h1
        className="fade-in-d1 font-headline uppercase text-center relative z-10 text-metallic"
        style={{
          fontSize: 'clamp(3rem, 10vw, 7rem)',
          fontWeight: 900,
          letterSpacing: '0.08em',
          lineHeight: 1,
          textShadow: '2px 2px 0 #080f18, 4px 4px 0 rgba(8,15,24,0.5), 0 0 40px rgba(184,115,51,0.15)',
          marginBottom: '0.25em',
        }}
      >
        Coming Soon
      </h1>

      {/* 3D Steel Plates Grid — THE CENTERPIECE */}
      <div
        className="fade-in-d3 relative z-10 w-full flex items-center justify-center px-6 py-8"
        style={{ perspective: 1000 }}
      >
        <div
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(8deg) rotateY(-3deg)',
            animation: 'gentleFloat3D 20s ease-in-out infinite',
          }}
        >
          {/* Row 1: 3 plates */}
          <div className="flex items-center justify-center gap-4 mb-4">
            {plates.slice(0, 3).map((plate) => {
              const Icon = plate.icon;
              return (
                <div
                  key={plate.label}
                  className="steel-plate relative flex flex-col items-center justify-center gap-2.5 cursor-default w-[130px] h-[100px] sm:w-[150px] sm:h-[110px]"
                  style={{
                    transform: `translateZ(${plate.z}px)`,
                    transition: 'transform 0.4s ease, border-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = `translateZ(${plate.z + 25}px) scale(1.05)`;
                    e.currentTarget.style.borderColor = 'rgba(184,115,51,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `translateZ(${plate.z}px)`;
                    e.currentTarget.style.borderColor = '';
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color: '#B87333', opacity: 0.85 }} />
                  <span className="label-uppercase text-white/70" style={{ fontSize: '0.65rem' }}>{plate.label}</span>
                  <div className="rivet rivet-tl" style={{ width: 5, height: 5 }} />
                  <div className="rivet rivet-tr" style={{ width: 5, height: 5 }} />
                  <div className="rivet rivet-bl" style={{ width: 5, height: 5 }} />
                  <div className="rivet rivet-br" style={{ width: 5, height: 5 }} />
                </div>
              );
            })}
          </div>
          {/* Row 2: 3 plates offset */}
          <div className="flex items-center justify-center gap-4 mb-4">
            {plates.slice(3, 6).map((plate) => {
              const Icon = plate.icon;
              return (
                <div
                  key={plate.label}
                  className="steel-plate relative flex flex-col items-center justify-center gap-2.5 cursor-default w-[130px] h-[100px] sm:w-[150px] sm:h-[110px]"
                  style={{
                    transform: `translateZ(${plate.z}px)`,
                    transition: 'transform 0.4s ease, border-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = `translateZ(${plate.z + 25}px) scale(1.05)`;
                    e.currentTarget.style.borderColor = 'rgba(184,115,51,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `translateZ(${plate.z}px)`;
                    e.currentTarget.style.borderColor = '';
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color: '#B87333', opacity: 0.85 }} />
                  <span className="label-uppercase text-white/70" style={{ fontSize: '0.65rem' }}>{plate.label}</span>
                  <div className="rivet rivet-tl" style={{ width: 5, height: 5 }} />
                  <div className="rivet rivet-tr" style={{ width: 5, height: 5 }} />
                  <div className="rivet rivet-bl" style={{ width: 5, height: 5 }} />
                  <div className="rivet rivet-br" style={{ width: 5, height: 5 }} />
                </div>
              );
            })}
          </div>
          {/* Row 3: 1 centered plate */}
          <div className="flex items-center justify-center">
            {plates.slice(6).map((plate) => {
              const Icon = plate.icon;
              return (
                <div
                  key={plate.label}
                  className="steel-plate relative flex flex-col items-center justify-center gap-2.5 cursor-default w-[130px] h-[100px] sm:w-[150px] sm:h-[110px]"
                  style={{
                    transform: `translateZ(${plate.z}px)`,
                    transition: 'transform 0.4s ease, border-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = `translateZ(${plate.z + 25}px) scale(1.05)`;
                    e.currentTarget.style.borderColor = 'rgba(184,115,51,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `translateZ(${plate.z}px)`;
                    e.currentTarget.style.borderColor = '';
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color: '#B87333', opacity: 0.85 }} />
                  <span className="label-uppercase text-white/70" style={{ fontSize: '0.65rem' }}>{plate.label}</span>
                  <div className="rivet rivet-tl" style={{ width: 5, height: 5 }} />
                  <div className="rivet rivet-tr" style={{ width: 5, height: 5 }} />
                  <div className="rivet rivet-bl" style={{ width: 5, height: 5 }} />
                  <div className="rivet rivet-br" style={{ width: 5, height: 5 }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tagline */}
      <p
        className="fade-in-d4 font-headline uppercase text-center relative z-10 text-copper mt-4 mb-12"
        style={{ letterSpacing: '0.18em', fontSize: 'clamp(0.7rem, 2vw, 0.95rem)', fontWeight: 700 }}
      >
        The platform that replaces everything.
      </p>

      {/* Waitlist form */}
      <form
        onSubmit={handleSubmit}
        className="fade-in-d5 flex flex-col sm:flex-row gap-3 w-full max-w-md px-6 mb-14 relative z-10"
      >
        {submitted ? (
          <div className="flex items-center justify-center gap-2 w-full py-3.5 px-6 steel-plate text-emerald-400">
            <Check className="w-5 h-5" />
            <span className="font-headline font-bold uppercase tracking-wider text-sm">You're on the list</span>
          </div>
        ) : (
          <>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-industrial flex-1"
            />
            <button type="submit" disabled={loading} className="btn-primary whitespace-nowrap disabled:opacity-50">
              Join the Waitlist <ArrowRight className="w-4 h-4" />
            </button>
          </>
        )}
      </form>

      {/* Safety stripe */}
      <div className="safety-stripe w-full max-w-lg fade-in-d6 relative z-10" />

      {/* Back to Home */}
      <div className="fade-in-d7 relative z-10 py-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 text-sm transition-colors font-headline uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    </div>
  );
}
