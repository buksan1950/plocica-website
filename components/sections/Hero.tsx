"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import photos from "@/data/photos.json";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

type Locale = "hr" | "en" | "it";

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale() as Locale;
  const heroAlt = photos.heroAlt[locale];

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] hero-bg overflow-hidden flex flex-col"
    >
      {/* Documentary hero — ćevapi on the grill (spec §1.6). */}
      <div className="absolute inset-0">
        <Image
          src={photos.hero}
          alt={heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Bottom gradient for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-deep via-green-deep/70 to-green-deep/20" />
        {/* Ember heat at lower left */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 25% 80%, rgba(241, 139, 37, 0.35) 0%, transparent 55%)",
          }}
        />
      </div>

      <div className="relative flex-1 flex flex-col justify-end px-5 pb-10 md:px-10 md:pb-16">
        <div className="mx-auto w-full max-w-7xl">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-display text-offwhite leading-[0.95] tracking-normal"
            style={{ fontSize: "clamp(4rem, 14vw, 9rem)" }}
          >
            {t("wordmark")}
          </motion.h1>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-4 h-px w-24 bg-ember"
          />
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="mt-5 font-display text-offwhite/90 max-w-2xl leading-tight"
            style={{ fontSize: "clamp(1.5rem, 3.4vw, 2.4rem)" }}
          >
            {t("tagline")}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#menu"
              className="inline-flex items-center px-5 py-3 stamp text-black bg-ember hover:bg-offwhite transition-colors"
            >
              {t("ctaMenu")}
            </a>
            <a
              href="#order"
              className="inline-flex items-center px-5 py-3 stamp text-offwhite border border-offwhite hover:bg-offwhite hover:text-green-deep transition-colors"
            >
              {t("ctaOrder")}
            </a>
          </motion.div>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="mt-12 stamp text-offwhite/80"
          >
            {t("stamp")}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
