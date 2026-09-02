import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, Caveat } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RACH — Take Your Business Online | Websites Built, Hosted & Managed",
  description:
    "RACH builds, hosts, and maintains fast, professional websites for local businesses in Hyderabad and India. Salons, clinics, and small manufacturers. Build → Host → Connect → Manage.",
  keywords: [
    "website builder Hyderabad",
    "local business website Hyderabad",
    "salon website Hyderabad",
    "clinic website Hyderabad",
    "manufacturer website Hyderabad",
    "website contractor India",
    "managed website services",
    "RACH",
  ],
  authors: [{ name: "RACH Digital" }],
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/rach-emblem-transparent.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "RACH — Take Your Business Online | Pakka Local",
    description:
      "Websites built, hosted, and managed for local businesses in Hyderabad. Direct WhatsApp booking, Google Business connection, zero tech friction.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B6B38",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} ${caveat.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#FAFAF9] text-[#18181B] font-sans selection:bg-[#0B6B38] selection:text-white">
        {children}
      </body>
    </html>
  );
}
