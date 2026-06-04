import { useTranslations, useLocale } from "next-intl";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import { LINKS, mapsUrl } from "@/lib/links";

export function Order() {
  const t = useTranslations("order");
  const locale = useLocale();
  const waHref = whatsappLink(locale);

  return (
    <section
      id="order"
      className="relative bg-green-dark border-t border-black/40 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 utensil-scatter" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-10 py-24 md:py-32">
        <p className="stamp text-orange mb-3">{t("kicker")}</p>
        <h2
          className="font-display text-offwhite leading-[0.95] mb-12"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
        >
          {t("title")}
        </h2>

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Column 1 — WhatsApp primary + delivery + main phone */}
          <div>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-orange text-black p-6 hover:bg-offwhite transition-colors"
            >
              <div className="flex items-center gap-3">
                <MessageCircle className="h-7 w-7" strokeWidth={1.8} />
                <span
                  className="font-display leading-tight"
                  style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)" }}
                >
                  {t("whatsappCta")}
                </span>
              </div>
              <p className="mt-2 stamp text-black/70">{t("whatsappHint")}</p>
            </a>

            <h3 className="mt-8 stamp text-offwhite-muted mb-3">
              {t("deliveryTitle")}
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={LINKS.wolt}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-4 py-3 border border-black/40 hover:border-orange hover:text-orange transition-colors stamp text-offwhite"
              >
                <span>WOLT</span>
                <span aria-hidden>→</span>
              </a>
              <a
                href={LINKS.glovo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-4 py-3 border border-black/40 hover:border-orange hover:text-orange transition-colors stamp text-offwhite"
              >
                <span>GLOVO</span>
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>

          <LocationCard
            label={t("location1Label")}
            tagline={t("location1Tagline")}
            address1={t("location1Address1")}
            address2={t("location1Address2")}
            hours={t("location1Hours")}
            phoneLabel={t("location1PhoneLabel")}
            phone={t("location1Phone")}
            mapQuery={LINKS.mapTrznica}
            showMap={t("showMap")}
          />

          <LocationCard
            label={t("location2Label")}
            tagline={t("location2Tagline")}
            address1={t("location2Address1")}
            address2={t("location2Address2")}
            hours={t("location2Hours")}
            hoursNote={t("location2HoursNote")}
            phoneLabel={t("location2PhoneLabel")}
            phone={t("location2Phone")}
            mapQuery={LINKS.mapPodroom}
            showMap={t("showMap")}
          />
        </div>
      </div>
    </section>
  );
}

function LocationCard({
  label,
  tagline,
  address1,
  address2,
  hours,
  hoursNote,
  phoneLabel,
  phone,
  mapQuery,
  showMap,
}: {
  label: string;
  tagline: string;
  address1: string;
  address2: string;
  hours: string;
  hoursNote?: string;
  phoneLabel: string;
  phone: string;
  mapQuery: string;
  showMap: string;
}) {
  const phoneTel = `tel:${phone.replace(/\s+/g, "")}`;
  return (
    <div className="flex flex-col">
      <p className="stamp text-orange mb-3">{label}</p>
      <h3
        className="font-display text-offwhite leading-tight mb-4"
        style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)" }}
      >
        {tagline}
      </h3>
      <div className="space-y-3 text-offwhite/90 text-sm">
        <p className="flex items-start gap-2">
          <MapPin
            className="h-4 w-4 mt-1 text-orange shrink-0"
            strokeWidth={1.5}
          />
          <span>
            {address1}
            <br />
            {address2}
          </span>
        </p>
        <p className="flex items-start gap-2">
          <Clock
            className="h-4 w-4 mt-1 text-orange shrink-0"
            strokeWidth={1.5}
          />
          <span>
            {hours}
            {hoursNote && (
              <>
                <br />
                <span className="text-offwhite-muted">{hoursNote}</span>
              </>
            )}
          </span>
        </p>
        <div className="flex items-start gap-2">
          <Phone
            className="h-4 w-4 mt-1 text-orange shrink-0"
            strokeWidth={1.5}
          />
          <div>
            <p className="text-xs text-offwhite-muted/80 stamp mb-1">
              {phoneLabel}
            </p>
            <a
              href={phoneTel}
              className="text-offwhite hover:text-orange transition-colors"
            >
              {phone}
            </a>
          </div>
        </div>
      </div>
      <a
        href={mapsUrl(mapQuery)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center px-4 py-3 stamp border border-offwhite text-offwhite hover:bg-offwhite hover:text-green-deep transition-colors self-start"
      >
        {showMap}
      </a>
    </div>
  );
}
