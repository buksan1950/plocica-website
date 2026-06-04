import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["hr", "en", "it"],
  defaultLocale: "hr",
});

export type Locale = (typeof routing.locales)[number];
