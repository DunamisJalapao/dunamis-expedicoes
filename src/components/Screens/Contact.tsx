"use client"

import { Flex, FlexProps } from "@chakra-ui/react";

type ContactType = FlexProps & {}

export function Contact({ ...rest }: ContactType) {
  return (
    <Flex w="100vw" h="100vh" bg="green.100" {...rest}>

    </Flex>
  )
}