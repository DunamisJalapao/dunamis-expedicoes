import { useUtils } from "@/hooks/utils";
import { Flex, FlexProps, Text, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";
import { Link as LinkScroll } from 'react-scroll'


type NavBarProps = FlexProps & {
  isFooter?: boolean
}

export function NavBar({ isFooter = false, ...rest }: NavBarProps) {
  const { onToggle } = useUtils();
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  if (isFooter) {
    return (
      <Flex w="full" flexDir={'column'} ml="auto" mr="auto" textTransform="uppercase" gap={3} fontSize="14px" fontWeight="bold" color="white" justify="space-around" {...rest}>
        <LinkScroll to="container-home" smooth={true}> <Text pb={1} cursor="pointer" userSelect="none" borderBottom="1px solid #00000022">Início</Text> </LinkScroll>
        <LinkScroll to="container-about" smooth={true}> <Text pb={1} cursor="pointer" userSelect="none" borderBottom="1px solid #00000022">Sobre Nós</Text> </LinkScroll>
        <LinkScroll to="container-places" smooth={true}> <Text pb={1} cursor="pointer" userSelect="none" borderBottom="1px solid #00000022">Atrativos</Text> </LinkScroll>
        <Link href="/gallery"> <Text pb={1} cursor="pointer" userSelect="none" borderBottom="1px solid #00000022">Galeria</Text> </Link>
      </Flex>
    )
  }

  return (
    <Flex flexDir={isMobile ? 'column' : 'row'} ml="auto" mr="auto" textTransform="uppercase" gap={16} fontSize="20px" fontWeight="bold" align="center" color="white" justify="space-around" {...rest}>
      <LinkScroll to="container-home" smooth={true}> <Text cursor="pointer" userSelect="none">Início</Text> </LinkScroll>
      <LinkScroll to="container-about" smooth={true}> <Text cursor="pointer" userSelect="none">Sobre Nós</Text> </LinkScroll>
      <LinkScroll to="container-places" smooth={true}> <Text cursor="pointer" userSelect="none">Atrativos</Text> </LinkScroll>
      <Link href="/gallery"> <Text cursor="pointer" userSelect="none">Galeria</Text> </Link>
    </Flex>
  )
}