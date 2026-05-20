import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  glow?: boolean;
  goldTop?: boolean;
  border?: boolean;
  premiumBorder?: boolean;
}

export function Card({
  children,
  className,
  hoverEffect = true,
  glow = false,
  goldTop = false,
  border = true,
  premiumBorder = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl transition-all duration-300 bg-bg-surface text-primary relative overflow-hidden",
        border && "border border-line",
        hoverEffect && "hover:bg-bg-elevated hover:-translate-y-[2px]",
        glow && "hover:shadow-[0_8px_30px_-8px_rgba(225,184,74,0.25)] hover:border-gold/20",
        goldTop && "card-gold-top",
        premiumBorder && "premium-border",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
