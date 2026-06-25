import Link from "next/link";
import { Nav } from "@/components/ui/Nav";
import { Footer } from "@/components/ui/Footer";

type Locale = "hr" | "en" | "it";
type Kind = "privacy" | "imprint";

type Block = { heading?: string; body: string };

type LegalDoc = {
  kicker: string;
  title: string;
  blocks: Block[];
  backHome: string;
};

const CONTENT: Record<Kind, Record<Locale, LegalDoc>> = {
  privacy: {
    hr: {
      kicker: "Pravno",
      title: "Politika privatnosti",
      backHome: "Natrag na početnu",
      blocks: [
        {
          heading: "Voditelj obrade",
          body: "Pločica (vlasnica: Snježana Filiplić), Narodni trg 9, 52100 Pula, Hrvatska. Kontakt: plocica.cevapi@gmail.com.",
        },
        {
          heading: "Što prikupljamo",
          body: "Web stranica koristi Plausible Analytics, koji ne koristi kolačiće i ne prati pojedinačne korisnike. Putem web stranice ne prikupljamo osobne podatke.",
        },
        {
          heading: "WhatsApp, telefon i e-mail",
          body: "Kada nas kontaktirate izravno (WhatsApp, telefon, e-mail), vaše poruke koristimo isključivo za odgovor na vaš upit ili za obradu narudžbe. Ne dijelimo ih s trećim stranama.",
        },
        {
          heading: "Vaša prava (GDPR)",
          body: "Imate pravo na pristup, ispravak, brisanje i prigovor u vezi s podacima koje ste nam dostavili. Možete nas kontaktirati na gornju adresu.",
        },
        {
          body: "Posljednje ažurirano: 12. svibnja 2026.",
        },
      ],
    },
    en: {
      kicker: "Legal",
      title: "Privacy",
      backHome: "Back to home",
      blocks: [
        {
          heading: "Data controller",
          body: "Pločica (owner: Snježana Filiplić), Narodni trg 9, 52100 Pula, Croatia. Contact: plocica.cevapi@gmail.com.",
        },
        {
          heading: "What we collect",
          body: "This website uses Plausible Analytics, which is cookieless and does not track individual users. No personal data is collected via the website.",
        },
        {
          heading: "WhatsApp, phone and email",
          body: "When you contact us directly (WhatsApp, phone, email), we use your messages only to respond to your enquiry or process your order. We do not share them with third parties.",
        },
        {
          heading: "Your GDPR rights",
          body: "You have the right of access, rectification, erasure and objection regarding any data you have provided to us. Contact us at the address above.",
        },
        {
          body: "Last updated: 12 May 2026.",
        },
      ],
    },
    it: {
      kicker: "Legale",
      title: "Privacy",
      backHome: "Torna alla home",
      blocks: [
        {
          heading: "Titolare del trattamento",
          body: "Pločica (titolare: Snježana Filiplić), Narodni trg 9, 52100 Pola, Croazia. Contatto: plocica.cevapi@gmail.com.",
        },
        {
          heading: "Cosa raccogliamo",
          body: "Questo sito utilizza Plausible Analytics, che non usa cookie e non traccia gli utenti. Tramite il sito non raccogliamo dati personali.",
        },
        {
          heading: "WhatsApp, telefono ed email",
          body: "Quando ci contatti direttamente (WhatsApp, telefono, email), usiamo i tuoi messaggi solo per rispondere alla tua richiesta o per elaborare il tuo ordine. Non li condividiamo con terzi.",
        },
        {
          heading: "I tuoi diritti GDPR",
          body: "Hai diritto di accesso, rettifica, cancellazione e opposizione sui dati che ci hai fornito. Contattaci all'indirizzo sopra indicato.",
        },
        {
          body: "Ultimo aggiornamento: 12 maggio 2026.",
        },
      ],
    },
  },
  imprint: {
    hr: {
      kicker: "Pravno",
      title: "Impressum",
      backHome: "Natrag na početnu",
      blocks: [
        {
          heading: "Naziv obrta",
          body: "Pločica ugostiteljski objekt",
        },
        {
          heading: "Vlasnica obrta",
          body: "Snježana Filiplić",
        },
        {
          heading: "Roštilj i kuhinja",
          body: "Mersim Halilović",
        },
        {
          heading: "OIB",
          body: "09189015765",
        },
        {
          heading: "Sjedište",
          body: "Narodni trg 9, 52100 Pula, Hrvatska",
        },
        {
          heading: "Lokacije",
          body: "Pločica — Tržnica: Narodni trg 9, Pula\nPločica u Podroomu: Budicinova 16 (Pina Budicina), Pula",
        },
        {
          heading: "Kontakt",
          body: "Telefon: +385 98 173 4718\nE-mail: plocica.cevapi@gmail.com",
        },
      ],
    },
    en: {
      kicker: "Legal",
      title: "Imprint",
      backHome: "Back to home",
      blocks: [
        {
          heading: "Business name",
          body: "Pločica ugostiteljski objekt",
        },
        {
          heading: "Legal owner",
          body: "Snježana Filiplić",
        },
        {
          heading: "Grill and kitchen",
          body: "Mersim Halilović",
        },
        {
          heading: "OIB (Croatian tax ID)",
          body: "09189015765",
        },
        {
          heading: "Registered office",
          body: "Narodni trg 9, 52100 Pula, Croatia",
        },
        {
          heading: "Locations",
          body: "Pločica — Market Hall: Narodni trg 9, Pula\nPločica u Podroomu: Budicinova 16 (Pina Budicina), Pula",
        },
        {
          heading: "Contact",
          body: "Phone: +385 98 173 4718\nEmail: plocica.cevapi@gmail.com",
        },
      ],
    },
    it: {
      kicker: "Legale",
      title: "Note legali",
      backHome: "Torna alla home",
      blocks: [
        {
          heading: "Ragione sociale",
          body: "Pločica ugostiteljski objekt",
        },
        {
          heading: "Titolare",
          body: "Snježana Filiplić",
        },
        {
          heading: "Griglia e cucina",
          body: "Mersim Halilović",
        },
        {
          heading: "OIB (codice fiscale croato)",
          body: "09189015765",
        },
        {
          heading: "Sede legale",
          body: "Narodni trg 9, 52100 Pola, Croazia",
        },
        {
          heading: "Sedi",
          body: "Pločica — Mercato: Narodni trg 9, Pola\nPločica u Podroomu: Budicinova 16 (Pina Budicina), Pola",
        },
        {
          heading: "Contatti",
          body: "Telefono: +385 98 173 4718\nEmail: plocica.cevapi@gmail.com",
        },
      ],
    },
  },
};

export function LegalPage({
  kind,
  locale,
}: {
  kind: Kind;
  locale: Locale;
}) {
  const doc = CONTENT[kind][locale];

  return (
    <>
      <Nav />
      <main className="bg-green-deep min-h-screen pt-28 md:pt-32">
        <article className="mx-auto max-w-2xl px-5 md:px-10 py-12 md:py-20">
          <p className="stamp text-ember mb-4">{doc.kicker}</p>
          <h1
            className="font-display text-offwhite leading-[0.95] mb-12"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
          >
            {doc.title}
          </h1>

          <div className="space-y-8">
            {doc.blocks.map((b, i) => (
              <section key={i}>
                {b.heading && (
                  <h2 className="stamp text-offwhite-muted mb-2">
                    {b.heading}
                  </h2>
                )}
                <p className="text-offwhite/90 leading-relaxed whitespace-pre-line">
                  {b.body}
                </p>
              </section>
            ))}
          </div>

          <Link
            href={`/${locale}/`}
            className="mt-16 inline-flex items-center stamp text-ember hover:text-offwhite transition-colors"
          >
            ← {doc.backHome}
          </Link>
        </article>
      </main>
      <Footer />
    </>
  );
}
