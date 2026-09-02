"use client";

import React, { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function WhatsAppFloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const intents = [
    { label: "💇 Salon & Spa Website", msg: "Hi RACH, I want to build a website for my Salon/Spa business." },
    { label: "🩺 Clinic & Doctor Website", msg: "Hi RACH, I want to build a website for my Clinic/Medical practice." },
    { label: "⚙️ Manufacturer / RFQ Site", msg: "Hi RACH, I want to build a website for my Manufacturing business." },
    { label: "💰 Pricing & Delivery Details", msg: "Hi RACH, I want to inquire about the ₹8,999 Business setup and RACH Care." },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50 select-none">
      {/* Expanded Quick Message Menu */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-zinc-950 text-white rounded-3xl border border-zinc-800 p-5 shadow-2xl animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <div className="font-display font-bold text-sm text-white">
                  RACH Digital Contractor
                </div>
                <div className="text-[11px] text-emerald-400 font-medium">
                  Online • Typical reply &lt; 15 mins
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white p-1 rounded-full hover:bg-zinc-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-zinc-300 mb-3 leading-relaxed">
            Select your trade below to start a direct WhatsApp chat with our founding engineer:
          </p>

          <div className="space-y-2">
            {intents.map((item) => (
              <a
                key={item.label}
                href={`https://wa.me/919000008685?text=${encodeURIComponent(item.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-zinc-900 hover:bg-[#0B6B38] text-zinc-200 hover:text-white p-3 rounded-xl border border-zinc-800 hover:border-emerald-700 transition-all font-medium text-xs text-left"
              >
                <div className="flex items-center justify-between">
                  <span>{item.label}</span>
                  <Send className="w-3.5 h-3.5 opacity-80" />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-400 font-medium">
            <span>Direct WhatsApp</span>
            <span>+91 90000 08685</span>
          </div>
        </div>
      )}

      {/* Floating Pill Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-black font-semibold px-4 sm:px-5 py-3 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.35)] transition-all hover:scale-105 active:scale-95 cursor-pointer border-2 border-white"
        aria-label="Open WhatsApp Chat Widget"
      >
        <MessageCircle className="w-5 h-5 fill-black text-[#25D366]" />
        <span className="text-xs sm:text-sm font-bold">Chat on WhatsApp</span>
        <span className="w-2 h-2 rounded-full bg-emerald-950 animate-ping" />
      </button>
    </div>
  );
}
