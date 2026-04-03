import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ObraviolLogo } from '../components/ObraviolLogo';
import {
  Calculator, FileText, BarChart3, Receipt, GanttChart, CreditCard,
  Shield, Award, BadgeCheck, HardHat, ArrowRight, Check,
  Palmtree, Menu, X,
} from 'lucide-react';

/* ─── Faded B&W construction SVG backgrounds ─── */

/** Blueprint-style building outline */
function BlueprintBuilding({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.04">
      {/* Crane */}
      <line x1="80" y1="280" x2="80" y2="40" stroke="white" strokeWidth="2" />
      <line x1="80" y1="40" x2="200" y2="40" stroke="white" strokeWidth="2" />
      <line x1="200" y1="40" x2="200" y2="60" stroke="white" strokeWidth="1" />
      <line x1="80" y1="40" x2="60" y2="80" stroke="white" strokeWidth="1.5" />
      <line x1="80" y1="60" x2="200" y2="40" stroke="white" strokeWidth="0.5" />
      {/* Building frame */}
      <rect x="140" y="120" width="180" height="160" stroke="white" strokeWidth="1.5" fill="none" />
      <line x1="140" y1="160" x2="320" y2="160" stroke="white" strokeWidth="0.8" />
      <line x1="140" y1="200" x2="320" y2="200" stroke="white" strokeWidth="0.8" />
      <line x1="140" y1="240" x2="320" y2="240" stroke="white" strokeWidth="0.8" />
      <line x1="200" y1="120" x2="200" y2="280" stroke="white" strokeWidth="0.8" />
      <line x1="260" y1="120" x2="260" y2="280" stroke="white" strokeWidth="0.8" />
      {/* Windows */}
      {[150, 210, 270].map(x => [130, 170, 210, 250].map(y => (
        <rect key={`${x}-${y}`} x={x} y={y} width="30" height="20" stroke="white" strokeWidth="0.5" fill="none" opacity="0.6" />
      )))}
      {/* Ground line */}
      <line x1="20" y1="280" x2="380" y2="280" stroke="white" strokeWidth="1" />
    </svg>
  );
}

/** Gear/cog outline */
function GearOutline({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.03">
      <circle cx="100" cy="100" r="40" stroke="white" strokeWidth="2" />
      <circle cx="100" cy="100" r="15" stroke="white" strokeWidth="1.5" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 100 + 38 * Math.cos(rad);
        const y1 = 100 + 38 * Math.sin(rad);
        const x2 = 100 + 55 * Math.cos(rad);
        const y2 = 100 + 55 * Math.sin(rad);
        return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="8" strokeLinecap="round" />;
      })}
    </svg>
  );
}

/** Hard hat outline */
function HardHatOutline({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.03">
      <path d="M30 110 Q30 40 100 30 Q170 40 170 110" stroke="white" strokeWidth="2" fill="none" />
      <line x1="20" y1="110" x2="180" y2="110" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="25" y1="120" x2="175" y2="120" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="100" y1="30" x2="100" y2="10" stroke="white" strokeWidth="1.5" />
    </svg>
  );
}

/* ─── Navbar ─── */
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080F18]/90 backdrop-blur-xl border-b border-[#B87333]/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex-shrink-0"><ObraviolLogo iconSize={36} /></Link>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-white/60 hover:text-[#D4956B] transition-colors">Features</a>
          <a href="#built-different" className="text-sm text-white/60 hover:text-[#D4956B] transition-colors">Built Different</a>
          <a href="#early-access" className="text-sm text-white/60 hover:text-[#D4956B] transition-colors">Early Access</a>
          <Link to="/coming-soon" className="px-5 py-2 bg-[#C8102E] hover:bg-[#E01535] text-white text-sm font-semibold rounded-lg transition-colors">Get Started</Link>
        </div>
        <button className="md:hidden text-white/70" onClick={() => setOpen(!open)}>{open ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
      {open && (
        <div className="md:hidden bg-[#080F18]/95 backdrop-blur-xl border-t border-[#B87333]/10 px-6 py-4 space-y-3">
          <a href="#features" className="block text-white/60 hover:text-white py-2" onClick={() => setOpen(false)}>Features</a>
          <a href="#built-different" className="block text-white/60 hover:text-white py-2" onClick={() => setOpen(false)}>Built Different</a>
          <a href="#early-access" className="block text-white/60 hover:text-white py-2" onClick={() => setOpen(false)}>Early Access</a>
          <Link to="/coming-soon" className="block w-full text-center px-5 py-2.5 bg-[#C8102E] text-white text-sm font-semibold rounded-lg" onClick={() => setOpen(false)}>Get Started</Link>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="concrete-texture vignette relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #080F18 0%, #0D1B2A 40%, #0A1520 100%)' }}>
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-50" />

      {/* Faded B&W construction imagery */}
      <BlueprintBuilding className="absolute right-[5%] top-[10%] w-[400px] h-[300px]" />
      <GearOutline className="absolute left-[3%] bottom-[15%] w-[200px] h-[200px]" />
      <HardHatOutline className="absolute right-[15%] bottom-[8%] w-[150px] h-[120px]" />

      {/* Warm gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#B87333]/6 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#C8102E]/5 rounded-full blur-[120px]" />

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-shape absolute top-[20%] left-[-5%]" style={{ animationDelay: '0s' }}>
          <div className="w-[500px] h-[120px] rounded-full bg-gradient-to-r from-[#B87333]/10 to-transparent border border-[#B87333]/10 rotate-12" />
        </div>
        <div className="floating-shape absolute bottom-[15%] right-[-3%]" style={{ animationDelay: '4s' }}>
          <div className="w-[400px] h-[100px] rounded-full bg-gradient-to-r from-white/4 to-transparent border border-white/5 -rotate-12" />
        </div>
        <div className="floating-shape absolute top-[10%] right-[10%]" style={{ animationDelay: '2s' }}>
          <div className="w-[200px] h-[60px] rounded-full bg-gradient-to-r from-[#C8102E]/8 to-transparent border border-[#C8102E]/10 rotate-[20deg]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        <div className="fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#B87333]/20 mb-10">
          <span className="h-2 w-2 rounded-full bg-[#C8102E] pulse-glow" />
          <span className="text-sm text-[#D4956B]/80 tracking-wide font-medium">Now in Early Access</span>
        </div>

        <h1 className="fade-in-d2 text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-[800] tracking-tight leading-[0.95] mb-8">
          <span className="text-metallic text-shimmer">Construction</span><br />
          <span className="text-metallic text-shimmer">Management, </span>
          <span className="text-copper">Reimagined</span>
        </h1>

        <p className="fade-in-d3 text-lg md:text-xl text-white/45 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
          From estimates to pay apps, Obravio replaces your entire tech
          stack with one intelligent platform. Built by a general contractor
          who got tired of Buildertrend.
        </p>

        <div className="fade-in-d4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/coming-soon" className="px-8 py-3.5 bg-[#C8102E] hover:bg-[#E01535] text-white font-semibold rounded-lg transition-all hover:shadow-[0_0_30px_rgba(200,16,46,0.3)] text-base">
            Get Started
          </Link>
          <a href="https://app.obravio.com" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 border border-[#B87333]/30 hover:border-[#B87333]/60 text-white/80 hover:text-white font-medium rounded-lg transition-all text-base">
            Log in to Obravio
          </a>
          <a href="https://estimate.obravio.com" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 border border-[#B87333]/30 hover:border-[#B87333]/60 text-white/80 hover:text-white font-medium rounded-lg transition-all text-base">
            Log in to Estimate
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#080F18] to-transparent pointer-events-none" />
    </section>
  );
}

/* ─── Rebar Divider ─── */
function RebarDivider() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="rebar-divider" />
    </div>
  );
}

/* ─── Features ─── */
const features = [
  { icon: Calculator, title: 'Estimating & Proposals', desc: 'AI-powered estimates with one-click professional proposals' },
  { icon: FileText, title: 'Contracts & Change Orders', desc: 'Prime contracts, subcontracts, and COs with digital signatures' },
  { icon: BarChart3, title: 'Budget & Cost Tracking', desc: 'Real-time budget vs. actual with margin analysis' },
  { icon: Receipt, title: 'AIA Billing (G702/G703)', desc: 'Owner pay apps with built-in retainage and lien waivers' },
  { icon: GanttChart, title: 'CPM Scheduling', desc: 'P6-grade critical path scheduling with Gantt charts' },
  { icon: CreditCard, title: 'Payments', desc: 'Collect from owners and pay subs — all inside the platform' },
];

function Features() {
  return (
    <section id="features" className="concrete-texture vignette py-24 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #080F18 0%, #0A1520 50%, #080F18 100%)' }}>
      {/* Faded B&W construction imagery */}
      <GearOutline className="absolute right-[-2%] top-[10%] w-[300px] h-[300px]" />
      <BlueprintBuilding className="absolute left-[-5%] bottom-[5%] w-[350px] h-[260px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[800] tracking-tight mb-4">
            <span className="text-metallic">Everything You Need. </span>
            <span className="text-copper">Nothing You Don't.</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">One platform. Every tool a GC needs to run the job.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card-feature group relative p-8 rounded-2xl">
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#B87333]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-[#B87333]/15 border border-[#B87333]/25 flex items-center justify-center mb-6 group-hover:bg-[#B87333]/25 transition-colors shadow-[0_0_15px_rgba(184,115,51,0.1)]">
                  <f.icon className="w-7 h-7 text-[#D4956B]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2.5">{f.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Built Different ─── */
const badges = [
  { icon: Shield, label: 'SDVOSB' },
  { icon: Award, label: 'Veteran-Owned' },
  { icon: BadgeCheck, label: 'PMP' },
  { icon: HardHat, label: 'Licensed GC' },
];

function BuiltDifferent() {
  return (
    <section id="built-different" className="concrete-texture py-24 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #060C14 0%, #0A1520 50%, #080F18 100%)' }}>
      <div className="absolute inset-0 blueprint-grid opacity-30" />

      {/* Faded construction imagery */}
      <HardHatOutline className="absolute left-[5%] top-[15%] w-[180px] h-[140px]" />
      <GearOutline className="absolute right-[5%] bottom-[10%] w-[250px] h-[250px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Brand image */}
        <div className="mb-12">
          <img
            src="/brand-hero.png"
            alt="Obravio — Built by a GC. Not a Tech Bro."
            className="mx-auto max-w-2xl w-full rounded-2xl border border-[#B87333]/15 shadow-[0_0_60px_rgba(184,115,51,0.1)]"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-[800] tracking-tight mb-6">
          <span className="text-metallic">Built by a GC. </span>
          <span className="text-white/30">Not a Tech Bro.</span>
        </h2>
        <p className="text-white/40 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-14">
          Obravio was born on real jobsites in South Florida. Every feature exists because a contractor needed it — not because a product manager thought it sounded cool. Zero-extra-click UX. No bloat. No BS.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.03] border border-[#B87333]/15 text-white/50 hover:border-[#B87333]/30 hover:text-[#D4956B] transition-all">
              <b.icon className="w-4 h-4 text-[#B87333]" />
              <span className="text-sm font-medium tracking-wide">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Early Access ─── */
function EarlyAccess() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); if (email) { setSubmitted(true); setEmail(''); } };

  return (
    <section id="early-access" className="concrete-texture py-24 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #080F18 0%, #0A1520 50%, #080F18 100%)' }}>
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-[#B87333]/[0.04] rounded-full blur-[120px]" />
      </div>
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-[800] tracking-tight mb-4 text-metallic">Early Access Opening Soon</h2>
        <p className="text-white/40 text-lg mb-10">We're onboarding select general contractors for early access. Get in line.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          {submitted ? (
            <div className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Check className="w-5 h-5" /><span className="font-medium">You're on the list!</span>
            </div>
          ) : (<>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required
              className="flex-1 px-5 py-3.5 rounded-lg bg-white/[0.04] border border-[#B87333]/15 text-white placeholder-white/30 outline-none focus:border-[#B87333]/40 focus:ring-1 focus:ring-[#B87333]/30 transition-all" />
            <button type="submit" className="px-6 py-3.5 bg-[#C8102E] hover:bg-[#E01535] text-white font-semibold rounded-lg transition-all hover:shadow-[0_0_30px_rgba(200,16,46,0.3)] flex items-center justify-center gap-2 whitespace-nowrap">
              Join the Waitlist <ArrowRight className="w-4 h-4" />
            </button>
          </>)}
        </form>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="py-12 border-t border-[#B87333]/10" style={{ background: '#060C14' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/"><ObraviolLogo iconSize={32} /></Link>
          <div className="flex items-center gap-8">
            <a href="#features" className="text-sm text-white/40 hover:text-[#D4956B] transition-colors">Features</a>
            <span className="text-sm text-white/20">Pricing (Coming Soon)</span>
            <a href="mailto:hello@obravio.com" className="text-sm text-white/40 hover:text-[#D4956B] transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-2 text-[#B87333]/50 text-sm">
            <Palmtree className="w-4 h-4" /><span>Made in Miami</span>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[#B87333]/5 text-center">
          <p className="text-white/20 text-xs">&copy; 2026 Obravio. A product of RG Legacy Construction, LLC.</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Home Page ─── */
export function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <RebarDivider />
      <Features />
      <RebarDivider />
      <BuiltDifferent />
      <RebarDivider />
      <EarlyAccess />
      <Footer />
    </>
  );
}
