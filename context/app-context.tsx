"use client";

import { AppContextProps, SectionNameProps } from "@/types";
import { ReactNode, createContext, useContext, useMemo, useState } from "react";

export const AppContext = createContext<AppContextProps | null>(null);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState<SectionNameProps>("Home");

  const appContextValue = useMemo(() => {
    return { activeSection, setActiveSection };
  }, [activeSection, setActiveSection]);

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook to use this context
export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context == null) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }

  return context;
};
