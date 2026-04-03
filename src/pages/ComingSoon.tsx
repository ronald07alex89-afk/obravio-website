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
  { label: 'Estimating', icon: Calculator, x: -280, y: -120, z: 40 },
  { label: 'Proposals', icon: FileText, x: 0, y: -140, z: 60 },
  { label: 'Contracts', icon: FileSignature, x: 280, y: -110, z: 30 },
  { label: 'Budgets', icon: BarChart3, x: -200, y: 40, z: 50 },
  { label: 'Billing', icon: Receipt, x: 80, y: 30, z: 70 },
  { label: 'Scheduling', icon: GanttChart, x: -80, y: 180, z: 35 },
  { label: 'Payments', icon: CreditCard, x: 220, y: 160, z: 55 },
];

export function ComingSoon() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
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

      {/* 3D Floating Steel Plates — THE CENTERPIECE */}
      <div
        className="fade-in-d3 relative z-10 w-full flex items-center justify-center"
        style={{ perspective: 1200, paddingTop: 20, paddingBottom: 20 }}
      >
        {/* 3D container with gentle rotation animation */}
        <div
          className="plates-3d-container hidden md:block relative"
          style={{
            transformStyle: 'preserve-3d',
            animation: 'gentleFloat3D 20s ease-in-out infinite',
            width: 700,
            height: 420,
          }}
        >
          {plates.map((plate, i) => {
            const Icon = plate.icon;
            return (
              <div
                key={plate.label}
                className="steel-plate absolute flex flex-col items-center justify-center gap-3 cursor-default"
                style={{
                  width: 140,
                  height: 110,
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) translate3d(${plate.x}px, ${plate.y}px, ${plate.z}px) rotateX(-12deg) rotateY(8deg)`,
                  transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), border-color 0.3s ease',
                  animationDelay: `${i * 0.8}s`,
                  ['--float-z' as string]: `${plate.z}px`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = `translate(-50%, -50%) translate3d(${plate.x}px, ${plate.y}px, ${plate.z + 30}px) rotateX(-12deg) rotateY(8deg)`;
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,115,51,0.4)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = `translate(-50%, -50%) translate3d(${plate.x}px, ${plate.y}px, ${plate.z}px) rotateX(-12deg) rotateY(8deg)`;
                  (e.currentTarget as HTMLElement).style.borderColor = '';
                }}
              >
                <Icon className="w-7 h-7 text-copper-icon" style={{ color: '#B87333', opacity: 0.8 }} />
                <span className="label-uppercase text-white/70" style={{ fontSize: '0.65rem' }}>
                  {plate.label}
                </span>
                {/* Plate corner rivets */}
                <div className="rivet rivet-tl" style={{ width: 5, height: 5 }} />
                <div className="rivet rivet-tr" style={{ width: 5, height: 5 }} />
                <div className="rivet rivet-bl" style={{ width: 5, height: 5 }} />
                <div className="rivet rivet-br" style={{ width: 5, height: 5 }} />
              </div>
            );
          })}
        </div>

        {/* Mobile fallback — stacked list */}
        <div className="md:hidden flex flex-wrap items-center justify-center gap-3 px-6 max-w-md">
          {plates.map((plate) => {
            const Icon = plate.icon;
            return (
              <div
                key={plate.label}
                className="steel-plate flex items-center gap-3 px-4 py-3"
                style={{ minWidth: 150 }}
              >
                <Icon className="w-5 h-5 flex-shrink-0" style={{ color: '#B87333', opacity: 0.8 }} />
                <span className="label-uppercase text-white/70" style={{ fontSize: '0.65rem' }}>
                  {plate.label}
                </span>
              </div>
            );
          })}
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
            <button type="submit" className="btn-primary whitespace-nowrap">
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
