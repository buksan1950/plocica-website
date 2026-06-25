import type { Metadata } from "next";
import { headers } from "next/headers";
import { DM_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { MetaPixel } from "@/components/MetaPixel";
import "./globals.css";

/**
 * Two-font law per spec §1.3.
 * - Display: Palmer Lake Print — self-hosted webfont, see @font-face in
 *   globals.css. The CSS variable --font-display points at it.
 * - Body:    DM Sans 300/400/500 via next/font/google.
 */
const dmSans = DM_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://plocicacevapi.hr"),
  title: "Pločica Pula",
  description: "Ćevapi u srcu pulske tržnice.",
};

async function resolveLocale(): Promise<"hr" | "en" | "it"> {
  const h = await headers();
  const path = h.get("x-pathname") ?? "/";
  const m = path.match(/^\/(hr|en|it)(\/|$)/);
  return (m?.[1] as "hr" | "en" | "it") ?? "hr";
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await resolveLocale();
  return (
    <html lang={locale} className={dmSans.variable}>
      <head>
        <MetaPixel />
      </head>
      <body className="bg-green-deep text-offwhite">{children}</body>
      <GoogleAnalytics gaId="G-GZ537YK79L" />
    </html>
  );
}
