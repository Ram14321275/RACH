import { NextRequest, NextResponse } from "next/server";

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

    // In production, this can forward to WhatsApp Cloud API, Email, or Database
    const submission = {
      id: `inq_${Date.now()}`,
      businessName: sanitizedBusiness,
      phone: sanitizedPhone,
      tradeType: sanitizedTrade,
      customDomain: sanitizedCustomDomain,
      message: sanitizedMsg,
      timestamp: new Date().toISOString(),
      region: "Hyderabad / Pan-India",
    };

    console.log("[RACH Secure Inquiry]:", submission);

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been received securely. We will contact you within 2 hours.",
        data: submission,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("[RACH Contact Error]:", err);
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }
}
