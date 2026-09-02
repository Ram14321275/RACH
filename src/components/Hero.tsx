"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Play,
  Zap,
  ShieldCheck,
  Headphones,
  TrendingUp,
  X,
  ExternalLink,
  MessageCircle,
  Sparkles,
  MapPin,
  Star,
  CheckCircle2,
} from "lucide-react";
import {
  DesktopSalonWebsite,
  DesktopClinicWebsite,
  DesktopMfgWebsite,
  MacBrowserHeader,
} from "@/components/DesktopDemoWebsites";

export default function Hero() {
  const [activeDemoTab, setActiveDemoTab] = useState<"portfolio" | "salon" | "clinic" | "mfg">("portfolio");
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [isAutoCycling, setIsAutoCycling] = useState(false);

  // Auto-cycle through demos every 6 seconds if enabled
  useEffect(() => {
    if (!isAutoCycling) return;
    const tabs: ("portfolio" | "salon" | "clinic" | "mfg")[] = ["portfolio", "salon", "clinic", "mfg"];
    const interval = setInterval(() => {
      setActiveDemoTab((prev) => {
        const nextIdx = (tabs.indexOf(prev) + 1) % tabs.length;
        return tabs[nextIdx];
      });
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoCycling]);

  const demoSites = {
    portfolio: {
      id: "portfolio",
      title: "the CHILL WORKS — Ram Pawar",
      category: "Personal Brand & AI Solutions",
      tagline: "AI Solutions Architect Portfolio & Client Portal",
      badge: "Portfolio Demo",
      url: "https://rampawar.rach.in",
      highlights: [
        "Modern dark-light typography",
        "Interactive tech stack badges (Canva, Ps, VS Code)",
        "Direct client consultation booking",
        "0.32s ultra-fast mobile loading",
      ],
    },
    salon: {
      id: "salon",
      title: "Kaya Botanics Salon & Spa",
      category: "Hair, Skin & Luxury Wellness",
      tagline: "Organic Hair & Botanical Skin Rituals",
      badge: "Salon Demo",
      url: "https://kayabotanics.rach.in",
      highlights: [
        "1-Tap WhatsApp Booking with pre-filled service",
        "Transparent INR pricing menu",
        "Google Maps & direction routing",
        "0.38s Indian Edge CDN loading speed",
      ],
    },
    clinic: {
      id: "clinic",
      title: "Dr. Mehta Orthocare Clinic",
      category: "Healthcare & Orthopedic OPD",
      tagline: "Joint Replacement & Sports Rehabilitation",
      badge: "Clinic Demo",
      url: "https://mehtaortho.rach.in",
      highlights: [
        "Doctor qualification & hospital affiliations",
        "Morning & evening OPD consultation timetable",
        "Direct emergency dial & reception chat",
        "Patient testimonial & Google review sync",
      ],
    },
    mfg: {
      id: "mfg",
      title: "Apex Precision Fabrications",
      category: "B2B CNC & Sheet Metal Engineering",
      tagline: "5-Axis CNC & High-Tolerance Components",
      badge: "Manufacturer Demo",
      url: "https://apexprecision.rach.in",
      highlights: [
        "Shop floor plant machinery list (40+ CNC)",
        "Downloadable technical PDF specs",
        "ISO 9001:2015 verified credential badge",
        "Instant Request-for-Quote (RFQ) pipeline",
      ],
    },
  };

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      subtitle: "Performance (< 0.4s)",
    },
    {
      icon: ShieldCheck,
      title: "Secure &",
      subtitle: "Enterprise SSL",
    },
    {
      icon: Headphones,
      title: "24/7 Expert",
      subtitle: "Support on WhatsApp",
    },
    {
      icon: TrendingUp,
      title: "Scalable As",
      subtitle: "Your Business Grows",
    },
  ];

  return (
    <div className="relative overflow-hidden google-ambient-bg">
      {/* Google-style Atmospheric Multi-Mesh Ambient Glows */}
      <div className="absolute top-0 right-10 w-[550px] h-[550px] bg-gradient-to-br from-emerald-200/35 via-teal-100/25 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" style={{ animationDuration: "8s" }} />
      <div className="absolute top-20 left-4 w-[450px] h-[450px] bg-gradient-to-tr from-blue-100/35 via-sky-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-[600px] h-[300px] bg-gradient-to-r from-amber-100/20 via-emerald-50/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Main Hero Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-12 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-5 sm:space-y-6">
            
            {/* Top Eyebrow Tag + Hyderabad Region Pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="flex items-center gap-1.5 tracking-wider">
                <span className="text-[#0B6B38] font-black text-xs sm:text-sm uppercase tracking-widest">
                  WEBSITES
                </span>
                <span className="text-zinc-900 font-bold text-xs sm:text-sm uppercase tracking-widest">
                  THAT DELIVER
                </span>
              </div>
              <span className="hidden sm:inline-block text-zinc-300">|</span>
              <div className="inline-flex items-center gap-1.5 bg-emerald-50/80 border border-emerald-200/60 px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-[#0B6B38]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0B6B38] animate-ping" />
                <span>Hyderabad &amp; Pan-India</span>
              </div>
            </div>

            {/* Massive Bold Headline with Overlapping "Pakka Local" */}
            <div className="relative select-none">
              <h1 className="font-black text-zinc-950 tracking-tight leading-[0.92] text-6xl sm:text-7xl md:text-8xl lg:text-[86px] xl:text-[92px]">
                BUILD
                <br />
                HOSTED
                <br />
                <span className="relative inline-block">
                  MANAGED
                  {/* Cursive Overlapping Handwritten Script in Vivid Red */}
                  <span className="absolute -bottom-2 sm:-bottom-4 -right-4 sm:-right-8 lg:-right-12 font-caveat text-[#EE2B2B] text-5xl sm:text-6xl md:text-7xl lg:text-[82px] font-bold -rotate-[8deg] whitespace-nowrap drop-shadow-sm pointer-events-none">
                    Pakka Local
                  </span>
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed max-w-lg pt-1 sm:pt-2">
              Professional websites, hosting services and complete management -{" "}
              <strong className="font-semibold text-zinc-950">all in one place</strong>
            </p>

            {/* Trust Pill: Found on Google | Loved on WhatsApp */}
            <div className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-zinc-200 shadow-[0_2px_12px_rgba(0,0,0,0.04)] text-xs sm:text-sm text-zinc-700 font-medium">
              <span>Found on</span>
              {/* Google G multi-color logo */}
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.27 21.43 7.33 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27A7.17 7.17 0 0 1 4.9 12c0-.79.14-1.57.38-2.27V6.58H1.25A11.97 11.97 0 0 0 0 12c0 1.92.45 3.74 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.27 2.57 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
              <span className="text-zinc-300 font-light">|</span>
              <span>Loved on</span>
              {/* WhatsApp green icon */}
              <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="#25D366" />
                <path
                  d="M17.5 14.5c-.3-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.3-.74.94-.91 1.13-.17.19-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.64-1.55-.88-2.12-.23-.56-.47-.48-.65-.49h-.55c-.19 0-.5.07-.76.35-.26.28-1 1-1 2.43s1.02 2.82 1.16 3.01c.14.19 2.01 3.07 4.88 4.31.68.29 1.22.47 1.63.6.69.22 1.32.19 1.81.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.56-.34z"
                  fill="white"
                />
              </svg>
            </div>

            {/* Primary Action Button: Watch Live Demo */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  const el = document.getElementById("demos");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#0A0A0A] hover:bg-black text-white px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base inline-flex items-center gap-3 shadow-[0_10px_25px_rgba(0,0,0,0.18)] transition-all hover:scale-[1.03] active:scale-95 group cursor-pointer"
              >
                <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs transition-transform group-hover:scale-110">
                  <Play className="w-2.5 h-2.5 fill-black text-black ml-0.5" />
                </span>
                <span>Watch Live Demo</span>
                <span className="text-sm font-normal transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </button>

              <a
                href="https://wa.me/919000008685?text=Hi%20RACH%2C%20I%20am%20based%20in%20Hyderabad%20and%20want%20to%20build%20a%20website%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-semibold text-zinc-700 hover:text-black px-4 py-3 rounded-full hover:bg-zinc-100 transition-colors flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 text-[#0B6B38]" />
                <span>Chat on WhatsApp (+91 90000 08685)</span>
              </a>
            </div>
          </div>

          {/* Right Column: MacBook Laptop with Interactive Demo Display Screen */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-end relative">
            
            {/* Demo Switcher Pills above the Laptop */}
            <div className="flex items-center gap-1.5 mb-3 bg-white/90 backdrop-blur-md p-1 rounded-full border border-zinc-200/90 shadow-sm z-20 text-xs">
              <button
                onClick={() => setActiveDemoTab("portfolio")}
                className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold transition-all ${
                  activeDemoTab === "portfolio"
                    ? "bg-zinc-950 text-white shadow-xs"
                    : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                💼 Portfolio
              </button>
              <button
                onClick={() => setActiveDemoTab("salon")}
                className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold transition-all ${
                  activeDemoTab === "salon"
                    ? "bg-[#0B6B38] text-white shadow-xs"
                    : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                💇 Salon
              </button>
              <button
                onClick={() => setActiveDemoTab("clinic")}
                className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold transition-all ${
                  activeDemoTab === "clinic"
                    ? "bg-[#1E3A5F] text-white shadow-xs"
                    : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                🩺 Clinic
              </button>
              <button
                onClick={() => setActiveDemoTab("mfg")}
                className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold transition-all ${
                  activeDemoTab === "mfg"
                    ? "bg-zinc-800 text-white shadow-xs"
                    : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                ⚙️ B2B Mfg
              </button>
            </div>

            {/* Laptop Mockup Container */}
            <div className="relative w-full max-w-[620px] aspect-[1400/860] transition-all duration-300 group">
              
              {/* Screen Area Display (Sitting precisely inside the laptop bezel) */}
              <div className="absolute top-[7.2%] left-[10.14%] w-[79.72%] h-[79.53%] rounded-[6px] overflow-hidden bg-white z-0 select-none shadow-inner">
                
                {/* 1. PORTFOLIO SCREEN (Real Interactive Website: rampawar.in) */}
                {activeDemoTab === "portfolio" && (
                  <div className="relative w-full h-full animate-in fade-in duration-300 bg-white flex flex-col">
                    <MacBrowserHeader
                      url="https://www.rampawar.in"
                      fullUrl="https://www.rampawar.in/"
                      tradeName="the CHILL WORKS — Ram Pawar"
                    />
                    <div className="flex-1 w-full h-full relative overflow-hidden bg-white">
                      <iframe
                        src="https://www.rampawar.in/"
                        title="Ram Pawar Portfolio — rampawar.in"
                        className="w-full h-full border-0 select-auto"
                        loading="eager"
                      />
                    </div>
                  </div>
                )}

                {/* 2. SALON SCREEN (Kaya Botanics Live Desktop Showcase) */}
                {activeDemoTab === "salon" && (
                  <div className="w-full h-full animate-in fade-in duration-300">
                    <DesktopSalonWebsite />
                  </div>
                )}

                {/* 3. CLINIC SCREEN (Dr. Mehta Orthocare Live Desktop Showcase) */}
                {activeDemoTab === "clinic" && (
                  <div className="w-full h-full animate-in fade-in duration-300">
                    <DesktopClinicWebsite />
                  </div>
                )}

                {/* 4. MANUFACTURER SCREEN (Apex Precision Fabrications Live Desktop Showcase) */}
                {activeDemoTab === "mfg" && (
                  <div className="w-full h-full animate-in fade-in duration-300">
                    <DesktopMfgWebsite />
                  </div>
                )}
              </div>

              {/* MacBook Pro Laptop Frame Overlay (Camera, Glass Bezel, Aluminum Base) */}
              <Image
                src="/macbook-pro-frame.png"
                alt="Apple MacBook Pro — RACH Live Storefront Showcase"
                fill
                className="pointer-events-none z-10 object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.18)]"
                priority
              />

              {/* Floating Live Telemetry Badge */}
              <div className="absolute -bottom-3 -left-2 sm:left-4 z-20 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-zinc-200/90 shadow-md text-[11px] font-semibold text-zinc-800 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0B6B38] animate-ping" />
                <span>Active Prototype: {demoSites[activeDemoTab].badge}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Trust Strip / 4 Features Bar (Directly below hero) */}
      <section className="border-y border-zinc-200/80 bg-white/90 backdrop-blur-md py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-zinc-200/80">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-3.5 ${
                    idx !== 0 ? "pt-4 sm:pt-0 sm:pl-6 lg:pl-8" : ""
                  }`}
                >
                  {/* Mint green circular badge */}
                  <div className="w-11 h-11 rounded-full bg-[#EBF7EE] text-[#0B6B38] flex items-center justify-center shrink-0 shadow-xs">
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  {/* Text */}
                  <div className="flex flex-col text-left">
                    <span className="font-bold text-sm sm:text-[15px] text-zinc-900 leading-tight">
                      {item.title}
                    </span>
                    <span className="text-xs text-zinc-500 font-medium">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
