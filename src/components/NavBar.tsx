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
    if (isFooter) {
      return (
        <div {...rest} className={twMerge("flex w-full flex-col ml-auto mr-auto uppercase gap-3 text-md font-bold text-white justify-around", rest.className)}>
          <LinkScroll onClick={callbackFunc} to="container-home" smooth={true}> <p className="pb-1 cursor-pointer select-none border-b border-b-[#00000022]">Início</p> </LinkScroll>
          <LinkScroll onClick={callbackFunc} to="container-about" smooth={true}> <p className="pb-1 cursor-pointer select-none border-b border-b-[#00000022]">Sobre Nós</p> </LinkScroll>
          <LinkScroll onClick={callbackFunc} to="container-pack" smooth={true}> <p className="pb-1 cursor-pointer select-none border-b border-b-[#00000022]">Roteiros</p> </LinkScroll>
          <LinkScroll onClick={callbackFunc} to="container-places" smooth={true}> <p className="pb-1 cursor-pointer select-none border-b border-b-[#00000022]">Atrativos</p> </LinkScroll>
          <Link href="/gallery"> <p className="pb-1 cursor-pointer select-none border-b border-b-[#00000022]">Galeria</p> </Link>
        </div>
      )
    }

    return (
      <div {...rest} className={twMerge("flex flex-col lg:flex-row uppercase gap-16 text-lg font-bold items-center text-white justify-around", rest.className)}>
        <LinkScroll onClick={callbackFunc} to="container-home" smooth={true}> <p className="pb-1 cursor-pointer select-none">Início</p> </LinkScroll>
        <LinkScroll onClick={callbackFunc} to="container-about" smooth={true}> <p className="pb-1 cursor-pointer select-none">Sobre Nós</p> </LinkScroll>
        <LinkScroll onClick={callbackFunc} to="container-pack" smooth={true}> <p className="pb-1 cursor-pointer select-none">Roteiros</p> </LinkScroll>
        <LinkScroll onClick={callbackFunc} to="container-places" smooth={true}> <p className="pb-1 cursor-pointer select-none">Atrativos</p> </LinkScroll>
        <Link href="/gallery"> <p className="pb-1 cursor-pointer select-none">Galeria</p> </Link>
      </div>
    )
  }

  if (isFooter) {
    return (
      <div {...rest} className={twMerge("flex w-full flex-col ml-auto mr-auto uppercase gap-3 text-md font-bold text-white justify-around", rest.className)}>
        <Link href="/"> <p className="pb-1 cursor-pointer select-none border-b border-b-[#00000022]">Início</p> </Link>
        <Link href="/"> <p className="pb-1 cursor-pointer select-none border-b border-b-[#00000022]">Sobre Nós</p> </Link>
        <Link href="/"> <p className="pb-1 cursor-pointer select-none border-b border-b-[#00000022]">Roteiros</p> </Link>
        <Link href="/"> <p className="pb-1 cursor-pointer select-none border-b border-b-[#00000022]">Atrativos</p> </Link>
        <Link href="/gallery"> <p className="pb-1 cursor-pointer select-none border-b border-b-[#00000022]">Galeria</p> </Link>
      </div>
    )
  }

  return (
    <div {...rest} className={twMerge("flex flex-col lg:flex-row uppercase gap-16 text-lg font-bold items-center text-white justify-around", rest.className)}>
      <Link href="/"> <p className="pb-1 cursor-pointer select-none">Início</p> </Link>
      <Link href="/"> <p className="pb-1 cursor-pointer select-none">Sobre Nós</p> </Link>
      <Link href="/"> <p className="pb-1 cursor-pointer select-none">Roteiros</p> </Link>
      <Link href="/"> <p className="pb-1 cursor-pointer select-none">Atrativos</p> </Link>
      <Link href="/gallery"> <p className="pb-1 cursor-pointer select-none">Galeria</p> </Link>
    </div>
  )

}