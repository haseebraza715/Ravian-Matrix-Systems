import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function BrandLogo({
  className,
  imageClassName,
  priority = false,
}: BrandLogoProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-md flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.3)] border border-line transition-all duration-300",
        className
      )}
    >
      <Image
        src="/r-logo.png"
        alt="Ravian Matrix Systems"
        width={1254}
        height={1254}
        className={cn("object-contain", imageClassName)}
        priority={priority}
      />
    </div>
  );
}
