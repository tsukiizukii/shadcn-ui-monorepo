import { useSyncExternalStore } from "react";

/**
 * @returns {boolean} boolean
 * @see {@link https://react.dev/reference/react/useSyncExternalStore | React:useSyncExternalStore}
 * @example
 * ```tsx
 *   const mounted = useMounted();
 * ```
 */
export function useMounted(): boolean {
  const subscribe = () => () => {};
  const getSnapshot = (): boolean => true;
  const getServerSnapshot = (): boolean => false;

  return useSyncExternalStore(
    subscribe,
    getSnapshot, // client side
    getServerSnapshot, // sever side
  );
}
