import { LINKS } from "@/lib/links";

/**
 * Spec v1.2 §4.2 — one JSON-LD Restaurant entry per location.
 *
 * Data confirmed 2026-05-12:
 *   Location 1 — Tržnica: Narodni trg 9, 52100 Pula. Daily 11:00–23:00.
 *                         Direct order +385 95 362 7218.
 *   Location 2 — Podroom: Budicinova 16 / Ulica Pina Budicina,
 *                         52100 Pula. Daily 11:00–22:00 (to 23:00 in summer).
 *                         Direct order +385 95 347 3593.
 *
 * Tripadvisor aggregateRating (2026-05-12): 4.6★ across 34 reviews on the
 * older "Pločica" listing. Sourced from
 * https://www.tripadvisor.com/Restaurant_Review-g295373-d24143365-...
 */
export function RestaurantJsonLd() {
  const sameAs = [
    LINKS.instagram,
    LINKS.facebook,
    LINKS.tripadvisor,
    LINKS.plavaKamenica,
    LINKS.glasIstre,
    LINKS.ribafish,
  ];

  const location1 = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": "https://plocicacevapi.hr/#trznica",
    name: "Pločica — Gradska Tržnica",
    image: "https://plocicacevapi.hr/og-image.png",
    url: "https://plocicacevapi.hr",
    telephone: "+385953627218",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Narodni trg 9",
      addressLocality: "Pula",
      postalCode: "52100",
      addressCountry: "HR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.8663817,
      longitude: 13.8493412,
    },
    openingHours: "Mo-Su 11:00-23:00",
    servesCuisine: ["Bosnian", "Balkan", "Croatian"],
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card",
    sameAs,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.6",
      reviewCount: "34",
      bestRating: "5",
      worstRating: "1",
    },
    hasDeliveryMethod: [
      { "@type": "DeliveryMethod", name: "Wolt", url: LINKS.wolt },
      { "@type": "DeliveryMethod", name: "Glovo", url: LINKS.glovo },
    ],
  };

  const location2 = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": "https://plocicacevapi.hr/#podroom",
    name: "Pločica u Podroomu",
    alternateName: "Pločica — Podroom",
    image: "https://plocicacevapi.hr/og-image.png",
    url: "https://plocicacevapi.hr",
    telephone: "+385953473593",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ulica Pina Budicina 16",
      addressLocality: "Pula",
      postalCode: "52100",
      addressCountry: "HR",
    },
    openingHours: "Mo-Su 11:00-22:00",
    servesCuisine: ["Bosnian", "Balkan", "Croatian"],
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card",
    sameAs,
    description:
      "Pločica's second location, in the former Podroom tapas bar space.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(location1) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(location2) }}
      />
    </>
  );
}
