import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/privacy", "/terms"].map(path => ({ url: `${siteConfig.url}${path}`, lastModified: new Date(), changeFrequency: path ? "yearly" : "monthly", priority: path ? .4 : 1 })); }
