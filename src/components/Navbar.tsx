import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ObraviolLogo } from './ObraviolLogo';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = isHome
    ? [
        { label: 'Features', href: '#features' },
        { label: 'Built Different', href: '#built-different' },
        { label: 'Early Access', href: '#early-access' },
      ]
    : [{ label: 'Home', href: '/' }];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0D1B2A]/90 backdrop-blur-lg border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex-shrink-0">
          <ObraviolLogo iconSize={36} />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href.startsWith('#') ? (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            to="/coming-soon"
            className="px-5 py-2 bg-[#C8102E] hover:bg-[#E01535] text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0D1B2A]/95 backdrop-blur-lg border-t border-white/5 px-6 py-4 space-y-3">
          {navLinks.map((link) =>
            link.href.startsWith('#') ? (
              <a
                key={link.label}
                href={link.href}
                className="block text-white/60 hover:text-white py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="block text-white/60 hover:text-white py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            to="/coming-soon"
            className="block w-full text-center px-5 py-2.5 bg-[#C8102E] hover:bg-[#E01535] text-white text-sm font-semibold rounded-lg transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
