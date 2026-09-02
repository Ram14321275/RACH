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
} from "lucide-react";

interface MiniSiteProps {
  type: "salon" | "clinic" | "mfg";
}

/* =========================================================================
   1. KAYA BOTANICS SALON & SPA MINI WEBSITE
   ========================================================================= */
export function SalonMiniSite() {
  return (
    <div className="w-full h-full bg-[#FAF8F5] text-zinc-800 text-left font-sans flex flex-col overflow-y-auto select-none">
      {/* Top Announcement Bar */}
      <div className="bg-[#0B6B38] text-white text-[9px] py-1 px-3 flex items-center justify-between shrink-0 font-medium">
        <span>✨ Jubilee Hills Festivity: 15% off on Botanical Spas</span>
        <span className="font-mono">Open Today: 10 AM – 8 PM</span>
      </div>

      {/* Website Header */}
      <header className="bg-white/95 backdrop-blur-md px-3.5 py-2.5 border-b border-zinc-200/80 flex items-center justify-between shrink-0 sticky top-0 z-20">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-[#0B6B38] text-white flex items-center justify-center shrink-0">
            <Scissors className="w-3 h-3" />
          </div>
          <div>
            <div className="font-serif font-black text-xs sm:text-sm text-zinc-900 tracking-tight leading-tight">
              Kaya Botanics
            </div>
            <div className="text-[7.5px] uppercase tracking-widest text-[#0B6B38] font-bold">
              Spa &amp; Wellness • Jubilee Hills
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 text-[10px] text-zinc-600 font-medium">
            <span>Services</span>
            <span>Pricing</span>
            <span>Reviews</span>
          </div>
          <a
            href="https://wa.me/919000008685?text=Hi%20Kaya%20Botanics%2C%20I%20want%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0B6B38] hover:bg-[#08522A] text-white px-2.5 py-1 rounded-full text-[9px] font-bold tracking-tight shadow-xs transition-colors"
          >
            Book Now
          </a>
        </div>
      </header>

      {/* Hero Section with Botanical Aesthetics */}
      <div className="bg-gradient-to-b from-[#EBF7EE]/60 to-[#FAF8F5] p-3.5 border-b border-zinc-200/70 shrink-0">
        <div className="flex items-center gap-1.5 mb-1">
          <span className="bg-emerald-100 text-[#0B6B38] font-bold text-[8px] uppercase tracking-wider px-2 py-0.5 rounded-full">
            Organic Hair &amp; Skin
          </span>
          <div className="flex items-center gap-0.5 text-amber-600 text-[9px] font-bold">
            <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
            <span>4.9 (340+ Google Reviews)</span>
          </div>
        </div>

        <h1 className="font-serif font-bold text-base sm:text-lg text-zinc-950 leading-snug">
          Rejuvenating Botanical Hair Spas &amp; Ayurvedic Skin Rituals.
        </h1>
        <p className="text-[10px] text-zinc-600 mt-1 leading-relaxed">
          Chemical-free scalp infusions, organic hydra-facials, and bridal wellness by certified master stylists in Hyderabad.
        </p>

        <div className="mt-2.5 flex items-center gap-2">
          <a
            href="https://wa.me/919000008685?text=Hi%20Kaya%20Botanics%2C%20I%20want%20to%20book%20a%20Botanical%20Scalp%20Spa."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0B6B38] text-white font-bold text-[10px] px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-xs"
          >
            <Sparkles className="w-3 h-3 fill-white" />
            <span>Explore Menu &amp; Book</span>
          </a>
          <div className="text-[9px] text-zinc-500 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#0B6B38]" />
            <span>Road 36, Jubilee Hills</span>
          </div>
        </div>
      </div>

      {/* Featured Services Menu */}
      <div className="p-3.5 space-y-2 flex-1">
        <div className="flex items-center justify-between text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
          <span>Signature Treatments</span>
          <span className="text-[#0B6B38]">Verified INR Pricing</span>
        </div>

        <div className="space-y-1.5">
          {[
            {
              name: "Botanical Scalp & Keratin Hair Spa",
              desc: "Deep follicular nourishment with Ayurvedic bhringraj & argan oil",
              time: "60 mins",
              price: "₹1,850",
              tag: "Best Seller",
            },
            {
              name: "Organic Hydra-Glow Facial",
              desc: "Plant-derived AHA peeling & cooling jade roller ritual",
              time: "50 mins",
              price: "₹2,100",
              tag: "Popular",
            },
            {
              name: "Master Haircut, Wash & Blowdry",
              desc: "Face-contour consultation and organic styling balm",
              time: "45 mins",
              price: "₹850",
              tag: null,
            },
            {
              name: "Aromatherapy Foot Reflexology",
              desc: "Pressure point therapy with Himalayan eucalyptus oils",
              time: "40 mins",
              price: "₹950",
              tag: null,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-2.5 rounded-xl border border-zinc-200/80 hover:border-emerald-300 transition-colors shadow-2xs flex items-center justify-between"
            >
              <div className="pr-2">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-[11px] text-zinc-900">{item.name}</span>
                  {item.tag && (
                    <span className="text-[7.5px] font-bold bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  )}
                </div>
                <p className="text-[8.5px] text-zinc-500 leading-tight mt-0.5">{item.desc}</p>
                <div className="flex items-center gap-2 mt-1 text-[8.5px] text-zinc-400">
                  <span className="flex items-center gap-0.5">
                    <Clock className="w-2.5 h-2.5" />
                    {item.time}
                  </span>
                  <span>•</span>
                  <span>100% Organic Extracts</span>
                </div>
              </div>

              <div className="text-right shrink-0">
                <div className="font-black text-xs text-[#0B6B38]">{item.price}</div>
                <a
                  href={`https://wa.me/919000008685?text=Hi%20Kaya%20Botanics%2C%20I%20want%20to%20book%20${encodeURIComponent(item.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-[8px] font-bold bg-[#EBF7EE] text-[#0B6B38] hover:bg-[#0B6B38] hover:text-white px-2 py-0.5 rounded transition-colors"
                >
                  Book Slot ↗
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Review Snapshot */}
        <div className="mt-3 bg-white p-2.5 rounded-xl border border-zinc-200/80 text-[9.5px]">
          <div className="flex items-center gap-1 text-amber-500 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-2.5 h-2.5 fill-amber-500" />
            ))}
            <span className="text-zinc-600 font-bold ml-1">Priya K., Jubilee Hills</span>
          </div>
          <p className="text-zinc-600 italic">
            &ldquo;Best scalp treatment in Hyderabad. Zero chemicals, incredible fragrance, and booking on WhatsApp took literally 10 seconds.&rdquo;
          </p>
        </div>
      </div>

      {/* Floating Sticky 1-Tap Booking Pill */}
      <div className="p-2.5 bg-white border-t border-zinc-200 shrink-0 sticky bottom-0 z-20">
        <a
          href="https://wa.me/919000008685?text=Hi%20Kaya%20Botanics%2C%20I%20want%20to%20book%20an%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-black font-bold py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 text-[10.5px] shadow-sm transition-all"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-black" />
          <span>1-Tap WhatsApp Appointment Booking</span>
        </a>
      </div>
    </div>
  );
}

/* =========================================================================
   2. DR. MEHTA ORTHOCARE CLINIC MINI WEBSITE
   ========================================================================= */
export function ClinicMiniSite() {
  return (
    <div className="w-full h-full bg-[#F8FAFC] text-zinc-800 text-left font-sans flex flex-col overflow-y-auto select-none">
      {/* Top Clinical Alert */}
      <div className="bg-[#0284C7] text-white text-[9px] py-1 px-3 flex items-center justify-between shrink-0 font-medium">
        <span>🏥 Emergency OPD Consultation: +91 90000 08685</span>
        <span className="bg-white/20 px-1.5 py-0.2 rounded font-bold text-[8px]">OPD LIVE</span>
      </div>

      {/* Website Header */}
      <header className="bg-white/95 backdrop-blur-md px-3.5 py-2.5 border-b border-zinc-200/80 flex items-center justify-between shrink-0 sticky top-0 z-20">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-md bg-[#0F172A] text-sky-400 flex items-center justify-center shrink-0">
            <Stethoscope className="w-3 h-3" />
          </div>
          <div>
            <div className="font-bold text-xs sm:text-sm text-zinc-900 tracking-tight leading-tight">
              Dr. Mehta Orthocare
            </div>
            <div className="text-[7.5px] uppercase tracking-widest text-sky-700 font-bold">
              Joint Replacement &amp; Sports Rehab • Banjara Hills
            </div>
          </div>
        </div>

        <a
          href="https://wa.me/919000008685?text=Hi%20Dr.%20Mehta%20Clinic%2C%20I%20want%20to%20book%20an%20OPD%20slot."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0284C7] hover:bg-[#0369A1] text-white px-2.5 py-1 rounded-full text-[9px] font-bold tracking-tight shadow-xs transition-colors"
        >
          Book OPD
        </a>
      </header>

      {/* Doctor Credentials & Hero */}
      <div className="bg-gradient-to-b from-sky-50 to-[#F8FAFC] p-3.5 border-b border-zinc-200/70 shrink-0">
        <div className="flex items-start gap-2.5">
          <div className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-sky-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
            AM
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h2 className="font-bold text-xs sm:text-sm text-zinc-950">
                Dr. Arvind Mehta, MS (Ortho)
              </h2>
              <span className="text-[8px] bg-sky-100 text-sky-800 font-bold px-1.5 py-0.2 rounded">
                AIIMS Gold Medalist
              </span>
            </div>
            <p className="text-[9px] text-zinc-600 mt-0.5">
              18+ Yrs Exp • Visiting Surgeon at Care Hospital &amp; Apollo Hyderabad
            </p>
            <div className="flex items-center gap-2 mt-1 text-[8.5px] text-zinc-500 font-medium">
              <span className="text-emerald-700 font-semibold">● 4,500+ Surgeries</span>
              <span>•</span>
              <span className="text-amber-700 font-semibold">⭐ 4.9 (480+ Reviews)</span>
            </div>
          </div>
        </div>

        {/* Timetable Card */}
        <div className="mt-3 bg-white p-2.5 rounded-xl border border-sky-200/80 text-[9px] space-y-1">
          <div className="font-bold text-zinc-900 flex items-center justify-between">
            <span className="flex items-center gap-1 text-sky-800">
              <Clock className="w-3 h-3" />
              OPD Timetable (Mon–Sat)
            </span>
            <span className="text-emerald-700 font-bold">In-Clinic Consultation: ₹800</span>
          </div>
          <div className="flex justify-between text-zinc-600 text-[8.5px] pt-1 border-t border-zinc-100">
            <span>Morning: 09:00 AM – 01:00 PM</span>
            <span>Evening: 05:00 PM – 08:30 PM</span>
          </div>
        </div>
      </div>

      {/* Clinical Specialties */}
      <div className="p-3.5 space-y-2 flex-1">
        <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
          Specialized Clinical Treatments
        </div>

        <div className="grid grid-cols-2 gap-1.5">
          {[
            {
              title: "Robotic Knee Replacement",
              detail: "Minimal incision, same-day walking protocol",
              badge: "Fast Recovery",
            },
            {
              title: "Sports Arthroscopy & ACL",
              detail: "Keyhole surgery for ligament & meniscus tears",
              badge: "Keyhole Tech",
            },
            {
              title: "Spine & Sciatica Relief",
              detail: "Non-surgical decompression & nerve care",
              badge: "Non-Invasive",
            },
            {
              title: "Clinical Physiotherapy",
              detail: "Laser therapy, muscle strengthening & rehab",
              badge: "In-Clinic Rehab",
            },
          ].map((spec, idx) => (
            <div
              key={idx}
              className="bg-white p-2 rounded-lg border border-zinc-200 text-[8.5px] flex flex-col justify-between"
            >
              <div>
                <span className="font-bold text-zinc-900 block leading-tight">{spec.title}</span>
                <span className="text-zinc-500 text-[7.5px] mt-0.5 block">{spec.detail}</span>
              </div>
              <span className="mt-1 text-[7px] text-sky-700 font-semibold bg-sky-50 px-1 py-0.2 rounded w-fit">
                {spec.badge}
              </span>
            </div>
          ))}
        </div>

        {/* Hospital Address & Emergency */}
        <div className="mt-2 bg-white p-2.5 rounded-xl border border-zinc-200 text-[9px] flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-zinc-600">
            <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
            <span>Road No. 12, Banjara Hills, Hyderabad</span>
          </div>
          <span className="text-[8px] bg-emerald-100 text-[#0B6B38] font-bold px-1.5 py-0.5 rounded">
            Valet Parking
          </span>
        </div>
      </div>

      {/* Sticky Bottom WhatsApp Action */}
      <div className="p-2.5 bg-white border-t border-zinc-200 shrink-0 sticky bottom-0 z-20">
        <a
          href="https://wa.me/919000008685?text=Hi%20Dr.%20Mehta%20Clinic%2C%20I%20want%20to%20book%20an%20OPD%20slot."
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 text-[10.5px] shadow-sm transition-all"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white" />
          <span>Book OPD Appointment via WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

/* =========================================================================
   3. APEX PRECISION FABRICATIONS MINI WEBSITE
   ========================================================================= */
export function MfgMiniSite() {
  return (
    <div className="w-full h-full bg-[#121214] text-zinc-200 text-left font-sans flex flex-col overflow-y-auto select-none">
      {/* Top Credentials Bar */}
      <div className="bg-amber-500 text-black text-[9px] py-1 px-3 flex items-center justify-between shrink-0 font-bold">
        <span>⚙️ ISO 9001:2015 &amp; IATF 16949 Certified Plant</span>
        <span>Machining Tolerance: ±0.005mm</span>
      </div>

      {/* Website Header */}
      <header className="bg-zinc-900/95 backdrop-blur-md px-3.5 py-2.5 border-b border-zinc-800 flex items-center justify-between shrink-0 sticky top-0 z-20">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded bg-amber-500 text-black flex items-center justify-center shrink-0">
            <Factory className="w-3 h-3" />
          </div>
          <div>
            <div className="font-bold text-xs sm:text-sm text-white tracking-tight leading-tight">
              Apex Precision
            </div>
            <div className="text-[7.5px] uppercase tracking-widest text-amber-400 font-mono">
              CNC Milling &amp; Sheet Metal • MIDC Hyderabad
            </div>
          </div>
        </div>

        <a
          href="https://wa.me/919000008685?text=Hi%20Apex%20Precision%2C%20we%20have%20an%20RFQ%20for%20CNC%20components."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-amber-500 hover:bg-amber-400 text-black px-2.5 py-1 rounded text-[9px] font-bold tracking-tight shadow-xs transition-colors"
        >
          Submit RFQ
        </a>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-zinc-900 to-[#121214] p-3.5 border-b border-zinc-800 shrink-0">
        <div className="inline-flex items-center gap-1 bg-amber-500/20 border border-amber-500/30 text-amber-400 px-2 py-0.5 rounded text-[8px] font-mono mb-1">
          <span>PLANT: 22,000 SQ. FT. • 40+ CNC CENTERS</span>
        </div>
        <h1 className="font-bold text-sm sm:text-base text-white leading-tight">
          High-Precision 5-Axis CNC &amp; Sheet Metal Fabrication.
        </h1>
        <p className="text-[9px] text-zinc-400 mt-1 leading-relaxed">
          Supplying precision-engineered aerospace brackets, turned automotive shafts, and laser-cut stainless steel enclosures to Tier-1 OEMs.
        </p>

        {/* 3 Metric Badges */}
        <div className="grid grid-cols-3 gap-2 mt-2.5 text-center">
          <div className="bg-zinc-900/90 border border-zinc-800 p-1.5 rounded">
            <div className="text-amber-400 font-mono font-bold text-xs">±0.005mm</div>
            <div className="text-[7.5px] text-zinc-400">Micro Tolerance</div>
          </div>
          <div className="bg-zinc-900/90 border border-zinc-800 p-1.5 rounded">
            <div className="text-white font-mono font-bold text-xs">6kW Fiber</div>
            <div className="text-[7.5px] text-zinc-400">Laser Cutting</div>
          </div>
          <div className="bg-zinc-900/90 border border-zinc-800 p-1.5 rounded">
            <div className="text-emerald-400 font-mono font-bold text-xs">CMM Insp.</div>
            <div className="text-[7.5px] text-zinc-400">100% Quality MTR</div>
          </div>
        </div>
      </div>

      {/* Component Capabilities Grid */}
      <div className="p-3.5 space-y-2 flex-1">
        <div className="flex items-center justify-between text-[10px] uppercase font-mono text-zinc-400">
          <span>Manufacturing Capabilities</span>
          <span className="text-amber-400">Live Production Line</span>
        </div>

        <div className="space-y-1.5">
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
              className="bg-zinc-900/90 border border-zinc-800 p-2 rounded-lg flex items-center justify-between text-[9px]"
            >
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-white text-[10px]">{item.name}</span>
                  <span className="text-[7px] font-mono bg-zinc-800 text-amber-400 px-1 py-0.2 rounded border border-zinc-700">
                    {item.tag}
                  </span>
                </div>
                <div className="text-[8px] text-zinc-400 mt-0.5">{item.spec}</div>
                <div className="text-[7.5px] text-emerald-400 font-mono mt-0.5">{item.cap}</div>
              </div>

              <a
                href="https://wa.me/919000008685?text=Hi%20Apex%20Precision%2C%20we%20have%20an%20RFQ%20for%20components."
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 bg-zinc-800 hover:bg-amber-500 hover:text-black text-zinc-200 text-[8px] font-bold px-2 py-1 rounded transition-colors ml-2"
              >
                Quote ↗
              </a>
            </div>
          ))}
        </div>

        {/* Machinery List Footer */}
        <div className="bg-zinc-900 p-2 rounded border border-zinc-800 text-[8px] text-zinc-400 flex items-center justify-between">
          <span>Plant Fleet: Haas VF-4SS, Trumpf 6kW, Doosan Puma, Mitutoyo CMM</span>
          <span className="text-amber-400 font-mono">Sanathnagar MIDC</span>
        </div>
      </div>

      {/* Sticky Bottom WhatsApp RFQ Action */}
      <div className="p-2.5 bg-zinc-900 border-t border-zinc-800 shrink-0 sticky bottom-0 z-20">
        <a
          href="https://wa.me/919000008685?text=Hi%20Apex%20Precision%2C%20we%20have%20an%20RFQ%20for%20CNC%20components."
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 text-[10.5px] shadow-sm transition-all"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-black" />
          <span>Submit CAD Drawing / RFQ on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

export default function MiniDemoWebsite({ type }: MiniSiteProps) {
  if (type === "salon") return <SalonMiniSite />;
  if (type === "clinic") return <ClinicMiniSite />;
  if (type === "mfg") return <MfgMiniSite />;
  return null;
}
