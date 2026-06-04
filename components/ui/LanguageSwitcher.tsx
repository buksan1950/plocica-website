"use client";

import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { routing, type Locale } from "@/i18n/routing";

export function LanguageSwitcher() {
  const t = useTranslations("lang");
  const locale = useLocale();
  const pathname = usePathname() || "/";

  function switchTo(target: Locale) {
    if (target === locale) return;
    const segments = pathname.split("/").filter(Boolean);
    if (
      segments[0] === "hr" ||
      segments[0] === "en" ||
      segments[0] === "it"
    ) {
      segments[0] = target;
    } else {
      segments.unshift(target);
    }
    const next = "/" + segments.join("/") + (pathname.endsWith("/") ? "/" : "");
    if (typeof document !== "undefined") {
      document.cookie = `NEXT_LOCALE=${target}; path=/; max-age=31536000; SameSite=Lax`;
    }
    window.location.assign(next);
  }

  return (
    <div
      role="group"
      aria-label={t("switchLabel")}
      className="flex items-center gap-1 stamp"
    >
      {routing.locales.map((code, i) => (
        <span key={code} className="flex items-center gap-1">
          {i > 0 && <span className="text-offwhite-muted/50">|</span>}
          <button
            type="button"
            onClick={() => switchTo(code)}
            aria-current={locale === code ? "true" : undefined}
            className={`px-1.5 py-1 transition-colors ${
              locale === code
                ? "text-offwhite"
                : "text-offwhite-muted hover:text-offwhite"
            }`}
          >
            {t(code)}
          </button>
        </span>
      ))}
    </div>
  );
}
