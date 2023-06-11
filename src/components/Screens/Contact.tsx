"use client"

import { Flex, FlexProps, Text } from "@chakra-ui/react";
import { ButtonPrimary } from "../ButtonPrimary";

type ContactType = FlexProps & {}

export function Contact({ ...rest }: ContactType) {
  return (
    <Flex
      w="100vw"
      h="60vh"
      bg="green.100"
      bgImage="/bg.jpeg"
      bgSize="cover"
      bgPos="center"
      pos="relative"
      {...rest}
    >
      <Flex
        w="full"
        h="full"
        bg="#2E5C2EC7"
        flexDir="column"
        align="center"
        justify="center"
        color="white"
        fontFamily="var(--font-lato)"
        fontSize="46px"
        gap={10}
      >
        <Text>Algum Duvida?</Text>
        <Text>Vamos tornar seus sonhos em realidade</Text>
        <ButtonPrimary w="16rem" h="4rem" />
      </Flex>

    </Flex>
  )
}