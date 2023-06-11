"use client"

import { Flex, FlexProps, Image, Text } from "@chakra-ui/react";

type AboutType = FlexProps & {}

export function About({ ...rest }: AboutType) {
  return (
    <Flex flexDir="column" align="center" justify="center" w="100vw" h="100vh" bg="#F8F8F8" {...rest}>
      <Text align="center" fontSize="5xl" color="#112126ff" textTransform="uppercase" fontWeight="bold" fontFamily="var(--font-lemonMilk)">Sobre Nós</Text>
      <Flex
        mt={14}
        px={96}
        gap={10}
        w="full"
        align="center"
      >
        <Flex w="50rem" h="40rem" borderRadius="25px" overflow="auto" boxShadow="0px 58px 50px -27px rgba(210, 181, 151, 1),0px 8px 100px 13px rgba(0,0,0,0.1)">
          <Image w="full" src="/dunamis.jpeg" objectFit="cover" />
        </Flex>
        <Flex w="50rem" h="40rem" >
          <Text fontSize="3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}