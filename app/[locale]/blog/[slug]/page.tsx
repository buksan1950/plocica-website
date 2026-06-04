import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { getAllPosts, getPost, formatDate } from "@/lib/blog";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { ReadingProgress } from "@/components/ui/ReadingProgress";
import { SharePost } from "@/components/ui/SharePost";

export function generateStaticParams() {
  const posts = getAllPosts();
  const out: Array<{ locale: string; slug: string }> = [];
  for (const locale of routing.locales) {
    for (const post of posts) {
      out.push({ locale, slug: post.slug });
    }
  }
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const post = getPost(slug);
  if (!post) return {};
  const loc = locale as Locale;
  return {
    title: `${post.title[loc]} · Pločica`,
    description: post.excerpt[loc],
    alternates: {
      canonical: `/${locale}/blog/${post.slug}/`,
      languages: {
        hr: `/hr/blog/${post.slug}/`,
        en: `/en/blog/${post.slug}/`,
        it: `/it/blog/${post.slug}/`,
      },
    },
    openGraph: {
      title: post.title[loc],
      description: post.excerpt[loc],
      images: [post.image],
      type: "article",
      publishedTime: post.date,
    },
  };
}

const SHARE_LABELS: Record<Locale, { share: string; copyLink: string; copied: string }> = {
  hr: { share: "Podijeli", copyLink: "Kopiraj link", copied: "Kopirano." },
  en: { share: "Share", copyLink: "Copy link", copied: "Copied." },
  it: { share: "Condividi", copyLink: "Copia link", copied: "Copiato." },
};

const BYLINE: Record<Locale, string> = {
  hr: "Mersim i Snježana",
  en: "Mersim & Snježana",
  it: "Mersim e Snježana",
};

const READ_NEXT_LABEL: Record<Locale, string> = {
  hr: "Pročitaj dalje",
  en: "Read next",
  it: "Continua a leggere",
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const post = getPost(slug);
  if (!post) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "blog" });
  const loc = locale as Locale;
  const paragraphs = post.body[loc].split("\n\n").filter(Boolean);
  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <ReadingProgress />
      <Nav />
      <main className="bg-green-deep min-h-screen pt-28 md:pt-32">
        <article className="mx-auto max-w-3xl px-5 md:px-10 py-12 md:py-20">
          <p className="stamp text-orange mb-3">{post.tag[loc]}</p>
          <h1
            className="font-display text-offwhite leading-[0.95] mb-6"
            style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
          >
            {post.title[loc]}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 stamp text-offwhite-muted mb-10">
            <span>{BYLINE[loc]}</span>
            <span className="text-offwhite-muted/40">·</span>
            <span>{formatDate(post.date, loc)}</span>
            <span className="text-offwhite-muted/40">·</span>
            <span>
              {post.minutes} {t("minRead")}
            </span>
          </div>

          <div className="relative aspect-[16/9] w-full overflow-hidden mb-12">
            <Image
              src={post.image}
              alt={post.imageAlt[loc]}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          <div className="space-y-6 text-offwhite/90 leading-relaxed text-lg">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "first-letter:font-display first-letter:text-orange first-letter:text-[4rem] first-letter:leading-[0.85] first-letter:float-left first-letter:mr-3 first-letter:mt-1"
                    : undefined
                }
              >
                {p}
              </p>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-offwhite/15">
            <SharePost title={post.title[loc]} labels={SHARE_LABELS[loc]} />
          </div>
        </article>

        {related.length > 0 && (
          <section className="bg-green border-t border-black/40">
            <div className="mx-auto max-w-6xl px-5 md:px-10 py-16 md:py-20">
              <p className="stamp text-orange mb-6">{READ_NEXT_LABEL[loc]}</p>
              <div className="grid gap-6 md:grid-cols-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/${locale}/blog/${r.slug}/`}
                    className="group block bg-green-dark border border-black/30 hover:border-orange/60 transition-colors h-full flex flex-col"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src={r.image}
                        alt={r.imageAlt[loc]}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <p className="stamp text-orange mb-2">{r.tag[loc]}</p>
                      <h3
                        className="font-display text-offwhite leading-tight"
                        style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)" }}
                      >
                        {r.title[loc]}
                      </h3>
                      <p className="mt-2 text-offwhite/80 text-sm flex-1">
                        {r.excerpt[loc]}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                href={`/${locale}/blog/`}
                className="mt-12 inline-flex items-center stamp text-orange hover:text-offwhite transition-colors"
              >
                ← {t("backToBlog")}
              </Link>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
