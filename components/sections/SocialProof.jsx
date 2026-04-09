const companies = [
  'DHL Logistics', 'FedEx Partners', 'Amazon DSP', 'UPS Supply Chain',
  'Maersk Delivery', 'XPO Logistics', 'J.B. Hunt', 'Werner Enterprises',
  'DHL Logistics', 'FedEx Partners', 'Amazon DSP', 'UPS Supply Chain',
];

export function SocialProof() {
  return (
    <section className="py-12 border-y border-space-indigo-600/30 bg-space-indigo-400/30 overflow-hidden">
      <p className="text-center section-label mb-6">Trusted by logistics teams worldwide</p>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-space-indigo-500 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-space-indigo-500 to-transparent z-10" />
        <div className="flex animate-ticker whitespace-nowrap">
          {companies.concat(companies).map((c, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 mx-8 text-lavender-grey-400 font-display font-semibold text-sm flex-shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-punch-red-500 flex-shrink-0" />
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
