import { cn } from "@/lib/utils";

export function rotatingStepCardClass(isFeatured: boolean) {
  return cn(
    "relative rounded-2xl border transition-all duration-300",
    "border-line/35 bg-bg-base/25",
    "hover:border-line hover:bg-bg-base/45 hover:shadow-[0_0_22px_-12px_rgba(245,197,107,0.15)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50",
    isFeatured &&
      "border-gold/35 bg-bg-base/55 shadow-[0_0_28px_-10px_rgba(245,197,107,0.22)] hover:bg-bg-base/55"
  );
}

export function rotatingStepTitleClass(isFeatured: boolean) {
  return cn(
    "transition-colors duration-300",
    isFeatured ? "text-gold" : "text-primary group-hover:text-gold"
  );
}
