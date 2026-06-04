import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pločica Pula",
  description: "Ćevapi u srcu pulske tržnice.",
  alternates: { canonical: "/hr/" },
  robots: { index: false, follow: false },
};

export default function RootRedirect() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-green-deep">
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace('/hr/');`,
        }}
      />
      <noscript>
        <a href="/hr/" className="stamp text-offwhite-muted hover:text-ember">
          PLOČICA — PULA · ENTER
        </a>
      </noscript>
    </main>
  );
}
