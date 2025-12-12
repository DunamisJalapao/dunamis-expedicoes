"use client"
import { createContext, ReactNode, useContext, useState } from "react";

interface UtilsProps {
  children: ReactNode;
}

type UtilsContextData = {
  isOpen: boolean,
  onToggle(value?: boolean): void;
};

const UtilsContext = createContext({} as UtilsContextData);

export function UtilsProvider({ children }: UtilsProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function onToggle(value = undefined) {
    if (value === undefined) setIsOpen(!isOpen);
    else setIsOpen(value);
  }

  return (
    <UtilsContext.Provider value={{
      isOpen,
      onToggle,
    }}>
      {children}
    </UtilsContext.Provider>
  )
};

export const useUtils = () => useContext(UtilsContext)