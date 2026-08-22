import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: "Prime IPTV | Premium IPTV Subscription & Streaming Plans",
    template: "%s | Prime IPTV",
  },

  description:
    "Premium IPTV subscription plans with live TV, movies, series, sports and multi-device support. Fast activation and flexible plans from 1 to 24 months.",

  alternates: {
  canonical: "https://www.primeiptvworld.com/",
},

  openGraph: {
    title: "Prime IPTV | Premium IPTV Subscription & Streaming Plans",
    description:
      "Premium IPTV subscription plans with live TV, movies, series, sports and multi-device support.",
    url: "https://www.primeiptvworld.com/",
    siteName: "PRIME IPTV",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Prime IPTV | Premium IPTV Subscription & Streaming Plans",
    description:
      "Premium IPTV subscription plans with live TV, movies, series, sports and multi-device support.",
  },

  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml", sizes: "any" }],
    shortcut: "/icon.svg",
  },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#070806" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="font-sans antialiased">{children}</body></html>;
}
