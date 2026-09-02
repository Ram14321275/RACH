"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Scissors,
  Stethoscope,
  Factory,
  MessageCircle,
  ExternalLink,
  CheckCircle2,
  Globe,
  RotateCcw,
} from "lucide-react";
import { SalonMiniSite, ClinicMiniSite, MfgMiniSite } from "@/components/MiniDemoWebsites";

export default function DemoShowcase() {
  const [activeDemo, setActiveDemo] = useState<"portfolio" | "salon" | "clinic" | "mfg">("portfolio");
  const [interactiveMode, setInteractiveMode] = useState<"live" | "card">("live");

  const demos = {
    portfolio: {
      id: "portfolio",
      name: "the CHILL WORKS — Ram Pawar",
      domain: "rampawar.in",
      realUrl: "https://www.rampawar.in/",
      location: "Hyderabad & Global",
      type: "AI Solutions Architect & Portfolio",
      rating: "⭐ Founder Showcase",
      badge: "MAIN DEMO",
      color: "bg-zinc-950",
      headline: "AI Solutions Architect, Full-Stack & Creative Technologist",
      desc: "Flagship custom portfolio built for Ram Pawar. High-end modern typography, interactive tech stack showcase (Canva, Ps, VS Code, DaVinci Resolve), direct client consultations, and 0.32s ultra-low latency.",
      stats: [
        { label: "Performance Score", val: "99/100" },
        { label: "Average Load Time", val: "0.32s" },
        { label: "Architecture", val: "Next.js Edge" },
      ],
      highlights: [
        "Interactive tech stack badges (Canva, Ps, VS Code, DaVinci)",
        "Direct client consultation & calendar booking",
        "Tailored typography with sleek micro-animations",
        "Live responsive showcase running on edge infrastructure",
      ],
      previewContent: {
        bannerTag: "Ram Pawar • AI Solutions Architect",
        badge: "⚡ LIVE INTERACTIVE WEBSITE",
        items: [
          { name: "Full-Stack AI Solutions", price: "Enterprise", time: "Cloud & Edge" },
          { name: "UI/UX & Brand Architecture", price: "Custom", time: "Figma to Code" },
          { name: "Technical Consulting & Strategy", price: "Book Slot", time: "1-on-1 Session" },
          { name: "Custom Web Development", price: "Full Scope", time: "Next.js / Cloud" },
        ],
        whatsappMessage: "Hi Ram Pawar, I checked your portfolio at rampawar.in and would like to discuss building a website.",
      },
    },
    salon: {
      id: "salon",
      name: "Kaya Botanics Salon & Spa",
      domain: "kayabotanics.in",
      realUrl: "",
      location: "Jubilee Hills, Hyderabad",
      type: "Salon & Wellness",
      rating: "4.9 (320+ Reviews)",
      badge: "SALON DEMO",
      color: "bg-[#0B6B38]",
      headline: "Organic Hair & Botanical Skin Rituals",
      desc: "Live digital storefront featuring clean ritual pricing, stylist bios, instant 1-tap WhatsApp booking, and automated Google direction maps.",
      stats: [
        { label: "WhatsApp Bookings", val: "+65%" },
        { label: "Average Load Time", val: "0.38s" },
        { label: "Google Route Taps", val: "140/mo" },
      ],
      highlights: [
        "1-Tap WhatsApp appointment booking",
        "Clear service menus with transparent INR pricing",
        "Client photo gallery & stylist specialties",
        "Automated Google Reviews badge",
      ],
      previewContent: {
        bannerTag: "Hair • Skin • Bridal",
        badge: "✨ Mon–Sat Special Offers",
        items: [
          { name: "Keratin Smooth Treatment", price: "₹2,499", time: "90 min" },
          { name: "Organic Hydra Glow Facial", price: "₹1,800", time: "50 min" },
          { name: "Custom Haircut & Blowdry", price: "₹750", time: "45 min" },
          { name: "Aromatherapy Foot Reflexology", price: "₹950", time: "40 min" },
        ],
        whatsappMessage: "Hi Kaya Botanics, I want to book an appointment for tomorrow.",
      },
    },
    clinic: {
      id: "clinic",
      name: "Dr. Mehta Ortho & Joint Clinic",
      domain: "mehtaortho.in",
      realUrl: "",
      location: "Banjara Hills, Hyderabad",
      type: "Medical Practice",
      rating: "4.9 (480+ Reviews)",
      badge: "CLINIC DEMO",
      color: "bg-[#1E3A5F]",
      headline: "Advanced Joint Replacement & Sports Rehab",
      desc: "Specialized clinical website showcasing doctor credentials (MS Ortho, AIIMS), clear morning & evening OPD consultation schedules, and one-tap emergency hospital routing.",
      stats: [
        { label: "OPD Appointment Taps", val: "+80%" },
        { label: "Average Load Time", val: "0.35s" },
        { label: "Emergency OPD Calls", val: "95/mo" },
      ],
      highlights: [
        "Doctor qualification & hospital affiliations",
        "Morning & evening OPD consulting timetable",
        "Arthritis, spine & sports injury treatment guides",
        "Direct clinic reception & emergency dial",
      ],
      previewContent: {
        bannerTag: "Consultant: Dr. Arvind Mehta (MS Ortho)",
        badge: "🏥 OPD: Mon–Sat (9 AM – 1 PM / 5 PM – 8 PM)",
        items: [
          { name: "Knee Joint Pain Consultation", price: "₹800", time: "In-Clinic" },
          { name: "Sports Injury & Ligament Exam", price: "₹800", time: "In-Clinic" },
          { name: "Post-Op Physiotherapy Session", price: "₹650", time: "30 min" },
          { name: "Digital X-Ray & Bone Density", price: "₹1,200", time: "Diagnostics" },
        ],
        whatsappMessage: "Hi Dr. Mehta Clinic, I want to book an OPD consultation slot.",
      },
    },
    mfg: {
      id: "mfg",
      name: "Apex Precision Fabrications",
      domain: "apexprecision.co.in",
      realUrl: "",
      location: "Sanathnagar MIDC, Hyderabad",
      type: "Manufacturing",
      rating: "ISO 9001:2015 Plant",
      badge: "MFG DEMO",
      color: "bg-zinc-800",
      headline: "CNC Milling, Turned Parts & Sheet Metal",
      desc: "Technical specification catalogue engineered for B2B procurement managers, featuring plant machinery list, tolerance limits (±0.005mm), ISO credentials, and direct RFQ file upload.",
      stats: [
        { label: "Vendor Approvals", val: "100%" },
        { label: "Average Load Time", val: "0.41s" },
        { label: "B2B RFQs Captured", val: "38/mo" },
      ],
      highlights: [
        "Machinery specifications & shop floor capacity",
        "Downloadable technical PDF specification sheets",
        "ISO 9001:2015 & material quality certificates",
        "Direct RFQ / Bulk PO inquiry pipeline",
      ],
      previewContent: {
        bannerTag: "5-Axis CNC • Sheet Metal • Sub-Assemblies",
        badge: "⚙️ Plant Area: 22,000 Sq. Ft. • 40+ Machines",
        items: [
          { name: "Automotive Precision Shafts", price: "Custom Batch", time: "±0.005mm" },
          { name: "SS 316 Enclosures & Brackets", price: "Bulk RFQ", time: "Laser Cut" },
          { name: "Aerospace High-Temp Fixtures", price: "Custom Spec", time: "5-Axis CNC" },
          { name: "Turned Brass Connector Pins", price: "High Volume", time: "10k+ Units" },
        ],
        whatsappMessage: "Hi Apex Precision, we have an RFQ for CNC machined components.",
      },
    },
  };

  const current = demos[activeDemo];

  return (
    <section id="demos" className="py-20 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-[#0B6B38] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Live Demo&apos;s</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-zinc-950 tracking-tight">
            See real websites built for real businesses.
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base mt-3">
            No dummy templates. Explore the live interactive flagship portfolio for Ram Pawar, or test local trade prototypes engineered for Hyderabad businesses.
          </p>

          {/* Trade Selector Switcher Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setActiveDemo("portfolio")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeDemo === "portfolio"
                  ? "bg-zinc-950 text-white shadow-lg scale-105"
                  : "bg-zinc-100 hover:bg-zinc-200 text-zinc-700"
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>⭐ Ram Pawar (Main Demo)</span>
            </button>

            <button
              onClick={() => setActiveDemo("salon")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeDemo === "salon"
                  ? "bg-[#0B6B38] text-white shadow-lg scale-105"
                  : "bg-zinc-100 hover:bg-zinc-200 text-zinc-700"
              }`}
            >
              <Scissors className="w-4 h-4" />
              <span>Salon &amp; Spa</span>
            </button>

            <button
              onClick={() => setActiveDemo("clinic")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeDemo === "clinic"
                  ? "bg-[#1E3A5F] text-white shadow-lg scale-105"
                  : "bg-zinc-100 hover:bg-zinc-200 text-zinc-700"
              }`}
            >
              <Stethoscope className="w-4 h-4" />
              <span>Clinic &amp; OPD</span>
            </button>

            <button
              onClick={() => setActiveDemo("mfg")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeDemo === "mfg"
                  ? "bg-zinc-800 text-white shadow-lg scale-105"
                  : "bg-zinc-100 hover:bg-zinc-200 text-zinc-700"
              }`}
            >
              <Factory className="w-4 h-4" />
              <span>Manufacturer</span>
            </button>
          </div>
        </div>

        {/* Main Interactive Showcase Display */}
        <div className="bg-[#FAFAF9] border border-zinc-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Trade Information, Metrics & Key Features */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                  {current.badge}
                </span>
                <span className="text-xs font-semibold text-zinc-600 bg-zinc-200/80 px-2.5 py-1 rounded-full">
                  {current.location}
                </span>
                <span className="text-xs font-bold text-zinc-900 bg-amber-100/90 text-amber-900 px-2.5 py-1 rounded-full">
                  {current.rating}
                </span>
              </div>

              <div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-zinc-950 tracking-tight">
                  {current.name}
                </h3>
                <p className="text-sm font-semibold text-zinc-500 mt-1">
                  Domain: <span className="font-mono text-zinc-800 font-bold">{current.domain}</span>
                </p>
                <p className="text-zinc-600 text-sm leading-relaxed mt-3">
                  {current.desc}
                </p>
              </div>

              {/* Three Stat Cards */}
              <div className="grid grid-cols-3 gap-3">
                {current.stats.map((st, i) => (
                  <div
                    key={i}
                    className="bg-white p-3 rounded-xl border border-zinc-200/80 shadow-xs text-center"
                  >
                    <div className="font-display font-black text-lg sm:text-xl text-zinc-950">
                      {st.val}
                    </div>
                    <div className="text-[11px] text-zinc-500 mt-0.5 leading-tight">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Checkmarks */}
              <div className="space-y-2 pt-1">
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-zinc-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0B6B38] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                {current.realUrl && (
                  <a
                    href={current.realUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-zinc-950 hover:bg-black text-white font-semibold px-6 py-3 rounded-full text-sm transition-all shadow-md active:scale-95"
                  >
                    <Globe className="w-4 h-4 text-emerald-400" />
                    <span>Open {current.domain} ↗</span>
                  </a>
                )}

                <a
                  href={`https://wa.me/919000008685?text=Hi%20RACH%2C%20I%20saw%20the%20${encodeURIComponent(
                    current.name
                  )}%20prototype%20and%20want%20something%20similar%20for%20my%20business.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0B6B38] hover:bg-[#08522A] text-white font-semibold px-6 py-3 rounded-full text-sm transition-all shadow-md active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Build a website like this</span>
                </a>
              </div>
            </div>

            {/* Right: Live Interactive Device Frame */}
            <div className="lg:col-span-6 flex flex-col items-center">
              
              {/* Device Mode Switcher for All Demos */}
              <div className="flex items-center gap-1 mb-2 bg-white px-2 py-1 rounded-full border border-zinc-200 text-xs shadow-xs">
                <button
                  onClick={() => setInteractiveMode("live")}
                  className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all ${
                    interactiveMode === "live"
                      ? "bg-[#0B6B38] text-white shadow-xs"
                      : "text-zinc-600 hover:text-black"
                  }`}
                >
                  ⚡ Live Website View
                </button>
                <button
                  onClick={() => setInteractiveMode("card")}
                  className={`px-3 py-1 rounded-full text-[11px] font-bold transition-all ${
                    interactiveMode === "card"
                      ? "bg-zinc-900 text-white shadow-xs"
                      : "text-zinc-600 hover:text-black"
                  }`}
                >
                  📋 Offering Specs
                </button>
              </div>

              {/* Hardware Device Container */}
              <div className="w-full max-w-[360px] sm:max-w-[400px] bg-zinc-950 p-3 rounded-[40px] shadow-2xl border-4 border-zinc-800 relative">
                
                {/* Device Screen Frame */}
                <div className="bg-white rounded-[30px] overflow-hidden text-zinc-900 flex flex-col h-[560px] relative">
                  
                  {/* Status Bar */}
                  <div className="bg-zinc-950 px-4 py-2.5 flex items-center justify-between text-[10px] text-zinc-400 font-mono shrink-0">
                    <span>9:41 AM</span>
                    <div className="flex items-center gap-1.5 bg-zinc-800/90 text-zinc-200 px-3 py-0.5 rounded-full text-[9px]">
                      <span className="text-emerald-400">🔒</span>
                      <span>{current.domain}</span>
                    </div>
                    <span>100%</span>
                  </div>

                  {/* 1. Live Interactive Website View */}
                  {interactiveMode === "live" ? (
                    <div className="w-full flex-1 relative overflow-hidden bg-white">
                      {current.id === "portfolio" ? (
                        <iframe
                          src="https://www.rampawar.in/"
                          title="Ram Pawar Portfolio — rampawar.in"
                          className="w-full h-full border-0 select-auto"
                          loading="eager"
                        />
                      ) : current.id === "salon" ? (
                        <SalonMiniSite />
                      ) : current.id === "clinic" ? (
                        <ClinicMiniSite />
                      ) : (
                        <MfgMiniSite />
                      )}
                    </div>
                  ) : (
                    /* 2. Offering Card View (For Salon, Clinic, Mfg, or Portfolio specs) */
                    <div className="flex-1 flex flex-col justify-between overflow-hidden">
                      {/* Storefront / Trade Header */}
                      <div className={`${current.color} text-white p-3.5 flex items-center justify-between shrink-0`}>
                        <div>
                          <div className="text-[9px] uppercase tracking-widest text-emerald-200 font-bold">
                            {current.previewContent.bannerTag}
                          </div>
                          <div className="font-display font-bold text-sm tracking-tight leading-tight">
                            {current.name}
                          </div>
                        </div>
                        <span className="text-[9px] font-bold bg-white/20 text-white px-2 py-0.5 rounded-full">
                          LIVE
                        </span>
                      </div>

                      {/* Badge banner */}
                      <div className="bg-emerald-50 border-b border-emerald-100 px-3 py-1.5 text-[11px] text-[#0B6B38] font-bold shrink-0">
                        {current.previewContent.badge}
                      </div>

                      {/* Offerings List */}
                      <div className="flex-1 p-3 overflow-y-auto space-y-2">
                        <div className="text-[10px] uppercase font-bold text-zinc-400">
                          Featured Offerings &amp; Specs:
                        </div>
                        {current.previewContent.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="bg-zinc-50 p-2.5 rounded-xl border border-zinc-200/60 flex items-center justify-between text-xs"
                          >
                            <div>
                              <div className="font-semibold text-zinc-900">
                                {item.name}
                              </div>
                              <div className="text-[10px] text-zinc-500">
                                {item.time}
                              </div>
                            </div>
                            <div className="font-bold text-xs text-[#0B6B38]">
                              {item.price}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Action inside Device */}
                      <div className="p-3 bg-zinc-50 border-t border-zinc-100 shrink-0">
                        <a
                          href={`https://wa.me/919000008685?text=${encodeURIComponent(
                            current.previewContent.whatsappMessage
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-black font-bold py-2.5 px-3 rounded-full flex items-center justify-center gap-1.5 text-xs transition-colors shadow-xs"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-black" />
                          <span>Direct WhatsApp Action</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* External link pill beneath device */}
                {current.realUrl && (
                  <div className="mt-3 text-center">
                    <a
                      href={current.realUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-zinc-400 hover:text-emerald-400 transition-colors"
                    >
                      <span>Interactive viewport loading live from {current.domain}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
