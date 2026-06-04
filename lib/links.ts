/**
 * External link registry. Verified live 2026-05-12.
 * Update here, not inline in components.
 */

export const LINKS = {
  // Delivery
  wolt: "https://wolt.com/en/hrv/pula/restaurant/plocica",
  glovo: "https://glovoapp.com/hr/en/pula/plocica-pula/",

  // Reviews + press — using the older listing (d24143365) which holds the
  // larger review pool (34 reviews, 4.6★ as of 2026-05-12). Snježana should
  // consider consolidating with the d28587752 listing on Tripadvisor.
  tripadvisor:
    "https://www.tripadvisor.com/Restaurant_Review-g295373-d24143365-Reviews-Plocica-Pula_Istria.html",
  plavaKamenica:
    "https://plavakamenica.hr/2024/07/23/nakon-posjeta-slavnog-chefa-u-pecenjari-plocica-na-pulskoj-trznici-je-ludnica-cevapi-su-im-zaista-jedni-od-najboljih-u-hrvatskoj/",
  glasIstre:
    "https://www.glasistre.hr/gastro/plocica-cevapi-na-drugaciji-nacin-kod-snjezane-i-mersima-u-paviljonu-na-pulskoj-trznici-812696",
  glasIstreHartwig:
    "https://www.glasistre.hr/pula/2024/08/07/renomirani-njemacki-chef-jan-hartwig-rekao-da-su-cevapi-koje-je-probao-u-puli-jedan-od-top-tri-stre-949747",
  ribafish:
    "https://ribafish.com/plocica-pula-izvrsni-cevapi-pored-trznice-po-domacoj-recepturi/",

  // Social
  instagram: "https://instagram.com/plocicacevapi",
  facebook: "https://www.facebook.com/plocicacevapi/",
  hartwigVideo: "https://www.youtube.com/watch?v=SLfxyvcnkO4",

  // Map queries — use formal street names that resolve cleanly on Google Maps.
  // Podroom is on "ulica Pina Budicina" (Pina Budicin street); "Budicinova"
  // is the colloquial short form and resolves unreliably for delivery drivers.
  mapTrznica: "Pločica, Narodni trg 9, Pula, Croatia",
  mapPodroom: "Ulica Pina Budicina 16, 52100 Pula, Croatia",
} as const;

export function mapsUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function mapsEmbedUrl(query: string): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}
