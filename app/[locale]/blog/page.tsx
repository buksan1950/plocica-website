import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { getAllPosts, formatDate } from "@/lib/blog";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "blog" });
  return {
    title: `${t("title")} · Pločica`,
    description: t("subtitle"),
    alternates: {
      canonical: `/${locale}/blog`,
      languages: {
        hr: "/hr/blog",
        en: "/en/blog",
        it: "/it/blog",
      },
    },
  };
}

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "blog" });
  const loc = locale as Locale;
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <main className="bg-green-deep min-h-screen pt-28 md:pt-32">
        <div className="mx-auto max-w-6xl px-5 md:px-10 py-12 md:py-20">
          <p className="stamp text-orange mb-3">{t("kicker")}</p>
          <h1
            className="font-display text-offwhite leading-[0.95] mb-4"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
          >
            {t("title")}
          </h1>
          <p className="text-offwhite-muted max-w-xl mb-12">{t("subtitle")}</p>

          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/${locale}/blog/${post.slug}/`}
                className="group block"
              >
                <article className="bg-green-dark border border-black/30 hover:border-orange/60 transition-colors h-full flex flex-col">
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt[loc]}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="stamp text-orange mb-3">{post.tag[loc]}</p>
                    <h2
                      className="font-display text-offwhite leading-tight"
                      style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)" }}
                    >
                      {post.title[loc]}
                    </h2>
                    <p className="mt-3 text-offwhite/85 leading-relaxed flex-1">
                      {post.excerpt[loc]}
                    </p>
                    <div className="mt-5 flex items-center justify-between stamp text-offwhite-muted">
                      <span>{formatDate(post.date, loc)}</span>
                      <span>
                        {post.minutes} {t("minRead")}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <Link
            href={`/${locale}/`}
            className="mt-16 inline-flex items-center stamp text-orange hover:text-offwhite transition-colors"
          >
            ← {t("backHome")}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
