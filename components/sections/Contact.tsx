import { useTranslations, useLocale } from "next-intl";
import { whatsappLink, PHONE_DISPLAY, PHONE_TEL } from "@/lib/whatsapp";
import { LINKS, mapsEmbedUrl } from "@/lib/links";

export function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const wa = whatsappLink(locale);

  return (
    <section id="contact" className="bg-black border-t border-black/40">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-24 md:py-32">
        <p className="stamp text-orange mb-10">{t("kicker")}</p>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          {/* Left — two map embeds */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <MapEmbed label={t("map1Label")} query={LINKS.mapTrznica} />
            <MapEmbed label={t("map2Label")} query={LINKS.mapPodroom} />
          </div>

          {/* Right — info column */}
          <div className="flex flex-col">
            <h2
              className="font-display text-offwhite leading-[0.95]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
            >
              {t("title")}
            </h2>

            <div className="mt-8 space-y-6">
              <div>
                <p className="stamp text-orange mb-2">{t("address1Heading")}</p>
                <p className="text-offwhite/90">{t("address1Line1")}</p>
                <p className="text-offwhite/90">{t("address1Line2")}</p>
              </div>
              <div>
                <p className="stamp text-orange mb-2">{t("address2Heading")}</p>
                <p className="text-offwhite/90">{t("address2Line1")}</p>
                <p className="text-offwhite/90">{t("address2Line2")}</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-offwhite/15 space-y-2">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="block stamp text-offwhite hover:text-orange transition-colors"
              >
                WHATSAPP · {PHONE_DISPLAY}
              </a>
              <a
                href={PHONE_TEL}
                className="block text-offwhite hover:text-orange transition-colors"
              >
                {t("phone")}
              </a>
              <p className="text-xs text-offwhite-muted/70">
                {t("phoneNote")}
              </p>
              <a
                href={`mailto:${t("email")}`}
                className="block text-offwhite hover:text-orange transition-colors break-all pt-2"
              >
                {t("email")}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 stamp text-offwhite-muted">
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-offwhite transition-colors"
              >
                INSTAGRAM · {t("instagram")}
              </a>
              <a
                href={LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-offwhite transition-colors"
              >
                FACEBOOK · {t("facebook")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MapEmbed({ label, query }: { label: string; query: string }) {
  return (
    <div className="flex flex-col">
      <p className="stamp text-orange mb-2">{label}</p>
      <div className="relative aspect-[4/3] w-full border border-black/40 overflow-hidden bg-green-dark">
        <iframe
          title={label}
          src={mapsEmbedUrl(query)}
          loading="lazy"
          className="absolute inset-0 h-full w-full"
          style={{ filter: "grayscale(0.5) sepia(0.2) hue-rotate(60deg)" }}
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
