"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "The Promise", href: "#promise" },
    { label: "Who It's For", href: "#who-its-for" },
    { label: "Live Demo's", href: "#demos" },
    { label: "Pricing", href: "#pricing" },
    { label: "Reviews", href: "#testimonials" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="sticky top-3 sm:top-5 z-50 px-4 sm:px-6 w-full flex justify-center">
      <div className="w-full max-w-5xl bg-white/85 backdrop-blur-xl rounded-full px-4 sm:px-7 py-2.5 sm:py-3 shadow-[0_4px_30px_rgba(0,0,0,0.04)] border border-zinc-200/80 flex items-center justify-between transition-all">
        {/* Left: Official RACH Logo with Transparent Background */}
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <div className="relative h-7 sm:h-8 w-24 sm:w-28">
            <Image
              src="/rach-full-logo-hd.png"
              alt="RACH"
              fill
              className="object-contain object-left transition-transform duration-200 group-hover:scale-105"
              priority
            />
          </div>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-[13px] lg:text-sm font-medium text-zinc-700">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-black hover:font-semibold transition-all py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0B6B38] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: WhatsApp Pill Button with Hyderabad availability indicator */}
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/919000008685?text=Hi%20RACH%2C%20I%20am%20interested%20in%20building%20a%20website%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#0B6B38] hover:bg-[#08522A] text-white px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-tight shadow-[0_4px_14px_rgba(11,107,56,0.25)] transition-all hover:scale-[1.02] active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 fill-white text-white shrink-0" />
            <span>Whatsapp Us</span>
            <span className="text-xs sm:text-sm">↗</span>
          </a>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-zinc-700 hover:bg-zinc-100 transition-colors ml-1"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-3xl border border-zinc-200 shadow-2xl p-5 md:hidden space-y-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 hover:text-[#0B6B38] rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-zinc-100">
            <a
              href="https://wa.me/919000008685?text=Hi%20RACH%2C%20I%20am%20interested%20in%20building%20a%20website%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#0B6B38] text-white py-3 rounded-full font-semibold text-sm shadow-sm"
            >
              <Sparkles className="w-4 h-4 fill-white" />
              <span>Message on WhatsApp (+91 90000 08685)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
