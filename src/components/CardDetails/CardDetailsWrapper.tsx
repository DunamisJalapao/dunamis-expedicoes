'use client'
import { ComponentProps, ReactNode } from "react";
import { twMerge } from 'tailwind-merge';
import { useCardDetails } from "./_context";

type CardDetailsWrapperProps = ComponentProps<'div'> & {
  children: ReactNode
}

export function CardDetailsWrapper({ children, ...rest }: CardDetailsWrapperProps) {
  const { isOpen } = useCardDetails();

  return (
    <div {...rest} data-open={isOpen} className={twMerge("flex flex-col h-[4rem] w-full px-4 py-3 data-[open=true]:h-[20rem] rounded-lg  overflow-hidden gap-2 items-center transition-all", rest.className)}>
      {children}
    </div>

  )
}