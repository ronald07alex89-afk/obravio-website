import { Shield, Award, BadgeCheck, HardHat } from 'lucide-react';

const badges = [
  { icon: Shield, label: 'SDVOSB' },
  { icon: Award, label: 'Veteran-Owned' },
  { icon: BadgeCheck, label: 'PMP' },
  { icon: HardHat, label: 'Licensed GC' },
];

export function BuiltDifferent() {
  return (
    <section
      id="built-different"
      className="relative py-28 md:py-36 bg-[#091420] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#C8102E]/[0.03] via-transparent to-[#C8102E]/[0.03]" />
      <div className="absolute inset-0 blueprint-grid opacity-50" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-[800] tracking-tight mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
            Built by a GC.
          </span>{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white/60 to-white/40">
            Not a Tech Bro.
          </span>
        </h2>

        <p className="text-white/45 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-14">
          Obravio was born on real jobsites in South Florida. Every feature
          exists because a contractor needed it — not because a product manager
          thought it sounded cool. Zero-extra-click UX. No bloat. No BS.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-white/50"
            >
              <badge.icon className="w-4 h-4 text-[#C8102E]" />
              <span className="text-sm font-medium tracking-wide">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
