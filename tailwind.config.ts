import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pločica — derived from brand book (public/brand/plocica-brand-book.pdf).
        orange: "var(--orange)",
        green: {
          DEFAULT: "var(--green)",
          dark: "var(--green-dark)",
          deep: "var(--green-deep)",
        },
        tan: "var(--tan)",
        cream: "var(--cream)",
        offwhite: {
          DEFAULT: "var(--offwhite)",
          muted: "var(--offwhite-muted)",
        },
        black: "var(--black)",
        // Backwards-compat alias — components still reference text-ember/bg-ember
        ember: "var(--orange)",
      },
      fontFamily: {
        // Two-font law per spec §1.3.
        // - display: Palmer Lake (self-host). Placeholder: Modak (chunky
        //   rounded, supports latin-ext for Croatian diacritics).
        // - sans:    DM Sans 300/400/500.
        display: ["var(--font-display)", "Impact", "sans-serif"],
        sans: ["var(--font-dmsans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        stamp: "0.12em",
      },
    },
  },
  plugins: [],
};
export default config;
