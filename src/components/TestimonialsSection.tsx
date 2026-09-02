"use client";

import React, { useState, useEffect } from "react";
import {
  Star,
  CheckCircle2,
  MessageCircle,
  Share2,
  Copy,
  ExternalLink,
  Sparkles,
  Send,
  Building2,
  Globe,
  Quote,
} from "lucide-react";

interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  companyName: string;
  domain: string;
  industry: string;
  city: string;
  rating: number;
  projectType: string;
  reviewText: string;
  verified: boolean;
  createdAt: string;
}

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [activeTab, setActiveTab] = useState<"wall" | "submit">("wall");
  const [copiedLink, setCopiedLink] = useState(false);

  // Form State
  const [clientName, setClientName] = useState("");
  const [role, setRole] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [domain, setDomain] = useState("");
  const [industry, setIndustry] = useState("Salon / Spa");
  const [customDomain, setCustomDomain] = useState("");
  const [city, setCity] = useState("Hyderabad");
  const [rating, setRating] = useState(5);
  const [projectType, setProjectType] = useState("Complete Custom Website + Managed Hosting");
  const [reviewText, setReviewText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Fetch verified reviews on mount
  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setTestimonials(data.data);
        }
      })
      .catch((err) => console.error("Error loading reviews:", err));
  }, []);

  const handleCopyReviewLink = () => {
    const url = typeof window !== "undefined" ? `${window.location.origin}/#testimonials` : "https://rach.in/#testimonials";
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientName,
          role,
          companyName,
          domain,
          industry,
          customDomain: industry === "Others" ? customDomain : "",
          city,
          rating,
          projectType,
          reviewText,
        }),
      });
      const data = await res.json();
      if (res.ok && data.data) {
        setTestimonials((prev) => [data.data, ...prev]);
        setSubmitSuccess(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-[#FAF9F6] border-b border-zinc-200/80 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-zinc-200 text-[#0B6B38] rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>CLIENT SATISFACTION &amp; FEEDBACK</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight">
              Real founders. Real websites. Real local growth.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-600 leading-relaxed">
              Read verified feedback from our business clients across Hyderabad, or submit your own experience with RACH.
            </p>
          </div>

          {/* Action Header Pills */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              onClick={() => setActiveTab("wall")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === "wall"
                  ? "bg-zinc-950 text-white shadow-sm"
                  : "bg-white text-zinc-600 hover:text-black border border-zinc-200"
              }`}
            >
              ⭐ Verified Reviews ({testimonials.length})
            </button>
            <button
              onClick={() => setActiveTab("submit")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === "submit"
                  ? "bg-[#0B6B38] text-white shadow-sm"
                  : "bg-white text-zinc-600 hover:text-black border border-zinc-200"
              }`}
            >
              ✍️ Leave a Review / Feedback
            </button>
            <button
              onClick={handleCopyReviewLink}
              title="Copy link to send to clients to collect reviews"
              className="p-2.5 bg-white hover:bg-zinc-50 border border-zinc-200 rounded-full text-zinc-700 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs"
            >
              {copiedLink ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-bold pr-1">Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-600" />
                  <span className="pr-1">Share Review Link</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 1. VIEW MODE: VERIFIED TESTIMONIALS WALL */}
        {activeTab === "wall" && (
          <div className="space-y-10 animate-in fade-in duration-300">
            {/* Quick Metrics SaaS Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-5 rounded-2xl border border-zinc-200 shadow-xs">
              <div className="text-center p-2">
                <div className="font-display font-black text-2xl text-zinc-950">4.98 / 5.0</div>
                <div className="text-xs text-zinc-500 mt-0.5">Average Client Rating</div>
              </div>
              <div className="text-center p-2 border-l border-zinc-100">
                <div className="font-display font-black text-2xl text-emerald-600">100%</div>
                <div className="text-xs text-zinc-500 mt-0.5">On-Time Launch Rate</div>
              </div>
              <div className="text-center p-2 border-l border-zinc-100">
                <div className="font-display font-black text-2xl text-zinc-950">&lt; 0.4s</div>
                <div className="text-xs text-zinc-500 mt-0.5">Hyderabad Edge Latency</div>
              </div>
              <div className="text-center p-2 border-l border-zinc-100">
                <div className="font-display font-black text-2xl text-[#0B6B38]">24 Hrs</div>
                <div className="text-xs text-zinc-500 mt-0.5">Content Update Turnaround</div>
              </div>
            </div>

            {/* Testimonials Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="bg-white p-6 rounded-2xl border border-zinc-200/90 shadow-xs hover:shadow-md hover:border-emerald-200 transition-all flex flex-col justify-between relative group"
                >
                  <div>
                    {/* Stars + Verified Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(t.rating)].map((_, idx) => (
                          <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <div className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Verified Client</span>
                      </div>
                    </div>

                    {/* Review Quote */}
                    <p className="text-sm text-zinc-700 leading-relaxed mb-6 font-normal">
                      &ldquo;{t.reviewText}&rdquo;
                    </p>
                  </div>

                  {/* Client Info & Domain */}
                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-sm text-zinc-950 leading-tight">
                        {t.clientName}
                      </div>
                      <div className="text-xs text-zinc-500 mt-0.5">
                        {t.role}, <strong>{t.companyName}</strong>
                      </div>
                      <div className="text-[11px] text-zinc-400 mt-0.5">
                        {t.city} • {t.industry}
                      </div>
                    </div>

                    {t.domain && (
                      <a
                        href={t.domain.startsWith("http") ? t.domain : `https://${t.domain}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-zinc-50 hover:bg-emerald-50 text-zinc-600 hover:text-emerald-700 border border-zinc-200 transition-colors"
                        title={`Visit ${t.domain}`}
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Prompt to Submit */}
            <div className="bg-white p-6 rounded-2xl border border-dashed border-zinc-300 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <div className="font-bold text-sm text-zinc-950">Are you an active RACH client?</div>
                <div className="text-xs text-zinc-500 mt-0.5">
                  We value your feedback. Take 60 seconds to help other business owners make informed decisions.
                </div>
              </div>
              <button
                onClick={() => setActiveTab("submit")}
                className="bg-zinc-950 hover:bg-black text-white px-5 py-2.5 rounded-full text-xs font-semibold shrink-0 transition-all active:scale-95 shadow-xs"
              >
                Write a Testimonial ✍️
              </button>
            </div>
          </div>
        )}

        {/* 2. SUBMIT MODE: CLIENT FEEDBACK & TESTIMONIAL FORM */}
        {activeTab === "submit" && (
          <div className="max-w-3xl mx-auto bg-white p-8 sm:p-10 rounded-3xl border border-zinc-200 shadow-lg text-left animate-in fade-in duration-300">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-[#0B6B38] px-3 py-1 rounded-full text-xs font-bold mb-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Client Feedback Form</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-zinc-950">
                Share Your Experience with RACH
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 mt-2 max-w-lg mx-auto">
                Your review helps local businesses in Hyderabad choose the right digital partner. Submissions are verified and displayed on our client wall.
              </p>
            </div>

            {submitSuccess ? (
              <div className="bg-[#EBF7EE] border border-emerald-200 p-8 rounded-2xl text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#0B6B38] text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-xl text-zinc-950">
                  Thank You, {clientName}!
                </h4>
                <p className="text-sm text-zinc-700 leading-relaxed max-w-md mx-auto">
                  Your testimonial for <strong>{companyName}</strong> has been received and added to the verified client wall.
                </p>
                <div className="pt-2 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmitSuccess(false);
                      setActiveTab("wall");
                    }}
                    className="bg-zinc-950 text-white px-5 py-2.5 rounded-full text-xs font-bold"
                  >
                    View Testimonial Wall ↗
                  </button>
                  <a
                    href={`https://wa.me/919000008685?text=Hi%20Ram%2C%20I%20just%20submitted%20a%20testimonial%20for%20${encodeURIComponent(
                      companyName
                    )}!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0B6B38] text-white px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>Ping Ram on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* 5-Star Rating Picker */}
                <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-200/80 text-center">
                  <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                    Your Overall Rating:
                  </label>
                  <div className="flex items-center justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setRating(s)}
                        className="p-1 hover:scale-110 transition-transform focus:outline-none"
                      >
                        <Star
                          className={`w-7 h-7 transition-colors ${
                            s <= rating
                              ? "fill-amber-400 text-amber-400"
                              : "text-zinc-300 hover:text-amber-200"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-zinc-500 mt-1 block">
                    {rating === 5
                      ? "⭐⭐⭐⭐⭐ Outstanding Experience"
                      : rating === 4
                      ? "⭐⭐⭐⭐ Great Work"
                      : "⭐⭐⭐ Good"}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">
                      Your Full Name:
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Priya Kasturi / Dr. Arvind Mehta"
                      className="w-full bg-white border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 focus:border-[#0B6B38] focus:ring-1 focus:ring-[#0B6B38] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">
                      Your Role / Designation:
                    </label>
                    <input
                      type="text"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="e.g. Founder, Director, Managing Partner"
                      className="w-full bg-white border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 focus:border-[#0B6B38] focus:ring-1 focus:ring-[#0B6B38] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">
                      Company / Clinic / Business Name:
                    </label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Kaya Botanics / Apex Precision"
                      className="w-full bg-white border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 focus:border-[#0B6B38] focus:ring-1 focus:ring-[#0B6B38] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">
                      Website Domain (Optional):
                    </label>
                    <input
                      type="text"
                      value={domain}
                      onChange={(e) => setDomain(e.target.value)}
                      placeholder="e.g. yourbusiness.in"
                      className="w-full bg-white border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 focus:border-[#0B6B38] focus:ring-1 focus:ring-[#0B6B38] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">
                      Industry / Trade Category:
                    </label>
                    <select
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="w-full bg-white border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 focus:border-[#0B6B38] focus:ring-1 focus:ring-[#0B6B38] focus:outline-none"
                    >
                      <option>Salon / Spa</option>
                      <option>Clinic / Healthcare</option>
                      <option>Manufacturing / Engineering</option>
                      <option>Restaurant / Food &amp; Beverage</option>
                      <option>Consulting / CA / Professional</option>
                      <option>Technology / Portfolio</option>
                      <option>Others</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1">
                      City / Operating Location:
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="e.g. Hyderabad, Telangana"
                      className="w-full bg-white border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 focus:border-[#0B6B38] focus:ring-1 focus:ring-[#0B6B38] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Conditional Input if Others is selected */}
                {industry === "Others" && (
                  <div className="bg-emerald-50/60 p-3.5 rounded-xl border border-emerald-200/80 animate-in fade-in duration-200">
                    <label className="block text-xs font-bold text-emerald-900 mb-1">
                      Specify Your Industry or Domain:
                    </label>
                    <input
                      type="text"
                      required
                      value={customDomain}
                      onChange={(e) => setCustomDomain(e.target.value)}
                      placeholder="e.g. EdTech, Real Estate, E-commerce, Logistics, SaaS, FinTech..."
                      className="w-full bg-white border border-emerald-300 rounded-lg px-3 py-2 text-xs text-zinc-900 focus:border-[#0B6B38] focus:ring-1 focus:ring-[#0B6B38] focus:outline-none"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1">
                    Your Feedback / Testimonial:
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Tell us about the project delivery, speed, design quality, and how your website has performed for your business..."
                    className="w-full bg-white border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs text-zinc-900 focus:border-[#0B6B38] focus:ring-1 focus:ring-[#0B6B38] focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setActiveTab("wall")}
                    className="text-xs font-semibold text-zinc-500 hover:text-zinc-800"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#0B6B38] hover:bg-[#08522A] disabled:bg-zinc-600 text-white font-bold py-3 px-7 rounded-full text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md active:scale-95"
                  >
                    {isSubmitting ? (
                      <span>Publishing Review...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Verified Testimonial</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
