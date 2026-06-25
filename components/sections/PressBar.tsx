const URL_PLAVA_KAMENICA =
  "https://plavakamenica.hr/2024/07/23/nakon-posjeta-slavnog-chefa-u-pecenjari-plocica-na-pulskoj-trznici-je-ludnica-cevapi-su-im-zaista-jedni-od-najboljih-u-hrvatskoj/";

const URL_DOBRA_HRANA =
  "https://www.jutarnji.hr/dobrahrana/price/zbog-ovih-cevapa-neki-u-pulu-dolaze-ciljano-a-chef-s-tri-michelinove-zvjezdice-rekao-je-da-su-u-top-3-street-fooda-koje-je-u-zivotu-probao-15484214";

const URL_JUTARNJI = URL_DOBRA_HRANA;

const URL_RIBAFISH =
  "https://ribafish.com/plocica-pula-izvrsni-cevapi-pored-trznice-po-domacoj-recepturi/";

const presses = [
  {
    name: "DOBRA HRANA",
    quote: "Jedni od najboljih ćevapa koje smo probali.",
    href: URL_DOBRA_HRANA,
  },
  {
    name: "PLAVA KAMENICA",
    quote: "Školski točna izvedba. Čisto meso. Bez prečaca.",
    href: URL_PLAVA_KAMENICA,
  },
  {
    name: "JUTARNJI LIST",
    quote: "Pločica je postala obavezna stanica svakog posjeta Puli.",
    href: URL_JUTARNJI,
  },
  {
    name: "RIBAFISH",
    quote: "Izvrsni ćevapi pored tržnice po domaćoj recepturi.",
    href: URL_RIBAFISH,
  },
];

export function PressBar() {
  return (
    <div className="bg-black border-b border-offwhite/10">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-8 md:py-10">
        <p className="stamp text-offwhite/30 text-[0.6rem] tracking-[0.2em] mb-6 text-center">
          PISALI O NAMA
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-offwhite/10">
          {presses.map((press) => {
            const inner = (
              <>
                <p className="stamp text-orange text-[0.7rem] tracking-[0.15em] mb-3">
                  {press.name}
                </p>
                <p
                  className="font-display text-offwhite leading-snug"
                  style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)" }}
                >
                  &ldquo;{press.quote}&rdquo;
                </p>
                {press.href && (
                  <span className="mt-3 inline-block stamp text-offwhite/40 text-[0.65rem] tracking-widest group-hover:text-orange transition-colors">
                    PROČITAJ ↗
                  </span>
                )}
              </>
            );

            return press.href ? (
              <a
                key={press.name}
                href={press.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col px-0 md:px-8 py-5 md:py-0 first:md:pl-0 last:md:pr-0 hover:bg-white/[0.02] transition-colors"
              >
                {inner}
              </a>
            ) : (
              <div
                key={press.name}
                className="flex flex-col px-0 md:px-8 py-5 md:py-0 first:md:pl-0 last:md:pr-0"
              >
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
