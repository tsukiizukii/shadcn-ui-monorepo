import { useSyncExternalStore } from "react";

type MediaQueries = Record<string, string>;

const defaultQueries: MediaQueries = {
  isMobile: "width < 768px",
  isTablet: "768px <= width <= 1024px",
  isDesktop: "1024px < width",
};

export function useMediaQueries<T extends MediaQueries>(mediaQueries?: T) {
  const queries = (mediaQueries ?? defaultQueries) as T;

  const mediaQueryLists =
    typeof window !== "undefined"
      ? Object.values(queries).map((query) => window.matchMedia(query))
      : null;

  const subscribe = (callback: () => void) => {
    mediaQueryLists?.forEach((list) =>
      list.addEventListener("change", callback),
    );
    return () =>
      mediaQueryLists?.forEach((list) =>
        list.removeEventListener("change", callback),
      );
  };

  const getSnapshot = (): boolean[] => {
    return mediaQueryLists?.map((list) => list.matches) ?? [];
  };

  const getServerSnapshot = (): boolean[] => [];

  const values = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  return (Object.keys(queries) as (keyof T)[]).reduce(
    (acc, key, index) => {
      acc[key] = values[index] as boolean;
      return acc;
    },
    {} as Record<keyof T, boolean>,
  );
}
