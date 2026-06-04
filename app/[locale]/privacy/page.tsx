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
  hr: { title: "Politika privatnosti · Pločica", description: "Politika privatnosti za Pločica Pula." },
  en: { title: "Privacy · Pločica", description: "Privacy notice for Pločica Pula." },
  it: { title: "Privacy · Pločica", description: "Informativa sulla privacy di Pločica Pola." },
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
      canonical: `/${locale}/privacy`,
      languages: {
        hr: "/hr/privacy",
        en: "/en/privacy",
        it: "/it/privacy",
      },
    },
    robots: { index: true, follow: true },
  };
}

export default async function PrivacyRoute({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  return <LegalPage kind="privacy" locale={locale as Locale} />;
}
