import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import photos from "@/data/photos.json";
import { Reveal } from "@/components/ui/Reveal";

type Locale = "hr" | "en" | "it";

type GalleryItem = {
  src: string;
  alt: { hr: string; en: string; it: string };
  aspect: "landscape" | "portrait";
};

export function Gallery() {
  const t = useTranslations("gallery");
  const locale = useLocale() as Locale;
  const items = photos.gallery as GalleryItem[];

  return (
    <section id="gallery" className="relative bg-green-deep overflow-hidden">
      <div aria-hidden className="absolute inset-0 utensil-scatter" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-10 py-24 md:py-32">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="stamp text-orange mb-3">{t("kicker")}</p>
            <h2
              className="font-display text-offwhite leading-[0.95]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
            >
              {t("title")}
            </h2>
          </div>
          <p className="stamp text-offwhite-muted max-w-sm text-right">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid gap-3 md:gap-4 grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.src} delay={i * 0.05}>
              <div
                className={`relative w-full overflow-hidden ${
                  item.aspect === "portrait"
                    ? "aspect-[3/4]"
                    : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt[locale]}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
