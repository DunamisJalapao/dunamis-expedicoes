"use client"
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { ButtonPrimary } from "./ButtonPrimary";

export function Header() {
  return (
    <Flex
      w="full"
      h="5rem"
      bg="rgba(255,255,255,0.2)"
      borderRadius="2xl"
      backdropFilter='auto' backdropBlur='8px'
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
          <Text>Início</Text>
          <Text>Sobre Nós</Text>
          <Text>Roteiros</Text>
          <Text>Pacotes</Text>
        </Flex>

        <ButtonPrimary />
      </Flex>


    </Flex >
  )
}