import { Link } from 'react-router-dom';
import { ObraviolLogo } from './ObraviolLogo';
import { Palmtree } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-12 bg-[#091420] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/">
            <ObraviolLogo iconSize={32} />
          </Link>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <a
              href="#features"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Features
            </a>
            <Link
              to="/privacy"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Terms of Service
            </Link>
            <a
              href="mailto:contact@obravio.com"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Made in Miami */}
          <div className="flex items-center gap-2 text-white/30 text-sm">
            <Palmtree className="w-4 h-4 text-[#C8102E]/60" />
            <span>Made in Miami</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] text-center">
          <p className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} Obravio LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
