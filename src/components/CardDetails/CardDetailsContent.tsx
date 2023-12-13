import { ComponentProps, ReactNode } from "react"
import { twMerge } from 'tailwind-merge'

type CardDetailsContentProps = ComponentProps<'div'> & {
  children: ReactNode
}
export function CardDetailsContent({ children, ...rest }: CardDetailsContentProps) {
  return (
    <div {...rest} className={twMerge("flex w-full h-[15rem] rounded-lg px-4 items-center gap-4 select-none", rest.className)}>
      {children}
    </div>
  )
}