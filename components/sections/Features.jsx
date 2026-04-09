import {
  MapPin, Bell, BarChart3, Users, Zap, Shield,
  Clock, RefreshCw,
} from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Live Driver Tracking',
    desc: 'See every driver on a live map. Know exactly where each package is at any moment — no more guessing, no more customer calls.',
  },
  {
    icon: Bell,
    title: 'Smart Alerts',
    desc: 'Instant notifications for late deliveries, failed attempts, and SLA breaches — before your customers notice.',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    desc: 'Revenue trends, delivery success rates, and driver performance — all in one unified analytics view.',
  },
  {
    icon: Users,
    title: 'Driver Management',
    desc: 'Assign deliveries, manage schedules, and track individual driver metrics from a single interface.',
  },
  {
    icon: Zap,
    title: 'Instant Status Updates',
    desc: 'Update delivery status in one click. Server Actions push changes to your entire team in real time.',
  },
  {
    icon: Clock,
    title: 'SLA Monitoring',
    desc: 'Set SLA targets per route or customer tier. Get automated warnings before deadlines slip.',
  },
  {
    icon: RefreshCw,
    title: 'Auto Revalidation',
    desc: 'Dashboard data refreshes automatically. No manual reload needed — always see the freshest state.',
  },
  {
    icon: Shield,
    title: 'Role-Based Access',
    desc: 'Give dispatchers, drivers, and managers the right access levels. Full audit trail included.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 relative border-t border-space-indigo-600/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="section-label mb-3">▸ Features</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-platinum-500 leading-tight mb-5">
            Everything your team
            <br />
            <span className="text-gradient">needs to ship faster.</span>
          </h2>
          <p className="text-lavender-grey-500 text-lg leading-relaxed">
            Built for dispatchers, operations managers, and last-mile delivery teams
            who need clarity, speed, and control.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            const isAccent = i === 0 || i === 4;
            return (
              <div
                key={f.title}
                className={`group rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 cursor-default ${
                  isAccent
                    ? 'bg-punch-red-500/10 border-punch-red-500/25 hover:border-punch-red-500/40'
                    : 'card-dark hover:border-lavender-grey-300/20'
                }`}
              >
                <div className={`inline-flex p-2.5 rounded-xl mb-4 border ${
                  isAccent
                    ? 'bg-punch-red-500/20 border-punch-red-500/30'
                    : 'bg-space-indigo-300/60 border-space-indigo-600/30'
                }`}>
                  <Icon className={`h-5 w-5 ${isAccent ? 'text-punch-red-500' : 'text-lavender-grey-600'}`} />
                </div>
                <h3 className="font-display font-bold text-base text-platinum-500 mb-2">{f.title}</h3>
                <p className="text-sm text-lavender-grey-500 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
