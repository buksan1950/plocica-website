import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/Reveal";

type Card = { number: string; place: string; body: string };

export function Provenance() {
  const t = useTranslations("provenance");
  const cards = t.raw("cards") as Card[];

  return (
    <section id="provenance" className="relative bg-green-dark overflow-hidden">
      <div aria-hidden className="absolute inset-0 utensil-scatter" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-10 py-24 md:py-32">
        <div className="mb-14 flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="stamp text-ember mb-3">{t("kicker")}</p>
            <h2
              className="font-display text-offwhite leading-[0.95]"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
            >
              {t("title")}
            </h2>
          </div>
        </div>

        <div className="grid gap-px bg-black/40 border border-black/40 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <Reveal key={card.number} delay={i * 0.08}>
              <article className="bg-green-dark p-6 md:p-7 min-h-[14rem] flex flex-col h-full">
                <p className="stamp text-ember">{card.number}</p>
                <h3
                  className="mt-6 font-display text-offwhite leading-tight"
                  style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)" }}
                >
                  {card.place}
                </h3>
                <p className="mt-4 text-offwhite-muted text-sm leading-relaxed flex-1">
                  {card.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <RouteLine />
        </Reveal>
      </div>
    </section>
  );
}

function RouteLine() {
  return (
    <div className="mt-12 md:mt-16">
      <svg
        viewBox="0 0 800 120"
        className="w-full h-auto"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M40 70 C 180 10, 280 110, 400 50 S 640 90, 760 40"
          fill="none"
          stroke="var(--ember)"
          strokeWidth="1.5"
          strokeOpacity="0.7"
          strokeDasharray="4 5"
        />
        {[
          { x: 40, y: 70, label: "BANJALUKA" },
          { x: 270, y: 75, label: "ZLATIBOR" },
          { x: 500, y: 55, label: "MAKEDONIJA" },
          { x: 760, y: 40, label: "PULA" },
        ].map((n) => (
          <g key={n.label}>
            <circle cx={n.x} cy={n.y} r="4" fill="var(--ember)" />
            <text
              x={n.x}
              y={n.y + 22}
              fontFamily="var(--font-dmsans), system-ui, sans-serif"
              fontSize="9"
              fontWeight="500"
              fill="var(--offwhite-muted)"
              textAnchor="middle"
              letterSpacing="1.2"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
