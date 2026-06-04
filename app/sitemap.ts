import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getAllPosts } from "@/lib/blog";

const BASE = "https://plocicacevapi.hr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  type Locale = (typeof routing.locales)[number];
  const entries: MetadataRoute.Sitemap = [];

  const langs = (suffix: string) =>
    Object.fromEntries(
      routing.locales.map((l: Locale) => [l, `${BASE}/${l}/${suffix}`])
    );

  for (const locale of routing.locales) {
    entries.push({
      url: `${BASE}/${locale}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: locale === routing.defaultLocale ? 1 : 0.9,
      alternates: { languages: langs("") },
    });
  }

  for (const route of ["blog", "privacy", "imprint"] as const) {
    for (const locale of routing.locales) {
      entries.push({
        url: `${BASE}/${locale}/${route}/`,
        lastModified: now,
        changeFrequency: route === "blog" ? "weekly" : "yearly",
        priority: route === "blog" ? 0.7 : 0.3,
        alternates: { languages: langs(`${route}/`) },
      });
    }
  }

  for (const post of getAllPosts()) {
    for (const locale of routing.locales) {
      entries.push({
        url: `${BASE}/${locale}/blog/${post.slug}/`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: { languages: langs(`blog/${post.slug}/`) },
      });
    }
  }

  return entries;
}
