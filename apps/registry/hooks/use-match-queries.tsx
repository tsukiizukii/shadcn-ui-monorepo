import { useSyncExternalStore } from "react";

export function useMediaQuery(query: string) {
  const createMediaQueryList = () =>
    typeof window !== "undefined" ? window.matchMedia(query) : null;

  const mediaQueryList = createMediaQueryList();

  const subscribe = (callback: () => void) => {
    mediaQueryList?.addEventListener("change", callback);
    return () => mediaQueryList?.removeEventListener("change", callback);
  };

  const getSnapshot = (): boolean => {
    return mediaQueryList?.matches ?? false;
  };

  const getServerSnapshot = (): boolean => false;

  const result = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  return result;
}
