'use client'
import { ComponentProps, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type CardDetailsTitleProps = ComponentProps<'p'> & {
  children: ReactNode
}
export function CardDetailsTitle({ children, ...rest }: CardDetailsTitleProps) {
  return (
    <p {...rest} className={twMerge("font-sfprodisplay-semibold text-lg", rest.className)}>
      {children}
    </p>
  )
}