"use client";

import React, { useState, useRef } from "react";
import {
  XCircle,
  CheckCircle2,
  Sliders,
  Sparkles,
  AlertTriangle,
} from "lucide-react";

export default function ComparisonSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-20 bg-white border-b border-zinc-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EBF7EE] text-[#0B6B38] rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <span>BENCHMARK COMPARISON</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight">
            Generic Template Mill vs. RACH Engineered Storefront.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl leading-relaxed">
            Drag the comparison slider below to inspect the real performance difference between a slow generic website and a RACH high-converting storefront.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative h-[580px] sm:h-[490px] w-full select-none overflow-hidden rounded-3xl border border-zinc-200/80 shadow-[0_10px_35px_rgba(0,0,0,0.05)] cursor-ew-resize bg-white"
        >
          {/* RIGHT SIDE: RACH Engineered Storefront (Full Base) */}
          <div className="absolute inset-0 bg-[#FAFAF9] p-6 sm:p-10 flex flex-col justify-between text-left">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#0B6B38] animate-pulse" />
                <span className="text-xs uppercase font-bold text-[#0B6B38] bg-[#EBF7EE] px-3 py-1 rounded-full">
                  RACH Storefront (Engineered for Local Business)
                </span>
              </div>
              <div className="text-right text-xs text-[#0B6B38] font-bold hidden sm:block">
                ⚡ 99/100 Google Speed • 0.38s Load Time
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-auto">
              <div className="space-y-4">
                <div className="font-display font-bold text-2xl sm:text-3xl text-zinc-950 tracking-tight">
                  1-Tap WhatsApp Booking &amp; Google Map Dominance
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  Engineered specifically for your city. Customers tap once on their phone and start a WhatsApp chat with your business with their service pre-selected.
                </p>
                <div className="space-y-2 text-xs text-zinc-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0B6B38] shrink-0" />
                    <span className="font-medium">0.38s Indian Edge CDN loading speed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0B6B38] shrink-0" />
                    <span className="font-medium">1-Tap WhatsApp Lead Capture (Zero drop-offs)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0B6B38] shrink-0" />
                    <span className="font-medium">100% Managed — updates done in &lt;24hrs via WhatsApp</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-between space-y-4">
                <div className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
                  Real Performance Telemetry:
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-[#EBF7EE]/60 p-3 rounded-xl border border-emerald-100">
                    <div className="text-zinc-500 text-[10px] uppercase font-semibold">MOBILE SPEED</div>
                    <div className="font-bold text-lg text-[#0B6B38]">0.38 sec</div>
                  </div>
                  <div className="bg-[#EBF7EE]/60 p-3 rounded-xl border border-emerald-100">
                    <div className="text-zinc-500 text-[10px] uppercase font-semibold">CONVERSION</div>
                    <div className="font-bold text-lg text-[#0B6B38]">14.2%</div>
                  </div>
                  <div className="bg-zinc-50 p-3 rounded-xl border border-zinc-200">
                    <div className="text-zinc-500 text-[10px] uppercase font-semibold">MAINTENANCE</div>
                    <div className="font-bold text-lg text-zinc-900">Zero Effort</div>
                  </div>
                  <div className="bg-[#EBF7EE]/60 p-3 rounded-xl border border-emerald-100">
                    <div className="text-zinc-500 text-[10px] uppercase font-semibold">GOOGLE SCORE</div>
                    <div className="font-bold text-lg text-[#0B6B38]">99 / 100</div>
                  </div>
                </div>
                <div className="text-[11px] text-[#0B6B38] font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ready in 3–5 Business Days</span>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-zinc-500 border-t border-zinc-200 pt-3 flex justify-between">
              <span>STATUS: PRODUCTION LIVE</span>
              <span>HOST: HYDERABAD EDGE NODE</span>
            </div>
          </div>

          {/* LEFT SIDE: Generic Slow Template (Clipped Overlay) */}
          <div
            className="absolute inset-y-0 left-0 bg-zinc-100 overflow-hidden select-none border-r-2 border-[#0B6B38]"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="w-[100vw] max-w-7xl h-full p-6 sm:p-10 flex flex-col justify-between text-left">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-600 animate-ping" />
                  <span className="text-xs uppercase font-bold text-rose-800 bg-rose-100 px-3 py-1 rounded-full">
                    Generic Freelancer / WordPress Template
                  </span>
                </div>
                <div className="text-right text-xs text-rose-800 font-bold hidden sm:block">
                  ⚠️ 5.4s Load Time • 68% Bounce Rate
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-auto">
                <div className="space-y-4">
                  <div className="font-display font-bold text-2xl sm:text-3xl text-zinc-500 tracking-tight">
                    Slow, Bloated, &amp; Forgotten Template
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                    Heavy plugins, broken email contact forms, generic stock photos, and a complex dashboard you haven&apos;t logged into in months.
                  </p>
                  <div className="space-y-2 text-xs text-rose-900">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>5.4s sluggish loading on 4G mobile</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>Broken contact form (leads lost in spam)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>Freelancer vanished when you needed a price change</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 p-5 rounded-2xl border border-rose-200 flex flex-col justify-between space-y-4">
                  <div className="text-xs font-bold text-rose-900 uppercase tracking-wider">
                    Template Flaws &amp; Lost Revenue:
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-rose-50/60 p-3 rounded-xl border border-rose-100">
                      <div className="text-rose-700 text-[10px] uppercase font-semibold">MOBILE SPEED</div>
                      <div className="font-bold text-lg text-rose-700">5.42 sec</div>
                    </div>
                    <div className="bg-rose-50/60 p-3 rounded-xl border border-rose-100">
                      <div className="text-rose-700 text-[10px] uppercase font-semibold">CONVERSION</div>
                      <div className="font-bold text-lg text-rose-700">1.8%</div>
                    </div>
                    <div className="bg-rose-50/60 p-3 rounded-xl border border-rose-100">
                      <div className="text-rose-700 text-[10px] uppercase font-semibold">MAINTENANCE</div>
                      <div className="font-bold text-lg text-rose-700">Painful CMS</div>
                    </div>
                    <div className="bg-rose-50/60 p-3 rounded-xl border border-rose-100">
                      <div className="text-rose-700 text-[10px] uppercase font-semibold">GOOGLE SCORE</div>
                      <div className="font-bold text-lg text-rose-700">38 / 100</div>
                    </div>
                  </div>
                  <div className="text-[11px] text-rose-800 font-semibold flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Losing potential customers every day</span>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-rose-700 border-t border-rose-200 pt-3 flex justify-between">
                <span>STATUS: OUTDATED TEMPLATE</span>
                <span>SECURITY: INSECURE SSL</span>
              </div>
            </div>
          </div>

          {/* Draggable Divider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-[#0B6B38] cursor-ew-resize z-30 flex items-center justify-center shadow-2xl"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-10 h-10 bg-white border-2 border-[#0B6B38] text-[#0B6B38] flex items-center justify-center rounded-full shadow-lg -ml-0.5">
              <Sliders className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Quick slider controls */}
        <div className="mt-4 flex items-center justify-between text-xs text-zinc-500 font-medium">
          <button
            onClick={() => setSliderPosition(20)}
            className="hover:text-zinc-900 underline cursor-pointer"
          >
            ← View Generic Template (20%)
          </button>
          <span className="hidden sm:inline">↔ Drag handle to compare side-by-side</span>
          <button
            onClick={() => setSliderPosition(80)}
            className="hover:text-zinc-900 underline cursor-pointer"
          >
            View RACH Storefront (80%) →
          </button>
        </div>
      </div>
    </section>
  );
}
