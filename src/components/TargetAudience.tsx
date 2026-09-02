"use client";

import React from "react";
import { Scissors, Stethoscope, Factory, ArrowRight, Check, XCircle } from "lucide-react";

export default function TargetAudience() {
  const trades = [
    {
      id: "salons",
      title: "Salons, Spas & Aesthetic Clinics",
      tradeCode: "TRADE-01 // WELLNESS",
      tagline: "Stop losing clients in messy Instagram DMs.",
      icon: Scissors,
      problem:
        "High-value clients find you on Instagram or Google, but booking takes 8 back-and-forth messages about pricing, dates, and stylist availability. Half the inquiries drop off before confirming.",
      solution:
        "A fast, beautiful visual menu with clear pricing, stylist specialties, photo galleries of real work, and an instant 1-tap WhatsApp booking button that sends the exact service chosen directly to your reception.",
      keyFeatures: [
        "Interactive ritual & service pricing menu",
        "1-Tap WhatsApp appointment routing",
        "Verified customer Google reviews feed",
        "Clear address map & festive offer banners",
      ],
      demoLink: "#demos",
    },
    {
      id: "clinics",
      title: "Doctors, Dentists & Specialized Clinics",
      tradeCode: "TRADE-02 // HEALTHCARE",
      tagline: "Build immediate trust before the first consultation.",
      icon: Stethoscope,
      problem:
        "Patients search for your clinic on Google Maps but can't find clear consulting hours, doctor qualifications, specific treatment procedures, or emergency contact information.",
      solution:
        "An authoritative, clinical-grade profile displaying doctor degrees, specialized treatment details, morning/evening OPD timings, and direct clinic WhatsApp reception links for easy scheduling.",
      keyFeatures: [
        "Doctor qualification & experience showcase",
        "Clear morning & evening OPD timing tables",
        "Treatment procedure guides for patient clarity",
        "Instant clinic WhatsApp & phone direct dial",
      ],
      demoLink: "#demos",
    },
    {
      id: "manufacturers",
      title: "Manufacturers, Fabricators & B2B Suppliers",
      tradeCode: "TRADE-03 // INDUSTRIAL",
      tagline: "Pass vendor evaluations with a credible specification catalogue.",
      icon: Factory,
      problem:
        "Corporate buyers and tier-1 procurement managers ask for your website before issuing a purchase order or RFQ. Sending unverified PDF files over email makes you look small and unvetted.",
      solution:
        "A technical specification showcase with plant machinery capacity, material tolerances, CNC/sheet metal capabilities, ISO compliance certificates, and a direct Request-for-Quote (RFQ) pipeline.",
      keyFeatures: [
        "Machinery specs & workshop capability tables",
        "Downloadable technical specification sheets",
        "Quality standards, ISO & tolerance certifications",
        "Direct RFQ / bulk supply inquiry submission",
      ],
      demoLink: "#demos",
    },
  ];

  return (
    <section id="who-its-for" className="py-20 bg-[#FAFAFA] border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EBF7EE] text-[#0B6B38] rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <span>WHO IT&apos;S FOR</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight">
            Built with deep specificity for your exact trade.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl leading-relaxed">
            We don&apos;t build generic templates. We build digital storefronts designed around the specific buying behaviors of your local customers.
          </p>
        </div>

        {/* Trade Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {trades.map((trade) => {
            const Icon = trade.icon;
            return (
              <div
                key={trade.id}
                className="bg-white border border-zinc-200/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-zinc-300 hover:shadow-md transition-all"
              >
                <div>
                  {/* Trade Code Tag */}
                  <div className="flex items-center justify-between pb-4 border-b border-zinc-100 text-xs font-mono text-zinc-500">
                    <span className="font-semibold text-zinc-700">{trade.tradeCode}</span>
                    <div className="w-8 h-8 rounded-full bg-[#EBF7EE] text-[#0B6B38] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mt-5 space-y-2">
                    <h3 className="font-display text-2xl font-bold text-zinc-950 tracking-tight">
                      {trade.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#0B6B38] uppercase tracking-wide">
                      {trade.tagline}
                    </p>
                  </div>

                  {/* The Problem / Solution Breakdown */}
                  <div className="mt-6 space-y-3.5 text-xs sm:text-sm">
                    <div className="bg-rose-50/70 p-3.5 rounded-xl border border-rose-100 text-zinc-700">
                      <div className="text-[11px] font-bold text-rose-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <XCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                        <span>The common friction:</span>
                      </div>
                      <p className="leading-relaxed text-zinc-600 text-xs">{trade.problem}</p>
                    </div>

                    <div className="bg-[#EBF7EE]/60 p-3.5 rounded-xl border border-emerald-100 text-zinc-900">
                      <div className="text-[11px] font-bold text-[#0B6B38] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#0B6B38] shrink-0" />
                        <span>How RACH builds it:</span>
                      </div>
                      <p className="leading-relaxed text-zinc-600 text-xs">{trade.solution}</p>
                    </div>
                  </div>

                  {/* Deliverables checklist */}
                  <div className="mt-6 pt-4 border-t border-zinc-100">
                    <div className="text-xs font-bold text-zinc-900 mb-2.5 uppercase tracking-wider">
                      Included in the storefront:
                    </div>
                    <ul className="space-y-2">
                      {trade.keyFeatures.map((feat) => (
                        <li
                          key={feat}
                          className="text-xs text-zinc-600 flex items-start gap-2"
                        >
                          <span className="text-[#0B6B38] font-bold">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <a
                    href={trade.demoLink}
                    className="inline-flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider text-zinc-900 hover:text-[#0B6B38] transition-colors"
                  >
                    <span>View Live Prototype</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[11px] text-zinc-500 font-medium">
                    Ready in 3–5 days
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
