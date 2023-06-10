"use client"

import { Flex, FlexProps } from "@chakra-ui/react";
type PackType = FlexProps & {}

export function Pack({ ...rest }: PackType) {
  return (
    <Flex w="100vw" h="100vh" bg="blue.100" {...rest}>

    </Flex>
  )
}