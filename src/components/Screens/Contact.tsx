"use client"

import { Flex, FlexProps, Text } from "@chakra-ui/react";
import { ButtonPrimary } from "../ButtonPrimary";

type ContactType = FlexProps & {}

export default function Contact({ ...rest }: ContactType) {
  return (
    <Flex
      w="100vw"
      h="60vh"
      flexDir="column"
      pos="relative"
    >
      <Flex
        w="full"
        h="full"
        bg="green.100"
        bgImage="/bg.jpeg"
        bgSize="cover"
        bgPos="center"
        bgAttachment={{ base: "inherit", md: "fixed" }}
        bgRepeat="no-repeat"
        {...rest}
      >
      </Flex>
      <Flex
        w="full"
        h="full"
        bg="#2E5C2EC7"
        flexDir="column"
        align="center"
        justify="center"
        color="white"
        fontFamily="var(--font-lato)"
        fontSize={{ base: "24px", md: "46px" }}
        textAlign="center"
        px={4}
        gap={10}
        pos="absolute"
      >
        <Text>Alguma Duvida?</Text>
        <Text>Vamos tornar seus sonhos em realidade</Text>
        <ButtonPrimary w="16rem" h="4rem" />
      </Flex>
    </Flex>
  )
}