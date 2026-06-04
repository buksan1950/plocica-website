import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import photos from "@/data/photos.json";
import { Reveal } from "@/components/ui/Reveal";

type Locale = "hr" | "en" | "it";

export function ThePlace() {
  const t = useTranslations("place");
  const locale = useLocale() as Locale;

  return (
    <section
      id="place"
      className="relative overflow-hidden bg-cream text-green-deep"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-10 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <Reveal>
            {/* photo-17 is 1600×1068 (3:2 landscape) — match the ratio so the
                full "PLOČICA" wall sign is visible, not cropped. */}
            <div className="relative aspect-[3/2] w-full overflow-hidden">
              <Image
                src={photos.wallSign}
                alt={photos.wallSignAlt[locale]}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p className="stamp text-orange mb-3">{t("kicker")}</p>
              <p className="stamp text-green-deep/50 mb-6">
                {t("yearStamp")}
              </p>
              <blockquote>
                <p
                  className="font-display text-green-deep leading-[0.95]"
                  style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)" }}
                >
                  “{t("quote")}”
                </p>
                <cite className="mt-4 inline-block stamp text-green-deep/60 not-italic">
                  — {t("attribution")}
                </cite>
              </blockquote>
              <p className="mt-8 text-green-deep/85 text-lg leading-relaxed">
                {t("body")}
              </p>

              <div className="mt-10 pt-8 border-t border-green-deep/20 grid gap-3 sm:grid-cols-2">
                <p className="stamp text-green-deep/70">{t("marketLabel")}</p>
                <p className="stamp text-orange">{t("podroomLabel")}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
