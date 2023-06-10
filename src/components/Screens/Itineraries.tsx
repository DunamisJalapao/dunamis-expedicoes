"use client"

import { Flex, FlexProps } from "@chakra-ui/react";

type ItinerariesType = FlexProps & {}

export function Itineraries({ ...rest }) {
  return (
    <Flex w="100vw" h="100vh" bg="pink.100" {...rest}>

    </Flex>
  )
}