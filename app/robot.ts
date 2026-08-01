import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// No /dashboard/ disallow needed anymore — that's a separate project on
// its own domain now, so it's simply not part of this site's routes at all.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.domain}/sitemap.xml`,
  };
}