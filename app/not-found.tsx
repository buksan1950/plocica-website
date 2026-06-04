import Image from "next/image";
import Link from "next/link";

/**
 * Root 404 — fires for paths that aren't under /hr/, /en/ or /it/.
 * Bilingual fallback since we don't know the user's preferred locale here.
 */
export default function NotFound() {
  return (
    <main className="bg-green-deep min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center px-5 py-20">
        <div className="text-center max-w-xl">
          <div className="mx-auto mb-8 relative w-24 h-24 opacity-80">
            <Image
              src="/brand/plocica-logo.png"
              alt=""
              fill
              priority
              className="object-contain"
            />
          </div>
          <p className="stamp text-orange mb-4">404</p>
          <h1
            className="font-display text-offwhite leading-[0.95] mb-6"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
          >
            Stranica nije pečena.
          </h1>
          <p className="text-offwhite/70 text-base leading-relaxed mb-10">
            This page wasn't grilled. · Questa pagina non è grigliata.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/hr/"
              className="inline-flex items-center px-5 py-3 stamp text-black bg-orange hover:bg-offwhite transition-colors"
            >
              HR · Natrag
            </Link>
            <Link
              href="/en/"
              className="inline-flex items-center px-5 py-3 stamp text-offwhite border border-offwhite hover:bg-offwhite hover:text-green-deep transition-colors"
            >
              EN · Back
            </Link>
            <Link
              href="/it/"
              className="inline-flex items-center px-5 py-3 stamp text-offwhite border border-offwhite hover:bg-offwhite hover:text-green-deep transition-colors"
            >
              IT · Torna
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
