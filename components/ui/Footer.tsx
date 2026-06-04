import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Footer() {
  const t = useTranslations("footer");
  const tBlog = useTranslations("blog");
  const locale = useLocale();
  return (
    <footer className="bg-black border-t border-black/40 py-8 px-5 md:px-8">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 text-offwhite-muted">
        <p className="stamp">{t("stamp")}</p>
        <div className="flex items-center gap-6">
          <LanguageSwitcher />
          <p className="stamp">{t("copyright")}</p>
        </div>
        <div className="flex items-center gap-4 stamp">
          <Link
            href={`/${locale}/blog/`}
            className="hover:text-offwhite transition-colors"
          >
            {tBlog("title")}
          </Link>
          <span className="text-offwhite-muted/40">·</span>
          <Link
            href={`/${locale}/privacy/`}
            className="hover:text-offwhite transition-colors"
          >
            {t("privacy")}
          </Link>
          <span className="text-offwhite-muted/40">·</span>
          <Link
            href={`/${locale}/imprint/`}
            className="hover:text-offwhite transition-colors"
          >
            {t("imprint")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
