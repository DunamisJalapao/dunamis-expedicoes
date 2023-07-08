"use client"

import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ButtonPrimaryTypes = HTMLAttributes<HTMLButtonElement> & {}

export function ButtonPrimary({ ...rest }: ButtonPrimaryTypes) {
  return (
    // <Link href="https://api.whatsapp.com/send?phone=556392437096" target="_blank">

    <button {...rest} className={twMerge("w-[12rem] h-[3.4rem] rounded-xl bg-[#112126ff] text-white uppercase", rest.className)}>
      Contato
    </button>
  )
}