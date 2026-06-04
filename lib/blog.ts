import postsData from "@/data/blog-posts.json";

export type BlogPost = {
  slug: string;
  date: string;
  image: string;
  imageAlt: { hr: string; en: string; it: string };
  minutes: number;
  tag: { hr: string; en: string; it: string };
  title: { hr: string; en: string; it: string };
  excerpt: { hr: string; en: string; it: string };
  body: { hr: string; en: string; it: string };
};

export type Locale = "hr" | "en" | "it";

export function getAllPosts(): BlogPost[] {
  return (postsData.posts as BlogPost[])
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): BlogPost | undefined {
  return (postsData.posts as BlogPost[]).find((p) => p.slug === slug);
}

export function formatDate(date: string, locale: Locale): string {
  const d = new Date(date);
  const tag =
    locale === "hr" ? "hr-HR" : locale === "it" ? "it-IT" : "en-GB";
  return d.toLocaleDateString(tag, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
