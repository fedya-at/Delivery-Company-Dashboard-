import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "Free forever",
    desc: "For small teams getting started with delivery management.",
    features: [
      "Up to 50 deliveries/month",
      "2 driver accounts",
      "Basic dashboard",
      "Email support",
      "7-day data history",
    ],
    cta: "Get started free",
    href: "/dashboard",
    accent: false,
  },
  {
    name: "Growth",
    price: "$49",
    period: "per month",
    desc: "For growing teams that need real-time tracking and analytics.",
    features: [
      "Unlimited deliveries",
      "20 driver accounts",
      "Live driver tracking",
      "Performance analytics",
      "SLA monitoring & alerts",
      "Priority support",
      "90-day data history",
    ],
    cta: "Launch Demo",
    href: "/dashboard",
    accent: true,
    badge: "Most popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    desc: "For large logistics operations with custom requirements.",
    features: [
      "Unlimited everything",
      "Custom integrations",
      "White-label option",
      "Dedicated account manager",
      "SSO & SAML",
      "Custom SLAs",
      "Unlimited data history",
    ],
    cta: "Contact sales",
    href: "mailto:sales@swiftdeliver.io",
    accent: false,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-32 relative border-t border-space-indigo-600/30"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-punch-red-500/6 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-label mb-3">▸ Pricing</p>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-platinum-500 leading-tight mb-5">
            Simple, transparent
            <br />
            <span className="text-gradient">pricing that scales.</span>
          </h2>
          <p className="text-lavender-grey-500 text-lg">
            Start free. Upgrade when you need more. No hidden fees, no long-term
            contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col border transition-all duration-300 hover:-translate-y-1 ${
                plan.accent
                  ? "bg-punch-red-500/10 border-punch-red-500/40 glow-red-sm"
                  : "card-dark"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-punch-red-500 text-white text-xs font-mono-custom font-semibold px-4 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className="font-mono-custom text-xs text-lavender-grey-400 tracking-widest uppercase mb-2">
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-display text-4xl font-extrabold text-platinum-500">
                    {plan.price}
                  </span>
                  <span className="text-sm text-lavender-grey-500 font-mono-custom">
                    /{plan.period}
                  </span>
                </div>
                <p className="text-sm text-lavender-grey-500 leading-relaxed">
                  {plan.desc}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-punch-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-lavender-grey-600">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`inline-flex items-center justify-center gap-2 rounded-xl py-3.5 font-display font-bold text-sm transition-all group ${
                  plan.accent
                    ? "bg-punch-red-500 hover:bg-punch-red-400 text-powder-blush-200 glow-red-sm"
                    : "border border-lavender-grey-300/30 bg-space-indigo-400/50 hover:bg-space-indigo-400 text-platinum-500"
                }`}
              >
                {plan.cta}
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
