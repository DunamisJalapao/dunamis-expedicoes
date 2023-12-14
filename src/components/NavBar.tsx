'use client'
import Link from "next/link";
import { HTMLAttributes } from "react";
import { twMerge } from 'tailwind-merge';


type NavBarProps = HTMLAttributes<HTMLDivElement> & {
}

export function NavBar({ ...rest }: NavBarProps) {

  return (
    <div {...rest} className={twMerge("flex flex-col md:flex-row uppercase text-lg font-bold items-center text-white justify-around", rest.className)}>
      <Link className="w-full" href="/#container-home"> <p className="pb-1 cursor-pointer select-none border-b border-b-[#00000022] md:border-none">Início</p> </Link>
      <Link className="w-full" href="/#container-pack"> <p className="pb-1 cursor-pointer select-none border-b border-b-[#00000022] md:border-none">Roteiros</p> </Link>
      <Link className="w-full" href="/#container-about"> <p className="pb-1 cursor-pointer select-none border-b border-b-[#00000022] md:border-none">Sobre Nós</p> </Link>
      <Link className="w-full" href="/#container-places"> <p className="pb-1 cursor-pointer select-none border-b border-b-[#00000022] md:border-none">Atrativos</p> </Link>
      <Link className="w-full" href="/gallery"> <p className="pb-1 cursor-pointer select-none border-b border-b-[#00000022] md:border-none">Galeria</p> </Link>
    </div>
  )

}