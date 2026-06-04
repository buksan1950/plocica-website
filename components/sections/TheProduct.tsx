import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import photos from "@/data/photos.json";

type Locale = "hr" | "en" | "it";

export function TheProduct() {
  const t = useTranslations("product");
  const locale = useLocale() as Locale;

  return (
    <section id="product" className="relative bg-green overflow-hidden">
      <div aria-hidden className="absolute inset-0 utensil-scatter" />
      <div aria-hidden className="absolute inset-0 char-pattern" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10 py-24 md:py-32">
        <p className="stamp text-orange mb-12">{t("kicker")}</p>

        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16 items-center">
          <div>
            <p
              className="font-display text-orange leading-none"
              style={{ fontSize: "clamp(6rem, 14vw, 10rem)" }}
            >
              {t("headline")}
            </p>
            <div className="mt-8 space-y-2 stamp text-offwhite-muted">
              <p>{t("line1")}</p>
              <p>{t("line2")}</p>
              <p>{t("line3")}</p>
            </div>

            <div className="mt-12 space-y-6 max-w-xl">
              <p
                className="font-display text-offwhite leading-tight"
                style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)" }}
              >
                {t("bodyA")}
              </p>
              <p className="text-offwhite/85 text-lg leading-relaxed">
                {t("bodyB")}
              </p>
            </div>
          </div>

          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src={photos.product}
              alt={photos.productAlt[locale]}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-orange/80" />
    </section>
  );
}
