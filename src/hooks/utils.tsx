'use client'
import { useMediaQuery } from "@chakra-ui/react";
import { createContext, ReactNode, useContext, useState } from "react";

interface UtilsProps {
  children: ReactNode;
}

type UtilsContextData = {
  isOpen: boolean,
  onToggle(value?: boolean): void;
  isMobile: boolean,
};

const UtilsContext = createContext({} as UtilsContextData);

export function UtilsProvider({ children }: UtilsProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile] = useMediaQuery("(max-width: 1024px)");

  function onToggle(value = undefined) {
    if (value === undefined) setIsOpen(!isOpen);
    else setIsOpen(value);

  }

  return (
    <UtilsContext.Provider value={{
      isOpen,
      onToggle,
      isMobile
    }}>
      {children}
    </UtilsContext.Provider>
  )
};

export const useUtils = () => useContext(UtilsContext)