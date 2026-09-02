"use client";

import React, { useState } from "react";
import { Calculator, TrendingUp, Sparkles, MessageCircle, ArrowRight } from "lucide-react";

export default function RoiCalculator() {
  const [trade, setTrade] = useState<"salon" | "clinic" | "mfg">("salon");
  const [avgTicket, setAvgTicket] = useState<number>(1200);
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(400);

  const tradePresets = {
    salon: {
      name: "Salon & Wellness",
      defaultTicket: 1200,
      visitorDefault: 400,
      convSlow: 0.02,
      convRach: 0.09,
      unit: "Appointments",
    },
    clinic: {
      name: "Clinic & Healthcare",
      defaultTicket: 900,
      visitorDefault: 500,
      convSlow: 0.03,
      convRach: 0.11,
      unit: "Patient Bookings",
    },
    mfg: {
      name: "B2B Manufacturing",
      defaultTicket: 45000,
      visitorDefault: 250,
      convSlow: 0.01,
      convRach: 0.05,
      unit: "Bulk RFQs",
    },
  };

  const setPreset = (t: "salon" | "clinic" | "mfg") => {
    setTrade(t);
    setAvgTicket(tradePresets[t].defaultTicket);
    setMonthlyVisitors(tradePresets[t].visitorDefault);
  };

  // Calculations
  const currentConfig = tradePresets[trade];
  const leadsSlow = Math.round(monthlyVisitors * currentConfig.convSlow);
  const leadsRach = Math.round(monthlyVisitors * currentConfig.convRach);
  const extraLeads = Math.max(1, leadsRach - leadsSlow);
  const extraRevenue = extraLeads * avgTicket;
  const daysToRoi = Math.max(2, Math.min(30, Math.round((8999 / (extraRevenue / 30)))));

  return (
    <section className="py-20 bg-white border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EBF7EE] text-[#0B6B38] rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <span>ROI CALCULATOR</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight">
            Calculate your projected returns.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl leading-relaxed">
            See how many extra direct WhatsApp bookings and monthly revenue your business gains when you upgrade to a high-speed RACH storefront.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-[#FAFAF9] border border-zinc-200/90 rounded-3xl p-6 sm:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.03)]">
          {/* Trade Presets */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setPreset("salon")}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all border ${
                trade === "salon"
                  ? "bg-[#0B6B38] text-white border-[#0B6B38] shadow-sm"
                  : "bg-white text-zinc-600 border-zinc-200 hover:text-zinc-900"
              }`}
            >
              💇 Salon &amp; Spa
            </button>
            <button
              onClick={() => setPreset("clinic")}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all border ${
                trade === "clinic"
                  ? "bg-[#0B6B38] text-white border-[#0B6B38] shadow-sm"
                  : "bg-white text-zinc-600 border-zinc-200 hover:text-zinc-900"
              }`}
            >
              🩺 Clinic &amp; Doctor
            </button>
            <button
              onClick={() => setPreset("mfg")}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all border ${
                trade === "mfg"
                  ? "bg-[#0B6B38] text-white border-[#0B6B38] shadow-sm"
                  : "bg-white text-zinc-600 border-zinc-200 hover:text-zinc-900"
              }`}
            >
              ⚙️ Manufacturer
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders Input Controls */}
            <div className="lg:col-span-6 space-y-6">
              {/* Slider 1: Average Ticket Size */}
              <div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-zinc-900 uppercase tracking-wide">
                    Average Customer Value:
                  </span>
                  <span className="font-display font-bold text-lg text-[#0B6B38]">
                    ₹{avgTicket.toLocaleString("en-IN")}
                  </span>
                </div>
                <input
                  type="range"
                  min={trade === "mfg" ? 10000 : 300}
                  max={trade === "mfg" ? 200000 : 10000}
                  step={trade === "mfg" ? 5000 : 100}
                  value={avgTicket}
                  onChange={(e) => setAvgTicket(Number(e.target.value))}
                  className="w-full accent-[#0B6B38] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 font-medium">
                  <span>Min: ₹{trade === "mfg" ? "10k" : "300"}</span>
                  <span>Max: ₹{trade === "mfg" ? "2 Lakh" : "10k"}</span>
                </div>
              </div>

              {/* Slider 2: Monthly Visitors */}
              <div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-zinc-900 uppercase tracking-wide">
                    Monthly Visitors (Google / Social):
                  </span>
                  <span className="font-display font-bold text-lg text-zinc-900">
                    {monthlyVisitors.toLocaleString()} visitors
                  </span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={3000}
                  step={50}
                  value={monthlyVisitors}
                  onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                  className="w-full accent-[#0B6B38] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-zinc-500 font-medium">
                  <span>100 visitors</span>
                  <span>3,000 visitors</span>
                </div>
              </div>
            </div>

            {/* Results Display Panel */}
            <div className="lg:col-span-6 bg-zinc-950 text-white p-6 sm:p-8 rounded-3xl space-y-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
                  PROJECTED MONTHLY IMPACT
                </span>
                <span className="text-xs text-zinc-400 font-medium">
                  ⚡ 1-Tap WhatsApp Conversion
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-900/80 p-4 rounded-2xl border border-zinc-800">
                  <div className="text-[11px] text-zinc-400 uppercase font-semibold">
                    EXTRA LEADS / MO
                  </div>
                  <div className="font-display font-bold text-3xl sm:text-4xl text-emerald-400 mt-1">
                    +{extraLeads}
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">
                    {currentConfig.unit}
                  </div>
                </div>

                <div className="bg-zinc-900/80 p-4 rounded-2xl border border-zinc-800">
                  <div className="text-[11px] text-zinc-400 uppercase font-semibold">
                    EXTRA REVENUE / MO
                  </div>
                  <div className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">
                    +₹{extraRevenue.toLocaleString("en-IN")}
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">
                    Estimated / Month
                  </div>
                </div>
              </div>

              {/* Payback period callout */}
              <div className="bg-emerald-950/40 border border-emerald-800/40 p-3.5 rounded-xl flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-zinc-300">
                  <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>The ₹8,999 Business build pays for itself in:</span>
                </div>
                <span className="font-bold text-sm text-emerald-400">
                  ~{daysToRoi} Days
                </span>
              </div>

              <a
                href={`https://wa.me/919000008685?text=Hi%20RACH%2C%20I%20used%20the%20ROI%20calculator%20for%20my%20${tradePresets[trade].name}%20and%20want%20to%20discuss%20building%20my%20site.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#0B6B38] hover:bg-[#08522A] text-white font-bold py-3.5 px-4 rounded-full flex items-center justify-center gap-2 transition-all text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Capture These Leads on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
