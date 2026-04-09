const stats = [
  { value: '99.8%', label: 'Uptime SLA', sub: 'Guaranteed reliability' },
  { value: '< 200ms', label: 'Dashboard load', sub: 'Server-rendered with Next.js' },
  { value: '2.4k+', label: 'Deliveries tracked/day', sub: 'Across active customers' },
  { value: '41%', label: 'Faster dispatch', sub: 'vs. spreadsheet operations' },
];

export function Stats() {
  return (
    <section id="stats" className="py-24 border-t border-space-indigo-600/30 bg-space-indigo-400/25">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center lg:border-r lg:last:border-0 border-space-indigo-600/30 px-4">
              <p className="font-display text-4xl md:text-5xl font-extrabold text-gradient mb-2 leading-none">
                {s.value}
              </p>
              <p className="font-display font-bold text-platinum-500 text-base mb-1">{s.label}</p>
              <p className="text-xs text-lavender-grey-400 font-mono-custom">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
