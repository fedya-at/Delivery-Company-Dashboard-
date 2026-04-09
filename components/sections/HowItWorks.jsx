import { ClipboardList, Truck, CheckCircle2, BarChart3 } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: ClipboardList,
    title: 'Orders come in',
    desc: 'New orders flow in from your store, ERP, or API. Each one becomes a delivery record instantly — no manual entry.',
  },
  {
    num: '02',
    icon: Truck,
    title: 'Assign & dispatch',
    desc: "Assign a driver, set a delivery window, and dispatch in seconds. Your driver gets notified immediately on their app.",
  },
  {
    num: '03',
    icon: CheckCircle2,
    title: 'Track in real time',
    desc: 'Watch deliveries move from Pending → In Transit → Delivered on your live dashboard. Update status with one click.',
  },
  {
    num: '04',
    icon: BarChart3,
    title: 'Analyze & improve',
    desc: 'Revenue charts, on-time rates, driver scores. Use the data to cut costs, hit SLAs, and grow capacity.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 relative border-t border-space-indigo-600/30">
      {/* Red vertical line accent */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-punch-red-500/40 to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="section-label mb-3">▸ How It Works</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-platinum-500 leading-tight">
            From order to
            <br />
            <span className="text-gradient">delivered in 4 steps.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-space-indigo-600/0 via-punch-red-500/30 to-space-indigo-600/0" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="relative flex flex-col items-start lg:items-center text-left lg:text-center">
                {/* Number + icon cluster */}
                <div className="flex lg:flex-col items-center gap-4 lg:gap-3 mb-5">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-space-indigo-400 border border-punch-red-500/40 flex items-center justify-center z-10 relative">
                      <Icon className="h-5 w-5 text-punch-red-500" />
                    </div>
                  </div>
                  <span className="font-mono-custom text-4xl font-light text-space-indigo-600 leading-none">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-platinum-500 mb-2">{step.title}</h3>
                <p className="text-sm text-lavender-grey-500 leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
