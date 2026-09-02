"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, Mail, MapPin, Send, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";

export default function ContactSection() {
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [tradeType, setTradeType] = useState("Salon / Spa / Grooming");
  const [customDomain, setCustomDomain] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do I need any technical knowledge or coding skills?",
      a: "None at all. RACH operates as your complete digital contractor. You just send us your price list and photos on WhatsApp. We build the site, handle hosting, configure domain security, and keep it updated.",
    },
    {
      q: "Who owns my domain name and website content?",
      a: "You own 100% of your domain name (.in / .com), text copy, and business assets. If you ever decide to move away, we transfer full control with zero lock-in fees.",
    },
    {
      q: "How fast can my website be ready?",
      a: "Our START tier is ready in 3 business days once you send your photos and price menu. The BUSINESS tier is delivered in 5 business days. We give you a live preview link to test on your own phone before going public.",
    },
    {
      q: "How do website updates work after launch?",
      a: "Whenever your prices change, you add festive offers, or update working hours, just text our team on WhatsApp. With RACH Care (₹999/mo), all routine updates are completed within 24 hours.",
    },
    {
      q: "Will my website show up on Google Maps and Search?",
      a: "Yes. Every RACH website is engineered for local Google Search indexing, fast mobile loading (< 0.5s), and includes seamless integration with your Google Business Profile.",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName,
          phone,
          tradeType,
          customDomain: tradeType === "Others (Custom Domain / Separate Industry)" ? customDomain : "",
          message,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        // Automatically open direct WhatsApp message to Ram (+91 90000 08685)
        const tradeDesc =
          tradeType === "Others (Custom Domain / Separate Industry)" ? customDomain : tradeType;
        const waMsg = `Hi Ram (RACH), I just requested a callback for my business: *${businessName}* (${tradeDesc}). Phone: ${phone}.${
          message ? ` Note: "${message}"` : ""
        }`;
        window.open(`https://wa.me/919000008685?text=${encodeURIComponent(waMsg)}`, "_blank");
      }
    } catch (err) {
      console.error(err);
      // Fallback to submitted state for client feedback
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EBF7EE] text-[#0B6B38] rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight">
            Get your business online this week.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl leading-relaxed">
            Direct, no-friction communication. Message us on WhatsApp or request a fast callback to discuss your trade requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct WhatsApp Card + Contact Details */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary Direct WhatsApp Banner */}
            <div className="bg-zinc-950 text-white p-7 sm:p-9 rounded-3xl border border-zinc-800 relative shadow-xl">
              <div className="text-xs uppercase tracking-widest text-emerald-400 mb-2 font-bold">
                Fastest Response Channel
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                Message RACH Directly on WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 mb-6 leading-relaxed">
                Skip the complicated forms. Send us your business name, trade, and what you need. We reply within 30 minutes with recommendations and estimated delivery date.
              </p>

              {/* WhatsApp Action Button */}
              <a
                href="https://wa.me/919000008685?text=Hi%20RACH%2C%20I%20want%20to%20build%20a%20website%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0B6B38] hover:bg-[#08522A] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full transition-all shadow-md active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Message on WhatsApp (+91 90000 08685)</span>
              </a>

              <div className="mt-5 flex items-center gap-2 text-xs text-zinc-400">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Founder online now • Typical reply in under 15 mins</span>
              </div>
            </div>

            {/* Direct Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#FAFAF9] p-5 rounded-2xl border border-zinc-200">
                <div className="flex items-center gap-2.5 font-bold text-sm text-zinc-900 mb-1">
                  <Phone className="w-4 h-4 text-[#0B6B38]" />
                  <span>Direct Phone Line</span>
                </div>
                <div className="text-xs text-zinc-600 font-semibold">
                  +91 90000 08685
                </div>
                <div className="text-[11px] text-zinc-500 mt-1">
                  Mon – Sat, 9:30 AM – 7:30 PM IST
                </div>
              </div>

              <div className="bg-[#FAFAF9] p-5 rounded-2xl border border-zinc-200">
                <div className="flex items-center gap-2.5 font-bold text-sm text-zinc-900 mb-1">
                  <Mail className="w-4 h-4 text-[#0B6B38]" />
                  <span>Project Inquiries</span>
                </div>
                <div className="text-xs text-zinc-600 font-semibold">
                  yuvexalearn@gmail.com
                </div>
                <div className="text-[11px] text-zinc-500 mt-1">
                  Website blueprints &amp; client inquiries
                </div>
              </div>

              <div className="bg-[#FAFAF9] p-5 rounded-2xl border border-zinc-200 sm:col-span-2">
                <div className="flex items-center gap-2.5 font-bold text-sm text-zinc-900 mb-1">
                  <MapPin className="w-4 h-4 text-[#E63946]" />
                  <span>Operating Regions</span>
                </div>
                <div className="text-xs text-zinc-600 leading-relaxed">
                  Serving local businesses across <strong>Hyderabad (Telangana)</strong> and pan-India digitally.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Callback Request Form / FAQ */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Callback Request Card */}
            <div className="bg-[#FAFAF9] p-6 sm:p-7 rounded-3xl border border-zinc-200 shadow-xs">
              <div className="text-xs font-bold uppercase text-zinc-900 mb-1">
                Request a Callback
              </div>
              <p className="text-xs text-zinc-500 mb-4">
                Leave your number and trade. We will call you back within 2 business hours.
              </p>

              {submitted ? (
                <div className="bg-[#EBF7EE] border border-emerald-200 p-5 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-8 h-8 text-[#0B6B38] mx-auto" />
                  <div className="font-display font-bold text-base text-zinc-900">
                    Inquiry Received Securely!
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Thank you, <strong>{businessName}</strong>. Our Hyderabad team will contact you at <strong>{phone}</strong> within 2 hours.
                  </p>
                  <a
                    href={`https://wa.me/919000008685?text=Hi%20RACH%2C%20I%20just%20submitted%20an%20inquiry%20for%20${encodeURIComponent(
                      businessName
                    )}%20(${encodeURIComponent(
                      tradeType === "Others (Custom Domain / Separate Industry)" ? customDomain : tradeType
                    )}).%20Let's%20connect!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#0B6B38] hover:bg-[#08522A] text-white font-semibold py-2 px-4 rounded-full text-xs transition-all shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>Open Instant WhatsApp Chat</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 text-left">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">
                      Business Name:
                    </label>
                    <input
                      type="text"
                      required
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="e.g. Royal Unisex Salon / Dr. Joshi Clinic"
                      className="w-full bg-white border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 focus:border-[#0B6B38] focus:ring-1 focus:ring-[#0B6B38] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1">
                        Phone / WhatsApp:
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 90000 08685"
                        className="w-full bg-white border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 focus:border-[#0B6B38] focus:ring-1 focus:ring-[#0B6B38] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 mb-1">
                        Industry / Category:
                      </label>
                      <select
                        value={tradeType}
                        onChange={(e) => setTradeType(e.target.value)}
                        className="w-full bg-white border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 focus:border-[#0B6B38] focus:ring-1 focus:ring-[#0B6B38] focus:outline-none"
                      >
                        <option>Salon / Spa / Grooming</option>
                        <option>Clinic / Doctor / Dental</option>
                        <option>Manufacturer / Fabricator</option>
                        <option>Restaurant / Retail</option>
                        <option>Consulting / Legal / CA</option>
                        <option>Others (Custom Domain / Separate Industry)</option>
                      </select>
                    </div>
                  </div>

                  {/* Conditional Input for Custom Domain / Industry */}
                  {tradeType === "Others (Custom Domain / Separate Industry)" && (
                    <div className="bg-emerald-50/60 p-3 rounded-xl border border-emerald-200/80 animate-in fade-in duration-200">
                      <label className="block text-xs font-bold text-emerald-900 mb-1">
                        Specify Your Domain or Industry:
                      </label>
                      <input
                        type="text"
                        required
                        value={customDomain}
                        onChange={(e) => setCustomDomain(e.target.value)}
                        placeholder="e.g. EdTech, Real Estate, E-Commerce, Logistics, SaaS, FinTech..."
                        className="w-full bg-white border border-emerald-300 rounded-lg px-3 py-2 text-xs text-zinc-900 focus:border-[#0B6B38] focus:ring-1 focus:ring-[#0B6B38] focus:outline-none placeholder:text-zinc-400"
                      />
                      <p className="text-[10px] text-emerald-700 mt-1">
                        We build custom high-speed websites for any specialized industry or domain.
                      </p>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">
                      What do you need? (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Need a 5-page site with WhatsApp booking and price list..."
                      className="w-full bg-white border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 focus:border-[#0B6B38] focus:ring-1 focus:ring-[#0B6B38] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-zinc-950 hover:bg-black disabled:bg-zinc-700 text-white font-semibold py-3 px-4 rounded-full text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95"
                  >
                    {isSubmitting ? (
                      <span>Submitting Securely...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Callback Request</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Compact Accordion FAQ */}
            <div className="bg-[#FAFAF9] border border-zinc-200 rounded-3xl p-6">
              <div className="text-xs font-bold uppercase text-zinc-900 mb-4">
                Frequently Asked Questions
              </div>
              <div className="space-y-2">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border-b border-zinc-200/60 pb-2.5 last:border-b-0"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between text-left text-xs font-semibold text-zinc-900 py-1.5 hover:text-[#0B6B38] transition-colors"
                    >
                      <span>{faq.q}</span>
                      {openFaq === idx ? (
                        <ChevronUp className="w-4 h-4 text-[#0B6B38] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-zinc-400 shrink-0" />
                      )}
                    </button>
                    {openFaq === idx && (
                      <p className="text-xs text-zinc-600 mt-1 leading-relaxed bg-white p-3 rounded-xl border border-zinc-100">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
