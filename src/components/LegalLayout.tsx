import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ObraviolLogo } from './ObraviolLogo';
import { Palmtree, Menu, X, ArrowLeft } from 'lucide-react';

/* ─── Navbar (Iron & Concrete, matches Home) ─── */
function LegalNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d141d]/90 backdrop-blur-xl border-b border-[#B87333]/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex-shrink-0"><ObraviolLogo iconSize={36} /></Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="label-uppercase text-white/50 hover:text-[#D4956B] transition-colors">Home</Link>
          <Link to="/privacy" className="label-uppercase text-white/50 hover:text-[#D4956B] transition-colors">Privacy</Link>
          <Link to="/terms" className="label-uppercase text-white/50 hover:text-[#D4956B] transition-colors">Terms</Link>
          <a href="mailto:contact@obravio.com?subject=Obravio%20access%20request" className="btn-primary !py-2 !px-5 !text-xs">Get Started</a>
        </div>
        <button className="md:hidden text-white/70" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#0d141d]/95 backdrop-blur-xl border-t border-[#B87333]/10 px-6 py-4 space-y-3">
          <Link to="/" className="block text-white/60 hover:text-white py-2 label-uppercase" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/privacy" className="block text-white/60 hover:text-white py-2 label-uppercase" onClick={() => setOpen(false)}>Privacy</Link>
          <Link to="/terms" className="block text-white/60 hover:text-white py-2 label-uppercase" onClick={() => setOpen(false)}>Terms</Link>
          <a href="mailto:contact@obravio.com?subject=Obravio%20access%20request" className="block w-full text-center btn-primary !py-2.5" onClick={() => setOpen(false)}>Get Started</a>
        </div>
      )}
    </nav>
  );
}

/* ─── Footer (Iron & Concrete, matches Home) ─── */
function LegalFooter() {
  return (
    <footer className="py-12 border-t border-[#B87333]/10 bg-[#0d141d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/"><ObraviolLogo iconSize={32} /></Link>
          <div className="flex items-center gap-8">
            <Link to="/privacy" className="label-uppercase text-white/35 hover:text-[#D4956B] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="label-uppercase text-white/35 hover:text-[#D4956B] transition-colors">Terms of Service</Link>
            <a href="mailto:contact@obravio.com" className="label-uppercase text-white/35 hover:text-[#D4956B] transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-2 text-[#B87333]/50 text-sm">
            <Palmtree className="w-4 h-4" /><span>Made in Miami</span>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[#B87333]/5 text-center">
          <p className="text-white/20 text-xs">&copy; {new Date().getFullYear()} Obravio LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="bg-[#0d141d] min-h-screen">
      <LegalNavbar />

      {/* Header */}
      <header className="concrete-texture relative overflow-hidden border-b border-[#B87333]/10 pt-32 pb-14">
        <div className="absolute inset-0 blueprint-grid opacity-40" />
        <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-[#B87333]/[0.05] rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/30 hover:text-[#D4956B] text-sm transition-colors font-headline uppercase tracking-wider mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight uppercase text-metallic mb-4">
            {title}
          </h1>
          <p className="label-uppercase text-[#D4956B]/70">Last updated: {lastUpdated}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 safety-stripe z-10" />
      </header>

      {/* Body */}
      <main className="relative bg-[#0d141d] py-16">
        <div className="legal-body max-w-3xl mx-auto px-6">
          {children}
        </div>
      </main>

      <LegalFooter />
    </div>
  );
}

/* ─── Helpers for consistent section formatting ─── */
export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-headline text-xl sm:text-2xl font-bold text-white uppercase tracking-wide mb-4">
        {heading}
      </h2>
      <div className="space-y-4 text-white/50 leading-relaxed">{children}</div>
    </section>
  );
}
