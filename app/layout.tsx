import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Prime IPTV | Premium Streaming Plans", template: "%s | Prime IPTV" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: { title: "Prime IPTV | Premium Streaming Plans", description: siteConfig.description, url: "/", siteName: "PRIME IPTV", type: "website" },
  twitter: { card: "summary_large_image", title: "Prime IPTV | Premium Streaming Plans", description: siteConfig.description },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml", sizes: "any" }],
    shortcut: "/icon.svg",
  },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#070806" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="font-sans antialiased">{children}</body></html>;
}
