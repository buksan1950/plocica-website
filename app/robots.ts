import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://plocica.hr/sitemap.xml",
    host: "https://plocica.hr",
  };
}
