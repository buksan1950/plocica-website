"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { whatsappLink, PHONE_TEL } from "@/lib/whatsapp";

/**
 * Spec v1.2 §7: fixed mobile footer bar with 3 buttons —
 * WhatsApp / Call / Locations. Hidden while hero is in view.
 * z-index 50.
 */
export function StickyMobileFooter() {
  const t = useTranslations("stickyFooter");
  const locale = useLocale();
  const [heroInView, setHeroInView] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      setHeroInView(false);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setHeroInView(entry.isIntersecting),
      { rootMargin: "-80px 0px 0px 0px", threshold: 0 }
    );
    observer.observe(hero);
    observerRef.current = observer;
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={heroInView}
      className={`fixed inset-x-0 bottom-0 z-50 md:hidden transition-transform duration-300 ${
        heroInView ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="grid grid-cols-3 bg-ember text-black border-t border-black/40">
        <a
          href={whatsappLink(locale)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 hover:bg-offwhite transition-colors"
        >
          <MessageCircle className="h-5 w-5" strokeWidth={1.8} />
          <span className="stamp text-[0.65rem]">{t("whatsapp")}</span>
        </a>
        <a
          href={PHONE_TEL}
          className="flex flex-col items-center justify-center gap-1 py-3 border-x border-black/40 hover:bg-offwhite transition-colors"
        >
          <Phone className="h-5 w-5" strokeWidth={1.8} />
          <span className="stamp text-[0.65rem]">{t("call")}</span>
        </a>
        <a
          href="#order"
          className="flex flex-col items-center justify-center gap-1 py-3 hover:bg-offwhite transition-colors"
        >
          <MapPin className="h-5 w-5" strokeWidth={1.8} />
          <span className="stamp text-[0.65rem]">{t("locations")}</span>
        </a>
      </div>
    </div>
  );
}
