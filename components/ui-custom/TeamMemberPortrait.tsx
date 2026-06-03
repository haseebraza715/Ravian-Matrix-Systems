"use client";

import Image from "next/image";
import { useState } from "react";

type TeamMemberPortraitProps = {
  src: string;
  alt: string;
  initials: string;
  width: number;
  height: number;
};

export function TeamMemberPortrait({
  src,
  alt,
  initials,
  width,
  height,
}: TeamMemberPortraitProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="mb-6 flex h-[184px] w-full shrink-0 items-center justify-center"
        aria-hidden
      >
        <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full border border-line/80 bg-white font-display text-[28px] font-semibold text-gold shadow-[0_8px_24px_-12px_rgba(11,18,32,0.12)]">
          {initials}
        </div>
      </div>
    );
  }

  return (
    <div className="relative mb-6 flex h-[220px] w-full shrink-0 items-end justify-center overflow-hidden bg-white">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 34vw, 240px"
        className="block h-auto max-h-[216px] w-auto max-w-[min(100%,240px)] object-contain object-bottom drop-shadow-[0_8px_18px_rgba(11,18,32,0.12)]"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
