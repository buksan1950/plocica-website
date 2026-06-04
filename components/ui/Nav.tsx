"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Wordmark } from "./Wordmark";

const LINKS: Array<{ key: "menu" | "order"; href: string }> = [
  { key: "menu", href: "#menu" },
  { key: "order", href: "#order" },
];

export function Nav() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-green-dark focus:text-offwhite focus:px-3 focus:py-2 stamp"
      >
        {t("skipToContent")}
      </a>
      <header
        id="top"
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-green-dark/95 backdrop-blur-sm border-b border-black/40"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
          <Wordmark />
          <div className="hidden md:flex items-center gap-6">
            <LanguageSwitcher />
            <a
              href="#order"
              className="inline-flex items-center gap-2 px-4 py-2 stamp text-offwhite border border-ember hover:bg-ember transition-colors"
            >
              {t("order")}
            </a>
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={t("openMenu")}
            className="md:hidden inline-flex flex-col gap-1.5 p-2 -mr-2"
          >
            <span className="block h-px w-6 bg-offwhite" />
            <span className="block h-px w-6 bg-offwhite" />
            <span className="block h-px w-4 bg-offwhite ml-auto" />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-green-deep md:hidden flex flex-col">
          <div className="flex items-center justify-between px-5 py-4">
            <Wordmark />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t("closeMenu")}
              className="p-2 -mr-2 text-offwhite"
            >
              <span className="block relative h-6 w-6">
                <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-offwhite rotate-45" />
                <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-offwhite -rotate-45" />
              </span>
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-8 px-5">
            {LINKS.map((l) => (
              <a
                key={l.key}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-5xl text-offwhite hover:text-ember transition-colors"
              >
                {t(l.key)}
              </a>
            ))}
            <div className="mt-8">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
