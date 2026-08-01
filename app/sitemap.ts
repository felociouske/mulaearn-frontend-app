import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { tutorials } from "@/lib/tutorials-data";
import { newsPosts } from "@/lib/news-data";

// Next.js auto-serves this at /sitemap.xml — satisfies your blueprint's
// "XML sitemap" requirement without a separate Django job to maintain.
// Tutorial/news entries are generated from the same data files that drive
// their pages, so adding a new guide or post automatically adds it here too.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/how-it-works",
    "/tutorials",
    "/faqs",
    "/news",
    "/reviews",
    "/contact",
  ].map((path) => ({
    url: `${siteConfig.domain}${path}`,
    lastModified: new Date(),
  }));

  const tutorialPages = tutorials.map((t) => ({
    url: `${siteConfig.domain}/tutorials/${t.slug}`,
    lastModified: new Date(),
  }));

  const newsPages = newsPosts.map((p) => ({
    url: `${siteConfig.domain}/news/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticPages, ...tutorialPages, ...newsPages];
}