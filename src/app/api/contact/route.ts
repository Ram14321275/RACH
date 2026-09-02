import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Private server storage (NOT in public folder - zero public exposure)
const PRIVATE_DIR = path.join(process.cwd(), "private-leads");
const DATA_FILE = path.join(PRIVATE_DIR, "inquiries.json");

interface ContactInquiry {
  id: string;
  businessName: string;
  phone: string;
  tradeType: string;
  customDomain?: string;
  message?: string;
  timestamp: string;
  region: string;
}

function ensurePrivateDir() {
  if (!fs.existsSync(PRIVATE_DIR)) {
    fs.mkdirSync(PRIVATE_DIR, { recursive: true });
  }
}

function readPrivateInquiries(): ContactInquiry[] {
  try {
    ensurePrivateDir();
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error("[RACH Inquiries Read Error]:", err);
  }
  return [];
}

function savePrivateInquiry(inquiry: ContactInquiry) {
  try {
    ensurePrivateDir();
    const existing = readPrivateInquiries();
    existing.unshift(inquiry);
    fs.writeFileSync(DATA_FILE, JSON.stringify(existing, null, 2), "utf-8");
  } catch (err) {
    console.error("[RACH Inquiries Write Error]:", err);
  }
}

async function sendEmailAlert(inquiry: ContactInquiry) {
  try {
    const response = await fetch("https://formsubmit.co/ajax/yuvexalearn@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: "https://rach.rampawar.in",
        Referer: "https://rach.rampawar.in/",
      },
      body: JSON.stringify({
        _subject: `🚀 [RACH Lead] ${inquiry.businessName} (${inquiry.phone})`,
        _template: "table",
        _url: "https://rach.rampawar.in",
        "Website Domain": "https://rach.rampawar.in",
        "Business Name": inquiry.businessName,
        "Phone / WhatsApp": inquiry.phone,
        "Industry / Category": inquiry.tradeType,
        "Custom Domain": inquiry.customDomain || "N/A",
        "Requirements / Message": inquiry.message || "None specified",
        "Submission Time (IST)": new Date(inquiry.timestamp).toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
        }),
        "Operating Region": inquiry.region,
      }),
    });
    const result = await response.json();
    console.log("[RACH Email Notification Result]:", result);
  } catch (err) {
    console.error("[RACH Email Notification Failed]:", err);
  }
}

// GET: Secure health check (NEVER exposes customer data publicly)
export async function GET() {
  return NextResponse.json(
    {
      status: "operational",
      gateway: "RACH Private Contact Routing",
      notificationChannel: "WhatsApp & yuvexalearn@gmail.com",
      region: "Hyderabad Edge Node",
    },
    { status: 200 }
  );
}

// POST: Secure callback submission
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

    const cleanDigits = (phone || "").replace(/[^0-9]/g, "");
    if (cleanDigits.length < 10) {
      return NextResponse.json(
        { error: "Please enter a valid 10-digit mobile or WhatsApp number." },
        { status: 400 }
      );
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
    };

    // 4. Secure Private Server-Side Storage
    savePrivateInquiry(newInquiry);

    // 5. Automatic Email Notification to yuvexalearn@gmail.com
    await sendEmailAlert(newInquiry);

    // 6. Server console log (visible only to server administrator)
    console.log(
      `[PRIVATE INQUIRY RECEIVED]: ${sanitizedBusiness} | Phone: ${sanitizedPhone} | Trade: ${sanitizedTrade} | Region: Hyderabad`
    );

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been received securely. We will contact you within 2 hours.",
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("[RACH Contact Error]:", err);
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }
}
