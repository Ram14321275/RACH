"use client";

import React, { useState } from "react";
import { Check, MessageCircle, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export default function Pricing() {
  const [isBundle, setIsBundle] = useState(true);

  const triggerCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#0B6B38", "#E63946", "#18181B", "#EBF7EE"],
    });
  };

  const tiers = [
    {
      id: "start",
      name: "START",
      specCode: "TIER-01 // SINGLE-PAGE",
      price: isBundle ? "₹14,999" : "₹4,999",
      billing: isBundle ? "Includes 1 Full Year of RACH Care" : "One-time setup fee",
      savings: isBundle ? "Save ₹1,989" : null,
      bestFor: "Domain-ready single trade businesses looking for a fast, sharp digital presence.",
      highlight: false,
      badge: "Fast Launch (3 Days)",
      features: [
        "1-Page High-Performance Mobile Storefront",
        "Direct 1-Tap WhatsApp Booking / Call Button",
        "Google Maps & Location Routing Integration",
        "Mobile-first responsive architecture (< 0.5s load)",
        "1 Year SSL Security Certificate included",
        "3-day rapid delivery guarantee",
      ],
      ctaText: "Choose Start",
    },
    {
      id: "business",
      name: "BUSINESS",
      specCode: "TIER-02 // MULTI-PAGE STOREFRONT",
      price: isBundle ? "₹18,999" : "₹8,999",
      billing: isBundle ? "Includes 1 Full Year of RACH Care" : "One-time setup fee",
      savings: isBundle ? "Most Popular • Save ₹2,989" : null,
      bestFor: "Salons, clinics, and growing local businesses needing full service menus & lead capture.",
      highlight: true,
      badge: "Most Selected by Local Owners",
      features: [
        "Up to 5 Tailored Pages (Home, Menu, About, Gallery, Contact)",
        "Structured WhatsApp Booking Flow with pre-filled service selection",
        "Google Business Profile setup & local search verification support",
        "Customer Testimonials & Google Reviews automated badge",
        "Fast Indian Edge CDN hosting setup",
        "Social media & Instagram bio link integration",
        "5-day rapid delivery guarantee",
      ],
      ctaText: "Choose Business",
    },
    {
      id: "custom",
      name: "CUSTOM",
      specCode: "TIER-03 // INDUSTRIAL & CATALOGUE",
      price: "₹15,000+",
      billing: "One-time setup fee + tailored care",
      savings: null,
      bestFor: "Manufacturers, fabricators, multi-branch clinics, and custom catalogue requirements.",
      highlight: false,
      badge: "Tailored Architecture",
      features: [
        "Complete technical machinery / product specification catalogue",
        "Downloadable PDF tech data sheets & tolerance specs",
        "Multi-branch / multiple doctor clinic timetable routing",
        "Custom Request-for-Quote (RFQ) form & WhatsApp notification",
        "Custom design tokens matching brand guidelines",
        "Priority engineering & dedicated staging previews",
      ],
      ctaText: "Get Custom Quote",
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-[#FAFAFA] border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EBF7EE] text-[#0B6B38] rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <span>TRANSPARENT PRICING</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight">
            Simple, honest pricing with zero hidden charges.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl leading-relaxed">
            Choose standalone website engineering, or bundle with 1 year of managed RACH Care for complete hands-off maintenance.
          </p>
        </div>

        {/* Pricing Bundle Toggle */}
        <div className="flex items-center gap-2 mb-12 bg-zinc-100 p-1.5 rounded-full inline-flex border border-zinc-200">
          <button
            onClick={() => setIsBundle(false)}
            className={`px-5 py-2 text-xs font-semibold rounded-full transition-all ${
              !isBundle
                ? "bg-zinc-900 text-white shadow-xs"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            Standalone Build Only
          </button>
          <button
            onClick={() => {
              setIsBundle(true);
              triggerCelebration();
            }}
            className={`px-5 py-2 text-xs font-semibold rounded-full transition-all flex items-center gap-1.5 ${
              isBundle
                ? "bg-[#0B6B38] text-white shadow-xs"
                : "text-zinc-600 hover:text-zinc-900"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Build + 1 Year RACH Care (Save ₹2,000+)</span>
          </button>
        </div>

        {/* 3 Main Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-14">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`p-7 sm:p-8 rounded-3xl flex flex-col justify-between relative transition-all duration-200 hover:-translate-y-1 ${
                tier.highlight
                  ? "bg-white border-2 border-[#0B6B38] shadow-[0_10px_35px_rgba(11,107,56,0.12)]"
                  : "bg-white border border-zinc-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
              }`}
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`inline-block text-[11px] uppercase font-bold tracking-wider px-3 py-1 rounded-full ${
                    tier.highlight
                      ? "bg-[#EBF7EE] text-[#0B6B38]"
                      : "bg-zinc-100 text-zinc-600"
                  }`}
                >
                  {tier.badge}
                </div>

                {tier.savings && (
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                    {tier.savings}
                  </span>
                )}
              </div>

              <div>
                <div className="text-xs font-mono text-zinc-400 mb-1">
                  {tier.specCode}
                </div>
                <h3 className="font-display text-2xl font-bold text-zinc-950">
                  {tier.name}
                </h3>

                {/* Price Display */}
                <div className="mt-4 mb-1 flex items-baseline gap-2">
                  <span className="font-display font-black text-4xl sm:text-5xl text-zinc-950">
                    {tier.price}
                  </span>
                </div>
                <div className="text-xs text-zinc-500 mb-4 font-medium">
                  {tier.billing}
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 border-t border-zinc-100 pt-4 leading-relaxed">
                  {tier.bestFor}
                </p>

                {/* Features List */}
                <div className="mt-6 pt-4 border-t border-zinc-100 space-y-2.5">
                  <div className="text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2">
                    Scope of Work:
                  </div>
                  <ul className="space-y-2">
                    {tier.features.map((feat) => (
                      <li
                        key={feat}
                        className="text-xs text-zinc-600 flex items-start gap-2"
                      >
                        <Check className="w-3.5 h-3.5 text-[#0B6B38] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action button */}
              <div className="mt-8 pt-4 border-t border-zinc-100">
                <a
                  onClick={triggerCelebration}
                  href={`https://wa.me/919000008685?text=Hi%20RACH%2C%20I%20want%20to%20get%20started%20with%20the%20${tier.name}%20tier%20(${tier.price}).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    tier.highlight
                      ? "bg-[#0B6B38] hover:bg-[#08522A] text-white shadow-md active:scale-95"
                      : "bg-zinc-900 hover:bg-black text-white active:scale-95"
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{tier.ctaText}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* RACH Care Distinct Recurring Maintenance Callout */}
        <div className="bg-zinc-950 text-white rounded-3xl p-7 sm:p-10 border border-zinc-800 relative shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3 text-left">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs uppercase bg-[#0B6B38] text-white font-bold px-3 py-0.5 rounded-full">
                  RECURRING DIGITAL CREW
                </span>
                <span className="text-xs text-zinc-400 font-medium">
                  OPTIONAL • ZERO CONTRACT LOCK-IN
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                RACH Care — Total Peace of Mind for ₹999/month
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl">
                Most business owners hate managing hosting logins, paying domain renewal bills, or fiddling with site code. With RACH Care, we act as your dedicated webmaster on WhatsApp.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-zinc-200">
                <div className="flex items-start gap-2 bg-zinc-900/80 p-3 rounded-xl border border-zinc-800">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Managed High-Speed Indian Edge Hosting &amp; SSL</span>
                </div>
                <div className="flex items-start gap-2 bg-zinc-900/80 p-3 rounded-xl border border-zinc-800">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Annual .in / .com Domain Renewals Covered</span>
                </div>
                <div className="flex items-start gap-2 bg-zinc-900/80 p-3 rounded-xl border border-zinc-800">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Up to 4 Price / Content / Timing updates per month</span>
                </div>
                <div className="flex items-start gap-2 bg-zinc-900/80 p-3 rounded-xl border border-zinc-800">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>24/7 Server Monitoring &amp; Automatic Daily Backups</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-zinc-900 p-6 rounded-2xl border border-zinc-800 flex flex-col items-center justify-center text-center space-y-4">
              <div>
                <div className="text-xs uppercase text-emerald-400 font-bold tracking-wide">
                  Monthly Subscription
                </div>
                <div className="font-display font-black text-4xl sm:text-5xl text-white mt-1">
                  ₹999
                  <span className="text-sm font-normal text-zinc-400 font-sans">
                    / month
                  </span>
                </div>
                <div className="text-xs text-zinc-400 mt-1">
                  Billed quarterly or annually
                </div>
              </div>

              <a
                href="https://wa.me/919000008685?text=Hi%20RACH%2C%20I%20want%20to%20add%20RACH%20Care%20(%E2%82%B9999%2Fmo)%20to%20my%20website%20plan."
                target="_blank"
                rel="noopener noreferrer"
                onClick={triggerCelebration}
                className="w-full bg-[#0B6B38] hover:bg-[#08522A] text-white font-bold py-3.5 px-4 rounded-full text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Add RACH Care on WhatsApp (+91 90000 08685)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
