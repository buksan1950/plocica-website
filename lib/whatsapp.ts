/**
 * WhatsApp deep-link helper.
 *
 * Spec v1.2 §6 + §7: "Naruči za ponijeti" via WhatsApp is the primary
 * mobile order channel. It eliminates the phone-call barrier for foreign
 * tourists and is measurable.
 *
 * Phone numbers (per client feedback 2026-05-15 — Snježana's private line
 * removed from public copy):
 *   - Lokacija 1 (Tržnica, Narodni trg)  primary order line: +385 98 173 4718
 *   - Lokacija 2 (Podroom, Budicinova)   primary order line: +385 95 347 3593
 *
 * The Tržnica line is the "main" number for WhatsApp orders since it's the
 * original location; the Podroom line is shown on its own LocationCard.
 */

export const WHATSAPP_NUMBER = "385981734718";

export const PHONE_DISPLAY = "+385 98 173 4718";
export const PHONE_TEL = `tel:${PHONE_DISPLAY.replace(/\s+/g, "")}`;

export const PHONE_TRZNICA_DISPLAY = "+385 98 173 4718";
export const PHONE_TRZNICA_TEL = `tel:${PHONE_TRZNICA_DISPLAY.replace(/\s+/g, "")}`;

export const PHONE_PODROOM_DISPLAY = "+385 95 347 3593";
export const PHONE_PODROOM_TEL = `tel:${PHONE_PODROOM_DISPLAY.replace(/\s+/g, "")}`;

const PREFILL: Record<"hr" | "en" | "it", string> = {
  hr: "Zdravo! Želim naručiti za ponijeti: ",
  en: "Hi! I'd like to order for takeaway: ",
  it: "Buongiorno! Vorrei ordinare da asporto: ",
};

export function whatsappLink(locale: string): string {
  const key = (locale === "en" || locale === "it" ? locale : "hr") as
    | "hr"
    | "en"
    | "it";
  const text = encodeURIComponent(PREFILL[key]);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
