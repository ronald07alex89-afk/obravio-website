import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ObraviolLogo } from '../components/ObraviolLogo';
import {
  Calculator, FileText, BarChart3, Receipt, GanttChart, CreditCard,
  Shield, Award, BadgeCheck, HardHat, ArrowRight, Check,
  Palmtree, Menu, X,
} from 'lucide-react';

/* ─── Corner Rivets ─── */
function Rivets() {
  return (
    <>
      <span className="rivet rivet-tl" />
      <span className="rivet rivet-tr" />
      <span className="rivet rivet-bl" />
      <span className="rivet rivet-br" />
    </>
  );
}

/* ─── Navbar ─── */
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d141d]/90 backdrop-blur-xl border-b border-[#B87333]/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex-shrink-0"><ObraviolLogo iconSize={36} /></Link>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="label-uppercase text-white/50 hover:text-[#D4956B] transition-colors">Features</a>
          <a href="#built-different" className="label-uppercase text-white/50 hover:text-[#D4956B] transition-colors">Built Different</a>
          <a href="#early-access" className="label-uppercase text-white/50 hover:text-[#D4956B] transition-colors">Early Access</a>
          <Link to="/coming-soon" className="btn-primary !py-2 !px-5 !text-xs">Get Started</Link>
        </div>
        <button className="md:hidden text-white/70" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#0d141d]/95 backdrop-blur-xl border-t border-[#B87333]/10 px-6 py-4 space-y-3">
          <a href="#features" className="block text-white/60 hover:text-white py-2 label-uppercase" onClick={() => setOpen(false)}>Features</a>
          <a href="#built-different" className="block text-white/60 hover:text-white py-2 label-uppercase" onClick={() => setOpen(false)}>Built Different</a>
          <a href="#early-access" className="block text-white/60 hover:text-white py-2 label-uppercase" onClick={() => setOpen(false)}>Early Access</a>
          <Link to="/coming-soon" className="block w-full text-center btn-primary !py-2.5" onClick={() => setOpen(false)}>Get Started</Link>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="concrete-texture relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d141d]">
      {/* Blueprint dot grid */}
      <div className="absolute inset-0 blueprint-grid opacity-60" />

      {/* Warm ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#B87333]/6 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#C8102E]/5 rounded-full blur-[120px]" />

      {/* Corner rivets — hero corners */}
      <span className="rivet absolute top-6 left-6 !w-10 !h-10 z-20 opacity-40" style={{ width: 10, height: 10 }} />
      <span className="rivet absolute top-6 right-6 !w-10 !h-10 z-20 opacity-40" style={{ width: 10, height: 10 }} />
      <span className="rivet absolute bottom-6 left-6 !w-10 !h-10 z-20 opacity-40" style={{ width: 10, height: 10 }} />
      <span className="rivet absolute bottom-6 right-6 !w-10 !h-10 z-20 opacity-40" style={{ width: 10, height: 10 }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        {/* Early Access Badge */}
        <div className="fade-in inline-flex items-center gap-2 px-4 py-1.5 bg-white/[0.04] border border-[#B87333]/20 mb-10" style={{ borderRadius: 0 }}>
          <span className="h-2 w-2 rounded-full bg-[#C8102E] pulse-glow" />
          <span className="label-uppercase text-[#D4956B]/80 tracking-widest">Now in Early Access</span>
        </div>

        <h1 className="fade-in-d2 font-headline font-bold tracking-tight leading-[0.92] mb-8">
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] uppercase text-metallic text-shimmer">
            Construction Management,
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] uppercase text-copper mt-2">
            Reimagined.
          </span>
        </h1>

        <p className="fade-in-d3 text-lg md:text-xl text-white/40 leading-relaxed max-w-2xl mx-auto mb-12 font-light">
          From estimates to pay apps, Obravio replaces your entire tech
          stack with one intelligent platform. Built by a general contractor
          who got tired of Buildertrend.
        </p>

        <div className="fade-in-d4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/coming-soon" className="btn-primary">
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="https://app.obravio.com" target="_blank" rel="noopener noreferrer" className="btn-outline">
            Log in to Obravio
          </a>
          <a href="https://estimate.obravio.com" target="_blank" rel="noopener noreferrer" className="btn-outline">
            Log in to Estimate
          </a>
        </div>
      </div>

      {/* Safety stripe divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 safety-stripe z-10" />
    </section>
  );
}

/* ─── Features ─── */
const features = [
  { icon: Calculator, title: 'Estimating & Proposals', desc: 'AI-powered estimates with one-click professional proposals.' },
  { icon: FileText, title: 'Contracts & Change Orders', desc: 'Prime contracts, subcontracts, and COs with digital signatures.' },
  { icon: BarChart3, title: 'Budget & Cost Tracking', desc: 'Real-time budget vs. actual with margin analysis and projections.' },
  { icon: Receipt, title: 'AIA Billing (G702/G703)', desc: 'Owner pay apps with built-in retainage and lien waivers.' },
  { icon: GanttChart, title: 'CPM Scheduling', desc: 'P6-grade critical path scheduling with Gantt charts and AI builder.' },
  { icon: CreditCard, title: 'Payments', desc: 'Collect from owners and pay subs — all inside the platform.' },
];

function Features() {
  return (
    <section id="features" className="concrete-texture py-24 md:py-32 relative overflow-hidden bg-[#0d141d]">
      <div className="absolute inset-0 blueprint-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 uppercase">
            <span className="text-metallic">Everything You Need. </span>
            <span className="text-copper">Nothing You Don't.</span>
          </h2>
          <p className="text-white/35 text-lg max-w-xl mx-auto">One platform. Every tool a GC needs to run the job.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`steel-plate group relative p-8 fade-in-d${i + 1}`}
            >
              <Rivets />
              <div className="relative z-10">
                {/* Icon container */}
                <div className="w-14 h-14 bg-[#B87333]/12 border border-[#B87333]/25 flex items-center justify-center mb-6 group-hover:bg-[#B87333]/20 transition-colors" style={{ borderRadius: 0 }}>
                  <f.icon className="w-7 h-7 text-[#D4956B]" />
                </div>
                <h3 className="font-headline text-xl font-bold text-white mb-2.5 uppercase tracking-wide">{f.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
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
    <section id="built-different" className="concrete-texture py-24 md:py-32 relative overflow-hidden bg-[#0d141d]">
      <div className="absolute inset-0 blueprint-grid opacity-40" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Brand image */}
        <div className="mb-12">
          <img
            src="/brand-hero.png"
            alt="Obravio — Built by a GC"
            className="mx-auto max-w-2xl w-full border border-[#B87333]/15"
            style={{ borderRadius: 0 }}
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </div>

        <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 uppercase">
          <span className="text-metallic">Built by a GC. </span>
          <span className="text-white/25">Not a Tech Bro.</span>
        </h2>
        <p className="text-white/35 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-14">
          Obravio was born on real jobsites in South Florida. Every feature exists because a contractor needed it — not because a product manager thought it sounded cool. Zero-extra-click UX. No bloat. No BS.
        </p>

        {/* Credential badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2.5 px-5 py-2.5 bg-white/[0.03] border border-[#B87333]/20 text-white/50 hover:border-[#B87333]/40 hover:text-[#D4956B] transition-all"
              style={{ borderRadius: 0 }}
            >
              <b.icon className="w-4 h-4 text-[#B87333]" />
              <span className="label-uppercase">{b.label}</span>
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section id="early-access" className="concrete-texture py-24 md:py-32 relative overflow-hidden bg-[#0d141d]">
      {/* Safety stripe top divider */}
      <div className="absolute top-0 left-0 right-0 safety-stripe z-10" />

      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-[#B87333]/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 uppercase text-metallic">
          Ready to Break Ground?
        </h2>
        <p className="text-white/35 text-lg mb-10">
          We're onboarding select general contractors for early access. Get in line.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          {submitted ? (
            <div className="flex items-center justify-center gap-2 w-full py-3.5 px-6 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400" style={{ borderRadius: 0 }}>
              <Check className="w-5 h-5" />
              <span className="font-medium font-headline uppercase tracking-wide text-sm">You're on the list</span>
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
                Join Waitlist <ArrowRight className="w-4 h-4" />
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="py-12 border-t border-[#B87333]/10 bg-[#0d141d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/"><ObraviolLogo iconSize={32} /></Link>
          <div className="flex items-center gap-8">
            <a href="#features" className="label-uppercase text-white/35 hover:text-[#D4956B] transition-colors">Features</a>
            <span className="label-uppercase text-white/15">Pricing (Coming Soon)</span>
            <a href="mailto:hello@obravio.com" className="label-uppercase text-white/35 hover:text-[#D4956B] transition-colors">Contact</a>
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
      <Features />
      <BuiltDifferent />
      <EarlyAccess />
      <Footer />
    </>
  );
}
