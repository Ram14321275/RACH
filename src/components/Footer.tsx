"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, ArrowUp, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950 text-white py-14 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-zinc-800">
          
          {/* Brand Info with Transparent Logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-32">
                <Image
                  src="/rach-full-logo-hd.png"
                  alt="RACH"
                  fill
                  className="object-contain object-left brightness-125"
                  priority
                />
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Digital contractor for local businesses in India. We build, host, and manage high-converting digital storefronts for salons, clinics, and manufacturers.
            </p>
            <div className="text-xs font-bold text-emerald-400 tracking-wider">
              BUILD → HOST → CONNECT → MANAGE
            </div>

            {/* Direct Contact Pills */}
            <div className="pt-2 space-y-1 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>+91 90000 08685</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>yuvexalearn@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-2.5">
            <div className="text-xs uppercase text-zinc-400 font-bold tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-zinc-300">
              <li>
                <a href="#promise" className="hover:text-white transition-colors">
                  The Promise
                </a>
              </li>
              <li>
                <a href="#who-its-for" className="hover:text-white transition-colors">
                  Who It&apos;s For
                </a>
              </li>
              <li>
                <a href="#demos" className="hover:text-white transition-colors">
                  Live Demo&apos;s
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing &amp; Care
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Client Reviews &amp; Feedback
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Target Trades */}
          <div className="md:col-span-3 space-y-2.5">
            <div className="text-xs uppercase text-zinc-400 font-bold tracking-wider">
              Supported Trades
            </div>
            <ul className="space-y-2 text-xs text-zinc-300">
              <li>Salons, Spas &amp; Aesthetic Clinics</li>
              <li>Doctors, Dentists &amp; Medical OPDs</li>
              <li>CNC Machine Shops &amp; Fabricators</li>
              <li>Retail Showrooms &amp; Boutiques</li>
              <li>Professional Service Providers</li>
            </ul>
          </div>

          {/* Back to top & direct connect */}
          <div className="md:col-span-2 flex flex-col justify-between items-start md:items-end space-y-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-emerald-400 transition-colors p-1"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>

            <a
              href="https://wa.me/919000008685?text=Hi%20RACH%2C%20I%20want%20to%20build%20a%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold bg-[#0B6B38] text-white px-4 py-2.5 rounded-full hover:bg-[#08522A] transition-colors shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-3">
          <div>
            © {new Date().getFullYear()} RACH Digital Contractor. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>Pakka Local</span>
            <span>•</span>
            <span>Hyderabad, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
