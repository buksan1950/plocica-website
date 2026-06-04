import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";

// Real review + press URLs (verified 2026-05-12).
// Update via these constants if any moves.
const URL_TRIPADVISOR =
  "https://www.tripadvisor.com/Restaurant_Review-g295373-d28587752-Reviews-Plocica_Cevapi-Pula_Istria.html";
const URL_PLAVA_KAMENICA =
  "https://plavakamenica.hr/2024/07/23/nakon-posjeta-slavnog-chefa-u-pecenjari-plocica-na-pulskoj-trznici-je-ludnica-cevapi-su-im-zaista-jedni-od-najboljih-u-hrvatskoj/";
const URL_GLAS_ISTRE =
  "https://www.glasistre.hr/gastro/plocica-cevapi-na-drugaciji-nacin-kod-snjezane-i-mersima-u-paviljonu-na-pulskoj-trznici-812696";
const URL_GLAS_ISTRE_HARTWIG =
  "https://www.glasistre.hr/pula/2024/08/07/renomirani-njemacki-chef-jan-hartwig-rekao-da-su-cevapi-koje-je-probao-u-puli-jedan-od-top-tri-stre-949747";
const URL_RIBAFISH =
  "https://ribafish.com/plocica-pula-izvrsni-cevapi-pored-trznice-po-domacoj-recepturi/";
const URL_WOLT = "https://wolt.com/en/hrv/pula/restaurant/plocica";
const URL_GLOVO = "https://glovoapp.com/hr/en/pula/plocica-pula/";
const URL_INSTAGRAM = "https://instagram.com/plocicacevapi";
const URL_HARTWIG_VIDEO = "https://www.youtube.com/watch?v=SLfxyvcnkO4";

export function Validation() {
  const t = useTranslations("validation");
  return (
    <section id="validation" className="bg-black">
      <div className="mx-auto max-w-6xl px-5 md:px-10 py-28 md:py-40">
        <p className="stamp text-orange mb-10 text-center md:text-left">
          {t("kicker")}
        </p>

        {/* PART A — Hartwig hero quote */}
        <Reveal>
          <figure className="relative pl-8 md:pl-12">
            <div
              aria-hidden
              className="absolute left-0 top-0 bottom-0 w-[4px] bg-orange"
            />
            <blockquote>
              <p
                className="font-display text-offwhite leading-[1.05]"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
              >
                “{t("hartwigQuote")}”
              </p>
            </blockquote>
            <figcaption className="mt-8 space-y-1">
              <p className="stamp text-offwhite tracking-[0.1em]">
                {t("hartwigAttribution")}
              </p>
              <p className="stamp text-offwhite-muted tracking-[0.1em]">
                {t("hartwigAttributionDetail")}
              </p>
              <a
                href={URL_HARTWIG_VIDEO}
                target="_blank"
                rel="noopener noreferrer"
                className="stamp text-offwhite-muted/80 tracking-[0.1em] hover:text-orange transition-colors inline-block"
              >
                ↗ {t("hartwigAttributionContext")}
              </a>
              <p className="mt-4 text-offwhite-muted italic text-sm max-w-xl">
                {t("hartwigNote")}
              </p>
            </figcaption>
          </figure>
        </Reveal>

        {/* PART B — Plava Kamenica + media strip */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0.05}>
            <figure>
              <a
                href={URL_PLAVA_KAMENICA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block stamp text-orange mb-4 hover:text-offwhite transition-colors"
              >
                ↗ {t("plavaLabel")}
              </a>
              <blockquote>
                <p
                  className="font-display text-offwhite leading-tight"
                  style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}
                >
                  “{t("plavaQuote")}”
                </p>
              </blockquote>
              <figcaption className="mt-5 space-y-1">
                <p className="text-offwhite/85 text-sm">{t("plavaIntro")}</p>
                <p className="stamp text-offwhite-muted">{t("plavaSub")}</p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col">
              <p className="stamp text-offwhite-muted mb-5">
                {t("mediaTitle")}
              </p>
              <ul className="space-y-4">
                <li className="flex items-baseline justify-between gap-4 border-b border-offwhite/15 pb-3">
                  <a
                    href={URL_GLAS_ISTRE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-offwhite leading-none hover:text-orange transition-colors"
                    style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}
                  >
                    {t("mediaGlasIstre")} ↗
                  </a>
                  <span className="stamp text-offwhite-muted">
                    {t("mediaGlasIstreNote")}
                  </span>
                </li>
                <li className="flex items-baseline justify-between gap-4 border-b border-offwhite/15 pb-3">
                  <a
                    href={URL_RIBAFISH}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-offwhite leading-none hover:text-orange transition-colors"
                    style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}
                  >
                    {t("mediaRibafish")} ↗
                  </a>
                  <span className="stamp text-offwhite-muted">
                    {t("mediaRibafishNote")}
                  </span>
                </li>
                <li className="flex items-baseline justify-between gap-4 border-b border-offwhite/15 pb-3">
                  <a
                    href={URL_GLAS_ISTRE_HARTWIG}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-offwhite leading-none hover:text-orange transition-colors"
                    style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}
                  >
                    Glas Istre — Hartwig ↗
                  </a>
                  <span className="stamp text-offwhite-muted">2024</span>
                </li>
                <li className="flex items-baseline justify-between gap-4">
                  <a
                    href={URL_TRIPADVISOR}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-offwhite leading-none hover:text-orange transition-colors"
                    style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}
                  >
                    Tripadvisor ↗
                  </a>
                  <span className="stamp text-offwhite-muted">
                    ★★★★★ {t("tripadvisor")}
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        {/* PART C — bottom proof row */}
        <Reveal delay={0.2}>
          <div className="mt-16 pt-8 border-t border-offwhite/15 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-offwhite-muted">
            <a
              href={URL_TRIPADVISOR}
              target="_blank"
              rel="noopener noreferrer"
              className="stamp hover:text-offwhite transition-colors"
            >
              ★★★★★ {t("tripadvisor")}
            </a>
            <span className="text-offwhite-muted/40">·</span>
            <a
              href={URL_WOLT}
              target="_blank"
              rel="noopener noreferrer"
              className="stamp hover:text-offwhite transition-colors"
              aria-label="Wolt"
            >
              {t("wolt")}
            </a>
            <span className="text-offwhite-muted/40">·</span>
            <a
              href={URL_GLOVO}
              target="_blank"
              rel="noopener noreferrer"
              className="stamp hover:text-offwhite transition-colors"
              aria-label="Glovo"
            >
              {t("glovo")}
            </a>
            <span className="text-offwhite-muted/40">·</span>
            <a
              href={URL_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="stamp hover:text-offwhite transition-colors"
            >
              {t("instagram")}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
