import { useMemo, useSyncExternalStore } from "react";

/**
 * useMediaQuery : React Hooks
 * @param {string} query - The media query to track.
 * @param {boolean} defaultValue [options] false
 * @returns {boolean} boolean
 * @see {@link https://react.dev/reference/react/useMemo | React:useMemo}
 * @see {@link https://react.dev/reference/react/useSyncExternalStore | React:useSyncExternalStore}
 * @example
 * ```tsx
 * const isMoile = useMediaQuery('width < 768px');
 * ```
 */
export function useMediaQuery(
  query: string,
  defaultValue: boolean = false,
): boolean {
  const mediaQueryList = useMemo(
    () => (typeof window !== "undefined" ? window.matchMedia(query) : null),
    [query],
  );

  const subscribe = (callback: () => void) => {
    mediaQueryList?.addEventListener("change", callback);
    return () => mediaQueryList?.removeEventListener("change", callback);
  };

  const getSnapshot = (): boolean => {
    return mediaQueryList?.matches ?? false;
  };

  const getServerSnapshot = (): boolean => defaultValue;

  const result = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  return result;
}
