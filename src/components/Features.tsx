import {
  Calculator,
  FileText,
  BarChart3,
  Receipt,
  GanttChart,
  CreditCard,
  type LucideIcon,
} from 'lucide-react';

const features = [
  {
    icon: Calculator,
    title: 'Estimating & Proposals',
    description: 'AI-powered estimates with one-click professional proposals',
  },
  {
    icon: FileText,
    title: 'Contracts & Change Orders',
    description: 'Prime contracts, subcontracts, and COs with digital signatures',
  },
  {
    icon: BarChart3,
    title: 'Budget & Cost Tracking',
    description: 'Real-time budget vs. actual with margin analysis',
  },
  {
    icon: Receipt,
    title: 'AIA Billing (G702/G703)',
    description: 'Owner pay apps with built-in retainage and lien waivers',
  },
  {
    icon: GanttChart,
    title: 'CPM Scheduling',
    description: 'P6-grade critical path scheduling with Gantt charts',
  },
  {
    icon: CreditCard,
    title: 'Payments',
    description: 'Collect from owners and pay subs — all inside the platform',
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-28 md:py-36 bg-[#0D1B2A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[800] tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              Everything You Need.
            </span>{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C8102E] to-[#dc2626]">
              Nothing You Don't.
            </span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            One platform. Every tool a GC needs to run the job.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#C8102E]/30 transition-all hover:-translate-y-1.5 cursor-default">
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C8102E]/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-[#C8102E]/10 border border-[#C8102E]/20 flex items-center justify-center mb-5 group-hover:bg-[#C8102E]/20 transition-colors">
          <Icon className="w-6 h-6 text-[#C8102E]" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-white/40 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
