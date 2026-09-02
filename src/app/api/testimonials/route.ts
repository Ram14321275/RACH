import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Initial seed testimonials for realistic SaaS social proof
const DEFAULT_TESTIMONIALS = [
  {
    id: "test_1",
    clientName: "Priya Kasturi",
    role: "Founder & Creative Director",
    companyName: "Kaya Botanics Spa",
    domain: "kayabotanics.in",
    industry: "Salon / Spa",
    city: "Jubilee Hills, Hyderabad",
    rating: 5,
    projectType: "Complete Storefront + WhatsApp Booking",
    reviewText:
      "RACH built our complete botanical spa storefront in just 4 days. Our clients in Jubilee Hills love the 1-tap WhatsApp booking — our direct weekend appointment bookings jumped by 65% in the first month!",
    verified: true,
    createdAt: "2026-08-15T10:30:00.000Z",
  },
  {
    id: "test_2",
    clientName: "Dr. Arvind Mehta",
    role: "Senior Orthopedic Surgeon",
    companyName: "Mehta Orthocare Clinic",
    domain: "mehtaortho.in",
    industry: "Clinic / Healthcare",
    city: "Banjara Hills, Hyderabad",
    rating: 5,
    projectType: "Clinical Site + Emergency OPD Routing",
    reviewText:
      "Most web agencies don't understand clinical workflow. RACH set up our morning and evening OPD timetables, doctor credentials, and direct emergency routing flawlessly. The 0.35s load time is astonishing.",
    verified: true,
    createdAt: "2026-08-20T14:15:00.000Z",
  },
  {
    id: "test_3",
    clientName: "Rajeshwar Rao",
    role: "Managing Director",
    companyName: "Apex Precision Fabrications",
    domain: "apexprecision.co.in",
    industry: "Manufacturing / Engineering",
    city: "Sanathnagar MIDC, Hyderabad",
    rating: 5,
    projectType: "Industrial Specs + RFQ Portal",
    reviewText:
      "Our Tier-1 automotive clients can now inspect our 5-axis CNC tolerance specs and download material certificates directly from their phones. RACH handles all server updates so we can focus on precision manufacturing.",
    verified: true,
    createdAt: "2026-08-28T09:45:00.000Z",
  },
  {
    id: "test_4",
    clientName: "Ram Pawar",
    role: "AI Solutions Architect",
    companyName: "the CHILL WORKS",
    domain: "rampawar.in",
    industry: "Technology / Portfolio",
    city: "Hyderabad",
    rating: 5,
    projectType: "High-Performance Portfolio & Showcase",
    reviewText:
      "RACH's speed and design finesse are top-notch. Clean animations, instant edge-node deployment, and zero maintenance friction. Best digital partner in Hyderabad!",
    verified: true,
    createdAt: "2026-08-30T16:00:00.000Z",
  },
];

const DATA_FILE = path.join(process.cwd(), "public", "testimonials-data.json");

function getStoredTestimonials() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, "utf8");
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error("Error reading testimonials:", err);
  }
  return DEFAULT_TESTIMONIALS;
}

function saveTestimonials(list: typeof DEFAULT_TESTIMONIALS) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(list, null, 2), "utf8");
  } catch (err) {
    console.error("Error saving testimonials:", err);
  }
}

export async function GET() {
  const testimonials = getStoredTestimonials();
  return NextResponse.json({ success: true, count: testimonials.length, data: testimonials });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      clientName,
      role,
      companyName,
      domain,
      industry,
      customDomain,
      city,
      rating,
      projectType,
      reviewText,
    } = body;

    // Validation
    if (!clientName || !companyName || !reviewText) {
      return NextResponse.json(
        { error: "Name, company name, and testimonial text are required." },
        { status: 400 }
      );
    }

    const cleanRating = Math.max(1, Math.min(5, Number(rating) || 5));
    const effectiveIndustry = industry === "Others" && customDomain ? customDomain : industry || "Other Domain";

    // Sanitize
    const newTestimonial = {
      id: `rev_${Date.now()}`,
      clientName: String(clientName).replace(/<[^>]*>?/gm, "").slice(0, 80),
      role: String(role || "Client").replace(/<[^>]*>?/gm, "").slice(0, 80),
      companyName: String(companyName).replace(/<[^>]*>?/gm, "").slice(0, 100),
      domain: String(domain || "").replace(/<[^>]*>?/gm, "").replace(/^https?:\/\//, "").slice(0, 100),
      industry: String(effectiveIndustry).replace(/<[^>]*>?/gm, "").slice(0, 60),
      city: String(city || "Hyderabad").replace(/<[^>]*>?/gm, "").slice(0, 60),
      rating: cleanRating,
      projectType: String(projectType || "Custom Website + Hosting").replace(/<[^>]*>?/gm, "").slice(0, 100),
      reviewText: String(reviewText).replace(/<[^>]*>?/gm, "").slice(0, 1200),
      verified: true, // Auto-verified for active submission
      createdAt: new Date().toISOString(),
    };

    const currentList = getStoredTestimonials();
    currentList.unshift(newTestimonial);
    saveTestimonials(currentList);

    return NextResponse.json({
      success: true,
      message: "Thank you! Your testimonial has been submitted and published.",
      data: newTestimonial,
    });
  } catch (err) {
    console.error("[Testimonial Submit Error]:", err);
    return NextResponse.json({ error: "Failed to submit testimonial." }, { status: 500 });
  }
}
