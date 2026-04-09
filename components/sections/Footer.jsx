import Link from 'next/link';
import { Truck } from 'lucide-react';

const footerLinks = {
  Product: ['Dashboard', 'Features', 'Pricing', 'Changelog', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
  Resources: ['Docs', 'API Reference', 'Status', 'Support', 'Community'],
};

export function Footer() {
  return (
    <footer className="border-t border-space-indigo-600/30 bg-space-indigo-400/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="p-1.5 rounded-lg bg-punch-red-500 glow-red-sm">
                <Truck className="h-4 w-4 text-powder-blush-200" />
              </div>
              <span className="font-display font-bold text-platinum-500 text-base">
                Swift<span className="text-punch-red-500">Deliver</span>
              </span>
            </Link>
            <p className="text-sm text-lavender-grey-500 leading-relaxed max-w-xs">
              Real-time delivery management for modern logistics teams. Ship
              faster, hit SLAs, grow confidently.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="font-mono-custom text-xs text-lavender-grey-400 tracking-widest uppercase mb-4">
                {group}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-lavender-grey-500 hover:text-platinum-500 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-space-indigo-600/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-lavender-grey-400 font-mono-custom">
            © {new Date().getFullYear()} SwiftDeliver, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-lavender-grey-400 font-mono-custom">
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
