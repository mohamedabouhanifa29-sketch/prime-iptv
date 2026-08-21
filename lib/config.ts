function getPublicSiteUrl() {
  const fallback = "https://example.com";
  try {
    const url = new URL(process.env.NEXT_PUBLIC_SITE_URL || fallback);
    const localHttp = url.protocol === "http:" && ["localhost", "127.0.0.1"].includes(url.hostname);
    return url.protocol === "https:" || localHttp ? url.origin : fallback;
  } catch {
    return fallback;
  }
}

export const siteConfig: { name: string; description: string; url: string; whatsapp: string; email: string } = {
  name: "PRIME IPTV",
  description: "Discover Prime IPTV subscription plans with flexible options from 1 to 24 months and support for multiple devices.",
  url: getPublicSiteUrl(),
  whatsapp: "+212613463360",
  email: "Iptv.1prime@gmail.com",
};
