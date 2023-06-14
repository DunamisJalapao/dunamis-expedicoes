import { useUtils } from "@/hooks/utils";
import { Flex, FlexProps, Text, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";

type NavBarProps = FlexProps & {
  isFooter?: boolean
}

export function NavBar({ isFooter = false, ...rest }: NavBarProps) {
  const { onToggle } = useUtils();
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  function smoothScroll(target: string) {
    const element = document.getElementById(target);
    window.scrollTo({
      top: element!.offsetTop,
      behavior: 'smooth',
    });
  }

  const handleLinkClick = (target: string) => {
    setTimeout(() => {
      smoothScroll(target);
      onToggle(false);
    }, 100);
  };

  if (isFooter) {
    return (
      <Flex w="full" flexDir={'column'} ml="auto" mr="auto" textTransform="uppercase" gap={3} fontSize="14px" fontWeight="bold" color="white" justify="space-around" {...rest}>
        <Link href="#" onClick={() => handleLinkClick('container-home')}> <Text pb={1} borderBottom="1px solid #00000022">Início</Text> </Link>
        <Link href="#" onClick={() => handleLinkClick('container-about')}> <Text pb={1} borderBottom="1px solid #00000022">Sobre Nós</Text> </Link>
        <Link href="#" onClick={() => handleLinkClick('container-places')}> <Text pb={1} borderBottom="1px solid #00000022">Atrativos</Text> </Link>
        <Link href="/gallery"> <Text pb={1} borderBottom="1px solid #00000022">Galeria</Text> </Link>
      </Flex>
    )
  }

  return (
    <Flex flexDir={isMobile ? 'column' : 'row'} ml="auto" mr="auto" textTransform="uppercase" gap={16} fontSize="20px" fontWeight="bold" align="center" color="white" justify="space-around" {...rest}>
      <Link href="#" onClick={() => handleLinkClick('container-home')}> <Text>Início</Text> </Link>
      <Link href="#" onClick={() => handleLinkClick('container-about')}> <Text>Sobre Nós</Text> </Link>
      <Link href="#" onClick={() => handleLinkClick('container-places')}> <Text>Atrativos</Text> </Link>
      <Link href="/gallery"> <Text>Galeria</Text> </Link>
    </Flex>
  )
}