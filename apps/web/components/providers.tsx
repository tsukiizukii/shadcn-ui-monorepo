"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import * as React from "react";
import { createContext, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      <ScrollProvider>{children}</ScrollProvider>
    </NextThemesProvider>
  );
}

// ================================================================

type ScrollContextType = {
  isFooterInView: boolean;
  setIsFooterInView: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ScrollContext = createContext<ScrollContextType>({
  isFooterInView: false,
  setIsFooterInView: () => {},
});

function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [isFooterInView, setIsFooterInView] = useState(false);

  return (
    <ScrollContext.Provider value={{ isFooterInView, setIsFooterInView }}>
      {children}
    </ScrollContext.Provider>
  );
}

// ================================================================
