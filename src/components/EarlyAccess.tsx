import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export function EarlyAccess() {
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
    <section
      id="early-access"
      className="relative py-28 md:py-36 bg-[#0D1B2A]"
    >
      <div className="absolute inset-0 blueprint-grid" />

      {/* Red glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-[#C8102E]/[0.06] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-[800] tracking-tight mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
            Early Access Opening Soon
          </span>
        </h2>
        <p className="text-white/40 text-lg mb-10">
          We're onboarding select general contractors for early access. Get in
          line.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          {submitted ? (
            <div className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Check className="w-5 h-5" />
              <span className="font-medium">You're on the list!</span>
            </div>
          ) : (
            <>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-5 py-3.5 rounded-lg bg-white/[0.04] border border-white/[0.1] text-white placeholder-white/30 outline-none focus:border-[#C8102E]/50 focus:ring-1 focus:ring-[#C8102E]/30 transition-all text-base"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-[#C8102E] hover:bg-[#E01535] text-white font-semibold rounded-lg transition-all hover:shadow-[0_0_30px_rgba(200,16,46,0.3)] flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Join the Waitlist
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
