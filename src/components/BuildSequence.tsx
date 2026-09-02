"use client";

import React from "react";
import { Hammer, Server, Share2, RefreshCw, CheckCircle2 } from "lucide-react";

export default function BuildSequence() {
  const sequenceSteps = [
    {
      number: "01",
      tag: "BUILD",
      title: "Engineered specifically for your trade.",
      desc: "Not a generic template with your logo swapped in. We draft clean service menus, verified credentials, pricing lists, high-res galleries, and instant WhatsApp booking flows tailored to how your local customers actually buy.",
      icon: Hammer,
      deliverables: [
        "Tailored for mobile screens first",
        "Clean price cards & clear service lists",
        "Instant 1-tap WhatsApp booking button",
        "Custom photography & branding polish",
      ],
      metric: "Ready in 3–5 Days",
    },
    {
      number: "02",
      tag: "HOST",
      title: "Fast Indian servers, 99.9% uptime, zero headaches.",
      desc: "We register your custom domain (.in / .com), configure enterprise SSL security, and host your site on low-latency Indian edge nodes. Your site loads in under half a second. You never need to touch a hosting control panel.",
      icon: Server,
      deliverables: [
        "Custom .in or .com domain registration",
        "Automated SSL security certificates",
        "Lightning-fast Indian edge CDN (< 0.5s)",
        "Zero server dashboards for you to manage",
      ],
      metric: "99.9% Monitored Uptime",
    },
    {
      number: "03",
      tag: "CONNECT",
      title: "Connected directly to Google Search & your phone.",
      desc: "We link your new digital storefront directly to Google Search, Google Business Profile maps, your WhatsApp business number, and your Instagram page. When local customers search for your trade, they find you and call immediately.",
      icon: Share2,
      deliverables: [
        "Google Business Profile & Maps optimization",
        "WhatsApp Direct Lead Routing",
        "Instagram & social bio integration",
        "Local search visibility (SEO) setup",
      ],
      metric: "Direct Phone Inquiries",
    },
    {
      number: "04",
      tag: "MANAGE",
      title: "We update your site whenever you text us.",
      desc: "Need to change a price, add a monsoon festive package, update salon hours, or announce new clinic doctors? Simply message our team on WhatsApp. We update your live website within 24 hours. No logins or confusing CMS to learn.",
      icon: RefreshCw,
      deliverables: [
        "WhatsApp-based content updates",
        "Turnaround within 24 business hours",
        "Price list & timing changes included",
        "Continuous security & domain renewals",
      ],
      metric: "< 24hr Update Turnaround",
    },
  ];

  return (
    <section id="promise" className="py-20 bg-[#FAFAFA] border-b border-zinc-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EBF7EE] text-[#0B6B38] rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <span>THE FOUR-STAGE PROMISE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight">
            How RACH works as your digital contractor.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl leading-relaxed">
            A construction sequence from blueprint to ongoing maintenance. You run your business; we build and operate your digital storefront.
          </p>
        </div>

        {/* The Sequence Container with Vertical Emerald Line */}
        <div className="relative pl-6 sm:pl-10 md:pl-14">
          {/* Continuous Emerald Vertical Build Line */}
          <div className="absolute top-6 bottom-10 left-[11px] sm:left-[19px] md:left-[27px] w-[2px] bg-gradient-to-b from-[#0B6B38] via-[#0B6B38] to-emerald-300" />

          <div className="space-y-10 sm:space-y-14">
            {sequenceSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative group">
                  {/* Sequence Marker Node */}
                  <div className="absolute -left-6 sm:-left-10 md:-left-14 top-2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#0B6B38] text-white flex items-center justify-center font-bold text-xs shadow-md ring-4 ring-[#EBF7EE]">
                    {step.number}
                  </div>

                  {/* Step Card Content */}
                  <div className="bg-white border border-zinc-200/80 rounded-2xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-zinc-300 transition-all">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                      
                      {/* Left: Tag, Title, Description */}
                      <div className="lg:col-span-8 space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-xs uppercase tracking-widest bg-[#0B6B38] text-white px-2.5 py-0.5 rounded-full font-bold">
                            STAGE {step.number} : {step.tag}
                          </span>
                          <span className="text-xs text-[#0B6B38] font-bold bg-[#EBF7EE] px-2.5 py-0.5 rounded-full">
                            {step.metric}
                          </span>
                        </div>

                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
                          {step.title}
                        </h3>

                        <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl">
                          {step.desc}
                        </p>
                      </div>

                      {/* Right: Deliverables list */}
                      <div className="lg:col-span-4 bg-zinc-50 border border-zinc-200/60 rounded-xl p-5 space-y-3">
                        <div className="text-xs font-bold text-zinc-900 uppercase tracking-wider flex items-center gap-2">
                          <Icon className="w-4 h-4 text-[#0B6B38]" />
                          <span>What you get:</span>
                        </div>
                        <ul className="space-y-2">
                          {step.deliverables.map((item) => (
                            <li
                              key={item}
                              className="text-xs text-zinc-600 flex items-start gap-2"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#0B6B38] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
