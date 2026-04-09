"use client";

import Link from "next/link";
import { ArrowRight, Play, CheckCircle } from "lucide-react";

const proofPoints = [
  "No credit card required",
  "Free 14-day trial",
  "Setup in under 5 minutes",
];

export function Hero() {
  return (
    <section
      suppressHydrationWarning
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden grid-bg"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-punch-red-500/10 blur-[120px]" />
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-space-indigo-600/50 blur-[80px]" />
        <div className="absolute top-20 right-10 w-[200px] h-[200px] rounded-full bg-punch-red-500/5 blur-[60px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Live badge */}
          <div className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border border-punch-red-500/30 bg-punch-red-500/10 opacity-init animate-fade-in delay-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-punch-red-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-punch-red-500" />
            </span>
            <span className="text-punch-red-600 font-mono-custom text-xs tracking-widest uppercase">
              Live tracking · 2,400+ deliveries today
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.0] tracking-tight mb-6 opacity-init animate-fade-up delay-100">
            <span className="text-platinum-500">Your deliveries.</span>
            <br />
            <span className="text-gradient">On time. Every time.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lavender-grey-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 opacity-init animate-fade-up delay-200">
            SwiftDeliver gives logistics teams a real-time command center to
            track drivers, manage delivery status, and hit SLA targets — all
            from a single powerful dashboard.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 opacity-init animate-fade-up delay-300">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2.5 bg-punch-red-500 hover:bg-punch-red-400 text-powder-blush-200 font-display font-bold text-base px-8 py-4 rounded-xl transition-all glow-red group"
            >
              Launch Demo
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2.5 border border-lavender-grey-300/30 bg-space-indigo-400/50 hover:bg-space-indigo-400 text-platinum-500 font-display font-semibold text-base px-8 py-4 rounded-xl transition-all"
            >
              <Play className="h-4 w-4 fill-current text-punch-red-500" />
              See how it works
            </a>
          </div>

          {/* Proof points */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-20 opacity-init animate-fade-up delay-400">
            {proofPoints.map((p) => (
              <span
                key={p}
                className="flex items-center gap-1.5 text-sm text-lavender-grey-500"
              >
                <CheckCircle className="h-3.5 w-3.5 text-punch-red-500 flex-shrink-0" />
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Dashboard preview */}
        <div
          suppressHydrationWarning
          className="opacity-init animate-fade-up delay-500 max-w-6xl mx-auto"
        >
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  const deliveries = [
    {
      id: "DEL001",
      name: "Alice Smith",
      addr: "123 Main St",
      driver: "John Doe",
      status: "delivered",
      rev: "$55.75",
    },
    {
      id: "DEL002",
      name: "Bob Johnson",
      addr: "456 Oak Ave",
      driver: "Jane Doe",
      status: "in-transit",
      rev: "$30.00",
    },
    {
      id: "DEL003",
      name: "Charlie Brown",
      addr: "789 Pine Ln",
      driver: "John Doe",
      status: "pending",
      rev: "$72.50",
    },
    {
      id: "DEL004",
      name: "Diana Prince",
      addr: "101 Hero Rd",
      driver: "Jane Doe",
      status: "cancelled",
      rev: "$0.00",
    },
    {
      id: "DEL005",
      name: "Eve Adams",
      addr: "202 Apple St",
      driver: "Peter Jones",
      status: "delivered",
      rev: "$120.00",
    },
  ];

  const statusStyle = {
    delivered:
      "bg-emerald-900/40 text-emerald-400 border border-emerald-800/40",
    "in-transit":
      "bg-lavender-grey-100/20 text-lavender-grey-700 border border-lavender-grey-200/20",
    pending:
      "bg-punch-red-500/15 text-punch-red-600 border border-punch-red-500/20",
    cancelled:
      "bg-flag-red-100/20 text-flag-red-600 border border-flag-red-500/20",
  };

  const bars = [38, 62, 45, 78, 55, 91, 68, 84, 57, 73, 96, 50];
  const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

  return (
    <div className="rounded-2xl overflow-hidden border border-space-indigo-600/50 glow-red shadow-2xl">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-5 py-3.5 bg-space-indigo-400/80 border-b border-space-indigo-600/40">
        <span className="w-3 h-3 rounded-full bg-flag-red-500" />
        <span className="w-3 h-3 rounded-full bg-punch-red-700/70" />
        <span className="w-3 h-3 rounded-full bg-space-indigo-600" />
        <span className="ml-4 font-mono-custom text-xs text-lavender-grey-400">
          swiftdeliver.io/dashboard
        </span>
        <span className="ml-auto flex items-center gap-1.5 text-xs font-mono-custom text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live
        </span>
      </div>

      {/* Dashboard body */}
      <div className="bg-space-indigo-500/90 p-5">
        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
          {[
            { label: "Total Deliveries", value: "8", sub: "All time" },
            {
              label: "Pending / Transit",
              value: "4",
              sub: "Awaiting pickup",
              accent: true,
            },
            { label: "Completed", value: "3", sub: "Successfully delivered" },
            { label: "Revenue", value: "$423.45", sub: "From all deliveries" },
          ].map((s) => (
            <div
              key={s.label}
              className={`rounded-xl p-4 border ${s.accent ? "bg-punch-red-500/10 border-punch-red-500/25" : "bg-space-indigo-400/60 border-space-indigo-600/30"}`}
            >
              <p className="text-xs text-lavender-grey-500 mb-1 font-mono-custom truncate">
                {s.label}
              </p>
              <p
                className={`text-2xl font-display font-bold ${s.accent ? "text-punch-red-500" : "text-platinum-500"}`}
              >
                {s.value}
              </p>
              <p className="text-[10px] text-lavender-grey-400 mt-0.5 truncate">
                {s.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Chart + table row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
          {/* Bar chart */}
          <div className="lg:col-span-3 bg-space-indigo-400/60 rounded-xl p-4 border border-space-indigo-600/30">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-display font-semibold text-platinum-500">
                Delivery Overview
              </p>
              <span className="text-xs font-mono-custom text-lavender-grey-400">
                2026
              </span>
            </div>
            <div className="flex items-end gap-1.5 h-28 mb-2">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 flex flex-col items-center gap-0.5"
                >
                  <div
                    className="w-full rounded-t-sm transition-all"
                    style={{
                      height: `${h}%`,
                      background: h > 80 ? "#ef233c" : "rgba(239,35,60,0.45)",
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              {months.map((m, i) => (
                <span
                  key={`month-${i}`}
                  className="flex-1 text-center text-[9px] text-lavender-grey-400 font-mono-custom"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Recent deliveries */}
          <div className="lg:col-span-2 bg-space-indigo-400/60 rounded-xl p-4 border border-space-indigo-600/30">
            <p className="text-sm font-display font-semibold text-platinum-500 mb-4">
              Recent Deliveries
            </p>
            <div className="space-y-3">
              {deliveries.slice(0, 4).map((d) => (
                <div key={d.id} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-space-indigo-600 flex items-center justify-center flex-shrink-0 text-[9px] font-display font-bold text-platinum-800">
                    {d.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-platinum-500 font-medium truncate">
                      {d.name}
                    </p>
                    <p className="text-[10px] text-lavender-grey-500 truncate font-mono-custom">
                      {d.driver}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-xs text-icy-aqua-500 font-mono-custom">
                      {d.rev}
                    </p>
                    <span
                      className={`text-[8px] px-1.5 py-0.5 rounded font-mono-custom ${statusStyle[d.status]}`}
                    >
                      {d.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Table preview */}
        <div className="mt-3 bg-space-indigo-400/60 rounded-xl border border-space-indigo-600/30 overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-space-indigo-600/30">
            <p className="text-sm font-display font-semibold text-platinum-500">
              All Deliveries
            </p>
            <span className="text-xs font-mono-custom text-lavender-grey-400">
              8 records
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-space-indigo-600/20">
                  {["ID", "Customer", "Driver", "Status", "Revenue"].map(
                    (h) => (
                      <th
                        key={h}
                        className="px-4 py-2 text-left font-mono-custom text-lavender-grey-400 font-normal"
                      >
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {deliveries.map((d) => (
                  <tr
                    key={d.id}
                    className="border-b border-space-indigo-600/10 hover:bg-space-indigo-300/20 transition-colors"
                  >
                    <td className="px-4 py-2.5 font-mono-custom text-lavender-grey-600">
                      {d.id}
                    </td>
                    <td className="px-4 py-2.5 text-platinum-500">{d.name}</td>
                    <td className="px-4 py-2.5 text-lavender-grey-500">
                      {d.driver}
                    </td>
                    <td className="px-4 py-2.5">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[9px] font-mono-custom ${statusStyle[d.status]}`}
                      >
                        {d.status}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 text-right font-mono-custom text-emerald-400">
                      {d.rev}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
