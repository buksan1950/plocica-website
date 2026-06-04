import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { getAllPosts, formatDate, type Locale } from "@/lib/blog";
import { Reveal } from "@/components/ui/Reveal";

export function BlogTeaser() {
  const t = useTranslations("blog");
  const locale = useLocale() as Locale;
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="relative bg-green border-t border-black/40">
      <div aria-hidden className="absolute inset-0 utensil-scatter" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-10 py-24 md:py-32">
        <div className="mb-12 flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="stamp text-orange mb-3">{t("kicker")}</p>
            <h2
              className="font-display text-offwhite leading-[0.95]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
            >
              {t("title")}
            </h2>
            <p className="mt-3 text-offwhite-muted max-w-xl">
              {t("subtitle")}
            </p>
          </div>
          <Link
            href={`/${locale}/blog/`}
            className="stamp text-orange hover:text-offwhite transition-colors"
          >
            ↗ {t("title")}
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <Link
                href={`/${locale}/blog/${post.slug}/`}
                className="group block"
              >
                <article className="bg-green-dark border border-black/30 hover:border-orange/60 transition-colors h-full flex flex-col">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt[locale]}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="stamp text-orange mb-3">{post.tag[locale]}</p>
                    <h3
                      className="font-display text-offwhite leading-tight"
                      style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)" }}
                    >
                      {post.title[locale]}
                    </h3>
                    <p className="mt-3 text-offwhite/85 text-sm leading-relaxed flex-1">
                      {post.excerpt[locale]}
                    </p>
                    <div className="mt-5 flex items-center justify-between stamp text-offwhite-muted">
                      <span>{formatDate(post.date, locale)}</span>
                      <span>
                        {post.minutes} {t("minRead")}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
