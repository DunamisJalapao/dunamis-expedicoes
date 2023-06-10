"use client"
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { ButtonPrimary } from "./ButtonPrimary";
import Link from "next/link";
import { useCallback } from "react";

export function Header() {

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
    }, 100);
  };
  return (
    <Flex
      w="full"
      h="5rem"
      bg="rgba(255,255,255,0.2)"
      borderRadius="2xl"
      backdropFilter='auto'
      backdropBlur='8px'
      px={"4rem"}
      align="center"
    >
      <Flex w="50%">

        <Image
          src="/assets/logo.png"
          w="5rem"
        />
      </Flex>

      <Flex
        w="full"
      >
        <Flex ml="auto" mr="auto" textTransform="uppercase" gap={16} fontSize="20px" fontWeight="bold" align="center" color="white" justify="space-around">
          <Link href="#" onClick={() => handleLinkClick('container-home')}> <Text>Início</Text> </Link>
          <Link href="#" onClick={() => handleLinkClick('container-itineraries')}> <Text>Roteiros</Text> </Link>
          <Link href="#" onClick={() => handleLinkClick('container-about')}> <Text>Sobre Nós</Text> </Link>
          <Link href="#" onClick={() => handleLinkClick('container-pack')}> <Text>Pacotes</Text> </Link>
        </Flex>

        <ButtonPrimary />
      </Flex>
    </Flex >
  )
}