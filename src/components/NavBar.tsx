'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { HTMLAttributes } from "react";
import { Link as LinkScroll } from 'react-scroll';
import { twMerge } from 'tailwind-merge';


type NavBarProps = HTMLAttributes<HTMLDivElement> & {
  isFooter?: boolean,
  callbackFunc?(): void;
}

export function NavBar({ isFooter = false, callbackFunc = () => { }, ...rest }: NavBarProps) {
  const pathname = usePathname();
  if (pathname === '/') {
    return (
      <div {...rest} className={twMerge("flex flex-col md:flex-row w-full uppercase gap-3 px-0 lg:px-18 2xl:px-32 text-lg font-bold items-center text-white justify-between", rest.className)}>
        <LinkScroll className="w-full" onClick={callbackFunc} to="container-home" smooth={true}> <p className="pb-1 cursor-pointer select-none border-b border-b-[#00000022] md:border-none">Início</p> </LinkScroll>
        <LinkScroll className="w-full" onClick={callbackFunc} to="container-about" smooth={true}> <p className="pb-1 cursor-pointer select-none border-b border-b-[#00000022] md:border-none">Sobre Nós</p> </LinkScroll>
        <LinkScroll className="w-full" onClick={callbackFunc} to="container-pack" smooth={true}> <p className="pb-1 cursor-pointer select-none border-b border-b-[#00000022] md:border-none">Roteiros</p> </LinkScroll>
        <LinkScroll className="w-full" onClick={callbackFunc} to="container-places" smooth={true}> <p className="pb-1 cursor-pointer select-none border-b border-b-[#00000022] md:border-none">Atrativos</p> </LinkScroll>
        <Link className="w-full" href="/gallery"> <p className="pb-1 cursor-pointer select-none border-b border-b-[#00000022] md:border-none">Galeria</p> </Link>
      </div>
    )
  }

  return (
    <div {...rest} className={twMerge("flex flex-col md:flex-row uppercase text-lg font-bold items-center text-white justify-around", rest.className)}>
      <Link className="w-full" href="/"> <p className="pb-1 cursor-pointer select-none border-b border-b-[#00000022] md:border-none">Início</p> </Link>
      <Link className="w-full" href="/"> <p className="pb-1 cursor-pointer select-none border-b border-b-[#00000022] md:border-none">Sobre Nós</p> </Link>
      <Link className="w-full" href="/"> <p className="pb-1 cursor-pointer select-none border-b border-b-[#00000022] md:border-none">Roteiros</p> </Link>
      <Link className="w-full" href="/"> <p className="pb-1 cursor-pointer select-none border-b border-b-[#00000022] md:border-none">Atrativos</p> </Link>
      <Link className="w-full" href="/gallery"> <p className="pb-1 cursor-pointer select-none border-b border-b-[#00000022] md:border-none">Galeria</p> </Link>
    </div>
  )

}