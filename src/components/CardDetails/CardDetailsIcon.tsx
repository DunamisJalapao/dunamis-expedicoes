import { ComponentProps, ElementType } from "react"
import { twMerge } from "tailwind-merge"

type CardDetailsIconProps = ComponentProps<'div'> & {
  icon: ElementType
}
export function CardDetailsIcon({ icon: Icon, ...rest }: CardDetailsIconProps) {
  return (
    <div {...rest} className={twMerge("w-7 h-8", rest.className)}>
      <Icon className="h-full" />
    </div>
  )
}