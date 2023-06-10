"use client"

import { Flex, FlexProps, Image, Text } from "@chakra-ui/react";

type AboutType = FlexProps & {}

export function About({ ...rest }: AboutType) {
  return (
    <Flex flexDir="column" pb={24} pt={32} w="100vw" h="100vh" bg="yellow.100" {...rest}>
      <Text align="center" fontSize="5xl">Sobre Nós</Text>
      <Flex mt={14}>
        <Flex w="full">
          <Image src="/dunamis.jpeg" />
        </Flex>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </Text>
      </Flex>
    </Flex>
  )
}