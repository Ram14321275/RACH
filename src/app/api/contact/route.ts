import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "public", "inquiries-data.json");

interface ContactInquiry {
  id: string;
  businessName: string;
  phone: string;
  tradeType: string;
  customDomain?: string;
  message?: string;
  timestamp: string;
  region: string;
  status: "new" | "contacted" | "closed";
}

function readInquiries(): ContactInquiry[] {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error("[RACH Inquiries Read Error]:", err);
  }
  return [];
}

function saveInquiries(data: ContactInquiry[]) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    console.error("[RACH Inquiries Write Error]:", err);
  }
}

// GET: Retrieve incoming inquiries for RACH Admin / Hub
export async function GET() {
  const inquiries = readInquiries();
  return NextResponse.json({ success: true, count: inquiries.length, inquiries }, { status: 200 });
}

// POST: Handle new callback submission
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { businessName, phone, tradeType, customDomain, message, honeypot } = body;

    // 1. Honeypot Anti-Spam Check
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Inquiry submitted." }, { status: 200 });
    }

    // 2. Input Validation
    if (!businessName || typeof businessName !== "string" || businessName.trim().length === 0) {
      return NextResponse.json({ error: "Business name is required." }, { status: 400 });
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 8) {
      return NextResponse.json({ error: "Valid phone or WhatsApp number is required." }, { status: 400 });
    }

    // 3. Sanitization (strip script/html tags)
    const sanitizedBusiness = businessName.replace(/<[^>]*>?/gm, "").slice(0, 120);
    const sanitizedPhone = phone.replace(/[^0-9+\s\-()]/g, "").slice(0, 20);
    const sanitizedTrade = (tradeType || "General").replace(/<[^>]*>?/gm, "").slice(0, 80);
    const sanitizedCustomDomain = (customDomain || "").replace(/<[^>]*>?/gm, "").slice(0, 120);
    const sanitizedMsg = (message || "").replace(/<[^>]*>?/gm, "").slice(0, 1000);

    const newInquiry: ContactInquiry = {
      id: `inq_${Date.now()}`,
      businessName: sanitizedBusiness,
      phone: sanitizedPhone,
      tradeType: sanitizedTrade,
      customDomain: sanitizedCustomDomain,
      message: sanitizedMsg,
      timestamp: new Date().toISOString(),
      region: "Hyderabad / Pan-India",
      status: "new",
    };

    // 4. File Persistence (Appends to public/inquiries-data.json)
    const existing = readInquiries();
    existing.unshift(newInquiry);
    saveInquiries(existing);

    console.log(`[RACH New Lead Received]: ${sanitizedBusiness} (${sanitizedPhone}) - ${sanitizedTrade}`);

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been received securely. We will contact you within 2 hours.",
        data: newInquiry,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("[RACH Contact Error]:", err);
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }
}
