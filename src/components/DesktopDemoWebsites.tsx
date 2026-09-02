"use client";

import React from "react";
import {
  Scissors,
  Sparkles,
  Star,
  Clock,
  MapPin,
  Calendar,
  Phone,
  Shield,
  Stethoscope,
  Award,
  Activity,
  CheckCircle2,
  Factory,
  Cog,
  FileText,
  ChevronRight,
  MessageCircle,
  ExternalLink,
  RotateCcw,
} from "lucide-react";

/* =========================================================================
   1. MAC OS BROWSER HEADER COMPONENT
   ========================================================================= */
export function MacBrowserHeader({
  url,
  fullUrl,
  tradeName,
}: {
  url: string;
  fullUrl?: string;
  tradeName: string;
}) {
  return (
    <div className="h-7 bg-zinc-900 border-b border-zinc-800 px-3 flex items-center justify-between shrink-0 select-none text-zinc-300 text-[10px]">
      {/* Mac Window Traffic Lights */}
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E] inline-block shadow-xs" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123] inline-block shadow-xs" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29] inline-block shadow-xs" />
      </div>

      {/* Centered URL Address Bar */}
      <div className="flex items-center gap-1.5 bg-zinc-800/90 border border-zinc-700/60 px-3 py-0.5 rounded-full text-[9px] font-mono text-zinc-200 max-w-[280px] sm:max-w-[340px] truncate shadow-inner">
        <span className="text-emerald-400">🔒</span>
        <span>{url}</span>
      </div>

      {/* External Action */}
      <div className="flex items-center gap-2">
        {fullUrl ? (
          <a
            href={fullUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[9px] font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>Live Site</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        ) : (
          <a
            href="https://wa.me/919000008685?text=Hi%20RACH%2C%20I%20want%20to%20build%20a%20website%20like%20this."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[9px] font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>WhatsApp Demo</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        )}
      </div>
    </div>
  );
}

/* =========================================================================
   2. DESKTOP SALON WEBSITE (Kaya Botanics)
   ========================================================================= */
export function DesktopSalonWebsite() {
  return (
    <div className="w-full h-full bg-[#FCFAF7] text-zinc-800 text-left font-sans flex flex-col overflow-y-auto select-none">
      <MacBrowserHeader url="https://kayabotanics.in/jubilee-hills" tradeName="Kaya Botanics" />

      {/* Top Banner */}
      <div className="bg-[#0B6B38] text-white text-[9px] py-1 px-4 flex items-center justify-between font-medium shrink-0">
        <span>✨ Jubilee Hills Road 36: Complimentary Botanical Scalp Consultation with every Hair Ritual</span>
        <span className="font-mono">Open Mon–Sun: 10:00 AM – 08:30 PM</span>
      </div>

      {/* Desktop Navigation Bar */}
      <header className="bg-white/95 px-4 py-2 border-b border-zinc-200 flex items-center justify-between shrink-0 sticky top-0 z-20 shadow-2xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#0B6B38] text-white flex items-center justify-center shrink-0">
            <Scissors className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="font-serif font-black text-xs text-zinc-950 leading-none">
              Kaya Botanics
            </div>
            <div className="text-[7.5px] uppercase tracking-widest text-[#0B6B38] font-bold mt-0.5">
              Organic Hair Spa &amp; Ayurvedic Skin
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-4 text-[10px] font-semibold text-zinc-600">
          <span className="text-[#0B6B38] font-bold">Signature Rituals</span>
          <span>Scalp Detox</span>
          <span>Organic Facials</span>
          <span>Master Stylists</span>
          <span className="flex items-center gap-1 text-amber-600 font-bold">
            <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
            4.9 (340+ Reviews)
          </span>
        </nav>

        <a
          href="https://wa.me/919000008685?text=Hi%20Kaya%20Botanics%2C%20I%20want%20to%20book%20an%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0B6B38] hover:bg-[#08522A] text-white px-3 py-1 rounded-full text-[9px] font-bold shadow-xs transition-colors"
        >
          Book on WhatsApp
        </a>
      </header>

      {/* Desktop 2-Column Hero Section */}
      <div className="bg-gradient-to-r from-[#EBF7EE]/60 via-[#FDFBF7] to-[#FAF8F5] p-4 border-b border-zinc-200/80 shrink-0">
        <div className="grid grid-cols-12 gap-4 items-center">
          
          {/* Left Column: Hero Copy */}
          <div className="col-span-7 space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-emerald-100/90 text-[#0B6B38] px-2.5 py-0.5 rounded-full text-[8.5px] font-bold uppercase tracking-wider">
              <Sparkles className="w-2.5 h-2.5" />
              <span>100% Chemical-Free Botanical Formulations</span>
            </div>

            <h1 className="font-serif font-extrabold text-base sm:text-lg text-zinc-950 leading-tight">
              Rejuvenating Botanical Hair Spas &amp; Ayurvedic Skin Sanctuaries.
            </h1>

            <p className="text-[10px] text-zinc-600 leading-relaxed max-w-md">
              Custom herbal infusions tailored for urban pollution damage. Handcrafted cold-pressed oils, plant-derived AHA glow rituals, and master stylists in Jubilee Hills, Hyderabad.
            </p>

            <div className="pt-1 flex items-center gap-3">
              <a
                href="https://wa.me/919000008685?text=Hi%20Kaya%20Botanics%2C%20I%20want%20to%20book%20a%20slot."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0B6B38] text-white font-bold text-[10px] px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 shadow-xs"
              >
                <MessageCircle className="w-3 h-3 fill-white" />
                <span>1-Tap WhatsApp Booking</span>
              </a>
              <div className="text-[9px] text-zinc-500 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-rose-500" />
                <span>Road No. 36, Jubilee Hills</span>
              </div>
            </div>
          </div>

          {/* Right Column: Today's Slot Availability Widget */}
          <div className="col-span-5 bg-white p-3 rounded-xl border border-emerald-200/80 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-[9px] border-b border-zinc-100 pb-1.5">
              <span className="font-bold text-zinc-900">Today&apos;s Salon Availability</span>
              <span className="bg-emerald-100 text-[#0B6B38] font-bold px-1.5 py-0.2 rounded text-[8px]">
                4 Master Stylists On Duty
              </span>
            </div>

            <div className="grid grid-cols-2 gap-1.5 text-[8.5px]">
              <div className="bg-[#FAF8F5] p-1.5 rounded border border-zinc-200/80 text-center">
                <div className="text-zinc-500">11:30 AM</div>
                <div className="font-bold text-emerald-700">Available</div>
              </div>
              <div className="bg-[#FAF8F5] p-1.5 rounded border border-zinc-200/80 text-center">
                <div className="text-zinc-500">02:30 PM</div>
                <div className="font-bold text-emerald-700">Available</div>
              </div>
              <div className="bg-[#FAF8F5] p-1.5 rounded border border-zinc-200/80 text-center">
                <div className="text-zinc-500">05:00 PM</div>
                <div className="font-bold text-emerald-700">Available</div>
              </div>
              <div className="bg-[#FAF8F5] p-1.5 rounded border border-zinc-200/80 text-center">
                <div className="text-zinc-500">07:00 PM</div>
                <div className="font-bold text-amber-700">2 Slots Left</div>
              </div>
            </div>

            <div className="text-[8px] text-zinc-500 flex items-center justify-between pt-1">
              <span>Verified Client Rating:</span>
              <span className="font-bold text-amber-600">⭐ 4.9 / 5.0 (340+ Reviews)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop 4-Column Rituals Menu */}
      <div className="p-4 space-y-2 flex-1">
        <div className="flex items-center justify-between text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
          <span>Signature Treatments</span>
          <span className="text-[#0B6B38]">Verified Transparent INR Pricing</span>
        </div>

        <div className="grid grid-cols-4 gap-2.5">
          {[
            {
              name: "Botanical Scalp & Keratin",
              desc: "Deep follicular nourishment with bhringraj & argan oil",
              time: "60 mins",
              price: "₹1,850",
              tag: "Best Seller",
            },
            {
              name: "Organic Hydra-Glow Facial",
              desc: "Plant AHA peeling & cooling jade roller ritual",
              time: "50 mins",
              price: "₹2,100",
              tag: "Popular",
            },
            {
              name: "Master Haircut & Styling",
              desc: "Face-contour consultation & botanical balm",
              time: "45 mins",
              price: "₹850",
              tag: null,
            },
            {
              name: "Foot Reflexology",
              desc: "Himalayan eucalyptus pressure points",
              time: "40 mins",
              price: "₹950",
              tag: null,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-2.5 rounded-xl border border-zinc-200/80 hover:border-emerald-300 transition-colors shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="font-bold text-[10.5px] text-zinc-900 leading-tight">
                    {item.name}
                  </span>
                  {item.tag && (
                    <span className="text-[7.5px] font-bold bg-amber-100 text-amber-800 px-1 py-0.2 rounded">
                      {item.tag}
                    </span>
                  )}
                </div>
                <p className="text-[8.5px] text-zinc-500 leading-tight">{item.desc}</p>
              </div>

              <div className="pt-2 border-t border-zinc-100 mt-2 flex items-center justify-between">
                <div>
                  <div className="font-black text-xs text-[#0B6B38]">{item.price}</div>
                  <div className="text-[8px] text-zinc-400">{item.time}</div>
                </div>
                <a
                  href={`https://wa.me/919000008685?text=Hi%20Kaya%20Botanics%2C%20I%20want%20to%20book%20${encodeURIComponent(item.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#EBF7EE] text-[#0B6B38] hover:bg-[#0B6B38] hover:text-white px-2 py-0.5 rounded text-[8px] font-bold transition-colors"
                >
                  Book ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Footer Strip */}
      <footer className="bg-white border-t border-zinc-200 px-4 py-2 flex items-center justify-between text-[9px] text-zinc-500 shrink-0">
        <div className="flex items-center gap-2">
          <span>📍 Plot 42, Road 36, Jubilee Hills, Hyderabad</span>
          <span>•</span>
          <span>Valet Parking Available</span>
        </div>
        <a
          href="https://wa.me/919000008685?text=Hi%20Kaya%20Botanics%2C%20I%20want%20to%20book%20an%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 font-bold text-[#0B6B38] hover:underline"
        >
          <MessageCircle className="w-3 h-3 fill-[#0B6B38]" />
          <span>Direct Reception WhatsApp: +91 90000 08685</span>
        </a>
      </footer>
    </div>
  );
}

/* =========================================================================
   3. DESKTOP CLINIC WEBSITE (Dr. Mehta Orthocare)
   ========================================================================= */
export function DesktopClinicWebsite() {
  return (
    <div className="w-full h-full bg-[#F8FAFC] text-zinc-800 text-left font-sans flex flex-col overflow-y-auto select-none">
      <MacBrowserHeader url="https://mehtaortho.in/banjara-hills" tradeName="Dr. Mehta Orthocare" />

      {/* Top Clinical Alert */}
      <div className="bg-[#0284C7] text-white text-[9px] py-1 px-4 flex items-center justify-between font-medium shrink-0">
        <span>🚨 Hospital Emergency &amp; Trauma Care: +91 90000 08685 • Road No. 12, Banjara Hills</span>
        <span className="bg-white/20 px-2 py-0.2 rounded font-bold text-[8px]">OPD LIVE TODAY</span>
      </div>

      {/* Desktop Navigation Bar */}
      <header className="bg-white/95 px-4 py-2 border-b border-zinc-200 flex items-center justify-between shrink-0 sticky top-0 z-20 shadow-2xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#0F172A] text-sky-400 flex items-center justify-center shrink-0">
            <Stethoscope className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="font-bold text-xs text-zinc-950 leading-none">
              Dr. Mehta Orthocare Clinic
            </div>
            <div className="text-[7.5px] uppercase tracking-widest text-sky-700 font-bold mt-0.5">
              Joint Replacement &amp; Sports Rehab • Banjara Hills
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-4 text-[10px] font-semibold text-zinc-600">
          <span className="text-sky-700 font-bold">Robotic Knee Surgery</span>
          <span>Sports Arthroscopy</span>
          <span>Spine Care</span>
          <span>OPD Timetable</span>
          <span className="text-emerald-700 font-bold">NABH Accredited</span>
        </nav>

        <a
          href="https://wa.me/919000008685?text=Hi%20Dr.%20Mehta%20Clinic%2C%20I%20want%20to%20book%20an%20OPD%20slot."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0284C7] hover:bg-[#0369A1] text-white px-3 py-1 rounded-full text-[9px] font-bold shadow-xs transition-colors"
        >
          Book Consultation (₹800)
        </a>
      </header>

      {/* Desktop 2-Column Hero Section */}
      <div className="bg-gradient-to-r from-sky-50 via-white to-slate-50 p-4 border-b border-zinc-200 shrink-0">
        <div className="grid grid-cols-12 gap-4 items-center">
          
          {/* Left Column */}
          <div className="col-span-7 space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-900 px-2.5 py-0.5 rounded-full text-[8.5px] font-bold uppercase tracking-wider">
              <Activity className="w-2.5 h-2.5" />
              <span>Advanced Minimally Invasive Orthopedics</span>
            </div>

            <h1 className="font-bold text-base sm:text-lg text-zinc-950 leading-tight">
              Robotic Total Joint Replacement &amp; Sports Rehabilitation.
            </h1>

            <p className="text-[10px] text-zinc-600 leading-relaxed max-w-md">
              Specialized clinical diagnosis for arthritis, knee ligaments, and spine conditions. Fast-track recovery protocols by Dr. Arvind Mehta (MS Ortho - AIIMS).
            </p>

            <div className="pt-1 flex items-center gap-3">
              <a
                href="https://wa.me/919000008685?text=Hi%20Dr.%20Mehta%20Clinic%2C%20I%20want%20to%20book%20an%20OPD%20slot."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0284C7] text-white font-bold text-[10px] px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 shadow-xs"
              >
                <Calendar className="w-3 h-3" />
                <span>Book OPD on WhatsApp (₹800)</span>
              </a>
              <div className="text-[9px] text-zinc-500">
                Visiting Surgeon: Care Hospital &amp; Apollo
              </div>
            </div>
          </div>

          {/* Right Column: Doctor Credentials Card */}
          <div className="col-span-5 bg-white p-3 rounded-xl border border-sky-200/80 shadow-xs space-y-1.5">
            <div className="flex items-center gap-2 border-b border-zinc-100 pb-1.5">
              <div className="w-8 h-8 rounded-full bg-zinc-900 text-sky-400 font-bold text-xs flex items-center justify-center shrink-0">
                AM
              </div>
              <div>
                <div className="font-bold text-[11px] text-zinc-950 leading-tight">
                  Dr. Arvind Mehta, MS (Ortho)
                </div>
                <div className="text-[8px] text-sky-700 font-semibold">
                  AIIMS Gold Medalist • 18+ Yrs Experience
                </div>
              </div>
            </div>

            <div className="text-[8.5px] text-zinc-600 space-y-1">
              <div className="flex justify-between">
                <span>Morning OPD:</span>
                <span className="font-semibold text-zinc-900">09:00 AM – 01:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Evening OPD:</span>
                <span className="font-semibold text-zinc-900">05:00 PM – 08:30 PM</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-zinc-100 text-emerald-700 font-bold">
                <span>Consultation Fee:</span>
                <span>₹800 (In-Clinic)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop 4-Column Clinical Specialties Grid */}
      <div className="p-4 space-y-2 flex-1">
        <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
          Specialized Clinical Departments
        </div>

        <div className="grid grid-cols-4 gap-2.5">
          {[
            {
              title: "Robotic Knee Replacement",
              detail: "Minimal incision, same-day walking recovery protocol",
              badge: "Robotic Precision",
            },
            {
              title: "Sports Arthroscopy & ACL",
              detail: "Keyhole surgery for ligament & meniscus cartilage tears",
              badge: "Keyhole Tech",
            },
            {
              title: "Spine & Sciatica Therapy",
              detail: "Non-surgical decompression & specialized nerve care",
              badge: "Non-Invasive",
            },
            {
              title: "Clinical Physiotherapy",
              detail: "Laser therapy, muscle strengthening & sports rehab",
              badge: "In-Clinic Suite",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-2.5 rounded-xl border border-zinc-200 text-[9px] flex flex-col justify-between"
            >
              <div>
                <span className="font-bold text-[10px] text-zinc-900 block leading-tight">
                  {item.title}
                </span>
                <span className="text-zinc-500 text-[8px] mt-1 block leading-relaxed">
                  {item.detail}
                </span>
              </div>
              <span className="mt-2 text-[7.5px] text-sky-700 font-semibold bg-sky-50 px-1.5 py-0.5 rounded w-fit">
                {item.badge}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Footer Strip */}
      <footer className="bg-white border-t border-zinc-200 px-4 py-2 flex items-center justify-between text-[9px] text-zinc-500 shrink-0">
        <div>
          📍 Clinic: Road No. 12, Banjara Hills, Hyderabad • Mon–Sat
        </div>
        <a
          href="https://wa.me/919000008685?text=Hi%20Dr.%20Mehta%20Clinic%2C%20I%20want%20to%20book%20an%20OPD%20slot."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 font-bold text-[#0284C7] hover:underline"
        >
          <MessageCircle className="w-3 h-3 fill-[#0284C7]" />
          <span>Reception Desk WhatsApp: +91 90000 08685</span>
        </a>
      </footer>
    </div>
  );
}

/* =========================================================================
   4. DESKTOP MANUFACTURER WEBSITE (Apex Precision)
   ========================================================================= */
export function DesktopMfgWebsite() {
  return (
    <div className="w-full h-full bg-[#111113] text-zinc-200 text-left font-sans flex flex-col overflow-y-auto select-none">
      <MacBrowserHeader url="https://apexprecision.co.in/sanathnagar" tradeName="Apex Precision" />

      {/* Top Credentials Bar */}
      <div className="bg-amber-500 text-black text-[9px] py-1 px-4 flex items-center justify-between font-bold shrink-0">
        <span>⚙️ ISO 9001:2015 &amp; IATF 16949 Certified Manufacturing Plant</span>
        <span>Machining Tolerance: ±0.005mm • 5-Axis VMC</span>
      </div>

      {/* Desktop Navigation Bar */}
      <header className="bg-zinc-900/95 px-4 py-2 border-b border-zinc-800 flex items-center justify-between shrink-0 sticky top-0 z-20 shadow-2xs">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-amber-500 text-black flex items-center justify-center shrink-0">
            <Factory className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="font-bold text-xs text-white leading-none">
              Apex Precision Fabrications
            </div>
            <div className="text-[7.5px] uppercase tracking-widest text-amber-400 font-mono mt-0.5">
              CNC Machining &amp; Sheet Metal • MIDC Hyderabad
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-4 text-[10px] font-semibold text-zinc-400">
          <span className="text-amber-400 font-bold">5-Axis CNC Milling</span>
          <span>Laser Enclosures</span>
          <span>CMM Quality Lab</span>
          <span>Machinery List</span>
          <span className="font-mono text-zinc-300">Sanathnagar MIDC</span>
        </nav>

        <a
          href="https://wa.me/919000008685?text=Hi%20Apex%20Precision%2C%20we%20have%20an%20RFQ%20for%20components."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-amber-500 hover:bg-amber-400 text-black px-3 py-1 rounded text-[9px] font-bold shadow-xs transition-colors"
        >
          Submit RFQ Drawing
        </a>
      </header>

      {/* Desktop 2-Column Hero Section */}
      <div className="bg-gradient-to-r from-zinc-900 via-[#161619] to-[#111113] p-4 border-b border-zinc-800 shrink-0">
        <div className="grid grid-cols-12 gap-4 items-center">
          
          {/* Left Column */}
          <div className="col-span-7 space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2.5 py-0.5 rounded text-[8.5px] font-mono">
              <span>PLANT: 22,000 SQ. FT. • 40+ CNC &amp; VMC CENTERS</span>
            </div>

            <h1 className="font-bold text-base sm:text-lg text-white leading-tight">
              High-Precision 5-Axis CNC &amp; Sheet Metal Engineering.
            </h1>

            <p className="text-[10px] text-zinc-400 leading-relaxed max-w-md">
              High-volume turned components, laser-cut SS 316 enclosures, and precision aerospace brackets. Tolerances up to ±0.005mm with 100% CMM inspection and Material Test Reports.
            </p>

            <div className="pt-1 flex items-center gap-3">
              <a
                href="https://wa.me/919000008685?text=Hi%20Apex%20Precision%2C%20we%20have%20an%20RFQ%20for%20components."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-400 text-black font-bold text-[10px] px-3.5 py-1.5 rounded flex items-center gap-1.5 shadow-xs"
              >
                <FileText className="w-3 h-3" />
                <span>Submit CAD / RFQ on WhatsApp</span>
              </a>
              <span className="text-[9px] text-zinc-500 font-mono">
                Quotation response within 4 hours
              </span>
            </div>
          </div>

          {/* Right Column: Plant Specs */}
          <div className="col-span-5 bg-zinc-900/90 p-3 rounded-xl border border-zinc-800 shadow-xs space-y-2">
            <div className="text-[9px] font-mono font-bold text-amber-400 border-b border-zinc-800 pb-1 flex justify-between">
              <span>Machining Fleet Overview</span>
              <span>ISO 9001:2015</span>
            </div>

            <div className="grid grid-cols-3 gap-1.5 text-center">
              <div className="bg-zinc-950 p-1.5 rounded border border-zinc-800">
                <div className="text-amber-400 font-mono font-bold text-xs">±0.005mm</div>
                <div className="text-[7.5px] text-zinc-400">Micro Tolerance</div>
              </div>
              <div className="bg-zinc-950 p-1.5 rounded border border-zinc-800">
                <div className="text-white font-mono font-bold text-xs">6kW Fiber</div>
                <div className="text-[7.5px] text-zinc-400">Trumpf Laser</div>
              </div>
              <div className="bg-zinc-950 p-1.5 rounded border border-zinc-800">
                <div className="text-emerald-400 font-mono font-bold text-xs">CMM Lab</div>
                <div className="text-[7.5px] text-zinc-400">100% Quality MTR</div>
              </div>
            </div>

            <div className="text-[8px] text-zinc-400 flex items-center justify-between pt-1">
              <span>Plant Location:</span>
              <span className="font-mono text-zinc-300">Sanathnagar MIDC, Hyderabad</span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop 3-Column Capabilities Grid */}
      <div className="p-4 space-y-2 flex-1">
        <div className="flex items-center justify-between text-[10px] uppercase font-mono text-zinc-400">
          <span>Manufacturing Production Lines</span>
          <span className="text-amber-400">Batch &amp; High-Volume Production</span>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          {[
            {
              name: "Automotive Precision Spline Shafts",
              spec: "Material: EN8D / 20MnCr5 • CNC Turned & Induction Hardened",
              cap: "Volume: 50,000 pcs/mo",
              tag: "High Volume",
            },
            {
              name: "SS 316 Laser Enclosures & Brackets",
              spec: "Thickness: 0.8mm–12mm • CNC Bending & Argon TIG Welding",
              cap: "Batch: Custom RFQ",
              tag: "Sheet Metal",
            },
            {
              name: "Aerospace 5-Axis VMC Valve Bodies",
              spec: "Material: AL 7075-T6 / Titanium • Mitutoyo CMM Inspected",
              cap: "Accuracy: ±0.003mm",
              tag: "Aerospace Spec",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/90 border border-zinc-800 p-2.5 rounded-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="font-bold text-[10.5px] text-white leading-tight">
                    {item.name}
                  </span>
                  <span className="text-[7px] font-mono bg-zinc-800 text-amber-400 px-1 py-0.2 rounded border border-zinc-700 shrink-0">
                    {item.tag}
                  </span>
                </div>
                <p className="text-[8px] text-zinc-400 leading-relaxed mt-1">{item.spec}</p>
                <div className="text-[8px] text-emerald-400 font-mono mt-1">{item.cap}</div>
              </div>

              <div className="pt-2 border-t border-zinc-800 mt-2 flex items-center justify-between">
                <span className="text-[8px] text-zinc-500 font-mono">Certified MTR</span>
                <a
                  href={`https://wa.me/919000008685?text=Hi%20Apex%20Precision%2C%20we%20have%20an%20RFQ%20for%20${encodeURIComponent(item.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-800 hover:bg-amber-500 hover:text-black text-zinc-200 text-[8px] font-bold px-2 py-0.5 rounded transition-colors"
                >
                  Quote ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Footer Strip */}
      <footer className="bg-zinc-900 border-t border-zinc-800 px-4 py-2 flex items-center justify-between text-[9px] text-zinc-400 shrink-0">
        <div>
          Plant: Plot 18, Sanathnagar Industrial Estate, Hyderabad, Telangana
        </div>
        <a
          href="https://wa.me/919000008685?text=Hi%20Apex%20Precision%2C%20we%20have%20an%20RFQ%20for%20components."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 font-bold text-amber-400 hover:underline"
        >
          <MessageCircle className="w-3 h-3 fill-amber-400" />
          <span>Procurement Desk WhatsApp: +91 90000 08685</span>
        </a>
      </footer>
    </div>
  );
}
