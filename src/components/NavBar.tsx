import { useUtils } from "@/hooks/utils";
import { Flex, FlexProps, Text, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";
import { HTMLAttributes } from "react";
import { Link as LinkScroll } from 'react-scroll'
import { twMerge } from 'tailwind-merge'


type NavBarProps = HTMLAttributes<HTMLDivElement> & {
  isFooter?: boolean
}

export function NavBar({ isFooter = false, ...rest }: NavBarProps) {

  if (isFooter) {
    return (
      <div {...rest} className={twMerge("flex w-full flex-col ml-auto mr-auto uppercase gap-3 text-md font-bold text-white justify-around", rest.className)}>
        <LinkScroll to="container-home" smooth={true}> <p className="pb-1 cursor-pointer select-none border-b border-b-[#00000022]">Início</p> </LinkScroll>
        <LinkScroll to="container-about" smooth={true}> <p className="pb-1 cursor-pointer select-none border-b border-b-[#00000022]">Sobre Nós</p> </LinkScroll>
        <LinkScroll to="container-places" smooth={true}> <p className="pb-1 cursor-pointer select-none border-b border-b-[#00000022]">Atrativos</p> </LinkScroll>
        <Link href="/gallery"> <p className="pb-1 cursor-pointer select-none border-b border-b-[#00000022]">Galeria</p> </Link>
      </div>
    )
  }

  return (
    <div {...rest} className={twMerge("flex flex-col md:flex-row uppercase gap-16 text-lg font-bold items-center text-white justify-around", rest.className)}>
      <LinkScroll to="container-home" smooth={true}> <p className="pb-1 cursor-pointer select-none">Início</p> </LinkScroll>
      <LinkScroll to="container-about" smooth={true}> <p className="pb-1 cursor-pointer select-none">Sobre Nós</p> </LinkScroll>
      <LinkScroll to="container-places" smooth={true}> <p className="pb-1 cursor-pointer select-none">Atrativos</p> </LinkScroll>
      <Link href="/gallery"> <p className="pb-1 cursor-pointer select-none">Galeria</p> </Link>
    </div>
  )
}