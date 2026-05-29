import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function BrutalCard({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "border-[3px] border-ink bg-card shadow-brutal transition-transform duration-150 hover:translate-x-[2px] hover:translate-y-[2px]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" />
    </svg>
  );
}
