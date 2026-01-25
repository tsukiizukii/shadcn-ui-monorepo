"use client";

import { cn } from "@workspace/ui/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative -z-10 flex h-fit flex-col items-center justify-center",
        "[--aurora:repeating-linear-gradient(100deg,var(--aurora-01)_10%,var(--aurora-02)_15%,var(--aurora-03)_20%,var(--aurora-04)_25%,var(--aurora-05)_30%)]",
        "[--aurora-01:var(--color-blue-500)]",
        "[--aurora-02:var(--color-indigo-300)]",
        "[--aurora-03:var(--color-blue-300)]",
        "[--aurora-04:var(--color-violet-200)]",
        "[--aurora-05:var(--color-blue-400)]",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className={cn(
            "[--light-gradient:repeating-linear-gradient(100deg,var(--color-white)_0%,var(--color-white)_7%,transparent_10%,transparent_12%,var(--color-white)_16%)]",
            "[--light-mode:var(--light-gradient),var(--aurora)]",
            "[--dark-gradient:repeating-linear-gradient(100deg,var(--color-black)_0%,var(--color-black)_7%,transparent_10%,transparent_12%,var(--color-black)_16%)]",
            "[--dark-mode:var(--dark-gradient),var(--aurora)]",
            "pointer-events-none absolute -inset-2.5 opacity-50 blur-md invert filter will-change-transform dark:opacity-20 dark:invert-0",
            "bg-(image:--light-mode) bg-size-[300%,200%] bg-center dark:bg-(image:--dark-mode)",
            "after:absolute after:inset-0 after:bg-size-[200%,100%] after:bg-fixed after:mix-blend-difference after:content-['']",
            "after:animate-aurora after:bg-(image:--light-mode) after:dark:bg-(image:--dark-mode)",
            showRadialGradient &&
              "mask-radial-from-10% mask-radial-to-70% mask-radial-at-top-right",
          )}
        ></div>
      </div>
      {children}
    </div>
  );
};
