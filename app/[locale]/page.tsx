import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import Script from "next/script";

import { routing } from "@/i18n/routing";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileFooter } from "@/components/ui/StickyMobileFooter";
import { Hero } from "@/components/sections/Hero";
import { TheProduct } from "@/components/sections/TheProduct";
import { Provenance } from "@/components/sections/Provenance";
import { ThePlace } from "@/components/sections/ThePlace";
import { Validation } from "@/components/sections/Validation";
import { Gallery } from "@/components/sections/Gallery";
import { MenuSection } from "@/components/sections/Menu";
import { Order } from "@/components/sections/Order";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { Contact } from "@/components/sections/Contact";
import { RestaurantJsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  return (
    <>
      <RestaurantJsonLd />
      {plausibleDomain ? (
        <Script
          defer
          data-domain={plausibleDomain}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      ) : null}

      <Nav />

      <main id="main">
        <Hero />
        <TheProduct />
        <Provenance />
        <ThePlace />
        <Validation />
        <Gallery />
        <MenuSection />
        <Order />
        <BlogTeaser />
        <Contact />
      </main>

      <Footer />
      <StickyMobileFooter />
    </>
  );
}
