export function Hero() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0D1B2A]">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C8102E]/[0.06] via-transparent to-[#dc2626]/[0.04] blur-3xl" />

      {/* Blueprint grid */}
      <div className="absolute inset-0 blueprint-grid" />

      {/* Floating shapes — pure CSS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] md:left-[-5%] top-[15%] md:top-[20%] floating-shape" style={{ animationDelay: '0s' }}>
          <div className="w-[600px] h-[140px] rounded-full bg-gradient-to-r from-[#C8102E]/[0.12] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] rotate-12" />
        </div>
        <div className="absolute right-[-5%] md:right-[0%] top-[70%] md:top-[75%] floating-shape" style={{ animationDelay: '2s' }}>
          <div className="w-[500px] h-[120px] rounded-full bg-gradient-to-r from-[#dc2626]/[0.10] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] -rotate-[15deg]" />
        </div>
        <div className="absolute left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%] floating-shape" style={{ animationDelay: '1s' }}>
          <div className="w-[300px] h-[80px] rounded-full bg-gradient-to-r from-white/[0.06] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] -rotate-[8deg]" />
        </div>
        <div className="absolute right-[15%] md:right-[20%] top-[10%] md:top-[15%] floating-shape" style={{ animationDelay: '3s' }}>
          <div className="w-[200px] h-[60px] rounded-full bg-gradient-to-r from-[#C8102E]/[0.08] to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] rotate-[20deg]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-in-up delay-300 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12">
            <span className="h-2 w-2 rounded-full bg-[#C8102E] animate-pulse" />
            <span className="text-sm text-white/60 tracking-wide">
              Now in Early Access
            </span>
          </div>

          {/* Headline */}
          <div className="animate-fade-in-up delay-500">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-[800] mb-6 md:mb-8 tracking-tight leading-[0.95]">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                Construction
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                Management,{' '}
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C8102E] via-[#dc2626] to-[#C8102E]">
                Reimagined
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <div className="animate-fade-in-up delay-700">
            <p className="text-base sm:text-lg md:text-xl text-white/50 mb-10 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
              From estimates to pay apps, Obravio replaces your entire tech
              stack with one intelligent platform. Built by a general contractor
              who got tired of clunky, overpriced construction software.
            </p>
          </div>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-1000 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.obravio.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#C8102E] hover:bg-[#E01535] text-white font-semibold rounded-lg transition-all hover:shadow-[0_0_30px_rgba(200,16,46,0.3)] text-base"
            >
              Get Started
            </a>
            <a
              href="https://app.obravio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-medium rounded-lg transition-all text-base"
            >
              Log in to Obravio
            </a>
            <a
              href="https://estimate.obravio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-medium rounded-lg transition-all text-base"
            >
              Log in to Estimate
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-transparent to-[#0D1B2A]/80 pointer-events-none" />
    </div>
  );
}
