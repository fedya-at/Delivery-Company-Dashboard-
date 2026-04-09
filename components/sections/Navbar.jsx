"use client";

import Link from "next/link";
import { Truck, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Stats", href: "#stats" },
  { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-space-indigo-600/40 bg-space-indigo-500/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="p-1.5 rounded-lg bg-punch-red-500 glow-red-sm">
            <Truck className="h-4 w-4 text-powder-blush-200" />
          </div>
          <span className="font-display font-bold text-platinum-500 text-base tracking-tight">
            Swift<span className="text-punch-red-500">Deliver</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-lavender-grey-500 hover:text-platinum-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#pricing"
            className="text-sm text-lavender-grey-500 hover:text-platinum-500 transition-colors px-3 py-2"
          >
            Sign in
          </a>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 bg-punch-red-500 hover:bg-punch-red-400 text-black text-sm font-display font-semibold px-5 py-2.5 rounded-xl transition-all glow-red-sm group"
          >
            Launch Demo
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-lavender-grey-500 hover:text-platinum-500 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-space-indigo-600/40 bg-space-indigo-500/95 px-6 py-6 space-y-4">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-lavender-grey-500 hover:text-platinum-500 transition-colors py-1"
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 bg-punch-red-500 hover:bg-punch-red-400 text-white text-sm font-display font-semibold px-5 py-3 rounded-xl transition-all w-full justify-center mt-2"
          >
            Launch Demo
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}
    </header>
  );
}
