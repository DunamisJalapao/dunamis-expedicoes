'use client'
import { ChevronDown } from "lucide-react";
import { HTMLAttributes, useState } from "react";
import { CollapseUI } from "../Material-UI";

type CollapseRootType = HTMLAttributes<HTMLDivElement> & {
  title: string;
  content: string;
}
export function CollapseRoot({ title, content, ...rest }: CollapseRootType) {
  const [open, setIsOpen] = useState<boolean>(false)
  const toggleOpen = () => setIsOpen(prev => !prev);
  return (
    <div {...rest} className="w-full px-4 py-3">
      <div className="flex justify-between cursor-pointer" onClick={toggleOpen}>
        <p className="font-lemon-milk">{title}</p>
        <ChevronDown className={`rotate-${open ? '180' : '0'} duration-100`} />
      </div>
      <CollapseUI open={open}>
        <div className="my-4 w-full">
          <p className="text-xl">
            {content}
          </p>
        </div>
      </CollapseUI>
    </div>

  )
}