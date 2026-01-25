import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCssVariable(
  customProperty: string,
  fallback: string | null = null,
): string | null {
  if (typeof window === "undefined") {
    return fallback;
  }

  const styles = getComputedStyle(document.documentElement);
  const value = styles.getPropertyValue(customProperty).trim();

  return value || fallback;
}
