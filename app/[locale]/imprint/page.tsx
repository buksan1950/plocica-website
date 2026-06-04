import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { LegalPage } from "@/components/sections/LegalPage";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const META: Record<Locale, { title: string; description: string }> = {
  hr: { title: "Impressum · Pločica", description: "Impressum za Pločica Pula." },
  en: { title: "Imprint · Pločica", description: "Imprint for Pločica Pula." },
  it: { title: "Note legali · Pločica", description: "Note legali di Pločica Pola." },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  return {
    ...META[locale as Locale],
    alternates: {
      canonical: `/${locale}/imprint`,
      languages: {
        hr: "/hr/imprint",
        en: "/en/imprint",
        it: "/it/imprint",
      },
    },
    robots: { index: true, follow: true },
  };
}

export default async function ImprintRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  return <LegalPage kind="imprint" locale={locale as Locale} />;
}
