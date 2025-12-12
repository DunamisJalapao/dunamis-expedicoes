"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useTransition,
} from "react";

interface UtilsProps {
  children: ReactNode;
}

type UtilsContextData = {
  isOpen: boolean;
  isPending: boolean;
  onToggle(value?: boolean): void;
};

const UtilsContext = createContext({} as UtilsContextData);

export function UtilsProvider({ children }: UtilsProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isPending, startTransitionLocal] = useTransition();

  /**
   * Otimizado para INP:
   * - Feedback visual imediato (setIsOpen síncrono)
   * - Work pesado em startTransition (não urgente)
   */
  function onToggle(value = undefined) {
    // Feedback visual IMEDIATO - não bloqueia paint
    const newValue = value === undefined ? !isOpen : value;

    // Atualização síncrona para feedback visual imediato
    setIsOpen(newValue);
  }

  return (
    <UtilsContext.Provider
      value={{
        isOpen,
        isPending,
        onToggle,
      }}
    >
      {children}
    </UtilsContext.Provider>
  );
}

export const useUtils = () => useContext(UtilsContext);
