"use client";

import React from "react";
import { MessageSquare, FolderUp, Wrench, Smartphone, Rocket, ArrowRight } from "lucide-react";

export default function Workflow() {
  const steps = [
    {
      step: "01",
      title: "15-Min WhatsApp Discovery",
      desc: "Tell us about your business, target customers, and service menu. We define the page structure and blueprint.",
      icon: MessageSquare,
    },
    {
      step: "02",
      title: "Send Your Content",
      desc: "Send your price list, photos, address, and timings directly on WhatsApp or email. No complicated forms.",
      icon: FolderUp,
    },
    {
      step: "03",
      title: "We Draft & Build",
      desc: "We write clean copy, optimize high-res images, and code your lightning-fast responsive storefront in 3–5 days.",
      icon: Wrench,
    },
    {
      step: "04",
      title: "Live Mobile Preview",
      desc: "You test the live interactive preview link directly on your phone. We make any immediate tweaks you request.",
      icon: Smartphone,
    },
    {
      step: "05",
      title: "Connect & Launch",
      desc: "We connect your custom .in/.com domain, enable SSL security, and connect your Google Business listing. You go live.",
      icon: Rocket,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EBF7EE] text-[#0B6B38] rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight">
            From first WhatsApp message to live website in 5 days.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl leading-relaxed">
            A frictionless delivery process designed for busy business owners who don&apos;t have time to write code or deal with technical headaches.
          </p>
        </div>

        {/* 5-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((s, index) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="bg-[#FAFAF9] border border-zinc-200 rounded-2xl p-5 flex flex-col justify-between hover:border-[#0B6B38] transition-all hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-200/60">
                    <span className="font-bold text-xs text-[#0B6B38]">
                      STEP {s.step}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-[#EBF7EE] text-[#0B6B38] flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-base text-zinc-950 mt-4 mb-2">
                    {s.title}
                  </h3>

                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-200/60 text-[11px] text-zinc-500 font-medium flex items-center justify-between">
                  <span>Phase {index + 1}/5</span>
                  {index < 4 ? <ArrowRight className="w-3.5 h-3.5 text-[#0B6B38]" /> : <span className="text-[#0B6B38] font-bold">✓ Live</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
