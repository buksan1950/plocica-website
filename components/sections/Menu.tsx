import { useTranslations, useLocale } from "next-intl";
import menuData from "@/data/menu.json";
import { whatsappLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

type Locale = "hr" | "en" | "it";

type Category = {
  id: string;
  name: { hr: string; en: string; it: string };
};

type MenuItem = {
  id: string;
  category: string;
  name: { hr: string; en: string; it: string };
  description: { hr: string; en: string; it: string } | null;
  price: number;
};

export function MenuSection() {
  const t = useTranslations("menu");
  const locale = useLocale() as Locale;
  const categories = menuData.categories as Category[];
  const items = menuData.items as MenuItem[];

  return (
    <section id="menu" className="relative bg-green overflow-hidden">
      <div aria-hidden className="absolute inset-0 utensil-scatter-bold" />
      <div className="relative mx-auto max-w-5xl px-5 md:px-10 py-24 md:py-32">
        <p className="stamp text-ember mb-3">{t("kicker")}</p>
        <h2
          className="font-display text-offwhite leading-[0.95] mb-6"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
        >
          {t("title")}
        </h2>
        <p className="text-offwhite/85 max-w-2xl text-lg leading-relaxed">
          {t("intro")}
        </p>

        <a
          href={whatsappLink(locale)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 stamp text-black bg-ember hover:bg-offwhite transition-colors"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={1.8} />
          <span>{t("ponijetiCta")}</span>
        </a>

        <div className="mt-16 space-y-14">
          {categories.map((cat) => {
            const catItems = items.filter((i) => i.category === cat.id);
            if (catItems.length === 0) return null;
            return (
              <div key={cat.id}>
                <h3
                  className="font-display text-ember leading-tight mb-6"
                  style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)" }}
                >
                  {cat.name[locale]}
                </h3>
                <ul className="divide-y divide-black/25">
                  {catItems.map((item) => (
                    <li
                      key={item.id}
                      className="py-4 flex items-baseline gap-6"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-offwhite text-base md:text-lg leading-tight">
                          {item.name[locale]}
                        </p>
                        {item.description && (
                          <p className="mt-1 text-offwhite-muted text-sm leading-relaxed">
                            {item.description[locale]}
                          </p>
                        )}
                      </div>
                      <div className="font-sans text-offwhite text-base whitespace-nowrap tabular-nums">
                        {item.price.toFixed(2).replace(".", ",")} {menuData.currency}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="mt-12 stamp text-offwhite-muted/70 max-w-xl">
          {t("note")}
        </p>
      </div>
    </section>
  );
}
