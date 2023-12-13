'use client'
import { ChevronDown } from 'lucide-react';
import { ComponentProps, ReactNode } from "react";
import { twMerge } from 'tailwind-merge';
import { useCardDetails } from './_context';


type CardDetailsTriggerProps = ComponentProps<'div'> & {
  children: ReactNode
}
export function CardDetailsTrigger({ children, ...rest }: CardDetailsTriggerProps) {
  const { toggleOpen, isOpen } = useCardDetails();

  return (
    <div {...rest} onClick={toggleOpen} className={twMerge("flex w-full min-h-[4rem] rounded-lg items-center gap-2 px-4 cursor-pointer select-none", rest.className)}>
      {children}
      <ChevronDown data-open={isOpen} className={`h-7 ml-auto data-[open=true]:rotate-90 transition-all`} />
    </div>
  )
}