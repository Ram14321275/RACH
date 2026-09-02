"use client";

import React, { useState, useEffect } from "react";
import {
  Command,
  Search,
  Zap,
  Globe,
  Scissors,
  Stethoscope,
  Factory,
  MessageCircle,
  Calculator,
  ShieldCheck,
  Star,
  Activity,
  X,
  ExternalLink,
  ChevronRight,
  Server,
  Lock,
} from "lucide-react";

export default function SaaSCommandBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Keyboard shortcut: Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
        setPortalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const actions = [
    {
      icon: MessageCircle,
      title: "Direct WhatsApp Line (+91 90000 08685)",
      desc: "Chat directly with founder for quick queries",
      action: () => {
        window.open("https://wa.me/919000008685?text=Hi%20RACH%2C%20I%20want%20to%20build%20a%20website.", "_blank");
        setIsOpen(false);
      },
      tag: "Instant",
    },
    {
      icon: Star,
      title: "the CHILL WORKS — Ram Pawar (Main Demo)",
      desc: "Live interactive portfolio showcase (rampawar.in)",
      action: () => {
        window.location.hash = "demos";
        setIsOpen(false);
      },
      tag: "Live Site",
    },
    {
      icon: Scissors,
      title: "Salon & Spa Storefront Prototype",
      desc: "Kaya Botanics Jubilee Hills with 1-tap booking",
      action: () => {
        window.location.hash = "demos";
        setIsOpen(false);
      },
      tag: "Demo",
    },
    {
      icon: Stethoscope,
      title: "Clinic & OPD Medical Storefront Prototype",
      desc: "Dr. Mehta Orthocare Banjara Hills with timetable",
      action: () => {
        window.location.hash = "demos";
        setIsOpen(false);
      },
      tag: "Demo",
    },
    {
      icon: Factory,
      title: "B2B Manufacturing Specification Prototype",
      desc: "Apex Precision Fabrications with CNC specs",
      action: () => {
        window.location.hash = "demos";
        setIsOpen(false);
      },
      tag: "Demo",
    },
    {
      icon: Star,
      title: "Submit Client Testimonial & Review",
      desc: "Share your experience on our verified client wall",
      action: () => {
        window.location.hash = "testimonials";
        setIsOpen(false);
      },
      tag: "Feedback",
    },
    {
      icon: Server,
      title: "RACH Client Hub & Portal Preview",
      desc: "Manage uptime, enterprise SSL, and 24-hr updates",
      action: () => {
        setIsOpen(false);
        setPortalOpen(true);
      },
      tag: "SaaS Portal",
    },
    {
      icon: Calculator,
      title: "Calculate Website ROI & WhatsApp Inquiries",
      desc: "Interactive financial return estimator for local trades",
      action: () => {
        window.location.hash = "pricing";
        setIsOpen(false);
      },
      tag: "Calculator",
    },
  ];

  const filtered = actions.filter((a) =>
    a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    a.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Floating SaaS Shortcut Pill (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-zinc-950/90 hover:bg-black text-white text-xs px-3.5 py-2 rounded-full border border-zinc-800 shadow-xl backdrop-blur-md transition-all hover:scale-105 active:scale-95"
          title="Press Ctrl+K or Cmd+K to open Quick Actions"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold hidden sm:inline">RACH Hub</span>
          <span className="bg-zinc-800 text-[10px] text-zinc-300 px-1.5 py-0.5 rounded font-mono font-bold">
            ⌘K
          </span>
        </button>
      </div>

      {/* COMMAND PALETTE MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden text-left animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Header */}
            <div className="p-4 border-b border-zinc-100 flex items-center gap-3">
              <Search className="w-5 h-5 text-zinc-400 shrink-0" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type a command, search demos, or jump to..."
                className="w-full text-sm text-zinc-900 placeholder:text-zinc-400 bg-transparent border-0 focus:outline-none"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 px-3 py-1.5">
                Quick Actions &amp; System Navigation
              </div>
              {filtered.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={idx}
                    onClick={item.action}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-zinc-100/80 transition-colors text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-zinc-100 group-hover:bg-white text-zinc-800 flex items-center justify-center shrink-0 border border-zinc-200/50">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-zinc-900">{item.title}</div>
                        <div className="text-[11px] text-zinc-500">{item.desc}</div>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded border border-zinc-200 shrink-0">
                      {item.tag}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Footer */}
            <div className="bg-zinc-50 px-4 py-2.5 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Hyderabad Edge Node: 0.38s</span>
              </span>
              <span className="font-mono text-[10px]">Esc to close</span>
            </div>
          </div>
        </div>
      )}

      {/* RACH CLIENT HUB / SAAS PORTAL MODAL */}
      {portalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="w-full max-w-2xl bg-zinc-950 text-white rounded-3xl shadow-2xl border border-zinc-800 overflow-hidden text-left animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#0B6B38] text-white flex items-center justify-center font-black">
                  Λ
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    RACH Client Hub — Digital Command Center
                  </h3>
                  <p className="text-xs text-zinc-400">
                    What you get when your website is Built, Hosted &amp; Managed by RACH
                  </p>
                </div>
              </div>
              <button
                onClick={() => setPortalOpen(false)}
                className="p-1.5 rounded-full bg-zinc-900 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* SaaS Metrics Dashboard Body */}
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
                  <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-400 font-mono mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>OPERATIONAL</span>
                  </div>
                  <div className="font-display font-black text-xl text-white">99.98%</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">Hyd Edge Uptime</div>
                </div>

                <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
                  <div className="flex items-center justify-center gap-1 text-xs text-zinc-400 font-mono mb-1">
                    <Lock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>SSL ENCRYPTED</span>
                  </div>
                  <div className="font-display font-black text-xl text-white">256-Bit TLS</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">Automated Renewal</div>
                </div>

                <div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800">
                  <div className="flex items-center justify-center gap-1 text-xs text-amber-400 font-mono mb-1">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>CARE SLA</span>
                  </div>
                  <div className="font-display font-black text-xl text-white">&lt; 24 Hours</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">Content Update Turnaround</div>
                </div>
              </div>

              {/* Quick Update Ticket Simulator */}
              <div className="bg-zinc-900/80 p-5 rounded-2xl border border-zinc-800 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white uppercase tracking-wider">
                    Submit a 24-Hr Website Update Request:
                  </span>
                  <span className="text-zinc-400 text-[11px]">Included in RACH Care</span>
                </div>
                <input
                  type="text"
                  placeholder="e.g. Please update our salon Diwali offer menu or add new doctor profile..."
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500"
                />
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[10px] text-zinc-400">
                    Routing to dedicated WhatsApp support team (+91 90000 08685)
                  </span>
                  <a
                    href="https://wa.me/919000008685?text=Hi%20RACH%20Care%20Support%2C%20I%20need%20a%20website%20update."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0B6B38] hover:bg-[#08522A] text-white text-xs font-bold px-4 py-2 rounded-full transition-colors flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>Submit via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-zinc-900 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
              <span>Managed by RACH Digital Infrastructure</span>
              <button
                onClick={() => setPortalOpen(false)}
                className="text-white hover:underline text-xs"
              >
                Close Hub
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
