"use client";

import { useState } from "react";
import { MessageCircle, Share2, Link as LinkIcon, Check } from "lucide-react";

type Props = {
  title: string;
  labels: {
    share: string;
    copyLink: string;
    copied: string;
  };
};

export function SharePost({ title, labels }: Props) {
  const [copied, setCopied] = useState(false);

  function getUrl(): string {
    if (typeof window === "undefined") return "";
    return window.location.href;
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(getUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // noop — clipboard might be blocked
    }
  }

  const waText = encodeURIComponent(`${title} — ${getUrl()}`);
  const xText = encodeURIComponent(title);
  const xUrl = encodeURIComponent(getUrl());

  return (
    <div className="flex items-center gap-3 stamp text-offwhite-muted">
      <span>{labels.share}</span>
      <a
        href={`https://wa.me/?text=${waText}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="p-2 border border-offwhite/20 hover:border-orange hover:text-orange transition-colors"
      >
        <MessageCircle className="h-4 w-4" strokeWidth={1.8} />
      </a>
      <a
        href={`https://x.com/intent/tweet?text=${xText}&url=${xUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X / Twitter"
        className="p-2 border border-offwhite/20 hover:border-orange hover:text-orange transition-colors"
      >
        <Share2 className="h-4 w-4" strokeWidth={1.8} />
      </a>
      <button
        type="button"
        onClick={copy}
        aria-label={labels.copyLink}
        className="p-2 border border-offwhite/20 hover:border-orange hover:text-orange transition-colors"
      >
        {copied ? (
          <Check className="h-4 w-4" strokeWidth={2} />
        ) : (
          <LinkIcon className="h-4 w-4" strokeWidth={1.8} />
        )}
      </button>
      {copied && (
        <span className="text-orange normal-case tracking-normal text-xs">
          {labels.copied}
        </span>
      )}
    </div>
  );
}
