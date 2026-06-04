import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";

export default function LocaleNotFound() {
  const t = useTranslations("notFound");
  const locale = useLocale();

  return (
    <>
      <Nav />
      <main className="bg-green-deep min-h-screen pt-28 md:pt-32 flex flex-col">
        <div className="flex-1 flex items-center justify-center px-5 md:px-10 py-20">
          <div className="text-center max-w-xl">
            <div className="mx-auto mb-8 relative w-24 h-24 opacity-80">
              <Image
                src="/brand/plocica-logo.png"
                alt=""
                fill
                priority
                className="object-contain"
              />
            </div>
            <p className="stamp text-orange mb-4">{t("kicker")}</p>
            <h1
              className="font-display text-offwhite leading-[0.95] mb-6"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
            >
              {t("title")}
            </h1>
            <p className="text-offwhite/80 text-lg leading-relaxed mb-10">
              {t("body")}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href={`/${locale}/`}
                className="inline-flex items-center px-5 py-3 stamp text-black bg-orange hover:bg-offwhite transition-colors"
              >
                {t("backHome")}
              </Link>
              <Link
                href={`/${locale}/#menu`}
                className="inline-flex items-center px-5 py-3 stamp text-offwhite border border-offwhite hover:bg-offwhite hover:text-green-deep transition-colors"
              >
                {t("menuLink")}
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
