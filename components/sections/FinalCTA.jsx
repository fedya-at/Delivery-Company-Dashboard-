import Link from "next/link";
import { ArrowRight, Truck } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-32 relative border-t border-space-indigo-600/30 overflow-hidden">
      {/* Big red glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-punch-red-500/12 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-punch-red-500/20 border border-punch-red-500/30 mb-8 glow-red-sm">
          <Truck className="h-7 w-7 text-punch-red-500" />
        </div>

        <h2 className="font-display text-5xl md:text-6xl font-extrabold text-platinum-500 leading-tight mb-6">
          Ready to take control
          <br />
          <span className="text-gradient">of every delivery?</span>
        </h2>

        <p className="text-lavender-grey-500 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Join logistics teams that use SwiftDeliver to ship faster, reduce
          failed deliveries, and keep customers happy — starting today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center gap-2.5 bg-punch-red-500 hover:bg-punch-red-400 text-powder-blush-200 font-display font-bold text-lg px-10 py-5 rounded-xl transition-all glow-red group"
          >
            Launch Demo
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="mailto:sales@swiftdeliver.io"
            className="inline-flex items-center justify-center gap-2.5 border border-lavender-grey-300/30 bg-space-indigo-400/50 hover:bg-space-indigo-400 text-platinum-500 font-display font-semibold text-lg px-10 py-5 rounded-xl transition-all"
          >
            Talk to sales
          </a>
        </div>

        <p className="text-xs text-lavender-grey-400 font-mono-custom mt-6">
          No credit card required · Free 14-day trial · Cancel anytime
        </p>
      </div>
    </section>
  );
}
