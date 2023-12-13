'use client'
import { ReactNode, createContext, useContext, useState } from 'react';

type CardDetailsType = {
  children: ReactNode
};

type CardDetailsContextType = {
  isOpen: boolean;
  toggleOpen: () => void;
}

const CardDetailsContext = createContext({} as CardDetailsContextType);

function CardDetailsProvider({ children }: CardDetailsType) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    console.log('hi')
    setIsOpen(!isOpen);
  }

  return (
    <CardDetailsContext.Provider
      value={{
        isOpen,
        toggleOpen
      }}
    >
      {children}
    </CardDetailsContext.Provider>
  )
};

function useCardDetails() {
  return useContext(CardDetailsContext);
};

export { CardDetailsProvider, useCardDetails };
