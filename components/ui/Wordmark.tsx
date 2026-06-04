import Image from "next/image";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      aria-label="Pločica"
      className={`inline-flex items-center gap-2 ${className}`}
    >
      <Image
        src="/brand/plocica-logo.png"
        alt=""
        width={68}
        height={68}
        priority
        className="h-[2.8rem] w-auto"
      />
      <span className="sr-only">Pločica</span>
    </a>
  );
}
